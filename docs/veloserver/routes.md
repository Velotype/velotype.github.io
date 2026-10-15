# Routes

`get()`, `head()`, and `post()` add a handler for a path, or for several paths when given an array. A handler receives the `Request` and its `Context`, and returns a `Response` or a Promise of one.

## Paths

* `:name` matches one path segment and stores it as a path variable, read with `context.pathVariables?.get("name")`
* `*` at the end of a path matches any remaining segments
* A static segment takes priority over a path variable or a wildcard at the same position

```tsx
import { Router, Server } from "@velotype/veloserver"

const router = new Router<never>({})

// A handler receives the request and its Context, and returns a Response or a Promise of one
router.get("/", () => new Response("home"))

// :name matches one path segment and stores it as a path variable
router.get("/users/:id", (request, context) => {
    return router.json(request, context, {id: context.pathVariables?.get("id")})
})

// A static segment takes priority over a path variable at the same position
router.get("/users/me", () => new Response("the current user"))

// * at the end of a path matches any remaining segments
router.get("/files/*", (_request, context) => new Response(`file: ${context.getPathParts().slice(2).join("/")}`))

// An array adds the same handler for several paths
router.get(["/docs/*", "/guides/*"], () => new Response("documentation"))

// Handlers can be async
router.get("/slow", async () => {
    await new Promise(resolve => setTimeout(resolve, 10))
    return new Response("done waiting")
})

// head() and post() add handlers for HEAD and POST
router.head("/", () => new Response(null, {headers: {"x-head": "yes"}}))
router.post("/echo", async (request) => new Response(await request.text()))

const server = new Server(router)
server.serve("127.0.0.1", 3202)

const base = "http://127.0.0.1:3202"
const show = async (label: string, request: Promise<Response>) => {
    const response = await request
    console.log(`${label}: ${response.status} ${await response.text()}`)
}
await show("GET /", fetch(`${base}/`))
await show("GET /users/42", fetch(`${base}/users/42`))
await show("GET /users/me", fetch(`${base}/users/me`))
await show("GET /files/a/b.txt", fetch(`${base}/files/a/b.txt`))
await show("GET /guides/intro", fetch(`${base}/guides/intro`))
await show("GET /slow", fetch(`${base}/slow`))
await show("POST /echo", fetch(`${base}/echo`, {method: "POST", body: "hello"}))
console.log("HEAD /:", (await fetch(`${base}/`, {method: "HEAD"})).headers.get("x-head"))

server.close()
```
Output:

```text
GET /: 200 home
GET /users/42: 200 {"id":"42"}
GET /users/me: 200 the current user
GET /files/a/b.txt: 200 file: a/b.txt
GET /guides/intro: 200 documentation
GET /slow: 200 done waiting
POST /echo: 200 hello
HEAD /: yes
```
## Responses

`router.json(request, context, data)` returns a JSON response with status 200.

## Error responses

The Router options set the handlers for the cases a route cannot handle. Each has a default:

| Option | Used when |
|---|---|
| `not_found_handler` | No route matches the path |
| `bad_request_error_handler` | A handler returns `router.badRequest()`. The router never calls it on its own |
| `server_error_handler` | A handler throws, or returns `router.serverError()` |

`router.badRequest(request, context)` and `router.serverError(request, context)` return the router's own error responses, so a handler can send them. An error that a handler throws is logged.

```tsx
import { Router, Server } from "@velotype/veloserver"

// The Router options set the handlers for unmatched paths, for badRequest(), and for errors thrown by handlers
const router = new Router<never>({
    not_found_handler: () => new Response("Nothing here", {status: 404}),
    bad_request_error_handler: () => new Response("That request was malformed", {status: 400}),
    server_error_handler: () => new Response("Something went wrong", {status: 500}),
})

router.get("/explode", () => {
    throw new Error("a handler threw")
})

// badRequest() and serverError() return the router's own error responses
router.get("/check", (request, context) => {
    return new URL(request.url).searchParams.has("id") ? new Response("ok") : router.badRequest(request, context)
})
router.get("/fail", (request, context) => router.serverError(request, context))

const server = new Server(router)
server.serve("127.0.0.1", 3203)

const base = "http://127.0.0.1:3203"
for (const path of ["/missing", "/explode", "/check", "/check?id=1", "/fail"]) {
    const response = await fetch(base + path)
    console.log(`${path}: ${response.status} ${await response.text()}`)
}

server.close()
```
Output:

```text
/missing: 404 Nothing here
/explode: 500 Something went wrong
/check: 400 That request was malformed
/check?id=1: 200 ok
/fail: 500 Something went wrong
```