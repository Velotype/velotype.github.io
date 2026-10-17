import { Component, type EmptyAttrs, removeElementRoot, replaceElementWithRoot } from "@velotype/velotype"

class App extends Component<EmptyAttrs> {
    override render() {
        return <h1>Hello velotype</h1>
    }
}

// Replace the placeholder element with the app. The Components in it are mounted.
// replaceElementWithRoot() accepts null, so getElementById() can be passed directly.
const root = replaceElementWithRoot(<App/>, document.getElementById("app"))

// A Dialog, widget, or any part of a page that other code manages can hold velotype content too:
// insert a placeholder there, then replace it.
const placeholder = document.createElement("div")
document.body.append(placeholder)
const dialogContent = replaceElementWithRoot(<App/>, placeholder)

// removeElementRoot() unmounts and releases the Components in an element, then removes it.
// Use it before other code removes content that velotype put on the page.
removeElementRoot(dialogContent)
removeElementRoot(root)
