import { LocalizedString, S, T } from "@velotype/velodesign"

// The library has no built-in text: it does not assume a language, so ARIA labels and
// placeholders have no default. S is a store of strings by key, and T renders one.
S.a("greeting", "Hello")

// A string with a plural form, chosen by a number
S.aS(new LocalizedString("items", "1 item", "many items"))

console.log(S.g("greeting"))     // Hello
console.log(S.g("items", 1))     // 1 item
console.log(S.g("items", 5))     // many items
console.log(S.g("missing"))      // -- missing --  (and an error is logged)

// <T k="..."/> renders a string in TSX, and n is the number for a plural
const message = <p><T k="greeting"/>, you have <T k="items" n={3}/></p>
document.body.append(message)
