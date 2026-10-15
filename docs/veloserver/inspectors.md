# Inspectors

An `Inspector` runs before and after the handlers of a path. It is a pair of functions, and both are optional:

* A **request inspector** runs before the handler. It returns a `RequestInspectorResponse`. An empty one continues to the handler. One with a `response` ends the request early, and that response starts the response chain
* A **response inspector** runs after the handler, and sees each response. It can read or change the response, and returns nothing

`new Inspector(requestInspector?, responseInspector?, observeChildPaths = true)`

By default an inspector also runs for the paths below its own. Pass `false` as the third argument to inspect only its own path.

Use `addGetInspector()`, `addHeadInspector()`, or `addPostInspector()` to add an inspector for one HTTP method, and `addAllInspector()` for GET, HEAD, and POST. Each takes a path or an Array of paths. The path `""` is the root, so an inspector there sees every request.

```tsx
import { Inspector, RequestInspectorResponse, Router, Server } from "@velotype/veloserver"

type Metadata = {startTime?: number}
const router = new Router<Metadata>({context_metadata_constructor: () => ({})})

// An Inspector runs before and after the handlers of a path. Its request inspector can answer the
// request itself, by returning a RequestInspectorResponse with a response, and its response
// inspector sees each response. Both are optional.
router.addAllInspector("", new Inspector<Metadata>(
    (_request, context) => {
        context.meta.startTime = performance.now()
        return new RequestInspectorResponse()
    },
    (request, response, context) => {
        const elapsed = performance.now() - context.meta.startTime!
        console.log(`logged: ${response.status} ${request.method} ${new URL(request.url).pathname} (took ${elapsed < 1000 ? "under a second" : "too long"})`)
    },
))

// A request inspector that returns a response ends the request early. By default an inspector also
// runs for the paths below its own (observeChildPaths), and the third argument turns that off.
router.addGetInspector("/admin", new Inspector<Metadata>(
    (request) => request.headers.get("authorization") == "secret"
        ? new RequestInspectorResponse()
        : new RequestInspectorResponse(new Response("Not allowed", {status: 401})),
))

router.get("/", () => new Response("public"))
router.get("/admin/dashboard", () => new Response("the dashboard"))

// addGetInspector(), addHeadInspector(), addPostInspector(), and addAllInspector() choose the methods
router.addPostInspector("/", new Inspector<Metadata>(undefined, (_request, response) => {
    response.headers.set("x-inspected", "post")
}))
router.post("/", () => new Response("posted"))

const server = new Server(router)
server.serve("127.0.0.1", 3205)

const base = "http://127.0.0.1:3205"
console.log((await fetch(`${base}/`).then(response => response.text())))
console.log((await fetch(`${base}/admin/dashboard`).then(response => response.text())))
console.log((await fetch(`${base}/admin/dashboard`, {headers: {authorization: "secret"}}).then(response => response.text())))
const posted = await fetch(`${base}/`, {method: "POST"})
console.log(await posted.text(), posted.headers.get("x-inspected"))

server.close()
```
Output:

```text
logged: 200 GET / (took under a second)
public
logged: 401 GET /admin/dashboard (took under a second)
Not allowed
logged: 200 GET /admin/dashboard (took under a second)
the dashboard
logged: 200 POST / (took under a second)
posted post
```
Common uses are logging and timing (a request inspector that records the start in the [metadata](/docs/veloserver/request-metadata/), and a response inspector that logs), authentication (a request inspector that returns a `401`), and setting headers on every response.
