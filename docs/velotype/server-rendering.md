# Server rendering

Velotype renders in the browser. To send a page's HTML from the server, render it with [velossr](/docs/velossr/), the server-side version of Velotype. It has its own components built for rendering on the server: static parts are prepared once, and async parts are streamed.

## No hydration step

There is no hydration step that turns the server's HTML into live Velotype Components. Velotype creates elements as TSX runs, so the interactive parts of a page are rendered again in the browser, and each one replaces the server's HTML for it with `replaceElementWithRoot()`. Rendering again is fast, the swap happens in one step when the page's script runs, and the server's HTML is shown until then.

This is the island pattern:

1. The server renders the markup for each interactive part (an island), and the data its Component is created with, as JSON in a `<script type="application/json">`
2. The browser creates each island's Component from its data and swaps it in, keeping what the user typed into the server's form fields before the script ran

The server half is in the [velossr docs](/docs/velossr/). This is the browser half:

```tsx
import { Component, RenderBasic, replaceElementWithRoot } from "@velotype/velotype"

type CounterData = {start: number, label: string}

class Counter extends Component<CounterData> {
    count = new RenderBasic<number>(this.attrs.start)

    override render(attrs: Readonly<CounterData>) {
        return <div class="counter">
            <span>{attrs.label}: {this.count}</span>
            <input name="note"/>
            <button type="button" onClick={() => { this.count.value += 1 }}>+1</button>
        </div>
    }
}

/** Replace the server-rendered island id with the element that render creates from the island's data */
function hydrate<DataType>(id: string, render: (data: DataType) => HTMLElement): void {
    const serverElement = document.getElementById(id)
    const dataElement = document.getElementById(id + "-data")
    if (!serverElement || !dataElement) {
        return
    }
    const element = render(JSON.parse(dataElement.textContent || "null"))
    // Keep what the user typed or picked before this script ran, pairing form fields by their order
    const fields = "input, textarea, select"
    const serverFields = serverElement.querySelectorAll<HTMLInputElement>(fields)
    const newFields = element.querySelectorAll<HTMLInputElement>(fields)
    let focused: HTMLElement | null = null
    for (let i = 0; i < serverFields.length && i < newFields.length; i++) {
        newFields[i].value = serverFields[i].value
        newFields[i].checked = serverFields[i].checked
        if (serverFields[i] === document.activeElement) {
            focused = newFields[i]
        }
    }
    replaceElementWithRoot(element, serverElement)
    if (focused) {
        focused.focus()
    }
}

hydrate<CounterData>("counter", data => <Counter {...data}/>)
```
* Keep the server's markup and the Component's render the same structure, so that nothing moves when the island is replaced
* The server and browser files use different JSX settings (`"jsxImportSource": "@velotype/velossr"` and `"@velotype/velotype"`), so keep them in separate directories with their own `deno.json`, or set it per file with a `/** @jsxImportSource @velotype/velossr */` comment
