import { Component, type EmptyAttrs, ErrorBoundary } from "@velotype/velotype"

class Chart extends Component<EmptyAttrs> {
    override render(): HTMLElement {
        throw new Error("The chart data is missing")
    }
}

// When renderContent() throws, on first render or on refresh(), what it created is released and
// renderError() is rendered instead
class SafeChart extends ErrorBoundary<EmptyAttrs> {
    override renderContent() {
        // Create the Components to protect here. A Component passed in as a child is created by the
        // parent before the ErrorBoundary, so its errors are not caught.
        return <div><Chart/></div>
    }

    override renderError(error: unknown) {
        return <div>The chart could not be shown: {String(error)}</div>
    }
}

document.body.append(<SafeChart/>)
