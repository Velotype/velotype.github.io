# Dashboards

Give every chart on a page the same `TimeWindow`, and they all show the same range of time. One control, a drag on any chart, or a zoom on any chart moves them all, and their hover cursors are shared.

```tsx
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
```
A chart on a window needs a time or numeric x axis. It shows the window's range whatever the data covers, so a stretch with no data is drawn empty rather than snapping back to the data.

## The window

`new TimeWindow(options)` starts on the last hour, unless told otherwise:

| Option | What it does |
|---|---|
| `span` | Starts on the last this many milliseconds |
| `range` | Starts on a fixed `{from, to}` instead |
| `live` | Starts following the clock |
| `refreshMs` | How often a live window moves. Defaults to 5000 |
| `now` | The clock, for anything that needs another one |
| `urlParam` | Keeps the range in this query parameter, so the address can be shared. Off unless set, because the URL belongs to the page |

| Method | What it does |
|---|---|
| `getRange()`, `getSpan()`, `isLive()`, `now()` | Where the window is, and the time on its clock |
| `contains(time)` | Whether a moment is in the range |
| `toText()`, `setFromText(text)` | The range as text to copy or link to, and back |
| `isRelative()` | Whether the range is the latest so-long rather than two fixed times |
| `getRefreshMs()`, `getNextTick()` | How often a live window moves, and when it next will |
| `setRange(from, to)` | Looks at a fixed range, and stops following the clock |
| `setLast(span)` | Looks at the latest `span` milliseconds, still following the clock if it was |
| `shift(direction)` | Moves back (`-1`) or forward (`1`) by a whole span. Moving forward stops at now |
| `zoomOut(factor?)` | Widens the range around its middle, doubling it by default |
| `setLive(live)` | Starts or stops following the clock |
| `subscribe(listener)` | Calls `listener` on every change, for redrawing |
| `subscribeSettled(listener)` | Calls `listener` once the range has stopped changing, for fetching |

Both ways to subscribe return the way to stop. The clock only runs while something is listening, so a chart that leaves the page leaves nothing running.

## The control

`<TimeWindowControl timeWindow={timeWindow}/>` shows the range in one line, between back and forward buttons, with zoom out and a button that follows the clock beside it. Clicking the range opens a list of ranges, a box to type one in, and the two ends as times.

Its usual place is flush right at the top of the page, which readers of other dashboards will look for. It is as wide as what holds it, so `style={{justifyContent: "flex-end"}}` puts it there, and what opens from it then runs leftward, into the page.

The box takes a number and a unit, as `13h` or `now-13h`: `ms`, `s`, `m` or `min`, `h` or `hr`, `d`, `w`, `M` or `mo`, and `y`. A month is 30 days and a year 365. Press Enter to apply it.

The popover's copy button copies the range as text, and its paste button, or pasting into the box, takes one. Pasting into the box needs no permission from the browser. While following the clock, a ring around the Live button's dot fills up to the next move, and the interval is written beside it.

## Sharing a range

The clipboard and the URL use one form of text:

| Text | Means |
|---|---|
| `now-6h` | The latest 6 hours |
| `live-6h` | The latest 6 hours, following the clock |
| `2026-11-04T12:22:00.000Z/2026-11-04T15:56:00.000Z` | Those two times, in ISO 8601 |

A range stays as it was set: a reader sharing `now-6h` shows the other person their own latest 6 hours, and one who has dragged to an incident shares those exact times. `setFromText` and the paste box also take a whole URL holding one of these.

With `urlParam: "time"`, the address holds the range once it stops moving, and the page opens on the range in its address. Other parts of the address are left alone.

| Attr | What it does |
|---|---|
| `presets` | The ranges to offer, as `{span, label?}`. An unset label is the span in the browser's language |
| `utc` | Reads and writes the times in UTC. Match the charts' `xAxis.utc` |
| `hideLive` | Leaves out the button that follows the clock |
| `precision` | How finely the two times read and can be typed: `"minute"`, `"second"`, `"millisecond"`, or `"auto"`, the default, which is milliseconds under a minute, seconds under an hour, and whole minutes above that |
| `opens` | Which way what opens from the range runs: `"leftward"`, `"rightward"`, or `"auto"`, the default, which runs into the page. Whichever this is, it stays on the page |
| `labels` | What assistive technology calls each part: `previous`, `next`, `zoomOut`, `live`, `range`, `filter`, `copy`, `paste`, `from`, `to`. None has a default, so set them for the language you use |

## Filling a dashboard

There are three usual ways, and the [showcase](https://velotype.github.io/velochart/) runs each one live:

- **The data is on the page.** Give each chart all of it, and the window picks what is in view. Moving it costs a redraw and no request.
- **A feed.** Follow the clock with `live: true`, and call `appendData` as data arrives. The two are separate, so stopping the window holds the view still while the feed carries on.
- **The data is on a server.** Ask for each range from `subscribeSettled`, so that a drag across a chart costs one request rather than hundreds, and use only the newest answer:

```tsx
let latest = 0
timeWindow.subscribeSettled(async (range) => {
    const request = ++latest
    const points = await fetchMetrics(range)
    if (request === latest) {
        latency.update({data: points})
    }
})
```

Panels with no time axis, such as `Gauge` or `PieChart`, follow the same way: subscribe, and `update` them from what is in range.
