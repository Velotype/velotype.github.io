# Getting started

velojson, or VSON (Velocity JSON), is a compact binary wire format for JavaScript JSON data. Any data representable with JSON in JavaScript is representable with VSON, and the other way around. No types or capabilities are added: it is a one-to-one mapping, so it can replace JSON between two programs without changing what they send.

To try it without installing anything, use the [playground](/projects/velojson/playground/), which encodes JSON to VSON and decodes bytes back to JSON in your browser.

Every example in these docs is a file that is type-checked against the published package and run, and the output shown is what the example printed.

## Install

velojson is a [JSR package](https://jsr.io/@velotype/velojson):

```sh
deno add jsr:@velotype/velojson
```

It has two modules:

| Import | For |
|---|---|
| `@velotype/velojson` | Servers. Optimized for speed, and supports every format: Base, Key Table, and VBIN |
| `@velotype/velojson/browser` | Browsers. Optimized for size (about 4.3kb minified), and supports the Key Table format only |

## Encode and decode

`VSON.encode(value)` returns a `Uint8Array`, and `VSON.decode(bytes)` returns the value. `decode()` reads the format from the data, so it takes no format argument.

@example encode-decode.ts

Output:

@output encode-decode.ts

### undefined

`undefined` is handled as `JSON.parse(JSON.stringify(value))` handles it:

* An object key with the value `undefined` is left out
* `undefined` in an Array becomes `null`
* `undefined` passed directly to `encode()` is encoded in zero bytes, and zero bytes decode to `undefined`

## Which format?

`encode()` uses the Key Table format for an object or an Array, which is typically smaller than JSON. Choose another with the second argument. [Formats](/docs/velojson/formats/) compares them, and [VBIN](/docs/velojson/vbin/) covers the fast one.
