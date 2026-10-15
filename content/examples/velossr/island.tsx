import { type ChildrenAttr, prepareHTMLVNodeForRendering, renderServerVNode, type ServerVNode, type StaticServerComponent } from "@velotype/velossr"

type CounterData = {start: number, label: string}

// The server's markup for the counter, the same structure the client Component renders
const CounterMarkup: StaticServerComponent<CounterData> = function(attrs) {
    return <div class="counter"><span>{attrs.label}: {attrs.start}</span><input name="note"/><button type="button">+1</button></div>
}

/** Server-rendered markup for a client Component, and the data the client creates it with */
const Island: StaticServerComponent<{id: string, data: unknown} & ChildrenAttr> = function(attrs, children): ServerVNode {
    return [
        <div id={attrs.id}>{children}</div>,
        <script type="application/json" id={attrs.id + "-data"}>{JSON.stringify(attrs.data)}</script>,
    ]
}

const data: CounterData = {start: 5, label: "Clicks </script> & <b>"}
const page = <html><body>
    <Island id="counter" data={data}><CounterMarkup {...data}/></Island>
    <script type="module" src="/main.js"></script>
</body></html>

const output = renderServerVNode(prepareHTMLVNodeForRendering(page), new Request("http://localhost/"), {})
console.log(new TextDecoder().decode(await output.toUint8Array()))
