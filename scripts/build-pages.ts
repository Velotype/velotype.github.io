// Writes index.html and one projects/<id>/index.html per project. Each page is its own static file,
// so it has its own URL, title, and description with no client-side routing. They all load the
// same bundle, which reads <body data-page> to choose what to render.
import { projects } from "../src/projects.ts"
import { headPrelude } from "./head-prelude.ts"

const page = (title: string, description: string, id: string | null, noscript: string, bundle: string = "main") => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
<link rel="apple-touch-icon" href="/assets/logo.png">
${headPrelude}
</head>
<body${id ? ` data-page="${id}"` : ""}>
<div id="app"></div>
<noscript>${noscript}</noscript>
<script src="/build/${bundle}.js" type="module"></script>
</body>
</html>
`

const root = new URL("../", import.meta.url)

await Deno.writeTextFile(new URL("index.html", root), page(
    "The Velocity Project",
    "A suite of components for building software platforms end to end: UI, server, and wire format.",
    null,
    `The Velocity Project is a suite of components for building software platforms. See <a href="https://github.com/Velotype">github.com/Velotype</a>.`,
))

for (const project of projects) {
    const dir = new URL(`projects/${project.id}/`, root)
    await Deno.mkdir(dir, {recursive: true})
    await Deno.writeTextFile(new URL("index.html", dir), page(
        `${project.name} - The Velocity Project`,
        project.tagline,
        project.id,
        `${project.name}: ${project.tagline} See <a href="${project.links[0].to}">${project.links[0].label}</a>.`,
    ))
}

// The velojson playground is its own bundle, so that the other pages do not carry velojson
const playground = new URL("projects/velojson/playground/", root)
await Deno.mkdir(playground, {recursive: true})
await Deno.writeTextFile(new URL("index.html", playground), page(
    "velojson playground - The Velocity Project",
    "Encode JSON to VSON bytes and decode bytes back to JSON, live in your browser.",
    "velojson-playground",
    `The velojson playground encodes JSON to VSON and decodes it back, and needs JavaScript. See <a href="/projects/velojson/">velojson</a>.`,
    "playground",
))
