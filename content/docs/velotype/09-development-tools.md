# Development tools

## Hot reloading

The `jsx-dev-runtime` entry point (used by the `react-jsxdev` JSX transform) supports hot updates. When a development server runs changed code again, the Components on the page are updated in place and keep their state. The `jsx-runtime` entry point used in production builds does not include any of it.

The [veloserver](/docs/veloserver/) development server (`@velotype/veloserver/dev`) provides two hot update modes:

* `module`: each module is served unbundled, and only the changed modules run again
* `bundle`: the app bundle is rebuilt and runs again

What happens when code changes:

* When a class Component changes, its live instances get the new methods and render again with their fields kept
* When a function Component changes, its output is rendered again in place
* Changes to constructors and field initializers apply to new instances only
* A class with `#private` members is replaced with a new instance, losing its state
* The child Components of a Component that renders again are created again

The development server talks to the dev runtime through `globalThis.__VELOTYPE_HOT__`, and other development servers can use it too.

## Debugging

The [Velotype DevTools](/docs/velotype/devtools/) extension shows the live component tree, the event bus, and VSON payloads.

`@velotype/velotype/devtools` exports read-only access to Velotype's internal state (`__vtAppMetadata`) and the devtools hook (`getDevtoolsHook()`), for debugging and for the extension. Applications do not need to import it, because Velotype registers with the devtools hook from any entry point.

@example devtools.tsx
