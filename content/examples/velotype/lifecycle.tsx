import { type ChildrenAttr, Component, RenderBasic, type RenderableElements, replaceElementWithRoot } from "@velotype/velotype"

type MoreComplexAttrsType = {
    requiredAttr: string
    optionalAttr?: string
} & ChildrenAttr

class MoreComplexComponent extends Component<MoreComplexAttrsType> {
    renderCallCount: number = 0
    someMethodCallCount: number = 0
    otherMethodCallCount = new RenderBasic<number>(0)

    // Called once, just after the Component is inserted into the page, before the browser paints.
    // Child Components mount before their parent.
    override mount() {
        console.log("This component was just added to the DOM")
    }

    // Called once, just before the Component is removed, while it is still in the page
    override unmount() {
        console.log("This component is about to be removed from the DOM")
    }

    override render(attrs: Readonly<MoreComplexAttrsType>, children: RenderableElements[]) {
        this.renderCallCount++
        return <div>
            This is a more complex Component for {attrs.requiredAttr}
            <div>render() has been called: {this.renderCallCount} times</div>
            <button type="button" onClick={this.otherMethod}>click me (RenderBasic) {this.otherMethodCallCount}</button>
            <button type="button" onClick={this.someMethod}>click me (refresh) {this.someMethodCallCount}</button>
            <div>
                Children here:
                <div>{children}</div>
            </div>
        </div>
    }

    otherMethod = () => {
        // Updating the RenderBasic renders only the one {this.otherMethodCallCount} element above
        this.otherMethodCallCount.value += 1
    }

    someMethod = () => {
        this.someMethodCallCount += 1
        // A full render of this Component: its children are unmounted and deleted, then render()
        // runs again and creates and mounts a fresh set. This Component stays mounted.
        this.refresh()
    }
}

replaceElementWithRoot(
    <MoreComplexComponent requiredAttr="the docs"><span>a child</span></MoreComplexComponent>,
    document.getElementById("app"),
)
