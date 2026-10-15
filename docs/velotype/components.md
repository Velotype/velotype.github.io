# Components

Components are the objects that you create as tags in TSX. Velotype has two kinds: function components for simple, stateless markup, and class components for anything with state, a lifecycle, or methods.

## Function components

A `FunctionComponent<AttrsType>` is a function from its attrs to what it renders. It receives its children as a second argument.

Function components must be idempotent with no side effects, and they do not support `mount()` and `unmount()`. Use a class component when you need either.

To accept children, add `ChildrenAttr` to the attrs type.

```tsx
import { type ChildrenAttr, type FunctionComponent, replaceElementWithRoot } from "@velotype/velotype"

type UserProfile = {
    name: string
    email?: string
    address?: string
}
type UserProfileAttrsType = {
    user: UserProfile
}

// A FunctionComponent takes attrs, and children as a second argument.
// It must be idempotent with no side effects, and it has no mount or unmount.
export const UserProfile: FunctionComponent<UserProfileAttrsType> = function(attrs: UserProfileAttrsType) {
    return <div>
        <div>Name: {attrs.user.name}</div>
        {attrs.user.email && <div>Email: {attrs.user.email}</div>}
        {attrs.user.address && <div>Address: {attrs.user.address}</div>}
    </div>
}

type PanelAttrsType = {title: string} & ChildrenAttr

export const Panel: FunctionComponent<PanelAttrsType> = function(attrs: PanelAttrsType, children) {
    return <section>
        <h2>{attrs.title}</h2>
        {children}
    </section>
}

replaceElementWithRoot(
    <Panel title="Profile">
        <UserProfile user={{name: "Ada", email: "ada@example.com"}}/>
    </Panel>,
    document.getElementById("app"),
)
```
## Class components

A class component extends `Component<AttrsType>` and implements `render()`. Velotype calls its lifecycle methods for you.

The attrs a Component is created with are `this.attrs`, and its children are `this.children`. They are also passed to `render()`.

A Component that accepts children adds `ChildrenAttr` to its attrs type.

```tsx
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
```
## The lifecycle

A Component goes through `mount()`, `render()`, and `unmount()`. A Component can also call `this.refresh()` to render again.

