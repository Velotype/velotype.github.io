# Routes

`get()`, `head()`, and `post()` add a handler for a path, or for several paths when given an array. A handler receives the `Request` and its `Context`, and returns a `Response` or a Promise of one.

## Paths

* `:name` matches one path segment and stores it as a path variable, read with `context.pathVariables?.get("name")`
* `*` at the end of a path matches any remaining segments
* A static segment takes priority over a path variable or a wildcard at the same position

@example routes.ts

Output:

@output routes.ts

## Responses

`router.json(request, context, data)` returns a JSON response with status 200.

## Error responses

The Router options set the handlers for the cases a route cannot handle. Each has a default:

| Option | Used when |
|---|---|
| `not_found_handler` | No route matches the path |
| `bad_request_error_handler` | A handler returns `router.badRequest()`. The router never calls it on its own |
| `server_error_handler` | A handler throws, or returns `router.serverError()` |

`router.badRequest(request, context)` and `router.serverError(request, context)` return the router's own error responses, so a handler can send them. An error that a handler throws is logged.

@example error-handlers.ts

Output:

@output error-handlers.ts
