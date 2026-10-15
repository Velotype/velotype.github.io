function i(e,t){return t.id&&S(e,"id",t.id),t.class&&S(e,"class",z(e,"class")+" "+t.class),t.style&&ye(e,{style:t.style}),e}var se=console.log,D=console.error,yt={style:"display:contents;"},xt={style:"display:none;"},Ie="div";function L(e){return e instanceof HTMLElement}function He(e){return e instanceof SVGSVGElement}function Pe(e){return e instanceof MathMLElement}function ue(e){return e instanceof q}function X(e){return e instanceof W}function Z(e){return e instanceof h}function pe(e){return e instanceof Text}function kt(e){return e instanceof G}function J(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function me(e,t){let r=e;for(;r;){let o=Object.getOwnPropertyDescriptor(r,t);if(o&&(o.set||o.writable))return!0;r=Object.getPrototypeOf(r)}return!1}function S(e,t,r){me(e,t)?e[t]=r:e.setAttribute(t,r.toString())}function wt(e,t,r){me(e,t)?e[t]=r:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(r)):r&&e.setAttribute(t,"")}function z(e,t){return e.getAttribute(t)}function C(e,t,r){Object.defineProperty(e,t,{value:r,writable:!1,configurable:!1,enumerable:!1})}function Ct(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}var T=new Map,Le=1n,p="vk",Q=new Map,F=new Map,le=new Map,Be={get domKeyName(){return p},domReferences:T,listenersF:Q,listenersR:F,styleSectionMounted:le};function Ne(e){T.size==0?p=e:D("Name not accepted",e,T.size)}function St(){let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let o=new Map,s=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:o,register(d){return o.set(s,d),s++},unregister(d){o.delete(d)}}}let t=e.__VELOTYPE_DEVTOOLS_HOOK__,r=new Set(Array.from(t.instances.values(),o=>o.domKeyName));if(r.has(p)){let o=2;for(;r.has(`${p}-${o}`);)o++;Ne(`${p}-${o}`)}t.register(Be)}St();function ee(e){return T.get(e)}function V(e,t){let r=String(Le);return Le++,t&&S(t,p,r),T.set(r,e),r}function K(e){T.delete(e)}function de(e){T.delete(e.vtKey)}function ze(e){if(J(e)||pe(e))return I("span",null,e);if(e)return A(e)}function Tt(e){if(J(e))return document.createTextNode(e.toString());if(pe(e))return e;if(e)return A(e)}function A(e){if(L(e)||He(e)||Pe(e))return e;if(X(e))return e.renderDefault();if(Z(e)){let t=ee(e.vtKey);if(t&&ue(t))return t.e}return D("Internal typescript error"),te()}function ce(e,t){if(Array.isArray(t))for(let r=0;r<t.length;r++)ce(e,t[r]);else{let r=Tt(t);r&&e.appendChild(r)}}function te(){return I(Ie,xt)}function Mt(e){Promise.resolve().then(e)}function Y(e){return e?J(e)||Z(e)||X(e)||pe(e)||Array.isArray(e)||e.hasAttribute(p)?I(Ie,yt,e):e:te()}var _=class{result;updateRefs;constructor(t,r){this.result=t,this.updateRefs=r}},W=class{#t;#i;#a;#e=new Map;vtKey=V(this);#s=!1;#l=[];#d=[];#r=0;#o=!1;#c(){return`vt-ro-${this.vtKey}`}#n(){Ye(this.#c(),new U(this,"onChange"))}constructor(t,r,o){this.#t=t,this.#i=r||te,this.#a=o}registerOnChangeListener(t,r){return this.#s=!0,this.#r=r?.eventDispatchDelay&&r?.eventDispatchDelay>0?r?.eventDispatchDelay:0,Ke(r?.hasVtKey||this,this.#c(),t),r?.triggerOnRegistration&&Mt(()=>{this.#n()}),this}registerOnMount(t,r){return t&&this.#l.push(t),r&&this.#d.push(r),this}mount(){this.#l.forEach(t=>{t()})}unmount(){this.#d.forEach(t=>{t()})}get value(){return this.#t}set value(t){this.set(t)}get(){return this.#t}set(t){this.#t!=t&&this.rerenderElements(t)}rerenderElements(t){Array.from(this.#e.entries()).forEach(([r,o])=>{if(o.hU&&o.uR)o.hU(o.e,o.uR,this.#t,t);else{let s=o.rF(t,this),d=s instanceof _,u=Y(ze(d?s.result:s));S(u,p,r),he(o.e,u),this.#e.set(r,{e:u,rF:o.rF,hU:o.hU,uR:d?s.updateRefs:void 0})}}),this.#t=t,this.#s&&(this.#r>0?this.#o||(this.#o=!0,setTimeout(()=>{this.#o=!1,this.#n()},this.#r)):this.#n())}unmountKey(t){let r=this.#e.get(t);if(r){let o=z(r.e,p);return t==o?(this.#e.delete(o),K(o||""),!0):(D("Invalid state",t,o,r),!1)}else return D("Invalid unmountKey",t),!1}renderDefault(){return this.render(this.#i,this.#a)}render(t,r){let o=t(this.#t,this),s=o instanceof _,d=Y(ze(s?o.result:o)),u=V(this,d);return this.#e.set(u,{e:d,rF:t,hU:r,uR:s?o.updateRefs:o}),d}getElements(){return Array.from(this.#e.values()).map(t=>t.e)}removeAll(){this.#e.entries().forEach(([t,r])=>{Re(r.e),K(t)}),this.#e.clear()}};var h=class{attrs;children;constructor(t,r){this.attrs=t,this.children=r}mount(){}unmount(){}refresh(){}vtKey="";replaceChild(t,r){return t}appendToChild(t,r){return!1}prependToChild(t,r){return!1}replaceChildrenOfChild(t,r){return!1}removeChild(t){return!1}};function he(e,t){let r=document.hasFocus()?document.activeElement==e:!1;return L(e)&&be(e),e.replaceWith(t),L(t)&&ge(t),r&&t.focus(),t}function Et(e,t){e.appendChild(t),fe(t)}function jt(e,t){e.prepend(t),fe(t)}function At(e,t){be(e),e.replaceChildren(...t),ge(e)}function Re(e){Dt(e),e.remove()}var q=class{constructor(t,r,o){this.c=t,this.a=r,this.h=o,this.k=V(this),C(t,"vtKey",this.k),C(t,"refresh",this.f),C(t,"replaceChild",this.q),C(t,"appendToChild",this.w),C(t,"prependToChild",this.t),C(t,"replaceChildrenOfChild",this.y),C(t,"removeChild",this.u),this.e=Oe(this,this.a,this.h)}c;e;k;a;h;f=()=>{this.e=he(this.e,Oe(this,this.a,this.h))};q=(t,r)=>this.e.contains(t)?he(t,A(r)):t;w=(t,r)=>this.e.contains(t)?(Et(t,A(r)),!0):!1;t=(t,r)=>this.e.contains(t)?(jt(t,A(r)),!0):!1;y=(t,r)=>this.e.contains(t)?(At(t,r.map(o=>A(o))),!0):!1;u=t=>this.e.contains(t)?(Re(t),!0):!1};function ve(e,t){if(L(e)||He(e)||Pe(e))for(let r=0;r<e.children.length;r++){let o=e.children[r];ve(o,t);let s=z(o,p);if(s){let d=ee(s);d&&t(d,s)}}}function Fe(e,t){if(ue(e)){let r=e;r.c.mount(),Object.entries(r.c).forEach(o=>{let s=o[1];X(s)&&s.mount()})}}function fe(e){L(e)&&ge(e);let t=z(e,p);if(t){let r=ee(t);r&&Fe(r,t)}}function ge(e){ve(e,Fe)}function Ve(e,t){ue(e)?(Lt(e.c),e.c.unmount(),Object.entries(e.c).forEach(r=>{let o=r[1];X(o)?(o.unmount(),de(o)):Z(o)&&de(o)}),K(e.k)):kt(e)?(e.unmount(),K(e.k)):e.unmountKey(t)}function be(e){ve(e,Ve)}function Dt(e){L(e)&&be(e);let t=z(e,p);if(t){let r=ee(t);r&&Ve(r,t)}}function Oe(e,t,r){let o=Y(e.c.render(t,r));return S(o,p,e.k),o}var G=class{w;k;constructor(t){this.w=t,this.k=V(this)}unmount(){this.w.forEach(function(t){t.unmount(),de(t)})}};function ye(e,t){if(t){for(let[r,o]of Object.entries(t||{}))if(r.startsWith("on")&&r.length>4){if(o){let s,d=o;typeof o!="function"&&o.handler&&o.options!==void 0&&(d=o.handler,s=o.options);let u=r[2]=="-"?r.slice(3):r.slice(2).toLowerCase();e.addEventListener(u,d,s)}}else if(r=="style"&&o instanceof Object)for(let s of Object.keys(o)){let d=o[s]===null||o[s]===void 0?"":o[s],u=typeof d=="number"?d.toString():d,R=e.style;u.endsWith("!important")?R.setProperty(Ct(s),u.substring(0,u.length-10),"important"):me(R,s)?R[s]=u:R.setProperty(s,u)}else if(typeof o=="boolean")wt(e,r,o);else if(typeof o!="function")if(r=="vtwith"){let s=z(e,p);if(s)D("vtwith attr set on element that already has a key",s);else{let d=new G(o);S(e,p,d.k)}}else(o||o=="")&&S(e,r,o)}}function I(e,t,...r){let o=t||{};if(typeof e=="string"){let s=document.createElement(e);return ye(s,o),e=="template"?ce(s.content,r):ce(s,r),s}else{if(Z(e.prototype))return new q(new e(o,r),o,r).e;if(typeof e=="function"){let s=e(o,r);return J(s)||Array.isArray(s)?s:Y(s)}}return D("Invalid tag",e,o,r),te()}function xe(e,t){return t.replaceWith(e),fe(e),e}var U=class{emittingObject;event;data;constructor(t,r,o){this.emittingObject=t,this.event=r,this.data=o}};function Ke(e,t,r){$e(Q,t,e.vtKey,r),$e(F,e.vtKey,t,r)}function $e(e,t,r,o){let s=e.get(t);if(s!==void 0)s.set(r,o);else{let d=new Map;d.set(r,o),e.set(t,d)}}function Lt(e){let t=F.get(e.vtKey);t&&Array.from(t.keys()).forEach(r=>{_e(Q,r,e.vtKey),_e(F,e.vtKey,r)})}function _e(e,t,r){let o=e.get(t);o!==void 0?o.get(r)!==void 0?(o.delete(r),o.size<=0&&e.delete(t)):se("WARN removing event listener, secondKey is not present",t,r):se("WARN removing event listener, firstKey is not present",t,r)}function Ye(e,t,r){let o=Q.get(e);o!==void 0?o.entries().forEach(([s,d])=>{(!r||r.vtKey!=s)&&d(t)}):se("WARN, event emitted with no listeners",e,t)}function a(e,t,r=!1){let o=le.get(t);if(o){if(!r)return;let d=document.adoptedStyleSheets.findIndex(u=>u==o.sheet);document.adoptedStyleSheets.splice(d,1)}let s=new CSSStyleSheet;s.replace(e),document.adoptedStyleSheets.push(s),le.set(t,{sheet:s,text:e,key:t})}function n(e,t,r){let o=t.children;return delete t.children,r!==void 0&&(t.key=r),I(e,t,o)}var l=n;var We=!1,re=function(e,t){We||(We=!0,a(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let r=e.size||"1em";return i(n("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:r,height:r}}),e)};var Ot=Symbol("velodesign.clearThemeOptionOverrides");function c(e,t){let r={},o=new Map,s=new Map;for(let[d,u]of Object.entries(e))s.set(d,function(){return m[u]});for(let[d,u]of Object.entries(t??{}))s.set(d,function(){return u});for(let d of s.keys())Object.defineProperty(r,d,{enumerable:!0,get:function(){return o.has(d)?o.get(d):s.get(d)()},set:function(u){u==null?o.delete(d):o.set(d,u)}});return Object.defineProperty(r,Ot,{value:function(){o.clear()}}),r}var m=c({},{closeSymbol:function(){return"x"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var $t=c({},{loadingSymbol:function(){return n(re,{size:"1em"})}});var qe=console.log,Ge=console.error,oe=function(e,t,r){e.setAttribute(t,r)};var Ue=new Map,It=!1;setTimeout(()=>{Ue.entries().forEach(([e,t])=>{qe(t)}),It=!0},1e3);var f="#fff",y="#000",Xe="#050505",Ht=f,Pt=y,Bt="#66b2ff",Nt="#c6ff9e",Rt="#ffd666",Ft="#ff6666",Ze="#fafafa",Vt="#151515",Kt=f,Yt="#004c99",Wt="#286100",qt="#997000",Gt="#990000",we=":color-mix(in hsl,",Ut=[-8,-6,-4,-2,0,2,4,6,8],x=(e,t,r,o)=>Ut.map(s=>s<0?`--${e}-${s/2+5}${we}${t} ${-1*s}0%,${r} ${10+s}0%)`:s==0?`--${e}-5:${r};--${e}:${r}`:`--${e}-${s/2+5}${we}${r} ${10-s}0%,${o} ${s}0%)`).join(";")+";",Xt=[1,2,3,4,5,6,7,8,9],Je=(e,t,r)=>Xt.map(o=>`--${e}-${o}${we}${t} ${10-o}0%,${r} ${o}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${r};`,Qe=(e,t,r)=>`--${e}:${t};--${e}-alt:${r};`,et=function(e){oe(document.getElementsByTagName("html")[0],"data-theme",e)},ke="vtd-preferred-theme",M="light",H="dark",Zt="default",k=M,Ce={getColorScheme:function(){return k},setColorScheme:function(e){localStorage.setItem(ke,e),Ce.resetColorScheme()},resetColorScheme:function(){let e=localStorage.getItem(ke);if(e){let t=globalThis.matchMedia("(prefers-color-scheme: light)").matches;e==H?k=H:e==M?k=M:(e==Zt||localStorage.removeItem(ke),t?k=M:k=H)}k==M?et(M):et(H)}};function tt(e,t,r=!1){a(`
${e}[data-theme="light"]{
${Qe("text",t?.textLightColor||Xe,t?.textDarkColor||Ze)}
${Je("background",t?.backgroundLightColor||Ht,t?.backgroundLightAltColor||Pt)}
${x("primary",f,t?.primaryLightColor||Bt,y)}
${x("secondary",f,t?.secondaryLightColor||Nt,y)}
${x("warning",f,t?.warningLightColor||Rt,y)}
${x("accent",f,t?.accentLightColor||Ft,y)}
color-scheme:light;}
${e}[data-theme="dark"]{
${Qe("text",t?.textDarkColor||Ze,t?.textLightColor||Xe)}
${Je("background",t?.backgroundDarkColor||Vt,t?.backgroundDarkAltColor||Kt)}
${x("primary",y,t?.primaryDarkColor||Yt,f)}
${x("secondary",y,t?.secondaryDarkColor||Wt,f)}
${x("warning",y,t?.warningDarkColor||qt,f)}
${x("accent",y,t?.accentDarkColor||Gt,f)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,r)}var Se={injectStyles(e,t=!0){t&&a(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset"),tt(":root",e),globalThis.setTimeout(function(){a("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions")},150),Ce.resetColorScheme()}};var E={changeLocation:function(e){try{globalThis.history.pushState(null,"",e),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){Ge(t),E.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=e}};var v=function(e,t){let r=e.spa??!1;return i(n("a",{class:"vtd-link",href:e.to,onClick:r?o=>{o.preventDefault(),E.changeLocation(e.to)}:void 0,children:t}),e)};var Jt=c({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var Qt=c({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var rt=!1,Me=function(e,t){return rt||(rt=!0,a(`
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
`,"vtd/Card")),i(l("div",{class:"vtd-card",children:[e.header&&n("div",{class:"vtd-card-header",children:e.header}),n("div",{class:"vtd-card-body",children:t}),e.footer&&n("div",{class:"vtd-card-footer",children:e.footer})]}),e)};var tn=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<!\\w|\\$|\\)|\\])(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),rn=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");var er=c({closeSymbol:"closeSymbol"});var rr=c({collapseSymbol:"collapseSymbol"});var or=c({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var ir=c({closeSymbol:"closeSymbol"});var at=c({closeSymbol:"closeSymbol"}),it=!1,Ee=function(e,t){it||(it=!0,a(`
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
`,"vtd/Tag"));let r=l("span",{class:`vtd-tag vtd-tag-${e.type||"neutral"}`,children:[t,e.onRemove&&n("button",{type:"button",class:"vtd-tag-remove","aria-label":e.removeLabel,onClick:()=>{e.onRemove?.(),r.remove()},children:n(at.closeSymbol,{})})]});return i(r,e)};var sr=c({},{emptySymbol:function(){return n("span",{class:"vtd-empty-icon","aria-hidden":"true",children:n(m.emptySymbol,{})})}});var lr=c({closeSymbol:"closeSymbol"});var dr=c({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var je=c({},{columnsSymbol:function(){return n("span",{"aria-hidden":"true",children:"\u25A5"})},emptySymbol:function(){return n("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true",children:n(m.emptySymbol,{})})}});var ht=!1;function O(){ht||(ht=!0,a(`
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
`,"vtd/Typography"))}function $(e,t,r){let o=[e];return t&&o.push(`vtd-text-${t}`),r?.strong&&o.push("vtd-text-strong"),r?.italic&&o.push("vtd-text-italic"),r?.underline&&o.push("vtd-text-underline"),r?.strike&&o.push("vtd-text-strike"),r?.numeric&&o.push("vtd-text-numeric"),o.join(" ")}var ne=function(e,t){O();let r=$(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return i(n("h1",{class:r,children:t}),e);case 2:return i(n("h2",{class:r,children:t}),e);case 3:return i(n("h3",{class:r,children:t}),e);case 4:return i(n("h4",{class:r,children:t}),e);case 5:return i(n("h5",{class:r,children:t}),e);default:return i(n("h6",{class:r,children:t}),e)}};var P=function(e,t){O();let r=$(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?i(n("code",{class:r,children:t}),e):i(n("span",{class:r,children:t}),e)};var B=function(e,t){return O(),i(n("p",{class:$("vtd-paragraph",e.type),children:t}),e)};var ut={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function ie(e,t="md"){return e===void 0?ut[t]:ut[e]??e}function ae(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function pt(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var mt=!1,w=function(e,t){mt||(mt=!0,a(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}
/* An inline stack sizes to its content, like the text it sits among */
.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let r=e.direction??"row";return i(n("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:r,gap:ie(e.gap),alignItems:ae(e.align),justifyContent:pt(e.justify),flexWrap:e.wrap??r==="row"?"wrap":"nowrap"},children:t}),e)};var vt=!1,Ae=function(e,t){vt||(vt=!0,a(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let r=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return i(n("div",{class:"vtd-grid",style:{gridTemplateColumns:r,gap:ie(e.gap),alignItems:ae(e.align)},children:t}),e)};var ft=c({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var b=e=>({label:"GitHub",to:`https://github.com/Velotype/${e}`}),j=e=>({label:"JSR",to:`https://jsr.io/@velotype/${e}`}),bt=[{title:"Front end",note:"TSX that creates real DOM elements, with no virtual DOM.",projects:[{id:"velotype",name:"Velotype",tag:"framework",tagKind:"primary",description:"A fast and small TSX framework for high-performance websites. Components are classes, TSX creates real DOM elements directly, and there is no virtual DOM, reconciler, or hooks. Values (RenderObject, RenderObjectArray, RenderTemplateArray) update the DOM in place. Roughly 17kb minified, 6kb gzipped.",links:[b("velotype"),j("velotype"),{label:"Benchmark demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{id:"velodesign",name:"velodesign",tag:"UI components",tagKind:"primary",description:"A themed component library for Velotype. Every component is built from native HTML elements where one exists (input, button, dialog), so keyboard support, forms, and autofill come from the browser. Colors come from a few CSS custom properties, with light and dark themes built in. This page is built with it.",links:[b("velodesign"),j("velodesign"),{label:"Component showcase",to:"https://velotype.github.io/velodesign/"}]},{id:"velossr",name:"velossr",tag:"server rendering",tagKind:"primary",description:"Renders TSX to HTML on the server with no virtual DOM diffing and no client runtime. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve. Text and attributes are escaped by default.",links:[b("velossr"),j("velossr")]},{id:"velodevtools",name:"Velotype DevTools",tag:"Chrome extension",tagKind:"secondary",description:"Debugging panels for Velotype projects: the live component tree with expandable instance fields, the event bus registrations, and a VSON/VBIN decoder that inspects network payloads.",links:[b("velodevtools")]}]},{title:"Server and wire format",projects:[{id:"veloserver",name:"veloserver",tag:"web server",tagKind:"warning",description:"A web server framework for high-performance websites. Typed routers with path variables and wildcards, per-request typed metadata, and configurable error handlers, running on Deno.",links:[b("veloserver"),j("veloserver")]},{id:"velojson",name:"velojson (VSON)",tag:"binary JSON",tagKind:"warning",description:"A compact binary encoding for JSON, with a direct one-to-one mapping and no added types. It has three formats: Base (typically 20-25% smaller than JSON text, and streamable), Key Table (repeated keys stored once), and VBIN (a pre-agreed key schema, and the format that beats native JSON on speed).",links:[b("velojson"),j("velojson")]}]},{title:"Learn and compare",projects:[{id:"velomicro",name:"velomicro",tag:"1kb",tagKind:"neutral",description:"A strictly minimal TSX framework that shows how TSX rendering works: a createElement that returns real DOM elements, and function components.",links:[b("velomicro"),j("velomicro"),{label:"Medium article",to:"https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}]},{id:"velomini",name:"velomini",tag:"2.5kb",tagKind:"neutral",description:"The next step up from velomicro: it adds a Component class with render, mount, unmount, and refresh.",links:[b("velomini"),j("velomini"),{label:"Medium article",to:"https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}]},{id:"velotype-perf-demo",name:"velotype-perf-demo",tag:"benchmark",tagKind:"neutral",description:"The same fleet dashboard written in Velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code. The page times each one in your own browser.",links:[b("velotype-perf-demo"),{label:"Live demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{id:"examples",name:"example-velotype-projects",tag:"examples",tagKind:"neutral",description:"Example projects using the Velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, React's 2018 hooks demos recreated in Velotype, and a Custom Elements compatibility check.",links:[b("example-velotype-projects")]}]}];var Cr=e=>n(Me,{id:e.id,header:l(w,{align:"center",children:[n("span",{children:e.name}),n(Ee,{type:e.tagKind,children:e.tag})]}),children:l(w,{direction:"column",children:[n(B,{children:e.description}),n(w,{children:e.links.map(t=>n(v,{to:t.to,children:t.label}))})]})});Se.injectStyles();document.title="The Velocity Project";xe(n("main",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif",maxWidth:"60rem",margin:"0 auto",padding:"3rem 1rem 4rem"},children:l(w,{direction:"column",gap:"lg",children:[l(w,{direction:"column",children:[n(ne,{level:1,children:"The Velocity Project"}),n(B,{children:n(P,{type:"muted",children:"A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them. More pieces are on the way."})}),l(B,{children:["Each piece stands on its own and is published separately. They are designed to fit together: ",n(v,{to:"#veloserver",children:"veloserver"})," serves pages and APIs, ",n(v,{to:"#velossr",children:"velossr"})," or ",n(v,{to:"#velotype",children:"Velotype"})," renders them, and ",n(v,{to:"#velojson",children:"VSON"})," carries data between the two."]})]}),bt.map(e=>l(w,{direction:"column",children:[n(ne,{level:2,children:e.title}),e.note&&n(P,{type:"muted",children:e.note}),n(Ae,{minColumnWidth:"22em",children:e.projects.map(Cr)})]})),l(P,{type:"muted",children:["All projects live under the ",n(v,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",n(v,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",n(v,{to:"https://argoday.medium.com/",children:"Medium"}),". This page is built with Velotype and velodesign."]})]})}),document.getElementById("app"));
