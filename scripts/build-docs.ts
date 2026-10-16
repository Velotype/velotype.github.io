// Builds the developer docs: content/docs/<project>/*.md become static pages at /docs/<project>/...
//
// - Pages are ordered by file name (01-..., 02-...). The first page of a project is its docs
//   landing page at /docs/<project>/, the rest are at /docs/<project>/<slug>/.
// - A line that is only `@example <file>` is replaced by a code block holding
//   content/examples/<project>/<file>. Those files are type-checked (`deno task check`), so what
//   the docs show compiles against the published package.
// - A line that is only `@output <example>` is replaced by what the example printed, from its .out
//   file (`deno task run-examples <project>` checks that the .out files are current).
// - The page's title is its first `# heading`, its description is its first paragraph.
// - Each page is complete HTML, and the bundle then adds the navigation around it.
import { marked } from "npm:marked@15.0.12"
import { projectById, projects } from "../src/projects.ts"
import { headPrelude } from "./head-prelude.ts"

const root = new URL("../", import.meta.url)
const docsSource = new URL("content/docs/", root)
const examplesSource = new URL("content/examples/", root)

type Page = {slug: string, title: string, description: string, url: string, body: string, markdown: string, section?: string, mdPath: string}

// A directory inside a project's docs is a section: its pages follow the project's own in the sidebar,
// under a heading, at /docs/<project>/<dir>/. Its examples are another project's (they are type-checked
// and run by that name), and projectId is the project page that links to the section.
type Section = {dir: string, title: string, examples: string, projectId: string}
const sections: Record<string, Section[]> = {
    velotype: [{dir: "devtools", title: "Velotype DevTools", examples: "velodevtools", projectId: "velodevtools"}],
}

