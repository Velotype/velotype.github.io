# VBIN

VBIN is the format for two programs that share a schema, such as a server and a client generated from the same definition. Instead of sending key names, or a table of them, it sends a number for each key, called a KeyID. It is the smallest of the three formats.

Because the KeyIDs are agreed ahead of time, using VBIN takes more code than `VSON.encode()`: you write the values with writers, and read them with a mapper.

## Writing

Create a `VBINRootWriter`, start the root object, write each value under its KeyID, and finalize the object. The root of a VBIN message must be an object.

| Writer | Writes |
|---|---|
| `VBINRootWriter` | The root: `startRootObject()`, `finalizeRootObject(object)`, and `toUint8ArrayAndRelease()` |
| `VBINObjectWriter` | An object's fields: `encodePosIntValue`, `encodeDoubleValue`, `encodeNumberValue`, `encodeStringValue`, `encodeBooleanValue`, and the `finalize...` methods for nested values |
| `VBINArrayWriter` | An Array of mixed values |
| `VBINNumberArrayWriter` | An Array of numbers, some integers and some doubles |
| `VBINHomogenousStringArrayWriter` | An Array of only strings |
| `VBINHomogenousPosIntArrayWriter` | An Array of only non-negative integers |
| `VBINHomogenousDoubleArrayWriter` | An Array of only doubles |
| `VBINHomogenousObjectArrayWriter` | An Array of only objects |

An array or a nested object is written with its own writer, and then finalized into its parent under a KeyID: `finalizeArray`, `finalizeNumberArray`, `finalizeHomogenousStringArray`, `finalizeHomogenousPosIntArray`, `finalizeHomogenousDoubleArray`, `finalizeHomogenousObjectArray`, and `finalizeObject`.

The `encode...Value` methods of an object accept `undefined`, which writes nothing, as an `undefined` key is left out in the other formats.

## Reading

`VBIN.decode(bytes, mapper)` reads a message with a `VBINObjectMapper`, which maps each KeyID back to a field:

| Member | Description |
|---|---|
| `assignValue(object, keyID, value)` | Sets the field for `keyID` on the object being built |
| `hasAllRequiredFields(object)` | Called at the end of an object. Return `false` to reject a message with a missing field. `decode()` then throws |
| `fieldMapper(keyID)` | For a field that is itself an object, returns the mapper for its fields |

```tsx
import {
    VBIN,
    type VBINObjectMapper,
    VBINObjectWriter,
    VBINHomogenousStringArrayWriter,
    VBINRootWriter,
    VSON,
} from "@velotype/velojson"

// VBIN does not send key names. The encoder and decoder agree on a number for each key (a KeyID)
// ahead of time, which is why it is smaller and faster than the other formats.
type Product = {
    id: number        // KeyID 1
    name: string      // KeyID 2
    inStock: boolean  // KeyID 3
    tags: string[]    // KeyID 4
}

const product: Product = {id: 7, name: "Widget", inStock: true, tags: ["tools", "metal"]}

// Encode with writers. Each value is written under its KeyID.
function encodeProduct(product: Product): Uint8Array {
    const root = new VBINRootWriter()
    const object: VBINObjectWriter = root.startRootObject()
    object.encodePosIntValue(1, product.id)
    object.encodeStringValue(2, product.name)
    object.encodeBooleanValue(3, product.inStock)

    // An array is written with its own writer, and then finalized into the object under a KeyID
    const tags = new VBINHomogenousStringArrayWriter()
    product.tags.forEach(tag => tags.encodeStringValueInHomogenousArray(tag))
    object.finalizeHomogenousStringArray(4, tags)

    root.finalizeRootObject(object)
    return root.toUint8ArrayAndRelease()
}

// Decode with a mapper that turns each KeyID back into a field
const productMapper: VBINObjectMapper = {
    assignValue: (object, keyID, value) => {
        switch (keyID) {
            case 1: object.id = value; break
            case 2: object.name = value; break
            case 3: object.inStock = value; break
            case 4: object.tags = value; break
        }
    },
    // Called at the end of an object: return false to reject it, such as when a field is missing
    hasAllRequiredFields: (object) => object.id !== undefined && object.name !== undefined,
    // For a field that is itself an object, return the mapper for its KeyID
    fieldMapper: () => undefined,
}

const bytes = encodeProduct(product)
console.log("VBIN bytes:", bytes.length)
console.log("VSON bytes:", VSON.encode(product).length)
console.log("JSON bytes:", JSON.stringify(product).length)

const decoded: Product = VBIN.decode(bytes, productMapper)
console.log(JSON.stringify(decoded))

// VSON.decode() reads VBIN too, in a debug format: a plain object keyed by KeyID
console.log(JSON.stringify(VSON.decode(bytes)))

// A message that is missing a required field is rejected
const incomplete = new VBINRootWriter()
const empty = incomplete.startRootObject()
empty.encodePosIntValue(1, 1)
incomplete.finalizeRootObject(empty)
try {
    VBIN.decode(incomplete.toUint8ArrayAndRelease(), productMapper)
} catch (error) {
    console.log("rejected:", (error as Error).message)
}
```
Output:

```text
VBIN bytes: 28
VSON bytes: 51
JSON bytes: 64
{"id":7,"name":"Widget","inStock":true,"tags":["tools","metal"]}
{"1":7,"2":"Widget","3":true,"4":["tools","metal"]}
rejected: velojson: missing required field
```
## Debugging

`VSON.decode()` reads a VBIN message too, in a debug format: a plain object keyed by KeyID, such as `{"1": 7, "2": "Widget"}`. This is what the [VeloJSON panel](/docs/velotype/devtools/) of the DevTools extension shows for a VBIN payload.

## Generating the code

Writers and mappers are repetitive, and must agree with each other. Generate them from a schema rather than writing them by hand.
