# Islands

A page can be mostly static HTML from the server, with interactive parts, called islands, that Velotype takes over in the browser.

There is no hydration step that turns the server's HTML into live components. The server renders the markup for each island, and the data its component is created with. The browser then creates the component from the data and swaps it in with `replaceElementWithRoot()`. The server's HTML is shown until the swap, which happens in one step when the page's script runs.

## The server half

The server writes two things for each island: its markup, in an element with an `id`, and its data, as JSON in a `<script type="application/json">` next to it. The JSON is written so that no string in it can end the script early, which is why the data below can contain `</script>`.

Keep the server's markup the same structure as what the browser component renders, so that nothing moves when the island is replaced.

@example island.tsx

Output:

@output island.tsx

## The browser half

The browser half is in the [Velotype docs](/docs/velotype/server-rendering/). It reads each island's data, creates the component, copies what the visitor typed into the server's form fields, and swaps the element in.
