function i(e,t){return t.id&&$(e,"id",t.id),t.class&&$(e,"class",V(e,"class")+" "+t.class),t.style&&Le(e,{style:t.style}),e}var ye=console.log,B=console.error,Jt={style:"display:contents;"},Zt={style:"display:none;"},Ze="div";function P(e){return e instanceof HTMLElement}function Qe(e){return e instanceof SVGSVGElement}function et(e){return e instanceof MathMLElement}function Ce(e){return e instanceof ie}function le(e){return e instanceof ne}function de(e){return e instanceof p}function Te(e){return e instanceof Text}function Qt(e){return e instanceof ae}function ce(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function Ee(e,t){let r=e;for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n&&(n.set||n.writable))return!0;r=Object.getPrototypeOf(r)}return!1}function $(e,t,r){Ee(e,t)?e[t]=r:e.setAttribute(t,r.toString())}function er(e,t,r){Ee(e,t)?e[t]=r:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(r)):r&&e.setAttribute(t,"")}function V(e,t){return e.getAttribute(t)}function z(e,t,r){Object.defineProperty(e,t,{value:r,writable:!1,configurable:!1,enumerable:!1})}function tr(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}var _=new Map,Ye=1n,f="vk",he=new Map,ee=new Map,xe=new Map,tt={get domKeyName(){return f},domReferences:_,listenersF:he,listenersR:ee,styleSectionMounted:xe};function rt(e){_.size==0?f=e:B("Name not accepted",e,_.size)}function rr(){let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let n=new Map,a=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:n,register(d){return n.set(a,d),a++},unregister(d){n.delete(d)}}}let t=e.__VELOTYPE_DEVTOOLS_HOOK__,r=new Set(Array.from(t.instances.values(),n=>n.domKeyName));if(r.has(f)){let n=2;for(;r.has(`${f}-${n}`);)n++;rt(`${f}-${n}`)}t.register(tt)}rr();function pe(e){return _.get(e)}function te(e,t){let r=String(Ye);return Ye++,t&&$(t,f,r),_.set(r,e),r}function re(e){_.delete(e)}function ke(e){_.delete(e.vtKey)}function Ge(e){if(ce(e)||Te(e))return Y("span",null,e);if(e)return R(e)}function or(e){if(ce(e))return document.createTextNode(e.toString());if(Te(e))return e;if(e)return R(e)}function R(e){if(P(e)||Qe(e)||et(e))return e;if(le(e))return e.renderDefault();if(de(e)){let t=pe(e.vtKey);if(t&&Ce(t))return t.e}return B("Internal typescript error"),ue()}function we(e,t){if(Array.isArray(t))for(let r=0;r<t.length;r++)we(e,t[r]);else{let r=or(t);r&&e.appendChild(r)}}function ue(){return Y(Ze,Zt)}function nr(e){Promise.resolve().then(e)}function oe(e){return e?ce(e)||de(e)||le(e)||Te(e)||Array.isArray(e)||e.hasAttribute(f)?Y(Ze,Jt,e):e:ue()}var W=class{result;updateRefs;constructor(t,r){this.result=t,this.updateRefs=r}},ne=class{#e;#o;#t;#r=new Map;vtKey=te(this);#n=!1;#i=[];#a=[];#s=0;#l=!1;#c(){return`vt-ro-${this.vtKey}`}#d(){st(this.#c(),new se(this,"onChange"))}constructor(t,r,n){this.#e=t,this.#o=r||ue,this.#t=n}registerOnChangeListener(t,r){return this.#n=!0,this.#s=r?.eventDispatchDelay&&r?.eventDispatchDelay>0?r?.eventDispatchDelay:0,at(r?.hasVtKey||this,this.#c(),t),r?.triggerOnRegistration&&nr(()=>{this.#d()}),this}registerOnMount(t,r){return t&&this.#i.push(t),r&&this.#a.push(r),this}mount(){this.#i.forEach(t=>{t()})}unmount(){this.#a.forEach(t=>{t()})}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!=t&&this.rerenderElements(t)}rerenderElements(t){Array.from(this.#r.entries()).forEach(([r,n])=>{if(n.hU&&n.uR)n.hU(n.e,n.uR,this.#e,t);else{let a=n.rF(t,this),d=a instanceof W,c=oe(Ge(d?a.result:a));$(c,f,r),Se(n.e,c),this.#r.set(r,{e:c,rF:n.rF,hU:n.hU,uR:d?a.updateRefs:void 0})}}),this.#e=t,this.#n&&(this.#s>0?this.#l||(this.#l=!0,setTimeout(()=>{this.#l=!1,this.#d()},this.#s)):this.#d())}unmountKey(t){let r=this.#r.get(t);if(r){let n=V(r.e,f);return t==n?(this.#r.delete(n),re(n||""),!0):(B("Invalid state",t,n,r),!1)}else return B("Invalid unmountKey",t),!1}renderDefault(){return this.render(this.#o,this.#t)}render(t,r){let n=t(this.#e,this),a=n instanceof W,d=oe(Ge(a?n.result:n)),c=te(this,d);return this.#r.set(c,{e:d,rF:t,hU:r,uR:a?n.updateRefs:n}),d}getElements(){return Array.from(this.#r.values()).map(t=>t.e)}removeAll(){this.#r.entries().forEach(([t,r])=>{ot(r.e),re(t)}),this.#r.clear()}};var p=class{attrs;children;constructor(t,r){this.attrs=t,this.children=r}mount(){}unmount(){}refresh(){}vtKey="";replaceChild(t,r){return t}appendToChild(t,r){return!1}prependToChild(t,r){return!1}replaceChildrenOfChild(t,r){return!1}removeChild(t){return!1}};function Se(e,t){let r=document.hasFocus()?document.activeElement==e:!1;return P(e)&&De(e),e.replaceWith(t),P(t)&&Ae(t),r&&t.focus(),t}function ir(e,t){e.appendChild(t),je(t)}function ar(e,t){e.prepend(t),je(t)}function sr(e,t){De(e),e.replaceChildren(...t),Ae(e)}function ot(e){lr(e),e.remove()}var ie=class{constructor(t,r,n){this.c=t,this.a=r,this.h=n,this.k=te(this),z(t,"vtKey",this.k),z(t,"refresh",this.f),z(t,"replaceChild",this.q),z(t,"appendToChild",this.w),z(t,"prependToChild",this.t),z(t,"replaceChildrenOfChild",this.y),z(t,"removeChild",this.u),this.e=Ue(this,this.a,this.h)}c;e;k;a;h;f=()=>{this.e=Se(this.e,Ue(this,this.a,this.h))};q=(t,r)=>this.e.contains(t)?Se(t,R(r)):t;w=(t,r)=>this.e.contains(t)?(ir(t,R(r)),!0):!1;t=(t,r)=>this.e.contains(t)?(ar(t,R(r)),!0):!1;y=(t,r)=>this.e.contains(t)?(sr(t,r.map(n=>R(n))),!0):!1;u=t=>this.e.contains(t)?(ot(t),!0):!1};function Me(e,t){if(P(e)||Qe(e)||et(e))for(let r=0;r<e.children.length;r++){let n=e.children[r];Me(n,t);let a=V(n,f);if(a){let d=pe(a);d&&t(d,a)}}}function nt(e,t){if(Ce(e)){let r=e;r.c.mount(),Object.entries(r.c).forEach(n=>{let a=n[1];le(a)&&a.mount()})}}function je(e){P(e)&&Ae(e);let t=V(e,f);if(t){let r=pe(t);r&&nt(r,t)}}function Ae(e){Me(e,nt)}function it(e,t){Ce(e)?(dr(e.c),e.c.unmount(),Object.entries(e.c).forEach(r=>{let n=r[1];le(n)?(n.unmount(),ke(n)):de(n)&&ke(n)}),re(e.k)):Qt(e)?(e.unmount(),re(e.k)):e.unmountKey(t)}function De(e){Me(e,it)}function lr(e){P(e)&&De(e);let t=V(e,f);if(t){let r=pe(t);r&&it(r,t)}}function Ue(e,t,r){let n=oe(e.c.render(t,r));return $(n,f,e.k),n}var ae=class{w;k;constructor(t){this.w=t,this.k=te(this)}unmount(){this.w.forEach(function(t){t.unmount(),ke(t)})}};function Le(e,t){if(t){for(let[r,n]of Object.entries(t||{}))if(r.startsWith("on")&&r.length>4){if(n){let a,d=n;typeof n!="function"&&n.handler&&n.options!==void 0&&(d=n.handler,a=n.options);let c=r[2]=="-"?r.slice(3):r.slice(2).toLowerCase();e.addEventListener(c,d,a)}}else if(r=="style"&&n instanceof Object)for(let a of Object.keys(n)){let d=n[a]===null||n[a]===void 0?"":n[a],c=typeof d=="number"?d.toString():d,y=e.style;c.endsWith("!important")?y.setProperty(tr(a),c.substring(0,c.length-10),"important"):Ee(y,a)?y[a]=c:y.setProperty(a,c)}else if(typeof n=="boolean")er(e,r,n);else if(typeof n!="function")if(r=="vtwith"){let a=V(e,f);if(a)B("vtwith attr set on element that already has a key",a);else{let d=new ae(n);$(e,f,d.k)}}else(n||n=="")&&$(e,r,n)}}function Y(e,t,...r){let n=t||{};if(typeof e=="string"){let a=document.createElement(e);return Le(a,n),e=="template"?we(a.content,r):we(a,r),a}else{if(de(e.prototype))return new ie(new e(n,r),n,r).e;if(typeof e=="function"){let a=e(n,r);return ce(a)||Array.isArray(a)?a:oe(a)}}return B("Invalid tag",e,n,r),ue()}function Oe(e,t){return t.replaceWith(e),je(e),e}var se=class{emittingObject;event;data;constructor(t,r,n){this.emittingObject=t,this.event=r,this.data=n}};function at(e,t,r){Xe(he,t,e.vtKey,r),Xe(ee,e.vtKey,t,r)}function Xe(e,t,r,n){let a=e.get(t);if(a!==void 0)a.set(r,n);else{let d=new Map;d.set(r,n),e.set(t,d)}}function dr(e){let t=ee.get(e.vtKey);t&&Array.from(t.keys()).forEach(r=>{Je(he,r,e.vtKey),Je(ee,e.vtKey,r)})}function Je(e,t,r){let n=e.get(t);n!==void 0?n.get(r)!==void 0?(n.delete(r),n.size<=0&&e.delete(t)):ye("WARN removing event listener, secondKey is not present",t,r):ye("WARN removing event listener, firstKey is not present",t,r)}function st(e,t,r){let n=he.get(e);n!==void 0?n.entries().forEach(([a,d])=>{(!r||r.vtKey!=a)&&d(t)}):ye("WARN, event emitted with no listeners",e,t)}function l(e,t,r=!1){let n=xe.get(t);if(n){if(!r)return;let d=document.adoptedStyleSheets.findIndex(c=>c==n.sheet);document.adoptedStyleSheets.splice(d,1)}let a=new CSSStyleSheet;a.replace(e),document.adoptedStyleSheets.push(a),xe.set(t,{sheet:a,text:e,key:t})}function o(e,t,r){let n=t.children;return delete t.children,r!==void 0&&(t.key=r),Y(e,t,n)}var s=o;var lt=!1,me=function(e,t){lt||(lt=!0,l(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let r=e.size||"1em";return i(o("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:r,height:r}}),e)};var hr=Symbol("velodesign.clearThemeOptionOverrides");function u(e,t){let r={},n=new Map,a=new Map;for(let[d,c]of Object.entries(e))a.set(d,function(){return b[c]});for(let[d,c]of Object.entries(t??{}))a.set(d,function(){return c});for(let d of a.keys())Object.defineProperty(r,d,{enumerable:!0,get:function(){return n.has(d)?n.get(d):a.get(d)()},set:function(c){c==null?n.delete(d):n.set(d,c)}});return Object.defineProperty(r,hr,{value:function(){n.clear()}}),r}var b=u({},{closeSymbol:function(){return"x"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var ct=u({},{loadingSymbol:function(){return o(me,{size:"1em"})}}),dt=!1,g=function(e,t){dt||(dt=!0,l(`
.vtd-button{
position:relative;
padding:0.25rem 0.5rem;
border-radius:0.25rem;
cursor:pointer;
display:inline-block;
text-align:center;
text-decoration:none;
user-select:none;
vertical-align:middle;
transition:color 0.25s ease-in-out, background-color 0.25s ease-in-out, border 0.25s ease-in-out;
}

.vtd-button-primary{background-color:var(--primary);border:1px solid var(--primary-5);}
.vtd-button-primary:hover{background-color:var(--primary-2);border:1px solid var(--primary-7);}
.vtd-button-primary:active{background-color:var(--primary-6);}
.vtd-button-secondary{background-color:var(--secondary);border:1px solid var(--secondary-5);}
.vtd-button-secondary:hover{background-color:var(--secondary-2);border:1px solid var(--secondary-7);}
.vtd-button-secondary:active{background-color:var(--secondary-6);}
.vtd-button-warning{background-color:var(--warning);border:1px solid var(--warning-5);}
.vtd-button-warning:hover{background-color:var(--warning-2);border:1px solid var(--warning-7);}
.vtd-button-warning:active{background-color:var(--warning-6);}
.vtd-button-danger{background-color:var(--accent);border:1px solid var(--accent-5);}
.vtd-button-danger:hover{background-color:var(--accent-2);border:1px solid var(--accent-7);}
.vtd-button-danger:active{background-color:var(--accent-6);}

.vtd-button-text{background-color:transparent;border:1px solid transparent;}
.vtd-button-text:hover{background-color:var(--background-2);}
.vtd-button-text:active{background-color:var(--background-5);}

.vtd-button:disabled{cursor:not-allowed;opacity:0.5;}
.vtd-button:focus-visible{border:1px solid var(--accent);}

.vtd-button-spinner{
position:absolute;
top:50%;
left:50%;
transform:translate3d(-50%, -50%, 0);
display:inline-block;
visibility:hidden;
}
`,"vtd/Button"));let r=!1,n;e.loadingOnClick&&(n=o("span",{class:"vtd-button-spinner",children:o(ct.loadingSymbol,{})}));let a=o("span",{children:t});return i(s("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:d=>{e.loadingOnClick&&r||e.onClick&&(e.loadingOnClick?(r=!0,n&&(n.style.visibility="visible"),a.style.visibility="hidden",e.onClick(d,()=>{r=!1,e.loadingOnClick&&n&&(n.style.visibility="hidden"),a.style.visibility="visible"})):e.onClick(d))},children:[a,n]}),e)};var ht=console.log,pt=console.error,ve=function(e,t,r){e.setAttribute(t,r)};var ut=new Map,ur=!1;setTimeout(()=>{ut.entries().forEach(([e,t])=>{ht(t)}),ur=!0},1e3);var S="#fff",j="#000",mt="#050505",mr=S,vr=j,gr="#66b2ff",fr="#c6ff9e",br="#ffd666",yr="#ff6666",vt="#fafafa",xr="#151515",kr=S,wr="#004c99",Sr="#286100",Cr="#997000",Tr="#990000",$e=":color-mix(in hsl,",Er=[-8,-6,-4,-2,0,2,4,6,8],A=(e,t,r,n)=>Er.map(a=>a<0?`--${e}-${a/2+5}${$e}${t} ${-1*a}0%,${r} ${10+a}0%)`:a==0?`--${e}-5:${r};--${e}:${r}`:`--${e}-${a/2+5}${$e}${r} ${10-a}0%,${n} ${a}0%)`).join(";")+";",Mr=[1,2,3,4,5,6,7,8,9],gt=(e,t,r)=>Mr.map(n=>`--${e}-${n}${$e}${t} ${10-n}0%,${r} ${n}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${r};`,ft=(e,t,r)=>`--${e}:${t};--${e}-alt:${r};`,bt=function(e){ve(document.getElementsByTagName("html")[0],"data-theme",e)},ze="vtd-preferred-theme",N="light",G="dark",jr="default",D=N,_e={getColorScheme:function(){return D},setColorScheme:function(e){localStorage.setItem(ze,e),_e.resetColorScheme()},resetColorScheme:function(){let e=localStorage.getItem(ze);if(e){let t=globalThis.matchMedia("(prefers-color-scheme: light)").matches;e==G?D=G:e==N?D=N:(e==jr||localStorage.removeItem(ze),t?D=N:D=G)}D==N?bt(N):bt(G)}};function yt(e,t,r=!1){l(`
${e}[data-theme="light"]{
${ft("text",t?.textLightColor||mt,t?.textDarkColor||vt)}
${gt("background",t?.backgroundLightColor||mr,t?.backgroundLightAltColor||vr)}
${A("primary",S,t?.primaryLightColor||gr,j)}
${A("secondary",S,t?.secondaryLightColor||fr,j)}
${A("warning",S,t?.warningLightColor||br,j)}
${A("accent",S,t?.accentLightColor||yr,j)}
color-scheme:light;}
${e}[data-theme="dark"]{
${ft("text",t?.textDarkColor||vt,t?.textLightColor||mt)}
${gt("background",t?.backgroundDarkColor||xr,t?.backgroundDarkAltColor||kr)}
${A("primary",j,t?.primaryDarkColor||wr,S)}
${A("secondary",j,t?.secondaryDarkColor||Sr,S)}
${A("warning",j,t?.warningDarkColor||Cr,S)}
${A("accent",j,t?.accentDarkColor||Tr,S)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,r)}var Ne={injectStyles(e,t=!0){t&&l(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset"),yt(":root",e),globalThis.setTimeout(function(){l("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions")},150),_e.resetColorScheme()}};var L={changeLocation:function(e){try{globalThis.history.pushState(null,"",e),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){pt(t),L.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=e}};var m=function(e,t){let r=e.spa??!1;return i(o("a",{class:"vtd-link",href:e.to,onClick:r?n=>{n.preventDefault(),L.changeLocation(e.to)}:void 0,children:t}),e)};var Ar=u({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var Dr=u({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var xt=!1,U=function(e,t){return xt||(xt=!0,l(`
.vtd-card{
width:100%;
box-sizing:border-box;
border-radius:0.5rem;
border:1px solid var(--background-4);
background-color:var(--background-1);
overflow:hidden;
}
.vtd-card-header{
padding:0.75em 1em;
border-block-end:1px solid var(--background-4);
font-weight:bold;
}
.vtd-card-body{
padding:1em;
}
.vtd-card-footer{
display:flex;
align-items:center;
justify-content:flex-end;
gap:0.5em;
padding:0.75em 1em;
border-block-start:1px solid var(--background-4);
}
`,"vtd/Card")),i(s("div",{class:"vtd-card",children:[e.header&&o("div",{class:"vtd-card-header",children:e.header}),o("div",{class:"vtd-card-body",children:t}),e.footer&&o("div",{class:"vtd-card-footer",children:e.footer})]}),e)};var Lr=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),Or=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<!\\w|\\$|\\)|\\])(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),zr=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function $r(e,t){if(t=="plain")return[{kind:"",text:e}];let r=t=="css"?zr:Or,n=t!="css",a=[],d=0;r.lastIndex=0;let c=0,y=!1,O=0,v=()=>n&&c>0&&!y&&O==0,x;for(;(x=r.exec(e))!==null;){x.index>d&&a.push({kind:"",text:e.slice(d,x.index)});let w=x.groups??{},E=x[0],H=w.closeTag??w.openTag;if(H!==void 0){let M=w.closeTag!==void 0;n&&(c=Math.max(0,c+(M?-1:1)),y=!0),a.push({kind:"punct",text:M?"</":"<"}),a.push({kind:"tag",text:H})}else if(w.word!==void 0){let M=!v()&&Lr.has(w.word);a.push({kind:M?"keyword":"",text:w.word})}else{let M=["comment","string","number","attr","punct"].find(Xt=>w[Xt]!==void 0),Ut=v()&&(M=="string"||M=="number");a.push({kind:Ut?"":M??"",text:E}),n&&M=="punct"&&Gt(E)}d=x.index+E.length}return d<e.length&&a.push({kind:"",text:e.slice(d)}),a;function Gt(w){for(let E=0;E<w.length;E++){let H=w[E];H=="{"?O++:H=="}"?O=Math.max(0,O-1):H==">"&&y&&O==0&&(E>0&&w[E-1]=="/"&&(c=Math.max(0,c-1)),y=!1)}}}var kt=!1,He=function(e){let t=e.language??"tsx",r=$r(e.code,t);kt||(kt=!0,l(`
.vtd-code-block{
width:100%;
box-sizing:border-box;
margin:0;
padding:1em;
border:1px solid var(--background-4);
border-radius:0.5rem;
background-color:var(--background-1);
/* Code's own line breaks are the content, so this scrolls rather than reflowing */
overflow-x:auto;
font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
font-size:0.85em;
line-height:1.6;
tab-size:4;
}
/* A scrollable region is focusable, so it needs a visible focus ring like any other control */
.vtd-code-block:focus-visible{outline:2px solid var(--primary);outline-offset:2px;}
.vtd-code-block-wrap{white-space:pre-wrap;overflow-wrap:break-word;}
.vtd-code-block code{font:inherit;background:none;padding:0;border-radius:0;}

/*
 * Token colours come from the theme's four hues, never a literal - the same rule the charts
 * follow. Each hue is taken at a step that keeps contrast against --background-1 in both themes,
 * since that ramp inverts between them.
 */
.vtd-code-block-comment{color:var(--background-6);font-style:italic;}
.vtd-code-block-string{color:var(--secondary-7);}
.vtd-code-block-keyword{color:var(--primary-7);}
.vtd-code-block-tag{color:var(--accent-7);}
.vtd-code-block-attr{color:var(--warning-7);}
.vtd-code-block-number{color:var(--secondary-8);}
.vtd-code-block-punct{color:var(--background-8);}

/*
 * Line numbers are a counter on each line rather than a second column of text, so selecting the
 * block copies the code alone - a gutter built from real text puts "1 2 3" into the clipboard.
 */
.vtd-code-block-numbered code{counter-reset:vtd-code-block-line;}
.vtd-code-block-numbered .vtd-code-block-line::before{
counter-increment:vtd-code-block-line;
content:counter(vtd-code-block-line);
display:inline-block;
width:2.5em;
margin-inline-end:1em;
text-align:right;
color:var(--background-5);
user-select:none;
}
.vtd-code-block-line{display:block;min-height:1.6em;}
/*
 * A hanging indent, so wrap and showLineNumbers work together: without it a wrapped line's
 * continuation starts at the left edge, underneath the number, and reads as its own line. The
 * outdent is the gutter's own width (2.5em) plus its trailing gap (1em), which puts the number in
 * the outdented space and aligns every continuation with the first line's code.
 */
.vtd-code-block-numbered.vtd-code-block-wrap .vtd-code-block-line{padding-inline-start:3.5em;text-indent:-3.5em;}
`,"vtd/CodeBlock"));let n=["vtd-code-block"];return e.wrap&&n.push("vtd-code-block-wrap"),e.showLineNumbers&&n.push("vtd-code-block-numbered"),i(o("pre",{class:n.join(" "),tabindex:0,role:"region","aria-label":e.ariaLabel,children:o("code",{children:e.showLineNumbers?_r(r):wt(r)})}),e)};function wt(e){return e.map(t=>t.kind?o("span",{class:`vtd-code-block-${t.kind}`,children:t.text}):t.text)}function _r(e){let t=[[]];for(let r of e)r.text.split(`
`).forEach((a,d)=>{d>0&&t.push([]),a.length>0&&t[t.length-1].push({kind:r.kind,text:a})});return t.map(r=>o("span",{class:"vtd-code-block-line",children:wt(r)}))}var Nr=u({closeSymbol:"closeSymbol"});var St=!1,X=class extends p{#e;#o;#t=[];#r;#n=(t=!1)=>{this.#e.removeAttribute("open"),t&&this.#o.focus()};#i=t=>{this.#r.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#n())};#a=t=>{if(t.key=="Escape"){this.#e.open&&(t.preventDefault(),this.#n(!0));return}if(!this.#e.open||this.#t.length==0)return;let r=this.#t.indexOf(document.activeElement);t.key=="ArrowDown"?(t.preventDefault(),this.#t[(r+1)%this.#t.length]?.focus()):t.key=="ArrowUp"?(t.preventDefault(),this.#t[(r-1+this.#t.length)%this.#t.length]?.focus()):t.key=="Home"?(t.preventDefault(),this.#t[0]?.focus()):t.key=="End"&&(t.preventDefault(),this.#t[this.#t.length-1]?.focus())};mount(){document.addEventListener("click",this.#i)}unmount(){document.removeEventListener("click",this.#i)}constructor(t,r){super(t,r),this.#r=t,St||(St=!0,l(`
.vtd-menu{
position:relative;
display:inline-block;
}
.vtd-menu-trigger{
cursor:pointer;
display:inline-block;
list-style:none;
user-select:none;
padding:0.25rem 0.5rem;
border-radius:0.25rem;
}
.vtd-menu-trigger::-webkit-details-marker{display:none;}
.vtd-menu-trigger::marker{display:none;content:"";}
.vtd-menu-trigger:hover{background-color:var(--background-1);}
.vtd-menu-list{
position:absolute;
top:100%;
left:0;
z-index:1000;
min-width:10em;
margin-block-start:0.25em;
padding:0.25em;
list-style:none;
background-color:var(--background-1);
border:1px solid var(--background-4);
border-radius:0.25rem;
box-shadow:0 2px 8px rgba(0,0,0,0.15);
}
.vtd-menu-item{
display:block;
padding:0.4em 0.75em;
border-radius:0.25rem;
color:inherit;
text-decoration:none;
}
.vtd-menu-item:hover{background-color:var(--background-2);}
.vtd-menu-item:focus-visible{background-color:var(--background-2);outline:none;}
.vtd-menu-item-disabled{opacity:0.5;cursor:not-allowed;pointer-events:none;}
`,"vtd/Menu")),this.#o=o("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel,children:t.trigger}),this.#t=t.items.map(n=>o("a",{role:"menuitem",href:n.href||"#","aria-disabled":n.disabled,class:`vtd-menu-item${n.disabled?" vtd-menu-item-disabled":""}`,onClick:a=>{if(n.disabled){a.preventDefault();return}n.href?n.spa&&(a.preventDefault(),L.changeLocation(n.href)):a.preventDefault(),n.onClick?.(),this.#n()},children:n.label})),this.#e=s("details",{class:"vtd-menu",onKeyDown:this.#a,children:[this.#o,o("ul",{class:"vtd-menu-list",role:"menu",children:this.#t.map(n=>o("li",{role:"none",children:n}))})]}),i(this.#e,t)}render(){return this.#e}};var Et=u({collapseSymbol:"collapseSymbol"}),Ct=!1,Tt=3;function Ir(e,t){if(t===void 0||e.length<=Math.max(t,Tt))return{head:e,collapsed:[],tail:[]};let n=Math.max(t,Tt)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-n),tail:e.slice(e.length-n)}}var Re=function(e,t){Ct||(Ct=!0,l(`
.vtd-breadcrumbs-list{
display:flex;
flex-wrap:wrap;
align-items:center;
list-style:none;
padding:0;
margin:0;
}
.vtd-breadcrumbs-item{
display:flex;
align-items:center;
}
.vtd-breadcrumbs-item a{color:inherit;}
.vtd-breadcrumbs-item[aria-current="page"]{font-weight:bold;}
.vtd-breadcrumbs-separator{
margin-inline:0.5em;
color:var(--background-6);
}
/* A crumb's label and its leading content read as one thing, so they sit on one baseline */
.vtd-breadcrumbs-crumb{display:inline-flex;align-items:center;gap:0.4em;}
.vtd-breadcrumbs-leading{display:inline-flex;align-items:center;flex-shrink:0;}
.vtd-breadcrumbs-expand{
cursor:pointer;
color:var(--background-7);
padding:0 0.3em;
border-radius:0.25rem;
line-height:1;
}
.vtd-breadcrumbs-expand:hover{background-color:var(--background-1);color:var(--text);}
`,"vtd/Breadcrumbs"));let{head:r,collapsed:n,tail:a}=Ir(e.items,e.maxItems),d=e.separator||"/",c=v=>v.leading?s("span",{class:"vtd-breadcrumbs-crumb",children:[o("span",{class:"vtd-breadcrumbs-leading",children:v.leading}),v.label]}):v.label,y=(v,x)=>s("li",{class:"vtd-breadcrumbs-item","aria-current":v.to?void 0:"page",children:[v.to?o(m,{to:v.to,spa:e.spa,children:c(v)}):o("span",{children:c(v)}),x?null:o("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true",children:d})]}),O=n.length>0?s("li",{class:"vtd-breadcrumbs-item",children:[o(X,{ariaLabel:e.expandLabel,trigger:o("span",{class:"vtd-breadcrumbs-expand",children:e.expandButtonChildren||o(Et.collapseSymbol,{})}),items:n.map(v=>({label:c(v),href:v.to,spa:e.spa}))}),o("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true",children:d})]}):null;return i(o("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs",children:s("ol",{class:"vtd-breadcrumbs-list",children:[r.map((v,x)=>y(v,n.length==0&&x==r.length-1)),O,a.map((v,x)=>y(v,x==a.length-1))]})}),e)};var Hr=u({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var Mt=!1,Be=function(e,t){return Mt||(Mt=!0,l(`
.vtd-navbar{
width:100%;
box-sizing:border-box;
display:flex;
flex-wrap:wrap;
align-items:center;
gap:1em;
padding:0.75em 1em;
border-block-end:1px solid var(--background-4);
}
.vtd-navbar-start{
display:flex;
flex-wrap:wrap;
align-items:center;
gap:1em;
/* The auto margin lives here rather than on the brand, so brand and leading group together on
   the left and children are pushed right whether or not leading is set. */
margin-inline-end:auto;
}
.vtd-navbar-brand{
font-weight:bold;
}
.vtd-navbar-leading,.vtd-navbar-items{
display:flex;
flex-wrap:wrap;
align-items:center;
gap:1em;
}
`,"vtd/Navbar")),i(s("nav",{class:"vtd-navbar",children:[s("div",{class:"vtd-navbar-start",children:[e.brand&&o("div",{class:"vtd-navbar-brand",children:e.brand}),e.leading&&o("div",{class:"vtd-navbar-leading",children:e.leading})]}),o("div",{class:"vtd-navbar-items",children:t})]}),e)};var Br=u({closeSymbol:"closeSymbol"});var Lt=u({closeSymbol:"closeSymbol"}),Dt=!1,J=function(e,t){Dt||(Dt=!0,l(`
.vtd-tag{
display:inline-flex;
align-items:center;
gap:0.35em;
padding:0.1em 0.6em;
border-radius:0.25rem;
font-size:0.85em;
line-height:1.6;
white-space:nowrap;
vertical-align:middle;
}
.vtd-tag-primary{background-color:var(--primary-3);border:1px solid var(--primary-6);}
.vtd-tag-secondary{background-color:var(--secondary-3);border:1px solid var(--secondary-6);}
.vtd-tag-warning{background-color:var(--warning-3);border:1px solid var(--warning-6);}
.vtd-tag-danger{background-color:var(--accent-3);border:1px solid var(--accent-6);}
.vtd-tag-neutral{background-color:var(--background-1);border:1px solid var(--background-6);}
.vtd-tag-remove{
cursor:pointer;
background:transparent;
border:none;
color:inherit;
font:inherit;
line-height:1;
padding:0;
opacity:0.7;
}
.vtd-tag-remove:hover{opacity:1;}
`,"vtd/Tag"));let r=s("span",{class:`vtd-tag vtd-tag-${e.type||"neutral"}`,children:[t,e.onRemove&&o("button",{type:"button",class:"vtd-tag-remove","aria-label":e.removeLabel,onClick:()=>{e.onRemove?.(),r.remove()},children:o(Lt.closeSymbol,{})})]});return i(r,e)};var Vr=u({},{emptySymbol:function(){return o("span",{class:"vtd-empty-icon","aria-hidden":"true",children:o(b.emptySymbol,{})})}});var Ot=!1,Pe=function(e,t){return Ot||(Ot=!0,l(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),i(s("div",{class:"vtd-statistic",children:[o("div",{class:"vtd-statistic-title",children:e.title}),s("div",{class:"vtd-statistic-value",children:[e.prefix&&o("span",{class:"vtd-statistic-affix",children:e.prefix}),e.value,e.suffix&&o("span",{class:"vtd-statistic-affix",children:e.suffix})]})]}),e)};var Fr=u({closeSymbol:"closeSymbol"});var Kr=u({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Ve=u({},{columnsSymbol:function(){return o("span",{"aria-hidden":"true",children:"\u25A5"})},emptySymbol:function(){return o("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true",children:o(b.emptySymbol,{})})}});var It=!1;function F(){It||(It=!0,l(`
/*
 * WARNING: muted is var(--background-6), NOT var(--text-alt). Despite the name, --text-alt is the
 * *inverse* text colour - in dark mode it is the light theme's near-black - so muted text styled
 * with it comes out nearly invisible against the page it sits on. --background-N mixes N0% from
 * the page background toward its contrast colour, which makes -6 a real muted foreground in both
 * themes. This is the single trap this component exists to stop every consumer rediscovering.
 */
.vtd-text-muted{color:var(--background-6);}
.vtd-text-primary{color:var(--primary);}
.vtd-text-secondary{color:var(--secondary);}
.vtd-text-warning{color:var(--warning);}
.vtd-text-danger{color:var(--accent);}

.vtd-heading{
margin-block:0.6em 0.4em;
line-height:1.25;
/* Headings are short and read better without one word stranded on its own line */
text-wrap:balance;
}
/* First heading in a block shouldn't push its container open */
.vtd-heading:first-child{margin-block-start:0;}
.vtd-heading-1{font-size:2em;}
.vtd-heading-2{font-size:1.5em;}
.vtd-heading-3{font-size:1.25em;}
.vtd-heading-4{font-size:1.1em;}
.vtd-heading-5{font-size:1em;}
.vtd-heading-6{font-size:0.9em;text-transform:uppercase;letter-spacing:0.05em;}

.vtd-paragraph{margin-block:0 0.75em;line-height:1.55;}
.vtd-paragraph:last-child{margin-block-end:0;}

.vtd-text-strong{font-weight:bold;}
.vtd-text-italic{font-style:italic;}
.vtd-text-underline{text-decoration:underline;}
.vtd-text-strike{text-decoration:line-through;}
/* Tabular figures, so columns of numbers line up and a changing value doesn't shift its neighbours */
.vtd-text-numeric{font-variant-numeric:tabular-nums;}
.vtd-text-code{
font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
font-size:0.9em;
background-color:var(--background-1);
padding:0.1em 0.35em;
border-radius:0.2rem;
}
`,"vtd/Typography"))}function K(e,t,r){let n=[e];return t&&n.push(`vtd-text-${t}`),r?.strong&&n.push("vtd-text-strong"),r?.italic&&n.push("vtd-text-italic"),r?.underline&&n.push("vtd-text-underline"),r?.strike&&n.push("vtd-text-strike"),r?.numeric&&n.push("vtd-text-numeric"),n.join(" ")}var k=function(e,t){F();let r=K(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return i(o("h1",{class:r,children:t}),e);case 2:return i(o("h2",{class:r,children:t}),e);case 3:return i(o("h3",{class:r,children:t}),e);case 4:return i(o("h4",{class:r,children:t}),e);case 5:return i(o("h5",{class:r,children:t}),e);default:return i(o("h6",{class:r,children:t}),e)}};var q=function(e,t){F();let r=K(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?i(o("code",{class:r,children:t}),e):i(o("span",{class:r,children:t}),e)};var C=function(e,t){return F(),i(o("p",{class:K("vtd-paragraph",e.type),children:t}),e)};var Ht={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function ge(e,t="md"){return e===void 0?Ht[t]:Ht[e]??e}function fe(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function Rt(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var Bt=!1,h=function(e,t){Bt||(Bt=!0,l(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}
/* An inline stack sizes to its content, like the text it sits among */
.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let r=e.direction??"row";return i(o("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:r,gap:ge(e.gap),alignItems:fe(e.align),justifyContent:Rt(e.justify),flexWrap:e.wrap??r==="row"?"wrap":"nowrap"},children:t}),e)};var Pt=!1,Z=function(e,t){Pt||(Pt=!0,l(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let r=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return i(o("div",{class:"vtd-grid",style:{gridTemplateColumns:r,gap:ge(e.gap),alignItems:fe(e.align)},children:t}),e)};var Vt=u({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var T=e=>({label:"GitHub",to:`https://github.com/Velotype/${e}`}),I=e=>({label:"JSR",to:`https://jsr.io/@velotype/${e}`}),Ke=[{id:"velotype",name:"Velotype",tag:"framework",tagKind:"primary",tagline:"A fast and small TSX framework that updates the DOM in place.",about:["Velotype creates real DOM elements as your TSX runs. There is no virtual DOM and no reconciler: a value that changes renders only the part of the page that depends on it, and a list that changes renders, moves, or removes only the rows that changed.","Components are classes with fields and methods, not functions with hooks, and you write TSX the way you would write HTML."],stats:[{title:"Minified",value:"21",suffix:"kb"},{title:"Gzipped",value:"7.7",suffix:"kb"},{title:"Virtual DOM",value:"None"}],statsNote:"Velotype 0.3.1, the jsx-runtime entry point, minified with deno bundle. Bundlers drop the parts an app does not import.",features:[{title:"Closer to the DOM",text:"TSX returns real HTMLElements. Attributes are HTML attributes (class, not className), event listeners are added with addEventListener, and there is nothing between your code and the page to learn."},{title:"Updates in place",text:"RenderObject renders a value to every place it appears and renders again when it changes. RenderObjectArray and RenderTemplateArray render only the affected rows, and sort(), move(), and filter() move the rows that already exist instead of rendering them again."},{title:"Classes, not hooks",text:"A Component is a class: fields hold state, methods change it, and Velotype calls mount(), render(), and unmount() for you. There are no use*() calls and no call-order rules."},{title:"Small, and tree-shakeable",text:"About 21kb minified and 7.7kb gzipped for the whole runtime (Velotype 0.3.1), and bundlers drop the parts an app does not import."},{title:"Type-checked styles and events",text:"Style objects are checked against CSS: property names, keywords, units, and colors. on* attributes take a handler or {handler, options}, and on- listens for a custom event by its exact name."},{title:"Made for development",text:"Hot reloading keeps component state, ErrorBoundary contains a failing component, AsyncRenderObject shows only the latest request's result, and the Velotype DevTools extension shows the live component tree."}],samples:[{title:"A component that updates in place",intro:"The RenderObject renders its value wherever it is placed, and setting a new value renders only that element again.",language:"tsx",code:`class Counter extends Component<EmptyAttrs> {
    count = new RenderObject<number>(0, (count: number) => <span>{count}</span>)

    override render() {
        return <div>
            <div>Count: {this.count}</div>
            <button type="button" onClick={() => this.count.set(this.count.get() + 1)}>
                Add one
            </button>
        </div>
    }
}

replaceElementWithRoot(<Counter/>, document.getElementById("app"))`},{title:"A list that moves its rows",intro:"RenderTemplateArray clones a template element for each row. Changing the Array renders only the rows that changed, and sorting or filtering moves the rows that are already on the page.",language:"tsx",code:`type Server = {name: string, cpu: number}

class ServerList extends Component<EmptyAttrs> {
    servers = new RenderTemplateArray<Server, null>({
        wrapperElementTag: "ul",
        template: <li></li>,
        renderFunction: (row: HTMLElement, server: Server) => {
            row.textContent = \`\${server.name} \${server.cpu}%\`
            return null
        },
    })

    override render() {
        return <div>
            <button type="button" onClick={() => this.servers.sort((a, b) => b.cpu - a.cpu)}>
                Sort by CPU
            </button>
            {this.servers}
        </div>
    }
}`}],install:{title:"Add Velotype to a Deno project",language:"plain",code:`deno add jsr:@velotype/velotype

// deno.json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velotype",
        "lib": ["dom", "deno.ns", "esnext"]
    }
}`},links:[T("velotype"),I("velotype")],resources:[{name:"velotype-perf-demo",tag:"benchmark",text:"The same fleet dashboard written in Velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code, with 10,000 rows by default. The page loads each one and times creating rows, live updates, typing a filter, sorting, and moving a row in your own browser.",links:[T("velotype-perf-demo"),{label:"Live demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{name:"example-velotype-projects",tag:"examples",text:"Example projects using the Velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, the demo pages from React's 2018 hooks talk recreated in Velotype, and the custom-elements-everywhere tests that check Velotype works with Custom Elements.",links:[T("example-velotype-projects")]}]},{id:"velodesign",name:"velodesign",tag:"UI components",tagKind:"primary",tagline:"A themed component library for Velotype, built from native HTML elements.",about:["velodesign is a component library for Velotype apps. Where HTML has an element for the job (input, button, details, dialog), the component is that element, so keyboard support, form participation, and browser autofill come from the platform.","This site is built with it."],stats:[{title:"Theme",value:"Light + dark"},{title:"Colors set by",value:"CSS variables"}],features:[{title:"Native elements first",text:"A Checkbox is a real input, a Modal is a real dialog, and an Accordion is built on details. Nothing reimplements what the browser already does."},{title:"Re-theme with variables",text:"Colors come from a small set of CSS custom properties (--text, --background, --primary, --secondary, --warning, --accent, each with a light-to-dark ramp). Change them and every component follows, with no component code touched."},{title:"Light and dark",text:`The theme follows the browser's color scheme, or a reader's choice through [data-theme="light"|"dark"].`},{title:"A broad set",text:"Typography, layout, form, navigation, feedback, overlays, data display, data entry, and charts: from Stack, Grid, and Button to DataTable, DatePicker, Command, and LineChart."},{title:"Spacing from one scale",text:"Stack and Grid draw gaps from a shared scale in em, so two rows that look the same are the same, and spacing follows the type size."},{title:"Updates only what changed",text:"Handlers do the smallest DOM update that expresses a change, and none when nothing changed, so focus, caret, selection, and scroll position survive."}],samples:[{title:"Use a few components",language:"tsx",code:`import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

replaceElementWithRoot(
    <Stack direction="column">
        <Checkbox>Enable notifications</Checkbox>
        <Button type="primary" onClick={() => console.log("clicked")}>Save</Button>
    </Stack>,
    document.getElementById("app"),
)`}],install:{title:"Add velodesign to a Deno project",language:"plain",code:`deno add jsr:@velotype/velodesign

// Theme.injectStyles() runs once, before any component renders,
// and sets up the CSS custom properties every component reads.`},links:[T("velodesign"),I("velodesign"),{label:"Component showcase",to:"https://velotype.github.io/velodesign/"}]},{id:"velossr",name:"velossr",tag:"server rendering",tagKind:"primary",tagline:"TSX rendered to HTML on the server, with no virtual DOM and no client runtime.",about:["velossr is the server-side version of Velotype's TSX. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve.","Pair it with Velotype for interactive parts of a page: the server renders the markup for each one, and Velotype replaces it in the browser with replaceElementWithRoot()."],stats:[{title:"Virtual DOM",value:"None"},{title:"Client runtime",value:"None"}],features:[{title:"Static and dynamic components",text:"A StaticServerComponent is a plain function that renders synchronously. A DynamicServerComponent is a class that can see the Request and render async."},{title:"Streaming",text:"Render a page all at once, or as a ReadableStream where async components flush in place as they resolve."},{title:"Prepared once",text:"prepareHTMLVNodeForRendering() prepares a page at module load, so the static parts are not rebuilt for every request."},{title:"Escaped by default",text:"Text, attribute values, and attribute names are escaped where they are written. Inline style and script text is written as is, changing only the sequences that would end the element early."},{title:"Contained failures",text:"If a dynamic component throws, its onFail() renders instead, so one failing component does not take down the rest of the page."},{title:"Same TSX as Velotype",text:"HTML attributes, style objects, and fragments work as they do in the browser, so markup moves between server and client unchanged."}],samples:[{title:"A server that renders a page",language:"tsx",code:`import { type Context, Router, Server } from "jsr:@velotype/veloserver"
import { type EmptyAttrs, prepareHTMLVNodeForRendering, renderServerVNode, type StaticServerComponent } from "jsr:@velotype/velossr"

const Page: StaticServerComponent<EmptyAttrs> = function() {
    return <html><body><div>Hello velossr!</div></body></html>
}
const preparedPage = prepareHTMLVNodeForRendering(<Page/>)

const router = new Router<never>({})
router.get("/", function(request: Request, context: Context<never>) {
    const response = new Response(renderServerVNode(preparedPage, request, context).toReadableStream())
    response.headers.set("content-type", "text/html; charset=utf-8")
    return response
})

new Server(router).serve("127.0.0.1", 3000)`}],install:{title:"Add velossr to a Deno project",language:"plain",code:`deno add jsr:@velotype/velossr

// deno.json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velossr"
    }
}`},links:[T("velossr"),I("velossr")]},{id:"velodevtools",name:"Velotype DevTools",tag:"Chrome extension",tagKind:"secondary",tagline:"Chrome DevTools panels for debugging Velotype apps.",about:["A Chrome extension with three DevTools panels, plus a toolbar popup that shows whether Velotype is present on the page.","It works with a Velotype build that installs the devtools hook, which every current Velotype entry point does. If a site uses Velotype and the tree is empty, its bundle predates the hook."],stats:[{title:"Panels",value:"3"}],features:[{title:"Velotype: the component tree",text:"The page's live component tree, like React DevTools: class names, DOM anchors, and for class components their attrs and instance fields, including live RenderObject values. Click a node to inspect it and highlight it on the page."},{title:"Real expandable fields",text:"Any object, array, Map, or Set field expands to its live values, fetched fresh on each expand and kept live for branches that are already open."},{title:"Velotype Events",text:"A snapshot of the event bus's current registrations: every listening key, how many listeners it has, and which live components or RenderObjects they belong to."},{title:"VeloJSON",text:"Decodes VSON and VBIN payloads. It inspects network request and response bodies while the panel is open, and has a manual bytes-to-JSON and JSON-to-bytes tool."}],samples:[],install:{title:"Build and load it",language:"plain",code:`deno task build

// chrome://extensions -> enable Developer mode -> Load unpacked
// -> select the dist/ folder`},links:[T("velodevtools")]},{id:"veloserver",name:"veloserver",tag:"web server",tagKind:"warning",tagline:"A web server framework for high-performance websites, on Deno.",about:["veloserver is a small server framework: a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates Velotype apps."],stats:[],features:[{title:"A typed router",text:"get(), head(), and post() take a path or several paths. :name matches one segment and stores it as a path variable, a trailing * matches the rest, and a static segment beats a variable or wildcard."},{title:"Typed request metadata",text:"Context.meta holds metadata for each request, created by a function you give the Router and typed by the Router's type parameter."},{title:"Inspectors",text:"An Inspector runs before and after the handlers of a path. Its request side can answer the request itself, and its response side sees every response, which suits logging, timing, and auth."},{title:"Static files",text:"mountFiles() and mountFile() serve a directory or a file, held in memory with an ETag and a gzip copy for clients that accept it."},{title:"Clean shutdown",text:"serve() listens for SIGINT, SIGTERM, and SIGUSR1, and server.close() stops it from code."},{title:"A development server",text:"@velotype/veloserver/dev serves a Velotype app and updates the page when files change: per-module, or by rebuilding the bundle."}],samples:[{title:"Hello veloserver",language:"tsx",code:`import { Router, Server } from "jsr:@velotype/veloserver"

const router = new Router<never>({})

router.get("/", () => {
    const response = new Response("<!DOCTYPE html><html><body>Hello veloserver!</body></html>")
    response.headers.set("content-type", "text/html; charset=utf-8")
    return response
})

router.get("/users/:id", (request, context) => {
    return router.json(request, context, {id: context.pathVariables?.get("id")})
})

const server = new Server(router)
server.serve("127.0.0.1", 3000)`}],install:{title:"Run it",language:"plain",code:`deno add jsr:@velotype/veloserver
deno run --allow-net server.ts`},links:[T("veloserver"),I("veloserver")]},{id:"velojson",name:"velojson (VSON)",tag:"binary JSON",tagKind:"warning",tagline:"A compact binary encoding for JSON, and a faster one when both sides share a schema.",about:["VSON (Velocity JSON) maps JavaScript JSON data to bytes one to one: anything JSON can hold, VSON can hold, and nothing else is added.","It has three formats. Each one solves a cost of the one before it."],stats:[{title:"Base vs JSON text",value:"20-25%",suffix:" smaller"},{title:"Key Table vs JSON text",value:"20-65%",suffix:" smaller"},{title:"VBIN vs JSON text",value:"25-70%",suffix:" smaller"}],features:[{title:"VSON Base",text:"A direct structural translation of JSON, typically 20-25% smaller than the text. Because it mirrors JSON's structure it works for streaming and partial decoding."},{title:"VSON Key Table",text:"Every unique key is stored once, in a table at the end of the message. About 20% smaller than JSON for a single object, and up to about 65% smaller for many records that share a wide set of keys."},{title:"VBIN",text:"Encoder and decoder agree on a key-ID mapping ahead of time, so the table is not sent and key names are never encoded or decoded as strings. Typically 25-70% smaller, and significantly faster than native JSON."},{title:"Honest about speed",text:"The VSON Base and Key Table formats typically run slower than native JSON.stringify() and JSON.parse(). The speed comes from VBIN."},{title:"Server and browser builds",text:"The main module is tuned for speed and supports every format. The browser module is tuned for size (about 4.3kb minified) and supports Key Table."},{title:"Debuggable",text:"The Velotype DevTools extension decodes VSON and VBIN payloads straight from the network panel."}],samples:[{title:"Encode and decode",language:"tsx",code:`import { VSON } from 'jsr:@velotype/velojson'

const startObj = { name: "Some name", age: 20, address: null }

const objBinary: Uint8Array = VSON.encode(startObj)
console.log(objBinary.length) // 34 bytes, against 44 for the JSON text

const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))
// {"name":"Some name","age":20,"address":null}`}],install:{title:"Add velojson to a Deno project",language:"plain",code:`deno add jsr:@velotype/velojson

// In the browser:
import { VSON } from "jsr:@velotype/velojson/browser"`},links:[T("velojson"),I("velojson")]},{id:"velomicro",name:"velomicro",tag:"1kb",tagKind:"neutral",tagline:"A 1kb TSX framework that shows how TSX rendering works.",about:["velomicro is the smallest version of the idea: a createElement that returns real DOM elements, and function components. It exists to be read. The Medium article walks through its source line by line."],stats:[{title:"Size",value:"1",suffix:"kb"}],features:[{title:"Returns HTMLElements",text:"TSX evaluates to real elements, so a div tag is an HTMLDivElement."},{title:"HTML attributes",text:"It calls setAttribute(), so you write class and the other attributes as you would in HTML."},{title:"Style objects",text:"Pass an object of camelCase properties, or a string."},{title:"Function components",text:"A component is a function from attrs to an element."}],samples:[{title:"A counter function component",language:"tsx",code:`const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = count
        }}>Increment</button>
    </div>
}`}],install:{title:"Add velomicro to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomicro"},links:[T("velomicro"),I("velomicro"),{label:"Medium article",to:"https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}]},{id:"velomini",name:"velomini",tag:"2.5kb",tagKind:"neutral",tagline:"A 2.5kb TSX framework that adds classes to velomicro.",about:["velomini is velomicro plus a Component class with render, mount, unmount, and refresh. Its way to update the page is to tear down a component's subtree and render it again. The Medium article walks through the source.","Velotype is the next step: it keeps classes and replaces refresh() with values that update in place."],stats:[{title:"Size",value:"2.5",suffix:"kb"}],features:[{title:"Class components",text:"Extend Component and implement render(). Velomini calls mount() and unmount() for you."},{title:"getComponent()",text:"Convert an element back to the class instance that built it, to call its methods."},{title:"Everything from velomicro",text:"Real HTMLElements, HTML attributes, style objects, and function components."}],samples:[{title:"A class component",language:"tsx",code:`class ComplexComponent extends Component<{foo: string}> {
    override render(attrs) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Then in TSX:
return <div><ComplexComponent foo="Component!"></ComplexComponent></div>`}],install:{title:"Add velomini to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomini"},links:[T("velomini"),I("velomini"),{label:"Medium article",to:"https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}]}],Kt=[{title:"Front end",note:"TSX that creates real DOM elements, with no virtual DOM.",ids:["velotype","velodesign","velossr","velodevtools"]},{title:"Server and wire format",ids:["veloserver","velojson"]},{title:"Learn",note:"The smallest versions of the idea, written to be read.",ids:["velomicro","velomini"]}],qe=new Map(Ke.map(e=>[e.id,e]));var We=e=>`/projects/${e.id}/`,be=e=>()=>{location.assign(e)},no=()=>s(Be,{style:{borderBottom:"1px solid var(--background-4)"},brand:o(m,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none"},children:"The Velocity Project"}),children:[o(m,{to:"https://github.com/Velotype",children:"GitHub"}),o(m,{to:"https://jsr.io/@velotype",children:"JSR"}),o(m,{to:"https://argoday.medium.com/",children:"Articles"})]}),io=()=>s(q,{type:"muted",children:["All projects live under the ",o(m,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",o(m,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",o(m,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with Velotype and velodesign."]}),qt=e=>s(h,{direction:"column",gap:"sm",children:[o(k,{level:3,children:e.title}),e.intro&&o(C,{children:e.intro}),o(He,{code:e.code,language:e.language})]}),ao=e=>o(U,{id:e.id,header:s(h,{align:"center",children:[o(m,{to:We(e),style:{color:"inherit",textDecoration:"none"},children:e.name}),o(J,{type:e.tagKind,children:e.tag})]}),children:s(h,{direction:"column",children:[o(C,{children:e.tagline}),s(h,{children:[o(m,{to:We(e),children:"Learn more"}),o(m,{to:e.links[0].to,children:"GitHub"})]})]})}),so=()=>s(h,{direction:"column",gap:"lg",children:[s(h,{direction:"column",children:[o(k,{level:1,children:"The Velocity Project"}),o(C,{style:{fontSize:"1.2em"},children:"A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them."}),o(C,{children:s(q,{type:"muted",children:["Each piece stands on its own and is published separately. They are designed to fit together: ",o(m,{to:"/projects/veloserver/",children:"veloserver"})," serves pages and APIs, ",o(m,{to:"/projects/velossr/",children:"velossr"})," or ",o(m,{to:"/projects/velotype/",children:"Velotype"})," renders them, and ",o(m,{to:"/projects/velojson/",children:"VSON"})," carries data between the two. More pieces are on the way."]})}),s(h,{children:[o(g,{type:"primary",onClick:be("/projects/velotype/"),children:"Start with Velotype"}),o(g,{type:"secondary",onClick:be("https://github.com/Velotype"),children:"GitHub"})]})]}),Kt.map(e=>s(h,{direction:"column",children:[o(k,{level:2,children:e.title}),e.note&&o(q,{type:"muted",children:e.note}),o(Z,{minColumnWidth:"22em",children:e.ids.map(t=>ao(qe.get(t)))})]}))]}),lo=e=>o(U,{header:s(h,{align:"center",children:[o("span",{children:e.name}),o(J,{type:"neutral",children:e.tag})]}),children:s(h,{direction:"column",children:[o(C,{children:e.text}),o(h,{children:e.links.map(t=>o(m,{to:t.to,children:t.label}))})]})}),co=e=>s(h,{direction:"column",gap:"lg",children:[o(Re,{items:[{label:"The Velocity Project",to:"/"},{label:e.name}]}),s(h,{direction:"column",children:[s(h,{align:"center",children:[o(k,{level:1,children:e.name}),o(J,{type:e.tagKind,children:e.tag})]}),o(C,{style:{fontSize:"1.2em"},children:e.tagline}),s(h,{children:[o(g,{type:"primary",onClick:be(e.links[0].to),children:e.links[0].label}),e.links.slice(1).map(t=>o(g,{type:"secondary",onClick:be(t.to),children:t.label}))]})]}),e.stats.length>0&&s(h,{direction:"column",gap:"sm",children:[o(h,{gap:"lg",children:e.stats.map(t=>o(Pe,{title:t.title,value:t.value,suffix:t.suffix}))}),e.statsNote&&o(q,{type:"muted",children:e.statsNote})]}),o(h,{direction:"column",gap:"sm",children:e.about.map(t=>o(C,{children:t}))}),s(h,{direction:"column",children:[o(k,{level:2,children:"What it does"}),o(Z,{minColumnWidth:"18em",children:e.features.map(t=>o(U,{header:t.title,children:o(C,{children:t.text})}))})]}),e.samples.length>0&&s(h,{direction:"column",children:[o(k,{level:2,children:"See it in action"}),e.samples.map(qt)]}),s(h,{direction:"column",children:[o(k,{level:2,children:"Get started"}),qt(e.install)]}),e.resources&&s(h,{direction:"column",children:[o(k,{level:2,children:"Demos and examples"}),o(Z,{minColumnWidth:"22em",children:e.resources.map(lo)})]}),s(h,{direction:"column",children:[o(k,{level:2,children:"Links"}),o(h,{children:e.links.map(t=>o(m,{to:t.to,children:t.label}))})]}),s(h,{direction:"column",children:[o(k,{level:2,children:"Other projects"}),o(h,{children:Ke.filter(t=>t!==e).map(t=>o(m,{to:We(t),children:t.name}))})]})]});Ne.injectStyles();var Wt=document.body.dataset.page,Yt=Wt?qe.get(Wt):void 0;Oe(s("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[no(),o("main",{style:{maxWidth:"60rem",margin:"0 auto",padding:"2rem 1rem 4rem"},children:s(h,{direction:"column",gap:"lg",children:[Yt?co(Yt):so(),io()]})})]}),document.getElementById("app"));
