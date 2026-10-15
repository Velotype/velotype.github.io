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
