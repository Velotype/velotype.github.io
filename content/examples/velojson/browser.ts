// The browser module is tuned for size (about 4.3kb minified) rather than speed. It supports the
// KeyTable format only, which is what VSON.encode() uses for an object or an Array.
import { VSON } from "@velotype/velojson/browser"
import { VSON as ServerVSON } from "@velotype/velojson"

const message = {user: "ada", items: [{id: 1, label: "one"}, {id: 2, label: "two"}]}

const bytes = VSON.encode(message)
console.log(bytes.length, "bytes")
console.log(JSON.stringify(VSON.decode(bytes)))

// It produces the same bytes as the server module, so either side can decode what the other encodes
const serverBytes = ServerVSON.encode(message)
console.log("same bytes as the server module:", bytes.length == serverBytes.length && bytes.every((byte, index) => byte == serverBytes[index]))
console.log(JSON.stringify(ServerVSON.decode(bytes)))
