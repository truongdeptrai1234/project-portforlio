var e,t,r,n,i,o,a,s,c,u,l,f,d,h,p,g=globalThis;function v(e){return e&&e.__esModule?e.default:e}var m={},y={},b=function(e){return e&&e.Math===Math&&e};y=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof y&&y)||function(){return this}()||Function("return this")();var _={},w={};_=!(w=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var k={},E={};E=!w(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var S=Function.prototype.call;k=E?S.bind(S):function(){return S.apply(S,arguments)};var L={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;r=O&&!L.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:L;var j={};j=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var M={},x={},$={},I=Function.prototype,P=I.call,T=E&&I.bind.bind(P,P),B={},H=($=E?T:function(e){return function(){return P.apply(e,arguments)}})({}.toString),D=$("".slice);B=function(e){return D(H(e),8,-1)};var N=Object,F=$("".split);x=w(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===B(e)?F(e,""):N(e)}:N;var q={},R={};R=function(e){return null==e};var C=TypeError;q=function(e){if(R(e))throw new C("Can't call method on "+e);return e},M=function(e){return x(q(e))};var A={},U={},G={},Q={},W="object"==typeof document&&document.all;Q=void 0===W&&void 0!==W?function(e){return"function"==typeof e||e===W}:function(e){return"function"==typeof e},G=function(e){return"object"==typeof e?null!==e:Q(e)};var z={},J={};J=function(e,t){var r;return arguments.length<2?(r=y[e],Q(r)?r:void 0):y[e]&&y[e][t]};var V={};V=$({}.isPrototypeOf);var Y={},K={},Z={},X={},ee=y.navigator,et=ee&&ee.userAgent;X=et?String(et):"";var er=y.process,en=y.Deno,ei=er&&er.versions||en&&en.version,eo=ei&&ei.v8;eo&&(i=(n=eo.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&X&&(!(n=X.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=X.match(/Chrome\/(\d+)/))&&(i=+n[1]),Z=i;var ea=y.String;Y=(K=!!Object.getOwnPropertySymbols&&!w(function(){var e=Symbol("symbol detection");return!ea(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var es=Object;z=Y?function(e){return"symbol"==typeof e}:function(e){var t=J("Symbol");return Q(t)&&V(t.prototype,es(e))};var ec={},eu={},el={},ef=String;el=function(e){try{return ef(e)}catch(e){return"Object"}};var ed=TypeError;eu=function(e){if(Q(e))return e;throw new ed(el(e)+" is not a function")},ec=function(e,t){var r=e[t];return R(r)?void 0:eu(r)};var eh={},ep=TypeError;eh=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!G(n=k(r,e))||Q(r=e.valueOf)&&!G(n=k(r,e))||"string"!==t&&Q(r=e.toString)&&!G(n=k(r,e)))return n;throw new ep("Can't convert object to primitive value")};var eg={},ev={},em={},ey={};ey=!1;var eb={},e_=Object.defineProperty;eb=function(e,t){try{e_(y,e,{value:t,configurable:!0,writable:!0})}catch(r){y[e]=t}return t};var ew="__core-js_shared__",ek=em=y[ew]||eb(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.41.0",mode:ey?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ev=function(e,t){return em[e]||(em[e]=t||{})};var eE={},eS={},eL=Object;eS=function(e){return eL(q(e))};var eO=$({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return eO(eS(e),t)};var ej={},eM=0,ex=Math.random(),e$=$(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+e$(++eM+ex,36)};var eI=y.Symbol,eP=ev("wks"),eT=Y?eI.for||eI:eI&&eI.withoutSetter||ej,eB=TypeError,eH=function(e){return eE(eP,e)||(eP[e]=K&&eE(eI,e)?eI[e]:eT("Symbol."+e)),eP[e]}("toPrimitive");U=function(e,t){if(!G(e)||z(e))return e;var r,n=ec(e,eH);if(n){if(void 0===t&&(t="default"),r=k(n,e,t),!G(r)||z(r))return r;throw new eB("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},A=function(e){var t=U(e,"string");return z(t)?t:t+""};var eD={},eN={},eF=y.document,eq=G(eF)&&G(eF.createElement);eN=function(e){return eq?eF.createElement(e):{}},eD=!_&&!w(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;t=_?eR:function(e,t){if(e=M(e),t=A(t),eD)try{return eR(e,t)}catch(e){}if(eE(e,t))return j(!k(r,e,t),e[t])};var eC={},eA={};eA=_&&w(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eU={},eG=String,eQ=TypeError;eU=function(e){if(G(e))return e;throw new eQ(eG(e)+" is not an object")};var eW=TypeError,ez=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eV="enumerable",eY="configurable",eK="writable";o=_?eA?function(e,t,r){if(eU(e),t=A(t),eU(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eJ(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eY in r?r[eY]:n[eY],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return ez(e,t,r)}:ez:function(e,t,r){if(eU(e),t=A(t),eU(r),eD)try{return ez(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eW("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eC=_?function(e,t,r){return o(e,t,j(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},eX={},e0={},e1=Function.prototype,e2=_&&Object.getOwnPropertyDescriptor,e3=eE(e1,"name"),e5=e3&&(!_||_&&e2(e1,"name").configurable),e4={},e7=$(Function.toString);Q(em.inspectSource)||(em.inspectSource=function(e){return e7(e)}),e4=em.inspectSource;var e8={},e6={},e9=y.WeakMap;e6=Q(e9)&&/native code/.test(String(e9));var te={},tt=ev("keys");te=function(e){return tt[e]||(tt[e]=ej(e))};var tr={};tr={};var tn="Object already initialized",ti=y.TypeError,to=y.WeakMap;if(e6||em.state){var ta=em.state||(em.state=new to);ta.get=ta.get,ta.has=ta.has,ta.set=ta.set,a=function(e,t){if(ta.has(e))throw new ti(tn);return t.facade=e,ta.set(e,t),t},s=function(e){return ta.get(e)||{}},c=function(e){return ta.has(e)}}else{var ts=te("state");tr[ts]=!0,a=function(e,t){if(eE(e,ts))throw new ti(tn);return t.facade=e,eC(e,ts,t),t},s=function(e){return eE(e,ts)?e[ts]:{}},c=function(e){return eE(e,ts)}}var tc=(e8={set:a,get:s,has:c,enforce:function(e){return c(e)?s(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!G(t)||(r=s(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e8.get,tl=String,tf=Object.defineProperty,td=$("".slice),th=$("".replace),tp=$([].join),tg=_&&!w(function(){return 8!==tf(function(){},"length",{value:8}).length}),tv=String(String).split("String"),tm=eX=function(e,t,r){"Symbol("===td(tl(t),0,7)&&(t="["+th(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e5&&e.name!==t)&&(_?tf(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eE(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?_&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return eE(n,"source")||(n.source=tp(tv,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return Q(this)&&tu(this).source||e4(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(Q(r)&&eX(r,a,n),n.global)i?e[t]=r:eb(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS={},tL=Math.ceil,tO=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tO:tL)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tj=Math.max,tM=Math.min;tk=function(e,t){var r=tE(e);return r<0?tj(r+t,0):tM(r,t)};var tx={},t$={},tI=Math.min;t$=function(e){var t=tE(e);return t>0?tI(t,0x1fffffffffffff):0},tx=function(e){return t$(e.length)};var tP=function(e){return function(t,r,n){var i,o=M(t),a=tx(o);if(0===a)return!e&&-1;var s=tk(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tT={includes:tP(!0),indexOf:tP(!1)}.indexOf,tB=$([].push);t_=function(e,t){var r,n=M(e),i=0,o=[];for(r in n)!eE(tr,r)&&eE(n,r)&&tB(o,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tT(o,r)||tB(o,r));return o};var tH={},tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");u=Object.getOwnPropertyNames||function(e){return t_(e,tD)},l=Object.getOwnPropertySymbols;var tN=$([].concat);tb=J("Reflect","ownKeys")||function(e){var t=u(eU(e));return l?tN(t,l(e)):t},ty=function(e,r,n){for(var i=tb(r),a=0;a<i.length;a++){var s=i[a];eE(e,s)||n&&eE(n,s)||o(e,s,t(r,s))}};var tF={},tq=/#|\.prototype\./,tR=function(e,t){var r=tA[tC(e)];return r===tG||r!==tU&&(Q(t)?w(t):!!t)},tC=tR.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tA=tR.data={},tU=tR.NATIVE="N",tG=tR.POLYFILL="P";tF=tR,m=function(e,r){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?y:l?y[c]||eb(c,{}):y[c]&&y[c].prototype)for(i in r){if(a=r[i],o=e.dontCallGetSet?(s=t(n,i))&&s.value:n[i],!tF(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ty(a,o)}(e.sham||o&&o.sham)&&eC(a,"sham",!0),eZ(n,i,a,e)}};var tQ={},tW={},tz=Function.prototype,tJ=tz.apply,tV=tz.call;tW="object"==typeof Reflect&&Reflect.apply||(E?tV.bind(tJ):function(){return tV.apply(tJ,arguments)});var tY={},tK={},tZ=(tK=function(e){if("Function"===B(e))return $(e)})(tK.bind);tY=function(e,t){return eu(e),void 0===t?e:E?tZ(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=J("document","documentElement");var t0={};t0=$([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t3={};t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(X);var t5={},t4={},t7=function(e){return X.slice(0,e.length)===e};t5="NODE"===(t4=t7("Bun/")?"BUN":t7("Cloudflare-Workers")?"CLOUDFLARE":t7("Deno/")?"DENO":t7("Node.js/")?"NODE":y.Bun&&"string"==typeof Bun.version?"BUN":y.Deno&&"object"==typeof Deno.version?"DENO":"process"===B(y.process)?"NODE":y.window&&y.document?"BROWSER":"REST");var t8=y.setImmediate,t6=y.clearImmediate,t9=y.process,re=y.Dispatch,rt=y.Function,rr=y.MessageChannel,rn=y.String,ri=0,ro={},ra="onreadystatechange";w(function(){f=y.location});var rs=function(e){if(eE(ro,e)){var t=ro[e];delete ro[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){y.postMessage(rn(e),f.protocol+"//"+f.host)};t8&&t6||(t8=function(e){t1(arguments.length,1);var t=Q(e)?e:rt(e),r=t0(arguments,1);return ro[++ri]=function(){tW(t,void 0,r)},d(ri),ri},t6=function(e){delete ro[e]},t5?d=function(e){t9.nextTick(rc(e))}:re&&re.now?d=function(e){re.now(rc(e))}:rr&&!t3?(p=(h=new rr).port2,h.port1.onmessage=ru,d=tY(p.postMessage,p)):y.addEventListener&&Q(y.postMessage)&&!y.importScripts&&f&&"file:"!==f.protocol&&!w(rl)?(d=rl,y.addEventListener("message",ru,!1)):d=ra in eN("script")?function(e){tX.appendChild(eN("script"))[ra]=function(){tX.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rf=(tQ={set:t8,clear:t6}).clear;m({global:!0,bind:!0,enumerable:!0,forced:y.clearImmediate!==rf},{clearImmediate:rf});var rd=tQ.set,rh={},rp=y.Function,rg=/MSIE .\./.test(X)||"BUN"===t4&&((e=y.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rh=function(e,t){var r=t?2:1;return rg?function(n,i){var o=t1(arguments.length,1)>r,a=Q(n)?n:rp(n),s=o?t0(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rv=y.setImmediate?rh(rd,!1):rd;m({global:!0,bind:!0,enumerable:!0,forced:y.setImmediate!==rv},{setImmediate:rv});var rm=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new j(o||[]),u=d,function(e,r){if(u===h)throw Error("Generator is already running");if(u===p){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,c);if(i){if(i===g)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===d)throw u=p,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=h;var o=f(a,s,c);if("normal"===o.type){if(u=c.done?p:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=p,c.method="throw",c.arg=o.arg)}})}),l}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",h="executing",p="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=f(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rm}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rm:Function("r","regeneratorRuntime = r")(rm)}const ry="https://forkify-api.jonas.io/api/v2/recipes",rb="283c75b6-99ef-4070-b557-d803aabb20a5",r_=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rw=async function(e,t=null){try{let r=t?await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):await fetch(e);if(!r.ok)throw Error(`error with ajax:${r.status} `);let n=await r.json();return t?n:n.data}catch(e){throw e}},rk=function(e,t){switch(t){case"text":return""!==e.trim();case"number":return!isNaN(e)&&e>0;case"url":return/^https?:\/\/.+\..+/.test(e);default:return!1}};var rE={};!function(e){function t(){return Error("Parameters must be integer")}function r(){return Error("Invalid argument")}function n(){return Error("Division by Zero")}function i(e,i){var a=f,s=d;let c=d;if(null!=e)if(void 0!==i){if("bigint"==typeof e)a=e;else{if(isNaN(e))throw r();if(0!=e%1)throw t();a=BigInt(e)}if("bigint"==typeof i)s=i;else{if(isNaN(i))throw r();if(0!=i%1)throw t();s=BigInt(i)}c=a*s}else if("object"==typeof e){if("d"in e&&"n"in e)a=BigInt(e.n),s=BigInt(e.d),"s"in e&&(a*=BigInt(e.s));else if(0 in e)a=BigInt(e[0]),1 in e&&(s=BigInt(e[1]));else if("bigint"==typeof e)a=e;else throw r();c=a*s}else if("number"==typeof e){if(isNaN(e))throw r();if(0>e&&(c=-d,e=-e),0==e%1)a=BigInt(e);else{i=1;var u=0,l=1,h=1;let t=1;for(1<=e&&(i=10**Math.floor(1+Math.log10(e)),e/=i);1e7>=l&&1e7>=t;)if(e===(s=(u+h)/(l+t))){1e7>=l+t?(a=u+h,s=l+t):t>l?(a=h,s=t):(a=u,s=l);break}else e>s?(u+=h,l+=t):(h+=u,t+=l),1e7<l?(a=h,s=t):(a=u,s=l);a=BigInt(a)*BigInt(i),s=BigInt(s)}}else if("string"==typeof e){if(s=0,u=i=a=f,l=h=d,null===(e=e.replace(/_/g,"").match(/\d+|./g)))throw r();if("-"===e[s]?(c=-d,s++):"+"===e[s]&&s++,e.length===s+1?i=o(e[s++],c):"."===e[s+1]||"."===e[s]?("."!==e[s]&&(a=o(e[s++],c)),(++s+1===e.length||"("===e[s+1]&&")"===e[s+3]||"'"===e[s+1]&&"'"===e[s+3])&&(i=o(e[s],c),h=g**BigInt(e[s].length),s++),("("===e[s]&&")"===e[s+2]||"'"===e[s]&&"'"===e[s+2])&&(u=o(e[s+1],c),l=g**BigInt(e[s+1].length)-d,s+=3)):"/"===e[s+1]||":"===e[s+1]?(i=o(e[s],c),h=o(e[s+2],d),s+=3):"/"===e[s+3]&&" "===e[s+1]&&(a=o(e[s],c),i=o(e[s+2],c),h=o(e[s+4],d),s+=5),e.length<=s)c=a=u+(s=h*l)*a+l*i;else throw r()}else if("bigint"==typeof e)c=a=e,s=d;else throw r();if(s===f)throw n();v.s=c<f?-d:d,v.n=a<f?-a:a,v.d=s<f?-s:s}function o(e,t){try{e=BigInt(e)}catch(e){throw r()}return e*t}function a(e){return"bigint"==typeof e?e:Math.floor(e)}function s(e,t){if(t===f)throw n();let r=Object.create(l.prototype);r.s=e<f?-d:d;let i=u(e=e<f?-e:e,t);return r.n=e/i,r.d=t/i,r}function c(e){let t={},r=e,n=h,i=p-d;for(;i<=r;){for(;r%n===f;)r/=n,t[n]=(t[n]||f)+d;i+=d+h*n++}return r!==e?1<r&&(t[r]=(t[r]||f)+d):t[e]=(t[e]||f)+d,t}function u(e,t){if(!e)return t;if(!t)return e;for(;;){if(!(e%=t))return t;if(!(t%=e))return e}}function l(e,t){if(i(e,t),!(this instanceof l))return s(v.s*v.n,v.d);e=u(v.d,v.n),this.s=v.s,this.n=v.n/e,this.d=v.d/e}"undefined"==typeof BigInt&&(BigInt=function(e){if(isNaN(e))throw Error("");return e});let f=BigInt(0),d=BigInt(1),h=BigInt(2),p=BigInt(5),g=BigInt(10),v={s:d,n:f,d:d};l.prototype={s:d,n:f,d:d,abs:function(){return s(this.n,this.d)},neg:function(){return s(-this.s*this.n,this.d)},add:function(e,t){return i(e,t),s(this.s*this.n*v.d+v.s*this.d*v.n,this.d*v.d)},sub:function(e,t){return i(e,t),s(this.s*this.n*v.d-v.s*this.d*v.n,this.d*v.d)},mul:function(e,t){return i(e,t),s(this.s*v.s*this.n*v.n,this.d*v.d)},div:function(e,t){return i(e,t),s(this.s*v.s*this.n*v.d,this.d*v.n)},clone:function(){return s(this.s*this.n,this.d)},mod:function(e,t){if(void 0===e)return s(this.s*this.n%this.d,d);if(i(e,t),f===v.n*this.d)throw n();return s(this.s*v.d*this.n%(v.n*this.d),v.d*this.d)},gcd:function(e,t){return i(e,t),s(u(v.n,this.n)*u(v.d,this.d),v.d*this.d)},lcm:function(e,t){return i(e,t),v.n===f&&this.n===f?s(f,d):s(v.n*this.n,u(v.n,this.n)*u(v.d,this.d))},inverse:function(){return s(this.s*this.d,this.n)},pow:function(e,t){if(i(e,t),v.d===d)return v.s<f?s((this.s*this.d)**v.n,this.n**v.n):s((this.s*this.n)**v.n,this.d**v.n);if(this.s<f)return null;e=c(this.n),t=c(this.d);let r=d,n=d;for(let t in e)if("1"!==t){if("0"===t){r=f;break}if(e[t]*=v.n,e[t]%v.d!==f)return null;e[t]/=v.d,r*=BigInt(t)**e[t]}for(let e in t)if("1"!==e){if(t[e]*=v.n,t[e]%v.d!==f)return null;t[e]/=v.d,n*=BigInt(e)**t[e]}return v.s<f?s(n,r):s(r,n)},log:function(e,t){if(i(e,t),this.s<=f||v.s<=f)return null;var r={};e=c(v.n);let n=c(v.d);t=c(this.n);let o=c(this.d);for(var a in n)e[a]=(e[a]||f)-n[a];for(var l in o)t[l]=(t[l]||f)-o[l];for(var d in e)"1"!==d&&(r[d]=!0);for(var h in t)"1"!==h&&(r[h]=!0);for(let n in l=a=null,r)if(d=e[n]||f,r=t[n]||f,d===f){if(r!==f)return null}else if(h=u(r,d),r/=h,d/=h,null===a&&null===l)a=r,l=d;else if(r*l!=a*d)return null;return null!==a&&null!==l?s(a,l):null},equals:function(e,t){return i(e,t),this.s*this.n*v.d==v.s*v.n*this.d},lt:function(e,t){return i(e,t),this.s*this.n*v.d<v.s*v.n*this.d},lte:function(e,t){return i(e,t),this.s*this.n*v.d<=v.s*v.n*this.d},gt:function(e,t){return i(e,t),this.s*this.n*v.d>v.s*v.n*this.d},gte:function(e,t){return i(e,t),this.s*this.n*v.d>=v.s*v.n*this.d},compare:function(e,t){return i(e,t),(f<(e=this.s*this.n*v.d-v.s*v.n*this.d))-(e<f)},ceil:function(e){return e=g**BigInt(e||0),s(a(this.s*e*this.n/this.d)+(e*this.n%this.d>f&&this.s>=f?d:f),e)},floor:function(e){return e=g**BigInt(e||0),s(a(this.s*e*this.n/this.d)-(e*this.n%this.d>f&&this.s<f?d:f),e)},round:function(e){return e=g**BigInt(e||0),s(a(this.s*e*this.n/this.d)+this.s*((this.s>=f?d:f)+e*this.n%this.d*h>this.d?d:f),e)},roundTo:function(e,t){i(e,t);var r=this.n*v.d;return t=r%(e=this.d*v.n),r=a(r/e),t+t>=e&&r++,s(this.s*r*v.n,v.d)},divisible:function(e,t){return i(e,t),!(!(v.n*this.d)||this.n*v.d%(v.n*this.d))},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e){let t=this.n,r=this.d;e=e||15;e:{for(n=r;n%h===f;n/=h);for(;n%p===f;n/=p);if(n===d)n=f;else{for(var n,i=g%n,o=1;i!==d;o++)if(i=i*g%n,2e3<o){n=f;break e}n=BigInt(o)}}e:{i=d,o=g;var s=n;let e=d;for(;s>f;o=o*o%r,s>>=d)s&d&&(e=e*o%r);for(s=0,o=e;300>s;s++){if(i===o){i=BigInt(s);break e}i=i*g%r,o=o*g%r}i=0}if(o=i,i=(this.s<f?"-":"")+a(t/r),(t=t%r*g)&&(i+="."),n){for(e=o;e--;)i+=a(t/r),t%=r,t*=g;for(i+="(",e=n;e--;)i+=a(t/r),t%=r,t*=g;i+=")"}else for(;t&&e--;)i+=a(t/r),t%=r,t*=g;return i},toFraction:function(e){let t=this.n,r=this.d,n=this.s<f?"-":"";if(r===d)n+=t;else{let i=a(t/r);e&&i>f&&(n+=i,n+=" ",t%=r),n=n+t+"/"+r}return n},toLatex:function(e){let t=this.n,r=this.d,n=this.s<f?"-":"";if(r===d)n+=t;else{let i=a(t/r);e&&i>f&&(n+=i,t%=r),n=n+"\\frac{"+t+"}{"+r+"}"}return n},toContinued:function(){let e=this.n,t=this.d,r=[];do{r.push(a(e/t));let n=e%t;e=t,t=n}while(e!==d)return r},simplify:function(e){e=BigInt(1/(e||.001)|0);let t=this.abs(),r=t.toContinued();for(let i=1;i<r.length;i++){let o=s(r[i-1],d);for(var n=i-2;0<=n;n--)o=o.inverse().add(r[n]);if((n=o.sub(t)).n*e<n.d)return o.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return l}):(Object.defineProperty(l,"__esModule",{value:!0}),l.default=l,l.Fraction=l,rE=l)}(0);const rS={recipe:{},search:{query:"",result:[],page:1,totalPage:0,pagResult:[]},bookmarks:[]},rL=async function(e){try{if(!e)return;rS.recipe=await Promise.race([rw(`${ry}/${e}?key=${rb}`),r_(10)]),rS.recipe.bookmark=rS.bookmarks.some(t=>t.recipe.id===e)}catch(e){throw e}},rO=async function(e){try{if(!e)return;let t=await Promise.race([rw(`${ry}?search=${e}&key=${rb}`),r_(10)]);rS.search.query=e,rS.search.page=1,rS.search.result=t.recipes,rS.search.totalPage=Math.ceil(rS.search.result.length/10)}catch(e){throw e}},rj=function(e){rS.recipe.recipe.ingredients.forEach(t=>{t&&(t.quantity=t.quantity*e/rS.recipe.recipe.servings)}),rS.recipe.recipe.servings=e},rM=function(){rS.recipe.bookmark=!rS.recipe.bookmark,rS.bookmarks=rS.recipe.bookmark?[...rS.bookmarks,rS.recipe]:rS.bookmarks.filter(e=>e.recipe.id!==rS.recipe.recipe.id)},rx=function(){localStorage.setItem("bookmarks",JSON.stringify(rS.bookmarks))},r$=async function(e){try{console.log(rS.recipe),console.log(e);let t=new RegExp(/(^\d+$)|\d[\W]\d,[a-z]/i),r=e.filter(([e])=>e.startsWith("ingredient")).map(([,e])=>e.match(t)?e.split(","):[]).map(e=>{let[t,r,n]=e;return n?(console.log(t),{quantity:t?new(v(rE))(t).valueOf():null,unit:r?r.trim():"",description:n.trim()}):null});console.log(r);let n=Object.fromEntries(e),i={title:rk(n.title,"text")?n.title:null,publisher:rk(n.publisher,"text")?n.publisher:null,source_url:rk(n.sourceUrl,"url")?n.sourceUrl:null,image_url:rk(n.image,"url")?n.image:null,servings:rk(n.servings,"number")?+n.servings:1,cooking_time:rk(n.cookingTime,"number")?+n.cookingTime:1,ingredients:r};Object.values(i).forEach(e=>{if(!e||0===e.length)throw Error("Please fill all the recipe data 's fields or check the format")});let{data:o}=await rw(`${ry}?key=${rb}`,i);rS.recipe=o,rM()}catch(e){throw e}},rI=JSON.parse(localStorage.getItem("bookmarks"));rI&&0!==rI.length&&(rS.bookmarks=rI);var rP={};rP=import.meta.resolve("eyyUD");class rT{updatePreviewDOM(e,t){let r=Array.from(this._parentEle.querySelectorAll("*")),n=Array.from(document.createRange().createContextualFragment(this._renderListRecipe(e,t)).querySelectorAll("*"));r.forEach((e,t)=>{Array.from(e.classList).at(-1)!==Array.from(n[t].classList).at(-1)&&e.classList.toggle("preview__link--active")})}render(e,t="",r=!1){if(!e||0===e.length)return r?this.renderMessage():this.renderError();this._data=e,this._clear();let n=this._renderListRecipe(this._data,t);this._parentEle.insertAdjacentHTML("afterbegin",n)}loadingSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${v(rP)}#icon-loader"></use>
          </svg>
        </div>
        `;this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${v(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",t)}renderMessage(){let e=`
          <div class="message">
            <div>
              <svg>
                <use href="${v(rP)}#icon-smile"></use>
              </svg>
            </div>
            <p>${this._successMessage}</p>
          </div>
      `;this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentEle.innerHTML=""}_clearInput(){this._parentEle.querySelector(".search__field").value=""}addLoadRecipeHandler(e){window.addEventListener("hashchange",e)}addLoadSearchHandler(...e){this._parentEle.addEventListener("submit",async function(t){t.preventDefault();try{for(let t of e)await t()}catch(e){console.log(e)}})}addButtonPagHandler(e){this._parentEle.addEventListener("click",function(t){t.target.closest(".pagination__btn--prev")&&e("prev"),t.target.closest(".pagination__btn--next")&&e("next")})}addUpdateServingsHandler(e){let t=this;this._parentEle.addEventListener("click",function(r){let n=+t._parentEle.querySelector(".recipe__info-data--people").textContent;r.target.closest(".btn--increase-servings")&&e(++n),r.target.closest(".btn--decrease-servings")&&e(--n)})}addBookmarkHandler(e){this._parentEle.addEventListener("click",function(t){t.target.closest(".btn--round")&&e()})}addLoadBookmarkHandler(e){window.addEventListener("load",e)}addNewRecipeHandler(e){this._parentEle.addEventListener("submit",function(t){t.preventDefault(),e([...new FormData(this)])})}}class rB extends rT{_data;_parentEle=document.querySelector(".recipe");_errorMessage="Could not find the recipe \uD83C\uDF55\uD83C\uDF55";_successMessage="";updateDOM(e){let t=Array.from(this._parentEle.querySelectorAll("*")),r=Array.from(document.createRange().createContextualFragment(this._recipeRender(e)).querySelectorAll("*"));t.forEach((e,t)=>{(e.firstChild?.nodeValue.trim()!==r[t].firstChild?.nodeValue.trim()||e.firstElementChild?.outerHTML!==r[t].firstElementChild?.outerHTML)&&(e.innerHTML=r[t].innerHTML)})}render(e=""){if(!e)return;this._data=e;let t=this._recipeRender(this._data);return this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",t),this}#e(e){return e.recipe.ingredients.map(e=>e?`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${v(rP)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new(v(rE))(e.quantity).toFraction():""}</div>
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
                <use href="${v(rP)}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${e.recipe.cooking_time}</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${v(rP)}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${e.recipe.servings}</span>
              <span class="recipe__info-text">servings</span>
              
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--decrease-servings">
                  <svg>
                    <use href="${v(rP)}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="${v(rP)}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
              
            </div>
  
            <div class="recipe__user-generated ${e.recipe.key?"":"hidden"}">
              <svg>
                <use href="${v(rP)}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="${v(rP)}#icon-bookmark${e.bookmark?"-fill":""}"></use>
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
                <use href="${v(rP)}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>`}}var rH=new rB;class rD extends rT{_parentEle=document.querySelector(".search");_errorMessage="invalid input";_successMessage="";getQuery(){let e=this._parentEle.querySelector(".search__field").value;return this._clearInput(),e}}var rN=new rD;class rF extends rT{_parentEle=document.querySelector(".results");_errorMessage="recipe list not found, please try again \uD83C\uDF5F\uD83C\uDF5F";_successMessage="";#t(e="",t){return`<li class="preview">
            <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                <div class="preview__user-generated ${e.key?"":"hidden"}">
                  <svg>
                    <use href="${v(rP)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
    </li>`}_renderListRecipe(e="",t){return e.map(e=>this.#t(e,t)).join("")}}var rq=new rF;class rR extends rT{_data="";_parentEle=document.querySelector(".pagination");_errorMessage="";render(e){this._data=e,this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",this.#t(this._data))}#r(e){return 1===e.totalPage?"":1===e.page?this._buttonNextMarkupHtml(e):e.page>1&&e.page<e.totalPage?`${this._buttonPrevMarkupHtml(e)}${this._buttonNextMarkupHtml(e)}`:e.page===e.totalPage?`${this._buttonPrevMarkupHtml(e)}`:void 0}_buttonPrevMarkupHtml(e=""){return`<button class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${v(rP)}#icon-arrow-left"></use>
              </svg>
              <span>${e.page===e.totalPage?"Previous":`Page ${e.page-1}`}</span>
            </button>`}_buttonNextMarkupHtml(e=""){return`<button class="btn--inline pagination__btn--next">
              <span>${1===e.page?"Next":`Page ${e.page+1}`}</span>
              <svg class="search__icon">
                <use href="${v(rP)}#icon-arrow-right"></use>
              </svg>
            </button>`}#t(e=""){return e&&0!==e.result.length?this.#r(e):""}}var rC=new rR;class rA extends rT{_data;_parentEle=document.querySelector(".bookmarks__list");_errorMessage="";_successMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";#t(e="",t){return`<li class="preview">
            <a class="preview__link ${e.recipe.id===t?"preview__link--active":""}" href="#${e.recipe.id}">
              <figure class="preview__fig">
                <img src="${e.recipe.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.recipe.title}</h4>
                <p class="preview__publisher">${e.recipe.publisher}</p>
                <div class="preview__user-generated ${e.recipe.key?"":"hidden"}">
                  <svg>
                    <use href="${v(rP)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
    </li>`}_renderListRecipe(e="",t){return e.map(e=>this.#t(e,t)).join("")}}var rU=new rA;class rG extends rT{_parentEle=document.querySelector(".upload");_errorMessage="Wrong input format, please try again \uD83C\uDF55\uD83C\uDF55";_successMessage="Recipe successfully loaded";_modal=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_openModalButton=document.querySelector(".nav__btn--add-recipe");_closeModalButton=document.querySelector(".btn--close-modal");constructor(){super(),this._modalOpenHandler(),this._modalCloseHandler()}render(){let e=this.#t();return this._clear(),this._parentEle.insertAdjacentHTML("afterbegin",e),this}_toggleModal(){this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_modalOpenHandler(){this._openModalButton.addEventListener("click",()=>{this.render(),this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")})}_modalCloseHandler(){this._closeModalButton.addEventListener("click",()=>{this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}),this._overlay.addEventListener("click",()=>{this._modal.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")})}#t(){return`
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
            <use href="${v(rP)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `}}var rQ=new rG;const rW=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rS.search.result.length>0&&rq.updatePreviewDOM(rS.search.pagResult,e),rS.bookmarks.length>0&&rU.updatePreviewDOM(rS.bookmarks,e),rH.loadingSpinner(),await rL(e),rH.render(rS.recipe)}catch(e){rH.renderError()}},rz=async function(){try{rq.loadingSpinner();let e=rN.getQuery();if(!e)return;await rO(e)}catch(e){rq.renderError()}},rJ=async function(){let e=rS.search.page;rq.render(rS.search.pagResult=rS.search.result.slice((e-1)*10,10*e)),rC.render(rS.search)},rV=async function(e){"next"===e?rS.search.page++:rS.search.page--,rJ()},rY=async function(e){try{rQ.loadingSpinner(),await r$(e),rQ.renderMessage(),setTimeout(()=>{rQ._toggleModal(),rH.render(rS.recipe)},2500),rx(),rU.render(rS.bookmarks,rS.recipe.recipe.id,!0)}catch(e){rQ.renderError(e.message)}};window.location.hash="",rH.addLoadRecipeHandler(rW),rH.addUpdateServingsHandler(function(e){e<1||(rj(e),rH.updateDOM(rS.recipe))}),rH.addBookmarkHandler(function(){rM(),rx(),rH.updateDOM(rS.recipe),rU.render(rS.bookmarks,rS.recipe.recipe.id,!0)}),rN.addLoadSearchHandler(rz,rJ),rC.addButtonPagHandler(rV),rU.addLoadBookmarkHandler(function(){rU.render(rS.bookmarks,"",!0)}),rQ.addNewRecipeHandler(rY);
//# sourceMappingURL=fork-app.680defa6.js.map
