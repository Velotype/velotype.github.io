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
