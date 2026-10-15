import { Router, Server } from "@velotype/veloserver"

const router = new Router<never>({})

router.get("/", () => {
    const response = new Response("<!DOCTYPE html><html><body>Hello veloserver!</body></html>")
    response.headers.set("content-type", "text/html; charset=utf-8")
    return response
})

// A Server wraps a Router. serve() starts it with Deno.serve() on a hostname and port.
// The server needs --allow-net and no other permission to serve.
const server = new Server(router)
server.serve("127.0.0.1", 3201)

const response = await fetch("http://127.0.0.1:3201/")
console.log(response.status, response.headers.get("content-type"))
console.log(await response.text())

server.close()
