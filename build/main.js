function a(e,t){return t.id&&_(e,"id",t.id),t.class&&_(e,"class",F(e,"class")+" "+t.class),t.style&&Ne(e,{style:t.style}),e}var Te=console.log,P=console.error,no={style:"display:contents;"},io={style:"display:none;"},ot="div";function V(e){return e instanceof HTMLElement}function rt(e){return e instanceof SVGSVGElement}function nt(e){return e instanceof MathMLElement}function De(e){return e instanceof pe}function ve(e){return e instanceof he}function ge(e){return e instanceof p}function Le(e){return e instanceof Text}function ao(e){return e instanceof ue}function fe(e){return typeof e=="string"||typeof e=="bigint"||typeof e=="number"||typeof e=="boolean"}function Oe(e,t){let o=e;for(;o;){let n=Object.getOwnPropertyDescriptor(o,t);if(n&&(n.set||n.writable))return!0;o=Object.getPrototypeOf(o)}return!1}function _(e,t,o){Oe(e,t)?e[t]=o:e.setAttribute(t,o.toString())}function so(e,t,o){Oe(e,t)?e[t]=o:t.startsWith("aria-")||t.startsWith("data-")?e.setAttribute(t,String(o)):o&&e.setAttribute(t,"")}function F(e,t){return e.getAttribute(t)}function $(e,t,o){Object.defineProperty(e,t,{value:o,writable:!1,configurable:!1,enumerable:!1})}function lo(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}var I=new Map,Xe=1n,y="vk",be=new Map,se=new Map,Ee=new Map,it={get domKeyName(){return y},domReferences:I,listenersF:be,listenersR:se,styleSectionMounted:Ee};function at(e){I.size==0?y=e:P("Name not accepted",e,I.size)}function co(){let e=globalThis;if(!e.__VELOTYPE_DEVTOOLS_HOOK__){let n=new Map,i=1;e.__VELOTYPE_DEVTOOLS_HOOK__={instances:n,register(d){return n.set(i,d),i++},unregister(d){n.delete(d)}}}let t=e.__VELOTYPE_DEVTOOLS_HOOK__,o=new Set(Array.from(t.instances.values(),n=>n.domKeyName));if(o.has(y)){let n=2;for(;o.has(`${y}-${n}`);)n++;at(`${y}-${n}`)}t.register(it)}co();function ye(e){return I.get(e)}function le(e,t){let o=String(Xe);return Xe++,t&&_(t,y,o),I.set(o,e),o}function de(e){I.delete(e)}function Me(e){I.delete(e.vtKey)}function Ze(e){if(fe(e)||Le(e))return G("span",null,e);if(e)return B(e)}function ho(e){if(fe(e))return document.createTextNode(e.toString());if(Le(e))return e;if(e)return B(e)}function B(e){if(V(e)||rt(e)||nt(e))return e;if(ve(e))return e.renderDefault();if(ge(e)){let t=ye(e.vtKey);if(t&&De(t))return t.e}return P("Internal typescript error"),xe()}function je(e,t){if(Array.isArray(t))for(let o=0;o<t.length;o++)je(e,t[o]);else{let o=ho(t);o&&e.appendChild(o)}}function xe(){return G(ot,io)}function po(e){Promise.resolve().then(e)}function ce(e){return e?fe(e)||ge(e)||ve(e)||Le(e)||Array.isArray(e)||e.hasAttribute(y)?G(ot,no,e):e:xe()}var Y=class{result;updateRefs;constructor(t,o){this.result=t,this.updateRefs=o}},he=class{#e;#n;#t;#o=new Map;vtKey=le(this);#i=!1;#r=[];#a=[];#l=0;#d=!1;#c(){return`vt-ro-${this.vtKey}`}#s(){ht(this.#c(),new me(this,"onChange"))}constructor(t,o,n){this.#e=t,this.#n=o||xe,this.#t=n}registerOnChangeListener(t,o){return this.#i=!0,this.#l=o?.eventDispatchDelay&&o?.eventDispatchDelay>0?o?.eventDispatchDelay:0,ct(o?.hasVtKey||this,this.#c(),t),o?.triggerOnRegistration&&po(()=>{this.#s()}),this}registerOnMount(t,o){return t&&this.#r.push(t),o&&this.#a.push(o),this}mount(){this.#r.forEach(t=>{t()})}unmount(){this.#a.forEach(t=>{t()})}get value(){return this.#e}set value(t){this.set(t)}get(){return this.#e}set(t){this.#e!=t&&this.rerenderElements(t)}rerenderElements(t){Array.from(this.#o.entries()).forEach(([o,n])=>{if(n.hU&&n.uR)n.hU(n.e,n.uR,this.#e,t);else{let i=n.rF(t,this),d=i instanceof Y,c=ce(Ze(d?i.result:i));_(c,y,o),Ae(n.e,c),this.#o.set(o,{e:c,rF:n.rF,hU:n.hU,uR:d?i.updateRefs:void 0})}}),this.#e=t,this.#i&&(this.#l>0?this.#d||(this.#d=!0,setTimeout(()=>{this.#d=!1,this.#s()},this.#l)):this.#s())}unmountKey(t){let o=this.#o.get(t);if(o){let n=F(o.e,y);return t==n?(this.#o.delete(n),de(n||""),!0):(P("Invalid state",t,n,o),!1)}else return P("Invalid unmountKey",t),!1}renderDefault(){return this.render(this.#n,this.#t)}render(t,o){let n=t(this.#e,this),i=n instanceof Y,d=ce(Ze(i?n.result:n)),c=le(this,d);return this.#o.set(c,{e:d,rF:t,hU:o,uR:i?n.updateRefs:n}),d}getElements(){return Array.from(this.#o.values()).map(t=>t.e)}removeAll(){this.#o.entries().forEach(([t,o])=>{st(o.e),de(t)}),this.#o.clear()}};var p=class{attrs;children;constructor(t,o){this.attrs=t,this.children=o}mount(){}unmount(){}refresh(){}vtKey="";replaceChild(t,o){return t}appendToChild(t,o){return!1}prependToChild(t,o){return!1}replaceChildrenOfChild(t,o){return!1}removeChild(t){return!1}};function Ae(e,t){let o=document.hasFocus()?document.activeElement==e:!1;return V(e)&&Ie(e),e.replaceWith(t),V(t)&&_e(t),o&&t.focus(),t}function uo(e,t){e.appendChild(t),$e(t)}function mo(e,t){e.prepend(t),$e(t)}function vo(e,t){Ie(e),e.replaceChildren(...t),_e(e)}function st(e){go(e),e.remove()}var pe=class{constructor(t,o,n){this.c=t,this.a=o,this.h=n,this.k=le(this),$(t,"vtKey",this.k),$(t,"refresh",this.f),$(t,"replaceChild",this.q),$(t,"appendToChild",this.w),$(t,"prependToChild",this.t),$(t,"replaceChildrenOfChild",this.y),$(t,"removeChild",this.u),this.e=Qe(this,this.a,this.h)}c;e;k;a;h;f=()=>{this.e=Ae(this.e,Qe(this,this.a,this.h))};q=(t,o)=>this.e.contains(t)?Ae(t,B(o)):t;w=(t,o)=>this.e.contains(t)?(uo(t,B(o)),!0):!1;t=(t,o)=>this.e.contains(t)?(mo(t,B(o)),!0):!1;y=(t,o)=>this.e.contains(t)?(vo(t,o.map(n=>B(n))),!0):!1;u=t=>this.e.contains(t)?(st(t),!0):!1};function ze(e,t){if(V(e)||rt(e)||nt(e))for(let o=0;o<e.children.length;o++){let n=e.children[o];ze(n,t);let i=F(n,y);if(i){let d=ye(i);d&&t(d,i)}}}function lt(e,t){if(De(e)){let o=e;o.c.mount(),Object.entries(o.c).forEach(n=>{let i=n[1];ve(i)&&i.mount()})}}function $e(e){V(e)&&_e(e);let t=F(e,y);if(t){let o=ye(t);o&&lt(o,t)}}function _e(e){ze(e,lt)}function dt(e,t){De(e)?(fo(e.c),e.c.unmount(),Object.entries(e.c).forEach(o=>{let n=o[1];ve(n)?(n.unmount(),Me(n)):ge(n)&&Me(n)}),de(e.k)):ao(e)?(e.unmount(),de(e.k)):e.unmountKey(t)}function Ie(e){ze(e,dt)}function go(e){V(e)&&Ie(e);let t=F(e,y);if(t){let o=ye(t);o&&dt(o,t)}}function Qe(e,t,o){let n=ce(e.c.render(t,o));return _(n,y,e.k),n}var ue=class{w;k;constructor(t){this.w=t,this.k=le(this)}unmount(){this.w.forEach(function(t){t.unmount(),Me(t)})}};function Ne(e,t){if(t){for(let[o,n]of Object.entries(t||{}))if(o.startsWith("on")&&o.length>4){if(n){let i,d=n;typeof n!="function"&&n.handler&&n.options!==void 0&&(d=n.handler,i=n.options);let c=o[2]=="-"?o.slice(3):o.slice(2).toLowerCase();e.addEventListener(c,d,i)}}else if(o=="style"&&n instanceof Object)for(let i of Object.keys(n)){let d=n[i]===null||n[i]===void 0?"":n[i],c=typeof d=="number"?d.toString():d,v=e.style;c.endsWith("!important")?v.setProperty(lo(i),c.substring(0,c.length-10),"important"):Oe(v,i)?v[i]=c:v.setProperty(i,c)}else if(typeof n=="boolean")so(e,o,n);else if(typeof n!="function")if(o=="vtwith"){let i=F(e,y);if(i)P("vtwith attr set on element that already has a key",i);else{let d=new ue(n);_(e,y,d.k)}}else(n||n=="")&&_(e,o,n)}}function G(e,t,...o){let n=t||{};if(typeof e=="string"){let i=document.createElement(e);return Ne(i,n),e=="template"?je(i.content,o):je(i,o),i}else{if(ge(e.prototype))return new pe(new e(n,o),n,o).e;if(typeof e=="function"){let i=e(n,o);return fe(i)||Array.isArray(i)?i:ce(i)}}return P("Invalid tag",e,n,o),xe()}function He(e,t){return t.replaceWith(e),$e(e),e}var me=class{emittingObject;event;data;constructor(t,o,n){this.emittingObject=t,this.event=o,this.data=n}};function ct(e,t,o){et(be,t,e.vtKey,o),et(se,e.vtKey,t,o)}function et(e,t,o,n){let i=e.get(t);if(i!==void 0)i.set(o,n);else{let d=new Map;d.set(o,n),e.set(t,d)}}function fo(e){let t=se.get(e.vtKey);t&&Array.from(t.keys()).forEach(o=>{tt(be,o,e.vtKey),tt(se,e.vtKey,o)})}function tt(e,t,o){let n=e.get(t);n!==void 0?n.get(o)!==void 0?(n.delete(o),n.size<=0&&e.delete(t)):Te("WARN removing event listener, secondKey is not present",t,o):Te("WARN removing event listener, firstKey is not present",t,o)}function ht(e,t,o){let n=be.get(e);n!==void 0?n.entries().forEach(([i,d])=>{(!o||o.vtKey!=i)&&d(t)}):Te("WARN, event emitted with no listeners",e,t)}function l(e,t,o=!1){let n=Ee.get(t);if(n){if(!o)return;let d=document.adoptedStyleSheets.findIndex(c=>c==n.sheet);document.adoptedStyleSheets.splice(d,1)}let i=new CSSStyleSheet;i.replace(e),document.adoptedStyleSheets.push(i),Ee.set(t,{sheet:i,text:e,key:t})}function r(e,t,o){let n=t.children;return delete t.children,o!==void 0&&(t.key=o),G(e,t,n)}var s=r;var pt=!1,ke=function(e,t){pt||(pt=!0,l(`
@keyframes vtd-spinner-rotate{to{transform:rotate(360deg);}}
.vtd-spinner{
display:inline-block;
vertical-align:middle;
border-radius:50%;
border:0.15em solid color-mix(in srgb, currentColor 25%, transparent);
border-top-color:currentColor;
animation:vtd-spinner-rotate 0.6s linear infinite;
}
`,"vtd/Spinner"));let o=e.size||"1em";return a(r("span",{class:"vtd-spinner",role:"status","aria-label":e.label,style:{width:o,height:o}}),e)};var yo=Symbol("velodesign.clearThemeOptionOverrides");function u(e,t){let o={},n=new Map,i=new Map;for(let[d,c]of Object.entries(e))i.set(d,function(){return x[c]});for(let[d,c]of Object.entries(t??{}))i.set(d,function(){return c});for(let d of i.keys())Object.defineProperty(o,d,{enumerable:!0,get:function(){return n.has(d)?n.get(d):i.get(d)()},set:function(c){c==null?n.delete(d):n.set(d,c)}});return Object.defineProperty(o,yo,{value:function(){n.clear()}}),o}var x=u({},{closeSymbol:function(){return"x"},cancelSymbol:function(){return"\u2715"},confirmSymbol:function(){return"\u2713"},emptySymbol:function(){return"\u2205"},collapseSymbol:function(){return"\u2026"},prevSymbol:function(){return"\u2039"},nextSymbol:function(){return"\u203A"}});var mt=u({},{loadingSymbol:function(){return r(ke,{size:"1em"})}}),ut=!1,b=function(e,t){ut||(ut=!0,l(`
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
`,"vtd/Button"));let o=!1,n;e.loadingOnClick&&(n=r("span",{class:"vtd-button-spinner",children:r(mt.loadingSymbol,{})}));let i=r("span",{children:t});return a(s("button",{type:"button",class:`vtd-button vtd-button-${e.type||"primary"}`,tabindex:0,"aria-label":e.ariaLabel,disabled:e.disabled,onClick:d=>{e.loadingOnClick&&o||e.onClick&&(e.loadingOnClick?(o=!0,n&&(n.style.visibility="visible"),i.style.visibility="hidden",e.onClick(d,()=>{o=!1,e.loadingOnClick&&n&&(n.style.visibility="hidden"),i.style.visibility="visible"})):e.onClick(d))},children:[i,n]}),e)};var vt=console.log,gt=console.error,we=function(e,t,o){e.setAttribute(t,o)};var ft=new Map,ko=!1;setTimeout(()=>{ft.entries().forEach(([e,t])=>{vt(t)}),ko=!0},1e3);var C="#fff",A="#000",bt="#050505",wo=C,So=A,Co="#66b2ff",To="#c6ff9e",Eo="#ffd666",Mo="#ff6666",yt="#fafafa",jo="#151515",Ao=C,Do="#004c99",Lo="#286100",Oo="#997000",zo="#990000",Be=":color-mix(in hsl,",$o=[-8,-6,-4,-2,0,2,4,6,8],L=(e,t,o,n)=>$o.map(i=>i<0?`--${e}-${i/2+5}${Be}${t} ${-1*i}0%,${o} ${10+i}0%)`:i==0?`--${e}-5:${o};--${e}:${o}`:`--${e}-${i/2+5}${Be}${o} ${10-i}0%,${n} ${i}0%)`).join(";")+";",_o=[1,2,3,4,5,6,7,8,9],xt=(e,t,o)=>_o.map(n=>`--${e}-${n}${Be}${t} ${10-n}0%,${o} ${n}0%)`).join(";")+`;--${e}:${t};--${e}-alt:${o};`,kt=(e,t,o)=>`--${e}:${t};--${e}-alt:${o};`,wt=function(e){we(document.getElementsByTagName("html")[0],"data-theme",e)},Re="vtd-preferred-theme",N="light",U="dark",Io="default",O=N,Pe={getColorScheme:function(){return O},setColorScheme:function(e){localStorage.setItem(Re,e),Pe.resetColorScheme()},resetColorScheme:function(){let e=localStorage.getItem(Re);if(e){let t=globalThis.matchMedia("(prefers-color-scheme: light)").matches;e==U?O=U:e==N?O=N:(e==Io||localStorage.removeItem(Re),t?O=N:O=U)}O==N?wt(N):wt(U)}};function St(e,t,o=!1){l(`
${e}[data-theme="light"]{
${kt("text",t?.textLightColor||bt,t?.textDarkColor||yt)}
${xt("background",t?.backgroundLightColor||wo,t?.backgroundLightAltColor||So)}
${L("primary",C,t?.primaryLightColor||Co,A)}
${L("secondary",C,t?.secondaryLightColor||To,A)}
${L("warning",C,t?.warningLightColor||Eo,A)}
${L("accent",C,t?.accentLightColor||Mo,A)}
color-scheme:light;}
${e}[data-theme="dark"]{
${kt("text",t?.textDarkColor||yt,t?.textLightColor||bt)}
${xt("background",t?.backgroundDarkColor||jo,t?.backgroundDarkAltColor||Ao)}
${L("primary",A,t?.primaryDarkColor||Do,C)}
${L("secondary",A,t?.secondaryDarkColor||Lo,C)}
${L("warning",A,t?.warningDarkColor||Oo,C)}
${L("accent",A,t?.accentDarkColor||zo,C)}
color-scheme:dark;}
${e}{color:var(--text);background-color:var(--background);}
${e} a{color:var(--text)}`,`vtd/Theme on ${e}`,o)}var Ve={injectStyles(e,t=!0){t&&l(`*{margin:0;padding:0;line-height:calc(1em + 4px);box-sizing:border-box;}
html{-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none;scroll-behavior:smooth;interpolate-size:allow-keywords;}
body{-webkit-font-smoothing:antialiased;min-width:250px}
img,svg{display:inline-block;max-width:100%;}
input,button,textarea,select{font:inherit;}
p,h1,h2,h3{overflow-wrap:break-word;}
p{text-wrap:pretty;}
h1,h2,h3{text-wrap:balance;}
menu,ul,ol{list-style:none;}
button{color:inherit;border:none;}
:target{scroll-margin-block:20ex;}`,"Velodesign CSS reset"),St(":root",e),globalThis.setTimeout(function(){l("body{transition:color 0.25s ease-in-out,background-color 0.25s ease-in-out;}","Velodesign Theme Color transitions")},150),Pe.resetColorScheme()}};var D={changeLocation:function(e){try{globalThis.history.pushState(null,"",e),globalThis.dispatchEvent(new Event("locationchange"))}catch(t){gt(t),D.loadNewPageLocation(e)}},loadNewPageLocation:function(e){globalThis.location.href=e}};var m=function(e,t){let o=e.spa??!1;return a(r("a",{class:"vtd-link",href:e.to,onClick:o?n=>{n.preventDefault(),D.changeLocation(e.to)}:void 0,children:t}),e)};var No=u({closeSymbol:"closeSymbol",cancelSymbol:"cancelSymbol"});var Ho=u({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"},{editSymbol:function(){return"\u270E"}});var Ct=!1,J=function(e,t){return Ct||(Ct=!0,l(`
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
`,"vtd/Card")),a(s("div",{class:"vtd-card",children:[e.header&&r("div",{class:"vtd-card-header",children:e.header}),r("div",{class:"vtd-card-body",children:t}),e.footer&&r("div",{class:"vtd-card-footer",children:e.footer})]}),e)};var Ro=new Set(["abstract","as","async","await","break","case","catch","class","const","continue","declare","default","delete","do","else","enum","export","extends","false","finally","for","from","function","get","if","implements","import","in","instanceof","interface","is","keyof","let","new","null","of","override","private","protected","public","readonly","return","satisfies","set","static","super","switch","this","throw","true","try","type","typeof","undefined","var","void","while","yield"]),Bo=new RegExp(["(?<comment>\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/)","(?<string>\"(?:[^\"\\\\\\n]|\\\\.)*\"|'(?:[^'\\\\\\n]|\\\\.)*'|`(?:[^`\\\\]|\\\\.)*`)","(?<closeAngle><\\/)(?<closeTag>[A-Za-z][\\w.]*)","(?<!\\w|\\$|\\)|\\])(?<openAngle><)(?<openTag>[A-Za-z][\\w.]*)","(?<number>\\b\\d[\\d_]*(?:\\.\\d+)?\\b)","(?<attr>\\b[A-Za-z_$][\\w$]*(?=\\s*=[^=]))","(?<word>\\b[A-Za-z_$][\\w$]*\\b)","(?<punct>[{}()\\[\\];:,.>/=+\\-*!?&|%^~]+|<)"].join("|"),"g"),Po=new RegExp(["(?<comment>\\/\\*[\\s\\S]*?\\*\\/)",`(?<string>"(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*')`,"(?<attr>--?[\\w-]+(?=\\s*:)|\\b[a-zA-Z-]+(?=\\s*:))","(?<number>#[0-9a-fA-F]{3,8}\\b|\\b\\d[\\d._]*(?:px|em|rem|%|vh|vw|s|ms|fr|deg)?\\b)","(?<tag>[.#]?[\\w-]+(?=[^;{}]*\\{))","(?<word>\\b[A-Za-z-][\\w-]*\\b)","(?<punct>[{}();:,>+~*]+)"].join("|"),"g");function Vo(e,t){if(t=="plain")return[{kind:"",text:e}];let o=t=="css"?Po:Bo,n=t!="css",i=[],d=0;o.lastIndex=0;let c=0,v=!1,f=0,g=()=>n&&c>0&&!v&&f==0,w;for(;(w=o.exec(e))!==null;){w.index>d&&i.push({kind:"",text:e.slice(d,w.index)});let S=w.groups??{},M=w[0],R=S.closeTag??S.openTag;if(R!==void 0){let j=S.closeTag!==void 0;n&&(c=Math.max(0,c+(j?-1:1)),v=!0),i.push({kind:"punct",text:j?"</":"<"}),i.push({kind:"tag",text:R})}else if(S.word!==void 0){let j=!g()&&Ro.has(S.word);i.push({kind:j?"keyword":"",text:S.word})}else{let j=["comment","string","number","attr","punct"].find(ro=>S[ro]!==void 0),oo=g()&&(j=="string"||j=="number");i.push({kind:oo?"":j??"",text:M}),n&&j=="punct"&&to(M)}d=w.index+M.length}return d<e.length&&i.push({kind:"",text:e.slice(d)}),i;function to(S){for(let M=0;M<S.length;M++){let R=S[M];R=="{"?f++:R=="}"?f=Math.max(0,f-1):R==">"&&v&&f==0&&(M>0&&S[M-1]=="/"&&(c=Math.max(0,c-1)),v=!1)}}}var Tt=!1,X=function(e){let t=e.language??"tsx",o=Vo(e.code,t);Tt||(Tt=!0,l(`
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
`,"vtd/CodeBlock"));let n=["vtd-code-block"];return e.wrap&&n.push("vtd-code-block-wrap"),e.showLineNumbers&&n.push("vtd-code-block-numbered"),a(r("pre",{class:n.join(" "),tabindex:0,role:"region","aria-label":e.ariaLabel,children:r("code",{children:e.showLineNumbers?Fo(o):Et(o)})}),e)};function Et(e){return e.map(t=>t.kind?r("span",{class:`vtd-code-block-${t.kind}`,children:t.text}):t.text)}function Fo(e){let t=[[]];for(let o of e)o.text.split(`
`).forEach((i,d)=>{d>0&&t.push([]),i.length>0&&t[t.length-1].push({kind:o.kind,text:i})});return t.map(o=>r("span",{class:"vtd-code-block-line",children:Et(o)}))}var Ko=u({closeSymbol:"closeSymbol"});var Mt=!1,K=class extends p{mount(){Mt||(Mt=!0,l(`
.vtd-nav-link{
position:relative;
color:inherit;
text-decoration:none;
}
/*
 * See Tabs' identical comment for the full explanation: ::after carries a permanently-bold,
 * invisible copy of the link text (via attr(data-label), set only when children is a plain
 * string) so switching a link's own weight to bold on activation - which can happen live, via
 * popstate/locationchange, while this exact element stays mounted - never shifts layout.
 */
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
`,"vtd/NavLink")),globalThis.addEventListener("popstate",this.refresh),globalThis.addEventListener("locationchange",this.refresh)}unmount(){globalThis.removeEventListener("popstate",this.refresh),globalThis.removeEventListener("locationchange",this.refresh)}render(t,o){let i=(t.exact===void 0?!0:t.exact)?globalThis.location.pathname==t.to:globalThis.location.pathname.startsWith(t.to),d=t.activeClass||"vtd-nav-link-active",c=t.spa??!1,v=o.length==1?o[0]:void 0,f=typeof v=="string"||typeof v=="number"||typeof v=="bigint"?String(v):void 0;return a(r("a",{href:t.to,class:`vtd-nav-link${i?` ${d}`:""}`,"data-label":f,"aria-current":i?"page":void 0,onClick:c?g=>{g.preventDefault(),D.changeLocation(t.to)}:void 0,children:o}),t)}};var jt=!1,Z=class extends p{#e;#n;#t=[];#o;#i=(t=!1)=>{this.#e.removeAttribute("open"),t&&this.#n.focus()};#r=t=>{this.#o.closeOnOutsideClick!==!1&&this.#e.open&&(t.target instanceof Node&&this.#e.contains(t.target)||this.#i())};#a=t=>{if(t.key=="Escape"){this.#e.open&&(t.preventDefault(),this.#i(!0));return}if(!this.#e.open||this.#t.length==0)return;let o=this.#t.indexOf(document.activeElement);t.key=="ArrowDown"?(t.preventDefault(),this.#t[(o+1)%this.#t.length]?.focus()):t.key=="ArrowUp"?(t.preventDefault(),this.#t[(o-1+this.#t.length)%this.#t.length]?.focus()):t.key=="Home"?(t.preventDefault(),this.#t[0]?.focus()):t.key=="End"&&(t.preventDefault(),this.#t[this.#t.length-1]?.focus())};mount(){document.addEventListener("click",this.#r)}unmount(){document.removeEventListener("click",this.#r)}constructor(t,o){super(t,o),this.#o=t,jt||(jt=!0,l(`
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
`,"vtd/Menu")),this.#n=r("summary",{class:"vtd-menu-trigger","aria-label":t.ariaLabel,children:t.trigger}),this.#t=t.items.map(n=>r("a",{role:"menuitem",href:n.href||"#","aria-disabled":n.disabled,class:`vtd-menu-item${n.disabled?" vtd-menu-item-disabled":""}`,onClick:i=>{if(n.disabled){i.preventDefault();return}n.href?n.spa&&(i.preventDefault(),D.changeLocation(n.href)):i.preventDefault(),n.onClick?.(),this.#i()},children:n.label})),this.#e=s("details",{class:"vtd-menu",onKeyDown:this.#a,children:[this.#n,r("ul",{class:"vtd-menu-list",role:"menu",children:this.#t.map(n=>r("li",{role:"none",children:n}))})]}),a(this.#e,t)}render(){return this.#e}};var Lt=u({collapseSymbol:"collapseSymbol"}),At=!1,Dt=3;function qo(e,t){if(t===void 0||e.length<=Math.max(t,Dt))return{head:e,collapsed:[],tail:[]};let n=Math.max(t,Dt)-2;return{head:e.slice(0,1),collapsed:e.slice(1,e.length-n),tail:e.slice(e.length-n)}}var Q=function(e,t){At||(At=!0,l(`
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
`,"vtd/Breadcrumbs"));let{head:o,collapsed:n,tail:i}=qo(e.items,e.maxItems),d=e.separator||"/",c=g=>g.leading?s("span",{class:"vtd-breadcrumbs-crumb",children:[r("span",{class:"vtd-breadcrumbs-leading",children:g.leading}),g.label]}):g.label,v=(g,w)=>s("li",{class:"vtd-breadcrumbs-item","aria-current":g.to?void 0:"page",children:[g.to?r(m,{to:g.to,spa:e.spa,children:c(g)}):r("span",{children:c(g)}),w?null:r("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true",children:d})]}),f=n.length>0?s("li",{class:"vtd-breadcrumbs-item",children:[r(Z,{ariaLabel:e.expandLabel,trigger:r("span",{class:"vtd-breadcrumbs-expand",children:e.expandButtonChildren||r(Lt.collapseSymbol,{})}),items:n.map(g=>({label:c(g),href:g.to,spa:e.spa}))}),r("span",{class:"vtd-breadcrumbs-separator","aria-hidden":"true",children:d})]}):null;return a(r("nav",{"aria-label":e.ariaLabel,class:"vtd-breadcrumbs",children:s("ol",{class:"vtd-breadcrumbs-list",children:[o.map((g,w)=>v(g,n.length==0&&w==o.length-1)),f,i.map((g,w)=>v(g,w==i.length-1))]})}),e)};var Wo=u({prevSymbol:"prevSymbol",nextSymbol:"nextSymbol"});var Ot=!1,Ke=function(e,t){return Ot||(Ot=!0,l(`
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
`,"vtd/Navbar")),a(s("nav",{class:"vtd-navbar",children:[s("div",{class:"vtd-navbar-start",children:[e.brand&&r("div",{class:"vtd-navbar-brand",children:e.brand}),e.leading&&r("div",{class:"vtd-navbar-leading",children:e.leading})]}),r("div",{class:"vtd-navbar-items",children:t})]}),e)};var zt=!1,ee=class extends p{#e;#n=new Map;#t=new Map;#o=void 0;#i=void 0;#r;#a;constructor(t,o){super(t,o),this.#r=t.items,this.#a=t.topOffset??0,zt||(zt=!0,l(`
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
/* The rail: one continuous line down the list, with the current entry's segment picked out */
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
/* Each level steps in from the rail; past 6 they all sit at the same depth */
.vtd-table-of-contents-level-1{padding-inline-start:0.9em;}
.vtd-table-of-contents-level-2{padding-inline-start:1.8em;}
.vtd-table-of-contents-level-3{padding-inline-start:2.7em;}
.vtd-table-of-contents-level-4{padding-inline-start:3.6em;}
.vtd-table-of-contents-level-5{padding-inline-start:4.5em;}
.vtd-table-of-contents-level-6{padding-inline-start:5.4em;}
@media (prefers-reduced-motion: reduce){
.vtd-table-of-contents-link{transition:none;}
}
`,"vtd/TableOfContents"));let n=r("ol",{class:"vtd-table-of-contents-list",children:t.items.map(i=>{let d=Math.min(Math.max(i.level??1,1),6),c=r("a",{class:`vtd-table-of-contents-link vtd-table-of-contents-level-${d}`,href:`#${i.id}`,onClick:()=>{this.#s(i.id)},children:i.label});return this.#n.set(i.id,c),r("li",{class:"vtd-table-of-contents-item",children:c})})});this.#e=a(s("nav",{class:"vtd-table-of-contents","aria-label":t.ariaLabel,children:[t.header?r("div",{class:"vtd-table-of-contents-header",children:t.header}):null,n]}),t)}mount(){let t=new IntersectionObserver(o=>this.#l(o),{rootMargin:`-${this.#a}px 0px -70% 0px`});for(let o of this.#r){let n=document.getElementById(o.id);n&&t.observe(n)}this.#i=t}unmount(){this.#i?.disconnect(),this.#i=void 0}#l(t){for(let o of t)this.#t.set(o.target.id,{intersecting:o.isIntersecting,top:o.boundingClientRect.top});this.#s(this.#c())}#d(){let t=document.documentElement.scrollHeight;return t<=globalThis.innerHeight+2?!1:globalThis.scrollY+globalThis.innerHeight>=t-2}#c(){if(this.#d())return this.#r[this.#r.length-1]?.id;for(let o of this.#r)if(this.#t.get(o.id)?.intersecting)return o.id;let t;for(let o of this.#r){let n=this.#t.get(o.id);n&&n.top<=this.#a&&(t=o.id)}return t??this.#r[0]?.id}#s(t){if(t===this.#o)return;let o=this.#o===void 0?void 0:this.#n.get(this.#o);o&&(o.classList.remove("vtd-table-of-contents-link-active"),o.removeAttribute("aria-current"));let n=t===void 0?void 0:this.#n.get(t);n&&(n.classList.add("vtd-table-of-contents-link-active"),n.setAttribute("aria-current","true")),this.#o=t}render(){return this.#e}};var Yo=u({closeSymbol:"closeSymbol"});var Nt=u({closeSymbol:"closeSymbol"}),It=!1,te=function(e,t){It||(It=!0,l(`
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
`,"vtd/Tag"));let o=s("span",{class:`vtd-tag vtd-tag-${e.type||"neutral"}`,children:[t,e.onRemove&&r("button",{type:"button",class:"vtd-tag-remove","aria-label":e.removeLabel,onClick:()=>{e.onRemove?.(),o.remove()},children:r(Nt.closeSymbol,{})})]});return a(o,e)};var Uo=u({},{emptySymbol:function(){return r("span",{class:"vtd-empty-icon","aria-hidden":"true",children:r(x.emptySymbol,{})})}});var Ht=!1,qe=function(e,t){return Ht||(Ht=!0,l(`
.vtd-statistic-title{font-size:0.85em;opacity:0.7;margin-block-end:0.25em;}
.vtd-statistic-value{font-size:1.75em;font-weight:bold;line-height:1.2;}
.vtd-statistic-affix{font-size:0.6em;font-weight:normal;margin-inline:0.15em;}
`,"vtd/Statistic")),a(s("div",{class:"vtd-statistic",children:[r("div",{class:"vtd-statistic-title",children:e.title}),s("div",{class:"vtd-statistic-value",children:[e.prefix&&r("span",{class:"vtd-statistic-affix",children:e.prefix}),e.value,e.suffix&&r("span",{class:"vtd-statistic-affix",children:e.suffix})]})]}),e)};var Jo=u({closeSymbol:"closeSymbol"});var Xo=u({confirmSymbol:"confirmSymbol",cancelSymbol:"cancelSymbol"});var We=u({},{columnsSymbol:function(){return r("span",{"aria-hidden":"true",children:"\u25A5"})},emptySymbol:function(){return r("span",{class:"vtd-data-table-empty-icon","aria-hidden":"true",children:r(x.emptySymbol,{})})}});var Ft=!1;function q(){Ft||(Ft=!0,l(`
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
`,"vtd/Typography"))}function W(e,t,o){let n=[e];return t&&n.push(`vtd-text-${t}`),o?.strong&&n.push("vtd-text-strong"),o?.italic&&n.push("vtd-text-italic"),o?.underline&&n.push("vtd-text-underline"),o?.strike&&n.push("vtd-text-strike"),o?.numeric&&n.push("vtd-text-numeric"),n.join(" ")}var k=function(e,t){q();let o=W(`vtd-heading vtd-heading-${e.level}`,e.type);switch(e.level){case 1:return a(r("h1",{class:o,children:t}),e);case 2:return a(r("h2",{class:o,children:t}),e);case 3:return a(r("h3",{class:o,children:t}),e);case 4:return a(r("h4",{class:o,children:t}),e);case 5:return a(r("h5",{class:o,children:t}),e);default:return a(r("h6",{class:o,children:t}),e)}};var z=function(e,t){q();let o=W(e.code?"vtd-text-code":"",e.type,e).trim();return e.code?a(r("code",{class:o,children:t}),e):a(r("span",{class:o,children:t}),e)};var T=function(e,t){return q(),a(r("p",{class:W("vtd-paragraph",e.type),children:t}),e)};var Kt={none:"0",xs:"0.25em",sm:"0.5em",md:"0.75em",lg:"1.25em",xl:"2em"};function Se(e,t="md"){return e===void 0?Kt[t]:Kt[e]??e}function Ce(e){if(e!==void 0)return e==="start"||e==="end"?`flex-${e}`:e}function qt(e){if(e!==void 0)return e==="between"||e==="around"?`space-${e}`:e==="start"||e==="end"?`flex-${e}`:e}var Wt=!1,h=function(e,t){Wt||(Wt=!0,l(`
.vtd-stack{display:flex;width:100%;box-sizing:border-box;}
/* An inline stack sizes to its content, like the text it sits among */
.vtd-stack-inline{display:inline-flex;width:auto;}
`,"vtd/Stack"));let o=e.direction??"row";return a(r("div",{class:`vtd-stack${e.inline?" vtd-stack-inline":""}`,style:{flexDirection:o,gap:Se(e.gap),alignItems:Ce(e.align),justifyContent:qt(e.justify),flexWrap:e.wrap??o==="row"?"wrap":"nowrap"},children:t}),e)};var Yt=!1,oe=function(e,t){Yt||(Yt=!0,l(`
.vtd-grid{display:grid;width:100%;box-sizing:border-box;}
`,"vtd/Grid"));let o=e.columns!==void 0?`repeat(${Math.max(1,Math.floor(e.columns))}, minmax(0, 1fr))`:`repeat(auto-fill, minmax(${e.minColumnWidth??"16em"}, 1fr))`;return a(r("div",{class:"vtd-grid",style:{gridTemplateColumns:o,gap:Se(e.gap),alignItems:Ce(e.align)},children:t}),e)};var Gt=u({emptySymbol:"emptySymbol"},{seriesColors:["var(--primary)","var(--secondary)","var(--accent)","var(--warning)","var(--primary-7)","var(--secondary-7)","var(--accent-7)","var(--warning-7)"]});var E=e=>({label:"GitHub",to:`https://github.com/Velotype/${e}`}),H=e=>({label:"JSR",to:`https://jsr.io/@velotype/${e}`}),Ge=[{id:"velotype",name:"Velotype",tag:"framework",tagKind:"primary",tagline:"A fast and small TSX framework that updates the DOM in place.",about:["Velotype creates real DOM elements as your TSX runs. There is no virtual DOM and no reconciler: a value that changes renders only the part of the page that depends on it, and a list that changes renders, moves, or removes only the rows that changed.","Components are classes with fields and methods, not functions with hooks, and you write TSX the way you would write HTML."],stats:[{title:"Minified",value:"21",suffix:"kb"},{title:"Gzipped",value:"7.7",suffix:"kb"},{title:"Virtual DOM",value:"None"}],statsNote:"Velotype 0.3.1, the jsx-runtime entry point, minified with deno bundle. Bundlers drop the parts an app does not import.",features:[{title:"Closer to the DOM",text:"TSX returns real HTMLElements. Attributes are HTML attributes (class, not className), event listeners are added with addEventListener, and there is nothing between your code and the page to learn."},{title:"Updates in place",text:"RenderObject renders a value to every place it appears and renders again when it changes. RenderObjectArray and RenderTemplateArray render only the affected rows, and sort(), move(), and filter() move the rows that already exist instead of rendering them again."},{title:"Classes, not hooks",text:"A Component is a class: fields hold state, methods change it, and Velotype calls mount(), render(), and unmount() for you. There are no use*() calls and no call-order rules."},{title:"Small, and tree-shakeable",text:"About 21kb minified and 7.7kb gzipped for the whole runtime (Velotype 0.3.1), and bundlers drop the parts an app does not import."},{title:"Type-checked styles and events",text:"Style objects are checked against CSS: property names, keywords, units, and colors. on* attributes take a handler or {handler, options}, and on- listens for a custom event by its exact name."},{title:"Made for development",text:"Hot reloading keeps component state, ErrorBoundary contains a failing component, AsyncRenderObject shows only the latest request's result, and the Velotype DevTools extension shows the live component tree."}],samples:[{title:"A component that updates in place",intro:"The RenderObject renders its value wherever it is placed, and setting a new value renders only that element again.",language:"tsx",code:`class Counter extends Component<EmptyAttrs> {
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
}`},links:[E("velotype"),H("velotype")],resources:[{name:"velotype-perf-demo",tag:"benchmark",text:"The same fleet dashboard written in Velotype, Solid, Svelte, Vue, React, Preact, Lit, and plain DOM code, with 10,000 rows by default. The page loads each one and times creating rows, live updates, typing a filter, sorting, and moving a row in your own browser.",links:[E("velotype-perf-demo"),{label:"Live demo",to:"https://velotype.github.io/velotype-perf-demo/"}]},{name:"example-velotype-projects",tag:"examples",text:"Example projects using the Velotype modules: hot reloading with the veloserver development server, a minimal velomicro app, the demo pages from React's 2018 hooks talk recreated in Velotype, and the custom-elements-everywhere tests that check Velotype works with Custom Elements.",links:[E("example-velotype-projects")]}]},{id:"velodesign",name:"velodesign",tag:"UI components",tagKind:"primary",tagline:"A themed component library for Velotype, built from native HTML elements.",about:["velodesign is a component library for Velotype apps. Where HTML has an element for the job (input, button, details, dialog), the component is that element, so keyboard support, form participation, and browser autofill come from the platform.","This site is built with it."],stats:[{title:"Theme",value:"Light + dark"},{title:"Colors set by",value:"CSS variables"}],features:[{title:"Native elements first",text:"A Checkbox is a real input, a Modal is a real dialog, and an Accordion is built on details. Nothing reimplements what the browser already does."},{title:"Re-theme with variables",text:"Colors come from a small set of CSS custom properties (--text, --background, --primary, --secondary, --warning, --accent, each with a light-to-dark ramp). Change them and every component follows, with no component code touched."},{title:"Light and dark",text:`The theme follows the browser's color scheme, or a reader's choice through [data-theme="light"|"dark"].`},{title:"A broad set",text:"Typography, layout, form, navigation, feedback, overlays, data display, data entry, and charts: from Stack, Grid, and Button to DataTable, DatePicker, Command, and LineChart."},{title:"Spacing from one scale",text:"Stack and Grid draw gaps from a shared scale in em, so two rows that look the same are the same, and spacing follows the type size."},{title:"Updates only what changed",text:"Handlers do the smallest DOM update that expresses a change, and none when nothing changed, so focus, caret, selection, and scroll position survive."}],samples:[{title:"Use a few components",language:"tsx",code:`import { Button, Checkbox, Stack, Theme } from "@velotype/velodesign"
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
// and sets up the CSS custom properties every component reads.`},links:[E("velodesign"),H("velodesign"),{label:"Component showcase",to:"https://velotype.github.io/velodesign/"}]},{id:"velossr",name:"velossr",tag:"server rendering",tagKind:"primary",tagline:"TSX rendered to HTML on the server, with no virtual DOM and no client runtime.",about:["velossr is the server-side version of Velotype's TSX. Components run once per request and produce bytes, either all at once or streamed as async pieces resolve.","Pair it with Velotype for interactive parts of a page: the server renders the markup for each one, and Velotype replaces it in the browser with replaceElementWithRoot()."],stats:[{title:"Virtual DOM",value:"None"},{title:"Client runtime",value:"None"}],features:[{title:"Static and dynamic components",text:"A StaticServerComponent is a plain function that renders synchronously. A DynamicServerComponent is a class that can see the Request and render async."},{title:"Streaming",text:"Render a page all at once, or as a ReadableStream where async components flush in place as they resolve."},{title:"Prepared once",text:"prepareHTMLVNodeForRendering() prepares a page at module load, so the static parts are not rebuilt for every request."},{title:"Escaped by default",text:"Text, attribute values, and attribute names are escaped where they are written. Inline style and script text is written as is, changing only the sequences that would end the element early."},{title:"Contained failures",text:"If a dynamic component throws, its onFail() renders instead, so one failing component does not take down the rest of the page."},{title:"Same TSX as Velotype",text:"HTML attributes, style objects, and fragments work as they do in the browser, so markup moves between server and client unchanged."}],samples:[{title:"A server that renders a page",language:"tsx",code:`import { type Context, Router, Server } from "jsr:@velotype/veloserver"
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
}`},links:[E("velossr"),H("velossr")]},{id:"velodevtools",name:"Velotype DevTools",tag:"Chrome extension",tagKind:"secondary",tagline:"Chrome DevTools panels for debugging Velotype apps.",about:["A Chrome extension with three DevTools panels, plus a toolbar popup that shows whether Velotype is present on the page.","It works with a Velotype build that installs the devtools hook, which every current Velotype entry point does. If a site uses Velotype and the tree is empty, its bundle predates the hook."],stats:[{title:"Panels",value:"3"}],features:[{title:"Velotype: the component tree",text:"The page's live component tree, like React DevTools: class names, DOM anchors, and for class components their attrs and instance fields, including live RenderObject values. Click a node to inspect it and highlight it on the page."},{title:"Real expandable fields",text:"Any object, array, Map, or Set field expands to its live values, fetched fresh on each expand and kept live for branches that are already open."},{title:"Velotype Events",text:"A snapshot of the event bus's current registrations: every listening key, how many listeners it has, and which live components or RenderObjects they belong to."},{title:"VeloJSON",text:"Decodes VSON and VBIN payloads. It inspects network request and response bodies while the panel is open, and has a manual bytes-to-JSON and JSON-to-bytes tool."}],samples:[],install:{title:"Build and load it",language:"plain",code:`deno task build

