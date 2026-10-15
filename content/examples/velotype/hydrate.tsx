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
