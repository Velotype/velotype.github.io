var ie=console.warn.bind(console,"vt:"),I=console.error.bind(console,"vt:"),hr=bt("span","display:contents;"),ut=bt("div","display:contents;"),qt=bt("div","display:none;");var _e={value:void 0,writable:!1,configurable:!1,enumerable:!1},mt=new Map,vt=new Map,Yt=/[A-Z]/g,O=new Map,A=Symbol(),ft=Symbol(),We=Symbol(),P=new Map,ae=new Map,qe=new Map,x={k:1,r:0,p:void 0,s:void 0},gt={version:"0.3.2",domKeyProperty:A,domReferences:O,listenersF:P,listenersR:ae,styleSectionMounted:qe,setEventTracer:()=>{}};function bt(e,t){let o=document.createElement(e);return o.style.cssText=t,o}function V(e){return e instanceof HTMLElement}function Ye(e){return e instanceof SVGSVGElement}function Ge(e){return e instanceof MathMLElement}function Ue(e){return e instanceof Text}function ue(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function Gt(e,t,o){_e.value=o,Object.defineProperty(e,t,_e),_e.value=void 0}function G(){return qt.cloneNode()}function Ut(e){Promise.resolve().then(e)}function yt(e,t,o){let r=t.nextSibling;r===o?e.insertBefore(o,t):(e.insertBefore(t,o),e.insertBefore(o,r))}function U(e){typeof reportError=="function"?reportError(e):I(e)}var me=class{constructor(t,o,r){this.emittingObject=t,this.event=o,this.data=r}};function Ze(e,t,o){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");se&&(o=xt(t,o)),Xt(P,t,e.vtKey,o),Xt(ae,e.vtKey,t,o)}function Xt(e,t,o,r){let n=e.get(t);n||(n=new Map,e.set(t,n));let a=n.get(o);a?a.push(r):n.set(o,[r])}function Me(e){let t=ae.get(e.vtKey);t&&t.forEach((o,r)=>{Jt(P,r,e.vtKey),Jt(ae,e.vtKey,r)})}function Jt(e,t,o,r){let n=e.get(t);if(n){let a=n.get(o);if(a){if(x.r++,r){let c=a.indexOf(r);if(c<0&&se&&(c=a.findIndex(h=>h.o===r)),c<0){ie("Listener not registered",t,o);return}a=a.slice(),a.splice(c,1),n.set(o,a)}(!r||a.length<=0)&&(n.delete(o),n.size<=0&&e.delete(t))}else ie("No listeners to remove",t,o)}else ie("No listeners to remove",t,o)}function Zt(e,t,o){let r=P.get(e),n=r&&r.get(t);return!!n&&(n.includes(o)||!!se&&n.some(a=>a.o===o))}function Qe(e,t,o){let r=P.get(e);r?r.forEach((n,a)=>{if(!o||o.vtKey!=a){let c=x.r;n.forEach(h=>{if(c!==x.r){let p=r.get(a);if(p!==n&&!(p&&p.includes(h)))return}try{h(t)}catch(p){U(p)}})}}):ie("No listeners for event",e,t)}var se,Je;function xt(e,t){let o=r=>{if(se&&Je!==r){Je=r,queueMicrotask(()=>{Je=void 0});try{se(e,r)}catch{}}t(r)};return o.o=t,o}function Xe(e,t){e.forEach((o,r)=>{o.forEach((n,a)=>{o.set(a,n.map(c=>t(r,a,c)))})})}function Qt(e){let t=!!se;if(se=e,Je=void 0,e&&!t)Xe(P,(o,r,n)=>xt(o,n)),Xe(ae,(o,r,n)=>xt(r,n));else if(!e&&t){let o=(r,n,a)=>a.o??a;Xe(P,o),Xe(ae,o)}}function pr(){gt.setEventTracer=Qt;let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,o=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(r){return t.set(o,r),o++},unregister(r){t.delete(r)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(gt)}pr();function X(e,t){e[A]=t}function le(e){return O.get(e)}function de(e,t){let o=x.k++;return t&&X(t,o),O.set(o,e),o}function ve(e){O.delete(e)}function ce(e){O.delete(e.vtKey),Me(e)}function K(e){for(let t=e;t<x.k;t++){let o=O.get(t);o&&(J(o)?(Me(o.c),O.delete(t),Le(o.c)):o.vtKey===t||!o.uK?(ce(o),O.delete(t)):o.uK(t))}}function kt(e){return e instanceof Ae}var Ae=class{constructor(t){this.w=t,this.k=de(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),ce(t)})}};function s(e,t){if(t.id&&St(e,"id",t.id),t.class){let o=e.getAttribute("class");St(e,"class",o?o+" "+t.class:t.class)}return t.style&&he(e,{style:t.style}),e}function to(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return wt(e,t);let o=Object.getPrototypeOf(e),r=o===x.p?x.s:vt.get(o);r||(r=new Map,vt.set(o,r)),x.p=o,x.s=r;let n=r.get(t);return n===void 0&&(n=wt(o,t),r.set(t,n)),n}function wt(e,t){let o=e;for(;o;){let r=Object.getOwnPropertyDescriptor(o,t);if(r&&(r.set||r.writable))return!0;o=Object.getPrototypeOf(o)}return!1}function St(e,t,o){to(e,t)?e[t]=o:e.setAttribute(t,o.toString())}function ur(e,t,o){to(e,t)?e[t]=o:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(o)):o&&e.setAttribute(t,"")}function mr(e){if(e.startsWith("--"))return e;let t=e.replace(Yt,o=>"-"+o.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function he(e,t){if(!t)return;let o=t.type=="range",r=Object.keys(t);for(let n=0;n<r.length;n++){let a=r[n];(!o||a!="value")&&eo(e,a,t[a])}o&&eo(e,"value",t.value)}function eo(e,t,o){if(t.startsWith("on")&&t.length>4){if(o){let r,n=o;typeof o!="function"&&o.handler&&(n=o.handler,r=o.options);let a=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(a,n,r)}}else if(t=="style"&&o instanceof Object)for(let r of Object.keys(o)){let n=o[r]==null?"":o[r],a=typeof n=="number"?n.toString():n,c=e.style;if(a.endsWith("!important"))c.setProperty(mr(r),a.slice(0,-10),"important");else{let h=mt.get(r);h===void 0&&(h=wt(c,r),mt.set(r,h)),h?c[r]=a:c.setProperty(r,a)}}else if(typeof o=="boolean")ur(e,t,o);else if(typeof o!="function")if(t=="vtwith"){let r=e[A];if(r)I("vtwith on a keyed element",r);else{let n=new Ae(o);X(e,n.k)}}else(o||o=="")&&St(e,t,o)}function _(e,t,...o){if(typeof e=="string"){let n=document.createElement(e);return tt(e=="template"?n.content:n,o),he(n,t),n}let r=t||{};if(pe(e.prototype)){let n=x.k;try{return new De(new e(r,o),r,o).e}catch(a){throw K(n),a}}else if(typeof e=="function"){let n=x.k,a;try{a=e(r,o)}catch(c){throw K(n),c}return ue(a)||Array.isArray(a)?a:Z(a)}return I("Invalid tag",e,r,o),G()}function et(e,...t){return t}function ot(e){if(ue(e)&&e!==!1||Ue(e))return _("span",null,e);if(e)return Q(e)}function vr(e){if(ue(e)&&e!==!1)return document.createTextNode(e.toString());if(V(e))return e;if(Ue(e))return e;if(e)return Q(e)}function Q(e){if(V(e)||Ye(e)||Ge(e))return e;if(fe(e))return e.rD();if(pe(e)){let t=le(e.vtKey);if(t&&J(t))return t.e}return I("Invalid child"),G()}function tt(e,t){if(Array.isArray(t))for(let o=0;o<t.length;o++)tt(e,t[o]);else{let o=vr(t);o&&e.appendChild(o)}}function Z(e){if(e==null||e===!1||e==="")return G();if(ue(e)||pe(e)||fe(e)||Ue(e)||Array.isArray(e)||e[A]!==void 0){let t=ut.cloneNode();return tt(t,e),t}return e}function fe(e){return e instanceof te}function oo(e){try{e()}catch(t){U(t)}}var ee=class{constructor(t,o){this.result=t,this.updateRefs=o}};function ro(e,t,o){Oe(e.e,t),e.e=t,e.uR=o}var te=class{#e;#o;#n;es=new Map;vtKey=de(this);#t=`vt-ro-${this.vtKey}`;#i;#r;#a=!1;#s(){Qe(this.#t,new me(this,"onChange"))}constructor(t,o,r){this.#e=t,this.#o=o||G,this.#n=r}registerOnChangeListener(t,o){let r=o&&o.hasVtKey||this,n=this.#t,a=o&&o.eventDispatchDelay||0,c=0,h=a>0?p=>{c||(c=setTimeout(()=>{c=0,Zt(n,r.vtKey,h)&&t(p)},a))}:t;return Ze(r,n,h),o&&o.triggerOnRegistration&&Ut(()=>{this.#s()}),this}registerOnMount(t,o){return t&&(this.#i||(this.#i=[]),this.#i.push(t)),o&&(this.#r||(this.#r=[]),this.#r.push(o)),this}mount(){this.#a||(this.#a=!0,this.#i&&this.#i.forEach(oo))}unmount(){this.#a&&(this.#a=!1,this.#r&&this.#r.forEach(oo))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let o=this.#e,r=[],n=[];this.es.forEach((a,c)=>{if(a.hU&&a.uR)n.push(a);else{let h=a.rF(t,this),p=h instanceof ee,m=Z(ot(p?h.result:h));X(m,c),r.push({i:a,e:m,r:p?h.updateRefs:void 0})}}),n.forEach(a=>{a.hU(a.e,a.uR,o,t)}),r.forEach(a=>{ro(a.i,a.e,a.r)})}rerenderElements(t){let o=x.k;try{this.es.size>1?this.#l(t):this.es.forEach((r,n)=>{if(r.hU&&r.uR)r.hU(r.e,r.uR,this.#e,t);else{let a=r.rF(t,this),c=a instanceof ee,h=Z(ot(c?a.result:a));X(h,n),ro(r,h,c?a.updateRefs:void 0)}})}catch(r){throw K(o),r}this.#e=t,P.has(this.#t)&&this.#s()}uK(t){let o=this.es.get(t);if(o){let r=o.e[A];return t===r?(this.es.delete(t),ve(t),!0):(I("Invalid state",t,r,o),!1)}else return I("Invalid unmountKey",t),!1}rD(){return this.render(this.#o,this.#n)}render(t,o){let r=t(this.#e,this),n=r instanceof ee,a=Z(ot(n?r.result:r)),c=de(this,a);return this.es.set(c,{e:a,rF:t,hU:o,uR:n?r.updateRefs:r}),a}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(o=>{let r=o.e,n=r.parentNode;n&&t.es.forEach(a=>{a.e.parentNode===n&&yt(n,r,a.e)})})}ei(t){let o=null;return this.es.forEach(r=>{r.e.parentNode===t&&(o=r.e)}),o}removeAll(){this.es.forEach((t,o)=>{rt(t.e),ve(o)}),this.es.clear()}};function Oe(e,t,o){let r=document.activeElement==e&&document.hasFocus();return o?co(e):V(e)&&Mt(e),e.replaceWith(t),o?nt(t):V(t)&&Tt(t),r&&t.focus(),t}function Ct(e,t){e.appendChild(t),nt(t)}function no(e,t){e.prepend(t),nt(t)}function io(e,t){Mt(e),e.replaceChildren(...t),Tt(e)}function rt(e){co(e),e.remove()}function Et(e,t,o){if(V(e)||Ye(e)||Ge(e)){let r=e.firstElementChild;for(;r;){Et(r,t,o);let n=r[A];if(n){let a=le(n);a?t(a,n):o&&ao(r)}r=r.nextElementSibling}}}function ao(e){ie("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function so(e,t){if(J(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(o){U(o)}Object.values(e.c).forEach(o=>{fe(o)&&o.mount()})}else kt(e),e.mount()}function nt(e){if(!e.isConnected)return;V(e)&&Tt(e);let t=e[A];if(t){let o=le(t);o?so(o,t):ao(e)}}function Tt(e){e.isConnected&&Et(e,so,!0)}function lo(e,t){if(J(e)){if(Me(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(o){U(o)}}Object.values(e.c).forEach(o=>{fe(o)?(o.unmount(),ce(o)):pe(o)&&(ce(o),Le(o))}),ve(e.k),Le(e.c)}else kt(e)?(e.unmount(),ve(e.k)):e.uK(t)}function Mt(e){Et(e,lo)}function co(e){V(e)&&Mt(e);let t=e[A];if(t){let o=le(t);o&&lo(o,t)}}function ge(e,t){return t===null?null:(t.replaceWith(e),nt(e),e)}function J(e){return e instanceof De}function pe(e){return e instanceof v}function fr(e){return e[ft]}function be(e,t){let o=fr(e),r=o.b||(o.b={});return r[t]||(r[t]=o[t].bind(o))}var v=class{constructor(t,o){this.attrs=t,this.children=o}mount(){}unmount(){}get refresh(){return be(this,"f")}get unmountSignal(){let t=this[We];return t||(t=new AbortController,this[We]=t,this.vtKey!==void 0&&!O.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return be(this,"q")}get appendToChild(){return be(this,"w")}get prependToChild(){return be(this,"t")}get replaceChildrenOfChild(){return be(this,"y")}get removeChild(){return be(this,"u")}},De=class{constructor(t,o,r){this.c=t,this.a=o,this.h=r,this.k=de(this),Gt(t,"vtKey",this.k),t[ft]=this,this.e=ho(this,this.a,this.h)}m=!1;f(){let t=x.k,o;try{o=ho(this,this.a,this.h)}catch(r){throw K(t),r}this.e=Oe(this.e,o)}q(t,o){return this.e.contains(t)?Oe(t,Q(o),!0):t}w(t,o){return this.e.contains(t)?(Ct(t,Q(o)),!0):!1}t(t,o){return this.e.contains(t)?(no(t,Q(o)),!0):!1}y(t,o){return this.e.contains(t)?(io(t,o.map(r=>Q(r))),!0):!1}u(t){return this.e.contains(t)?(rt(t),!0):!1}};function ho(e,t,o){let r=Z(e.c.render(t,o));return X(r,e.k),r}function Le(e){let t=e[We];t&&t.abort()}function W(e,t,o=!1){let r=qe.get(t),n=document.adoptedStyleSheets;if(r){if(!o)return;let c=n.indexOf(r.sheet);c>=0&&n.splice(c,1)}let a=new CSSStyleSheet;a.replace(e),n.push(a),qe.set(t,{sheet:a,text:e,key:t})}function d(e,t,o){let r;return"children"in t&&({children:r,...t}=t),o!==void 0&&(t.key=o),_(e,t,r)}var u=d,po=et;function i(e,t,...o){return _(e,t,...o)}var Or="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",uo=!1;function l(e,t,o="component",r=!1){uo||(uo=!0,W(Or,"vtd/LayerOrder"),zr()),W(`@layer velodesign.${o}{${e}}`,t,r)}function zr(){W(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var mo=!1,at=function(e,t){mo||(mo=!0,l(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let o=e.size||"1em";return s(i("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:o,height:o}}),e)};var $r=Symbol("velodesign.clearThemeOptionOverrides");function g(e,t){let o={},r=new Map,n=new Map;for(let[a,c]of Object.entries(e))n.set(a,function(){return E[c]});for(let[a,c]of Object.entries(t??{}))n.set(a,function(){return c});for(let a of n.keys())Object.defineProperty(o,a,{enumerable:!0,get:function(){return r.has(a)?r.get(a):n.get(a)()},set:function(c){c==null?r.delete(a):r.set(a,c)}});return Object.defineProperty(o,$r,{value:function(){r.clear()}}),o}var E=g({},{closeSymbol:function(){return"\u2715"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var fo=g({},{loadingSymbol:function(){return i(at,{size:"1em"})}}),Ir=500,vo=!1,S=function(e,t){vo||(vo=!0,l(`
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
`,"vtd/Button"));let o=!1,r=e.loadingOnClick??(e.onClick!==void 0&&e.onClick.length>=2),n=e.minLoadingMs??Ir,a;r&&(a=i("span",{class:"vtd-button-spinner"},i(fo.loadingSymbol,null)));let c=i("span",null,t);return s(i("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:h=>{if(!(r&&o)&&e.onClick)if(r){o=!0;let p=h.currentTarget;p.setAttribute("aria-busy","true"),p.setAttribute("aria-disabled","true"),a&&(a.style.visibility="visible"),c.style.visibility="hidden";let m=Date.now(),y=!1,M=()=>{y||(y=!0,setTimeout(()=>{o=!1,p.removeAttribute("aria-busy"),p.removeAttribute("aria-disabled"),a&&(a.style.visibility="hidden"),c.style.visibility="visible"},Math.max(0,m+n-Date.now())))},k=e.onClick(h,M);k instanceof Promise&&k.finally(M)}else e.onClick(h)}},c,a),e)};var go=console.log,bo=console.error,st=function(e,t,o){e.setAttribute(t,o)};var yo=new Map,Pr=!1;setTimeout(()=>{yo.entries().forEach(([e,t])=>{go(t)}),Pr=!0},1e3);var N="#fff",q="#000",xo="#050505",Nr=N,jr=q,Hr="#66b2ff",Br="#c6ff9e",Fr="#ffd666",Vr="#ff6666",ko="#fafafa",Kr="#151515",_r=N,Wr="#004c99",qr="#286100",Yr="#997000",Gr="#990000",Lt=":color-mix(in hsl,",Ur=[-8,-6,-4,-2,0,2,4,6,8],oe=(e,t,o,r)=>Ur.map(n=>n<0?`--${e}-${n/2+5}${Lt}${t} ${-1*n}0%,${o} ${10+n}0%)`:n==0?`--${e}-5:${o};--${e}:${o}`:`--${e}-${n/2+5}${Lt}${o} ${10-n}0%,${r} ${n}0%)`).join(";")+";",Xr=[1,2,3,4,5,6,7,8,9],wo=(e,t,o)=>Xr.map(r=>`--${e}-${r}${Lt}${t} ${10-r}0%,${o} ${r}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${o};`,So=(e,t,o)=>`--${e}:${t};--${e}-alt:${o};`,Co=function(e){st(document.getElementsByTagName("html")[0],"data-theme",e)},At="vtd-preferred-theme",re="light",ye="dark",Eo="default",xe=re,ze,Dt=null;function To(){try{return localStorage.getItem(At)}catch{return Dt}}function Jr(e){try{localStorage.setItem(At,e)}catch{Dt=e}}function Zr(){try{localStorage.removeItem(At)}catch{Dt=null}}var Ot={getColorScheme:function(){return xe},getColorSchemePreference:function(){if(ze)return ze;let e=To();return e==ye?ye:e==re?re:Eo},setColorScheme:function(e){Jr(e),Ot.resetColorScheme()},resetColorScheme:function(){let e=To();ze?xe=ze:e==ye?xe=ye:e==re?xe=re:(e&&e!=Eo&&Zr(),xe=globalThis.matchMedia("(prefers-color-scheme: light)").matches?re:ye),xe==re?Co(re):Co(ye)}};function Mo(e,t,o=!1){l(`
${e}[data-theme="light"]{
${So("text",t?.textLightColor||xo,t?.textDarkColor||ko)}
${wo("background",t?.backgroundLightColor||Nr,t?.backgroundLightAltColor||jr)}
${oe("primary",N,t?.primaryLightColor||Hr,q)}
${oe("secondary",N,t?.secondaryLightColor||Br,q)}
${oe("warning",N,t?.warningLightColor||Fr,q)}
${oe("accent",N,t?.accentLightColor||Vr,q)}
color-scheme:light;}
${e}[data-theme="dark"]{
${So("text",t?.textDarkColor||ko,t?.textLightColor||xo)}
${wo("background",t?.backgroundDarkColor||Kr,t?.backgroundDarkAltColor||_r)}
${oe("primary",q,t?.primaryDarkColor||Wr,N)}
${oe("secondary",q,t?.secondaryDarkColor||qr,N)}
${oe("warning",q,t?.warningDarkColor||Yr,N)}
${oe("accent",q,t?.accentDarkColor||Gr,N)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",o)}var zt={injectStyles(e,t=!0,o){ze=o,t&&l(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),Mo(":root",e),globalThis.setTimeout(function(){l("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),Ot.resetColorScheme()}};var Y="",C={configureBasePath:function(e){let t=e.replace(/\/+$/,"");Y=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return Y?e==Y?"/":e.startsWith(`${Y}/`)?e.slice(Y.length):e:e},resolveHref:function(e){return!Y||!e.startsWith("/")||e==Y||e.startsWith(`${Y}/`)?e:`${Y}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",C.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){bo(t),C.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=C.resolveHref(e)}};var b=function(e,t){let o=e.spa??!1;return s(i("a",{class:"vtd-link",href:C.resolveHref(e.to),onClick:o?r=>{r.preventDefault(),C.changeLocation(e.to)}:void 0},t),e)};var Qr=g({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var en=g({closeSymbol:"closeSymbol"},{zoomInSymbol:function(){return"+"},zoomOutSymbol:function(){return"\u2212"}});var tn=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var on={top:"bottom",bottom:"top",left:"right",right:"left"},H=8,Rt=new WeakMap;function rn(e){if(getComputedStyle(e).position==="fixed")return[];try{if(e.matches(":popover-open"))return[]}catch{}let t=[];for(let o=e.offsetParent??e.parentElement;o&&o!==document.documentElement;o=o.parentElement){let r=getComputedStyle(o);if((r.overflowX!=="visible"||r.overflowY!=="visible")&&t.push(o),r.position==="fixed")break}return t}function Do(e){let t={left:0,top:0,right:innerWidth,bottom:innerHeight};for(let o of e){let r=o.getBoundingClientRect();t.left=Math.max(t.left,r.left),t.top=Math.max(t.top,r.top),t.right=Math.min(t.right,r.right),t.bottom=Math.min(t.bottom,r.bottom)}return t}function It(e,t,o){switch(t){case"top":return o.top+H-e.top;case"bottom":return e.bottom-(o.bottom-H);case"left":return o.left+H-e.left;case"right":return e.right-(o.right-H)}}function Lo(e,t,o,r){return e<o?o-e:t>r?Math.max(r-t,o-e):0}function j(e,t,o){e.style.getPropertyValue(t)!==o&&(o?e.style.setProperty(t,o):e.style.removeProperty(t))}function nn(e){return(e.offsetParent??e.parentElement??e).getBoundingClientRect()}function Ao(e,t,o,r,n){let a=t==="bottom"?o.top-r.bottom:t==="top"?r.top-o.bottom:t==="right"?o.left-r.right:r.left-o.right;if(e==="top"||e==="bottom"){let h=e==="bottom"?r.bottom+a:r.top-a-n.height;return{left:o.left,right:o.right,top:h,bottom:h+n.height}}let c=e==="right"?r.right+a:r.left-a-n.width;return{left:c,right:c+n.width,top:o.top,bottom:o.bottom}}function Oo(e,t,o){let r=e.getBoundingClientRect(),n=(t.anchor??(()=>nn(e)))(),a=Do(o.clippers),c=t.side==="top"||t.side==="bottom",h={width:r.width,height:o.maxHeight===null?r.height:o.naturalHeight},p=r.top-o.y;o.maxHeight!==null&&o.side==="top"&&(p=r.bottom-o.y-h.height);let m={left:r.left-o.x,right:r.right-o.x,top:p,bottom:p+h.height},y=Ao(t.side,o.side,m,n,h),M=t.side,k=y,w=It(y,t.side,a);if(w>0){let Te=on[t.side],Wt=Ao(Te,o.side,m,n,h);It(Wt,Te,a)<w&&(M=Te,k=Wt)}let L=null,T=It(k,M,a);t.scrolls&&c&&T>0&&(L=Math.max(Math.floor(h.height-T),0),k=M==="bottom"?{...k,bottom:k.bottom-T}:{...k,top:k.top+T});let $=Math.round(Lo(k.left,k.right,a.left+H,a.right-H)),pt=Math.round(Lo(k.top,k.bottom,a.top+H,a.bottom-H));return{side:M,x:$,y:pt,maxHeight:L,size:h,area:a}}function zo(e,t,o,r){r.side!==o.side&&t.setSide(r.side,r.size),t.scrolls&&j(e,"max-height",r.maxHeight===null?"":`${r.maxHeight}px`),j(e,"translate",r.x===0&&r.y===0?"":r.y===0?`${r.x}px`:`${r.x}px ${r.y}px`),o.maxHeight===null&&r.maxHeight!==null&&(o.naturalHeight=r.size.height),o.side=r.side,o.x=r.x,o.y=r.y,o.maxHeight=r.maxHeight}function R(e,t){j(e,"translate",""),j(e,"width",""),j(e,"max-width",""),j(e,"white-space",""),t.scrolls&&j(e,"max-height",""),t.setSide(t.side,{width:0,height:0});let o=e.getBoundingClientRect();if(o.width===0&&o.height===0)return Rt.delete(e),t.side;let r={side:t.side,x:0,y:0,naturalHeight:o.height,maxHeight:null,wrapped:!1,naturalWidth:o.width,clippers:rn(e)},n=Do(r.clippers),a=n.right-n.left-2*H;o.width>a&&(j(e,"width","max-content"),j(e,"max-width",`${Math.max(Math.floor(a),0)}px`),j(e,"white-space","normal"),r.wrapped=!0),Rt.set(e,r);let c=Oo(e,t,r);return zo(e,t,r,c),c.side}function an(e,t){let o=Rt.get(e);if(!o)return()=>{R(e,t)};let r=Oo(e,t,o),n=r.area.right-r.area.left-2*H;return o.wrapped&&o.naturalWidth<=n||r.size.width>n?()=>{R(e,t)}:()=>{zo(e,t,o,r)}}function ke(e,t){let o=0,r=n=>{n.target instanceof Node&&e.contains(n.target)||o||(o=requestAnimationFrame(()=>{o=0;let a=t().map(([c,h])=>an(c,h));for(let c of a)c?.()}))};return globalThis.addEventListener("resize",r),document.addEventListener("scroll",r,{capture:!0,passive:!0}),()=>{cancelAnimationFrame(o),o=0,globalThis.removeEventListener("resize",r),document.removeEventListener("scroll",r,{capture:!0})}}var Io=!1,$e=function(e,t){return Io||(Io=!0,l(`
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
`,"vtd/Card")),s(i("div",{class:"vtd-card"},e.header&&i("div",{class:"vtd-card-header"},e.header),i("div",{class:"vtd-card-body"},t),e.footer&&i("div",{class:"vtd-card-footer"},e.footer)),e)};var Ro=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),sn=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),ln=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function dn(e,t){if(t=="plain")return[{kind:"",text:e}];let o=t=="css"?ln:sn,r=t!="css",n=[],a=0;o.lastIndex=0;let c=0,h=!1,p=0,m=()=>r&&c>0&&!h&&p==0,y;for(;(y=o.exec(e))!==null;){y.index>a&&n.push({kind:"",text:e.slice(a,y.index)});let w=y.groups??{},L=y[0],T=w.closeTag??w.openTag;if(T!==void 0&&!M(y.index,w.closeTag!==void 0))n.push({kind:"punct",text:"<"}),n.push({kind:!m()&&Ro.has(T)?"keyword":"",text:T});else if(T!==void 0){let $=w.closeTag!==void 0;r&&(c=Math.max(0,c+($?-1:1)),h=!0),n.push({kind:"punct",text:$?"</":"<"}),n.push({kind:"tag",text:T})}else if(w.word!==void 0){let $=!m()&&Ro.has(w.word);n.push({kind:$?"keyword":"",text:w.word})}else{let $=["comment","string","number","attr","punct"].find(Te=>w[Te]!==void 0),pt=m()&&($=="string"||$=="number");n.push({kind:pt?"":$??"",text:L}),r&&$=="punct"&&k(L)}a=y.index+L.length}return a<e.length&&n.push({kind:"",text:e.slice(a)}),n;function M(w,L){if(L||!r||m())return!0;let T=w>0?e[w-1]??"":"";return!/[\w$)\]]/.test(T)}function k(w){for(let L=0;L<w.length;L++){let T=w[L];T=="{"?p++:T=="}"?p=Math.max(0,p-1):T==">"&&h&&p==0&&(L>0&&w[L-1]=="/"&&(c=Math.max(0,c-1)),h=!1)}}}var Po=!1,Ie=function(e){let t=e.language??"tsx",o=dn(e.code,t);Po||(Po=!0,l(`
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
`,"vtd/CodeBlock"));let r=["vtd-code-block"];return e.wrap&&r.push("vtd-code-block-wrap"),e.showLineNumbers&&r.push("vtd-code-block-numbered"),s(i("pre",{class:r.join(" "),"aria-label":e.ariaLabel},i("code",null,e.showLineNumbers?cn(o):No(o))),e)};function No(e){return e.map(t=>t.kind?i("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function cn(e){let t=[[]];for(let o of e)o.text.split(`
`).forEach((n,a)=>{a>0&&t.push([]),n.length>0&&t[t.length-1].push({kind:o.kind,text:n})});return t.map(o=>i("span",{class:"vtd-code-block-line"},No(o)))}var hn=g({closeSymbol:"closeSymbol"});var jo=!1,we=class extends v{mount(){jo||(jo=!0,l(`
.vtd-nav-link{
position:relative;
color:inherit;
text-decoration:none;

display:inline-block;
box-sizing:border-box;
min-height:24px;
padding-block:0.15em;
}

.vtd-nav-link::after{
content:attr(data-label);
display:block;
height:0;
overflow:hidden;
visibility:hidden;
font-weight:bold;
}
.vtd-nav-link-active{
color:var(--primary);
font-weight:bold;
}
`,"vtd/NavLink")),globalThis.addEventListener("popstate",this.refresh),globalThis.addEventListener("locationchange",this.refresh)}unmount(){globalThis.removeEventListener("popstate",this.refresh),globalThis.removeEventListener("locationchange",this.refresh)}render(t,o){let n=(t.exact===void 0?!0:t.exact)?C.getPathname()==t.to:C.getPathname().startsWith(t.to),a=t.activeClass||"vtd-nav-link-active",c=t.spa??!1,h=o.length==1?o[0]:void 0,p=typeof h=="string"||typeof h=="number"||typeof h=="bigint"?String(h):void 0;return s(i("a",{href:C.resolveHref(t.to),class:`vtd-nav-link${n?` ${a}`:""}`,"data-label":p,"aria-current":n?"page":void 0,onClick:c?m=>{m.preventDefault(),C.changeLocation(t.to)}:void 0},o),t)}};var Bo=g({confirmSymbol:"confirmSymbol"}),Ho=!1,Se=class extends v{#e;#o;#n(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let o of this.#e.querySelectorAll(".vtd-menu-entry-open"))o!=t&&(o.classList.remove("vtd-menu-entry-open"),o.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#i=[];#r=()=>{if(this.#e.open)for(let t of this.#i)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#a;#s;#l;#c={side:"bottom",setSide:t=>{this.#s.classList.toggle("vtd-menu-list-above",t==="top")}};#d=new WeakMap;#v=()=>{let t=[[this.#s,this.#c]];for(let o of this.#e.querySelectorAll(".vtd-menu-entry-open")){let r=this.#d.get(o);r&&t.push(r)}return t};#f(t){let o=t.querySelector(":scope > .vtd-menu-sublist");if(!o)return;let r=getComputedStyle(t).direction==="rtl"?"left":"right",n={side:r,setSide:a=>{o.classList.toggle("vtd-menu-sublist-flipped",a!==r)}};this.#d.set(t,[o,n]),R(o,n)}#g=()=>{this.#r(),this.#e.open?(R(this.#s,this.#c),this.#l??=ke(this.#s,this.#v)):(this.#l?.(),this.#l=void 0)};#h=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#o.focus()};#u=t=>{this.#a.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#h())};#b=t=>{let o=document.activeElement,r=o?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),r){this.#t(),r.querySelector(".vtd-menu-item-parent")?.focus();return}this.#h(!0);return}if(!this.#e.open)return;let n=this.#n();if(n.length==0)return;let a=n.indexOf(o);if(t.key=="ArrowDown")t.preventDefault(),n[(a+1)%n.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),n[(a-1+n.length)%n.length]?.focus();else if(t.key=="Home")t.preventDefault(),n[0]?.focus();else if(t.key=="End")t.preventDefault(),n[n.length-1]?.focus();else if(t.key=="ArrowRight"){let c=o?.closest(".vtd-menu-entry");o?.classList.contains("vtd-menu-item-parent")&&c&&(t.preventDefault(),this.#p(c),c.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&r&&(t.preventDefault(),this.#t(),r.querySelector(".vtd-menu-item-parent")?.focus())};#y(t){let o=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let r of o?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])r.setAttribute("aria-checked",r==t?"true":"false")}#p(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true"),this.#f(t)}mount(){document.addEventListener("click",this.#u)}unmount(){document.removeEventListener("click",this.#u),this.#l?.(),this.#l=void 0}#m(t){return t.map((o,r)=>{let n=o.dividerBefore&&r>0?" vtd-menu-entry-divided":"";if(o.children&&o.children.length>0){let y=i("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${o.disabled?" vtd-menu-item-disabled":""}`},o.label),M=i("li",{class:`vtd-menu-entry vtd-menu-entry-parent${n}`,role:"none"},y,i("ul",{class:"vtd-menu-sublist",role:"menu"},this.#m(o.children)));return M.addEventListener("pointerenter",()=>{this.#p(M)}),y.addEventListener("click",k=>{k.preventDefault(),M.classList.contains("vtd-menu-entry-open")?this.#t():this.#p(M)}),M}let a=o.selected!==void 0,c=typeof o.selected=="function"?o.selected:void 0,h=c?c():o.selected===!0,p=i("a",{role:a?"menuitemradio":"menuitem","aria-checked":a?h?"true":"false":void 0,href:o.href?C.resolveHref(o.href):"#","aria-disabled":o.disabled,class:`vtd-menu-item${a?" vtd-menu-item-checkable":""}${o.disabled?" vtd-menu-item-disabled":""}`,onClick:y=>{if(o.disabled){y.preventDefault();return}o.href?o.spa&&(y.preventDefault(),C.changeLocation(o.href)):y.preventDefault(),a&&this.#y(p),o.onClick?.(),!o.keepOpen&&(this.#t(),this.#h())}},a?i("span",{class:"vtd-menu-check","aria-hidden":"true"},i(Bo.confirmSymbol,null)):null,o.label);c&&this.#i.push({row:p,read:c});let m=i("li",{class:`vtd-menu-entry${n}`,role:"none"},p);return m.addEventListener("pointerenter",()=>{this.#t(m.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),m})}constructor(t,o){super(t,o),this.#a=t,Ho||(Ho=!0,l(`
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
`,"vtd/Menu")),this.#o=i("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#s=i("ul",{class:"vtd-menu-list",role:"menu"},this.#m(t.items)),this.#e=i("details",{class:"vtd-menu",onToggle:this.#g,onKeyDown:this.#b},this.#o,this.#s),s(this.#e,t)}render(){return this.#e}};var Ko=g({collapseSymbol:"collapseSymbol"}),Fo=!1,Vo=3;function pn(e,t){if(t===void 0||e.length<=Math.max(t,Vo))return{head:e,collapsed:[],tail:[]};let r=Math.max(t,Vo)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-r),tail:e.slice(e.length-r)}}var Re=function(e,t){Fo||(Fo=!0,l(`
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
`,"vtd/Breadcrumbs"));let{head:o,collapsed:r,tail:n}=pn(e.items,e.maxItems),a=e.separator||"/",c=m=>m.leading?i("span",{class:"vtd-breadcrumbs-crumb"},i("span",{class:"vtd-breadcrumbs-leading"},m.leading),m.label):m.label,h=(m,y)=>i("li",{class:"vtd-breadcrumbs-item","aria-current":m.to?void 0:"page"},m.to?i(b,{to:m.to,spa:e.spa},c(m)):i("span",null,c(m)),y?null:i("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},a)),p=r.length>0?i("li",{class:"vtd-breadcrumbs-item"},i(Se,{ariaLabel:e.expandLabel,trigger:i("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||i(Ko.collapseSymbol,null)),items:r.map(m=>({label:c(m),href:m.to,spa:e.spa}))}),i("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},a)):null;return s(i("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},i("ol",{class:"vtd-breadcrumbs-list"},o.map((m,y)=>h(m,r.length==0&&y==o.length-1)),p,n.map((m,y)=>h(m,y==n.length-1)))),e)};var un=g({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var _o=!1,Pe=class extends v{#e;#o;#n;#t=()=>{let t=this.#n.sidebar?.get();!this.#o||!t||(this.#o.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#o.setAttribute("aria-expanded",t.open?"true":"false"),this.#o.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,o){if(super(t,o),this.#n=t,mn(),t.sidebar){let r=t.sidebar;this.#o=i("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let n=r.get();r.set({...n,open:!n.open})}},i("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"}))}this.#e=s(i("nav",{class:"vtd-navbar"},i("div",{class:"vtd-navbar-start"},this.#o??null,t.brand?i("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?i("div",{class:"vtd-navbar-leading"},t.leading):null),i("div",{class:"vtd-navbar-items"},o)),t)}mount(){this.#n.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function mn(){_o||(_o=!0,l(`
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
`,"vtd/Navbar"))}var Yo=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",tc=`.vtd-sidebar-collapsed:not(${Yo})`,oc=`.vtd-sidebar-collapsed:is(${Yo})`;var Go=!1,Ne=class extends v{#e;#o=new Map;#n=new Map;#t=void 0;#i=void 0;#r;#a;constructor(t,o){super(t,o),this.#r=t.items,this.#a=t.topOffset??0,Go||(Go=!0,l(`
.vtd-table-of-contents{width:100%;box-sizing:border-box;}
.vtd-table-of-contents-header{
font-size:0.75em;
font-weight:bold;
text-transform:uppercase;
letter-spacing:0.05em;
color:var(--background-6);
padding:0 0 0.6em 0.9em;
}
.vtd-table-of-contents-list{list-style:none;margin:0;padding:0;}
.vtd-table-of-contents-link{
display:block;
padding:0.3em 0 0.3em 0.9em;

border-inline-start:2px solid var(--background-4);
color:var(--background-7);
text-decoration:none;
font-size:0.9em;
line-height:1.4;
transition:color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
.vtd-table-of-contents-link:hover{color:var(--text);border-inline-start-color:var(--background-6);}
.vtd-table-of-contents-link-active{
color:var(--primary-8);
border-inline-start-color:var(--primary);
font-weight:bold;
}

.vtd-table-of-contents-level-1{padding-inline-start:0.9em;}
.vtd-table-of-contents-level-2{padding-inline-start:1.8em;}
.vtd-table-of-contents-level-3{padding-inline-start:2.7em;}
.vtd-table-of-contents-level-4{padding-inline-start:3.6em;}
.vtd-table-of-contents-level-5{padding-inline-start:4.5em;}
.vtd-table-of-contents-level-6{padding-inline-start:5.4em;}
@media (prefers-reduced-motion: reduce){
.vtd-table-of-contents-link{transition:none;}
}
`,"vtd/TableOfContents"));let r=i("ol",{class:"vtd-table-of-contents-list"},t.items.map(n=>{let a=Math.min(Math.max(n.level??1,1),6),c=i("a",{class:`vtd-table-of-contents-link vtd-table-of-contents-level-${a}`,href:`#${n.id}`,onClick:()=>{this.#d(n.id)}},n.label);return this.#o.set(n.id,c),i("li",{class:"vtd-table-of-contents-item"},c)}));this.#e=s(i("nav",{class:"vtd-table-of-contents","aria-label":t.ariaLabel},t.header?i("div",{class:"vtd-table-of-contents-header"},t.header):null,r),t)}mount(){let t=new IntersectionObserver(o=>this.#s(o),{rootMargin:`-${this.#a}px 0px -70% 0px`});for(let o of this.#r){let r=document.getElementById(o.id);r&&t.observe(r)}this.#i=t}unmount(){this.#i?.disconnect(),this.#i=void 0}#s(t){for(let o of t)this.#n.set(o.target.id,{intersecting:o.isIntersecting,top:o.boundingClientRect.top});this.#d(this.#c())}#l(){let t=document.documentElement.scrollHeight;return t<=globalThis.innerHeight+2?!1:globalThis.scrollY+globalThis.innerHeight>=t-2}#c(){if(this.#l())return this.#r[this.#r.length-1]?.id;for(let o of this.#r)if(this.#n.get(o.id)?.intersecting)return o.id;let t;for(let o of this.#r){let r=this.#n.get(o.id);r&&r.top<=this.#a&&(t=o.id)}return t??this.#r[0]?.id}#d(t){if(t===this.#t)return;let o=this.#t===void 0?void 0:this.#o.get(this.#t);o&&(o.classList.remove("vtd-table-of-contents-link-active"),o.removeAttribute("aria-current"));let r=t===void 0?void 0:this.#o.get(t);r&&(r.classList.add("vtd-table-of-contents-link-active"),r.setAttribute("aria-current","true")),this.#t=t}render(){return this.#e}};var fn=g({closeSymbol:"closeSymbol"});var Xo=g({closeSymbol:"closeSymbol"}),Uo=!1,je=function(e,t){Uo||(Uo=!0,l(`
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
position:relative;
cursor:pointer;
display:inline-flex;
align-items:center;
justify-content:center;
box-sizing:border-box;
width:1.35em;
height:1.35em;
margin-inline-end:-0.3em;
background:transparent;
border:1px solid transparent;
border-radius:0.25rem;
color:inherit;
font:inherit;
line-height:1;
padding:0;
opacity:0.7;
transition:opacity 0.12s ease-in-out, background-color 0.12s ease-in-out;
}


.vtd-tag-remove::after{
content:"";
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
min-width:24px;
min-height:24px;
width:100%;
height:100%;
}
.vtd-tag-remove:hover{opacity:1;background-color:var(--background);}
.vtd-tag-remove:focus-visible{opacity:1;}
@media (prefers-reduced-motion: reduce){
.vtd-tag-remove{transition:none;}
}
`,"vtd/Tag"));let o=i("span",{class:`vtd-tag vtd-tag-${e.type||"neutral"}`},t,e.onRemove&&i("button",{type:"button",class:"vtd-tag-remove","aria-label":e.removeLabel,onClick:()=>{e.onRemove?.(),o.remove()}},i(Xo.closeSymbol,null)));return s(o,e)};var bn=g({},{emptySymbol:function(){return i("span",{class:"vtd-empty-icon","aria-hidden":"true"},i(E.emptySymbol,null))}});var Jo=!1,Pt=function(e,t){return Jo||(Jo=!0,l(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),s(i("div",{class:"vtd-statistic"},i("div",{class:"vtd-statistic-title"},e.title),i("div",{class:"vtd-statistic-value"},e.prefix&&i("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&i("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var yn=g({closeSymbol:"closeSymbol"});var xn=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Ht=g({},{columnsSymbol:function(){return i("span",{"aria-hidden":"true"},"\u25A5")},emptySymbol:function(){return i("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},i(E.emptySymbol,null))},searchSymbol:function(){return null}});var er=!1;function Ce(){er||(er=!0,l(`
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
`,"vtd/Typography","base"))}function Ee(e,t,o){let r=[e];return t&&r.push(`vtd-text-${t}`),o?.strong&&r.push("vtd-text-strong"),o?.italic&&r.push("vtd-text-italic"),o?.underline&&r.push("vtd-text-underline"),o?.strike&&r.push("vtd-text-strike"),o?.numeric&&r.push("vtd-text-numeric"),r.join(" ")}var D=function(e,t){Ce();let o=Ee(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return s(i("h1",{class:o},t),e);case 2:return s(i("h2",{class:o},t),e);case 3:return s(i("h3",{class:o},t),e);case 4:return s(i("h4",{class:o},t),e);case 5:return s(i("h5",{class:o},t),e);default:return s(i("h6",{class:o},t),e)}};var B=function(e,t){Ce();let o=Ee(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?s(i("code",{class:o},t),e):s(i("span",{class:o},t),e)};var F=function(e,t){return Ce(),s(i("p",{class:Ee("vtd-paragraph",e.type)},t),e)};var Bt={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function lt(e,t="md"){return e===void 0?Bt[t]:On(e)?Bt[e]:e}function On(e){return Object.hasOwn(Bt,e)}function dt(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function tr(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var or=!1,f=function(e,t){or||(or=!0,l(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let o=e.direction??"row";return s(i("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:o,gap:lt(e.gap),alignItems:dt(e.align),justifyContent:tr(e.justify),flexWrap:e.wrap??o==="row"?"wrap":"nowrap"}},t),e)};var rr=!1,He=function(e,t){rr||(rr=!0,l(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let o=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return s(i("div",{class:"vtd-grid",style:{gridTemplateColumns:o,gap:lt(e.gap),alignItems:dt(e.align)}},t),e)};var nr=g({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var z=e=>({label:"GitHub",to:`https://github.com/Velotype/${e}`}),ne=e=>({label:"JSR",to:`https://jsr.io/@velotype/${e}`}),Vt=[{id:"velotype",name:"velotype",tag:"framework",tagKind:"primary",tagline:"A fast and small TSX framework that updates the DOM in place.",about:["velotype creates real DOM elements as your TSX runs. There is no virtual DOM and no reconciler: a value that changes renders only the part of the page that depends on it, and a list that changes renders, moves, or removes only the rows that changed.","Components are classes with fields and methods, and you write TSX the way you write HTML."],stats:[{title:"Minified",value:"21",suffix:"kb"},{title:"Gzipped",value:"7.9",suffix:"kb"},{title:"Virtual DOM",value:"None"}],statsNote:"velotype 0.3.2, the jsx-runtime entry point, minified with deno bundle. Bundlers drop the parts an app does not import.",features:[{title:"Real DOM elements",text:"TSX gives you actual HTMLElements. Write class and for the way you do in HTML, add listeners with addEventListener, and use every DOM API you already know."},{title:"Updates in place",text:"A RenderObject renders its value everywhere it appears and re-renders just those spots when it changes. Lists update only the rows that changed, and sort(), move(), and filter() move the rows already on the page."},{title:"Components are classes",text:"Fields hold your state, methods change it, and velotype calls mount(), render(), and unmount() at the right moments. It reads like the object-oriented code you already write."},{title:"Small and tree-shakeable",text:"About 21kb minified and 7.9kb gzipped for the entire runtime (velotype 0.3.2), and your bundler drops whatever your app does not import."},{title:"Typed styles and events",text:"Style objects are checked against CSS: property names, keywords, units, and colors. on* attributes take a handler or {handler, options}, and on- listens for a custom event by its exact name."},{title:"Built for development",text:"Hot reloading keeps component state. ErrorBoundary contains a failing component, AsyncRenderObject shows only the latest request's result, and the DevTools extension shows your live component tree."}],samples:[{title:"A component that updates in place",intro:"The RenderObject renders its value wherever it is placed, and setting a new value renders only that element again.",language:"tsx",code:`class Counter extends Component<EmptyAttrs> {
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
}`}],install:{title:"Add velotype to a Deno project",language:"plain",code:`deno add jsr:@velotype/velotype

// deno.json
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "jsxImportSource": "@velotype/velotype",
        "lib": ["dom", "deno.ns", "esnext"]
    }
}`},links:[z("velotype"),ne("velotype")],resources:[{name:"Velotype DevTools",tag:"Chrome extension",text:"Chrome DevTools panels for debugging velotype apps: the live component tree with each component's fields, the event bus's registrations, and a decoder for VSON and VBIN payloads. It is built from source and loaded unpacked.",links:[{label:"Docs",to:"/docs/velotype/devtools/"},{label:"Learn more",to:"/projects/velodevtools/"},z("velodevtools")]},{name:"velotype-perf-demo",tag:"benchmark",text:"The same fleet dashboard written in velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code, with 10,000 rows by default. The page loads each one and times creating rows, live updates, typing a filter, sorting, and moving a row in your own browser.",links:[z("velotype-perf-demo"),{label:"Live demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{name:"example-velotype-projects",tag:"examples",text:"Example projects using the velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, the demo pages from React's 2018 hooks talk recreated in velotype, and the custom-elements-everywhere tests that check velotype works with Custom Elements.",links:[z("example-velotype-projects")]}]},{id:"velodesign",name:"velodesign",tag:"UI components",tagKind:"primary",tagline:"A themed component library for velotype, built from native HTML elements.",about:["velodesign is a component library for velotype apps. Where HTML has an element for the job (input, button, details, dialog), the component is that element, so keyboard support, form participation, and browser autofill come from the platform.","This site is built with it."],stats:[{title:"Theme",value:"Light + dark"},{title:"Colors set by",value:"CSS variables"}],features:[{title:"Native elements",text:"A Checkbox is a real input, a Modal is a real dialog, and an Accordion is built on details. Keyboard support, form participation, and browser autofill come with them."},{title:"Re-theme with variables",text:"A handful of CSS variables (--text, --background, --primary, --secondary, --warning, --accent, each with a ramp from light to dark) color everything. Change them and every component follows."},{title:"Light and dark",text:`The theme follows the browser's color scheme, or a reader's choice through [data-theme="light"|"dark"].`},{title:"A broad set",text:"Typography, layout, forms, navigation, feedback, overlays, data display, data entry, and charts: from Stack, Grid, and Button to DataTable, DatePicker, Command, and LineChart."},{title:"One spacing scale",text:"Stack and Grid take their gaps from a shared scale in em, so spacing follows the type size and rows that look alike are alike."},{title:"Smooth updates",text:"Handlers make the smallest DOM change for an update, and none when nothing changed, so focus, caret, selection, and scroll position stay where they are."}],samples:[{title:"Use a few components",language:"tsx",code:`import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
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
// and sets up the CSS custom properties every component reads.`},links:[z("velodesign"),ne("velodesign"),{label:"Component showcase",to:"https://velotype.github.io/velodesign/"}]},{id:"velochart",name:"velochart",tag:"charts",tagKind:"primary",tagline:"A chart library for velotype, drawn in SVG at the container's real pixel width.",about:["velochart draws charts for velotype apps: 21 of them, with log and time axes, zoom and pan, annotations, downsampling for long series, keyboard navigation, and export.","It is built on velodesign, whose components make up its legends and controls, and takes its colors from the same CSS variables, so charts follow the page's theme."],stats:[{title:"Charts",value:"21"},{title:"Gzipped",value:"36",suffix:"kb"},{title:"Colors set by",value:"CSS variables"}],statsNote:"velochart 0.0.1, every chart, minified with deno bundle and without velotype. Bundlers drop the charts an app does not import.",features:[{title:"Sized to the container",text:"A chart redraws at its container's real pixel width instead of scaling one viewBox, so text stays the same size in a sidebar and on a dashboard."},{title:"Numbers for screen readers",text:"A chart with tabular values renders them in a visually hidden table, so a screen reader gets the values and not just the chart's name."},{title:"Light and dark",text:"Series, grid lines, and tooltips are drawn with CSS variables, so charts follow the theme. Override ChartThemeOptions.seriesColors to reskin all of them."},{title:"Explore it",text:"Zoom, pan, brush, and a range slider, on log, time, and numeric axes, with annotations, error bars, trend lines, and cursors that move together across charts."},{title:"Long series and live data",text:"A long line thins to what its pixels can show, while the tooltip reads every point. appendData takes a live feed, and a canvas renderer handles tens of thousands of marks."},{title:"For every reader",text:"The arrow keys walk the marks with each one read aloud, and patterns tell series apart without color. Export to CSV, SVG, and PNG."},{title:"Hover that does no extra work",text:"One target covers the whole plot and tracks the nearest category, so a pointer need not land on a 2px line. A hover that changes nothing touches no DOM."}],samples:[{title:"Draw a line chart",language:"tsx",code:`import { LineChart } from "@velotype/velochart"
import { Theme } from "@velotype/velodesign"
import { replaceElementWithRoot } from "@velotype/velotype"

Theme.injectStyles()

replaceElementWithRoot(
    <LineChart
        title="Revenue"
        data={[
            {label: "Jan", values: {revenue: 12}},
            {label: "Feb", values: {revenue: 19}},
        ]}
        series={[{key: "revenue", label: "Revenue"}]}/>,
    document.getElementById("app"),
)`}],install:{title:"Add velochart to a Deno project",language:"plain",code:`deno add jsr:@velotype/velochart

// velochart reads the CSS custom properties that velodesign's
// Theme.injectStyles() defines.`},links:[z("velochart"),ne("velochart"),{label:"Chart showcase",to:"https://velotype.github.io/velochart/"}]},{id:"velossr",name:"velossr",tag:"server rendering",tagKind:"primary",tagline:"TSX rendered to HTML on the server, with no virtual DOM and no client runtime.",about:["velossr is the server-side version of velotype's TSX. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve.","Pair it with velotype for interactive parts of a page: the server renders the markup for each one, and velotype replaces it in the browser with replaceElementWithRoot()."],stats:[{title:"Virtual DOM",value:"None"},{title:"Client runtime",value:"None"}],features:[{title:"Static and dynamic components",text:"A StaticServerComponent is a plain function that renders synchronously. A DynamicServerComponent is a class that sees the Request and can render async."},{title:"Streaming",text:"Send a page all at once, or as a ReadableStream where async components flush in place as they resolve."},{title:"Prepared once",text:"prepareHTMLVNodeForRendering() prepares a page when your module loads, so its static parts are built once and not on every request."},{title:"Escaped by default",text:"Text, attribute values, and attribute names are escaped where they are written. Inline style and script text is written as it is, with only the sequences that would end the element early changed."},{title:"Contained failures",text:"If a dynamic component throws, its onFail() renders in its place and the rest of the page goes out."},{title:"Same TSX as velotype",text:"HTML attributes, style objects, and fragments behave as they do in the browser, so markup moves between server and client unchanged."}],samples:[{title:"A server that renders a page",language:"tsx",code:`import { type Context, Router, Server } from "jsr:@velotype/veloserver"
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
}`},links:[z("velossr"),ne("velossr")]},{id:"velodevtools",name:"Velotype DevTools",tag:"Chrome extension",tagKind:"secondary",tagline:"Chrome DevTools panels for debugging velotype apps.",about:["A Chrome extension with three DevTools panels, plus a toolbar popup that shows whether velotype is present on the page.","It works with any velotype build that installs the devtools hook, which every current velotype entry point does."],stats:[{title:"Panels",value:"3"}],features:[{title:"The component tree",text:"Your page's live component tree, like React DevTools: class names, DOM anchors, and for class components their attrs and instance fields, including live RenderObject values. Click a node to inspect it and highlight it on the page."},{title:"Expandable fields",text:"Objects, arrays, Maps, and Sets expand to their live values, fetched fresh on each expand and kept live while open."},{title:"Velotype Events",text:"Every key on the event bus with its listener count, and the live components and RenderObjects that are listening."},{title:"VeloJSON",text:"Decode VSON and VBIN payloads from network requests and responses while the panel is open, or convert bytes and JSON by hand."}],samples:[],install:{title:"Build and load it",language:"plain",code:`deno task build

// chrome://extensions -> enable Developer mode -> Load unpacked
// -> select the dist/ folder`},links:[z("velodevtools")]},{id:"veloserver",name:"veloserver",tag:"web server",tagKind:"warning",tagline:"A web server framework for high-performance websites, on Deno.",about:["veloserver is a small server framework: a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates velotype apps."],stats:[],features:[{title:"Routing",text:"Write /users/:id and your handler receives the id. A fixed path like /users/me beats any :name or * pattern that also matches."},{title:"Typed request metadata",text:"Give every request its own typed data, such as the signed-in user or a request id, for every handler and inspector to read."},{title:"Inspectors",text:"Run logging, timing, and auth before and after the handlers of a path. An inspector can answer a request itself, and it sees every response."},{title:"Static files",text:"mountFiles() and mountFile() serve a directory or a file from memory, with an ETag and a gzip copy for clients that accept it."},{title:"Clean shutdown",text:"SIGINT, SIGTERM, and SIGUSR1 stop the server cleanly, and server.close() does it from code."},{title:"A development server",text:"@velotype/veloserver/dev serves your velotype app and updates the page when files change, per module or by rebuilding the bundle."}],samples:[{title:"Hello veloserver",language:"tsx",code:`import { Router, Server } from "jsr:@velotype/veloserver"

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
deno run --allow-net server.ts`},links:[z("veloserver"),ne("veloserver")]},{id:"velojson",name:"velojson (VSON)",tag:"binary JSON",tagKind:"warning",tagline:"A compact binary encoding for JSON, and an even smaller one when both sides share a schema.",about:["VSON (Velocity JSON) maps JavaScript JSON data to bytes one to one: anything JSON can hold, VSON can hold, and nothing else is added.","It has three formats, each described below."],stats:[{title:"Base vs JSON text",value:"20-25%",suffix:" smaller"},{title:"Key Table vs JSON text",value:"20-65%",suffix:" smaller"},{title:"VBIN vs JSON text",value:"25-70%",suffix:" smaller"}],features:[{title:"VSON Base",text:"A direct translation of JSON into bytes, typically 20-25% smaller than the text. It mirrors JSON's structure, so it works for streaming and partial decoding."},{title:"VSON Key Table",text:"Every unique key is stored once, in a table at the end of the message. About 20% smaller than JSON for a single object, and up to about 65% smaller for many records that share a wide set of keys."},{title:"VBIN",text:"Encoder and decoder agree on key IDs ahead of time, so no table is sent and key names are never encoded or decoded as strings. Typically 25-70% smaller than JSON text."},{title:"Same data as JSON",text:"VSON.encode() and VSON.decode() take and return the values that JSON.stringify() and JSON.parse() do. Anything JSON can hold, VSON can hold, and nothing else is added."},{title:"Server and browser builds",text:"The main module is tuned for speed and supports every format. The browser module is tuned for size, about 4.3kb minified, and supports Key Table."},{title:"Debuggable",text:"The Velotype DevTools extension decodes VSON and VBIN payloads straight from the network panel."}],samples:[{title:"Encode and decode",language:"tsx",code:`import { VSON } from 'jsr:@velotype/velojson'

const startObj = { name: "Some name", age: 20, address: null }

const objBinary: Uint8Array = VSON.encode(startObj)
console.log(objBinary.length) // 34 bytes, against 44 for the JSON text

const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))
// {"name":"Some name","age":20,"address":null}`}],install:{title:"Add velojson to a Deno project",language:"plain",code:`deno add jsr:@velotype/velojson

// In the browser:
import { VSON } from "jsr:@velotype/velojson/browser"`},links:[z("velojson"),ne("velojson"),{label:"Playground",to:"/projects/velojson/playground/"}]},{id:"velomicro",name:"velomicro",tag:"1kb",tagKind:"neutral",tagline:"A 1kb TSX framework that shows how TSX rendering works.",about:["velomicro is the smallest version of the idea: a createElement that returns real DOM elements, and function components. It is meant to be read, and the Medium article walks through its source line by line."],stats:[{title:"Size",value:"1",suffix:"kb"}],features:[{title:"Returns HTMLElements",text:"TSX evaluates to real elements, so a div tag is an HTMLDivElement."},{title:"HTML attributes",text:"It calls setAttribute(), so you write class and the other attributes as you would in HTML."},{title:"Style objects",text:"Pass an object of camelCase properties, or a string."},{title:"Function components",text:"A component is a function from attrs to an element."}],samples:[{title:"A counter function component",language:"tsx",code:`const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = count
        }}>Increment</button>
    </div>
}`}],install:{title:"Add velomicro to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomicro"},links:[z("velomicro"),ne("velomicro"),{label:"Medium article",to:"https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}]},{id:"velomini",name:"velomini",tag:"2.5kb",tagKind:"neutral",tagline:"A 2.5kb TSX framework that adds classes to velomicro.",about:["velomini is velomicro plus a Component class with render, mount, unmount, and refresh. Its refresh() tears down a component's subtree and renders it again. The Medium article walks through the source.","velotype is the next step: it keeps classes and replaces refresh() with values that update in place."],stats:[{title:"Size",value:"2.5",suffix:"kb"}],features:[{title:"Class components",text:"Extend Component and implement render(). velomini calls mount() and unmount() for you."},{title:"getComponent()",text:"Convert an element back to the class instance that built it, to call its methods."},{title:"Everything from velomicro",text:"Real HTMLElements, HTML attributes, style objects, and function components."}],samples:[{title:"A class component",language:"tsx",code:`class ComplexComponent extends Component<{foo: string}> {
    override render(attrs) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Then in TSX:
return <div><ComplexComponent foo="Component!"></ComplexComponent></div>`}],install:{title:"Add velomini to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomini"},links:[z("velomini"),ne("velomini"),{label:"Medium article",to:"https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}]}],ct=[{title:"Front end",note:"TSX that creates real DOM elements, with no virtual DOM.",ids:["velotype","velodesign","velochart"],inDocsNav:!0},{title:"Server",note:"Serve pages and APIs, render HTML, and carry the data between server and browser.",ids:["velossr","veloserver","velojson"],inDocsNav:!0},{title:"Learn",note:"The smallest versions of the idea, written to be read.",ids:["velomicro","velomini"],inDocsNav:!1}],Fe=new Map(Vt.map(e=>[e.id,e]));var Pn=e=>{let t=[...e.classList].find(o=>o.startsWith("language-"))?.slice(9);return t=="css"?"css":t=="tsx"||t=="ts"||t=="json"?"tsx":"plain"};function Nn(e){for(let t of e.querySelectorAll("pre")){let o=t.querySelector("code");o&&t.replaceWith(d(Ie,{code:o.textContent.replace(/\n$/,""),language:Pn(o)}))}}function jn(e){return[...e.querySelectorAll("h2, h3")].map(t=>({id:t.id,label:t.textContent,level:t.tagName=="H2"?1:2}))}function Hn(e){return d(f,{direction:"column",gap:"sm",children:ct.filter(t=>t.inDocsNav).map(t=>{let o=t.ids.filter(r=>r!=e.project).flatMap(r=>e.nav.filter(n=>n.id==r));return o.length>0&&u("div",{class:"vtp-docs-group",children:[d(B,{type:"muted",class:"vtp-docs-group-title",children:t.title}),o.map(r=>d(b,{to:r.pages[0].url,children:r.name}))]})})})}function ar(){let e=JSON.parse(document.getElementById("docs-nav").textContent),t=Fe.get(e.project),o=e.nav.find(p=>p.id==e.project),r=o.pages.find(p=>p.url==e.current),n=o.pages.indexOf(r),a=o.pages[n-1],c=o.pages[n+1],h=document.getElementById("doc");return h.remove(),Nn(h),W(`
.vtp-docs{display:grid;grid-template-columns:14rem minmax(0,1fr) 13rem;gap:2rem;align-items:start;}
.vtp-docs-nav,.vtp-docs-toc{position:sticky;top:1rem;}
.vtp-docs-article{min-width:0;}
.vtp-docs-article h1{margin-bottom:0.75em;}
.vtp-docs-article h2{margin:1.75em 0 0.5em;padding-bottom:0.3em;border-bottom:1px solid var(--background-4);}
.vtp-docs-article h3{margin:1.5em 0 0.5em;}
.vtp-docs-article h4{margin:1.25em 0 0.5em;}
.vtp-docs-article p,.vtp-docs-article ul,.vtp-docs-article ol,.vtp-docs-article table{margin:0.75em 0;line-height:1.6;}
.vtp-docs-article ul,.vtp-docs-article ol{padding-inline-start:1.5em;list-style:revert;}
.vtp-docs-article li{margin:0.3em 0;line-height:1.6;}
.vtp-docs-article a{color:var(--primary-7,inherit);}
.vtp-docs-article code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:0.9em;background:var(--background-2);padding:0.1em 0.35em;border-radius:0.25rem;}
.vtp-docs-article .vtd-code-block code{background:none;padding:0;}
.vtp-docs-article .vtd-code-block{margin:1em 0;}
.vtp-docs-article table{border-collapse:collapse;display:block;overflow-x:auto;}
.vtp-docs-article th,.vtp-docs-article td{border:1px solid var(--background-4);padding:0.4em 0.7em;text-align:start;vertical-align:top;line-height:1.5;}
.vtp-docs-article th{background:var(--background-2);}
.vtp-docs-pager{display:flex;justify-content:space-between;gap:1rem;margin-top:3rem;}
.vtp-docs-group-title{display:block;margin:0.75em 0.5em 0.25em;}
.vtp-docs-group{border-top:1px solid var(--background-4);padding-top:0.5em;margin-top:0.5em;}
.vtp-docs-section{border-top:1px solid var(--background-4);margin:0.5em 0 0.25em;padding:0.75em 0.5em 0;}
.vtp-docs-group .vtp-docs-group-title{margin-top:0.25em;}
.vtp-docs-nav a{display:block;padding:0.25em 0.5em;border-radius:0.25rem;text-decoration:none;color:inherit;line-height:1.5;}
.vtp-docs-nav a:hover{background-color:var(--background-2);}
.vtp-docs-nav .vtd-nav-link-active{background-color:var(--background-3);font-weight:bold;}
@media (max-width:64rem){.vtp-docs{grid-template-columns:12rem minmax(0,1fr);}.vtp-docs-toc{display:none;}}
@media (max-width:44rem){.vtp-docs{grid-template-columns:minmax(0,1fr);}.vtp-docs-nav{position:static;}}
`,"vtp-docs"),u("div",{class:"vtp-docs",children:[d("nav",{class:"vtp-docs-nav","aria-label":`${t.name} documentation`,children:u(f,{direction:"column",gap:"sm",children:[d(D,{level:2,style:{fontSize:"1.1em"},children:t.name}),d("div",{children:o.pages.map((p,m)=>u(po,{children:[p.section&&p.section!=o.pages[m-1]?.section&&d(B,{type:"muted",class:"vtp-docs-group-title vtp-docs-section",children:p.section}),d(we,{to:p.url,children:p.title})]}))}),Hn(e)]})}),u("div",{class:"vtp-docs-article",children:[d(Re,{items:[{label:"Docs",to:o.pages[0].url},{label:t.name,to:o.pages[0].url},{label:r.title}]}),h,u("div",{class:"vtp-docs-pager",children:[d("div",{children:a&&u(b,{to:a.url,children:["\u2190 ",a.title]})}),d("div",{children:c&&u(b,{to:c.url,children:[c.title," \u2192"]})})]})]}),d("div",{class:"vtp-docs-toc",children:d(Ne,{ariaLabel:"On this page",header:"On this page",items:jn(h)})})]})}var ht={velochart:"/docs/velochart/",velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var Kt=e=>d("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),Fn=()=>u(Pe,{style:{borderBottom:"1px solid var(--background-4)"},brand:u(b,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[d(Kt,{size:"1.75em"}),"The Velocity Project"]}),children:[d(b,{to:ht.velotype,children:"Docs"}),d(b,{to:"https://github.com/Velotype",children:"GitHub"}),d(b,{to:"https://jsr.io/@velotype",children:"JSR"}),d(b,{to:"https://argoday.medium.com/",children:"Articles"})]}),Vn=()=>u(B,{type:"muted",children:["All projects live under the ",d(b,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",d(b,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",d(b,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function sr(e,t="60rem"){zt.injectStyles(),ge(u("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[Fn(),d("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:u(f,{direction:"column",gap:"lg",children:[e,Vn()]})})]}),document.getElementById("app"))}var _t=e=>`/projects/${e.id}/`,Ve=e=>ht[e.id],Ke=e=>()=>{location.assign(e)},lr=e=>u(f,{direction:"column",gap:"sm",children:[d(D,{level:3,children:e.title}),e.intro&&d(F,{children:e.intro}),d(Ie,{code:e.code,language:e.language})]}),Kn=e=>d($e,{id:e.id,header:u(f,{align:"center",children:[d(b,{to:_t(e),style:{color:"inherit",textDecoration:"none"},children:e.name}),d(je,{type:e.tagKind,children:e.tag})]}),children:u(f,{direction:"column",children:[d(F,{children:e.tagline}),u(f,{children:[d(b,{to:_t(e),children:"Learn more"}),Ve(e)&&d(b,{to:Ve(e),children:"Docs"}),d(b,{to:e.links[0].to,children:"GitHub"})]})]})}),_n=()=>u(f,{direction:"column",gap:"lg",children:[u(f,{direction:"column",children:[u(f,{align:"center",gap:"lg",children:[d(Kt,{size:"4rem"}),d(D,{level:1,children:"The Velocity Project"})]}),d(F,{style:{fontSize:"1.2em"},children:"A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them."}),d(F,{children:u(B,{type:"muted",children:["Each piece stands on its own and is published separately. They are designed to fit together: ",d(b,{to:"/projects/veloserver/",children:"veloserver"})," serves pages and APIs, ",d(b,{to:"/projects/velossr/",children:"velossr"})," or ",d(b,{to:"/projects/velotype/",children:"velotype"})," renders them, and ",d(b,{to:"/projects/velojson/",children:"VSON"})," carries data between the two. More pieces are on the way."]})}),u(f,{children:[d(S,{type:"primary",onClick:Ke("/projects/velotype/"),children:"Start with velotype"}),d(S,{type:"secondary",onClick:Ke("https://github.com/Velotype"),children:"GitHub"})]})]}),ct.map(e=>u(f,{direction:"column",children:[d(D,{level:2,children:e.title}),e.note&&d(B,{type:"muted",children:e.note}),d(He,{minColumnWidth:"22em",children:e.ids.map(t=>Kn(Fe.get(t)))})]}))]}),Wn=e=>d($e,{header:u(f,{align:"center",children:[d("span",{children:e.name}),d(je,{type:"neutral",children:e.tag})]}),children:u(f,{direction:"column",children:[d(F,{children:e.text}),d(f,{children:e.links.map(t=>d(b,{to:t.to,children:t.label}))})]})}),qn=e=>u(f,{direction:"column",gap:"lg",children:[d(Re,{items:[{label:"The Velocity Project",to:"/"},{label:e.name}]}),u(f,{direction:"column",children:[u(f,{align:"center",children:[d(D,{level:1,children:e.name}),d(je,{type:e.tagKind,children:e.tag})]}),d(F,{style:{fontSize:"1.2em"},children:e.tagline}),u(f,{children:[Ve(e)&&d(S,{type:"primary",onClick:Ke(Ve(e)),children:"Documentation"}),d(S,{type:Ve(e)?"secondary":"primary",onClick:Ke(e.links[0].to),children:e.links[0].label}),e.links.slice(1).map(t=>d(S,{type:"secondary",onClick:Ke(t.to),children:t.label}))]})]}),e.stats.length>0&&u(f,{direction:"column",gap:"sm",children:[d(f,{gap:"lg",children:e.stats.map(t=>d(Pt,{title:t.title,value:t.value,suffix:t.suffix}))}),e.statsNote&&d(B,{type:"muted",children:e.statsNote})]}),d(f,{direction:"column",gap:"sm",children:e.about.map(t=>d(F,{children:t}))}),u(f,{direction:"column",children:[d(D,{level:2,children:"What it does"}),d(He,{minColumnWidth:"18em",children:e.features.map(t=>d($e,{header:t.title,children:d(F,{children:t.text})}))})]}),e.samples.length>0&&u(f,{direction:"column",children:[d(D,{level:2,children:"See it in action"}),e.samples.map(lr)]}),u(f,{direction:"column",children:[d(D,{level:2,children:"Get started"}),lr(e.install)]}),e.resources&&u(f,{direction:"column",children:[d(D,{level:2,children:"Tools, demos, and examples"}),d(He,{minColumnWidth:"22em",children:e.resources.map(Wn)})]}),u(f,{direction:"column",children:[d(D,{level:2,children:"Links"}),d(f,{children:e.links.map(t=>d(b,{to:t.to,children:t.label}))})]}),u(f,{direction:"column",children:[d(D,{level:2,children:"Other projects"}),d(f,{children:Vt.filter(t=>t!==e).map(t=>d(b,{to:_t(t),children:t.name}))})]})]}),dr=document.body.dataset.page,cr=dr?Fe.get(dr):void 0;sr(document.body.dataset.doc?ar():cr?qn(cr):_n(),document.body.dataset.doc?"84rem":"60rem");
