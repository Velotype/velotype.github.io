# Events and errors

## The event bus

The event bus sends an event to every listener registered for a key, without the sender and receiver knowing about each other.

* `registerEventListener(component, key, listener)` registers `listener` for the events sent under `key`
* `emitEvent(key, event, emitter?)` sends a `VelotypeEvent` to the listeners of `key`. Passing the emitting Component as the third argument skips that Component's own listeners
* `removeEventListeners(component, key, listener?)` removes one listener, or every listener of `key` for that Component when no listener is passed

Listeners are removed automatically when the Component they were registered for unmounts.

A `VelotypeEvent` has `emittingObject`, `event` (a name), and `data`.

Register a Component's listeners in `mount()`. A Component gets its `vtKey`, which the listener is registered under, after its constructor returns, so `registerEventListener()` throws a `TypeError` when called from a constructor or a field initializer.

@example event-bus.tsx

## When code throws

velotype keeps its own state consistent whatever an app's code throws.

* **Errors in rendering are thrown to the caller:** a Component's constructor or `render()`, a function component, and a RenderObject's render function or `handleUpdate`. What the failed render created is released. `refresh()` keeps the current render, a RenderObject keeps its current value, and RenderObjectArray and RenderTemplateArray keep their data and rows matching
* **Errors in `mount()`, `unmount()`, `registerOnMount()` callbacks, and event bus listeners are reported** with `reportError()`, which logs them and dispatches an `error` event on the window. The other Components and listeners still run
* **An [AsyncRenderObject](/docs/velotype/async-data/) shows `onFail()`** when its Promise rejects or its `render()` throws, and reports the error with `reportError()` when it has no `onFail()`

A `handleUpdate` changes elements in place, so one that throws partway leaves its own elements partly updated.

## ErrorBoundary

To show a fallback instead of throwing, extend `ErrorBoundary` and implement `renderContent()` and `renderError()`. When `renderContent()` throws, on first render or on `refresh()`, what it created is released and `renderError()` is rendered instead.

@example error-boundary.tsx

An ErrorBoundary catches errors from the Components that `renderContent()` creates, but not from its children: in `<SafeChart><Chart/></SafeChart>` the `Chart` is created by the parent before `SafeChart`, so create the Components to protect inside `renderContent()`. It also does not catch errors from event handlers or later RenderObject updates. An error thrown by `renderError()` is thrown to the code that created or refreshed the ErrorBoundary.
