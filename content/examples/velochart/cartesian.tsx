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
