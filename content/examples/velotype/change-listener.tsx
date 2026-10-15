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
