import { Router, Server } from "@velotype/veloserver"
import { DevServer } from "@velotype/veloserver/dev"

// Serves a velotype app during development, and updates the page when its files change.
// Run it with --allow-net --allow-read --allow-write --allow-run --allow-env: builds run
// `deno bundle` and write temporary files.
const dev = new DevServer({
    // module: serve each module unbundled, and re-run only the changed ones, keeping component state
    // bundle: rebuild the bundle and re-run it, keeping component state
    // reload: rebuild the bundle and reload the page
    // off:    no development routes. The page loads the production scripts.
    mode: "module",
    // The browser entry module, relative to root
    entry: "./browser/main.tsx",
    // Optional: root (default: the current directory), config, watch, velotype, and production
})

const router = new Router<never>({})
await dev.mount(router)

// pageScripts() writes the scripts for the current mode, so switching modes needs no change to the page
router.get("/", () => new Response(`<!DOCTYPE html><html><body><div id="app"></div>${dev.pageScripts()}</body></html>`,
    {headers: {"content-type": "text/html; charset=utf-8"}}))

const server = new Server(router)
// Watching files keeps the process running, so stop it with the server
server.addServerFinishedCallback(() => dev.close())
server.serve("localhost", 3000)
