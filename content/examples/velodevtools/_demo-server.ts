import { Router, Server } from "@velotype/veloserver"
import { VSON } from "@velotype/velojson"

// A server for trying the VeloJSON panel. The panel decodes a request or response body only when its
// Content-Type is application/vson or application/vbin (a "; charset=utf-8" suffix is fine).
const router = new Router<never>({})

router.get("/api/orders", () => {
    const orders = Array.from({length: 5}, (_, index) => ({id: index + 1, customer: "Ada", total: 9.99 * (index + 1)}))
    return new Response(VSON.encode(orders), {headers: {"content-type": "application/vson"}})
})

router.post("/api/orders", async (request) => {
    const order = VSON.decode(new Uint8Array(await request.arrayBuffer()))
    return new Response(VSON.encode({received: order}), {headers: {"content-type": "application/vson; charset=utf-8"}})
})

new Server(router).serve("127.0.0.1", 3000)
