# RenderObjects

A RenderObject holds a value and renders it to the page. When the value changes, every place it was rendered updates, and nothing else does. This is how velotype updates the page in place, without a virtual DOM.

Create RenderObjects as public fields of Component classes, and velotype mounts and releases them with the Component. A RenderObject made anywhere else is released by the code that made it: see [Releasing a RenderObject](#releasing-a-renderobject).

## RenderObject

`new RenderObject<DataType>(initialValue, renderFunction)` holds a value and a function that renders a value into an element. Put the RenderObject in TSX as a child and it renders there. Put it in as many places as you like, and each one is rendered.

Setting `value` (or calling `set()`) renders the new value only when it is a different value (`!==`). `get()` and `value` read it.

```tsx
import { Component, type EmptyAttrs, RenderObject } from "@velotype/velotype"

type Person = {
    name: string
    address: string
    phone: string
}

class PersonSelector extends Component<EmptyAttrs> {
    // The first argument is the initial value, the second renders a value into an element
    selectedPerson = new RenderObject<Person | null>(null, function(person: Person | null) {
        if (!person) {
            return <div></div>
        } else {
            return <div>
                <div>Person:</div>
                <div>Name: {person.name}</div>
                <div>Address: {person.address}</div>
                <div>Phone: {person.phone}</div>
            </div>
        }
    })

    override render() {
        const people = [
            {name: "One person", address: "somewhere", phone: "123"},
            {name: "Two person", address: "elsewhere", phone: "456"},
            {name: "Three person", address: "nowhere", phone: "789"},
        ]
        return <div>
            {people.map((person) => <button type="button" onClick={() => {
                // Setting value renders the new value in both places below.
                // It renders only when the new value is a different value (!==).
                this.selectedPerson.value = person
            }}>{person.name}</button>)}
            <div>Render selected Person in one place: {this.selectedPerson}</div>
            <div>Render selected Person in another place: {this.selectedPerson}</div>
        </div>
    }
}

// get() and set() do the same as reading and writing value
void PersonSelector

// When a value that is an object or Array is changed in place, render it again with rerenderElements()
class TagList extends Component<EmptyAttrs> {
    tags = new RenderObject<string[]>(["velotype"], (tags: string[]) => <ul>{tags.map(tag => <li>{tag}</li>)}</ul>)

    override render() {
        return <div>
            <button type="button" onClick={() => {
                const tags = this.tags.get()
                tags.push("tsx")
                this.tags.rerenderElements(tags)
            }}>Add a tag</button>
            {this.tags}
        </div>
    }
}
void TagList
```
When a value that is an object or an Array is changed in place, `!==` sees no change. Call `rerenderElements(value)` to render it again.

### Listening for changes

* `registerOnChangeListener(listener, options)` runs `listener` after each change of `value`
* `registerOnMount(onMount, onUnmount)` adds callbacks that run when the Component whose public field holds the RenderObject mounts and unmounts, or the element whose `vtwith` lists it

Both return the RenderObject, so they can be chained onto its creation. The options of `registerOnChangeListener()` are:

| Option | Does |
|---|---|
| `hasVtKey` | Removes the listener with this Component's lifecycle instead of the RenderObject's. It must already have a `vtKey`, so call it from the Component's `mount()` |
| `triggerOnRegistration` | Also runs the listener once, just after it is registered |
| `eventDispatchDelay` | Waits this many milliseconds before running the listener, and runs it at most once in that time |

```tsx
import { Component, type EmptyAttrs, RenderBasic, RenderObject } from "@velotype/velotype"

class Search extends Component<EmptyAttrs> {
    // Runs the listener after each change of value.
    // eventDispatchDelay waits that many milliseconds before running it, and runs it at most once
    // in that time, so it reads the latest value.
    query = new RenderBasic<string>("").registerOnChangeListener(() => {
        console.log("search for", this.query.value)
    }, {eventDispatchDelay: 250})

    // Callbacks that run when the Component whose field holds the RenderObject mounts and unmounts
    status = new RenderBasic<string>("idle").registerOnMount(
        () => console.log("mounted"),
        () => console.log("unmounted"),
    )

    // triggerOnRegistration also runs the listener once, just after it is registered
    log = new RenderObject<string[]>([], (lines: string[]) => <pre>{lines.join("\n")}</pre>)
        .registerOnChangeListener(() => console.log("log changed"), {triggerOnRegistration: true})

    override mount() {
        // hasVtKey removes the listener with this Component's lifecycle instead of the
        // RenderObject's. The Component has its vtKey by the time mount() runs.
        this.status.registerOnChangeListener(() => console.log("status is", this.status.value), {hasVtKey: this})
    }

    override render() {
        return <div>
            <input type="search" onInput={(event: Event) => this.query.value = (event.target as HTMLInputElement).value}/>
            <div>Status: {this.status}</div>
            {this.log}
        </div>
    }
}
void Search
```
### Updating in place with handleUpdate

By default a new value renders new elements. For elements that change often, return an `UpdateHandlerLink` from the render function with references to the parts that change, and pass a `handleUpdate` function as the third argument. It updates those parts in place instead. The second type parameter of RenderObject types the references.

```tsx
import { Component, type EmptyAttrs, RenderObject, UpdateHandlerLink } from "@velotype/velotype"

type Score = {player: string, points: number}
// The references the render function keeps for handleUpdate: the parts that change
type ScoreRefs = {points: HTMLElement}

class ScoreBoard extends Component<EmptyAttrs> {
    // By default a new value renders new elements. Return an UpdateHandlerLink from the render
    // function, with references to the parts that change, and pass a handleUpdate function that
    // changes those parts in place.
    score = new RenderObject<Score, ScoreRefs>({player: "Ada", points: 0}, (score: Score) => {
        const points = <span>{score.points}</span>
        return new UpdateHandlerLink(<div>{score.player}: {points}</div>, {points})
    }, (_element, refs, _oldScore, newScore) => {
        refs.points.textContent = String(newScore.points)
    })

    override render() {
        return <div>
            {this.score}
            <button type="button" onClick={() => {
                this.score.value = {player: this.score.value.player, points: this.score.value.points + 1}
            }}>Add a point</button>
        </div>
    }
}
void ScoreBoard
```
## Releasing a RenderObject

velotype holds a RenderObject from when it is created until it is released, with the listeners it owns. It releases the ones in a Component's public fields when that Component unmounts. It can't see any other: one in a `#private` field, a Map, or a variable. One that is never released is held for as long as the page is open, with everything its render function refers to.

* **A RenderObject a Component keeps** in a `#private` field, or makes again in `render()`, is released with `release()` from the Component's `unmount()`, and before the next one is made (from 0.3.5)
* **A RenderObject made while drawing**, in a function component or in a method that returns elements, is listed in `vtwith={[...]}` on an element drawn with it. It mounts, unmounts, and is released with that element. The element may be the root that a function component, a Component's `render()`, or a RenderObject returns (from 0.3.5; before, such a root was wrapped in a `display: contents` element), and `refresh()` or a new value releases the ones of the root it replaces
* **A RenderObject that is shared**, and is meant to outlive the Component that made it, is not released

`release()` does not remove the elements the RenderObject has rendered, so release one only when it is shown nowhere else, and don't place it again. A RenderObjectArray releases its rows with it.

```tsx
import { Component, type EmptyAttrs, RenderObject, RenderObjectArray, replaceElementWithRoot } from "@velotype/velotype"

// velotype releases the RenderObjects in a Component's public fields when it unmounts. Any other
// is released by the code that made it.

// A #private field: released in unmount() with release()
class Notes extends Component<EmptyAttrs> {
    #notes = new RenderObjectArray<string>({renderFunction: (note: string) => <li>{note}</li>})

    override unmount() {
        this.#notes.release()
    }

    override render() {
        return <div>
            <button type="button" onClick={() => this.#notes.push(`Note ${this.#notes.length + 1}`)}>Add a note</button>
            <ul>{this.#notes}</ul>
        </div>
    }
}

// Made while drawing: listed in vtwith on an element drawn with it, here the function's root,
// and released when that element leaves the page
function Counter(attrs: {label: string}) {
    const count = new RenderObject<number>(0, (n: number) => <strong>{String(n)}</strong>)
    return <p vtwith={[count]}>
        {attrs.label}: {count} <button type="button" onClick={() => count.set(count.get() + 1)}>+1</button>
    </p>
}

replaceElementWithRoot(<div>
    <Notes/>
    <Counter label="Clicks"/>
</div>, document.getElementById("app"))
```
## RenderBasic

`RenderBasic<DataType>` is a RenderObject for a `string`, `number`, `bigint`, or `boolean`. It renders its value as text inside a `<span style="display:contents;">` and updates that text in place, so it needs no render function.

It adds `getString()` and `setString()`, which convert the value to and from a string.

```tsx
import { Component, type EmptyAttrs, RenderBasic } from "@velotype/velotype"

class Counter extends Component<EmptyAttrs> {
    // A RenderBasic holds a string, number, bigint, or boolean, and renders it as text inside a
    // <span style="display:contents;">, which it updates in place
    count = new RenderBasic<number>(0)

    override render() {
        return <div>
            <div>Counter value: {this.count}</div>
            <button type="button" onClick={() => this.count.value += 1}>Increment</button>
            <button type="button" onClick={() => this.count.value -= 1}>Decrement</button>
            <button type="button" onClick={() => this.count.setString("100")}>Set to 100</button>
            <button type="button" onClick={() => console.log(this.count.getString())}>Log it</button>
        </div>
    }
}
void Counter
```
## Other methods

| Method | Does |
|---|---|
| `getElements()` | The elements this RenderObject has rendered. Advanced: use carefully |
| `removeAll()` | Removes every element this RenderObject has rendered |
| `release()` | Releases this RenderObject, for one velotype can't see (from 0.3.5). See [Releasing a RenderObject](#releasing-a-renderobject) |
| `render(renderFunction, handleUpdate?)` | Renders one more element with a different render function than the default |
