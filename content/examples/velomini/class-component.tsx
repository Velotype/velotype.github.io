import { Component, type EmptyAttrs, getComponent, replaceElement } from "@velotype/velomini/tsx-mini"

// Define a class. Its attrs are the type parameter, and render() returns what it shows.
class ComplexComponent extends Component<{foo: string}> {
    override render(attrs: Readonly<{foo: string}>) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Create it as a tag
const page = <div><ComplexComponent foo="Component!"></ComplexComponent></div>

// Class Components can have methods. getComponent() converts an element that was created for a
// class back to the instance, to call them.
class Advanced extends Component<EmptyAttrs> {
    override render() {
        return <div>This is an advanced Component</div>
    }
    someMethod() {
        console.log("Advanced someMethod() called")
    }
}
const advanced: Advanced = getComponent<Advanced>(<Advanced/>)
advanced.someMethod()

// Mount the page by replacing a placeholder element
const placeholder = document.createElement("div")
document.body.append(placeholder)
replaceElement(placeholder, <div>{page}{advanced}</div>)
