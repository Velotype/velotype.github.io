import { Link, Navbar, Stack, Text, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"
import docsIndex from "./docs-index.json" with { type: "json" }

/** The Velotype mark. It is a dark square, so it gets rounded corners to sit on either theme */
export const Logo = (attrs: {size: `${number}em` | `${number}rem`}) => <img src="/assets/logo.svg" alt="" width="64" height="64"
    style={{width: attrs.size, height: attrs.size, borderRadius: "0.2em", flexShrink: 0}}/>

export const Header = () => <Navbar
    style={{borderBottom: "1px solid var(--background-4)"}}
    brand={<Link to="/" style={{fontWeight: "bold", color: "inherit", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5em"}}>
        <Logo size="1.75em"/>
        The Velocity Project
    </Link>}>
    <Link to={docsIndex.velotype}>Docs</Link>
    <Link to="https://github.com/Velotype">GitHub</Link>
    <Link to="https://jsr.io/@velotype">JSR</Link>
    <Link to="https://argoday.medium.com/">Articles</Link>
</Navbar>

export const Footer = () => <Text type="muted">
    All projects live under the <Link to="https://github.com/Velotype">Velotype</Link> organization on GitHub and are published to <Link to="https://jsr.io/@velotype">JSR</Link>. Articles are on <Link to="https://argoday.medium.com/">Medium</Link>. This site is built with Velotype and velodesign.
</Text>

/** Mounts a page inside the site's header, footer, and fonts, replacing the #app element */
export function mountPage(content: HTMLElement, maxWidth: `${number}rem` = "60rem"): void {
    Theme.injectStyles()
    replaceElementWithRoot(<div style={{fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"}}>
        {Header()}
        <main style={{maxWidth, margin: "0 auto", padding: "2rem 1rem 4rem"}}>
            <Stack direction="column" gap="lg">
                {content}
                {Footer()}
            </Stack>
        </main>
    </div>, document.getElementById("app"))
}
