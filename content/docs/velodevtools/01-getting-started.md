# Getting started

Velotype DevTools is a Chrome extension for debugging [Velotype](/docs/velotype/) apps. It adds three panels to Chrome DevTools, and a toolbar popup that shows whether Velotype is on the page.

| Panel | Shows |
|---|---|
| [Velotype](/docs/velodevtools/panels/#velotype) | The page's live component tree, and the fields of each component |
| [Velotype Events](/docs/velodevtools/panels/#velotype-events) | What is registered on the event bus |
| [VeloJSON](/docs/velodevtools/panels/#velojson) | VSON and VBIN payloads, decoded |

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

Open DevTools on a page that uses Velotype, and the panels are in the tabs.

While developing the extension, `deno task watch` rebuilds on change. After it rebuilds, reload the extension from `chrome://extensions`, and refresh the inspected page, since content scripts are only injected on navigation. `deno task typecheck` checks the source.

## It needs the devtools hook

Velotype keeps the map from DOM elements to its live Component and RenderObject instances to itself. The extension reads it through a hook, `window.__VELOTYPE_DEVTOOLS_HOOK__`, which every current Velotype entry point installs. If a site uses Velotype and the tree is empty, its Velotype bundle predates the hook: update Velotype.

Several Velotype instances can be on one page (micro-frontends, or different versions in different bundles). Each registers separately with its own version, and their components do not collide.

## An app to try it on

This is a small Velotype app with fields worth looking at: a Component with attrs, a `RenderBasic`, a `RenderObject` that holds an object, a `Map`, and an event bus listener.

@example demo-app.tsx

Open it in a page, open DevTools, and look in the **Velotype** panel for `Profile`, and in **Velotype Events** for the `profile-updated` key.
