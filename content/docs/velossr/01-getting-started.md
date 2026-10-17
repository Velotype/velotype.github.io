# Getting started

velossr renders TSX to HTML on the server. There is no virtual DOM diffing and no client runtime: components run once per request and produce bytes, either all at once or streamed as async pieces resolve.

It is the server-side version of [velotype](/docs/velotype/)'s TSX. Use it to send a page's HTML from the server, and use velotype for the parts of the page that are interactive. Every example in these docs is a file that is type-checked against the published package and run, and the output shown is what the example printed.

## Install

velossr is a [JSR package](https://jsr.io/@velotype/velossr) for Deno. Add it, and point the TSX compiler at it in `deno.json`:

```sh
deno add jsr:@velotype/velossr
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velossr"
    }
}
```

A project that has both a server and a browser app needs two JSX settings, because the browser's TSX is velotype's (`"jsxImportSource": "@velotype/velotype"`). Keep them in separate directories with their own `deno.json`, or set it per file with a `/** @jsxImportSource @velotype/velossr */` comment.

## A page and a server

velossr pairs naturally with [veloserver](/docs/veloserver/). A page is a component, `prepareHTMLVNodeForRendering()` prepares it once, and `renderServerVNode()` renders it for each request.

@example server.tsx

Output:

@output server.tsx

## Writing TSX for the server

Each tag creates a server-side element. Nothing touches a DOM: the element is a description that velossr writes out as HTML.

### Attributes are HTML attributes

velossr writes attributes as strings, so you write TSX the same as if you were writing HTML. Style objects resolve camelCase keys to kebab-case CSS. A `true` boolean attribute is written bare, and a `false` one is left out. Event listener attributes (`onClick`) cannot work on the server: they are left out and a warning is logged.

### Conditional rendering

`false`, `null`, and `undefined` children render nothing, so `{condition && <li/>}` works as it does in velotype. `true` is written as text. Before velossr 0.0.10 a `false` child was written as the text `false`, so use `{condition ? <li/> : null}` if you are on an older version.

### Fragments

`<>...</>` groups children without a wrapper element.

@example attributes-and-escaping.tsx

Output:

@output attributes-and-escaping.tsx

## Next steps

* [Components](/docs/velossr/components/): static and dynamic components
* [Rendering](/docs/velossr/rendering/): preparing pages, and sending them whole or streamed
* [Escaping and embedding](/docs/velossr/escaping-and-embedding/): what is escaped, and inline scripts, styles, and JSON
* [Islands](/docs/velossr/islands/): interactive parts of a server-rendered page
