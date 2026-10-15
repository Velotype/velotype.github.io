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

@example theme.tsx

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

@example theme-symbols.tsx
