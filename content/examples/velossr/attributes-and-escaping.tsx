import { renderServerVNode, prepareVNodeForRendering, type ServerVNode } from "@velotype/velossr"

async function show(node: ServerVNode) {
    const bytes = await renderServerVNode(prepareVNodeForRendering(node), new Request("http://localhost/"), {}).toUint8Array()
    console.log(new TextDecoder().decode(bytes))
}

// Attributes are written as HTML attributes
await show(<div class="exampleClass" id="main">this is a div</div>)

// Style objects resolve camelCase keys to kebab-case CSS
await show(<div style={{display: "inline", marginTop: "4px"}}>styled</div>)

// Boolean attributes are written when true, and left out when false
await show(<input type="checkbox" checked={true} disabled={false}/>)

// Text, attribute values, and attribute names are escaped where they are written
const untrusted = `<script>alert("hi")</script> & "quotes"`
await show(<p title={untrusted}>{untrusted}</p>)

// Fragments group children without a wrapper element.
// For a condition, use a ternary that gives null. A boolean child is written as text, so
// {signedIn && <li/>} would write "false" when signedIn is false.
const signedIn = false
await show(<ul>{signedIn ? <li>Account</li> : null}<><li>one</li><li>two</li></></ul>)
