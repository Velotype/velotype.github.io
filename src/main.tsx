import { Breadcrumbs, Button, Card, CodeBlock, Grid, Heading, Link, Navbar, Paragraph, Statistic, Stack, Tag, Text, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"
import { DocsPage } from "./docs.tsx"
import docsIndex from "./docs-index.json" with { type: "json" }
import { groups, projectById, projects } from "./projects.ts"
import type { Project, Resource, Sample } from "./projects.ts"

const projectUrl = (project: Project) => `/projects/${project.id}/`

const docsUrl = (project: Project): string | undefined => (docsIndex as Record<string, string>)[project.id]

const goTo = (to: string) => () => { location.assign(to) }

const Header = () => <Navbar
    style={{borderBottom: "1px solid var(--background-4)"}}
    brand={<Link to="/" style={{fontWeight: "bold", color: "inherit", textDecoration: "none"}}>The Velocity Project</Link>}>
    <Link to={docsIndex.velotype}>Docs</Link>
    <Link to="https://github.com/Velotype">GitHub</Link>
    <Link to="https://jsr.io/@velotype">JSR</Link>
    <Link to="https://argoday.medium.com/">Articles</Link>
</Navbar>

const Footer = () => <Text type="muted">
    All projects live under the <Link to="https://github.com/Velotype">Velotype</Link> organization on GitHub and are published to <Link to="https://jsr.io/@velotype">JSR</Link>. Articles are on <Link to="https://argoday.medium.com/">Medium</Link>. This site is built with Velotype and velodesign.
</Text>

const Code = (sample: Sample) => <Stack direction="column" gap="sm">
    <Heading level={3}>{sample.title}</Heading>
    {sample.intro && <Paragraph>{sample.intro}</Paragraph>}
    <CodeBlock code={sample.code} language={sample.language}/>
</Stack>

const ProjectCard = (project: Project) => <Card id={project.id} header={
    <Stack align="center">
        <Link to={projectUrl(project)} style={{color: "inherit", textDecoration: "none"}}>{project.name}</Link>
        <Tag type={project.tagKind}>{project.tag}</Tag>
    </Stack>
}>
    <Stack direction="column">
        <Paragraph>{project.tagline}</Paragraph>
        <Stack>
            <Link to={projectUrl(project)}>Learn more</Link>
            {docsUrl(project) && <Link to={docsUrl(project)!}>Docs</Link>}
            <Link to={project.links[0].to}>GitHub</Link>
        </Stack>
    </Stack>
</Card>

const HomePage = () => <Stack direction="column" gap="lg">
    <Stack direction="column">
        <Heading level={1}>The Velocity Project</Heading>
        <Paragraph style={{fontSize: "1.2em"}}>A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them.</Paragraph>
        <Paragraph><Text type="muted">Each piece stands on its own and is published separately. They are designed to fit together: <Link to="/projects/veloserver/">veloserver</Link> serves pages and APIs, <Link to="/projects/velossr/">velossr</Link> or <Link to="/projects/velotype/">Velotype</Link> renders them, and <Link to="/projects/velojson/">VSON</Link> carries data between the two. More pieces are on the way.</Text></Paragraph>
        <Stack>
            <Button type="primary" onClick={goTo("/projects/velotype/")}>Start with Velotype</Button>
            <Button type="secondary" onClick={goTo("https://github.com/Velotype")}>GitHub</Button>
        </Stack>
    </Stack>
    {groups.map(group => <Stack direction="column">
        <Heading level={2}>{group.title}</Heading>
        {group.note && <Text type="muted">{group.note}</Text>}
        <Grid minColumnWidth="22em">{group.ids.map(id => ProjectCard(projectById.get(id)!))}</Grid>
    </Stack>)}
</Stack>

const ResourceCard = (resource: Resource) => <Card header={
    <Stack align="center"><span>{resource.name}</span><Tag type="neutral">{resource.tag}</Tag></Stack>
}>
    <Stack direction="column">
        <Paragraph>{resource.text}</Paragraph>
        <Stack>{resource.links.map(link => <Link to={link.to}>{link.label}</Link>)}</Stack>
    </Stack>
</Card>

const ProjectPage = (project: Project) => <Stack direction="column" gap="lg">
    <Breadcrumbs items={[{label: "The Velocity Project", to: "/"}, {label: project.name}]}/>
    <Stack direction="column">
        <Stack align="center">
            <Heading level={1}>{project.name}</Heading>
            <Tag type={project.tagKind}>{project.tag}</Tag>
        </Stack>
        <Paragraph style={{fontSize: "1.2em"}}>{project.tagline}</Paragraph>
        <Stack>
            {docsUrl(project) && <Button type="primary" onClick={goTo(docsUrl(project)!)}>Documentation</Button>}
            <Button type={docsUrl(project) ? "secondary" : "primary"} onClick={goTo(project.links[0].to)}>{project.links[0].label}</Button>
            {project.links.slice(1).map(link =>
                <Button type="secondary" onClick={goTo(link.to)}>{link.label}</Button>)}
        </Stack>
    </Stack>

    {project.stats.length > 0 && <Stack direction="column" gap="sm">
        <Stack gap="lg">{project.stats.map(stat =>
            <Statistic title={stat.title} value={stat.value} suffix={stat.suffix}/>)}</Stack>
        {project.statsNote && <Text type="muted">{project.statsNote}</Text>}
    </Stack>}

    <Stack direction="column" gap="sm">{project.about.map(text => <Paragraph>{text}</Paragraph>)}</Stack>

    <Stack direction="column">
        <Heading level={2}>What it does</Heading>
        <Grid minColumnWidth="18em">{project.features.map(feature =>
            <Card header={feature.title}><Paragraph>{feature.text}</Paragraph></Card>)}
        </Grid>
    </Stack>

    {project.samples.length > 0 && <Stack direction="column">
        <Heading level={2}>See it in action</Heading>
        {project.samples.map(Code)}
    </Stack>}

    <Stack direction="column">
        <Heading level={2}>Get started</Heading>
        {Code(project.install)}
    </Stack>

    {project.resources && <Stack direction="column">
        <Heading level={2}>Demos and examples</Heading>
        <Grid minColumnWidth="22em">{project.resources.map(ResourceCard)}</Grid>
    </Stack>}

    <Stack direction="column">
        <Heading level={2}>Links</Heading>
        <Stack>{project.links.map(link => <Link to={link.to}>{link.label}</Link>)}</Stack>
    </Stack>

    <Stack direction="column">
        <Heading level={2}>Other projects</Heading>
        <Stack>{projects.filter(other => other !== project).map(other =>
            <Link to={projectUrl(other)}>{other.name}</Link>)}</Stack>
    </Stack>
</Stack>

Theme.injectStyles()

const page = document.body.dataset.page
const project = page ? projectById.get(page) : undefined

replaceElementWithRoot(<div style={{fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"}}>
    {Header()}
    <main style={{maxWidth: document.body.dataset.doc ? "84rem" : "60rem", margin: "0 auto", padding: "2rem 1rem 4rem"}}>
        <Stack direction="column" gap="lg">
            {document.body.dataset.doc ? DocsPage() : project ? ProjectPage(project) : HomePage()}
            {Footer()}
        </Stack>
    </main>
</div>, document.getElementById("app"))
