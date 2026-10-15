# velotype.github.io

The Velocity Project page, built with [Velotype](https://github.com/Velotype/velotype) and [velodesign](https://github.com/Velotype/velodesign).

- `src/projects.ts` - the projects, descriptions, and links
- `src/main.tsx` - the page
- `build/main.js` - the bundled page that `index.html` loads. It is committed because GitHub Pages serves the repo as-is

```sh
deno task build   # rebuild build/main.js after editing src/
deno task serve   # http://localhost:8000
```
