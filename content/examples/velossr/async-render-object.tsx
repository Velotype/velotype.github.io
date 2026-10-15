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
