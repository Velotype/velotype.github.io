# Inspectors

An `Inspector` runs before and after the handlers of a path. It is a pair of functions, and both are optional:

* A **request inspector** runs before the handler. It returns a `RequestInspectorResponse`. An empty one continues to the handler. One with a `response` ends the request early, and that response starts the response chain
* A **response inspector** runs after the handler, and sees each response. It can read or change the response, and returns nothing

`new Inspector(requestInspector?, responseInspector?, observeChildPaths = true)`

By default an inspector also runs for the paths below its own. Pass `false` as the third argument to inspect only its own path.

Use `addGetInspector()`, `addHeadInspector()`, or `addPostInspector()` to add an inspector for one HTTP method, and `addAllInspector()` for GET, HEAD, and POST. Each takes a path or an Array of paths. The path `""` is the root, so an inspector there sees every request.

@example inspectors.ts

Output:

@output inspectors.ts

Common uses are logging and timing (a request inspector that records the start in the [metadata](/docs/veloserver/request-metadata/), and a response inspector that logs), authentication (a request inspector that returns a `401`), and setting headers on every response.
