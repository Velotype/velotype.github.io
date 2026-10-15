// Runs each example in content/examples/<project>/ in headless Chrome and reports runtime errors.
// Type checking (`deno task check`) proves the examples compile. This proves they run.
//
//   deno task smoke velotype [name-prefix]
//
// Set CHROME to the browser binary if it is not at the macOS default. Examples that fetch from
// URLs that do not exist are expected to fail those requests, so network errors are ignored.
const project = Deno.args[0]
if (!project) {
    console.error("usage: smoke-examples.ts <project>")
    Deno.exit(2)
}
const chrome = Deno.env.get("CHROME") ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
const source = new URL(`../content/examples/${project}/`, import.meta.url)
const out = await Deno.makeTempDir({prefix: "smoke-"})

const files = [...Deno.readDirSync(source)].filter(entry => entry.name.endsWith(".tsx") && entry.name.startsWith(Deno.args[1] ?? "")).map(entry => entry.name).sort()
let failed = 0
for (const file of files) {
    const name = file.replace(/\.tsx$/, "")
    const bundle = new Deno.Command("deno", {
        args: ["bundle", "--platform", "browser", "--config", new URL("deno.json", source).pathname, new URL(file, source).pathname, "--output", `${out}/${name}.js`],
        stdout: "null", stderr: "piped",
    })
    const built = await bundle.output()
    if (!built.success) {
        failed++
        console.log(`FAIL ${file}: bundle failed\n${new TextDecoder().decode(built.stderr)}`)
        continue
    }
    await Deno.writeTextFile(`${out}/${name}.html`, `<!doctype html><html><body><div id="app"></div>
<script>
window.__errors = []
addEventListener("error", e => window.__errors.push(String(e.message)))
addEventListener("unhandledrejection", e => window.__errors.push(String(e.reason)))
addEventListener("load", () => setTimeout(() => document.body.setAttribute("data-errors", JSON.stringify(window.__errors)), 500))
</script>
<script type="module" src="${name}.js"></script></body></html>`)
    const run = await new Deno.Command(chrome, {
        args: ["--headless=new", "--disable-gpu", "--allow-file-access-from-files", "--virtual-time-budget=3000", "--dump-dom", `file://${out}/${name}.html`],
        stdout: "piped", stderr: "null",
    }).output()
    const dom = new TextDecoder().decode(run.stdout)
    const errors = JSON.parse((dom.match(/data-errors="([^"]*)"/)?.[1] ?? "[]").replaceAll("&quot;", '"').replaceAll("&amp;", "&")) as string[]
    const real = errors.filter(error => !/Failed to fetch|NetworkError|Unexpected token|is not valid JSON|404|Load failed/.test(error))
    if (real.length > 0 || !dom.includes("data-errors")) {
        failed++
        console.log(`FAIL ${file}: ${real.length > 0 ? real.join("; ") : "the page did not finish loading"}`)
    } else {
        console.log(`ok   ${file}`)
    }
}
await Deno.remove(out, {recursive: true})
Deno.exit(failed > 0 ? 1 : 0)
