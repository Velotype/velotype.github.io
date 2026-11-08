# Getting started

velochart is a chart library for [velotype](/docs/velotype/). Charts are drawn in SVG at the real pixel width of their container, so text stays the same size in a sidebar and on a dashboard, and a chart with tabular values gives screen readers those values as a table.

It is built on [velodesign](/docs/velodesign/), the general component library, so its legends, buttons and other controls are velodesign's.

Every example in these docs is a file that is type-checked against the published package, and run in a browser.

## Install

velochart is a [JSR package](https://jsr.io/@velotype/velochart) for Deno, built on velotype. Add it with the same velotype as the rest of your app, because mixing velotype versions in one app is not supported. The example below also uses velodesign for its theme.

```sh
deno add jsr:@velotype/velotype@0.3.3 jsr:@velotype/velodesign@0.4.1 jsr:@velotype/velochart@0.0.3
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velotype",
        "lib": ["dom", "deno.ns", "esnext"]
    }
}
```

Bundle velochart and velodesign together with your app. Bundled together, both packages share one copy of velotype. Bundled separately, each keeps its own, and components then fail with "Class constructor cannot be invoked without 'new'".

## Use it

A chart takes `data`, with one entry per category, and `series`, which says what to plot. Each entry's `values` are keyed by the series' `key`:

```tsx
import { LineChart } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

// velochart takes its colors from the CSS custom properties that velodesign's theme defines.
Theme.injectStyles()

const data = [
    {label: "Jan", values: {revenue: 12, costs: 8}},
    {label: "Feb", values: {revenue: 19, costs: 11}},
    {label: "Mar", values: {revenue: 15, costs: 10}},
    {label: "Apr", values: {revenue: 27, costs: 15}},
]
const series = [
    {key: "revenue", label: "Revenue"},
    {key: "costs", label: "Costs"},
]

replaceElementWithRoot(
    <LineChart
        title="Revenue and costs"
        data={data}
        series={series}
        height={240}
        formatValue={(n) => `$${n}k`}/>,
    document.getElementById("app")!,
)
```
A chart redraws itself when its container resizes. To show new data, call its `update` method, which [Exploring and updating](/docs/velochart/exploring-and-updating/) covers.

## What is in the library

| Category | Charts |
|---|---|
| Cartesian | `LineChart`, `AreaChart`, `BarChart`, `MixedChart`, `ScatterChart`, `BubbleChart`, `HistogramChart`, `WaterfallChart`, `BoxPlotChart`, `CandlestickChart` |
| Radial | `PieChart`, `Gauge`, `RadarChart`, `PolarAreaChart` |
| Matrix | `Heatmap`, `CalendarHeatmap` |
| Hierarchy | `Treemap`, `SunburstChart` |
| Flow | `FunnelChart`, `SankeyChart` |
| Inline | `Sparkline` |

## Next steps

* [Charts](/docs/velochart/charts/): every chart, and what to reach for when
* [Exploring and updating](/docs/velochart/exploring-and-updating/): axes, zoom, annotations, live data, and export
* [Theming and accessibility](/docs/velochart/theming-and-accessibility/): colors, the keyboard, and what a screen reader gets
