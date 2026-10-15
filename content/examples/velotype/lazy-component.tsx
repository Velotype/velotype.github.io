import { AsyncRenderObject, Component, type EmptyAttrs } from "@velotype/velotype"

// Loading code on demand: a Component that is only needed after a click
class LazyChart extends Component<EmptyAttrs> {
    chart = new AsyncRenderObject(import("./chart-module.tsx"), {
        pending: () => <p>Loading chart</p>,
        render: (module) => <module.Chart/>,
    })

    override render() {
        return <div>{this.chart}</div>
    }
}

// To show several loads at once, load Promise.all() of them into one AsyncRenderObject
class Dashboard extends Component<EmptyAttrs> {
    data = new AsyncRenderObject(Promise.all([
        fetch("/users").then(response => response.json() as Promise<string[]>),
        fetch("/teams").then(response => response.json() as Promise<string[]>),
    ]), {
        render: ([users, teams]) => <p>{users.length} users on {teams.length} teams</p>,
    })

    override render() {
        return <div>{this.data}</div>
    }
}
void LazyChart
void Dashboard
