# Theming and accessibility

velochart draws with CSS custom properties, so charts follow the page's theme in light and in dark. It gives screen readers the numbers rather than a picture, and keyboard readers the same marks a pointer gets.

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

`ChartThemeOptions.seriesColors` is the palette series take in order. A chart with no data shows velodesign's `Empty`, so `CommonThemeOptions.emptySymbol` is what it shows, along with velodesign's tables. A series or a slice can set its own `color`, and a chart can set its own `emptyMessage`.

```tsx
import { BarChart, ChartThemeOptions } from "@velotype/velochart"
import { CommonThemeOptions, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

// Read when a chart draws, so set these while the app starts, before the first chart exists.
// var() keeps the palette following the theme, in light and in dark.
ChartThemeOptions.seriesColors = ["var(--secondary)", "var(--accent)", "var(--primary)"]
CommonThemeOptions.emptySymbol = () => "No data yet"

const data = [
    {label: "Mon", values: {done: 4, open: 2}},
    {label: "Tue", values: {done: 6, open: 1, late: 1}},
]
const series = [
    {key: "done", label: "Done"},
    {key: "open", label: "Open"},
    // One series can still take its own color.
    {key: "late", label: "Late", color: "var(--warning)"},
]

replaceElementWithRoot(
    <BarChart title="Tasks" data={data} series={series} stacked/>,
    document.getElementById("app")!,
)
```
Use `var(...)` for colors. A hex value looks right in one theme and wrong in the other.

## Patterns

`patterns` fills series with one of six patterns over their color, dashes their lines, and marks the legend the same way, for readers who can't tell the hues apart and for printing in one ink. `ChartThemeOptions.patterns = true` turns it on for every chart. A chart with `renderer="canvas"` draws plain fills.

## Accessibility

A chart with tabular values renders them in a visually hidden table, and hides the drawing from assistive technology. The caption is `ariaLabel` or `title`, there is a row per category, and values go through `formatValue`, so what is read aloud matches the axis. Past `maxTableRows`, 1000 by default, the table samples evenly.

The drawing is one focus stop. Inside it:

| Key | What it does |
|---|---|
| Arrow keys | Move through the points, marks, or cells, showing each tooltip and saying it through a live region |
| Home, End | Go to the first or last |
| Enter, Space | Activate it, as `onPointClick` |
| Escape | Clear it |
| `+`, `-`, `0` | Zoom, and go back to everything, on a chart with `zoom` |
| Shift and an arrow | Pan, on a chart with `zoom` |

Tab always leaves. Legend entries are real buttons, focusable on their own.

A `Gauge` has no table, because one number against a range is what a label already says. It is `role="img"` with `ariaLabel` or `title` as its name, so give it one that states the value.

A `Sparkline` is `aria-hidden` unless you set `ariaLabel`. Next to the number it illustrates that is what you want, and when it stands alone, set the label.

The library has no built-in text. Column headers of the hidden tables have no default: `PieChart` and `FunnelChart` take `valueLabel` and `shareLabel`, `PolarAreaChart` takes `valueLabel`, and `SankeyChart` takes `tableLabels`. Labels a sighted reader sees default to symbols, as with `CandlestickChart`'s O, H, L, C, and take a `labels` attr. Dates read in the browser's own language.
