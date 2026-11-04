import { LineChart } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { getComponent, replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

const days = Array.from({length: 120}, (_, i) => ({
    x: new Date(Date.UTC(2026, 0, 1 + i)),
    values: {visits: Math.round(400 + Math.sin(i / 8) * 150)},
}))

// A JSX tag evaluates to the element. getComponent gets the chart, which is how to reach its methods.
const chart = getComponent<LineChart>(
    <LineChart
        title="Visits"
        data={days}
        series={[{key: "visits", label: "Visits", trendline: "linear"}]}
        xAxis={{type: "time", title: "Date"}}
        zoom="x"
        rangeSlider
        crosshair
        annotations={[{type: "line", value: 600, label: "Target", dashed: true}]}
        onZoom={(view) => console.log("now showing", view)}/>,
)

replaceElementWithRoot(<div>{chart}</div>, document.getElementById("app")!)

// Later: new values, a live feed, or a file for the reader.
chart.update({data: days.slice(30)})
chart.appendData([{x: new Date(Date.UTC(2026, 4, 1)), values: {visits: 512}}], {maxPoints: 365})
console.log(chart.toCsv())
