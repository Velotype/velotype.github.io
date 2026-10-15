# Components

Every velodesign component, by category. Each links to its page in the [showcase](https://velotype.github.io/velodesign/), which has a live preview, the props table, and the types it uses.

The showcase is built from the latest source, which can be ahead of the published package, and this guide targets the published 0.1.3. What the components have in common is covered in [theming](/docs/velodesign/theming/), [layout and typography](/docs/velodesign/layout-and-typography/), and [conventions](/docs/velodesign/conventions/).

## Typography

The whole category: [Typography on the showcase](https://velotype.github.io/velodesign/category/typography).

| Component | What it is |
|---|---|
| [`Heading`](https://velotype.github.io/velodesign/components/heading) | A heading, h1 through h6. Size comes from level, so the visual hierarchy and the document outline cannot disagree. |
| [`Text`](https://velotype.github.io/velodesign/components/text) | Inline text with a semantic colour and the usual modifiers. type="muted" is the one to reach for most. |
| [`Paragraph`](https://velotype.github.io/velodesign/components/paragraph) | A block of prose with the package's line height and spacing. The last paragraph in a container drops its bottom margin. |
| [`Icon`](https://velotype.github.io/velodesign/components/icon) | Renders a registered vector icon as an inline SVG. |

## Layout

The whole category: [Layout on the showcase](https://velotype.github.io/velodesign/category/layout).

| Component | What it is |
|---|---|
| [`Stack`](https://velotype.github.io/velodesign/components/stack) | One-dimensional layout: a row or column of children with a consistent gap. The component that replaces style={{display:'flex', gap:'0.5rem'}}. |
| [`Grid`](https://velotype.github.io/velodesign/components/grid) | Two-dimensional layout: cells that reflow to fill the width they are given, without a media query. |

## Form

The whole category: [Form on the showcase](https://velotype.github.io/velodesign/category/form).

| Component | What it is |
|---|---|
| [`Button`](https://velotype.github.io/velodesign/components/button) | A clickable action trigger with themed color variants and an optional loading state. |
| [`ButtonGroup`](https://velotype.github.io/velodesign/components/button-group) | Visually joins a row (or column) of Buttons into a single connected control, sharing borders instead of each having its own. |
| [`RadioButton`](https://velotype.github.io/velodesign/components/radio-button) | A single option in a mutually-exclusive group, wrapping a native radio input. |
| [`Checkbox`](https://velotype.github.io/velodesign/components/checkbox) | A tri-state (checked/unchecked/indeterminate) toggle, wrapping a native checkbox input. |
| [`Toggle`](https://velotype.github.io/velodesign/components/toggle) | A switch-style boolean control, wrapping a native checkbox input styled as a track and thumb. |
| [`TextBox`](https://velotype.github.io/velodesign/components/text-box) | A single-line text input supporting text, email, phone, and password variants. |
| [`Textarea`](https://velotype.github.io/velodesign/components/textarea) | A multi-line text input with a configurable row count and resize behavior. |
| [`Select`](https://velotype.github.io/velodesign/components/select) | A themed dropdown for choosing one of a fixed set of options, wrapping a native select. |
| [`SelectMenu`](https://velotype.github.io/velodesign/components/select-menu) | A Select-alike with fully custom rendering of each option (and of the trigger's current value), for options that need icons, avatars, or other rich content a native select can't display. |
| [`TextNonEditableField`](https://velotype.github.io/velodesign/components/text-non-editable-field) | A read-only label/value pair, styled consistently with the other form-field components. |
| [`TextFormField`](https://velotype.github.io/velodesign/components/text-form-field) | A label paired with a TextBox, bound to a RenderBasic field value. |
| [`TextEditableField`](https://velotype.github.io/velodesign/components/text-editable-field) | A label/value pair that swaps between a read view and an inline-editable TextBox with confirm/cancel. |

## Navigation

The whole category: [Navigation on the showcase](https://velotype.github.io/velodesign/category/navigation).

| Component | What it is |
|---|---|
| [`NavLink`](https://velotype.github.io/velodesign/components/nav-link) | A Link that also knows whether it matches the current location, for highlighting active navigation items. |
| [`Link`](https://velotype.github.io/velodesign/components/link) | An anchor that navigates within the app via History.changeLocation instead of a full page reload. |
| [`Breadcrumbs`](https://velotype.github.io/velodesign/components/breadcrumbs) | A navigational trail showing where the current page sits in the site hierarchy. Crumbs can carry an avatar or icon, and a long trail collapses its middle behind an expander. |
| [`Pagination`](https://velotype.github.io/velodesign/components/pagination) | A control for navigating between pages of results, with a windowed page-number list. |
| [`Navbar`](https://velotype.github.io/velodesign/components/navbar) | A themed top navigation bar with a brand slot and a row of children (typically NavLinks). |
| [`Sidebar`](https://velotype.github.io/velodesign/components/sidebar) | A themed vertical navigation list, with the current page highlighted automatically. |
| [`TableOfContents`](https://velotype.github.io/velodesign/components/table-of-contents) | A list of a page's sections, indented by level, with the one currently in view highlighted. Each entry is an in-page anchor. |
| [`Menu`](https://velotype.github.io/velodesign/components/menu) | A dropdown menu of navigational links or actions, built on native details/summary. |
| [`Steps`](https://velotype.github.io/velodesign/components/steps) | A horizontal sequence of numbered steps for wizards and checkout flows. |

## Feedback

The whole category: [Feedback on the showcase](https://velotype.github.io/velodesign/category/feedback).

| Component | What it is |
|---|---|
| [`Alert`](https://velotype.github.io/velodesign/components/alert) | An inline message box that draws attention to important information, with an optional dismiss button. |
| [`Toast`](https://velotype.github.io/velodesign/components/toast) | A transient, auto-dismissing notification message, shown via the imperative showToast() function rather than placed in your JSX tree. |
| [`Tooltip`](https://velotype.github.io/velodesign/components/tooltip) | A CSS-only hover/focus bubble that shows a short hint next to its trigger content. |
| [`Spinner`](https://velotype.github.io/velodesign/components/spinner) | A standalone animated loading indicator. |
| [`Progress`](https://velotype.github.io/velodesign/components/progress) | A determinate progress bar, wrapping a native progress element. |
| [`Skeleton`](https://velotype.github.io/velodesign/components/skeleton) | An animated placeholder shown in place of content that hasn't loaded yet. |
| [`Empty`](https://velotype.github.io/velodesign/components/empty) | A placeholder shown in place of a list/table/section that has no data. |

## Overlays

The whole category: [Overlays on the showcase](https://velotype.github.io/velodesign/category/overlays).

| Component | What it is |
|---|---|
| [`Modal`](https://velotype.github.io/velodesign/components/modal) | A centered dialog over the page, wrapping a native <dialog>, with confirm/cancel actions built in. |
| [`Drawer`](https://velotype.github.io/velodesign/components/drawer) | A panel that slides in from a viewport edge over the page, for side/top/bottom-anchored content. |
| [`Popover`](https://velotype.github.io/velodesign/components/popover) | A click-triggered bubble of rich content anchored to its trigger - can wrap a real Button, unlike Menu. |
| [`Popconfirm`](https://velotype.github.io/velodesign/components/popconfirm) | An inline "are you sure?" bubble for confirming a destructive action without the weight of a full Modal. |
| [`ContextMenu`](https://velotype.github.io/velodesign/components/context-menu) | Opens a themed menu at the cursor position on right-click, in place of the browser's native context menu. |
| [`Command`](https://velotype.github.io/velodesign/components/command) | A searchable command-palette overlay with keyboard navigation, built on a native <dialog>. |

## Data Display

The whole category: [Data Display on the showcase](https://velotype.github.io/velodesign/category/data-display).

| Component | What it is |
|---|---|
| [`Badge`](https://velotype.github.io/velodesign/components/badge) | A small inline label, typically used to show a status or count. |
| [`Card`](https://velotype.github.io/velodesign/components/card) | A themed container with optional header/footer slots, for grouping related content. |
| [`CodeBlock`](https://velotype.github.io/velodesign/components/code-block) | A block of source code, highlighted and scrollable. The grammar is a small scanner in the package itself, so it adds no runtime dependency. |
| [`Avatar`](https://velotype.github.io/velodesign/components/avatar) | A small circular image (or initials fallback) representing a person or entity. |
| [`TimeAgo`](https://velotype.github.io/velodesign/components/time-ago) | Formats a timestamp as a localized relative time string, e.g. "5 minutes ago". |
| [`Divider`](https://velotype.github.io/velodesign/components/divider) | A thin themed line used to visually separate content, horizontal or vertical. |
| [`Tabs`](https://velotype.github.io/velodesign/components/tabs) | A set of labeled panels where only one panel is shown at a time. |
| [`Accordion`](https://velotype.github.io/velodesign/components/accordion) | A list of collapsible sections built on native details/summary. Set exclusive and opening one closes the rest - that grouping belongs to the list, which is why a row of Collapses cannot express it. |
| [`Tag`](https://velotype.github.io/velodesign/components/tag) | A small inline label like Badge, but optionally removable - for filter chips and multi-select values. |
| [`Collapse`](https://velotype.github.io/velodesign/components/collapse) | A single collapsible section you place yourself and fill with children. Same widget Accordion renders - same border, chevron and animated open - but one section rather than a list. |
| [`Statistic`](https://velotype.github.io/velodesign/components/statistic) | A labeled numeric stat tile, for dashboards and KPI summaries. |
| [`List`](https://velotype.github.io/velodesign/components/list) | A styled list of items, each with optional leading/trailing slots. |
| [`Timeline`](https://velotype.github.io/velodesign/components/timeline) | A vertical list of dated/ordered events, each with a dot marker on a connecting line. |
| [`AspectRatio`](https://velotype.github.io/velodesign/components/aspect-ratio) | Constrains its children to a fixed width:height ratio, via pure CSS. |
| [`ScrollArea`](https://velotype.github.io/velodesign/components/scroll-area) | A scrollable container with a themed thin scrollbar. |
| [`Table`](https://velotype.github.io/velodesign/components/table) | A themed data table wrapping a native <table>, generic over the row type. |
| [`DataTable`](https://velotype.github.io/velodesign/components/data-table) | A batteries-included data table: sortable and resizable columns, user-toggleable column visibility, an optional search box, and built-in pagination via Pagination. |
| [`AsyncDataTable`](https://velotype.github.io/velodesign/components/async-data-table) | The same table, for data a server filters, sorts and pages. Give it a load() and it handles debouncing, out-of-order responses, loading and error states, and pagination. |
| [`Carousel`](https://velotype.github.io/velodesign/components/carousel) | A single-slide-at-a-time carousel with prev/next arrows and optional dot indicators. |
| [`Calendar`](https://velotype.github.io/velodesign/components/calendar) | A month-grid date picker with prev/next month navigation and a selectable day. |
| [`CalendarRange`](https://velotype.github.io/velodesign/components/calendar-range) | A month-grid date-*range* picker: click a start day, then an end day, and the span between them highlights. |
| [`Tree`](https://velotype.github.io/velodesign/components/tree) | A hierarchical, expandable/collapsible list built on nested native details/summary pairs. Nodes open and close with the same animation as Collapse and Accordion. |

## Data Entry

The whole category: [Data Entry on the showcase](https://velotype.github.io/velodesign/category/data-entry).

| Component | What it is |
|---|---|
| [`DatePicker`](https://velotype.github.io/velodesign/components/date-picker) | A themed date input, wrapping a native <input type="date">. |
| [`DateTimePicker`](https://velotype.github.io/velodesign/components/date-time-picker) | A themed date-and-time input, wrapping a native <input type="datetime-local">. |
| [`DateTimeRangePicker`](https://velotype.github.io/velodesign/components/date-time-range-picker) | A pair of linked date-and-time inputs for picking a span rather than a single moment. |
| [`Slider`](https://velotype.github.io/velodesign/components/slider) | A themed range input, wrapping a native <input type="range">. |
| [`InputNumber`](https://velotype.github.io/velodesign/components/input-number) | A themed numeric input, wrapping a native <input type="number">. |
| [`ColorPicker`](https://velotype.github.io/velodesign/components/color-picker) | A themed color swatch input, wrapping a native <input type="color">. |
| [`Combobox`](https://velotype.github.io/velodesign/components/combobox) | A free-text input with a searchable dropdown of suggestions, wrapping a native input paired with a datalist. |
| [`Upload`](https://velotype.github.io/velodesign/components/upload) | A themed drop-zone wrapping a visually-hidden native file input. |
| [`Rate`](https://velotype.github.io/velodesign/components/rate) | An interactive star rating, built on a group of visually-hidden native radio inputs. |
| [`Form`](https://velotype.github.io/velodesign/components/form) | A themed <form> layout wrapper, paired with FormField for a label/control/error stack around each input. |

## Charts

The whole category: [Charts on the showcase](https://velotype.github.io/velodesign/category/charts).

| Component | What it is |
|---|---|
| [`LineChart`](https://velotype.github.io/velodesign/components/line-chart) | A line chart for trends over time, optionally filled and optionally stacked. Hovering anywhere over the plot reads out every series at the nearest category. |
| [`AreaChart`](https://velotype.github.io/velodesign/components/area-chart) | A filled line chart - LineChart with area set. Stack it to show how parts add up to a total. |
| [`BarChart`](https://velotype.github.io/velodesign/components/bar-chart) | A bar chart for comparing categories: vertical or horizontal, with series side by side or stacked. |
| [`PieChart`](https://velotype.github.io/velodesign/components/pie-chart) | A pie or donut chart for part-to-whole. Slices are drawn in the order given, never re-sorted, so they stay aligned with a legend or table beside them. |
| [`Gauge`](https://velotype.github.io/velodesign/components/gauge) | A radial gauge for one value against a range, with optional coloured bands for good/warning/critical zones. |
| [`Sparkline`](https://velotype.github.io/velodesign/components/sparkline) | A tiny axis-less trend, sized to sit inside a table cell or beside a Statistic. Line, area or bar. |
