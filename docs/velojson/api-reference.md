# API reference

## @velotype/velojson

| Export | Description |
|---|---|
| [`VSON.encode(value, encodingFormat?)`](/docs/velojson/#encode-and-decode) | Encodes any JSON value to a `Uint8Array`. The format defaults to Key Table for an object or an Array, and Base otherwise. Throws on an error |
| `VSON.decode(data)` | Decodes Base and Key Table data (and VBIN, in the debug format). Returns `undefined` for zero bytes |
| [`VBIN.decode(data, mapper)`](/docs/velojson/vbin/#reading) | Decodes VBIN data with a `VBINObjectMapper` |
| `EncodingFormat` | An enum: `Base` (0), `KeyTable` (1), `KeyID` (2) |
| `WireType` | An enum: `Null`, `False`, `True`, `PosInt`, `Double`, `String`, `Object`, `Array` |
| `JSONValue` | `null \| boolean \| number \| string \| JSONValue[] \| {[key: string]: JSONValue}` |
| `VBINObjectMapper` | `{assignValue, hasAllRequiredFields, fieldMapper}` |
| [VBIN writers](/docs/velojson/vbin/#writing) | `VBINRootWriter`, `VBINObjectWriter`, `VBINArrayWriter`, `VBINNumberArrayWriter`, `VBINHomogenousStringArrayWriter`, `VBINHomogenousPosIntArrayWriter`, `VBINHomogenousDoubleArrayWriter`, `VBINHomogenousObjectArrayWriter` |

### VBINRootWriter

| Method | Description |
|---|---|
| `startRootObject(): VBINObjectWriter` | Starts the root object |
| `finalizeRootObject(childWriter)` | Ends the root object |
| `toUint8ArrayAndRelease(): Uint8Array` | The bytes. The writer is released |

### VBINObjectWriter

| Method | Description |
|---|---|
| `encodeBooleanValue(keyID, value)` | A boolean |
| `encodePosIntValue(keyID, value)` | A non-negative integer |
| `encodeDoubleValue(keyID, value)` | A double |
| `encodeNumberValue(keyID, value)` | A number, as an integer or a double |
| `encodeStringValue(keyID, value)` | A string |
| `finalizeObject(keyID, childWriter)` | A nested object |
| `finalizeArray(keyID, childWriter)` | A mixed Array |
| `finalizeNumberArray(keyID, childWriter)` | An Array of numbers |
| `finalizeHomogenousStringArray(keyID, childWriter)` | An Array of strings |
| `finalizeHomogenousPosIntArray(keyID, childWriter)` | An Array of non-negative integers |
| `finalizeHomogenousDoubleArray(keyID, childWriter)` | An Array of doubles |
| `finalizeHomogenousObjectArray(keyID, childWriter)` | An Array of objects |
| `toUint8Array()`, `release()` | The bytes so far, and releasing the writer |

The array writers have matching `encode...InArray` and `encode...InHomogenousArray` methods, such as `VBINArrayWriter.encodeStringValueInArray(value)` and `VBINHomogenousPosIntArrayWriter.encodePosIntValueInHomogenousArray(value)`, and `VBINHomogenousObjectArrayWriter.finalizeObjectInHomogenousArray(childWriter)`.

## @velotype/velojson/browser

| Export | Description |
|---|---|
| `VSON.encode(value)` | Encodes an object or an Array in the Key Table format |
| `VSON.decode(data)` | Decodes Key Table data |
| `WireType` | The wire types, as a plain object |
| `JSONValue` | The type of an encodable value |
