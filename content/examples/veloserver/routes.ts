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
