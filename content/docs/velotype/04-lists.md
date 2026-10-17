# Lists

velotype has two list types. Both hold an Array of data points, and both render, move, and remove only the rows that changed. They have the same methods.

| | RenderObjectArray | RenderTemplateArray |
|---|---|---|
| A row is | rendered by TSX, by its own RenderObject | a clone of a template element, filled in with DOM APIs |
| Rows can hold | Components, RenderObjects, RenderBasics, and TSX event handlers | plain markup only |
| Row events | TSX handlers on elements in the row | `on`, one listener per event on the wrapper element |
| Fastest for | lists of rich rows | long or frequently rebuilt lists of plain rows |

Use RenderObjectArray when rows need Components, RenderObjects, or RenderBasics inside them, their own `mount()` and `unmount()`, or TSX event handlers. Use RenderTemplateArray for long or frequently rebuilt lists of plain markup, such as tables, logs, and search results, where each row is the same structure with a few changing values. In js-framework-benchmark it creates and replaces rows with about a quarter of the script time of RenderObjectArray, and clears rows in about half the time.

## RenderObjectArray

`new RenderObjectArray<DataType>({renderFunction})` renders each data point with its own RenderObject. The rows go into a wrapper element, which is a `<div style="display:contents;">` unless you pass `wrapperElementTag`. A named tag is created unstyled, and `wrapperAttrs` sets attributes on it.

@example render-object-array.tsx

The options are `wrapperElementTag`, `wrapperAttrs`, `renderFunction`, and `handleUpdate` (the same advanced update function as [RenderObject](/docs/velotype/render-objects/#updating-in-place-with-handleupdate)).

## RenderTemplateArray

`new RenderTemplateArray<DataType, UpdateRefsType>({template, renderFunction})` builds a template element once, and every row is a `cloneNode()` of it that `renderFunction` fills in. It has no per-row bookkeeping to do when rows are created, updated, or removed, which is why it is fast.

@example render-template-array.tsx

### Rules for templates

* The template must not contain Components, RenderObjects, or event listeners. `cloneNode()` does not copy event listeners
* Listen for row events with `on`, which adds one listener per event to the wrapper element and calls it with the event, the row element, its data, and its index. Only events that bubble can be listened for (use `focusin` and `focusout` instead of `focus` and `blur`)
* `renderFunction` fills in a new clone with DOM APIs and returns the references that `handleUpdate` needs
* `setAt()` calls `handleUpdate` to update a row in place. Without `handleUpdate`, the row is replaced with a new clone

@example row-table.tsx

The options are `wrapperElementTag`, `wrapperAttrs`, `template`, `renderFunction`, `handleUpdate`, and `on`.

## Changing the Array

Every method changes the data and the page together.

| Method | Does |
|---|---|
| `push(data)` | Adds one data point to the end |
| `pushAll(data[])` | Adds several data points to the end |
| `insertAt(index, data)` | Inserts one data point before the data point at `index` |
| `insertAllAt(index, data[])` | Inserts several data points, in order, before the data point at `index` |
| `deleteAt(startIndex, deleteCount?)` | Removes the data point at `startIndex`, or `deleteCount` of them |
| `delete(data)` | Removes the first data point that is `data`, in linear time |
| `getAt(index)` | Reads the data point at `index` |
| `setAt(index, data)` | Replaces the data point at `index` |
| `swap(indexA, indexB)` | Swaps two data points and their rows |
| `move(from, to)` | Moves a data point so that it ends up at index `to` |
| `sort(compareFn)` | Sorts the data points, stably |
| `reorder(indexes)` | Puts the data points in any new order |
| `filter(predicate?)` | Shows only the data points that match |
| `clear()` | Removes every data point |
| `length` | The number of data points |

`insertAt()` and `insertAllAt()` are separate methods so that a data point can itself be an Array. Their `index` runs from `0` to `length`, or counts from the end when negative, as `Array.splice()` does.

@example array-methods.tsx

### Sorting, moving, and filtering

These change the order of the rows, or which rows are shown, by moving the rows that are already rendered. They never render them again.

* `sort(compareFn)` sorts the data points as `Array.sort()` does, and it is stable. Only the rows that change places are moved, so re-sorting a list that is nearly in order, such as a table sorted by a column that a few `setAt()` calls changed, moves only those rows
* `reorder(indexes)` puts the data points in any new order: afterwards the data point at index `k` is the one that was at `indexes[k]`. It throws a `RangeError` unless `indexes` holds each index from `0` to `length - 1` once. Like `sort()`, it moves only the rows that change places
* `move(from, to)` moves one data point and its rows, so that it ends up at index `to`, as removing it with `splice(from, 1)` and inserting it with `splice(to, 0, data)` would
* `filter(predicate)` shows only the data points that `predicate` returns true for, and `filter(undefined)` shows them all again

When a filter is set, the other data points stay in the Array with their rows kept out of the page, so showing them again moves those rows back. Indexes, in `getAt()`, `setAt()`, `swap()`, the `on` listeners of a RenderTemplateArray, and the rest, still count every data point, and `length` is the length of the whole Array.

The predicate is applied to data points added later, and to one changed with `setAt()`. Call `filter()` again when what it tests for has changed, such as the text in a search box.

In a RenderObjectArray, the Components in a row that is filtered out stay mounted while it is out of the page, and a row added while filtered out mounts when it is first shown.

Taking rows out of the page is faster than hiding them with `hidden` or `display: none`: the browser does less work for each change when a list has fewer rows, and showing them again is faster than rendering them again.

## Very long lists

An update renders only the rows that changed, but one update that renders thousands of rows is still slow. Use RenderTemplateArray for the rows, and add them in batches, giving the browser a chance to paint and handle input between batches. `insertAllAt()` does the same at a position other than the end.

@example batches.tsx

Where it is supported, `await scheduler.yield()` instead of `setTimeout()` resumes sooner after the browser has handled input. Work that is slow without rendering anything, such as parsing or sorting a large data set, belongs in a Web Worker.
