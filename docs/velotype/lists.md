# Lists

velotype has two list types. Both hold an Array of data points, and both render, move, and remove only the rows that changed. They have the same methods.

| | RenderObjectArray | RenderTemplateArray |
|---|---|---|
| A row is | rendered by TSX, by its own RenderObject | a clone of a template element, filled in with DOM APIs |
| Rows can hold | Components, RenderObjects, RenderBasics, and TSX event handlers | plain markup only |
| Row events | TSX handlers on elements in the row | `on`, one listener per event on the wrapper element |
| Fastest for | lists of rich rows | long or frequently rebuilt lists of plain rows |

Use RenderObjectArray when rows need Components, RenderObjects, or RenderBasics inside them, their own `mount()` and `unmount()`, or TSX event handlers. Use RenderTemplateArray for long or frequently rebuilt lists of plain markup, such as tables, logs, and search results, where each row is the same structure with a few changing values. In js-framework-benchmark it creates and replaces rows with about a quarter of the script time of RenderObjectArray, and clears rows in about half the time.

## RenderObjectArray

`new RenderObjectArray<DataType>({renderFunction})` renders each data point with its own RenderObject. The rows go into a wrapper element, which is a `<div style="display:contents;">` unless you pass `wrapperElementTag`. A named tag is created unstyled, and `wrapperAttrs` sets attributes on it.

