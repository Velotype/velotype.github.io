# Components

velossr has two kinds of components. A static component renders the same way every time, and a dynamic component can see the request and wait for data.

## Static components

A `StaticServerComponent<AttrsType>` is a plain function that renders synchronously, with no access to the request. Use it for markup that never depends on the request. It receives its attrs, and its children as a second argument. To accept children, add `ChildrenAttr` to the attrs type.

```tsx
import { type ChildrenAttr, prepareVNodeForRendering, renderServerVNode, type StaticServerComponent } from "@velotype/velossr"

// A StaticServerComponent is a plain function that renders synchronously, with no access to the
// request. Use it for markup that never depends on the request.
const Greeting: StaticServerComponent<{name: string}> = function(attrs) {
    return <div>Hello {attrs.name}!</div>
}

// A Component that accepts children adds ChildrenAttr to its attrs, and takes them as a second argument
const Card: StaticServerComponent<{title: string} & ChildrenAttr> = function(attrs, children) {
    return <section>
        <h2>{attrs.title}</h2>
        {children}
    </section>
}

const page = <Card title="Greetings">
    <Greeting name="Ada"/>
    <Greeting name="Grace"/>
</Card>

const html = await renderServerVNode(prepareVNodeForRendering(page), new Request("http://localhost/"), {}).toUint8Array()
console.log(new TextDecoder().decode(html))
```
Output:

```text
<section><h2>Greetings</h2><div>Hello Ada!</div><div>Hello Grace!</div></section>
```
Static parts of a page are prepared once, when you call [`prepareVNodeForRendering()`](/docs/velossr/rendering/), and then rendered from bytes on every request.

## Dynamic components

A `DynamicServerComponent<AttrsType>` is a class with access to the `Request` and the `context`. Its `render(attrs, children, request, context)` can return a node, or a Promise of one.

If `render()` fails, `onFail(reason, attrs, children, request, context)` renders instead, so one failing component does not take down the rest of the page. By default a failed component renders nothing. Override `onFail()` to show a message.

```tsx
import { DynamicServerComponent, type EmptyAttrs, prepareVNodeForRendering, renderServerVNode, type ServerVNode } from "@velotype/velossr"

type Context = {users: Record<string, string>}

// A DynamicServerComponent is a class with access to the Request and the context. It can render
// synchronously or return a Promise.
class UserGreeting extends DynamicServerComponent<EmptyAttrs> {
    override async render(_attrs: Readonly<EmptyAttrs>, _children: Readonly<ServerVNode[]>, request: Request, context: Context) {
        const id = new URL(request.url).searchParams.get("user") ?? ""
        const name = await Promise.resolve(context.users[id])
        if (!name) {
            throw new Error(`No user ${id}`)
        }
        return <div>Hello {name}!</div>
    }

    // If render() fails, onFail() renders instead, so one failing component does not take down the
    // rest of the page. By default a failed component renders nothing.
    override onFail(reason: Readonly<unknown>) {
        return <div>Hello! ({String(reason)})</div>
    }
}

async function render(url: string) {
    const page = <main><UserGreeting/></main>
    const output = renderServerVNode(prepareVNodeForRendering(page), new Request(url), {users: {1: "Ada"}})
    console.log(new TextDecoder().decode(await output.toUint8Array()))
}

await render("http://localhost/?user=1")
await render("http://localhost/?user=2")
```
Output:

```text
<main><div>Hello Ada!</div></main>
<main><div>Hello! (Error: No user 2)</div></main>
```
The `context` is whatever you pass to `renderServerVNode()`. With veloserver it is the request's `Context`.

## AsyncRenderObject

An `AsyncRenderObject<DataType>` waits on one Promise and can be rendered into several places. It is created with the Promise, the request, and the context: `new AsyncRenderObject(promise, request, context, defaultOnFail?)`.

`render(renderFunction, onFail?)` places it in the page. `renderFunction` receives the resolved value and returns a node, or a Promise of one. `onFail` renders when the Promise rejects or the render function throws. When a place passes no `onFail`, `defaultOnFail` is used, and without either the place renders nothing.

```tsx
import { AsyncRenderObject, DynamicServerComponent, prepareVNodeForRendering, renderServerVNode, type ServerVNode } from "@velotype/velossr"

type User = {name: string, team: string}

class Profile extends DynamicServerComponent<{user: AsyncRenderObject<User>}> {
    override render(attrs: Readonly<{user: AsyncRenderObject<User>}>) {
        // One AsyncRenderObject can be rendered in several places. It waits on one Promise.
        return <div>
            {attrs.user.render(async user => <h1>{user.name}</h1>)}
            {attrs.user.render(async user => <p>Team: {user.team}</p>)}
            {attrs.user.render(
                async () => { throw new Error("not reached") },
                // onFail() renders when the Promise rejects or the render function throws
                (reason: Readonly<unknown>): ServerVNode => <p>Failed: {String(reason)}</p>,
            )}
        </div>
    }
}

const request = new Request("http://localhost/")
const context = {}
const user = new AsyncRenderObject<User>(Promise.resolve({name: "Ada", team: "Analytical"}), request, context)

const page = <Profile user={user}/>
const output = renderServerVNode(prepareVNodeForRendering(page), request, context)
console.log(new TextDecoder().decode(await output.toUint8Array()))
```
Output:

```text
<div><h1>Ada</h1><p>Team: Analytical</p><p>Failed: Error: not reached</p></div>
```
The output of an AsyncRenderObject is escaped as HTML, so it cannot be placed inside a `<script>` or `<style>`. See [Escaping and embedding](/docs/velossr/escaping-and-embedding/).
