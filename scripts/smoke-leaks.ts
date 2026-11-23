// Loaded beside each browser example by smoke-examples.ts: `__leaks()` lists what velotype still
// holds that the page no longer shows (velotype's findLeaks(), which reads every velotype instance
// on the page through its devtools hook, so this bundle's own copy sees the example's).
import { findLeaks } from "@velotype/velotype/devtools"

type LeakSummary = {mountedOffPage: string[], neverPlaced: string[], heldOffPage: number}

;(globalThis as unknown as {__leaks: () => LeakSummary}).__leaks = () => {
    const leaks = findLeaks()
    const names = (list: object[]) => list.map(c => c.constructor.name).sort()
    return {mountedOffPage: names(leaks.mountedOffPage), neverPlaced: names(leaks.neverPlaced), heldOffPage: leaks.heldOffPage.length}
}
