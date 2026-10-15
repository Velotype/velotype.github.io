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
import { projectById } from "../src/projects.ts"

const root = new URL("../", import.meta.url)
const docsSource = new URL("content/docs/", root)
const examplesSource = new URL("content/examples/", root)

type Page = {slug: string, title: string, description: string, url: string, body: string}

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

function readPages(project: string): Page[] {
    const files = [...Deno.readDirSync(new URL(`${project}/`, docsSource))]
        .filter(entry => entry.isFile && entry.name.endsWith(".md"))
        .map(entry => entry.name)
        .sort()
    return files.map((file, index) => {
        const source = `content/docs/${project}/${file}`
        const text = Deno.readTextFileSync(new URL(`${project}/${file}`, docsSource))
        const title = text.match(/^# (.+)$/m)?.[1]
        if (!title) {
            throw new Error(`${source} has no # heading`)
        }
        const description = text.replace(/^# .+$/m, "").trim().split(/\n\s*\n/)[0].replace(/\s+/g, " ").replace(/[`*_]/g, "")
        const slug = file.replace(/^\d+-/, "").replace(/\.md$/, "")
        return {
            slug, title, description,
            url: index == 0 ? `/docs/${project}/` : `/docs/${project}/${slug}/`,
            body: marked.parse(inlineOutputs(project, inlineExamples(project, text, source), source)) as string,
        }
    })
}

const projectsWithDocs = [...Deno.readDirSync(docsSource)].filter(entry => entry.isDirectory).map(entry => entry.name).sort()

const nav = projectsWithDocs.map(id => ({id, name: projectById.get(id)!.name, pages: readPages(id).map(({slug, title, url}) => ({slug, title, url}))}))

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
    for (const [index, page] of pages.entries()) {
        const dir = new URL(index == 0 ? `docs/${project}/` : `docs/${project}/${page.slug}/`, root)
        await Deno.mkdir(dir, {recursive: true})
        const navJson = JSON.stringify({project, nav, current: page.url}).replace(/</g, "\\u003c")
        await Deno.writeTextFile(new URL("index.html", dir), `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(page.title)} - ${escapeHtml(name)} docs</title>
<meta name="description" content="${escapeHtml(page.description)}">
<link rel="icon" href="data:,">
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
await Deno.writeTextFile(new URL("src/docs-index.json", root), JSON.stringify(Object.fromEntries(nav.map(entry => [entry.id, entry.pages[0].url])), null, 4) + "\n")
console.log(`Built docs for ${projectsWithDocs.join(", ") || "no projects"}`)
