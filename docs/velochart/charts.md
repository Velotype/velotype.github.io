# Charts

Every velochart chart, by category. Each links to its page in the [showcase](https://velotype.github.io/velochart/), which has live examples, the props table, and the types it uses.

The showcase is built from the latest source, which can be ahead of the published package, and this guide targets the published 0.1.0.

## Cartesian

Charts with x and y axes. All three take `data` and `series`, and hovering shows a tooltip.

| Chart | What it is |
|---|---|
| [`LineChart`](https://velotype.github.io/velochart/components/line-chart) | A line chart for trends over time, optionally filled and optionally stacked. Hovering anywhere over the plot reads out every series at the nearest category. |
| [`AreaChart`](https://velotype.github.io/velochart/components/area-chart) | A filled line chart. Stack it to show how parts add up to a total. |
| [`BarChart`](https://velotype.github.io/velochart/components/bar-chart) | A bar chart for comparing categories: vertical or horizontal, with series side by side or stacked. |

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
A missing value is plotted as zero. `BarChart` draws negative values as zero too, so it suits values that cannot go below zero.

## Radial

| Chart | What it is |
|---|---|
| [`PieChart`](https://velotype.github.io/velochart/components/pie-chart) | A pie or donut chart for part-to-whole. Slices are drawn in the order given and never re-sorted, so they stay aligned with a legend or table beside them. |
| [`Gauge`](https://velotype.github.io/velochart/components/gauge) | One value against a range, with optional colored bands for good, warning, and critical zones. |

## Inline

| Chart | What it is |
|---|---|
| [`Sparkline`](https://velotype.github.io/velochart/components/sparkline) | A tiny trend with no axes, sized to sit inside a table cell or beside a number. Line, area, or bar. It has a fixed size and no tooltip. |

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
