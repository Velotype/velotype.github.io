# Exploring and updating

Everything here is on the charts with x and y axes, because they share one engine. `update` and export are on every chart except `Sparkline`.

@example explore.tsx

A JSX tag evaluates to the element and not the chart, so reach a chart's methods through `getComponent`, as above.

## Axes

`xAxis`, `yAxis`, and `yAxisRight` each take the same options:

| Option | What it does |
|---|---|
| `type` | `"category"`, `"linear"`, `"log"`, or `"time"`. An x axis follows its points' `x` when unset |
| `title` | A title along the axis |
| `min`, `max` | Fix an end, rather than following the data |
| `format` | Formats ticks and the tooltip values read against this axis |
| `tickCount` | About how many ticks |
| `reverse` | Runs the axis the other way |
| `hideGrid` | Leaves out the grid lines |
| `utc` | Reads a time axis in UTC |

Give a point an `x`, a number or a `Date`, to place it by value. Points are sorted along the axis, whatever order they came in. A series with `yAxis: "right"` reads against `yAxisRight`, and a log axis leaves out anything at or below zero.

## Series

A series takes `type` (`"line"`, `"area"`, `"bar"`, `"scatter"`, or `"none"`, which isn't drawn and still reads in the tooltip), `curve` (`"linear"`, `"smooth"`, `"step"`, `"step-before"`, `"step-after"`), `dashed`, `hidden`, and `trendline` (`"linear"`, or `{type: "moving-average", window}`). `"smooth"` never overshoots a value.

## Marking things up

`annotations` draws lines, shaded bands, and labelled points. An annotation's value widens the axis if it has to.

A point's `errors` draws error bars: one number for either side, or `[below, above]`. `showValues` writes each value beside its mark, thinned when there isn't room. `crosshair` follows the pointer with lines to the axes.

## Zoom, pan, and brush

With `zoom` set to `"x"`, `"y"`, or `"xy"`, a drag pans, ctrl or cmd and the wheel zooms, a pinch zooms, and a double click goes back to everything. A plain scroll stays the page's, because taking it would trap a reader scrolling past. `wheelZoom: "always"` takes it anyway, for a chart that fills the page.

`brush` makes a drag select a range, or a rectangle with `"xy"`, and `onBrush` gets the range and the points in it. With `zoom` set as well, the brush zooms to what it selected, and shift and drag pans. `rangeSlider` draws an overview under the plot, with a window to drag and resize.

`zoomTo`, `resetZoom`, and `getView` do the same from code, in axis units: milliseconds on a time axis, and the index on a category axis. Horizontal bars don't zoom or brush.

Charts sharing a `syncGroup` name move their cursors together and zoom together.

## Updating and live data

`update` changes any of a chart's attrs and redraws, keeping its element and what the reader has hidden. Values move to their new positions when the shape of the data is the same.

`appendData` adds points for a live feed, dropping older ones past `maxPoints`. A burst of calls costs one redraw, and a view at the live edge moves along with it. It doesn't change the array you passed in.

## Long series

A line with more points in view than twice the plot's width is thinned to what its pixels can show. The tooltip still reads every point. `downsample` chooses how: `{algorithm: "lttb"}` keeps its shape and is the default, `{algorithm: "min-max"}` guarantees every spike survives, and `false` draws everything.

`renderer="canvas"` paints the marks instead of making elements, which is what makes tens of thousands of points or bars practical. Axes, annotations, and hover stay as they are. A smooth line draws straight, and a mark can't be hovered on its own, so `hover: "mark"` reads as `"index"`.

## Export

| Method | What it gives |
|---|---|
| `toCsv()` | The values as CSV, every row. A cell that would run as a formula in a spreadsheet is defused |
| `toSvgString()` | A stand-alone copy of the drawing, with its title, legend, and resolved colors |
| `toPngBlob(scale?)` | A PNG, on the page's background color |
| `download(format, filename)` | Saves `"csv"`, `"svg"`, or `"png"` through the browser |
