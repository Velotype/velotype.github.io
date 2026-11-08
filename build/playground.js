var se=console.warn.bind(console,"vt:"),P=console.error.bind(console,"vt:"),ko=xt("span","display:contents;"),ft=xt("div","display:contents;"),Qt=xt("div","display:none;");var He={value:void 0,writable:!1,configurable:!1,enumerable:!1},vt=new Map,bt=new Map,er=/[A-Z]/g,z=new Map,D=Symbol(),gt=Symbol(),Ke=Symbol(),R=new Map,ae=new Map,_e=new Map,x={k:1,r:0,p:void 0,s:void 0},yt={version:"0.3.3",domKeyProperty:D,domReferences:z,listenersF:R,listenersR:ae,styleSectionMounted:_e,setEventTracer:()=>{}};function xt(e,t){let r=document.createElement(e);return r.style.cssText=t,r}function _(e){return e instanceof HTMLElement}function Ue(e){return e instanceof SVGSVGElement}function We(e){return e instanceof MathMLElement}function qe(e){return e instanceof Text}function ve(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function tr(e,t,r){He.value=r,Object.defineProperty(e,t,He),He.value=void 0}function X(){return Qt.cloneNode()}function rr(e){Promise.resolve().then(e)}function wt(e,t,r){let o=t.nextSibling;o===r?e.insertBefore(r,t):(e.insertBefore(t,r),e.insertBefore(r,o))}function J(e){typeof reportError=="function"?reportError(e):P(e)}var be=class{constructor(t,r,o){this.emittingObject=t,this.event=r,this.data=o}};function Xe(e,t,r){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");le&&(r=kt(t,r)),or(R,t,e.vtKey,r),or(ae,e.vtKey,t,r)}function or(e,t,r,o){let n=e.get(t);n||(n=new Map,e.set(t,n));let i=n.get(r);i?i.push(o):n.set(r,[o])}function Me(e){let t=ae.get(e.vtKey);t&&t.forEach((r,o)=>{nr(R,o,e.vtKey),nr(ae,e.vtKey,o)})}function nr(e,t,r,o){let n=e.get(t);if(n){let i=n.get(r);if(i){if(x.r++,o){let s=i.indexOf(o);if(s<0&&le&&(s=i.findIndex(c=>c.o===o)),s<0){se("Listener not registered",t,r);return}i=i.slice(),i.splice(s,1),n.set(r,i)}(!o||i.length<=0)&&(n.delete(r),n.size<=0&&e.delete(t))}else se("No listeners to remove",t,r)}else se("No listeners to remove",t,r)}function ir(e,t,r){let o=R.get(e),n=o&&o.get(t);return!!n&&(n.includes(r)||!!le&&n.some(i=>i.o===r))}function Je(e,t,r){let o=R.get(e);o?o.forEach((n,i)=>{if(!r||r.vtKey!=i){let s=x.r;n.forEach(c=>{if(s!==x.r){let d=o.get(i);if(d!==n&&!(d&&d.includes(c)))return}try{c(t)}catch(d){J(d)}})}}):se("No listeners for event",e,t)}var le,Ge;function kt(e,t){let r=o=>{if(le&&Ge!==o){Ge=o,queueMicrotask(()=>{Ge=void 0});try{le(e,o)}catch{}}t(o)};return r.o=t,r}function Ye(e,t){e.forEach((r,o)=>{r.forEach((n,i)=>{r.set(i,n.map(s=>t(o,i,s)))})})}function sr(e){let t=!!le;if(le=e,Ge=void 0,e&&!t)Ye(R,(r,o,n)=>kt(r,n)),Ye(ae,(r,o,n)=>kt(o,n));else if(!e&&t){let r=(o,n,i)=>i.o??i;Ye(R,r),Ye(ae,r)}}function So(){yt.setEventTracer=sr;let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,r=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(o){return t.set(r,o),r++},unregister(o){t.delete(o)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(yt)}So();function Z(e,t){e[D]=t}function de(e){return z.get(e)}function ce(e,t){let r=x.k++;return t&&Z(t,r),z.set(r,e),r}function ge(e){z.delete(e)}function ue(e){z.delete(e.vtKey),Me(e)}function U(e){for(let t=e;t<x.k;t++){let r=z.get(t);r&&(Q(r)?(Me(r.c),z.delete(t),Oe(r.c)):r.vtKey===t||!r.uK?(ue(r),z.delete(t)):r.uK(t))}}function St(e){return e instanceof ze}var ze=class{constructor(t){this.w=t,this.k=ce(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),ue(t)})}};function u(e,t){if(t.id&&Ct(e,"id",t.id),t.class){let r=e.getAttribute("class");Ct(e,"class",r?r+" "+t.class:t.class)}return t.style&&he(e,{style:t.style}),e}function lr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return Et(e,t);let r=Object.getPrototypeOf(e),o=r===x.p?x.s:bt.get(r);o||(o=new Map,bt.set(r,o)),x.p=r,x.s=o;let n=o.get(t);return n===void 0&&(n=Et(r,t),o.set(t,n)),n}function Et(e,t){let r=e;for(;r;){let o=Object.getOwnPropertyDescriptor(r,t);if(o&&(o.set||o.writable))return!0;r=Object.getPrototypeOf(r)}return!1}function Ct(e,t,r){lr(e,t)?e[t]=r:e.setAttribute(t,r.toString())}function Eo(e,t,r){lr(e,t)?e[t]=r:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(r)):r&&e.setAttribute(t,"")}function Co(e){if(e.startsWith("--"))return e;let t=e.replace(er,r=>"-"+r.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function he(e,t){if(!t)return;let r=t.type=="range",o=Object.keys(t);for(let n=0;n<o.length;n++){let i=o[n];(!r||i!="value")&&ar(e,i,t[i])}r&&ar(e,"value",t.value)}function ar(e,t,r){if(t.startsWith("on")&&t.length>4){if(r){let o,n=r;typeof r!="function"&&r.handler&&(n=r.handler,o=r.options);let i=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(i,n,o)}}else if(t=="style"&&r instanceof Object)for(let o of Object.keys(r)){let n=r[o]==null?"":r[o],i=typeof n=="number"?n.toString():n,s=e.style;if(i.endsWith("!important"))s.setProperty(Co(o),i.slice(0,-10),"important");else{let c=vt.get(o);c===void 0&&(c=Et(s,o),vt.set(o,c)),c?s[o]=i:s.setProperty(o,i)}}else if(typeof r=="boolean")Eo(e,t,r);else if(typeof r!="function")if(t=="vtwith"){let o=e[D];if(o)P("vtwith on a keyed element",o);else{let n=new ze(r);Z(e,n.k)}}else r!=null&&Ct(e,t,r)}function W(e,t,...r){if(typeof e=="string"){let n=document.createElement(e);return Ze(e=="template"?n.content:n,r),he(n,t),n}let o=t||{};if(pe(e.prototype)){let n=x.k;try{return new Ie(new e(o,r),o,r).e}catch(i){throw U(n),i}}else if(typeof e=="function"){let n=x.k,i;try{i=e(o,r)}catch(s){throw U(n),s}return ve(i)||Array.isArray(i)?i:ee(i)}return P("Invalid tag",e,o,r),X()}function Qe(e){if(ve(e)&&e!==!1||qe(e))return W("span",null,e);if(e)return te(e)}function To(e){if(ve(e)&&e!==!1)return document.createTextNode(e.toString());if(_(e))return e;if(qe(e))return e;if(e)return te(e)}function te(e){if(_(e)||Ue(e)||We(e))return e;if(ye(e))return e.rD();if(pe(e)){let t=de(e.vtKey);if(t&&Q(t))return t.e}return P("Invalid child"),X()}function Ze(e,t){if(Array.isArray(t))for(let r=0;r<t.length;r++)Ze(e,t[r]);else{let r=To(t);r&&e.appendChild(r)}}function ee(e){if(e==null||e===!1||e==="")return X();if(ve(e)||pe(e)||ye(e)||qe(e)||Array.isArray(e)||e[D]!==void 0){let t=ft.cloneNode();return Ze(t,e),t}return e}function ye(e){return e instanceof j}function dr(e){try{e()}catch(t){J(t)}}var re=class{constructor(t,r){this.result=t,this.updateRefs=r}};function cr(e,t,r){Ve(e.e,t),e.e=t,e.uR=r}var j=class{#e;#r;#n;es=new Map;vtKey=ce(this);#t=`vt-ro-${this.vtKey}`;#i;#s;#a=!1;#o(){Je(this.#t,new be(this,"onChange"))}constructor(t,r,o){this.#e=t,this.#r=r||X,this.#n=o}registerOnChangeListener(t,r){let o=r&&r.hasVtKey||this,n=this.#t,i=r&&r.eventDispatchDelay||0,s=0,c=i>0?d=>{s||(s=setTimeout(()=>{s=0,ir(n,o.vtKey,c)&&t(d)},i))}:t;return Xe(o,n,c),r&&r.triggerOnRegistration&&rr(()=>{this.#o()}),this}registerOnMount(t,r){return t&&(this.#i||(this.#i=[]),this.#i.push(t)),r&&(this.#s||(this.#s=[]),this.#s.push(r)),this}mount(){this.#a||(this.#a=!0,this.#i&&this.#i.forEach(dr))}unmount(){this.#a&&(this.#a=!1,this.#s&&this.#s.forEach(dr))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let r=this.#e,o=[],n=[];this.es.forEach((i,s)=>{if(i.hU&&i.uR)n.push(i);else{let c=i.rF(t,this),d=c instanceof re,p=ee(Qe(d?c.result:c));Z(p,s),o.push({i,e:p,r:d?c.updateRefs:void 0})}}),n.forEach(i=>{i.hU(i.e,i.uR,r,t)}),o.forEach(i=>{cr(i.i,i.e,i.r)})}rerenderElements(t){let r=x.k;try{this.es.size>1?this.#l(t):this.es.forEach((o,n)=>{if(o.hU&&o.uR)o.hU(o.e,o.uR,this.#e,t);else{let i=o.rF(t,this),s=i instanceof re,c=ee(Qe(s?i.result:i));Z(c,n),cr(o,c,s?i.updateRefs:void 0)}})}catch(o){throw U(r),o}this.#e=t,R.has(this.#t)&&this.#o()}uK(t){let r=this.es.get(t);if(r){let o=r.e[D];return t===o?(this.es.delete(t),ge(t),!0):(P("Invalid state",t,o,r),!1)}else return P("Invalid unmountKey",t),!1}rD(){return this.render(this.#r,this.#n)}render(t,r){let o=t(this.#e,this),n=o instanceof re,i=ee(Qe(n?o.result:o)),s=ce(this,i);return this.es.set(s,{e:i,rF:t,hU:r,uR:n?o.updateRefs:o}),i}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(r=>{let o=r.e,n=o.parentNode;n&&t.es.forEach(i=>{i.e.parentNode===n&&wt(n,o,i.e)})})}ei(t){let r=null;return this.es.forEach(o=>{o.e.parentNode===t&&(r=o.e)}),r}removeAll(){this.es.forEach((t,r)=>{et(t.e),ge(r)}),this.es.clear()}};function Ve(e,t,r){let o=document.activeElement==e&&document.hasFocus();return r?vr(e):_(e)&&At(e),e.replaceWith(t),r?tt(t):_(t)&&Lt(t),o&&t.focus(),t}function Tt(e,t){e.appendChild(t),tt(t)}function ur(e,t){e.prepend(t),tt(t)}function hr(e,t){At(e),e.replaceChildren(...t),Lt(e)}function et(e){vr(e),e.remove()}function Dt(e,t,r){if(_(e)||Ue(e)||We(e)){let o=e.firstElementChild;for(;o;){Dt(o,t,r);let n=o[D];if(n){let i=de(n);i?t(i,n):r&&pr(o)}o=o.nextElementSibling}}}function pr(e){se("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function mr(e,t){if(Q(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(r){J(r)}Object.values(e.c).forEach(r=>{ye(r)&&r.mount()})}else St(e),e.mount()}function tt(e){if(!e.isConnected)return;_(e)&&Lt(e);let t=e[D];if(t){let r=de(t);r?mr(r,t):pr(e)}}function Lt(e){e.isConnected&&Dt(e,mr,!0)}function fr(e,t){if(Q(e)){if(Me(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(r){J(r)}}Object.values(e.c).forEach(r=>{ye(r)?(r.unmount(),ue(r)):pe(r)&&(ue(r),Oe(r))}),ge(e.k),Oe(e.c)}else St(e)?(e.unmount(),ge(e.k)):e.uK(t)}function At(e){Dt(e,fr)}function vr(e){_(e)&&At(e);let t=e[D];if(t){let r=de(t);r&&fr(r,t)}}function xe(e,t){return t===null?null:(t.replaceWith(e),tt(e),e)}function Q(e){return e instanceof Ie}function pe(e){return e instanceof v}function Do(e){return e[gt]}function we(e,t){let r=Do(e),o=r.b||(r.b={});return o[t]||(o[t]=r[t].bind(r))}var v=class{constructor(t,r){this.attrs=t,this.children=r}mount(){}unmount(){}get refresh(){return we(this,"f")}get unmountSignal(){let t=this[Ke];return t||(t=new AbortController,this[Ke]=t,this.vtKey!==void 0&&!z.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return we(this,"q")}get appendToChild(){return we(this,"w")}get prependToChild(){return we(this,"t")}get replaceChildrenOfChild(){return we(this,"y")}get removeChild(){return we(this,"u")}},Ie=class{constructor(t,r,o){this.c=t,this.a=r,this.h=o,this.k=ce(this),tr(t,"vtKey",this.k),t[gt]=this,this.e=br(this,this.a,this.h)}m=!1;f(){let t=x.k,r;try{r=br(this,this.a,this.h)}catch(o){throw U(t),o}this.e=Ve(this.e,r)}q(t,r){return this.e.contains(t)?Ve(t,te(r),!0):t}w(t,r){return this.e.contains(t)?(Tt(t,te(r)),!0):!1}t(t,r){return this.e.contains(t)?(ur(t,te(r)),!0):!1}y(t,r){return this.e.contains(t)?(hr(t,r.map(o=>te(o))),!0):!1}u(t){return this.e.contains(t)?(et(t),!0):!1}};function br(e,t,r){let o=ee(e.c.render(t,r));return Z(o,e.k),o}function Oe(e){let t=e[Ke];t&&t.abort()}function me(e,t,r=!1){let o=_e.get(t),n=document.adoptedStyleSheets;if(o){if(!r)return;let s=n.indexOf(o.sheet);s>=0&&n.splice(s,1)}let i=new CSSStyleSheet;i.replace(e),n.push(i),_e.set(t,{sheet:i,text:e,key:t})}function f(e,t,r){let o;return"children"in t&&({children:o,...t}=t),r!==void 0&&(t.key=r),W(e,t,o)}var S=f;function a(e,t,...r){return W(e,t,...r)}var Ho="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",yr=!1;function h(e,t,r="component",o=!1){yr||(yr=!0,me(Ho,"vtd/LayerOrder"),Ko()),me(`@layer velodesign.${r}{${e}}`,t,o)}function Ko(){me(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var xr=!1,ot=function(e,t){xr||(xr=!0,h(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let r=e.size||"1em";return u(a("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:r,height:r}}),e)};var _o=Symbol("velodesign.clearThemeOptionOverrides");function g(e,t){let r={},o=new Map,n=new Map;for(let[i,s]of Object.entries(e))n.set(i,function(){return E[s]});for(let[i,s]of Object.entries(t??{}))n.set(i,function(){return s});for(let i of n.keys())Object.defineProperty(r,i,{enumerable:!0,get:function(){return o.has(i)?o.get(i):n.get(i)()},set:function(s){s==null?o.delete(i):o.set(i,s)}});return Object.defineProperty(r,_o,{value:function(){o.clear()}}),r}var E=g({},{closeSymbol:function(){return"\u2715"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var kr=g({},{loadingSymbol:function(){return a(ot,{size:"1em"})}}),Uo=500,wr=!1,L=function(e,t){wr||(wr=!0,h(`
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
`,"vtd/Button"));let r=!1,o=e.loadingOnClick??(e.onClick!==void 0&&e.onClick.length>=2),n=e.minLoadingMs??Uo,i;o&&(i=a("span",{class:"vtd-button-spinner"},a(kr.loadingSymbol,null)));let s=a("span",null,t);return u(a("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:c=>{if(!(o&&r)&&e.onClick)if(o){r=!0;let d=c.currentTarget;d.setAttribute("aria-busy","true"),d.setAttribute("aria-disabled","true"),i&&(i.style.visibility="visible"),s.style.visibility="hidden";let p=Date.now(),m=!1,y=()=>{m||(m=!0,setTimeout(()=>{r=!1,d.removeAttribute("aria-busy"),d.removeAttribute("aria-disabled"),i&&(i.style.visibility="hidden"),s.style.visibility="visible"},Math.max(0,p+n-Date.now())))},b=e.onClick(c,y);b instanceof Promise&&b.finally(y)}else e.onClick(c)}},s,i),e)};var Sr=console.log,Er=console.error,Mt=function(e,t,r){e.setAttribute(t,r)};var Cr=new Map,Wo=!1;setTimeout(()=>{Cr.entries().forEach(([e,t])=>{Sr(t)}),Wo=!0},1e3);var F="#fff",q="#000",Tr="#050505",qo=F,Yo=q,Go="#66b2ff",Xo="#c6ff9e",Jo="#ffd666",Zo="#ff6666",Dr="#fafafa",Qo="#151515",en=F,tn="#004c99",rn="#286100",on="#997000",nn="#990000",Ot=":color-mix(in hsl,",sn=[-8,-6,-4,-2,0,2,4,6,8],oe=(e,t,r,o)=>sn.map(n=>n<0?`--${e}-${n/2+5}${Ot}${t} ${-1*n}0%,${r} ${10+n}0%)`:n==0?`--${e}-5:${r};--${e}:${r}`:`--${e}-${n/2+5}${Ot}${r} ${10-n}0%,${o} ${n}0%)`).join(";")+";",an=[1,2,3,4,5,6,7,8,9],Lr=(e,t,r)=>an.map(o=>`--${e}-${o}${Ot}${t} ${10-o}0%,${r} ${o}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${r};`,Ar=(e,t,r)=>`--${e}:${t};--${e}-alt:${r};`,Mr=function(e){Mt(document.getElementsByTagName("html")[0],"data-theme",e)},zt="vtd-preferred-theme",ne="light",ke="dark",Or="default",Se=ne,$e,It=null;function zr(){try{return localStorage.getItem(zt)}catch{return It}}function ln(e){try{localStorage.setItem(zt,e)}catch{It=e}}function dn(){try{localStorage.removeItem(zt)}catch{It=null}}var Vt={getColorScheme:function(){return Se},getColorSchemePreference:function(){if($e)return $e;let e=zr();return e==ke?ke:e==ne?ne:Or},setColorScheme:function(e){ln(e),Vt.resetColorScheme()},resetColorScheme:function(){let e=zr();$e?Se=$e:e==ke?Se=ke:e==ne?Se=ne:(e&&e!=Or&&dn(),Se=globalThis.matchMedia("(prefers-color-scheme: light)").matches?ne:ke),Se==ne?Mr(ne):Mr(ke)}};function Ir(e,t,r=!1){h(`
${e}[data-theme="light"]{
${Ar("text",t?.textLightColor||Tr,t?.textDarkColor||Dr)}
${Lr("background",t?.backgroundLightColor||qo,t?.backgroundLightAltColor||Yo)}
${oe("primary",F,t?.primaryLightColor||Go,q)}
${oe("secondary",F,t?.secondaryLightColor||Xo,q)}
${oe("warning",F,t?.warningLightColor||Jo,q)}
${oe("accent",F,t?.accentLightColor||Zo,q)}
color-scheme:light;}
${e}[data-theme="dark"]{
${Ar("text",t?.textDarkColor||Dr,t?.textLightColor||Tr)}
${Lr("background",t?.backgroundDarkColor||Qo,t?.backgroundDarkAltColor||en)}
${oe("primary",q,t?.primaryDarkColor||tn,F)}
${oe("secondary",q,t?.secondaryDarkColor||rn,F)}
${oe("warning",q,t?.warningDarkColor||on,F)}
${oe("accent",q,t?.accentDarkColor||nn,F)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",r)}var $t={injectStyles(e,t=!0,r){$e=r,t&&h(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),Ir(":root",e),globalThis.setTimeout(function(){h("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),Vt.resetColorScheme()}};var Y="",A={configureBasePath:function(e){let t=e.replace(/\/+$/,"");Y=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return Y?e==Y?"/":e.startsWith(`${Y}/`)?e.slice(Y.length):e:e},resolveHref:function(e){return!Y||!e.startsWith("/")||e==Y||e.startsWith(`${Y}/`)?e:`${Y}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",A.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){Er(t),A.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=A.resolveHref(e)}};var I=function(e,t){let r=e.spa??!1;return u(a("a",{class:"vtd-link",href:A.resolveHref(e.to),onClick:r?o=>{o.preventDefault(),A.changeLocation(e.to)}:void 0},t),e)};var cn=g({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var un=g({closeSymbol:"closeSymbol"},{zoomInSymbol:function(){return"+"},zoomOutSymbol:function(){return"\u2212"}});var hn=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var pn={top:"bottom",bottom:"top",left:"right",right:"left"},K=8,jt=new WeakMap;function mn(e){if(getComputedStyle(e).position==="fixed")return[];try{if(e.matches(":popover-open"))return[]}catch{}let t=[];for(let r=e.offsetParent??e.parentElement;r&&r!==document.documentElement;r=r.parentElement){let o=getComputedStyle(r);if((o.overflowX!=="visible"||o.overflowY!=="visible")&&t.push(r),o.position==="fixed")break}return t}function Br(e){let t={left:0,top:0,right:innerWidth,bottom:innerHeight};for(let r of e){let o=r.getBoundingClientRect();t.left=Math.max(t.left,o.left),t.top=Math.max(t.top,o.top),t.right=Math.min(t.right,o.right),t.bottom=Math.min(t.bottom,o.bottom)}return t}function Pt(e,t,r){switch(t){case"top":return r.top+K-e.top;case"bottom":return e.bottom-(r.bottom-K);case"left":return r.left+K-e.left;case"right":return e.right-(r.right-K)}}function Vr(e,t,r,o){return e<r?r-e:t>o?Math.max(o-t,r-e):0}function H(e,t,r){e.style.getPropertyValue(t)!==r&&(r?e.style.setProperty(t,r):e.style.removeProperty(t))}function fn(e){return(e.offsetParent??e.parentElement??e).getBoundingClientRect()}function $r(e,t,r,o,n){let i=t==="bottom"?r.top-o.bottom:t==="top"?o.top-r.bottom:t==="right"?r.left-o.right:o.left-r.right;if(e==="top"||e==="bottom"){let c=e==="bottom"?o.bottom+i:o.top-i-n.height;return{left:r.left,right:r.right,top:c,bottom:c+n.height}}let s=e==="right"?o.right+i:o.left-i-n.width;return{left:s,right:s+n.width,top:r.top,bottom:r.bottom}}function Pr(e,t,r){let o=e.getBoundingClientRect(),n=(t.anchor??(()=>fn(e)))(),i=Br(r.clippers),s=t.side==="top"||t.side==="bottom",c={width:o.width,height:r.maxHeight===null?o.height:r.naturalHeight},d=o.top-r.y;r.maxHeight!==null&&r.side==="top"&&(d=o.bottom-r.y-c.height);let p={left:o.left-r.x,right:o.right-r.x,top:d,bottom:d+c.height},m=$r(t.side,r.side,p,n,c),y=t.side,b=m,k=Pt(m,t.side,i);if(k>0){let Ae=pn[t.side],Zt=$r(Ae,r.side,p,n,c);Pt(Zt,Ae,i)<k&&(y=Ae,b=Zt)}let T=null,C=Pt(b,y,i);t.scrolls&&s&&C>0&&(T=Math.max(Math.floor(c.height-C),0),b=y==="bottom"?{...b,bottom:b.bottom-C}:{...b,top:b.top+C});let B=Math.round(Vr(b.left,b.right,i.left+K,i.right-K)),mt=Math.round(Vr(b.top,b.bottom,i.top+K,i.bottom-K));return{side:y,x:B,y:mt,maxHeight:T,size:c,area:i}}function jr(e,t,r,o){o.side!==r.side&&t.setSide(o.side,o.size),t.scrolls&&H(e,"max-height",o.maxHeight===null?"":`${o.maxHeight}px`),H(e,"translate",o.x===0&&o.y===0?"":o.y===0?`${o.x}px`:`${o.x}px ${o.y}px`),r.maxHeight===null&&o.maxHeight!==null&&(r.naturalHeight=o.size.height),r.side=o.side,r.x=o.x,r.y=o.y,r.maxHeight=o.maxHeight}function N(e,t){H(e,"translate",""),H(e,"width",""),H(e,"max-width",""),H(e,"white-space",""),t.scrolls&&H(e,"max-height",""),t.setSide(t.side,{width:0,height:0});let r=e.getBoundingClientRect();if(r.width===0&&r.height===0)return jt.delete(e),t.side;let o={side:t.side,x:0,y:0,naturalHeight:r.height,maxHeight:null,wrapped:!1,naturalWidth:r.width,clippers:mn(e)},n=Br(o.clippers),i=n.right-n.left-2*K;r.width>i&&(H(e,"width","max-content"),H(e,"max-width",`${Math.max(Math.floor(i),0)}px`),H(e,"white-space","normal"),o.wrapped=!0),jt.set(e,o);let s=Pr(e,t,o);return jr(e,t,o,s),s.side}function vn(e,t){let r=jt.get(e);if(!r)return()=>{N(e,t)};let o=Pr(e,t,r),n=o.area.right-o.area.left-2*K;return r.wrapped&&r.naturalWidth<=n||o.size.width>n?()=>{N(e,t)}:()=>{jr(e,t,r,o)}}function Ee(e,t){let r=0,o=()=>{r||(r=requestAnimationFrame(()=>{r=0;let s=t().map(([c,d])=>vn(c,d));for(let c of s)c?.()}))},n=s=>{s.target instanceof Node&&e.contains(s.target)||o()},i=new ResizeObserver(o);for(let s=e.parentElement;s;s=s.parentElement)i.observe(s);return globalThis.addEventListener("resize",n),document.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>{cancelAnimationFrame(r),r=0,i.disconnect(),globalThis.removeEventListener("resize",n),document.removeEventListener("scroll",n,{capture:!0})}}var Rr=!1,nt=function(e,t){return Rr||(Rr=!0,h(`
.vtd-textarea{
padding:0.5ex 1ex;
border-radius:0.25rem;
border:1px solid var(--background-5);
background-color:var(--background-1);
color:var(--text);
font:inherit;
}
`,"vtd/Textarea")),u(a("textarea",{class:"vtd-textarea",name:e.name,value:e.value,rows:e.rows||3,maxlength:e.maxLength,onInput:e.onInput,onChange:e.onChange,placeholder:e.placeholder,required:e.required,style:{resize:e.resize||"vertical"}}),e)};var Fr=!1,Be=function(e,t){return Fr||(Fr=!0,h(`
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
`,"vtd/Select")),u(a("span",{class:"vtd-select-wrapper"},a("select",{class:"vtd-select",name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-label":e.ariaLabel,onChange:e.onChange},e.placeholder&&a("option",{value:"",disabled:e.placeholderDisabled,selected:!e.value},e.placeholder),e.options.map(r=>a("option",{value:r.value,disabled:r.disabled,selected:r.value==e.value},r.label))),a("span",{class:"vtd-select-chevron"})),e)};var Hr=!1,it=function(e,t){return Hr||(Hr=!0,h(`
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
`,"vtd/Card")),u(a("div",{class:"vtd-card"},e.header&&a("div",{class:"vtd-card-header"},e.header),a("div",{class:"vtd-card-body"},t),e.footer&&a("div",{class:"vtd-card-footer"},e.footer)),e)};var Kr=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),bn=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),gn=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function yn(e,t){if(t=="plain")return[{kind:"",text:e}];let r=t=="css"?gn:bn,o=t!="css",n=[],i=0;r.lastIndex=0;let s=0,c=!1,d=0,p=()=>o&&s>0&&!c&&d==0,m;for(;(m=r.exec(e))!==null;){m.index>i&&n.push({kind:"",text:e.slice(i,m.index)});let k=m.groups??{},T=m[0],C=k.closeTag??k.openTag;if(C!==void 0&&!y(m.index,k.closeTag!==void 0))n.push({kind:"punct",text:"<"}),n.push({kind:!p()&&Kr.has(C)?"keyword":"",text:C});else if(C!==void 0){let B=k.closeTag!==void 0;o&&(s=Math.max(0,s+(B?-1:1)),c=!0),n.push({kind:"punct",text:B?"</":"<"}),n.push({kind:"tag",text:C})}else if(k.word!==void 0){let B=!p()&&Kr.has(k.word);n.push({kind:B?"keyword":"",text:k.word})}else{let B=["comment","string","number","attr","punct"].find(Ae=>k[Ae]!==void 0),mt=p()&&(B=="string"||B=="number");n.push({kind:mt?"":B??"",text:T}),o&&B=="punct"&&b(T)}i=m.index+T.length}return i<e.length&&n.push({kind:"",text:e.slice(i)}),n;function y(k,T){if(T||!o||p())return!0;let C=k>0?e[k-1]??"":"";return!/[\w$)\]]/.test(C)}function b(k){for(let T=0;T<k.length;T++){let C=k[T];C=="{"?d++:C=="}"?d=Math.max(0,d-1):C==">"&&c&&d==0&&(T>0&&k[T-1]=="/"&&(s=Math.max(0,s-1)),c=!1)}}}var _r=!1,Nt=function(e){let t=e.language??"tsx",r=yn(e.code,t);_r||(_r=!0,h(`
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
`,"vtd/CodeBlock"));let o=["vtd-code-block"];return e.wrap&&o.push("vtd-code-block-wrap"),e.showLineNumbers&&o.push("vtd-code-block-numbered"),u(a("pre",{class:o.join(" "),"aria-label":e.ariaLabel},a("code",null,e.showLineNumbers?xn(r):Ur(r))),e)};function Ur(e){return e.map(t=>t.kind?a("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function xn(e){let t=[[]];for(let r of e)r.text.split(`
`).forEach((n,i)=>{i>0&&t.push([]),n.length>0&&t[t.length-1].push({kind:r.kind,text:n})});return t.map(r=>a("span",{class:"vtd-code-block-line"},Ur(r)))}var wn=g({closeSymbol:"closeSymbol"});var qr=g({confirmSymbol:"confirmSymbol"}),Wr=!1,Ce=class extends v{#e;#r;#n(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open"))r!=t&&(r.classList.remove("vtd-menu-entry-open"),r.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#i=[];#s=()=>{if(this.#e.open)for(let t of this.#i)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#a;#o;#l;#u={side:"bottom",setSide:t=>{this.#o.classList.toggle("vtd-menu-list-above",t==="top")}};#h=new WeakMap;#f=()=>{let t=[[this.#o,this.#u]];for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open")){let o=this.#h.get(r);o&&t.push(o)}return t};#v(t){let r=t.querySelector(":scope > .vtd-menu-sublist");if(!r)return;let o=getComputedStyle(t).direction==="rtl"?"left":"right",n={side:o,setSide:i=>{r.classList.toggle("vtd-menu-sublist-flipped",i!==o)}};this.#h.set(t,[r,n]),N(r,n)}#b=()=>{this.#s(),this.#e.open?(N(this.#o,this.#u),this.#l??=Ee(this.#o,this.#f)):(this.#l?.(),this.#l=void 0)};#d=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#r.focus()};#p=t=>{this.#a.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#d())};#g=t=>{let r=document.activeElement,o=r?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),o){this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus();return}this.#d(!0);return}if(!this.#e.open)return;let n=this.#n();if(n.length==0)return;let i=n.indexOf(r);if(t.key=="ArrowDown")t.preventDefault(),n[(i+1)%n.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),n[(i-1+n.length)%n.length]?.focus();else if(t.key=="Home")t.preventDefault(),n[0]?.focus();else if(t.key=="End")t.preventDefault(),n[n.length-1]?.focus();else if(t.key=="ArrowRight"){let s=r?.closest(".vtd-menu-entry");r?.classList.contains("vtd-menu-item-parent")&&s&&(t.preventDefault(),this.#c(s),s.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&o&&(t.preventDefault(),this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus())};#y(t){let r=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let o of r?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])o.setAttribute("aria-checked",o==t?"true":"false")}#c(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true"),this.#v(t)}mount(){document.addEventListener("click",this.#p)}unmount(){document.removeEventListener("click",this.#p),this.#l?.(),this.#l=void 0}#m(t){return t.map((r,o)=>{let n=r.dividerBefore&&o>0?" vtd-menu-entry-divided":"";if(r.children&&r.children.length>0){let m=a("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${r.disabled?" vtd-menu-item-disabled":""}`},r.label),y=a("li",{class:`vtd-menu-entry vtd-menu-entry-parent${n}`,role:"none"},m,a("ul",{class:"vtd-menu-sublist",role:"menu"},this.#m(r.children)));return y.addEventListener("pointerenter",()=>{this.#c(y)}),m.addEventListener("click",b=>{b.preventDefault(),y.classList.contains("vtd-menu-entry-open")?this.#t():this.#c(y)}),y}let i=r.selected!==void 0,s=typeof r.selected=="function"?r.selected:void 0,c=s?s():r.selected===!0,d=a("a",{role:i?"menuitemradio":"menuitem","aria-checked":i?c?"true":"false":void 0,href:r.href?A.resolveHref(r.href):"#","aria-disabled":r.disabled,class:`vtd-menu-item${i?" vtd-menu-item-checkable":""}${r.disabled?" vtd-menu-item-disabled":""}`,onClick:m=>{if(r.disabled){m.preventDefault();return}r.href?r.spa&&(m.preventDefault(),A.changeLocation(r.href)):m.preventDefault(),i&&this.#y(d),r.onClick?.(),!r.keepOpen&&(this.#t(),this.#d())}},i?a("span",{class:"vtd-menu-check","aria-hidden":"true"},a(qr.confirmSymbol,null)):null,r.label);s&&this.#i.push({row:d,read:s});let p=a("li",{class:`vtd-menu-entry${n}`,role:"none"},d);return p.addEventListener("pointerenter",()=>{this.#t(p.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),p})}constructor(t,r){super(t,r),this.#a=t,Wr||(Wr=!0,h(`
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
`,"vtd/Menu")),this.#r=a("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#o=a("ul",{class:"vtd-menu-list",role:"menu"},this.#m(t.items)),this.#e=a("details",{class:"vtd-menu",onToggle:this.#b,onKeyDown:this.#g},this.#r,this.#o),u(this.#e,t)}render(){return this.#e}};var Xr=g({collapseSymbol:"collapseSymbol"}),Yr=!1,Gr=3;function kn(e,t){if(t===void 0||e.length<=Math.max(t,Gr))return{head:e,collapsed:[],tail:[]};let o=Math.max(t,Gr)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-o),tail:e.slice(e.length-o)}}var Rt=function(e,t){Yr||(Yr=!0,h(`
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
`,"vtd/Breadcrumbs"));let{head:r,collapsed:o,tail:n}=kn(e.items,e.maxItems),i=e.separator||"/",s=p=>p.leading?a("span",{class:"vtd-breadcrumbs-crumb"},a("span",{class:"vtd-breadcrumbs-leading"},p.leading),p.label):p.label,c=(p,m)=>a("li",{class:"vtd-breadcrumbs-item","aria-current":p.to?void 0:"page"},p.to?a(I,{to:p.to,spa:e.spa},s(p)):a("span",null,s(p)),m?null:a("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)),d=o.length>0?a("li",{class:"vtd-breadcrumbs-item"},a(Ce,{ariaLabel:e.expandLabel,trigger:a("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||a(Xr.collapseSymbol,null)),items:o.map(p=>({label:s(p),href:p.to,spa:e.spa}))}),a("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)):null;return u(a("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},a("ol",{class:"vtd-breadcrumbs-list"},r.map((p,m)=>c(p,o.length==0&&m==r.length-1)),d,n.map((p,m)=>c(p,m==n.length-1)))),e)};var Sn=g({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var Jr=!1,Pe=class extends v{#e;#r;#n;#t=()=>{let t=this.#n.sidebar?.get();!this.#r||!t||(this.#r.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#r.setAttribute("aria-expanded",t.open?"true":"false"),this.#r.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,r){if(super(t,r),this.#n=t,En(),t.sidebar){let o=t.sidebar;this.#r=a("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let n=o.get();o.set({...n,open:!n.open})}},a("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"}))}this.#e=u(a("nav",{class:"vtd-navbar"},a("div",{class:"vtd-navbar-start"},this.#r??null,t.brand?a("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?a("div",{class:"vtd-navbar-leading"},t.leading):null),a("div",{class:"vtd-navbar-items"},r)),t)}mount(){this.#n.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function En(){Jr||(Jr=!0,h(`
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
`,"vtd/Navbar"))}var eo=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",uc=`.vtd-sidebar-collapsed:not(${eo})`,hc=`.vtd-sidebar-collapsed:is(${eo})`;var Dn=g({closeSymbol:"closeSymbol"});var An=g({closeSymbol:"closeSymbol"});var Mn=g({},{emptySymbol:function(){return a("span",{class:"vtd-empty-icon","aria-hidden":"true"},a(E.emptySymbol,null))}});var to=!1,je=function(e,t){return to||(to=!0,h(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),u(a("div",{class:"vtd-statistic"},a("div",{class:"vtd-statistic-title"},e.title),a("div",{class:"vtd-statistic-value"},e.prefix&&a("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&a("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var On=g({closeSymbol:"closeSymbol"});var zn=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Kt=g({},{columnsSymbol:function(){return a("span",{"aria-hidden":"true"},"\u25A5")},emptySymbol:function(){return a("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},a(E.emptySymbol,null))},searchSymbol:function(){return null}});var oo=!1;function Te(){oo||(oo=!0,h(`
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
`,"vtd/Typography","base"))}function De(e,t,r){let o=[e];return t&&o.push(`vtd-text-${t}`),r?.strong&&o.push("vtd-text-strong"),r?.italic&&o.push("vtd-text-italic"),r?.underline&&o.push("vtd-text-underline"),r?.strike&&o.push("vtd-text-strike"),r?.numeric&&o.push("vtd-text-numeric"),o.join(" ")}var Ne=function(e,t){Te();let r=De(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return u(a("h1",{class:r},t),e);case 2:return u(a("h2",{class:r},t),e);case 3:return u(a("h3",{class:r},t),e);case 4:return u(a("h4",{class:r},t),e);case 5:return u(a("h5",{class:r},t),e);default:return u(a("h6",{class:r},t),e)}};var ie=function(e,t){Te();let r=De(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?u(a("code",{class:r},t),e):u(a("span",{class:r},t),e)};var _t=function(e,t){return Te(),u(a("p",{class:De("vtd-paragraph",e.type)},t),e)};var Ut={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function st(e,t="md"){return e===void 0?Ut[t]:Kn(e)?Ut[e]:e}function Kn(e){return Object.hasOwn(Ut,e)}function at(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function no(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var io=!1,V=function(e,t){io||(io=!0,h(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let r=e.direction??"row";return u(a("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:r,gap:st(e.gap),alignItems:at(e.align),justifyContent:no(e.justify),flexWrap:e.wrap??r==="row"?"wrap":"nowrap"}},t),e)};var so=!1,Wt=function(e,t){so||(so=!0,h(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let r=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return u(a("div",{class:"vtd-grid",style:{gridTemplateColumns:r,gap:st(e.gap),alignItems:at(e.align)}},t),e)};var l=function(e){return e[e.Null=0]="Null",e[e.False=1]="False",e[e.True=2]="True",e[e.PosInt=3]="PosInt",e[e.Double=4]="Double",e[e.String=5]="String",e[e.Object=6]="Object",e[e.Array=7]="Array",e}({}),w=function(e){return e[e.Base=0]="Base",e[e.KeyTable=1]="KeyTable",e[e.KeyID=2]="KeyID",e}({});function $(e){let t=typeof e;if(t==="number")return Number.isInteger(e)&&e>=0&&Number.isSafeInteger(e)?l.PosInt:l.Double;if(t==="string")return l.String;if(Array.isArray(e))return l.Array;if(e===null)return l.Null;if(t==="object")return l.Object;if(e===!1)return l.False;if(e===!0)return l.True;throw new Error(`velojson: unsupported value type: ${typeof e}`)}var fe=4294967296,lt=new TextEncoder,qt=new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0}),dt=64;var _n=1024,Yt=[],Gt=class{buf;bufView;len=0;constructor(t=64){this.buf=new Uint8Array(t),this.bufView=new DataView(this.buf.buffer)}ensureCapacity(t){let r=this.len+t;if(r<=this.buf.length)return;let o=this.buf.length*2||64;for(;o<r;)o*=2;let n=new Uint8Array(o);n.set(this.buf.subarray(0,this.len)),this.buf=n,this.bufView=new DataView(this.buf.buffer)}writeByte(t){this.ensureCapacity(1),this.buf[this.len++]=t&255}writeBytes(t){this.ensureCapacity(t.length),this.buf.set(t,this.len),this.len+=t.length}writeVarint(t){if(!Number.isInteger(t)||t<0)throw new Error(`writeVarint: expected a non-negative integer, got ${t}`);if(!Number.isSafeInteger(t))throw new Error(`writeVarint: value ${t} exceeds safe integer range`);if(t<128){this.writeByte(t);return}if(this.ensureCapacity(10),t<fe){let r=t>>>0;do{let o=r&127;r>>>=7,r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}else{let r=t;do{let o=r%128;r=Math.floor(r/128),r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}}writeDouble(t){this.ensureCapacity(8),this.bufView.setFloat64(this.len,t,!0),this.len+=8}writeString(t){let r=lt.encode(t);this.writeVarint(r.length),this.writeBytes(r)}toUint8Array(){return this.buf.subarray(0,this.len)}get length(){return this.len}reset(){this.len=0}};function M(){let e=Yt.pop();return e!==void 0?(e.reset(),e):new Gt}function O(e){Yt.length<_n&&Yt.push(e)}var ct=class{pos=0;data;view;limit;keyArray=[];encodingFormat=w.Base;constructor(t){this.data=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.limit=t.length}readByte(){if(this.pos<this.limit)return this.data[this.pos++];throw new Error("velojson: unexpected end of buffer")}readBytes(t){if(this.pos+t<=this.limit){let r=this.data.subarray(this.pos,this.pos+t);return this.pos+=t,r}else throw new Error("velojson: unexpected end of buffer")}readVarint(){let t=this.readByte();if((t&128)===0)return t;let r=t&127,o=128,n,i=1;do if(n=this.readByte(),r+=(n&127)*o,o*=128,i++,i>10)throw new Error("velojson: varint too long (corrupt data)");while(n&128);return r}readDouble(){if(this.pos+8>this.limit)throw new Error("velojson: unexpected end of buffer");let t=this.view.getFloat64(this.pos,!0);return this.pos+=8,t}fieldKind="value";decodeString(t){let r=this.fieldKind;return r==="value"?qt.decode(t):r==="skip"?"":t.slice()}readString(){let t=this.readVarint();return this.decodeString(this.readBytes(t))}decodeObjectValue(t){let r=this.readVarint();if(this.pos+r>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${r} ${this.limit}`);let o=this.limit;this.limit=this.pos+r;let n=Object.create(null);for(;this.limit>this.pos;)this.decodeObjectFieldValue(n,t);if(this.pos=this.limit,this.limit=o,t!==void 0&&!t.hasAllRequiredFields(n))throw new Error("velojson: missing required field");return n}decodeArrayValue(t,r){let o=this.readVarint(),n,i;if(o<fe?(i=(o&1)===1,n=o>>>1):(i=o%2===1,n=Math.floor(o/2)),this.pos+n>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${n} ${this.limit}`);let s=this.limit;this.limit=this.pos+n;let c;if(i){let d=this.readByte();if(d===l.Null||d===l.False||d===l.True)throw new Error("velojson: homogeneous array cannot use a zero-payload wire type");switch(d){case l.PosInt:for(c=[];this.limit>this.pos;)c.push(this.readVarint());break;case l.Double:if((this.limit-this.pos)%8!=0)throw new Error("velojson: unexpected end of buffer");for(c=[];this.limit>this.pos;)c.push(this.view.getFloat64(this.pos,!0)),this.pos+=8;break;case l.String:for(c=[];this.limit>this.pos;){let p=this.readVarint();c.push(this.decodeString(this.readBytes(p)))}break;case l.Object:{if(r!==void 0){if(t===void 0)throw new Error("velojson: missing keyID");let p=r.fieldMapper(t);if(p===void 0)throw new Error(`velojson: unknown field keyID ${t}`);for(c=[];this.limit>this.pos;)c.push(this.decodeObjectValue(p))}else for(c=[];this.limit>this.pos;)c.push(this.decodeObjectValue());break}case l.Array:if(r!==void 0)throw new Error("velojson: VBIN Array not allowed to contain nested arrays");for(c=[];this.limit>this.pos;)c.push(this.decodeArrayValue());break;default:throw new Error(`velojson: invalid wire type ${d}`)}}else for(c=[];this.limit>this.pos;)c.push(this.decodeArrayEntryValue(r));return this.pos=this.limit,this.limit=s,c}decodeKeyTableArrayValue(){let t=this.readVarint();if(this.pos+t>this.limit)throw new Error("velojson: unexpected end of buffer");let r=this.limit;this.limit=this.pos+t;let o=[];for(o.push("");this.limit>this.pos;){let n=this.readVarint();o.push(this.decodeString(this.readBytes(n)))}return this.pos=this.limit,this.limit=r,o}decodeRootValue(t){let r=this.readVarint(),o,n;if(r<fe?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),this.encodingFormat=n,t!==void 0&&n!==w.KeyID)throw new Error("velojson: VBIN decode requires a VBIN (KeyID format) message");if(n===w.Base)switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:return this.decodeObjectValue();case l.Array:return this.decodeArrayValue();default:throw new Error(`velojson: unknown wire type ${o}`)}else if(n===w.KeyTable){if(o!==l.Object&&o!==l.Array)throw new Error("velojson: KeyTable encoding format only valid for Object and Array root values");let i=this.pos,s=this.readVarint();return o===l.Object?(this.pos+=s,this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeObjectValue()):(this.pos+=Math.floor(s/2),this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeArrayValue())}else if(n===w.KeyID){if(o!==l.Object)throw new Error("velojson: KeyIDs encoding format only valid for Object root values");return this.decodeObjectValue(t)}else throw new Error("velojson: unrecognized encoding format")}decodeObjectFieldValue(t,r){let o=this.readVarint(),n,i;o<fe?(n=o&7,i=o>>>3):(n=o%8,i=Math.floor(o/8));let s=null;if(i>0)if(this.encodingFormat===w.Base)s=qt.decode(this.readBytes(i));else if(this.encodingFormat===w.KeyTable)if(i<this.keyArray.length)s=this.keyArray[i];else throw new Error("velojson: key index out of bounds");else if(this.encodingFormat===w.KeyID)if(r===void 0)s=String(i);else{let c=this.fieldKind;switch(n>=l.String&&c!=="skip"&&(this.fieldKind=r.fieldKind(i)),n){case l.Null:r.assignValue(t,i,null);break;case l.False:r.assignValue(t,i,!1);break;case l.True:r.assignValue(t,i,!0);break;case l.PosInt:r.assignValue(t,i,this.readVarint());break;case l.Double:r.assignValue(t,i,this.readDouble());break;case l.String:r.assignValue(t,i,this.readString());break;case l.Object:{let d=r.fieldMapper(i);if(d===void 0)throw new Error(`velojson: unknown field keyID ${i}`);r.assignValue(t,i,this.decodeObjectValue(d));break}case l.Array:r.assignValue(t,i,this.decodeArrayValue(i,r));break;default:throw new Error(`velojson: unknown wire type ${n}`)}this.fieldKind=c;return}else throw new Error("velojson: encoding format not recognized");else if(this.encodingFormat===w.Base)s="";else throw new Error("velojson: object field is missing a required key");switch(n){case l.Null:t[s]=null;break;case l.False:t[s]=!1;break;case l.True:t[s]=!0;break;case l.PosInt:t[s]=this.readVarint();break;case l.Double:t[s]=this.readDouble();break;case l.String:t[s]=this.readString();break;case l.Object:t[s]=this.decodeObjectValue();break;case l.Array:t[s]=this.decodeArrayValue();break;default:throw new Error(`velojson: unknown wire type ${n}`)}}decodeArrayEntryValue(t){let r=this.readVarint(),o,n;if(r<fe?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),n>0)throw new Error("velojson: array entry must not have a key");switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Object");return this.decodeObjectValue()}case l.Array:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Array");return this.decodeArrayValue()}default:throw new Error(`velojson: unknown wire type ${o}`)}}};var Un=4096,ut=new Map,G=null,Le=null;function ao(e){e!==Le&&(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e===G&&(G=e.next),e.prev=Le,e.next=null,Le&&(Le.next=e),Le=e,G===null&&(G=e))}function lo(e){let t=ut.get(e);if(t!==void 0)return ao(t),t.bytes;let r=lt.encode(e);if(ut.size>=Un&&G!==null){let n=G;ut.delete(n.key),G=n.next,G?G.prev=null:Le=null,n.prev=null,n.next=null}let o={key:e,bytes:r,prev:null,next:null};return ut.set(e,o),ao(o),r}function co(e,t){let r=!1,o=null;if(t.length>=dt){let s=0,c=t[s],d=$(c===void 0?null:c);if(d===l.Null||d===l.False||d===l.True)o=null,r=!1;else{for(o=d,(d===l.PosInt||d===l.Double)&&(r=!0),s+=1;s<t.length;s++){let p=t[s],m=$(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True){o=null,r=!1;break}else if(m!==d)if(o=null,r){if(m!==l.PosInt&&m!==l.Double){r=!1;break}}else break}if(o==null&&r==!0)for(;s<t.length;s++){let p=t[s],m=$(p===void 0?null:p);if(m!==l.PosInt&&m!==l.Double){r=!1;break}}}}let n=M();if(o!==null)switch(n.writeByte(o),o){case l.PosInt:for(let s=0;s<t.length;s++)n.writeVarint(t[s]);break;case l.Double:for(let s=0;s<t.length;s++)n.writeDouble(t[s]);break;case l.String:for(let s=0;s<t.length;s++)n.writeString(t[s]);break;case l.Object:{for(let s=0;s<t.length;s++){let c=M(),d=t[s];for(let m of Object.keys(d))Re(c,m,d[m],!1);let p=c.toUint8Array();n.writeVarint(p.length),n.writeBytes(p),O(c)}break}case l.Array:for(let s=0;s<t.length;s++)co(n,t[s]);break}else if(r)for(let s=0;s<t.length;s++){let c=t[s];Number.isInteger(c)&&c>=0&&Number.isSafeInteger(c)?(n.writeByte(l.PosInt),n.writeVarint(c)):(n.writeByte(l.Double),n.writeDouble(c))}else for(let s of t)Re(n,null,s,!0);let i=n.toUint8Array();e.writeVarint(i.length*2+(o!==null?1:0)),e.writeBytes(i),O(n)}function Re(e,t,r,o){if(r===void 0&&o===!1)return;let n=$(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(n);else{let i=lo(t);e.writeVarint(i.length*8+n),e.writeBytes(i)}switch(n){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let i=M(),s=r;for(let d of Object.keys(s))Re(i,d,s[d],!1);let c=i.toUint8Array();e.writeVarint(c.length),e.writeBytes(c),O(i);break}case l.Array:co(e,r);break}}function ht(e,t,r,o){let n=!1,i=null;if(t.length>=dt){let d=0,p=t[d],m=$(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True)i=null,n=!1;else{for(i=m,(m===l.PosInt||m===l.Double)&&(n=!0),d+=1;d<t.length;d++){let y=t[d],b=$(y===void 0?null:y);if(b===l.Null||b===l.False||b===l.True){i=null,n=!1;break}else if(b!==m)if(i=null,n){if(b!==l.PosInt&&b!==l.Double){n=!1;break}}else break}if(i==null&&n==!0)for(;d<t.length;d++){let y=t[d],b=$(y===void 0?null:y);if(b!==l.PosInt&&b!==l.Double){n=!1;break}}}}let s=M();if(i!==null)switch(s.writeByte(i),i){case l.PosInt:for(let d=0;d<t.length;d++)s.writeVarint(t[d]);break;case l.Double:for(let d=0;d<t.length;d++)s.writeDouble(t[d]);break;case l.String:for(let d=0;d<t.length;d++)s.writeString(t[d]);break;case l.Object:{for(let d=0;d<t.length;d++){let p=M(),m=t[d];for(let b of Object.keys(m))Fe(p,b,m[b],!1,r,o);let y=p.toUint8Array();s.writeVarint(y.length),s.writeBytes(y),O(p)}break}case l.Array:for(let d=0;d<t.length;d++)ht(s,t[d],r,o);break}else if(n)for(let d=0;d<t.length;d++){let p=t[d];Number.isInteger(p)&&p>=0&&Number.isSafeInteger(p)?(s.writeByte(l.PosInt),s.writeVarint(p)):(s.writeByte(l.Double),s.writeDouble(p))}else for(let d of t)Fe(s,null,d,!0,r,o);let c=s.toUint8Array();e.writeVarint(c.length*2+(i!==null?1:0)),e.writeBytes(c),O(s)}function Fe(e,t,r,o,n,i){if(r===void 0&&o===!1)return;let s=$(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(s);else{let c=i.get(t);c!==void 0?e.writeVarint(c*8+s):(n.push(t),i.set(t,n.length),e.writeVarint(n.length*8+s))}switch(s){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let c=M(),d=r;for(let m of Object.keys(d))Fe(c,m,d[m],!1,n,i);let p=c.toUint8Array();e.writeVarint(p.length),e.writeBytes(p),O(c);break}case l.Array:ht(e,r,n,i);break}}function uo(e,t){let r=M();for(let n=0;n<t.length;n++){let i=t[n];if(i==null)throw new Error("velojson: KeyTable cannot have undefined or null values");r.writeString(i)}let o=r.toUint8Array();e.writeVarint(o.length),e.writeBytes(o),O(r)}function ho(e,t){if(e===void 0)return new Uint8Array;let r;t===void 0?e!==null&&(typeof e=="object"||Array.isArray(e))?r=w.KeyTable:r=w.Base:r=t;let o=M();if(r===w.Base)Re(o,null,e,!1);else if(r===w.KeyTable){let i=$(e);o.writeVarint(r*8+i);let s=new Map,c=[];switch(i){case l.Object:{let d=M(),p=e;for(let y of Object.keys(p))Fe(d,y,p[y],!1,c,s);let m=d.toUint8Array();o.writeVarint(m.length),o.writeBytes(m),O(d);break}case l.Array:ht(o,e,c,s);break;default:throw new Error("velojson: KeyTable encoding format only supported for root Object or Array types")}uo(o,c)}else throw new Error("velojson: encoding format not recognized");let n=o.toUint8Array().slice();return O(o),n}function po(e){return e.length==0?void 0:new ct(e).decodeRootValue()}var pt={encode:ho,decode:po};var mo={velochart:"/docs/velochart/",velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var qn=e=>f("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),Yn=()=>S(Pe,{style:{borderBottom:"1px solid var(--background-4)"},brand:S(I,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[f(qn,{size:"1.75em"}),"The Velocity Project"]}),children:[f(I,{to:mo.velotype,children:"Docs"}),f(I,{to:"https://github.com/Velotype",children:"GitHub"}),f(I,{to:"https://jsr.io/@velotype",children:"JSR"}),f(I,{to:"https://argoday.medium.com/",children:"Articles"})]}),Gn=()=>S(ie,{type:"muted",children:["All projects live under the ",f(I,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",f(I,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",f(I,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function fo(e,t="60rem"){$t.injectStyles(),xe(S("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[Yn(),f("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:S(V,{direction:"column",gap:"lg",children:[e,Gn()]})})]}),document.getElementById("app"))}var vo='{"name": "Some name", "age": 20, "address": null}';function xo(e){let t=e[0];return t===void 0||t>23?"unknown":["VSON Base","VSON Key Table","VBIN"][Math.floor(t/8)]}var Xn=e=>Array.from(e,t=>t.toString(16).padStart(2,"0")).join(" "),Jn=e=>btoa(Array.from(e,t=>String.fromCharCode(t)).join("")),Xt=e=>e instanceof Error?e.message:String(e);function bo(e,t){if(e.trim()=="")return{kind:"empty"};let r;try{r=JSON.parse(e)}catch(o){return{kind:"error",message:`Not valid JSON: ${Xt(o)}`}}try{let o=t=="auto"?pt.encode(r):pt.encode(r,t=="base"?w.Base:w.KeyTable);return{kind:"bytes",hex:Xn(o),base64:Jn(o),jsonBytes:new TextEncoder().encode(JSON.stringify(r)).length,vsonBytes:o.length,format:xo(o)}}catch(o){return{kind:"error",message:Xt(o)}}}function Zn(e){let t=e.replace(/0x/gi,"").replace(/[\s:,]/g,"");if(/^[0-9a-f]+$/i.test(t)&&t.length%2==0)return{bytes:Uint8Array.from(t.match(/../g)??[],r=>parseInt(r,16)),how:"hex"};try{return{bytes:Uint8Array.from(atob(e.replace(/\s/g,"")),r=>r.charCodeAt(0)),how:"base64"}}catch{return"These bytes are not hex (an even number of digits) or base64."}}function Qn(e){if(e.trim()=="")return{kind:"empty"};let t=Zn(e);if(typeof t=="string")return{kind:"error",message:t};try{let r=pt.decode(t.bytes);return{kind:"json",text:r===void 0?"(no bytes, which decode to undefined)":JSON.stringify(r,null,2),format:xo(t.bytes),bytes:t.bytes.length,how:t.how}}catch(r){return{kind:"error",message:`Could not decode these bytes: ${Xt(r)}`}}}var go=e=>f("div",{style:{fontFamily:"monospace",whiteSpace:"pre-wrap",overflowWrap:"anywhere",padding:"0.75em 1em",border:"1px solid var(--background-4)",borderRadius:"0.5rem",backgroundColor:"var(--background-2)"},children:e.text}),wo=e=>f("div",{role:"alert",style:{color:"var(--accent-7)"},children:e}),ei=e=>{if(e.kind=="empty")return f(ie,{type:"muted",children:"Type some JSON to see its bytes."});if(e.kind=="error")return wo(e.message);let t=Math.round((1-e.vsonBytes/e.jsonBytes)*100);return S(V,{direction:"column",children:[S(V,{gap:"lg",children:[f(je,{title:"JSON text",value:String(e.jsonBytes),suffix:" bytes"}),f(je,{title:e.format,value:String(e.vsonBytes),suffix:" bytes"}),f(je,{title:"Difference",value:t>=0?`${t}% smaller`:`${-t}% larger`})]}),f(Ne,{level:4,children:"Hex"}),f(go,{text:e.hex}),f(Ne,{level:4,children:"Base64"}),f(go,{text:e.base64})]})},ti=e=>e.kind=="empty"?f(ie,{type:"muted",children:"Paste bytes as hex or base64 to see their JSON."}):e.kind=="error"?wo(e.message):S(V,{direction:"column",children:[f(ie,{type:"muted",children:`${e.format}, ${e.bytes} bytes read as ${e.how}`}),e.format=="VBIN"&&f(ie,{type:"muted",children:"VBIN has no key names on the wire, so the keys show as their numeric key IDs."}),f(Nt,{code:e.text,language:"plain"})]}),yo={width:"100%",fontFamily:"monospace",marginInlineStart:"0"},Jt=class extends v{format="auto";encoded=new j(bo(vo,"auto"),ei);decoded=new j({kind:"empty"},ti);jsonInput=f(nt,{rows:8,value:vo,resize:"vertical",style:yo,onInput:()=>this.runEncode()});bytesInput=f(nt,{rows:8,placeholder:"e.g. 68 03 ...",resize:"vertical",style:yo,onInput:()=>this.runDecode()});runEncode(){this.encoded.set(bo(this.jsonInput.value,this.format))}runDecode(){this.decoded.set(Qn(this.bytesInput.value))}useEncodedBytes(){let t=this.encoded.get();t.kind=="bytes"&&(this.bytesInput.value=t.hex,this.runDecode())}mount(){this.useEncodedBytes()}render(){return S(V,{direction:"column",gap:"lg",children:[f(Rt,{items:[{label:"The Velocity Project",to:"/"},{label:"velojson (VSON)",to:"/projects/velojson/"},{label:"Playground"}]}),S(V,{direction:"column",children:[f(Ne,{level:1,children:"velojson playground"}),S(_t,{children:["Encode JSON to VSON bytes and decode bytes back to JSON, in your browser. Nothing is sent anywhere. It runs ",f("code",{children:"@velotype/velojson"}),", the version that supports every format. VBIN needs key IDs agreed ahead of time, so it only decodes here, with numeric keys."]})]}),S(Wt,{minColumnWidth:"26em",children:[f(it,{header:"JSON to bytes",children:S(V,{direction:"column",children:[this.jsonInput,S(V,{align:"center",children:[f("label",{for:"format",children:"Format"}),f(Be,{id:"format",value:"auto",options:[{value:"auto",label:"Automatic (Key Table for an object or Array)"},{value:"base",label:"VSON Base"},{value:"keytable",label:"VSON Key Table"}],onChange:t=>{this.format=t.currentTarget.value,this.runEncode()}})]}),this.encoded,f("div",{children:f(L,{type:"secondary",onClick:()=>this.useEncodedBytes(),children:"Decode these bytes"})})]})}),f(it,{header:"Bytes to JSON",children:S(V,{direction:"column",children:[this.bytesInput,this.decoded]})})]})]})}};fo(f(Jt,{}));
