// What every page's <head> carries so that nothing shows before the bundle has run: the page's own
// background in the reader's color scheme, and the server-rendered content hidden until Velotype
// replaces it (replaceElementWithRoot removes #app, and its hiding rule with it). Without JavaScript
// the content shows, and if the bundle never runs it shows after three seconds.
export const headPrelude = `<style>html{background:#fff;color:#050505}html[data-theme=dark]{background:#151515;color:#fafafa}#app{visibility:hidden;animation:vtp-show 0s 3s forwards}@keyframes vtp-show{to{visibility:visible}}</style>
<noscript><style>#app{visibility:visible;animation:none}</style></noscript>
<script>(function(){var t=null;try{t=localStorage.getItem("vtd-preferred-theme")}catch(e){}if(t!="light"&&t!="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)})()</script>`
