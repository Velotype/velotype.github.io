# API reference

Everything `@velotype/veloserver` and `@velotype/veloserver/dev` export.

## Router

`class Router<ContextMetadata>`

`new Router({not_found_handler?, bad_request_error_handler?, server_error_handler?, context_metadata_constructor?})`

| Member | Description |
|---|---|
| `get(paths, handler)` | Adds a handler for HTTP GET on a path or Array of paths |
| `head(paths, handler)` | Adds a handler for HTTP HEAD |
| `post(paths, handler)` | Adds a handler for HTTP POST |
| `addGetInspector(paths, inspector)` | Adds an inspector for GET |
| `addHeadInspector(paths, inspector)` | Adds an inspector for HEAD |
| `addPostInspector(paths, inspector)` | Adds an inspector for POST |
| `addAllInspector(paths, inspector)` | Adds an inspector for GET, HEAD, and POST |
| `mountFile(mountPath, targetFile, memoized = true)` | Serves one file on GET |
| `mountFiles(mountDir, targetDir, memoized = true)` | Serves a directory on GET |
| `json(request, context, data)` | A 200 JSON response |
| `badRequest(request, context)` | The router's 400 response |
| `serverError(request, context)` | The router's 500 response |
| `requestHandler: (request: Request) => Promise<Response>` | Processes a request. It is what `Deno.serve()` is given, and it is bound to the router |

See [Routes](/docs/veloserver/routes/).

## Server

`class Server<ContextMetadata = never>`

| Member | Description |
|---|---|
| `constructor(router)` | Serves all routes in `router` |
| `serve(hostname, port, options?)` | Calls `Deno.serve()`. `ServeOptions` has `exitProcessOnClose?: boolean` |
| `close(reason?)` | Stops the server |
| `addServerListenCallback(callback)` | Runs after the server starts listening |
| `addServerFinishedCallback(callback)` | Runs after the server has finished |

See [Running the server](/docs/veloserver/running-the-server/).

## Context

`class Context<ContextMetadata = undefined>`: `meta`, `pathVariables?`, `url`, `getPathParts()`, and `addPathVariable(name, value)`. See [Request metadata](/docs/veloserver/request-metadata/#context).

## Inspectors

| Export | Description |
|---|---|
| `Inspector<ContextMetadata>` | `new Inspector(requestInspector?, responseInspector?, observeChildPaths = true)` |
| `RequestInspectorResponse` | `new RequestInspectorResponse(response?)`. With a `response`, the request ends early |

See [Inspectors](/docs/veloserver/inspectors/).

## Types

| Type | Definition |
|---|---|
| `Handler<ContextMetadata>` | `(request: Request, context: Context<ContextMetadata>) => Response \| Promise<Response>` |
| `RequestInspector<ContextMetadata>` | `(request: Request, context: Context<ContextMetadata>) => RequestInspectorResponse \| Promise<RequestInspectorResponse>` |
| `ResponseInspector<ContextMetadata>` | `(request: Request, response: Response, context: Context<ContextMetadata>) => void \| Promise<void>` |
| `Callback` | `(() => void) \| (() => Promise<void>)` |
| `ServeOptions` | `{exitProcessOnClose?: boolean}` |

## DevServer

From `@velotype/veloserver/dev`.

`class DevServer`: `new DevServer(options: DevServerOptions)`

| Member | Description |
|---|---|
| `mode: DevMode` | How the page is updated when a file changes |
| `mount(router): Promise<void>` | Adds the development routes to `router`, builds the app, and starts watching its files |
| `pageScripts(): string` | The scripts to write into the app's pages, for the current mode |
| `close(): void` | Stops watching files and closes the connections to browsers |

`type DevMode = "module" | "bundle" | "reload" | "off"`. `DevServerOptions` is in [Running the server](/docs/veloserver/running-the-server/#options).
