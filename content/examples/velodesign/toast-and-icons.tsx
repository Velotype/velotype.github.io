import { Button, Glyphs, I, Icon, registerIcon, showToast } from "@velotype/velodesign"

// showToast() is a function, not a component: call it from a handler. It keeps one container at the
// bottom right of the page, and removes each toast after its duration (4000ms by default, 0 keeps it).
const toastButton = <Button type="primary" onClick={() => {
    showToast("Saved your changes", {type: "success"})
    showToast("Stays until dismissed", {type: "warning", duration: 0, dismissLabel: "Dismiss"})
}}>Show toasts</Button>

// An Icon is a width, a height, and an SVG path. Register it under a key, and render it with <I/>.
// It is drawn 1em tall in the current text color.
registerIcon("check", new Icon(24, 24, "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"))

// The package's own line glyphs can be drawn directly. Without a label an icon is decoration;
// with one, screen readers announce it.
// An Icon can draw in layers, each with its own line width: a lens, and a thinner glint inside it
const search = new Icon(24, 24, "M16.7 10.5a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 1 1 12.4 0zM15.2 15.2l4.3 4.3", 2, false, [{d: "M7.6 9.4a3.2 3.2 0 0 1 1.9-1.9", strokeWidth: 1.2}])

const next = <Button type="secondary" onClick={() => {}}><I icon={Glyphs.chevronRight} label="Next page"/></Button>

document.body.append(toastButton, <p>Done <I i="check"/></p>, <I i="check" style={{height: "2em"}}/>, next, <I icon={search} style={{height: "2em"}}/>)
