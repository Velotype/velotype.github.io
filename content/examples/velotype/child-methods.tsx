import { Component, type EmptyAttrs } from "@velotype/velotype"

// A Component's child methods change one element inside what it rendered, without a refresh().
// Each takes an element from this Component's render, mounts what it inserts, and unmounts what
// it removes.
export class Panel extends Component<EmptyAttrs> {
    body: HTMLElement = <div>Loading...</div>
    list: HTMLUListElement = <ul><li>second</li></ul>
    note: HTMLElement = <p>A note that is removed later</p>

    override mount() {
        fetch("/panel", {signal: this.unmountSignal}).then(response => response.text()).then(text => {
            // replaceChild() returns the new element
            this.body = this.replaceChild(this.body, <div>{text}</div>) as HTMLElement

            // add to the end or start of an element
            this.appendToChild(this.list, <li>third</li>)
            this.prependToChild(this.list, <li>first</li>)

            // replace all of an element's children
            this.replaceChildrenOfChild(this.list, [<li>one</li>, <li>two</li>])

            // remove an element. These return false (replaceChild() returns the child) and change
            // nothing when the element is not part of this Component's render.
            const removed: boolean = this.removeChild(this.note)
            console.log("removed", removed)
        })
    }

    override render() {
        return <section>
            {this.body}
            {this.list}
            {this.note}
        </section>
    }
}
