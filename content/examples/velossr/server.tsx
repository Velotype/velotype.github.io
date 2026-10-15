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
