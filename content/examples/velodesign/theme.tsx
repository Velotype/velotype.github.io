import { ColorScheme, setThemeOnSelector, Theme } from "@velotype/velodesign"

// Pass colors to change the palette. Every field is optional, and each has a light and a dark value.
// Each of primary, secondary, warning, and accent becomes a ramp of CSS variables: --primary is the
// color you gave, and --primary-1 to --primary-9 mix it toward white and black in steps, which
// components use for fills, borders, and hovers.
Theme.injectStyles({
    primaryLightColor: "#0b6bcb",
    primaryDarkColor: "#5aa9ff",
    accentLightColor: "#c4314b",
    accentDarkColor: "#ff6b81",
})

// The color scheme in effect is "light" or "dark", written to data-theme on <html>
console.log(ColorScheme.getColorScheme())

// setColorScheme() takes "light", "dark", or "default" (follow the browser's preference), and
// remembers the choice in localStorage
ColorScheme.setColorScheme("default")

// getColorScheme() is what is in effect, so "default" has already become "light" or "dark".
// getColorSchemePreference() is what the reader chose, "default" included, which is what a theme
// picker needs to show as selected.
console.log(ColorScheme.getColorScheme(), ColorScheme.getColorSchemePreference())

ColorScheme.setColorScheme("dark")
console.log(ColorScheme.getColorScheme(), ColorScheme.getColorSchemePreference())

// Go back to the stored choice, or the browser's preference when there is none
ColorScheme.resetColorScheme()

// Theme any part of the page, not only <html>. The selected elements need data-theme="light" or "dark".
const panel = document.createElement("section")
panel.className = "brand-panel"
panel.setAttribute("data-theme", "dark")
document.body.append(panel)
setThemeOnSelector(".brand-panel", {backgroundDarkColor: "#10202f"})

// Calling it again for the same selector does nothing unless resetSheet is true, which replaces the
// stylesheet. A live theme editor does this to preview changes.
setThemeOnSelector(".brand-panel", {backgroundDarkColor: "#201030"}, true)
