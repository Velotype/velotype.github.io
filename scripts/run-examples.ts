// Runs each example in content/examples/<project>/ with Deno and compares what it prints with the
// example's .out file, which the docs show with `@output <example>`.
//
//   deno task run-examples velossr            compare, and fail if any output differs
//   deno task run-examples velossr --update   write the .out files
//
// An example with no .out file is only checked to run and exit cleanly.
const [project, flag] = Deno.args
if (!project) {
    console.error("usage: run-examples.ts <project> [--update]")
    Deno.exit(2)
}
// veloserver logs when it starts, stops, mounts files, and catches an error. That logging has
// machine specific paths and versions in it and is not what an example shows, so it is dropped.
let inStackTrace = false
function notPackageLogging(line: string): boolean {
    if (/^(Server started|Close triggered|Server closing|Server closed|Mounting |Serving file|Loaded )/.test(line)) {
        return false
    }
    if (line.startsWith("ERROR ")) {
        inStackTrace = true
        return false
    }
    if (inStackTrace && /^\s+at /.test(line)) {
        return false
    }
    inStackTrace = false
    return true
}

const source = new URL(`../content/examples/${project}/`, import.meta.url)
const files = [...Deno.readDirSync(source)].filter(entry => /\.tsx?$/.test(entry.name) && !entry.name.startsWith("_")).map(entry => entry.name).sort()
const update = flag == "--update"
let failed = 0
for (const file of files) {
    const run = await new Deno.Command("deno", {
        args: ["run", "-A", "--config", new URL("deno.json", source).pathname, new URL(file, source).pathname],
        stdout: "piped", stderr: "piped",
    }).output()
    const stdout = new TextDecoder().decode(run.stdout).split("\n").filter(notPackageLogging).join("\n").replace(/\n+$/, "")
    if (!run.success) {
        failed++
        console.log(`FAIL ${file}: exited with ${run.code}\n${new TextDecoder().decode(run.stderr)}`)
        continue
    }
    const outFile = new URL(file.replace(/\.tsx?$/, ".out"), source)
    if (update) {
        if (stdout) {
            await Deno.writeTextFile(outFile, stdout + "\n")
        }
        console.log(`ran  ${file}`)
        continue
    }
    let expected: string | undefined
    try {
        expected = (await Deno.readTextFile(outFile)).replace(/\n+$/, "")
    } catch { /* no .out file */ }
    if (expected !== undefined && expected !== stdout) {
        failed++
        console.log(`FAIL ${file}: output changed\n--- expected\n${expected}\n--- got\n${stdout}`)
    } else {
        console.log(`ok   ${file}`)
    }
}
Deno.exit(failed > 0 ? 1 : 0)
