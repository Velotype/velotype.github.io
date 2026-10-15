# Rendering

Rendering a page has two steps: prepare it, which can happen once, and render it for each request.

## Preparing a page

`prepareVNodeForRendering(node)` compacts a node into a flat array of bytes and the parts that need a request. `prepareHTMLVNodeForRendering(node)` does the same with `<!DOCTYPE html>` added at the start, to make a valid HTML document.

Prepare at module load, outside the request handler, so the static parts are not rebuilt for every request.

## Rendering for a request

`renderServerVNode(node, request, context)` takes a prepared page, or a raw node, and returns a `RenderedVDOM`. Convert that into the form you need:

| Method | Returns | For |
|---|---|---|
| `toArrayBuffer()` | `Promise<ArrayBuffer>` | A `Response` that is sent all at once |
| `toUint8Array()` | `Promise<Uint8Array>` | The bytes, for tests or further processing |
| `toReadableStream()` | `ReadableStream` | A `Response` that streams |

@example rendering.tsx

Output:

@output rendering.tsx

## Streaming

With `toReadableStream()`, the page is written as it is ready. Static parts go out at once, and an async `DynamicServerComponent` flushes in place when it resolves, so the visitor sees the top of the page before the slow part is done.

@example streaming.tsx

Output:

@output streaming.tsx

Because the response is already streaming when an async component fails, there is no way to change the status code afterwards. Handle failures with `onFail()`.
