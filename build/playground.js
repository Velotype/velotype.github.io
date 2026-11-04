var se=console.warn.bind(console,"vt:"),P=console.error.bind(console,"vt:"),To=kt("span","display:contents;"),bt=kt("div","display:contents;"),tr=kt("div","display:none;");var _e={value:void 0,writable:!1,configurable:!1,enumerable:!1},gt=new Map,yt=new Map,rr=/[A-Z]/g,z=new Map,M=Symbol(),xt=Symbol(),Ke=Symbol(),R=new Map,ae=new Map,Ue=new Map,x={k:1,r:0,p:void 0,s:void 0},wt={version:"0.3.2",domKeyProperty:M,domReferences:z,listenersF:R,listenersR:ae,styleSectionMounted:Ue,setEventTracer:()=>{}};function kt(e,t){let r=document.createElement(e);return r.style.cssText=t,r}function K(e){return e instanceof HTMLElement}function We(e){return e instanceof SVGSVGElement}function qe(e){return e instanceof MathMLElement}function Ye(e){return e instanceof Text}function ve(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function or(e,t,r){_e.value=r,Object.defineProperty(e,t,_e),_e.value=void 0}function X(){return tr.cloneNode()}function nr(e){Promise.resolve().then(e)}function St(e,t,r){let o=t.nextSibling;o===r?e.insertBefore(r,t):(e.insertBefore(t,r),e.insertBefore(r,o))}function Z(e){typeof reportError=="function"?reportError(e):P(e)}var be=class{constructor(t,r,o){this.emittingObject=t,this.event=r,this.data=o}};function Ze(e,t,r){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");le&&(r=Ct(t,r)),ir(R,t,e.vtKey,r),ir(ae,e.vtKey,t,r)}function ir(e,t,r,o){let n=e.get(t);n||(n=new Map,e.set(t,n));let i=n.get(r);i?i.push(o):n.set(r,[o])}function De(e){let t=ae.get(e.vtKey);t&&t.forEach((r,o)=>{sr(R,o,e.vtKey),sr(ae,e.vtKey,o)})}function sr(e,t,r,o){let n=e.get(t);if(n){let i=n.get(r);if(i){if(x.r++,o){let s=i.indexOf(o);if(s<0&&le&&(s=i.findIndex(h=>h.o===o)),s<0){se("Listener not registered",t,r);return}i=i.slice(),i.splice(s,1),n.set(r,i)}(!o||i.length<=0)&&(n.delete(r),n.size<=0&&e.delete(t))}else se("No listeners to remove",t,r)}else se("No listeners to remove",t,r)}function ar(e,t,r){let o=R.get(e),n=o&&o.get(t);return!!n&&(n.includes(r)||!!le&&n.some(i=>i.o===r))}function Je(e,t,r){let o=R.get(e);o?o.forEach((n,i)=>{if(!r||r.vtKey!=i){let s=x.r;n.forEach(h=>{if(s!==x.r){let c=o.get(i);if(c!==n&&!(c&&c.includes(h)))return}try{h(t)}catch(c){Z(c)}})}}):se("No listeners for event",e,t)}var le,Xe;function Ct(e,t){let r=o=>{if(le&&Xe!==o){Xe=o,queueMicrotask(()=>{Xe=void 0});try{le(e,o)}catch{}}t(o)};return r.o=t,r}function Ge(e,t){e.forEach((r,o)=>{r.forEach((n,i)=>{r.set(i,n.map(s=>t(o,i,s)))})})}function lr(e){let t=!!le;if(le=e,Xe=void 0,e&&!t)Ge(R,(r,o,n)=>Ct(r,n)),Ge(ae,(r,o,n)=>Ct(o,n));else if(!e&&t){let r=(o,n,i)=>i.o??i;Ge(R,r),Ge(ae,r)}}function Mo(){wt.setEventTracer=lr;let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,r=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(o){return t.set(r,o),r++},unregister(o){t.delete(o)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(wt)}Mo();function J(e,t){e[M]=t}function de(e){return z.get(e)}function ce(e,t){let r=x.k++;return t&&J(t,r),z.set(r,e),r}function ge(e){z.delete(e)}function he(e){z.delete(e.vtKey),De(e)}function U(e){for(let t=e;t<x.k;t++){let r=z.get(t);r&&(Q(r)?(De(r.c),z.delete(t),Oe(r.c)):r.vtKey===t||!r.uK?(he(r),z.delete(t)):r.uK(t))}}function Et(e){return e instanceof ze}var ze=class{constructor(t){this.w=t,this.k=ce(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),he(t)})}};function d(e,t){if(t.id&&Mt(e,"id",t.id),t.class){let r=e.getAttribute("class");Mt(e,"class",r?r+" "+t.class:t.class)}return t.style&&ue(e,{style:t.style}),e}function cr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return Tt(e,t);let r=Object.getPrototypeOf(e),o=r===x.p?x.s:yt.get(r);o||(o=new Map,yt.set(r,o)),x.p=r,x.s=o;let n=o.get(t);return n===void 0&&(n=Tt(r,t),o.set(t,n)),n}function Tt(e,t){let r=e;for(;r;){let o=Object.getOwnPropertyDescriptor(r,t);if(o&&(o.set||o.writable))return!0;r=Object.getPrototypeOf(r)}return!1}function Mt(e,t,r){cr(e,t)?e[t]=r:e.setAttribute(t,r.toString())}function Ao(e,t,r){cr(e,t)?e[t]=r:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(r)):r&&e.setAttribute(t,"")}function Lo(e){if(e.startsWith("--"))return e;let t=e.replace(rr,r=>"-"+r.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function ue(e,t){if(!t)return;let r=t.type=="range",o=Object.keys(t);for(let n=0;n<o.length;n++){let i=o[n];(!r||i!="value")&&dr(e,i,t[i])}r&&dr(e,"value",t.value)}function dr(e,t,r){if(t.startsWith("on")&&t.length>4){if(r){let o,n=r;typeof r!="function"&&r.handler&&(n=r.handler,o=r.options);let i=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(i,n,o)}}else if(t=="style"&&r instanceof Object)for(let o of Object.keys(r)){let n=r[o]==null?"":r[o],i=typeof n=="number"?n.toString():n,s=e.style;if(i.endsWith("!important"))s.setProperty(Lo(o),i.slice(0,-10),"important");else{let h=gt.get(o);h===void 0&&(h=Tt(s,o),gt.set(o,h)),h?s[o]=i:s.setProperty(o,i)}}else if(typeof r=="boolean")Ao(e,t,r);else if(typeof r!="function")if(t=="vtwith"){let o=e[M];if(o)P("vtwith on a keyed element",o);else{let n=new ze(r);J(e,n.k)}}else(r||r=="")&&Mt(e,t,r)}function W(e,t,...r){if(typeof e=="string"){let n=document.createElement(e);return Qe(e=="template"?n.content:n,r),ue(n,t),n}let o=t||{};if(pe(e.prototype)){let n=x.k;try{return new $e(new e(o,r),o,r).e}catch(i){throw U(n),i}}else if(typeof e=="function"){let n=x.k,i;try{i=e(o,r)}catch(s){throw U(n),s}return ve(i)||Array.isArray(i)?i:ee(i)}return P("Invalid tag",e,o,r),X()}function et(e){if(ve(e)&&e!==!1||Ye(e))return W("span",null,e);if(e)return te(e)}function Do(e){if(ve(e)&&e!==!1)return document.createTextNode(e.toString());if(K(e))return e;if(Ye(e))return e;if(e)return te(e)}function te(e){if(K(e)||We(e)||qe(e))return e;if(ye(e))return e.rD();if(pe(e)){let t=de(e.vtKey);if(t&&Q(t))return t.e}return P("Invalid child"),X()}function Qe(e,t){if(Array.isArray(t))for(let r=0;r<t.length;r++)Qe(e,t[r]);else{let r=Do(t);r&&e.appendChild(r)}}function ee(e){if(e==null||e===!1||e==="")return X();if(ve(e)||pe(e)||ye(e)||Ye(e)||Array.isArray(e)||e[M]!==void 0){let t=bt.cloneNode();return Qe(t,e),t}return e}function ye(e){return e instanceof B}function hr(e){try{e()}catch(t){Z(t)}}var re=class{constructor(t,r){this.result=t,this.updateRefs=r}};function ur(e,t,r){Ie(e.e,t),e.e=t,e.uR=r}var B=class{#e;#r;#n;es=new Map;vtKey=ce(this);#t=`vt-ro-${this.vtKey}`;#i;#s;#a=!1;#o(){Je(this.#t,new be(this,"onChange"))}constructor(t,r,o){this.#e=t,this.#r=r||X,this.#n=o}registerOnChangeListener(t,r){let o=r&&r.hasVtKey||this,n=this.#t,i=r&&r.eventDispatchDelay||0,s=0,h=i>0?c=>{s||(s=setTimeout(()=>{s=0,ar(n,o.vtKey,h)&&t(c)},i))}:t;return Ze(o,n,h),r&&r.triggerOnRegistration&&nr(()=>{this.#o()}),this}registerOnMount(t,r){return t&&(this.#i||(this.#i=[]),this.#i.push(t)),r&&(this.#s||(this.#s=[]),this.#s.push(r)),this}mount(){this.#a||(this.#a=!0,this.#i&&this.#i.forEach(hr))}unmount(){this.#a&&(this.#a=!1,this.#s&&this.#s.forEach(hr))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let r=this.#e,o=[],n=[];this.es.forEach((i,s)=>{if(i.hU&&i.uR)n.push(i);else{let h=i.rF(t,this),c=h instanceof re,p=ee(et(c?h.result:h));J(p,s),o.push({i,e:p,r:c?h.updateRefs:void 0})}}),n.forEach(i=>{i.hU(i.e,i.uR,r,t)}),o.forEach(i=>{ur(i.i,i.e,i.r)})}rerenderElements(t){let r=x.k;try{this.es.size>1?this.#l(t):this.es.forEach((o,n)=>{if(o.hU&&o.uR)o.hU(o.e,o.uR,this.#e,t);else{let i=o.rF(t,this),s=i instanceof re,h=ee(et(s?i.result:i));J(h,n),ur(o,h,s?i.updateRefs:void 0)}})}catch(o){throw U(r),o}this.#e=t,R.has(this.#t)&&this.#o()}uK(t){let r=this.es.get(t);if(r){let o=r.e[M];return t===o?(this.es.delete(t),ge(t),!0):(P("Invalid state",t,o,r),!1)}else return P("Invalid unmountKey",t),!1}rD(){return this.render(this.#r,this.#n)}render(t,r){let o=t(this.#e,this),n=o instanceof re,i=ee(et(n?o.result:o)),s=ce(this,i);return this.es.set(s,{e:i,rF:t,hU:r,uR:n?o.updateRefs:o}),i}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(r=>{let o=r.e,n=o.parentNode;n&&t.es.forEach(i=>{i.e.parentNode===n&&St(n,o,i.e)})})}ei(t){let r=null;return this.es.forEach(o=>{o.e.parentNode===t&&(r=o.e)}),r}removeAll(){this.es.forEach((t,r)=>{tt(t.e),ge(r)}),this.es.clear()}};function Ie(e,t,r){let o=document.activeElement==e&&document.hasFocus();return r?gr(e):K(e)&&Ot(e),e.replaceWith(t),r?rt(t):K(t)&&Dt(t),o&&t.focus(),t}function At(e,t){e.appendChild(t),rt(t)}function pr(e,t){e.prepend(t),rt(t)}function mr(e,t){Ot(e),e.replaceChildren(...t),Dt(e)}function tt(e){gr(e),e.remove()}function Lt(e,t,r){if(K(e)||We(e)||qe(e)){let o=e.firstElementChild;for(;o;){Lt(o,t,r);let n=o[M];if(n){let i=de(n);i?t(i,n):r&&fr(o)}o=o.nextElementSibling}}}function fr(e){se("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function vr(e,t){if(Q(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(r){Z(r)}Object.values(e.c).forEach(r=>{ye(r)&&r.mount()})}else Et(e),e.mount()}function rt(e){if(!e.isConnected)return;K(e)&&Dt(e);let t=e[M];if(t){let r=de(t);r?vr(r,t):fr(e)}}function Dt(e){e.isConnected&&Lt(e,vr,!0)}function br(e,t){if(Q(e)){if(De(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(r){Z(r)}}Object.values(e.c).forEach(r=>{ye(r)?(r.unmount(),he(r)):pe(r)&&(he(r),Oe(r))}),ge(e.k),Oe(e.c)}else Et(e)?(e.unmount(),ge(e.k)):e.uK(t)}function Ot(e){Lt(e,br)}function gr(e){K(e)&&Ot(e);let t=e[M];if(t){let r=de(t);r&&br(r,t)}}function xe(e,t){return t===null?null:(t.replaceWith(e),rt(e),e)}function Q(e){return e instanceof $e}function pe(e){return e instanceof v}function Oo(e){return e[xt]}function we(e,t){let r=Oo(e),o=r.b||(r.b={});return o[t]||(o[t]=r[t].bind(r))}var v=class{constructor(t,r){this.attrs=t,this.children=r}mount(){}unmount(){}get refresh(){return we(this,"f")}get unmountSignal(){let t=this[Ke];return t||(t=new AbortController,this[Ke]=t,this.vtKey!==void 0&&!z.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return we(this,"q")}get appendToChild(){return we(this,"w")}get prependToChild(){return we(this,"t")}get replaceChildrenOfChild(){return we(this,"y")}get removeChild(){return we(this,"u")}},$e=class{constructor(t,r,o){this.c=t,this.a=r,this.h=o,this.k=ce(this),or(t,"vtKey",this.k),t[xt]=this,this.e=yr(this,this.a,this.h)}m=!1;f(){let t=x.k,r;try{r=yr(this,this.a,this.h)}catch(o){throw U(t),o}this.e=Ie(this.e,r)}q(t,r){return this.e.contains(t)?Ie(t,te(r),!0):t}w(t,r){return this.e.contains(t)?(At(t,te(r)),!0):!1}t(t,r){return this.e.contains(t)?(pr(t,te(r)),!0):!1}y(t,r){return this.e.contains(t)?(mr(t,r.map(o=>te(o))),!0):!1}u(t){return this.e.contains(t)?(tt(t),!0):!1}};function yr(e,t,r){let o=ee(e.c.render(t,r));return J(o,e.k),o}function Oe(e){let t=e[Ke];t&&t.abort()}function me(e,t,r=!1){let o=Ue.get(t),n=document.adoptedStyleSheets;if(o){if(!r)return;let s=n.indexOf(o.sheet);s>=0&&n.splice(s,1)}let i=new CSSStyleSheet;i.replace(e),n.push(i),Ue.set(t,{sheet:i,text:e,key:t})}function f(e,t,r){let o;return"children"in t&&({children:o,...t}=t),r!==void 0&&(t.key=r),W(e,t,o)}var S=f;function a(e,t,...r){return W(e,t,...r)}var Wo="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",wr=!1;function u(e,t,r="component",o=!1){wr||(wr=!0,me(Wo,"vtd/LayerOrder"),qo()),me(`@layer velodesign.${r}{${e}}`,t,o)}function qo(){me(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var kr=!1,nt=function(e,t){kr||(kr=!0,u(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let r=e.size||"1em";return d(a("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:r,height:r}}),e)};var Yo=Symbol("velodesign.clearThemeOptionOverrides");function g(e,t){let r={},o=new Map,n=new Map;for(let[i,s]of Object.entries(e))n.set(i,function(){return C[s]});for(let[i,s]of Object.entries(t??{}))n.set(i,function(){return s});for(let i of n.keys())Object.defineProperty(r,i,{enumerable:!0,get:function(){return o.has(i)?o.get(i):n.get(i)()},set:function(s){s==null?o.delete(i):o.set(i,s)}});return Object.defineProperty(r,Yo,{value:function(){o.clear()}}),r}var C=g({},{closeSymbol:function(){return"\u2715"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var Cr=g({},{loadingSymbol:function(){return a(nt,{size:"1em"})}}),Go=500,Sr=!1,A=function(e,t){Sr||(Sr=!0,u(`
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
.vtd-button[aria-busy="true"]{cursor:progress;}

.vtd-button-spinner{
position:absolute;
top:50%;
left:50%;
transform:translate3d(-50%, -50%, 0);
display:inline-block;
visibility:hidden;
}
`,"vtd/Button"));let r=!1,o=e.loadingOnClick??(e.onClick!==void 0&&e.onClick.length>=2),n=e.minLoadingMs??Go,i;o&&(i=a("span",{class:"vtd-button-spinner"},a(Cr.loadingSymbol,null)));let s=a("span",null,t);return d(a("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:h=>{if(!(o&&r)&&e.onClick)if(o){r=!0;let c=h.currentTarget;c.setAttribute("aria-busy","true"),c.setAttribute("aria-disabled","true"),i&&(i.style.visibility="visible"),s.style.visibility="hidden";let p=Date.now(),m=!1,y=()=>{m||(m=!0,setTimeout(()=>{r=!1,c.removeAttribute("aria-busy"),c.removeAttribute("aria-disabled"),i&&(i.style.visibility="hidden"),s.style.visibility="visible"},Math.max(0,p+n-Date.now())))},b=e.onClick(h,y);b instanceof Promise&&b.finally(y)}else e.onClick(h)}},s,i),e)};var Er=console.log,Tr=console.error,it=function(e,t,r){e.setAttribute(t,r)};var Mr=new Map,Zo=!1;setTimeout(()=>{Mr.entries().forEach(([e,t])=>{Er(t)}),Zo=!0},1e3);var H="#fff",q="#000",Ar="#050505",Jo=H,Qo=q,en="#66b2ff",tn="#c6ff9e",rn="#ffd666",on="#ff6666",Lr="#fafafa",nn="#151515",sn=H,an="#004c99",ln="#286100",dn="#997000",cn="#990000",zt=":color-mix(in hsl,",hn=[-8,-6,-4,-2,0,2,4,6,8],oe=(e,t,r,o)=>hn.map(n=>n<0?`--${e}-${n/2+5}${zt}${t} ${-1*n}0%,${r} ${10+n}0%)`:n==0?`--${e}-5:${r};--${e}:${r}`:`--${e}-${n/2+5}${zt}${r} ${10-n}0%,${o} ${n}0%)`).join(";")+";",un=[1,2,3,4,5,6,7,8,9],Dr=(e,t,r)=>un.map(o=>`--${e}-${o}${zt}${t} ${10-o}0%,${r} ${o}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${r};`,Or=(e,t,r)=>`--${e}:${t};--${e}-alt:${r};`,zr=function(e){it(document.getElementsByTagName("html")[0],"data-theme",e)},$t="vtd-preferred-theme",ne="light",ke="dark",$r="default",Se=ne,Ve,It=null;function Ir(){try{return localStorage.getItem($t)}catch{return It}}function pn(e){try{localStorage.setItem($t,e)}catch{It=e}}function mn(){try{localStorage.removeItem($t)}catch{It=null}}var Vt={getColorScheme:function(){return Se},getColorSchemePreference:function(){if(Ve)return Ve;let e=Ir();return e==ke?ke:e==ne?ne:$r},setColorScheme:function(e){pn(e),Vt.resetColorScheme()},resetColorScheme:function(){let e=Ir();Ve?Se=Ve:e==ke?Se=ke:e==ne?Se=ne:(e&&e!=$r&&mn(),Se=globalThis.matchMedia("(prefers-color-scheme: light)").matches?ne:ke),Se==ne?zr(ne):zr(ke)}};function Vr(e,t,r=!1){u(`
${e}[data-theme="light"]{
${Or("text",t?.textLightColor||Ar,t?.textDarkColor||Lr)}
${Dr("background",t?.backgroundLightColor||Jo,t?.backgroundLightAltColor||Qo)}
${oe("primary",H,t?.primaryLightColor||en,q)}
${oe("secondary",H,t?.secondaryLightColor||tn,q)}
${oe("warning",H,t?.warningLightColor||rn,q)}
${oe("accent",H,t?.accentLightColor||on,q)}
color-scheme:light;}
${e}[data-theme="dark"]{
${Or("text",t?.textDarkColor||Lr,t?.textLightColor||Ar)}
${Dr("background",t?.backgroundDarkColor||nn,t?.backgroundDarkAltColor||sn)}
${oe("primary",q,t?.primaryDarkColor||an,H)}
${oe("secondary",q,t?.secondaryDarkColor||ln,H)}
${oe("warning",q,t?.warningDarkColor||dn,H)}
${oe("accent",q,t?.accentDarkColor||cn,H)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",r)}var Nt={injectStyles(e,t=!0,r){Ve=r,t&&u(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),Vr(":root",e),globalThis.setTimeout(function(){u("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),Vt.resetColorScheme()}};var Y="",L={configureBasePath:function(e){let t=e.replace(/\/+$/,"");Y=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return Y?e==Y?"/":e.startsWith(`${Y}/`)?e.slice(Y.length):e:e},resolveHref:function(e){return!Y||!e.startsWith("/")||e==Y||e.startsWith(`${Y}/`)?e:`${Y}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",L.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){Tr(t),L.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=L.resolveHref(e)}};var $=function(e,t){let r=e.spa??!1;return d(a("a",{class:"vtd-link",href:L.resolveHref(e.to),onClick:r?o=>{o.preventDefault(),L.changeLocation(e.to)}:void 0},t),e)};var fn=g({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var vn=g({closeSymbol:"closeSymbol"},{zoomInSymbol:function(){return"+"},zoomOutSymbol:function(){return"\u2212"}});var bn=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var gn={top:"bottom",bottom:"top",left:"right",right:"left"},_=8,jt=new WeakMap;function yn(e){if(getComputedStyle(e).position==="fixed")return[];try{if(e.matches(":popover-open"))return[]}catch{}let t=[];for(let r=e.offsetParent??e.parentElement;r&&r!==document.documentElement;r=r.parentElement){let o=getComputedStyle(r);if((o.overflowX!=="visible"||o.overflowY!=="visible")&&t.push(r),o.position==="fixed")break}return t}function Br(e){let t={left:0,top:0,right:innerWidth,bottom:innerHeight};for(let r of e){let o=r.getBoundingClientRect();t.left=Math.max(t.left,o.left),t.top=Math.max(t.top,o.top),t.right=Math.min(t.right,o.right),t.bottom=Math.min(t.bottom,o.bottom)}return t}function Bt(e,t,r){switch(t){case"top":return r.top+_-e.top;case"bottom":return e.bottom-(r.bottom-_);case"left":return r.left+_-e.left;case"right":return e.right-(r.right-_)}}function Nr(e,t,r,o){return e<r?r-e:t>o?Math.max(o-t,r-e):0}function F(e,t,r){e.style.getPropertyValue(t)!==r&&(r?e.style.setProperty(t,r):e.style.removeProperty(t))}function xn(e){return(e.offsetParent??e.parentElement??e).getBoundingClientRect()}function Pr(e,t,r,o,n){let i=t==="bottom"?r.top-o.bottom:t==="top"?o.top-r.bottom:t==="right"?r.left-o.right:o.left-r.right;if(e==="top"||e==="bottom"){let h=e==="bottom"?o.bottom+i:o.top-i-n.height;return{left:r.left,right:r.right,top:h,bottom:h+n.height}}let s=e==="right"?o.right+i:o.left-i-n.width;return{left:s,right:s+n.width,top:r.top,bottom:r.bottom}}function jr(e,t,r){let o=e.getBoundingClientRect(),n=(t.anchor??(()=>xn(e)))(),i=Br(r.clippers),s=t.side==="top"||t.side==="bottom",h={width:o.width,height:r.maxHeight===null?o.height:r.naturalHeight},c=o.top-r.y;r.maxHeight!==null&&r.side==="top"&&(c=o.bottom-r.y-h.height);let p={left:o.left-r.x,right:o.right-r.x,top:c,bottom:c+h.height},m=Pr(t.side,r.side,p,n,h),y=t.side,b=m,k=Bt(m,t.side,i);if(k>0){let Le=gn[t.side],er=Pr(Le,r.side,p,n,h);Bt(er,Le,i)<k&&(y=Le,b=er)}let T=null,E=Bt(b,y,i);t.scrolls&&s&&E>0&&(T=Math.max(Math.floor(h.height-E),0),b=y==="bottom"?{...b,bottom:b.bottom-E}:{...b,top:b.top+E});let N=Math.round(Nr(b.left,b.right,i.left+_,i.right-_)),vt=Math.round(Nr(b.top,b.bottom,i.top+_,i.bottom-_));return{side:y,x:N,y:vt,maxHeight:T,size:h,area:i}}function Rr(e,t,r,o){o.side!==r.side&&t.setSide(o.side,o.size),t.scrolls&&F(e,"max-height",o.maxHeight===null?"":`${o.maxHeight}px`),F(e,"translate",o.x===0&&o.y===0?"":o.y===0?`${o.x}px`:`${o.x}px ${o.y}px`),r.maxHeight===null&&o.maxHeight!==null&&(r.naturalHeight=o.size.height),r.side=o.side,r.x=o.x,r.y=o.y,r.maxHeight=o.maxHeight}function j(e,t){F(e,"translate",""),F(e,"width",""),F(e,"max-width",""),F(e,"white-space",""),t.scrolls&&F(e,"max-height",""),t.setSide(t.side,{width:0,height:0});let r=e.getBoundingClientRect();if(r.width===0&&r.height===0)return jt.delete(e),t.side;let o={side:t.side,x:0,y:0,naturalHeight:r.height,maxHeight:null,wrapped:!1,naturalWidth:r.width,clippers:yn(e)},n=Br(o.clippers),i=n.right-n.left-2*_;r.width>i&&(F(e,"width","max-content"),F(e,"max-width",`${Math.max(Math.floor(i),0)}px`),F(e,"white-space","normal"),o.wrapped=!0),jt.set(e,o);let s=jr(e,t,o);return Rr(e,t,o,s),s.side}function wn(e,t){let r=jt.get(e);if(!r)return()=>{j(e,t)};let o=jr(e,t,r),n=o.area.right-o.area.left-2*_;return r.wrapped&&r.naturalWidth<=n||o.size.width>n?()=>{j(e,t)}:()=>{Rr(e,t,r,o)}}function Ce(e,t){let r=0,o=n=>{n.target instanceof Node&&e.contains(n.target)||r||(r=requestAnimationFrame(()=>{r=0;let i=t().map(([s,h])=>wn(s,h));for(let s of i)s?.()}))};return globalThis.addEventListener("resize",o),document.addEventListener("scroll",o,{capture:!0,passive:!0}),()=>{cancelAnimationFrame(r),r=0,globalThis.removeEventListener("resize",o),document.removeEventListener("scroll",o,{capture:!0})}}var Fr=!1,st=function(e,t){return Fr||(Fr=!0,u(`
.vtd-textarea{
padding:0.5ex 1ex;
border-radius:0.25rem;
border:1px solid var(--background-5);
background-color:var(--background-1);
color:var(--text);
font:inherit;
}
`,"vtd/Textarea")),d(a("textarea",{class:"vtd-textarea",name:e.name,value:e.value,rows:e.rows||3,maxlength:e.maxLength,onInput:e.onInput,onChange:e.onChange,placeholder:e.placeholder,required:e.required,style:{resize:e.resize||"vertical"}}),e)};var _r=!1,Ne=function(e,t){return _r||(_r=!0,u(`
.vtd-select-wrapper{
position:relative;
display:inline-block;
}
.vtd-select{
appearance:none;
padding:0.5ex 2em 0.5ex 1ex;
width:100%;
box-sizing:border-box;
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
border:solid var(--text);
border-width:0 0.12em 0.12em 0;
transform:translateY(-70%) rotate(45deg);
pointer-events:none;
}
`,"vtd/Select")),d(a("span",{class:"vtd-select-wrapper"},a("select",{class:"vtd-select",name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-label":e.ariaLabel,onChange:e.onChange},e.placeholder&&a("option",{value:"",disabled:e.placeholderDisabled,selected:!e.value},e.placeholder),e.options.map(r=>a("option",{value:r.value,disabled:r.disabled,selected:r.value==e.value},r.label))),a("span",{class:"vtd-select-chevron"})),e)};var Kr=!1,at=function(e,t){return Kr||(Kr=!0,u(`
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
`,"vtd/Card")),d(a("div",{class:"vtd-card"},e.header&&a("div",{class:"vtd-card-header"},e.header),a("div",{class:"vtd-card-body"},t),e.footer&&a("div",{class:"vtd-card-footer"},e.footer)),e)};var Ur=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),kn=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),Sn=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function Cn(e,t){if(t=="plain")return[{kind:"",text:e}];let r=t=="css"?Sn:kn,o=t!="css",n=[],i=0;r.lastIndex=0;let s=0,h=!1,c=0,p=()=>o&&s>0&&!h&&c==0,m;for(;(m=r.exec(e))!==null;){m.index>i&&n.push({kind:"",text:e.slice(i,m.index)});let k=m.groups??{},T=m[0],E=k.closeTag??k.openTag;if(E!==void 0&&!y(m.index,k.closeTag!==void 0))n.push({kind:"punct",text:"<"}),n.push({kind:!p()&&Ur.has(E)?"keyword":"",text:E});else if(E!==void 0){let N=k.closeTag!==void 0;o&&(s=Math.max(0,s+(N?-1:1)),h=!0),n.push({kind:"punct",text:N?"</":"<"}),n.push({kind:"tag",text:E})}else if(k.word!==void 0){let N=!p()&&Ur.has(k.word);n.push({kind:N?"keyword":"",text:k.word})}else{let N=["comment","string","number","attr","punct"].find(Le=>k[Le]!==void 0),vt=p()&&(N=="string"||N=="number");n.push({kind:vt?"":N??"",text:T}),o&&N=="punct"&&b(T)}i=m.index+T.length}return i<e.length&&n.push({kind:"",text:e.slice(i)}),n;function y(k,T){if(T||!o||p())return!0;let E=k>0?e[k-1]??"":"";return!/[\w$)\]]/.test(E)}function b(k){for(let T=0;T<k.length;T++){let E=k[T];E=="{"?c++:E=="}"?c=Math.max(0,c-1):E==">"&&h&&c==0&&(T>0&&k[T-1]=="/"&&(s=Math.max(0,s-1)),h=!1)}}}var Wr=!1,Rt=function(e){let t=e.language??"tsx",r=Cn(e.code,t);Wr||(Wr=!0,u(`
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
`,"vtd/CodeBlock"));let o=["vtd-code-block"];return e.wrap&&o.push("vtd-code-block-wrap"),e.showLineNumbers&&o.push("vtd-code-block-numbered"),d(a("pre",{class:o.join(" "),"aria-label":e.ariaLabel},a("code",null,e.showLineNumbers?En(r):qr(r))),e)};function qr(e){return e.map(t=>t.kind?a("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function En(e){let t=[[]];for(let r of e)r.text.split(`
`).forEach((n,i)=>{i>0&&t.push([]),n.length>0&&t[t.length-1].push({kind:r.kind,text:n})});return t.map(r=>a("span",{class:"vtd-code-block-line"},qr(r)))}var Tn=g({closeSymbol:"closeSymbol"});var Gr=g({confirmSymbol:"confirmSymbol"}),Yr=!1,Ee=class extends v{#e;#r;#n(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open"))r!=t&&(r.classList.remove("vtd-menu-entry-open"),r.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#i=[];#s=()=>{if(this.#e.open)for(let t of this.#i)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#a;#o;#l;#h={side:"bottom",setSide:t=>{this.#o.classList.toggle("vtd-menu-list-above",t==="top")}};#u=new WeakMap;#f=()=>{let t=[[this.#o,this.#h]];for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open")){let o=this.#u.get(r);o&&t.push(o)}return t};#v(t){let r=t.querySelector(":scope > .vtd-menu-sublist");if(!r)return;let o=getComputedStyle(t).direction==="rtl"?"left":"right",n={side:o,setSide:i=>{r.classList.toggle("vtd-menu-sublist-flipped",i!==o)}};this.#u.set(t,[r,n]),j(r,n)}#b=()=>{this.#s(),this.#e.open?(j(this.#o,this.#h),this.#l??=Ce(this.#o,this.#f)):(this.#l?.(),this.#l=void 0)};#d=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#r.focus()};#p=t=>{this.#a.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#d())};#g=t=>{let r=document.activeElement,o=r?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),o){this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus();return}this.#d(!0);return}if(!this.#e.open)return;let n=this.#n();if(n.length==0)return;let i=n.indexOf(r);if(t.key=="ArrowDown")t.preventDefault(),n[(i+1)%n.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),n[(i-1+n.length)%n.length]?.focus();else if(t.key=="Home")t.preventDefault(),n[0]?.focus();else if(t.key=="End")t.preventDefault(),n[n.length-1]?.focus();else if(t.key=="ArrowRight"){let s=r?.closest(".vtd-menu-entry");r?.classList.contains("vtd-menu-item-parent")&&s&&(t.preventDefault(),this.#c(s),s.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&o&&(t.preventDefault(),this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus())};#y(t){let r=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let o of r?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])o.setAttribute("aria-checked",o==t?"true":"false")}#c(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true"),this.#v(t)}mount(){document.addEventListener("click",this.#p)}unmount(){document.removeEventListener("click",this.#p),this.#l?.(),this.#l=void 0}#m(t){return t.map((r,o)=>{let n=r.dividerBefore&&o>0?" vtd-menu-entry-divided":"";if(r.children&&r.children.length>0){let m=a("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${r.disabled?" vtd-menu-item-disabled":""}`},r.label),y=a("li",{class:`vtd-menu-entry vtd-menu-entry-parent${n}`,role:"none"},m,a("ul",{class:"vtd-menu-sublist",role:"menu"},this.#m(r.children)));return y.addEventListener("pointerenter",()=>{this.#c(y)}),m.addEventListener("click",b=>{b.preventDefault(),y.classList.contains("vtd-menu-entry-open")?this.#t():this.#c(y)}),y}let i=r.selected!==void 0,s=typeof r.selected=="function"?r.selected:void 0,h=s?s():r.selected===!0,c=a("a",{role:i?"menuitemradio":"menuitem","aria-checked":i?h?"true":"false":void 0,href:r.href?L.resolveHref(r.href):"#","aria-disabled":r.disabled,class:`vtd-menu-item${i?" vtd-menu-item-checkable":""}${r.disabled?" vtd-menu-item-disabled":""}`,onClick:m=>{if(r.disabled){m.preventDefault();return}r.href?r.spa&&(m.preventDefault(),L.changeLocation(r.href)):m.preventDefault(),i&&this.#y(c),r.onClick?.(),!r.keepOpen&&(this.#t(),this.#d())}},i?a("span",{class:"vtd-menu-check","aria-hidden":"true"},a(Gr.confirmSymbol,null)):null,r.label);s&&this.#i.push({row:c,read:s});let p=a("li",{class:`vtd-menu-entry${n}`,role:"none"},c);return p.addEventListener("pointerenter",()=>{this.#t(p.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),p})}constructor(t,r){super(t,r),this.#a=t,Yr||(Yr=!0,u(`
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

.vtd-menu-list.vtd-menu-list-above{top:auto;bottom:100%;margin-block-start:0;margin-block-end:0.25em;}
.vtd-menu-sublist.vtd-menu-sublist-flipped{inset-inline-start:auto;inset-inline-end:100%;}
.vtd-menu-entry-open > .vtd-menu-item-parent{background-color:var(--background-2);}
`,"vtd/Menu")),this.#r=a("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#o=a("ul",{class:"vtd-menu-list",role:"menu"},this.#m(t.items)),this.#e=a("details",{class:"vtd-menu",onToggle:this.#b,onKeyDown:this.#g},this.#r,this.#o),d(this.#e,t)}render(){return this.#e}};var Jr=g({collapseSymbol:"collapseSymbol"}),Xr=!1,Zr=3;function Mn(e,t){if(t===void 0||e.length<=Math.max(t,Zr))return{head:e,collapsed:[],tail:[]};let o=Math.max(t,Zr)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-o),tail:e.slice(e.length-o)}}var Ht=function(e,t){Xr||(Xr=!0,u(`
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
`,"vtd/Breadcrumbs"));let{head:r,collapsed:o,tail:n}=Mn(e.items,e.maxItems),i=e.separator||"/",s=p=>p.leading?a("span",{class:"vtd-breadcrumbs-crumb"},a("span",{class:"vtd-breadcrumbs-leading"},p.leading),p.label):p.label,h=(p,m)=>a("li",{class:"vtd-breadcrumbs-item","aria-current":p.to?void 0:"page"},p.to?a($,{to:p.to,spa:e.spa},s(p)):a("span",null,s(p)),m?null:a("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)),c=o.length>0?a("li",{class:"vtd-breadcrumbs-item"},a(Ee,{ariaLabel:e.expandLabel,trigger:a("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||a(Jr.collapseSymbol,null)),items:o.map(p=>({label:s(p),href:p.to,spa:e.spa}))}),a("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)):null;return d(a("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},a("ol",{class:"vtd-breadcrumbs-list"},r.map((p,m)=>h(p,o.length==0&&m==r.length-1)),c,n.map((p,m)=>h(p,m==n.length-1)))),e)};var An=g({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var Qr=!1,Pe=class extends v{#e;#r;#n;#t=()=>{let t=this.#n.sidebar?.get();!this.#r||!t||(this.#r.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#r.setAttribute("aria-expanded",t.open?"true":"false"),this.#r.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,r){if(super(t,r),this.#n=t,Ln(),t.sidebar){let o=t.sidebar;this.#r=a("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let n=o.get();o.set({...n,open:!n.open})}},a("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"}))}this.#e=d(a("nav",{class:"vtd-navbar"},a("div",{class:"vtd-navbar-start"},this.#r??null,t.brand?a("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?a("div",{class:"vtd-navbar-leading"},t.leading):null),a("div",{class:"vtd-navbar-items"},r)),t)}mount(){this.#n.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function Ln(){Qr||(Qr=!0,u(`
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
`,"vtd/Navbar"))}var ro=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",yc=`.vtd-sidebar-collapsed:not(${ro})`,xc=`.vtd-sidebar-collapsed:is(${ro})`;var zn=g({closeSymbol:"closeSymbol"});var In=g({closeSymbol:"closeSymbol"});var Vn=g({},{emptySymbol:function(){return a("span",{class:"vtd-empty-icon","aria-hidden":"true"},a(C.emptySymbol,null))}});var oo=!1,Be=function(e,t){return oo||(oo=!0,u(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),d(a("div",{class:"vtd-statistic"},a("div",{class:"vtd-statistic-title"},e.title),a("div",{class:"vtd-statistic-value"},e.prefix&&a("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&a("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var Nn=g({closeSymbol:"closeSymbol"});var Pn=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Kt=g({},{columnsSymbol:function(){return a("span",{"aria-hidden":"true"},"\u25A5")},emptySymbol:function(){return a("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},a(C.emptySymbol,null))},searchSymbol:function(){return null}});var io=!1;function Te(){io||(io=!0,u(`
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
`,"vtd/Typography","base"))}function Me(e,t,r){let o=[e];return t&&o.push(`vtd-text-${t}`),r?.strong&&o.push("vtd-text-strong"),r?.italic&&o.push("vtd-text-italic"),r?.underline&&o.push("vtd-text-underline"),r?.strike&&o.push("vtd-text-strike"),r?.numeric&&o.push("vtd-text-numeric"),o.join(" ")}var je=function(e,t){Te();let r=Me(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return d(a("h1",{class:r},t),e);case 2:return d(a("h2",{class:r},t),e);case 3:return d(a("h3",{class:r},t),e);case 4:return d(a("h4",{class:r},t),e);case 5:return d(a("h5",{class:r},t),e);default:return d(a("h6",{class:r},t),e)}};var ie=function(e,t){Te();let r=Me(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?d(a("code",{class:r},t),e):d(a("span",{class:r},t),e)};var Ut=function(e,t){return Te(),d(a("p",{class:Me("vtd-paragraph",e.type)},t),e)};var Wt={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function lt(e,t="md"){return e===void 0?Wt[t]:Yn(e)?Wt[e]:e}function Yn(e){return Object.hasOwn(Wt,e)}function dt(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function so(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var ao=!1,I=function(e,t){ao||(ao=!0,u(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let r=e.direction??"row";return d(a("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:r,gap:lt(e.gap),alignItems:dt(e.align),justifyContent:so(e.justify),flexWrap:e.wrap??r==="row"?"wrap":"nowrap"}},t),e)};var lo=!1,qt=function(e,t){lo||(lo=!0,u(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let r=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return d(a("div",{class:"vtd-grid",style:{gridTemplateColumns:r,gap:lt(e.gap),alignItems:dt(e.align)}},t),e)};var co=g({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var l=function(e){return e[e.Null=0]="Null",e[e.False=1]="False",e[e.True=2]="True",e[e.PosInt=3]="PosInt",e[e.Double=4]="Double",e[e.String=5]="String",e[e.Object=6]="Object",e[e.Array=7]="Array",e}({}),w=function(e){return e[e.Base=0]="Base",e[e.KeyTable=1]="KeyTable",e[e.KeyID=2]="KeyID",e}({});function V(e){let t=typeof e;if(t==="number")return Number.isInteger(e)&&e>=0&&Number.isSafeInteger(e)?l.PosInt:l.Double;if(t==="string")return l.String;if(Array.isArray(e))return l.Array;if(e===null)return l.Null;if(t==="object")return l.Object;if(e===!1)return l.False;if(e===!0)return l.True;throw new Error(`velojson: unsupported value type: ${typeof e}`)}var fe=4294967296,ct=new TextEncoder,Gt=new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0}),ht=64;var Qn=1024,Xt=[],Zt=class{buf;bufView;len=0;constructor(t=64){this.buf=new Uint8Array(t),this.bufView=new DataView(this.buf.buffer)}ensureCapacity(t){let r=this.len+t;if(r<=this.buf.length)return;let o=this.buf.length*2||64;for(;o<r;)o*=2;let n=new Uint8Array(o);n.set(this.buf.subarray(0,this.len)),this.buf=n,this.bufView=new DataView(this.buf.buffer)}writeByte(t){this.ensureCapacity(1),this.buf[this.len++]=t&255}writeBytes(t){this.ensureCapacity(t.length),this.buf.set(t,this.len),this.len+=t.length}writeVarint(t){if(!Number.isInteger(t)||t<0)throw new Error(`writeVarint: expected a non-negative integer, got ${t}`);if(!Number.isSafeInteger(t))throw new Error(`writeVarint: value ${t} exceeds safe integer range`);if(t<128){this.writeByte(t);return}if(this.ensureCapacity(10),t<fe){let r=t>>>0;do{let o=r&127;r>>>=7,r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}else{let r=t;do{let o=r%128;r=Math.floor(r/128),r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}}writeDouble(t){this.ensureCapacity(8),this.bufView.setFloat64(this.len,t,!0),this.len+=8}writeString(t){let r=ct.encode(t);this.writeVarint(r.length),this.writeBytes(r)}toUint8Array(){return this.buf.subarray(0,this.len)}get length(){return this.len}reset(){this.len=0}};function D(){let e=Xt.pop();return e!==void 0?(e.reset(),e):new Zt}function O(e){Xt.length<Qn&&Xt.push(e)}var ut=class{pos=0;data;view;limit;keyArray=[];encodingFormat=w.Base;constructor(t){this.data=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.limit=t.length}readByte(){if(this.pos<this.limit)return this.data[this.pos++];throw new Error("velojson: unexpected end of buffer")}readBytes(t){if(this.pos+t<=this.limit){let r=this.data.subarray(this.pos,this.pos+t);return this.pos+=t,r}else throw new Error("velojson: unexpected end of buffer")}readVarint(){let t=this.readByte();if((t&128)===0)return t;let r=t&127,o=128,n,i=1;do if(n=this.readByte(),r+=(n&127)*o,o*=128,i++,i>10)throw new Error("velojson: varint too long (corrupt data)");while(n&128);return r}readDouble(){if(this.pos+8>this.limit)throw new Error("velojson: unexpected end of buffer");let t=this.view.getFloat64(this.pos,!0);return this.pos+=8,t}fieldKind="value";decodeString(t){let r=this.fieldKind;return r==="value"?Gt.decode(t):r==="skip"?"":t.slice()}readString(){let t=this.readVarint();return this.decodeString(this.readBytes(t))}decodeObjectValue(t){let r=this.readVarint();if(this.pos+r>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${r} ${this.limit}`);let o=this.limit;this.limit=this.pos+r;let n=Object.create(null);for(;this.limit>this.pos;)this.decodeObjectFieldValue(n,t);if(this.pos=this.limit,this.limit=o,t!==void 0&&!t.hasAllRequiredFields(n))throw new Error("velojson: missing required field");return n}decodeArrayValue(t,r){let o=this.readVarint(),n,i;if(o<fe?(i=(o&1)===1,n=o>>>1):(i=o%2===1,n=Math.floor(o/2)),this.pos+n>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${n} ${this.limit}`);let s=this.limit;this.limit=this.pos+n;let h;if(i){let c=this.readByte();if(c===l.Null||c===l.False||c===l.True)throw new Error("velojson: homogeneous array cannot use a zero-payload wire type");switch(c){case l.PosInt:for(h=[];this.limit>this.pos;)h.push(this.readVarint());break;case l.Double:if((this.limit-this.pos)%8!=0)throw new Error("velojson: unexpected end of buffer");for(h=[];this.limit>this.pos;)h.push(this.view.getFloat64(this.pos,!0)),this.pos+=8;break;case l.String:for(h=[];this.limit>this.pos;){let p=this.readVarint();h.push(this.decodeString(this.readBytes(p)))}break;case l.Object:{if(r!==void 0){if(t===void 0)throw new Error("velojson: missing keyID");let p=r.fieldMapper(t);if(p===void 0)throw new Error(`velojson: unknown field keyID ${t}`);for(h=[];this.limit>this.pos;)h.push(this.decodeObjectValue(p))}else for(h=[];this.limit>this.pos;)h.push(this.decodeObjectValue());break}case l.Array:if(r!==void 0)throw new Error("velojson: VBIN Array not allowed to contain nested arrays");for(h=[];this.limit>this.pos;)h.push(this.decodeArrayValue());break;default:throw new Error(`velojson: invalid wire type ${c}`)}}else for(h=[];this.limit>this.pos;)h.push(this.decodeArrayEntryValue(r));return this.pos=this.limit,this.limit=s,h}decodeKeyTableArrayValue(){let t=this.readVarint();if(this.pos+t>this.limit)throw new Error("velojson: unexpected end of buffer");let r=this.limit;this.limit=this.pos+t;let o=[];for(o.push("");this.limit>this.pos;){let n=this.readVarint();o.push(this.decodeString(this.readBytes(n)))}return this.pos=this.limit,this.limit=r,o}decodeRootValue(t){let r=this.readVarint(),o,n;if(r<fe?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),this.encodingFormat=n,t!==void 0&&n!==w.KeyID)throw new Error("velojson: VBIN decode requires a VBIN (KeyID format) message");if(n===w.Base)switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:return this.decodeObjectValue();case l.Array:return this.decodeArrayValue();default:throw new Error(`velojson: unknown wire type ${o}`)}else if(n===w.KeyTable){if(o!==l.Object&&o!==l.Array)throw new Error("velojson: KeyTable encoding format only valid for Object and Array root values");let i=this.pos,s=this.readVarint();return o===l.Object?(this.pos+=s,this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeObjectValue()):(this.pos+=Math.floor(s/2),this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeArrayValue())}else if(n===w.KeyID){if(o!==l.Object)throw new Error("velojson: KeyIDs encoding format only valid for Object root values");return this.decodeObjectValue(t)}else throw new Error("velojson: unrecognized encoding format")}decodeObjectFieldValue(t,r){let o=this.readVarint(),n,i;o<fe?(n=o&7,i=o>>>3):(n=o%8,i=Math.floor(o/8));let s=null;if(i>0)if(this.encodingFormat===w.Base)s=Gt.decode(this.readBytes(i));else if(this.encodingFormat===w.KeyTable)if(i<this.keyArray.length)s=this.keyArray[i];else throw new Error("velojson: key index out of bounds");else if(this.encodingFormat===w.KeyID)if(r===void 0)s=String(i);else{let h=this.fieldKind;switch(n>=l.String&&h!=="skip"&&(this.fieldKind=r.fieldKind(i)),n){case l.Null:r.assignValue(t,i,null);break;case l.False:r.assignValue(t,i,!1);break;case l.True:r.assignValue(t,i,!0);break;case l.PosInt:r.assignValue(t,i,this.readVarint());break;case l.Double:r.assignValue(t,i,this.readDouble());break;case l.String:r.assignValue(t,i,this.readString());break;case l.Object:{let c=r.fieldMapper(i);if(c===void 0)throw new Error(`velojson: unknown field keyID ${i}`);r.assignValue(t,i,this.decodeObjectValue(c));break}case l.Array:r.assignValue(t,i,this.decodeArrayValue(i,r));break;default:throw new Error(`velojson: unknown wire type ${n}`)}this.fieldKind=h;return}else throw new Error("velojson: encoding format not recognized");else if(this.encodingFormat===w.Base)s="";else throw new Error("velojson: object field is missing a required key");switch(n){case l.Null:t[s]=null;break;case l.False:t[s]=!1;break;case l.True:t[s]=!0;break;case l.PosInt:t[s]=this.readVarint();break;case l.Double:t[s]=this.readDouble();break;case l.String:t[s]=this.readString();break;case l.Object:t[s]=this.decodeObjectValue();break;case l.Array:t[s]=this.decodeArrayValue();break;default:throw new Error(`velojson: unknown wire type ${n}`)}}decodeArrayEntryValue(t){let r=this.readVarint(),o,n;if(r<fe?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),n>0)throw new Error("velojson: array entry must not have a key");switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Object");return this.decodeObjectValue()}case l.Array:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Array");return this.decodeArrayValue()}default:throw new Error(`velojson: unknown wire type ${o}`)}}};var ei=4096,pt=new Map,G=null,Ae=null;function uo(e){e!==Ae&&(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e===G&&(G=e.next),e.prev=Ae,e.next=null,Ae&&(Ae.next=e),Ae=e,G===null&&(G=e))}function po(e){let t=pt.get(e);if(t!==void 0)return uo(t),t.bytes;let r=ct.encode(e);if(pt.size>=ei&&G!==null){let n=G;pt.delete(n.key),G=n.next,G?G.prev=null:Ae=null,n.prev=null,n.next=null}let o={key:e,bytes:r,prev:null,next:null};return pt.set(e,o),uo(o),r}function mo(e,t){let r=!1,o=null;if(t.length>=ht){let s=0,h=t[s],c=V(h===void 0?null:h);if(c===l.Null||c===l.False||c===l.True)o=null,r=!1;else{for(o=c,(c===l.PosInt||c===l.Double)&&(r=!0),s+=1;s<t.length;s++){let p=t[s],m=V(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True){o=null,r=!1;break}else if(m!==c)if(o=null,r){if(m!==l.PosInt&&m!==l.Double){r=!1;break}}else break}if(o==null&&r==!0)for(;s<t.length;s++){let p=t[s],m=V(p===void 0?null:p);if(m!==l.PosInt&&m!==l.Double){r=!1;break}}}}let n=D();if(o!==null)switch(n.writeByte(o),o){case l.PosInt:for(let s=0;s<t.length;s++)n.writeVarint(t[s]);break;case l.Double:for(let s=0;s<t.length;s++)n.writeDouble(t[s]);break;case l.String:for(let s=0;s<t.length;s++)n.writeString(t[s]);break;case l.Object:{for(let s=0;s<t.length;s++){let h=D(),c=t[s];for(let m of Object.keys(c))He(h,m,c[m],!1);let p=h.toUint8Array();n.writeVarint(p.length),n.writeBytes(p),O(h)}break}case l.Array:for(let s=0;s<t.length;s++)mo(n,t[s]);break}else if(r)for(let s=0;s<t.length;s++){let h=t[s];Number.isInteger(h)&&h>=0&&Number.isSafeInteger(h)?(n.writeByte(l.PosInt),n.writeVarint(h)):(n.writeByte(l.Double),n.writeDouble(h))}else for(let s of t)He(n,null,s,!0);let i=n.toUint8Array();e.writeVarint(i.length*2+(o!==null?1:0)),e.writeBytes(i),O(n)}function He(e,t,r,o){if(r===void 0&&o===!1)return;let n=V(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(n);else{let i=po(t);e.writeVarint(i.length*8+n),e.writeBytes(i)}switch(n){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let i=D(),s=r;for(let c of Object.keys(s))He(i,c,s[c],!1);let h=i.toUint8Array();e.writeVarint(h.length),e.writeBytes(h),O(i);break}case l.Array:mo(e,r);break}}function mt(e,t,r,o){let n=!1,i=null;if(t.length>=ht){let c=0,p=t[c],m=V(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True)i=null,n=!1;else{for(i=m,(m===l.PosInt||m===l.Double)&&(n=!0),c+=1;c<t.length;c++){let y=t[c],b=V(y===void 0?null:y);if(b===l.Null||b===l.False||b===l.True){i=null,n=!1;break}else if(b!==m)if(i=null,n){if(b!==l.PosInt&&b!==l.Double){n=!1;break}}else break}if(i==null&&n==!0)for(;c<t.length;c++){let y=t[c],b=V(y===void 0?null:y);if(b!==l.PosInt&&b!==l.Double){n=!1;break}}}}let s=D();if(i!==null)switch(s.writeByte(i),i){case l.PosInt:for(let c=0;c<t.length;c++)s.writeVarint(t[c]);break;case l.Double:for(let c=0;c<t.length;c++)s.writeDouble(t[c]);break;case l.String:for(let c=0;c<t.length;c++)s.writeString(t[c]);break;case l.Object:{for(let c=0;c<t.length;c++){let p=D(),m=t[c];for(let b of Object.keys(m))Fe(p,b,m[b],!1,r,o);let y=p.toUint8Array();s.writeVarint(y.length),s.writeBytes(y),O(p)}break}case l.Array:for(let c=0;c<t.length;c++)mt(s,t[c],r,o);break}else if(n)for(let c=0;c<t.length;c++){let p=t[c];Number.isInteger(p)&&p>=0&&Number.isSafeInteger(p)?(s.writeByte(l.PosInt),s.writeVarint(p)):(s.writeByte(l.Double),s.writeDouble(p))}else for(let c of t)Fe(s,null,c,!0,r,o);let h=s.toUint8Array();e.writeVarint(h.length*2+(i!==null?1:0)),e.writeBytes(h),O(s)}function Fe(e,t,r,o,n,i){if(r===void 0&&o===!1)return;let s=V(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(s);else{let h=i.get(t);h!==void 0?e.writeVarint(h*8+s):(n.push(t),i.set(t,n.length),e.writeVarint(n.length*8+s))}switch(s){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let h=D(),c=r;for(let m of Object.keys(c))Fe(h,m,c[m],!1,n,i);let p=h.toUint8Array();e.writeVarint(p.length),e.writeBytes(p),O(h);break}case l.Array:mt(e,r,n,i);break}}function fo(e,t){let r=D();for(let n=0;n<t.length;n++){let i=t[n];if(i==null)throw new Error("velojson: KeyTable cannot have undefined or null values");r.writeString(i)}let o=r.toUint8Array();e.writeVarint(o.length),e.writeBytes(o),O(r)}function vo(e,t){if(e===void 0)return new Uint8Array;let r;t===void 0?e!==null&&(typeof e=="object"||Array.isArray(e))?r=w.KeyTable:r=w.Base:r=t;let o=D();if(r===w.Base)He(o,null,e,!1);else if(r===w.KeyTable){let i=V(e);o.writeVarint(r*8+i);let s=new Map,h=[];switch(i){case l.Object:{let c=D(),p=e;for(let y of Object.keys(p))Fe(c,y,p[y],!1,h,s);let m=c.toUint8Array();o.writeVarint(m.length),o.writeBytes(m),O(c);break}case l.Array:mt(o,e,h,s);break;default:throw new Error("velojson: KeyTable encoding format only supported for root Object or Array types")}fo(o,h)}else throw new Error("velojson: encoding format not recognized");let n=o.toUint8Array().slice();return O(o),n}function bo(e){return e.length==0?void 0:new ut(e).decodeRootValue()}var ft={encode:vo,decode:bo};var go={velochart:"/docs/velochart/",velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var ri=e=>f("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),oi=()=>S(Pe,{style:{borderBottom:"1px solid var(--background-4)"},brand:S($,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[f(ri,{size:"1.75em"}),"The Velocity Project"]}),children:[f($,{to:go.velotype,children:"Docs"}),f($,{to:"https://github.com/Velotype",children:"GitHub"}),f($,{to:"https://jsr.io/@velotype",children:"JSR"}),f($,{to:"https://argoday.medium.com/",children:"Articles"})]}),ni=()=>S(ie,{type:"muted",children:["All projects live under the ",f($,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",f($,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",f($,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function yo(e,t="60rem"){Nt.injectStyles(),xe(S("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[oi(),f("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:S(I,{direction:"column",gap:"lg",children:[e,ni()]})})]}),document.getElementById("app"))}var xo='{"name": "Some name", "age": 20, "address": null}';function Co(e){let t=e[0];return t===void 0||t>23?"unknown":["VSON Base","VSON Key Table","VBIN"][Math.floor(t/8)]}var ii=e=>Array.from(e,t=>t.toString(16).padStart(2,"0")).join(" "),si=e=>btoa(Array.from(e,t=>String.fromCharCode(t)).join("")),Jt=e=>e instanceof Error?e.message:String(e);function wo(e,t){if(e.trim()=="")return{kind:"empty"};let r;try{r=JSON.parse(e)}catch(o){return{kind:"error",message:`Not valid JSON: ${Jt(o)}`}}try{let o=t=="auto"?ft.encode(r):ft.encode(r,t=="base"?w.Base:w.KeyTable);return{kind:"bytes",hex:ii(o),base64:si(o),jsonBytes:new TextEncoder().encode(JSON.stringify(r)).length,vsonBytes:o.length,format:Co(o)}}catch(o){return{kind:"error",message:Jt(o)}}}function ai(e){let t=e.replace(/0x/gi,"").replace(/[\s:,]/g,"");if(/^[0-9a-f]+$/i.test(t)&&t.length%2==0)return{bytes:Uint8Array.from(t.match(/../g)??[],r=>parseInt(r,16)),how:"hex"};try{return{bytes:Uint8Array.from(atob(e.replace(/\s/g,"")),r=>r.charCodeAt(0)),how:"base64"}}catch{return"These bytes are not hex (an even number of digits) or base64."}}function li(e){if(e.trim()=="")return{kind:"empty"};let t=ai(e);if(typeof t=="string")return{kind:"error",message:t};try{let r=ft.decode(t.bytes);return{kind:"json",text:r===void 0?"(no bytes, which decode to undefined)":JSON.stringify(r,null,2),format:Co(t.bytes),bytes:t.bytes.length,how:t.how}}catch(r){return{kind:"error",message:`Could not decode these bytes: ${Jt(r)}`}}}var ko=e=>f("div",{style:{fontFamily:"monospace",whiteSpace:"pre-wrap",overflowWrap:"anywhere",padding:"0.75em 1em",border:"1px solid var(--background-4)",borderRadius:"0.5rem",backgroundColor:"var(--background-2)"},children:e.text}),Eo=e=>f("div",{role:"alert",style:{color:"var(--accent-7)"},children:e}),di=e=>{if(e.kind=="empty")return f(ie,{type:"muted",children:"Type some JSON to see its bytes."});if(e.kind=="error")return Eo(e.message);let t=Math.round((1-e.vsonBytes/e.jsonBytes)*100);return S(I,{direction:"column",children:[S(I,{gap:"lg",children:[f(Be,{title:"JSON text",value:String(e.jsonBytes),suffix:" bytes"}),f(Be,{title:e.format,value:String(e.vsonBytes),suffix:" bytes"}),f(Be,{title:"Difference",value:t>=0?`${t}% smaller`:`${-t}% larger`})]}),f(je,{level:4,children:"Hex"}),f(ko,{text:e.hex}),f(je,{level:4,children:"Base64"}),f(ko,{text:e.base64})]})},ci=e=>e.kind=="empty"?f(ie,{type:"muted",children:"Paste bytes as hex or base64 to see their JSON."}):e.kind=="error"?Eo(e.message):S(I,{direction:"column",children:[f(ie,{type:"muted",children:`${e.format}, ${e.bytes} bytes read as ${e.how}`}),e.format=="VBIN"&&f(ie,{type:"muted",children:"VBIN has no key names on the wire, so the keys show as their numeric key IDs."}),f(Rt,{code:e.text,language:"plain"})]}),So={width:"100%",fontFamily:"monospace",marginInlineStart:"0"},Qt=class extends v{format="auto";encoded=new B(wo(xo,"auto"),di);decoded=new B({kind:"empty"},ci);jsonInput=f(st,{rows:8,value:xo,resize:"vertical",style:So,onInput:()=>this.runEncode()});bytesInput=f(st,{rows:8,placeholder:"e.g. 68 03 ...",resize:"vertical",style:So,onInput:()=>this.runDecode()});runEncode(){this.encoded.set(wo(this.jsonInput.value,this.format))}runDecode(){this.decoded.set(li(this.bytesInput.value))}useEncodedBytes(){let t=this.encoded.get();t.kind=="bytes"&&(this.bytesInput.value=t.hex,this.runDecode())}mount(){this.useEncodedBytes()}render(){return S(I,{direction:"column",gap:"lg",children:[f(Ht,{items:[{label:"The Velocity Project",to:"/"},{label:"velojson (VSON)",to:"/projects/velojson/"},{label:"Playground"}]}),S(I,{direction:"column",children:[f(je,{level:1,children:"velojson playground"}),S(Ut,{children:["Encode JSON to VSON bytes and decode bytes back to JSON, in your browser. Nothing is sent anywhere. It runs ",f("code",{children:"@velotype/velojson"}),", the version that supports every format. VBIN needs key IDs agreed ahead of time, so it only decodes here, with numeric keys."]})]}),S(qt,{minColumnWidth:"26em",children:[f(at,{header:"JSON to bytes",children:S(I,{direction:"column",children:[this.jsonInput,S(I,{align:"center",children:[f("label",{for:"format",children:"Format"}),f(Ne,{id:"format",value:"auto",options:[{value:"auto",label:"Automatic (Key Table for an object or Array)"},{value:"base",label:"VSON Base"},{value:"keytable",label:"VSON Key Table"}],onChange:t=>{this.format=t.currentTarget.value,this.runEncode()}})]}),this.encoded,f("div",{children:f(A,{type:"secondary",onClick:()=>this.useEncodedBytes(),children:"Decode these bytes"})})]})}),f(at,{header:"Bytes to JSON",children:S(I,{direction:"column",children:[this.bytesInput,this.decoded]})})]})]})}};yo(f(Qt,{}));
