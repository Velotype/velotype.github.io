import { Button, I, Icon, registerIcon, showToast } from "@velotype/velodesign"

// showToast() is a function, not a component: call it from a handler. It keeps one container at the
// bottom right of the page, and removes each toast after its duration (4000ms by default, 0 keeps it).
const toastButton = <Button type="primary" onClick={() => {
    showToast("Saved your changes", {type: "success"})
    showToast("Stays until dismissed", {type: "warning", duration: 0, dismissLabel: "Dismiss"})
}}>Show toasts</Button>

// An Icon is a width, a height, and an SVG path. Register it under a key, and render it with <I/>.
// It is drawn 1em tall in the current text color.
registerIcon("check", new Icon(24, 24, "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"))

document.body.append(toastButton, <p>Done <I i="check"/></p>, <I i="check" style={{height: "2em"}}/>)
