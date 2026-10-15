# Async data

`AsyncRenderObject` is a RenderObject for data that arrives later. It shows `pending()` while a Promise is loading, then `render()` with its result, or `onFail()` when the Promise rejects.

It is in its own module, so bundles that do not use it do not include it.

## Loading a value

Pass a Promise, or a function that gets an `AbortSignal` and returns one. Pass the function form when the load can be cancelled, as `fetch()` can.

```tsx
import { AsyncRenderObject, Component } from "@velotype/velotype"

type User = {name: string}

class UserCard extends Component<{id: string}> {
    // The first argument is a Promise, or a function that gets an AbortSignal and returns one
    user = new AsyncRenderObject<User>((signal) => fetch(`/users/${this.attrs.id}`, {signal}).then(response => response.json()), {
        pending: () => <p>Loading</p>,
        render: (user: User) => <p>{user.name}</p>,
        onFail: () => <p>Could not load the user</p>,
        // Keep showing the resolved value while load() fetches a new one
        keepPrevious: true,
    })

    override render() {
        return <div>
            {this.user}
            <button type="button" onClick={() => {
                // Replaces the load in progress, so only the latest load is shown
                this.user.load((signal) => fetch(`/users/${this.attrs.id}`, {signal}).then(response => response.json()))
            }}>Reload</button>
            <button type="button" onClick={() => {
                // Show a state directly, such as a value that is already known. This cancels the load in progress.
                this.user.set({status: "resolved", value: {name: "Ada"}})
            }}>Use a known user</button>
            <div>{this.user.loading ? "Loading..." : "Idle"}</div>
        </div>
    }
}
void UserCard
```
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

```tsx
import { AsyncRenderObject, Component, type EmptyAttrs } from "@velotype/velotype"

// Loading code on demand: a Component that is only needed after a click
class LazyChart extends Component<EmptyAttrs> {
    chart = new AsyncRenderObject(import("./chart-module.tsx"), {
        pending: () => <p>Loading chart</p>,
        render: (module) => <module.Chart/>,
    })

    override render() {
        return <div>{this.chart}</div>
    }
}

// To show several loads at once, load Promise.all() of them into one AsyncRenderObject
class Dashboard extends Component<EmptyAttrs> {
    data = new AsyncRenderObject(Promise.all([
        fetch("/users").then(response => response.json() as Promise<string[]>),
        fetch("/teams").then(response => response.json() as Promise<string[]>),
    ]), {
        render: ([users, teams]) => <p>{users.length} users on {teams.length} teams</p>,
    })

    override render() {
        return <div>{this.data}</div>
    }
}
void LazyChart
void Dashboard
```
## Keeping the page responsive

An update renders only the RenderObject or rows whose value changed, so most updates are small and finish within a frame. Velotype has no scheduler to make them interruptible, so updates are slow in two cases: when frequent input, such as typing, starts expensive work each time, and when one update renders thousands of elements.

For frequent input, run the expensive work from a listener with `eventDispatchDelay`, so it runs at most once in that time instead of once per change. The listener runs after the delay, so it reads the latest `value`. Here a search runs at most every 250ms while typing, and the AsyncRenderObject shows only the latest search's results and aborts the earlier requests:

```tsx
import { AsyncRenderObject, Component, type EmptyAttrs, RenderBasic } from "@velotype/velotype"

type Result = {title: string}

class Search extends Component<EmptyAttrs> {
    // Shows only the latest search's results, and aborts the earlier requests
    results = new AsyncRenderObject<Result[]>(Promise.resolve([]), {
        render: (results) => <ul>{results.map((result) => <li>{result.title}</li>)}</ul>,
        keepPrevious: true,
    })

    // The listener runs at most once every 250ms while typing, and reads the latest value
    query = new RenderBasic<string>("").registerOnChangeListener(() => {
        const query = this.query.value
        this.results.load((signal) => fetch(`/search?q=${encodeURIComponent(query)}`, {signal}).then(response => response.json()))
    }, {eventDispatchDelay: 250})

    override render() {
        return <div>
            <input type="search" onInput={(event: Event) => this.query.value = (event.target as HTMLInputElement).value}/>
            {this.results}
        </div>
    }
}
void Search
```
For thousands of rows, see [very long lists](/docs/velotype/lists/#very-long-lists).