const escapeHtml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
const slugify = (text: string) => text.toLowerCase().replace(/<[^>]*>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

marked.use({
    renderer: {
        heading({tokens, depth}) {
            const text = this.parser.parseInline(tokens)
            return `<h${depth} id="${slugify(text)}">${text}</h${depth}>\n`
        },
    },
})

function inlineExamples(project: string, markdown: string, source: string): string {
    return markdown.replace(/^@example (\S+)\s*$/gm, (_line, file: string) => {
        let code: string
        try {
            code = Deno.readTextFileSync(new URL(`${project}/${file}`, examplesSource))
        } catch {
            throw new Error(`${source}: example ${project}/${file} not found`)
        }
        const language = file.endsWith(".json") ? "json" : "tsx"
        return "```" + language + "\n" + code.replace(/\n+$/, "") + "\n```"
    })
}

function inlineOutputs(project: string, markdown: string, source: string): string {
    return markdown.replace(/^@output (\S+)\s*$/gm, (_line, file: string) => {
        const outFile = file.replace(/\.tsx?$/, ".out")
        let output: string
        try {
            output = Deno.readTextFileSync(new URL(`${project}/${outFile}`, examplesSource))
        } catch {
            throw new Error(`${source}: output ${project}/${outFile} not found (run deno task run-examples ${project} --update)`)
        }
        return "```text\n" + output.replace(/\n+$/, "") + "\n```"
    })
}

function readDirPages(project: string, examples: string, section?: Section): Page[] {
    const subdir = section ? `${project}/${section.dir}` : project
    const files = [...Deno.readDirSync(new URL(`${subdir}/`, docsSource))]
        .filter(entry => entry.isFile && entry.name.endsWith(".md"))
        .map(entry => entry.name)
        .sort()
    return files.map((file, index) => {
        const source = `content/docs/${subdir}/${file}`
        const text = Deno.readTextFileSync(new URL(`${subdir}/${file}`, docsSource))
        const title = text.match(/^# (.+)$/m)?.[1]
        if (!title) {
            throw new Error(`${source} has no # heading`)
        }
        const description = text.replace(/^# .+$/m, "").trim().split(/\n\s*\n/)[0].replace(/\s+/g, " ").replace(/[`*_]/g, "")
        const slug = file.replace(/^\d+-/, "").replace(/\.md$/, "")
        const markdown = inlineOutputs(examples, inlineExamples(examples, text, source), source)
        const base = `/docs/${subdir}/`
        return {
            slug, title, description, markdown, section: section?.title,
            mdPath: `docs/${subdir}/${slug}.md`,
            url: index == 0 ? base : `${base}${slug}/`,
            body: marked.parse(markdown) as string,
        }
    })
}

function readPages(project: string): Page[] {
    return [
        ...readDirPages(project, project),
        ...(sections[project] ?? []).flatMap(section => readDirPages(project, section.examples, section)),
    ]
}

const projectsWithDocs = [...Deno.readDirSync(docsSource)].filter(entry => entry.isDirectory).map(entry => entry.name).sort()

const nav = projectsWithDocs.map(id => ({id, name: projectById.get(id)!.name, pages: readPages(id).map(({slug, title, url, section}) => ({slug, title, url, section}))}))

// Every link to another docs page, and every #anchor in it, must exist
const pagesByUrl = new Map<string, string>()
for (const project of projectsWithDocs) {
    for (const page of readPages(project)) {
        pagesByUrl.set(page.url, page.body)
    }
}
const brokenLinks: string[] = []
for (const [url, body] of pagesByUrl) {
    for (const [, href] of body.matchAll(/href="(\/docs\/[^"]*)"/g)) {
        const [path, anchor] = href.split("#")
        const target = pagesByUrl.get(path)
        if (target === undefined || (anchor && !target.includes(`id="${anchor}"`))) {
            brokenLinks.push(`${url} links to ${href}`)
        }
    }
    for (const [, anchor] of body.matchAll(/href="#([^"]+)"/g)) {
        if (!body.includes(`id="${anchor}"`)) {
            brokenLinks.push(`${url} links to #${anchor}`)
        }
    }
}
if (brokenLinks.length > 0) {
    throw new Error(`Broken docs links:\n${brokenLinks.join("\n")}`)
}

for (const project of projectsWithDocs) {
    const name = projectById.get(project)!.name
    const pages = readPages(project)
    for (const page of pages) {
        const dir = new URL(page.url.slice(1), root)
        await Deno.mkdir(dir, {recursive: true})
        // The same page as Markdown, with its examples and outputs inlined, for llms.txt to link to
        await Deno.writeTextFile(new URL(page.mdPath, root), page.markdown)
        const navJson = JSON.stringify({project, nav, current: page.url}).replace(/</g, "\\u003c")
        await Deno.writeTextFile(new URL("index.html", dir), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(page.title)} - ${escapeHtml(page.section ? `${page.section}, ${name}` : name)} docs</title>
<meta name="description" content="${escapeHtml(page.description)}">
<link rel="icon" type="image/svg+xml" href="/assets/logo.svg">
<link rel="apple-touch-icon" href="/assets/logo.png">
${headPrelude}
</head>
<body data-doc="${project}">
<div id="app"><article id="doc">
${page.body}</article></div>
<script type="application/json" id="docs-nav">${navJson}</script>
<script src="/build/main.js" type="module"></script>
</body>
</html>
`)
    }
}
// The bundle uses this to link each project to its docs
// (a project whose docs are a section of another's links to that section)
const docsLanding = new Map(nav.map(entry => [entry.id, entry.pages[0].url]))
for (const [project, list] of Object.entries(sections)) {
    for (const section of list) {
        docsLanding.set(section.projectId, `/docs/${project}/${section.dir}/`)
    }
}
await Deno.writeTextFile(new URL("src/docs-index.json", root), JSON.stringify(Object.fromEntries(docsLanding), null, 4) + "\n")
console.log(`Built docs for ${projectsWithDocs.join(", ") || "no projects"}`)

// llms.txt: what a visiting agent should know about the projects, from content/llms-intro.md plus a
// list of the projects, the docs pages (as Markdown), and the versions the examples were checked against
const site = "https://velotype.github.io"
const intro = Deno.readTextFileSync(new URL("content/llms-intro.md", root)).trimEnd()

const pins = new Map<string, string>()
for (const project of projectsWithDocs) {
    const config = Deno.readTextFileSync(new URL(`${project}/deno.json`, examplesSource))
    for (const [, name, version] of config.matchAll(/jsr:@velotype\/([a-z]+)@\^?(\d+\.\d+\.\d+)/g)) {
        pins.set(name, version)
    }
}

const lines: string[] = [intro, ""]
lines.push("## Versions", "", "The docs and their examples were type-checked, and run, against these published versions:", "")
for (const [name, version] of [...pins].sort()) {
    lines.push(`- @velotype/${name} ${version}: https://jsr.io/@velotype/${name}`)
}
const designConfig = Deno.readTextFileSync(new URL("velodesign/deno.json", examplesSource))
const designOn = designConfig.match(/jsr:@velotype\/velotype@\^?(\d+\.\d+\.\d+)/)?.[1]
if (designOn) {
    lines.push("", `velodesign ${pins.get("velodesign")} is built on Velotype ${designOn}, so use that Velotype version with it.`)
}
lines.push("", "## Projects", "")
for (const project of projects) {
    const docs = docsLanding.get(project.id)
    lines.push(`- [${project.name}](${site}/projects/${project.id}/): ${project.tagline} Repository: ${project.links[0].to}${docs ? ` Docs: ${site}${docs}` : ""}`)
}
for (const entry of nav) {
    lines.push("", `## ${entry.name} docs`, "")
    for (const page of readPages(entry.id)) {
        lines.push(`- [${page.section ? `${page.section}: ` : ""}${page.title}](${site}/${page.mdPath}): ${page.description}`)
    }
}
lines.push("", "## Optional", "",
    `- [llms-full.txt](${site}/llms-full.txt): this file's introduction and versions, followed by every docs page, in one file`,
    `- [Home page](${site}/): the project overview for people`,
    `- [velojson playground](${site}/projects/velojson/playground/): encode JSON to VSON and decode bytes to JSON in a browser`,
    "- [GitHub organization](https://github.com/Velotype): every repository",
    "- [JSR scope](https://jsr.io/@velotype): every published package",
    "- [Medium articles](https://argoday.medium.com/): walkthroughs of velomicro and velomini")
await Deno.writeTextFile(new URL("llms.txt", root), lines.join("\n") + "\n")
console.log(`Wrote llms.txt: ${lines.length} lines, and the docs as Markdown`)

// llms-full.txt: the introduction and versions, then every docs page in full, for an agent that wants
// everything in one fetch. Each page is introduced by where it came from.
const full: string[] = [intro, "", ...lines.slice(lines.indexOf("## Versions"), lines.indexOf("## Projects"))]
for (const entry of nav) {
    for (const page of readPages(entry.id)) {
        full.push("", "---", "", `Source: ${site}${page.url}`, "", page.markdown.trim())
    }
}
await Deno.writeTextFile(new URL("llms-full.txt", root), full.join("\n") + "\n")
console.log(`Wrote llms-full.txt: ${(full.join("\n").length / 1024).toFixed(0)}KB`)
