import { Component, type EmptyAttrs, getComponent } from "@velotype/velotype"

class AdvancedComponent extends Component<EmptyAttrs> {
    override render() {
        return <div>This is an advanced Component</div>
    }
    someMethod() {
        console.log("AdvancedComponent someMethod() called")
    }
}

// JSX evaluates to the element, and getComponent() converts it back to the instance that made it
const instance: AdvancedComponent = getComponent<AdvancedComponent>(<AdvancedComponent/>)
instance.someMethod()

// The element is still usable in TSX
const page = <div>{instance}</div>
document.body.append(page)
