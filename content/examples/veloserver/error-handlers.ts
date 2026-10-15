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
