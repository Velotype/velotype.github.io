# Charts

Every velochart chart, by category. Each links to its page in the [showcase](https://velotype.github.io/velochart/), which has live examples, the props table, and the types it uses.

The showcase is built from the latest source, which can be ahead of the published package, and this guide targets the published 0.0.1.

## Cartesian

Charts with x and y axes. They all run on one engine, so everything in [exploring and updating](/docs/velochart/exploring-and-updating/) works on all of them.

| Chart | What it is |
|---|---|
| [`LineChart`](https://velotype.github.io/velochart/components/line-chart) | A line chart for trends, optionally filled and stacked. Hovering anywhere over the plot reads out every series at the nearest point. |
| [`AreaChart`](https://velotype.github.io/velochart/components/area-chart) | A filled line chart. Stack it to show how parts add up to a total. |
| [`BarChart`](https://velotype.github.io/velochart/components/bar-chart) | Comparing categories: vertical or horizontal, side by side or stacked. Negative values hang below the zero line. |
| [`MixedChart`](https://velotype.github.io/velochart/components/mixed-chart) | Different kinds of series on one set of axes, with a second y axis for a measure in other units. |
| [`ScatterChart`](https://velotype.github.io/velochart/components/scatter-chart) | Points placed by two values. A pointer reads the one point nearest it. |
| [`BubbleChart`](https://velotype.github.io/velochart/components/bubble-chart) | A scatter chart with a third value as size. Area follows the value, since area is what the eye reads. |
| [`HistogramChart`](https://velotype.github.io/velochart/components/histogram-chart) | Raw values counted into bins. |
| [`WaterfallChart`](https://velotype.github.io/velochart/components/waterfall-chart) | How a start becomes an end, each step hanging from where the last finished. |
| [`BoxPlotChart`](https://velotype.github.io/velochart/components/box-plot-chart) | How groups' values are spread. Give it raw values or a summary. |
| [`CandlestickChart`](https://velotype.github.io/velochart/components/candlestick-chart) | A price's range and its open and close for each period. Candle or OHLC. |

A missing value is a gap: a line breaks at it, a bar is absent, and the tooltip skips it. `spanGaps` joins a line across one.

@example cartesian.tsx

## Radial, matrix, hierarchy, and flow

| Chart | What it is |
|---|---|
| [`PieChart`](https://velotype.github.io/velochart/components/pie-chart) | A pie or donut for part-to-whole. Slices are drawn in the order given and never re-sorted. |
| [`Gauge`](https://velotype.github.io/velochart/components/gauge) | One value against a range, with optional colored bands. |
| [`RadarChart`](https://velotype.github.io/velochart/components/radar-chart) | Several measures around a circle, to compare things by their shape. The measures need comparable units. |
| [`PolarAreaChart`](https://velotype.github.io/velochart/components/polar-area-chart) | Equal slices that differ in how far they reach, for values that aren't parts of one whole. |
| [`Heatmap`](https://velotype.github.io/velochart/components/heatmap) | Values in a grid, read by color, with a scale. Can diverge around zero. |
| [`CalendarHeatmap`](https://velotype.github.io/velochart/components/calendar-heatmap) | Daily values as a grid of weeks. Dates are read in UTC. |
| [`Treemap`](https://velotype.github.io/velochart/components/treemap) | Nested parts of a whole, sized by area. |
| [`SunburstChart`](https://velotype.github.io/velochart/components/sunburst-chart) | Nested parts of a whole as rings. |
| [`FunnelChart`](https://velotype.github.io/velochart/components/funnel-chart) | How much of a group makes it through each stage. |
| [`SankeyChart`](https://velotype.github.io/velochart/components/sankey-chart) | Flows between stages. A link that would close a loop is left out. |

@example radial-and-inline.tsx

@example more-charts.tsx

## Inline

| Chart | What it is |
|---|---|
| [`Sparkline`](https://velotype.github.io/velochart/components/sparkline) | A tiny trend with no axes, sized to sit inside a table cell or beside a number. Line, area, or bar. It has a fixed size and no tooltip, and it takes none of the attrs or methods below. |

## Attrs most charts share

Every chart except `Sparkline` accepts these:

| Attr | What it does |
|---|---|
| `height` | Drawing height in px, not counting the legend. The default is 220. |
| `title` | A heading above the drawing. It is also the accessible name when `ariaLabel` is not set. |
| `ariaLabel` | The accessible name, when it should differ from the title. |
| `formatValue` | Formats a value for ticks, tooltips, and the screen reader table. |
| `emptyMessage` | Shown when there is nothing to draw. |
| `hideLegend` | Hides the legend, which otherwise shows when there are two or more series, and on every pie. |
| `legendToggle` | Whether a click on a legend entry hides it. On by default. |
| `animate` | Whether the chart animates in and between values. On by default, and always off for a reader who asked for reduced motion. |
| `onPointClick` | Called when a reader activates a point, slice, cell, or node, by click or with Enter. |
| `patterns` | Fills series with patterns as well as color. |
| `keyboard` | Whether the arrow keys walk the marks. On by default. |
