export type Link = {label: string, to: string}
export type TagKind = "primary" | "secondary" | "warning" | "danger" | "neutral"
export type Stat = {title: string, value: string, suffix?: string}
export type Feature = {title: string, text: string}
export type Sample = {title: string, intro?: string, language: "tsx" | "plain", code: string}
export type Resource = {name: string, tag: string, text: string, links: Link[]}

export type Project = {
    /** URL slug: the page is at /projects/<id>/ */
    id: string
    name: string
    tag: string
    tagKind: TagKind
    /** The one line under the name, on the home page card and the top of the project page */
    tagline: string
    /** A paragraph or two on the project page */
    about: string[]
    stats: Stat[]
    /** A line under the stats saying what was measured */
    statsNote?: string
    features: Feature[]
    samples: Sample[]
    install: Sample
    /** Repo, JSR, and any Pages site or article. The first two are the hero's buttons */
    links: Link[]
    resources?: Resource[]
}
/** inDocsNav: whether the docs sidebar lists the group's projects (the teaching frameworks are not for adopting, so it does not) */
export type Group = {title: string, note?: string, ids: string[], inDocsNav: boolean}

const gh = (repo: string): Link => ({label: "GitHub", to: `https://github.com/Velotype/${repo}`})
const jsr = (pkg: string): Link => ({label: "JSR", to: `https://jsr.io/@velotype/${pkg}`})

