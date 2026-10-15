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
