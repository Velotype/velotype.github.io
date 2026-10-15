// Every tag evaluates to a real HTMLElement
const divTag: HTMLDivElement = <div>this is a div</div>

// Attributes are set with setAttribute(), so you write TSX the way you write HTML
const withClass: HTMLDivElement = <div class="exampleClass" id="main">this has a class</div>

// style takes an object, with camelCase keys, or a string
const styleObject: HTMLDivElement = <div style={{display: "inline", marginTop: "4px"}}>an object of styles</div>
const styleString: HTMLDivElement = <div style="display:inline;margin-top:4px;">a string of styles</div>

// Attributes that start with "on" add event listeners
const clicked: HTMLButtonElement = <button type="button" onClick={() => console.log("clicked")}>Click me</button>

// A boolean attribute is set empty when true, and left out when false
const input: HTMLInputElement = <input type="checkbox" checked={true} disabled={false}/>

// Fragments group children without a wrapper element, and arrays of elements are children too
const items = <><li>one</li><li>two</li></>
const list: HTMLUListElement = <ul>{items}{["three", "four"].map(name => <li>{name}</li>)}</ul>

// null and undefined render nothing. A boolean child is written as text, so for a condition use a
// ternary that gives null rather than {condition && <div/>}, which writes "false".
const signedIn = false
const conditional: HTMLDivElement = <div>{signedIn ? <span>Account</span> : null}</div>

document.body.append(divTag, withClass, styleObject, styleString, clicked, input, list, conditional)
