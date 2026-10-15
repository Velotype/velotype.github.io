import { DynamicServerComponent, type EmptyAttrs, prepareHTMLVNodeForRendering, renderServerVNode } from "@velotype/velossr"

// An async component that takes a while
class SlowPart extends DynamicServerComponent<EmptyAttrs> {
    override async render() {
        await new Promise(resolve => setTimeout(resolve, 50))
        return <p>The slow part</p>
    }
}

const page = <html><body>
    <h1>Shown first</h1>
    <SlowPart/>
    <footer>Shown last</footer>
</body></html>

const request = new Request("http://localhost/")
const stream = renderServerVNode(prepareHTMLVNodeForRendering(page), request, {}).toReadableStream()

// Each chunk is written as soon as it is ready, so the page starts arriving before the slow part resolves
const decoder = new TextDecoder()
const start = performance.now()
let html = ""
let firstPartAt = 0
let slowPartAt = 0
for await (const chunk of stream) {
    const text = decoder.decode(chunk)
    html += text
    if (text == "Shown first") {
        firstPartAt = performance.now() - start
    }
    if (text == "The slow part") {
        slowPartAt = performance.now() - start
    }
}

console.log(html)
console.log("The first part arrived before the slow part resolved:", firstPartAt < 40)
console.log("The slow part arrived after it resolved:", slowPartAt >= 40)
