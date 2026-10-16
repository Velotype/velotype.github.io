// The velojson playground: JSON to VSON bytes and back, live in the browser, with the main module
// of @velotype/velojson (the one that handles every format)
import { Breadcrumbs, Button, Card, CodeBlock, Grid, Heading, Paragraph, Select, Stack, Statistic, Text, Textarea } from "@velotype/velodesign"
import { Component, RenderObject } from "@velotype/velotype"
import type { EmptyAttrs } from "@velotype/velotype"
import { EncodingFormat, VSON } from "@velotype/velojson"
import type { JSONValue } from "@velotype/velojson"
import { mountPage } from "./shell.tsx"

type Encoded =
    | {kind: "empty"}
    | {kind: "error", message: string}
    | {kind: "bytes", hex: string, base64: string, jsonBytes: number, vsonBytes: number, format: string}

type Decoded =
    | {kind: "empty"}
    | {kind: "error", message: string}
    | {kind: "json", text: string, format: string, bytes: number, how: string}

const sample = '{"name": "Some name", "age": 20, "address": null}'

/** The format named by the first byte, which is (format * 8) + wire type */
function formatOf(bytes: Uint8Array): string {
    const first = bytes[0]
    if (first === undefined || first > 23) {
        return "unknown"
    }
    return ["VSON Base", "VSON Key Table", "VBIN"][Math.floor(first / 8)]
}

const toHex = (bytes: Uint8Array) => Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join(" ")
const toBase64 = (bytes: Uint8Array) => btoa(Array.from(bytes, byte => String.fromCharCode(byte)).join(""))
const errorText = (error: unknown) => error instanceof Error ? error.message : String(error)

function encode(text: string, format: string): Encoded {
    if (text.trim() == "") {
        return {kind: "empty"}
    }
    let value: JSONValue
    try {
        value = JSON.parse(text)
    } catch (error) {
        return {kind: "error", message: `Not valid JSON: ${errorText(error)}`}
    }
    try {
        const bytes = format == "auto" ? VSON.encode(value)
            : VSON.encode(value, format == "base" ? EncodingFormat.Base : EncodingFormat.KeyTable)
        return {
            kind: "bytes",
            hex: toHex(bytes),
            base64: toBase64(bytes),
            jsonBytes: new TextEncoder().encode(JSON.stringify(value)).length,
            vsonBytes: bytes.length,
            format: formatOf(bytes),
        }
    } catch (error) {
        return {kind: "error", message: errorText(error)}
    }
}

/** Bytes written as hex, tried first, or as base64 */
function parseBytes(text: string): {bytes: Uint8Array, how: string} | string {
    const hex = text.replace(/0x/gi, "").replace(/[\s:,]/g, "")
    if (/^[0-9a-f]+$/i.test(hex) && hex.length % 2 == 0) {
        return {bytes: Uint8Array.from(hex.match(/../g) ?? [], pair => parseInt(pair, 16)), how: "hex"}
    }
    try {
        return {bytes: Uint8Array.from(atob(text.replace(/\s/g, "")), char => char.charCodeAt(0)), how: "base64"}
    } catch {
        return "These bytes are not hex (an even number of digits) or base64."
    }
}

function decode(text: string): Decoded {
    if (text.trim() == "") {
        return {kind: "empty"}
    }
    const parsed = parseBytes(text)
    if (typeof parsed == "string") {
        return {kind: "error", message: parsed}
    }
    try {
        const value = VSON.decode(parsed.bytes)
        return {
            kind: "json",
            text: value === undefined ? "(no bytes, which decode to undefined)" : JSON.stringify(value, null, 2),
            format: formatOf(parsed.bytes),
            bytes: parsed.bytes.length,
            how: parsed.how,
        }
    } catch (error) {
        return {kind: "error", message: `Could not decode these bytes: ${errorText(error)}`}
    }
}

/** Bytes that wrap, since a long run of them should be read in full and not scrolled */
const Bytes = (attrs: {text: string}) => <div style={{
    fontFamily: "monospace", whiteSpace: "pre-wrap", overflowWrap: "anywhere", padding: "0.75em 1em",
    border: "1px solid var(--background-4)", borderRadius: "0.5rem", backgroundColor: "var(--background-2)",
}}>{attrs.text}</div>

const problem = (message: string) => <div role="alert" style={{color: "var(--accent-7)"}}>{message}</div>

