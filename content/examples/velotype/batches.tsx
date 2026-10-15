import { Component, type EmptyAttrs, RenderTemplateArray } from "@velotype/velotype"

// Add thousands of rows in batches, giving the browser a chance to paint and handle input between batches
export async function pushInBatches<DataType>(array: {pushAll(data: DataType[]): void}, data: DataType[], batchSize = 1000) {
    for (let index = 0; index < data.length; index += batchSize) {
        array.pushAll(data.slice(index, index + batchSize))
        // Let the browser paint and handle input before the next batch
        await new Promise((resolve) => setTimeout(resolve, 0))
    }
}

class BigList extends Component<EmptyAttrs> {
    rows = new RenderTemplateArray<number, null>({
        wrapperElementTag: "ul",
        template: <li></li>,
        renderFunction: (row: HTMLElement, value: number) => {
            row.textContent = `Row ${value}`
            return null
        },
    })

    override mount() {
        pushInBatches(this.rows, Array.from({length: 10000}, (_, index) => index))
    }

    override render() {
        return <div>{this.rows}</div>
    }
}
void BigList
