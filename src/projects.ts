export type ProjectLink = {label: string, to: string}
export type TagKind = "primary" | "secondary" | "warning" | "danger" | "neutral"
export type Project = {
    id: string
    name: string
    tag: string
    tagKind: TagKind
    description: string
    links: ProjectLink[]
}
export type Group = {title: string, note?: string, projects: Project[]}

const gh = (repo: string): ProjectLink => ({label: "GitHub", to: `https://github.com/Velotype/${repo}`})
const jsr = (pkg: string): ProjectLink => ({label: "JSR", to: `https://jsr.io/@velotype/${pkg}`})

export const groups: Group[] = [
    {
        title: "Front end",
        note: "TSX that creates real DOM elements, with no virtual DOM.",
        projects: [
            {
                id: "velotype", name: "Velotype", tag: "framework", tagKind: "primary",
                description: "A fast and small TSX framework for high-performance websites. Components are classes, TSX creates real DOM elements directly, and there is no virtual DOM, reconciler, or hooks. Values (RenderObject, RenderObjectArray, RenderTemplateArray) update the DOM in place. Roughly 17kb minified, 6kb gzipped.",
                links: [gh("velotype"), jsr("velotype"), {label: "Benchmark demo", to: "https://velotype.github.io/velotype-perf-demo/"}],
            },
            {
                id: "velodesign", name: "velodesign", tag: "UI components", tagKind: "primary",
                description: "A themed component library for Velotype. Every component is built from native HTML elements where one exists (input, button, dialog), so keyboard support, forms, and autofill come from the browser. Colors come from a few CSS custom properties, with light and dark themes built in. This page is built with it.",
                links: [gh("velodesign"), jsr("velodesign"), {label: "Component showcase", to: "https://velotype.github.io/velodesign/"}],
            },
            {
                id: "velossr", name: "velossr", tag: "server rendering", tagKind: "primary",
                description: "Renders TSX to HTML on the server with no virtual DOM diffing and no client runtime. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve. Text and attributes are escaped by default.",
                links: [gh("velossr"), jsr("velossr")],
            },
            {
                id: "velodevtools", name: "Velotype DevTools", tag: "Chrome extension", tagKind: "secondary",
                description: "Debugging panels for Velotype projects: the live component tree with expandable instance fields, the event bus registrations, and a VSON/VBIN decoder that inspects network payloads.",
                links: [gh("velodevtools")],
            },
        ],
    },
    {
        title: "Server and wire format",
        projects: [
            {
                id: "veloserver", name: "veloserver", tag: "web server", tagKind: "warning",
                description: "A web server framework for high-performance websites. Typed routers with path variables and wildcards, per-request typed metadata, and configurable error handlers, running on Deno.",
                links: [gh("veloserver"), jsr("veloserver")],
            },
            {
                id: "velojson", name: "velojson (VSON)", tag: "binary JSON", tagKind: "warning",
                description: "A compact binary encoding for JSON, with a direct one-to-one mapping and no added types. It has three formats: Base (typically 20-25% smaller than JSON text, and streamable), Key Table (repeated keys stored once), and VBIN (a pre-agreed key schema, and the format that beats native JSON on speed).",
                links: [gh("velojson"), jsr("velojson")],
            },
        ],
    },
    {
        title: "Learn and compare",
        projects: [
            {
                id: "velomicro", name: "velomicro", tag: "1kb", tagKind: "neutral",
                description: "A strictly minimal TSX framework that shows how TSX rendering works: a createElement that returns real DOM elements, and function components.",
                links: [gh("velomicro"), jsr("velomicro"), {label: "Medium article", to: "https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}],
            },
            {
                id: "velomini", name: "velomini", tag: "2.5kb", tagKind: "neutral",
                description: "The next step up from velomicro: it adds a Component class with render, mount, unmount, and refresh.",
                links: [gh("velomini"), jsr("velomini"), {label: "Medium article", to: "https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}],
            },
            {
                id: "velotype-perf-demo", name: "velotype-perf-demo", tag: "benchmark", tagKind: "neutral",
                description: "The same fleet dashboard written in Velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code. The page times each one in your own browser.",
                links: [gh("velotype-perf-demo"), {label: "Live demo", to: "https://velotype.github.io/velotype-perf-demo/"}],
            },
            {
                id: "examples", name: "example-velotype-projects", tag: "examples", tagKind: "neutral",
                description: "Example projects using the Velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, React's 2018 hooks demos recreated in Velotype, and a Custom Elements compatibility check.",
                links: [gh("example-velotype-projects")],
            },
        ],
    },
]