```tsx
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
```
* `render()` creates the Component's elements. It can run again when the Component calls `refresh()`
* `mount()` runs just after the Component is inserted into the page, before the browser paints, so it can read layout (such as `getBoundingClientRect()`). Child Components mount before their parent. For work that should wait until after the first paint, start it from `mount()` with `requestAnimationFrame()` or `setTimeout()`
* `unmount()` runs just before the Component is removed, while it is still in the page
* `refresh()` unmounts and mounts the Component's children, and the Component itself stays mounted. If `render()` throws, the current render is kept and the error is thrown to the caller of `refresh()`
* Moving an element (such as `swap()`, or moving it with DOM methods) does not unmount or mount it
* A Component mounts and unmounts once. Once Velotype removes it, it is released, and inserting its element again does not mount it (Velotype warns in the console). Create a new Component instead
* Velotype mounts Components that are inserted through Velotype: `replaceElementWithRoot()`, a Component's child methods, and RenderObjects. An element inserted with DOM methods such as `appendChild()` is not mounted
* Likewise Velotype unmounts Components that are removed through Velotype: `removeElementRoot()`, a Component's child methods, `refresh()`, and RenderObjects. An element removed with DOM methods is not unmounted
* The RenderObjects in a Component's fields mount and unmount with it (calling their `registerOnMount()` callbacks), and the ones in public fields are released when it unmounts. To share a RenderObject between Components, pass it in attrs or keep it in a `#private` field
* Errors thrown by `mount()` and `unmount()` are reported with `reportError()`, and the other Components still run. See [Errors](/docs/velotype/events-and-errors/#when-code-throws)

### Prefer RenderObjects to refresh()

`refresh()` is the largest possible update: it throws away the Component's children and creates them again, which loses their state. To change part of a Component, use a [RenderObject](/docs/velotype/render-objects/) for a value, or a [child method](#changing-part-of-what-a-component-rendered) for an element.

## Cleaning up with unmountSignal

`this.unmountSignal` is an `AbortSignal` that is aborted just after `unmount()` returns. Pass it to what `mount()` starts, and it is cleaned up without an `unmount()`. It works with `addEventListener()` and with `fetch()`, so a response that arrives after the Component unmounts is not used.

The signal is created on first use. It is also aborted when a Component is released without being mounted, such as when its `render()` throws.

```tsx
import { Component, type EmptyAttrs, RenderBasic } from "@velotype/velotype"

// this.unmountSignal is aborted just after unmount() returns. Pass it to what mount() starts,
// and it is cleaned up without an unmount().
export class WindowWidth extends Component<EmptyAttrs> {
    width = new RenderBasic<number>(globalThis.innerWidth)

    override mount() {
        globalThis.addEventListener("resize", () => {
            this.width.value = globalThis.innerWidth
        }, {signal: this.unmountSignal})
    }

    override render() {
        return <div>Window width: {this.width}</div>
    }
}

// It works with fetch() too, so a response that arrives after the Component unmounts is not used
export class Greeting extends Component<EmptyAttrs> {
    message = new RenderBasic<string>("Loading")

    override mount() {
        fetch("/greeting", {signal: this.unmountSignal})
            .then(response => response.text())
            .then(text => { this.message.value = text })
            .catch(() => { /* aborted, or failed */ })
    }

    override render() {
        return <div>{this.message}</div>
    }
}
```
## Changing part of what a Component rendered

A Component's child methods change one element inside what it rendered, without a `refresh()`. Each takes an element from this Component's render, mounts what it inserts, and unmounts what it removes.

| Method | Does |
|---|---|
| `replaceChild(child, newChild)` | Replaces `child`, and returns the new element |
| `appendToChild(child, newChild)` | Adds `newChild` to the end of `child` |
| `prependToChild(child, newChild)` | Adds `newChild` to the start of `child` |
| `replaceChildrenOfChild(child, newChildren)` | Replaces all of `child`'s children |
| `removeChild(child)` | Removes `child` |

The methods return `false` (or `child`, for `replaceChild()`) and change nothing when `child` is not part of this Component's render.

```tsx
import { Component, type EmptyAttrs } from "@velotype/velotype"

// A Component's child methods change one element inside what it rendered, without a refresh().
// Each takes an element from this Component's render, mounts what it inserts, and unmounts what
// it removes.
export class Panel extends Component<EmptyAttrs> {
    body: HTMLElement = <div>Loading...</div>
    list: HTMLUListElement = <ul><li>second</li></ul>
    note: HTMLElement = <p>A note that is removed later</p>

    override mount() {
        fetch("/panel", {signal: this.unmountSignal}).then(response => response.text()).then(text => {
            // replaceChild() returns the new element
            this.body = this.replaceChild(this.body, <div>{text}</div>) as HTMLElement

            // add to the end or start of an element
            this.appendToChild(this.list, <li>third</li>)
            this.prependToChild(this.list, <li>first</li>)

            // replace all of an element's children
            this.replaceChildrenOfChild(this.list, [<li>one</li>, <li>two</li>])

            // remove an element. These return false (replaceChild() returns the child) and change
            // nothing when the element is not part of this Component's render.
            const removed: boolean = this.removeChild(this.note)
            console.log("removed", removed)
        })
    }

    override render() {
        return <section>
            {this.body}
            {this.list}
            {this.note}
        </section>
    }
}
```
## Getting the Component from its element

TSX evaluates to the element, but the TypeScript type of a tag for a class is the class. `getComponent<T>(element)` converts an element that was created for a class Component back to the instance, so you can call its methods.

```tsx
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
```
## Accepting id, class, and style

`passthroughAttrsToElement(element, attrs)` sets the `id`, `class`, and `style` attrs that a caller passed on the element a Component renders. `class` is added to the element's own classes rather than replacing them. Add `IdAttr` and `StylePassthroughAttrs` to the Component's attrs type to accept them.

`setAttrsOnElement(element, attrs)` sets attributes, style objects, and event listeners on an existing element the same way TSX does.

```tsx
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
```