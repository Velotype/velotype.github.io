import { Breadcrumbs, CodeBlock, Grid, Heading, Link, NavLink, Stack, TableOfContents, Text } from "@velotype/velodesign"
import type { TableOfContentsItemType } from "@velotype/velodesign"
import { setStylesheet } from "@velotype/velotype"
import { groups, projectById } from "./projects.ts"

type DocsPage = {slug: string, title: string, url: string, section?: string}
type DocsNav = {project: string, nav: {id: string, name: string, pages: DocsPage[]}[], current: string}

const languageOf = (code: Element): "tsx" | "css" | "plain" => {
    const language = [...code.classList].find(name => name.startsWith("language-"))?.slice(9)
    return language == "css" ? "css" : language == "tsx" || language == "ts" || language == "json" ? "tsx" : "plain"
}

/** Replaces each code block the build wrote with a velodesign CodeBlock */
function highlightCodeBlocks(article: HTMLElement) {
    for (const pre of article.querySelectorAll("pre")) {
        const code = pre.querySelector("code")
        if (code) {
            pre.replaceWith(<CodeBlock code={code.textContent.replace(/\n$/, "")} language={languageOf(code)}/>)
        }
    }
}

/** The article's h2 and h3 headings, for the table of contents */
function headings(article: HTMLElement): TableOfContentsItemType[] {
    return [...article.querySelectorAll("h2, h3")].map(heading => ({
        id: heading.id,
        label: heading.textContent,
        level: heading.tagName == "H2" ? 1 : 2,
    }))
}

/** The other projects' docs under their group's name. The teaching frameworks are left out */
function otherDocs(data: DocsNav): HTMLElement {
    return <Stack direction="column" gap="sm">{groups.filter(group => group.inDocsNav).map(group => {
        const entries = group.ids.filter(id => id != data.project).flatMap(id => data.nav.filter(entry => entry.id == id))
        return entries.length > 0 && <div>
            <Text type="muted" style={{display: "block", margin: "0 0.5em 0.25em"}}>{group.title}</Text>
            {entries.map(entry => <Link to={entry.pages[0].url}>{entry.name}</Link>)}
        </div>
    })}</Stack>
}

export function DocsPage(): HTMLElement {
    const data: DocsNav = JSON.parse(document.getElementById("docs-nav")!.textContent)
    const project = projectById.get(data.project)!
    const entry = data.nav.find(entry => entry.id == data.project)!
    const page = entry.pages.find(page => page.url == data.current)!
    const index = entry.pages.indexOf(page)
    const previous = entry.pages[index - 1]
    const next = entry.pages[index + 1]

    const article = document.getElementById("doc")!
    article.remove()
    highlightCodeBlocks(article)

    setStylesheet(`
.vtp-docs{display:grid;grid-template-columns:14rem minmax(0,1fr) 13rem;gap:2rem;align-items:start;}
.vtp-docs-nav,.vtp-docs-toc{position:sticky;top:1rem;}
.vtp-docs-article{min-width:0;}
.vtp-docs-article h1{margin-bottom:0.75em;}
.vtp-docs-article h2{margin:1.75em 0 0.5em;padding-bottom:0.3em;border-bottom:1px solid var(--background-4);}
.vtp-docs-article h3{margin:1.5em 0 0.5em;}
.vtp-docs-article h4{margin:1.25em 0 0.5em;}
.vtp-docs-article p,.vtp-docs-article ul,.vtp-docs-article ol,.vtp-docs-article table{margin:0.75em 0;line-height:1.6;}
.vtp-docs-article ul,.vtp-docs-article ol{padding-inline-start:1.5em;list-style:revert;}
.vtp-docs-article li{margin:0.3em 0;line-height:1.6;}
.vtp-docs-article a{color:var(--primary-7,inherit);}
.vtp-docs-article code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:0.9em;background:var(--background-2);padding:0.1em 0.35em;border-radius:0.25rem;}
.vtp-docs-article .vtd-code-block code{background:none;padding:0;}
.vtp-docs-article .vtd-code-block{margin:1em 0;}
.vtp-docs-article table{border-collapse:collapse;display:block;overflow-x:auto;}
.vtp-docs-article th,.vtp-docs-article td{border:1px solid var(--background-4);padding:0.4em 0.7em;text-align:start;vertical-align:top;line-height:1.5;}
.vtp-docs-article th{background:var(--background-2);}
.vtp-docs-pager{display:flex;justify-content:space-between;gap:1rem;margin-top:3rem;}
.vtp-docs-nav a{display:block;padding:0.25em 0.5em;border-radius:0.25rem;text-decoration:none;color:inherit;line-height:1.5;}
.vtp-docs-nav a:hover{background-color:var(--background-2);}
.vtp-docs-nav .vtd-nav-link-active{background-color:var(--background-3);font-weight:bold;}
@media (max-width:64rem){.vtp-docs{grid-template-columns:12rem minmax(0,1fr);}.vtp-docs-toc{display:none;}}
@media (max-width:44rem){.vtp-docs{grid-template-columns:minmax(0,1fr);}.vtp-docs-nav{position:static;}}
`, "vtp-docs")

    return <div class="vtp-docs">
        <nav class="vtp-docs-nav" aria-label={`${project.name} documentation`}>
            <Stack direction="column" gap="sm">
                <Heading level={2} style={{fontSize: "1.1em"}}>{project.name}</Heading>
                <div>{entry.pages.map((docsPage, i) => <>
                    {docsPage.section && docsPage.section != entry.pages[i - 1]?.section &&
                        <Text type="muted" style={{display: "block", margin: "0.75em 0.5em 0.25em"}}>{docsPage.section}</Text>}
                    <NavLink to={docsPage.url}>{docsPage.title}</NavLink>
                </>)}</div>
                {otherDocs(data)}
            </Stack>
        </nav>
        <div class="vtp-docs-article">
            <Breadcrumbs items={[
                {label: "Docs", to: entry.pages[0].url},
                {label: project.name, to: entry.pages[0].url},
                {label: page.title},
            ]}/>
            {article}
            <div class="vtp-docs-pager">
                <div>{previous && <Link to={previous.url}>← {previous.title}</Link>}</div>
                <div>{next && <Link to={next.url}>{next.title} →</Link>}</div>
            </div>
        </div>
        <div class="vtp-docs-toc">
            <TableOfContents ariaLabel="On this page" header="On this page" items={headings(article)}/>
        </div>
    </div>
}
