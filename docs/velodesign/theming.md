# Theming

Components get their colors from CSS custom properties, set on `<html>` by `Theme.injectStyles()`. Change the palette by passing colors, and every component follows. The theme also switches between light and dark.

## Colors

`Theme.injectStyles(options?, includeCSSReset = true)` takes a `ThemeColorOptions`. Every field is optional, and each color has a light value and a dark value:

| Color | Light option | Dark option | Used for |
|---|---|---|---|
| text | `textLightColor` | `textDarkColor` | Text |
| background | `backgroundLightColor`, `backgroundLightAltColor` | `backgroundDarkColor`, `backgroundDarkAltColor` | The page, and the surfaces on it |
| primary | `primaryLightColor` | `primaryDarkColor` | The main action and the current item |
| secondary | `secondaryLightColor` | `secondaryDarkColor` | A second accent |
| warning | `warningLightColor` | `warningDarkColor` | Cautions |
| accent | `accentLightColor` | `accentDarkColor` | Danger and errors |

The custom properties are:

* `--text` is the text color, and `--text-alt` is the opposite one
* `--background` is the page's color, `--background-1` to `--background-9` mix it toward `--background-alt` in steps, and `--background-alt` is the alternate. Components use the steps for borders, hovers, and the chrome around content
* `--primary`, `--secondary`, `--warning`, and `--accent` are the colors you set. `--primary-1` to `--primary-9` mix each toward white and black in steps, with `--primary-5` equal to `--primary`. Components use them for fills, borders, and hovers

You can use them in your own CSS, so your styles follow the theme too: `color: var(--primary-7)`.

`includeCSSReset` adds a small CSS reset. Pass `false` to leave your own in place.

## Light and dark

The theme is `light` or `dark`, set as `data-theme` on the `<html>` element. `ColorScheme` manages it:

| Function | Does |
|---|---|
| `getColorScheme()` | The scheme in effect: `"light"` or `"dark"`. A choice of `"default"` has already become one of these |
| `getColorSchemePreference()` | What the reader chose: `"light"`, `"dark"`, or `"default"`. A theme picker shows this one as selected, because `getColorScheme()` cannot tell a reader who chose light from one whose browser prefers it |
| `setColorScheme(scheme)` | Takes `"light"`, `"dark"`, or `"default"` to follow the browser's preference, and remembers it in `localStorage` |
| `resetColorScheme()` | Applies the stored choice, or the browser's preference when there is none |

`Theme.injectStyles()` applies the stored choice, or the browser's preference, to start.

## Theming part of a page

`setThemeOnSelector(selector, options?, resetSheet = false)` sets the same properties on any selector, not only `<html>`. The selected elements need `data-theme="light"` or `data-theme="dark"`.

It adds its stylesheet once per selector. Calling it again for the same selector with different options does nothing, unless `resetSheet` is `true`, which replaces the stylesheet. A live theme editor does this to preview changes.

```tsx
import { ColorScheme, setThemeOnSelector, Theme } from "@velotype/velodesign"

// Pass colors to change the palette. Every field is optional, and each has a light and a dark value.
// Each of primary, secondary, warning, and accent becomes a ramp of CSS variables: --primary is the
// color you gave, and --primary-1 to --primary-9 mix it toward white and black in steps, which
// components use for fills, borders, and hovers.
Theme.injectStyles({
    primaryLightColor: "#0b6bcb",
    primaryDarkColor: "#5aa9ff",
    accentLightColor: "#c4314b",
    accentDarkColor: "#ff6b81",
})

// The color scheme in effect is "light" or "dark", written to data-theme on <html>
console.log(ColorScheme.getColorScheme())

// setColorScheme() takes "light", "dark", or "default" (follow the browser's preference), and
// remembers the choice in localStorage
ColorScheme.setColorScheme("default")

// getColorScheme() is what is in effect, so "default" has already become "light" or "dark".
// getColorSchemePreference() is what the reader chose, "default" included, which is what a theme
// picker needs to show as selected.
console.log(ColorScheme.getColorScheme(), ColorScheme.getColorSchemePreference())

ColorScheme.setColorScheme("dark")
console.log(ColorScheme.getColorScheme(), ColorScheme.getColorSchemePreference())

// Go back to the stored choice, or the browser's preference when there is none
ColorScheme.resetColorScheme()

// Theme any part of the page, not only <html>. The selected elements need data-theme="light" or "dark".
const panel = document.createElement("section")
panel.className = "brand-panel"
panel.setAttribute("data-theme", "dark")
document.body.append(panel)
setThemeOnSelector(".brand-panel", {backgroundDarkColor: "#10202f"})

// Calling it again for the same selector does nothing unless resetSheet is true, which replaces the
// stylesheet. A live theme editor does this to preview changes.
setThemeOnSelector(".brand-panel", {backgroundDarkColor: "#201030"}, true)
```
## Symbols

A few small glyphs, such as a close control or a next arrow, are theme symbols. A symbol is a component with no attrs, so it can be an icon, an image, or text. The package's defaults are `✕` (close and cancel), `✓` (confirm), `∅` (empty), `…` (collapse), and `‹` and `›` (previous and next).

`CommonThemeOptions` holds the symbols that more than one component uses:

| Field | Used by |
|---|---|
| `closeSymbol` | `Alert`, `Toast`, `Tag`, `Modal`, `Drawer` |
| `cancelSymbol` | `Modal`'s footer, `Popconfirm`, an inline edit |
| `confirmSymbol` | `Popconfirm`, an inline edit, a completed `Steps` step |
| `emptySymbol` | `Empty`, the tables, every chart |
| `collapseSymbol` | `Breadcrumbs`, `Pagination` |
| `prevSymbol`, `nextSymbol` | `Pagination`, the calendars, `Carousel`, `AsyncDataTable` |

Each component also has its own options object, such as `AlertThemeOptions` and `ModalThemeOptions`. A field on it falls back to the common one until you assign it, so the common one sets all of them, and a component's own one overrides it for that component alone.

Assign symbols once at startup, before the first component that uses them is built. A symbol is a field on an object read when a component is built, not a CSS property, so changing one affects components built after it, and nothing re-renders. `resetThemeOptions(options, ...fields)` puts the package's defaults back, all of them or the named fields.

```tsx
import { Alert, AlertThemeOptions, CommonThemeOptions, Modal, ModalThemeOptions, resetThemeOptions } from "@velotype/velodesign"

// A theme symbol is a component with no attrs that the library draws for a small glyph, such as a
// close control. It is a field on an options object, not a CSS property, so assign it ONCE at
// startup, before the first component that uses it is built. There is no re-render when it changes.
CommonThemeOptions.closeSymbol = () => <b>x</b>   // Alert, Toast, Tag, Modal, Drawer
CommonThemeOptions.nextSymbol = () => <span>next</span>
CommonThemeOptions.prevSymbol = () => <span>back</span>

// A component's own options override the shared one for that component alone
ModalThemeOptions.closeSymbol = () => <b>close</b>
console.log(typeof AlertThemeOptions.closeSymbol)

// The package's defaults: ✕ ✓ ∅ … ‹ ›. resetThemeOptions() puts them back, all or by field.
resetThemeOptions(ModalThemeOptions)
resetThemeOptions(CommonThemeOptions, "nextSymbol", "prevSymbol")

document.body.append(<Alert type="info" onDismiss={() => {}} dismissLabel="Dismiss">An alert with a custom close</Alert>)
void Modal
```