// chrome://extensions -> enable Developer mode -> Load unpacked
// -> select the dist/ folder`},links:[E("velodevtools")]},{id:"veloserver",name:"veloserver",tag:"web server",tagKind:"warning",tagline:"A web server framework for high-performance websites, on Deno.",about:["veloserver is a small server framework: a typed router, per-request metadata, inspectors that run before and after handlers, static file serving, and a development server that hot-updates Velotype apps."],stats:[],features:[{title:"A typed router",text:"get(), head(), and post() take a path or several paths. :name matches one segment and stores it as a path variable, a trailing * matches the rest, and a static segment beats a variable or wildcard."},{title:"Typed request metadata",text:"Context.meta holds metadata for each request, created by a function you give the Router and typed by the Router's type parameter."},{title:"Inspectors",text:"An Inspector runs before and after the handlers of a path. Its request side can answer the request itself, and its response side sees every response, which suits logging, timing, and auth."},{title:"Static files",text:"mountFiles() and mountFile() serve a directory or a file, held in memory with an ETag and a gzip copy for clients that accept it."},{title:"Clean shutdown",text:"serve() listens for SIGINT, SIGTERM, and SIGUSR1, and server.close() stops it from code."},{title:"A development server",text:"@velotype/veloserver/dev serves a Velotype app and updates the page when files change: per-module, or by rebuilding the bundle."}],samples:[{title:"Hello veloserver",language:"tsx",code:`import { Router, Server } from "jsr:@velotype/veloserver"

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
deno run --allow-net server.ts`},links:[E("veloserver"),H("veloserver")]},{id:"velojson",name:"velojson (VSON)",tag:"binary JSON",tagKind:"warning",tagline:"A compact binary encoding for JSON, and a faster one when both sides share a schema.",about:["VSON (Velocity JSON) maps JavaScript JSON data to bytes one to one: anything JSON can hold, VSON can hold, and nothing else is added.","It has three formats. Each one solves a cost of the one before it."],stats:[{title:"Base vs JSON text",value:"20-25%",suffix:" smaller"},{title:"Key Table vs JSON text",value:"20-65%",suffix:" smaller"},{title:"VBIN vs JSON text",value:"25-70%",suffix:" smaller"}],features:[{title:"VSON Base",text:"A direct structural translation of JSON, typically 20-25% smaller than the text. Because it mirrors JSON's structure it works for streaming and partial decoding."},{title:"VSON Key Table",text:"Every unique key is stored once, in a table at the end of the message. About 20% smaller than JSON for a single object, and up to about 65% smaller for many records that share a wide set of keys."},{title:"VBIN",text:"Encoder and decoder agree on a key-ID mapping ahead of time, so the table is not sent and key names are never encoded or decoded as strings. Typically 25-70% smaller, and significantly faster than native JSON."},{title:"Honest about speed",text:"The VSON Base and Key Table formats typically run slower than native JSON.stringify() and JSON.parse(). The speed comes from VBIN."},{title:"Server and browser builds",text:"The main module is tuned for speed and supports every format. The browser module is tuned for size (about 4.3kb minified) and supports Key Table."},{title:"Debuggable",text:"The Velotype DevTools extension decodes VSON and VBIN payloads straight from the network panel."}],samples:[{title:"Encode and decode",language:"tsx",code:`import { VSON } from 'jsr:@velotype/velojson'

