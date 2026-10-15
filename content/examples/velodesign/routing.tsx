import { History, Link, NavLink, Navbar } from "@velotype/velodesign"

// A Link is a plain anchor, so open-in-new-tab, copy-link, and drag-to-bookmark all work.
// spa makes a click change the location with history.pushState() instead of loading a page.
const links = <nav>
    <Link to="/docs/">A normal link</Link>
    <Link to="/docs/" spa>A client-side link</Link>
</nav>

// A NavLink is a Link that knows whether it is the current page: it gets the class
// "vtd-nav-link-active", or the one you give as activeClass. exact (default true) matches the whole
// path, and false matches any path that starts with it.
const nav = <Navbar brand={<NavLink to="/" spa>Home</NavLink>}>
    <NavLink to="/docs/" spa exact={false} activeClass="current">Docs</NavLink>
    <NavLink to="/about/" spa>About</NavLink>
</Navbar>

// Change the location from code. changeLocation() does a pushState and dispatches a "locationchange"
// event, which NavLink listens for. loadNewPageLocation() loads the page for real.
const button = <button type="button" onClick={() => History.changeLocation("/docs/")}>Go to docs</button>

document.body.append(nav, links, button)
