# Wire format

The format of each message, for implementing VSON in another language or reading bytes by hand.

## Values

Every value is a `VStruct` that starts with one varint, `A`, built from a key (or key length) and a 3 bit wire type:

| Wire type | Value | Encoded value that follows |
|---|---|---|
| 0 | `null` | none |
| 1 | `false` | none |
| 2 | `true` | none |
| 3 | positive integer | a positive varint (1 to 7 bytes), for zero and up to `Number.isSafeInteger()` |
| 4 | double | 8 bytes, little endian, for any other number |
| 5 | string | a length varint, then UTF-8 bytes |
| 6 | object | a length varint, then a series of `VStruct`s, each with a key |
| 7 | array | a length varint with a homogenous bit, then `VStruct`s with no key |

The bytes of a few values, in the Base format:

```tsx
import { EncodingFormat, VSON } from "@velotype/velojson"

// The bytes of a few values in the Base format, to read alongside the format specification.
// Each value starts with a varint: the encoding format (0 for Base) shifted past 3 bits of wire type.
const show = (label: string, value: unknown) => {
    const bytes = VSON.encode(value, EncodingFormat.Base)
    console.log(label.padEnd(12), [...bytes].map(byte => byte.toString(16).padStart(2, "0")).join(" "))
}

show("null", null)           // wire type 0
show("false", false)         // wire type 1
show("true", true)           // wire type 2
show("42", 42)               // wire type 3: a positive integer, as a varint
show("1.5", 1.5)             // wire type 4: a double, 8 bytes little endian
show('"hi"', "hi")           // wire type 5: a length, then UTF-8
show("[]", [])               // wire type 7
show("{}", {})               // wire type 6
show('{"a":1}', {a: 1})      // a key length and wire type, the key, then the value
```
```text
null         00
false        01
true         02
42           03 2a
1.5          04 00 00 00 00 00 00 f8 3f
"hi"         05 02 68 69
[]           07 00
{}           06 00
{"a":1}      06 03 0b 61 01
```
Reading them: the root of `{"a":1}` is `06` (format 0, wire type 6: an object), `03` (the body is 3 bytes), `0b` (key length 1, wire type 3: a positive integer), `61` (the key `a`), and `01` (the value).

## Base

`VRoot` is `{A: encoding format (0) ++ wire type}{C?: encoded value}`.

`VStruct` is `{A: key length ++ wire type}{B?: key}{C?: encoded value}`, where `A` is a positive varint of the key's length in bytes followed by 3 bits for the wire type, `B` is the UTF-8 key (absent for the root and for array items), and `C` is the encoded value. In the Base format a key length of zero encodes the empty-string key `""`.

### Arrays

An array is `{A}{B?}{C}` with `C` as `{LENGTH ++ 0}{VALUE?}` for a heterogenous array, or `{LENGTH ++ 1}{WIRETYPE}{VALUE}` for a homogenous one. `LENGTH` is a positive varint. A homogenous array's values all have one wire type, which is written once, and skip their own wire type byte. The encoder may choose either encoding for a homogenous array.

## Key Table

`VRoot` is `{A: encoding format (1) ++ wire type}{C: encoded value}{D: encoded key table}`, and the root must be an object or an Array.

Keys are replaced by a 1-indexed key index into the table: `VStruct` is `{A: key index ++ wire type}{C?: encoded value}`, where an index of zero means no key. `D` is a homogenous string array of all the keys.

## VBIN

`VRoot` is `{A: encoding format (2) ++ wire type}{C: encoded value}`, and the root must be an object.

`VStruct` is `{A: key index ++ wire type}{C?: encoded value}`, where the key index is the KeyID, which the encoder and decoder agreed on ahead of time. There is no key table.
