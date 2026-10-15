import type { EmptyAttrs, FunctionComponent } from "@velotype/velomicro/tsx-micro"

// A function component returns an element. State is a variable, and updating the page is up to you.
const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = String(count)
        }}>Increment</button>
        <button type="button" onClick={() => {
            count -= 1
            counterLabel.innerText = String(count)
        }}>Decrement</button>
    </div>
}

// TSX returns real elements, so mounting is appending
document.body.append(<Counter/>)
