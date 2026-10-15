import { Router } from "@velotype/veloserver"
import { DevServer } from "@velotype/veloserver/dev"

// In mode "off" there are no development routes, and pageScripts() writes the production option's
// import map and scripts. The same page code serves development and production.
const dev = new DevServer({
    mode: "off",
    entry: "./browser/main.tsx",
    production: {
        importMap: {"@velotype/velotype": "/build/velotype.js"},
        scripts: ["/build/velotype.js", "/build/main.js"],
    },
})
await dev.mount(new Router<never>({}))

console.log(dev.mode)
console.log(dev.pageScripts())
dev.close()
