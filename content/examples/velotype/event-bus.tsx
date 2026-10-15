import { Component, type EmptyAttrs, emitEvent, RenderBasic, registerEventListener, removeEventListeners, VelotypeEvent } from "@velotype/velotype"

class Status extends Component<EmptyAttrs> {
    message = new RenderBasic<string>("")

    private onStatus = (event: VelotypeEvent) => {
        this.message.value = String(event.data)
    }

    // Register a Component's listeners in mount(). A Component gets its vtKey after its constructor
    // returns, so registerEventListener() throws a TypeError when called from a constructor or a
    // field initializer. Listeners are removed when the Component unmounts.
    override mount() {
        registerEventListener(this, "status", this.onStatus)
    }

    stopListening() {
        // Remove one listener, or every listener for the key when no listener is passed
        removeEventListeners(this, "status", this.onStatus)
    }

    override render() {
        return <div>{this.message}</div>
    }
}

class Saver extends Component<EmptyAttrs> {
    override render() {
        return <button type="button" onClick={() => {
            // Sends the event to every listener of "status". Passing the emitting Component as the
            // third argument skips that Component's own listeners.
            emitEvent("status", new VelotypeEvent(this, "saved", "Saved"), this)
        }}>Save</button>
    }
}
void Status
void Saver
