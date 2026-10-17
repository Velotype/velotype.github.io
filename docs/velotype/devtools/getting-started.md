# Getting started

Velotype DevTools is a Chrome extension for debugging [velotype](/docs/velotype/) apps. It adds three panels to Chrome DevTools, and a toolbar popup that shows whether velotype is on the page.

| Panel | Shows |
|---|---|
| [Velotype](/docs/velotype/devtools/panels/#velotype) | The page's live component tree, and the fields of each component |
| [Velotype Events](/docs/velotype/devtools/panels/#velotype-events) | What is registered on the event bus |
| [VeloJSON](/docs/velotype/devtools/panels/#velojson) | VSON and VBIN payloads, decoded |

## Install

The extension is built from source, and loaded into Chrome as an unpacked extension. It needs [Deno](https://deno.com), and no npm or `node_modules`.

```sh
git clone https://github.com/Velotype/velodevtools
cd velodevtools
deno task build
```

`deno task build` copies the static files (including the icons) and bundles the extension into `dist/`. Then, in Chrome:

1. Open `chrome://extensions`
2. Turn on **Developer mode**
3. Choose **Load unpacked**, and select the `dist/` folder

Open DevTools on a page that uses velotype, and the panels are in the tabs.

While developing the extension, `deno task watch` rebuilds on change. After it rebuilds, reload the extension from `chrome://extensions`, and refresh the inspected page, since content scripts are only injected on navigation. `deno task typecheck` checks the source.

## It needs the devtools hook

velotype keeps the map from DOM elements to its live Component and RenderObject instances to itself. The extension reads it through a hook, `window.__VELOTYPE_DEVTOOLS_HOOK__`, which every current velotype entry point installs. If a site uses velotype and the tree is empty, its velotype bundle predates the hook: update velotype.

Several velotype instances can be on one page (micro-frontends, or different versions in different bundles). Each registers separately with its own version, and their components do not collide.

## An app to try it on

This is a small velotype app with fields worth looking at: a Component with attrs, a `RenderBasic`, a `RenderObject` that holds an object, a `Map`, and an event bus listener.

```tsx
import { Component, type EmptyAttrs, emitEvent, registerEventListener, RenderBasic, RenderObject, replaceElementWithRoot, VelotypeEvent } from "@velotype/velotype"

type Settings = {theme: string, notifications: {email: boolean, sms: boolean}, tags: Set<string>}

// A Component with fields to look at in the Velotype panel: attrs, a RenderBasic, a RenderObject
// holding an object (which expands to its live values), and a Map
class Profile extends Component<{name: string}> {
    visits = new RenderBasic<number>(0)
    settings = new RenderObject<Settings>(
        {theme: "dark", notifications: {email: true, sms: false}, tags: new Set(["admin", "beta"])},
        (settings: Settings) => <div>Theme: {settings.theme}</div>,
    )
    history: Map<string, number> = new Map([["login", 1], ["logout", 0]])

    // A listener, which the Velotype Events panel lists under the key "profile-updated"
    override mount() {
        registerEventListener(this, "profile-updated", () => { this.visits.value += 1 })
    }

    override render(attrs: Readonly<{name: string}>) {
        return <section>
            <h2>{attrs.name}</h2>
            <p>Visits: {this.visits}</p>
            {this.settings}
            <button type="button" onClick={() => emitEvent("profile-updated", new VelotypeEvent(this, "updated"))}>Update</button>
        </section>
    }
}

class App extends Component<EmptyAttrs> {
    override render() {
        return <main>
            <Profile name="Ada"/>
            <Profile name="Grace"/>
        </main>
    }
}

replaceElementWithRoot(<App/>, document.getElementById("app"))
```
Open it in a page, open DevTools, and look in the **Velotype** panel for `Profile`, and in **Velotype Events** for the `profile-updated` key.
