!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"cssAsync",(function(){return G})),r.d(n,"cssSync",(function(){return Y})),r.d(n,"cssTransaction",(function(){return et})),r.d(n,"globalCss",(function(){return st})),r.d(n,"inlineCss",(function(){return tt})),r.d(n,"transactCss",(function(){return ot}));var i={};r.r(i),r.d(i,"appendAsync",(function(){return ct})),r.d(i,"appendSync",(function(){return lt})),r.d(i,"attrAsync",(function(){return pt})),r.d(i,"attrSync",(function(){return ft})),r.d(i,"classSync",(function(){return mt})),r.d(i,"classAsync",(function(){return gt})),r.d(i,"data",(function(){return vt})),r.d(i,"getTextNodes",(function(){return wt})),r.d(i,"htmlAsync",(function(){return bt})),r.d(i,"htmlSync",(function(){return yt})),r.d(i,"prependAsync",(function(){return Et})),r.d(i,"prependSync",(function(){return $t})),r.d(i,"itemize",(function(){return St})),r.d(i,"textAsync",(function(){return Pt})),r.d(i,"textSync",(function(){return Mt}));var s={};r.r(s),r.d(s,"play",(function(){return Nt})),r.d(s,"on",(function(){return Kt})),r.d(s,"off",(function(){return Yt})),r.d(s,"trigger",(function(){return Xt}));var a=function(t){return t instanceof String||"string"==typeof t&&null!==t},o=function(t){return!Array.isArray(t)&&"object"==typeof t&&t},l=function(t){return"function"==typeof t},c=function(t){return Array.isArray(t)||"object"==typeof t&&t||l(t)},h=function(t){return t instanceof Number||"number"==typeof t},u=function(t){return h(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)},d=function(t,e){var r=void 0;return c(t)&&Object.keys(t).forEach((n,i)=>{!1!==r&&(r=e(u(n)?parseFloat(n):n,t[n],i))}),r},f=function(t,e){return function(t,e,r=!1){if(""==e)return t;var n=r?t.lastIndexOf(e):t.indexOf(e);return-1===n?t:t.substr(0,n)}(t,e,!0)};var p=function(){if(!(o(this)&&this.window||"undefined"!=typeof window))throw new Error("A window context is required.");const t=o(this)&&this.window?this.window:window;if(!t.WebQit){let e,r;t.WebQit={},Object.defineProperty(t.WebQit,"window",{get:()=>t}),Object.defineProperty(t.WebQit,"vendor",{value:{getName:()=>(e||(e=function(t){if(void 0!==t.InstallTrigger)return"firefox";if(/constructor/i.test(t.HTMLElement)||"[object SafariRemoteNotification]"===(!t.safari||void 0!==t.safari&&t.safari.pushNotification).toString())return"safari";var e=!(!t.chrome||!t.chrome.webstore&&!t.chrome.runtime),r=e&&-1!=t.navigator.userAgent.indexOf("Edg"),n=!!t.opr&&!!t.opr.addons||!!t.opera||t.navigator.userAgent.indexOf(" OPR/")>=0,i=!!t.document.documentMode,s=!i&&!!t.StyleMedia;return(e||n)&&t.CSS,s?"edge":i?"ie":n?"opera":r?"ie-chromium":e?"chrome":"unknown"}(t)),e),getPrefix:()=>(r||(r=function(t){var e=t.getComputedStyle(t.document.documentElement,""),r=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(t)),r)}})}return t.WebQit};class m{constructor(t,e=!0){this.window=t,this.async=e,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,e)=>{t&&!t()&&(this.readCallbacks[e]=null)}),this.writeCallbacks.forEach((t,e)=>{t&&!t()&&(this.writeCallbacks[e]=null)}),this._run()})}onread(t,e=!1){if(e)return new Promise((e,r)=>{!1===this.async?t(e,r):this.readCallbacks.push(()=>{t(e,r)})});!1===this.async?t():this.readCallbacks.push(t)}onwrite(t,e=!1){if(e)return new Promise((e,r)=>{!1===this.async?t(e,r):this.writeCallbacks.push(()=>{t(e,r)})});!1===this.async?t():this.writeCallbacks.push(t)}cycle(t,e,r){this.onread(()=>{var n=t(r);if(n){var i=n=>{this.onwrite(()=>{var i=e(n,r);if(i){var s=r=>{this.cycle(t,e,r)};i instanceof Promise?i.then(s):s()}})};n instanceof Promise?n.then(i):i()}})}}var g=function(t){return Array.isArray(t)},v=function(t,e,r=null){return g(e)?t.filter(t=>r?e.filter(e=>r(t,e)).length:-1===e.indexOf(t)):[]},w=function(t){return arguments.length&&(void 0===t||void 0===t)},y=function(t){return function(t){return null===t||""===t}(t)||w(t)||!1===t||0===t||c(t)&&!Object.keys(t).length},b=function(t,e=!0){return g(t)?t:!e&&o(t)?[t]:!1!==t&&0!==t&&y(t)?[]:function(t){return!a(t)&&!w(t.length)}(t)?Array.prototype.slice.call(t):o(t)?Object.values(t):[t]},$=function(t){const e=p.call(this);e.DOM.isDOMReady||"complete"===e.window.document.readyState?t(e.window):(e.window.domReadyCallbacks||(e.window.domReadyCallbacks=[],e.window.document.addEventListener("DOMContentLoaded",()=>{e.DOM.isDOMReady=!0,e.window.domReadyCallbacks.splice(0).forEach(t=>t(e.window))},!1)),e.window.domReadyCallbacks.push(t))};class E{constructor(t){this.window=t}onAdded(t,e,r={}){return r.on="added",this.onPresenceChange(t,(t,r,n,i,s)=>{e(t,r,n,i,s)},r)}onRemoved(t,e,r={}){return r.on="removed",this.onPresenceChange(t,(t,r,n,i,s)=>{e(t,r,n,i,s)},r)}onPresent(t,e,r={}){$.call(this.window,()=>{this.window.MutationObserver&&this.onAdded(t,(t,r)=>{t.forEach(t=>e(t,r))},r),a(t)?b(this.window.document.querySelectorAll(t)).forEach(t=>e(t,1)):t.parentNode&&e(t,1)})}onAbsent(t,e,r={}){$.call(this.window,()=>{this.window.MutationObserver&&onRemoved(t,(t,r)=>{t.forEach(t=>e(t,r))},r),a(t)?0===b(this.window.document.querySelectorAll(t)).length&&e(null,0):t.parentNode||e(t,0)})}onPresenceChange(t,e,r={}){t=b(t,!1);var n=(t,e)=>(e.$$searchCache||(e.$$searchCache=new Map),t.reduce((t,n)=>{var i;return e.$$searchCache.has(n)?i=e.$$searchCache.get(n):(i=((t,e)=>{if(e=e.filter(t=>t.matches),a(t)){var n=e.filter(e=>e.matches(t));if(!1!==r.observeIndirectMutation&&(n=e.reduce((e,r)=>e.concat(b(r.querySelectorAll(t))),n)).length)return n}else{if(e.includes(t))return[t];if(!1!==r.observeIndirectMutation&&e.length)for(var i=t;i=i.parentNode;)if(e.includes(i))return[t]}})(n,e,a(n))||[],e.$$searchCache.set(n,i)),t.concat(i)},[])),i=new Set,s=new Set,o=(a,o,l)=>{o&&"removed"===r.on||!o&&"added"===r.on||(a=n(t,a)).length&&(r.maintainCallState?(a.forEach(t=>{o?(i.add(t),s.delete(t)):(i.delete(t),s.add(t))}),e(a,o,l,i,s)):e(a,o,l))},l=r.context||this.window.document.documentElement;return this._observe(l,(t,e,n,i)=>{r.ignoreTransients||(o(t,0,!0),o(t.concat(e),1,!0),o(e,0,!0)),o(i,0),o(n,1)})}onAttrChange(t,e,r=[]){var n=new this.window.MutationObserver(e),i={attributes:!0,attributeOldValue:!0};return r&&(i.attributeFilter=r),n.observe(t,i),n}onTreeChange(t,e,r=!1){var n=new this.window.MutationObserver(e),i={childList:!0,subtree:r};return n.observe(t,i),n}onMutation(t,e,r){var n=new this.window.MutationObserver(e);return n.observe(t,r),n}_observe(t,e){if(!O.has(t)){const e=new Set,r=new this.window.MutationObserver(t=>{if(e.size){var r=t.reduce((t,e)=>t.concat(b(e.addedNodes)),[]),n=t.reduce((t,e)=>t.concat(b(e.removedNodes)),[]),i=[],s=[];r=new Set(r),n=new Set(n),r.forEach(t=>{n.has(t)&&(n.delete(t),r.delete(t),t.isConnected?i.push(t):s.push(t))}),r=[...r],n=[...n],e.forEach(t=>t(i,s,r,n))}});r.observe(t,{childList:!0,subtree:!0}),O.set(t,{callbacks:e,observer:r})}const r=O.get(t);return r.callbacks.add(e),{disconnect(){r.callbacks.delete(e)},reconnect(){r.callbacks.add(e)}}}}const O=new Map;var S=function(t){!function(t){t.CSS||(t.CSS={});t.CSS.escape||(t.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}(t),function(t){"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(t),function(t){t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1})}(t)};var C=function(t){const e=p.call(this);if(a(t)){var r;if(t.trim().startsWith("<")){var n=e.window.document.createElement("div");n.innerHtml=t,r=[n.firstChild]}else r=b(k.call(this,t));return r}return t instanceof e.window.Element?[t]:b(t)};function x(t,e=null,r=!1){const n=p.call(this);e=e||n.window.document;var i,s=r?"querySelectorAll":"querySelector";try{i=e[s](t)}catch(r){try{i=e[s](t.replace(/\:is\(/g,":matches("))}catch(r){try{i=e[s](t.replace(/\:is\(/g,":-webkit-any("))}catch(r){try{i=e[s](t.replace(/\:is\(/g,":-moz-any("))}catch(t){throw t}}}}return i}function k(t,e=bull){return x.call(this,t,e,!0)}var j=function(){const t=p.call(this);return t.DOM||(t.DOM={},S(t.window),t.DOM.reflow=new m(t.window),t.DOM.mutations=new E(t.window),t.DOM.query=C.bind(t.window),t.DOM.ready=$.bind(t.window)),t};function M(t){return C.call(this,t)}function P(t){const e=j.call(this);if(!t)return e;if(e[t])return e[t];if(e.DOM&&e.DOM[t])return e.DOM[t];throw new Error(`Play UI: ${t} not found in scope.`)}function T(t){var e,r,n=Symbol.for(".webqit");return(e=t[n])||Object.defineProperty(t,n,{value:{},enumerable:!1}),(r=e.oohtml)||(r={},e.playUi=r),r}var A=function(t){return l(t)||t&&"[object function]"==={}.toString.call(t)},D=function(t,e=null){var r={};return 2===arguments.length&&(g(t)&&g(e)?t.forEach((t,n)=>r[t]=e[n]):r[t]=e),r},L=function(t,e){return void 0===t?"":t.split(/(?=[A-Z])/).join(e||" ")},R=function(t,e){return"string"!=typeof t?t:t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+(void 0!==typeof e&&e?t.substr(1).toLowerCase():t.substr(1))}))},N=function(t,e){return t=R(t.replace(/-/g," ")).replace(/ /g,""),e?t:t[0].toLowerCase()+t.substr(1)};const _=["width","height","top","left","right","bottom","padding","padding-top","padding-left","padding-right","padding-bottom","margin","margin-top","margin-left","margin-right","margin-bottom","border-width","border-top-width","border-left-width","border-right-width","border-bottom-width","outline-width","outline-top-width","outline-left-width","outline-right-width","outline-bottom-width"].reduce((t,e)=>t.concat(e,N(e)),[]);function W(t,e=!0){const r=P.call(this,"window"),n=P.call(this,"vendor").getPrefix();return b(t).reduce((t,i)=>{var s=N(i,!0);return n.api+s in r.document.body.style&&(t.push(i.includes("-")?n.css+L(i,"-").toLowerCase():n.api+s),!e)?t:t.concat(i)},[])}function I(t,e=!1){var r=P.call(this,"window").document.styleSheets,n=function(e){try{for(var r=0;r<e.cssRules.length;r++){var n=e.cssRules[r];if(!0===t(n))return!0}}catch(t){}};if(e){for(var i=r.length-1;i>=0;i--)if(!0===n(r[i]))return!0}else for(i=0;i<r.length;i++)if(!0===n(r[i]))return!0}function F(t){const e=P.call(this,"window");t=t.indexOf("-")?t:L(t,"-");return e.getComputedStyle(e.document.body).getPropertyValue("--"+t)}function H(t,e,r=!0){const n=P.call(this,"window"),i=P.call(this,"prefix").getPrefix();var s=g(t)?t.join("|"):t;if(!e&&q[s])return q[s];var a=[];return I.call(this,e=>{if((e.type===n.CSSRule.KEYFRAMES_RULE||e.type===n.CSSRule[i.api.toUpperCase()+"_KEYFRAMES_RULE"])&&(g(t)?t:[t]).indexOf(e.name)>-1)return a=a.concat(a,function(t){for(var e=[],n=0;n<t.cssRules.length;n++){var i=t.cssRules[n],s=CSSRule.parse(i.cssText.replace(i.keyText,"").replace("{","").replace("}","").trim()),a=(i.keyText||" ").split(",").map(t=>"from"===t?0:"to"===t?1:parseInt(t)/100);if(r)for(Q(s,["animation-","transition-"]);a.length;){var o=_copyPlain(s);o.offset=a.shift(),e.push(o)}else s.offset=a.length>1?a:a[0],e.push(s)}return e.sort((t,e)=>t.offset===e.offset?0:t.offset>e.offset?1:-1)}(e)),!0},!0),q[s]=a,a}const Q=function(t,e,r=""){g(r)?r.forEach(e=>Q(t,e)):(t[r+"timing-function"]&&(t.easing=t[r+"timing-function"],delete t[r+"timing-function"]),t[r+"fill-mode"]&&(t.fill=t[r+"fill-mode"],delete t[r+"fill-mode"]),t[r+"iteration-count"]&&(t.iterations=t[r+"iteration-count"],delete t[r+"iteration-count"],"infinite"===t.iterations&&(t.iterations=1/0)))},q={};class z{constructor(t){d(t,(t,e)=>{if(["rotate","scale","skew","translate"].includes(t)){var r=R(t);this[r]=g(e)?new z[r](...e):new z[r](e)}})}toString(){return this.stringify()}stringify(t={}){return["rotate","scale","skew","translate"].reduce((t,e)=>{var r=R(e);return t+(this[r]&&this[r].length?" "+this[r]:"")},"").trim()}static parse(t,e=null){const r=P(e);var n=function(t){return Math.round(100*t)/100},i=function(t){var e=180*t/Math.PI;return n(e)},s=function(t){var e=[];if(r.WebKitCSSMatrix)return[(e=new r.WebKitCSSMatrix(t)).a,e.b,e.c,e.d,e.e,e.f];for(var n,i=/[\d\.\-]+/g;n=i.exec(t);)e.push(+n);return e}(t),a=s[0],o=s[1],l=s[2],c=s[3];if(a*c==o*l)throw new Error("Dramatic.parseTransform: matrix is singular");var h=Math.sqrt(a*a+o*o),u=(a/=h)*l+(o/=h)*c;l-=a*u,c-=o*u;var d=Math.sqrt(l*l+c*c);return u/=d,a*(c/=d)<o*(l/=d)&&(a=-a,o=-o,u=-u,h=-h),new this({translate:[s[4],s[5]],scale:[n(h),n(d)],rotate:i(Math.atan2(o,a)),skew:i(Math.atan(u))})}static parseRaw(t){for(var e={},r=/(\w+)\((.+?)\)/g,n=null;n=r.exec(t);)e[n[1]]=n[2].indexOf(",")>-1?n[2].replace(" ","").split(","):n[2];return new this(e)}}z.Rotate=class extends Array{toString(){return"rotate("+this.map(t=>u(t)?t+"deg":t).join(", ")+")"}},z.Scale=class extends Array{toString(){return"scale("+this.join(", ")+")"}},z.Skew=class extends Array{toString(){return"skew("+this.map(t=>u(t)?t+"deg":t).join(", ")+")"}},z.Translate=class extends Array{toString(){return"translate("+this.map(t=>u(t)?t+"px":t).join(", ")+")"}};class U{constructor(t){_each(t,(t,e)=>{Object.defineProperty(this,t,{value:e,enumerable:!0})})}toString(){return this.stringify()}stringify(t={}){return this.constructor.props.map(t=>this[t]).filter(t=>t).join(" ")}static parse(t){return new this(t.split(" ").filter(t=>t).reduce((t,e,r)=>(t[this.props[r]]=e,t),{}))}}U.props=["top","right","bottom","left"];class B{constructor(t,e=null){this.val=t,this.unit=e}get unitType(){return this.constructor.absUnits.includes(this.unit)?"absolute":this.constructor.relUnits.includes(this.unit)?"relative":null}valueOf(){return this.stringify()}toString(){return this.stringify()}stringify(t={}){return this.val+(this.unit?this.unit:"")}static parse(t){var e;if(a(t)&&(e=this.absUnits.concat(this.relUnits).reduce((e,r)=>e||(t.endsWith(r)?r:null),null))){var r=f(t,e);u(r)&&(t=r)}return new this(t,e)}}B.absUnits=["cm","mm","Q","in","pc","pt","px"],B.relUnits=["em","ex","ch","rem","lh","vw","vh","vmin","vmax"];class V{constructor(t,e){this.name=t,this.value=e}toString(){return this.stringify()}stringify(t={}){var e=this.name,r=this.value;return o(r)&&(r=!U.props.includes(e)||r instanceof U?"transform"!==e||r instanceof z?r instanceof B?r.stringify(t):r.toString():new z(r):new U(r)),r}static parse(t,e,r=null){return U.props.includes(t)?e=U.parse(e,r):"transform"===t?e=z.parse(e,r):(e=B.parse(e),_.includes(t)&&u(e.val)&&!e.unit&&(e.unit="px")),new this(t,e)}}class K{constructor(t){d(t,(t,e)=>{Object.defineProperty(this,t,{value:e,enumerable:!0})})}toString(){return this.stringify()}stringify(t={}){var e=[];return d(this.stringifyEach(t),(t,r)=>{e.push(`${t}: ${r}`)}),e.join("; ")}stringifyEach(t={}){var e={};return d(this,(r,n)=>{n instanceof V?n=n.stringify(t):_isObject(n)&&(n=n.toString()),e[r]=n}),e}static parse(t,e=null){return this.parseEach(t.split(";").filter(t=>t).reduce((t,e)=>(t[e[0].trim()]=e[1].trim(),t),{}),e)}static parseEach(t,e=null){var r={};return d(t,(t,n)=>{r[t]=V.parse(t,n,e)}),new this(r)}}var Y=function(t,...e){return e.length>1&&a(e[0])||o(e[0])?Z.call(this,t,...e):X.call(this,t,...e)};function X(t,e,r=null,n=null){const i=P.call(this,"window"),s=M.call(this,t)[0];var a=i.getComputedStyle(s,r),o=b(e).reduce((t,e)=>(t[e]=a.getPropertyValue(W.call(this,e)[0]),t),{});return g(e)?o:o[e]}function Z(t,e,r=null){var n=(e=a(e)?D(e,r):e)instanceof K?e.stringifyEach():K.parseEach(e,this).stringifyEach();return M.call(this,t).forEach(t=>{d(n,(e,r)=>{t.style[W.call(this,e)[0]]=r})}),this}var G=function(t,...e){return P.call(this,"reflow")[e.length>1&&a(e[0])||o(e[0])?"onwrite":"onread"]((r,n)=>{r(Y.call(this,t,...e))},!0)};class J{constructor(t,e,r,n){this.el=t,this.params=b(e),this.readCallback=r,this.writeCallback=n,this.$savepoints=[]}save(){var t=this.readCallback(this.el,this.params);return t instanceof Promise?t.then(t=>this.$savepoints.push(t)):o(t)?this.$savepoints.push(t):void 0}commit(t=0){for(var e=0;e<=t&&t<this.$savepoints.length;e++)this.$savepoints[e]=null;return this}rollback(t=0){if(!u(t))throw new Error("A valid transaction ID transaction must be provided!");var e=e=>{var r=this.$savepoints.splice(t),n=r.shift();if(!n)return{};var i=r.pop(),s={};return this.params.forEach(t=>{i&&e[t]!==i[t]||e[t]!==n[t]&&(s[t]=n[t])}),s},r=this.readCallback(this.el,this.params);return r instanceof Promise?r.then(t=>this.writeCallback(this.el,e(t))):this.writeCallback(this.el,e(r))}depth(){return this.$savepoints.length}}var tt=function(t,e){var r=M.call(this,t)[0].getAttribute("style");"all"===e&&(e=r.split(";").map(t=>t.split(":")[0]));var n=W.call(this,e).reduce((t,e)=>{var n=new RegExp(";[ ]*?"+e+":([^;]+);?","g");return t[e]=(n.exec(";"+r)||["",""])[1].trim(),t},{});return g(e)?n:n[e]},et=function(t,e){const r=M.call(this,t);return new J(r[0],e,(t,e)=>tt.call(this,t,e),(t,e)=>G.call(this,t,e))},rt=function(t,...e){return e.forEach(e=>{t.indexOf(e)<0&&t.push(e)}),t},nt=function(t,e){var r=[];return function(t,e){e=(e=e||Object.prototype)&&!g(e)?[e]:e;var r=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)r.push(t),t=t?Object.getPrototypeOf(t):null;return r}(t,e).forEach(t=>{rt(r,...Object.getOwnPropertyNames(t))}),r};function it(t,e,r=!1,n=!1,i=!1){var s=0,a=t.shift();if((u(a)||!0===a||!1===a)&&(s=a,a=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((t,l)=>{(c(t)||A(t))&&(r?nt(t):Object.getOwnPropertyNames(t)).forEach(c=>{if(e(c,a,t,l)){var h=a[c],d=t[c];if((g(h)&&g(d)||o(h)&&o(d))&&(!0===s||s>0))a[c]=g(h)&&g(d)?[]:{},it([u(s)?s-1:s,a[c],h,d],e,r,n,i);else if(g(a)&&g(t))n?a[c]=d:a.push(d);else try{i?Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(t,c)):a[c]=t[c]}catch(t){}}})}),a}var st=function(t,e,r=!1){const n=P.call(this,"window"),i=M.call(this,t)[0];var s=g(e)?e.join("|"):e;if(!r&&at[s]&&at[s].el===i){var a=function(t,e=[],r=!0){var n=0;return u(arguments[0])&&c(arguments[1])&&(n=arguments[0],t=arguments[1],e=arguments[2]||[]),it([n,{},t],(t,r,n)=>A(e)?e(t):!g(e)||!e.length||e.indexOf(t)>-1,!1,!1,r)}(at[s]);return delete a.el,a}var o=[];return I.call(this,t=>{if(t.type===n.CSSRule.STYLE_RULE&&i.matches(t.selectorText)){var r=e;if(!e){r=[];for(var s=0;s<t.style.length;s++)r.push(t.style[s])}o.push(W.call(this,r).reduce((e,r)=>(e[r]=t.style[r],e),{}))}}),o.forEach(t=>{}),at||(at={}),at[s]=o.slice(),at[s].el=i,o};const at={};var ot=async function(t,e,r=null,n=null,i=!1){var s=o(e)?Object.keys(e):[e];n=o(e)?r:n;const a=i?G:Y;var l,c=M.call(this,t)[0],h=tt.call(this,t,s);if(await a.call(this,t,e,r),n){var u=n(c);l=s.reduce((t,e)=>(t[e]=u[e],t),{}),o(e)||(l=l[e])}else l=a.call(this,t,s);return await a.call(this,t,h),l},lt=function(t,...e){return w(e[0])&&(e[0]=""),M.call(this,t).forEach(t=>{t.append(...e)}),this},ct=function(t,...e){return P.call(this,"reflow").onwrite((r,n)=>{r(lt.call(this,t,...e))},!0)},ht=function(t,...e){return e.forEach(e=>function(t,e,r=!1){for(var n=t.indexOf(e);n>-1&&(r||!1===r);)t.splice(n,1),r>0&&r--,n=t.indexOf(e);return t}(t,e)),t},ut=function(t){return t.filter((t,e,r)=>r.indexOf(t)===e)},dt=function(t,e,r=null){return g(e)?t.filter(t=>r?e.filter(e=>r(t,e)).length:-1!==e.indexOf(t)):[]},ft=function(t,e,r=null,n=null){const i=M.call(this,t);if(2===arguments.length){if(a(e))return i[0].getAttribute(e);if(g(e)){var s={};return e.forEach(t=>{s[t]=i[0].getAttribute(t)}),s}}var l=e;return o(l)?n=r:l=D(e,r),i.forEach(t=>{d(l,(r,i)=>{if(arguments.length>3||o(e)&&arguments.length>2){var s=t.getAttribute(r),l=s?s.split(" ").map(t=>t.trim()).filter(t=>t):[],c=a(i)?i.trim().split(" ").map(t=>t.trim()).filter(t=>t):b(i);!n&&dt(l,c).length?t.setAttribute(r,ht(l,...c).join(" ")):n&&v(c,l).length&&t.setAttribute(r,ut(l.concat(c)).join(" "))}else!1===i?t.removeAttribute(r):t.setAttribute(r,!0===i?"true":i)})}),this},pt=function(t,e,r=null,n=null){const i=P.call(this,"reflow");return 2===arguments.length?i.onwrite(t=>{t(ft.call(this,...arguments))},!0):i.onread(t=>{t(ft.call(this,...arguments))},!0)},mt=function(t,...e){return ft.call(this,t,"class",...e)},gt=function(t,...e){return pt.call(this,t,"class",...e)},vt=function(t,e,r=null){const n=M.call(this,t);if(2===arguments.length){const t=T(n[0]);if(t.data||(t.data={}),a(e))return t.data[e];if(g(e)){var i={};return e.forEach(e=>{i[e]=t.data[e]}),i}}var s=e;return o(e)||(s=D(e,r)),n.forEach(t=>{const e=T(t);e.data||(e.data={}),d(s,(t,r)=>{w(r)?delete e.data[t]:e.data[t]=r})}),this},wt=function(t){const e=P.call(this,"window");var r={acceptNode:function(t){if("SCRIPT"!==t.parentNode.nodeName)return e.NodeFilter.FILTER_ACCEPT}},n=[];return M.call(this,t).forEach(t=>{for(var i,s=e.document.createTreeWalker(t,e.NodeFilter.SHOW_TEXT,r,!1);i=s.nextNode();)n.push(i.nodeValue)}),n},yt=function(t,e=null){const r=M.call(this,t);return arguments.length>1?(r.forEach(t=>{a(e)?t.innerHTML=e:(t.innerHTML="",w(e)||t.append(e))}),this):r[0].innerHTML},bt=function(t,e=null){let r=P.call(this,"reflow");return arguments.length>1?r.onwrite((t,e)=>{t(yt.call(this,...arguments))},!0):r.onread((t,e)=>{t(yt.call(this,...arguments))},!0)},$t=function(t,...e){return w(e[0])&&(e[0]=""),M.call(this,t).forEach(t=>{t.prepend(...e)}),this},Et=function(t,...e){return P.call(this,"reflow").onwrite((r,n)=>{r($t.call(this,t,...e))},!0)},Ot=function(t,e=!1){var r=[];if(t.length)if(t.length%2){var n=Math.round(t.length/2)-1;r=t.slice(n,n+1)}else{n=t.length/2-1;r=t.slice(n,n+2)}return e?r:r[0]};function St(t,e,r=null,n=null,i={}){const s=P.call(this,"window"),a=P.call(this,"Observer"),o=P.call(this,"reflow"),l=P.call(this,"OOHTML"),h=i.itemIndexAttribute||"data-index",f=(t,e,n,s,a)=>{var o,c;if(a&&t.children.length)o=Ct(t,"["+h+'="'+n+'"]');else if(i.itemExportId?c=e[i.itemExportId]:(c=e[n],y(c)&&u(n)&&(c=e["#"]),y(c)&&(c=e.default)),!y(c)){o=c[0].cloneNode(!0);var d={};b(t.children).forEach(t=>{d[t.getAttribute(h)]=t});var f=function(t,e,r=!1,n=!1,i=!1){if(-1===t.indexOf(e))return r?[]:void 0;var s=!0===r?t.length-1:!1===r?1:r,a=i?t.lastIndexOf(e)+1:t.indexOf(e)+1,o=w(e)?[]:t.slice(a,a+s);return n&&o.length<s&&o.length<t.length&&(A(n)&&!n(s-o.length)||(o=o.concat(t.slice(0,s-o.length)))),r?o:o[0]}(Object.keys(d),n+"",!0).reduce((t,e)=>t||d[e],null);if(f)f.before(o);else t.append(o);o.setAttribute(h,n)}if(o&&(!A(r)||!1!==r("setState",o,s,n,a))){o[l.meta.get("api.setState")](s)}};return M.call(this,t).forEach(t=>{const u=T(t).boundItems;u&&u!==e&&xt(t,"["+h+"]").forEach(t=>t.remove());let p=t[l.meta.get("api.moduleref")],m=p?p[l.meta.get("api.exports")]:null;if(p&&m&&c(e)){var v=!!Ct(t,"["+h+"]");if(d(e,(e,r)=>f(t,m,e,r,v)),!1!==i.setState&&a.observe&&(u&&a.unobserve(u,null,null,{tags:["#playui-itemize",St,this]}),a.observe(e,n=>{n.forEach(n=>{g(e)&&"length"===n.name||("del"===n.type?((t,e,n)=>{var i=Ct(t,"["+h+'="'+e+'"]');if(i){if(!A(r)||!1!==r("clearState",i,n,e)){let t=l.meta.get("api.clearState");i[t]()}var s=()=>i.remove();void 0 instanceof Promise?(void 0).then(s).catch(s):s()}})(t,n.name,n.oldValue):"set"!==n.type&&"def"!==n.type||f(n.name,n.value,n.isUpdate))})},{tags:["#playui-itemize",St,this]}),T(t).boundItems=e),n){var w,y=new Map,b=async(s=null,a=null)=>{var l,c,h=Object.values(e).filter(t=>!y.has(t));if(s&&a||(w=w||!0,await o.onread(e=>{!1!==i.parentalOverflowBounds?(a=a||t.parentNode.getBoundingClientRect(),s=s||t.getBoundingClientRect()):(a=a||t.getBoundingClientRect(),s={width:t.scrollWidth,height:t.scrollHeight},("vertical"===i.orientation&&a.height===s.height||"vertical"!==i.orientation&&a.width===s.width)&&(s=h.reduce((t,e)=>{var n=r(e).el.getBoundingClientRect();return{width:t.width+n.width,height:t.height+n.height}},{width:0,height:0}))),e()},!0)),"vertical"===i.orientation?(l=a.height,c=s.height):(l=a.width,c=s.width),c>l)if(w="collapsing",d="start"===i.collapsionPoint?h.shift():"center"===i.collapsionPoint||"center-start"===i.collapsionPoint?Ot(h):"center-end"===i.collapsionPoint?Ot(h,!0).pop():h.pop()){var u=r(d);await o.onread(t=>{var e=u.el.getBoundingClientRect();y.set(d,"vertical"===i.orientation?e.height:e.width),t()},!0),await n("collapse",u.el,d,u.key,y.size)}else w=null;else if(c<l)if("collapsing"===w)w=null;else if(y.size){w="restoring";for(var d,f,p=y.keys();(f=p.next())&&!f.done;)d=f.value;l-c>=y.get(d)&&(u=r(d))?(y.delete(d),await n("restore",u.el,d,u.key,y.size)):w=null}else w=null;else w=null;w&&await b()};const r=r=>Object.keys(e).reduce((n,i)=>n||(e[i]===r?{el:Ct(t,"["+h+'="'+i+'"]'),key:i}:null),null);var $=!0;!function(t,e,r){if(!kt){if(!t.ResizeObserver)return;jt=new Map,kt=new t.ResizeObserver(t=>{t.forEach(t=>{jt.get(t.target)(t.contentRect)})})}var n=jt.get(e);jt.set(e,r),n||kt.observe(e)}(s,!1!==i.parentalOverflowBounds?t.parentNode:t,t=>{!$&&w||($=!1,b(null,t))}),setTimeout(()=>{u&&!w&&b()},0)}}}),this}const Ct=(t,e)=>b(t.children).reduce((t,r)=>t||(r.matches(e)?r:null),null),xt=(t,e)=>b(t.children).filter(t=>t.matches(e));var kt,jt;var Mt=function(t,e=null){const r=M.call(this,t);return arguments.length>1?(w(e)&&(e=""),r.forEach(t=>{t.innerText=e}),this):r[0].innerText},Pt=function(t,e=null){const r=P.call(this,"reflow");return arguments.length>1?r.onwrite(t=>{t(Mt.call(this,...arguments))},!0):r.onread(t=>{t(Mt.call(this,...arguments))},!0)},Tt=function(t,e=1){var r=0;t.forEach(t=>{r++});var n=t.slice(t.length-r,e);return arguments.length>1?n:n[0]};class At{constructor(t,e,r={}){this.el=t,this.$={el:t,readyCallbacks:[],finishCallbacks:[],cancelCallbacks:[],params:{...r},callFinish(){this.finishCallbacks.forEach(t=>{t(this.el)})},callCancel(){this.cancelCallbacks.forEach(t=>{t(this.el)})}},this.$.params.delay=h(this.$.params.delay)?this.$.params.delay:0,this.$.params.duration=h(this.$.params.duration)?this.$.params.duration:400,this.$.params.endDelay=h(this.$.params.endDelay)?this.$.params.endDelay:0}get anim(){return this.$.anim}onfinish(t){if(!A(t))throw new Error("Onfinish() accepts only a function.");return this.$.finishCallbacks.push(t),this}oncancel(t){if(!A(t))throw new Error("Oncancel() accepts only a function.");return this.$.cancelCallbacks.push(t),this}progress(){return this.$.anim?this.$.anim.currentTime/this.$.anim.effect.duration:0}seek(t){if(!h(t))throw new Error("Seek() accepts only a numeric value.");return this.ready((e,r)=>{var n=r.duration+(r.delay||0)+(r.endDelay||0);e.currentTime=Math.max(0,Math.min(t*n,n))}),this}reverse(){return this.ready(t=>t.reverse()),this}play(){return new Promise((t,e)=>{this.ready(r=>{r.play(),this.onfinish(()=>t(this)),this.oncancel(()=>e(this))},e)})}pause(){return this.ready(t=>t.pause()),this}finish(){return this.ready(t=>t.finish()),this}cancel(){return this.ready(t=>t.cancel()),this}}const Dt={};class Lt extends At{constructor(t,e,r={}){super(t,e,r),this.$.params.fill=this.$.params.fill||"forwards","duration"in this.$.params||(this.$.params.duration=400),this.$.params.easing&&-1===["ease-in","ease-out","ease-in-out"].indexOf(this.$.params.easing)&&-1===this.$.params.easing.indexOf("(")&&(this.$.params.easing=F.call(WebQit,this.$.params.easing)||this.$.params.easing);const n=t=>{t=t.slice();var r={},n={};t=t.map(t=>(t=K.parseEach(t).stringifyEach(),ht(Object.keys(t),"offset","easing").forEach(e=>{r[e]=void 0===r[e]?t[e]:r[e],n[e]=t[e]}),t));var i=g(e)?function(t,e=1){return arguments.length>1?Tt(t.slice().reverse(),e).reverse():Tt(t.slice().reverse())}(e):o(e)?e:n;try{var s=this.el.animate(t,this.$.params)}catch(t){return void(this.$.error=t)}this.$.params.reverse&&s.reverse(),s.effect||(s.effect={}),s.effect.duration||(s.effect.duration=this.$.params.duration),s.onfinish=()=>{this.$.params.cancelForCss&&(s.cancel(),"forwards"!==this.$.params.fill&&"both"!==this.$.params.fill||Y.call(WebQit,this.el,i)),this.$.callFinish()},s.oncancel=()=>this.$.callCancel(),this.$.anim=s,this.$.firstFrame=r,this.$.lastFrame=n,this.$.readyCallbacks.length&&this.$.readyCallbacks.forEach(t=>t(s,this.$.params,r,n))};A(e)?e(t,n):Lt.createCallback(t,e,n,t=>{this.$.error=t},this.$.params.animNameNoCache)}ready(t,e){this.$.error?e&&e(this.$.error):this.$.anim?t(this.$.anim,this.$.params,this.$.firstFrame,this.$.lastFrame):this.$.readyCallbacks.push(t)}static createCallback(t,e,r,n,i){var s=o(e)&&!Object.values(e).filter(t=>g(t)).length,l=g(e)&&e.length>1&&y(e[0]);if(s||l)WebQit.DOM.reflow.onread(()=>{l?(e.shift(),Lt.createCallback(t,[Y.call(WebQit,t,Object.keys(e[0])),...e],r,n,i)):Lt.createCallback(t,[Y.call(WebQit,t,Object.keys(e)),{...e}],r,n,i)});else{if(a(e)&&(Dt[e]&&Dt[e].length&&!i||(Dt[e]=H.call(WebQit,e),!Dt[e].length&&n&&n('Animation name "'+e+'" not found in any stylesheet!')),e=Dt[e]),g(e)){var c=[],h={};if(d(e,(t,e)=>{"auto"===e.height&&(h.height="auto",rt(c,t)),"auto"===e.width&&(h.width="auto",rt(c,t))}),c.length)return void ot.call(WebQit,t,h,t=>t.getBoundingClientRect()).then(t=>{e=e.map(t=>({...t})),c.forEach(r=>{"auto"===e[r].width&&(e[r].width=t.width+"px"),"auto"===e[r].height&&(e[r].height=t.height+"px")}),r(e)})}r(e)}}}class Rt extends At{constructor(t,e,r={}){super(t,e,r);var n=Symbol.for("play-js-ani2");const i=this;this.$.anim={el:t,timing:{currentTime:0,delay:i.$.params.delay,duration:i.$.params.duration,endDelay:i.$.params.endDelay,calculate(){var t="playing"===this.state||"paused"===this.state,e=t?this.delay:i.$.params.delay,r=t?this.duration:i.$.params.duration,n=t?this.endDelay:i.$.params.endDelay,s=e,a=s+r,o=a+n;this.delay=Math.max(0,Math.min(e,this.currentTime>=s?0:s-this.currentTime)),this.duration=Math.max(0,Math.min(r,this.currentTime>=a?0:a-this.currentTime)),this.endDelay=Math.max(0,Math.min(n,this.currentTime>=o?0:o-this.currentTime))},start(t){i.$.anim.el[n]&&i.$.anim.el[n].finish(),i.$.anim.el[n]=i.$.anim,this.state="playing",this.calculate(),this.delay||t(0),this.interval=setInterval(()=>{this.currentTime++,this.currentTime===this.delay&&t(0),this.currentTime===this.delay+this.duration&&t(1),this.currentTime===this.delay+this.duration+this.endDelay&&(this.state="finished",this.stop(),t(2),this.currentTime=0)},1)},stop(){clearInterval(this.interval)}},set currentTime(t){this.timing.currentTime=t,"playing"===this.timing.state&&(this.timing.stop(),this.play())},get currentTime(){return this.timing.currentTime},_callBegin(){return e(this.el,"begin",this.reversed,this.currentTime)},_callPause(){return e(this.el,"pause",this.reversed,this.currentTime)},_callEnd(){return e(this.el,"end",this.reversed,this.currentTime)},play(){this.timing.start(t=>{0===t?this._callBegin():1===t?this._callEnd():2===t&&i.$.callFinish()})},reverse(){this.reversed=!this.reversed,"playing"===this.timing.state&&(this.timing.stop(),this.play())},pause(){!1!==this._callPause()&&(this.timing.state="paused",this.timing.stop())},finish(){this.timing.state="finished",this.timing.stop(),this._callEnd(),i.$.callFinish()},cancel(){this.timing.state="cancelled",this.timing.stop(),i.$.callCancel()}},this.$.anim.effect||(this.$.anim.effect={}),this.$.anim.effect.duration||(this.$.anim.effect.duration=this.$.params.delay+this.$.params.duration+this.$.params.endDelay)}ready(t,e){t(this.$.anim,this.$.params)}}function Nt(t,e,r={}){var n=A(e)?Rt:Lt;return Promise.all(M.call(this,t).map(t=>new n(t,e,r).play().then(()=>this)))}var _t=function(t){return typeof t};const Wt=function(t,e,r=!1){var n=null,i=t;g(t)||(n=Object.keys(t),i=Object.values(t));var s=void 0,a=i.reduce((t,n)=>{if(void 0===s){if(e(n,t))return n;if(r&&(c(n)||A(n))&&void 0!==(s=Wt(n,e,r)))return n}return t},void 0);if(void 0!==a){var o=n?n[i.indexOf(a)]:i.indexOf(a);return void 0!==s?[o].concat(b(s)):o}};var It=Wt;const Ft={},Ht=["tripletap","doubletap","singletap"];Ht.forEach(t=>{Ft[t]=class{setup(t,e,r,n){if(!WebQit.DOM.window.Hammer)throw new Error("The Hammerjs library is needed to use the "+e+" gesture.");this.el=t,this.eventName=e,this.fireCallback=r,this.hammertime=n;var i=!0,s=Ht.map((t,e)=>{var r=this.hammertime.get(t);return r||(i=!1,r=new ENV.window.Hammer.Tap({event:t,taps:Ht.length-e}),this.hammertime.add(r)),r});if(!i){for(var a,o=s.slice();(a=o.shift())&&o.length;)a.recognizeWith(o);for(var l,c=s.slice();(l=c.pop())&&c.length;)l.requireFailure(c)}this.hammertime.on(this.eventName,this.fireCallback)}teardown(){this.hammertime.off(this.eventName)}}});var Qt=class extends class{constructor(t,e){this.subject=t,this.handler=e.handler,this.filter=e.filter,this.params=e.params}disconnect(){this.disconnected=!0}}{fire(t){this.filter===t.type&&t.response(this.handler.call(this.subject,t))}},qt=class{constructor(t,e){this.$={},this.$.target=t,this.$.e=e,this.$.propagationStopped=!1,this.$.defaultPrevented=!1,this.$.promisesInstance=null,this.$.promises=[]}get type(){return this.$.e.type}get target(){return this.$.e.target}get e(){return this.$.e}stopPropagation(){this.$.propagationStopped=!0}get propagationStopped(){return this.$.propagationStopped}preventDefault(){this.$.defaultPrevented=!0}get defaultPrevented(){return this.$.defaultPrevented}promise(t){if(!(t instanceof Promise))throw new Error("Event.promise() must be called with a Promise.");this.$.promises.push(t),this.$.promisesInstance=null}get promises(){return!this.$.promisesInstance&&this.$.promises.length&&(this.$.promisesInstance=Promise.all(this.$.promises)),this.$.promisesInstance}response(t){var e,r=o(t)&&!w(t.propagationStopped)&&!w(t.defaultPrevented);!1===t||r&&t.propagationStopped?this.stopPropagation():!1===t||r&&t.defaultPrevented?this.preventDefault():(t instanceof Promise&&(e=t)||r&&(e=t.promises))&&this.promise(e)}};class zt extends class{constructor(t){this.subject=t,this.fireables=[],this.currentlyFiring=[]}add(t){return this.fireables.push(t),t}forget(t){this.filter(t).forEach(t=>{this.fireables=this.fireables.filter(e=>e!==t)})}filter(t){return this.fireables.filter(e=>{var r=b(e.filter),n=b((e.params||{}).tags),i=b(t.filter),s=b((t.params||{}).tags);return!(t.originalHandler&&e.handler!==t.originalHandler||i.length&&(i.length!==r.length||dt(r,i).length!==i.length)||s.length&&(s.length!==n.length||dt(n,s).length!==s.length))})}}{constructor(t){super(t),this.handlersList={},this.hammertime=()=>{if(!this.hmm){if(!WebQit.DOM.window.Hammer)throw new Error("The Hammerjs library is needed to use gestures.");this.hmm,new WebQit.DOM.window.Hammer.Manager(this.subject)}return this.hmm}}_setup(t,e){var r;if(!this.handlersList[t])if(Ft[t])if(a(Ft[t]))this.handlersList[t]=e=>this.fire({type:t,e:e}),this.addFireable(new Qt(this.handlersList[t],Ft[t]));else{if(r=Ft[t],!l(r)||!/^class\s?/.test(Function.prototype.toString.call(r)))throw new Error('The "'+t+'" event hook must be either a string (alias) or a class!');if(this.handlersList[t]=new Ft[t],!A(this.handlersList[t].setup))throw new Error('The "'+t+'" event hook must implement a "setup" method!');this.handlersList[t].setup(this.subject,t,e=>{this.fire({type:t,e:e})},this.hammertime())}else if(Ut(t.split("+")[0])){var n=t.split("+").map(t=>{var e=Ut(t),r=this.hammertime().get(e);return r||(r=new(Hammer[R(e)]),this.hammertime().add(r)),r});n.forEach((t,e)=>{t.recognizeWith(n.slice(e+1))}),this.handlersList[t]=e=>this.fire({type:t,e:e}),this.hammertime().on(t.split("+").join(" "),this.handlersList[t])}else this.handlersList[t]=t=>this.fire(t),this.subject.addEventListener(t,this.handlersList[t])}_teardown(t){if(this.handlersList[t]){if(Ft[t]){if(a(Ft[t]))removeListener(this.subject,Ft[t],this.handlersList[t]);else if(this.handlersList[t]){if(!A(this.handlersList[t].teardown))throw new Error('The "'+t+'" event hook must implement a "teardown" function!');this.handlersList[t].teardown()}}else Ut(t.split("+")[0])?this.hammertime().off(t.split("+").join(" "),this.handlersList[t]):this.subject.removeEventListener(t,this.handlersList[t]);delete this.handlersList[t]}}add(t){return this._setup(t.filter,t.params),super.add(new Qt(this.subject,t))}fire(t){return t instanceof qt||(t=new qt(this.subject,t)),this.fireables.forEach(e=>{t.propagationStopped||e.fire(t)}),t}}const Ut=function(t){return It(Bt,e=>e.includes(t),!1)},Bt={press:["press","pressup"],rotate:["rotate","rotatestart","rotatemove","rotateend","rotatecancel"],pinch:["pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout"],pan:["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown"],swipe:["swipe","swipeleft","swiperight","swipeup","swipedown"],tap:["tap"]};var Vt=function(t,e=!0){return function(t,e,r=null){if(!c(t))throw new Error('Subject must be of type object; "'+_t(t)+'" given!');var n,i=T(t);return!(n=i[e])&&r&&(n=new r(t),i[e]=n),n}(t,"listeners",e?zt:null)},Kt=function(t,e,r,n={}){if(A(e)&&(n=arguments.length>2?r:{},r=e,e=null),!A(r))throw new Error('Callback must be of type function; "'+_t(r)+'" given!');var i={filter:e,handler:r,params:n};return M.call(this,t).reduce((t,e)=>{if(!e||!c(e))throw new Error('Subject element must be of type Object; "'+_t(e)+'" given!');var r,n=Vt(e);return i.params.unique&&(r=n.filter(i)).length?r[0]:n.add(i)},null)},Yt=function(t,e,r=null,n={}){if(A(e)&&(n=arguments.length>2?r:{},r=e,e=null),r&&!A(r))throw new Error('Handler must be of type function; "'+_t(r)+'" given!');return M.call(this,t).reduce((t,i)=>{if(!i||!c(i))throw new Error('Subject element must be of type object; "'+_t(i)+'" given!');var s;if(s=Vt(i,!1))return s.forget({filter:e,originalHandler:r,params:n})},null)},Xt=function(t,e,r={}){return M.call(this,t).reduce((t,n)=>{var i;if(i=Vt(n,!1))return i.fire({target:n,type:e,data:r})},null)};window.WebQit.$=function(t={}){return function t(e,r=0,n={},i={},s=null){return s||(s=function(t){if(!(this instanceof s))return new s(t);Object.defineProperty(this,"els",{get:function(){return t}})}),d(e,(a,o)=>{if(r)t(e[a],r-1,n,i,s);else{const t=function(...t){var e=o.call(n,this.els,...t);return e instanceof Promise?e.then(t=>t===n?this:t):e===n?this:e};s.prototype[a]=t,(a.endsWith("Sync")||a.endsWith("Async"))&&(i.defaultAsync&&a.endsWith("Sync")?a=f(a,"Sync"):!i.defaultAsync&&a.endsWith("Async")&&(a=f(a,"Async")),s.prototype[a]=t)}}),s}({css:n,dom:i,ui:s},1,this,t)}.call(window)}]);
//# sourceMappingURL=main.js.map