const renderEncoded = (result: Encoded) => {
    if (result.kind == "empty") {
        return <Text type="muted">Type some JSON to see its bytes.</Text>
    }
    if (result.kind == "error") {
        return problem(result.message)
    }
    const smaller = Math.round((1 - result.vsonBytes / result.jsonBytes) * 100)
    return <Stack direction="column">
        <Stack gap="lg">
            <Statistic title="JSON text" value={String(result.jsonBytes)} suffix=" bytes"/>
            <Statistic title={result.format} value={String(result.vsonBytes)} suffix=" bytes"/>
            <Statistic title="Difference" value={smaller >= 0 ? `${smaller}% smaller` : `${-smaller}% larger`}/>
        </Stack>
        <Heading level={4}>Hex</Heading>
        <Bytes text={result.hex}/>
        <Heading level={4}>Base64</Heading>
        <Bytes text={result.base64}/>
    </Stack>
}

const renderDecoded = (result: Decoded) => {
    if (result.kind == "empty") {
        return <Text type="muted">Paste bytes as hex or base64 to see their JSON.</Text>
    }
    if (result.kind == "error") {
        return problem(result.message)
    }
    return <Stack direction="column">
        <Text type="muted">{`${result.format}, ${result.bytes} bytes read as ${result.how}`}</Text>
        {result.format == "VBIN" && <Text type="muted">VBIN has no key names on the wire, so the keys show as their numeric key IDs.</Text>}
        <CodeBlock code={result.text} language="plain"/>
    </Stack>
}

const monospace = {width: "100%", fontFamily: "monospace", marginInlineStart: "0"} as const

class Playground extends Component<EmptyAttrs> {
    format = "auto"
    encoded = new RenderObject<Encoded>(encode(sample, "auto"), renderEncoded)
    decoded = new RenderObject<Decoded>({kind: "empty"}, renderDecoded)
    jsonInput = <Textarea rows={8} value={sample} resize="vertical" style={monospace}
        onInput={() => this.runEncode()}/> as HTMLTextAreaElement
    bytesInput = <Textarea rows={8} placeholder="e.g. 68 03 ..." resize="vertical" style={monospace}
        onInput={() => this.runDecode()}/> as HTMLTextAreaElement

    runEncode() {
        this.encoded.set(encode(this.jsonInput.value, this.format))
    }
    runDecode() {
        this.decoded.set(decode(this.bytesInput.value))
    }
    useEncodedBytes() {
        const encoded = this.encoded.get()
        if (encoded.kind == "bytes") {
            this.bytesInput.value = encoded.hex
            this.runDecode()
        }
    }

    override mount() {
        // Start the decoder on the bytes of the sample
        this.useEncodedBytes()
    }

    override render() {
        return <Stack direction="column" gap="lg">
            <Breadcrumbs items={[
                {label: "The Velocity Project", to: "/"},
                {label: "velojson (VSON)", to: "/projects/velojson/"},
                {label: "Playground"},
            ]}/>
            <Stack direction="column">
                <Heading level={1}>velojson playground</Heading>
                <Paragraph>Encode JSON to VSON bytes and decode bytes back to JSON, in your browser. Nothing is sent anywhere. It runs <code>@velotype/velojson</code>, the version that supports every format. VBIN needs key IDs agreed ahead of time, so it only decodes here, with numeric keys.</Paragraph>
            </Stack>
            <Grid minColumnWidth="26em">
                <Card header="JSON to bytes">
                    <Stack direction="column">
                        {this.jsonInput}
                        <Stack align="center">
                            <label for="format">Format</label>
                            <Select id="format" value="auto" options={[
                                {value: "auto", label: "Automatic (Key Table for an object or Array)"},
                                {value: "base", label: "VSON Base"},
                                {value: "keytable", label: "VSON Key Table"},
                            ]} onChange={event => {
                                this.format = event.currentTarget.value
                                this.runEncode()
                            }}/>
                        </Stack>
                        {this.encoded}
                        <div><Button type="secondary" onClick={() => this.useEncodedBytes()}>Decode these bytes</Button></div>
                    </Stack>
                </Card>
                <Card header="Bytes to JSON">
                    <Stack direction="column">
                        {this.bytesInput}
                        {this.decoded}
                    </Stack>
                </Card>
            </Grid>
        </Stack>
    }
}

mountPage(<Playground/> as HTMLElement)
