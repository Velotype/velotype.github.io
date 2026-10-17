# Getting started

veloserver is a web server framework for Deno. It has a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates velotype apps.

Every example in these docs is a file that is type-checked against the published package and run, and the output shown is what the example printed. veloserver also logs its own messages when it starts, stops, and mounts files. Those are not shown.

## Install

veloserver is a [JSR package](https://jsr.io/@velotype/veloserver) for Deno:

```sh
deno add jsr:@velotype/veloserver
```

## A server

A `Router` holds routes, and a `Server` serves a router. `serve(hostname, port)` calls `Deno.serve()`. The server needs `--allow-net` and no other permission to serve:

```sh
deno run --allow-net server.ts
```

@example hello.ts

Output:

@output hello.ts

The `<never>` in `new Router<never>({})` is the type of the router's [request metadata](/docs/veloserver/request-metadata/). `never` means this router has none.

## Next steps

* [Routes](/docs/veloserver/routes/): paths, path variables, wildcards, and error responses
* [Request metadata](/docs/veloserver/request-metadata/): typed data for each request
* [Inspectors](/docs/veloserver/inspectors/): code that runs before and after handlers
* [Static files](/docs/veloserver/static-files/): serving a directory
* [Running the server](/docs/veloserver/running-the-server/): shutting down, and the development server
