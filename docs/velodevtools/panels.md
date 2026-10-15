# Panels

## Velotype

The live component tree for the page, like React DevTools. Each node shows its class name and its DOM anchor, the element it is attached to. For a class Component it also shows its `attrs` and its own instance fields, including the live values of `RenderObject` and `RenderBasic` fields.

* Click a node to inspect it, and the element is highlighted on the page
* Fields are a real expand and collapse tree. An object, Array, Map, or Set field expands to its actual live values at any depth, fetched fresh from the page each time you expand it, and kept live for branches that are already expanded. A field is never a dead end that just says "Object"

Try it on the [demo app](/docs/velodevtools/#an-app-to-try-it-on): `Profile` has a `settings` RenderObject whose value is an object holding a nested object and a `Set`, and a `history` `Map`.

## Velotype Events

A snapshot of the event bus's current registrations: every listening key, how many listeners are on it, and, resolved against Velotype's registry, which live Components and RenderObjects they belong to.

It is useful for finding leaked listeners, and for checking that something is listening on a key at all. In the demo app, `profile-updated` has one listener for each `Profile`.

It shows what is registered, not what has fired. It is not a trace of events as they happen.

## VeloJSON

Decodes [velojson](/docs/velojson/) payloads.

**Network.** While the panel is open it inspects the bodies of network requests and responses, and lists those that are VSON or VBIN, decoded as JSON. A body is decoded when its `Content-Type` is `application/vson` or `application/vbin`. A `; charset=utf-8` suffix does not matter. A body with another content type is never attempted, and a body with one of these content types is always decoded, so a failure shows the real error.

The velojson docs' [browser](/docs/velojson/browser/) and the veloserver example below produce such responses:

```tsx
import { Router, Server } from "@velotype/veloserver"
import { VSON } from "@velotype/velojson"

// A server for trying the VeloJSON panel. The panel decodes a request or response body only when its
// Content-Type is application/vson or application/vbin (a "; charset=utf-8" suffix is fine).
const router = new Router<never>({})

router.get("/api/orders", () => {
    const orders = Array.from({length: 5}, (_, index) => ({id: index + 1, customer: "Ada", total: 9.99 * (index + 1)}))
    return new Response(VSON.encode(orders), {headers: {"content-type": "application/vson"}})
})

router.post("/api/orders", async (request) => {
    const order = VSON.decode(new Uint8Array(await request.arrayBuffer()))
    return new Response(VSON.encode({received: order}), {headers: {"content-type": "application/vson; charset=utf-8"}})
})

new Server(router).serve("127.0.0.1", 3000)
```
**Manual.** A decode tool turns bytes into JSON, and an encode tool turns JSON into bytes. Use it for a payload that has no content type, since it has no HTTP request to read one from.

**VBIN.** A VBIN payload can only be decoded in the debug format, where an object's keys are its numeric KeyIDs, such as `{"1": "hello"}`. The real field names come from a schema's `VBINObjectMapper`, which the extension cannot know for an arbitrary site. The panel labels VBIN output as such.

## The popup

The toolbar popup shows whether Velotype is present on the current page, without opening DevTools.
