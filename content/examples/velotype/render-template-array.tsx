import { Component, type EmptyAttrs, RenderTemplateArray } from "@velotype/velotype"

type Server = {
    name: string
    cpu: number
}

class ServerList extends Component<EmptyAttrs> {
    // Rows are clones of the template. renderFunction fills in each new clone with DOM APIs.
    servers = new RenderTemplateArray<Server, null>({
        wrapperElementTag: "ul",
        template: <li></li>,
        renderFunction: (row: HTMLElement, server: Server) => {
            row.textContent = `${server.name} ${server.cpu}%`
            return null
        },
    })

    override mount() {
        this.servers.pushAll([
            {name: "eu-west-1", cpu: 40},
            {name: "us-east-1", cpu: 75},
            {name: "ap-south-1", cpu: 12},
        ])
    }

    override render() {
        return <div>
            <input type="search" placeholder="Filter" onInput={(event) => {
                const text = (event.target as HTMLInputElement).value
                // Rows that do not match are taken out of the page. filter(undefined) shows them all again.
                this.servers.filter(text === "" ? undefined : server => server.name.includes(text))
            }}/>
            <button type="button" onClick={() => this.servers.sort((a, b) => b.cpu - a.cpu)}>Busiest first</button>
            <button type="button" onClick={() => this.servers.move(this.servers.length - 1, 0)}>Last to top</button>
            {this.servers}
        </div>
    }
}
void ServerList
