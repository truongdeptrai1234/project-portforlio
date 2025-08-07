var e,t,r,n,i,a,o,s,c,l,u,p,d,f,h,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var L={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;r=$&&!L.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:L;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var M={},j={},x={},P=Function.prototype,T=P.call,H=E&&P.bind.bind(T,T),D={},F=(x=E?H:function(e){return function(){return T.apply(e,arguments)}})({}.toString),I=x("".slice);D=function(e){return I(F(e),8,-1)};var N=Object,q=x("".split);j=w(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===D(e)?q(e,""):N(e)}:N;var R={},C={};C=function(e){return null==e};var A=TypeError;R=function(e){if(C(e))throw new A("Can't call method on "+e);return e},M=function(e){return j(R(e))};var U={},B={},G={},Q={},W="object"==typeof document&&document.all;Q=void 0===W&&void 0!==W?function(e){return"function"==typeof e||e===W}:function(e){return"function"==typeof e},G=function(e){return"object"==typeof e?null!==e:Q(e)};var z={},Y={};Y=function(e,t){var r;return arguments.length<2?(r=y[e],Q(r)?r:void 0):y[e]&&y[e][t]};var J={};J=x({}.isPrototypeOf);var V={},K={},X={},Z={},ee=y.navigator,et=ee&&ee.userAgent;Z=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,ea=ei&&ei.v8;ea&&(i=(n=ea.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&Z&&(!(n=Z.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=Z.match(/Chrome\/(\d+)/))&&(i=+n[1]),X=i;var eo=y.String;V=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!eo(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&X&&X<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;z=V?function(e){return"symbol"==typeof e}:function(e){var t=Y("Symbol");return Q(t)&&J(t.prototype,es(e))};var ec={},el={},eu={},ep=String;eu=function(e){try{return ep(e)}catch(e){return"Object"}};var ed=TypeError;el=function(e){if(Q(e))return e;throw new ed(eu(e)+" is not a function")},ec=function(e,t){var r=e[t];return C(r)?void 0:el(r)};var ef={},eh=TypeError;ef=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!G(n=k(r,e))||Q(r=e.valueOf)&&!G(n=k(r,e))||"string"!==t&&Q(r=e.toString)&&!G(n=k(r,e)))return n;throw new eh("Can't convert object to primitive value")};var eg={},ev={},em={},ey={};ey=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var ew="__core-js_shared__",ek=em=y[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.41.0",mode:ey?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return em[e]||(em[e]=t||{})};var eE={},eS={},eL=Object;eS=function(e){return eL(R(e))};var e$=x({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return e$(eS(e),t)};var eO={},eM=0,ej=Math.random(),ex=x(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eM+ej,36)};var eP=y.Symbol,eT=ev("wks"),eH=V?eP.for||eP:eP&&eP.withoutSetter||eO,eD=TypeError,eF=function(e){return eE(eT,e)||(eT[e]=K&&eE(eP,e)?eP[e]:eH("Symbol."+e)),eT[e]}("toPrimitive");B=function(e,t){if(!G(e)||z(e))return e;var r,n=ec(e,eF);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!G(r)||z(r))return r;throw new eD("Can't convert object to primitive value")}return void 0===t&&(t="number"),ef(e,t)},U=function(e){var t=B(e,"string");return z(t)?t:t+""};var eI={},eN={},eq=y.document,eR=G(eq)&&G(eq.createElement);eN=function(e){return eR?eq.createElement(e):{}},eI=!_&&!w(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eC=Object.getOwnPropertyDescriptor;t=_?eC:function(e,t){if(e=M(e),t=U(t),eI)try{return eC(e,t)}catch(e){}if(eE(e,t))return O(!k(r,e,t),e[t])};var eA={},eU={};eU=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eG=String,eQ=TypeError;eB=function(e){if(G(e))return e;throw new eQ(eG(e)+" is not an object")};var eW=TypeError,ez=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eJ="enumerable",eV="configurable",eK="writable";a=_?eU?function(e,t,r){if(eB(e),t=U(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eJ in r?r[eJ]:n[eJ],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eB(e),t=U(t),eB(r),eI)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eA=_?function(e,t,r){return a(e,t,O(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e9=eE(e1,"name"),e3=e9&&(!_||_&&e2(e1,"name").configurable),e5={},e4=x(Function.toString);Q(em.inspectSource)||(em.inspectSource=function(e){return e4(e)}),e5=em.inspectSource;var e8={},e7={},e6=y.WeakMap;e7=Q(e6)&&/native code/.test(String(e6));var te={},tt=ev("keys");te=function(e){return tt[e]||(tt[e]=eO(e))};var tr={};tr={};var tn="Object already initialized",ti=y.TypeError,ta=y.WeakMap;if(e7||em.state){var to=em.state||(em.state=new ta);to.get=to.get,to.has=to.has,to.set=to.set,o=function(e,t){if(to.has(e))throw new ti(tn);return t.facade=e,to.set(e,t),t},s=function(e){return to.get(e)||{}},c=function(e){return to.has(e)}}else{var ts=te("state");tr[ts]=!0,o=function(e,t){if(eE(e,ts))throw new ti(tn);return t.facade=e,eA(e,ts,t),t},s=function(e){return eE(e,ts)?e[ts]:{}},c=function(e){return eE(e,ts)}}var tc=(e8={set:o,get:s,has:c,enforce:function(e){return c(e)?s(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!G(t)||(r=s(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e8.get,tu=String,tp=Object.defineProperty,td=x("".slice),tf=x("".replace),th=x([].join),tg=_&&!w(function(){return 8!==tp(function(){},"length",{value:8}).length}),tv=String(String).split("String"),tm=eZ=function(e,t,r){"Symbol("===td(tu(t),0,7)&&(t="["+tf(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e3&&e.name!==t)&&(_?tp(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eE(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?_&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eE(n,"source")||(n.source=th(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return Q(this)&&tl(this).source||e5(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&eZ(r,o,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS={},tL=Math.ceil,t$=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?t$:tL)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tO=Math.max,tM=Math.min;tk=function(e,t){var r=tE(e);return r<0?tO(r+t,0):tM(r,t)};var tj={},tx={},tP=Math.min;tx=function(e){var t=tE(e);return t>0?tP(t,0x1fffffffffffff):0},tj=function(e){return tx(e.length)};var tT=function(e){return function(t,r,n){var i,a=M(t),o=tj(a);if(0===o)return!e&&-1;var s=tk(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tH={includes:tT(!0),indexOf:tT(!1)}.indexOf,tD=x([].push);t_=function(e,t){var r,n=M(e),i=0,a=[];for(r in n)!eE(tr,r)&&eE(n,r)&&tD(a,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tH(a,r)||tD(a,r));return a};var tF={},tI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return t_(e,tI)},u=Object.getOwnPropertySymbols;var tN=x([].concat);tb=Y("Reflect","ownKeys")||function(e){var t=l(eB(e));return u?tN(t,u(e)):t},ty=function(e,r,n){for(var i=tb(r),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,t(r,s))}};var tq={},tR=/#|\.prototype\./,tC=function(e,t){var r=tU[tA(e)];return r===tG||r!==tB&&(Q(t)?w(t):!!t)},tA=tC.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tU=tC.data={},tB=tC.NATIVE="N",tG=tC.POLYFILL="P";tq=tC,m=function(e,r){var n,i,a,o,s,c=e.target,l=e.global,u=e.stat;if(n=l?y:u?y[c]||eb(c,{}):y[c]&&y[c].prototype)for(i in r){if(o=r[i],a=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tq(l?i:c+(u?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ty(o,a)}(e.sham||a&&a.sham)&&eA(o,"sham",!0),eX(n,i,o,e)}};var tQ={},tW={},tz=Function.prototype,tY=tz.apply,tJ=tz.call;tW="object"==typeof Reflect&&Reflect.apply||(E?tJ.bind(tY):function(){return tJ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===D(e))return x(e)})(tK.bind);tV=function(e,t){return el(e),void 0===t?e:E?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=Y("document","documentElement");var t0={};t0=x([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(Z);var t3={},t5={},t4=function(e){return Z.slice(0,e.length)===e};t3="NODE"===(t5=t4("Bun/")?"BUN":t4("Cloudflare-Workers")?"CLOUDFLARE":t4("Deno/")?"DENO":t4("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===D(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t8=y.setImmediate,t7=y.clearImmediate,t6=y.process,re=y.Dispatch,rt=y.Function,rr=y.MessageChannel,rn=y.String,ri=0,ra={},ro="onreadystatechange";w(function(){p=y.location});var rs=function(e){if(eE(ra,e)){var t=ra[e];delete ra[e],t()}},rc=function(e){return function(){rs(e)}},rl=function(e){rs(e.data)},ru=function(e){y.postMessage(rn(e),p.protocol+"//"+p.host)};t8&&t7||(t8=function(e){t1(arguments.length,1);var t=Q(e)?e:rt(e),r=t0(arguments,1);return ra[++ri]=function(){tW(t,void 0,r)},d(ri),ri},t7=function(e){delete ra[e]},t3?d=function(e){t6.nextTick(rc(e))}:re&&re.now?d=function(e){re.now(rc(e))}:rr&&!t9?(h=(f=new rr).port2,f.port1.onmessage=rl,d=tV(h.postMessage,h)):y.addEventListener&&Q(y.postMessage)&&!y.importScripts&&p&&"file:"!==p.protocol&&!w(ru)?(d=ru,y.addEventListener("message",rl,!1)):d=ro in eN("script")?function(e){tZ.appendChild(eN("script"))[ro]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rp=(tQ={set:t8,clear:t7}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==rp},{clearImmediate:rp});var rd=tQ.set,rf={},rh=y.Function,rg=/MSIE .\./.test(Z)||"BUN"===t5&&((e=y.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rf=function(e,t){var r=t?2:1;return rg?function(n,i){var a=t1(arguments.length,1)>r,o=Q(n)?n:rh(n),s=a?t0(arguments,r):[],c=a?function(){tW(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rv=y.setImmediate?rf(rd,!1):rd;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rv},{setImmediate:rv});var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c,l,u=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(u,"_invoke",{value:(o=e,s=n,c=new O(a||[]),l=d,function(e,r){if(l===f)throw Error("Generator is already running");if(l===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=p(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(l===d)throw l=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);l=f;var a=p(o,s,c);if("normal"===a.type){if(l=c.done?h:"suspendedYield",a.arg===g)continue;return{value:a.arg,done:c.done}}"throw"===a.type&&(l=h,c.method="throw",c.arg=a.arg)}})}),u}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};l(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=p(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(e){if(null!=e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),l(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),l(k,c,"Generator"),l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);else if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const ry="https://forkify-api.herokuapp.com/api/v2/recipes",rb="283c75b6-99ef-4070-b557-d803aabb20a5",r_=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rw=async function(e,t=null){try{let r=t?await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):await fetch(e);if(!r.ok)throw Error(`error with ajax:${r.status} `);let n=await r.json();return t?n:n.data}catch(e){throw e}},rk=function(e,t){switch(t){case"text":return""!==e.trim();case"number":return!isNaN(e)&&e>0;case"url":return/^https?:\/\/.+\..+/.test(e);default:return!1}};var rE={};function rS(e,t,r,n,i){var a,o,s,c;let l=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&l.push(t);let u=0,p=e,d=t;for(;u<=l.length;)p%l[u]==0&&d%l[u]==0?(l[u],p/=l[u],d/=l[u]):u++;return a=d,o=p,s=r,c=n,1===a&&1===o?(s=`${c}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${c}${s}`:"0"==s?`${c}${o}/${a}`:`${c}${s} ${o}/${a}`}rE=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c,l;return s=r,c=a,l=t,rS(parseInt(s,10),Math.pow(10,s.length),c,l,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rS(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};const rL={recipe:{},search:{query:"",result:[],page:1,totalPage:0,pagResult:[]},bookmarks:[]},r$=async function(e){try{if(!e)return;let t=await Promise.race([rw(`${ry}/${e}?key=${rb}`),r_(10)]);console.log(t),rL.recipe=t,rL.recipe.bookmark=rL.bookmarks.some(t=>t.recipe.id===e)}catch(e){throw e}},rO=async function(e){try{if(!e)return;let t=await Promise.race([rw(`${ry}?search=${e}&key=${rb}`),r_(10)]);rL.search.query=e,rL.search.page=1,rL.search.result=t.recipes,rL.search.totalPage=Math.ceil(rL.search.result.length/10)}catch(e){throw e}},rM=function(e){rL.recipe.recipe.ingredients.forEach(t=>{t&&(t.quantity=t.quantity*e/rL.recipe.recipe.servings)}),rL.recipe.recipe.servings=e},rj=function(){rL.recipe.bookmark=!rL.recipe.bookmark,rL.bookmarks=rL.recipe.bookmark?[...rL.bookmarks,rL.recipe]:rL.bookmarks.filter(e=>e.recipe.id!==rL.recipe.recipe.id)},rx=function(){localStorage.setItem("bookmarks",JSON.stringify(rL.bookmarks))},rP=async function(e){try{let t=new RegExp(/(^\d+$)|\d[\W]\d,[a-z]/i),r=e.filter(([e])=>e.startsWith("ingredient")).map(([,e])=>e.match(t)?e.split(","):[]).map(e=>{let[t,r,n]=e;return n?{quantity:t?(0,rE.fracty)(t).valueOf():null,unit:r?r.trim():"",description:n.trim()}:null}),n=Object.fromEntries(e),i={title:rk(n.title,"text")?n.title:null,publisher:rk(n.publisher,"text")?n.publisher:null,source_url:rk(n.sourceUrl,"url")?n.sourceUrl:null,image_url:rk(n.image,"url")?n.image:null,servings:rk(n.servings,"number")?+n.servings:1,cooking_time:rk(n.cookingTime,"number")?+n.cookingTime:1,ingredients:r};Object.values(i).forEach(e=>{if(!e||0===e.length)throw Error("Please fill all the recipe data 's fields or check the format")});let{data:a}=await rw(`${ry}?key=${rb}`,i);rL.recipe=a,rj()}catch(e){throw e}},rT=JSON.parse(localStorage.getItem("bookmarks"));rT&&0!==rT.length&&(rL.bookmarks=rT);var rH={};rH=import.meta.resolve("eyyUD");class rD{updatePreviewDOM(e,t){let r=Array.from(this._parentEle.querySelectorAll("*")),n=Array.from(document.createRange().createContextualFragment(this._renderListRecipe(e,t)).querySelectorAll("*"));r.forEach((e,t)=>{Array.from(e.classList).at(-1)!==Array.from(n[t].classList).at(-1)&&e.classList.toggle("preview__link--active")})}render(e,t="",r=!1){if(!e||0===e.length)return r?this.renderMessage():this.renderError();this._data=e,this._clear();let n=this._renderListRecipe(this._data,t);this._parentEle.insertAdjacentHTML("afterbegin",n)}loadingSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${v(rH)}#icon-loader"></use>
          </svg>
        </div>
        `;this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${v(rH)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",t)}renderMessage(){let e=`
          <div class="message">
            <div>
              <svg>
                <use href="${v(rH)}#icon-smile"></use>
              </svg>
            </div>
            <p>${this._successMessage}</p>
          </div>
      `;this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentEle.innerHTML=""}_clearInput(){this._parentEle.querySelector(".search__field").value=""}addLoadRecipeHandler(e){window.addEventListener("hashchange",e)}addLoadSearchHandler(...e){this._parentEle.addEventListener("submit",async function(t){t.preventDefault();try{for(let t of e)await t()}catch(e){console.log(e)}})}addButtonPagHandler(e){this._parentEle.addEventListener("click",function(t){t.target.closest(".pagination__btn--prev")&&e("prev"),t.target.closest(".pagination__btn--next")&&e("next")})}addUpdateServingsHandler(e){let t=this;this._parentEle.addEventListener("click",function(r){let n=+t._parentEle.querySelector(".recipe__info-data--people").textContent;r.target.closest(".btn--increase-servings")&&e(++n),r.target.closest(".btn--decrease-servings")&&e(--n)})}addBookmarkHandler(e){this._parentEle.addEventListener("click",function(t){t.target.closest(".btn--round")&&e()})}addLoadBookmarkHandler(e){window.addEventListener("load",e)}addNewRecipeHandler(e){this._parentEle.addEventListener("submit",function(t){t.preventDefault(),e([...new FormData(this)])})}}class rF extends rD{_data;_parentEle=document.querySelector(".recipe");_errorMessage="Could not find the recipe \uD83C\uDF55\uD83C\uDF55";_successMessage="";updateDOM(e){let t=Array.from(this._parentEle.querySelectorAll("*")),r=Array.from(document.createRange().createContextualFragment(this._recipeRender(e)).querySelectorAll("*"));t.forEach((e,t)=>{(e.firstChild?.nodeValue.trim()!==r[t].firstChild?.nodeValue.trim()||e.firstElementChild?.outerHTML!==r[t].firstElementChild?.outerHTML)&&(e.innerHTML=r[t].innerHTML)})}render(e=""){if(!e)return;this._data=e;let t=this._recipeRender(this._data);return this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",t),this}#e(e){return e.recipe.ingredients.map(e=>e?`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${v(rH)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?v(rE)(e.quantity):""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit??""}</span>
            ${e.description??""}
          </div>
        </li>`:"").join("")}_recipeRender(e=""){if(e)return`<figure class="recipe__fig">
        <img src="${e.recipe.image_url}" alt="${e.recipe.title}" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${e.recipe.title}</span>
            </h1>
          </figure>
  
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${v(rH)}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${e.recipe.cooking_time}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${v(rH)}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${e.recipe.servings}</span>
              <span class="recipe__info-text">servings</span>
              
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--decrease-servings">
                  <svg>
                    <use href="${v(rH)}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="${v(rH)}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
              
            </div>
  
            <div class="recipe__user-generated ${e.recipe.key?"":"hidden"}">
              <svg>
                <use href="${v(rH)}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="${v(rH)}#icon-bookmark${e.bookmark?"-fill":""}"></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this.#e(e)}
            
            </ul>
          </div>
  
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${e.recipe.publisher}</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${e.recipe.source_url}"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${v(rH)}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>`}}var rI=new rF;class rN extends rD{_parentEle=document.querySelector(".search");_errorMessage="invalid input";_successMessage="";getQuery(){let e=this._parentEle.querySelector(".search__field").value;return this._clearInput(),e}}var rq=new rN;class rR extends rD{_parentEle=document.querySelector(".results");_errorMessage="recipe list not found, please try again \uD83C\uDF5F\uD83C\uDF5F";_successMessage="";#t(e="",t){return`<li class="preview">
            <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                <div class="preview__user-generated ${e.key?"":"hidden"}">
                  <svg>
                    <use href="${v(rH)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
    </li>`}_renderListRecipe(e="",t){return e.map(e=>this.#t(e,t)).join("")}}var rC=new rR;class rA extends rD{_data="";_parentEle=document.querySelector(".pagination");_errorMessage="";render(e){this._data=e,this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",this.#t(this._data))}#r(e){return 1===e.totalPage?"":1===e.page?this._buttonNextMarkupHtml(e):e.page>1&&e.page<e.totalPage?`${this._buttonPrevMarkupHtml(e)}${this._buttonNextMarkupHtml(e)}`:e.page===e.totalPage?`${this._buttonPrevMarkupHtml(e)}`:void 0}_buttonPrevMarkupHtml(e=""){return`<button class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${v(rH)}#icon-arrow-left"></use>
              </svg>
              <span>${e.page===e.totalPage?"Previous":`Page ${e.page-1}`}</span>
            </button>`}_buttonNextMarkupHtml(e=""){return`<button class="btn--inline pagination__btn--next">
              <span>${1===e.page?"Next":`Page ${e.page+1}`}</span>
              <svg class="search__icon">
                <use href="${v(rH)}#icon-arrow-right"></use>
              </svg>
            </button>`}#t(e=""){return e&&0!==e.result.length?this.#r(e):""}}var rU=new rA;class rB extends rD{_data;_parentEle=document.querySelector(".bookmarks__list");_errorMessage="";_successMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";#t(e="",t){return`<li class="preview">
            <a class="preview__link ${e.recipe.id===t?"preview__link--active":""}" href="#${e.recipe.id}">
              <figure class="preview__fig">
                <img src="${e.recipe.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.recipe.title}</h4>
                <p class="preview__publisher">${e.recipe.publisher}</p>
                <div class="preview__user-generated ${e.recipe.key?"":"hidden"}">
                  <svg>
                    <use href="${v(rH)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
    </li>`}_renderListRecipe(e="",t){return e.map(e=>this.#t(e,t)).join("")}}var rG=new rB;class rQ extends rD{_parentEle=document.querySelector(".upload");_errorMessage="Wrong input format, please try again \uD83C\uDF55\uD83C\uDF55";_successMessage="Recipe successfully loaded";_modal=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_openModalButton=document.querySelector(".nav__btn--add-recipe");_closeModalButton=document.querySelector(".btn--close-modal");constructor(){super(),this._modalOpenHandler(),this._modalCloseHandler()}render(){let e=this.#t();return this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",e),this}_toggleModal(){this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_modalOpenHandler(){this._openModalButton.addEventListener("click",()=>{this.render(),this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")})}_modalCloseHandler(){this._closeModalButton.addEventListener("click",()=>{this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}),this._overlay.addEventListener("click",()=>{this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")})}#t(){return`
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${v(rH)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `}}var rW=new rQ;const rz=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rL.search.result.length>0&&rC.updatePreviewDOM(rL.search.pagResult,e),rL.bookmarks.length>0&&rG.updatePreviewDOM(rL.bookmarks,e),rI.loadingSpinner(),await r$(e),rI.render(rL.recipe)}catch(e){console.log(e),rI.renderError()}},rY=async function(){try{rC.loadingSpinner();let e=rq.getQuery();if(!e)return;await rO(e)}catch(e){rC.renderError()}},rJ=async function(){let e=rL.search.page;rC.render(rL.search.pagResult=rL.search.result.slice((e-1)*10,10*e)),rU.render(rL.search)},rV=async function(e){"next"===e?rL.search.page++:rL.search.page--,rJ()},rK=async function(e){try{rW.loadingSpinner(),await rP(e),rW.renderMessage(),setTimeout(()=>{rW._toggleModal(),rI.render(rL.recipe)},2500),rx(),rG.render(rL.bookmarks,rL.recipe.recipe.id,!0)}catch(e){rW.renderError(e.message)}};window.location.hash="",rI.addLoadRecipeHandler(rz),rI.addUpdateServingsHandler(function(e){e<1||(rM(e),rI.updateDOM(rL.recipe))}),rI.addBookmarkHandler(function(){rj(),rx(),rI.updateDOM(rL.recipe),rG.render(rL.bookmarks,rL.recipe.recipe.id,!0)}),rq.addLoadSearchHandler(rY,rJ),rU.addButtonPagHandler(rV),rG.addLoadBookmarkHandler(function(){rG.render(rL.bookmarks,"",!0)}),rW.addNewRecipeHandler(rK);
//# sourceMappingURL=fork-app.7ddbc69c.js.map
