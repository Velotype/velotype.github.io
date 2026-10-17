# Getting started

velodesign is a themed component library for [velotype](/docs/velotype/). Where HTML has an element for the job (`input`, `button`, `details`, `dialog`), the component is that element, so keyboard support, form participation, and browser autofill come from the platform. Colors come from a small set of CSS custom properties, so you can re-theme the whole library without touching a component.

This guide covers what the components have in common, and the parts of the library that are not components. For each component's props and a live preview, see the [showcase](https://velotype.github.io/velodesign/). The [components](/docs/velodesign/components/) page lists all of them, grouped by category, with a link to each.

Every example in these docs is a file that is type-checked against the published package, and run in a browser. This site is built with velodesign.

## Install

velodesign is a [JSR package](https://jsr.io/@velotype/velodesign) for Deno. It is built on velotype, and velodesign 0.1.3 uses velotype 0.3.1, so add both and use that velotype version. Mixing velotype versions in one app is not supported.

```sh
deno add jsr:@velotype/velotype@0.3.1 jsr:@velotype/velodesign@0.1.3
```

```json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velotype",
        "lib": ["dom", "deno.ns", "esnext"]
    }
}
```

## Use it

`Theme.injectStyles()` runs once, before any component renders. It sets up the CSS custom properties every component reads, and a small CSS reset. Then use components as tags in a velotype app:

```tsx
import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

// Theme.injectStyles() runs once, before any component renders. It sets up the CSS custom
// properties every component reads, and a small CSS reset.
Theme.injectStyles()

replaceElementWithRoot(
    <Stack direction="column">
        <Checkbox>Enable notifications</Checkbox>
        <Button type="primary" onClick={() => console.log("clicked")}>Save</Button>
    </Stack>,
    document.getElementById("app")!,
)
```
## A tour

A few components from different categories, to show how they fit together. Form components are native elements with the usual attributes, feedback and overlay components show what happened, and `showToast()` is a function you call from a handler.

```tsx
import { Alert, Badge, Button, Card, Checkbox, Select, showToast, Stack, Tabs, Tag, TextBox, Tooltip } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

replaceElementWithRoot(
    <Stack direction="column">
        {/* Form: native inputs, buttons, and selects */}
        <Stack>
            <TextBox type="text" name="name" placeholder="Your name" required/>
            <Select name="role" placeholder="Choose a role" options={[
                {value: "admin", label: "Administrator"},
                {value: "user", label: "User"},
            ]}/>
            <Checkbox name="terms" checked>I agree</Checkbox>
        </Stack>
        <Stack>
            <Button type="primary" onClick={() => showToast("Saved", {type: "success", duration: 3000})}>Save</Button>
            <Button type="secondary">Cancel</Button>
            <Button type="danger" disabled>Delete</Button>
        </Stack>

        {/* Feedback */}
        <Alert type="warning" title="Heads up">This action cannot be undone.</Alert>

        {/* Data display */}
        <Card header="A card" footer={<Button type="text">Details</Button>}>
            <Badge type="primary">new</Badge> <Tag type="secondary">tagged</Tag>
        </Card>
        <Tabs tabs={[
            {key: "one", label: "One", content: <p>The first tab</p>},
            {key: "two", label: "Two", content: <p>The second tab</p>},
        ]}/>

        {/* Overlays */}
        <Tooltip content="More about this" placement="top"><Button type="text">Hover me</Button></Tooltip>
    </Stack>,
    document.getElementById("app")!,
)
```
## What is in the library

| Category | Examples |
|---|---|
| Typography | `Heading`, `Text`, `Paragraph`, `Icon` |
| Layout | `Stack`, `Grid` |
| Form | `Button`, `Checkbox`, `Select`, `TextBox`, `Textarea`, `Toggle`, `RadioButton` |
| Navigation | `Link`, `NavLink`, `Navbar`, `Sidebar`, `Breadcrumbs`, `Pagination`, `Menu`, `Steps` |
| Feedback | `Alert`, `Toast`, `Tooltip`, `Spinner`, `Progress`, `Skeleton`, `Empty` |
| Overlays | `Modal`, `Drawer`, `Popover`, `Popconfirm`, `ContextMenu`, `Command` |
| Data display | `Card`, `Table`, `DataTable`, `Tabs`, `Tree`, `Calendar`, `CodeBlock`, `Badge`, `Tag` |
| Data entry | `DatePicker`, `Slider`, `Combobox`, `Upload`, `Rate`, `Form` |
| Charts | `LineChart`, `AreaChart`, `BarChart`, `PieChart`, `Gauge`, `Sparkline` |

## Next steps

* [Theming](/docs/velodesign/theming/): colors, light and dark, and the symbols components draw
* [Layout and typography](/docs/velodesign/layout-and-typography/): `Stack`, `Grid`, and the text components
* [Conventions](/docs/velodesign/conventions/): attrs every component accepts, strings, icons, toasts, and routing
