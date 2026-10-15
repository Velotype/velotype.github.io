# Async data

`AsyncRenderObject` is a RenderObject for data that arrives later. It shows `pending()` while a Promise is loading, then `render()` with its result, or `onFail()` when the Promise rejects.

It is in its own module, so bundles that do not use it do not include it.

## Loading a value

Pass a Promise, or a function that gets an `AbortSignal` and returns one. Pass the function form when the load can be cancelled, as `fetch()` can.

@example async-render-object.tsx

The options are:

| Option | Does |
|---|---|
| `render(value)` | Renders the resolved value. Required |
| `pending()` | Renders what is shown while loading. The default is a hidden element |
| `onFail(reason)` | Renders what is shown when loading rejects, or when `render()` throws |
| `keepPrevious` | Keeps showing the resolved value while `load()` fetches a new one, instead of showing `pending()` again |

## How it behaves

* **Only the latest load is shown.** `load()` replaces the load in progress, so a slower, earlier request that finishes last does not overwrite a newer one
* **Loads are cancelled** when a newer `load()` or `set()` replaces them, and when the AsyncRenderObject unmounts (as a field of a Component, when that Component unmounts). The function's `AbortSignal` is aborted and the result is ignored
* **`keepPrevious: true`** keeps showing the resolved value while `load()` fetches a new one. `loading` is `true` while a load is in progress
* **Errors:** a rejection, or a `render()` that throws, shows `onFail(reason)`. Without `onFail`, the error is reported with `reportError()` and a hidden element is shown
* `value` is the current state: `{status: "pending"}`, `{status: "resolved", value}`, or `{status: "rejected", reason}`
* `set(state)` shows a state directly, such as a value that is already known, and cancels the load in progress
* `pending()` is shown first even when the Promise has already resolved, since a Promise's result is only available asynchronously

## Loading code on demand

The same pattern loads code when it is needed, such as a Component that is only used after a click. To show several loads at once, load `Promise.all()` of them into one AsyncRenderObject.

@example lazy-component.tsx

## Keeping the page responsive

An update renders only the RenderObject or rows whose value changed, so most updates are small and finish within a frame. Velotype has no scheduler to make them interruptible, so updates are slow in two cases: when frequent input, such as typing, starts expensive work each time, and when one update renders thousands of elements.

For frequent input, run the expensive work from a listener with `eventDispatchDelay`, so it runs at most once in that time instead of once per change. The listener runs after the delay, so it reads the latest `value`. Here a search runs at most every 250ms while typing, and the AsyncRenderObject shows only the latest search's results and aborts the earlier requests:

@example debounced-search.tsx

For thousands of rows, see [very long lists](/docs/velotype/lists/#very-long-lists).
