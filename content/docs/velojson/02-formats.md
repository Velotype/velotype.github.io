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

It is also much faster, because the key names are never encoded or decoded as UTF-8 strings or used as a string index on the constructed object. See [VBIN](/docs/velojson/vbin/).

## Comparing sizes

@example formats.ts

Output:

@output formats.ts

## Speed

The VSON formats (Base and Key Table) typically run slower than native `JSON.stringify()` and `JSON.parse()`, which are heavily optimized in the engine. For the rare case of many complex numbers VSON outperforms them. The VBIN format performs significantly faster than native JSON.

Choose VSON for the smaller payload, and VBIN for speed and size.
