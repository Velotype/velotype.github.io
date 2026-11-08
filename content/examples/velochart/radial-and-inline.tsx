import { Gauge, PieChart, Sparkline } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

const spend = [
    {label: "Platform", value: 24},
    {label: "Growth", value: 18},
    {label: "Infra", value: 12},
]

replaceElementWithRoot(
    <div>
        <PieChart title="Spend by team" data={spend} donut={0.6} centerLabel="54" centerSubLabel="total"/>
        <Gauge
            value={93}
            subLabel="disk used"
            formatValue={(n) => `${n}%`}
            ariaLabel="93 percent of disk used"
            bands={[
                {from: 0, to: 70, color: "var(--secondary)"},
                {from: 70, to: 90, color: "var(--warning)"},
                {from: 90, to: 100, color: "var(--accent)"},
            ]}/>
        <p>Signups this quarter <Sparkline values={[4, 7, 5, 11, 9, 14]} ariaLabel="Rising weekly signups"/> 14</p>
    </div>,
    document.getElementById("app")!,
)