```tsx
import { Component, type EmptyAttrs, RenderBasic, RenderObjectArray } from "@velotype/velotype"

type Todo = {
    text: string
}

class TodoList extends Component<EmptyAttrs> {
    // Each row is rendered by its own RenderObject, so a row can hold Components and RenderObjects,
    // and use TSX event handlers
    todos: RenderObjectArray<Todo> = new RenderObjectArray<Todo>({
        wrapperElementTag: "ul",
        renderFunction: (todo: Todo) => {
            const done = new RenderBasic<string>("")
            return <li>
                {todo.text}{done}
                <button type="button" onClick={() => done.value = " (done)"}>Done</button>
                <button type="button" onClick={() => this.todos.delete(todo)}>Remove</button>
            </li>
        },
    })
    textInput: HTMLInputElement = <input/>

    addTodo = () => {
        this.todos.push({text: this.textInput.value})
        this.textInput.value = ""
    }

    override render() {
        return <form onSubmit={this.addTodo} action="javascript:">
            <label>
                <span>Add Todo</span>
                {this.textInput}
            </label>
            <button type="submit">Add</button>
            {this.todos}
        </form>
    }
}
void TodoList
```
The options are `wrapperElementTag`, `wrapperAttrs`, `renderFunction`, and `handleUpdate` (the same advanced update function as [RenderObject](/docs/velotype/render-objects/#updating-in-place-with-handleupdate)).

## RenderTemplateArray

`new RenderTemplateArray<DataType, UpdateRefsType>({template, renderFunction})` builds a template element once, and every row is a `cloneNode()` of it that `renderFunction` fills in. It has no per-row bookkeeping to do when rows are created, updated, or removed, which is why it is fast.

```tsx
import { Component, type EmptyAttrs, RenderTemplateArray } from "@velotype/velotype"

type Server = {
    name: string
    cpu: number
}

class ServerList extends Component<EmptyAttrs> {
    // Rows are clones of the template. renderFunction fills in each new clone with DOM APIs.
    servers = new RenderTemplateArray<Server, null>({
        wrapperElementTag: "ul",
        template: <li></li>,
        renderFunction: (row: HTMLElement, server: Server) => {
            row.textContent = `${server.name} ${server.cpu}%`
            return null
        },
    })

    override mount() {
        this.servers.pushAll([
            {name: "eu-west-1", cpu: 40},
            {name: "us-east-1", cpu: 75},
            {name: "ap-south-1", cpu: 12},
        ])
    }

    override render() {
        return <div>
            <input type="search" placeholder="Filter" onInput={(event) => {
                const text = (event.target as HTMLInputElement).value
                // Rows that do not match are taken out of the page. filter(undefined) shows them all again.
                this.servers.filter(text === "" ? undefined : server => server.name.includes(text))
            }}/>
            <button type="button" onClick={() => this.servers.sort((a, b) => b.cpu - a.cpu)}>Busiest first</button>
            <button type="button" onClick={() => this.servers.move(this.servers.length - 1, 0)}>Last to top</button>
            {this.servers}
        </div>
    }
}
void ServerList
```
### Rules for templates

* The template must not contain Components, RenderObjects, or event listeners. `cloneNode()` does not copy event listeners
* Listen for row events with `on`, which adds one listener per event to the wrapper element and calls it with the event, the row element, its data, and its index. Only events that bubble can be listened for (use `focusin` and `focusout` instead of `focus` and `blur`)
* `renderFunction` fills in a new clone with DOM APIs and returns the references that `handleUpdate` needs
* `setAt()` calls `handleUpdate` to update a row in place. Without `handleUpdate`, the row is replaced with a new clone

```tsx
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
```
The options are `wrapperElementTag`, `wrapperAttrs`, `template`, `renderFunction`, `handleUpdate`, and `on`.

## Changing the Array

Every method changes the data and the page together.

| Method | Does |
|---|---|
| `push(data)` | Adds one data point to the end |
| `pushAll(data[])` | Adds several data points to the end |
| `insertAt(index, data)` | Inserts one data point before the data point at `index` |
| `insertAllAt(index, data[])` | Inserts several data points, in order, before the data point at `index` |
| `deleteAt(startIndex, deleteCount?)` | Removes the data point at `startIndex`, or `deleteCount` of them |
| `delete(data)` | Removes the first data point that is `data`, in linear time |
| `getAt(index)` | Reads the data point at `index` |
| `setAt(index, data)` | Replaces the data point at `index` |
| `swap(indexA, indexB)` | Swaps two data points and their rows |
| `move(from, to)` | Moves a data point so that it ends up at index `to` |
| `sort(compareFn)` | Sorts the data points, stably |
| `reorder(indexes)` | Puts the data points in any new order |
| `filter(predicate?)` | Shows only the data points that match |
| `clear()` | Removes every data point |
| `length` | The number of data points |

`insertAt()` and `insertAllAt()` are separate methods so that a data point can itself be an Array. Their `index` runs from `0` to `length`, or counts from the end when negative, as `Array.splice()` does.

```tsx
import { RenderObjectArray, RenderTemplateArray } from "@velotype/velotype"

// RenderObjectArray and RenderTemplateArray have the same methods.
// Only the rows that are affected are rendered, moved, or removed.
const letters = new RenderObjectArray<string>({
    wrapperElementTag: "ul",
    renderFunction: (letter: string) => <li>{letter}</li>,
})
const wrapper = <div>{letters}</div>
document.body.append(wrapper)

letters.push("b")                     // b
letters.pushAll(["c", "d"])           // b c d
letters.insertAt(0, "a")              // a b c d
letters.insertAllAt(4, ["e", "f"])    // a b c d e f
letters.insertAt(-1, "x")             // a b c d e x f   (negative counts from the end, as Array.splice() does)

console.log(letters.length)           // 7
console.log(letters.getAt(2))         // "c"

letters.setAt(5, "e2")                // a b c d e e2 f   (replaces the data point at an index)
letters.delete("e2")                  // a b c d e f      (removes the first data point that is this value)
letters.deleteAt(5)                   // a b c d e        (removes the data point at an index)
letters.deleteAt(0, 2)                // c d e            (removes 2 data points from index 0)

letters.swap(0, 1)                    // d c e
letters.move(0, 2)                    // c e d            (the moved data point ends up at index 2)

// sort() is stable, and moves only the rows that change places
letters.sort((a, b) => a.localeCompare(b))

// reorder() puts the data points in any order: afterwards the data point at index k is the one
// that was at indexes[k]. It throws a RangeError unless indexes holds each index once.
const count = letters.length
letters.reorder(Array.from({length: count}, (_, index) => count - 1 - index))

// filter() takes the rows that do not match out of the page, and filter(undefined) shows them all
// again. Indexes and length still count every data point.
letters.filter(letter => letter !== "d")
letters.filter(undefined)

letters.clear()

// A RenderTemplateArray is used the same way
const numbers = new RenderTemplateArray<number, null>({
    wrapperElementTag: "ol",
    template: <li></li>,
    renderFunction: (row: HTMLElement, value: number) => {
        row.textContent = String(value)
        return null
    },
})
numbers.pushAll([3, 1, 2])
numbers.sort((a, b) => a - b)
document.body.append(<div>{numbers}</div>)
```
### Sorting, moving, and filtering

These change the order of the rows, or which rows are shown, by moving the rows that are already rendered. They never render them again.

* `sort(compareFn)` sorts the data points as `Array.sort()` does, and it is stable. Only the rows that change places are moved, so re-sorting a list that is nearly in order, such as a table sorted by a column that a few `setAt()` calls changed, moves only those rows
* `reorder(indexes)` puts the data points in any new order: afterwards the data point at index `k` is the one that was at `indexes[k]`. It throws a `RangeError` unless `indexes` holds each index from `0` to `length - 1` once. Like `sort()`, it moves only the rows that change places
* `move(from, to)` moves one data point and its rows, so that it ends up at index `to`, as removing it with `splice(from, 1)` and inserting it with `splice(to, 0, data)` would
* `filter(predicate)` shows only the data points that `predicate` returns true for, and `filter(undefined)` shows them all again

When a filter is set, the other data points stay in the Array with their rows kept out of the page, so showing them again moves those rows back. Indexes, in `getAt()`, `setAt()`, `swap()`, the `on` listeners of a RenderTemplateArray, and the rest, still count every data point, and `length` is the length of the whole Array.

The predicate is applied to data points added later, and to one changed with `setAt()`. Call `filter()` again when what it tests for has changed, such as the text in a search box.

In a RenderObjectArray, the Components in a row that is filtered out stay mounted while it is out of the page, and a row added while filtered out mounts when it is first shown.

Taking rows out of the page is faster than hiding them with `hidden` or `display: none`: the browser does less work for each change when a list has fewer rows, and showing them again is faster than rendering them again.

## Very long lists

An update renders only the rows that changed, but one update that renders thousands of rows is still slow. Use RenderTemplateArray for the rows, and add them in batches, giving the browser a chance to paint and handle input between batches. `insertAllAt()` does the same at a position other than the end.

```tsx
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
```
Where it is supported, `await scheduler.yield()` instead of `setTimeout()` resumes sooner after the browser has handled input. Work that is slow without rendering anything, such as parsing or sorting a large data set, belongs in a Web Worker.
