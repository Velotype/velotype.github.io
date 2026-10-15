import { Component, type EmptyAttrs, RenderTemplateArray } from "@velotype/velotype"

type Row = {
    id: number
    label: string
}
// What renderFunction returns, and handleUpdate receives: the parts that change
type RowRefs = {
    label: Text
}

class RowTable extends Component<EmptyAttrs> {
    #nextId = 1

    rows: RenderTemplateArray<Row, RowRefs> = new RenderTemplateArray<Row, RowRefs>({
        wrapperElementTag: "tbody",
        // Built once, then cloned for every row. It must not hold Components, RenderObjects, or event listeners.
        template: <tr><td class="id"></td><td class="label"></td><td><button type="button" class="remove">Remove</button></td></tr>,
        // Fill in a new clone, and return the references that handleUpdate needs
        renderFunction: (row: HTMLElement, data: Row) => {
            row.children[0].textContent = String(data.id)
            const label = document.createTextNode(data.label)
            row.children[1].appendChild(label)
            return {label}
        },
        // Update a row in place when setAt() changes its data. Without it, setAt() replaces the row with a new clone.
        handleUpdate: (_row, refs, _oldData, newData) => {
            refs.label.data = newData.label
        },
        // One listener per event, on the wrapper element, called with the row, its data, and its index.
        // Only events that bubble can be listened for.
        on: {
            click: (event, _row, _data, index) => {
                if ((event.target as HTMLElement).closest(".remove")) {
                    this.rows.deleteAt(index)
                }
            },
        },
    })

    override render() {
        return <div>
            <button type="button" onClick={() => this.rows.push({id: this.#nextId++, label: "New row"})}>Add row</button>
            <button type="button" onClick={() => {
                if (this.rows.length > 0) {
                    this.rows.setAt(0, {id: this.rows.getAt(0).id, label: "Renamed row"})
                }
            }}>Rename first row</button>
            <button type="button" onClick={() => this.rows.swap(0, 1)}>Swap first two rows</button>
            <button type="button" onClick={() => this.rows.clear()}>Clear</button>
            <table>{this.rows}</table>
        </div>
    }
}
void RowTable
