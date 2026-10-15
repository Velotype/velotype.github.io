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
