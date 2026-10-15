# Components

velossr has two kinds of components. A static component renders the same way every time, and a dynamic component can see the request and wait for data.

## Static components

A `StaticServerComponent<AttrsType>` is a plain function that renders synchronously, with no access to the request. Use it for markup that never depends on the request. It receives its attrs, and its children as a second argument. To accept children, add `ChildrenAttr` to the attrs type.

@example static-component.tsx

Output:

@output static-component.tsx

Static parts of a page are prepared once, when you call [`prepareVNodeForRendering()`](/docs/velossr/rendering/), and then rendered from bytes on every request.

## Dynamic components

A `DynamicServerComponent<AttrsType>` is a class with access to the `Request` and the `context`. Its `render(attrs, children, request, context)` can return a node, or a Promise of one.

If `render()` fails, `onFail(reason, attrs, children, request, context)` renders instead, so one failing component does not take down the rest of the page. By default a failed component renders nothing. Override `onFail()` to show a message.

@example dynamic-component.tsx

Output:

@output dynamic-component.tsx

The `context` is whatever you pass to `renderServerVNode()`. With veloserver it is the request's `Context`.

## AsyncRenderObject

An `AsyncRenderObject<DataType>` waits on one Promise and can be rendered into several places. It is created with the Promise, the request, and the context: `new AsyncRenderObject(promise, request, context, defaultOnFail?)`.

`render(renderFunction, onFail?)` places it in the page. `renderFunction` receives the resolved value and returns a node, or a Promise of one. `onFail` renders when the Promise rejects or the render function throws. When a place passes no `onFail`, `defaultOnFail` is used, and without either the place renders nothing.

@example async-render-object.tsx

Output:

@output async-render-object.tsx

The output of an AsyncRenderObject is escaped as HTML, so it cannot be placed inside a `<script>` or `<style>`. See [Escaping and embedding](/docs/velossr/escaping-and-embedding/).
