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

@example vbin.ts

Output:

@output vbin.ts

## Debugging

`VSON.decode()` reads a VBIN message too, in a debug format: a plain object keyed by KeyID, such as `{"1": 7, "2": "Widget"}`. This is what the [VeloJSON panel](/docs/velotype/devtools/) of the DevTools extension shows for a VBIN payload.

## Generating the code

Writers and mappers are repetitive, and must agree with each other. Generate them from a schema rather than writing them by hand.
