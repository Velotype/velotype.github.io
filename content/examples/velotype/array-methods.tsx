import { RenderObjectArray, RenderTemplateArray } from "@velotype/velotype"

// RenderObjectArray and RenderTemplateArray have the same methods.
// Only the rows that are affected are rendered, moved, or removed.
const letters = new RenderObjectArray<string>({
    wrapperElementTag: "ul",
    renderFunction: (letter: string) => <li>{letter}</li>,
})
const wrapper = <div>{letters}</div>
document.body.append(wrapper)

letters.push("b")                     // b
letters.pushAll(["c", "d"])           // b c d
letters.insertAt(0, "a")              // a b c d
letters.insertAllAt(4, ["e", "f"])    // a b c d e f
letters.insertAt(-1, "x")             // a b c d e x f   (negative counts from the end, as Array.splice() does)

console.log(letters.length)           // 7
console.log(letters.getAt(2))         // "c"

letters.setAt(5, "e2")                // a b c d e e2 f   (replaces the data point at an index)
letters.delete("e2")                  // a b c d e f      (removes the first data point that is this value)
letters.deleteAt(5)                   // a b c d e        (removes the data point at an index)
letters.deleteAt(0, 2)                // c d e            (removes 2 data points from index 0)

letters.swap(0, 1)                    // d c e
letters.move(0, 2)                    // c e d            (the moved data point ends up at index 2)

// sort() is stable, and moves only the rows that change places
letters.sort((a, b) => a.localeCompare(b))

// reorder() puts the data points in any order: afterwards the data point at index k is the one
// that was at indexes[k]. It throws a RangeError unless indexes holds each index once.
const count = letters.length
letters.reorder(Array.from({length: count}, (_, index) => count - 1 - index))

// filter() takes the rows that do not match out of the page, and filter(undefined) shows them all
// again. Indexes and length still count every data point.
letters.filter(letter => letter !== "d")
letters.filter(undefined)

letters.clear()

// A RenderTemplateArray is used the same way
const numbers = new RenderTemplateArray<number, null>({
    wrapperElementTag: "ol",
    template: <li></li>,
    renderFunction: (row: HTMLElement, value: number) => {
        row.textContent = String(value)
        return null
    },
})
numbers.pushAll([3, 1, 2])
numbers.sort((a, b) => a - b)
document.body.append(<div>{numbers}</div>)
