import { Component, type EmptyAttrs, type RenderableElements, setStylesheet } from "@velotype/velotype"

class Card extends Component<EmptyAttrs> {
    constructor(attrs: EmptyAttrs, children: RenderableElements[]) {
        super(attrs, children)
        // Adds the stylesheet to the page once per key, so calling this for every Card does not add duplicates
        setStylesheet(`.card { padding: 8px; border-radius: 4px; }`, "card")
    }

    override render() {
        return <div class="card">{this.children}</div>
    }
}

// Pass true as the third argument to replace the stylesheet already added under the key
setStylesheet(`.card { padding: 16px; border-radius: 8px; }`, "card", true)
void Card
