var ce=console.warn.bind(console,"vt:"),H=console.error.bind(console,"vt:"),fr=wt("span","display:contents;"),gt=wt("div","display:contents;"),Ut=wt("div","display:none;");var Ue={value:void 0,writable:!1,configurable:!1,enumerable:!1},bt=new Map,yt=new Map,Xt=/[A-Z]/g,R=new Map,$=Symbol(),xt=Symbol(),Xe=Symbol(),B=new Map,pe=new Map,Je=new Map,C={k:1,r:0,p:void 0,s:void 0},kt={version:"0.3.3",domKeyProperty:$,domReferences:R,listenersF:B,listenersR:pe,styleSectionMounted:Je,setEventTracer:()=>{}};function wt(e,t){let o=document.createElement(e);return o.style.cssText=t,o}function q(e){return e instanceof HTMLElement}function Ze(e){return e instanceof SVGSVGElement}function Qe(e){return e instanceof MathMLElement}function et(e){return e instanceof Text}function be(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function Jt(e,t,o){Ue.value=o,Object.defineProperty(e,t,Ue),Ue.value=void 0}function Z(){return Ut.cloneNode()}function Zt(e){Promise.resolve().then(e)}function St(e,t,o){let r=t.nextSibling;r===o?e.insertBefore(o,t):(e.insertBefore(t,o),e.insertBefore(o,r))}function Q(e){typeof reportError=="function"?reportError(e):H(e)}var ye=class{constructor(t,o,r){this.emittingObject=t,this.event=o,this.data=r}};function rt(e,t,o){if(typeof e.vtKey!="number")throw new TypeError("vt: registerEventListener() needs an object with a vtKey, a Component has none until its constructor returns (register listeners in mount())");he&&(o=Ct(t,o)),Qt(B,t,e.vtKey,o),Qt(pe,e.vtKey,t,o)}function Qt(e,t,o,r){let n=e.get(t);n||(n=new Map,e.set(t,n));let s=n.get(o);s?s.push(r):n.set(o,[r])}function $e(e){let t=pe.get(e.vtKey);t&&t.forEach((o,r)=>{eo(B,r,e.vtKey),eo(pe,e.vtKey,r)})}function eo(e,t,o,r){let n=e.get(t);if(n){let s=n.get(o);if(s){if(C.r++,r){let l=s.indexOf(r);if(l<0&&he&&(l=s.findIndex(p=>p.o===r)),l<0){ce("Listener not registered",t,o);return}s=s.slice(),s.splice(l,1),n.set(o,s)}(!r||s.length<=0)&&(n.delete(o),n.size<=0&&e.delete(t))}else ce("No listeners to remove",t,o)}else ce("No listeners to remove",t,o)}function to(e,t,o){let r=B.get(e),n=r&&r.get(t);return!!n&&(n.includes(o)||!!he&&n.some(s=>s.o===o))}function nt(e,t,o){let r=B.get(e);r?r.forEach((n,s)=>{if(!o||o.vtKey!=s){let l=C.r;n.forEach(p=>{if(l!==C.r){let h=r.get(s);if(h!==n&&!(h&&h.includes(p)))return}try{p(t)}catch(h){Q(h)}})}}):ce("No listeners for event",e,t)}var he,ot;function Ct(e,t){let o=r=>{if(he&&ot!==r){ot=r,queueMicrotask(()=>{ot=void 0});try{he(e,r)}catch{}}t(r)};return o.o=t,o}function tt(e,t){e.forEach((o,r)=>{o.forEach((n,s)=>{o.set(s,n.map(l=>t(r,s,l)))})})}function oo(e){let t=!!he;if(he=e,ot=void 0,e&&!t)tt(B,(o,r,n)=>Ct(o,n)),tt(pe,(o,r,n)=>Ct(r,n));else if(!e&&t){let o=(r,n,s)=>s.o??s;tt(B,o),tt(pe,o)}}function gr(){kt.setEventTracer=oo;let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let t=new Map,o=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:t,register(r){return t.set(o,r),o++},unregister(r){t.delete(r)}}}e.__VELOTYPE_DEVTOOLS_HOOK__.register(kt)}gr();function ee(e,t){e[$]=t}function ue(e){return R.get(e)}function me(e,t){let o=C.k++;return t&&ee(t,o),R.set(o,e),o}function xe(e){R.delete(e)}function ve(e){R.delete(e.vtKey),$e(e)}function G(e){for(let t=e;t<C.k;t++){let o=R.get(t);o&&(te(o)?($e(o.c),R.delete(t),Ie(o.c)):o.vtKey===t||!o.uK?(ve(o),R.delete(t)):o.uK(t))}}function Et(e){return e instanceof Re}var Re=class{constructor(t){this.w=t,this.k=me(this)}mount(){this.w.forEach(t=>t.mount())}unmount(){this.w.forEach(t=>{t.unmount(),ve(t)})}};function a(e,t){if(t.id&&Lt(e,"id",t.id),t.class){let o=e.getAttribute("class");Lt(e,"class",o?o+" "+t.class:t.class)}return t.style&&fe(e,{style:t.style}),e}function no(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return Tt(e,t);let o=Object.getPrototypeOf(e),r=o===C.p?C.s:yt.get(o);r||(r=new Map,yt.set(o,r)),C.p=o,C.s=r;let n=r.get(t);return n===void 0&&(n=Tt(o,t),r.set(t,n)),n}function Tt(e,t){let o=e;for(;o;){let r=Object.getOwnPropertyDescriptor(o,t);if(r&&(r.set||r.writable))return!0;o=Object.getPrototypeOf(o)}return!1}function Lt(e,t,o){no(e,t)?e[t]=o:e.setAttribute(t,o.toString())}function br(e,t,o){no(e,t)?e[t]=o:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(o)):o&&e.setAttribute(t,"")}function yr(e){if(e.startsWith("--"))return e;let t=e.replace(Xt,o=>"-"+o.toLowerCase());return t.startsWith("webkit-")?"-"+t:t}function fe(e,t){if(!t)return;let o=t.type=="range",r=Object.keys(t);for(let n=0;n<r.length;n++){let s=r[n];(!o||s!="value")&&ro(e,s,t[s])}o&&ro(e,"value",t.value)}function ro(e,t,o){if(t.startsWith("on")&&t.length>4){if(o){let r,n=o;typeof o!="function"&&o.handler&&(n=o.handler,r=o.options);let s=t[2]=="-"?t.slice(3):t.slice(2).toLowerCase();e.addEventListener(s,n,r)}}else if(t=="style"&&o instanceof Object)for(let r of Object.keys(o)){let n=o[r]==null?"":o[r],s=typeof n=="number"?n.toString():n,l=e.style;if(s.endsWith("!important"))l.setProperty(yr(r),s.slice(0,-10),"important");else{let p=bt.get(r);p===void 0&&(p=Tt(l,r),bt.set(r,p)),p?l[r]=s:l.setProperty(r,s)}}else if(typeof o=="boolean")br(e,t,o);else if(typeof o!="function")if(t=="vtwith"){let r=e[$];if(r)H("vtwith on a keyed element",r);else{let n=new Re(o);ee(e,n.k)}}else o!=null&&Lt(e,t,o)}function Y(e,t,...o){if(typeof e=="string"){let n=document.createElement(e);return st(e=="template"?n.content:n,o),fe(n,t),n}let r=t||{};if(ge(e.prototype)){let n=C.k;try{return new Pe(new e(r,o),r,o).e}catch(s){throw G(n),s}}else if(typeof e=="function"){let n=C.k,s;try{s=e(r,o)}catch(l){throw G(n),l}return be(s)||Array.isArray(s)?s:oe(s)}return H("Invalid tag",e,r,o),Z()}function it(e,...t){return t}function at(e){if(be(e)&&e!==!1||et(e))return Y("span",null,e);if(e)return re(e)}function xr(e){if(be(e)&&e!==!1)return document.createTextNode(e.toString());if(q(e))return e;if(et(e))return e;if(e)return re(e)}function re(e){if(q(e)||Ze(e)||Qe(e))return e;if(ke(e))return e.rD();if(ge(e)){let t=ue(e.vtKey);if(t&&te(t))return t.e}return H("Invalid child"),Z()}function st(e,t){if(Array.isArray(t))for(let o=0;o<t.length;o++)st(e,t[o]);else{let o=xr(t);o&&e.appendChild(o)}}function oe(e){if(e==null||e===!1||e==="")return Z();if(be(e)||ge(e)||ke(e)||et(e)||Array.isArray(e)||e[$]!==void 0){let t=gt.cloneNode();return st(t,e),t}return e}function ke(e){return e instanceof ie}function io(e){try{e()}catch(t){Q(t)}}var ne=class{constructor(t,o){this.result=t,this.updateRefs=o}};function so(e,t,o){je(e.e,t),e.e=t,e.uR=o}var ie=class{#e;#o;#n;es=new Map;vtKey=me(this);#t=`vt-ro-${this.vtKey}`;#i;#r;#s=!1;#a(){nt(this.#t,new ye(this,"onChange"))}constructor(t,o,r){this.#e=t,this.#o=o||Z,this.#n=r}registerOnChangeListener(t,o){let r=o&&o.hasVtKey||this,n=this.#t,s=o&&o.eventDispatchDelay||0,l=0,p=s>0?h=>{l||(l=setTimeout(()=>{l=0,to(n,r.vtKey,p)&&t(h)},s))}:t;return rt(r,n,p),o&&o.triggerOnRegistration&&Zt(()=>{this.#a()}),this}registerOnMount(t,o){return t&&(this.#i||(this.#i=[]),this.#i.push(t)),o&&(this.#r||(this.#r=[]),this.#r.push(o)),this}mount(){this.#s||(this.#s=!0,this.#i&&this.#i.forEach(io))}unmount(){this.#s&&(this.#s=!1,this.#r&&this.#r.forEach(io))}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!==t&&this.rerenderElements(t)}#l(t){let o=this.#e,r=[],n=[];this.es.forEach((s,l)=>{if(s.hU&&s.uR)n.push(s);else{let p=s.rF(t,this),h=p instanceof ne,m=oe(at(h?p.result:p));ee(m,l),r.push({i:s,e:m,r:h?p.updateRefs:void 0})}}),n.forEach(s=>{s.hU(s.e,s.uR,o,t)}),r.forEach(s=>{so(s.i,s.e,s.r)})}rerenderElements(t){let o=C.k;try{this.es.size>1?this.#l(t):this.es.forEach((r,n)=>{if(r.hU&&r.uR)r.hU(r.e,r.uR,this.#e,t);else{let s=r.rF(t,this),l=s instanceof ne,p=oe(at(l?s.result:s));ee(p,n),so(r,p,l?s.updateRefs:void 0)}})}catch(r){throw G(o),r}this.#e=t,B.has(this.#t)&&this.#a()}uK(t){let o=this.es.get(t);if(o){let r=o.e[$];return t===r?(this.es.delete(t),xe(t),!0):(H("Invalid state",t,r,o),!1)}else return H("Invalid unmountKey",t),!1}rD(){return this.render(this.#o,this.#n)}render(t,o){let r=t(this.#e,this),n=r instanceof ne,s=oe(at(n?r.result:r)),l=me(this,s);return this.es.set(l,{e:s,rF:t,hU:o,uR:n?r.updateRefs:r}),s}getElements(){return Array.from(this.es.values(),t=>t.e)}sw(t){this.es.forEach(o=>{let r=o.e,n=r.parentNode;n&&t.es.forEach(s=>{s.e.parentNode===n&&St(n,r,s.e)})})}ei(t){let o=null;return this.es.forEach(r=>{r.e.parentNode===t&&(o=r.e)}),o}removeAll(){this.es.forEach((t,o)=>{lt(t.e),xe(o)}),this.es.clear()}};function je(e,t,o){let r=document.activeElement==e&&document.hasFocus();return o?uo(e):q(e)&&At(e),e.replaceWith(t),o?dt(t):q(t)&&Ot(t),r&&t.focus(),t}function Mt(e,t){e.appendChild(t),dt(t)}function ao(e,t){e.prepend(t),dt(t)}function lo(e,t){At(e),e.replaceChildren(...t),Ot(e)}function lt(e){uo(e),e.remove()}function Dt(e,t,o){if(q(e)||Ze(e)||Qe(e)){let r=e.firstElementChild;for(;r;){Dt(r,t,o);let n=r[$];if(n){let s=ue(n);s?t(s,n):o&&co(r)}r=r.nextElementSibling}}}function co(e){ce("Inserted an element of a released Component or RenderObject, it does not mount again (create a new one instead)",e)}function po(e,t){if(te(e)){if(e.m)return;e.m=!0;try{e.c.mount()}catch(o){Q(o)}Object.values(e.c).forEach(o=>{ke(o)&&o.mount()})}else Et(e),e.mount()}function dt(e){if(!e.isConnected)return;q(e)&&Ot(e);let t=e[$];if(t){let o=ue(t);o?po(o,t):co(e)}}function Ot(e){e.isConnected&&Dt(e,po,!0)}function ho(e,t){if(te(e)){if($e(e.c),e.m){e.m=!1;try{e.c.unmount()}catch(o){Q(o)}}Object.values(e.c).forEach(o=>{ke(o)?(o.unmount(),ve(o)):ge(o)&&(ve(o),Ie(o))}),xe(e.k),Ie(e.c)}else Et(e)?(e.unmount(),xe(e.k)):e.uK(t)}function At(e){Dt(e,ho)}function uo(e){q(e)&&At(e);let t=e[$];if(t){let o=ue(t);o&&ho(o,t)}}function we(e,t){return t===null?null:(t.replaceWith(e),dt(e),e)}function te(e){return e instanceof Pe}function ge(e){return e instanceof v}function kr(e){return e[xt]}function Se(e,t){let o=kr(e),r=o.b||(o.b={});return r[t]||(r[t]=o[t].bind(o))}var v=class{constructor(t,o){this.attrs=t,this.children=o}mount(){}unmount(){}get refresh(){return Se(this,"f")}get unmountSignal(){let t=this[Xe];return t||(t=new AbortController,this[Xe]=t,this.vtKey!==void 0&&!R.has(this.vtKey)&&t.abort()),t.signal}get replaceChild(){return Se(this,"q")}get appendToChild(){return Se(this,"w")}get prependToChild(){return Se(this,"t")}get replaceChildrenOfChild(){return Se(this,"y")}get removeChild(){return Se(this,"u")}},Pe=class{constructor(t,o,r){this.c=t,this.a=o,this.h=r,this.k=me(this),Jt(t,"vtKey",this.k),t[xt]=this,this.e=mo(this,this.a,this.h)}m=!1;f(){let t=C.k,o;try{o=mo(this,this.a,this.h)}catch(r){throw G(t),r}this.e=je(this.e,o)}q(t,o){return this.e.contains(t)?je(t,re(o),!0):t}w(t,o){return this.e.contains(t)?(Mt(t,re(o)),!0):!1}t(t,o){return this.e.contains(t)?(ao(t,re(o)),!0):!1}y(t,o){return this.e.contains(t)?(lo(t,o.map(r=>re(r))),!0):!1}u(t){return this.e.contains(t)?(lt(t),!0):!1}};function mo(e,t,o){let r=oe(e.c.render(t,o));return ee(r,e.k),r}function Ie(e){let t=e[Xe];t&&t.abort()}function U(e,t,o=!1){let r=Je.get(t),n=document.adoptedStyleSheets;if(r){if(!o)return;let l=n.indexOf(r.sheet);l>=0&&n.splice(l,1)}let s=new CSSStyleSheet;s.replace(e),n.push(s),Je.set(t,{sheet:s,text:e,key:t})}function c(e,t,o){let r;return"children"in t&&({children:r,...t}=t),o!==void 0&&(t.key=o),Y(e,t,r)}var u=c,vo=it;function i(e,t,...o){return Y(e,t,...o)}var Pr="@layer velodesign.reset,velodesign.theme,velodesign.base,velodesign.component,velodesign.composite;",fo=!1;function d(e,t,o="component",r=!1){fo||(fo=!0,U(Pr,"vtd/LayerOrder"),jr()),U(`@layer velodesign.${o}{${e}}`,t,r)}function jr(){U(`@layer velodesign.base{
/*
 * Everything this package renders carries a vtd- class, and nothing else does, so this reaches
 * every control without each one opting in - which is the point: a control added tomorrow gets the
 * ring without anyone remembering to ask for it.
 */
[class^="vtd-"]:focus-visible,[class*=" vtd-"]:focus-visible{
outline:2px solid var(--primary-7);
outline-offset:2px;
}
}`,"vtd/FocusRing")}var go=console.log,bo=console.error,S=function(e,t,o){e.setAttribute(t,o)},Ce="http://www.w3.org/2000/svg",se=function(e){return document.createElementNS(Ce,e)};var yo=!1;function Hr(){let e=se("svg");S(e,"xmlns",Ce),S(e,"viewBox","0 0 24 24"),S(e,"class","vtd-spinner-ring"),S(e,"aria-hidden","true");let t=se("circle");for(let[r,n]of[["cx","12"],["cy","12"],["r","9"],["fill","none"],["stroke","currentcolor"],["stroke-width","2.4"],["stroke-opacity","0.18"]])S(t,r,n);let o=se("path");for(let[r,n]of[["d","M12 3A9 9 0 0 1 21 12"],["fill","none"],["stroke","currentcolor"],["stroke-width","2.4"],["stroke-linecap","round"]])S(o,r,n);return e.append(t,o),e}var pt=function(e,t){yo||(yo=!0,d(`
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
`,"vtd/Spinner"));let o=e.size||"1em";if(e.variant=="dots")return a(i("span",{class:"vtd-spinner vtd-spinner-dots",role:"status","aria-label":e.label,style:{width:`calc(${o} * 2)`,height:o}},i("span",{class:"vtd-spinner-dot"}),i("span",{class:"vtd-spinner-dot"}),i("span",{class:"vtd-spinner-dot"})),e);let r=i("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:o,height:o}});return r.appendChild(Hr()),a(r,e)};var w=class{w;h;d;strokeWidth;filled;layers;constructor(t,o,r,n,s,l){this.w=t,this.h=o,this.d=r,this.strokeWidth=n,this.filled=s,this.layers=l}};function xo(e,t,o){let r=se("path");return t?(S(r,"fill",o?"currentcolor":"none"),S(r,"stroke","currentcolor"),S(r,"stroke-width",String(t)),S(r,"stroke-linecap","round"),S(r,"stroke-linejoin","round")):S(r,"fill","currentcolor"),S(r,"d",e),r}var ko=!1;function wo(){ko||(ko=!0,d(".vtd-icon{height:calc(1em * var(--vtd-icon-scale,1));margin-block:calc((1 - var(--vtd-icon-scale,1)) * 0.5em);width:auto;vertical-align:middle;flex-shrink:0;}","vtd/Icon","base"))}function So(e,t){wo();let o=se("svg");if(S(o,"xmlns",Ce),S(o,"class","vtd-icon"),S(o,"viewBox",`0 0 ${e.w} ${e.h}`),t?(S(o,"role","img"),S(o,"aria-label",t)):S(o,"aria-hidden","true"),o.appendChild(xo(e.d,e.strokeWidth,e.filled)),e.layers)for(let r of e.layers)o.appendChild(xo(r.d,r.strokeWidth,r.filled));return o}function x(e,t){let o=So(e);return t!==1&&S(o,"style",`--vtd-icon-scale:${t}`),o}var b={cross:new w(24,24,"M7.5 7.5l9 9M16.5 7.5l-9 9",2.6),crossLight:new w(24,24,"M7 7l10 10M17 7L7 17",1.6),tick:new w(24,24,"M5 12.5l4.5 4.5L19 7.5",2.8),tickCentred:new w(24,24,"M5 11.44l4.5 4.5L19 6.44",3),dash:new w(24,24,"M6.5 12h11",3),chevronDown:new w(24,24,"M6 9l6 6 6-6",2),chevronUp:new w(24,24,"M6 15l6-6 6 6",2),chevronLeft:new w(24,24,"M15 6l-6 6 6 6",2),chevronRight:new w(24,24,"M9 6l6 6-6 6",2),arrowUp:new w(24,24,"M12 19V5.5M6.5 11L12 5.5 17.5 11",2.2),arrowDown:new w(24,24,"M12 5v13.5M6.5 13L12 18.5 17.5 13",2.2),arrowLeft:new w(24,24,"M19 12H5.5M11 6.5L5.5 12 11 17.5",2.2),arrowRight:new w(24,24,"M5 12h13.5M13 6.5l5.5 5.5-5.5 5.5",2.2),arrowToEdge:new w(24,24,"M5 5.5v13M19 12H9.5M13.5 8L9.5 12l4 4",2),dots:new w(24,24,"M6 12h0M12 12h0M18 12h0",3),menu:new w(24,24,"M4.5 7h15M4.5 12h15M4.5 17h15",2.2),pencil:new w(24,24,"M5 19l.9-3.9L15.6 5.4a1.9 1.9 0 0 1 2.7 0l.3.3a1.9 1.9 0 0 1 0 2.7L8.9 18.1zM13.6 7.4l3 3",2),star:new w(24,24,"M12 3.1l2.37 6.34 6.76.29-5.3 4.22 1.81 6.52L12 16.73l-5.64 3.74 1.81-6.52-5.3-4.22 6.76-.29z",1.8,!0),zoomIn:new w(24,24,"M16.7 10.5a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 1 1 12.4 0zM15.2 15.2l4.3 4.3M10.5 7.9v5.2M7.9 10.5h5.2",2),zoomOut:new w(24,24,"M16.7 10.5a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 1 1 12.4 0zM15.2 15.2l4.3 4.3M7.9 10.5h5.2",2),tray:new w(24,24,"M4 13.5l2.4-6.3A1.8 1.8 0 0 1 8.1 6h7.8a1.8 1.8 0 0 1 1.7 1.2L20 13.5v4a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5zM4 13.5h4.3l1.2 2h5l1.2-2H20",1.6),columns:new w(24,24,"M6 4.5h12a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5V7A2.5 2.5 0 0 1 6 4.5zM3.5 9h17M9.5 9v10.5M14.5 9v10.5",2)};var Nr=Symbol("velodesign.clearThemeOptionOverrides");function g(e,t){let o={},r=new Map,n=new Map;for(let[s,l]of Object.entries(e))n.set(s,function(){return D[l]});for(let[s,l]of Object.entries(t??{}))n.set(s,function(){return l});for(let s of n.keys())Object.defineProperty(o,s,{enumerable:!0,get:function(){return r.has(s)?r.get(s):n.get(s)()},set:function(l){l==null?r.delete(s):r.set(s,l)}});return Object.defineProperty(o,Nr,{value:function(){r.clear()}}),o}var D=g({},{closeSymbol:function(){return x(b.cross,1.3)},cancelSymbol:function(){return x(b.cross,1.3)},confirmSymbol:function(){return x(b.tick,1.25)},emptySymbol:function(){return x(b.tray,1)},collapseSymbol:function(){return x(b.dots,1.15)},prevSymbol:function(){return x(b.chevronLeft,1.15)},nextSymbol:function(){return x(b.chevronRight,1.15)}});var Eo=g({},{loadingSymbol:function(){return i(pt,{variant:"dots",size:"0.8em"})}}),Br=500,Co=!1,L=function(e,t){Co||(Co=!0,d(`
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
`,"vtd/Button"));let o=!1,r=e.loadingOnClick??(e.onClick!==void 0&&e.onClick.length>=2),n=e.minLoadingMs??Br,s;r&&(s=i("span",{class:"vtd-button-spinner"},i(Eo.loadingSymbol,null)));let l=i("span",null,t);return a(i("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:p=>{if(!(r&&o)&&e.onClick)if(r){o=!0;let h=p.currentTarget;h.setAttribute("aria-busy","true"),h.setAttribute("aria-disabled","true"),s&&(s.style.visibility="visible"),l.style.visibility="hidden";let m=Date.now(),k=!1,A=()=>{k||(k=!0,setTimeout(()=>{o=!1,h.removeAttribute("aria-busy"),h.removeAttribute("aria-disabled"),s&&(s.style.visibility="hidden"),l.style.visibility="visible"},Math.max(0,m+n-Date.now())))},E=e.onClick(p,A);E instanceof Promise&&E.finally(A)}else e.onClick(p)}},l,s),e)};var To=new Map,Fr=!1;setTimeout(()=>{To.entries().forEach(([e,t])=>{go(t)}),Fr=!0},1e3);var F="#fff",X="#000",Lo="#050505",Vr=F,Kr=X,_r="#66b2ff",Wr="#c6ff9e",qr="#ffd666",Gr="#ff6666",Mo="#fafafa",Yr="#151515",Ur=F,Xr="#004c99",Jr="#286100",Zr="#997000",Qr="#990000",zt=":color-mix(in hsl,",en=[-8,-6,-4,-2,0,2,4,6,8],ae=(e,t,o,r)=>en.map(n=>n<0?`--${e}-${n/2+5}${zt}${t} ${-1*n}0%,${o} ${10+n}0%)`:n==0?`--${e}-5:${o};--${e}:${o}`:`--${e}-${n/2+5}${zt}${o} ${10-n}0%,${r} ${n}0%)`).join(";")+";",tn=[1,2,3,4,5,6,7,8,9],Do=(e,t,o)=>tn.map(r=>`--${e}-${r}${zt}${t} ${10-r}0%,${o} ${r}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${o};`,Oo=(e,t,o)=>`--${e}:${t};--${e}-alt:${o};`,Ao=function(e){S(document.getElementsByTagName("html")[0],"data-theme",e)},$t="vtd-preferred-theme",le="light",Ee="dark",zo="default",Te=le,He,It=null;function $o(){try{return localStorage.getItem($t)}catch{return It}}function on(e){try{localStorage.setItem($t,e)}catch{It=e}}function rn(){try{localStorage.removeItem($t)}catch{It=null}}var Rt={getColorScheme:function(){return Te},getColorSchemePreference:function(){if(He)return He;let e=$o();return e==Ee?Ee:e==le?le:zo},setColorScheme:function(e){on(e),Rt.resetColorScheme()},resetColorScheme:function(){let e=$o();He?Te=He:e==Ee?Te=Ee:e==le?Te=le:(e&&e!=zo&&rn(),Te=globalThis.matchMedia("(prefers-color-scheme: light)").matches?le:Ee),Te==le?Ao(le):Ao(Ee)}};function Io(e,t,o=!1){d(`
${e}[data-theme="light"]{
${Oo("text",t?.textLightColor||Lo,t?.textDarkColor||Mo)}
${Do("background",t?.backgroundLightColor||Vr,t?.backgroundLightAltColor||Kr)}
${ae("primary",F,t?.primaryLightColor||_r,X)}
${ae("secondary",F,t?.secondaryLightColor||Wr,X)}
${ae("warning",F,t?.warningLightColor||qr,X)}
${ae("accent",F,t?.accentLightColor||Gr,X)}
color-scheme:light;}
${e}[data-theme="dark"]{
${Oo("text",t?.textDarkColor||Mo,t?.textLightColor||Lo)}
${Do("background",t?.backgroundDarkColor||Yr,t?.backgroundDarkAltColor||Ur)}
${ae("primary",X,t?.primaryDarkColor||Xr,F)}
${ae("secondary",X,t?.secondaryDarkColor||Jr,F)}
${ae("warning",X,t?.warningDarkColor||Zr,F)}
${ae("accent",X,t?.accentDarkColor||Qr,F)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,"theme",o)}var Pt={injectStyles(e,t=!0,o){He=o,t&&d(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset","reset"),Io(":root",e),globalThis.setTimeout(function(){d("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions","theme")},150),Rt.resetColorScheme()}};var J="",M={configureBasePath:function(e){let t=e.replace(/\/+$/,"");J=t==""||t=="/"?"":t.startsWith("/")?t:`/${t}`},getPathname:function(){let e=globalThis.location.pathname;return J?e==J?"/":e.startsWith(`${J}/`)?e.slice(J.length):e:e},resolveHref:function(e){return!J||!e.startsWith("/")||e==J||e.startsWith(`${J}/`)?e:`${J}${e}`},changeLocation:function(e){try{globalThis.history.pushState(null,"",M.resolveHref(e)),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){bo(t),M.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=M.resolveHref(e)}};var y=function(e,t){let o=e.spa??!1;return a(i("a",{class:"vtd-link",href:M.resolveHref(e.to),onClick:o?r=>{r.preventDefault(),M.changeLocation(e.to)}:void 0},t),e)};var nn=g({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var sn=g({closeSymbol:"closeSymbol"},{zoomInSymbol:function(){return x(b.zoomIn,1)},zoomOutSymbol:function(){return x(b.zoomOut,1)}});var an=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return x(b.pencil,1.2)}});var ln={top:"bottom",bottom:"top",left:"right",right:"left"},K=8,Nt=new WeakMap;function dn(e){if(getComputedStyle(e).position==="fixed")return[];try{if(e.matches(":popover-open"))return[]}catch{}let t=[];for(let o=e.offsetParent??e.parentElement;o&&o!==document.documentElement;o=o.parentElement){let r=getComputedStyle(o);if((r.overflowX!=="visible"||r.overflowY!=="visible")&&t.push(o),r.position==="fixed")break}return t}function jo(e){let t={left:0,top:0,right:innerWidth,bottom:innerHeight};for(let o of e){let r=o.getBoundingClientRect();t.left=Math.max(t.left,r.left),t.top=Math.max(t.top,r.top),t.right=Math.min(t.right,r.right),t.bottom=Math.min(t.bottom,r.bottom)}return t}function Ht(e,t,o){switch(t){case"top":return o.top+K-e.top;case"bottom":return e.bottom-(o.bottom-K);case"left":return o.left+K-e.left;case"right":return e.right-(o.right-K)}}function Ro(e,t,o,r){return e<o?o-e:t>r?Math.max(r-t,o-e):0}function V(e,t,o){e.style.getPropertyValue(t)!==o&&(o?e.style.setProperty(t,o):e.style.removeProperty(t))}function cn(e){return(e.offsetParent??e.parentElement??e).getBoundingClientRect()}function Po(e,t,o,r,n){let s=t==="bottom"?o.top-r.bottom:t==="top"?r.top-o.bottom:t==="right"?o.left-r.right:r.left-o.right;if(e==="top"||e==="bottom"){let p=e==="bottom"?r.bottom+s:r.top-s-n.height;return{left:o.left,right:o.right,top:p,bottom:p+n.height}}let l=e==="right"?r.right+s:r.left-s-n.width;return{left:l,right:l+n.width,top:o.top,bottom:o.bottom}}function Ho(e,t,o){let r=e.getBoundingClientRect(),n=(t.anchor??(()=>cn(e)))(),s=jo(o.clippers),l=t.side==="top"||t.side==="bottom",p={width:r.width,height:o.maxHeight===null?r.height:o.naturalHeight},h=r.top-o.y;o.maxHeight!==null&&o.side==="top"&&(h=r.bottom-o.y-p.height);let m={left:r.left-o.x,right:r.right-o.x,top:h,bottom:h+p.height},k=Po(t.side,o.side,m,n,p),A=t.side,E=k,T=Ht(k,t.side,s);if(T>0){let ze=ln[t.side],Yt=Po(ze,o.side,m,n,p);Ht(Yt,ze,s)<T&&(A=ze,E=Yt)}let z=null,O=Ht(E,A,s);t.scrolls&&l&&O>0&&(z=Math.max(Math.floor(p.height-O),0),E=A==="bottom"?{...E,bottom:E.bottom-O}:{...E,top:E.top+O});let j=Math.round(Ro(E.left,E.right,s.left+K,s.right-K)),ft=Math.round(Ro(E.top,E.bottom,s.top+K,s.bottom-K));return{side:A,x:j,y:ft,maxHeight:z,size:p,area:s}}function No(e,t,o,r){r.side!==o.side&&t.setSide(r.side,r.size),t.scrolls&&V(e,"max-height",r.maxHeight===null?"":`${r.maxHeight}px`),V(e,"translate",r.x===0&&r.y===0?"":r.y===0?`${r.x}px`:`${r.x}px ${r.y}px`),o.maxHeight===null&&r.maxHeight!==null&&(o.naturalHeight=r.size.height),o.side=r.side,o.x=r.x,o.y=r.y,o.maxHeight=r.maxHeight}function N(e,t){V(e,"translate",""),V(e,"width",""),V(e,"max-width",""),V(e,"white-space",""),t.scrolls&&V(e,"max-height",""),t.setSide(t.side,{width:0,height:0});let o=e.getBoundingClientRect();if(o.width===0&&o.height===0)return Nt.delete(e),t.side;let r={side:t.side,x:0,y:0,naturalHeight:o.height,maxHeight:null,wrapped:!1,naturalWidth:o.width,clippers:dn(e)},n=jo(r.clippers),s=n.right-n.left-2*K;o.width>s&&(V(e,"width","max-content"),V(e,"max-width",`${Math.max(Math.floor(s),0)}px`),V(e,"white-space","normal"),r.wrapped=!0),Nt.set(e,r);let l=Ho(e,t,r);return No(e,t,r,l),l.side}function pn(e,t){let o=Nt.get(e);if(!o)return()=>{N(e,t)};let r=Ho(e,t,o),n=r.area.right-r.area.left-2*K;return o.wrapped&&o.naturalWidth<=n||r.size.width>n?()=>{N(e,t)}:()=>{No(e,t,o,r)}}function Le(e,t){let o=0,r=()=>{o||(o=requestAnimationFrame(()=>{o=0;let l=t().map(([p,h])=>pn(p,h));for(let p of l)p?.()}))},n=l=>{l.target instanceof Node&&e.contains(l.target)||r()},s=new ResizeObserver(r);for(let l=e.parentElement;l;l=l.parentElement)s.observe(l);return globalThis.addEventListener("resize",n),document.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>{cancelAnimationFrame(o),o=0,s.disconnect(),globalThis.removeEventListener("resize",n),document.removeEventListener("scroll",n,{capture:!0})}}var Fo=!1,Ne=function(e,t){return Fo||(Fo=!0,d(`
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
`,"vtd/Card")),a(i("div",{class:"vtd-card"},e.header&&i("div",{class:"vtd-card-header"},e.header),i("div",{class:"vtd-card-body"},t),e.footer&&i("div",{class:"vtd-card-footer"},e.footer)),e)};var Vo=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),hn=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),un=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function mn(e,t){if(t=="plain")return[{kind:"",text:e}];let o=t=="css"?un:hn,r=t!="css",n=[],s=0;o.lastIndex=0;let l=0,p=!1,h=0,m=()=>r&&l>0&&!p&&h==0,k;for(;(k=o.exec(e))!==null;){k.index>s&&n.push({kind:"",text:e.slice(s,k.index)});let T=k.groups??{},z=k[0],O=T.closeTag??T.openTag;if(O!==void 0&&!A(k.index,T.closeTag!==void 0))n.push({kind:"punct",text:"<"}),n.push({kind:!m()&&Vo.has(O)?"keyword":"",text:O});else if(O!==void 0){let j=T.closeTag!==void 0;r&&(l=Math.max(0,l+(j?-1:1)),p=!0),n.push({kind:"punct",text:j?"</":"<"}),n.push({kind:"tag",text:O})}else if(T.word!==void 0){let j=!m()&&Vo.has(T.word);n.push({kind:j?"keyword":"",text:T.word})}else{let j=["comment","string","number","attr","punct"].find(ze=>T[ze]!==void 0),ft=m()&&(j=="string"||j=="number");n.push({kind:ft?"":j??"",text:z}),r&&j=="punct"&&E(z)}s=k.index+z.length}return s<e.length&&n.push({kind:"",text:e.slice(s)}),n;function A(T,z){if(z||!r||m())return!0;let O=T>0?e[T-1]??"":"";return!/[\w$)\]]/.test(O)}function E(T){for(let z=0;z<T.length;z++){let O=T[z];O=="{"?h++:O=="}"?h=Math.max(0,h-1):O==">"&&p&&h==0&&(z>0&&T[z-1]=="/"&&(l=Math.max(0,l-1)),p=!1)}}}var Ko=!1,Be=function(e){let t=e.language??"tsx",o=mn(e.code,t);Ko||(Ko=!0,d(`
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
`,"vtd/CodeBlock"));let r=["vtd-code-block"];return e.wrap&&r.push("vtd-code-block-wrap"),e.showLineNumbers&&r.push("vtd-code-block-numbered"),a(i("pre",{class:r.join(" "),"aria-label":e.ariaLabel},i("code",null,e.showLineNumbers?vn(o):_o(o))),e)};function _o(e){return e.map(t=>t.kind?i("span",{class:`vtd-code-block-${t.kind}`},t.text):t.text)}function vn(e){let t=[[]];for(let o of e)o.text.split(`
`).forEach((n,s)=>{s>0&&t.push([]),n.length>0&&t[t.length-1].push({kind:o.kind,text:n})});return t.map(o=>i("span",{class:"vtd-code-block-line"},_o(o)))}var fn=g({closeSymbol:"closeSymbol"});var Wo=!1,Me=class extends v{mount(){Wo||(Wo=!0,d(`
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
`,"vtd/NavLink")),globalThis.addEventListener("popstate",this.refresh),globalThis.addEventListener("locationchange",this.refresh)}unmount(){globalThis.removeEventListener("popstate",this.refresh),globalThis.removeEventListener("locationchange",this.refresh)}render(t,o){let n=(t.exact===void 0?!0:t.exact)?M.getPathname()==t.to:M.getPathname().startsWith(t.to),s=t.activeClass||"vtd-nav-link-active",l=t.spa??!1,p=o.length==1?o[0]:void 0,h=typeof p=="string"||typeof p=="number"||typeof p=="bigint"?String(p):void 0;return a(i("a",{href:M.resolveHref(t.to),class:`vtd-nav-link${n?` ${s}`:""}`,"data-label":h,"aria-current":n?"page":void 0,onClick:l?m=>{m.preventDefault(),M.changeLocation(t.to)}:void 0},o),t)}};var Go=g({confirmSymbol:"confirmSymbol"}),qo=!1,De=class extends v{#e;#o;#n(){return[...this.#e.querySelectorAll(".vtd-menu-item")].filter(t=>t.checkVisibility({checkVisibilityCSS:!0}))}#t(t){for(let o of this.#e.querySelectorAll(".vtd-menu-entry-open"))o!=t&&(o.classList.remove("vtd-menu-entry-open"),o.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","false"))}#i=[];#r=()=>{if(this.#e.open)for(let t of this.#i)t.row.setAttribute("aria-checked",t.read()?"true":"false")};#s;#a;#l;#c={side:"bottom",setSide:t=>{this.#a.classList.toggle("vtd-menu-list-above",t==="top")}};#d=new WeakMap;#v=()=>{let t=[[this.#a,this.#c]];for(let o of this.#e.querySelectorAll(".vtd-menu-entry-open")){let r=this.#d.get(o);r&&t.push(r)}return t};#f(t){let o=t.querySelector(":scope > .vtd-menu-sublist");if(!o)return;let r=getComputedStyle(t).direction==="rtl"?"left":"right",n={side:r,setSide:s=>{o.classList.toggle("vtd-menu-sublist-flipped",s!==r)}};this.#d.set(t,[o,n]),N(o,n)}#g=()=>{this.#r(),this.#e.open?(N(this.#a,this.#c),this.#l??=Le(this.#a,this.#v)):(this.#l?.(),this.#l=void 0)};#p=(t=!1)=>{this.#e.removeAttribute("open"),this.#t(),t&&this.#o.focus()};#u=t=>{this.#s.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#p())};#b=t=>{let o=document.activeElement,r=o?.closest(".vtd-menu-entry-open");if(t.key=="Escape"){if(!this.#e.open)return;if(t.preventDefault(),r){this.#t(),r.querySelector(".vtd-menu-item-parent")?.focus();return}this.#p(!0);return}if(!this.#e.open)return;let n=this.#n();if(n.length==0)return;let s=n.indexOf(o);if(t.key=="ArrowDown")t.preventDefault(),n[(s+1)%n.length]?.focus();else if(t.key=="ArrowUp")t.preventDefault(),n[(s-1+n.length)%n.length]?.focus();else if(t.key=="Home")t.preventDefault(),n[0]?.focus();else if(t.key=="End")t.preventDefault(),n[n.length-1]?.focus();else if(t.key=="ArrowRight"){let l=o?.closest(".vtd-menu-entry");o?.classList.contains("vtd-menu-item-parent")&&l&&(t.preventDefault(),this.#h(l),l.querySelector(".vtd-menu-sublist .vtd-menu-item")?.focus())}else t.key=="ArrowLeft"&&r&&(t.preventDefault(),this.#t(),r.querySelector(".vtd-menu-item-parent")?.focus())};#y(t){let o=t.closest(".vtd-menu-list, .vtd-menu-sublist");for(let r of o?.querySelectorAll(":scope > li > [role=menuitemradio]")??[])r.setAttribute("aria-checked",r==t?"true":"false")}#h(t){this.#t(t),t.classList.add("vtd-menu-entry-open"),t.querySelector(".vtd-menu-item-parent")?.setAttribute("aria-expanded","true"),this.#f(t)}mount(){document.addEventListener("click",this.#u)}unmount(){document.removeEventListener("click",this.#u),this.#l?.(),this.#l=void 0}#m(t){return t.map((o,r)=>{let n=o.dividerBefore&&r>0?" vtd-menu-entry-divided":"";if(o.children&&o.children.length>0){let k=i("div",{role:"menuitem",tabindex:-1,"aria-haspopup":"menu","aria-expanded":"false",class:`vtd-menu-item vtd-menu-item-parent${o.disabled?" vtd-menu-item-disabled":""}`},o.label,i("span",{class:"vtd-menu-submenu-arrow","aria-hidden":"true"},x(b.chevronRight,1.1))),A=i("li",{class:`vtd-menu-entry vtd-menu-entry-parent${n}`,role:"none"},k,i("ul",{class:"vtd-menu-sublist",role:"menu"},this.#m(o.children)));return A.addEventListener("pointerenter",()=>{this.#h(A)}),k.addEventListener("click",E=>{E.preventDefault(),A.classList.contains("vtd-menu-entry-open")?this.#t():this.#h(A)}),A}let s=o.selected!==void 0,l=typeof o.selected=="function"?o.selected:void 0,p=l?l():o.selected===!0,h=i("a",{role:s?"menuitemradio":"menuitem","aria-checked":s?p?"true":"false":void 0,href:o.href?M.resolveHref(o.href):"#","aria-disabled":o.disabled,class:`vtd-menu-item${s?" vtd-menu-item-checkable":""}${o.disabled?" vtd-menu-item-disabled":""}`,onClick:k=>{if(o.disabled){k.preventDefault();return}o.href?o.spa&&(k.preventDefault(),M.changeLocation(o.href)):k.preventDefault(),s&&this.#y(h),o.onClick?.(),!o.keepOpen&&(this.#t(),this.#p())}},s?i("span",{class:"vtd-menu-check","aria-hidden":"true"},i(Go.confirmSymbol,null)):null,o.label);l&&this.#i.push({row:h,read:l});let m=i("li",{class:`vtd-menu-entry${n}`,role:"none"},h);return m.addEventListener("pointerenter",()=>{this.#t(m.parentElement?.closest(".vtd-menu-entry-open")??void 0)}),m})}constructor(t,o){super(t,o),this.#s=t,qo||(qo=!0,d(`
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
`,"vtd/Menu")),this.#o=i("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel},t.trigger),this.#a=i("ul",{class:"vtd-menu-list",role:"menu"},this.#m(t.items)),this.#e=i("details",{class:"vtd-menu",onToggle:this.#g,onKeyDown:this.#b},this.#o,this.#a),a(this.#e,t)}render(){return this.#e}};var Xo=g({collapseSymbol:"collapseSymbol"}),Yo=!1,Uo=3;function gn(e,t){if(t===void 0||e.length<=Math.max(t,Uo))return{head:e,collapsed:[],tail:[]};let r=Math.max(t,Uo)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-r),tail:e.slice(e.length-r)}}var Fe=function(e,t){Yo||(Yo=!0,d(`
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
`,"vtd/Breadcrumbs"));let{head:o,collapsed:r,tail:n}=gn(e.items,e.maxItems),s=e.separator||"/",l=m=>m.leading?i("span",{class:"vtd-breadcrumbs-crumb"},i("span",{class:"vtd-breadcrumbs-leading"},m.leading),m.label):m.label,p=(m,k)=>i("li",{class:"vtd-breadcrumbs-item","aria-current":m.to?void 0:"page"},m.to?i(y,{to:m.to,spa:e.spa},l(m)):i("span",null,l(m)),k?null:i("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},s)),h=r.length>0?i("li",{class:"vtd-breadcrumbs-item"},i(De,{ariaLabel:e.expandLabel,trigger:i("span",{class:"vtd-breadcrumbs-expand"},e.expandButtonChildren||i(Xo.collapseSymbol,null)),items:r.map(m=>({label:l(m),href:m.to,spa:e.spa}))}),i("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true"},s)):null;return a(i("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs"},i("ol",{class:"vtd-breadcrumbs-list"},o.map((m,k)=>p(m,r.length==0&&k==o.length-1)),h,n.map((m,k)=>p(m,k==n.length-1)))),e)};var bn=g({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var Jo=!1,Ve=class extends v{#e;#o;#n;#t=()=>{let t=this.#n.sidebar?.get();!this.#o||!t||(this.#o.classList.toggle("vtd-navbar-menu-collapsed",!t.overlay),this.#o.setAttribute("aria-expanded",t.open?"true":"false"),this.#o.classList.toggle("vtd-navbar-menu-open",t.open))};constructor(t,o){if(super(t,o),this.#n=t,yn(),t.sidebar){let r=t.sidebar;this.#o=i("button",{type:"button","aria-label":t.menuLabel,"aria-expanded":"false",class:"vtd-navbar-menu vtd-navbar-menu-collapsed",onClick:()=>{let n=r.get();r.set({...n,open:!n.open})}},i("span",{class:"vtd-navbar-menu-icon","aria-hidden":"true"},x(b.menu,1.25)))}this.#e=a(i("nav",{class:"vtd-navbar"},i("div",{class:"vtd-navbar-start"},this.#o??null,t.brand?i("div",{class:"vtd-navbar-brand"},t.brand):null,t.leading?i("div",{class:"vtd-navbar-leading"},t.leading):null),i("div",{class:"vtd-navbar-items"},o)),t)}mount(){this.#n.sidebar?.registerOnChangeListener(this.#t,{hasVtKey:this,triggerOnRegistration:!0}),this.#t()}render(){return this.#e}};function yn(){Jo||(Jo=!0,d(`
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
`,"vtd/Navbar"))}var er=":hover,:has(:focus-visible),.vtd-sidebar-resizing,:has(.vtd-menu[open])",vc=`.vtd-sidebar-collapsed:not(${er})`,fc=`.vtd-sidebar-collapsed:is(${er})`;var tr=!1,Ke=class extends v{#e;#o=new Map;#n=new Map;#t=void 0;#i=void 0;#r;#s;constructor(t,o){super(t,o),this.#r=t.items,this.#s=t.topOffset??0,tr||(tr=!0,d(`
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
`,"vtd/TableOfContents"));let r=i("ol",{class:"vtd-table-of-contents-list"},t.items.map(n=>{let s=Math.min(Math.max(n.level??1,1),6),l=i("a",{class:`vtd-table-of-contents-link vtd-table-of-contents-level-${s}`,href:`#${n.id}`,onClick:()=>{this.#d(n.id)}},n.label);return this.#o.set(n.id,l),i("li",{class:"vtd-table-of-contents-item"},l)}));this.#e=a(i("nav",{class:"vtd-table-of-contents","aria-label":t.ariaLabel},t.header?i("div",{class:"vtd-table-of-contents-header"},t.header):null,r),t)}mount(){let t=new IntersectionObserver(o=>this.#a(o),{rootMargin:`-${this.#s}px 0px -70% 0px`});for(let o of this.#r){let r=document.getElementById(o.id);r&&t.observe(r)}this.#i=t}unmount(){this.#i?.disconnect(),this.#i=void 0}#a(t){for(let o of t)this.#n.set(o.target.id,{intersecting:o.isIntersecting,top:o.boundingClientRect.top});this.#d(this.#c())}#l(){let t=document.documentElement.scrollHeight;return t<=globalThis.innerHeight+2?!1:globalThis.scrollY+globalThis.innerHeight>=t-2}#c(){if(this.#l())return this.#r[this.#r.length-1]?.id;for(let o of this.#r)if(this.#n.get(o.id)?.intersecting)return o.id;let t;for(let o of this.#r){let r=this.#n.get(o.id);r&&r.top<=this.#s&&(t=o.id)}return t??this.#r[0]?.id}#d(t){if(t===this.#t)return;let o=this.#t===void 0?void 0:this.#o.get(this.#t);o&&(o.classList.remove("vtd-table-of-contents-link-active"),o.removeAttribute("aria-current"));let r=t===void 0?void 0:this.#o.get(t);r&&(r.classList.add("vtd-table-of-contents-link-active"),r.setAttribute("aria-current","true")),this.#t=t}render(){return this.#e}};var kn=g({closeSymbol:"closeSymbol"});var rr=g({closeSymbol:"closeSymbol"}),or=!1,_e=function(e,t){or||(or=!0,d(`
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
`,"vtd/Tag"));let o=i("span",{class:`vtd-tag vtd-tag-${e.type||"neutral"}`},t,e.onRemove&&i("button",{type:"button",class:"vtd-tag-remove","aria-label":e.removeLabel,onClick:()=>{e.onRemove?.(),o.remove()}},i(rr.closeSymbol,null)));return a(o,e)};var Sn=g({},{emptySymbol:function(){return i("span",{class:"vtd-empty-icon","aria-hidden":"true"},i(D.emptySymbol,null))}});var nr=!1,Bt=function(e,t){return nr||(nr=!0,d(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),a(i("div",{class:"vtd-statistic"},i("div",{class:"vtd-statistic-title"},e.title),i("div",{class:"vtd-statistic-value"},e.prefix&&i("span",{class:"vtd-statistic-affix"},e.prefix),e.value,e.suffix&&i("span",{class:"vtd-statistic-affix"},e.suffix))),e)};var Cn=g({closeSymbol:"closeSymbol"});var En=g({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var Kt=g({},{columnsSymbol:function(){return x(b.columns,1.2)},emptySymbol:function(){return i("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true"},i(D.emptySymbol,null))},searchSymbol:function(){return null}});var ar=!1;function Oe(){ar||(ar=!0,d(`
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
`,"vtd/Typography","base"))}function Ae(e,t,o){let r=[e];return t&&r.push(`vtd-text-${t}`),o?.strong&&r.push("vtd-text-strong"),o?.italic&&r.push("vtd-text-italic"),o?.underline&&r.push("vtd-text-underline"),o?.strike&&r.push("vtd-text-strike"),o?.numeric&&r.push("vtd-text-numeric"),r.join(" ")}var I=function(e,t){Oe();let o=Ae(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return a(i("h1",{class:o},t),e);case 2:return a(i("h2",{class:o},t),e);case 3:return a(i("h3",{class:o},t),e);case 4:return a(i("h4",{class:o},t),e);case 5:return a(i("h5",{class:o},t),e);default:return a(i("h6",{class:o},t),e)}};var _=function(e,t){Oe();let o=Ae(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?a(i("code",{class:o},t),e):a(i("span",{class:o},t),e)};var W=function(e,t){return Oe(),a(i("p",{class:Ae("vtd-paragraph",e.type)},t),e)};var _t={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function ht(e,t="md"){return e===void 0?_t[t]:Pn(e)?_t[e]:e}function Pn(e){return Object.hasOwn(_t,e)}function ut(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function lr(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var dr=!1,f=function(e,t){dr||(dr=!0,d(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}

.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let o=e.direction??"row";return a(i("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:o,gap:ht(e.gap),alignItems:ut(e.align),justifyContent:lr(e.justify),flexWrap:e.wrap??o==="row"?"wrap":"nowrap"}},t),e)};var cr=!1,We=function(e,t){cr||(cr=!0,d(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let o=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return a(i("div",{class:"vtd-grid",style:{gridTemplateColumns:o,gap:ht(e.gap),alignItems:ut(e.align)}},t),e)};var P=e=>({label:"GitHub",to:`https://github.com/Velotype/${e}`}),de=e=>({label:"JSR",to:`https://jsr.io/@velotype/${e}`}),Wt=[{id:"velotype",name:"velotype",tag:"framework",tagKind:"primary",tagline:"A fast and small TSX framework that updates the DOM in place.",about:["velotype creates real DOM elements as your TSX runs. There is no virtual DOM and no reconciler: a value that changes renders only the part of the page that depends on it, and a list that changes renders, moves, or removes only the rows that changed.","Components are classes with fields and methods, and you write TSX the way you write HTML."],stats:[{title:"Minified",value:"21",suffix:"kb"},{title:"Gzipped",value:"7.9",suffix:"kb"},{title:"Virtual DOM",value:"None"}],statsNote:"velotype 0.3.2, the jsx-runtime entry point, minified with deno bundle. Bundlers drop the parts an app does not import.",features:[{title:"Real DOM elements",text:"TSX gives you actual HTMLElements. Write class and for the way you do in HTML, add listeners with addEventListener, and use every DOM API you already know."},{title:"Updates in place",text:"A RenderObject renders its value everywhere it appears and re-renders just those spots when it changes. Lists update only the rows that changed, and sort(), move(), and filter() move the rows already on the page."},{title:"Components are classes",text:"Fields hold your state, methods change it, and velotype calls mount(), render(), and unmount() at the right moments. It reads like the object-oriented code you already write."},{title:"Small and tree-shakeable",text:"About 21kb minified and 7.9kb gzipped for the entire runtime (velotype 0.3.2), and your bundler drops whatever your app does not import."},{title:"Typed styles and events",text:"Style objects are checked against CSS: property names, keywords, units, and colors. on* attributes take a handler or {handler, options}, and on- listens for a custom event by its exact name."},{title:"Built for development",text:"Hot reloading keeps component state. ErrorBoundary contains a failing component, AsyncRenderObject shows only the latest request's result, and the DevTools extension shows your live component tree."}],samples:[{title:"A component that updates in place",intro:"The RenderObject renders its value wherever it is placed, and setting a new value renders only that element again.",language:"tsx",code:`class Counter extends Component<EmptyAttrs> {
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
}`},links:[P("velotype"),de("velotype")],resources:[{name:"Velotype DevTools",tag:"Chrome extension",text:"Chrome DevTools panels for debugging velotype apps: the live component tree with each component's fields, the event bus's registrations, and a decoder for VSON and VBIN payloads. It is built from source and loaded unpacked.",links:[{label:"Docs",to:"/docs/velotype/devtools/"},{label:"Learn more",to:"/projects/velodevtools/"},P("velodevtools")]},{name:"velotype-perf-demo",tag:"benchmark",text:"The same fleet dashboard written in velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code, with 10,000 rows by default. The page loads each one and times creating rows, live updates, typing a filter, sorting, and moving a row in your own browser.",links:[P("velotype-perf-demo"),{label:"Live demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{name:"example-velotype-projects",tag:"examples",text:"Example projects using the velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, the demo pages from React's 2018 hooks talk recreated in velotype, and the custom-elements-everywhere tests that check velotype works with Custom Elements.",links:[P("example-velotype-projects")]}]},{id:"velodesign",name:"velodesign",tag:"UI components",tagKind:"primary",tagline:"A themed component library for velotype, built from native HTML elements.",about:["velodesign is a component library for velotype apps. Where HTML has an element for the job (input, button, details, dialog), the component is that element, so keyboard support, form participation, and browser autofill come from the platform.","This site is built with it."],stats:[{title:"Theme",value:"Light + dark"},{title:"Colors set by",value:"CSS variables"}],features:[{title:"Native elements",text:"A Checkbox is a real input, a Modal is a real dialog, and an Accordion is built on details. Keyboard support, form participation, and browser autofill come with them."},{title:"Re-theme with variables",text:"A handful of CSS variables (--text, --background, --primary, --secondary, --warning, --accent, each with a ramp from light to dark) color everything. Change them and every component follows."},{title:"Light and dark",text:`The theme follows the browser's color scheme, or a reader's choice through [data-theme="light"|"dark"].`},{title:"A broad set",text:"Typography, layout, forms, navigation, feedback, overlays, data display, data entry, and charts: from Stack, Grid, and Button to DataTable, DatePicker, Command, and LineChart."},{title:"One spacing scale",text:"Stack and Grid take their gaps from a shared scale in em, so spacing follows the type size and rows that look alike are alike."},{title:"Smooth updates",text:"Handlers make the smallest DOM change for an update, and none when nothing changed, so focus, caret, selection, and scroll position stay where they are."}],samples:[{title:"Use a few components",language:"tsx",code:`import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
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
// and sets up the CSS custom properties every component reads.`},links:[P("velodesign"),de("velodesign"),{label:"Component showcase",to:"https://velotype.github.io/velodesign/"}]},{id:"velochart",name:"velochart",tag:"charts",tagKind:"primary",tagline:"A chart library for velotype, drawn in SVG at the container's real pixel width.",about:["velochart draws charts for velotype apps: 21 of them, with log and time axes, zoom and pan, annotations, downsampling for long series, keyboard navigation, and export.","It is built on velodesign, whose components make up its legends and controls, and takes its colors from the same CSS variables, so charts follow the page's theme."],stats:[{title:"Charts",value:"21"},{title:"Gzipped",value:"36",suffix:"kb"},{title:"Colors set by",value:"CSS variables"}],statsNote:"velochart 0.0.1, every chart, minified with deno bundle and without velotype. Bundlers drop the charts an app does not import.",features:[{title:"Sized to the container",text:"A chart redraws at its container's real pixel width instead of scaling one viewBox, so text stays the same size in a sidebar and on a dashboard."},{title:"Numbers for screen readers",text:"A chart with tabular values renders them in a visually hidden table, so a screen reader gets the values and not just the chart's name."},{title:"Light and dark",text:"Series, grid lines, and tooltips are drawn with CSS variables, so charts follow the theme. Override ChartThemeOptions.seriesColors to reskin all of them."},{title:"Explore it",text:"Zoom, pan, brush, and a range slider, on log, time, and numeric axes, with annotations, error bars, trend lines, and cursors that move together across charts."},{title:"Long series and live data",text:"A long line thins to what its pixels can show, while the tooltip reads every point. appendData takes a live feed, and a canvas renderer handles tens of thousands of marks."},{title:"For every reader",text:"The arrow keys walk the marks with each one read aloud, and patterns tell series apart without color. Export to CSV, SVG, and PNG."},{title:"Hover that does no extra work",text:"One target covers the whole plot and tracks the nearest category, so a pointer need not land on a 2px line. A hover that changes nothing touches no DOM."}],samples:[{title:"Draw a line chart",language:"tsx",code:`import { LineChart } from "@velotype/velochart"
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
// Theme.injectStyles() defines.`},links:[P("velochart"),de("velochart"),{label:"Chart showcase",to:"https://velotype.github.io/velochart/"}]},{id:"velossr",name:"velossr",tag:"server rendering",tagKind:"primary",tagline:"TSX rendered to HTML on the server, with no virtual DOM and no client runtime.",about:["velossr is the server-side version of velotype's TSX. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve.","Pair it with velotype for interactive parts of a page: the server renders the markup for each one, and velotype replaces it in the browser with replaceElementWithRoot()."],stats:[{title:"Virtual DOM",value:"None"},{title:"Client runtime",value:"None"}],features:[{title:"Static and dynamic components",text:"A StaticServerComponent is a plain function that renders synchronously. A DynamicServerComponent is a class that sees the Request and can render async."},{title:"Streaming",text:"Send a page all at once, or as a ReadableStream where async components flush in place as they resolve."},{title:"Prepared once",text:"prepareHTMLVNodeForRendering() prepares a page when your module loads, so its static parts are built once and not on every request."},{title:"Escaped by default",text:"Text, attribute values, and attribute names are escaped where they are written. Inline style and script text is written as it is, with only the sequences that would end the element early changed."},{title:"Contained failures",text:"If a dynamic component throws, its onFail() renders in its place and the rest of the page goes out."},{title:"Same TSX as velotype",text:"HTML attributes, style objects, and fragments behave as they do in the browser, so markup moves between server and client unchanged."}],samples:[{title:"A server that renders a page",language:"tsx",code:`import { type Context, Router, Server } from "jsr:@velotype/veloserver"
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
}`},links:[P("velossr"),de("velossr")]},{id:"velodevtools",name:"Velotype DevTools",tag:"Chrome extension",tagKind:"secondary",tagline:"Chrome DevTools panels for debugging velotype apps.",about:["A Chrome extension with three DevTools panels, plus a toolbar popup that shows whether velotype is present on the page.","It works with any velotype build that installs the devtools hook, which every current velotype entry point does."],stats:[{title:"Panels",value:"3"}],features:[{title:"The component tree",text:"Your page's live component tree, like React DevTools: class names, DOM anchors, and for class components their attrs and instance fields, including live RenderObject values. Click a node to inspect it and highlight it on the page."},{title:"Expandable fields",text:"Objects, arrays, Maps, and Sets expand to their live values, fetched fresh on each expand and kept live while open."},{title:"Velotype Events",text:"Every key on the event bus with its listener count, and the live components and RenderObjects that are listening."},{title:"VeloJSON",text:"Decode VSON and VBIN payloads from network requests and responses while the panel is open, or convert bytes and JSON by hand."}],samples:[],install:{title:"Build and load it",language:"plain",code:`deno task build

// chrome://extensions -> enable Developer mode -> Load unpacked
// -> select the dist/ folder`},links:[P("velodevtools")]},{id:"veloserver",name:"veloserver",tag:"web server",tagKind:"warning",tagline:"A web server framework for high-performance websites, on Deno.",about:["veloserver is a small server framework: a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates velotype apps."],stats:[],features:[{title:"Routing",text:"Write /users/:id and your handler receives the id. A fixed path like /users/me beats any :name or * pattern that also matches."},{title:"Typed request metadata",text:"Give every request its own typed data, such as the signed-in user or a request id, for every handler and inspector to read."},{title:"Inspectors",text:"Run logging, timing, and auth before and after the handlers of a path. An inspector can answer a request itself, and it sees every response."},{title:"Static files",text:"mountFiles() and mountFile() serve a directory or a file from memory, with an ETag and a gzip copy for clients that accept it."},{title:"Clean shutdown",text:"SIGINT, SIGTERM, and SIGUSR1 stop the server cleanly, and server.close() does it from code."},{title:"A development server",text:"@velotype/veloserver/dev serves your velotype app and updates the page when files change, per module or by rebuilding the bundle."}],samples:[{title:"Hello veloserver",language:"tsx",code:`import { Router, Server } from "jsr:@velotype/veloserver"

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
deno run --allow-net server.ts`},links:[P("veloserver"),de("veloserver")]},{id:"velojson",name:"velojson (VSON)",tag:"binary JSON",tagKind:"warning",tagline:"A compact binary encoding for JSON, and an even smaller one when both sides share a schema.",about:["VSON (Velocity JSON) maps JavaScript JSON data to bytes one to one: anything JSON can hold, VSON can hold, and nothing else is added.","It has three formats, each described below."],stats:[{title:"Base vs JSON text",value:"20-25%",suffix:" smaller"},{title:"Key Table vs JSON text",value:"20-65%",suffix:" smaller"},{title:"VBIN vs JSON text",value:"25-70%",suffix:" smaller"}],features:[{title:"VSON Base",text:"A direct translation of JSON into bytes, typically 20-25% smaller than the text. It mirrors JSON's structure, so it works for streaming and partial decoding."},{title:"VSON Key Table",text:"Every unique key is stored once, in a table at the end of the message. About 20% smaller than JSON for a single object, and up to about 65% smaller for many records that share a wide set of keys."},{title:"VBIN",text:"Encoder and decoder agree on key IDs ahead of time, so no table is sent and key names are never encoded or decoded as strings. Typically 25-70% smaller than JSON text."},{title:"Same data as JSON",text:"VSON.encode() and VSON.decode() take and return the values that JSON.stringify() and JSON.parse() do. Anything JSON can hold, VSON can hold, and nothing else is added."},{title:"Server and browser builds",text:"The main module is tuned for speed and supports every format. The browser module is tuned for size, about 4.3kb minified, and supports Key Table."},{title:"Debuggable",text:"The Velotype DevTools extension decodes VSON and VBIN payloads straight from the network panel."}],samples:[{title:"Encode and decode",language:"tsx",code:`import { VSON } from 'jsr:@velotype/velojson'

const startObj = { name: "Some name", age: 20, address: null }

const objBinary: Uint8Array = VSON.encode(startObj)
console.log(objBinary.length) // 34 bytes, against 44 for the JSON text

const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))
// {"name":"Some name","age":20,"address":null}`}],install:{title:"Add velojson to a Deno project",language:"plain",code:`deno add jsr:@velotype/velojson

