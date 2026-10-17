import { Breadcrumbs, Button, Card, CodeBlock, Grid, Heading, Link, Paragraph, Statistic, Stack, Tag, Text } from "@velotype/velodesign"
import { DocsPage } from "./docs.tsx"
import docsIndex from "./docs-index.json" with { type: "json" }
import { Logo, mountPage } from "./shell.tsx"
import { groups, projectById, projects } from "./projects.ts"
import type { Project, Resource, Sample } from "./projects.ts"

const projectUrl = (project: Project) => `/projects/${project.id}/`

const docsUrl = (project: Project): string | undefined => (docsIndex as Record<string, string>)[project.id]

const goTo = (to: string) => () => { location.assign(to) }

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
        <Stack align="center" gap="lg">
            <Logo size="4rem"/>
            <Heading level={1}>The Velocity Project</Heading>
        </Stack>
        <Paragraph style={{fontSize: "1.2em"}}>A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them.</Paragraph>
        <Paragraph><Text type="muted">Each piece stands on its own and is published separately. They are designed to fit together: <Link to="/projects/veloserver/">veloserver</Link> serves pages and APIs, <Link to="/projects/velossr/">velossr</Link> or <Link to="/projects/velotype/">velotype</Link> renders them, and <Link to="/projects/velojson/">VSON</Link> carries data between the two. More pieces are on the way.</Text></Paragraph>
        <Stack>
            <Button type="primary" onClick={goTo("/projects/velotype/")}>Start with velotype</Button>
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
        <Heading level={2}>Tools, demos, and examples</Heading>
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

const page = document.body.dataset.page
const project = page ? projectById.get(page) : undefined

mountPage(document.body.dataset.doc ? DocsPage() : project ? ProjectPage(project) : HomePage(),
    document.body.dataset.doc ? "84rem" : "60rem")
