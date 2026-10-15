# Getting started

velomini is a mostly minimal TSX framework, about 2.5kb, that adds class components to [velomicro](/docs/velomicro/): a `Component` base class with `render()`, `mount()`, `unmount()`, and `refresh()`. Its way to update what is on screen is to tear down a component's subtree and render a new one, with no diffing and no patching. The [Medium article](https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40) walks through its source.

It is a teaching tool. [Velotype](/docs/velotype/) is the full framework: it keeps classes and the real-element model, and replaces `refresh()` with values that update in place.

Every example in these docs is a file that is type-checked against the published package, and run in a browser.

## Install

velomini is a [JSR package](https://jsr.io/@velotype/velomini) for Deno:

```sh
deno add jsr:@velotype/velomini
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velomini"
    }
}
```

## Everything from velomicro

velomini's TSX works as [velomicro](/docs/velomicro/)'s does: tags create real elements, attributes are HTML attributes, `style` takes an object, `on` attributes add listeners, and function components are functions of their attrs and children. As in velomicro, a boolean child is written as text, so use `{condition ? <div/> : null}` rather than `{condition && <div/>}`.

## Class components

A class component extends `Component<AttrsType>` and implements `render(attrs, children)`. It is created as a tag, and its attrs are the tag's attributes.

`getComponent<T>(element)` converts an element that was created for a class back to the instance, so you can call its methods. The element is still usable in TSX.

```tsx
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
```
## Mounting

`replaceElement(element, newElement)` replaces an element with a new one, and mounts what is inside the new one. Use it to put an app on the page: insert a placeholder element, then replace it. It returns the new element, and if the old element had focus the new one is focused.

## The lifecycle

| Method | Called |
|---|---|
| `render(attrs, children)` | When the component needs to be turned into elements |
| `mount()` | Just after the component is attached to the DOM, children before parents |
| `unmount()` | Just before the component is removed from the DOM |
| `refresh()` | By you: unmounts and deletes the component's children, renders it again, and mounts the new children |

`replaceElement()` mounts the components inside the new element and unmounts the components inside the element it replaces. A component that is itself the new element is not mounted, so wrap it in an element, as `<main>` is wrapped here:

```tsx
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
```
Because `refresh()` rebuilds everything inside the component, anything those children held (text typed into an input, focus, a nested component's state) is lost. This is the cost that Velotype's [RenderObjects](/docs/velotype/render-objects/) remove.

## Other functions

`setAttrsOnElement(element, attrs)` sets attributes, a style object, event listeners, and boolean attributes on an existing element, the way TSX does.

```tsx
import { replaceElement, setAttrsOnElement } from "@velotype/velomini/tsx-mini"

// setAttrsOnElement() sets attributes, a style object, event listeners, and boolean attributes on
// an existing element, the way TSX does
const input = document.createElement("input")
setAttrsOnElement(input, {
    type: "text",
    class: "wide",
    style: {width: "100%"},
    onInput: () => console.log("typed"),
    required: true,
})
document.body.append(input)

// replaceElement() replaces an element with a new one. If the old element had focus, the new one
// is given it. It returns the new element.
input.focus()
const replacement = replaceElement(input, <input type="text" class="replacement"/>)
console.log(document.activeElement == replacement)
```
## API

| Export | Description |
|---|---|
| `Component<AttrsType>` | The abstract base class: `render()`, `mount()`, `unmount()`, `refresh()`, and `vtKey` and `element`, which the framework sets |
| `getComponent<T>(element)` | The class instance behind an element |
| `replaceElement(element, newElement)` | Replaces an element and mounts the new one's components |
| `setAttrsOnElement(element, attrs)` | Sets attributes on an existing element |
| `h`, `f`, `jsx`, `jsxs`, `Fragment` | The JSX runtimes |
| `FunctionComponent<AttrsType>` | `(attrs, children) => RenderableElements` |
| `RenderableElements`, `BasicTypes`, `EmptyAttrs`, `ChildrenAttr`, `IdAttr`, `StylePassthroughAttrs` | The types |
| `__vtAppMetadata` | Internal state for debugging. Do not use it |

Imports: `@velotype/velomini` is the runtime, and `@velotype/velomini/tsx-mini` has the classes, functions, and types.
