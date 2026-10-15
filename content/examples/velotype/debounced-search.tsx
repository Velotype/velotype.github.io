import { AsyncRenderObject, Component, type EmptyAttrs, RenderBasic } from "@velotype/velotype"

type Result = {title: string}

class Search extends Component<EmptyAttrs> {
    // Shows only the latest search's results, and aborts the earlier requests
    results = new AsyncRenderObject<Result[]>(Promise.resolve([]), {
        render: (results) => <ul>{results.map((result) => <li>{result.title}</li>)}</ul>,
        keepPrevious: true,
    })

    // The listener runs at most once every 250ms while typing, and reads the latest value
    query = new RenderBasic<string>("").registerOnChangeListener(() => {
        const query = this.query.value
        this.results.load((signal) => fetch(`/search?q=${encodeURIComponent(query)}`, {signal}).then(response => response.json()))
    }, {eventDispatchDelay: 250})

    override render() {
        return <div>
            <input type="search" onInput={(event: Event) => this.query.value = (event.target as HTMLInputElement).value}/>
            {this.results}
        </div>
    }
}
void Search
