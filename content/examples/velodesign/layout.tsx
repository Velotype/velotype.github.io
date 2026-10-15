import { Grid, Heading, Paragraph, Stack, Text } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

replaceElementWithRoot(
    <Stack direction="column" gap="lg">
        {/* Typography. Heading requires a level, because a default would quietly produce a second <h1>. */}
        <Heading level={1}>A page</Heading>
        <Heading level={2} type="muted">A muted subheading</Heading>
        <Paragraph>Body text, with <Text strong>strong</Text>, <Text italic>italic</Text>, <Text underline>underline</Text>, <Text strike>strike</Text>, and <Text code>code</Text>.</Paragraph>
        <Paragraph>
            <Text type="muted">muted</Text> <Text type="primary">primary</Text> <Text type="secondary">secondary</Text> <Text type="warning">warning</Text> <Text type="danger">danger</Text>
        </Paragraph>
        <Text numeric>1,234.50</Text>

        {/* Stack: a row or a column, with a gap from a scale ("none" "xs" "sm" "md" "lg" "xl") or any CSS length */}
        <Stack>one<span>two</span><span>three</span></Stack>
        <Stack direction="column" gap="xs" align="start">
            <span>a column</span>
            <span>that does not stretch its children</span>
        </Stack>
        <Stack justify="between" align="center" gap="2rem" wrap={false}>
            <span>left</span><span>right</span>
        </Stack>
        <Stack inline gap="sm"><span>an inline</span><span>stack</span></Stack>

        {/* Grid: as many columns as fit minColumnWidth, with no media query. A fixed count is columns. */}
        <Grid minColumnWidth="10em" gap="md">
            <div>one</div><div>two</div><div>three</div><div>four</div>
        </Grid>
        <Grid columns={3} gap="sm" align="start">
            <div>one</div><div>two</div><div>three</div>
        </Grid>
    </Stack>,
    document.getElementById("app")!,
)
