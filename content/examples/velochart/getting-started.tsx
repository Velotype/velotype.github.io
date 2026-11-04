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
