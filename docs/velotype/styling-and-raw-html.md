# Styling and raw HTML

## Stylesheets

`setStylesheet(css, key, reset = false)` adds a stylesheet to the page, using `document.adoptedStyleSheets`, once per `key`. Call it from a Component's constructor or `render()` every time, and it adds no duplicates.

By default a key that is already added is left alone. Pass `true` as the third argument to replace the stylesheet already added under `key`.

```tsx
import { Component, type EmptyAttrs, type RenderableElements, setStylesheet } from "@velotype/velotype"

class Card extends Component<EmptyAttrs> {
    constructor(attrs: EmptyAttrs, children: RenderableElements[]) {
        super(attrs, children)
        // Adds the stylesheet to the page once per key, so calling this for every Card does not add duplicates
        setStylesheet(`.card { padding: 8px; border-radius: 4px; }`, "card")
    }

    override render() {
        return <div class="card">{this.children}</div>
    }
}

// Pass true as the third argument to replace the stylesheet already added under the key
setStylesheet(`.card { padding: 16px; border-radius: 8px; }`, "card", true)
void Card
```
In development, with the `jsx-dev-runtime`, `setStylesheet()` replaces a sheet whose text has changed, so styles update when their module runs again.

## Inline styles

The `style` attribute takes an object. See [style objects](/docs/velotype/#style-objects) for what is checked.

## Raw HTML, SVG, and MathML

Velotype creates TSX tags as HTML elements, so SVG and MathML content is added with the `SVG` and `MATH` Components. They set a string of markup as the `innerHTML` of an `<svg>` or `<math>` element. `HTML` does the same on any HTML tag, which is a `<div>` unless you pass `tag`.

The markup is not escaped, so only use content that is known to be safe.

```tsx
import { HTML, MATH, SVG } from "@velotype/velotype"

// SVG and MathML content is added with the SVG and MATH Components, which set a string of markup
// as the innerHTML of an <svg> or <math> element. HTML does the same on any HTML tag (a <div> by default).
// The markup is not escaped, so only use content that is known to be safe.
const icon = <SVG innerHTML={`<path d="M2 2 L10 10"/>`} elementAttrs={{viewBox: "0 0 12 12", width: "12", height: "12"}}/>
const formula = <MATH innerHTML="<mi>x</mi><mo>=</mo><mn>2</mn>"/>
const snippet = <HTML tag="p" innerHTML="Some <b>bold</b> text"/>

document.body.append(icon, formula, snippet)
```
| Component | Attrs |
|---|---|
| `HTML` | `innerHTML`, `tag` (default `div`), and `elementAttrs` for the element's attributes |
| `SVG` | `innerHTML`, and `elementAttrs` for the `<svg>` element's attributes |
| `MATH` | `innerHTML`, and `elementAttrs` for the `<math>` element's attributes |
