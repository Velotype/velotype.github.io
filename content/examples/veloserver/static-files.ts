import { Router, Server } from "@velotype/veloserver"

// Make a directory to serve
const dir = await Deno.makeTempDir()
await Deno.writeTextFile(`${dir}/app.js`, "console.log('hello from app.js')\n".repeat(50))
await Deno.writeTextFile(`${dir}/style.css`, "body { margin: 0 }\n")
await Deno.writeTextFile(`${dir}/favicon.ico`, "icon")

const router = new Router<never>({})

// mountFiles() serves a directory, and mountFile() a single file. Both serve on GET.
// By default files are read once and held in memory, with an ETag and a gzip-compressed copy for
// clients that accept it. Pass false as the last argument to read the file on each request.
await router.mountFiles("/build/", dir + "/", true)
await router.mountFile("/favicon.ico", `${dir}/favicon.ico`, false)

const server = new Server(router)
server.serve("127.0.0.1", 3206)

const base = "http://127.0.0.1:3206"
const js = await fetch(`${base}/build/app.js`)
console.log("app.js:", js.status, js.headers.get("content-type"), js.headers.get("content-encoding") ?? "no encoding")
console.log("has an ETag:", js.headers.has("etag"))
await js.body?.cancel()

const css = await fetch(`${base}/build/style.css`)
console.log("style.css:", css.status, JSON.stringify(await css.text()))

const icon = await fetch(`${base}/favicon.ico`)
console.log("favicon.ico:", icon.status, JSON.stringify(await icon.text()))

server.close()
await Deno.remove(dir, {recursive: true})
