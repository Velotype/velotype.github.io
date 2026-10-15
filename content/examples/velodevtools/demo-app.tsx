import { Component, type EmptyAttrs, emitEvent, registerEventListener, RenderBasic, RenderObject, replaceElementWithRoot, VelotypeEvent } from "@velotype/velotype"

type Settings = {theme: string, notifications: {email: boolean, sms: boolean}, tags: Set<string>}

// A Component with fields to look at in the Velotype panel: attrs, a RenderBasic, a RenderObject
// holding an object (which expands to its live values), and a Map
class Profile extends Component<{name: string}> {
    visits = new RenderBasic<number>(0)
    settings = new RenderObject<Settings>(
        {theme: "dark", notifications: {email: true, sms: false}, tags: new Set(["admin", "beta"])},
        (settings: Settings) => <div>Theme: {settings.theme}</div>,
    )
    history: Map<string, number> = new Map([["login", 1], ["logout", 0]])

    // A listener, which the Velotype Events panel lists under the key "profile-updated"
    override mount() {
        registerEventListener(this, "profile-updated", () => { this.visits.value += 1 })
    }

    override render(attrs: Readonly<{name: string}>) {
        return <section>
            <h2>{attrs.name}</h2>
            <p>Visits: {this.visits}</p>
            {this.settings}
            <button type="button" onClick={() => emitEvent("profile-updated", new VelotypeEvent(this, "updated"))}>Update</button>
        </section>
    }
}

class App extends Component<EmptyAttrs> {
    override render() {
        return <main>
            <Profile name="Ada"/>
            <Profile name="Grace"/>
        </main>
    }
}

replaceElementWithRoot(<App/>, document.getElementById("app"))