// In the browser:
import { VSON } from "jsr:@velotype/velojson/browser"`},links:[P("velojson"),de("velojson"),{label:"Playground",to:"/projects/velojson/playground/"}]},{id:"velomicro",name:"velomicro",tag:"1kb",tagKind:"neutral",tagline:"A 1kb TSX framework that shows how TSX rendering works.",about:["velomicro is the smallest version of the idea: a createElement that returns real DOM elements, and function components. It is meant to be read, and the Medium article walks through its source line by line."],stats:[{title:"Size",value:"1",suffix:"kb"}],features:[{title:"Returns HTMLElements",text:"TSX evaluates to real elements, so a div tag is an HTMLDivElement."},{title:"HTML attributes",text:"It calls setAttribute(), so you write class and the other attributes as you would in HTML."},{title:"Style objects",text:"Pass an object of camelCase properties, or a string."},{title:"Function components",text:"A component is a function from attrs to an element."}],samples:[{title:"A counter function component",language:"tsx",code:`const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = count
        }}>Increment</button>
    </div>
}`}],install:{title:"Add velomicro to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomicro"},links:[P("velomicro"),de("velomicro"),{label:"Medium article",to:"https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}]},{id:"velomini",name:"velomini",tag:"2.5kb",tagKind:"neutral",tagline:"A 2.5kb TSX framework that adds classes to velomicro.",about:["velomini is velomicro plus a Component class with render, mount, unmount, and refresh. Its refresh() tears down a component's subtree and renders it again. The Medium article walks through the source.","velotype is the next step: it keeps classes and replaces refresh() with values that update in place."],stats:[{title:"Size",value:"2.5",suffix:"kb"}],features:[{title:"Class components",text:"Extend Component and implement render(). velomini calls mount() and unmount() for you."},{title:"getComponent()",text:"Convert an element back to the class instance that built it, to call its methods."},{title:"Everything from velomicro",text:"Real HTMLElements, HTML attributes, style objects, and function components."}],samples:[{title:"A class component",language:"tsx",code:`class ComplexComponent extends Component<{foo: string}> {
    override render(attrs) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Then in TSX:
return <div><ComplexComponent foo="Component!"></ComplexComponent></div>`}],install:{title:"Add velomini to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomini"},links:[P("velomini"),de("velomini"),{label:"Medium article",to:"https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}]}],mt=[{title:"Front end",note:"TSX that creates real DOM elements, with no virtual DOM.",ids:["velotype","velodesign","velochart"],inDocsNav:!0},{title:"Server",note:"Serve pages and APIs, render HTML, and carry the data between server and browser.",ids:["velossr","veloserver","velojson"],inDocsNav:!0},{title:"Learn",note:"The smallest versions of the idea, written to be read.",ids:["velomicro","velomini"],inDocsNav:!1}],qe=new Map(Wt.map(e=>[e.id,e]));var jn=e=>{let t=[...e.classList].find(o=>o.startsWith("language-"))?.slice(9);return t=="css"?"css":t=="tsx"||t=="ts"||t=="json"?"tsx":"plain"};function Hn(e){for(let t of e.querySelectorAll("pre")){let o=t.querySelector("code");o&&t.replaceWith(c(Be,{code:o.textContent.replace(/\n$/,""),language:jn(o)}))}}function Nn(e){return[...e.querySelectorAll("h2, h3")].map(t=>({id:t.id,label:t.textContent,level:t.tagName=="H2"?1:2}))}function Bn(e){return c(f,{direction:"column",gap:"sm",children:mt.filter(t=>t.inDocsNav).map(t=>{let o=t.ids.filter(r=>r!=e.project).flatMap(r=>e.nav.filter(n=>n.id==r));return o.length>0&&u("div",{class:"vtp-docs-group",children:[c(_,{type:"muted",class:"vtp-docs-group-title",children:t.title}),o.map(r=>c(y,{to:r.pages[0].url,children:r.name}))]})})})}function pr(){let e=JSON.parse(document.getElementById("docs-nav").textContent),t=qe.get(e.project),o=e.nav.find(h=>h.id==e.project),r=o.pages.find(h=>h.url==e.current),n=o.pages.indexOf(r),s=o.pages[n-1],l=o.pages[n+1],p=document.getElementById("doc");return p.remove(),Hn(p),U(`
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
`,"vtp-docs"),u("div",{class:"vtp-docs",children:[c("nav",{class:"vtp-docs-nav","aria-label":`${t.name} documentation`,children:u(f,{direction:"column",gap:"sm",children:[c(I,{level:2,style:{fontSize:"1.1em"},children:t.name}),c("div",{children:o.pages.map((h,m)=>u(vo,{children:[h.section&&h.section!=o.pages[m-1]?.section&&c(_,{type:"muted",class:"vtp-docs-group-title vtp-docs-section",children:h.section}),c(Me,{to:h.url,children:h.title})]}))}),Bn(e)]})}),u("div",{class:"vtp-docs-article",children:[c(Fe,{items:[{label:"Docs",to:o.pages[0].url},{label:t.name,to:o.pages[0].url},{label:r.title}]}),p,u("div",{class:"vtp-docs-pager",children:[c("div",{children:s&&u(y,{to:s.url,children:["\u2190 ",s.title]})}),c("div",{children:l&&u(y,{to:l.url,children:[l.title," \u2192"]})})]})]}),c("div",{class:"vtp-docs-toc",children:c(Ke,{ariaLabel:"On this page",header:"On this page",items:Nn(p)})})]})}var vt={velochart:"/docs/velochart/",velodesign:"/docs/velodesign/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/",velodevtools:"/docs/velotype/devtools/"};var qt=e=>c("img",{src:"/assets/logo.svg",alt:"",width:"64",height:"64",style:{width:e.size,height:e.size,borderRadius:"0.2em",flexShrink:0}}),Vn=()=>u(Ve,{style:{borderBottom:"1px solid var(--background-4)"},brand:u(y,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"0.5em"},children:[c(qt,{size:"1.75em"}),"The Velocity Project"]}),children:[c(y,{to:vt.velotype,children:"Docs"}),c(y,{to:"https://github.com/Velotype",children:"GitHub"}),c(y,{to:"https://jsr.io/@velotype",children:"JSR"}),c(y,{to:"https://argoday.medium.com/",children:"Articles"})]}),Kn=()=>u(_,{type:"muted",children:["All projects live under the ",c(y,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",c(y,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",c(y,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with velotype and velodesign."]});function hr(e,t="60rem"){Pt.injectStyles(),we(u("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[Vn(),c("main",{style:{maxWidth:t,margin:"0 auto",padding:"2rem 1rem 4rem"},children:u(f,{direction:"column",gap:"lg",children:[e,Kn()]})})]}),document.getElementById("app"))}var Gt=e=>`/projects/${e.id}/`,Ge=e=>vt[e.id],Ye=e=>()=>{location.assign(e)},ur=e=>u(f,{direction:"column",gap:"sm",children:[c(I,{level:3,children:e.title}),e.intro&&c(W,{children:e.intro}),c(Be,{code:e.code,language:e.language})]}),_n=e=>c(Ne,{id:e.id,header:u(f,{align:"center",children:[c(y,{to:Gt(e),style:{color:"inherit",textDecoration:"none"},children:e.name}),c(_e,{type:e.tagKind,children:e.tag})]}),children:u(f,{direction:"column",children:[c(W,{children:e.tagline}),u(f,{children:[c(y,{to:Gt(e),children:"Learn more"}),Ge(e)&&c(y,{to:Ge(e),children:"Docs"}),c(y,{to:e.links[0].to,children:"GitHub"})]})]})}),Wn=()=>u(f,{direction:"column",gap:"lg",children:[u(f,{direction:"column",children:[u(f,{align:"center",gap:"lg",children:[c(qt,{size:"4rem"}),c(I,{level:1,children:"The Velocity Project"})]}),c(W,{style:{fontSize:"1.2em"},children:"A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them."}),c(W,{children:u(_,{type:"muted",children:["Each piece stands on its own and is published separately. They are designed to fit together: ",c(y,{to:"/projects/veloserver/",children:"veloserver"})," serves pages and APIs, ",c(y,{to:"/projects/velossr/",children:"velossr"})," or ",c(y,{to:"/projects/velotype/",children:"velotype"})," renders them, and ",c(y,{to:"/projects/velojson/",children:"VSON"})," carries data between the two. More pieces are on the way."]})}),u(f,{children:[c(L,{type:"primary",onClick:Ye("/projects/velotype/"),children:"Start with velotype"}),c(L,{type:"secondary",onClick:Ye("https://github.com/Velotype"),children:"GitHub"})]})]}),mt.map(e=>u(f,{direction:"column",children:[c(I,{level:2,children:e.title}),e.note&&c(_,{type:"muted",children:e.note}),c(We,{minColumnWidth:"22em",children:e.ids.map(t=>_n(qe.get(t)))})]}))]}),qn=e=>c(Ne,{header:u(f,{align:"center",children:[c("span",{children:e.name}),c(_e,{type:"neutral",children:e.tag})]}),children:u(f,{direction:"column",children:[c(W,{children:e.text}),c(f,{children:e.links.map(t=>c(y,{to:t.to,children:t.label}))})]})}),Gn=e=>u(f,{direction:"column",gap:"lg",children:[c(Fe,{items:[{label:"The Velocity Project",to:"/"},{label:e.name}]}),u(f,{direction:"column",children:[u(f,{align:"center",children:[c(I,{level:1,children:e.name}),c(_e,{type:e.tagKind,children:e.tag})]}),c(W,{style:{fontSize:"1.2em"},children:e.tagline}),u(f,{children:[Ge(e)&&c(L,{type:"primary",onClick:Ye(Ge(e)),children:"Documentation"}),c(L,{type:Ge(e)?"secondary":"primary",onClick:Ye(e.links[0].to),children:e.links[0].label}),e.links.slice(1).map(t=>c(L,{type:"secondary",onClick:Ye(t.to),children:t.label}))]})]}),e.stats.length>0&&u(f,{direction:"column",gap:"sm",children:[c(f,{gap:"lg",children:e.stats.map(t=>c(Bt,{title:t.title,value:t.value,suffix:t.suffix}))}),e.statsNote&&c(_,{type:"muted",children:e.statsNote})]}),c(f,{direction:"column",gap:"sm",children:e.about.map(t=>c(W,{children:t}))}),u(f,{direction:"column",children:[c(I,{level:2,children:"What it does"}),c(We,{minColumnWidth:"18em",children:e.features.map(t=>c(Ne,{header:t.title,children:c(W,{children:t.text})}))})]}),e.samples.length>0&&u(f,{direction:"column",children:[c(I,{level:2,children:"See it in action"}),e.samples.map(ur)]}),u(f,{direction:"column",children:[c(I,{level:2,children:"Get started"}),ur(e.install)]}),e.resources&&u(f,{direction:"column",children:[c(I,{level:2,children:"Tools, demos, and examples"}),c(We,{minColumnWidth:"22em",children:e.resources.map(qn)})]}),u(f,{direction:"column",children:[c(I,{level:2,children:"Links"}),c(f,{children:e.links.map(t=>c(y,{to:t.to,children:t.label}))})]}),u(f,{direction:"column",children:[c(I,{level:2,children:"Other projects"}),c(f,{children:Wt.filter(t=>t!==e).map(t=>c(y,{to:Gt(t),children:t.name}))})]})]}),mr=document.body.dataset.page,vr=mr?qe.get(mr):void 0;hr(document.body.dataset.doc?pr():vr?Gn(vr):Wn(),document.body.dataset.doc?"84rem":"60rem");
