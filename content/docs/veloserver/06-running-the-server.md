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

@example shutdown.ts

Output:

@output shutdown.ts

## Development server

`@velotype/veloserver/dev` exports `DevServer`, which serves a [velotype](/docs/velotype/) app during development and updates the page when its files change.

@example _dev-server.ts

### Modes

`mode` sets how the page is updated when a file changes:

| Mode | Serves | On a change |
|---|---|---|
| `module` | each module unbundled, transpiled on request | re-runs the changed modules, and the components on the page keep their state |
| `bundle` | the app bundle | rebuilds and re-runs the bundle, and the components on the page keep their state |
| `reload` | the app bundle | rebuilds the bundle and reloads the page |
| `off` | the `production` scripts | nothing, and no development routes are added |

`pageScripts()` writes the scripts for the current mode, so switching modes needs no change to the page. In `off` mode it writes the `production` option's import map and scripts:

@example dev-server-off.ts

Output:

@output dev-server-off.ts

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
