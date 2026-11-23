# RenderObjects

A RenderObject holds a value and renders it to the page. When the value changes, every place it was rendered updates, and nothing else does. This is how velotype updates the page in place, without a virtual DOM.

Create RenderObjects as public fields of Component classes, and velotype mounts and releases them with the Component. A RenderObject made anywhere else is released by the code that made it: see [Releasing a RenderObject](#releasing-a-renderobject).

## RenderObject

`new RenderObject<DataType>(initialValue, renderFunction)` holds a value and a function that renders a value into an element. Put the RenderObject in TSX as a child and it renders there. Put it in as many places as you like, and each one is rendered.

Setting `value` (or calling `set()`) renders the new value only when it is a different value (`!==`). `get()` and `value` read it.

@example render-object.tsx

When a value that is an object or an Array is changed in place, `!==` sees no change. Call `rerenderElements(value)` to render it again.

### Listening for changes

* `registerOnChangeListener(listener, options)` runs `listener` after each change of `value`
* `registerOnMount(onMount, onUnmount)` adds callbacks that run when the Component whose public field holds the RenderObject mounts and unmounts, or the element whose `vtwith` lists it

Both return the RenderObject, so they can be chained onto its creation. The options of `registerOnChangeListener()` are:

| Option | Does |
|---|---|
| `hasVtKey` | Removes the listener with this Component's lifecycle instead of the RenderObject's. It must already have a `vtKey`, so call it from the Component's `mount()` |
| `triggerOnRegistration` | Also runs the listener once, just after it is registered |
| `eventDispatchDelay` | Waits this many milliseconds before running the listener, and runs it at most once in that time |

@example change-listener.tsx

### Updating in place with handleUpdate

By default a new value renders new elements. For elements that change often, return an `UpdateHandlerLink` from the render function with references to the parts that change, and pass a `handleUpdate` function as the third argument. It updates those parts in place instead. The second type parameter of RenderObject types the references.

@example handle-update.tsx

## Releasing a RenderObject

velotype holds a RenderObject from when it is created until it is released, with the listeners it owns. It releases the ones in a Component's public fields when that Component unmounts. It can't see any other: one in a `#private` field, a Map, or a variable. One that is never released is held for as long as the page is open, with everything its render function refers to.

* **A RenderObject a Component keeps** in a `#private` field, or makes again in `render()`, is released with `release()` from the Component's `unmount()`, and before the next one is made (from 0.3.5)
* **A RenderObject made while drawing**, in a function component or in a method that returns elements, is listed in `vtwith={[...]}` on an element drawn with it. It mounts, unmounts, and is released with that element. The element may be the root that a function component, a Component's `render()`, or a RenderObject returns (from 0.3.5; before, such a root was wrapped in a `display: contents` element), and `refresh()` or a new value releases the ones of the root it replaces
* **A RenderObject that is shared**, and is meant to outlive the Component that made it, is not released

`release()` does not remove the elements the RenderObject has rendered, so release one only when it is shown nowhere else, and don't place it again. A RenderObjectArray releases its rows with it.

@example release.tsx

## RenderBasic

`RenderBasic<DataType>` is a RenderObject for a `string`, `number`, `bigint`, or `boolean`. It renders its value as text inside a `<span style="display:contents;">` and updates that text in place, so it needs no render function.

It adds `getString()` and `setString()`, which convert the value to and from a string.

@example render-basic.tsx

## Other methods

| Method | Does |
|---|---|
| `getElements()` | The elements this RenderObject has rendered. Advanced: use carefully |
| `removeAll()` | Removes every element this RenderObject has rendered |
| `release()` | Releases this RenderObject, for one velotype can't see (from 0.3.5). See [Releasing a RenderObject](#releasing-a-renderobject) |
| `render(renderFunction, handleUpdate?)` | Renders one more element with a different render function than the default |