const startObj = { name: "Some name", age: 20, address: null }

const objBinary: Uint8Array = VSON.encode(startObj)
console.log(objBinary.length) // 34 bytes, against 44 for the JSON text

const endObj = VSON.decode(objBinary)
console.log(JSON.stringify(endObj))
// {"name":"Some name","age":20,"address":null}`}],install:{title:"Add velojson to a Deno project",language:"plain",code:`deno add jsr:@velotype/velojson

// In the browser:
import { VSON } from "jsr:@velotype/velojson/browser"`},links:[E("velojson"),H("velojson")]},{id:"velomicro",name:"velomicro",tag:"1kb",tagKind:"neutral",tagline:"A 1kb TSX framework that shows how TSX rendering works.",about:["velomicro is the smallest version of the idea: a createElement that returns real DOM elements, and function components. It exists to be read. The Medium article walks through its source line by line."],stats:[{title:"Size",value:"1",suffix:"kb"}],features:[{title:"Returns HTMLElements",text:"TSX evaluates to real elements, so a div tag is an HTMLDivElement."},{title:"HTML attributes",text:"It calls setAttribute(), so you write class and the other attributes as you would in HTML."},{title:"Style objects",text:"Pass an object of camelCase properties, or a string."},{title:"Function components",text:"A component is a function from attrs to an element."}],samples:[{title:"A counter function component",language:"tsx",code:`const Counter: FunctionComponent<EmptyAttrs> = function(_attrs: EmptyAttrs): HTMLDivElement {
    let count = 0
    const counterLabel = <span>{count}</span>
    return <div>
        <div>Counter value: {counterLabel}</div>
        <button type="button" onClick={() => {
            count += 1
            counterLabel.innerText = count
        }}>Increment</button>
    </div>
}`}],install:{title:"Add velomicro to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomicro"},links:[E("velomicro"),H("velomicro"),{label:"Medium article",to:"https://argoday.medium.com/a-1kb-tsx-framework-to-demonstrate-how-tsx-works-velotype-tsx-micro-337c32ff0648"}]},{id:"velomini",name:"velomini",tag:"2.5kb",tagKind:"neutral",tagline:"A 2.5kb TSX framework that adds classes to velomicro.",about:["velomini is velomicro plus a Component class with render, mount, unmount, and refresh. Its way to update the page is to tear down a component's subtree and render it again. The Medium article walks through the source.","Velotype is the next step: it keeps classes and replaces refresh() with values that update in place."],stats:[{title:"Size",value:"2.5",suffix:"kb"}],features:[{title:"Class components",text:"Extend Component and implement render(). Velomini calls mount() and unmount() for you."},{title:"getComponent()",text:"Convert an element back to the class instance that built it, to call its methods."},{title:"Everything from velomicro",text:"Real HTMLElements, HTML attributes, style objects, and function components."}],samples:[{title:"A class component",language:"tsx",code:`class ComplexComponent extends Component<{foo: string}> {
    override render(attrs) {
        return <div>Hello {attrs.foo}</div>
    }
}

