# Islands

A page can be mostly static HTML from the server, with interactive parts, called islands, that velotype takes over in the browser.

There is no hydration step that turns the server's HTML into live components. The server renders the markup for each island, and the data its component is created with. The browser then creates the component from the data and swaps it in with `replaceElementWithRoot()`. The server's HTML is shown until the swap, which happens in one step when the page's script runs.

## The server half

The server writes two things for each island: its markup, in an element with an `id`, and its data, as JSON in a `<script type="application/json">` next to it. The JSON is written so that no string in it can end the script early, which is why the data below can contain `</script>`.

Keep the server's markup the same structure as what the browser component renders, so that nothing moves when the island is replaced.

```tsx
import { type ChildrenAttr, prepareHTMLVNodeForRendering, renderServerVNode, type ServerVNode, type StaticServerComponent } from "@velotype/velossr"

type CounterData = {start: number, label: string}

// The server's markup for the counter, the same structure the client Component renders
const CounterMarkup: StaticServerComponent<CounterData> = function(attrs) {
    return <div class="counter"><span>{attrs.label}: {attrs.start}</span><input name="note"/><button type="button">+1</button></div>
}

/** Server-rendered markup for a client Component, and the data the client creates it with */
const Island: StaticServerComponent<{id: string, data: unknown} & ChildrenAttr> = function(attrs, children): ServerVNode {
    return [
        <div id={attrs.id}>{children}</div>,
        <script type="application/json" id={attrs.id + "-data"}>{JSON.stringify(attrs.data)}</script>,
    ]
}

const data: CounterData = {start: 5, label: "Clicks </script> & <b>"}
const page = <html><body>
    <Island id="counter" data={data}><CounterMarkup {...data}/></Island>
    <script type="module" src="/main.js"></script>
</body></html>

const output = renderServerVNode(prepareHTMLVNodeForRendering(page), new Request("http://localhost/"), {})
console.log(new TextDecoder().decode(await output.toUint8Array()))
```
Output:

```text
<!DOCTYPE html><html><body><div id="counter"><div class="counter"><span>Clicks &lt;/script> &amp; &lt;b>: 5</span><input name="note"><button type="button">+1</button></div></div><script type="application/json" id="counter-data">{"start":5,"label":"Clicks \u003c/script> & <b>"}</script><script type="module" src="/main.js"></script></body></html>
```
## The browser half

The browser half is in the [velotype docs](/docs/velotype/server-rendering/). It reads each island's data, creates the component, copies what the visitor typed into the server's form fields, and swaps the element in.
