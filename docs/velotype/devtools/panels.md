# Panels

## Velotype

The live component tree for the page, like React DevTools. Each node shows its class name and its DOM anchor, the element it is attached to. For a class Component it also shows its `attrs` and its own instance fields, including the live values of `RenderObject` and `RenderBasic` fields.

* Click a node to inspect it, and the element is highlighted on the page
* Fields are an expand and collapse tree. An object, Array, Map, or Set field expands to its live values at any depth, fetched fresh from the page each time you expand it, and kept live for branches that are already expanded

A page with iframes shows each frame that has velotype as its own root, labelled with its address.

Try it on the [demo app](/docs/velotype/devtools/#an-app-to-try-it-on): `Profile` has a `settings` RenderObject whose value is an object holding a nested object and a `Set`, and a `history` `Map`.

## Velotype Events

A snapshot of the event bus's current registrations: every listening key, how many listeners are on it, and, resolved against velotype's registry, which live Components and RenderObjects they belong to.

It is useful for finding leaked listeners, and for checking that something is listening on a key at all. In the demo app, `profile-updated` has one listener for each `Profile`.

**Trace.** Press Start trace to list events as they are emitted, newest first: the listening key, the event's name, what emitted it, a summary of its data, and who was listening. Hover a component to highlight it on the page. The trace starts when you press Start and keeps the last 1,000 events, and Stop ends it. It needs velotype 0.3.2 or later, which calls the extension's tracer just before the first listener of each event runs.

## VeloJSON

Decodes [velojson](/docs/velojson/) payloads.

**Network.** While the panel is open it inspects the bodies of network requests and responses, and lists those that are VSON or VBIN, decoded as JSON. A body is decoded when its `Content-Type` is `application/vson` or `application/vbin`. A `; charset=utf-8` suffix does not matter. A body with another content type is never attempted, and a body with one of these content types is always decoded, so a failure shows the real error.

Request bodies are read as the exact bytes your page sent. While the panel is open, the extension watches the page's `fetch`, `XMLHttpRequest`, and `navigator.sendBeacon` calls and keeps the bytes of VSON and VBIN bodies, so binary bodies decode correctly. A request that did not come from your page's JavaScript has no captured bytes and is not decoded.

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

The toolbar popup shows whether velotype is present on the current page, without opening DevTools.
