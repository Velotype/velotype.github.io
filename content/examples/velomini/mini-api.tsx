import { replaceElement, setAttrsOnElement } from "@velotype/velomini/tsx-mini"

// setAttrsOnElement() sets attributes, a style object, event listeners, and boolean attributes on
// an existing element, the way TSX does
const input = document.createElement("input")
setAttrsOnElement(input, {
    type: "text",
    class: "wide",
    style: {width: "100%"},
    onInput: () => console.log("typed"),
    required: true,
})
document.body.append(input)

// replaceElement() replaces an element with a new one. If the old element had focus, the new one
// is given it. It returns the new element.
input.focus()
const replacement = replaceElement(input, <input type="text" class="replacement"/>)
console.log(document.activeElement == replacement)
