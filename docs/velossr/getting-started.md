# Getting started

velossr renders TSX to HTML on the server. There is no virtual DOM diffing and no client runtime: components run once per request and produce bytes, either all at once or streamed as async pieces resolve.

It is the server-side version of [velotype](/docs/velotype/)'s TSX. Use it to send a page's HTML from the server, and use velotype for the parts of the page that are interactive. Every example in these docs is a file that is type-checked against the published package and run, and the output shown is what the example printed.

## Install

velossr is a [JSR package](https://jsr.io/@velotype/velossr) for Deno. Add it, and point the TSX compiler at it in `deno.json`:

```sh
deno add jsr:@velotype/velossr
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velossr"
    }
}
```

A project that has both a server and a browser app needs two JSX settings, because the browser's TSX is velotype's (`"jsxImportSource": "@velotype/velotype"`). Keep them in separate directories with their own `deno.json`, or set it per file with a `/** @jsxImportSource @velotype/velossr */` comment.

## A page and a server

velossr pairs naturally with [veloserver](/docs/veloserver/). A page is a component, `prepareHTMLVNodeForRendering()` prepares it once, and `renderServerVNode()` renders it for each request.

```tsx
import { type Context, Router, Server } from "@velotype/veloserver"
import { type EmptyAttrs, prepareHTMLVNodeForRendering, renderServerVNode, type StaticServerComponent } from "@velotype/velossr"

const Page: StaticServerComponent<EmptyAttrs> = function() {
    return <html><body><div>Hello velossr!</div></body></html>
}
const preparedPage = prepareHTMLVNodeForRendering(<Page/>)

const router = new Router<never>({})
router.get("/", function(request: Request, context: Context<never>) {
    const response = new Response(renderServerVNode(preparedPage, request, context).toReadableStream())
    response.headers.set("content-type", "text/html; charset=utf-8")
    return response
})

const server = new Server(router)
server.serve("127.0.0.1", 3101)

// Fetch the page once, then stop the server
const response = await fetch("http://127.0.0.1:3101/")
console.log(response.status, response.headers.get("content-type"))
console.log(await response.text())
server.close()
```
Output:

```text
200 text/html; charset=utf-8
<!DOCTYPE html><html><body><div>Hello velossr!</div></body></html>
```
## Writing TSX for the server

Each tag creates a server-side element. Nothing touches a DOM: the element is a description that velossr writes out as HTML.

### Attributes are HTML attributes

velossr writes attributes as strings, so you write TSX the same as if you were writing HTML. Style objects resolve camelCase keys to kebab-case CSS. A `true` boolean attribute is written bare, and a `false` one is left out. Event listener attributes (`onClick`) cannot work on the server: they are left out and a warning is logged.

### Conditional rendering

`false`, `null`, and `undefined` children render nothing, so `{condition && <li/>}` works as it does in velotype. `true` is written as text. Before velossr 0.0.10 a `false` child was written as the text `false`, so use `{condition ? <li/> : null}` if you are on an older version.

### Fragments

`<>...</>` groups children without a wrapper element.

```tsx
import { renderServerVNode, prepareVNodeForRendering, type ServerVNode } from "@velotype/velossr"

async function show(node: ServerVNode) {
    const bytes = await renderServerVNode(prepareVNodeForRendering(node), new Request("http://localhost/"), {}).toUint8Array()
    console.log(new TextDecoder().decode(bytes))
}

// Attributes are written as HTML attributes
await show(<div class="exampleClass" id="main">this is a div</div>)

// Style objects resolve camelCase keys to kebab-case CSS
await show(<div style={{display: "inline", marginTop: "4px"}}>styled</div>)

// Boolean attributes are written when true, and left out when false
await show(<input type="checkbox" checked={true} disabled={false}/>)

// Text, attribute values, and attribute names are escaped where they are written
const untrusted = `<script>alert("hi")</script> & "quotes"`
await show(<p title={untrusted}>{untrusted}</p>)

// Fragments group children without a wrapper element. false, null, and undefined render nothing,
// so {condition && <li/>} works as it does in velotype. true is written as text.
const signedIn = false
await show(<ul>{signedIn && <li>Account</li>}<><li>one</li><li>two</li></></ul>)
```
Output:

```text
<div class="exampleClass" id="main">this is a div</div>
<div style="display:inline;margin-top:4px">styled</div>
<input type="checkbox" checked>
<p title="<script>alert(&quot;hi&quot;)</script> &amp; &quot;quotes&quot;">&lt;script>alert(&quot;hi&quot;)&lt;/script> &amp; &quot;quotes&quot;</p>
<ul><li>one</li><li>two</li></ul>
```
## Next steps

* [Components](/docs/velossr/components/): static and dynamic components
* [Rendering](/docs/velossr/rendering/): preparing pages, and sending them whole or streamed
* [Escaping and embedding](/docs/velossr/escaping-and-embedding/): what is escaped, and inline scripts, styles, and JSON
* [Islands](/docs/velossr/islands/): interactive parts of a server-rendered page