// Then in TSX:
return <div><ComplexComponent foo="Component!"></ComplexComponent></div>`}],install:{title:"Add velomini to a Deno project",language:"plain",code:"deno add jsr:@velotype/velomini"},links:[E("velomini"),H("velomini"),{label:"Medium article",to:"https://argoday.medium.com/a-2-5kb-tsx-framework-that-adds-classes-velomini-6f65cd979d40"}]}],Jt=[{title:"Front end",note:"TSX that creates real DOM elements, with no virtual DOM.",ids:["velotype","velodesign","velossr","velodevtools"]},{title:"Server and wire format",ids:["veloserver","velojson"]},{title:"Learn",note:"The smallest versions of the idea, written to be read.",ids:["velomicro","velomini"]}],ne=new Map(Ge.map(e=>[e.id,e]));var hr=e=>{let t=[...e.classList].find(o=>o.startsWith("language-"))?.slice(9);return t=="css"?"css":t=="tsx"||t=="ts"||t=="json"?"tsx":"plain"};function pr(e){for(let t of e.querySelectorAll("pre")){let o=t.querySelector("code");o&&t.replaceWith(r(X,{code:o.textContent.replace(/\n$/,""),language:hr(o)}))}}function ur(e){return[...e.querySelectorAll("h2, h3")].map(t=>({id:t.id,label:t.textContent,level:t.tagName=="H2"?1:2}))}function Xt(){let e=JSON.parse(document.getElementById("docs-nav").textContent),t=ne.get(e.project),o=e.nav.find(f=>f.id==e.project),n=o.pages.find(f=>f.url==e.current),i=o.pages.indexOf(n),d=o.pages[i-1],c=o.pages[i+1],v=document.getElementById("doc");return v.remove(),pr(v),l(`
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
.vtp-docs-nav a{display:block;padding:0.25em 0.5em;border-radius:0.25rem;text-decoration:none;color:inherit;line-height:1.5;}
.vtp-docs-nav a:hover{background-color:var(--background-2);}
.vtp-docs-nav .vtd-nav-link-active{background-color:var(--background-3);font-weight:bold;}
@media (max-width:64rem){.vtp-docs{grid-template-columns:12rem minmax(0,1fr);}.vtp-docs-toc{display:none;}}
@media (max-width:44rem){.vtp-docs{grid-template-columns:minmax(0,1fr);}.vtp-docs-nav{position:static;}}
`,"vtp-docs"),s("div",{class:"vtp-docs",children:[r("nav",{class:"vtp-docs-nav","aria-label":`${t.name} documentation`,children:s(h,{direction:"column",gap:"sm",children:[r(k,{level:2,style:{fontSize:"1.1em"},children:t.name}),r("div",{children:o.pages.map(f=>r(K,{to:f.url,children:f.title}))}),r(z,{type:"muted",children:"Other docs"}),r("div",{children:e.nav.filter(f=>f.id!=e.project).map(f=>r(m,{to:f.pages[0].url,children:f.name}))})]})}),s("div",{class:"vtp-docs-article",children:[r(Q,{items:[{label:"Docs",to:o.pages[0].url},{label:t.name,to:o.pages[0].url},{label:n.title}]}),v,s("div",{class:"vtp-docs-pager",children:[r("div",{children:d&&s(m,{to:d.url,children:["\u2190 ",d.title]})}),r("div",{children:c&&s(m,{to:c.url,children:[c.title," \u2192"]})})]})]}),r("div",{class:"vtp-docs-toc",children:r(ee,{ariaLabel:"On this page",header:"On this page",items:ur(v)})})]})}var Ue={velodesign:"/docs/velodesign/",velodevtools:"/docs/velodevtools/",velojson:"/docs/velojson/",velomicro:"/docs/velomicro/",velomini:"/docs/velomini/",veloserver:"/docs/veloserver/",velossr:"/docs/velossr/",velotype:"/docs/velotype/"};var Je=e=>`/projects/${e.id}/`,ie=e=>Ue[e.id],ae=e=>()=>{location.assign(e)},vr=()=>s(Ke,{style:{borderBottom:"1px solid var(--background-4)"},brand:r(m,{to:"/",style:{fontWeight:"bold",color:"inherit",textDecoration:"none"},children:"The Velocity Project"}),children:[r(m,{to:Ue.velotype,children:"Docs"}),r(m,{to:"https://github.com/Velotype",children:"GitHub"}),r(m,{to:"https://jsr.io/@velotype",children:"JSR"}),r(m,{to:"https://argoday.medium.com/",children:"Articles"})]}),gr=()=>s(z,{type:"muted",children:["All projects live under the ",r(m,{to:"https://github.com/Velotype",children:"Velotype"})," organization on GitHub and are published to ",r(m,{to:"https://jsr.io/@velotype",children:"JSR"}),". Articles are on ",r(m,{to:"https://argoday.medium.com/",children:"Medium"}),". This site is built with Velotype and velodesign."]}),Zt=e=>s(h,{direction:"column",gap:"sm",children:[r(k,{level:3,children:e.title}),e.intro&&r(T,{children:e.intro}),r(X,{code:e.code,language:e.language})]}),fr=e=>r(J,{id:e.id,header:s(h,{align:"center",children:[r(m,{to:Je(e),style:{color:"inherit",textDecoration:"none"},children:e.name}),r(te,{type:e.tagKind,children:e.tag})]}),children:s(h,{direction:"column",children:[r(T,{children:e.tagline}),s(h,{children:[r(m,{to:Je(e),children:"Learn more"}),ie(e)&&r(m,{to:ie(e),children:"Docs"}),r(m,{to:e.links[0].to,children:"GitHub"})]})]})}),br=()=>s(h,{direction:"column",gap:"lg",children:[s(h,{direction:"column",children:[r(k,{level:1,children:"The Velocity Project"}),r(T,{style:{fontSize:"1.2em"},children:"A suite of components for building software platforms end to end: the UI in the browser, the servers behind it, and the wire format between them."}),r(T,{children:s(z,{type:"muted",children:["Each piece stands on its own and is published separately. They are designed to fit together: ",r(m,{to:"/projects/veloserver/",children:"veloserver"})," serves pages and APIs, ",r(m,{to:"/projects/velossr/",children:"velossr"})," or ",r(m,{to:"/projects/velotype/",children:"Velotype"})," renders them, and ",r(m,{to:"/projects/velojson/",children:"VSON"})," carries data between the two. More pieces are on the way."]})}),s(h,{children:[r(b,{type:"primary",onClick:ae("/projects/velotype/"),children:"Start with Velotype"}),r(b,{type:"secondary",onClick:ae("https://github.com/Velotype"),children:"GitHub"})]})]}),Jt.map(e=>s(h,{direction:"column",children:[r(k,{level:2,children:e.title}),e.note&&r(z,{type:"muted",children:e.note}),r(oe,{minColumnWidth:"22em",children:e.ids.map(t=>fr(ne.get(t)))})]}))]}),yr=e=>r(J,{header:s(h,{align:"center",children:[r("span",{children:e.name}),r(te,{type:"neutral",children:e.tag})]}),children:s(h,{direction:"column",children:[r(T,{children:e.text}),r(h,{children:e.links.map(t=>r(m,{to:t.to,children:t.label}))})]})}),xr=e=>s(h,{direction:"column",gap:"lg",children:[r(Q,{items:[{label:"The Velocity Project",to:"/"},{label:e.name}]}),s(h,{direction:"column",children:[s(h,{align:"center",children:[r(k,{level:1,children:e.name}),r(te,{type:e.tagKind,children:e.tag})]}),r(T,{style:{fontSize:"1.2em"},children:e.tagline}),s(h,{children:[ie(e)&&r(b,{type:"primary",onClick:ae(ie(e)),children:"Documentation"}),r(b,{type:ie(e)?"secondary":"primary",onClick:ae(e.links[0].to),children:e.links[0].label}),e.links.slice(1).map(t=>r(b,{type:"secondary",onClick:ae(t.to),children:t.label}))]})]}),e.stats.length>0&&s(h,{direction:"column",gap:"sm",children:[r(h,{gap:"lg",children:e.stats.map(t=>r(qe,{title:t.title,value:t.value,suffix:t.suffix}))}),e.statsNote&&r(z,{type:"muted",children:e.statsNote})]}),r(h,{direction:"column",gap:"sm",children:e.about.map(t=>r(T,{children:t}))}),s(h,{direction:"column",children:[r(k,{level:2,children:"What it does"}),r(oe,{minColumnWidth:"18em",children:e.features.map(t=>r(J,{header:t.title,children:r(T,{children:t.text})}))})]}),e.samples.length>0&&s(h,{direction:"column",children:[r(k,{level:2,children:"See it in action"}),e.samples.map(Zt)]}),s(h,{direction:"column",children:[r(k,{level:2,children:"Get started"}),Zt(e.install)]}),e.resources&&s(h,{direction:"column",children:[r(k,{level:2,children:"Demos and examples"}),r(oe,{minColumnWidth:"22em",children:e.resources.map(yr)})]}),s(h,{direction:"column",children:[r(k,{level:2,children:"Links"}),r(h,{children:e.links.map(t=>r(m,{to:t.to,children:t.label}))})]}),s(h,{direction:"column",children:[r(k,{level:2,children:"Other projects"}),r(h,{children:Ge.filter(t=>t!==e).map(t=>r(m,{to:Je(t),children:t.name}))})]})]});Ve.injectStyles();var Qt=document.body.dataset.page,eo=Qt?ne.get(Qt):void 0;He(s("div",{style:{fontFamily:"system-ui, -apple-system, 'Segoe UI', sans-serif"},children:[vr(),r("main",{style:{maxWidth:document.body.dataset.doc?"84rem":"60rem",margin:"0 auto",padding:"2rem 1rem 4rem"},children:s(h,{direction:"column",gap:"lg",children:[document.body.dataset.doc?Xt():eo?xr(eo):br(),gr()]})})]}),document.getElementById("app"));
