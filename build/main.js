var ee=console.warn.bind(console,"vt:"),O=console.error.bind(console,"vt:"),Yo=pt("span","display:contents;"),at=pt("div","display:contents;"),It=pt("div","display:none;");var je={value:void 0,writable:!1,configurable:!1,enumerable:!1},lt=new Map,dt=new Map,jt=/[A-Z]/g,M=new Map,E=Symbol(),ct=Symbol(),Ne=Symbol(),z=new Map,te=new Map,Pe=new Map,y={k:1,r:0,p:void 0,s:void 0},ht={version:"0.3.2",domKeyProperty:E,domReferences:M,listenersF:z,listenersR:te,styleSectionMounted:Pe,setEventTracer:()=>{}};function pt(e,t){let o=document.createElement(e);return o.style.cssText=t,o}function N(e){return e instanceof HTMLElement}function He(e){return e instanceof SVGSVGElement}function Be(e){return e instanceof MathMLElement}function Fe(e){return e instanceof Text}function de(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function Nt(e,t,o){je.value=o,Object.defineProperty(e,t,je),je.value=void 0}function K(){return It.cloneNode()}function Pt(e){Promise.resolve().then(e)}function mt(e,t,o){let r=t.nextSibling;r===o?e.insertBefore(o,t):(e.insertBefore(t,o),e.insertBefore(o,r))}function _(e){typeof reportError=="function"?reportError(e):O(e)}var ce=class{constructor(t,o,r){this.emittingObject=t,this.event=o,this.data=r}};function _e(e,t,o){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");oe&&(o=ut(t,o)),Ht(z,t,e.vtKey,o),Ht(te,e.vtKey,t,o)}function Ht(e,t,o,r){let i=e.get(t);i||(i=new Map,e.set(t,i));let s=i.get(o);s?s.push(r):i.set(o,[r])}function ye(e){let t=te.get(e.vtKey);t&&t.forEach((o,r)=>{Bt(z,r,e.vtKey),Bt(te,e.vtKey,r)})}function Bt(e,t,o,r){let i=e.get(t);if(i){let s=i.get(o);if(s){if(y.r++,r){let c=s.indexOf(r);if(c<0&&oe&&(c=s.findIndex(h=>h.o===r)),c<0){ee("Listener not registered",t,o);return}s=s.slice(),s.splice(c,1),i.set(o,s)}(!r||s.length<=0)&&(i.delete(o),i.size<=0&&e.delete(t))}else ee("No listeners to remove",t,o)}else ee("No listeners to remove",t,o)}function Ft(e,t,o){let r=z.get(e),i=r&&r.get(t);return!!i&&(i.includes(o)||!!oe&&i.some(s=>s.o===o))}function We(e,t,o){let r=z.get(e);r?r.forEach((i,s)=>{if(!o||o.vtKey!=s){let c=y.r;i.forEach(h=>{if(c!==y.r){let u=r.get(s);if(u!==i&&!(u&&u.includes(h)))return}try{h(t)}catch(u){_(u)}})}}):ee("No listeners for event",e,t)}var oe,Ke;function ut(e,t){let o=r=>{if(oe&&Ke!==r){Ke=r,queueMicrotask(()=>{Ke=void 0});try{oe(e,r)}catch{}}t(r)};return o.o=t,o}function Ve(e,t){e.forEach((o,r)=>{o.forEach((i,s)=>{o.set(s,i.map(c=>t(r,s,c)))})})}function Vt(e){let t=!!oe;if(oe=e,Ke=void 0,e&&!t)Ve(z,(o,r,i)=>ut(o,i)),Ve(te,(o,r,i)=>ut(r,i));else if(!e&&t){let o=(r,i,s)=>s.o??s;Ve(z,o),Ve(te,o)}}function Xo(){ht.setEventTracer=Vt;let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,o=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(r){return t.set(o,r),o++},unregister(r){t.delete(r)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(ht)}Xo();function W(e,t){e[E]=t}function re(e){return M.get(e)}function ne(e,t){let o=y.k++;return t&&W(t,o),M.set(o,e),o}function he(e){M.delete(e)}function ie(e){M.delete(e.vtKey),ye(e)}function P(e){for(let t=e;t<y.k;t++){let o=M.get(t);o&&(q(o)?(ye(o.c),M.delete(t),xe(o.c)):o.vtKey===t||!o.uK?(ie(o),M.delete(t)):o.uK(t))}}function vt(e){return e instanceof ke}var ke=class{constructor(t){this.w=t,this.k=ne(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),ie(t)})}};function a(e,t){if(t.id&&gt(e,"id",t.id),t.class){let o=e.getAttribute("class");gt(e,"class",o?o+" "+t.class:t.class)}return t.style&&se(e,{style:t.style}),e}function _t(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return ft(e,t);let o=Object.getPrototypeOf(e),r=o===y.p?y.s:dt.get(o);r||(r=new Map,dt.set(o,r)),y.p=o,y.s=r;let i=r.get(t);return i===void 0&&(i=ft(o,t),r.set(t,i)),i}function ft(e,t){let o=e;for(;o;){let r=Object.getOwnPropertyDescriptor(o,t);if(r&&(r.set||r.writable))return!0;o=Object.getPrototypeOf(o)}return!1}function gt(e,t,o){_t(e,t)?e[t]=o:e.setAttribute(t,o.toString())}function Jo(e,t,o){_t(e,t)?e[t]=o:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(o)):o&&e.setAttribute(t,"")}function Zo(e){if(e.startsWith("--"))return e;let t=e.replace(jt,o=>"-"+o.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function se(e,t){if(!t)return;let o=t.type=="range",r=Object.keys(t);for(let i=0;i<r.length;i++){let s=r[i];(!o||s!="value")&&Kt(e,s,t[s])}o&&Kt(e,"value",t.value)}function Kt(e,t,o){if(t.startsWith("on")&&t.length>4){if(o){let r,i=o;typeof o!="function"&&o.handler&&(i=o.handler,r=o.options);let s=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(s,i,r)}}else if(t=="style"&&o instanceof Object)for(let r of Object.keys(o)){let i=o[r]==null?"":o[r],s=typeof i=="number"?i.toString():i,c=e.style;if(s.endsWith("!important"))c.setProperty(Zo(r),s.slice(0,-10),"important");else{let h=lt.get(r);h===void 0&&(h=ft(c,r),lt.set(r,h)),h?c[r]=s:c.setProperty(r,s)}}else if(typeof o=="boolean")Jo(e,t,o);else if(typeof o!="function")if(t=="vtwith"){let r=e[E];if(r)O("vtwith on a keyed element",r);else{let i=new ke(o);W(e,i.k)}}else(o||o=="")&&gt(e,t,o)}function H(e,t,...o){if(typeof e=="string"){let i=document.createElement(e);return Ue(e=="template"?i.content:i,o),se(i,t),i}let r=t||{};if(ae(e.prototype)){let i=y.k;try{return new we(new e(r,o),r,o).e}catch(s){throw P(i),s}}else if(typeof e=="function"){let i=y.k,s;try{s=e(r,o)}catch(c){throw P(i),c}return de(s)||Array.isArray(s)?s:U(s)}return O("Invalid tag",e,r,o),K()}function qe(e,...t){return t}function Ge(e){if(de(e)&&e!==!1||Fe(e))return H("span",null,e);if(e)return G(e)}function Qo(e){if(de(e)&&e!==!1)return document.createTextNode(e.toString());if(N(e))return e;if(Fe(e))return e;if(e)return G(e)}function G(e){if(N(e)||He(e)||Be(e))return e;if(pe(e))return e.rD();if(ae(e)){let t=re(e.vtKey);if(t&&q(t))return t.e}return O("Invalid child"),K()}function Ue(e,t){if(Array.isArray(t))for(let o=0;o<t.length;o++)Ue(e,t[o]);else{let o=Qo(t);o&&e.appendChild(o)}}function U(e){if(e==null||e===!1||e==="")return K();if(de(e)||ae(e)||pe(e)||Fe(e)||Array.isArray(e)||e[E]!==void 0){let t=at.cloneNode();return Ue(t,e),t}return e}function pe(e){return e instanceof X}function Wt(e){try{e()}catch(t){_(t)}}var Y=class{constructor(t,o){this.result=t,this.updateRefs=o}};function qt(e,t,o){Se(e.e,t),e.e=t,e.uR=o}var X=class{#e;#o;#n;es=new Map;vtKey=ne(this);#t=`vt-ro-${this.vtKey}`;#i;#r;#s=!1;#a(){We(this.#t,new ce(this,"onChange"))}constructor(t,o,r){this.#e=t,this.#o=o||K,this.#n=r}registerOnChangeListener(t,o){let r=o&&o.hasVtKey||this,i=this.#t,s=o&&o.eventDispatchDelay||0,c=0,h=s>0?u=>{c||(c=setTimeout(()=>{c=0,Ft(i,r.vtKey,h)&&t(u)},s))}:t;return _e(r,i,h),o&&o.triggerOnRegistration&&Pt(()=>{this.#a()}),this}registerOnMount(t,o){return t&&(this.#i||(this.#i=[]),this.#i.push(t)),o&&(this.#r||(this.#r=[]),this.#r.push(o)),this}mount(){this.#s||(this.#s=!0,this.#i&&this.#i.forEach(Wt))}unmount(){this.#s&&(this.#s=!1,this.#r&&this.#r.forEach(Wt))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let o=this.#e,r=[],i=[];this.es.forEach((s,c)=>{if(s.hU&&s.uR)i.push(s);else{let h=s.rF(t,this),u=h instanceof Y,f=U(Ge(u?h.result:h));W(f,c),r.push({i:s,e:f,r:u?h.updateRefs:void 0})}}),i.forEach(s=>{s.hU(s.e,s.uR,o,t)}),r.forEach(s=>{qt(s.i,s.e,s.r)})}rerenderElements(t){let o=y.k;try{this.es.size>1?this.#l(t):this.es.forEach((r,i)=>{if(r.hU&&r.uR)r.hU(r.e,r.uR,this.#e,t);else{let s=r.rF(t,this),c=s instanceof Y,h=U(Ge(c?s.result:s));W(h,i),qt(r,h,c?s.updateRefs:void 0)}})}catch(r){throw P(o),r}this.#e=t,z.has(this.#t)&&this.#a()}uK(t){let o=this.es.get(t);if(o){let r=o.e[E];return t===r?(this.es.delete(t),he(t),!0):(O("Invalid state",t,r,o),!1)}else return O("Invalid unmountKey",t),!1}rD(){return this.render(this.#o,this.#n)}render(t,o){let r=t(this.#e,this),i=r instanceof Y,s=U(Ge(i?r.result:r)),c=ne(this,s);return this.es.set(c,{e:s,rF:t,hU:o,uR:i?r.updateRefs:r}),s}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(o=>{let r=o.e,i=r.parentNode;i&&t.es.forEach(s=>{s.e.parentNode===i&&mt(i,r,s.e)})})}ei(t){let o=null;return this.es.forEach(r=>{r.e.parentNode===t&&(o=r.e)}),o}removeAll(){this.es.forEach((t,o)=>{Ye(t.e),he(o)}),this.es.clear()}};function Se(e,t,o){let r=document.activeElement==e&&document.hasFocus();return o?Zt(e):N(e)&&kt(e),e.replaceWith(t),o?Xe(t):N(t)&&xt(t),r&&t.focus(),t}function bt(e,t){e.appendChild(t),Xe(t)}function Ut(e,t){e.prepend(t),Xe(t)}function Gt(e,t){kt(e),e.replaceChildren(...t),xt(e)}function Ye(e){Zt(e),e.remove()}function yt(e,t,o){if(N(e)||He(e)||Be(e)){let r=e.firstElementChild;for(;r;){yt(r,t,o);let i=r[E];if(i){let s=re(i);s?t(s,i):o&&Yt(r)}r=r.nextElementSibling}}}function Yt(e){ee("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function Xt(e,t){if(q(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(o){_(o)}Object.values(e.c).forEach(o=>{pe(o)&&o.mount()})}else vt(e),e.mount()}function Xe(e){if(!e.isConnected)return;N(e)&&xt(e);let t=e[E];if(t){let o=re(t);o?Xt(o,t):Yt(e)}}function xt(e){e.isConnected&&yt(e,Xt,!0)}function Jt(e,t){if(q(e)){if(ye(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(o){_(o)}}Object.values(e.c).forEach(o=>{pe(o)?(o.unmount(),ie(o)):ae(o)&&(ie(o),xe(o))}),he(e.k),xe(e.c)}else vt(e)?(e.unmount(),he(e.k)):e.uK(t)}function kt(e){yt(e,Jt)}function Zt(e){N(e)&&kt(e);let t=e[E];if(t){let o=re(t);o&&Jt(o,t)}}function Je(e,t){return t===null?null:(t.replaceWith(e),Xe(e),e)}function q(e){return e instanceof we}function ae(e){return e instanceof m}function er(e){return e[ct]}function me(e,t){let o=er(e),r=o.b||(o.b={});return r[t]||(r[t]=o[t].bind(o))}var m=class{constructor(t,o){this.attrs=t,this.children=o}mount(){}unmount(){}get refresh(){return me(this,"f")}get unmountSignal(){let t=this[Ne];return t||(t=new AbortController,this[Ne]=t,this.vtKey!==void 0&&!M.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return me(this,"q")}get appendToChild(){return me(this,"w")}get prependToChild(){return me(this,"t")}get replaceChildrenOfChild(){return me(this,"y")}get removeChild(){return me(this,"u")}},we=class{constructor(t,o,r){this.c=t,this.a=o,this.h=r,this.k=ne(this),Nt(t,"vtKey",this.k),t[ct]=this,this.e=Qt(this,this.a,this.h)}m=!1;f(){let t=y.k,o;try{o=Qt(this,this.a,this.h)}catch(r){throw P(t),r}this.e=Se(this.e,o)}q(t,o){return this.e.contains(t)?Se(t,G(o),!0):t}w(t,o){return this.e.contains(t)?(bt(t,G(o)),!0):!1}t(t,o){return this.e.contains(t)?(Ut(t,G(o)),!0):!1}y(t,o){return this.e.contains(t)?(Gt(t,o.map(r=>G(r))),!0):!1}u(t){return this.e.contains(t)?(Ye(t),!0):!1}};function Qt(e,t,o){let r=U(e.c.render(t,o));return W(r,e.k),r}function xe(e){let t=e[Ne];t&&t.abort()}function B(e,t,o=!1){let r=Pe.get(t),i=document.adoptedStyleSheets;if(r){if(!o)return;let c=i.indexOf(r.sheet);c>=0&&i.splice(c,1)}let s=new CSSStyleSheet;s.replace(e),i.push(s),Pe.set(t,{sheet:s,text:e,key:t})}function d(e,t,o){let r;return"children"in t&&({children:r,...t}=t),o!==void 0&&(t.key=o),H(e,t,r)}var p=d,eo=qe;function n(e,t,...o){return H(e,t,...o)}var vr="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",to=!1;function l(e,t,o="component",r=!1){to||(to=!0,B(vr,"vtd/LayerOrder"),fr()),B(`@layer velodesign.${o}{${e}}`,t,r)}function fr(){B(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var oo=!1,Qe=function(e,t){oo||(oo=!0,l(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let o=e.size||"1em";return a(n("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:o,height:o}}),e)};var gr=Symbol("velodesign.clearThemeOptionOverrides");function g(e,t){let o={},r=new Map,i=new Map;for(let[s,c]of Object.entries(e))i.set(s,function(){return S[c]});for(let[s,c]of Object.entries(t??{}))i.set(s,function(){return c});for(let s of i.keys())Object.defineProperty(o,s,{enumerable:!0,get:function(){return r.has(s)?r.get(s):i.get(s)()},set:function(c){c==null?r.delete(s):r.set(s,c)}});return Object.defineProperty(o,gr,{value:function(){r.clear()}}),o}var S=g({},{closeSymbol:function(){return"\u2715"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var no=g({},{loadingSymbol:function(){return n(Qe,{size:"1em"})}}),ro=!1,w=function(e,t){ro||(ro=!0,l(`
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
`,"vtd/Button"));let o=!1,r;e.loadingOnClick&&(r=n("span",{class:"vtd-button-spinner"},n(no.loadingSymbol,null)));let i=n("span",null,t);return a(n("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:s=>{e.loadingOnClick&&o||e.onClick&&(e.loadingOnClick?(o=!0,r&&(r.style.visibility="visible"),i.style.visibility="hidden",e.onClick(s,()=>{o=!1,e.loadingOnClick&&r&&(r.style.visibility="hidden"),i.style.visibility="visible"})):e.onClick(s))}},i,r),e)};var io=console.log,so=console.error,et=function(e,t,o){e.setAttribute(t,o)};var ao=new Map,yr=!1;setTimeout(()=>{ao.entries().forEach(([e,t])=>{io(t)}),yr=!0},1e3);var $="#fff",F="#000",lo="#050505",xr=$,kr=F,wr="#66b2ff",Sr="#c6ff9e",Cr="#ffd666",Er="#ff6666",co="#fafafa",Tr="#151515",Mr=$,Ar="#004c99",Lr="#286100",Or="#997000",Dr="#990000",wt=":color-mix(in hsl,",zr=[-8,-6,-4,-2,0,2,4,6,8],J=(e,t,o,r)=>zr.map(i=>i<0?`--${e}-${i/2+5}${wt}${t} ${-1*i}0%,${o} ${10+i}0%)`:i==0?`--${e}-5:${o};--${e}:${o}`:`--${e}-${i/2+5}${wt}${o} ${10-i}0%,${r} ${i}0%)`).join(";")+";",$r=[1,2,3,4,5,6,7,8,9],ho=(e,t,o)=>$r.map(r=>`--${e}-${r}${wt}${t} ${10-r}0%,${o} ${r}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${o};`,po=(e,t,o)=>`--${e}:${t};--${e}-alt:${o};`,mo=function(e){et(document.getElementsByTagName("html")[0],"data-theme",e)},tt="vtd-preferred-theme",Z="light",ue="dark",uo="default",Ce=Z,St={getColorScheme:function(){return Ce},getColorSchemePreference:function(){let e=localStorage.getItem(tt);return e==ue?ue:e==Z?Z:uo},setColorScheme:function(e){localStorage.setItem(tt,e),St.resetColorScheme()},resetColorScheme:function(){let e=localStorage.getItem(tt);e==ue?Ce=ue:e==Z?Ce=Z:(e&&e!=uo&&localStorage.removeItem(tt),Ce=globalThis.matchMedia("(prefers-color-scheme: light)").matches?Z:ue),Ce==Z?mo(Z):mo(ue)}};function vo(e,t,o=!1){l(`
${e}[data-theme="light"]{
${po("text",t?.textLightColor||lo,t?.textDarkColor||co)}
${ho("background",t?.backgroundLightColor||xr,t?.backgroundLightAltColor||kr)}
${J("primary",$,t?.primaryLightColor||wr,F)}
${J("secondary",$,t?.secondaryLightColor||Sr,F)}
${J("warning",$,t?.warningLightColor||Cr,F)}
${J("accent",$,t?.accentLightColor||Er,F)}
color-scheme:light;}
${e}[data-theme="dark"]{
${po("text",t?.textDarkColor||co,t?.textLightColor||lo)}
${ho("background",t?.backgroundDarkColor||Tr,t?.backgroundDarkAltColor||Mr)}
${J("primary",F,t?.primaryDarkColor||Ar,$)}
${J("secondary",F,t?.secondaryDarkColor||Lr,$)}
${J("warning",F,t?.warningDarkColor||Or,$)}
${J("accent",F,t?.accentDarkColor||Dr,$)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",o)}var Ct={injectStyles(e,t=!0){t&&l(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),vo(":root",e),globalThis.setTimeout(function(){l("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),St.resetColorScheme()}};var V="",k={configureBasePath:function(e){let t=e.replace(/\/+$/,"");V=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return V?e==V?"/":e.startsWith(`${V}/`)?e.slice(V.length):e:e},resolveHref:function(e){return!V||!e.startsWith("/")||e==V||e.startsWith(`${V}/`)?e:`${V}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",k.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){so(t),k.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=k.resolveHref(e)}};var b=function(e,t){let o=e.spa??!1;return a(n("a",{class:"vtd-link",href:k.resolveHref(e.to),onClick:o?r=>{r.preventDefault(),k.changeLocation(e.to)}:void 0},t),e)};var Rr=g({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var Ir=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var fo=!1,Ee=function(e,t){return fo||(fo=!0,l(`
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
`,"vtd/Card")),a(n("div",{class:"vtd-card"},e.header&&n("div",{class:"vtd-card-header"},e.header),n("div",{class:"vtd-card-body"},t),e.footer&&n("div",{class:"vtd-card-footer"},e.footer)),e)};var go=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),jr=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),Nr=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function Pr(e,t){if(t=="plain")return[{kind:"",text:e}];let o=t=="css"?Nr:jr,r=t!="css",i=[],s=0;o.lastIndex=0;let c=0,h=!1,u=0,f=()=>r&&c>0&&!h&&u==0,x;for(;(x=o.exec(e))!==null;){x.index>s&&i.push({kind:"",text:e.slice(s,x.index)});let C=x.groups??{},A=x[0],L=C.closeTag??C.openTag;if(L!==void 0&&!Q(x.index,C.closeTag!==void 0))i.push({kind:"punct",text:"<"}),i.push({kind:!f()&&go.has(L)?"keyword":"",text:L});else if(L!==void 0){let j=C.closeTag!==void 0;r&&(c=Math.max(0,c+(j?-1:1)),h=!0),i.push({kind:"punct",text:j?"</":"<"}),i.push({kind:"tag",text:L})}else if(C.word!==void 0){let j=!f()&&go.has(C.word);i.push({kind:j?"keyword":"",text:C.word})}else{let j=["comment","string","number","attr","punct"].find(Go=>C[Go]!==void 0),Uo=f()&&(j=="string"||j=="number");i.push({kind:Uo?"":j??"",text:A}),r&&j=="punct"&&st(A)}s=x.index+A.length}return s<e.length&&i.push({kind:"",text:e.slice(s)}),i;function Q(C,A){if(A||!r||f())return!0;let L=C>0?e[C-1]??"":"";return!/[\w$)\]]/.test(L)}function st(C){for(let A=0;A<C.length;A++){let L=C[A];L=="{"?u++:L=="}"?u=Math.max(0,u-1):L==">"&&h&&u==0&&(A>0&&C[A-1]=="/"&&(c=Math.max(0,c-1)),h=!1)}}}var bo=!1,Te=function(e){let t=e.language??"tsx",o=Pr(e.code,t);bo||(bo=!0,l(`
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
`,"vtd/CodeBlock"));let r=["vtd-code-block"];return e.wrap&&r.push("vtd-code-block-wrap"),e.showLineNumbers&&r.push("vtd-code-block-numbered"),a(n("pre",{class:r.join(" "),"aria-label":e.ariaLabel},n("code",null,e.showLineNumbers?Hr(o):yo(o))),e)};function yo(e){return e.map(t=>t.kind?n("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function Hr(e){let t=[[]];for(let o of e)o.text.split(`
`).forEach((i,s)=>{s>0&&t.push([]),i.length>0&&t[t.length-1].push({kind:o.kind,text:i})});return t.map(o=>n("span",{class:"vtd-code-block-line"},yo(o)))}var Br=g({closeSymbol:"closeSymbol"});var xo=!1,ve=class extends m{mount(){xo||(xo=!0,l(`
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
`,"vtd/NavLink")),globalThis.addEventListener("popstate",this.refresh),globalThis.addEventListener("locationchange",this.refresh)}unmount(){globalThis.removeEventListener("popstate",this.refresh),globalThis.removeEventListener("locationchange",this.refresh)}render(t,o){let i=(t.exact===void 0?!0:t.exact)?k.getPathname()==t.to:k.getPathname().startsWith(t.to),s=t.activeClass||"vtd-nav-link-active",c=t.spa??!1,h=o.length==1?o[0]:void 0,u=typeof h=="string"||typeof h=="number"||typeof h=="bigint"?String(h):void 0;return a(n("a",{href:k.resolveHref(t.to),class:`vtd-nav-link${i?` ${s}`:""}`,"data-label":u,"aria-current":i?"page":void 0,onClick:c?f=>{f.preventDefault(),k.changeLocation(t.to)}:void 0},o),t)}};var wo=g({confirmSymbol:"confirmSymbol"}),ko=!1,fe=class extends m{#e;#o;#n(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let o of this.#e.querySelectorAll(".vtd-menu-entry-open"))o!=t&&(o.classList.remove("vtd-menu-entry-open"),o.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#i=[];#r=()=>{if(this.#e.open)for(let t of this.#i)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#s;#a=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#o.focus()};#l=t=>{this.#s.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#a())};#c=t=>{let o=document.activeElement,r=o?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),r){this.#t(),r.querySelector(".vtd-menu-item-parent")?.focus();return}this.#a(!0);return}if(!this.#e.open)return;let i=this.#n();if(i.length==0)return;let s=i.indexOf(o);if(t.key=="ArrowDown")t.preventDefault(),i[(s+1)%i.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),i[(s-1+i.length)%i.length]?.focus();else if(t.key=="Home")t.preventDefault(),i[0]?.focus();else if(t.key=="End")t.preventDefault(),i[i.length-1]?.focus();else if(t.key=="ArrowRight"){let c=o?.closest(".vtd-menu-entry");o?.classList.contains("vtd-menu-item-parent")&&c&&(t.preventDefault(),this.#h(c),c.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&r&&(t.preventDefault(),this.#t(),r.querySelector(".vtd-menu-item-parent")?.focus())};#d(t){let o=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let r of o?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])r.setAttribute("aria-checked",r==t?"true":"false")}#h(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true")}mount(){document.addEventListener("click",this.#l)}unmount(){document.removeEventListener("click",this.#l)}#p(t){return t.map((o,r)=>{let i=o.dividerBefore&&r>0?" vtd-menu-entry-divided":"";if(o.children&&o.children.length>0){let x=n("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${o.disabled?" vtd-menu-item-disabled":""}`},o.label),Q=n("li",{class:`vtd-menu-entry vtd-menu-entry-parent${i}`,role:"none"},x,n("ul",{class:"vtd-menu-sublist",role:"menu"},this.#p(o.children)));return Q.addEventListener("pointerenter",()=>{this.#h(Q)}),x.addEventListener("click",st=>{st.preventDefault(),Q.classList.contains("vtd-menu-entry-open")?this.#t():this.#h(Q)}),Q}let s=o.selected!==void 0,c=typeof o.selected=="function"?o.selected:void 0,h=c?c():o.selected===!0,u=n("a",{role:s?"menuitemradio":"menuitem","aria-checked":s?h?"true":"false":void 0,href:o.href?k.resolveHref(o.href):"#","aria-disabled":o.disabled,class:`vtd-menu-item${s?" vtd-menu-item-checkable":""}${o.disabled?" vtd-menu-item-disabled":""}`,onClick:x=>{if(o.disabled){x.preventDefault();return}o.href?o.spa&&(x.preventDefault(),k.changeLocation(o.href)):x.preventDefault(),s&&this.#d(u),o.onClick?.(),!o.keepOpen&&(this.#t(),this.#a())}},s?n("span",{class:"vtd-menu-check","aria-hidden":"true"},n(wo.confirmSymbol,null)):null,o.label);c&&this.#i.push({row:u,read:c});let f=n("li",{class:`vtd-menu-entry${i}`,role:"none"},u);return f.addEventListener("pointerenter",()=>{this.#t(f.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),f})}constructor(t,o){super(t,o),this.#s=t,ko||(ko=!0,l(`
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
`,"vtd/Menu")),this.#o=n("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#e=n("details",{class:"vtd-menu",onToggle:this.#r,onKeyDown:this.#c},this.#o,n("ul",{class:"vtd-menu-list",role:"menu"},this.#p(t.items))),a(this.#e,t)}render(){return this.#e}};var Eo=g({collapseSymbol:"collapseSymbol"}),So=!1,Co=3;function Fr(e,t){if(t===void 0||e.length<=Math.max(t,Co))return{head:e,collapsed:[],tail:[]};let r=Math.max(t,Co)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-r),tail:e.slice(e.length-r)}}var Me=function(e,t){So||(So=!0,l(`
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
`,"vtd/Breadcrumbs"));let{head:o,collapsed:r,tail:i}=Fr(e.items,e.maxItems),s=e.separator||"/",c=f=>f.leading?n("span",{class:"vtd-breadcrumbs-crumb"},n("span",{class:"vtd-breadcrumbs-leading"},f.leading),f.label):f.label,h=(f,x)=>n("li",{class:"vtd-breadcrumbs-item","aria-current":f.to?void 0:"page"},f.to?n(b,{to:f.to,spa:e.spa},c(f)):n("span",null,c(f)),x?null:n("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},s)),u=r.length>0?n("li",{class:"vtd-breadcrumbs-item"},n(fe,{ariaLabel:e.expandLabel,trigger:n("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||n(Eo.collapseSymbol,null)),items:r.map(f=>({label:c(f),href:f.to,spa:e.spa}))}),n("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},s)):null;return a(n("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},n("ol",{class:"vtd-breadcrumbs-list"},o.map((f,x)=>h(f,r.length==0&&x==o.length-1)),u,i.map((f,x)=>h(f,x==i.length-1)))),e)};var Vr=g({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var To=!1,Ae=class extends m{#e;#o;#n;#t=()=>{let t=this.#n.sidebar?.get();!this.#o||!t||(this.#o.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#o.setAttribute("aria-expanded",t.open?"true":"false"),this.#o.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,o){if(super(t,o),this.#n=t,Kr(),t.sidebar){let r=t.sidebar;this.#o=n("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let i=r.get();r.set({...i,open:!i.open})}},n("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"}))}this.#e=a(n("nav",{class:"vtd-navbar"},n("div",{class:"vtd-navbar-start"},this.#o??null,t.brand?n("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?n("div",{class:"vtd-navbar-leading"},t.leading):null),n("div",{class:"vtd-navbar-items"},o)),t)}mount(){this.#n.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function Kr(){To||(To=!0,l(`
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
`,"vtd/Navbar"))}var Lo=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",fd=`.vtd-sidebar-collapsed:not(${Lo})`,gd=`.vtd-sidebar-collapsed:is(${Lo})`;var Oo=!1,Le=class extends m{#e;#o=new Map;#n=new Map;#t=void 0;#i=void 0;#r;#s;constructor(t,o){super(t,o),this.#r=t.items,this.#s=t.topOffset??0,Oo||(Oo=!0,l(`
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
`,"vtd/TableOfContents"));let r=n("ol",{class:"vtd-table-of-contents-list"},t.items.map(i=>{let s=Math.min(Math.max(i.level??1,1),6),c=n("a",{class:`vtd-table-of-contents-link vtd-table-of-contents-level-${s}`,href:`#${i.id}`,onClick:()=>{this.#d(i.id)}},i.label);return this.#o.set(i.id,c),n("li",{class:"vtd-table-of-contents-item"},c)}));this.#e=a(n("nav",{class:"vtd-table-of-contents","aria-label":t.ariaLabel},t.header?n("div",{class:"vtd-table-of-contents-header"},t.header):null,r),t)}mount(){let t=new IntersectionObserver(o=>this.#a(o),{rootMargin:`-${this.#s}px 0px -70% 0px`});for(let o of this.#r){let r=document.getElementById(o.id);r&&t.observe(r)}this.#i=t}unmount(){this.#i?.disconnect(),this.#i=void 0}#a(t){for(let o of t)this.#n.set(o.target.id,{intersecting:o.isIntersecting,top:o.boundingClientRect.top});this.#d(this.#c())}#l(){let t=document.documentElement.scrollHeight;return t<=globalThis.innerHeight+2?!1:globalThis.scrollY+globalThis.innerHeight>=t-2}#c(){if(this.#l())return this.#r[this.#r.length-1]?.id;for(let o of this.#r)if(this.#n.get(o.id)?.intersecting)return o.id;let t;for(let o of this.#r){let r=this.#n.get(o.id);r&&r.top<=this.#s&&(t=o.id)}return t??this.#r[0]?.id}#d(t){if(t===this.#t)return;let o=this.#t===void 0?void 0:this.#o.get(this.#t);o&&(o.classList.remove("vtd-table-of-contents-link-active"),o.removeAttribute("aria-current"));let r=t===void 0?void 0:this.#o.get(t);r&&(r.classList.add("vtd-table-of-contents-link-active"),r.setAttribute("aria-current","true")),this.#t=t}render(){return this.#e}};var Wr=g({closeSymbol:"closeSymbol"});var zo=g({closeSymbol:"closeSymbol"}),Do=!1,Oe=function(e,t){Do||(Do=!0,l(`
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
`,"vtd/Tag"));let o=n("span",{class:`vtd-tag vtd-tag-${e.type||"neutral"}`},t,e.onRemove&&n("button",{type:"button",class:"vtd-tag-remove","aria-label":e.removeLabel,onClick:()=>{e.onRemove?.(),o.remove()}},n(zo.closeSymbol,null)));return a(o,e)};var Ur=g({},{emptySymbol:function(){return n("span",{class:"vtd-empty-icon","aria-hidden":"true"},n(S.emptySymbol,null))}});var $o=!1,Tt=function(e,t){return $o||($o=!0,l(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),a(n("div",{class:"vtd-statistic"},n("div",{class:"vtd-statistic-title"},e.title),n("div",{class:"vtd-statistic-value"},e.prefix&&n("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&n("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var Gr=g({closeSymbol:"closeSymbol"});var Yr=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Lt=g({},{columnsSymbol:function(){return n("span",{"aria-hidden":"true"},"\u25A5")},emptySymbol:function(){return n("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},n(S.emptySymbol,null))}});var jo=!1;function ge(){jo||(jo=!0,l(`
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
`,"vtd/Typography","base"))}function be(e,t,o){let r=[e];return t&&r.push(`vtd-text-${t}`),o?.strong&&r.push("vtd-text-strong"),o?.italic&&r.push("vtd-text-italic"),o?.underline&&r.push("vtd-text-underline"),o?.strike&&r.push("vtd-text-strike"),o?.numeric&&r.push("vtd-text-numeric"),r.join(" ")}var T=function(e,t){ge();let o=be(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return a(n("h1",{class:o},t),e);case 2:return a(n("h2",{class:o},t),e);case 3:return a(n("h3",{class:o},t),e);case 4:return a(n("h4",{class:o},t),e);case 5:return a(n("h5",{class:o},t),e);default:return a(n("h6",{class:o},t),e)}};var R=function(e,t){ge();let o=be(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?a(n("code",{class:o},t),e):a(n("span",{class:o},t),e)};var I=function(e,t){return ge(),a(n("p",{class:be("vtd-paragraph",e.type)},t),e)};var Ot={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function ot(e,t="md"){return e===void 0?Ot[t]:sn(e)?Ot[e]:e}function sn(e){return Object.hasOwn(Ot,e)}function rt(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function No(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var Po=!1,v=function(e,t){Po||(Po=!0,l(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let o=e.direction??"row";return a(n("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:o,gap:ot(e.gap),alignItems:rt(e.align),justifyContent:No(e.justify),flexWrap:e.wrap??o==="row"?"wrap":"nowrap"}},t),e)};var Ho=!1,De=function(e,t){Ho||(Ho=!0,l(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let o=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return a(n("div",{class:"vtd-grid",style:{gridTemplateColumns:o,gap:ot(e.gap),alignItems:rt(e.align)}},t),e)};var Bo=g({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var D=e=>({label:"GitHub",to:`https://github.com/Velotype/${e}`}),le=e=>({label:"JSR",to:`https://jsr.io/@velotype/${e}`}),zt=[{id:"velotype",name:"velotype",tag:"framework",tagKind:"primary",tagline:"A fast and small TSX framework that updates the DOM in place.",about:["velotype creates real DOM elements as your TSX runs. There is no virtual DOM and no reconciler: a value that changes renders only the part of the page that depends on it, and a list that changes renders, moves, or removes only the rows that changed.","Components are classes with fields and methods, and you write TSX the way you write HTML."],stats:[{title:"Minified",value:"21",suffix:"kb"},{title:"Gzipped",value:"7.9",suffix:"kb"},{title:"Virtual DOM",value:"None"}],statsNote:"velotype 0.3.2, the jsx-runtime entry point, minified with deno bundle. Bundlers drop the parts an app does not import.",features:[{title:"Real DOM elements",text:"TSX gives you actual HTMLElements. Write class and for the way you do in HTML, add listeners with addEventListener, and use every DOM API you already know."},{title:"Updates in place",text:"A RenderObject renders its value everywhere it appears and re-renders just those spots when it changes. Lists update only the rows that changed, and sort(), move(), and filter() move the rows already on the page."},{title:"Components are classes",text:"Fields hold your state, methods change it, and velotype calls mount(), render(), and unmount() at the right moments. It reads like the object-oriented code you already write."},{title:"Small and tree-shakeable",text:"About 21kb minified and 7.9kb gzipped for the entire runtime (velotype 0.3.2), and your bundler drops whatever your app does not import."},{title:"Typed styles and events",text:"Style objects are checked against CSS: property names, keywords, units, and colors. on* attributes take a handler or {handler, options}, and on- listens for a custom event by its exact name."},{title:"Built for development",text:"Hot reloading keeps component state. ErrorBoundary contains a failing component, AsyncRenderObject shows only the latest request's result, and the DevTools extension shows your live component tree."}],samples:[{title:"A component that updates in place",intro:"The RenderObject renders its value wherever it is placed, and setting a new value renders only that element again.",language:"tsx",code:`class Counter extends Component<EmptyAttrs> {
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
}`},links:[D("velotype"),le("velotype")],resources:[{name:"Velotype DevTools",tag:"Chrome extension",text:"Chrome DevTools panels for debugging velotype apps: the live component tree with each component's fields, the event bus's registrations, and a decoder for VSON and VBIN payloads. It is built from source and loaded unpacked.",links:[{label:"Docs",to:"/docs/velotype/devtools/"},{label:"Learn more",to:"/projects/velodevtools/"},D("velodevtools")]},{name:"velotype-perf-demo",tag:"benchmark",text:"The same fleet dashboard written in velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code, with 10,000 rows by default. The page loads each one and times creating rows, live updates, typing a filter, sorting, and moving a row in your own browser.",links:[D("velotype-perf-demo"),{label:"Live demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{name:"example-velotype-projects",tag:"examples",text:"Example projects using the velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, the demo pages from React's 2018 hooks talk recreated in velotype, and the custom-elements-everywhere tests that check velotype works with Custom Elements.",links:[D("example-velotype-projects")]}]},{id:"velodesign",name:"velodesign",tag:"UI components",tagKind:"primary",tagline:"A themed component library for velotype, built from native HTML elements.",about:["velodesign is a component library for velotype apps. Where HTML has an element for the job (input, button, details, dialog), the component is that element, so keyboard support, form participation, and browser autofill come from the platform.","This site is built with it."],stats:[{title:"Theme",value:"Light + dark"},{title:"Colors set by",value:"CSS variables"}],features:[{title:"Native elements",text:"A Checkbox is a real input, a Modal is a real dialog, and an Accordion is built on details. Keyboard support, form participation, and browser autofill come with them."},{title:"Re-theme with variables",text:"A handful of CSS variables (--text, --background, --primary, --secondary, --warning, --accent, each with a ramp from light to dark) color everything. Change them and every component follows."},{title:"Light and dark",text:`The theme follows the browser's color scheme, or a reader's choice through [data-theme="light"|"dark"].`},{title:"A broad set",text:"Typography, layout, forms, navigation, feedback, overlays, data display, data entry, and charts: from Stack, Grid, and Button to DataTable, DatePicker, Command, and LineChart."},{title:"One spacing scale",text:"Stack and Grid take their gaps from a shared scale in em, so spacing follows the type size and rows that look alike are alike."},{title:"Smooth updates",text:"Handlers make the smallest DOM change for an update, and none when nothing changed, so focus, caret, selection, and scroll position stay where they are."}],samples:[{title:"Use a few components",language:"tsx",code:`import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
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
// and sets up the CSS custom properties every component reads.`},links:[D("velodesign"),le("velodesign"),{label:"Component showcase",to:"https://velotype.github.io/velodesign/"}]},{id:"velossr",name:"velossr",tag:"server rendering",tagKind:"primary",tagline:"TSX rendered to HTML on the server, with no virtual DOM and no client runtime.",about:["velossr is the server-side version of velotype's TSX. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve.","Pair it with velotype for interactive parts of a page: the server renders the markup for each one, and velotype replaces it in the browser with replaceElementWithRoot()."],stats:[{title:"Virtual DOM",value:"None"},{title:"Client runtime",value:"None"}],features:[{title:"Static and dynamic components",text:"A StaticServerComponent is a plain function that renders synchronously. A DynamicServerComponent is a class that sees the Request and can render async."},{title:"Streaming",text:"Send a page all at once, or as a ReadableStream where async components flush in place as they resolve."},{title:"Prepared once",text:"prepareHTMLVNodeForRendering() prepares a page when your module loads, so its static parts are built once and not on every request."},{title:"Escaped by default",text:"Text, attribute values, and attribute names are escaped where they are written. Inline style and script text is written as it is, with only the sequences that would end the element early changed."},{title:"Contained failures",text:"If a dynamic component throws, its onFail() renders in its place and the rest of the page goes out."},{title:"Same TSX as velotype",text:"HTML attributes, style objects, and fragments behave as they do in the browser, so markup moves between server and client unchanged."}],samples:[{title:"A server that renders a page",language:"tsx",code:`import { type Context, Router, Server } from "jsr:@velotype/veloserver"
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
}`},links:[D("velossr"),le("velossr")]},{id:"velodevtools",name:"Velotype DevTools",tag:"Chrome extension",tagKind:"secondary",tagline:"Chrome DevTools panels for debugging velotype apps.",about:["A Chrome extension with three DevTools panels, plus a toolbar popup that shows whether velotype is present on the page.","It works with any velotype build that installs the devtools hook, which every current velotype entry point does."],stats:[{title:"Panels",value:"3"}],features:[{title:"The component tree",text:"Your page's live component tree, like React DevTools: class names, DOM anchors, and for class components their attrs and instance fields, including live RenderObject values. Click a node to inspect it and highlight it on the page."},{title:"Expandable fields",text:"Objects, arrays, Maps, and Sets expand to their live values, fetched fresh on each expand and kept live while open."},{title:"Velotype Events",text:"Every key on the event bus with its listener count, and the live components and RenderObjects that are listening."},{title:"VeloJSON",text:"Decode VSON and VBIN payloads from network requests and responses while the panel is open, or convert bytes and JSON by hand."}],samples:[],install:{title:"Build and load it",language:"plain",code:`deno task build

// chrome://extensions -> enable Developer mode -> Load unpacked
// -> select the dist/ folder`},links:[D("velodevtools")]},{id:"veloserver",name:"veloserver",tag:"web server",tagKind:"warning",tagline:"A web server framework for high-performance websites, on Deno.",about:["veloserver is a small server framework: a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates velotype apps."],stats:[],features:[{title:"Routing",text:"Write /users/:id and your handler receives the id. A fixed path like /users/me beats any :name or * pattern that also matches."},{title:"Typed request metadata",text:"Give every request its own typed data, such as the signed-in user or a request id, for every handler and inspector to read."},{title:"Inspectors",text:"Run logging, timing, and auth before and after the handlers of a path. An inspector can answer a request itself, and it sees every response."},{title:"Static files",text:"mountFiles() and mountFile() serve a directory or a file from memory, with an ETag and a gzip copy for clients that accept it."},{title:"Clean shutdown",text:"SIGINT, SIGTERM, and SIGUSR1 stop the server cleanly, and server.close() does it from code."},{title:"A development server",text:"@velotype/veloserver/dev serves your velotype app and updates the page when files change, per module or by rebuilding the bundle."}],samples:[{title:"Hello veloserver",language:"tsx",code:`import { Router, Server } from "jsr:@velotype/veloserver"

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
deno run --allow-net server.ts`},links:[D("veloserver"),le("veloserver")]},{id:"velojson",name:"velojson (VSON)",tag:"binary JSON",tagKind:"warning",tagline:"A compact binary encoding for JSON, and an even smaller one when both sides share a schema.",about:["VSON (Velocity JSON) maps JavaScript JSON data to bytes one to one: anything JSON can hold, VSON can hold, and nothing else is added.","It has three formats, each described below."],stats:[{title:"Base vs JSON text",value:"20-25%",suffix:" smaller"},{title:"Key Table vs JSON text",value:"20-65%",suffix:" smaller"},{title:"VBIN vs JSON text",value:"25-70%",suffix:" smaller"}],features:[{title:"VSON Base",text:"A direct translation of JSON into bytes, typically 20-25% smaller than the text. It mirrors JSON's structure, so it works for streaming and partial decoding."},{title:"VSON Key Table",text:"Every unique key is stored once, in a table at the end of the message. About 20% smaller than JSON for a single object, and up to about 65% smaller for many records that share a wide set of keys."},{title:"VBIN",text:"Encoder and decoder agree on key IDs ahead of time, so no table is sent and key names are never encoded or decoded as strings. Typically 25-70% smaller than JSON text."},{title:"Same data as JSON",text:"VSON.encode() and VSON.decode() take and return the values that JSON.stringify() and JSON.parse() do. Anything JSON can hold, VSON can hold, and nothing else is added."},{title:"Server and browser builds",text:"The main module is tuned for speed and supports every format. The browser module is tuned for size, about 4.3kb minified, and supports Key Table."},{title:"Debuggable",text:"The Velotype DevTools extension decodes VSON and VBIN payloads straight from the network panel."}],samples:[{title:"Encode and decode",language:"tsx",code:`import { VSON } from 'jsr:@velotype/velojson'

const startObj = { name: "Some name", age: 20, address: null }

const objBinary: Uint8Array = VSON.encode(startObj)
console.log(objBinary.length) // 34 bytes, against 44 for the JSON text

const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))
// {"name":"Some name","age":20,"address":null}`}],install:{title:"Add velojson to a Deno project",language:"plain",code:`deno add jsr:@velotype/velojson

// In the browser:
import { VSON } from "jsr:@velotype/velojson/browser"`},links:[D("velojson"),le("velojson"),{label:"Playground",to:"/projects/velojson/playground/"}]},{id:"velomicro",name:"velomicro",tag:"1kb",tagKind:"neutral",tagline:"A 1kb TSX framework that shows how TSX rendering works.",about:["velomicro is the smallest version of the idea: a createElement that returns real DOM elements, and function components. It is meant to be read, and the Medium article walks through its source line by line."],stats:[{title:"Size",value:"1",suffix:"kb"}],features:[{title:"Returns HTMLElements",text:"TSX evaluates to real elements, so a div tag is an HTMLDivElement."},{title:"HTML attributes",text:"It calls setAttribute(), so you write class and the other attributes as you would in HTML."},{title:"Style objects",text:"Pass an object of camelCase properties, or a string."},{title:"Function components",text:"A component is a function from attrs to an element."}],samples:[{title:"A counter function component",language:"tsx",code:`const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = count
        }}>Increment</button>
    </div>
}`}],install:{title:"Add velomicro to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomicro"},links:[D("velomicro"),le("velomicro"),{label:"Medium article",to:"https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}]},{id:"velomini",name:"velomini",tag:"2.5kb",tagKind:"neutral",tagline:"A 2.5kb TSX framework that adds classes to velomicro.",about:["velomini is velomicro plus a Component class with render, mount, unmount, and refresh. Its refresh() tears down a component's subtree and renders it again. The Medium article walks through the source.","velotype is the next step: it keeps classes and replaces refresh() with values that update in place."],stats:[{title:"Size",value:"2.5",suffix:"kb"}],features:[{title:"Class components",text:"Extend Component and implement render(). velomini calls mount() and unmount() for you."},{title:"getComponent()",text:"Convert an element back to the class instance that built it, to call its methods."},{title:"Everything from velomicro",text:"Real HTMLElements, HTML attributes, style objects, and function components."}],samples:[{title:"A class component",language:"tsx",code:`class ComplexComponent extends Component<{foo: string}> {
    override render(attrs) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Then in TSX:
return <div><ComplexComponent foo="Component!"></ComplexComponent></div>`}],install:{title:"Add velomini to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomini"},links:[D("velomini"),le("velomini"),{label:"Medium article",to:"https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}]}],nt=[{title:"Front end",note:"TSX that creates real DOM elements, with no virtual DOM.",ids:["velotype","velodesign"],inDocsNav:!0},{title:"Server",note:"Serve pages and APIs, render HTML, and carry the data between server and browser.",ids:["velossr","veloserver","velojson"],inDocsNav:!0},{title:"Learn",note:"The smallest versions of the idea, written to be read.",ids:["velomicro","velomini"],inDocsNav:!1}],$e=new Map(zt.map(e=>[e.id,e]));var hn=e=>{let t=[...e.classList].find(o=>o.startsWith("language-"))?.slice(9);return t=="css"?"css":t=="tsx"||t=="ts"||t=="json"?"tsx":"plain"};function pn(e){for(let t of e.querySelectorAll("pre")){let o=t.querySelector("code");o&&t.replaceWith(d(Te,{code:o.textContent.replace(/\n$/,""),language:hn(o)}))}}function mn(e){return[...e.querySelectorAll("h2, h3")].map(t=>({id:t.id,label:t.textContent,level:t.tagName=="H2"?1:2}))}function un(e){return d(v,{direction:"column",gap:"sm",children:nt.filter(t=>t.inDocsNav).map(t=>{let o=t.ids.filter(r=>r!=e.project).flatMap(r=>e.nav.filter(i=>i.id==r));return o.length>0&&p("div",{class:"vtp-docs-group",children:[d(R,{type:"muted",class:"vtp-docs-group-title",children:t.title}),o.map(r=>d(b,{to:r.pages[0].url,children:r.name}))]})})})}function Vo(){let e=JSON.parse(document.getElementById("docs-nav").textContent),t=$e.get(e.project),o=e.nav.find(u=>u.id==e.project),r=o.pages.find(u=>u.url==e.current),i=o.pages.indexOf(r),s=o.pages[i-1],c=o.pages[i+1],h=document.getElementById("doc");return h.remove(),pn(h),B(`
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
`,"vtp-docs"),p("div",{class:"vtp-docs",children:[d("nav",{class:"vtp-docs-nav","aria-label":`${t.name} documentation`,children:p(v,{direction:"column",gap:"sm",children:[d(T,{level:2,style:{fontSize:"1.1em"},children:t.name}),d("div",{children:o.pages.map((u,f)=>p(eo,{children:[u.section&&u.section!=o.pages[f-1]?.section&&d(R,{type:"muted",class:"vtp-docs-group-title vtp-docs-section",children:u.section}),d(ve,{to:u.url,children:u.title})]}))}),un(e)]})}),p("div",{class:"vtp-docs-article",children:[d(Me,{items:[{label:"Docs",to:o.pages[0].url},{label:t.name,to:o.pages[0].url},{label:r.title}]}),h,p("div",{class:"vtp-docs-pager",children:[d("div",{children:s&&p(b,{to:s.url,children:["\u2190 ",s.title]})}),d("div",{children:c&&p(b,{to:c.url,children:[c.title," \u2192"]})})]})]}),d("div",{class:"vtp-docs-toc",children:d(Le,{ariaLabel:"On this page",header:"On this page",items:mn(h)})})]})}var it={velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var $t=e=>d("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),fn=()=>p(Ae,{style:{borderBottom:"1px solid var(--background-4)"},brand:p(b,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[d($t,{size:"1.75em"}),"The Velocity Project"]}),children:[d(b,{to:it.velotype,children:"Docs"}),d(b,{to:"https://github.com/Velotype",children:"GitHub"}),d(b,{to:"https://jsr.io/@velotype",children:"JSR"}),d(b,{to:"https://argoday.medium.com/",children:"Articles"})]}),gn=()=>p(R,{type:"muted",children:["All projects live under the ",d(b,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",d(b,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",d(b,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function Ko(e,t="60rem"){Ct.injectStyles(),Je(p("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[fn(),d("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:p(v,{direction:"column",gap:"lg",children:[e,gn()]})})]}),document.getElementById("app"))}var Rt=e=>`/projects/${e.id}/`,Re=e=>it[e.id],Ie=e=>()=>{location.assign(e)},_o=e=>p(v,{direction:"column",gap:"sm",children:[d(T,{level:3,children:e.title}),e.intro&&d(I,{children:e.intro}),d(Te,{code:e.code,language:e.language})]}),bn=e=>d(Ee,{id:e.id,header:p(v,{align:"center",children:[d(b,{to:Rt(e),style:{color:"inherit",textDecoration:"none"},children:e.name}),d(Oe,{type:e.tagKind,children:e.tag})]}),children:p(v,{direction:"column",children:[d(I,{children:e.tagline}),p(v,{children:[d(b,{to:Rt(e),children:"Learn more"}),Re(e)&&d(b,{to:Re(e),children:"Docs"}),d(b,{to:e.links[0].to,children:"GitHub"})]})]})}),yn=()=>p(v,{direction:"column",gap:"lg",children:[p(v,{direction:"column",children:[p(v,{align:"center",gap:"lg",children:[d($t,{size:"4rem"}),d(T,{level:1,children:"The Velocity Project"})]}),d(I,{style:{fontSize:"1.2em"},children:"A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them."}),d(I,{children:p(R,{type:"muted",children:["Each piece stands on its own and is published separately. They are designed to fit together: ",d(b,{to:"/projects/veloserver/",children:"veloserver"})," serves pages and APIs, ",d(b,{to:"/projects/velossr/",children:"velossr"})," or ",d(b,{to:"/projects/velotype/",children:"velotype"})," renders them, and ",d(b,{to:"/projects/velojson/",children:"VSON"})," carries data between the two. More pieces are on the way."]})}),p(v,{children:[d(w,{type:"primary",onClick:Ie("/projects/velotype/"),children:"Start with velotype"}),d(w,{type:"secondary",onClick:Ie("https://github.com/Velotype"),children:"GitHub"})]})]}),nt.map(e=>p(v,{direction:"column",children:[d(T,{level:2,children:e.title}),e.note&&d(R,{type:"muted",children:e.note}),d(De,{minColumnWidth:"22em",children:e.ids.map(t=>bn($e.get(t)))})]}))]}),xn=e=>d(Ee,{header:p(v,{align:"center",children:[d("span",{children:e.name}),d(Oe,{type:"neutral",children:e.tag})]}),children:p(v,{direction:"column",children:[d(I,{children:e.text}),d(v,{children:e.links.map(t=>d(b,{to:t.to,children:t.label}))})]})}),kn=e=>p(v,{direction:"column",gap:"lg",children:[d(Me,{items:[{label:"The Velocity Project",to:"/"},{label:e.name}]}),p(v,{direction:"column",children:[p(v,{align:"center",children:[d(T,{level:1,children:e.name}),d(Oe,{type:e.tagKind,children:e.tag})]}),d(I,{style:{fontSize:"1.2em"},children:e.tagline}),p(v,{children:[Re(e)&&d(w,{type:"primary",onClick:Ie(Re(e)),children:"Documentation"}),d(w,{type:Re(e)?"secondary":"primary",onClick:Ie(e.links[0].to),children:e.links[0].label}),e.links.slice(1).map(t=>d(w,{type:"secondary",onClick:Ie(t.to),children:t.label}))]})]}),e.stats.length>0&&p(v,{direction:"column",gap:"sm",children:[d(v,{gap:"lg",children:e.stats.map(t=>d(Tt,{title:t.title,value:t.value,suffix:t.suffix}))}),e.statsNote&&d(R,{type:"muted",children:e.statsNote})]}),d(v,{direction:"column",gap:"sm",children:e.about.map(t=>d(I,{children:t}))}),p(v,{direction:"column",children:[d(T,{level:2,children:"What it does"}),d(De,{minColumnWidth:"18em",children:e.features.map(t=>d(Ee,{header:t.title,children:d(I,{children:t.text})}))})]}),e.samples.length>0&&p(v,{direction:"column",children:[d(T,{level:2,children:"See it in action"}),e.samples.map(_o)]}),p(v,{direction:"column",children:[d(T,{level:2,children:"Get started"}),_o(e.install)]}),e.resources&&p(v,{direction:"column",children:[d(T,{level:2,children:"Tools, demos, and examples"}),d(De,{minColumnWidth:"22em",children:e.resources.map(xn)})]}),p(v,{direction:"column",children:[d(T,{level:2,children:"Links"}),d(v,{children:e.links.map(t=>d(b,{to:t.to,children:t.label}))})]}),p(v,{direction:"column",children:[d(T,{level:2,children:"Other projects"}),d(v,{children:zt.filter(t=>t!==e).map(t=>d(b,{to:Rt(t),children:t.name}))})]})]}),Wo=document.body.dataset.page,qo=Wo?$e.get(Wo):void 0;Ko(document.body.dataset.doc?Vo():qo?kn(qo):yn(),document.body.dataset.doc?"84rem":"60rem");
