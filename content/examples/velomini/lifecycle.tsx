import { Component, type EmptyAttrs, replaceElement } from "@velotype/velomini/tsx-mini"

class Clock extends Component<EmptyAttrs> {
    time = new Date().toLocaleTimeString()
    timer?: number

    // Called just after the Component is attached to the DOM
    override mount() {
        console.log("mounted")
        this.timer = setInterval(() => {
            this.time = new Date().toLocaleTimeString()
            // Unmounts and deletes the Component's children, and renders it again from scratch
            this.refresh()
        }, 1000)
    }

    // Called just before the Component is removed from the DOM
    override unmount() {
        console.log("unmounted")
        clearInterval(this.timer)
    }

    override render() {
        return <div>The time is {this.time}</div>
    }
}

const placeholder = document.createElement("div")
document.body.append(placeholder)
// replaceElement() mounts the Components inside the new element, children before parents, and
// unmounts the Components inside the element it replaces. A Component that is itself the new
// element is not mounted, so wrap it in an element as <main> is wrapped here.
const root = replaceElement(placeholder, <main><Clock/></main>)
replaceElement(root, <main>Removed</main>)
