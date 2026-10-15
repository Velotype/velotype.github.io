# Request metadata

`Context.meta` holds typed metadata for each request. It is useful for data that a request needs from start to finish, such as a start time, an authenticated user, or a request id.

The Router's type parameter is the metadata type, and the `context_metadata_constructor` option creates it from each request. The metadata is created before any inspector or handler runs.

@example metadata.ts

Output:

@output metadata.ts

## Context

A `Context<ContextMetadata>` is created for each request and passed to every inspector and handler.

| Member | Description |
|---|---|
| `meta` | The metadata the router's `context_metadata_constructor` created |
| `pathVariables?: Map<string, string>` | The path variables the route captured, if any |
| `url: URL` | The request's URL, parsed on first access and then cached, so a request that never reads it never pays for the parse |
| `getPathParts(): string[]` | `url.pathname.split("/")` |
| `addPathVariable(name, value)` | Captures a path variable |

Metadata is also how an inspector hands data to a handler: see [Inspectors](/docs/veloserver/inspectors/).
