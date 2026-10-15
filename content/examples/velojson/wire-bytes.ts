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
