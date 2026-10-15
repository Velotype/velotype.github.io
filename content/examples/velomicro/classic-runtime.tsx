/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag f */
// With the classic JSX transform, `h` and `f` are what tags and fragments compile to: createElement
// and createFragment, with short names. Set them per file with the pragmas above, or with
// "jsx": "react", "jsxFactory": "h", and "jsxFragmentFactory": "f" in deno.json.
import { f, h } from "@velotype/velomicro/tsx-micro"

const list = <ul><li>one</li><li>two</li></ul>
const fragment = <><span>a</span><span>b</span></>

document.body.append(list, ...fragment)
