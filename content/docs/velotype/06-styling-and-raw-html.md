# Styling and raw HTML

## Stylesheets

`setStylesheet(css, key, reset = false)` adds a stylesheet to the page, using `document.adoptedStyleSheets`, once per `key`. Call it from a Component's constructor or `render()` every time, and it adds no duplicates.

By default a key that is already added is left alone. Pass `true` as the third argument to replace the stylesheet already added under `key`.

@example stylesheet.tsx

In development, with the `jsx-dev-runtime`, `setStylesheet()` replaces a sheet whose text has changed, so styles update when their module runs again.

## Inline styles

The `style` attribute takes an object. See [style objects](/docs/velotype/#style-objects) for what is checked.

## Raw HTML, SVG, and MathML

velotype creates TSX tags as HTML elements, so SVG and MathML content is added with the `SVG` and `MATH` Components. They set a string of markup as the `innerHTML` of an `<svg>` or `<math>` element. `HTML` does the same on any HTML tag, which is a `<div>` unless you pass `tag`.

The markup is not escaped, so only use content that is known to be safe.

@example raw-html.tsx

| Component | Attrs |
|---|---|
| `HTML` | `innerHTML`, `tag` (default `div`), and `elementAttrs` for the element's attributes |
| `SVG` | `innerHTML`, and `elementAttrs` for the `<svg>` element's attributes |
| `MATH` | `innerHTML`, and `elementAttrs` for the `<math>` element's attributes |
