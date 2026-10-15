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
