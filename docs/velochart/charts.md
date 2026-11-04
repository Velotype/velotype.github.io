# Charts

Every velochart chart, by category. Each links to its page in the [showcase](https://velotype.github.io/velochart/), which has live examples, the props table, and the types it uses.

The showcase is built from the latest source, which can be ahead of the published package, and this guide targets the published 0.1.0.

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

```tsx
import { AreaChart, BarChart } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

const data = [
    {label: "Q1", values: {web: 30, retail: 18}},
    {label: "Q2", values: {web: 34, retail: 21}},
    {label: "Q3", values: {web: 41, retail: 19}},
]
const series = [
    {key: "web", label: "Web"},
    {key: "retail", label: "Retail"},
]

replaceElementWithRoot(
    <div>
        {/* stacked adds each series to the ones before it. The tooltip still shows each series' own value. */}
        <AreaChart title="Bookings" data={data} series={series} stacked/>
        {/* horizontal gives each category a full line, which suits labels that are words. */}
        <BarChart title="Bookings by quarter" data={data} series={series} horizontal/>
    </div>,
    document.getElementById("app")!,
)
```
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

```tsx
import { Gauge, PieChart, Sparkline } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

const spend = [
    {label: "Platform", value: 24},
    {label: "Growth", value: 18},
    {label: "Infra", value: 12},
]

replaceElementWithRoot(
    <div>
        <PieChart title="Spend by team" data={spend} donut={0.6} centerLabel="54" centerSubLabel="total"/>
        <Gauge
            value={93}
            subLabel="disk used"
            formatValue={(n) => `${n}%`}
            ariaLabel="93 percent of disk used"
            bands={[
                {from: 0, to: 70, color: "var(--secondary)"},
                {from: 70, to: 90, color: "var(--warning)"},
                {from: 90, to: 100, color: "var(--accent)"},
            ]}/>
        <p>Signups this quarter <Sparkline values={[4, 7, 5, 11, 9, 14]} ariaLabel="Rising weekly signups"/> 14</p>
    </div>,
    document.getElementById("app")!,
)
```
```tsx
import { BubbleChart, CandlestickChart, Heatmap, MixedChart, RadarChart, SankeyChart, Treemap, WaterfallChart } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

const months = [
    {label: "Jan", values: {sales: 120, rate: 12}},
    {label: "Feb", values: {sales: 150, rate: 18}},
    {label: "Mar", values: {sales: 90, rate: 9}},
]

replaceElementWithRoot(
    <div>
        {/* A series' type sets how it draws, and yAxis which axis it reads against. */}
        <MixedChart
            data={months}
            yAxisRight={{format: (n) => `${n}%`}}
            series={[
                {key: "sales", label: "Sales", type: "bar"},
                {key: "rate", label: "Rate", type: "line", yAxis: "right", curve: "smooth"},
            ]}/>
        {/* A bubble's area follows its size, since area is what the eye reads. */}
        <BubbleChart series={[{key: "markets", points: [{x: 10, y: 40, size: 200, label: "North"}, {x: 40, y: 55, size: 320, label: "South"}]}]}/>
        <RadarChart data={months} series={[{key: "sales"}, {key: "rate"}]}/>
        <WaterfallChart data={[{label: "Opening", value: 120}, {label: "Costs", value: -60}, {label: "Closing", value: 0, total: true}]}/>
        <CandlestickChart data={[{x: new Date(Date.UTC(2026, 0, 5)), open: 100, high: 110, low: 95, close: 106}]}/>
        <Heatmap columns={["Mon", "Tue"]} rows={["am", "pm"]} values={[[1, 2], [3, undefined]]}/>
        <Treemap data={[{label: "Engineering", children: [{label: "Platform", value: 40}]}, {label: "Support", value: 14}]}/>
        <SankeyChart
            nodes={[{id: "web", label: "Web"}, {id: "trial", label: "Trial"}, {id: "paid", label: "Paid"}]}
            links={[{source: "web", target: "trial", value: 50}, {source: "trial", target: "paid", value: 20}]}/>
    </div>,
    document.getElementById("app")!,
)
```
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
