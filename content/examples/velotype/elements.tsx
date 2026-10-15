// TSX creates real DOM elements, so every one of these is an HTMLElement.
const heading: HTMLHeadingElement = <h1 class="title">Attributes are HTML attributes</h1>

// Style objects are type checked: property names, keywords, units, and colors.
// lowerCamelCase and hyphen-case both work, and so do custom properties.
const styled: HTMLDivElement = <div style={{
    display: "inline-block",
    marginTop: "4px",
    "margin-bottom": "4px",
    "--brand-color": "#336699",
    color: "var(--brand-color)",
    opacity: 0.8,
    width: "calc(100% - 2rem)",
    zIndex: 2,
}}>An object of styles</div>

// Attributes that start with "on" add event listeners
const clicked: HTMLButtonElement = <button type="button" onClick={() => console.log("clicked")}>Click me</button>

// Pass {handler, options} to set addEventListener() options
const once: HTMLButtonElement = <button type="button" onClick={{handler: () => console.log("clicked once"), options: {once: true}}}>Click me once</button>

// on- listens for a custom event by its exact name
const custom: HTMLDivElement = <div on-my-event={() => console.log("my-event received")}></div>
custom.dispatchEvent(new CustomEvent("my-event"))

// false, null, and undefined render nothing
const showDetails = false
const conditional: HTMLDivElement = <div>{showDetails && <div>Details</div>}</div>

// Fragments group children without a wrapper element, and return them as an Array
const items = <><li>one</li><li>two</li></>
const list: HTMLUListElement = <ul>{items}</ul>

// Arrays of elements are children too
const names = ["Ada", "Grace", "Katherine"]
const people: HTMLUListElement = <ul>{names.map(name => <li>{name}</li>)}</ul>

document.body.append(heading, styled, clicked, once, custom, conditional, list, people)
