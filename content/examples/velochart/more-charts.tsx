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
