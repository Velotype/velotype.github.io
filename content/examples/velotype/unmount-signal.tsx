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
