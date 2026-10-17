# Getting started

velotype is a TSX framework that creates real DOM elements as your code runs. There is no virtual DOM and no reconciler, so the elements you create are the ones on the page, and a value that changes renders only the part of the page that depends on it.

This guide installs velotype, mounts an app, and covers the basics of writing TSX with it. Every example in these docs is a file that is type-checked against the published package, and run in a browser, so what you see compiles and runs.

## Install

velotype is a [JSR package](https://jsr.io/@velotype/velotype) for Deno, and its code is bundled for the browser. Add it to a Deno project, and point the TSX compiler at it in `deno.json`:

```sh
deno add jsr:@velotype/velotype
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velotype",
        "lib": ["dom", "deno.ns", "esnext"]
    }
}
```

`"jsx": "react-jsxdev"` uses the development runtime instead, which supports [hot reloading](/docs/velotype/development-tools/#hot-reloading).

velotype is about 21kb minified and 7.7kb gzipped for the whole runtime, and bundlers drop the parts an app does not import. Bundle it with `deno bundle` or any bundler that supports Deno specifiers.

## Mounting an app

`replaceElementWithRoot(root, element)` replaces an element that is already in the page with the app's root element and mounts its Components. It accepts `null`, so the result of `document.getElementById()` can be passed directly. It returns the new root element.

`removeElementRoot(element)` is its counterpart: it unmounts and releases the Components and RenderObjects in `element`, then removes it. velotype only unmounts what it removes itself, so content that is removed with DOM methods is not unmounted.

```tsx
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
```
`replaceElementWithRoot()` is not limited to the app's root element. To add velotype content to a part of the page that other code manages (such as a dialog or a third-party widget), insert a placeholder element there and replace it. Call `removeElementRoot()` before that code removes the content.

## Writing TSX

TSX is a way to write element creation that looks like HTML. In velotype each tag creates an element, so its value is an `HTMLElement` and you can use it like any other.

```tsx
// TSX creates real DOM elements, so every one of these is an HTMLElement.
const heading: HTMLHeadingElement = <h1 class="title">Attributes are HTML attributes</h1>

// Style objects are type checked: property names, keywords, units, and colors.
// lowerCamelCase and hyphen-case both work, and so do custom properties.
const styled: HTMLDivElement = <div style={{
    display: "inline-block",
    marginTop: "4px",
    "margin-bottom": "4px",
    "--brand-color": "#336699",
    color: "var(--brand-color)",
    opacity: 0.8,
    width: "calc(100% - 2rem)",
    zIndex: 2,
}}>An object of styles</div>

// Attributes that start with "on" add event listeners
const clicked: HTMLButtonElement = <button type="button" onClick={() => console.log("clicked")}>Click me</button>

// Pass {handler, options} to set addEventListener() options
const once: HTMLButtonElement = <button type="button" onClick={{handler: () => console.log("clicked once"), options: {once: true}}}>Click me once</button>

// on- listens for a custom event by its exact name
const custom: HTMLDivElement = <div on-my-event={() => console.log("my-event received")}></div>
custom.dispatchEvent(new CustomEvent("my-event"))

// false, null, and undefined render nothing
const showDetails = false
const conditional: HTMLDivElement = <div>{showDetails && <div>Details</div>}</div>

// Fragments group children without a wrapper element, and return them as an Array
const items = <><li>one</li><li>two</li></>
const list: HTMLUListElement = <ul>{items}</ul>

// Arrays of elements are children too
const names = ["Ada", "Grace", "Katherine"]
const people: HTMLUListElement = <ul>{names.map(name => <li>{name}</li>)}</ul>

document.body.append(heading, styled, clicked, once, custom, conditional, list, people)
```
### Elements are real elements

A tag such as `<div>` evaluates to an `HTMLDivElement`. You can read its properties, call its methods, and append it with DOM APIs.

### Attributes are HTML attributes

velotype sets attributes the way HTML does, so you write `class` rather than `className`, and `for` rather than `htmlFor`.

### Style objects

The `style` attribute takes an object. Property names must be CSS properties, in lowerCamelCase (`marginTop`) or hyphen-case (`"margin-top"`), or custom properties (`"--brand-color"`). The values of commonly used properties are checked too: keywords must be ones the property accepts, lengths and times need a unit, and colors must be a named color, `#hex`, or a color function. Numbers are accepted only for properties that take no unit, such as `opacity` and `zIndex`. A value can end with ` !important`, and values using `var()`, `calc()` and other CSS functions are always accepted.

### Event listeners

Attributes that start with `on` add event listeners with `addEventListener()`: `onClick` listens for `click`. Pass `{handler, options}` to set the `addEventListener()` options. Use `on-` followed by the exact name to listen for a custom event, such as `on-my-event`.

### Conditional rendering

`false`, `null`, and `undefined` children render nothing, so `{condition && <div/>}` works as expected.

### Fragments

`<>...</>` groups children without a wrapper element. It returns them as an Array that can be used as children.

## Next steps

* [Components](/docs/velotype/components/): function components, class components, and their lifecycle
* [RenderObjects](/docs/velotype/render-objects/): values that update the page in place
* [Lists](/docs/velotype/lists/): lists that render, move, and remove only the rows that changed
