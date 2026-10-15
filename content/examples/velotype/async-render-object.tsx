import { AsyncRenderObject, Component } from "@velotype/velotype"

type User = {name: string}

class UserCard extends Component<{id: string}> {
    // The first argument is a Promise, or a function that gets an AbortSignal and returns one
    user = new AsyncRenderObject<User>((signal) => fetch(`/users/${this.attrs.id}`, {signal}).then(response => response.json()), {
        pending: () => <p>Loading</p>,
        render: (user: User) => <p>{user.name}</p>,
        onFail: () => <p>Could not load the user</p>,
        // Keep showing the resolved value while load() fetches a new one
        keepPrevious: true,
    })

    override render() {
        return <div>
            {this.user}
            <button type="button" onClick={() => {
                // Replaces the load in progress, so only the latest load is shown
                this.user.load((signal) => fetch(`/users/${this.attrs.id}`, {signal}).then(response => response.json()))
            }}>Reload</button>
            <button type="button" onClick={() => {
                // Show a state directly, such as a value that is already known. This cancels the load in progress.
                this.user.set({status: "resolved", value: {name: "Ada"}})
            }}>Use a known user</button>
            <div>{this.user.loading ? "Loading..." : "Idle"}</div>
        </div>
    }
}
void UserCard
