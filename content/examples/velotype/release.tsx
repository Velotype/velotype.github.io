import { Component, type EmptyAttrs, RenderObject, RenderObjectArray, replaceElementWithRoot } from "@velotype/velotype"

// velotype releases the RenderObjects in a Component's public fields when it unmounts. Any other
// is released by the code that made it.

// A #private field: released in unmount() with release()
class Notes extends Component<EmptyAttrs> {
    #notes = new RenderObjectArray<string>({renderFunction: (note: string) => <li>{note}</li>})

    override unmount() {
        this.#notes.release()
    }

    override render() {
        return <div>
            <button type="button" onClick={() => this.#notes.push(`Note ${this.#notes.length + 1}`)}>Add a note</button>
            <ul>{this.#notes}</ul>
        </div>
    }
}

// Made while drawing: listed in vtwith on an element drawn with it, here the function's root,
// and released when that element leaves the page
function Counter(attrs: {label: string}) {
    const count = new RenderObject<number>(0, (n: number) => <strong>{String(n)}</strong>)
    return <p vtwith={[count]}>
        {attrs.label}: {count} <button type="button" onClick={() => count.set(count.get() + 1)}>+1</button>
    </p>
}

replaceElementWithRoot(<div>
    <Notes/>
    <Counter label="Clicks"/>
</div>, document.getElementById("app"))
