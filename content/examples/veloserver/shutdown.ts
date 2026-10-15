import { Router, Server } from "@velotype/veloserver"

const router = new Router<never>({})
router.get("/", () => new Response("hello"))

const server = new Server(router)

// Run code when the server starts listening, and when it has finished
server.addServerListenCallback(() => console.log("callback: listening"))
server.addServerFinishedCallback(() => console.log("callback: finished"))

// serve() registers listeners for SIGINT, SIGTERM, and SIGUSR1, and releases them once the server
// has finished shutting down. With nothing else pending, the process then ends on its own.
// Pass exitProcessOnClose: true to end the process the moment the server stops, even with other
// work still pending.
server.serve("127.0.0.1", 3207, {exitProcessOnClose: false})

await fetch("http://127.0.0.1:3207/").then(response => response.text())

// close() stops the server from code. The reason is logged.
server.close("done with the example")
