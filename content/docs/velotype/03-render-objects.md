# RenderObjects

A RenderObject holds a value and renders it to the page. When the value changes, every place it was rendered updates, and nothing else does. This is how Velotype updates the page in place, without a virtual DOM.

Create RenderObjects as fields of Component classes. Using them in any other way is advanced behavior.

## RenderObject

`new RenderObject<DataType>(initialValue, renderFunction)` holds a value and a function that renders a value into an element. Put the RenderObject in TSX as a child and it renders there. Put it in as many places as you like, and each one is rendered.

Setting `value` (or calling `set()`) renders the new value only when it is a different value (`!==`). `get()` and `value` read it.

@example render-object.tsx

When a value that is an object or an Array is changed in place, `!==` sees no change. Call `rerenderElements(value)` to render it again.

### Listening for changes

* `registerOnChangeListener(listener, options)` runs `listener` after each change of `value`
* `registerOnMount(onMount, onUnmount)` adds callbacks that run when the Component whose field holds the RenderObject mounts and unmounts

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

## RenderBasic

`RenderBasic<DataType>` is a RenderObject for a `string`, `number`, `bigint`, or `boolean`. It renders its value as text inside a `<span style="display:contents;">` and updates that text in place, so it needs no render function.

It adds `getString()` and `setString()`, which convert the value to and from a string.

@example render-basic.tsx

## Other methods

| Method | Does |
|---|---|
| `getElements()` | The elements this RenderObject has rendered. Advanced: use carefully |
| `removeAll()` | Removes every element this RenderObject has rendered |
| `render(renderFunction, handleUpdate?)` | Renders one more element with a different render function than the default |
