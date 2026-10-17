# Server rendering

velotype renders in the browser. To send a page's HTML from the server, render it with [velossr](/docs/velossr/), the server-side version of velotype. It has its own components built for rendering on the server: static parts are prepared once, and async parts are streamed.

## No hydration step

There is no hydration step that turns the server's HTML into live velotype Components. velotype creates elements as TSX runs, so the interactive parts of a page are rendered again in the browser, and each one replaces the server's HTML for it with `replaceElementWithRoot()`. Rendering again is fast, the swap happens in one step when the page's script runs, and the server's HTML is shown until then.

This is the island pattern:

1. The server renders the markup for each interactive part (an island), and the data its Component is created with, as JSON in a `<script type="application/json">`
2. The browser creates each island's Component from its data and swaps it in, keeping what the user typed into the server's form fields before the script ran

The server half is in the [velossr docs](/docs/velossr/). This is the browser half:

@example hydrate.tsx

* Keep the server's markup and the Component's render the same structure, so that nothing moves when the island is replaced
* The server and browser files use different JSX settings (`"jsxImportSource": "@velotype/velossr"` and `"@velotype/velotype"`), so keep them in separate directories with their own `deno.json`, or set it per file with a `/** @jsxImportSource @velotype/velossr */` comment
