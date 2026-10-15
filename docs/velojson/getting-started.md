# Getting started

velojson, or VSON (Velocity JSON), is a compact binary wire format for JavaScript JSON data. Any data representable with JSON in JavaScript is representable with VSON, and the other way around. No types or capabilities are added: it is a one-to-one mapping, so it can replace JSON between two programs without changing what they send.

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

```tsx
import { VSON } from "@velotype/velojson"

const startObj = { name: "Some name", age: 20, address: null }

// encode() returns a Uint8Array. Any JSON value can be encoded, and nothing else is added.
const objBinary: Uint8Array = VSON.encode(startObj)
console.log("VSON bytes:", objBinary.length)
console.log("JSON bytes:", JSON.stringify(startObj).length)

// decode() reads any VSON format, and returns the value
const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))

// Every JSON value works, not only objects
for (const value of [null, true, 42, 3.14, "text", [1, 2, 3], {nested: {list: ["a", "b"]}}]) {
    const roundTripped = VSON.decode(VSON.encode(value))
    console.log(JSON.stringify(value), "->", JSON.stringify(roundTripped))
}

// undefined is handled as JSON.parse(JSON.stringify(value)) handles it:
// an object key with the value undefined is left out, and undefined in an Array becomes null
console.log(JSON.stringify(VSON.decode(VSON.encode({ a: 1, b: null, c: undefined }))))
console.log(JSON.stringify(VSON.decode(VSON.encode([1, null, undefined]))))

// undefined itself encodes to zero bytes, and zero bytes decode to undefined
console.log(VSON.encode(undefined).length, VSON.decode(new Uint8Array()))
```
Output:

```text
VSON bytes: 34
JSON bytes: 44
{"name":"Some name","age":20,"address":null}
null -> null
true -> true
42 -> 42
3.14 -> 3.14
"text" -> "text"
[1,2,3] -> [1,2,3]
{"nested":{"list":["a","b"]}} -> {"nested":{"list":["a","b"]}}
{"a":1,"b":null}
[1,null,null]
0 undefined
```
### undefined

`undefined` is handled as `JSON.parse(JSON.stringify(value))` handles it:

* An object key with the value `undefined` is left out
* `undefined` in an Array becomes `null`
* `undefined` passed directly to `encode()` is encoded in zero bytes, and zero bytes decode to `undefined`

## Which format?

`encode()` uses the Key Table format for an object or an Array, which is typically smaller than JSON. Choose another with the second argument. [Formats](/docs/velojson/formats/) compares them, and [VBIN](/docs/velojson/vbin/) covers the fast one.
