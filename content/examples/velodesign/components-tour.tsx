import { Alert, Badge, Button, Card, Checkbox, Select, showToast, Stack, Tabs, Tag, TextBox, Tooltip } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

replaceElementWithRoot(
    <Stack direction="column">
        {/* Form: native inputs, buttons, and selects */}
        <Stack>
            <TextBox type="text" name="name" placeholder="Your name" required/>
            <Select name="role" placeholder="Choose a role" options={[
                {value: "admin", label: "Administrator"},
                {value: "user", label: "User"},
            ]}/>
            <Checkbox name="terms" checked>I agree</Checkbox>
        </Stack>
        <Stack>
            <Button type="primary" onClick={() => showToast("Saved", {type: "success", duration: 3000})}>Save</Button>
            <Button type="secondary">Cancel</Button>
            <Button type="danger" disabled>Delete</Button>
        </Stack>

        {/* Feedback */}
        <Alert type="warning" title="Heads up">This action cannot be undone.</Alert>

        {/* Data display */}
        <Card header="A card" footer={<Button type="text">Details</Button>}>
            <Badge type="primary">new</Badge> <Tag type="secondary">tagged</Tag>
        </Card>
        <Tabs tabs={[
            {key: "one", label: "One", content: <p>The first tab</p>},
            {key: "two", label: "Two", content: <p>The second tab</p>},
        ]}/>

        {/* Overlays */}
        <Tooltip content="More about this" placement="top"><Button type="text">Hover me</Button></Tooltip>
    </Stack>,
    document.getElementById("app")!,
)
