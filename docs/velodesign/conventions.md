# Conventions

What every component has in common, and the functions and objects around the components.

## Attrs

Every component's attrs type is named `<Name>AttrsType`, such as `ButtonAttrsType`, and exported. Each is built from shared pieces, which velotype exports too:

* **`id`, `class`, and `style`** are accepted by components, and set on the element the component renders. `class` is added to the element's own classes rather than replacing them
* **`children`** are accepted by the components that take content, such as `Button`, `Card`, and `Alert`
* A component's own attrs are the rest

A component is a function component unless it needs state or a lifecycle, such as `Modal`, `Navbar`, and `TableOfContents`, which are classes. In TSX they are used the same way.

## Native elements

A component built on an element passes that element's attributes through, and uses the platform for the rest. A `Checkbox` is an `<input type="checkbox">` with a label, so it works with forms, keyboard, and autofill, and a `Modal` is a `<dialog>`.

## No language is assumed

The library has no built-in text. ARIA labels and placeholders have no default, because a default would be one language. Set the labels yourself, such as `dismissLabel` on an `Alert`, or `menuLabel` on a `Navbar`.

`S` is a store of strings by key, and `T` renders one, with an optional plural:

```tsx
import { LocalizedString, S, T } from "@velotype/velodesign"

// The library has no built-in text: it does not assume a language, so ARIA labels and
// placeholders have no default. S is a store of strings by key, and T renders one.
S.a("greeting", "Hello")

// A string with a plural form, chosen by a number
S.aS(new LocalizedString("items", "1 item", "many items"))

console.log(S.g("greeting"))     // Hello
console.log(S.g("items", 1))     // 1 item
console.log(S.g("items", 5))     // many items
console.log(S.g("missing"))      // -- missing --  (and an error is logged)

// <T k="..."/> renders a string in TSX, and n is the number for a plural
const message = <p><T k="greeting"/>, you have <T k="items" n={3}/></p>
document.body.append(message)
```
| Function | Does |
|---|---|
| `S.a(key, value)` | Adds a string |
| `S.aS(localizedString)` | Adds a `LocalizedString`, which can have a plural form |
| `S.g(key, n?)` | Gets a string. With `n`, it chooses the plural form unless `n` is `1`. A missing key logs an error and returns `-- key --` |
| `<T k="key" n={n}/>` | Renders a string in TSX |

## Toasts and icons

`showToast(message, options?)` is a function, not a component, because a toast has no place in your tree. Call it from a handler. It keeps one container at the bottom right of the page. The options are `type`, `duration` (milliseconds before it is dismissed, default `4000`, and `0` keeps it), and `dismissLabel`.

An `Icon` is a width, a height, and an SVG path. `registerIcon(key, icon)` registers it, and `<I i={key}/>` renders it as an inline SVG, `1em` tall, in the current text color.

```tsx
import { Button, I, Icon, registerIcon, showToast } from "@velotype/velodesign"

// showToast() is a function, not a component: call it from a handler. It keeps one container at the
// bottom right of the page, and removes each toast after its duration (4000ms by default, 0 keeps it).
const toastButton = <Button type="primary" onClick={() => {
    showToast("Saved your changes", {type: "success"})
    showToast("Stays until dismissed", {type: "warning", duration: 0, dismissLabel: "Dismiss"})
}}>Show toasts</Button>

// An Icon is a width, a height, and an SVG path. Register it under a key, and render it with <I/>.
// It is drawn 1em tall in the current text color.
registerIcon("check", new Icon(24, 24, "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"))

document.body.append(toastButton, <p>Done <I i="check"/></p>, <I i="check" style={{height: "2em"}}/>)
```
## Routing

`Link` is a plain anchor, so open in a new tab, copy link address, and drag to a bookmark all work. Add `spa` and a click changes the location with `history.pushState()` instead of loading a page.

`NavLink` is a `Link` that knows whether it is the current page. It gets the class `vtd-nav-link-active`, or the `activeClass` you give it. `exact` is `true` by default, and matches the whole path. With `false` it matches any path that starts with `to`.

`History.changeLocation(path)` does a `pushState` and dispatches a `locationchange` event, which `NavLink` and `PageSelector` listen for. `History.loadNewPageLocation(path)` loads the page.

### Serving from a sub-path

An app that is not at the root of its domain, such as a GitHub Pages project site at `/my-repo/`, calls `History.configureBasePath("/my-repo")` once at startup. The app's own paths then leave the base path out: `Link` and `NavLink` add it to what they write, `NavLink` and `PageSelector` match against the path without it, and `changeLocation()` adds it. `History.getPathname()` is the location's path without the base path, and `History.resolveHref(path)` is a path with it.

```tsx
import { History, Link, NavLink, Navbar } from "@velotype/velodesign"

// An app served from a sub-path, such as a GitHub Pages project site at /my-repo/, sets its base path
// once at startup. Paths in the app then do not include it: Link and NavLink add it to hrefs, and
// getPathname() takes it off the location.
History.configureBasePath("/my-repo")
console.log(History.resolveHref("/docs/"))   // /my-repo/docs/
console.log(History.getPathname())           // the location's path, without /my-repo

// A Link is a plain anchor, so open-in-new-tab, copy-link, and drag-to-bookmark all work.
// spa makes a click change the location with history.pushState() instead of loading a page.
const links = <nav>
    <Link to="/docs/">A normal link</Link>
    <Link to="/docs/" spa>A client-side link</Link>
</nav>

// A NavLink is a Link that knows whether it is the current page: it gets the class
// "vtd-nav-link-active", or the one you give as activeClass. exact (default true) matches the whole
// path, and false matches any path that starts with it.
const nav = <Navbar brand={<NavLink to="/" spa>Home</NavLink>}>
    <NavLink to="/docs/" spa exact={false} activeClass="current">Docs</NavLink>
    <NavLink to="/about/" spa>About</NavLink>
</Navbar>

// Change the location from code. changeLocation() does a pushState and dispatches a "locationchange"
// event, which NavLink listens for. loadNewPageLocation() loads the page for real.
const button = <button type="button" onClick={() => History.changeLocation("/docs/")}>Go to docs</button>

document.body.append(nav, links, button)
```
## Updating only what changed

Components do the smallest DOM update that expresses a change, and none when nothing changed, so focus, caret position, text selection, scroll position, and running transitions survive. When you build on them, do the same: use [RenderObjects](/docs/velotype/render-objects/) rather than `refresh()` for state that changes.
