import { type ChildrenAttr, Component, type RenderableElements, replaceElementWithRoot } from "@velotype/velotype"

type GreetingAttrsType = {
    name: string
    punctuation?: string
}

// A Component is a class. Its attrs are the type parameter, and render() returns what it shows.
class Greeting extends Component<GreetingAttrsType> {
    override render(attrs: Readonly<GreetingAttrsType>) {
        return <div>Hello {attrs.name}{attrs.punctuation ?? "!"}</div>
    }
}

// A Component that accepts children adds ChildrenAttr to its attrs. The children it is created
// with are passed to render(), and are also this.children.
class Card extends Component<ChildrenAttr> {
    override render(_attrs: Readonly<ChildrenAttr>, children: RenderableElements[]) {
        return <div class="card">{children}</div>
    }
}

replaceElementWithRoot(
    <Card>
        <Greeting name="Ada"/>
        <Greeting name="Grace" punctuation="?"/>
    </Card>,
    document.getElementById("app"),
)
