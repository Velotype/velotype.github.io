# Formats

VSON has three encoding formats. Each one solves a cost of the one before it. A message's format is written in its first byte, so `VSON.decode()` reads Base and Key Table messages without being told which.

| Format | `EncodingFormat` | Keys are | Needs agreement ahead of time |
|---|---|---|---|
| Base | `EncodingFormat.Base` | written in full, each time | no |
| Key Table | `EncodingFormat.KeyTable` | written once, in a table at the end | no |
| VBIN | `EncodingFormat.KeyID` | not written, only numbered | yes: the KeyIDs |

## Base

A direct structural translation of JSON. Because it mirrors JSON's structure, it works for streaming and partial decoding. It is typically 20-25% smaller than the JSON text, and consistently smaller in nearly all cases.

## Key Table

All of an object's keys are collected into a table of strings appended to the root value, and each key in the data is a number that indexes the table. Every unique key is encoded once.

Compared with JSON text, it ranges from about 20% smaller, for a single object or many objects with mostly unique keys (where the table has little to deduplicate), up to about 65% smaller, for many records that share the same wide set of keys.

The root value must be an object or an Array. It is the default for those.

## VBIN

The Key Id format. It is like Key Table, but the table is not in the message. The encoder and decoder must already have agreed on a number for each key. VBIN is typically about 25% to 70% smaller than JSON text, following the same shape-dependent pattern, and it also skips the table's own overhead.

It also never encodes or decodes the key names as UTF-8 strings, or uses them as a string index on the constructed object. See [VBIN](/docs/velojson/vbin/).

## Comparing sizes

```tsx
import { EncodingFormat, VSON } from "@velotype/velojson"

// Many records that share the same keys: where the Key Table format helps most
const records = Array.from({length: 50}, (_, index) => ({
    id: index,
    firstName: "Ada",
    lastName: "Lovelace",
    emailAddress: `ada${index}@example.com`,
    isActive: index % 2 == 0,
}))
const json = JSON.stringify(records).length

// Base: a direct one-to-one translation of JSON. It can be streamed and partly decoded.
const base = VSON.encode(records, EncodingFormat.Base)

// KeyTable: every unique key is stored once, in a table at the end. It is the default for an
// object or an Array.
const keyTable = VSON.encode(records, EncodingFormat.KeyTable)
const byDefault = VSON.encode(records)

console.log("JSON text:", json, "bytes")
console.log("Base:     ", base.length, "bytes")
console.log("KeyTable: ", keyTable.length, "bytes")
console.log("The default is KeyTable:", byDefault.length == keyTable.length)

// decode() reads the format from the data, so it takes no format argument
console.log(JSON.stringify(VSON.decode(base)) == JSON.stringify(records))
console.log(JSON.stringify(VSON.decode(keyTable)) == JSON.stringify(records))

// KeyTable only supports an object or an Array at the root
try {
    VSON.encode("text", EncodingFormat.KeyTable)
} catch (error) {
    console.log((error as Error).message)
}
```
Output:

```text
JSON text: 5056 bytes
Base:      3893 bytes
KeyTable:  1988 bytes
The default is KeyTable: true
true
true
velojson: KeyTable encoding format only supported for root Object or Array types
```
## Speed

The formats are implemented in TypeScript, and typically run slower than the engine's native `JSON.stringify()` and `JSON.parse()`, which are heavily optimized. For the rare case of many complex numbers VSON outperforms them.

Choose them for the smaller payload: VSON when the encoder and decoder share nothing, and VBIN when they share a schema.
