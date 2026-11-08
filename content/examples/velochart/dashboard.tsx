import { BarChart, Gauge, LineChart, TimeWindow, TimeWindowControl } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { getComponent, replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

const MINUTE = 60_000
const HOUR = 60 * MINUTE
const now = Date.now()

const points = Array.from({length: 24 * 12}, (_, i) => ({
    x: now - (24 * 12 - i) * 5 * MINUTE,
    values: {latency: 120 + 40 * Math.sin(i / 20), errors: 3 + (i * 7) % 5},
}))

// One window for the page. Every chart given it shows its range and sends a reader's zoom and drag to it.
const timeWindow = new TimeWindow({span: 6 * HOUR, urlParam: "time"})

// A panel with no time axis works out what is in view, once the range stops moving
const worst = () => points.filter(point => timeWindow.contains(point.x)).reduce((most, point) => Math.max(most, point.values.latency), 0)
const gauge = getComponent<Gauge>(<Gauge title="Worst latency" value={worst()} max={200}/>)
timeWindow.subscribeSettled(() => gauge.update({value: worst()}))

replaceElementWithRoot(
    <div>
        <TimeWindowControl
            timeWindow={timeWindow}
            style={{justifyContent: "flex-end"}}
            labels={{previous: "Earlier", next: "Later", zoomOut: "Zoom out", live: "Live", range: "Time range", filter: "Type a range", copy: "Copy this range", paste: "Paste a range", from: "From", to: "To"}}/>
        <LineChart title="Latency" timeWindow={timeWindow} data={points} series={[{key: "latency"}]} xAxis={{type: "time"}}/>
        <BarChart title="Errors" timeWindow={timeWindow} data={points} series={[{key: "errors"}]} xAxis={{type: "time"}}/>
        {gauge}
    </div>,
    document.getElementById("app")!,
)
