# Running the server

## Shutting down

`serve()` registers listeners for `SIGINT`, `SIGTERM`, and `SIGUSR1`, and releases them once the server has finished shutting down. With nothing else pending, the process then ends on its own.

`server.close(reason?)` stops the server from code.

| Member | Description |
|---|---|
| `serve(hostname, port, options?)` | Starts the server. `options.exitProcessOnClose` calls `Deno.exit(0)` the moment the server has finished shutting down, even with other work pending (default: `false`) |
| `close(reason?)` | Stops the server. The reason is logged |
| `addServerListenCallback(callback)` | Runs `callback` just after the server starts listening |
| `addServerFinishedCallback(callback)` | Runs `callback` just after the server has finished |

Leave `exitProcessOnClose` unset when the server is one part of a longer-lived process, such as a test suite or a build step, which should carry on after the server stops.

```tsx
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
```
Output:

```text
callback: listening
callback: finished
```
## Development server

`@velotype/veloserver/dev` exports `DevServer`, which serves a [velotype](/docs/velotype/) app during development and updates the page when its files change.

```tsx
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
```
### Modes

`mode` sets how the page is updated when a file changes:

| Mode | Serves | On a change |
|---|---|---|
| `module` | each module unbundled, transpiled on request | re-runs the changed modules, and the components on the page keep their state |
| `bundle` | the app bundle | rebuilds and re-runs the bundle, and the components on the page keep their state |
| `reload` | the app bundle | rebuilds the bundle and reloads the page |
| `off` | the `production` scripts | nothing, and no development routes are added |

`pageScripts()` writes the scripts for the current mode, so switching modes needs no change to the page. In `off` mode it writes the `production` option's import map and scripts:

```tsx
import { Router } from "@velotype/veloserver"
import { DevServer } from "@velotype/veloserver/dev"

// In mode "off" there are no development routes, and pageScripts() writes the production option's
// import map and scripts. The same page code serves development and production.
const dev = new DevServer({
    mode: "off",
    entry: "./browser/main.tsx",
    production: {
        importMap: {"@velotype/velotype": "/build/velotype.js"},
        scripts: ["/build/velotype.js", "/build/main.js"],
    },
})
await dev.mount(new Router<never>({}))

console.log(dev.mode)
console.log(dev.pageScripts())
dev.close()
```
Output:

```text
off
<script type="importmap">{"imports":{"@velotype/velotype":"/build/velotype.js"}}</script>
<script type="module" src="/build/velotype.js"></script>
<script type="module" src="/build/main.js"></script>
```
### Options

| Option | Description |
|---|---|
| `mode` | The `DevMode`. Required |
| `entry` | The browser entry module, relative to `root`. Required |
| `root` | The project directory, which contains `deno.json` (default: the current directory) |
| `config` | The project's config file, relative to `root` (default: `deno.json` or `deno.jsonc`) |
| `watch` | Directories to watch, relative to `root` (default: the entry module's directory) |
| `velotype` | The velotype package specifier that the dev runtime is loaded from (default: `compilerOptions.jsxImportSource` from `deno.json`, or `@velotype/velotype`) |
| `production` | `{importMap?, scripts}`: the page scripts for mode `off` |

### How hot updates work

Hot updates use the velotype dev runtime (`@velotype/velotype/jsx-dev-runtime`), so builds use `"jsx": "react-jsxdev"` whatever `deno.json` sets. The project's own setting can stay `react-jsx` for production builds. Every velotype import loads one shared copy of the dev runtime, served at `/__velo/velotype.js`.

In `module` mode a changed module is updated on its own when all of its exports are components, or when it calls `import.meta.hot.accept()`. Otherwise the modules that import it run again, and the page reloads when the change reaches the entry module. `import.meta.hot.dispose(callback)` runs `callback(import.meta.hot.data)` before a module runs again, to release what it set up.

A build error is logged in the browser, and the page keeps running the last working code. When the server restarts, the page reloads.

What velotype does with a hot update is in [Development tools](/docs/velotype/development-tools/#hot-reloading). The [hot-reload-demo](https://github.com/Velotype/example-velotype-projects/tree/main/hot-reload-demo) is an app that runs in each mode.
