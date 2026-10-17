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

@example getting-started.tsx

## A tour

A few components from different categories, to show how they fit together. Form components are native elements with the usual attributes, feedback and overlay components show what happened, and `showToast()` is a function you call from a handler.

@example components-tour.tsx

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
