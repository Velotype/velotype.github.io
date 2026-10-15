import type { ChildrenAttr, FunctionComponent, IdAttr, StylePassthroughAttrs } from "@velotype/velomicro/tsx-micro"

type GreetingAttrsType = {name: string}

// A function component receives its attrs, and its children as a second argument
const Greeting: FunctionComponent<GreetingAttrsType> = function(attrs: GreetingAttrsType) {
    return <div>Hello {attrs.name}!</div>
}

// ChildrenAttr, IdAttr, and StylePassthroughAttrs describe the children, id, class, and style that
// a component accepts and passes on to the element it renders
type PanelAttrsType = {title: string} & ChildrenAttr & IdAttr & StylePassthroughAttrs

const Panel: FunctionComponent<PanelAttrsType> = function(attrs: PanelAttrsType, children) {
    return <section id={attrs.id} class={attrs.class} style={attrs.style}>
        <h2>{attrs.title}</h2>
        {children}
    </section>
}

document.body.append(
    <Panel title="Greetings" id="greetings" class="panel" style={{marginTop: "8px"}}>
        <Greeting name="Ada"/>
        <Greeting name="Grace"/>
    </Panel>,
)
