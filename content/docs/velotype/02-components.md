# Components

Components are the objects that you create as tags in TSX. Velotype has two kinds: function components for simple, stateless markup, and class components for anything with state, a lifecycle, or methods.

## Function components

A `FunctionComponent<AttrsType>` is a function from its attrs to what it renders. It receives its children as a second argument.

Function components must be idempotent with no side effects, and they do not support `mount()` and `unmount()`. Use a class component when you need either.

To accept children, add `ChildrenAttr` to the attrs type.

@example function-component.tsx

## Class components

A class component extends `Component<AttrsType>` and implements `render()`. Velotype calls its lifecycle methods for you.

The attrs a Component is created with are `this.attrs`, and its children are `this.children`. They are also passed to `render()`.

A Component that accepts children adds `ChildrenAttr` to its attrs type.

@example class-component.tsx

## The lifecycle

A Component goes through `mount()`, `render()`, and `unmount()`. A Component can also call `this.refresh()` to render again.

@example lifecycle.tsx

* `render()` creates the Component's elements. It can run again when the Component calls `refresh()`
* `mount()` runs just after the Component is inserted into the page, before the browser paints, so it can read layout (such as `getBoundingClientRect()`). Child Components mount before their parent. For work that should wait until after the first paint, start it from `mount()` with `requestAnimationFrame()` or `setTimeout()`
* `unmount()` runs just before the Component is removed, while it is still in the page
* `refresh()` unmounts and mounts the Component's children, and the Component itself stays mounted. If `render()` throws, the current render is kept and the error is thrown to the caller of `refresh()`
* Moving an element (such as `swap()`, or moving it with DOM methods) does not unmount or mount it
* A Component mounts and unmounts once. Once Velotype removes it, it is released, and inserting its element again does not mount it (Velotype warns in the console). Create a new Component instead
* Velotype mounts Components that are inserted through Velotype: `replaceElementWithRoot()`, a Component's child methods, and RenderObjects. An element inserted with DOM methods such as `appendChild()` is not mounted
* Likewise Velotype unmounts Components that are removed through Velotype: `removeElementRoot()`, a Component's child methods, `refresh()`, and RenderObjects. An element removed with DOM methods is not unmounted
* The RenderObjects in a Component's fields mount and unmount with it (calling their `registerOnMount()` callbacks), and the ones in public fields are released when it unmounts. To share a RenderObject between Components, pass it in attrs or keep it in a `#private` field
* Errors thrown by `mount()` and `unmount()` are reported with `reportError()`, and the other Components still run. See [Errors](/docs/velotype/events-and-errors/#when-code-throws)

### Prefer RenderObjects to refresh()

`refresh()` is the largest possible update: it throws away the Component's children and creates them again, which loses their state. To change part of a Component, use a [RenderObject](/docs/velotype/render-objects/) for a value, or a [child method](#changing-part-of-what-a-component-rendered) for an element.

## Cleaning up with unmountSignal

`this.unmountSignal` is an `AbortSignal` that is aborted just after `unmount()` returns. Pass it to what `mount()` starts, and it is cleaned up without an `unmount()`. It works with `addEventListener()` and with `fetch()`, so a response that arrives after the Component unmounts is not used.

The signal is created on first use. It is also aborted when a Component is released without being mounted, such as when its `render()` throws.

@example unmount-signal.tsx

## Changing part of what a Component rendered

A Component's child methods change one element inside what it rendered, without a `refresh()`. Each takes an element from this Component's render, mounts what it inserts, and unmounts what it removes.

| Method | Does |
|---|---|
| `replaceChild(child, newChild)` | Replaces `child`, and returns the new element |
| `appendToChild(child, newChild)` | Adds `newChild` to the end of `child` |
| `prependToChild(child, newChild)` | Adds `newChild` to the start of `child` |
| `replaceChildrenOfChild(child, newChildren)` | Replaces all of `child`'s children |
| `removeChild(child)` | Removes `child` |

The methods return `false` (or `child`, for `replaceChild()`) and change nothing when `child` is not part of this Component's render.

@example child-methods.tsx

## Getting the Component from its element

TSX evaluates to the element, but the TypeScript type of a tag for a class is the class. `getComponent<T>(element)` converts an element that was created for a class Component back to the instance, so you can call its methods.

@example get-component.tsx

## Accepting id, class, and style

`passthroughAttrsToElement(element, attrs)` sets the `id`, `class`, and `style` attrs that a caller passed on the element a Component renders. `class` is added to the element's own classes rather than replacing them. Add `IdAttr` and `StylePassthroughAttrs` to the Component's attrs type to accept them.

`setAttrsOnElement(element, attrs)` sets attributes, style objects, and event listeners on an existing element the same way TSX does.

@example passthrough.tsx
