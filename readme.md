# velotype.github.io

The Velocity Project site, built with [Velotype](https://github.com/Velotype/velotype) and [velodesign](https://github.com/Velotype/velodesign).

- `src/projects.ts` - the projects on the home page and the project pages
- `src/main.tsx` - the home and project pages
- `src/docs.tsx` - the shell around a docs page: navigation, code blocks, and the table of contents
- `content/docs/<project>/*.md` - the developer docs, one directory per project, with pages in file name order. A subdirectory is a section that follows the project's pages in the sidebar (`sections` in `scripts/build-docs.ts`), like the DevTools docs inside Velotype's
- `content/examples/<project>/` - the example code that the docs show, with its own `deno.json` that pins the published package versions
- `assets/` - the Velotype logo, used as the favicon and shown on the pages
- `content/llms-intro.md` - the hand-written part of `llms.txt`, which tells visiting agents how the projects work and what to avoid. The build adds the versions the docs were checked against, the projects, and a link to each docs page as Markdown
- `build/main.js`, `index.html`, `projects/`, `docs/` (each page also as `.md`), `llms.txt` and `llms-full.txt` (the same introduction followed by every docs page) - generated, and committed because GitHub Pages serves the repo as-is

## Building

```sh
deno task build   # docs pages, bundle, and project pages
deno task serve   # http://localhost:8000
```

## Writing docs

A page is a Markdown file in `content/docs/<project>/`. The file name sets the order (`01-getting-started.md`), the first `# heading` is the title, and the first paragraph is the description. The first page of a project is its landing page at `/docs/<project>/`.

Two lines are special in a docs page:

- `@example file.tsx` on a line by itself is replaced by the code of `content/examples/<project>/file.tsx`
- `@output file.tsx` on a line by itself is replaced by what that example printed, from `content/examples/<project>/file.out`

The build fails when an example or output is missing, or a link to another docs page or an anchor in one does not exist.

## Checking the examples

The examples are real files, so they can be checked:

```sh
deno task check                       # type-check every example against the published packages
deno task run-examples <project>      # run the server-side examples, and compare with their .out files
deno task run-examples <project> --update   # write the .out files after a change
deno task smoke <project>             # run the browser examples in headless Chrome, and report runtime errors
```

`run-examples` is for velossr, veloserver, and velojson, which print their results. `smoke` is for velotype, velodesign, velomicro, velomini, and velodevtools, which build a page, and needs Chrome (set `CHROME` if it is not at the macOS default). Files whose names start with `_` are type-checked and shown in the docs, but not run.

When a package is published, change the version in `content/examples/<project>/deno.json`, run the checks, and update the docs where they fail.
