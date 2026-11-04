import { BarChart, ChartThemeOptions } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

// Read when a chart draws, so set these while the app starts, before the first chart exists.
// var() keeps the palette following the theme, in light and in dark.
ChartThemeOptions.seriesColors = ["var(--secondary)", "var(--accent)", "var(--primary)"]
ChartThemeOptions.emptySymbol = () => "No data yet"

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
