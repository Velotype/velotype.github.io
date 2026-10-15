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
const selector = new PersonSelector({}, [])
void selector

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
