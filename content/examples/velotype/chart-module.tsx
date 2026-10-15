import { Component, type EmptyAttrs } from "@velotype/velotype"

// The module that lazy-component.tsx loads on demand
export class Chart extends Component<EmptyAttrs> {
    override render() {
        return <div>A chart</div>
    }
}
