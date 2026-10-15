# Layout and typography

`Stack` and `Grid`, and `Heading`, `Text`, and `Paragraph`, are the primitives that everything else is composed from.

## Typography

* **`Heading`** renders `<h1>` to `<h6>`. `level` is required, because a default would quietly produce a second `<h1>` on a page that already has one. Size comes from the level, so the visual hierarchy and the document outline cannot disagree
* **`Text`** is inline text with modifiers: `strong`, `italic`, `underline`, `strike`, `numeric` (tabular figures, so digits line up and a changing value does not shift its neighbours), and `code` (a real `<code>` element)
* **`Paragraph`** is a block of prose with the package's line height and spacing
* **`type`** is a semantic color: `"muted"`, `"primary"`, `"secondary"`, `"warning"`, or `"danger"`. Leave it unset for the page's own text color. Use `type="muted"` for muted text: it is the right color in both themes

## Stack

`Stack` lays children out in a row or a column with a gap from one scale. It replaces `style={{display: "flex", gap: "0.5rem"}}`: every consumer spells it the same way, so two rows that look the same are the same.

| Attr | Values |
|---|---|
| `direction` | `"row"` (default) or `"column"` |
| `gap` | `"none"`, `"xs"` (0.25em), `"sm"` (0.5em), `"md"` (0.75em, default), `"lg"` (1.25em), `"xl"` (2em), or any CSS length |
| `align` | `"start"`, `"center"`, `"end"`, `"stretch"`, or `"baseline"`: how children line up across the stack |
| `justify` | `"start"`, `"center"`, `"end"`, `"between"`, or `"around"`: how children are spread along the stack |
| `wrap` | Let children wrap onto further lines (default: true for a row) |
| `inline` | Flow inline with surrounding text instead of taking a line of its own |

The gap scale is in `em`, not `px`, so spacing follows the type size.

A column `Stack` stretches its children, which is flexbox's own default. It is right for stacking cards or form fields, and surprising for badges. Use `align="start"` for those.

## Grid

`Grid` lays children out in columns.

| Attr | Description |
|---|---|
| `minColumnWidth` | Fit as many columns as will hold this width, then share the remainder (default: `"16em"`). It is `repeat(auto-fill, minmax(width, 1fr))`, so the grid reflows on its own, with no media query |
| `columns` | A fixed number of equal columns. Prefer `minColumnWidth` unless the count itself is meaningful, because a fixed count has to be chosen again at every breakpoint |
| `gap` | The same scale as `Stack` |
| `align` | How children line up within their cell |

@example layout.tsx