export const projects: Project[] = [
    {
        id: "velotype", name: "Velotype", tag: "framework", tagKind: "primary",
        tagline: "A fast and small TSX framework that updates the DOM in place.",
        about: [
            "Velotype creates real DOM elements as your TSX runs. There is no virtual DOM and no reconciler: a value that changes renders only the part of the page that depends on it, and a list that changes renders, moves, or removes only the rows that changed.",
            "Components are classes with fields and methods, not functions with hooks, and you write TSX the way you would write HTML.",
        ],
        stats: [
            {title: "Minified", value: "21", suffix: "kb"},
            {title: "Gzipped", value: "7.7", suffix: "kb"},
            {title: "Virtual DOM", value: "None"},
        ],
        statsNote: "Velotype 0.3.1, the jsx-runtime entry point, minified with deno bundle. Bundlers drop the parts an app does not import.",
        features: [
            {title: "Closer to the DOM", text: "TSX returns real HTMLElements. Attributes are HTML attributes (class, not className), event listeners are added with addEventListener, and there is nothing between your code and the page to learn."},
            {title: "Updates in place", text: "RenderObject renders a value to every place it appears and renders again when it changes. RenderObjectArray and RenderTemplateArray render only the affected rows, and sort(), move(), and filter() move the rows that already exist instead of rendering them again."},
            {title: "Classes, not hooks", text: "A Component is a class: fields hold state, methods change it, and Velotype calls mount(), render(), and unmount() for you. There are no use*() calls and no call-order rules."},
            {title: "Small, and tree-shakeable", text: "About 21kb minified and 7.7kb gzipped for the whole runtime (Velotype 0.3.1), and bundlers drop the parts an app does not import."},
            {title: "Type-checked styles and events", text: "Style objects are checked against CSS: property names, keywords, units, and colors. on* attributes take a handler or {handler, options}, and on- listens for a custom event by its exact name."},
            {title: "Made for development", text: "Hot reloading keeps component state, ErrorBoundary contains a failing component, AsyncRenderObject shows only the latest request's result, and the Velotype DevTools extension shows the live component tree."},
        ],
        samples: [
            {
                title: "A component that updates in place",
                intro: "The RenderObject renders its value wherever it is placed, and setting a new value renders only that element again.",
                language: "tsx",
                code: `class Counter extends Component<EmptyAttrs> {
    count = new RenderObject<number>(0, (count: number) => <span>{count}</span>)

    override render() {
        return <div>
            <div>Count: {this.count}</div>
            <button type="button" onClick={() => this.count.set(this.count.get() + 1)}>
                Add one
            </button>
        </div>
    }
}

replaceElementWithRoot(<Counter/>, document.getElementById("app"))`,
            },
            {
                title: "A list that moves its rows",
                intro: "RenderTemplateArray clones a template element for each row. Changing the Array renders only the rows that changed, and sorting or filtering moves the rows that are already on the page.",
                language: "tsx",
                code: `type Server = {name: string, cpu: number}

class ServerList extends Component<EmptyAttrs> {
    servers = new RenderTemplateArray<Server, null>({
        wrapperElementTag: "ul",
        template: <li></li>,
        renderFunction: (row: HTMLElement, server: Server) => {
            row.textContent = \`\${server.name} \${server.cpu}%\`
            return null
        },
    })

    override render() {
        return <div>
            <button type="button" onClick={() => this.servers.sort((a, b) => b.cpu - a.cpu)}>
                Sort by CPU
            </button>
            {this.servers}
        </div>
    }
}`,
            },
        ],
        install: {
            title: "Add Velotype to a Deno project", language: "plain",
            code: `deno add jsr:@velotype/velotype

// deno.json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velotype",
        "lib": ["dom", "deno.ns", "esnext"]
    }
}`,
        },
        links: [gh("velotype"), jsr("velotype")],
        resources: [
            {
                name: "Velotype DevTools", tag: "Chrome extension",
                text: "Chrome DevTools panels for debugging Velotype apps: the live component tree with each component's fields, the event bus's registrations, and a decoder for VSON and VBIN payloads. It is built from source and loaded unpacked.",
                links: [{label: "Docs", to: "/docs/velotype/devtools/"}, {label: "Learn more", to: "/projects/velodevtools/"}, gh("velodevtools")],
            },
            {
                name: "velotype-perf-demo", tag: "benchmark",
                text: "The same fleet dashboard written in Velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code, with 10,000 rows by default. The page loads each one and times creating rows, live updates, typing a filter, sorting, and moving a row in your own browser.",
                links: [gh("velotype-perf-demo"), {label: "Live demo", to: "https://velotype.github.io/velotype-perf-demo/"}],
            },
            {
                name: "example-velotype-projects", tag: "examples",
                text: "Example projects using the Velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, the demo pages from React's 2018 hooks talk recreated in Velotype, and the custom-elements-everywhere tests that check Velotype works with Custom Elements.",
                links: [gh("example-velotype-projects")],
            },
        ],
    },
    {
        id: "velodesign", name: "velodesign", tag: "UI components", tagKind: "primary",
        tagline: "A themed component library for Velotype, built from native HTML elements.",
        about: [
            "velodesign is a component library for Velotype apps. Where HTML has an element for the job (input, button, details, dialog), the component is that element, so keyboard support, form participation, and browser autofill come from the platform.",
            "This site is built with it.",
        ],
        stats: [
            {title: "Theme", value: "Light + dark"},
            {title: "Colors set by", value: "CSS variables"},
        ],
        features: [
            {title: "Native elements first", text: "A Checkbox is a real input, a Modal is a real dialog, and an Accordion is built on details. Nothing reimplements what the browser already does."},
            {title: "Re-theme with variables", text: "Colors come from a small set of CSS custom properties (--text, --background, --primary, --secondary, --warning, --accent, each with a light-to-dark ramp). Change them and every component follows, with no component code touched."},
            {title: "Light and dark", text: "The theme follows the browser's color scheme, or a reader's choice through [data-theme=\"light\"|\"dark\"]."},
            {title: "A broad set", text: "Typography, layout, form, navigation, feedback, overlays, data display, data entry, and charts: from Stack, Grid, and Button to DataTable, DatePicker, Command, and LineChart."},
            {title: "Spacing from one scale", text: "Stack and Grid draw gaps from a shared scale in em, so two rows that look the same are the same, and spacing follows the type size."},
            {title: "Updates only what changed", text: "Handlers do the smallest DOM update that expresses a change, and none when nothing changed, so focus, caret, selection, and scroll position survive."},
        ],
        samples: [
            {
                title: "Use a few components",
                language: "tsx",
                code: `import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

replaceElementWithRoot(
    <Stack direction="column">
        <Checkbox>Enable notifications</Checkbox>
        <Button type="primary" onClick={() => console.log("clicked")}>Save</Button>
    </Stack>,
    document.getElementById("app"),
)`,
            },
        ],
        install: {
            title: "Add velodesign to a Deno project", language: "plain",
            code: `deno add jsr:@velotype/velodesign

// Theme.injectStyles() runs once, before any component renders,
// and sets up the CSS custom properties every component reads.`,
        },
        links: [gh("velodesign"), jsr("velodesign"), {label: "Component showcase", to: "https://velotype.github.io/velodesign/"}],
    },
    {
        id: "velossr", name: "velossr", tag: "server rendering", tagKind: "primary",
        tagline: "TSX rendered to HTML on the server, with no virtual DOM and no client runtime.",
        about: [
            "velossr is the server-side version of Velotype's TSX. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve.",
            "Pair it with Velotype for interactive parts of a page: the server renders the markup for each one, and Velotype replaces it in the browser with replaceElementWithRoot().",
        ],
        stats: [
            {title: "Virtual DOM", value: "None"},
            {title: "Client runtime", value: "None"},
        ],
        features: [
            {title: "Static and dynamic components", text: "A StaticServerComponent is a plain function that renders synchronously. A DynamicServerComponent is a class that can see the Request and render async."},
            {title: "Streaming", text: "Render a page all at once, or as a ReadableStream where async components flush in place as they resolve."},
            {title: "Prepared once", text: "prepareHTMLVNodeForRendering() prepares a page at module load, so the static parts are not rebuilt for every request."},
            {title: "Escaped by default", text: "Text, attribute values, and attribute names are escaped where they are written. Inline style and script text is written as is, changing only the sequences that would end the element early."},
            {title: "Contained failures", text: "If a dynamic component throws, its onFail() renders instead, so one failing component does not take down the rest of the page."},
            {title: "Same TSX as Velotype", text: "HTML attributes, style objects, and fragments work as they do in the browser, so markup moves between server and client unchanged."},
        ],
        samples: [
            {
                title: "A server that renders a page",
                language: "tsx",
                code: `import { type Context, Router, Server } from "jsr:@velotype/veloserver"
import { type EmptyAttrs, prepareHTMLVNodeForRendering, renderServerVNode, type StaticServerComponent } from "jsr:@velotype/velossr"

const Page: StaticServerComponent<EmptyAttrs> = function() {
    return <html><body><div>Hello velossr!</div></body></html>
}
const preparedPage = prepareHTMLVNodeForRendering(<Page/>)

const router = new Router<never>({})
router.get("/", function(request: Request, context: Context<never>) {
    const response = new Response(renderServerVNode(preparedPage, request, context).toReadableStream())
    response.headers.set("content-type", "text/html; charset=utf-8")
    return response
})

new Server(router).serve("127.0.0.1", 3000)`,
            },
        ],
        install: {
            title: "Add velossr to a Deno project", language: "plain",
            code: `deno add jsr:@velotype/velossr

// deno.json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velossr"
    }
}`,
        },
        links: [gh("velossr"), jsr("velossr")],
    },
    {
        id: "velodevtools", name: "Velotype DevTools", tag: "Chrome extension", tagKind: "secondary",
        tagline: "Chrome DevTools panels for debugging Velotype apps.",
        about: [
            "A Chrome extension with three DevTools panels, plus a toolbar popup that shows whether Velotype is present on the page.",
            "It works with a Velotype build that installs the devtools hook, which every current Velotype entry point does. If a site uses Velotype and the tree is empty, its bundle predates the hook.",
        ],
        stats: [
            {title: "Panels", value: "3"},
        ],
        features: [
            {title: "Velotype: the component tree", text: "The page's live component tree, like React DevTools: class names, DOM anchors, and for class components their attrs and instance fields, including live RenderObject values. Click a node to inspect it and highlight it on the page."},
            {title: "Real expandable fields", text: "Any object, array, Map, or Set field expands to its live values, fetched fresh on each expand and kept live for branches that are already open."},
            {title: "Velotype Events", text: "A snapshot of the event bus's current registrations: every listening key, how many listeners it has, and which live components or RenderObjects they belong to."},
            {title: "VeloJSON", text: "Decodes VSON and VBIN payloads. It inspects network request and response bodies while the panel is open, and has a manual bytes-to-JSON and JSON-to-bytes tool."},
        ],
        samples: [],
        install: {
            title: "Build and load it", language: "plain",
            code: `deno task build

// chrome://extensions -> enable Developer mode -> Load unpacked
// -> select the dist/ folder`,
        },
        links: [gh("velodevtools")],
    },
    {
        id: "veloserver", name: "veloserver", tag: "web server", tagKind: "warning",
        tagline: "A web server framework for high-performance websites, on Deno.",
        about: [
            "veloserver is a small server framework: a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates Velotype apps.",
        ],
        stats: [],
        features: [
            {title: "A typed router", text: "get(), head(), and post() take a path or several paths. :name matches one segment and stores it as a path variable, a trailing * matches the rest, and a static segment beats a variable or wildcard."},
            {title: "Typed request metadata", text: "Context.meta holds metadata for each request, created by a function you give the Router and typed by the Router's type parameter."},
            {title: "Inspectors", text: "An Inspector runs before and after the handlers of a path. Its request side can answer the request itself, and its response side sees every response, which suits logging, timing, and auth."},
            {title: "Static files", text: "mountFiles() and mountFile() serve a directory or a file, held in memory with an ETag and a gzip copy for clients that accept it."},
            {title: "Clean shutdown", text: "serve() listens for SIGINT, SIGTERM, and SIGUSR1, and server.close() stops it from code."},
            {title: "A development server", text: "@velotype/veloserver/dev serves a Velotype app and updates the page when files change: per-module, or by rebuilding the bundle."},
        ],
        samples: [
            {
                title: "Hello veloserver",
                language: "tsx",
                code: `import { Router, Server } from "jsr:@velotype/veloserver"

const router = new Router<never>({})

router.get("/", () => {
    const response = new Response("<!DOCTYPE html><html><body>Hello veloserver!</body></html>")
    response.headers.set("content-type", "text/html; charset=utf-8")
    return response
})

router.get("/users/:id", (request, context) => {
    return router.json(request, context, {id: context.pathVariables?.get("id")})
})

const server = new Server(router)
server.serve("127.0.0.1", 3000)`,
            },
        ],
        install: {
            title: "Run it", language: "plain",
            code: `deno add jsr:@velotype/veloserver
deno run --allow-net server.ts`,
        },
        links: [gh("veloserver"), jsr("veloserver")],
    },
    {
        id: "velojson", name: "velojson (VSON)", tag: "binary JSON", tagKind: "warning",
        tagline: "A compact binary encoding for JSON, and a faster one when both sides share a schema.",
        about: [
            "VSON (Velocity JSON) maps JavaScript JSON data to bytes one to one: anything JSON can hold, VSON can hold, and nothing else is added.",
            "It has three formats. Each one solves a cost of the one before it.",
        ],
        stats: [
            {title: "Base vs JSON text", value: "20-25%", suffix: " smaller"},
            {title: "Key Table vs JSON text", value: "20-65%", suffix: " smaller"},
            {title: "VBIN vs JSON text", value: "25-70%", suffix: " smaller"},
        ],
        features: [
            {title: "VSON Base", text: "A direct structural translation of JSON, typically 20-25% smaller than the text. Because it mirrors JSON's structure it works for streaming and partial decoding."},
            {title: "VSON Key Table", text: "Every unique key is stored once, in a table at the end of the message. About 20% smaller than JSON for a single object, and up to about 65% smaller for many records that share a wide set of keys."},
            {title: "VBIN", text: "Encoder and decoder agree on a key-ID mapping ahead of time, so the table is not sent and key names are never encoded or decoded as strings. Typically 25-70% smaller, and significantly faster than native JSON."},
            {title: "Honest about speed", text: "The VSON Base and Key Table formats typically run slower than native JSON.stringify() and JSON.parse(). The speed comes from VBIN."},
            {title: "Server and browser builds", text: "The main module is tuned for speed and supports every format. The browser module is tuned for size (about 4.3kb minified) and supports Key Table."},
            {title: "Debuggable", text: "The Velotype DevTools extension decodes VSON and VBIN payloads straight from the network panel."},
        ],
        samples: [
            {
                title: "Encode and decode",
                language: "tsx",
                code: `import { VSON } from 'jsr:@velotype/velojson'

const startObj = { name: "Some name", age: 20, address: null }

const objBinary: Uint8Array = VSON.encode(startObj)
console.log(objBinary.length) // 34 bytes, against 44 for the JSON text

const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))
// {"name":"Some name","age":20,"address":null}`,
            },
        ],
        install: {
            title: "Add velojson to a Deno project", language: "plain",
            code: `deno add jsr:@velotype/velojson

// In the browser:
import { VSON } from "jsr:@velotype/velojson/browser"`,
        },
        links: [gh("velojson"), jsr("velojson")],
    },
    {
        id: "velomicro", name: "velomicro", tag: "1kb", tagKind: "neutral",
        tagline: "A 1kb TSX framework that shows how TSX rendering works.",
        about: [
            "velomicro is the smallest version of the idea: a createElement that returns real DOM elements, and function components. It exists to be read. The Medium article walks through its source line by line.",
        ],
        stats: [
            {title: "Size", value: "1", suffix: "kb"},
        ],
        features: [
            {title: "Returns HTMLElements", text: "TSX evaluates to real elements, so a div tag is an HTMLDivElement."},
            {title: "HTML attributes", text: "It calls setAttribute(), so you write class and the other attributes as you would in HTML."},
            {title: "Style objects", text: "Pass an object of camelCase properties, or a string."},
            {title: "Function components", text: "A component is a function from attrs to an element."},
        ],
        samples: [
            {
                title: "A counter function component",
                language: "tsx",
                code: `const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = count
        }}>Increment</button>
    </div>
}`,
            },
        ],
        install: {title: "Add velomicro to a Deno project", language: "plain", code: "deno add jsr:@velotype/velomicro"},
        links: [gh("velomicro"), jsr("velomicro"), {label: "Medium article", to: "https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}],
    },
    {
        id: "velomini", name: "velomini", tag: "2.5kb", tagKind: "neutral",
        tagline: "A 2.5kb TSX framework that adds classes to velomicro.",
        about: [
            "velomini is velomicro plus a Component class with render, mount, unmount, and refresh. Its way to update the page is to tear down a component's subtree and render it again. The Medium article walks through the source.",
            "Velotype is the next step: it keeps classes and replaces refresh() with values that update in place.",
        ],
        stats: [
            {title: "Size", value: "2.5", suffix: "kb"},
        ],
        features: [
            {title: "Class components", text: "Extend Component and implement render(). Velomini calls mount() and unmount() for you."},
            {title: "getComponent()", text: "Convert an element back to the class instance that built it, to call its methods."},
            {title: "Everything from velomicro", text: "Real HTMLElements, HTML attributes, style objects, and function components."},
        ],
        samples: [
            {
                title: "A class component",
                language: "tsx",
                code: `class ComplexComponent extends Component<{foo: string}> {
    override render(attrs) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Then in TSX:
return <div><ComplexComponent foo="Component!"></ComplexComponent></div>`,
            },
        ],
        install: {title: "Add velomini to a Deno project", language: "plain", code: "deno add jsr:@velotype/velomini"},
        links: [gh("velomini"), jsr("velomini"), {label: "Medium article", to: "https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}],
    },
]

export const groups: Group[] = [
    {title: "Front end", note: "TSX that creates real DOM elements, with no virtual DOM.", ids: ["velotype", "velodesign"], inDocsNav: true},
    {title: "Server", note: "Serve pages and APIs, render HTML, and carry the data between server and browser.", ids: ["velossr", "veloserver", "velojson"], inDocsNav: true},
    {title: "Learn", note: "The smallest versions of the idea, written to be read.", ids: ["velomicro", "velomini"], inDocsNav: false},
]

export const projectById = new Map(projects.map(project => [project.id, project]))
