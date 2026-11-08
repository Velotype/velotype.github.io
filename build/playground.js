var ue=console.warn.bind(console,"vt:"),H=console.error.bind(console,"vt:"),Ao=Tt("span","display:contents;"),wt=Tt("div","display:contents;"),nr=Tt("div","display:none;");var Ge={value:void 0,writable:!1,configurable:!1,enumerable:!1},kt=new Map,St=new Map,ir=/[A-Z]/g,B=new Map,O=Symbol(),Et=Symbol(),Ye=Symbol(),_=new Map,he=new Map,Xe=new Map,E={k:1,r:0,p:void 0,s:void 0},Ct={version:"0.3.3",domKeyProperty:O,domReferences:B,listenersF:_,listenersR:he,styleSectionMounted:Xe,setEventTracer:()=>{}};function Tt(e,t){let r=document.createElement(e);return r.style.cssText=t,r}function G(e){return e instanceof HTMLElement}function Je(e){return e instanceof SVGSVGElement}function Ze(e){return e instanceof MathMLElement}function Qe(e){return e instanceof Text}function we(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function sr(e,t,r){Ge.value=r,Object.defineProperty(e,t,Ge),Ge.value=void 0}function ee(){return nr.cloneNode()}function ar(e){Promise.resolve().then(e)}function Lt(e,t,r){let o=t.nextSibling;o===r?e.insertBefore(r,t):(e.insertBefore(t,r),e.insertBefore(r,o))}function te(e){typeof reportError=="function"?reportError(e):H(e)}var ke=class{constructor(t,r,o){this.emittingObject=t,this.event=r,this.data=o}};function rt(e,t,r){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");pe&&(r=Mt(t,r)),lr(_,t,e.vtKey,r),lr(he,e.vtKey,t,r)}function lr(e,t,r,o){let n=e.get(t);n||(n=new Map,e.set(t,n));let i=n.get(r);i?i.push(o):n.set(r,[o])}function Be(e){let t=he.get(e.vtKey);t&&t.forEach((r,o)=>{dr(_,o,e.vtKey),dr(he,e.vtKey,o)})}function dr(e,t,r,o){let n=e.get(t);if(n){let i=n.get(r);if(i){if(E.r++,o){let s=i.indexOf(o);if(s<0&&pe&&(s=i.findIndex(c=>c.o===o)),s<0){ue("Listener not registered",t,r);return}i=i.slice(),i.splice(s,1),n.set(r,i)}(!o||i.length<=0)&&(n.delete(r),n.size<=0&&e.delete(t))}else ue("No listeners to remove",t,r)}else ue("No listeners to remove",t,r)}function cr(e,t,r){let o=_.get(e),n=o&&o.get(t);return!!n&&(n.includes(r)||!!pe&&n.some(i=>i.o===r))}function ot(e,t,r){let o=_.get(e);o?o.forEach((n,i)=>{if(!r||r.vtKey!=i){let s=E.r;n.forEach(c=>{if(s!==E.r){let d=o.get(i);if(d!==n&&!(d&&d.includes(c)))return}try{c(t)}catch(d){te(d)}})}}):ue("No listeners for event",e,t)}var pe,tt;function Mt(e,t){let r=o=>{if(pe&&tt!==o){tt=o,queueMicrotask(()=>{tt=void 0});try{pe(e,o)}catch{}}t(o)};return r.o=t,r}function et(e,t){e.forEach((r,o)=>{r.forEach((n,i)=>{r.set(i,n.map(s=>t(o,i,s)))})})}function ur(e){let t=!!pe;if(pe=e,tt=void 0,e&&!t)et(_,(r,o,n)=>Mt(r,n)),et(he,(r,o,n)=>Mt(o,n));else if(!e&&t){let r=(o,n,i)=>i.o??i;et(_,r),et(he,r)}}function Oo(){Ct.setEventTracer=ur;let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,r=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(o){return t.set(r,o),r++},unregister(o){t.delete(o)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(Ct)}Oo();function re(e,t){e[O]=t}function me(e){return B.get(e)}function fe(e,t){let r=E.k++;return t&&re(t,r),B.set(r,e),r}function Se(e){B.delete(e)}function ve(e){B.delete(e.vtKey),Be(e)}function Y(e){for(let t=e;t<E.k;t++){let r=B.get(t);r&&(oe(r)?(Be(r.c),B.delete(t),Pe(r.c)):r.vtKey===t||!r.uK?(ve(r),B.delete(t)):r.uK(t))}}function Dt(e){return e instanceof je}var je=class{constructor(t){this.w=t,this.k=fe(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),ve(t)})}};function u(e,t){if(t.id&&Ot(e,"id",t.id),t.class){let r=e.getAttribute("class");Ot(e,"class",r?r+" "+t.class:t.class)}return t.style&&ge(e,{style:t.style}),e}function pr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return At(e,t);let r=Object.getPrototypeOf(e),o=r===E.p?E.s:St.get(r);o||(o=new Map,St.set(r,o)),E.p=r,E.s=o;let n=o.get(t);return n===void 0&&(n=At(r,t),o.set(t,n)),n}function At(e,t){let r=e;for(;r;){let o=Object.getOwnPropertyDescriptor(r,t);if(o&&(o.set||o.writable))return!0;r=Object.getPrototypeOf(r)}return!1}function Ot(e,t,r){pr(e,t)?e[t]=r:e.setAttribute(t,r.toString())}function zo(e,t,r){pr(e,t)?e[t]=r:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(r)):r&&e.setAttribute(t,"")}function Io(e){if(e.startsWith("--"))return e;let t=e.replace(ir,r=>"-"+r.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function ge(e,t){if(!t)return;let r=t.type=="range",o=Object.keys(t);for(let n=0;n<o.length;n++){let i=o[n];(!r||i!="value")&&hr(e,i,t[i])}r&&hr(e,"value",t.value)}function hr(e,t,r){if(t.startsWith("on")&&t.length>4){if(r){let o,n=r;typeof r!="function"&&r.handler&&(n=r.handler,o=r.options);let i=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(i,n,o)}}else if(t=="style"&&r instanceof Object)for(let o of Object.keys(r)){let n=r[o]==null?"":r[o],i=typeof n=="number"?n.toString():n,s=e.style;if(i.endsWith("!important"))s.setProperty(Io(o),i.slice(0,-10),"important");else{let c=kt.get(o);c===void 0&&(c=At(s,o),kt.set(o,c)),c?s[o]=i:s.setProperty(o,i)}}else if(typeof r=="boolean")zo(e,t,r);else if(typeof r!="function")if(t=="vtwith"){let o=e[O];if(o)H("vtwith on a keyed element",o);else{let n=new je(r);re(e,n.k)}}else r!=null&&Ot(e,t,r)}function X(e,t,...r){if(typeof e=="string"){let n=document.createElement(e);return nt(e=="template"?n.content:n,r),ge(n,t),n}let o=t||{};if(be(e.prototype)){let n=E.k;try{return new Ne(new e(o,r),o,r).e}catch(i){throw Y(n),i}}else if(typeof e=="function"){let n=E.k,i;try{i=e(o,r)}catch(s){throw Y(n),s}return we(i)||Array.isArray(i)?i:ne(i)}return H("Invalid tag",e,o,r),ee()}function it(e){if(we(e)&&e!==!1||Qe(e))return X("span",null,e);if(e)return ie(e)}function Vo(e){if(we(e)&&e!==!1)return document.createTextNode(e.toString());if(G(e))return e;if(Qe(e))return e;if(e)return ie(e)}function ie(e){if(G(e)||Je(e)||Ze(e))return e;if(Ee(e))return e.rD();if(be(e)){let t=me(e.vtKey);if(t&&oe(t))return t.e}return H("Invalid child"),ee()}function nt(e,t){if(Array.isArray(t))for(let r=0;r<t.length;r++)nt(e,t[r]);else{let r=Vo(t);r&&e.appendChild(r)}}function ne(e){if(e==null||e===!1||e==="")return ee();if(we(e)||be(e)||Ee(e)||Qe(e)||Array.isArray(e)||e[O]!==void 0){let t=wt.cloneNode();return nt(t,e),t}return e}function Ee(e){return e instanceof F}function mr(e){try{e()}catch(t){te(t)}}var se=class{constructor(t,r){this.result=t,this.updateRefs=r}};function fr(e,t,r){Re(e.e,t),e.e=t,e.uR=r}var F=class{#e;#r;#n;es=new Map;vtKey=fe(this);#t=`vt-ro-${this.vtKey}`;#i;#s;#a=!1;#o(){ot(this.#t,new ke(this,"onChange"))}constructor(t,r,o){this.#e=t,this.#r=r||ee,this.#n=o}registerOnChangeListener(t,r){let o=r&&r.hasVtKey||this,n=this.#t,i=r&&r.eventDispatchDelay||0,s=0,c=i>0?d=>{s||(s=setTimeout(()=>{s=0,cr(n,o.vtKey,c)&&t(d)},i))}:t;return rt(o,n,c),r&&r.triggerOnRegistration&&ar(()=>{this.#o()}),this}registerOnMount(t,r){return t&&(this.#i||(this.#i=[]),this.#i.push(t)),r&&(this.#s||(this.#s=[]),this.#s.push(r)),this}mount(){this.#a||(this.#a=!0,this.#i&&this.#i.forEach(mr))}unmount(){this.#a&&(this.#a=!1,this.#s&&this.#s.forEach(mr))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let r=this.#e,o=[],n=[];this.es.forEach((i,s)=>{if(i.hU&&i.uR)n.push(i);else{let c=i.rF(t,this),d=c instanceof se,p=ne(it(d?c.result:c));re(p,s),o.push({i,e:p,r:d?c.updateRefs:void 0})}}),n.forEach(i=>{i.hU(i.e,i.uR,r,t)}),o.forEach(i=>{fr(i.i,i.e,i.r)})}rerenderElements(t){let r=E.k;try{this.es.size>1?this.#l(t):this.es.forEach((o,n)=>{if(o.hU&&o.uR)o.hU(o.e,o.uR,this.#e,t);else{let i=o.rF(t,this),s=i instanceof se,c=ne(it(s?i.result:i));re(c,n),fr(o,c,s?i.updateRefs:void 0)}})}catch(o){throw Y(r),o}this.#e=t,_.has(this.#t)&&this.#o()}uK(t){let r=this.es.get(t);if(r){let o=r.e[O];return t===o?(this.es.delete(t),Se(t),!0):(H("Invalid state",t,o,r),!1)}else return H("Invalid unmountKey",t),!1}rD(){return this.render(this.#r,this.#n)}render(t,r){let o=t(this.#e,this),n=o instanceof se,i=ne(it(n?o.result:o)),s=fe(this,i);return this.es.set(s,{e:i,rF:t,hU:r,uR:n?o.updateRefs:o}),i}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(r=>{let o=r.e,n=o.parentNode;n&&t.es.forEach(i=>{i.e.parentNode===n&&Lt(n,o,i.e)})})}ei(t){let r=null;return this.es.forEach(o=>{o.e.parentNode===t&&(r=o.e)}),r}removeAll(){this.es.forEach((t,r)=>{st(t.e),Se(r)}),this.es.clear()}};function Re(e,t,r){let o=document.activeElement==e&&document.hasFocus();return r?wr(e):G(e)&&$t(e),e.replaceWith(t),r?at(t):G(t)&&Vt(t),o&&t.focus(),t}function zt(e,t){e.appendChild(t),at(t)}function vr(e,t){e.prepend(t),at(t)}function gr(e,t){$t(e),e.replaceChildren(...t),Vt(e)}function st(e){wr(e),e.remove()}function It(e,t,r){if(G(e)||Je(e)||Ze(e)){let o=e.firstElementChild;for(;o;){It(o,t,r);let n=o[O];if(n){let i=me(n);i?t(i,n):r&&br(o)}o=o.nextElementSibling}}}function br(e){ue("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function yr(e,t){if(oe(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(r){te(r)}Object.values(e.c).forEach(r=>{Ee(r)&&r.mount()})}else Dt(e),e.mount()}function at(e){if(!e.isConnected)return;G(e)&&Vt(e);let t=e[O];if(t){let r=me(t);r?yr(r,t):br(e)}}function Vt(e){e.isConnected&&It(e,yr,!0)}function xr(e,t){if(oe(e)){if(Be(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(r){te(r)}}Object.values(e.c).forEach(r=>{Ee(r)?(r.unmount(),ve(r)):be(r)&&(ve(r),Pe(r))}),Se(e.k),Pe(e.c)}else Dt(e)?(e.unmount(),Se(e.k)):e.uK(t)}function $t(e){It(e,xr)}function wr(e){G(e)&&$t(e);let t=e[O];if(t){let r=me(t);r&&xr(r,t)}}function Ce(e,t){return t===null?null:(t.replaceWith(e),at(e),e)}function oe(e){return e instanceof Ne}function be(e){return e instanceof v}function $o(e){return e[Et]}function Te(e,t){let r=$o(e),o=r.b||(r.b={});return o[t]||(o[t]=r[t].bind(r))}var v=class{constructor(t,r){this.attrs=t,this.children=r}mount(){}unmount(){}get refresh(){return Te(this,"f")}get unmountSignal(){let t=this[Ye];return t||(t=new AbortController,this[Ye]=t,this.vtKey!==void 0&&!B.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return Te(this,"q")}get appendToChild(){return Te(this,"w")}get prependToChild(){return Te(this,"t")}get replaceChildrenOfChild(){return Te(this,"y")}get removeChild(){return Te(this,"u")}},Ne=class{constructor(t,r,o){this.c=t,this.a=r,this.h=o,this.k=fe(this),sr(t,"vtKey",this.k),t[Et]=this,this.e=kr(this,this.a,this.h)}m=!1;f(){let t=E.k,r;try{r=kr(this,this.a,this.h)}catch(o){throw Y(t),o}this.e=Re(this.e,r)}q(t,r){return this.e.contains(t)?Re(t,ie(r),!0):t}w(t,r){return this.e.contains(t)?(zt(t,ie(r)),!0):!1}t(t,r){return this.e.contains(t)?(vr(t,ie(r)),!0):!1}y(t,r){return this.e.contains(t)?(gr(t,r.map(o=>ie(o))),!0):!1}u(t){return this.e.contains(t)?(st(t),!0):!1}};function kr(e,t,r){let o=ne(e.c.render(t,r));return re(o,e.k),o}function Pe(e){let t=e[Ye];t&&t.abort()}function ye(e,t,r=!1){let o=Xe.get(t),n=document.adoptedStyleSheets;if(o){if(!r)return;let s=n.indexOf(o.sheet);s>=0&&n.splice(s,1)}let i=new CSSStyleSheet;i.replace(e),n.push(i),Xe.set(t,{sheet:i,text:e,key:t})}function f(e,t,r){let o;return"children"in t&&({children:o,...t}=t),r!==void 0&&(t.key=r),X(e,t,o)}var L=f;function a(e,t,...r){return X(e,t,...r)}var Xo="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",Er=!1;function h(e,t,r="component",o=!1){Er||(Er=!0,ye(Xo,"vtd/LayerOrder"),Jo()),ye(`@layer velodesign.${r}{${e}}`,t,o)}function Jo(){ye(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var Cr=console.log,Tr=console.error,S=function(e,t,r){e.setAttribute(t,r)},Le="http://www.w3.org/2000/svg",ae=function(e){return document.createElementNS(Le,e)};var Lr=!1;function Zo(){let e=ae("svg");S(e,"xmlns",Le),S(e,"viewBox","0 0 24 24"),S(e,"class","vtd-spinner-ring"),S(e,"aria-hidden","true");let t=ae("circle");for(let[o,n]of[["cx","12"],["cy","12"],["r","9"],["fill","none"],["stroke","currentcolor"],["stroke-width","2.4"],["stroke-opacity","0.18"]])S(t,o,n);let r=ae("path");for(let[o,n]of[["d","M12 3A9 9 0 0 1 21 12"],["fill","none"],["stroke","currentcolor"],["stroke-width","2.4"],["stroke-linecap","round"]])S(r,o,n);return e.append(t,r),e}var dt=function(e,t){Lr||(Lr=!0,h(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
@keyframes vtd-spinner-pulse{0%,80%,100%{opacity:0.3;}40%{opacity:1;}}
.vtd-spinner{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;}
.vtd-spinner-ring{width:100%;height:100%;animation:vtd-spinner-rotate 0.8s linear infinite;}
.vtd-spinner-dots{gap:12.5%;}
.vtd-spinner-dot{width:25%;aspect-ratio:1;border-radius:50%;background-color:currentcolor;animation:vtd-spinner-pulse 1s ease-in-out infinite;}
.vtd-spinner-dot:nth-child(2){animation-delay:0.15s;}
.vtd-spinner-dot:nth-child(3){animation-delay:0.3s;}
@media (prefers-reduced-motion: reduce){
.vtd-spinner-ring,.vtd-spinner-dot{animation:none;}
}
`,"vtd/Spinner"));let r=e.size||"1em";if(e.variant=="dots")return u(a("span",{class:"vtd-spinner vtd-spinner-dots",role:"status","aria-label":e.label,style:{width:`calc(${r} * 2)`,height:r}},a("span",{class:"vtd-spinner-dot"}),a("span",{class:"vtd-spinner-dot"}),a("span",{class:"vtd-spinner-dot"})),e);let o=a("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:r,height:r}});return o.appendChild(Zo()),u(o,e)};var k=class{w;h;d;strokeWidth;filled;constructor(t,r,o,n,i){this.w=t,this.h=r,this.d=o,this.strokeWidth=n,this.filled=i}},Mr=!1;function Dr(){Mr||(Mr=!0,h(".vtd-icon{height:calc(1em * var(--vtd-icon-scale,1));margin-block:calc((1 - var(--vtd-icon-scale,1)) * 0.5em);width:auto;vertical-align:middle;flex-shrink:0;}","vtd/Icon","base"))}function Ar(e,t){Dr();let r=ae("svg");S(r,"xmlns",Le),S(r,"class","vtd-icon"),S(r,"viewBox",`0 0 ${e.w} ${e.h}`),t?(S(r,"role","img"),S(r,"aria-label",t)):S(r,"aria-hidden","true");let o=ae("path");return e.strokeWidth?(S(o,"fill",e.filled?"currentcolor":"none"),S(o,"stroke","currentcolor"),S(o,"stroke-width",String(e.strokeWidth)),S(o,"stroke-linecap","round"),S(o,"stroke-linejoin","round")):S(o,"fill","currentcolor"),S(o,"d",e.d),r.appendChild(o),r}function x(e,t){let r=Ar(e);return t!==1&&S(r,"style",`--vtd-icon-scale:${t}`),r}var b={cross:new k(24,24,"M7.5 7.5l9 9M16.5 7.5l-9 9",2.6),crossLight:new k(24,24,"M7 7l10 10M17 7L7 17",1.6),tick:new k(24,24,"M5 12.5l4.5 4.5L19 7.5",2.8),tickCentred:new k(24,24,"M5 11.44l4.5 4.5L19 6.44",3),dash:new k(24,24,"M6.5 12h11",3),chevronDown:new k(24,24,"M6 9l6 6 6-6",2),chevronUp:new k(24,24,"M6 15l6-6 6 6",2),chevronLeft:new k(24,24,"M15 6l-6 6 6 6",2),chevronRight:new k(24,24,"M9 6l6 6-6 6",2),arrowUp:new k(24,24,"M12 19V5.5M6.5 11L12 5.5 17.5 11",2.2),arrowDown:new k(24,24,"M12 5v13.5M6.5 13L12 18.5 17.5 13",2.2),arrowLeft:new k(24,24,"M19 12H5.5M11 6.5L5.5 12 11 17.5",2.2),arrowRight:new k(24,24,"M5 12h13.5M13 6.5l5.5 5.5-5.5 5.5",2.2),arrowToEdge:new k(24,24,"M5 5.5v13M19 12H9.5M13.5 8L9.5 12l4 4",2),dots:new k(24,24,"M6 12h0M12 12h0M18 12h0",3),menu:new k(24,24,"M4.5 7h15M4.5 12h15M4.5 17h15",2.2),pencil:new k(24,24,"M5 19l.9-3.9L15.6 5.4a1.9 1.9 0 0 1 2.7 0l.3.3a1.9 1.9 0 0 1 0 2.7L8.9 18.1zM13.6 7.4l3 3",2),star:new k(24,24,"M12 3.1l2.37 6.34 6.76.29-5.3 4.22 1.81 6.52L12 16.73l-5.64 3.74 1.81-6.52-5.3-4.22 6.76-.29z",1.8,!0),zoomIn:new k(24,24,"M16.7 10.5a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 1 1 12.4 0zM15.2 15.2l4.3 4.3M10.5 7.9v5.2M7.9 10.5h5.2",2),zoomOut:new k(24,24,"M16.7 10.5a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 1 1 12.4 0zM15.2 15.2l4.3 4.3M7.9 10.5h5.2",2),tray:new k(24,24,"M4 13.5l2.4-6.3A1.8 1.8 0 0 1 8.1 6h7.8a1.8 1.8 0 0 1 1.7 1.2L20 13.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5zM4 13.5h4.3l1.2 2h5l1.2-2H20",1.6),columns:new k(24,24,"M6 4.5h12a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5V7A2.5 2.5 0 0 1 6 4.5zM3.5 9h17M9.5 9v10.5M14.5 9v10.5",2)};var Qo=Symbol("velodesign.clearThemeOptionOverrides");function y(e,t){let r={},o=new Map,n=new Map;for(let[i,s]of Object.entries(e))n.set(i,function(){return M[s]});for(let[i,s]of Object.entries(t??{}))n.set(i,function(){return s});for(let i of n.keys())Object.defineProperty(r,i,{enumerable:!0,get:function(){return o.has(i)?o.get(i):n.get(i)()},set:function(s){s==null?o.delete(i):o.set(i,s)}});return Object.defineProperty(r,Qo,{value:function(){o.clear()}}),r}var M=y({},{closeSymbol:function(){return x(b.cross,1.3)},cancelSymbol:function(){return x(b.cross,1.3)},confirmSymbol:function(){return x(b.tick,1.25)},emptySymbol:function(){return x(b.tray,1)},collapseSymbol:function(){return x(b.dots,1.15)},prevSymbol:function(){return x(b.chevronLeft,1.15)},nextSymbol:function(){return x(b.chevronRight,1.15)}});var zr=y({},{loadingSymbol:function(){return a(dt,{variant:"dots",size:"0.8em"})}}),en=500,Or=!1,z=function(e,t){Or||(Or=!0,h(`
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
`,"vtd/Button"));let r=!1,o=e.loadingOnClick??(e.onClick!==void 0&&e.onClick.length>=2),n=e.minLoadingMs??en,i;o&&(i=a("span",{class:"vtd-button-spinner"},a(zr.loadingSymbol,null)));let s=a("span",null,t);return u(a("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:c=>{if(!(o&&r)&&e.onClick)if(o){r=!0;let d=c.currentTarget;d.setAttribute("aria-busy","true"),d.setAttribute("aria-disabled","true"),i&&(i.style.visibility="visible"),s.style.visibility="hidden";let p=Date.now(),m=!1,w=()=>{m||(m=!0,setTimeout(()=>{r=!1,d.removeAttribute("aria-busy"),d.removeAttribute("aria-disabled"),i&&(i.style.visibility="hidden"),s.style.visibility="visible"},Math.max(0,p+n-Date.now())))},g=e.onClick(c,w);g instanceof Promise&&g.finally(w)}else e.onClick(c)}},s,i),e)};var Ir=new Map,tn=!1;setTimeout(()=>{Ir.entries().forEach(([e,t])=>{Cr(t)}),tn=!0},1e3);var U="#fff",J="#000",Vr="#050505",rn=U,on=J,nn="#66b2ff",sn="#c6ff9e",an="#ffd666",ln="#ff6666",$r="#fafafa",dn="#151515",cn=U,un="#004c99",hn="#286100",pn="#997000",mn="#990000",Bt=":color-mix(in hsl,",fn=[-8,-6,-4,-2,0,2,4,6,8],le=(e,t,r,o)=>fn.map(n=>n<0?`--${e}-${n/2+5}${Bt}${t} ${-1*n}0%,${r} ${10+n}0%)`:n==0?`--${e}-5:${r};--${e}:${r}`:`--${e}-${n/2+5}${Bt}${r} ${10-n}0%,${o} ${n}0%)`).join(";")+";",vn=[1,2,3,4,5,6,7,8,9],Br=(e,t,r)=>vn.map(o=>`--${e}-${o}${Bt}${t} ${10-o}0%,${r} ${o}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${r};`,Pr=(e,t,r)=>`--${e}:${t};--${e}-alt:${r};`,jr=function(e){S(document.getElementsByTagName("html")[0],"data-theme",e)},Pt="vtd-preferred-theme",de="light",Me="dark",Nr="default",De=de,He,jt=null;function Rr(){try{return localStorage.getItem(Pt)}catch{return jt}}function gn(e){try{localStorage.setItem(Pt,e)}catch{jt=e}}function bn(){try{localStorage.removeItem(Pt)}catch{jt=null}}var Nt={getColorScheme:function(){return De},getColorSchemePreference:function(){if(He)return He;let e=Rr();return e==Me?Me:e==de?de:Nr},setColorScheme:function(e){gn(e),Nt.resetColorScheme()},resetColorScheme:function(){let e=Rr();He?De=He:e==Me?De=Me:e==de?De=de:(e&&e!=Nr&&bn(),De=globalThis.matchMedia("(prefers-color-scheme: light)").matches?de:Me),De==de?jr(de):jr(Me)}};function Hr(e,t,r=!1){h(`
${e}[data-theme="light"]{
${Pr("text",t?.textLightColor||Vr,t?.textDarkColor||$r)}
${Br("background",t?.backgroundLightColor||rn,t?.backgroundLightAltColor||on)}
${le("primary",U,t?.primaryLightColor||nn,J)}
${le("secondary",U,t?.secondaryLightColor||sn,J)}
${le("warning",U,t?.warningLightColor||an,J)}
${le("accent",U,t?.accentLightColor||ln,J)}
color-scheme:light;}
${e}[data-theme="dark"]{
${Pr("text",t?.textDarkColor||$r,t?.textLightColor||Vr)}
${Br("background",t?.backgroundDarkColor||dn,t?.backgroundDarkAltColor||cn)}
${le("primary",J,t?.primaryDarkColor||un,U)}
${le("secondary",J,t?.secondaryDarkColor||hn,U)}
${le("warning",J,t?.warningDarkColor||pn,U)}
${le("accent",J,t?.accentDarkColor||mn,U)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",r)}var Rt={injectStyles(e,t=!0,r){He=r,t&&h(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),Hr(":root",e),globalThis.setTimeout(function(){h("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),Nt.resetColorScheme()}};var Z="",I={configureBasePath:function(e){let t=e.replace(/\/+$/,"");Z=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return Z?e==Z?"/":e.startsWith(`${Z}/`)?e.slice(Z.length):e:e},resolveHref:function(e){return!Z||!e.startsWith("/")||e==Z||e.startsWith(`${Z}/`)?e:`${Z}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",I.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){Tr(t),I.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=I.resolveHref(e)}};var P=function(e,t){let r=e.spa??!1;return u(a("a",{class:"vtd-link",href:I.resolveHref(e.to),onClick:r?o=>{o.preventDefault(),I.changeLocation(e.to)}:void 0},t),e)};var yn=y({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var xn=y({closeSymbol:"closeSymbol"},{zoomInSymbol:function(){return x(b.zoomIn,1)},zoomOutSymbol:function(){return x(b.zoomOut,1)}});var wn=y({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return x(b.pencil,1.2)}});var kn={top:"bottom",bottom:"top",left:"right",right:"left"},q=8,Kt=new WeakMap;function Sn(e){if(getComputedStyle(e).position==="fixed")return[];try{if(e.matches(":popover-open"))return[]}catch{}let t=[];for(let r=e.offsetParent??e.parentElement;r&&r!==document.documentElement;r=r.parentElement){let o=getComputedStyle(r);if((o.overflowX!=="visible"||o.overflowY!=="visible")&&t.push(r),o.position==="fixed")break}return t}function _r(e){let t={left:0,top:0,right:innerWidth,bottom:innerHeight};for(let r of e){let o=r.getBoundingClientRect();t.left=Math.max(t.left,o.left),t.top=Math.max(t.top,o.top),t.right=Math.min(t.right,o.right),t.bottom=Math.min(t.bottom,o.bottom)}return t}function Ft(e,t,r){switch(t){case"top":return r.top+q-e.top;case"bottom":return e.bottom-(r.bottom-q);case"left":return r.left+q-e.left;case"right":return e.right-(r.right-q)}}function Fr(e,t,r,o){return e<r?r-e:t>o?Math.max(o-t,r-e):0}function W(e,t,r){e.style.getPropertyValue(t)!==r&&(r?e.style.setProperty(t,r):e.style.removeProperty(t))}function En(e){return(e.offsetParent??e.parentElement??e).getBoundingClientRect()}function Kr(e,t,r,o,n){let i=t==="bottom"?r.top-o.bottom:t==="top"?o.top-r.bottom:t==="right"?r.left-o.right:o.left-r.right;if(e==="top"||e==="bottom"){let c=e==="bottom"?o.bottom+i:o.top-i-n.height;return{left:r.left,right:r.right,top:c,bottom:c+n.height}}let s=e==="right"?o.right+i:o.left-i-n.width;return{left:s,right:s+n.width,top:r.top,bottom:r.bottom}}function Ur(e,t,r){let o=e.getBoundingClientRect(),n=(t.anchor??(()=>En(e)))(),i=_r(r.clippers),s=t.side==="top"||t.side==="bottom",c={width:o.width,height:r.maxHeight===null?o.height:r.naturalHeight},d=o.top-r.y;r.maxHeight!==null&&r.side==="top"&&(d=o.bottom-r.y-c.height);let p={left:o.left-r.x,right:o.right-r.x,top:d,bottom:d+c.height},m=Kr(t.side,r.side,p,n,c),w=t.side,g=m,T=Ft(m,t.side,i);if(T>0){let $e=kn[t.side],or=Kr($e,r.side,p,n,c);Ft(or,$e,i)<T&&(w=$e,g=or)}let A=null,D=Ft(g,w,i);t.scrolls&&s&&D>0&&(A=Math.max(Math.floor(c.height-D),0),g=w==="bottom"?{...g,bottom:g.bottom-D}:{...g,top:g.top+D});let R=Math.round(Fr(g.left,g.right,i.left+q,i.right-q)),xt=Math.round(Fr(g.top,g.bottom,i.top+q,i.bottom-q));return{side:w,x:R,y:xt,maxHeight:A,size:c,area:i}}function Wr(e,t,r,o){o.side!==r.side&&t.setSide(o.side,o.size),t.scrolls&&W(e,"max-height",o.maxHeight===null?"":`${o.maxHeight}px`),W(e,"translate",o.x===0&&o.y===0?"":o.y===0?`${o.x}px`:`${o.x}px ${o.y}px`),r.maxHeight===null&&o.maxHeight!==null&&(r.naturalHeight=o.size.height),r.side=o.side,r.x=o.x,r.y=o.y,r.maxHeight=o.maxHeight}function K(e,t){W(e,"translate",""),W(e,"width",""),W(e,"max-width",""),W(e,"white-space",""),t.scrolls&&W(e,"max-height",""),t.setSide(t.side,{width:0,height:0});let r=e.getBoundingClientRect();if(r.width===0&&r.height===0)return Kt.delete(e),t.side;let o={side:t.side,x:0,y:0,naturalHeight:r.height,maxHeight:null,wrapped:!1,naturalWidth:r.width,clippers:Sn(e)},n=_r(o.clippers),i=n.right-n.left-2*q;r.width>i&&(W(e,"width","max-content"),W(e,"max-width",`${Math.max(Math.floor(i),0)}px`),W(e,"white-space","normal"),o.wrapped=!0),Kt.set(e,o);let s=Ur(e,t,o);return Wr(e,t,o,s),s.side}function Cn(e,t){let r=Kt.get(e);if(!r)return()=>{K(e,t)};let o=Ur(e,t,r),n=o.area.right-o.area.left-2*q;return r.wrapped&&r.naturalWidth<=n||o.size.width>n?()=>{K(e,t)}:()=>{Wr(e,t,r,o)}}function Ae(e,t){let r=0,o=()=>{r||(r=requestAnimationFrame(()=>{r=0;let s=t().map(([c,d])=>Cn(c,d));for(let c of s)c?.()}))},n=s=>{s.target instanceof Node&&e.contains(s.target)||o()},i=new ResizeObserver(o);for(let s=e.parentElement;s;s=s.parentElement)i.observe(s);return globalThis.addEventListener("resize",n),document.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>{cancelAnimationFrame(r),r=0,i.disconnect(),globalThis.removeEventListener("resize",n),document.removeEventListener("scroll",n,{capture:!0})}}var Gr=!1,ct=function(e,t){return Gr||(Gr=!0,h(`
.vtd-textarea{
padding:0.5ex 1ex;
border-radius:0.25rem;
border:1px solid var(--background-5);
background-color:var(--background-1);
color:var(--text);
font:inherit;
}
`,"vtd/Textarea")),u(a("textarea",{class:"vtd-textarea",name:e.name,value:e.value,rows:e.rows||3,maxlength:e.maxLength,onInput:e.onInput,onChange:e.onChange,placeholder:e.placeholder,required:e.required,style:{resize:e.resize||"vertical"}}),e)};var Yr=!1,Fe=function(e,t){return Yr||(Yr=!0,h(`
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
right:0.6em;
transform:translateY(-50%);
display:flex;
color:var(--text);
pointer-events:none;
}
`,"vtd/Select")),u(a("span",{class:"vtd-select-wrapper"},a("select",{class:"vtd-select",name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-label":e.ariaLabel,onChange:e.onChange},e.placeholder&&a("option",{value:"",disabled:e.placeholderDisabled,selected:!e.value},e.placeholder),e.options.map(r=>a("option",{value:r.value,disabled:r.disabled,selected:r.value==e.value},r.label))),a("span",{class:"vtd-select-chevron","aria-hidden":"true"},x(b.chevronDown,1.15))),e)};var Xr=!1,ut=function(e,t){return Xr||(Xr=!0,h(`
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
`,"vtd/Card")),u(a("div",{class:"vtd-card"},e.header&&a("div",{class:"vtd-card-header"},e.header),a("div",{class:"vtd-card-body"},t),e.footer&&a("div",{class:"vtd-card-footer"},e.footer)),e)};var Jr=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),Tn=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),Ln=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function Mn(e,t){if(t=="plain")return[{kind:"",text:e}];let r=t=="css"?Ln:Tn,o=t!="css",n=[],i=0;r.lastIndex=0;let s=0,c=!1,d=0,p=()=>o&&s>0&&!c&&d==0,m;for(;(m=r.exec(e))!==null;){m.index>i&&n.push({kind:"",text:e.slice(i,m.index)});let T=m.groups??{},A=m[0],D=T.closeTag??T.openTag;if(D!==void 0&&!w(m.index,T.closeTag!==void 0))n.push({kind:"punct",text:"<"}),n.push({kind:!p()&&Jr.has(D)?"keyword":"",text:D});else if(D!==void 0){let R=T.closeTag!==void 0;o&&(s=Math.max(0,s+(R?-1:1)),c=!0),n.push({kind:"punct",text:R?"</":"<"}),n.push({kind:"tag",text:D})}else if(T.word!==void 0){let R=!p()&&Jr.has(T.word);n.push({kind:R?"keyword":"",text:T.word})}else{let R=["comment","string","number","attr","punct"].find($e=>T[$e]!==void 0),xt=p()&&(R=="string"||R=="number");n.push({kind:xt?"":R??"",text:A}),o&&R=="punct"&&g(A)}i=m.index+A.length}return i<e.length&&n.push({kind:"",text:e.slice(i)}),n;function w(T,A){if(A||!o||p())return!0;let D=T>0?e[T-1]??"":"";return!/[\w$)\]]/.test(D)}function g(T){for(let A=0;A<T.length;A++){let D=T[A];D=="{"?d++:D=="}"?d=Math.max(0,d-1):D==">"&&c&&d==0&&(A>0&&T[A-1]=="/"&&(s=Math.max(0,s-1)),c=!1)}}}var Zr=!1,_t=function(e){let t=e.language??"tsx",r=Mn(e.code,t);Zr||(Zr=!0,h(`
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
`,"vtd/CodeBlock"));let o=["vtd-code-block"];return e.wrap&&o.push("vtd-code-block-wrap"),e.showLineNumbers&&o.push("vtd-code-block-numbered"),u(a("pre",{class:o.join(" "),"aria-label":e.ariaLabel},a("code",null,e.showLineNumbers?Dn(r):Qr(r))),e)};function Qr(e){return e.map(t=>t.kind?a("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function Dn(e){let t=[[]];for(let r of e)r.text.split(`
`).forEach((n,i)=>{i>0&&t.push([]),n.length>0&&t[t.length-1].push({kind:r.kind,text:n})});return t.map(r=>a("span",{class:"vtd-code-block-line"},Qr(r)))}var An=y({closeSymbol:"closeSymbol"});var to=y({confirmSymbol:"confirmSymbol"}),eo=!1,Oe=class extends v{#e;#r;#n(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open"))r!=t&&(r.classList.remove("vtd-menu-entry-open"),r.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#i=[];#s=()=>{if(this.#e.open)for(let t of this.#i)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#a;#o;#l;#u={side:"bottom",setSide:t=>{this.#o.classList.toggle("vtd-menu-list-above",t==="top")}};#h=new WeakMap;#f=()=>{let t=[[this.#o,this.#u]];for(let r of this.#e.querySelectorAll(".vtd-menu-entry-open")){let o=this.#h.get(r);o&&t.push(o)}return t};#v(t){let r=t.querySelector(":scope > .vtd-menu-sublist");if(!r)return;let o=getComputedStyle(t).direction==="rtl"?"left":"right",n={side:o,setSide:i=>{r.classList.toggle("vtd-menu-sublist-flipped",i!==o)}};this.#h.set(t,[r,n]),K(r,n)}#g=()=>{this.#s(),this.#e.open?(K(this.#o,this.#u),this.#l??=Ae(this.#o,this.#f)):(this.#l?.(),this.#l=void 0)};#d=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#r.focus()};#p=t=>{this.#a.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#d())};#b=t=>{let r=document.activeElement,o=r?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),o){this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus();return}this.#d(!0);return}if(!this.#e.open)return;let n=this.#n();if(n.length==0)return;let i=n.indexOf(r);if(t.key=="ArrowDown")t.preventDefault(),n[(i+1)%n.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),n[(i-1+n.length)%n.length]?.focus();else if(t.key=="Home")t.preventDefault(),n[0]?.focus();else if(t.key=="End")t.preventDefault(),n[n.length-1]?.focus();else if(t.key=="ArrowRight"){let s=r?.closest(".vtd-menu-entry");r?.classList.contains("vtd-menu-item-parent")&&s&&(t.preventDefault(),this.#c(s),s.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&o&&(t.preventDefault(),this.#t(),o.querySelector(".vtd-menu-item-parent")?.focus())};#y(t){let r=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let o of r?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])o.setAttribute("aria-checked",o==t?"true":"false")}#c(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true"),this.#v(t)}mount(){document.addEventListener("click",this.#p)}unmount(){document.removeEventListener("click",this.#p),this.#l?.(),this.#l=void 0}#m(t){return t.map((r,o)=>{let n=r.dividerBefore&&o>0?" vtd-menu-entry-divided":"";if(r.children&&r.children.length>0){let m=a("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${r.disabled?" vtd-menu-item-disabled":""}`},r.label,a("span",{class:"vtd-menu-submenu-arrow","aria-hidden":"true"},x(b.chevronRight,1.1))),w=a("li",{class:`vtd-menu-entry vtd-menu-entry-parent${n}`,role:"none"},m,a("ul",{class:"vtd-menu-sublist",role:"menu"},this.#m(r.children)));return w.addEventListener("pointerenter",()=>{this.#c(w)}),m.addEventListener("click",g=>{g.preventDefault(),w.classList.contains("vtd-menu-entry-open")?this.#t():this.#c(w)}),w}let i=r.selected!==void 0,s=typeof r.selected=="function"?r.selected:void 0,c=s?s():r.selected===!0,d=a("a",{role:i?"menuitemradio":"menuitem","aria-checked":i?c?"true":"false":void 0,href:r.href?I.resolveHref(r.href):"#","aria-disabled":r.disabled,class:`vtd-menu-item${i?" vtd-menu-item-checkable":""}${r.disabled?" vtd-menu-item-disabled":""}`,onClick:m=>{if(r.disabled){m.preventDefault();return}r.href?r.spa&&(m.preventDefault(),I.changeLocation(r.href)):m.preventDefault(),i&&this.#y(d),r.onClick?.(),!r.keepOpen&&(this.#t(),this.#d())}},i?a("span",{class:"vtd-menu-check","aria-hidden":"true"},a(to.confirmSymbol,null)):null,r.label);s&&this.#i.push({row:d,read:s});let p=a("li",{class:`vtd-menu-entry${n}`,role:"none"},d);return p.addEventListener("pointerenter",()=>{this.#t(p.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),p})}constructor(t,r){super(t,r),this.#a=t,eo||(eo=!0,h(`
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

.vtd-menu-submenu-arrow{margin-inline-start:auto;display:flex;flex-shrink:0;color:var(--background-7);transition:color 0.15s ease-in-out;}
.vtd-menu-item-parent:hover .vtd-menu-submenu-arrow,
.vtd-menu-item-parent:focus-visible .vtd-menu-submenu-arrow,
.vtd-menu-entry-open > .vtd-menu-item-parent .vtd-menu-submenu-arrow{color:currentcolor;}
@media (prefers-reduced-motion: reduce){.vtd-menu-submenu-arrow{transition:none;}}
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
`,"vtd/Menu")),this.#r=a("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#o=a("ul",{class:"vtd-menu-list",role:"menu"},this.#m(t.items)),this.#e=a("details",{class:"vtd-menu",onToggle:this.#g,onKeyDown:this.#b},this.#r,this.#o),u(this.#e,t)}render(){return this.#e}};var no=y({collapseSymbol:"collapseSymbol"}),ro=!1,oo=3;function On(e,t){if(t===void 0||e.length<=Math.max(t,oo))return{head:e,collapsed:[],tail:[]};let o=Math.max(t,oo)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-o),tail:e.slice(e.length-o)}}var Ut=function(e,t){ro||(ro=!0,h(`
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
`,"vtd/Breadcrumbs"));let{head:r,collapsed:o,tail:n}=On(e.items,e.maxItems),i=e.separator||"/",s=p=>p.leading?a("span",{class:"vtd-breadcrumbs-crumb"},a("span",{class:"vtd-breadcrumbs-leading"},p.leading),p.label):p.label,c=(p,m)=>a("li",{class:"vtd-breadcrumbs-item","aria-current":p.to?void 0:"page"},p.to?a(P,{to:p.to,spa:e.spa},s(p)):a("span",null,s(p)),m?null:a("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)),d=o.length>0?a("li",{class:"vtd-breadcrumbs-item"},a(Oe,{ariaLabel:e.expandLabel,trigger:a("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||a(no.collapseSymbol,null)),items:o.map(p=>({label:s(p),href:p.to,spa:e.spa}))}),a("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},i)):null;return u(a("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},a("ol",{class:"vtd-breadcrumbs-list"},r.map((p,m)=>c(p,o.length==0&&m==r.length-1)),d,n.map((p,m)=>c(p,m==n.length-1)))),e)};var zn=y({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var io=!1,Ke=class extends v{#e;#r;#n;#t=()=>{let t=this.#n.sidebar?.get();!this.#r||!t||(this.#r.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#r.setAttribute("aria-expanded",t.open?"true":"false"),this.#r.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,r){if(super(t,r),this.#n=t,In(),t.sidebar){let o=t.sidebar;this.#r=a("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let n=o.get();o.set({...n,open:!n.open})}},a("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"},x(b.menu,1.25)))}this.#e=u(a("nav",{class:"vtd-navbar"},a("div",{class:"vtd-navbar-start"},this.#r??null,t.brand?a("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?a("div",{class:"vtd-navbar-leading"},t.leading):null),a("div",{class:"vtd-navbar-items"},r)),t)}mount(){this.#n.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function In(){io||(io=!0,h(`
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
.vtd-navbar-menu-icon{display:flex;}
`,"vtd/Navbar"))}var lo=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",zc=`.vtd-sidebar-collapsed:not(${lo})`,Ic=`.vtd-sidebar-collapsed:is(${lo})`;var Bn=y({closeSymbol:"closeSymbol"});var jn=y({closeSymbol:"closeSymbol"});var Nn=y({},{emptySymbol:function(){return a("span",{class:"vtd-empty-icon","aria-hidden":"true"},a(M.emptySymbol,null))}});var co=!1,_e=function(e,t){return co||(co=!0,h(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),u(a("div",{class:"vtd-statistic"},a("div",{class:"vtd-statistic-title"},e.title),a("div",{class:"vtd-statistic-value"},e.prefix&&a("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&a("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var Rn=y({closeSymbol:"closeSymbol"});var Hn=y({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Gt=y({},{columnsSymbol:function(){return x(b.columns,1.2)},emptySymbol:function(){return a("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},a(M.emptySymbol,null))},searchSymbol:function(){return null}});var ho=!1;function ze(){ho||(ho=!0,h(`
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
`,"vtd/Typography","base"))}function Ie(e,t,r){let o=[e];return t&&o.push(`vtd-text-${t}`),r?.strong&&o.push("vtd-text-strong"),r?.italic&&o.push("vtd-text-italic"),r?.underline&&o.push("vtd-text-underline"),r?.strike&&o.push("vtd-text-strike"),r?.numeric&&o.push("vtd-text-numeric"),o.join(" ")}var Ue=function(e,t){ze();let r=Ie(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return u(a("h1",{class:r},t),e);case 2:return u(a("h2",{class:r},t),e);case 3:return u(a("h3",{class:r},t),e);case 4:return u(a("h4",{class:r},t),e);case 5:return u(a("h5",{class:r},t),e);default:return u(a("h6",{class:r},t),e)}};var ce=function(e,t){ze();let r=Ie(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?u(a("code",{class:r},t),e):u(a("span",{class:r},t),e)};var Yt=function(e,t){return ze(),u(a("p",{class:Ie("vtd-paragraph",e.type)},t),e)};var Xt={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function ht(e,t="md"){return e===void 0?Xt[t]:Zn(e)?Xt[e]:e}function Zn(e){return Object.hasOwn(Xt,e)}function pt(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function po(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var mo=!1,j=function(e,t){mo||(mo=!0,h(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let r=e.direction??"row";return u(a("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:r,gap:ht(e.gap),alignItems:pt(e.align),justifyContent:po(e.justify),flexWrap:e.wrap??r==="row"?"wrap":"nowrap"}},t),e)};var fo=!1,Jt=function(e,t){fo||(fo=!0,h(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let r=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return u(a("div",{class:"vtd-grid",style:{gridTemplateColumns:r,gap:ht(e.gap),alignItems:pt(e.align)}},t),e)};var l=function(e){return e[e.Null=0]="Null",e[e.False=1]="False",e[e.True=2]="True",e[e.PosInt=3]="PosInt",e[e.Double=4]="Double",e[e.String=5]="String",e[e.Object=6]="Object",e[e.Array=7]="Array",e}({}),C=function(e){return e[e.Base=0]="Base",e[e.KeyTable=1]="KeyTable",e[e.KeyID=2]="KeyID",e}({});function N(e){let t=typeof e;if(t==="number")return Number.isInteger(e)&&e>=0&&Number.isSafeInteger(e)?l.PosInt:l.Double;if(t==="string")return l.String;if(Array.isArray(e))return l.Array;if(e===null)return l.Null;if(t==="object")return l.Object;if(e===!1)return l.False;if(e===!0)return l.True;throw new Error(`velojson: unsupported value type: ${typeof e}`)}var xe=4294967296,mt=new TextEncoder,Zt=new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0}),ft=64;var Qn=1024,Qt=[],er=class{buf;bufView;len=0;constructor(t=64){this.buf=new Uint8Array(t),this.bufView=new DataView(this.buf.buffer)}ensureCapacity(t){let r=this.len+t;if(r<=this.buf.length)return;let o=this.buf.length*2||64;for(;o<r;)o*=2;let n=new Uint8Array(o);n.set(this.buf.subarray(0,this.len)),this.buf=n,this.bufView=new DataView(this.buf.buffer)}writeByte(t){this.ensureCapacity(1),this.buf[this.len++]=t&255}writeBytes(t){this.ensureCapacity(t.length),this.buf.set(t,this.len),this.len+=t.length}writeVarint(t){if(!Number.isInteger(t)||t<0)throw new Error(`writeVarint: expected a non-negative integer, got ${t}`);if(!Number.isSafeInteger(t))throw new Error(`writeVarint: value ${t} exceeds safe integer range`);if(t<128){this.writeByte(t);return}if(this.ensureCapacity(10),t<xe){let r=t>>>0;do{let o=r&127;r>>>=7,r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}else{let r=t;do{let o=r%128;r=Math.floor(r/128),r!==0&&(o|=128),this.buf[this.len++]=o}while(r!==0)}}writeDouble(t){this.ensureCapacity(8),this.bufView.setFloat64(this.len,t,!0),this.len+=8}writeString(t){let r=mt.encode(t);this.writeVarint(r.length),this.writeBytes(r)}toUint8Array(){return this.buf.subarray(0,this.len)}get length(){return this.len}reset(){this.len=0}};function V(){let e=Qt.pop();return e!==void 0?(e.reset(),e):new er}function $(e){Qt.length<Qn&&Qt.push(e)}var vt=class{pos=0;data;view;limit;keyArray=[];encodingFormat=C.Base;constructor(t){this.data=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength),this.limit=t.length}readByte(){if(this.pos<this.limit)return this.data[this.pos++];throw new Error("velojson: unexpected end of buffer")}readBytes(t){if(this.pos+t<=this.limit){let r=this.data.subarray(this.pos,this.pos+t);return this.pos+=t,r}else throw new Error("velojson: unexpected end of buffer")}readVarint(){let t=this.readByte();if((t&128)===0)return t;let r=t&127,o=128,n,i=1;do if(n=this.readByte(),r+=(n&127)*o,o*=128,i++,i>10)throw new Error("velojson: varint too long (corrupt data)");while(n&128);return r}readDouble(){if(this.pos+8>this.limit)throw new Error("velojson: unexpected end of buffer");let t=this.view.getFloat64(this.pos,!0);return this.pos+=8,t}fieldKind="value";decodeString(t){let r=this.fieldKind;return r==="value"?Zt.decode(t):r==="skip"?"":t.slice()}readString(){let t=this.readVarint();return this.decodeString(this.readBytes(t))}decodeObjectValue(t){let r=this.readVarint();if(this.pos+r>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${r} ${this.limit}`);let o=this.limit;this.limit=this.pos+r;let n=Object.create(null);for(;this.limit>this.pos;)this.decodeObjectFieldValue(n,t);if(this.pos=this.limit,this.limit=o,t!==void 0&&!t.hasAllRequiredFields(n))throw new Error("velojson: missing required field");return n}decodeArrayValue(t,r){let o=this.readVarint(),n,i;if(o<xe?(i=(o&1)===1,n=o>>>1):(i=o%2===1,n=Math.floor(o/2)),this.pos+n>this.limit)throw new Error(`velojson: unexpected end of buffer ${this.pos} ${n} ${this.limit}`);let s=this.limit;this.limit=this.pos+n;let c;if(i){let d=this.readByte();if(d===l.Null||d===l.False||d===l.True)throw new Error("velojson: homogeneous array cannot use a zero-payload wire type");switch(d){case l.PosInt:for(c=[];this.limit>this.pos;)c.push(this.readVarint());break;case l.Double:if((this.limit-this.pos)%8!=0)throw new Error("velojson: unexpected end of buffer");for(c=[];this.limit>this.pos;)c.push(this.view.getFloat64(this.pos,!0)),this.pos+=8;break;case l.String:for(c=[];this.limit>this.pos;){let p=this.readVarint();c.push(this.decodeString(this.readBytes(p)))}break;case l.Object:{if(r!==void 0){if(t===void 0)throw new Error("velojson: missing keyID");let p=r.fieldMapper(t);if(p===void 0)throw new Error(`velojson: unknown field keyID ${t}`);for(c=[];this.limit>this.pos;)c.push(this.decodeObjectValue(p))}else for(c=[];this.limit>this.pos;)c.push(this.decodeObjectValue());break}case l.Array:if(r!==void 0)throw new Error("velojson: VBIN Array not allowed to contain nested arrays");for(c=[];this.limit>this.pos;)c.push(this.decodeArrayValue());break;default:throw new Error(`velojson: invalid wire type ${d}`)}}else for(c=[];this.limit>this.pos;)c.push(this.decodeArrayEntryValue(r));return this.pos=this.limit,this.limit=s,c}decodeKeyTableArrayValue(){let t=this.readVarint();if(this.pos+t>this.limit)throw new Error("velojson: unexpected end of buffer");let r=this.limit;this.limit=this.pos+t;let o=[];for(o.push("");this.limit>this.pos;){let n=this.readVarint();o.push(this.decodeString(this.readBytes(n)))}return this.pos=this.limit,this.limit=r,o}decodeRootValue(t){let r=this.readVarint(),o,n;if(r<xe?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),this.encodingFormat=n,t!==void 0&&n!==C.KeyID)throw new Error("velojson: VBIN decode requires a VBIN (KeyID format) message");if(n===C.Base)switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:return this.decodeObjectValue();case l.Array:return this.decodeArrayValue();default:throw new Error(`velojson: unknown wire type ${o}`)}else if(n===C.KeyTable){if(o!==l.Object&&o!==l.Array)throw new Error("velojson: KeyTable encoding format only valid for Object and Array root values");let i=this.pos,s=this.readVarint();return o===l.Object?(this.pos+=s,this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeObjectValue()):(this.pos+=Math.floor(s/2),this.keyArray=this.decodeKeyTableArrayValue(),this.pos=i,this.decodeArrayValue())}else if(n===C.KeyID){if(o!==l.Object)throw new Error("velojson: KeyIDs encoding format only valid for Object root values");return this.decodeObjectValue(t)}else throw new Error("velojson: unrecognized encoding format")}decodeObjectFieldValue(t,r){let o=this.readVarint(),n,i;o<xe?(n=o&7,i=o>>>3):(n=o%8,i=Math.floor(o/8));let s=null;if(i>0)if(this.encodingFormat===C.Base)s=Zt.decode(this.readBytes(i));else if(this.encodingFormat===C.KeyTable)if(i<this.keyArray.length)s=this.keyArray[i];else throw new Error("velojson: key index out of bounds");else if(this.encodingFormat===C.KeyID)if(r===void 0)s=String(i);else{let c=this.fieldKind;switch(n>=l.String&&c!=="skip"&&(this.fieldKind=r.fieldKind(i)),n){case l.Null:r.assignValue(t,i,null);break;case l.False:r.assignValue(t,i,!1);break;case l.True:r.assignValue(t,i,!0);break;case l.PosInt:r.assignValue(t,i,this.readVarint());break;case l.Double:r.assignValue(t,i,this.readDouble());break;case l.String:r.assignValue(t,i,this.readString());break;case l.Object:{let d=r.fieldMapper(i);if(d===void 0)throw new Error(`velojson: unknown field keyID ${i}`);r.assignValue(t,i,this.decodeObjectValue(d));break}case l.Array:r.assignValue(t,i,this.decodeArrayValue(i,r));break;default:throw new Error(`velojson: unknown wire type ${n}`)}this.fieldKind=c;return}else throw new Error("velojson: encoding format not recognized");else if(this.encodingFormat===C.Base)s="";else throw new Error("velojson: object field is missing a required key");switch(n){case l.Null:t[s]=null;break;case l.False:t[s]=!1;break;case l.True:t[s]=!0;break;case l.PosInt:t[s]=this.readVarint();break;case l.Double:t[s]=this.readDouble();break;case l.String:t[s]=this.readString();break;case l.Object:t[s]=this.decodeObjectValue();break;case l.Array:t[s]=this.decodeArrayValue();break;default:throw new Error(`velojson: unknown wire type ${n}`)}}decodeArrayEntryValue(t){let r=this.readVarint(),o,n;if(r<xe?(o=r&7,n=r>>>3):(o=r%8,n=Math.floor(r/8)),n>0)throw new Error("velojson: array entry must not have a key");switch(o){case l.Null:return null;case l.False:return!1;case l.True:return!0;case l.PosInt:return this.readVarint();case l.Double:return this.readDouble();case l.String:return this.readString();case l.Object:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Object");return this.decodeObjectValue()}case l.Array:{if(t!==void 0)throw new Error("velojson: VBIN Non-homogenous Array not allowed to contain Array");return this.decodeArrayValue()}default:throw new Error(`velojson: unknown wire type ${o}`)}}};var ei=4096,gt=new Map,Q=null,Ve=null;function vo(e){e!==Ve&&(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e===Q&&(Q=e.next),e.prev=Ve,e.next=null,Ve&&(Ve.next=e),Ve=e,Q===null&&(Q=e))}function go(e){let t=gt.get(e);if(t!==void 0)return vo(t),t.bytes;let r=mt.encode(e);if(gt.size>=ei&&Q!==null){let n=Q;gt.delete(n.key),Q=n.next,Q?Q.prev=null:Ve=null,n.prev=null,n.next=null}let o={key:e,bytes:r,prev:null,next:null};return gt.set(e,o),vo(o),r}function bo(e,t){let r=!1,o=null;if(t.length>=ft){let s=0,c=t[s],d=N(c===void 0?null:c);if(d===l.Null||d===l.False||d===l.True)o=null,r=!1;else{for(o=d,(d===l.PosInt||d===l.Double)&&(r=!0),s+=1;s<t.length;s++){let p=t[s],m=N(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True){o=null,r=!1;break}else if(m!==d)if(o=null,r){if(m!==l.PosInt&&m!==l.Double){r=!1;break}}else break}if(o==null&&r==!0)for(;s<t.length;s++){let p=t[s],m=N(p===void 0?null:p);if(m!==l.PosInt&&m!==l.Double){r=!1;break}}}}let n=V();if(o!==null)switch(n.writeByte(o),o){case l.PosInt:for(let s=0;s<t.length;s++)n.writeVarint(t[s]);break;case l.Double:for(let s=0;s<t.length;s++)n.writeDouble(t[s]);break;case l.String:for(let s=0;s<t.length;s++)n.writeString(t[s]);break;case l.Object:{for(let s=0;s<t.length;s++){let c=V(),d=t[s];for(let m of Object.keys(d))We(c,m,d[m],!1);let p=c.toUint8Array();n.writeVarint(p.length),n.writeBytes(p),$(c)}break}case l.Array:for(let s=0;s<t.length;s++)bo(n,t[s]);break}else if(r)for(let s=0;s<t.length;s++){let c=t[s];Number.isInteger(c)&&c>=0&&Number.isSafeInteger(c)?(n.writeByte(l.PosInt),n.writeVarint(c)):(n.writeByte(l.Double),n.writeDouble(c))}else for(let s of t)We(n,null,s,!0);let i=n.toUint8Array();e.writeVarint(i.length*2+(o!==null?1:0)),e.writeBytes(i),$(n)}function We(e,t,r,o){if(r===void 0&&o===!1)return;let n=N(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(n);else{let i=go(t);e.writeVarint(i.length*8+n),e.writeBytes(i)}switch(n){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let i=V(),s=r;for(let d of Object.keys(s))We(i,d,s[d],!1);let c=i.toUint8Array();e.writeVarint(c.length),e.writeBytes(c),$(i);break}case l.Array:bo(e,r);break}}function bt(e,t,r,o){let n=!1,i=null;if(t.length>=ft){let d=0,p=t[d],m=N(p===void 0?null:p);if(m===l.Null||m===l.False||m===l.True)i=null,n=!1;else{for(i=m,(m===l.PosInt||m===l.Double)&&(n=!0),d+=1;d<t.length;d++){let w=t[d],g=N(w===void 0?null:w);if(g===l.Null||g===l.False||g===l.True){i=null,n=!1;break}else if(g!==m)if(i=null,n){if(g!==l.PosInt&&g!==l.Double){n=!1;break}}else break}if(i==null&&n==!0)for(;d<t.length;d++){let w=t[d],g=N(w===void 0?null:w);if(g!==l.PosInt&&g!==l.Double){n=!1;break}}}}let s=V();if(i!==null)switch(s.writeByte(i),i){case l.PosInt:for(let d=0;d<t.length;d++)s.writeVarint(t[d]);break;case l.Double:for(let d=0;d<t.length;d++)s.writeDouble(t[d]);break;case l.String:for(let d=0;d<t.length;d++)s.writeString(t[d]);break;case l.Object:{for(let d=0;d<t.length;d++){let p=V(),m=t[d];for(let g of Object.keys(m))qe(p,g,m[g],!1,r,o);let w=p.toUint8Array();s.writeVarint(w.length),s.writeBytes(w),$(p)}break}case l.Array:for(let d=0;d<t.length;d++)bt(s,t[d],r,o);break}else if(n)for(let d=0;d<t.length;d++){let p=t[d];Number.isInteger(p)&&p>=0&&Number.isSafeInteger(p)?(s.writeByte(l.PosInt),s.writeVarint(p)):(s.writeByte(l.Double),s.writeDouble(p))}else for(let d of t)qe(s,null,d,!0,r,o);let c=s.toUint8Array();e.writeVarint(c.length*2+(i!==null?1:0)),e.writeBytes(c),$(s)}function qe(e,t,r,o,n,i){if(r===void 0&&o===!1)return;let s=N(r===void 0&&o===!0?null:r);if(t===null)e.writeVarint(s);else{let c=i.get(t);c!==void 0?e.writeVarint(c*8+s):(n.push(t),i.set(t,n.length),e.writeVarint(n.length*8+s))}switch(s){case l.Null:case l.False:case l.True:break;case l.PosInt:e.writeVarint(r);break;case l.Double:e.writeDouble(r);break;case l.String:e.writeString(r);break;case l.Object:{let c=V(),d=r;for(let m of Object.keys(d))qe(c,m,d[m],!1,n,i);let p=c.toUint8Array();e.writeVarint(p.length),e.writeBytes(p),$(c);break}case l.Array:bt(e,r,n,i);break}}function yo(e,t){let r=V();for(let n=0;n<t.length;n++){let i=t[n];if(i==null)throw new Error("velojson: KeyTable cannot have undefined or null values");r.writeString(i)}let o=r.toUint8Array();e.writeVarint(o.length),e.writeBytes(o),$(r)}function xo(e,t){if(e===void 0)return new Uint8Array;let r;t===void 0?e!==null&&(typeof e=="object"||Array.isArray(e))?r=C.KeyTable:r=C.Base:r=t;let o=V();if(r===C.Base)We(o,null,e,!1);else if(r===C.KeyTable){let i=N(e);o.writeVarint(r*8+i);let s=new Map,c=[];switch(i){case l.Object:{let d=V(),p=e;for(let w of Object.keys(p))qe(d,w,p[w],!1,c,s);let m=d.toUint8Array();o.writeVarint(m.length),o.writeBytes(m),$(d);break}case l.Array:bt(o,e,c,s);break;default:throw new Error("velojson: KeyTable encoding format only supported for root Object or Array types")}yo(o,c)}else throw new Error("velojson: encoding format not recognized");let n=o.toUint8Array().slice();return $(o),n}function wo(e){return e.length==0?void 0:new vt(e).decodeRootValue()}var yt={encode:xo,decode:wo};var ko={velochart:"/docs/velochart/",velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var ri=e=>f("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),oi=()=>L(Ke,{style:{borderBottom:"1px solid var(--background-4)"},brand:L(P,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[f(ri,{size:"1.75em"}),"The Velocity Project"]}),children:[f(P,{to:ko.velotype,children:"Docs"}),f(P,{to:"https://github.com/Velotype",children:"GitHub"}),f(P,{to:"https://jsr.io/@velotype",children:"JSR"}),f(P,{to:"https://argoday.medium.com/",children:"Articles"})]}),ni=()=>L(ce,{type:"muted",children:["All projects live under the ",f(P,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",f(P,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",f(P,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function So(e,t="60rem"){Rt.injectStyles(),Ce(L("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[oi(),f("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:L(j,{direction:"column",gap:"lg",children:[e,ni()]})})]}),document.getElementById("app"))}var Eo='{"name": "Some name", "age": 20, "address": null}';function Mo(e){let t=e[0];return t===void 0||t>23?"unknown":["VSON Base","VSON Key Table","VBIN"][Math.floor(t/8)]}var ii=e=>Array.from(e,t=>t.toString(16).padStart(2,"0")).join(" "),si=e=>btoa(Array.from(e,t=>String.fromCharCode(t)).join("")),tr=e=>e instanceof Error?e.message:String(e);function Co(e,t){if(e.trim()=="")return{kind:"empty"};let r;try{r=JSON.parse(e)}catch(o){return{kind:"error",message:`Not valid JSON: ${tr(o)}`}}try{let o=t=="auto"?yt.encode(r):yt.encode(r,t=="base"?C.Base:C.KeyTable);return{kind:"bytes",hex:ii(o),base64:si(o),jsonBytes:new TextEncoder().encode(JSON.stringify(r)).length,vsonBytes:o.length,format:Mo(o)}}catch(o){return{kind:"error",message:tr(o)}}}function ai(e){let t=e.replace(/0x/gi,"").replace(/[\s:,]/g,"");if(/^[0-9a-f]+$/i.test(t)&&t.length%2==0)return{bytes:Uint8Array.from(t.match(/../g)??[],r=>parseInt(r,16)),how:"hex"};try{return{bytes:Uint8Array.from(atob(e.replace(/\s/g,"")),r=>r.charCodeAt(0)),how:"base64"}}catch{return"These bytes are not hex (an even number of digits) or base64."}}function li(e){if(e.trim()=="")return{kind:"empty"};let t=ai(e);if(typeof t=="string")return{kind:"error",message:t};try{let r=yt.decode(t.bytes);return{kind:"json",text:r===void 0?"(no bytes, which decode to undefined)":JSON.stringify(r,null,2),format:Mo(t.bytes),bytes:t.bytes.length,how:t.how}}catch(r){return{kind:"error",message:`Could not decode these bytes: ${tr(r)}`}}}var To=e=>f("div",{style:{fontFamily:"monospace",whiteSpace:"pre-wrap",overflowWrap:"anywhere",padding:"0.75em 1em",border:"1px solid var(--background-4)",borderRadius:"0.5rem",backgroundColor:"var(--background-2)"},children:e.text}),Do=e=>f("div",{role:"alert",style:{color:"var(--accent-7)"},children:e}),di=e=>{if(e.kind=="empty")return f(ce,{type:"muted",children:"Type some JSON to see its bytes."});if(e.kind=="error")return Do(e.message);let t=Math.round((1-e.vsonBytes/e.jsonBytes)*100);return L(j,{direction:"column",children:[L(j,{gap:"lg",children:[f(_e,{title:"JSON text",value:String(e.jsonBytes),suffix:" bytes"}),f(_e,{title:e.format,value:String(e.vsonBytes),suffix:" bytes"}),f(_e,{title:"Difference",value:t>=0?`${t}% smaller`:`${-t}% larger`})]}),f(Ue,{level:4,children:"Hex"}),f(To,{text:e.hex}),f(Ue,{level:4,children:"Base64"}),f(To,{text:e.base64})]})},ci=e=>e.kind=="empty"?f(ce,{type:"muted",children:"Paste bytes as hex or base64 to see their JSON."}):e.kind=="error"?Do(e.message):L(j,{direction:"column",children:[f(ce,{type:"muted",children:`${e.format}, ${e.bytes} bytes read as ${e.how}`}),e.format=="VBIN"&&f(ce,{type:"muted",children:"VBIN has no key names on the wire, so the keys show as their numeric key IDs."}),f(_t,{code:e.text,language:"plain"})]}),Lo={width:"100%",fontFamily:"monospace",marginInlineStart:"0"},rr=class extends v{format="auto";encoded=new F(Co(Eo,"auto"),di);decoded=new F({kind:"empty"},ci);jsonInput=f(ct,{rows:8,value:Eo,resize:"vertical",style:Lo,onInput:()=>this.runEncode()});bytesInput=f(ct,{rows:8,placeholder:"e.g. 68 03 ...",resize:"vertical",style:Lo,onInput:()=>this.runDecode()});runEncode(){this.encoded.set(Co(this.jsonInput.value,this.format))}runDecode(){this.decoded.set(li(this.bytesInput.value))}useEncodedBytes(){let t=this.encoded.get();t.kind=="bytes"&&(this.bytesInput.value=t.hex,this.runDecode())}mount(){this.useEncodedBytes()}render(){return L(j,{direction:"column",gap:"lg",children:[f(Ut,{items:[{label:"The Velocity Project",to:"/"},{label:"velojson (VSON)",to:"/projects/velojson/"},{label:"Playground"}]}),L(j,{direction:"column",children:[f(Ue,{level:1,children:"velojson playground"}),L(Yt,{children:["Encode JSON to VSON bytes and decode bytes back to JSON, in your browser. Nothing is sent anywhere. It runs ",f("code",{children:"@velotype/velojson"}),", the version that supports every format. VBIN needs key IDs agreed ahead of time, so it only decodes here, with numeric keys."]})]}),L(Jt,{minColumnWidth:"26em",children:[f(ut,{header:"JSON to bytes",children:L(j,{direction:"column",children:[this.jsonInput,L(j,{align:"center",children:[f("label",{for:"format",children:"Format"}),f(Fe,{id:"format",value:"auto",options:[{value:"auto",label:"Automatic (Key Table for an object or Array)"},{value:"base",label:"VSON Base"},{value:"keytable",label:"VSON Key Table"}],onChange:t=>{this.format=t.currentTarget.value,this.runEncode()}})]}),this.encoded,f("div",{children:f(z,{type:"secondary",onClick:()=>this.useEncodedBytes(),children:"Decode these bytes"})})]})}),f(ut,{header:"Bytes to JSON",children:L(j,{direction:"column",children:[this.bytesInput,this.decoded]})})]})]})}};So(f(rr,{}));
