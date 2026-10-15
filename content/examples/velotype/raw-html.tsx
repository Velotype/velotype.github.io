import { HTML, MATH, SVG } from "@velotype/velotype"

// SVG and MathML content is added with the SVG and MATH Components, which set a string of markup
// as the innerHTML of an <svg> or <math> element. HTML does the same on any HTML tag (a <div> by default).
// The markup is not escaped, so only use content that is known to be safe.
const icon = <SVG innerHTML={`<path d="M2 2 L10 10"/>`} elementAttrs={{viewBox: "0 0 12 12", width: "12", height: "12"}}/>
const formula = <MATH innerHTML="<mi>x</mi><mo>=</mo><mn>2</mn>"/>
const snippet = <HTML tag="p" innerHTML="Some <b>bold</b> text"/>

document.body.append(icon, formula, snippet)
