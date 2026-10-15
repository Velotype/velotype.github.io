import { prepareVNodeForRendering, renderServerVNode, SafeText } from "@velotype/velossr"

const data = {note: "</script><script>alert(1)</script>", amount: 5}

const page = <html>
    <head>
        {/* CSS and JS are plain template strings. They are written as is, and only the
            sequences that would end the element early are changed. */}
        <style>{`
div > p { color: red; }
/* </style> in text is made safe */
`}</style>
    </head>
    <body>
        <script>{`
function greet(name) {
    if (name.length > 0 && name !== "</script>") {
        console.log("Hello " + name);
    }
}
`}</script>
        {/* This makes JSON safe to embed, whatever its strings contain */}
        <script type="application/json" id="page-data">{JSON.stringify(data)}</script>
        {/* SafeText is not escaped at all: use it only for content that is known to be safe */}
        <div>{new SafeText("<b>already safe</b>")}</div>
    </body>
</html>

const html = await renderServerVNode(prepareVNodeForRendering(page), new Request("http://localhost/"), {}).toUint8Array()
console.log(new TextDecoder().decode(html))
