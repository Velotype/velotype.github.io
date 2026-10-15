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
