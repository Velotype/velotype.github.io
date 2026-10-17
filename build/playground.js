var oe=console.warn.bind(console,"vt:"),N=console.error.bind(console,"vt:"),no=pt("span","display:contents;"),dt=pt("div","display:contents;"),Pt=pt("div","display:none;");var Ne={value:void 0,writable:!1,configurable:!1,enumerable:!1},ct=new Map,ht=new Map,Rt=/[A-Z]/g,O=new Map,E=Symbol(),ut=Symbol(),je=Symbol(),W=new Map,we=new Map,Be=new Map,g={k:1,r:0,p:void 0,s:void 0},Ht={version:"0.3.1",domKeyProperty:E,domReferences:O,listenersF:W,listenersR:we,styleSectionMounted:Be};function pt(e,t){let r=document.createElement(e);return r.style.cssText=t,r}function io(){let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,r=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(o){return t.set(r,o),r++},unregister(o){t.delete(o)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(Ht)}io();function R(e){return e instanceof HTMLElement}function Pe(e){return e instanceof SVGSVGElement}function Re(e){return e instanceof MathMLElement}function He(e){return e instanceof Text}function he(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function Ft(e,t,r){Ne.value=r,Object.defineProperty(e,t,Ne),Ne.value=void 0}function q(){return Pt.cloneNode()}function _t(e){Promise.resolve().then(e)}function mt(e,t,r){let o=t.nextSibling;o===r?e.insertBefore(r,t):(e.insertBefore(t,r),e.insertBefore(r,o))}function Y(e){typeof reportError=="function"?reportError(e):N(e)}var ue=class{constructor(t,r,o){this.emittingObject=t,this.event=r,this.data=o}};function Fe(e,t,r){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");Kt(W,t,e.vtKey,r),Kt(we,e.vtKey,t,r)}function Kt(e,t,r,o){let n=e.get(t);n||(n=new Map,e.set(t,n));let i=n.get(r);i?i.push(o):n.set(r,[o])}function ke(e){let t=we.get(e.vtKey);t&&t.forEach((r,o)=>{Ut(W,o,e.vtKey),Ut(we,e.vtKey,o)})}function Ut(e,t,r,o){let n=e.get(t);if(n){let i=n.get(r);if(i){if(g.r++,o){let a=i.indexOf(o);if(a<0){oe("Listener not registered",t,r);return}i=i.slice(),i.splice(a,1),n.set(r,i)}(!o||i.length<=0)&&(n.delete(r),n.size<=0&&e.delete(t))}else oe("No listeners to remove",t,r)}else oe("No listeners to remove",t,r)}function Wt(e,t,r){let o=W.get(e),n=o&&o.get(t);return!!n&&n.includes(r)}function _e(e,t,r){let o=W.get(e);o?o.forEach((n,i)=>{if(!r||r.vtKey!=i){let a=g.r;n.forEach(u=>{if(a!==g.r){let c=o.get(i);if(c!==n&&!(c&&c.includes(u)))return}try{u(t)}catch(c){Y(c)}})}}):oe("No listeners for event",e,t)}function G(e,t){e[E]=t}function ne(e){return O.get(e)}function ie(e,t){let r=g.k++;return t&&G(t,r),O.set(r,e),r}function pe(e){O.delete(e)}function se(e){O.delete(e.vtKey),ke(e)}function H(e){for(let t=e;t<g.k;t++){let r=O.get(t);r&&(X(r)?(ke(r.c),O.delete(t),Se(r.c)):r.vtKey===t||!r.uK?(se(r),O.delete(t)):r.uK(t))}}function ft(e){return e instanceof Ce}var Ce=class{constructor(t){this.w=t,this.k=ie(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),se(t)})}};function d(e,t){if(t.id&&bt(e,"id",t.id),t.class){let r=e.getAttribute("class");bt(e,"class",r?r+" "+t.class:t.class)}return t.style&&ae(e,{style:t.style}),e}function Yt(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return vt(e,t);let r=Object.getPrototypeOf(e),o=r===g.p?g.s:ht.get(r);o||(o=new Map,ht.set(r,o)),g.p=r,g.s=o;let n=o.get(t);return n===void 0&&(n=vt(r,t),o.set(t,n)),n}function vt(e,t){let r=e;for(;r;){let o=Object.getOwnPropertyDescriptor(r,t);if(o&&(o.set||o.writable))return!0;r=Object.getPrototypeOf(r)}return!1}function bt(e,t,r){Yt(e,t)?e[t]=r:e.setAttribute(t,r.toString())}function so(e,t,r){Yt(e,t)?e[t]=r:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(r)):r&&e.setAttribute(t,"")}function ao(e){if(e.startsWith("--"))return e;let t=e.replace(Rt,r=>"-"+r.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function ae(e,t){if(!t)return;let r=t.type=="range",o=Object.keys(t);for(let n=0;n<o.length;n++){let i=o[n];(!r||i!="value")&&qt(e,i,t[i])}r&&qt(e,"value",t.value)}function qt(e,t,r){if(t.startsWith("on")&&t.length>4){if(r){let o,n=r;typeof r!="function"&&r.handler&&(n=r.handler,o=r.options);let i=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(i,n,o)}}else if(t=="style"&&r instanceof Object)for(let o of Object.keys(r)){let n=r[o]==null?"":r[o],i=typeof n=="number"?n.toString():n,a=e.style;if(i.endsWith("!important"))a.setProperty(ao(o),i.slice(0,-10),"important");else{let u=ct.get(o);u===void 0&&(u=vt(a,o),ct.set(o,u)),u?a[o]=i:a.setProperty(o,i)}}else if(typeof r=="boolean")so(e,t,r);else if(typeof r!="function")if(t=="vtwith"){let o=e[E];if(o)N("vtwith on a keyed element",o);else{let n=new Ce(r);G(e,n.k)}}else(r||r=="")&&bt(e,t,r)}function F(e,t,...r){if(typeof e=="string"){let n=document.createElement(e);return Ke(e=="template"?n.content:n,r),ae(n,t),n}let o=t||{};if(le(e.prototype)){let n=g.k;try{return new Ee(new e(o,r),o,r).e}catch(i){throw H(n),i}}else if(typeof e=="function"){let n=g.k,i;try{i=e(o,r)}catch(a){throw H(n),a}return he(i)||Array.isArray(i)?i:J(i)}return N("Invalid tag",e,o,r),q()}function Ue(e){if(he(e)&&e!==!1||He(e))return F("span",null,e);if(e)return Z(e)}function lo(e){if(he(e)&&e!==!1)return document.createTextNode(e.toString());if(R(e))return e;if(He(e))return e;if(e)return Z(e)}function Z(e){if(R(e)||Pe(e)||Re(e))return e;if(me(e))return e.rD();if(le(e)){let t=ne(e.vtKey);if(t&&X(t))return t.e}return N("Invalid child"),q()}function Ke(e,t){if(Array.isArray(t))for(let r=0;r<t.length;r++)Ke(e,t[r]);else{let r=lo(t);r&&e.appendChild(r)}}function J(e){if(e==null||e===!1||e==="")return q();if(he(e)||le(e)||me(e)||He(e)||Array.isArray(e)||e[E]!==void 0){let t=dt.cloneNode();return Ke(t,e),t}return e}function me(e){return e instanceof j}function Gt(e){try{e()}catch(t){Y(t)}}var Q=class{constructor(t,r){this.result=t,this.updateRefs=r}};function Xt(e,t,r){Te(e.e,t),e.e=t,e.uR=r}var j=class{#e;#r;#o;es=new Map;vtKey=ie(this);#t=`vt-ro-${this.vtKey}`;#n;#i;#s=!1;#a(){_e(this.#t,new ue(this,"onChange"))}constructor(t,r,o){this.#e=t,this.#r=r||q,this.#o=o}registerOnChangeListener(t,r){let o=r&&r.hasVtKey||this,n=this.#t,i=r&&r.eventDispatchDelay||0,a=0,u=i>0?c=>{a||(a=setTimeout(()=>{a=0,Wt(n,o.vtKey,u)&&t(c)},i))}:t;return Fe(o,n,u),r&&r.triggerOnRegistration&&_t(()=>{this.#a()}),this}registerOnMount(t,r){return t&&(this.#n||(this.#n=[]),this.#n.push(t)),r&&(this.#i||(this.#i=[]),this.#i.push(r)),this}mount(){this.#s||(this.#s=!0,this.#n&&this.#n.forEach(Gt))}unmount(){this.#s&&(this.#s=!1,this.#i&&this.#i.forEach(Gt))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let r=this.#e,o=[],n=[];this.es.forEach((i,a)=>{if(i.hU&&i.uR)n.push(i);else{let u=i.rF(t,this),c=u instanceof Q,p=J(Ue(c?u.result:u));G(p,a),o.push({i,e:p,r:c?u.updateRefs:void 0})}}),n.forEach(i=>{i.hU(i.e,i.uR,r,t)}),o.forEach(i=>{Xt(i.i,i.e,i.r)})}rerenderElements(t){let r=g.k;try{this.es.size>1?this.#l(t):this.es.forEach((o,n)=>{if(o.hU&&o.uR)o.hU(o.e,o.uR,this.#e,t);else{let i=o.rF(t,this),a=i instanceof Q,u=J(Ue(a?i.result:i));G(u,n),Xt(o,u,a?i.updateRefs:void 0)}})}catch(o){throw H(r),o}this.#e=t,W.has(this.#t)&&this.#a()}uK(t){let r=this.es.get(t);if(r){let o=r.e[E];return t===o?(this.es.delete(t),pe(t),!0):(N("Invalid state",t,o,r),!1)}else return N("Invalid unmountKey",t),!1}rD(){return this.render(this.#r,this.#o)}render(t,r){let o=t(this.#e,this),n=o instanceof Q,i=J(Ue(n?o.result:o)),a=ie(this,i);return this.es.set(a,{e:i,rF:t,hU:r,uR:n?o.updateRefs:o}),i}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(r=>{let o=r.e,n=o.parentNode;n&&t.es.forEach(i=>{i.e.parentNode===n&&mt(n,o,i.e)})})}ei(t){let r=null;return this.es.forEach(o=>{o.e.parentNode===t&&(r=o.e)}),r}removeAll(){this.es.forEach((t,r)=>{We(t.e),pe(r)}),this.es.clear()}};function Te(e,t,r){let o=document.activeElement==e&&document.hasFocus();return r?rr(e):R(e)&&wt(e),e.replaceWith(t),r?qe(t):R(t)&&xt(t),o&&t.focus(),t}function gt(e,t){e.appendChild(t),qe(t)}function Jt(e,t){e.prepend(t),qe(t)}function Zt(e,t){wt(e),e.replaceChildren(...t),xt(e)}function We(e){rr(e),e.remove()}function yt(e,t,r){if(R(e)||Pe(e)||Re(e)){let o=e.firstElementChild;for(;o;){yt(o,t,r);let n=o[E];if(n){let i=ne(n);i?t(i,n):r&&Qt(o)}o=o.nextElementSibling}}}function Qt(e){oe("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function er(e,t){if(X(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(r){Y(r)}Object.values(e.c).forEach(r=>{me(r)&&r.mount()})}else ft(e),e.mount()}function qe(e){if(!e.isConnected)return;R(e)&&xt(e);let t=e[E];if(t){let r=ne(t);r?er(r,t):Qt(e)}}function xt(e){e.isConnected&&yt(e,er,!0)}function tr(e,t){if(X(e)){if(ke(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(r){Y(r)}}Object.values(e.c).forEach(r=>{me(r)?(r.unmount(),se(r)):le(r)&&(se(r),Se(r))}),pe(e.k),Se(e.c)}else ft(e)?(e.unmount(),pe(e.k)):e.uK(t)}function wt(e){yt(e,tr)}function rr(e){R(e)&&wt(e);let t=e[E];if(t){let r=ne(t);r&&tr(r,t)}}function Ye(e,t){return t===null?null:(t.replaceWith(e),qe(e),e)}function X(e){return e instanceof Ee}function le(e){return e instanceof v}function co(e){return e[ut]}function fe(e,t){let r=co(e),o=r.b||(r.b={});return o[t]||(o[t]=r[t].bind(r))}var v=class{constructor(t,r){this.attrs=t,this.children=r}mount(){}unmount(){}get refresh(){return fe(this,"f")}get unmountSignal(){let t=this[je];return t||(t=new AbortController,this[je]=t,this.vtKey!==void 0&&!O.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return fe(this,"q")}get appendToChild(){return fe(this,"w")}get prependToChild(){return fe(this,"t")}get replaceChildrenOfChild(){return fe(this,"y")}get removeChild(){return fe(this,"u")}},Ee=class{constructor(t,r,o){this.c=t,this.a=r,this.h=o,this.k=ie(this),Ft(t,"vtKey",this.k),t[ut]=this,this.e=or(this,this.a,this.h)}m=!1;f(){let t=g.k,r;try{r=or(this,this.a,this.h)}catch(o){throw H(t),o}this.e=Te(this.e,r)}q(t,r){return this.e.contains(t)?Te(t,Z(r),!0):t}w(t,r){return this.e.contains(t)?(gt(t,Z(r)),!0):!1}t(t,r){return this.e.contains(t)?(Jt(t,Z(r)),!0):!1}y(t,r){return this.e.contains(t)?(Zt(t,r.map(o=>Z(o))),!0):!1}u(t){return this.e.contains(t)?(We(t),!0):!1}};function or(e,t,r){let o=J(e.c.render(t,r));return G(o,e.k),o}function Se(e){let t=e[je];t&&t.abort()}function de(e,t,r=!1){let o=Be.get(t),n=document.adoptedStyleSheets;if(o){if(!r)return;let a=n.indexOf(o.sheet);a>=0&&n.splice(a,1)}let i=new CSSStyleSheet;i.replace(e),n.push(i),Be.set(t,{sheet:i,text:e,key:t})}function f(e,t,r){let o;return"children"in t&&({children:o,...t}=t),r!==void 0&&(t.key=r),F(e,t,o)}var w=f;function s(e,t,...r){return F(e,t,...r)}var Eo="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",ir=!1;function h(e,t,r="component",o=!1){ir||(ir=!0,de(Eo,"vtd/LayerOrder"),To()),de(`@layer velodesign.${r}{${e}}`,t,o)}function To(){de(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var sr=!1,Xe=function(e,t){sr||(sr=!0,h(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let r=e.size||"1em";return d(s("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:r,height:r}}),e)};var Ao=Symbol("velodesign.clearThemeOptionOverrides");function b(e,t){let r={},o=new Map,n=new Map;for(let[i,a]of Object.entries(e))n.set(i,function(){return S[a]});for(let[i,a]of Object.entries(t??{}))n.set(i,function(){return a});for(let i of n.keys())Object.defineProperty(r,i,{enumerable:!0,get:function(){return o.has(i)?o.get(i):n.get(i)()},set:function(a){a==null?o.delete(i):o.set(i,a)}});return Object.defineProperty(r,Ao,{value:function(){o.clear()}}),r}var S=b({},{closeSymbol:function(){return"\u2715"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var lr=b({},{loadingSymbol:function(){return s(Xe,{size:"1em"})}}),ar=!1,A=function(e,t){ar||(ar=!0,h(`
.vtd-button{
position:relative;
padding:0.25rem 0.5rem;

min-width:24px;
min-height:24px;
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

.vtd-button-spinner{
position:absolute;
top:50%;
left:50%;
transform:translate3d(-50%, -50%, 0);
display:inline-block;
visibility:hidden;
}
`,"vtd/Button"));let r=!1,o;e.loadingOnClick&&(o=s("span",{class:"vtd-button-spinner"},s(lr.loadingSymbol,null)));let n=s("span",null,t);return d(s("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:i=>{e.loadingOnClick&&r||e.onClick&&(e.loadingOnClick?(r=!0,o&&(o.style.visibility="visible"),n.style.visibility="hidden",e.onClick(i,()=>{r=!1,e.loadingOnClick&&o&&(o.style.visibility="hidden"),n.style.visibility="visible"})):e.onClick(i))}},n,o),e)};var dr=console.log,cr=console.error,Je=function(e,t,r){e.setAttribute(t,r)};var hr=new Map,Do=!1;setTimeout(()=>{hr.entries().forEach(([e,t])=>{dr(t)}),Do=!0},1e3);var B="#fff",_="#000",ur="#050505",Oo=B,Lo=_,zo="#66b2ff",Io="#c6ff9e",$o="#ffd666",Vo="#ff6666",pr="#fafafa",No="#151515",jo=B,Bo="#004c99",Po="#286100",Ro="#997000",Ho="#990000",kt=":color-mix(in hsl,",Fo=[-8,-6,-4,-2,0,2,4,6,8],ee=(e,t,r,o)=>Fo.map(n=>n<0?`--${e}-${n/2+5}${kt}${t} ${-1*n}0%,${r} ${10+n}0%)`:n==0?`--${e}-5:${r};--${e}:${r}`:`--${e}-${n/2+5}${kt}${r} ${10-n}0%,${o} ${n}0%)`).join(";")+";",_o=[1,2,3,4,5,6,7,8,9],mr=(e,t,r)=>_o.map(o=>`--${e}-${o}${kt}${t} ${10-o}0%,${r} ${o}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${r};`,fr=(e,t,r)=>`--${e}:${t};--${e}-alt:${r};`,vr=function(e){Je(document.getElementsByTagName("html")[0],"data-theme",e)},Ze="vtd-preferred-theme",te="light",ve="dark",br="default",Ae=te,St={getColorScheme:function(){return Ae},getColorSchemePreference:function(){let e=localStorage.getItem(Ze);return e==ve?ve:e==te?te:br},setColorScheme:function(e){localStorage.setItem(Ze,e),St.resetColorScheme()},resetColorScheme:function(){let e=localStorage.getItem(Ze);e==ve?Ae=ve:e==te?Ae=te:(e&&e!=br&&localStorage.removeItem(Ze),Ae=globalThis.matchMedia("(prefers-color-scheme: light)").matches?te:ve),Ae==te?vr(te):vr(ve)}};function gr(e,t,r=!1){h(`
${e}[data-theme="light"]{
${fr("text",t?.textLightColor||ur,t?.textDarkColor||pr)}
${mr("background",t?.backgroundLightColor||Oo,t?.backgroundLightAltColor||Lo)}
${ee("primary",B,t?.primaryLightColor||zo,_)}
${ee("secondary",B,t?.secondaryLightColor||Io,_)}
${ee("warning",B,t?.warningLightColor||$o,_)}
${ee("accent",B,t?.accentLightColor||Vo,_)}
color-scheme:light;}
${e}[data-theme="dark"]{
${fr("text",t?.textDarkColor||pr,t?.textLightColor||ur)}
${mr("background",t?.backgroundDarkColor||No,t?.backgroundDarkAltColor||jo)}
${ee("primary",_,t?.primaryDarkColor||Bo,B)}
${ee("secondary",_,t?.secondaryDarkColor||Po,B)}
${ee("warning",_,t?.warningDarkColor||Ro,B)}
${ee("accent",_,t?.accentDarkColor||Ho,B)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",r)}var Ct={injectStyles(e,t=!0){t&&h(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),gr(":root",e),globalThis.setTimeout(function(){h("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),St.resetColorScheme()}};var K="",T={configureBasePath:function(e){let t=e.replace(/\/+$/,"");K=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return K?e==K?"/":e.startsWith(`${K}/`)?e.slice(K.length):e:e},resolveHref:function(e){return!K||!e.startsWith("/")||e==K||e.startsWith(`${K}/`)?e:`${K}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",T.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){cr(t),T.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=T.resolveHref(e)}};var L=function(e,t){let r=e.spa??!1;return d(s("a",{class:"vtd-link",href:T.resolveHref(e.to),onClick:r?o=>{o.preventDefault(),T.changeLocation(e.to)}:void 0},t),e)};var Ko=b({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var Uo=b({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var yr=!1,Qe=function(e,t){return yr||(yr=!0,h(`
.vtd-textarea{
padding:0.5ex 1ex;
margin-inline-start:1ex;
border-radius:0.25rem;
border:1px solid var(--background-5);
background-color:var(--background-1);
color:var(--text);
font:inherit;
}
`,"vtd/Textarea")),d(s("textarea",{class:"vtd-textarea",name:e.name,value:e.value,rows:e.rows||3,maxlength:e.maxLength,onInput:e.onInput,onChange:e.onChange,placeholder:e.placeholder,required:e.required,style:{resize:e.resize||"vertical"}}),e)};var xr=!1,Me=function(e,t){return xr||(xr=!0,h(`
.vtd-select-wrapper{
position:relative;
display:inline-block;
}
.vtd-select{
appearance:none;
padding:0.5ex 2em 0.5ex 1ex;
margin-inline-start:1ex;
border-radius:0.25rem;
border:1px solid var(--background-5);
background-color:var(--background-1);
color:var(--text);
font:inherit;
cursor:pointer;
}
.vtd-select:disabled{cursor:not-allowed;opacity:0.6;}
.vtd-select-chevron{
position:absolute;
top:50%;
right:0.75em;
width:0.6em;
height:0.6em;
margin-inline-start:-1ex;
border:solid var(--text);
border-width:0 0.12em 0.12em 0;
transform:translateY(-70%) rotate(45deg);
pointer-events:none;
}
`,"vtd/Select")),d(s("span",{class:"vtd-select-wrapper"},s("select",{class:"vtd-select",name:e.name,value:e.value,disabled:e.disabled,required:e.required,onChange:e.onChange},e.placeholder&&s("option",{value:"",disabled:e.placeholderDisabled,selected:!e.value},e.placeholder),e.options.map(r=>s("option",{value:r.value,disabled:r.disabled,selected:r.value==e.value},r.label))),s("span",{class:"vtd-select-chevron"})),e)};var wr=!1,et=function(e,t){return wr||(wr=!0,h(`
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
background-color:var(--background-2);
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
background-color:var(--background-2);
border-block-start:1px solid var(--background-4);
}
`,"vtd/Card")),d(s("div",{class:"vtd-card"},e.header&&s("div",{class:"vtd-card-header"},e.header),s("div",{class:"vtd-card-body"},t),e.footer&&s("div",{class:"vtd-card-footer"},e.footer)),e)};var kr=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),Wo=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),qo=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function Yo(e,t){if(t=="plain")return[{kind:"",text:e}];let r=t=="css"?qo:Wo,o=t!="css",n=[],i=0;r.lastIndex=0;let a=0,u=!1,c=0,p=()=>o&&a>0&&!u&&c==0,m;for(;(m=r.exec(e))!==null;){m.index>i&&n.push({kind:"",text:e.slice(i,m.index)});let C=m.groups??{},$=m[0],V=C.closeTag??C.openTag;if(V!==void 0&&!x(m.index,C.closeTag!==void 0))n.push({kind:"punct",text:"<"}),n.push({kind:!p()&&kr.has(V)?"keyword":"",text:V});else if(V!==void 0){let P=C.closeTag!==void 0;o&&(a=Math.max(0,a+(P?-1:1)),u=!0),n.push({kind:"punct",text:P?"</":"<"}),n.push({kind:"tag",text:V})}else if(C.word!==void 0){let P=!p()&&kr.has(C.word);n.push({kind:P?"keyword":"",text:C.word})}else{let P=["comment","string","number","attr","punct"].find(oo=>C[oo]!==void 0),ro=p()&&(P=="string"||P=="number");n.push({kind:ro?"":P??"",text:$}),o&&P=="punct"&&k($)}i=m.index+$.length}return i<e.length&&n.push({kind:"",text:e.slice(i)}),n;function x(C,$){if($||!o||p())return!0;let V=C>0?e[C-1]??"":"";return!/[\w$)\]]/.test(V)}function k(C){for(let $=0;$<C.length;$++){let V=C[$];V=="{"?c++:V=="}"?c=Math.max(0,c-1):V==">"&&u&&c==0&&($>0&&C[$-1]=="/"&&(a=Math.max(0,a-1)),u=!1)}}}var Sr=!1,Tt=function(e){let t=e.language??"tsx",r=Yo(e.code,t);Sr||(Sr=!0,h(`
.vtd-code-block{
width:100%;
box-sizing:border-box;
margin:0;
padding:1em;
border:1px solid var(--background-4);
border-radius:0.5rem;
background-color:var(--background-1);

overflow-x:auto;
font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
font-size:0.85em;
line-height:1.6;
tab-size:4;
}
.vtd-code-block-wrap{white-space:pre-wrap;overflow-wrap:break-word;}
.vtd-code-block code{font:inherit;background:none;padding:0;border-radius:0;}


.vtd-code-block-comment{color:var(--background-6);font-style:italic;}
.vtd-code-block-string{color:var(--secondary-8);}
.vtd-code-block-keyword{color:var(--primary-8);}
.vtd-code-block-tag{color:var(--accent-8);}
.vtd-code-block-attr{color:var(--warning-8);}
.vtd-code-block-number{color:var(--secondary-8);}
.vtd-code-block-punct{color:var(--background-7);}

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

.vtd-code-block-numbered.vtd-code-block-wrap .vtd-code-block-line{padding-inline-start:3.5em;text-indent:-3.5em;}
`,"vtd/CodeBlock"));let o=["vtd-code-block"];return e.wrap&&o.push("vtd-code-block-wrap"),e.showLineNumbers&&o.push("vtd-code-block-numbered"),d(s("pre",{class:o.join(" "),"aria-label":e.ariaLabel},s("code",null,e.showLineNumbers?Go(r):Cr(r))),e)};function Cr(e){return e.map(t=>t.kind?s("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function Go(e){let t=[[]];for(let r of e)r.text.split(`
`).forEach((n,i)=>{i>0&&t.push([]),n.length>0&&t[t.length-1].push({kind:r.kind,text:n})});return t.map(r=>s("span",{class:"vtd-code-block-line"},Cr(r)))}var Xo=b({closeSymbol:"closeSymbol"});var Tr=b({confirmSymbol:"confirmSymbol"}),Er=!1,be=class extends v{#e;#r;#o(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open"))r!=t&&(r.classList.remove("vtd-menu-entry-open"),r.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#n=[];#i=()=>{if(this.#e.open)for(let t of this.#n)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#s;#a=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#r.focus()};#l=t=>{this.#s.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#a())};#h=t=>{let r=document.activeElement,o=r?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),o){this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus();return}this.#a(!0);return}if(!this.#e.open)return;let n=this.#o();if(n.length==0)return;let i=n.indexOf(r);if(t.key=="ArrowDown")t.preventDefault(),n[(i+1)%n.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),n[(i-1+n.length)%n.length]?.focus();else if(t.key=="Home")t.preventDefault(),n[0]?.focus();else if(t.key=="End")t.preventDefault(),n[n.length-1]?.focus();else if(t.key=="ArrowRight"){let a=r?.closest(".vtd-menu-entry");r?.classList.contains("vtd-menu-item-parent")&&a&&(t.preventDefault(),this.#d(a),a.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&o&&(t.preventDefault(),this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus())};#u(t){let r=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let o of r?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])o.setAttribute("aria-checked",o==t?"true":"false")}#d(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true")}mount(){document.addEventListener("click",this.#l)}unmount(){document.removeEventListener("click",this.#l)}#c(t){return t.map((r,o)=>{let n=r.dividerBefore&&o>0?" vtd-menu-entry-divided":"";if(r.children&&r.children.length>0){let m=s("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${r.disabled?" vtd-menu-item-disabled":""}`},r.label),x=s("li",{class:`vtd-menu-entry vtd-menu-entry-parent${n}`,role:"none"},m,s("ul",{class:"vtd-menu-sublist",role:"menu"},this.#c(r.children)));return x.addEventListener("pointerenter",()=>{this.#d(x)}),m.addEventListener("click",k=>{k.preventDefault(),x.classList.contains("vtd-menu-entry-open")?this.#t():this.#d(x)}),x}let i=r.selected!==void 0,a=typeof r.selected=="function"?r.selected:void 0,u=a?a():r.selected===!0,c=s("a",{role:i?"menuitemradio":"menuitem","aria-checked":i?u?"true":"false":void 0,href:r.href?T.resolveHref(r.href):"#","aria-disabled":r.disabled,class:`vtd-menu-item${i?" vtd-menu-item-checkable":""}${r.disabled?" vtd-menu-item-disabled":""}`,onClick:m=>{if(r.disabled){m.preventDefault();return}r.href?r.spa&&(m.preventDefault(),T.changeLocation(r.href)):m.preventDefault(),i&&this.#u(c),r.onClick?.(),!r.keepOpen&&(this.#t(),this.#a())}},i?s("span",{class:"vtd-menu-check","aria-hidden":"true"},s(Tr.confirmSymbol,null)):null,r.label);a&&this.#n.push({row:c,read:a});let p=s("li",{class:`vtd-menu-entry${n}`,role:"none"},c);return p.addEventListener("pointerenter",()=>{this.#t(p.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),p})}constructor(t,r){super(t,r),this.#s=t,Er||(Er=!0,h(`
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

.vtd-menu-item:focus-visible{background-color:var(--primary-3);outline:none;}
.vtd-menu-item-disabled{opacity:0.5;cursor:not-allowed;pointer-events:none;}

.vtd-menu-item-checkable{display:flex;align-items:center;gap:0.4em;}
.vtd-menu-check{
display:inline-flex;
align-items:center;
justify-content:center;
flex-shrink:0;
width:1em;
opacity:0;
color:var(--primary);
}
.vtd-menu-item-checkable[aria-checked="true"]{font-weight:bold;}
.vtd-menu-item-checkable[aria-checked="true"] .vtd-menu-check{opacity:1;}

.vtd-menu-entry{position:relative;}

.vtd-menu-entry-divided{
margin-block-start:0.3em;
padding-block-start:0.3em;
border-block-start:1px solid var(--background-4);
}

.vtd-menu-item-parent{cursor:pointer;display:flex;align-items:center;gap:0.5em;}

.vtd-menu-item-parent::after{
content:"";
margin-inline-start:auto;
width:0.4em;
height:0.4em;
border:solid currentcolor;
border-width:0.1em 0.1em 0 0;
transform:rotate(45deg);
flex-shrink:0;
}
.vtd-menu-sublist{
display:none;
position:absolute;
inset-inline-start:100%;
top:-0.25em;
min-width:10em;
padding:0.25em;
margin:0;
list-style:none;
background-color:var(--background-1);
border:1px solid var(--background-4);
border-radius:0.25rem;
box-shadow:0 2px 8px rgba(0,0,0,0.15);
}

.vtd-menu-entry-open > .vtd-menu-sublist{display:block;}
.vtd-menu-entry-open > .vtd-menu-item-parent{background-color:var(--background-2);}
`,"vtd/Menu")),this.#r=s("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#e=s("details",{class:"vtd-menu",onToggle:this.#i,onKeyDown:this.#h},this.#r,s("ul",{class:"vtd-menu-list",role:"menu"},this.#c(t.items))),d(this.#e,t)}render(){return this.#e}};var Dr=b({collapseSymbol:"collapseSymbol"}),Ar=!1,Mr=3;function Jo(e,t){if(t===void 0||e.length<=Math.max(t,Mr))return{head:e,collapsed:[],tail:[]};let o=Math.max(t,Mr)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-o),tail:e.slice(e.length-o)}}var At=function(e,t){Ar||(Ar=!0,h(`
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

.vtd-breadcrumbs-item a{color:inherit;display:inline-flex;align-items:center;min-height:24px;}
.vtd-breadcrumbs-item[aria-current="page"]{font-weight:bold;}
.vtd-breadcrumbs-separator{
margin-inline:0.5em;
color:var(--background-6);
}

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
`,"vtd/Breadcrumbs"));let{head:r,collapsed:o,tail:n}=Jo(e.items,e.maxItems),i=e.separator||"/",a=p=>p.leading?s("span",{class:"vtd-breadcrumbs-crumb"},s("span",{class:"vtd-breadcrumbs-leading"},p.leading),p.label):p.label,u=(p,m)=>s("li",{class:"vtd-breadcrumbs-item","aria-current":p.to?void 0:"page"},p.to?s(L,{to:p.to,spa:e.spa},a(p)):s("span",null,a(p)),m?null:s("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)),c=o.length>0?s("li",{class:"vtd-breadcrumbs-item"},s(be,{ariaLabel:e.expandLabel,trigger:s("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||s(Dr.collapseSymbol,null)),items:o.map(p=>({label:a(p),href:p.to,spa:e.spa}))}),s("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)):null;return d(s("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},s("ol",{class:"vtd-breadcrumbs-list"},r.map((p,m)=>u(p,o.length==0&&m==r.length-1)),c,n.map((p,m)=>u(p,m==n.length-1)))),e)};var Zo=b({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var Or=!1,De=class extends v{#e;#r;#o;#t=()=>{let t=this.#o.sidebar?.get();!this.#r||!t||(this.#r.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#r.setAttribute("aria-expanded",t.open?"true":"false"),this.#r.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,r){if(super(t,r),this.#o=t,Qo(),t.sidebar){let o=t.sidebar;this.#r=s("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let n=o.get();o.set({...n,open:!n.open})}},s("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"}))}this.#e=d(s("nav",{class:"vtd-navbar"},s("div",{class:"vtd-navbar-start"},this.#r??null,t.brand?s("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?s("div",{class:"vtd-navbar-leading"},t.leading):null),s("div",{class:"vtd-navbar-items"},r)),t)}mount(){this.#o.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function Qo(){Or||(Or=!0,h(`
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

.vtd-navbar-menu{
display:inline-flex;
align-items:center;
justify-content:center;
min-width:24px;
min-height:24px;
padding:0.25em;
background:transparent;
border:1px solid transparent;
border-radius:0.25rem;
cursor:pointer;
color:inherit;
}
.vtd-navbar-menu:hover{background-color:var(--background-2);}

.vtd-navbar-menu{
overflow:hidden;
opacity:1;
max-width:3em;
transition:opacity 0.18s ease-in-out, max-width 0.18s ease-in-out, min-width 0.18s ease-in-out, margin-inline-end 0.18s ease-in-out, padding 0.18s ease-in-out, visibility 0s linear 0s;
}
.vtd-navbar-menu-collapsed{
opacity:0;
max-width:0;

min-width:0;
min-height:0;
padding-inline:0;
border-inline-width:0;
margin-inline-end:-1em;
visibility:hidden;
transition:opacity 0.18s ease-in-out, max-width 0.18s ease-in-out, min-width 0.18s ease-in-out, margin-inline-end 0.18s ease-in-out, padding 0.18s ease-in-out, visibility 0s linear 0.18s;
}
@media (prefers-reduced-motion: reduce){
.vtd-navbar-menu,.vtd-navbar-menu-collapsed{transition:none;}
}
.vtd-navbar-menu-icon{
position:relative;
display:block;
width:1.1em;
height:2px;
background-color:currentcolor;
}
.vtd-navbar-menu-icon::before,.vtd-navbar-menu-icon::after{
content:"";
position:absolute;
left:0;
width:100%;
height:2px;
background-color:currentcolor;
}
.vtd-navbar-menu-icon::before{top:-0.35em;}
.vtd-navbar-menu-icon::after{top:0.35em;}
`,"vtd/Navbar"))}var Ir=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",Md=`.vtd-sidebar-collapsed:not(${Ir})`,Dd=`.vtd-sidebar-collapsed:is(${Ir})`;var rn=b({closeSymbol:"closeSymbol"});var nn=b({closeSymbol:"closeSymbol"});var sn=b({},{emptySymbol:function(){return s("span",{class:"vtd-empty-icon","aria-hidden":"true"},s(S.emptySymbol,null))}});var $r=!1,Oe=function(e,t){return $r||($r=!0,h(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),d(s("div",{class:"vtd-statistic"},s("div",{class:"vtd-statistic-title"},e.title),s("div",{class:"vtd-statistic-value"},e.prefix&&s("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&s("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var an=b({closeSymbol:"closeSymbol"});var ln=b({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Ot=b({},{columnsSymbol:function(){return s("span",{"aria-hidden":"true"},"\u25A5")},emptySymbol:function(){return s("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},s(S.emptySymbol,null))}});var Nr=!1;function ge(){Nr||(Nr=!0,h(`
.vtd-text-muted{color:var(--background-6);}
.vtd-text-primary{color:var(--primary);}
.vtd-text-secondary{color:var(--secondary);}
.vtd-text-warning{color:var(--warning);}
.vtd-text-danger{color:var(--accent);}

.vtd-heading{
margin-block:0.6em 0.4em;
line-height:1.25;

text-wrap:balance;
}

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

.vtd-text-numeric{font-variant-numeric:tabular-nums;}
.vtd-text-code{
font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
font-size:0.9em;
background-color:var(--background-1);
padding:0.1em 0.35em;
border-radius:0.2rem;
}
`,"vtd/Typography","base"))}function ye(e,t,r){let o=[e];return t&&o.push(`vtd-text-${t}`),r?.strong&&o.push("vtd-text-strong"),r?.italic&&o.push("vtd-text-italic"),r?.underline&&o.push("vtd-text-underline"),r?.strike&&o.push("vtd-text-strike"),r?.numeric&&o.push("vtd-text-numeric"),o.join(" ")}var Le=function(e,t){ge();let r=ye(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return d(s("h1",{class:r},t),e);case 2:return d(s("h2",{class:r},t),e);case 3:return d(s("h3",{class:r},t),e);case 4:return d(s("h4",{class:r},t),e);case 5:return d(s("h5",{class:r},t),e);default:return d(s("h6",{class:r},t),e)}};var re=function(e,t){ge();let r=ye(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?d(s("code",{class:r},t),e):d(s("span",{class:r},t),e)};var Lt=function(e,t){return ge(),d(s("p",{class:ye("vtd-paragraph",e.type)},t),e)};var zt={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function tt(e,t="md"){return e===void 0?zt[t]:gn(e)?zt[e]:e}function gn(e){return Object.hasOwn(zt,e)}function rt(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function jr(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var Br=!1,z=function(e,t){Br||(Br=!0,h(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let r=e.direction??"row";return d(s("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:r,gap:tt(e.gap),alignItems:rt(e.align),justifyContent:jr(e.justify),flexWrap:e.wrap??r==="row"?"wrap":"nowrap"}},t),e)};var Pr=!1,It=function(e,t){Pr||(Pr=!0,h(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let r=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return d(s("div",{class:"vtd-grid",style:{gridTemplateColumns:r,gap:tt(e.gap),alignItems:rt(e.align)}},t),e)};var Rr=b({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var l=function(e){return e[e.Null=0]="Null",e[e.False=1]="False",e[e.True=2]="True",e[e.PosInt=3]="PosInt",e[e.Double=4]="Double",e[e.String=5]="String",e[e.Object=6]="Object",e[e.Array=7]="Array",e}({}),y=function(e){return e[e.Base=0]="Base",e[e.KeyTable=1]="KeyTable",e[e.KeyID=2]="KeyID",e}({});function I(e){let t=typeof e;if(t==="number")return Number.isInteger(e)&&e>=0&&Number.isSafeInteger(e)?l.PosInt:l.Double;if(t==="string")return l.String;if(Array.isArray(e))return l.Array;if(e===null)return l.Null;if(t==="object")return l.Object;if(e===!1)return l.False;if(e===!0)return l.True;throw new Error(`velojson: unsupported value type: ${typeof e}`)}var ce=4294967296,ot=new TextEncoder,Ie=new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0}),nt=64;var Sn=1024,Vt=[],Nt=class{buf;bufView;len=0;constructor(t=64){this.buf=new Uint8Array(t),this.bufView=new DataView(this.buf.buffer)}ensureCapacity(t){let r=this.len+t;if(r<=this.buf.length)return;let o=this.buf.length*2||64;for(;o<r;)o*=2;let n=new Uint8Array(o);n.set(this.buf.subarray(0,this.len)),this.buf=n,this.bufView=new DataView(this.buf.buffer)}writeByte(t){this.ensureCapacity(1),this.buf[this.len++]=t&255}writeBytes(t){this.ensureCapacity(t.length),this.buf.set(t,this.len),this.len+=t.length}writeVarint(t){if(!Number.isInteger(t)||t<0)throw new Error(`writeVarint: expected a non-negative integer, got ${t}`);if(!Number.isSafeInteger(t))throw new Error(`writeVarint: value ${t} exceeds safe integer range`);if(t<128){this.writeByte(t);return}if(this.ensureCapacity(10),t<ce){let r=t>>>0;do{let o=r&127;r>>>=7,r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}else{let r=t;do{let o=r%128;r=Math.floor(r/128),r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}}writeDouble(t){this.ensureCapacity(8),this.bufView.setFloat64(this.len,t,!0),this.len+=8}writeString(t){let r=ot.encode(t);this.writeVarint(r.length),this.writeBytes(r)}toUint8Array(){return this.buf.subarray(0,this.len)}get length(){return this.len}reset(){this.len=0}};function M(){let e=Vt.pop();return e!==void 0?(e.reset(),e):new Nt}function D(e){Vt.length<Sn&&Vt.push(e)}var it=class{pos=0;data;view;limit;keyArray=[];encodingFormat=y.Base;constructor(t){this.data=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.limit=t.length}readByte(){if(this.pos<this.limit)return this.data[this.pos++];throw new Error("velojson: unexpected end of buffer")}readBytes(t){if(this.pos+t<=this.limit){let r=this.data.subarray(this.pos,this.pos+t);return this.pos+=t,r}else throw new Error("velojson: unexpected end of buffer")}readVarint(){let t=this.readByte();if((t&128)===0)return t;let r=t&127,o=128,n,i=1;do if(n=this.readByte(),r+=(n&127)*o,o*=128,i++,i>10)throw new Error("velojson: varint too long (corrupt data)");while(n&128);return r}readDouble(){if(this.pos+8>this.limit)throw new Error("velojson: unexpected end of buffer");let t=this.view.getFloat64(this.pos,!0);return this.pos+=8,t}readString(){let t=this.readVarint();return Ie.decode(this.readBytes(t))}decodeObjectValue(t){let r=this.readVarint();if(this.pos+r>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${r} ${this.limit}`);let o=this.limit;this.limit=this.pos+r;let n=Object.create(null);for(;this.limit>this.pos;)this.decodeObjectFieldValue(n,t);if(this.pos=this.limit,this.limit=o,t!==void 0&&!t.hasAllRequiredFields(n))throw new Error("velojson: missing required field");return n}decodeArrayValue(t,r){let o=this.readVarint(),n,i;if(o<ce?(i=(o&1)===1,n=o>>>1):(i=o%2===1,n=Math.floor(o/2)),this.pos+n>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${n} ${this.limit}`);let a=this.limit;this.limit=this.pos+n;let u;if(i){let c=this.readByte();if(c===l.Null||c===l.False||c===l.True)throw new Error("velojson: homogeneous array cannot use a zero-payload wire type");switch(c){case l.PosInt:for(u=[];this.limit>this.pos;)u.push(this.readVarint());break;case l.Double:if((this.limit-this.pos)%8!=0)throw new Error("velojson: unexpected end of buffer");for(u=[];this.limit>this.pos;)u.push(this.view.getFloat64(this.pos,!0)),this.pos+=8;break;case l.String:for(u=[];this.limit>this.pos;){let p=this.readVarint();u.push(Ie.decode(this.readBytes(p)))}break;case l.Object:{if(r!==void 0){if(t===void 0)throw new Error("velojson: missing keyID");let p=r.fieldMapper(t);if(p===void 0)throw new Error(`velojson: unknown field keyID ${t}`);for(u=[];this.limit>this.pos;)u.push(this.decodeObjectValue(p))}else for(u=[];this.limit>this.pos;)u.push(this.decodeObjectValue());break}case l.Array:if(r!==void 0)throw new Error("velojson: VBIN Array not allowed to contain nested arrays");for(u=[];this.limit>this.pos;)u.push(this.decodeArrayValue());break;default:throw new Error(`velojson: invalid wire type ${c}`)}}else for(u=[];this.limit>this.pos;)u.push(this.decodeArrayEntryValue(r));return this.pos=this.limit,this.limit=a,u}decodeKeyTableArrayValue(){let t=this.readVarint();if(this.pos+t>this.limit)throw new Error("velojson: unexpected end of buffer");let r=this.limit;this.limit=this.pos+t;let o=[];for(o.push("");this.limit>this.pos;){let n=this.readVarint();o.push(Ie.decode(this.readBytes(n)))}return this.pos=this.limit,this.limit=r,o}decodeRootValue(t){let r=this.readVarint(),o,n;if(r<ce?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),this.encodingFormat=n,t!==void 0&&n!==y.KeyID)throw new Error("velojson: VBIN decode requires a VBIN (KeyID format) message");if(n===y.Base)switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:return this.decodeObjectValue();case l.Array:return this.decodeArrayValue();default:throw new Error(`velojson: unknown wire type ${o}`)}else if(n===y.KeyTable){if(o!==l.Object&&o!==l.Array)throw new Error("velojson: KeyTable encoding format only valid for Object and Array root values");let i=this.pos,a=this.readVarint();return o===l.Object?(this.pos+=a,this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeObjectValue()):(this.pos+=Math.floor(a/2),this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeArrayValue())}else if(n===y.KeyID){if(o!==l.Object)throw new Error("velojson: KeyIDs encoding format only valid for Object root values");return this.decodeObjectValue(t)}else throw new Error("velojson: unrecognized encoding format")}decodeObjectFieldValue(t,r){let o=this.readVarint(),n,i;o<ce?(n=o&7,i=o>>>3):(n=o%8,i=Math.floor(o/8));let a=null;if(i>0)if(this.encodingFormat===y.Base)a=Ie.decode(this.readBytes(i));else if(this.encodingFormat===y.KeyTable)if(i<this.keyArray.length)a=this.keyArray[i];else throw new Error("velojson: key index out of bounds");else if(this.encodingFormat===y.KeyID)if(r===void 0)a=String(i);else{switch(n){case l.Null:r.assignValue(t,i,null);break;case l.False:r.assignValue(t,i,!1);break;case l.True:r.assignValue(t,i,!0);break;case l.PosInt:r.assignValue(t,i,this.readVarint());break;case l.Double:r.assignValue(t,i,this.readDouble());break;case l.String:r.assignValue(t,i,this.readString());break;case l.Object:{let u=r.fieldMapper(i);if(u===void 0)throw new Error(`velojson: unknown field keyID ${i}`);r.assignValue(t,i,this.decodeObjectValue(u));break}case l.Array:r.assignValue(t,i,this.decodeArrayValue(i,r));break;default:throw new Error(`velojson: unknown wire type ${n}`)}return}else throw new Error("velojson: encoding format not recognized");else if(this.encodingFormat===y.Base)a="";else throw new Error("velojson: object field is missing a required key");switch(n){case l.Null:t[a]=null;break;case l.False:t[a]=!1;break;case l.True:t[a]=!0;break;case l.PosInt:t[a]=this.readVarint();break;case l.Double:t[a]=this.readDouble();break;case l.String:t[a]=this.readString();break;case l.Object:t[a]=this.decodeObjectValue();break;case l.Array:t[a]=this.decodeArrayValue();break;default:throw new Error(`velojson: unknown wire type ${n}`)}}decodeArrayEntryValue(t){let r=this.readVarint(),o,n;if(r<ce?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),n>0)throw new Error("velojson: array entry must not have a key");switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Object");return this.decodeObjectValue()}case l.Array:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Array");return this.decodeArrayValue()}default:throw new Error(`velojson: unknown wire type ${o}`)}}};var Cn=4096,st=new Map,U=null,xe=null;function Fr(e){e!==xe&&(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e===U&&(U=e.next),e.prev=xe,e.next=null,xe&&(xe.next=e),xe=e,U===null&&(U=e))}function _r(e){let t=st.get(e);if(t!==void 0)return Fr(t),t.bytes;let r=ot.encode(e);if(st.size>=Cn&&U!==null){let n=U;st.delete(n.key),U=n.next,U?U.prev=null:xe=null,n.prev=null,n.next=null}let o={key:e,bytes:r,prev:null,next:null};return st.set(e,o),Fr(o),r}function Kr(e,t){let r=!1,o=null;if(t.length>=nt){let a=0,u=t[a],c=I(u===void 0?null:u);if(c===l.Null||c===l.False||c===l.True)o=null,r=!1;else{for(o=c,(c===l.PosInt||c===l.Double)&&(r=!0),a+=1;a<t.length;a++){let p=t[a],m=I(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True){o=null,r=!1;break}else if(m!==c)if(o=null,r){if(m!==l.PosInt&&m!==l.Double){r=!1;break}}else break}if(o==null&&r==!0)for(;a<t.length;a++){let p=t[a],m=I(p===void 0?null:p);if(m!==l.PosInt&&m!==l.Double){r=!1;break}}}}let n=M();if(o!==null)switch(n.writeByte(o),o){case l.PosInt:for(let a=0;a<t.length;a++)n.writeVarint(t[a]);break;case l.Double:for(let a=0;a<t.length;a++)n.writeDouble(t[a]);break;case l.String:for(let a=0;a<t.length;a++)n.writeString(t[a]);break;case l.Object:{for(let a=0;a<t.length;a++){let u=M(),c=t[a];for(let m of Object.keys(c))$e(u,m,c[m],!1);let p=u.toUint8Array();n.writeVarint(p.length),n.writeBytes(p),D(u)}break}case l.Array:for(let a=0;a<t.length;a++)Kr(n,t[a]);break}else if(r)for(let a=0;a<t.length;a++){let u=t[a];Number.isInteger(u)&&u>=0&&Number.isSafeInteger(u)?(n.writeByte(l.PosInt),n.writeVarint(u)):(n.writeByte(l.Double),n.writeDouble(u))}else for(let a of t)$e(n,null,a,!0);let i=n.toUint8Array();e.writeVarint(i.length*2+(o!==null?1:0)),e.writeBytes(i),D(n)}function $e(e,t,r,o){if(r===void 0&&o===!1)return;let n=I(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(n);else{let i=_r(t);e.writeVarint(i.length*8+n),e.writeBytes(i)}switch(n){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let i=M(),a=r;for(let c of Object.keys(a))$e(i,c,a[c],!1);let u=i.toUint8Array();e.writeVarint(u.length),e.writeBytes(u),D(i);break}case l.Array:Kr(e,r);break}}function at(e,t,r,o){let n=!1,i=null;if(t.length>=nt){let c=0,p=t[c],m=I(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True)i=null,n=!1;else{for(i=m,(m===l.PosInt||m===l.Double)&&(n=!0),c+=1;c<t.length;c++){let x=t[c],k=I(x===void 0?null:x);if(k===l.Null||k===l.False||k===l.True){i=null,n=!1;break}else if(k!==m)if(i=null,n){if(k!==l.PosInt&&k!==l.Double){n=!1;break}}else break}if(i==null&&n==!0)for(;c<t.length;c++){let x=t[c],k=I(x===void 0?null:x);if(k!==l.PosInt&&k!==l.Double){n=!1;break}}}}let a=M();if(i!==null)switch(a.writeByte(i),i){case l.PosInt:for(let c=0;c<t.length;c++)a.writeVarint(t[c]);break;case l.Double:for(let c=0;c<t.length;c++)a.writeDouble(t[c]);break;case l.String:for(let c=0;c<t.length;c++)a.writeString(t[c]);break;case l.Object:{for(let c=0;c<t.length;c++){let p=M(),m=t[c];for(let k of Object.keys(m))Ve(p,k,m[k],!1,r,o);let x=p.toUint8Array();a.writeVarint(x.length),a.writeBytes(x),D(p)}break}case l.Array:for(let c=0;c<t.length;c++)at(a,t[c],r,o);break}else if(n)for(let c=0;c<t.length;c++){let p=t[c];Number.isInteger(p)&&p>=0&&Number.isSafeInteger(p)?(a.writeByte(l.PosInt),a.writeVarint(p)):(a.writeByte(l.Double),a.writeDouble(p))}else for(let c of t)Ve(a,null,c,!0,r,o);let u=a.toUint8Array();e.writeVarint(u.length*2+(i!==null?1:0)),e.writeBytes(u),D(a)}function Ve(e,t,r,o,n,i){if(r===void 0&&o===!1)return;let a=I(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(a);else{let u=i.get(t);u!==void 0?e.writeVarint(u*8+a):(n.push(t),i.set(t,n.length),e.writeVarint(n.length*8+a))}switch(a){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let u=M(),c=r;for(let m of Object.keys(c))Ve(u,m,c[m],!1,n,i);let p=u.toUint8Array();e.writeVarint(p.length),e.writeBytes(p),D(u);break}case l.Array:at(e,r,n,i);break}}function Ur(e,t){let r=M();for(let n=0;n<t.length;n++){let i=t[n];if(i==null)throw new Error("velojson: KeyTable cannot have undefined or null values");r.writeString(i)}let o=r.toUint8Array();e.writeVarint(o.length),e.writeBytes(o),D(r)}function Wr(e,t){if(e===void 0)return new Uint8Array;let r;t===void 0?e!==null&&(typeof e=="object"||Array.isArray(e))?r=y.KeyTable:r=y.Base:r=t;let o=M();if(r===y.Base)$e(o,null,e,!1);else if(r===y.KeyTable){let i=I(e);o.writeVarint(r*8+i);let a=new Map,u=[];switch(i){case l.Object:{let c=M(),p=e;for(let x of Object.keys(p))Ve(c,x,p[x],!1,u,a);let m=c.toUint8Array();o.writeVarint(m.length),o.writeBytes(m),D(c);break}case l.Array:at(o,e,u,a);break;default:throw new Error("velojson: KeyTable encoding format only supported for root Object or Array types")}Ur(o,u)}else throw new Error("velojson: encoding format not recognized");let n=o.toUint8Array().slice();return D(o),n}function qr(e){return e.length==0?void 0:new it(e).decodeRootValue()}var lt={encode:Wr,decode:qr};var Yr={velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var Tn=e=>f("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),An=()=>w(De,{style:{borderBottom:"1px solid var(--background-4)"},brand:w(L,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[f(Tn,{size:"1.75em"}),"The Velocity Project"]}),children:[f(L,{to:Yr.velotype,children:"Docs"}),f(L,{to:"https://github.com/Velotype",children:"GitHub"}),f(L,{to:"https://jsr.io/@velotype",children:"JSR"}),f(L,{to:"https://argoday.medium.com/",children:"Articles"})]}),Mn=()=>w(re,{type:"muted",children:["All projects live under the ",f(L,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",f(L,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",f(L,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function Gr(e,t="60rem"){Ct.injectStyles(),Ye(w("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[An(),f("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:w(z,{direction:"column",gap:"lg",children:[e,Mn()]})})]}),document.getElementById("app"))}var Xr='{"name": "Some name", "age": 20, "address": null}';function eo(e){let t=e[0];return t===void 0||t>23?"unknown":["VSON Base","VSON Key Table","VBIN"][Math.floor(t/8)]}var Dn=e=>Array.from(e,t=>t.toString(16).padStart(2,"0")).join(" "),On=e=>btoa(Array.from(e,t=>String.fromCharCode(t)).join("")),jt=e=>e instanceof Error?e.message:String(e);function Jr(e,t){if(e.trim()=="")return{kind:"empty"};let r;try{r=JSON.parse(e)}catch(o){return{kind:"error",message:`Not valid JSON: ${jt(o)}`}}try{let o=t=="auto"?lt.encode(r):lt.encode(r,t=="base"?y.Base:y.KeyTable);return{kind:"bytes",hex:Dn(o),base64:On(o),jsonBytes:new TextEncoder().encode(JSON.stringify(r)).length,vsonBytes:o.length,format:eo(o)}}catch(o){return{kind:"error",message:jt(o)}}}function Ln(e){let t=e.replace(/0x/gi,"").replace(/[\s:,]/g,"");if(/^[0-9a-f]+$/i.test(t)&&t.length%2==0)return{bytes:Uint8Array.from(t.match(/../g)??[],r=>parseInt(r,16)),how:"hex"};try{return{bytes:Uint8Array.from(atob(e.replace(/\s/g,"")),r=>r.charCodeAt(0)),how:"base64"}}catch{return"These bytes are not hex (an even number of digits) or base64."}}function zn(e){if(e.trim()=="")return{kind:"empty"};let t=Ln(e);if(typeof t=="string")return{kind:"error",message:t};try{let r=lt.decode(t.bytes);return{kind:"json",text:r===void 0?"(no bytes, which decode to undefined)":JSON.stringify(r,null,2),format:eo(t.bytes),bytes:t.bytes.length,how:t.how}}catch(r){return{kind:"error",message:`Could not decode these bytes: ${jt(r)}`}}}var Zr=e=>f("div",{style:{fontFamily:"monospace",whiteSpace:"pre-wrap",overflowWrap:"anywhere",padding:"0.75em 1em",border:"1px solid var(--background-4)",borderRadius:"0.5rem",backgroundColor:"var(--background-2)"},children:e.text}),to=e=>f("div",{role:"alert",style:{color:"var(--accent-7)"},children:e}),In=e=>{if(e.kind=="empty")return f(re,{type:"muted",children:"Type some JSON to see its bytes."});if(e.kind=="error")return to(e.message);let t=Math.round((1-e.vsonBytes/e.jsonBytes)*100);return w(z,{direction:"column",children:[w(z,{gap:"lg",children:[f(Oe,{title:"JSON text",value:String(e.jsonBytes),suffix:" bytes"}),f(Oe,{title:e.format,value:String(e.vsonBytes),suffix:" bytes"}),f(Oe,{title:"Difference",value:t>=0?`${t}% smaller`:`${-t}% larger`})]}),f(Le,{level:4,children:"Hex"}),f(Zr,{text:e.hex}),f(Le,{level:4,children:"Base64"}),f(Zr,{text:e.base64})]})},$n=e=>e.kind=="empty"?f(re,{type:"muted",children:"Paste bytes as hex or base64 to see their JSON."}):e.kind=="error"?to(e.message):w(z,{direction:"column",children:[f(re,{type:"muted",children:`${e.format}, ${e.bytes} bytes read as ${e.how}`}),e.format=="VBIN"&&f(re,{type:"muted",children:"VBIN has no key names on the wire, so the keys show as their numeric key IDs."}),f(Tt,{code:e.text,language:"plain"})]}),Qr={width:"100%",fontFamily:"monospace",marginInlineStart:"0"},Bt=class extends v{format="auto";encoded=new j(Jr(Xr,"auto"),In);decoded=new j({kind:"empty"},$n);jsonInput=f(Qe,{rows:8,value:Xr,resize:"vertical",style:Qr,onInput:()=>this.runEncode()});bytesInput=f(Qe,{rows:8,placeholder:"e.g. 68 03 ...",resize:"vertical",style:Qr,onInput:()=>this.runDecode()});runEncode(){this.encoded.set(Jr(this.jsonInput.value,this.format))}runDecode(){this.decoded.set(zn(this.bytesInput.value))}useEncodedBytes(){let t=this.encoded.get();t.kind=="bytes"&&(this.bytesInput.value=t.hex,this.runDecode())}mount(){this.useEncodedBytes()}render(){return w(z,{direction:"column",gap:"lg",children:[f(At,{items:[{label:"The Velocity Project",to:"/"},{label:"velojson (VSON)",to:"/projects/velojson/"},{label:"Playground"}]}),w(z,{direction:"column",children:[f(Le,{level:1,children:"velojson playground"}),w(Lt,{children:["Encode JSON to VSON bytes and decode bytes back to JSON, in your browser. Nothing is sent anywhere. It runs ",f("code",{children:"@velotype/velojson"}),", the version that supports every format. VBIN needs key IDs agreed ahead of time, so it only decodes here, with numeric keys."]})]}),w(It,{minColumnWidth:"26em",children:[f(et,{header:"JSON to bytes",children:w(z,{direction:"column",children:[this.jsonInput,w(z,{align:"center",children:[f("label",{for:"format",children:"Format"}),f(Me,{id:"format",value:"auto",options:[{value:"auto",label:"Automatic (Key Table for an object or Array)"},{value:"base",label:"VSON Base"},{value:"keytable",label:"VSON Key Table"}],onChange:t=>{this.format=t.currentTarget.value,this.runEncode()}})]}),this.encoded,f("div",{children:f(A,{type:"secondary",onClick:()=>this.useEncodedBytes(),children:"Decode these bytes"})})]})}),f(et,{header:"Bytes to JSON",children:w(z,{direction:"column",children:[this.bytesInput,this.decoded]})})]})]})}};Gr(f(Bt,{}));
