import { Component, type IdAttr, passthroughAttrsToElement, setAttrsOnElement, type StylePassthroughAttrs } from "@velotype/velotype"

// IdAttr and StylePassthroughAttrs add id, class, and style to a Component's attrs
type ButtonAttrs = IdAttr & StylePassthroughAttrs & {label: string}

class FancyButton extends Component<ButtonAttrs> {
    override render(attrs: Readonly<ButtonAttrs>) {
        // Sets the id, class, and style the caller passed. class is added to the element's own
        // classes rather than replacing them.
        return passthroughAttrsToElement(<button type="button" class="fancy">{attrs.label}</button>, attrs)
    }
}

const button = <FancyButton label="Save" id="save" class="primary" style={{marginTop: "4px"}}/>

// setAttrsOnElement() sets attributes, style objects, and event listeners on an existing element
// the same way TSX does
const input = document.createElement("input")
setAttrsOnElement(input, {
    type: "text",
    class: "wide",
    style: {width: "100%"},
    onInput: () => console.log("typed"),
})

document.body.append(button, input)
