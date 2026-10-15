import { Card, Grid, Heading, Link, Paragraph, Stack, Tag, Text, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"
import { groups } from "./projects.ts"
import type { Project } from "./projects.ts"

const ProjectCard = (project: Project) => <Card id={project.id} header={
    <Stack align="center">
        <span>{project.name}</span>
        <Tag type={project.tagKind}>{project.tag}</Tag>
    </Stack>
}>
    <Stack direction="column">
        <Paragraph>{project.description}</Paragraph>
        <Stack>
            {project.links.map(link => <Link to={link.to}>{link.label}</Link>)}
        </Stack>
    </Stack>
</Card>

Theme.injectStyles()
document.title = "The Velocity Project"

replaceElementWithRoot(
    <main style={{fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif", maxWidth: "60rem", margin: "0 auto", padding: "3rem 1rem 4rem"}}>
        <Stack direction="column" gap="lg">
            <Stack direction="column">
                <Heading level={1}>The Velocity Project</Heading>
                <Paragraph><Text type="muted">A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them. More pieces are on the way.</Text></Paragraph>
                <Paragraph>Each piece stands on its own and is published separately. They are designed to fit together: <Link to="#veloserver">veloserver</Link> serves pages and APIs, <Link to="#velossr">velossr</Link> or <Link to="#velotype">Velotype</Link> renders them, and <Link to="#velojson">VSON</Link> carries data between the two.</Paragraph>
            </Stack>
            {groups.map(group => <Stack direction="column">
                <Heading level={2}>{group.title}</Heading>
                {group.note && <Text type="muted">{group.note}</Text>}
                <Grid minColumnWidth="22em">{group.projects.map(ProjectCard)}</Grid>
            </Stack>)}
            <Text type="muted">All projects live under the <Link to="https://github.com/Velotype">Velotype</Link> organization on GitHub and are published to <Link to="https://jsr.io/@velotype">JSR</Link>. Articles are on <Link to="https://argoday.medium.com/">Medium</Link>. This page is built with Velotype and velodesign.</Text>
        </Stack>
    </main>,
    document.getElementById("app"),
)
