// Read-only access to Velotype's internal state, for debugging and for the Velotype DevTools
// extension. Applications do not need it: Velotype registers with the devtools hook from any entry point.
import { __vtAppMetadata, getDevtoolsHook } from "@velotype/velotype/devtools"

console.log(__vtAppMetadata)
console.log(getDevtoolsHook())
