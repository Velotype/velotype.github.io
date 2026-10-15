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
