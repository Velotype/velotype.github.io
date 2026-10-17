# The Velocity Project

> A suite of TypeScript libraries for building software platforms end to end: a browser UI framework that creates real DOM elements (no virtual DOM), a themed component library, server-side TSX rendering, a web server, and a compact binary JSON wire format. They are written for Deno, published to JSR under @velotype, and developed in the Velotype GitHub organization (https://github.com/Velotype).

Each project stands on its own and they are designed to fit together: veloserver serves pages and APIs, velossr or velotype renders them, velodesign supplies UI components for velotype, and velojson (VSON) carries data between server and browser. The projects are pre-1.0, so APIs can change between versions: pin versions, and read each repository's release-notes.md.

## Read this before writing code with these libraries

- **velotype is not React.** It has no virtual DOM, no reconciler, and no hooks (there is no useState or useEffect). A TSX tag evaluates to a real DOM element: `<div/>` is an HTMLDivElement. Components are classes that extend `Component`, state lives in class fields, and a value that changes is rendered in place by a `RenderObject`, `RenderBasic`, `RenderObjectArray`, or `RenderTemplateArray`. Do not call `refresh()` for routine updates: it throws away and rebuilds the component's children.
- **Attributes are HTML attributes.** Write `class`, not `className`. The `style` attribute takes an object only (a string has not type-checked since velotype 0.0.25). Event attributes start with `on`: `onClick`.
- **Mount with `replaceElementWithRoot(<App/>, document.getElementById("app"))`.** Components are mounted by velotype only when inserted through velotype, not with `appendChild()`.
- **Server and browser TSX are different packages.** Browser code uses `"jsxImportSource": "@velotype/velotype"` and server code uses `"@velotype/velossr"`, so keep them in separate directories with their own deno.json.
- **Do not mix velotype versions in one app.** A velodesign release is built on one velotype version, and the Versions section below says which.
- **Conditionals:** `{condition && <li/>}` works in velotype and in velossr 0.0.10 or later. In velomicro and velomini (and velossr before 0.0.10) a `false` child is written as the text "false", so use `{condition ? <li/> : null}`.
- **velodesign:** call `Theme.injectStyles()` once before any component renders. The library has no built-in text, so ARIA labels and placeholders have no defaults: pass them in.
- **veloserver:** `new Router<Metadata>({})`, add routes with `get`, `head`, and `post`, then `new Server(router).serve("127.0.0.1", 3000)`. Serving needs `--allow-net` and nothing else.
- **velojson:** `VSON.encode(value)` and `VSON.decode(bytes)`. The Key Table format is the default for objects and arrays. All three formats are smaller than JSON text (VBIN, which needs agreed key IDs, is the smallest), but on current engines they run slower than native JSON.stringify() and JSON.parse(), so choose them for payload size. The `/browser` module supports Key Table only.
- **velomicro and velomini** are small teaching frameworks (about 1kb and 2.5kb), not for applications. Use velotype for an app.
- **Velotype DevTools** is a Chrome extension that is built from source and loaded unpacked. It is not a library.

## How to use these docs

Every docs page is available as Markdown at the links below. Every code example in the docs is a real file that is type-checked against the published package and then run, so prefer the docs' examples to code written from memory. If something is not in the docs, say so rather than guessing at an API.
