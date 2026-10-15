# Conventions

What every component has in common, and the functions and objects around the components.

## Attrs

Every component's attrs type is named `<Name>AttrsType`, such as `ButtonAttrsType`, and exported. Each is built from shared pieces, which Velotype exports too:

* **`id`, `class`, and `style`** are accepted by components, and set on the element the component renders. `class` is added to the element's own classes rather than replacing them
* **`children`** are accepted by the components that take content, such as `Button`, `Card`, and `Alert`
* A component's own attrs are the rest

A component is a function component unless it needs state or a lifecycle, such as `Modal`, `Navbar`, and `TableOfContents`, which are classes. In TSX they are used the same way.

## Native elements

A component built on an element passes that element's attributes through, and uses the platform for the rest. A `Checkbox` is an `<input type="checkbox">` with a label, so it works with forms, keyboard, and autofill, and a `Modal` is a `<dialog>`.

## No language is assumed

The library has no built-in text. ARIA labels and placeholders have no default, because a default would be one language. Set the labels yourself, such as `dismissLabel` on an `Alert`, or `menuLabel` on a `Navbar`.

`S` is a store of strings by key, and `T` renders one, with an optional plural:

@example strings.tsx

| Function | Does |
|---|---|
| `S.a(key, value)` | Adds a string |
| `S.aS(localizedString)` | Adds a `LocalizedString`, which can have a plural form |
| `S.g(key, n?)` | Gets a string. With `n`, it chooses the plural form unless `n` is `1`. A missing key logs an error and returns `-- key --` |
| `<T k="key" n={n}/>` | Renders a string in TSX |

## Toasts and icons

`showToast(message, options?)` is a function, not a component, because a toast has no place in your tree. Call it from a handler. It keeps one container at the bottom right of the page. The options are `type`, `duration` (milliseconds before it is dismissed, default `4000`, and `0` keeps it), and `dismissLabel`.

An `Icon` is a width, a height, and an SVG path. `registerIcon(key, icon)` registers it, and `<I i={key}/>` renders it as an inline SVG, `1em` tall, in the current text color.

@example toast-and-icons.tsx

## Routing

`Link` is a plain anchor, so open in a new tab, copy link address, and drag to a bookmark all work. Add `spa` and a click changes the location with `history.pushState()` instead of loading a page.

`NavLink` is a `Link` that knows whether it is the current page. It gets the class `vtd-nav-link-active`, or the `activeClass` you give it. `exact` is `true` by default, and matches the whole path. With `false` it matches any path that starts with `to`.

`History.changeLocation(path)` does a `pushState` and dispatches a `locationchange` event, which `NavLink` and `PageSelector` listen for. `History.loadNewPageLocation(path)` loads the page.

@example routing.tsx

## Updating only what changed

Components do the smallest DOM update that expresses a change, and none when nothing changed, so focus, caret position, text selection, scroll position, and running transitions survive. When you build on them, do the same: use [RenderObjects](/docs/velotype/render-objects/) rather than `refresh()` for state that changes.
