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
