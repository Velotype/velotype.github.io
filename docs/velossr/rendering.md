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

```tsx
import { type EmptyAttrs, prepareHTMLVNodeForRendering, renderServerVNode, type StaticServerComponent } from "@velotype/velossr"

const Page: StaticServerComponent<EmptyAttrs> = function() {
    return <html><body><div>Hello velossr!</div></body></html>
}

// Prepare a page once, which can happen at module load outside the request handler. The static
// parts are compacted into bytes. prepareHTMLVNodeForRendering() adds <!DOCTYPE html>, and
// prepareVNodeForRendering() renders a fragment as it is.
const preparedPage = prepareHTMLVNodeForRendering(<Page/>)

const request = new Request("http://localhost/")
const context = {}

// All at once
const all = await renderServerVNode(preparedPage, request, context).toArrayBuffer()
console.log(new TextDecoder().decode(all))

// As a single Uint8Array
const bytes = await renderServerVNode(preparedPage, request, context).toUint8Array()
console.log(bytes.length, "bytes")

// Streamed, where async components flush in place as they resolve
const stream = renderServerVNode(preparedPage, request, context).toReadableStream()
const response = new Response(stream, {headers: {"content-type": "text/html; charset=utf-8"}})
console.log(await response.text())
```
Output:

```text
<!DOCTYPE html><html><body><div>Hello velossr!</div></body></html>
66 bytes
<!DOCTYPE html><html><body><div>Hello velossr!</div></body></html>
```
## Streaming

With `toReadableStream()`, the page is written as it is ready. Static parts go out at once, and an async `DynamicServerComponent` flushes in place when it resolves, so the visitor sees the top of the page before the slow part is done.

```tsx
import { DynamicServerComponent, type EmptyAttrs, prepareHTMLVNodeForRendering, renderServerVNode } from "@velotype/velossr"

// An async component that takes a while
class SlowPart extends DynamicServerComponent<EmptyAttrs> {
    override async render() {
        await new Promise(resolve => setTimeout(resolve, 50))
        return <p>The slow part</p>
    }
}

const page = <html><body>
    <h1>Shown first</h1>
    <SlowPart/>
    <footer>Shown last</footer>
</body></html>

const request = new Request("http://localhost/")
const stream = renderServerVNode(prepareHTMLVNodeForRendering(page), request, {}).toReadableStream()

// Each chunk is written as soon as it is ready, so the page starts arriving before the slow part resolves
const decoder = new TextDecoder()
const start = performance.now()
let html = ""
let firstPartAt = 0
let slowPartAt = 0
for await (const chunk of stream) {
    const text = decoder.decode(chunk)
    html += text
    if (text == "Shown first") {
        firstPartAt = performance.now() - start
    }
    if (text == "The slow part") {
        slowPartAt = performance.now() - start
    }
}

console.log(html)
console.log("The first part arrived before the slow part resolved:", firstPartAt < 40)
console.log("The slow part arrived after it resolved:", slowPartAt >= 40)
```
Output:

```text
<!DOCTYPE html><html><body><h1>Shown first</h1><p>The slow part</p><footer>Shown last</footer></body></html>
The first part arrived before the slow part resolved: true
The slow part arrived after it resolved: true
```
Because the response is already streaming when an async component fails, there is no way to change the status code afterwards. Handle failures with `onFail()`.
