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
