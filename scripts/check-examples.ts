// Type-checks every example in content/examples/<project>/ against the published packages that the
// project's deno.json pins. Usage: deno task check [project]
const examples = new URL("../content/examples/", import.meta.url)
const projects = Deno.args[0] ? [Deno.args[0]] : [...Deno.readDirSync(examples)].filter(entry => entry.isDirectory).map(entry => entry.name).sort()
let failed = 0
for (const project of projects) {
    const dir = new URL(`${project}/`, examples)
    const files = [...Deno.readDirSync(dir)].filter(entry => /\.tsx?$/.test(entry.name)).map(entry => entry.name).sort()
    const result = await new Deno.Command("deno", {args: ["check", ...files], cwd: dir.pathname, stdout: "null", stderr: "piped"}).output()
    if (result.success) {
        console.log(`ok   ${project} (${files.length} examples)`)
    } else {
        failed++
        console.log(`FAIL ${project}\n${new TextDecoder().decode(result.stderr)}`)
    }
}
Deno.exit(failed > 0 ? 1 : 0)
