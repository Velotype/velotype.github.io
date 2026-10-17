# Getting started

velomicro is a strictly minimal TSX framework, about 1kb, that shows how TSX rendering works. It is small enough to read in one sitting: a `createElement` that returns real DOM elements, and function components. The [Medium article](https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648) walks through its source line by line.

It is a teaching tool and a starting point, not a framework for an app. It has no state management and no lifecycle. For an app, see [velotype](/docs/velotype/), which keeps this model of TSX that returns real elements, and adds the rest. [velomini](/docs/velomini/) is the next step up.

Every example in these docs is a file that is type-checked against the published package, and run in a browser.

## Install

velomicro is a [JSR package](https://jsr.io/@velotype/velomicro) for Deno:

```sh
deno add jsr:@velotype/velomicro
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velomicro"
    }
}
```

## How it works

Each tag is a call to `createElement`, which creates a real `HTMLElement`, sets its attributes, and appends its children. So a tag's value is the element:

```tsx
// Every tag evaluates to a real HTMLElement
const divTag: HTMLDivElement = <div>this is a div</div>

// Attributes are set with setAttribute(), so you write TSX the way you write HTML
const withClass: HTMLDivElement = <div class="exampleClass" id="main">this has a class</div>

// style takes an object, with camelCase keys, or a string
const styleObject: HTMLDivElement = <div style={{display: "inline", marginTop: "4px"}}>an object of styles</div>
const styleString: HTMLDivElement = <div style="display:inline;margin-top:4px;">a string of styles</div>

// Attributes that start with "on" add event listeners
const clicked: HTMLButtonElement = <button type="button" onClick={() => console.log("clicked")}>Click me</button>

// A boolean attribute is set empty when true, and left out when false
const input: HTMLInputElement = <input type="checkbox" checked={true} disabled={false}/>

// Fragments group children without a wrapper element, and arrays of elements are children too
const items = <><li>one</li><li>two</li></>
const list: HTMLUListElement = <ul>{items}{["three", "four"].map(name => <li>{name}</li>)}</ul>

// null and undefined render nothing. A boolean child is written as text, so for a condition use a
// ternary that gives null rather than {condition && <div/>}, which writes "false".
const signedIn = false
const conditional: HTMLDivElement = <div>{signedIn ? <span>Account</span> : null}</div>

document.body.append(divTag, withClass, styleObject, styleString, clicked, input, list, conditional)
```
* **Attributes** are set with `setAttribute()`, so you write them as you would in HTML (`class`, not `className`)
* **Attributes that start with `on`** add event listeners
* **`style`** takes an object with camelCase keys, or a string
* **Boolean attributes** are set empty when `true` and left out when `false`
* **Children** can be elements, strings, numbers, and arrays of them. Fragments (`<>...</>`) return their children as an array
* **`null` and `undefined`** render nothing. A boolean child is written as text, so `{condition && <div/>}` writes `false` when the condition is false. Use `{condition ? <div/> : null}`

## Function components

A function component is a function from its attrs to an element, and it receives its children as a second argument.

```tsx
import type { ChildrenAttr, FunctionComponent, IdAttr, StylePassthroughAttrs } from "@velotype/velomicro/tsx-micro"

type GreetingAttrsType = {name: string}

// A function component receives its attrs, and its children as a second argument
const Greeting: FunctionComponent<GreetingAttrsType> = function(attrs: GreetingAttrsType) {
    return <div>Hello {attrs.name}!</div>
}

// ChildrenAttr, IdAttr, and StylePassthroughAttrs describe the children, id, class, and style that
// a component accepts and passes on to the element it renders
type PanelAttrsType = {title: string} & ChildrenAttr & IdAttr & StylePassthroughAttrs

const Panel: FunctionComponent<PanelAttrsType> = function(attrs: PanelAttrsType, children) {
    return <section id={attrs.id} class={attrs.class} style={attrs.style}>
        <h2>{attrs.title}</h2>
        {children}
    </section>
}

document.body.append(
    <Panel title="Greetings" id="greetings" class="panel" style={{marginTop: "8px"}}>
        <Greeting name="Ada"/>
        <Greeting name="Grace"/>
    </Panel>,
)
```
The attrs helper types are `EmptyAttrs` (no attrs), `ChildrenAttr`, `IdAttr`, and `StylePassthroughAttrs` (`class` and `style`). They describe what a component accepts and passes on, and a component passes them on itself.

## A counter

A function component runs once. Its state is a variable, and updating the page is up to you: here, by changing the label element.

```tsx
import type { EmptyAttrs, FunctionComponent } from "@velotype/velomicro/tsx-micro"

// A function component returns an element. State is a variable, and updating the page is up to you.
const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = String(count)
        }}>Increment</button>
        <button type="button" onClick={() => {
            count -= 1
            counterLabel.innerText = String(count)
        }}>Decrement</button>
    </div>
}

// TSX returns real elements, so mounting is appending
document.body.append(<Counter/>)
```
This is the limit of velomicro. When you need a value that updates the page for you, a lifecycle, or classes, move up to [velomini](/docs/velomini/) or [velotype](/docs/velotype/).

## The classic runtime

The automatic JSX runtime is `@velotype/velomicro`. With the classic transform, `h` and `f` from `@velotype/velomicro/tsx-micro` are what tags and fragments compile to:

```tsx
/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag f */
// With the classic JSX transform, `h` and `f` are what tags and fragments compile to: createElement
// and createFragment, with short names. Set them per file with the pragmas above, or with
// "jsx": "react", "jsxFactory": "h", and "jsxFragmentFactory": "f" in deno.json.
import { f, h } from "@velotype/velomicro/tsx-micro"

const list = <ul><li>one</li><li>two</li></ul>
const fragment = <><span>a</span><span>b</span></>

document.body.append(list, ...fragment)
```
## API

| Export | Description |
|---|---|
| `h(tag, attrs, ...children)` | `createElement`: creates an element, sets its attributes, and appends its children |
| `f(attrs, ...children)` | `createFragment`: returns its children as an array |
| `jsx`, `jsxs`, `Fragment` | The automatic JSX runtime. `jsx` and `jsxs` are the same |
| `FunctionComponent<AttrsType>` | `(attrs, children) => RenderableElements` |
| `RenderableElements` | `BasicTypes \| HTMLElement \| RenderableElements[] \| null \| undefined` |
| `BasicTypes` | `string \| bigint \| number \| boolean` |
| `EmptyAttrs`, `ChildrenAttr`, `IdAttr`, `StylePassthroughAttrs` | Attrs helper types |

Imports: `@velotype/velomicro` is the runtime, and `@velotype/velomicro/tsx-micro` has `h`, `f`, and the types. In velomicro the JSX types accept any attribute on any element.
