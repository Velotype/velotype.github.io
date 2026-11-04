# Theming and accessibility

velochart draws with CSS custom properties, so charts follow the page's theme in light and in dark, and it gives screen readers the numbers rather than a picture.

## The theme

velochart depends on velotype alone. Its colors come from these custom properties:

| Property | Used for |
|---|---|
| `--text` | Titles, legend names, and center labels |
| `--background`, `--background-1` to `--background-9` | Tooltips, grid lines, axes, ticks, and the gauge's track |
| `--primary`, `--secondary`, `--accent`, `--warning`, and their `-7` steps | Series colors |

[velodesign's](/docs/velodesign/theming/) `Theme.injectStyles()` defines all of them, so a page that uses velodesign needs nothing more. A page without velodesign has to define them itself, or the charts draw without their colors.

Styles are in the `velochart.base` and `velochart.component` cascade layers. A rule of yours outside a layer always wins, whatever its specificity.

## Series colors and the empty symbol

`ChartThemeOptions.seriesColors` is the palette series take in order, and `emptySymbol` is what a chart with no data shows. A series or a slice can set its own `color`, and a chart can set its own `emptyMessage`.

@example theme.tsx

Use `var(...)` for colors. A hex value looks right in one theme and wrong in the other.

## Accessibility

A chart with tabular values renders them in a visually hidden table, and hides the drawing from assistive technology. The caption is `ariaLabel` or `title`, there is a row per category, and values go through `formatValue`, so what is read aloud matches the axis.

A `Gauge` has no table, because one number against a range is what a label already says. It is `role="img"` with `ariaLabel` or `title` as its name, so give it one that states the value.

A `Sparkline` is `aria-hidden` unless you set `ariaLabel`. Next to the number it illustrates that is what you want, and when it stands alone, set the label.

The library has no built-in text for you to translate, with one exception today: the column headers of `PieChart`'s hidden table are "Value" and "Share".
