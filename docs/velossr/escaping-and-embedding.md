# Escaping and embedding

velossr escapes what it writes, so data from a request cannot inject markup.

## What is escaped

Text, attribute values, and attribute names are escaped automatically, including the text that components return (as a string, an Array, or a fragment). Text is escaped once, where it is written.

* In HTML text, `"`, `&`, and `<` are escaped
* In attribute values, quotes and `&` are escaped, including in style object values
* Characters that are not valid in an attribute name are removed

## Inline style and script

Write CSS and JS as plain template strings. Browsers do not decode character references (such as `&lt;`) inside `<style>` and `<script>`, so their text is written as is, with `<`, `>`, and `&` unchanged. Only the sequences that would end the element early are changed, in a way that reads the same in JavaScript and CSS strings:

* in a `<script>`, the `<` of `</script` and `<!--` is written as `<`
* in a `<style>`, `</style` is written as `<\/style`

This also makes JSON safe to embed, whatever its strings contain: `<script type="application/json">{JSON.stringify(data)}</script>`.

A `DynamicServerComponent` inside a `<script>` or `<style>` has its text escaped the same way, so it can write per-request data. Elements, and the output of an `AsyncRenderObject` (which is escaped as HTML), cannot be placed inside a `<script>` or `<style>`: they are skipped, and an error is logged.

## SafeText

For the rare case where you need to emit raw, already-safe content that should not be escaped at all, wrap it in `SafeText`. Use it only when the input text is known to be safe: HTML, CSS, SVG, and JavaScript escaping depends on where the text is written.

```tsx
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
```
Output:

```text
<html><head><style>
div > p { color: red; }
/* <\/style> in text is made safe */
</style></head><body><script>
function greet(name) {
    if (name.length > 0 && name !== "\u003c/script>") {
        console.log("Hello " + name);
    }
}
</script><script type="application/json" id="page-data">{"note":"\u003c/script><script>alert(1)\u003c/script>","amount":5}</script><div><b>already safe</b></div></body></html>
```