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

@example inline-style-script.tsx

Output:

@output inline-style-script.tsx
