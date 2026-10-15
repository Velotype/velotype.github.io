# Request metadata

`Context.meta` holds typed metadata for each request. It is useful for data that a request needs from start to finish, such as a start time, an authenticated user, or a request id.

The Router's type parameter is the metadata type, and the `context_metadata_constructor` option creates it from each request. The metadata is created before any inspector or handler runs.

```tsx
import { Router, Server } from "@velotype/veloserver"

// Context.meta holds typed metadata for each request. The Router's type parameter is its type,
// and context_metadata_constructor creates it from the request.
type Metadata = {startTime: number, requestNumber: number}

let requests = 0
const router = new Router<Metadata>({
    context_metadata_constructor: () => ({startTime: performance.now(), requestNumber: ++requests}),
})

router.get("/users/:id", (request, context) => {
    return router.json(request, context, {
        request: context.meta.requestNumber,
        id: context.pathVariables?.get("id"),
        // The URL is parsed on first access, so a request that never reads it never pays for the parse
        path: context.url.pathname,
        parts: context.getPathParts(),
    })
})

const server = new Server(router)
server.serve("127.0.0.1", 3204)

console.log(await (await fetch("http://127.0.0.1:3204/users/7")).text())
console.log(await (await fetch("http://127.0.0.1:3204/users/8")).text())

server.close()
```
Output:

```text
{"request":1,"id":"7","path":"/users/7","parts":["","users","7"]}
{"request":2,"id":"8","path":"/users/8","parts":["","users","8"]}
```
## Context

A `Context<ContextMetadata>` is created for each request and passed to every inspector and handler.

| Member | Description |
|---|---|
| `meta` | The metadata the router's `context_metadata_constructor` created |
| `pathVariables?: Map<string, string>` | The path variables the route captured, if any |
| `url: URL` | The request's URL, parsed on first access and then cached, so a request that never reads it never pays for the parse |
| `getPathParts(): string[]` | `url.pathname.split("/")` |
| `addPathVariable(name, value)` | Captures a path variable |

Metadata is also how an inspector hands data to a handler: see [Inspectors](/docs/veloserver/inspectors/).
