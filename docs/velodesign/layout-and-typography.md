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

```tsx
import { Grid, Heading, Paragraph, Stack, Text } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

replaceElementWithRoot(
    <Stack direction="column" gap="lg">
        {/* Typography. Heading requires a level, because a default would quietly produce a second <h1>. */}
        <Heading level={1}>A page</Heading>
        <Heading level={2} type="muted">A muted subheading</Heading>
        <Paragraph>Body text, with <Text strong>strong</Text>, <Text italic>italic</Text>, <Text underline>underline</Text>, <Text strike>strike</Text>, and <Text code>code</Text>.</Paragraph>
        <Paragraph>
            <Text type="muted">muted</Text> <Text type="primary">primary</Text> <Text type="secondary">secondary</Text> <Text type="warning">warning</Text> <Text type="danger">danger</Text>
        </Paragraph>
        <Text numeric>1,234.50</Text>

        {/* Stack: a row or a column, with a gap from a scale ("none" "xs" "sm" "md" "lg" "xl") or any CSS length */}
        <Stack>one<span>two</span><span>three</span></Stack>
        <Stack direction="column" gap="xs" align="start">
            <span>a column</span>
            <span>that does not stretch its children</span>
        </Stack>
        <Stack justify="between" align="center" gap="2rem" wrap={false}>
            <span>left</span><span>right</span>
        </Stack>
        <Stack inline gap="sm"><span>an inline</span><span>stack</span></Stack>

        {/* Grid: as many columns as fit minColumnWidth, with no media query. A fixed count is columns. */}
        <Grid minColumnWidth="10em" gap="md">
            <div>one</div><div>two</div><div>three</div><div>four</div>
        </Grid>
        <Grid columns={3} gap="sm" align="start">
            <div>one</div><div>two</div><div>three</div>
        </Grid>
    </Stack>,
    document.getElementById("app")!,
)
```