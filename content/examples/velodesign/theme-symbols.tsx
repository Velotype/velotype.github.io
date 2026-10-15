import { Alert, AlertThemeOptions, CommonThemeOptions, Modal, ModalThemeOptions, resetThemeOptions } from "@velotype/velodesign"

// A theme symbol is a component with no attrs that the library draws for a small glyph, such as a
// close control. It is a field on an options object, not a CSS property, so assign it ONCE at
// startup, before the first component that uses it is built. There is no re-render when it changes.
CommonThemeOptions.closeSymbol = () => <b>x</b>   // Alert, Toast, Tag, Modal, Drawer
CommonThemeOptions.nextSymbol = () => <span>next</span>
CommonThemeOptions.prevSymbol = () => <span>back</span>

// A component's own options override the shared one for that component alone
ModalThemeOptions.closeSymbol = () => <b>close</b>
console.log(typeof AlertThemeOptions.closeSymbol)

// The package's defaults: ✕ ✓ ∅ … ‹ ›. resetThemeOptions() puts them back, all or by field.
resetThemeOptions(ModalThemeOptions)
resetThemeOptions(CommonThemeOptions, "nextSymbol", "prevSymbol")

document.body.append(<Alert type="info" onDismiss={() => {}} dismissLabel="Dismiss">An alert with a custom close</Alert>)
void Modal
