# Getting started

velomicro is a strictly minimal TSX framework, about 1kb, that shows how TSX rendering works. It is small enough to read in one sitting: a `createElement` that returns real DOM elements, and function components. The [Medium article](https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648) walks through its source line by line.

It is a teaching tool and a starting point, not a framework for an app. It has no state management and no lifecycle. For an app, see [Velotype](/docs/velotype/), which keeps this model of TSX that returns real elements, and adds the rest. [velomini](/docs/velomini/) is the next step up.

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

@example elements.tsx

* **Attributes** are set with `setAttribute()`, so you write them as you would in HTML (`class`, not `className`)
* **Attributes that start with `on`** add event listeners
* **`style`** takes an object with camelCase keys, or a string
* **Boolean attributes** are set empty when `true` and left out when `false`
* **Children** can be elements, strings, numbers, and arrays of them. Fragments (`<>...</>`) return their children as an array
* **`null` and `undefined`** render nothing. A boolean child is written as text, so `{condition && <div/>}` writes `false` when the condition is false. Use `{condition ? <div/> : null}`

## Function components

A function component is a function from its attrs to an element, and it receives its children as a second argument.

@example function-components.tsx

The attrs helper types are `EmptyAttrs` (no attrs), `ChildrenAttr`, `IdAttr`, and `StylePassthroughAttrs` (`class` and `style`). They describe what a component accepts and passes on, and a component passes them on itself.

## A counter

A function component runs once. Its state is a variable, and updating the page is up to you: here, by changing the label element.

@example counter.tsx

This is the limit of velomicro. When you need a value that updates the page for you, a lifecycle, or classes, move up to [velomini](/docs/velomini/) or [Velotype](/docs/velotype/).

## The classic runtime

The automatic JSX runtime is `@velotype/velomicro`. With the classic transform, `h` and `f` from `@velotype/velomicro/tsx-micro` are what tags and fragments compile to:

@example classic-runtime.tsx

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
