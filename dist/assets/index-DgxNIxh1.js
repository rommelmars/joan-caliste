function qw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function b0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k0={exports:{}},Ys={},E0={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),Zw=Symbol.for("react.portal"),e2=Symbol.for("react.fragment"),t2=Symbol.for("react.strict_mode"),n2=Symbol.for("react.profiler"),r2=Symbol.for("react.provider"),i2=Symbol.for("react.context"),o2=Symbol.for("react.forward_ref"),a2=Symbol.for("react.suspense"),s2=Symbol.for("react.memo"),l2=Symbol.for("react.lazy"),Tp=Symbol.iterator;function u2(e){return e===null||typeof e!="object"?null:(e=Tp&&e[Tp]||e["@@iterator"],typeof e=="function"?e:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,T0={};function ci(e,t,n){this.props=e,this.context=t,this.refs=T0,this.updater=n||C0}ci.prototype.isReactComponent={};ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function A0(){}A0.prototype=ci.prototype;function Pf(e,t,n){this.props=e,this.context=t,this.refs=T0,this.updater=n||C0}var Tf=Pf.prototype=new A0;Tf.constructor=Pf;P0(Tf,ci.prototype);Tf.isPureReactComponent=!0;var Ap=Array.isArray,_0=Object.prototype.hasOwnProperty,Af={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function O0(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_0.call(t,r)&&!j0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Oo,type:e,key:o,ref:a,props:i,_owner:Af.current}}function c2(e,t){return{$$typeof:Oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _f(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oo}function f2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _p=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f2(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Oo:case Zw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Rl(a,0):r,Ap(i)?(n="",e!=null&&(n=e.replace(_p,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&(_f(i)&&(i=c2(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_p,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ap(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Rl(o,s);a+=Da(o,t,n,l,i)}else if(l=u2(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Rl(o,s++),a+=Da(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ia(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(o){return t.call(n,o,i++)}),r}function d2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Na={transition:null},p2={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Na,ReactCurrentOwner:Af};function M0(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ia,forEach:function(e,t,n){ia(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ia(e,function(){t++}),t},toArray:function(e){return ia(e,function(t){return t})||[]},only:function(e){if(!_f(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=ci;B.Fragment=e2;B.Profiler=n2;B.PureComponent=Pf;B.StrictMode=t2;B.Suspense=a2;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p2;B.act=M0;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=P0({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Af.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)_0.call(t,l)&&!j0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Oo,type:e.type,key:i,ref:o,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:i2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r2,_context:e},e.Consumer=e};B.createElement=O0;B.createFactory=function(e){var t=O0.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:o2,render:e}};B.isValidElement=_f;B.lazy=function(e){return{$$typeof:l2,_payload:{_status:-1,_result:e},_init:d2}};B.memo=function(e,t){return{$$typeof:s2,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};B.unstable_act=M0;B.useCallback=function(e,t){return Ie.current.useCallback(e,t)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ie.current.useEffect(e,t)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ie.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";E0.exports=B;var E=E0.exports;const bt=b0(E),h2=qw({__proto__:null,default:bt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m2=E,g2=Symbol.for("react.element"),y2=Symbol.for("react.fragment"),v2=Object.prototype.hasOwnProperty,x2=m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w2={key:!0,ref:!0,__self:!0,__source:!0};function R0(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)v2.call(t,r)&&!w2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:g2,type:e,key:o,ref:a,props:i,_owner:x2.current}}Ys.Fragment=y2;Ys.jsx=R0;Ys.jsxs=R0;k0.exports=Ys;var m=k0.exports,Nu={},L0={exports:{}},qe={},I0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,I){var N=j.length;j.push(I);e:for(;0<N;){var H=N-1>>>1,Y=j[H];if(0<i(Y,I))j[H]=I,j[N]=Y,N=H;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var I=j[0],N=j.pop();if(N!==I){j[0]=N;e:for(var H=0,Y=j.length,Nn=Y>>>1;H<Nn;){var ft=2*(H+1)-1,nn=j[ft],We=ft+1,Nt=j[We];if(0>i(nn,N))We<Y&&0>i(Nt,nn)?(j[H]=Nt,j[We]=N,H=We):(j[H]=nn,j[ft]=N,H=ft);else if(We<Y&&0>i(Nt,N))j[H]=Nt,j[We]=N,H=We;else break e}}return I}function i(j,I){var N=j.sortIndex-I.sortIndex;return N!==0?N:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,f=null,d=3,g=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=j)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function w(j){if(v=!1,y(j),!x)if(n(l)!==null)x=!0,yr(b);else{var I=n(u);I!==null&&ne(w,I.startTime-j)}}function b(j,I){x=!1,v&&(v=!1,p(P),P=-1),g=!0;var N=d;try{for(y(I),f=n(l);f!==null&&(!(f.expirationTime>I)||j&&!te());){var H=f.callback;if(typeof H=="function"){f.callback=null,d=f.priorityLevel;var Y=H(f.expirationTime<=I);I=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(l)&&r(l),y(I)}else r(l);f=n(l)}if(f!==null)var Nn=!0;else{var ft=n(u);ft!==null&&ne(w,ft.startTime-I),Nn=!1}return Nn}finally{f=null,d=N,g=!1}}var k=!1,C=null,P=-1,D=5,L=-1;function te(){return!(e.unstable_now()-L<D)}function Ue(){if(C!==null){var j=e.unstable_now();L=j;var I=!0;try{I=C(!0,j)}finally{I?ct():(k=!1,C=null)}}else k=!1}var ct;if(typeof h=="function")ct=function(){h(Ue)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,gr=Et.port2;Et.port1.onmessage=Ue,ct=function(){gr.postMessage(null)}}else ct=function(){S(Ue,0)};function yr(j){C=j,k||(k=!0,ct())}function ne(j,I){P=S(function(){j(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,yr(b))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var I=3;break;default:I=d}var N=d;d=I;try{return j()}finally{d=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=d;d=j;try{return I()}finally{d=N}},e.unstable_scheduleCallback=function(j,I,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,j){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,j={id:c++,callback:I,priorityLevel:j,startTime:N,expirationTime:Y,sortIndex:-1},N>H?(j.sortIndex=N,t(u,j),n(l)===null&&j===n(u)&&(v?(p(P),P=-1):v=!0,ne(w,N-H))):(j.sortIndex=Y,t(l,j),x||g||(x=!0,yr(b))),j},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(j){var I=d;return function(){var N=d;d=I;try{return j.apply(this,arguments)}finally{d=N}}}})(F0);I0.exports=F0;var S2=I0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b2=E,Qe=S2;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,no={};function fr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(no[e]=t,e=0;e<t.length;e++)D0.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,k2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Op={};function E2(e){return zu.call(Op,e)?!0:zu.call(jp,e)?!1:k2.test(e)?Op[e]=!0:(jp[e]=!0,!1)}function C2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P2(e,t,n,r){if(t===null||typeof t>"u"||C2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var jf=/[\-:]([a-z])/g;function Of(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jf,Of);Ce[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jf,Of);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jf,Of);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mf(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P2(t,n,i,r)&&(n=null),r||i===null?E2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=b2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),Sr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),Bu=Symbol.for("react.suspense"),Vu=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),$0=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function wi(e){return e===null||typeof e!="object"?null:(e=Mp&&e[Mp]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Ll;function ji(e){if(Ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ll=t&&t[1]||""}return`
`+Ll+e}var Il=!1;function Fl(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ji(e):""}function T2(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function Uu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case Sr:return"Portal";case $u:return"Profiler";case Rf:return"StrictMode";case Bu:return"Suspense";case Vu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case z0:return(e.displayName||"Context")+".Consumer";case N0:return(e._context.displayName||"Context")+".Provider";case Lf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case If:return t=e.displayName||null,t!==null?t:Uu(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Uu(e(t))}catch{}}return null}function A2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(t);case 8:return t===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function B0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _2(e){var t=B0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function aa(e){e._valueTracker||(e._valueTracker=_2(e))}function V0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=B0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wu(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function U0(e,t){t=t.checked,t!=null&&Mf(e,"checked",t,!1)}function Hu(e,t){U0(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yu(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yu(e,t,n){(t!=="number"||as(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oi=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ip(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Oi(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function W0(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function H0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?H0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,Y0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j2=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(e){j2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$i[t]=$i[e]})});function G0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$i.hasOwnProperty(e)&&$i[e]?(""+t).trim():t+"px"}function K0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=G0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var O2=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(e,t){if(t){if(O2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Qu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Ff(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qu=null,Vr=null,Ur=null;function Dp(e){if(e=Lo(e)){if(typeof qu!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Js(t),qu(e.stateNode,e.type,t))}}function X0(e){Vr?Ur?Ur.push(e):Ur=[e]:Vr=e}function Q0(){if(Vr){var e=Vr,t=Ur;if(Ur=Vr=null,Dp(e),t)for(e=0;e<t.length;e++)Dp(t[e])}}function J0(e,t){return e(t)}function q0(){}var Dl=!1;function Z0(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return J0(e,t,n)}finally{Dl=!1,(Vr!==null||Ur!==null)&&(q0(),Q0())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=Js(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Zu=!1;if(Gt)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Zu=!1}function M2(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Bi=!1,ss=null,ls=!1,ec=null,R2={onError:function(e){Bi=!0,ss=e}};function L2(e,t,n,r,i,o,a,s,l){Bi=!1,ss=null,M2.apply(R2,arguments)}function I2(e,t,n,r,i,o,a,s,l){if(L2.apply(this,arguments),Bi){if(Bi){var u=ss;Bi=!1,ss=null}else throw Error(_(198));ls||(ls=!0,ec=u)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ey(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Np(e){if(dr(e)!==e)throw Error(_(188))}function F2(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Np(i),e;if(o===r)return Np(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function ty(e){return e=F2(e),e!==null?ny(e):null}function ny(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ny(e);if(t!==null)return t;e=e.sibling}return null}var ry=Qe.unstable_scheduleCallback,zp=Qe.unstable_cancelCallback,D2=Qe.unstable_shouldYield,N2=Qe.unstable_requestPaint,pe=Qe.unstable_now,z2=Qe.unstable_getCurrentPriorityLevel,Df=Qe.unstable_ImmediatePriority,iy=Qe.unstable_UserBlockingPriority,us=Qe.unstable_NormalPriority,$2=Qe.unstable_LowPriority,oy=Qe.unstable_IdlePriority,Gs=null,Rt=null;function B2(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Gs,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:W2,V2=Math.log,U2=Math.LN2;function W2(e){return e>>>=0,e===0?32:31-(V2(e)/U2|0)|0}var la=64,ua=4194304;function Mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Mi(s):(o&=a,o!==0&&(r=Mi(o)))}else a=n&~i,a!==0?r=Mi(a):o!==0&&(r=Mi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function H2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-xt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=H2(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function tc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ay(){var e=la;return la<<=1,!(la&4194240)&&(la=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function G2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Nf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function sy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ly,zf,uy,cy,fy,nc=!1,ca=[],vn=null,xn=null,wn=null,oo=new Map,ao=new Map,pn=[],K2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(t.pointerId)}}function bi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Lo(t),t!==null&&zf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function X2(e,t,n,r,i){switch(t){case"focusin":return vn=bi(vn,e,t,n,r,i),!0;case"dragenter":return xn=bi(xn,e,t,n,r,i),!0;case"mouseover":return wn=bi(wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oo.set(o,bi(oo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ao.set(o,bi(ao.get(o)||null,e,t,n,r,i)),!0}return!1}function dy(e){var t=Yn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=ey(n),t!==null){e.blockedOn=t,fy(e.priority,function(){uy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ju=r,n.target.dispatchEvent(r),Ju=null}else return t=Lo(n),t!==null&&zf(t),e.blockedOn=n,!1;t.shift()}return!0}function Bp(e,t,n){za(e)&&n.delete(t)}function Q2(){nc=!1,vn!==null&&za(vn)&&(vn=null),xn!==null&&za(xn)&&(xn=null),wn!==null&&za(wn)&&(wn=null),oo.forEach(Bp),ao.forEach(Bp)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,nc||(nc=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Q2)))}function so(e){function t(i){return ki(i,e)}if(0<ca.length){ki(ca[0],e);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&ki(vn,e),xn!==null&&ki(xn,e),wn!==null&&ki(wn,e),oo.forEach(t),ao.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)dy(n),n.blockedOn===null&&pn.shift()}var Wr=en.ReactCurrentBatchConfig,fs=!0;function J2(e,t,n,r){var i=W,o=Wr.transition;Wr.transition=null;try{W=1,$f(e,t,n,r)}finally{W=i,Wr.transition=o}}function q2(e,t,n,r){var i=W,o=Wr.transition;Wr.transition=null;try{W=4,$f(e,t,n,r)}finally{W=i,Wr.transition=o}}function $f(e,t,n,r){if(fs){var i=rc(e,t,n,r);if(i===null)Kl(e,t,r,ds,n),$p(e,r);else if(X2(i,e,t,n,r))r.stopPropagation();else if($p(e,r),t&4&&-1<K2.indexOf(e)){for(;i!==null;){var o=Lo(i);if(o!==null&&ly(o),o=rc(e,t,n,r),o===null&&Kl(e,t,r,ds,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var ds=null;function rc(e,t,n,r){if(ds=null,e=Ff(r),e=Yn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ey(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ds=e,null}function py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z2()){case Df:return 1;case iy:return 4;case us:case $2:return 16;case oy:return 536870912;default:return 16}default:return 16}}var mn=null,Bf=null,$a=null;function hy(){if($a)return $a;var e,t=Bf,n=t.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return $a=i.slice(e,1<r?1-r:void 0)}function Ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fa(){return!0}function Vp(){return!1}function Ze(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fa:Vp,this.isPropagationStopped=Vp,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),t}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=Ze(fi),Ro=le({},fi,{view:0,detail:0}),Z2=Ze(Ro),zl,$l,Ei,Ks=le({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(zl=e.screenX-Ei.screenX,$l=e.screenY-Ei.screenY):$l=zl=0,Ei=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Up=Ze(Ks),eS=le({},Ks,{dataTransfer:0}),tS=Ze(eS),nS=le({},Ro,{relatedTarget:0}),Bl=Ze(nS),rS=le({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),iS=Ze(rS),oS=le({},fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aS=Ze(oS),sS=le({},fi,{data:0}),Wp=Ze(sS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cS[e])?!!t[e]:!1}function Uf(){return fS}var dS=le({},Ro,{key:function(e){if(e.key){var t=lS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(e){return e.type==="keypress"?Ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pS=Ze(dS),hS=le({},Ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Ze(hS),mS=le({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),gS=Ze(mS),yS=le({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=Ze(yS),xS=le({},Ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=Ze(xS),SS=[9,13,27,32],Wf=Gt&&"CompositionEvent"in window,Vi=null;Gt&&"documentMode"in document&&(Vi=document.documentMode);var bS=Gt&&"TextEvent"in window&&!Vi,my=Gt&&(!Wf||Vi&&8<Vi&&11>=Vi),Yp=" ",Gp=!1;function gy(e,t){switch(e){case"keyup":return SS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function kS(e,t){switch(e){case"compositionend":return yy(t);case"keypress":return t.which!==32?null:(Gp=!0,Yp);case"textInput":return e=t.data,e===Yp&&Gp?null:e;default:return null}}function ES(e,t){if(kr)return e==="compositionend"||!Wf&&gy(e,t)?(e=hy(),$a=Bf=mn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return my&&t.locale!=="ko"?null:t.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!CS[e.type]:t==="textarea"}function vy(e,t,n,r){X0(r),t=ps(t,"onChange"),0<t.length&&(n=new Vf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ui=null,lo=null;function PS(e){_y(e,0)}function Xs(e){var t=Pr(e);if(V0(t))return e}function TS(e,t){if(e==="change")return t}var xy=!1;if(Gt){var Vl;if(Gt){var Ul="oninput"in document;if(!Ul){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ul=typeof Xp.oninput=="function"}Vl=Ul}else Vl=!1;xy=Vl&&(!document.documentMode||9<document.documentMode)}function Qp(){Ui&&(Ui.detachEvent("onpropertychange",wy),lo=Ui=null)}function wy(e){if(e.propertyName==="value"&&Xs(lo)){var t=[];vy(t,lo,e,Ff(e)),Z0(PS,t)}}function AS(e,t,n){e==="focusin"?(Qp(),Ui=t,lo=n,Ui.attachEvent("onpropertychange",wy)):e==="focusout"&&Qp()}function _S(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xs(lo)}function jS(e,t){if(e==="click")return Xs(t)}function OS(e,t){if(e==="input"||e==="change")return Xs(t)}function MS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:MS;function uo(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zu.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function Jp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,t){var n=Jp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function Sy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function by(){for(var e=window,t=as();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=as(e.document)}return t}function Hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function RS(e){var t=by(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sy(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qp(n,o);var a=qp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var LS=Gt&&"documentMode"in document&&11>=document.documentMode,Er=null,ic=null,Wi=null,oc=!1;function Zp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||Er==null||Er!==as(r)||(r=Er,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&uo(Wi,r)||(Wi=r,r=ps(ic,"onSelect"),0<r.length&&(t=new Vf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cr={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},Wl={},ky={};Gt&&(ky=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Qs(e){if(Wl[e])return Wl[e];if(!Cr[e])return e;var t=Cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ky)return Wl[e]=t[n];return e}var Ey=Qs("animationend"),Cy=Qs("animationiteration"),Py=Qs("animationstart"),Ty=Qs("transitionend"),Ay=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,t){Ay.set(e,t),fr(t,[e])}for(var Hl=0;Hl<eh.length;Hl++){var Yl=eh[Hl],IS=Yl.toLowerCase(),FS=Yl[0].toUpperCase()+Yl.slice(1);Ln(IS,"on"+FS)}Ln(Ey,"onAnimationEnd");Ln(Cy,"onAnimationIteration");Ln(Py,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(Ty,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function th(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I2(r,t,void 0,e),e.currentTarget=null}function _y(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;th(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;th(i,s,u),o=l}}}if(ls)throw e=ec,ls=!1,ec=null,e}function K(e,t){var n=t[cc];n===void 0&&(n=t[cc]=new Set);var r=e+"__bubble";n.has(r)||(jy(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),jy(n,e,r,t)}var pa="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[pa]){e[pa]=!0,D0.forEach(function(n){n!=="selectionchange"&&(DS.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pa]||(t[pa]=!0,Gl("selectionchange",!1,t))}}function jy(e,t,n,r){switch(py(t)){case 1:var i=J2;break;case 4:i=q2;break;default:i=$f}n=i.bind(null,t,n,e),i=void 0,!Zu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Yn(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Z0(function(){var u=o,c=Ff(n),f=[];e:{var d=Ay.get(e);if(d!==void 0){var g=Vf,x=e;switch(e){case"keypress":if(Ba(n)===0)break e;case"keydown":case"keyup":g=pS;break;case"focusin":x="focus",g=Bl;break;case"focusout":x="blur",g=Bl;break;case"beforeblur":case"afterblur":g=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gS;break;case Ey:case Cy:case Py:g=iS;break;case Ty:g=vS;break;case"scroll":g=Z2;break;case"wheel":g=wS;break;case"copy":case"cut":case"paste":g=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hp}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var h=u,y;h!==null;){y=h;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,p!==null&&(w=io(h,p),w!=null&&v.push(fo(h,w,y)))),S)break;h=h.return}0<v.length&&(d=new g(d,x,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Ju&&(x=n.relatedTarget||n.fromElement)&&(Yn(x)||x[Kt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Yn(x):null,x!==null&&(S=dr(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(v=Up,w="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Hp,w="onPointerLeave",p="onPointerEnter",h="pointer"),S=g==null?d:Pr(g),y=x==null?d:Pr(x),d=new v(w,h+"leave",g,n,c),d.target=S,d.relatedTarget=y,w=null,Yn(c)===u&&(v=new v(p,h+"enter",x,n,c),v.target=y,v.relatedTarget=S,w=v),S=w,g&&x)t:{for(v=g,p=x,h=0,y=v;y;y=vr(y))h++;for(y=0,w=p;w;w=vr(w))y++;for(;0<h-y;)v=vr(v),h--;for(;0<y-h;)p=vr(p),y--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=vr(v),p=vr(p)}v=null}else v=null;g!==null&&nh(f,d,g,v,!1),x!==null&&S!==null&&nh(f,S,x,v,!0)}}e:{if(d=u?Pr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var b=TS;else if(Kp(d))if(xy)b=OS;else{b=_S;var k=AS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=jS);if(b&&(b=b(e,u))){vy(f,b,n,c);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Yu(d,"number",d.value)}switch(k=u?Pr(u):window,e){case"focusin":(Kp(k)||k.contentEditable==="true")&&(Er=k,ic=u,Wi=null);break;case"focusout":Wi=ic=Er=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Zp(f,n,c);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":Zp(f,n,c)}var C;if(Wf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else kr?gy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(my&&n.locale!=="ko"&&(kr||P!=="onCompositionStart"?P==="onCompositionEnd"&&kr&&(C=hy()):(mn=c,Bf="value"in mn?mn.value:mn.textContent,kr=!0)),k=ps(u,P),0<k.length&&(P=new Wp(P,e,null,n,c),f.push({event:P,listeners:k}),C?P.data=C:(C=yy(n),C!==null&&(P.data=C)))),(C=bS?kS(e,n):ES(e,n))&&(u=ps(u,"onBeforeInput"),0<u.length&&(c=new Wp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}_y(f,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ps(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=io(e,n),o!=null&&r.unshift(fo(e,o,i)),o=io(e,t),o!=null&&r.push(fo(e,o,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nh(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=io(n,o),l!=null&&a.unshift(fo(n,l,s))):i||(l=io(n,o),l!=null&&a.push(fo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var NS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function rh(e){return(typeof e=="string"?e:""+e).replace(NS,`
`).replace(zS,"")}function ha(e,t,n){if(t=rh(t),rh(e)!==t&&n)throw Error(_(425))}function hs(){}var ac=null,sc=null;function lc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,$S=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(VS)}:uc;function VS(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),jt="__reactFiber$"+di,po="__reactProps$"+di,Kt="__reactContainer$"+di,cc="__reactEvents$"+di,US="__reactListeners$"+di,WS="__reactHandles$"+di;function Yn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=oh(e);e!==null;){if(n=e[jt])return n;e=oh(e)}return t}e=n,n=e.parentNode}return null}function Lo(e){return e=e[jt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Js(e){return e[po]||null}var fc=[],Tr=-1;function In(e){return{current:e}}function Q(e){0>Tr||(e.current=fc[Tr],fc[Tr]=null,Tr--)}function G(e,t){Tr++,fc[Tr]=e.current,e.current=t}var An={},Oe=In(An),$e=In(!1),rr=An;function Xr(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function ms(){Q($e),Q(Oe)}function ah(e,t,n){if(Oe.current!==An)throw Error(_(168));G(Oe,t),G($e,n)}function Oy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,A2(e)||"Unknown",i));return le({},n,r)}function gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,rr=Oe.current,G(Oe,e),G($e,$e.current),!0}function sh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Oy(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,Q($e),Q(Oe),G(Oe,e)):Q($e),G($e,n)}var Bt=null,qs=!1,Ql=!1;function My(e){Bt===null?Bt=[e]:Bt.push(e)}function HS(e){qs=!0,My(e)}function Fn(){if(!Ql&&Bt!==null){Ql=!0;var e=0,t=W;try{var n=Bt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,qs=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),ry(Df,Fn),i}finally{W=t,Ql=!1}}return null}var Ar=[],_r=0,ys=null,vs=0,rt=[],it=0,ir=null,Vt=1,Ut="";function Vn(e,t){Ar[_r++]=vs,Ar[_r++]=ys,ys=e,vs=t}function Ry(e,t,n){rt[it++]=Vt,rt[it++]=Ut,rt[it++]=ir,ir=e;var r=Vt;e=Ut;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Vt=1<<32-xt(t)+i|n<<i|r,Ut=o+e}else Vt=1<<o|n<<i|r,Ut=e}function Yf(e){e.return!==null&&(Vn(e,1),Ry(e,1,0))}function Gf(e){for(;e===ys;)ys=Ar[--_r],Ar[_r]=null,vs=Ar[--_r],Ar[_r]=null;for(;e===ir;)ir=rt[--it],rt[it]=null,Ut=rt[--it],rt[it]=null,Vt=rt[--it],rt[it]=null}var Ke=null,Ge=null,ee=!1,gt=null;function Ly(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:Vt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Ge=null,!0):!1;default:return!1}}function dc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pc(e){if(ee){var t=Ge;if(t){var n=t;if(!lh(e,t)){if(dc(e))throw Error(_(418));t=Sn(n.nextSibling);var r=Ke;t&&lh(e,t)?Ly(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ke=e)}}else{if(dc(e))throw Error(_(418));e.flags=e.flags&-4097|2,ee=!1,Ke=e}}}function uh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function ma(e){if(e!==Ke)return!1;if(!ee)return uh(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lc(e.type,e.memoizedProps)),t&&(t=Ge)){if(dc(e))throw Iy(),Error(_(418));for(;t;)Ly(e,t),t=Sn(t.nextSibling)}if(uh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Ke?Sn(e.stateNode.nextSibling):null;return!0}function Iy(){for(var e=Ge;e;)e=Sn(e.nextSibling)}function Qr(){Ge=Ke=null,ee=!1}function Kf(e){gt===null?gt=[e]:gt.push(e)}var YS=en.ReactCurrentBatchConfig;function Ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ch(e){var t=e._init;return t(e._payload)}function Fy(e){function t(p,h){if(e){var y=p.deletions;y===null?(p.deletions=[h],p.flags|=16):y.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Cn(p,h),p.index=0,p.sibling=null,p}function o(p,h,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,h)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,h,y,w){return h===null||h.tag!==6?(h=ru(y,p.mode,w),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,w){var b=y.type;return b===br?c(p,h,y.props.children,w,y.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===fn&&ch(b)===h.type)?(w=i(h,y.props),w.ref=Ci(p,h,y),w.return=p,w):(w=Ka(y.type,y.key,y.props,null,p.mode,w),w.ref=Ci(p,h,y),w.return=p,w)}function u(p,h,y,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=iu(y,p.mode,w),h.return=p,h):(h=i(h,y.children||[]),h.return=p,h)}function c(p,h,y,w,b){return h===null||h.tag!==7?(h=Zn(y,p.mode,w,b),h.return=p,h):(h=i(h,y),h.return=p,h)}function f(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ru(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oa:return y=Ka(h.type,h.key,h.props,null,p.mode,y),y.ref=Ci(p,null,h),y.return=p,y;case Sr:return h=iu(h,p.mode,y),h.return=p,h;case fn:var w=h._init;return f(p,w(h._payload),y)}if(Oi(h)||wi(h))return h=Zn(h,p.mode,y,null),h.return=p,h;ga(p,h)}return null}function d(p,h,y,w){var b=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:s(p,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:return y.key===b?l(p,h,y,w):null;case Sr:return y.key===b?u(p,h,y,w):null;case fn:return b=y._init,d(p,h,b(y._payload),w)}if(Oi(y)||wi(y))return b!==null?null:c(p,h,y,w,null);ga(p,y)}return null}function g(p,h,y,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(y)||null,s(h,p,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oa:return p=p.get(w.key===null?y:w.key)||null,l(h,p,w,b);case Sr:return p=p.get(w.key===null?y:w.key)||null,u(h,p,w,b);case fn:var k=w._init;return g(p,h,y,k(w._payload),b)}if(Oi(w)||wi(w))return p=p.get(y)||null,c(h,p,w,b,null);ga(h,w)}return null}function x(p,h,y,w){for(var b=null,k=null,C=h,P=h=0,D=null;C!==null&&P<y.length;P++){C.index>P?(D=C,C=null):D=C.sibling;var L=d(p,C,y[P],w);if(L===null){C===null&&(C=D);break}e&&C&&L.alternate===null&&t(p,C),h=o(L,h,P),k===null?b=L:k.sibling=L,k=L,C=D}if(P===y.length)return n(p,C),ee&&Vn(p,P),b;if(C===null){for(;P<y.length;P++)C=f(p,y[P],w),C!==null&&(h=o(C,h,P),k===null?b=C:k.sibling=C,k=C);return ee&&Vn(p,P),b}for(C=r(p,C);P<y.length;P++)D=g(C,p,P,y[P],w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?P:D.key),h=o(D,h,P),k===null?b=D:k.sibling=D,k=D);return e&&C.forEach(function(te){return t(p,te)}),ee&&Vn(p,P),b}function v(p,h,y,w){var b=wi(y);if(typeof b!="function")throw Error(_(150));if(y=b.call(y),y==null)throw Error(_(151));for(var k=b=null,C=h,P=h=0,D=null,L=y.next();C!==null&&!L.done;P++,L=y.next()){C.index>P?(D=C,C=null):D=C.sibling;var te=d(p,C,L.value,w);if(te===null){C===null&&(C=D);break}e&&C&&te.alternate===null&&t(p,C),h=o(te,h,P),k===null?b=te:k.sibling=te,k=te,C=D}if(L.done)return n(p,C),ee&&Vn(p,P),b;if(C===null){for(;!L.done;P++,L=y.next())L=f(p,L.value,w),L!==null&&(h=o(L,h,P),k===null?b=L:k.sibling=L,k=L);return ee&&Vn(p,P),b}for(C=r(p,C);!L.done;P++,L=y.next())L=g(C,p,P,L.value,w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?P:L.key),h=o(L,h,P),k===null?b=L:k.sibling=L,k=L);return e&&C.forEach(function(Ue){return t(p,Ue)}),ee&&Vn(p,P),b}function S(p,h,y,w){if(typeof y=="object"&&y!==null&&y.type===br&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case oa:e:{for(var b=y.key,k=h;k!==null;){if(k.key===b){if(b=y.type,b===br){if(k.tag===7){n(p,k.sibling),h=i(k,y.props.children),h.return=p,p=h;break e}}else if(k.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===fn&&ch(b)===k.type){n(p,k.sibling),h=i(k,y.props),h.ref=Ci(p,k,y),h.return=p,p=h;break e}n(p,k);break}else t(p,k);k=k.sibling}y.type===br?(h=Zn(y.props.children,p.mode,w,y.key),h.return=p,p=h):(w=Ka(y.type,y.key,y.props,null,p.mode,w),w.ref=Ci(p,h,y),w.return=p,p=w)}return a(p);case Sr:e:{for(k=y.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=iu(y,p.mode,w),h.return=p,p=h}return a(p);case fn:return k=y._init,S(p,h,k(y._payload),w)}if(Oi(y))return x(p,h,y,w);if(wi(y))return v(p,h,y,w);ga(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,y),h.return=p,p=h):(n(p,h),h=ru(y,p.mode,w),h.return=p,p=h),a(p)):n(p,h)}return S}var Jr=Fy(!0),Dy=Fy(!1),xs=In(null),ws=null,jr=null,Xf=null;function Qf(){Xf=jr=ws=null}function Jf(e){var t=xs.current;Q(xs),e._currentValue=t}function hc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Hr(e,t){ws=e,Xf=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(Xf!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(ws===null)throw Error(_(308));jr=e,ws.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Gn=null;function qf(e){Gn===null?Gn=[e]:Gn.push(e)}function Ny(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function Zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,qf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nf(e,n)}}function fh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ss(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,c=u=l=null,s=o;do{var d=s.lane,g=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,v=s;switch(d=t,g=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(g,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(g,f,d):x,d==null)break e;f=le({},f,d);break e;case 2:dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else g={eventTime:g,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,a|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=a,e.lanes=a,e.memoizedState=f}}function dh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Io={},Lt=In(Io),ho=In(Io),mo=In(Io);function Kn(e){if(e===Io)throw Error(_(174));return e}function ed(e,t){switch(G(mo,t),G(ho,e),G(Lt,Io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ku(t,e)}Q(Lt),G(Lt,t)}function qr(){Q(Lt),Q(ho),Q(mo)}function $y(e){Kn(mo.current);var t=Kn(Lt.current),n=Ku(t,e.type);t!==n&&(G(ho,e),G(Lt,n))}function td(e){ho.current===e&&(Q(Lt),Q(ho))}var oe=In(0);function bs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function nd(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ua=en.ReactCurrentDispatcher,ql=en.ReactCurrentBatchConfig,or=0,se=null,ye=null,xe=null,ks=!1,Hi=!1,go=0,GS=0;function Pe(){throw Error(_(321))}function rd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function id(e,t,n,r,i,o){if(or=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?JS:qS,e=n(r,i),Hi){o=0;do{if(Hi=!1,go=0,25<=o)throw Error(_(301));o+=1,xe=ye=null,t.updateQueue=null,Ua.current=ZS,e=n(r,i)}while(Hi)}if(Ua.current=Es,t=ye!==null&&ye.next!==null,or=0,xe=ye=se=null,ks=!1,t)throw Error(_(300));return e}function od(){var e=go!==0;return go=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?se.memoizedState=xe=e:xe=xe.next=e,xe}function lt(){if(ye===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=xe===null?se.memoizedState:xe.next;if(t!==null)xe=t,ye=e;else{if(e===null)throw Error(_(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},xe===null?se.memoizedState=xe=e:xe=xe.next=e}return xe}function yo(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=lt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,se.lanes|=c,ar|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,kt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function eu(e){var t=lt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);kt(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function By(){}function Vy(e,t){var n=se,r=lt(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ne=!0),r=r.queue,ad(Hy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,vo(9,Wy.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(_(349));or&30||Uy(n,t,i)}return i}function Uy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wy(e,t,n,r){t.value=n,t.getSnapshot=r,Yy(t)&&Gy(e)}function Hy(e,t,n){return n(function(){Yy(t)&&Gy(e)})}function Yy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Gy(e){var t=Xt(e,1);t!==null&&wt(t,e,1,-1)}function ph(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=QS.bind(null,se,e),[t.memoizedState,e]}function vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ky(){return lt().memoizedState}function Wa(e,t,n,r){var i=Pt();se.flags|=e,i.memoizedState=vo(1|t,n,void 0,r===void 0?null:r)}function Zs(e,t,n,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(ye!==null){var a=ye.memoizedState;if(o=a.destroy,r!==null&&rd(r,a.deps)){i.memoizedState=vo(t,n,o,r);return}}se.flags|=e,i.memoizedState=vo(1|t,n,o,r)}function hh(e,t){return Wa(8390656,8,e,t)}function ad(e,t){return Zs(2048,8,e,t)}function Xy(e,t){return Zs(4,2,e,t)}function Qy(e,t){return Zs(4,4,e,t)}function Jy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qy(e,t,n){return n=n!=null?n.concat([e]):null,Zs(4,4,Jy.bind(null,t,e),n)}function sd(){}function Zy(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ev(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&rd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tv(e,t,n){return or&21?(kt(n,t)||(n=ay(),se.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function KS(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{W=n,ql.transition=r}}function nv(){return lt().memoizedState}function XS(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rv(e))iv(t,n);else if(n=Ny(e,t,n,r),n!==null){var i=Le();wt(n,e,r,i),ov(n,t,r)}}function QS(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rv(e))iv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,kt(s,a)){var l=t.interleaved;l===null?(i.next=i,qf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ny(e,t,i,r),n!==null&&(i=Le(),wt(n,e,r,i),ov(n,t,r))}}function rv(e){var t=e.alternate;return e===se||t!==null&&t===se}function iv(e,t){Hi=ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ov(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nf(e,n)}}var Es={readContext:st,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},JS={readContext:st,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:hh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,Jy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=XS.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:ph,useDebugValue:sd,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=ph(!1),t=e[0];return e=KS.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Pt();if(ee){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Se===null)throw Error(_(349));or&30||Uy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,hh(Hy.bind(null,r,o,e),[e]),r.flags|=2048,vo(9,Wy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=Se.identifierPrefix;if(ee){var n=Ut,r=Vt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=GS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qS={readContext:st,useCallback:Zy,useContext:st,useEffect:ad,useImperativeHandle:qy,useInsertionEffect:Xy,useLayoutEffect:Qy,useMemo:ev,useReducer:Zl,useRef:Ky,useState:function(){return Zl(yo)},useDebugValue:sd,useDeferredValue:function(e){var t=lt();return tv(t,ye.memoizedState,e)},useTransition:function(){var e=Zl(yo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:By,useSyncExternalStore:Vy,useId:nv,unstable_isNewReconciler:!1},ZS={readContext:st,useCallback:Zy,useContext:st,useEffect:ad,useImperativeHandle:qy,useInsertionEffect:Xy,useLayoutEffect:Qy,useMemo:ev,useReducer:eu,useRef:Ky,useState:function(){return eu(yo)},useDebugValue:sd,useDeferredValue:function(e){var t=lt();return ye===null?t.memoizedState=e:tv(t,ye.memoizedState,e)},useTransition:function(){var e=eu(yo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:By,useSyncExternalStore:Vy,useId:nv,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function mc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var el={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=En(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=bn(e,o,i),t!==null&&(wt(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=En(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=bn(e,o,i),t!==null&&(wt(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=En(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=bn(e,i,r),t!==null&&(wt(t,e,r,n),Va(t,e,r))}};function mh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(i,o):!0}function av(e,t,n){var r=!1,i=An,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=Be(t)?rr:Oe.current,r=t.contextTypes,o=(r=r!=null)?Xr(e,i):An),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=el,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&el.enqueueReplaceState(t,t.state,null)}function gc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Zf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=Be(t)?rr:Oe.current,i.context=Xr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(mc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&el.enqueueReplaceState(i,i.state,null),Ss(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t){try{var n="",r=t;do n+=T2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function tu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e5=typeof WeakMap=="function"?WeakMap:Map;function sv(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ps||(Ps=!0,Tc=r),yc(e,t)},n}function lv(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yc(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function yh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h5.bind(null,e,t,n),t.then(e,e))}function vh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var t5=en.ReactCurrentOwner,Ne=!1;function Re(e,t,n,r){t.child=e===null?Dy(t,null,n,r):Jr(t,e.child,n,r)}function wh(e,t,n,r,i){n=n.render;var o=t.ref;return Hr(t,i),r=id(e,t,n,r,o,i),n=od(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(ee&&n&&Yf(t),t.flags|=1,Re(e,t,r,i),t.child)}function Sh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!md(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,uv(e,t,o,r,i)):(e=Ka(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(a,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=Cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function uv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(uo(o,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return vc(e,t,n,r,i)}function cv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Mr,Ye),Ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Mr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(Mr,Ye),Ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(Mr,Ye),Ye|=r;return Re(e,t,i,n),t.child}function fv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vc(e,t,n,r,i){var o=Be(n)?rr:Oe.current;return o=Xr(t,o),Hr(t,i),n=id(e,t,n,r,o,i),r=od(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(ee&&r&&Yf(t),t.flags|=1,Re(e,t,n,i),t.child)}function bh(e,t,n,r,i){if(Be(n)){var o=!0;gs(t)}else o=!1;if(Hr(t,i),t.stateNode===null)Ha(e,t),av(t,n,r),gc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=Be(n)?rr:Oe.current,u=Xr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&gh(t,a,r,u),dn=!1;var d=t.memoizedState;a.state=d,Ss(t,r,a,i),l=t.memoizedState,s!==r||d!==l||$e.current||dn?(typeof c=="function"&&(mc(t,n,c,r),l=t.memoizedState),(s=dn||mh(t,n,s,r,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,zy(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ht(t.type,s),a.props=u,f=t.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=Be(n)?rr:Oe.current,l=Xr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==l)&&gh(t,a,r,l),dn=!1,d=t.memoizedState,a.state=d,Ss(t,r,a,i);var x=t.memoizedState;s!==f||d!==x||$e.current||dn?(typeof g=="function"&&(mc(t,n,g,r),x=t.memoizedState),(u=dn||mh(t,n,u,r,d,x,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return xc(e,t,n,r,o,i)}function xc(e,t,n,r,i,o){fv(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&sh(t,n,!1),Qt(e,t,o);r=t.stateNode,t5.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Jr(t,e.child,null,o),t.child=Jr(t,null,s,o)):Re(e,t,s,o),t.memoizedState=r.state,i&&sh(t,n,!0),t.child}function dv(e){var t=e.stateNode;t.pendingContext?ah(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ah(e,t.context,!1),ed(e,t.containerInfo)}function kh(e,t,n,r,i){return Qr(),Kf(i),t.flags|=256,Re(e,t,n,r),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0};function Sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function pv(e,t,n){var r=t.pendingProps,i=oe.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(oe,i&1),e===null)return pc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=rl(a,r,0,null),e=Zn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Sc(n),t.memoizedState=wc,e):ld(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return n5(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Cn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Cn(s,o):(o=Zn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Sc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=wc,r}return o=e.child,e=o.sibling,r=Cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ld(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ya(e,t,n,r){return r!==null&&Kf(r),Jr(t,e.child,null,n),e=ld(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n5(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=tu(Error(_(422))),ya(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),o=Zn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Jr(t,e.child,null,a),t.child.memoizedState=Sc(a),t.memoizedState=wc,o);if(!(t.mode&1))return ya(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=tu(o,r,void 0),ya(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ne||s){if(r=Se,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),wt(r,e,i,-1))}return hd(),r=tu(Error(_(421))),ya(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ge=Sn(i.nextSibling),Ke=t,ee=!0,gt=null,e!==null&&(rt[it++]=Vt,rt[it++]=Ut,rt[it++]=ir,Vt=e.id,Ut=e.overflow,ir=t),t=ld(t,r.children),t.flags|=4096,t)}function Eh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),hc(e.return,t,n)}function nu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function hv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eh(e,n,t);else if(e.tag===19)Eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nu(t,!0,n,null,o);break;case"together":nu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ha(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r5(e,t,n){switch(t.tag){case 3:dv(t),Qr();break;case 5:$y(t);break;case 1:Be(t.type)&&gs(t);break;case 4:ed(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?pv(e,t,n):(G(oe,oe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);G(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,cv(e,t,n)}return Qt(e,t,n)}var mv,bc,gv,yv;mv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};gv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(Lt.current);var o=null;switch(n){case"input":i=Wu(e,i),r=Wu(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Gu(e,i),r=Gu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hs)}Xu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};yv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pi(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i5(e,t,n){var r=t.pendingProps;switch(Gf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Be(t.type)&&ms(),Te(t),null;case 3:return r=t.stateNode,qr(),Q($e),Q(Oe),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(jc(gt),gt=null))),bc(e,t),Te(t),null;case 5:td(t);var i=Kn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)gv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Te(t),null}if(e=Kn(Lt.current),ma(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[jt]=t,r[po]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Ri.length;i++)K(Ri[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Rp(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Ip(r,o),K("invalid",r)}Xu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ha(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ha(r.textContent,s,e),i=["children",""+s]):no.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&K("scroll",r)}switch(n){case"input":aa(r),Lp(r,o,!0);break;case"textarea":aa(r),Fp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=H0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[jt]=t,e[po]=r,mv(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qu(n,r),n){case"dialog":K("cancel",e),K("close",e),i=r;break;case"iframe":case"object":case"embed":K("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ri.length;i++)K(Ri[i],e);i=r;break;case"source":K("error",e),i=r;break;case"img":case"image":case"link":K("error",e),K("load",e),i=r;break;case"details":K("toggle",e),i=r;break;case"input":Rp(e,r),i=Wu(e,r),K("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ip(e,r),i=Gu(e,r),K("invalid",e);break;default:i=r}Xu(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?K0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Y0(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(e,l):typeof l=="number"&&ro(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(no.hasOwnProperty(o)?l!=null&&o==="onScroll"&&K("scroll",e):l!=null&&Mf(e,o,l,a))}switch(n){case"input":aa(e),Lp(e,r,!1);break;case"textarea":aa(e),Fp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Br(e,!!r.multiple,o,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)yv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Kn(mo.current),Kn(Lt.current),ma(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(o=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ha(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return Te(t),null;case 13:if(Q(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ge!==null&&t.mode&1&&!(t.flags&128))Iy(),Qr(),t.flags|=98560,o=!1;else if(o=ma(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[jt]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else gt!==null&&(jc(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):hd())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return qr(),bc(e,t),e===null&&co(t.stateNode.containerInfo),Te(t),null;case 10:return Jf(t.type._context),Te(t),null;case 17:return Be(t.type)&&ms(),Te(t),null;case 19:if(Q(oe),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Pi(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bs(e),a!==null){for(t.flags|=128,Pi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(oe,oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>ei&&(t.flags|=128,r=!0,Pi(o,!1),t.lanes=4194304)}else{if(!r)if(e=bs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ee)return Te(t),null}else 2*pe()-o.renderingStartTime>ei&&n!==1073741824&&(t.flags|=128,r=!0,Pi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=oe.current,G(oe,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return pd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function o5(e,t){switch(Gf(t),t.tag){case 1:return Be(t.type)&&ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),Q($e),Q(Oe),nd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return td(t),null;case 13:if(Q(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(oe),null;case 4:return qr(),null;case 10:return Jf(t.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var va=!1,_e=!1,a5=typeof WeakSet=="function"?WeakSet:Set,O=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function kc(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Ch=!1;function s5(e,t){if(ac=fs,e=by(),Hf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=a),d===o&&++c===r&&(l=a),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sc={focusedElem:e,selectionRange:n},fs=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:ht(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){fe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=Ch,Ch=!1,x}function Yi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&kc(t,n,o)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vv(e){var t=e.alternate;t!==null&&(e.alternate=null,vv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[po],delete t[cc],delete t[US],delete t[WS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xv(e){return e.tag===5||e.tag===3||e.tag===4}function Ph(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hs));else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function Pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}var be=null,mt=!1;function on(e,t,n){for(n=n.child;n!==null;)wv(e,t,n),n=n.sibling}function wv(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Gs,n)}catch{}switch(n.tag){case 5:_e||Or(n,t);case 6:var r=be,i=mt;be=null,on(e,t,n),be=r,mt=i,be!==null&&(mt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(mt?(e=be,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),so(e)):Xl(be,n.stateNode));break;case 4:r=be,i=mt,be=n.stateNode.containerInfo,mt=!0,on(e,t,n),be=r,mt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&kc(n,t,a),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!_e&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){fe(n,t,s)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,on(e,t,n),_e=r):on(e,t,n);break;default:on(e,t,n)}}function Th(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a5),t.forEach(function(r){var i=g5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,mt=!1;break e;case 3:be=s.stateNode.containerInfo,mt=!0;break e;case 4:be=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(be===null)throw Error(_(160));wv(o,a,i),be=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sv(t,e),t=t.sibling}function Sv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),Ct(e),r&4){try{Yi(3,e,e.return),tl(3,e)}catch(v){fe(e,e.return,v)}try{Yi(5,e,e.return)}catch(v){fe(e,e.return,v)}}break;case 1:dt(t,e),Ct(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(dt(t,e),Ct(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var i=e.stateNode;try{ro(i,"")}catch(v){fe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&U0(i,o),Qu(s,a);var u=Qu(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?K0(i,f):c==="dangerouslySetInnerHTML"?Y0(i,f):c==="children"?ro(i,f):Mf(i,c,f,u)}switch(s){case"input":Hu(i,o);break;case"textarea":W0(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Br(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?Br(i,!!o.multiple,o.defaultValue,!0):Br(i,!!o.multiple,o.multiple?[]:"",!1))}i[po]=o}catch(v){fe(e,e.return,v)}}break;case 6:if(dt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){fe(e,e.return,v)}}break;case 3:if(dt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(v){fe(e,e.return,v)}break;case 4:dt(t,e),Ct(e);break;case 13:dt(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fd=pe())),r&4&&Th(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(u=_e)||c,dt(t,e),_e=u):dt(t,e),Ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(d=O,g=d.child,d.tag){case 0:case 11:case 14:case 15:Yi(4,d,d.return);break;case 1:Or(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:Or(d,d.return);break;case 22:if(d.memoizedState!==null){_h(f);continue}}g!==null?(g.return=d,O=g):_h(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=G0("display",a))}catch(v){fe(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){fe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:dt(t,e),Ct(e),r&4&&Th(e);break;case 21:break;default:dt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var o=Ph(e);Pc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ph(e);Cc(e,s,a);break;default:throw Error(_(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function l5(e,t,n){O=e,bv(e)}function bv(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||va;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||_e;s=va;var u=_e;if(va=a,(_e=l)&&!u)for(O=i;O!==null;)a=O,l=a.child,a.tag===22&&a.memoizedState!==null?jh(i):l!==null?(l.return=a,O=l):jh(i);for(;o!==null;)O=o,bv(o),o=o.sibling;O=i,va=s,_e=u}Ah(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Ah(e)}}function Ah(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&dh(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dh(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&so(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}_e||t.flags&512&&Ec(t)}catch(d){fe(t,t.return,d)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function _h(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function jh(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){fe(t,i,l)}}var o=t.return;try{Ec(t)}catch(l){fe(t,o,l)}break;case 5:var a=t.return;try{Ec(t)}catch(l){fe(t,a,l)}}}catch(l){fe(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var u5=Math.ceil,Cs=en.ReactCurrentDispatcher,ud=en.ReactCurrentOwner,at=en.ReactCurrentBatchConfig,V=0,Se=null,me=null,Ee=0,Ye=0,Mr=In(0),ve=0,xo=null,ar=0,nl=0,cd=0,Gi=null,De=null,fd=0,ei=1/0,zt=null,Ps=!1,Tc=null,kn=null,xa=!1,gn=null,Ts=0,Ki=0,Ac=null,Ya=-1,Ga=0;function Le(){return V&6?pe():Ya!==-1?Ya:Ya=pe()}function En(e){return e.mode&1?V&2&&Ee!==0?Ee&-Ee:YS.transition!==null?(Ga===0&&(Ga=ay()),Ga):(e=W,e!==0||(e=window.event,e=e===void 0?16:py(e.type)),e):1}function wt(e,t,n,r){if(50<Ki)throw Ki=0,Ac=null,Error(_(185));Mo(e,n,r),(!(V&2)||e!==Se)&&(e===Se&&(!(V&2)&&(nl|=n),ve===4&&hn(e,Ee)),Ve(e,r),n===1&&V===0&&!(t.mode&1)&&(ei=pe()+500,qs&&Fn()))}function Ve(e,t){var n=e.callbackNode;Y2(e,t);var r=cs(e,e===Se?Ee:0);if(r===0)n!==null&&zp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zp(n),t===1)e.tag===0?HS(Oh.bind(null,e)):My(Oh.bind(null,e)),BS(function(){!(V&6)&&Fn()}),n=null;else{switch(sy(r)){case 1:n=Df;break;case 4:n=iy;break;case 16:n=us;break;case 536870912:n=oy;break;default:n=us}n=jv(n,kv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kv(e,t){if(Ya=-1,Ga=0,V&6)throw Error(_(327));var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var r=cs(e,e===Se?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=As(e,r);else{t=r;var i=V;V|=2;var o=Cv();(Se!==e||Ee!==t)&&(zt=null,ei=pe()+500,qn(e,t));do try{d5();break}catch(s){Ev(e,s)}while(!0);Qf(),Cs.current=o,V=i,me!==null?t=0:(Se=null,Ee=0,t=ve)}if(t!==0){if(t===2&&(i=tc(e),i!==0&&(r=i,t=_c(e,i))),t===1)throw n=xo,qn(e,0),hn(e,r),Ve(e,pe()),n;if(t===6)hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!c5(i)&&(t=As(e,r),t===2&&(o=tc(e),o!==0&&(r=o,t=_c(e,o))),t===1))throw n=xo,qn(e,0),hn(e,r),Ve(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Un(e,De,zt);break;case 3:if(hn(e,r),(r&130023424)===r&&(t=fd+500-pe(),10<t)){if(cs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uc(Un.bind(null,e,De,zt),t);break}Un(e,De,zt);break;case 4:if(hn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-xt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u5(r/1960))-r,10<r){e.timeoutHandle=uc(Un.bind(null,e,De,zt),r);break}Un(e,De,zt);break;case 5:Un(e,De,zt);break;default:throw Error(_(329))}}}return Ve(e,pe()),e.callbackNode===n?kv.bind(null,e):null}function _c(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(qn(e,t).flags|=256),e=As(e,t),e!==2&&(t=De,De=n,t!==null&&jc(t)),e}function jc(e){De===null?De=e:De.push.apply(De,e)}function c5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~cd,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Oh(e){if(V&6)throw Error(_(327));Yr();var t=cs(e,0);if(!(t&1))return Ve(e,pe()),null;var n=As(e,t);if(e.tag!==0&&n===2){var r=tc(e);r!==0&&(t=r,n=_c(e,r))}if(n===1)throw n=xo,qn(e,0),hn(e,t),Ve(e,pe()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,De,zt),Ve(e,pe()),null}function dd(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(ei=pe()+500,qs&&Fn())}}function sr(e){gn!==null&&gn.tag===0&&!(V&6)&&Yr();var t=V;V|=1;var n=at.transition,r=W;try{if(at.transition=null,W=1,e)return e()}finally{W=r,at.transition=n,V=t,!(V&6)&&Fn()}}function pd(){Ye=Mr.current,Q(Mr)}function qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$S(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ms();break;case 3:qr(),Q($e),Q(Oe),nd();break;case 5:td(r);break;case 4:qr();break;case 13:Q(oe);break;case 19:Q(oe);break;case 10:Jf(r.type._context);break;case 22:case 23:pd()}n=n.return}if(Se=e,me=e=Cn(e.current,null),Ee=Ye=t,ve=0,xo=null,cd=nl=ar=0,De=Gi=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gn=null}return e}function Ev(e,t){do{var n=me;try{if(Qf(),Ua.current=Es,ks){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ks=!1}if(or=0,xe=ye=se=null,Hi=!1,go=0,ud.current=null,n===null||n.return===null){ve=1,xo=t,me=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ee,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=vh(a);if(g!==null){g.flags&=-257,xh(g,a,s,o,t),g.mode&1&&yh(o,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(l),t.updateQueue=v}else x.add(l);break e}else{if(!(t&1)){yh(o,u,t),hd();break e}l=Error(_(426))}}else if(ee&&s.mode&1){var S=vh(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),xh(S,a,s,o,t),Kf(Zr(l,s));break e}}o=l=Zr(l,s),ve!==4&&(ve=2),Gi===null?Gi=[o]:Gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=sv(o,l,t);fh(o,p);break e;case 1:s=l;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kn===null||!kn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=lv(o,s,t);fh(o,w);break e}}o=o.return}while(o!==null)}Tv(n)}catch(b){t=b,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Cv(){var e=Cs.current;return Cs.current=Es,e===null?Es:e}function hd(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(ar&268435455)&&!(nl&268435455)||hn(Se,Ee)}function As(e,t){var n=V;V|=2;var r=Cv();(Se!==e||Ee!==t)&&(zt=null,qn(e,t));do try{f5();break}catch(i){Ev(e,i)}while(!0);if(Qf(),V=n,Cs.current=r,me!==null)throw Error(_(261));return Se=null,Ee=0,ve}function f5(){for(;me!==null;)Pv(me)}function d5(){for(;me!==null&&!D2();)Pv(me)}function Pv(e){var t=_v(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Tv(e):me=t,ud.current=null}function Tv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o5(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(n=i5(n,t,Ye),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function Un(e,t,n){var r=W,i=at.transition;try{at.transition=null,W=1,p5(e,t,n,r)}finally{at.transition=i,W=r}return null}function p5(e,t,n,r){do Yr();while(gn!==null);if(V&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(G2(e,o),e===Se&&(me=Se=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xa||(xa=!0,jv(us,function(){return Yr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var a=W;W=1;var s=V;V|=4,ud.current=null,s5(e,n),Sv(n,e),RS(sc),fs=!!ac,sc=ac=null,e.current=n,l5(n),N2(),V=s,W=a,at.transition=o}else e.current=n;if(xa&&(xa=!1,gn=e,Ts=i),o=e.pendingLanes,o===0&&(kn=null),B2(n.stateNode),Ve(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ps)throw Ps=!1,e=Tc,Tc=null,e;return Ts&1&&e.tag!==0&&Yr(),o=e.pendingLanes,o&1?e===Ac?Ki++:(Ki=0,Ac=e):Ki=0,Fn(),null}function Yr(){if(gn!==null){var e=sy(Ts),t=at.transition,n=W;try{if(at.transition=null,W=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,Ts=0,V&6)throw Error(_(331));var i=V;for(V|=4,O=e.current;O!==null;){var o=O,a=o.child;if(O.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Yi(8,c,o)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var d=c.sibling,g=c.return;if(vv(c),c===u){O=null;break}if(d!==null){d.return=g,O=d;break}O=g}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}O=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,O=a;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}var h=e.current;for(O=h;O!==null;){a=O;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,O=y;else e:for(a=h;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:tl(9,s)}}catch(b){fe(s,s.return,b)}if(s===a){O=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,O=w;break e}O=s.return}}if(V=i,Fn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Gs,e)}catch{}r=!0}return r}finally{W=n,at.transition=t}}return!1}function Mh(e,t,n){t=Zr(n,t),t=sv(e,t,1),e=bn(e,t,1),t=Le(),e!==null&&(Mo(e,1,t),Ve(e,t))}function fe(e,t,n){if(e.tag===3)Mh(e,e,n);else for(;t!==null;){if(t.tag===3){Mh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Zr(n,e),e=lv(t,e,1),t=bn(t,e,1),e=Le(),t!==null&&(Mo(t,1,e),Ve(t,e));break}}t=t.return}}function h5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Ee&n)===n&&(ve===4||ve===3&&(Ee&130023424)===Ee&&500>pe()-fd?qn(e,0):cd|=n),Ve(e,t)}function Av(e,t){t===0&&(e.mode&1?(t=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):t=1);var n=Le();e=Xt(e,t),e!==null&&(Mo(e,t,n),Ve(e,n))}function m5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Av(e,n)}function g5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Av(e,n)}var _v;_v=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,r5(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,ee&&t.flags&1048576&&Ry(t,vs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ha(e,t),e=t.pendingProps;var i=Xr(t,Oe.current);Hr(t,n),i=id(null,t,r,e,i,n);var o=od();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(o=!0,gs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zf(t),i.updater=el,t.stateNode=i,i._reactInternals=t,gc(t,r,e,n),t=xc(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&Yf(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ha(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=v5(r),e=ht(r,e),i){case 0:t=vc(null,t,r,e,n);break e;case 1:t=bh(null,t,r,e,n);break e;case 11:t=wh(null,t,r,e,n);break e;case 14:t=Sh(null,t,r,ht(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),vc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),bh(e,t,r,i,n);case 3:e:{if(dv(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zy(e,t),Ss(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zr(Error(_(423)),t),t=kh(e,t,r,n,i);break e}else if(r!==i){i=Zr(Error(_(424)),t),t=kh(e,t,r,n,i);break e}else for(Ge=Sn(t.stateNode.containerInfo.firstChild),Ke=t,ee=!0,gt=null,n=Dy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){t=Qt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return $y(t),e===null&&pc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,lc(r,i)?a=null:o!==null&&lc(r,o)&&(t.flags|=32),fv(e,t),Re(e,t,a,n),t.child;case 6:return e===null&&pc(t),null;case 13:return pv(e,t,n);case 4:return ed(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),wh(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,G(xs,r._currentValue),r._currentValue=a,o!==null)if(kt(o.value,a)){if(o.children===i.children&&!$e.current){t=Qt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Wt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),hc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),hc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Hr(t,n),i=st(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Sh(e,t,r,i,n);case 15:return uv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Ha(e,t),t.tag=1,Be(r)?(e=!0,gs(t)):e=!1,Hr(t,n),av(t,r,i),gc(t,r,i,n),xc(null,t,r,!0,e,n);case 19:return hv(e,t,n);case 22:return cv(e,t,n)}throw Error(_(156,t.tag))};function jv(e,t){return ry(e,t)}function y5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new y5(e,t,n,r)}function md(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v5(e){if(typeof e=="function")return md(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lf)return 11;if(e===If)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ka(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")md(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case br:return Zn(n.children,i,o,t);case Rf:a=8,i|=8;break;case $u:return e=ot(12,n,t,i|2),e.elementType=$u,e.lanes=o,e;case Bu:return e=ot(13,n,t,i),e.elementType=Bu,e.lanes=o,e;case Vu:return e=ot(19,n,t,i),e.elementType=Vu,e.lanes=o,e;case $0:return rl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N0:a=10;break e;case z0:a=9;break e;case Lf:a=11;break e;case If:a=14;break e;case fn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ot(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Zn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=ot(22,e,r,t),e.elementType=$0,e.lanes=n,e.stateNode={isHidden:!1},e}function ru(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function iu(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function x5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gd(e,t,n,r,i,o,a,s,l){return e=new x5(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(o),e}function w5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ov(e){if(!e)return An;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Be(n))return Oy(e,n,t)}return t}function Mv(e,t,n,r,i,o,a,s,l){return e=gd(n,r,!0,e,i,o,a,s,l),e.context=Ov(null),n=e.current,r=Le(),i=En(n),o=Wt(r,i),o.callback=t??null,bn(n,o,i),e.current.lanes=i,Mo(e,i,r),Ve(e,r),e}function il(e,t,n,r){var i=t.current,o=Le(),a=En(i);return n=Ov(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(i,t,a),e!==null&&(wt(e,i,a,o),Va(e,i,a)),a}function _s(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yd(e,t){Rh(e,t),(e=e.alternate)&&Rh(e,t)}function S5(){return null}var Rv=typeof reportError=="function"?reportError:function(e){console.error(e)};function vd(e){this._internalRoot=e}ol.prototype.render=vd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));il(e,t,null,null)};ol.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){il(null,e,null,null)}),t[Kt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=cy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&dy(e)}};function xd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function b5(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_s(a);o.call(u)}}var a=Mv(t,r,e,0,null,!1,!1,"",Lh);return e._reactRootContainer=a,e[Kt]=a.current,co(e.nodeType===8?e.parentNode:e),sr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=_s(l);s.call(u)}}var l=gd(e,0,!1,null,null,!1,!1,"",Lh);return e._reactRootContainer=l,e[Kt]=l.current,co(e.nodeType===8?e.parentNode:e),sr(function(){il(t,l,n,r)}),l}function sl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=_s(a);s.call(l)}}il(t,a,e,i)}else a=b5(n,t,e,i,r);return _s(a)}ly=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mi(t.pendingLanes);n!==0&&(Nf(t,n|1),Ve(t,pe()),!(V&6)&&(ei=pe()+500,Fn()))}break;case 13:sr(function(){var r=Xt(e,1);if(r!==null){var i=Le();wt(r,e,1,i)}}),yd(e,1)}};zf=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Le();wt(t,e,134217728,n)}yd(e,134217728)}};uy=function(e){if(e.tag===13){var t=En(e),n=Xt(e,t);if(n!==null){var r=Le();wt(n,e,t,r)}yd(e,t)}};cy=function(){return W};fy=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};qu=function(e,t,n){switch(t){case"input":if(Hu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Js(r);if(!i)throw Error(_(90));V0(r),Hu(r,i)}}}break;case"textarea":W0(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};J0=dd;q0=sr;var k5={usingClientEntryPoint:!1,Events:[Lo,Pr,Js,X0,Q0,dd]},Ti={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},E5={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ty(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||S5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Gs=wa.inject(E5),Rt=wa}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k5;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(t))throw Error(_(200));return w5(e,t,null,n)};qe.createRoot=function(e,t){if(!xd(e))throw Error(_(299));var n=!1,r="",i=Rv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=gd(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,co(e.nodeType===8?e.parentNode:e),new vd(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=ty(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return sr(e)};qe.hydrate=function(e,t,n){if(!al(t))throw Error(_(200));return sl(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!xd(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mv(t,null,e,1,n??null,i,!1,o,a),e[Kt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)};qe.render=function(e,t,n){if(!al(t))throw Error(_(200));return sl(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!al(e))throw Error(_(40));return e._reactRootContainer?(sr(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};qe.unstable_batchedUpdates=dd;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return sl(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(e){console.error(e)}}Lv(),L0.exports=qe;var Iv=L0.exports,Ih=Iv;Nu.createRoot=Ih.createRoot,Nu.hydrateRoot=Ih.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}var yn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yn||(yn={}));const Fh="popstate";function C5(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Oc("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:js(i)}return T5(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P5(){return Math.random().toString(36).substr(2,8)}function Dh(e,t){return{usr:e.state,key:e.key,idx:t}}function Oc(e,t,n,r){return n===void 0&&(n=null),wo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pi(t):t,{state:n,key:t&&t.key||r||P5()})}function js(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function T5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=yn.Pop,l=null,u=c();u==null&&(u=0,a.replaceState(wo({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=yn.Pop;let S=c(),p=S==null?null:S-u;u=S,l&&l({action:s,location:v.location,delta:p})}function d(S,p){s=yn.Push;let h=Oc(v.location,S,p);u=c()+1;let y=Dh(h,u),w=v.createHref(h);try{a.pushState(y,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&l&&l({action:s,location:v.location,delta:1})}function g(S,p){s=yn.Replace;let h=Oc(v.location,S,p);u=c();let y=Dh(h,u),w=v.createHref(h);a.replaceState(y,"",w),o&&l&&l({action:s,location:v.location,delta:0})}function x(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:js(S);return h=h.replace(/ $/,"%20"),ge(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return s},get location(){return e(i,a)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fh,f),l=S,()=>{i.removeEventListener(Fh,f),l=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let p=x(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(S){return a.go(S)}};return v}var Nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nh||(Nh={}));function A5(e,t,n){return n===void 0&&(n="/"),_5(e,t,n)}function _5(e,t,n,r){let i=typeof t=="string"?pi(t):t,o=wd(i.pathname||"/",n);if(o==null)return null;let a=Dv(e);j5(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let u=V5(o);s=z5(a[l],u)}return s}function Dv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:D5(u,o.index),routesMeta:c})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Nv(o.path))i(o,a,l)}),t}function Nv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Nv(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function j5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:N5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const O5=/^:[\w-]+$/,M5=3,R5=2,L5=1,I5=10,F5=-2,zh=e=>e==="*";function D5(e,t){let n=e.split("/"),r=n.length;return n.some(zh)&&(r+=F5),t&&(r+=R5),n.filter(i=>!zh(i)).reduce((i,o)=>i+(O5.test(o)?M5:o===""?L5:I5),r)}function N5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function z5(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],u=s===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",f=$5({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Pn([o,f.pathname]),pathnameBase:Y5(Pn([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Pn([o,f.pathnameBase]))}return a}function $5(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=B5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:g}=c;if(d==="*"){let v=s[f]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=s[f];return g&&!x?u[d]=void 0:u[d]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function B5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function wd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function U5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pi(e):e;return{pathname:n?n.startsWith("/")?n:W5(n,t):t,search:G5(r),hash:K5(i)}}function W5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ou(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zv(e,t){let n=H5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $v(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pi(e):(i=wo({},e),ge(!i.pathname||!i.pathname.includes("?"),ou("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),ou("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),ou("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}s=f>=0?t[f]:"/"}let l=U5(i,s),u=a&&a!=="/"&&a.endsWith("/"),c=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Pn=e=>e.join("/").replace(/\/\/+/g,"/"),Y5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),G5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,K5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bv=["post","put","patch","delete"];new Set(Bv);const Q5=["get",...Bv];new Set(Q5);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}const Sd=E.createContext(null),J5=E.createContext(null),pr=E.createContext(null),ll=E.createContext(null),hr=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Vv=E.createContext(null);function q5(e,t){let{relative:n}=t===void 0?{}:t;Fo()||ge(!1);let{basename:r,navigator:i}=E.useContext(pr),{hash:o,pathname:a,search:s}=Wv(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:Pn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Fo(){return E.useContext(ll)!=null}function Do(){return Fo()||ge(!1),E.useContext(ll).location}function Uv(e){E.useContext(pr).static||E.useLayoutEffect(e)}function Z5(){let{isDataRoute:e}=E.useContext(hr);return e?db():eb()}function eb(){Fo()||ge(!1);let e=E.useContext(Sd),{basename:t,future:n,navigator:r}=E.useContext(pr),{matches:i}=E.useContext(hr),{pathname:o}=Do(),a=JSON.stringify(zv(i,n.v7_relativeSplatPath)),s=E.useRef(!1);return Uv(()=>{s.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let f=$v(u,JSON.parse(a),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Pn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,a,o,e])}function Wv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(pr),{matches:i}=E.useContext(hr),{pathname:o}=Do(),a=JSON.stringify(zv(i,r.v7_relativeSplatPath));return E.useMemo(()=>$v(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function tb(e,t){return nb(e,t)}function nb(e,t,n,r){Fo()||ge(!1);let{navigator:i,static:o}=E.useContext(pr),{matches:a}=E.useContext(hr),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Do(),f;if(t){var d;let p=typeof t=="string"?pi(t):t;u==="/"||(d=p.pathname)!=null&&d.startsWith(u)||ge(!1),f=p}else f=c;let g=f.pathname||"/",x=g;if(u!=="/"){let p=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(p.length).join("/")}let v=A5(e,{pathname:x}),S=sb(v&&v.map(p=>Object.assign({},p,{params:Object.assign({},l,p.params),pathname:Pn([u,i.encodeLocation?i.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:Pn([u,i.encodeLocation?i.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),a,n,r);return t&&S?E.createElement(ll.Provider,{value:{location:So({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yn.Pop}},S):S}function rb(){let e=fb(),t=X5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const ib=E.createElement(rb,null);class ob extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(hr.Provider,{value:this.props.routeContext},E.createElement(Vv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ab(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(hr.Provider,{value:t},r)}function sb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let c=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);c>=0||ge(!1),a=a.slice(0,Math.min(a.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let f=a[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:g}=n,x=f.route.loader&&d[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,f,d)=>{let g,x=!1,v=null,S=null;n&&(g=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||ib,l&&(u<0&&d===0?(pb("route-fallback"),x=!0,S=null):u===d&&(x=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,d+1)),h=()=>{let y;return g?y=v:x?y=S:f.route.Component?y=E.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=c,E.createElement(ab,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?E.createElement(ob,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:h(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var Hv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hv||{}),Yv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yv||{});function lb(e){let t=E.useContext(Sd);return t||ge(!1),t}function ub(e){let t=E.useContext(J5);return t||ge(!1),t}function cb(e){let t=E.useContext(hr);return t||ge(!1),t}function Gv(e){let t=cb(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function fb(){var e;let t=E.useContext(Vv),n=ub(),r=Gv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function db(){let{router:e}=lb(Hv.UseNavigateStable),t=Gv(Yv.UseNavigateStable),n=E.useRef(!1);return Uv(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,So({fromRouteId:t},o)))},[e,t])}const $h={};function pb(e,t,n){$h[e]||($h[e]=!0)}function hb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function wr(e){ge(!1)}function mb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=yn.Pop,navigator:o,static:a=!1,future:s}=e;Fo()&&ge(!1);let l=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:o,static:a,future:So({v7_relativeSplatPath:!1},s)}),[l,s,o,a]);typeof r=="string"&&(r=pi(r));let{pathname:c="/",search:f="",hash:d="",state:g=null,key:x="default"}=r,v=E.useMemo(()=>{let S=wd(c,l);return S==null?null:{location:{pathname:S,search:f,hash:d,state:g,key:x},navigationType:i}},[l,c,f,d,g,x,i]);return v==null?null:E.createElement(pr.Provider,{value:u},E.createElement(ll.Provider,{children:n,value:v}))}function gb(e){let{children:t,location:n}=e;return tb(Mc(t),n)}new Promise(()=>{});function Mc(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Mc(r.props.children,o));return}r.type!==wr&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Mc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rc(){return Rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rc.apply(this,arguments)}function yb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xb(e,t){return e.button===0&&(!t||t==="_self")&&!vb(e)}const wb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sb="6";try{window.__reactRouterVersion=Sb}catch{}const bb="startTransition",Bh=h2[bb];function kb(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=C5({window:i,v5Compat:!0}));let a=o.current,[s,l]=E.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=E.useCallback(f=>{u&&Bh?Bh(()=>l(f)):l(f)},[l,u]);return E.useLayoutEffect(()=>a.listen(c),[a,c]),E.useEffect(()=>hb(r),[r]),E.createElement(mb,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const Eb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c,viewTransition:f}=t,d=yb(t,wb),{basename:g}=E.useContext(pr),x,v=!1;if(typeof u=="string"&&Cb.test(u)&&(x=u,Eb))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),b=wd(w.pathname,g);w.origin===y.origin&&b!=null?u=b+w.search+w.hash:v=!0}catch{}let S=q5(u,{relative:i}),p=Pb(u,{replace:a,state:s,target:l,preventScrollReset:c,relative:i,viewTransition:f});function h(y){r&&r(y),y.defaultPrevented||p(y)}return E.createElement("a",Rc({},d,{href:x||S,onClick:v||o?r:h,ref:n,target:l}))});var Vh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Vh||(Vh={}));var Uh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Uh||(Uh={}));function Pb(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:s}=t===void 0?{}:t,l=Z5(),u=Do(),c=Wv(e,{relative:a});return E.useCallback(f=>{if(xb(f,n)){f.preventDefault();let d=r!==void 0?r:js(u)===js(c);l(e,{replace:d,state:i,preventScrollReset:o,relative:a,viewTransition:s})}},[u,l,c,r,i,n,e,o,a,s])}var ue={},bd={},No={},zo={},Kv="Expected a function",Wh=NaN,Tb="[object Symbol]",Ab=/^\s+|\s+$/g,_b=/^[-+]0x[0-9a-f]+$/i,jb=/^0b[01]+$/i,Ob=/^0o[0-7]+$/i,Mb=parseInt,Rb=typeof ra=="object"&&ra&&ra.Object===Object&&ra,Lb=typeof self=="object"&&self&&self.Object===Object&&self,Ib=Rb||Lb||Function("return this")(),Fb=Object.prototype,Db=Fb.toString,Nb=Math.max,zb=Math.min,au=function(){return Ib.Date.now()};function $b(e,t,n){var r,i,o,a,s,l,u=0,c=!1,f=!1,d=!0;if(typeof e!="function")throw new TypeError(Kv);t=Hh(t)||0,Os(n)&&(c=!!n.leading,f="maxWait"in n,o=f?Nb(Hh(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d);function g(k){var C=r,P=i;return r=i=void 0,u=k,a=e.apply(P,C),a}function x(k){return u=k,s=setTimeout(p,t),c?g(k):a}function v(k){var C=k-l,P=k-u,D=t-C;return f?zb(D,o-P):D}function S(k){var C=k-l,P=k-u;return l===void 0||C>=t||C<0||f&&P>=o}function p(){var k=au();if(S(k))return h(k);s=setTimeout(p,v(k))}function h(k){return s=void 0,d&&r?g(k):(r=i=void 0,a)}function y(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function w(){return s===void 0?a:h(au())}function b(){var k=au(),C=S(k);if(r=arguments,i=this,l=k,C){if(s===void 0)return x(l);if(f)return s=setTimeout(p,t),g(l)}return s===void 0&&(s=setTimeout(p,t)),a}return b.cancel=y,b.flush=w,b}function Bb(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(Kv);return Os(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),$b(e,t,{leading:r,maxWait:t,trailing:i})}function Os(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Vb(e){return!!e&&typeof e=="object"}function Ub(e){return typeof e=="symbol"||Vb(e)&&Db.call(e)==Tb}function Hh(e){if(typeof e=="number")return e;if(Ub(e))return Wh;if(Os(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Os(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ab,"");var n=jb.test(e);return n||Ob.test(e)?Mb(e.slice(2),n?2:8):_b.test(e)?Wh:+e}var Wb=Bb,$o={};Object.defineProperty($o,"__esModule",{value:!0});$o.addPassiveEventListener=function(t,n,r){var i=r.name;i||(i=n,console.warn("Listener must be a named function.")),Xa.has(n)||Xa.set(n,new Set);var o=Xa.get(n);if(!o.has(i)){var a=function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,l)}catch{}return s}();t.addEventListener(n,r,a?{passive:!0}:!1),o.add(i)}};$o.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Xa.get(n).delete(r.name||n)};var Xa=new Map;Object.defineProperty(zo,"__esModule",{value:!0});var Hb=Wb,Yb=Gb(Hb),Yh=$o;function Gb(e){return e&&e.__esModule?e:{default:e}}var Kb=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,Yb.default)(t,n)},re={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=Kb(function(i){re.scrollHandler(t)},n);return re.scrollSpyContainers.push(t),(0,Yh.addPassiveEventListener)(t,"scroll",r),function(){(0,Yh.removePassiveEventListener)(t,"scroll",r),re.scrollSpyContainers.splice(re.scrollSpyContainers.indexOf(t),1)}}return function(){}},isMounted:function(t){return re.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.scrollY!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollX:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.scrollX!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.scrollY:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=re.scrollSpyContainers[re.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(re.currentPositionX(t),re.currentPositionY(t))})},addStateHandler:function(t){re.spySetState.push(t)},addSpyHandler:function(t,n){var r=re.scrollSpyContainers[re.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t)},updateStates:function(){re.spySetState.forEach(function(t){return t()})},unmount:function(t,n){re.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),re.spySetState&&re.spySetState.length&&re.spySetState.indexOf(t)>-1&&re.spySetState.splice(re.spySetState.indexOf(t),1),document.removeEventListener("scroll",re.scrollHandler)},update:function(){return re.scrollSpyContainers.forEach(function(t){return re.scrollHandler(t)})}};zo.default=re;var hi={},Bo={};Object.defineProperty(Bo,"__esModule",{value:!0});var Xb=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,i=r?"#"+r:"",o=window&&window.location,a=i?o.pathname+o.search+i:o.pathname+o.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},Qb=function(){return window.location.hash.replace(/^#/,"")},Jb=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},qb=function(t){return getComputedStyle(t).position!=="static"},su=function(t,n){for(var r=t.offsetTop,i=t.offsetParent;i&&!n(i);)r+=i.offsetTop,i=i.offsetParent;return{offsetTop:r,offsetParent:i}},Zb=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(qb(t)){if(n.offsetParent!==t){var i=function(c){return c===t||c===document},o=su(n,i),a=o.offsetTop,s=o.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(c){return c===document};return su(n,l).offsetTop-su(t,l).offsetTop};Bo.default={updateHash:Xb,getHash:Qb,filterElementInContainer:Jb,scrollOffset:Zb};var ul={},kd={};Object.defineProperty(kd,"__esModule",{value:!0});kd.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Ed={};Object.defineProperty(Ed,"__esModule",{value:!0});var ek=$o,tk=["mousedown","wheel","touchmove","keydown"];Ed.default={subscribe:function(t){return typeof document<"u"&&tk.forEach(function(n){return(0,ek.addPassiveEventListener)(document,n,t)})}};var Vo={};Object.defineProperty(Vo,"__esModule",{value:!0});var Lc={registered:{},scrollEvent:{register:function(t,n){Lc.registered[t]=n},remove:function(t){Lc.registered[t]=null}}};Vo.default=Lc;Object.defineProperty(ul,"__esModule",{value:!0});var nk=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rk=Bo;cl(rk);var ik=kd,Gh=cl(ik),ok=Ed,ak=cl(ok),sk=Vo,Tt=cl(sk);function cl(e){return e&&e.__esModule?e:{default:e}}var Xv=function(t){return Gh.default[t.smooth]||Gh.default.defaultEasing},lk=function(t){return typeof t=="function"?t:function(){return t}},uk=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Ic=function(){return uk()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),Qv=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Jv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft},qv=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop},ck=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,i=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth)},fk=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,i=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)},dk=function e(t,n,r){var i=n.data;if(!n.ignoreCancelEvents&&i.cancel){Tt.default.registered.end&&Tt.default.registered.end(i.to,i.target,i.currentPositionY);return}if(i.delta=Math.round(i.targetPosition-i.startPosition),i.start===null&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:t(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var o=e.bind(null,t,n);Ic.call(window,o);return}Tt.default.registered.end&&Tt.default.registered.end(i.to,i.target,i.currentPosition)},Cd=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Uo=function(t,n,r,i){n.data=n.data||Qv(),window.clearTimeout(n.data.delayTimeout);var o=function(){n.data.cancel=!0};if(ak.default.subscribe(o),Cd(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Jv(n):qv(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Tt.default.registered.end&&Tt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=lk(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=i;var a=Xv(n),s=dk.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Tt.default.registered.begin&&Tt.default.registered.begin(n.data.to,n.data.target),Ic.call(window,s)},n.delay);return}Tt.default.registered.begin&&Tt.default.registered.begin(n.data.to,n.data.target),Ic.call(window,s)},fl=function(t){return t=nk({},t),t.data=t.data||Qv(),t.absolute=!0,t},pk=function(t){Uo(0,fl(t))},hk=function(t,n){Uo(t,fl(n))},mk=function(t){t=fl(t),Cd(t),Uo(t.horizontal?ck(t):fk(t),t)},gk=function(t,n){n=fl(n),Cd(n);var r=n.horizontal?Jv(n):qv(n);Uo(t+r,n)};ul.default={animateTopScroll:Uo,getAnimationType:Xv,scrollToTop:pk,scrollToBottom:mk,scrollTo:hk,scrollMore:gk};Object.defineProperty(hi,"__esModule",{value:!0});var yk=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vk=Bo,xk=Pd(vk),wk=ul,Sk=Pd(wk),bk=Vo,Sa=Pd(bk);function Pd(e){return e&&e.__esModule?e:{default:e}}var ba={},Kh=void 0;hi.default={unmount:function(){ba={}},register:function(t,n){ba[t]=n},unregister:function(t){delete ba[t]},get:function(t){return ba[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return Kh=t},getActiveLink:function(){return Kh},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=yk({},n,{absolute:!1});var i=n.containerId,o=n.container,a=void 0;i?a=document.getElementById(i):o&&o.nodeType?a=o:a=document,n.absolute=!0;var s=n.horizontal,l=xk.default.scrollOffset(a,r,s)+(n.offset||0);if(!n.smooth){Sa.default.registered.begin&&Sa.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,Sa.default.registered.end&&Sa.default.registered.end(t,r);return}Sk.default.animateTopScroll(l,n,t,r)}};var Zv={exports:{}},kk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ek=kk,Ck=Ek;function e1(){}function t1(){}t1.resetWarningCache=e1;var Pk=function(){function e(r,i,o,a,s,l){if(l!==Ck){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:t1,resetWarningCache:e1};return n.PropTypes=n,n};Zv.exports=Pk();var Wo=Zv.exports;const $=b0(Wo);var dl={};Object.defineProperty(dl,"__esModule",{value:!0});var Tk=Bo,lu=Ak(Tk);function Ak(e){return e&&e.__esModule?e:{default:e}}var _k={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,i=r.get(t);if(i&&(n||t!==r.getActiveLink())){var o=this.containers[t]||document;r.scrollTo(t,{container:o})}},getHash:function(){return lu.default.getHash()},changeHash:function(t,n){this.isInitialized()&&lu.default.getHash()!==t&&lu.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};dl.default=_k;Object.defineProperty(No,"__esModule",{value:!0});var ka=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ok=E,Xh=Ho(Ok),Mk=zo,Ea=Ho(Mk),Rk=hi,Lk=Ho(Rk),Ik=Wo,Z=Ho(Ik),Fk=dl,an=Ho(Fk);function Ho(e){return e&&e.__esModule?e:{default:e}}function Dk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Nk(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Qh={to:Z.default.string.isRequired,containerId:Z.default.string,container:Z.default.object,activeClass:Z.default.string,activeStyle:Z.default.object,spy:Z.default.bool,horizontal:Z.default.bool,smooth:Z.default.oneOfType([Z.default.bool,Z.default.string]),offset:Z.default.number,delay:Z.default.number,isDynamic:Z.default.bool,onClick:Z.default.func,duration:Z.default.oneOfType([Z.default.number,Z.default.func]),absolute:Z.default.bool,onSetActive:Z.default.func,onSetInactive:Z.default.func,ignoreCancelEvents:Z.default.bool,hashSpy:Z.default.bool,saveHashHistory:Z.default.bool,spyThrottle:Z.default.number};No.default=function(e,t){var n=t||Lk.default,r=function(o){zk(a,o);function a(s){Dk(this,a);var l=Nk(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(l),l.state={active:!1},l.beforeUnmountCallbacks=[],l}return jk(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();if(!Ea.default.isMounted(l)){var u=Ea.default.mount(l,this.props.spyThrottle);this.beforeUnmountCallbacks.push(u)}this.props.hashSpy&&(an.default.isMounted()||an.default.mount(n),an.default.mapContainer(this.props.to,l)),Ea.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){Ea.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(l){return l()})}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=ka({},this.props.style,this.props.activeStyle):u=ka({},this.props.style);var c=ka({},this.props);for(var f in Qh)c.hasOwnProperty(f)&&delete c[f];return c.className=l,c.style=u,c.onClick=this.handleClick,Xh.default.createElement(e,c)}}]),a}(Xh.default.PureComponent),i=function(){var a=this;this.scrollTo=function(s,l){n.scrollTo(s,ka({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var u=a.getScrollSpyContainer();if(!(an.default.isMounted()&&!an.default.isInitialized())){var c=a.props.horizontal,f=a.props.to,d=null,g=void 0,x=void 0;if(c){var v=0,S=0,p=0;if(u.getBoundingClientRect){var h=u.getBoundingClientRect();p=h.left}if(!d||a.props.isDynamic){if(d=n.get(f),!d)return;var y=d.getBoundingClientRect();v=y.left-p+s,S=v+y.width}var w=s-a.props.offset;g=w>=Math.floor(v)&&w<Math.floor(S),x=w<Math.floor(v)||w>=Math.floor(S)}else{var b=0,k=0,C=0;if(u.getBoundingClientRect){var P=u.getBoundingClientRect();C=P.top}if(!d||a.props.isDynamic){if(d=n.get(f),!d)return;var D=d.getBoundingClientRect();b=D.top-C+l,k=b+D.height}var L=l-a.props.offset;g=L>=Math.floor(b)&&L<Math.floor(k),x=L<Math.floor(b)||L>=Math.floor(k)}var te=n.getActiveLink();if(x){if(f===te&&n.setActiveLink(void 0),a.props.hashSpy&&an.default.getHash()===f){var Ue=a.props.saveHashHistory,ct=Ue===void 0?!1:Ue;an.default.changeHash("",ct)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(f,d))}if(g&&(te!==f||a.state.active===!1)){n.setActiveLink(f);var Et=a.props.saveHashHistory,gr=Et===void 0?!1:Et;a.props.hashSpy&&an.default.changeHash(f,gr),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(f,d))}}}};return r.propTypes=Qh,r.defaultProps={offset:0},r};Object.defineProperty(bd,"__esModule",{value:!0});var $k=E,Jh=n1($k),Bk=No,Vk=n1(Bk);function n1(e){return e&&e.__esModule?e:{default:e}}function Uk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qh(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Wk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Hk=function(e){Wk(t,e);function t(){var n,r,i,o;Uk(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return o=(r=(i=qh(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),i),i.render=function(){return Jh.default.createElement("a",i.props,i.props.children)},r),qh(i,o)}return t}(Jh.default.Component);bd.default=(0,Vk.default)(Hk);var Td={};Object.defineProperty(Td,"__esModule",{value:!0});var Yk=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Gk=E,Zh=r1(Gk),Kk=No,Xk=r1(Kk);function r1(e){return e&&e.__esModule?e:{default:e}}function Qk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jk(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function qk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Zk=function(e){qk(t,e);function t(){return Qk(this,t),Jk(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Yk(t,[{key:"render",value:function(){return Zh.default.createElement("button",this.props,this.props.children)}}]),t}(Zh.default.Component);Td.default=(0,Xk.default)(Zk);var Ad={},pl={};Object.defineProperty(pl,"__esModule",{value:!0});var eE=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),nE=E,em=hl(nE),rE=Iv;hl(rE);var iE=hi,tm=hl(iE),oE=Wo,nm=hl(oE);function hl(e){return e&&e.__esModule?e:{default:e}}function aE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sE(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function lE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}pl.default=function(e){var t=function(n){lE(r,n);function r(i){aE(this,r);var o=sE(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return o.childBindings={domNode:null},o}return tE(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;tm.default.unregister(this.props.name)}},{key:"registerElems",value:function(o){tm.default.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return em.default.createElement(e,eE({},this.props,{parentBindings:this.childBindings}))}}]),r}(em.default.Component);return t.propTypes={name:nm.default.string,id:nm.default.string},t};Object.defineProperty(Ad,"__esModule",{value:!0});var rm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uE=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),cE=E,im=_d(cE),fE=pl,dE=_d(fE),pE=Wo,om=_d(pE);function _d(e){return e&&e.__esModule?e:{default:e}}function hE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mE(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function gE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i1=function(e){gE(t,e);function t(){return hE(this,t),mE(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return uE(t,[{key:"render",value:function(){var r=this,i=rm({},this.props);return delete i.name,i.parentBindings&&delete i.parentBindings,im.default.createElement("div",rm({},i,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(im.default.Component);i1.propTypes={name:om.default.string,id:om.default.string};Ad.default=(0,dE.default)(i1);var uu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},am=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function sm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lm(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function um(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Ca=E,$n=zo,cu=hi,ie=Wo,sn=dl,cm={to:ie.string.isRequired,containerId:ie.string,container:ie.object,activeClass:ie.string,spy:ie.bool,smooth:ie.oneOfType([ie.bool,ie.string]),offset:ie.number,delay:ie.number,isDynamic:ie.bool,onClick:ie.func,duration:ie.oneOfType([ie.number,ie.func]),absolute:ie.bool,onSetActive:ie.func,onSetInactive:ie.func,ignoreCancelEvents:ie.bool,hashSpy:ie.bool,spyThrottle:ie.number},yE={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||cu,i=function(a){um(s,a);function s(l){sm(this,s);var u=lm(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return o.call(u),u.state={active:!1},u}return am(s,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();$n.isMounted(u)||$n.mount(u,this.props.spyThrottle),this.props.hashSpy&&(sn.isMounted()||sn.mount(r),sn.mapContainer(this.props.to,u)),this.props.spy&&$n.addStateHandler(this.stateHandler),$n.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){$n.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=uu({},this.props);for(var f in cm)c.hasOwnProperty(f)&&delete c[f];return c.className=u,c.onClick=this.handleClick,Ca.createElement(t,c)}}]),s}(Ca.Component),o=function(){var s=this;this.scrollTo=function(l,u){r.scrollTo(l,uu({},s.state,u))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var u=s.getScrollSpyContainer();if(!(sn.isMounted()&&!sn.isInitialized())){var c=s.props.to,f=null,d=0,g=0,x=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();x=v.top}if(!f||s.props.isDynamic){if(f=r.get(c),!f)return;var S=f.getBoundingClientRect();d=S.top-x+l,g=d+S.height}var p=l-s.props.offset,h=p>=Math.floor(d)&&p<Math.floor(g),y=p<Math.floor(d)||p>=Math.floor(g),w=r.getActiveLink();if(y)return c===w&&r.setActiveLink(void 0),s.props.hashSpy&&sn.getHash()===c&&sn.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),$n.updateStates();if(h&&w!==c)return r.setActiveLink(c),s.props.hashSpy&&sn.changeHash(c),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(c)),$n.updateStates()}}};return i.propTypes=cm,i.defaultProps={offset:0},i},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){um(i,r);function i(o){sm(this,i);var a=lm(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return a.childBindings={domNode:null},a}return am(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;cu.unregister(this.props.name)}},{key:"registerElems",value:function(a){cu.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return Ca.createElement(t,uu({},this.props,{parentBindings:this.childBindings}))}}]),i}(Ca.Component);return n.propTypes={name:ie.string,id:ie.string},n}},vE=yE;Object.defineProperty(ue,"__esModule",{value:!0});ue.Helpers=ue.ScrollElement=ue.ScrollLink=ue.animateScroll=ue.scrollSpy=ue.Events=ue.scroller=Li=ue.Element=ue.Button=m1=ue.Link=void 0;var xE=bd,o1=Dt(xE),wE=Td,a1=Dt(wE),SE=Ad,s1=Dt(SE),bE=hi,l1=Dt(bE),kE=Vo,u1=Dt(kE),EE=zo,c1=Dt(EE),CE=ul,f1=Dt(CE),PE=No,d1=Dt(PE),TE=pl,p1=Dt(TE),AE=vE,h1=Dt(AE);function Dt(e){return e&&e.__esModule?e:{default:e}}var m1=ue.Link=o1.default;ue.Button=a1.default;var Li=ue.Element=s1.default;ue.scroller=l1.default;ue.Events=u1.default;ue.scrollSpy=c1.default;ue.animateScroll=f1.default;ue.ScrollLink=d1.default;ue.ScrollElement=p1.default;ue.Helpers=h1.default;ue.default={Link:o1.default,Button:a1.default,Element:s1.default,scroller:l1.default,Events:u1.default,scrollSpy:c1.default,animateScroll:f1.default,ScrollLink:d1.default,ScrollElement:p1.default,Helpers:h1.default};const jd=E.createContext({});function Od(e){const t=E.useRef(null);return t.current===null&&(t.current=e()),t.current}const ml=E.createContext(null),Md=E.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class _E extends E.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function jE({children:e,isPresent:t}){const n=E.useId(),r=E.useRef(null),i=E.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=E.useContext(Md);return E.useInsertionEffect(()=>{const{width:a,height:s,top:l,left:u}=i.current;if(t||!r.current||!a||!s)return;r.current.dataset.motionPopId=n;const c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),m.jsx(_E,{isPresent:t,childRef:r,sizeRef:i,children:E.cloneElement(e,{ref:r})})}const OE=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a})=>{const s=Od(ME),l=E.useId(),u=E.useCallback(f=>{s.set(f,!0);for(const d of s.values())if(!d)return;r&&r()},[s,r]),c=E.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(s.set(f,!1),()=>s.delete(f))}),o?[Math.random(),u]:[n,u]);return E.useMemo(()=>{s.forEach((f,d)=>s.set(d,!1))},[n]),E.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),a==="popLayout"&&(e=m.jsx(jE,{isPresent:n,children:e})),m.jsx(ml.Provider,{value:c,children:e})};function ME(){return new Map}function g1(e=!0){const t=E.useContext(ml);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=E.useId();E.useEffect(()=>{e&&i(o)},[e]);const a=E.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Pa=e=>e.key||"";function fm(e){const t=[];return E.Children.forEach(e,n=>{E.isValidElement(n)&&t.push(n)}),t}const Rd=typeof window<"u",y1=Rd?E.useLayoutEffect:E.useEffect,Ld=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1})=>{const[s,l]=g1(a),u=E.useMemo(()=>fm(e),[e]),c=a&&!s?[]:u.map(Pa),f=E.useRef(!0),d=E.useRef(u),g=Od(()=>new Map),[x,v]=E.useState(u),[S,p]=E.useState(u);y1(()=>{f.current=!1,d.current=u;for(let w=0;w<S.length;w++){const b=Pa(S[w]);c.includes(b)?g.delete(b):g.get(b)!==!0&&g.set(b,!1)}},[S,c.length,c.join("-")]);const h=[];if(u!==x){let w=[...u];for(let b=0;b<S.length;b++){const k=S[b],C=Pa(k);c.includes(C)||(w.splice(b,0,k),h.push(k))}o==="wait"&&h.length&&(w=h),p(fm(w)),v(u);return}const{forceRender:y}=E.useContext(jd);return m.jsx(m.Fragment,{children:S.map(w=>{const b=Pa(w),k=a&&!s?!1:u===S||c.includes(b),C=()=>{if(g.has(b))g.set(b,!0);else return;let P=!0;g.forEach(D=>{D||(P=!1)}),P&&(y==null||y(),p(d.current),a&&(l==null||l()),r&&r())};return m.jsx(OE,{isPresent:k,initial:!f.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:i,mode:o,onExitComplete:k?void 0:C,children:w},b)})})},Xe=e=>e;let v1=Xe;function Id(e){let t;return()=>(t===void 0&&(t=e()),t)}const ti=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ht=e=>e*1e3,Yt=e=>e/1e3,RE={useManualTiming:!1};function LE(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function s(u){o.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,c=!1,f=!1)=>{const g=f&&r?t:n;return c&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(s),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Ta=["read","resolveKeyframes","update","preRender","render","postRender"],IE=40;function x1(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=Ta.reduce((p,h)=>(p[h]=LE(o),p),{}),{read:s,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=a,g=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,IE),1),i.timestamp=p,i.isProcessing=!0,s.process(i),l.process(i),u.process(i),c.process(i),f.process(i),d.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(g))},x=()=>{n=!0,r=!0,i.isProcessing||e(g)};return{schedule:Ta.reduce((p,h)=>{const y=a[h];return p[h]=(w,b=!1,k=!1)=>(n||x(),y.schedule(w,b,k)),p},{}),cancel:p=>{for(let h=0;h<Ta.length;h++)a[Ta[h]].cancel(p)},state:i,steps:a}}const{schedule:q,cancel:_n,state:ke,steps:fu}=x1(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xe,!0),w1=E.createContext({strict:!1}),dm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ni={};for(const e in dm)ni[e]={isEnabled:t=>dm[e].some(n=>!!t[n])};function FE(e){for(const t in e)ni[t]={...ni[t],...e[t]}}const DE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ms(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||DE.has(e)}let S1=e=>!Ms(e);function NE(e){e&&(S1=t=>t.startsWith("on")?!Ms(t):e(t))}try{NE(require("@emotion/is-prop-valid").default)}catch{}function zE(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(S1(i)||n===!0&&Ms(i)||!t&&!Ms(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function $E(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const gl=E.createContext({});function bo(e){return typeof e=="string"||Array.isArray(e)}function yl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Fd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dd=["initial",...Fd];function vl(e){return yl(e.animate)||Dd.some(t=>bo(e[t]))}function b1(e){return!!(vl(e)||e.variants)}function BE(e,t){if(vl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||bo(n)?n:void 0,animate:bo(r)?r:void 0}}return e.inherit!==!1?t:{}}function VE(e){const{initial:t,animate:n}=BE(e,E.useContext(gl));return E.useMemo(()=>({initial:t,animate:n}),[pm(t),pm(n)])}function pm(e){return Array.isArray(e)?e.join(" "):e}const UE=Symbol.for("motionComponentSymbol");function Rr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function WE(e,t,n){return E.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Rr(n)&&(n.current=r))},[t])}const Nd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),HE="framerAppearId",k1="data-"+Nd(HE),{schedule:zd}=x1(queueMicrotask,!1),E1=E.createContext({});function YE(e,t,n,r,i){var o,a;const{visualElement:s}=E.useContext(gl),l=E.useContext(w1),u=E.useContext(ml),c=E.useContext(Md).reducedMotion,f=E.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const d=f.current,g=E.useContext(E1);d&&!d.projection&&i&&(d.type==="html"||d.type==="svg")&&GE(f.current,n,i,g);const x=E.useRef(!1);E.useInsertionEffect(()=>{d&&x.current&&d.update(n,u)});const v=n[k1],S=E.useRef(!!v&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,v))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,v)));return y1(()=>{d&&(x.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),zd.render(d.render),S.current&&d.animationState&&d.animationState.animateChanges())}),E.useEffect(()=>{d&&(!S.current&&d.animationState&&d.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,v)}),S.current=!1))}),d}function GE(e,t,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:C1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&Rr(s),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function C1(e){if(e)return e.options.allowProjection!==!1?e.projection:C1(e.parent)}function KE({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var o,a;e&&FE(e);function s(u,c){let f;const d={...E.useContext(Md),...u,layoutId:XE(u)},{isStatic:g}=d,x=VE(u),v=r(u,g);if(!g&&Rd){QE();const S=JE(d);f=S.MeasureLayout,x.visualElement=YE(i,v,d,t,S.ProjectionNode)}return m.jsxs(gl.Provider,{value:x,children:[f&&x.visualElement?m.jsx(f,{visualElement:x.visualElement,...d}):null,n(i,u,WE(v,x.visualElement,c),v,g,x.visualElement)]})}s.displayName=`motion.${typeof i=="string"?i:`create(${(a=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&a!==void 0?a:""})`}`;const l=E.forwardRef(s);return l[UE]=i,l}function XE({layoutId:e}){const t=E.useContext(jd).id;return t&&e!==void 0?t+"-"+e:e}function QE(e,t){E.useContext(w1).strict}function JE(e){const{drag:t,layout:n}=ni;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const qE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $d(e){return typeof e!="string"||e.includes("-")?!1:!!(qE.indexOf(e)>-1||/[A-Z]/u.test(e))}function hm(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Bd(e,t,n,r){if(typeof t=="function"){const[i,o]=hm(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=hm(r);t=t(n!==void 0?n:e.custom,i,o)}return t}const Fc=e=>Array.isArray(e),ZE=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),eC=e=>Fc(e)?e[e.length-1]||0:e,je=e=>!!(e&&e.getVelocity);function Qa(e){const t=je(e)?e.get():e;return ZE(t)?t.toValue():t}function tC({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,o){const a={latestValues:nC(r,i,o,e),renderState:t()};return n&&(a.onMount=s=>n({props:r,current:s,...a}),a.onUpdate=s=>n(s)),a}const P1=e=>(t,n)=>{const r=E.useContext(gl),i=E.useContext(ml),o=()=>tC(e,t,r,i);return n?o():Od(o)};function nC(e,t,n,r){const i={},o=r(e,{});for(const d in o)i[d]=Qa(o[d]);let{initial:a,animate:s}=e;const l=vl(e),u=b1(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||a===!1;const f=c?s:a;if(f&&typeof f!="boolean"&&!yl(f)){const d=Array.isArray(f)?f:[f];for(let g=0;g<d.length;g++){const x=Bd(e,d[g]);if(x){const{transitionEnd:v,transition:S,...p}=x;for(const h in p){let y=p[h];if(Array.isArray(y)){const w=c?y.length-1:0;y=y[w]}y!==null&&(i[h]=y)}for(const h in v)i[h]=v[h]}}}return i}const mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mr=new Set(mi),T1=e=>t=>typeof t=="string"&&t.startsWith(e),A1=T1("--"),rC=T1("var(--"),Vd=e=>rC(e)?iC.test(e.split("/*")[0].trim()):!1,iC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Jt=(e,t,n)=>n>t?t:n<e?e:n,gi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ko={...gi,transform:e=>Jt(0,1,e)},Aa={...gi,default:1},Yo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),un=Yo("deg"),It=Yo("%"),F=Yo("px"),oC=Yo("vh"),aC=Yo("vw"),mm={...It,parse:e=>It.parse(e)/100,transform:e=>It.transform(e*100)},sC={borderWidth:F,borderTopWidth:F,borderRightWidth:F,borderBottomWidth:F,borderLeftWidth:F,borderRadius:F,radius:F,borderTopLeftRadius:F,borderTopRightRadius:F,borderBottomRightRadius:F,borderBottomLeftRadius:F,width:F,maxWidth:F,height:F,maxHeight:F,top:F,right:F,bottom:F,left:F,padding:F,paddingTop:F,paddingRight:F,paddingBottom:F,paddingLeft:F,margin:F,marginTop:F,marginRight:F,marginBottom:F,marginLeft:F,backgroundPositionX:F,backgroundPositionY:F},lC={rotate:un,rotateX:un,rotateY:un,rotateZ:un,scale:Aa,scaleX:Aa,scaleY:Aa,scaleZ:Aa,skew:un,skewX:un,skewY:un,distance:F,translateX:F,translateY:F,translateZ:F,x:F,y:F,z:F,perspective:F,transformPerspective:F,opacity:ko,originX:mm,originY:mm,originZ:F},gm={...gi,transform:Math.round},Ud={...sC,...lC,zIndex:gm,size:F,fillOpacity:ko,strokeOpacity:ko,numOctaves:gm},uC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cC=mi.length;function fC(e,t,n){let r="",i=!0;for(let o=0;o<cC;o++){const a=mi[o],s=e[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const u=_1(s,Ud[a]);if(!l){i=!1;const c=uC[a]||a;r+=`${c}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Wd(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let a=!1,s=!1;for(const l in t){const u=t[l];if(mr.has(l)){a=!0;continue}else if(A1(l)){i[l]=u;continue}else{const c=_1(u,Ud[l]);l.startsWith("origin")?(s=!0,o[l]=c):r[l]=c}}if(t.transform||(a||n?r.transform=fC(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:u="50%",originZ:c=0}=o;r.transformOrigin=`${l} ${u} ${c}`}}const dC={offset:"stroke-dashoffset",array:"stroke-dasharray"},pC={offset:"strokeDashoffset",array:"strokeDasharray"};function hC(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?dC:pC;e[o.offset]=F.transform(-r);const a=F.transform(t),s=F.transform(n);e[o.array]=`${a} ${s}`}function ym(e,t,n){return typeof e=="string"?e:F.transform(t+n*e)}function mC(e,t,n){const r=ym(t,e.x,e.width),i=ym(n,e.y,e.height);return`${r} ${i}`}function Hd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:a,pathSpacing:s=1,pathOffset:l=0,...u},c,f){if(Wd(e,u,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:g,dimensions:x}=e;d.transform&&(x&&(g.transform=d.transform),delete d.transform),x&&(i!==void 0||o!==void 0||g.transform)&&(g.transformOrigin=mC(x,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),a!==void 0&&hC(d,a,s,l,!1)}const Yd=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),j1=()=>({...Yd(),attrs:{}}),Gd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function O1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const M1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function R1(e,t,n,r){O1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(M1.has(i)?i:Nd(i),t.attrs[i])}const Rs={};function gC(e){Object.assign(Rs,e)}function L1(e,{layout:t,layoutId:n}){return mr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Rs[e]||e==="opacity")}function Kd(e,t,n){var r;const{style:i}=e,o={};for(const a in i)(je(i[a])||t.style&&je(t.style[a])||L1(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[a]=i[a]);return o}function I1(e,t,n){const r=Kd(e,t,n);for(const i in e)if(je(e[i])||je(t[i])){const o=mi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function yC(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const vm=["x","y","width","height","cx","cy","r"],vC={useVisualState:P1({scrapeMotionValuesFromProps:I1,createRenderState:j1,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let o=!!e.drag;if(!o){for(const s in i)if(mr.has(s)){o=!0;break}}if(!o)return;let a=!t;if(t)for(let s=0;s<vm.length;s++){const l=vm[s];e[l]!==t[l]&&(a=!0)}a&&q.read(()=>{yC(n,r),q.render(()=>{Hd(r,i,Gd(n.tagName),e.transformTemplate),R1(n,r)})})}})},xC={useVisualState:P1({scrapeMotionValuesFromProps:Kd,createRenderState:Yd})};function F1(e,t,n){for(const r in t)!je(t[r])&&!L1(r,n)&&(e[r]=t[r])}function wC({transformTemplate:e},t){return E.useMemo(()=>{const n=Yd();return Wd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function SC(e,t){const n=e.style||{},r={};return F1(r,n,e),Object.assign(r,wC(e,t)),r}function bC(e,t){const n={},r=SC(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function kC(e,t,n,r){const i=E.useMemo(()=>{const o=j1();return Hd(o,t,Gd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};F1(o,e.style,e),i.style={...o,...i.style}}return i}function EC(e=!1){return(n,r,i,{latestValues:o},a)=>{const l=($d(n)?kC:bC)(r,o,a,n),u=zE(r,typeof n=="string",e),c=n!==E.Fragment?{...u,...l,ref:i}:{},{children:f}=r,d=E.useMemo(()=>je(f)?f.get():f,[f]);return E.createElement(n,{...c,children:d})}}function CC(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...$d(r)?vC:xC,preloadedFeatures:e,useRender:EC(i),createVisualElement:t,Component:r};return KE(a)}}function D1(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function xl(e,t,n){const r=e.getProps();return Bd(r,t,n!==void 0?n:r.custom,e)}const PC=Id(()=>window.ScrollTimeline!==void 0);class TC{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(PC()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class AC extends TC{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Xd(e,t){return e?e[t]||e.default||e:void 0}const Dc=2e4;function N1(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Dc;)t+=n,r=e.next(t);return t>=Dc?1/0:t}function Qd(e){return typeof e=="function"}function xm(e,t){e.timeline=t,e.onfinish=null}const Jd=e=>Array.isArray(e)&&typeof e[0]=="number",_C={linearEasing:void 0};function jC(e,t){const n=Id(e);return()=>{var r;return(r=_C[t])!==null&&r!==void 0?r:n()}}const Ls=jC(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),z1=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=e(ti(0,i-1,o))+", ";return`linear(${r.substring(0,r.length-2)})`};function $1(e){return!!(typeof e=="function"&&Ls()||!e||typeof e=="string"&&(e in Nc||Ls())||Jd(e)||Array.isArray(e)&&e.every($1))}const Ii=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Nc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ii([0,.65,.55,1]),circOut:Ii([.55,0,1,.45]),backIn:Ii([.31,.01,.66,-.59]),backOut:Ii([.33,1.53,.69,.99])};function B1(e,t){if(e)return typeof e=="function"&&Ls()?z1(e,t):Jd(e)?Ii(e):Array.isArray(e)?e.map(n=>B1(n,t)||Nc.easeOut):Nc[e]}const pt={x:!1,y:!1};function V1(){return pt.x||pt.y}function OC(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const o=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}function U1(e,t){const n=OC(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function wm(e){return t=>{t.pointerType==="touch"||V1()||e(t)}}function MC(e,t,n={}){const[r,i,o]=U1(e,n),a=wm(s=>{const{target:l}=s,u=t(s);if(typeof u!="function"||!l)return;const c=wm(f=>{u(f),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,i)});return r.forEach(s=>{s.addEventListener("pointerenter",a,i)}),o}const W1=(e,t)=>t?e===t?!0:W1(e,t.parentElement):!1,qd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,RC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LC(e){return RC.has(e.tagName)||e.tabIndex!==-1}const Fi=new WeakSet;function Sm(e){return t=>{t.key==="Enter"&&e(t)}}function du(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const IC=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Sm(()=>{if(Fi.has(n))return;du(n,"down");const i=Sm(()=>{du(n,"up")}),o=()=>du(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function bm(e){return qd(e)&&!V1()}function FC(e,t,n={}){const[r,i,o]=U1(e,n),a=s=>{const l=s.currentTarget;if(!bm(s)||Fi.has(l))return;Fi.add(l);const u=t(s),c=(g,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!bm(g)||!Fi.has(l))&&(Fi.delete(l),typeof u=="function"&&u(g,{success:x}))},f=g=>{c(g,n.useGlobalTarget||W1(l,g.target))},d=g=>{c(g,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",d,i)};return r.forEach(s=>{!LC(s)&&s.getAttribute("tabindex")===null&&(s.tabIndex=0),(n.useGlobalTarget?window:s).addEventListener("pointerdown",a,i),s.addEventListener("focus",u=>IC(u,i),i)}),o}function DC(e){return e==="x"||e==="y"?pt[e]?null:(pt[e]=!0,()=>{pt[e]=!1}):pt.x||pt.y?null:(pt.x=pt.y=!0,()=>{pt.x=pt.y=!1})}const H1=new Set(["width","height","top","left","right","bottom",...mi]);let Ja;function NC(){Ja=void 0}const Ft={now:()=>(Ja===void 0&&Ft.set(ke.isProcessing||RE.useManualTiming?ke.timestamp:performance.now()),Ja),set:e=>{Ja=e,queueMicrotask(NC)}};function Zd(e,t){e.indexOf(t)===-1&&e.push(t)}function ep(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class tp{constructor(){this.subscriptions=[]}add(t){return Zd(this.subscriptions,t),()=>ep(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Y1(e,t){return t?e*(1e3/t):0}const km=30,zC=e=>!isNaN(parseFloat(e));class $C{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Ft.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Ft.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=zC(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new tp);const r=this.events[t].add(n);return t==="change"?()=>{r(),q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Ft.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>km)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,km);return Y1(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Eo(e,t){return new $C(e,t)}function BC(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Eo(n))}function VC(e,t){const n=xl(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=eC(o[a]);BC(e,a,s)}}function UC(e){return!!(je(e)&&e.add)}function zc(e,t){const n=e.getValue("willChange");if(UC(n))return n.add(t)}function G1(e){return e.props[k1]}const K1=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,WC=1e-7,HC=12;function YC(e,t,n,r,i){let o,a,s=0;do a=t+(n-t)/2,o=K1(a,r,i)-e,o>0?n=a:t=a;while(Math.abs(o)>WC&&++s<HC);return a}function Go(e,t,n,r){if(e===t&&n===r)return Xe;const i=o=>YC(o,0,1,e,n);return o=>o===0||o===1?o:K1(i(o),t,r)}const X1=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Q1=e=>t=>1-e(1-t),J1=Go(.33,1.53,.69,.99),np=Q1(J1),q1=X1(np),Z1=e=>(e*=2)<1?.5*np(e):.5*(2-Math.pow(2,-10*(e-1))),rp=e=>1-Math.sin(Math.acos(e)),ex=Q1(rp),tx=X1(rp),nx=e=>/^0[^.\s]+$/u.test(e);function GC(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||nx(e):!0}const Xi=e=>Math.round(e*1e5)/1e5,ip=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function KC(e){return e==null}const XC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,op=(e,t)=>n=>!!(typeof n=="string"&&XC.test(n)&&n.startsWith(e)||t&&!KC(n)&&Object.prototype.hasOwnProperty.call(n,t)),rx=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(ip);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},QC=e=>Jt(0,255,e),pu={...gi,transform:e=>Math.round(QC(e))},Xn={test:op("rgb","red"),parse:rx("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+pu.transform(e)+", "+pu.transform(t)+", "+pu.transform(n)+", "+Xi(ko.transform(r))+")"};function JC(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const $c={test:op("#"),parse:JC,transform:Xn.transform},Lr={test:op("hsl","hue"),parse:rx("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+It.transform(Xi(t))+", "+It.transform(Xi(n))+", "+Xi(ko.transform(r))+")"},Ae={test:e=>Xn.test(e)||$c.test(e)||Lr.test(e),parse:e=>Xn.test(e)?Xn.parse(e):Lr.test(e)?Lr.parse(e):$c.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Xn.transform(e):Lr.transform(e)},qC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ZC(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(ip))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(qC))===null||n===void 0?void 0:n.length)||0)>0}const ix="number",ox="color",eP="var",tP="var(",Em="${}",nP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Co(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=t.replace(nP,l=>(Ae.test(l)?(r.color.push(o),i.push(ox),n.push(Ae.parse(l))):l.startsWith(tP)?(r.var.push(o),i.push(eP),n.push(l)):(r.number.push(o),i.push(ix),n.push(parseFloat(l))),++o,Em)).split(Em);return{values:n,split:s,indexes:r,types:i}}function ax(e){return Co(e).values}function sx(e){const{split:t,types:n}=Co(e),r=t.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=t[a],i[a]!==void 0){const s=n[a];s===ix?o+=Xi(i[a]):s===ox?o+=Ae.transform(i[a]):o+=i[a]}return o}}const rP=e=>typeof e=="number"?0:e;function iP(e){const t=ax(e);return sx(e)(t.map(rP))}const jn={test:ZC,parse:ax,createTransformer:sx,getAnimatableNone:iP},oP=new Set(["brightness","contrast","saturate","opacity"]);function aP(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ip)||[];if(!r)return e;const i=n.replace(r,"");let o=oP.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const sP=/\b([a-z-]*)\(.*?\)/gu,Bc={...jn,getAnimatableNone:e=>{const t=e.match(sP);return t?t.map(aP).join(" "):e}},lP={...Ud,color:Ae,backgroundColor:Ae,outlineColor:Ae,fill:Ae,stroke:Ae,borderColor:Ae,borderTopColor:Ae,borderRightColor:Ae,borderBottomColor:Ae,borderLeftColor:Ae,filter:Bc,WebkitFilter:Bc},ap=e=>lP[e];function lx(e,t){let n=ap(e);return n!==Bc&&(n=jn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const uP=new Set(["auto","none","0"]);function cP(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!uP.has(o)&&Co(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=lx(n,i)}const Cm=e=>e===gi||e===F,Pm=(e,t)=>parseFloat(e.split(", ")[t]),Tm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Pm(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Pm(o[1],e):0}},fP=new Set(["x","y","z"]),dP=mi.filter(e=>!fP.has(e));function pP(e){const t=[];return dP.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ri={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Tm(4,13),y:Tm(5,14)};ri.translateX=ri.x;ri.translateY=ri.y;const er=new Set;let Vc=!1,Uc=!1;function ux(){if(Uc){const e=Array.from(er).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=pP(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{var s;(s=r.getValue(o))===null||s===void 0||s.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Uc=!1,Vc=!1,er.forEach(e=>e.complete()),er.clear()}function cx(){er.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Uc=!0)})}function hP(){cx(),ux()}class sp{constructor(t,n,r,i,o,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(er.add(this),Vc||(Vc=!0,q.read(cx),q.resolveKeyframes(ux))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),er.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,er.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const fx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),mP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function gP(e){const t=mP.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function dx(e,t,n=1){const[r,i]=gP(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const a=o.trim();return fx(a)?parseFloat(a):a}return Vd(i)?dx(i,t,n+1):i}const px=e=>t=>t.test(e),yP={test:e=>e==="auto",parse:e=>e},hx=[gi,F,It,un,aC,oC,yP],Am=e=>hx.find(px(e));class mx extends sp{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),Vd(u))){const c=dx(u,n.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!H1.has(r)||t.length!==2)return;const[i,o]=t,a=Am(i),s=Am(o);if(a!==s)if(Cm(a)&&Cm(s))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)GC(t[i])&&r.push(i);r.length&&cP(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ri[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,s=i[a];i[a]=ri[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const _m=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(jn.test(e)||e==="0")&&!e.startsWith("url("));function vP(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function xP(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],a=_m(i,t),s=_m(o,t);return!a||!s?!1:vP(e)||(n==="spring"||Qd(n))&&r}const wP=e=>e!==null;function wl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(wP),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const SP=40;class gx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ft.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>SP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&hP(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Ft.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:a,onComplete:s,onUpdate:l,isGenerator:u}=this.options;if(!u&&!xP(t,r,i,o))if(a)this.options.duration=0;else{l&&l(wl(t,this.options,n)),s&&s(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,n);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ae=(e,t,n)=>e+(t-e)*n;function hu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function bP({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,a=0;if(!t)i=o=a=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=hu(l,s,e+1/3),o=hu(l,s,e),a=hu(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function Is(e,t){return n=>n>0?t:e}const mu=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},kP=[$c,Xn,Lr],EP=e=>kP.find(t=>t.test(e));function jm(e){const t=EP(e);if(!t)return!1;let n=t.parse(e);return t===Lr&&(n=bP(n)),n}const Om=(e,t)=>{const n=jm(e),r=jm(t);if(!n||!r)return Is(e,t);const i={...n};return o=>(i.red=mu(n.red,r.red,o),i.green=mu(n.green,r.green,o),i.blue=mu(n.blue,r.blue,o),i.alpha=ae(n.alpha,r.alpha,o),Xn.transform(i))},CP=(e,t)=>n=>t(e(n)),Ko=(...e)=>e.reduce(CP),Wc=new Set(["none","hidden"]);function PP(e,t){return Wc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function TP(e,t){return n=>ae(e,t,n)}function lp(e){return typeof e=="number"?TP:typeof e=="string"?Vd(e)?Is:Ae.test(e)?Om:jP:Array.isArray(e)?yx:typeof e=="object"?Ae.test(e)?Om:AP:Is}function yx(e,t){const n=[...e],r=n.length,i=e.map((o,a)=>lp(o)(o,t[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function AP(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=lp(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function _P(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const a=t.types[o],s=e.indexes[a][i[a]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[o]=l,i[a]++}return r}const jP=(e,t)=>{const n=jn.createTransformer(t),r=Co(e),i=Co(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Wc.has(e)&&!i.values.length||Wc.has(t)&&!r.values.length?PP(e,t):Ko(yx(_P(r,i),i.values),n):Is(e,t)};function vx(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ae(e,t,n):lp(e)(e,t)}const OP=5;function xx(e,t,n){const r=Math.max(t-OP,0);return Y1(n-e(r),t-r)}const ce={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mm=.001;function MP({duration:e=ce.duration,bounce:t=ce.bounce,velocity:n=ce.velocity,mass:r=ce.mass}){let i,o,a=1-t;a=Jt(ce.minDamping,ce.maxDamping,a),e=Jt(ce.minDuration,ce.maxDuration,Yt(e)),a<1?(i=u=>{const c=u*a,f=c*e,d=c-n,g=Hc(u,a),x=Math.exp(-f);return Mm-d/g*x},o=u=>{const f=u*a*e,d=f*n+n,g=Math.pow(a,2)*Math.pow(u,2)*e,x=Math.exp(-f),v=Hc(Math.pow(u,2),a);return(-i(u)+Mm>0?-1:1)*((d-g)*x)/v}):(i=u=>{const c=Math.exp(-u*e),f=(u-n)*e+1;return-.001+c*f},o=u=>{const c=Math.exp(-u*e),f=(n-u)*(e*e);return c*f});const s=5/e,l=LP(i,o,s);if(e=Ht(e),isNaN(l))return{stiffness:ce.stiffness,damping:ce.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const RP=12;function LP(e,t,n){let r=n;for(let i=1;i<RP;i++)r=r-e(r)/t(r);return r}function Hc(e,t){return e*Math.sqrt(1-t*t)}const IP=["duration","bounce"],FP=["stiffness","damping","mass"];function Rm(e,t){return t.some(n=>e[n]!==void 0)}function DP(e){let t={velocity:ce.velocity,stiffness:ce.stiffness,damping:ce.damping,mass:ce.mass,isResolvedFromDuration:!1,...e};if(!Rm(e,FP)&&Rm(e,IP))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Jt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ce.mass,stiffness:i,damping:o}}else{const n=MP(e);t={...t,...n,mass:ce.mass},t.isResolvedFromDuration=!0}return t}function wx(e=ce.visualDuration,t=ce.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:f,velocity:d,isResolvedFromDuration:g}=DP({...n,velocity:-Yt(n.velocity||0)}),x=d||0,v=u/(2*Math.sqrt(l*c)),S=a-o,p=Yt(Math.sqrt(l/c)),h=Math.abs(S)<5;r||(r=h?ce.restSpeed.granular:ce.restSpeed.default),i||(i=h?ce.restDelta.granular:ce.restDelta.default);let y;if(v<1){const b=Hc(p,v);y=k=>{const C=Math.exp(-v*p*k);return a-C*((x+v*p*S)/b*Math.sin(b*k)+S*Math.cos(b*k))}}else if(v===1)y=b=>a-Math.exp(-p*b)*(S+(x+p*S)*b);else{const b=p*Math.sqrt(v*v-1);y=k=>{const C=Math.exp(-v*p*k),P=Math.min(b*k,300);return a-C*((x+v*p*S)*Math.sinh(P)+b*S*Math.cosh(P))/b}}const w={calculatedDuration:g&&f||null,next:b=>{const k=y(b);if(g)s.done=b>=f;else{let C=0;v<1&&(C=b===0?Ht(x):xx(y,b,k));const P=Math.abs(C)<=r,D=Math.abs(a-k)<=i;s.done=P&&D}return s.value=s.done?a:k,s},toString:()=>{const b=Math.min(N1(w),Dc),k=z1(C=>w.next(b*C).value,b,30);return b+"ms "+k}};return w}function Lm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:u=.5,restSpeed:c}){const f=e[0],d={done:!1,value:f},g=P=>s!==void 0&&P<s||l!==void 0&&P>l,x=P=>s===void 0?l:l===void 0||Math.abs(s-P)<Math.abs(l-P)?s:l;let v=n*t;const S=f+v,p=a===void 0?S:a(S);p!==S&&(v=p-f);const h=P=>-v*Math.exp(-P/r),y=P=>p+h(P),w=P=>{const D=h(P),L=y(P);d.done=Math.abs(D)<=u,d.value=d.done?p:L};let b,k;const C=P=>{g(d.value)&&(b=P,k=wx({keyframes:[d.value,x(d.value)],velocity:xx(y,P,d.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:P=>{let D=!1;return!k&&b===void 0&&(D=!0,w(P),C(P)),b!==void 0&&P>=b?k.next(P-b):(!D&&w(P),d)}}}const NP=Go(.42,0,1,1),zP=Go(0,0,.58,1),Sx=Go(.42,0,.58,1),$P=e=>Array.isArray(e)&&typeof e[0]!="number",BP={linear:Xe,easeIn:NP,easeInOut:Sx,easeOut:zP,circIn:rp,circInOut:tx,circOut:ex,backIn:np,backInOut:q1,backOut:J1,anticipate:Z1},Im=e=>{if(Jd(e)){v1(e.length===4);const[t,n,r,i]=e;return Go(t,n,r,i)}else if(typeof e=="string")return BP[e];return e};function VP(e,t,n){const r=[],i=n||vx,o=e.length-1;for(let a=0;a<o;a++){let s=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||Xe:t;s=Ko(l,s)}r.push(s)}return r}function UP(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(v1(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=VP(t,r,i),l=s.length,u=c=>{if(a&&c<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(c<e[f+1]);f++);const d=ti(e[f],e[f+1],c);return s[f](d)};return n?c=>u(Jt(e[0],e[o-1],c)):u}function WP(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ti(0,t,r);e.push(ae(n,1,i))}}function HP(e){const t=[0];return WP(t,e.length-1),t}function YP(e,t){return e.map(n=>n*t)}function GP(e,t){return e.map(()=>t||Sx).splice(0,e.length-1)}function Fs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=$P(r)?r.map(Im):Im(r),o={done:!1,value:t[0]},a=YP(n&&n.length===t.length?n:HP(t),e),s=UP(a,t,{ease:Array.isArray(i)?i:GP(t,i)});return{calculatedDuration:e,next:l=>(o.value=s(l),o.done=l>=e,o)}}const KP=e=>{const t=({timestamp:n})=>e(n);return{start:()=>q.update(t,!0),stop:()=>_n(t),now:()=>ke.isProcessing?ke.timestamp:Ft.now()}},XP={decay:Lm,inertia:Lm,tween:Fs,keyframes:Fs,spring:wx},QP=e=>e/100;class up extends gx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,a=(i==null?void 0:i.KeyframeResolver)||sp,s=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(o,s,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=this.options,s=Qd(n)?n:XP[n]||Fs;let l,u;s!==Fs&&typeof t[0]!="number"&&(l=Ko(QP,vx(t[0],t[1])),t=[0,100]);const c=s({...this.options,keyframes:t});o==="mirror"&&(u=s({...this.options,keyframes:[...t].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=N1(c));const{calculatedDuration:f}=c,d=f+i,g=d*(r+1)-i;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:a,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=r;if(this.startTime===null)return o.next(0);const{delay:d,repeat:g,repeatType:x,repeatDelay:v,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-d*(this.speed>=0?1:-1),h=this.speed>=0?p<0:p>c;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let y=this.currentTime,w=o;if(g){const P=Math.min(this.currentTime,c)/f;let D=Math.floor(P),L=P%1;!L&&P>=1&&(L=1),L===1&&D--,D=Math.min(D,g+1),!!(D%2)&&(x==="reverse"?(L=1-L,v&&(L-=v/f)):x==="mirror"&&(w=a)),y=Jt(0,1,L)*f}const b=h?{done:!1,value:l[0]}:w.next(y);s&&(b.value=s(b.value));let{done:k}=b;!h&&u!==null&&(k=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return C&&i!==void 0&&(b.value=wl(l,this.options,i)),S&&S(b.value),C&&this.finish(),b}get duration(){const{resolved:t}=this;return t?Yt(t.calculatedDuration):0}get time(){return Yt(this.currentTime)}set time(t){t=Ht(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Yt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=KP,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const JP=new Set(["opacity","clipPath","filter","transform"]);function qP(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const c=B1(s,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"})}const ZP=Id(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ds=10,eT=2e4;function tT(e){return Qd(e.type)||e.type==="spring"||!$1(e.ease)}function nT(e,t){const n=new up({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<eT;)r=n.sample(o),i.push(r.value),o+=Ds;return{times:void 0,keyframes:i,duration:o-Ds,ease:"linear"}}const bx={anticipate:Z1,backInOut:q1,circInOut:tx};function rT(e){return e in bx}class Fm extends gx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new mx(o,(a,s)=>this.onKeyframesResolved(a,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:o,type:a,motionValue:s,name:l,startTime:u}=this.options;if(!s.owner||!s.owner.current)return!1;if(typeof o=="string"&&Ls()&&rT(o)&&(o=bx[o]),tT(this.options)){const{onComplete:f,onUpdate:d,motionValue:g,element:x,...v}=this.options,S=nT(t,v);t=S.keyframes,t.length===1&&(t[1]=t[0]),r=S.duration,i=S.times,o=S.ease,a="keyframes"}const c=qP(s.owner.current,l,t,{...this.options,duration:r,times:i,ease:o});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(xm(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:f}=this.options;s.set(wl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:r,times:i,type:a,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Yt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Yt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Ht(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Xe;const{animation:r}=n;xm(r,t)}return Xe}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:a,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...g}=this.options,x=new up({...g,keyframes:r,duration:i,type:o,ease:a,times:s,isGenerator:!0}),v=Ht(this.time);u.setWithVelocity(x.sample(v-Ds).value,x.sample(v).value,Ds)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:a,type:s}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return ZP()&&r&&JP.has(r)&&!l&&!u&&!i&&o!=="mirror"&&a!==0&&s!=="inertia"}}const iT={type:"spring",stiffness:500,damping:25,restSpeed:10},oT=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),aT={type:"keyframes",duration:.8},sT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},lT=(e,{keyframes:t})=>t.length>2?aT:mr.has(e)?e.startsWith("scale")?oT(t[1]):iT:sT;function uT({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const cp=(e,t,n,r={},i,o)=>a=>{const s=Xd(r,e)||{},l=s.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Ht(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-u,onUpdate:d=>{t.set(d),s.onUpdate&&s.onUpdate(d)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:o?void 0:i};uT(s)||(c={...c,...lT(e,c)}),c.duration&&(c.duration=Ht(c.duration)),c.repeatDelay&&(c.repeatDelay=Ht(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let f=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(f=!0)),f&&!o&&t.get()!==void 0){const d=wl(c.keyframes,s);if(d!==void 0)return q.update(()=>{c.onUpdate(d),c.onComplete()}),new AC([])}return!o&&Fm.supports(c)?new Fm(c):new up(c)};function cT({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function kx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:a=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(a=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const d=e.getValue(f,(o=e.latestValues[f])!==null&&o!==void 0?o:null),g=l[f];if(g===void 0||c&&cT(c,f))continue;const x={delay:n,...Xd(a||{},f)};let v=!1;if(window.MotionHandoffAnimation){const p=G1(e);if(p){const h=window.MotionHandoffAnimation(p,f,q);h!==null&&(x.startTime=h,v=!0)}}zc(e,f),d.start(cp(f,d,g,e.shouldReduceMotion&&H1.has(f)?{type:!1}:x,e,v));const S=d.animation;S&&u.push(S)}return s&&Promise.all(u).then(()=>{q.update(()=>{s&&VC(e,s)})}),u}function Yc(e,t,n={}){var r;const i=xl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const a=i?()=>Promise.all(kx(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=o;return fT(e,t,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[u,c]=l==="beforeChildren"?[a,s]:[s,a];return u().then(()=>c())}else return Promise.all([a(),s(n.delay)])}function fT(e,t,n=0,r=0,i=1,o){const a=[],s=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(dT).forEach((u,c)=>{u.notify("AnimationStart",t),a.push(Yc(u,t,{...o,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function dT(e,t){return e.sortNodePosition(t)}function pT(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Yc(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Yc(e,t,n);else{const i=typeof t=="function"?xl(e,t,n.custom):t;r=Promise.all(kx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const hT=Dd.length;function Ex(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ex(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<hT;n++){const r=Dd[n],i=e.props[r];(bo(i)||i===!1)&&(t[r]=i)}return t}const mT=[...Fd].reverse(),gT=Fd.length;function yT(e){return t=>Promise.all(t.map(({animation:n,options:r})=>pT(e,n,r)))}function vT(e){let t=yT(e),n=Dm(),r=!0;const i=l=>(u,c)=>{var f;const d=xl(e,c,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:g,transitionEnd:x,...v}=d;u={...u,...v,...x}}return u};function o(l){t=l(e)}function a(l){const{props:u}=e,c=Ex(e.parent)||{},f=[],d=new Set;let g={},x=1/0;for(let S=0;S<gT;S++){const p=mT[S],h=n[p],y=u[p]!==void 0?u[p]:c[p],w=bo(y),b=p===l?h.isActive:null;b===!1&&(x=S);let k=y===c[p]&&y!==u[p]&&w;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),h.protectedKeys={...g},!h.isActive&&b===null||!y&&!h.prevProp||yl(y)||typeof y=="boolean")continue;const C=xT(h.prevProp,y);let P=C||p===l&&h.isActive&&!k&&w||S>x&&w,D=!1;const L=Array.isArray(y)?y:[y];let te=L.reduce(i(p),{});b===!1&&(te={});const{prevResolvedValues:Ue={}}=h,ct={...Ue,...te},Et=ne=>{P=!0,d.has(ne)&&(D=!0,d.delete(ne)),h.needsAnimating[ne]=!0;const j=e.getValue(ne);j&&(j.liveStyle=!1)};for(const ne in ct){const j=te[ne],I=Ue[ne];if(g.hasOwnProperty(ne))continue;let N=!1;Fc(j)&&Fc(I)?N=!D1(j,I):N=j!==I,N?j!=null?Et(ne):d.add(ne):j!==void 0&&d.has(ne)?Et(ne):h.protectedKeys[ne]=!0}h.prevProp=y,h.prevResolvedValues=te,h.isActive&&(g={...g,...te}),r&&e.blockInitialAnimation&&(P=!1),P&&(!(k&&C)||D)&&f.push(...L.map(ne=>({animation:ne,options:{type:p}})))}if(d.size){const S={};d.forEach(p=>{const h=e.getBaseTarget(p),y=e.getValue(p);y&&(y.liveStyle=!0),S[p]=h??null}),f.push({animation:S})}let v=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(f):Promise.resolve()}function s(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(d=>{var g;return(g=d.animationState)===null||g===void 0?void 0:g.setActive(l,u)}),n[l].isActive=u;const f=a(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Dm(),r=!0}}}function xT(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!D1(t,e):!1}function Bn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Dm(){return{animate:Bn(!0),whileInView:Bn(),whileHover:Bn(),whileTap:Bn(),whileDrag:Bn(),whileFocus:Bn(),exit:Bn()}}class Dn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class wT extends Dn{constructor(t){super(t),t.animationState||(t.animationState=vT(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();yl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let ST=0;class bT extends Dn{constructor(){super(...arguments),this.id=ST++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const kT={animation:{Feature:wT},exit:{Feature:bT}};function Po(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Xo(e){return{point:{x:e.pageX,y:e.pageY}}}const ET=e=>t=>qd(t)&&e(t,Xo(t));function Qi(e,t,n,r){return Po(e,t,ET(n),r)}const Nm=(e,t)=>Math.abs(e-t);function CT(e,t){const n=Nm(e.x,t.x),r=Nm(e.y,t.y);return Math.sqrt(n**2+r**2)}class Cx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=yu(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,g=CT(f.offset,{x:0,y:0})>=3;if(!d&&!g)return;const{point:x}=f,{timestamp:v}=ke;this.history.push({...x,timestamp:v});const{onStart:S,onMove:p}=this.handlers;d||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=gu(d,this.transformPagePoint),q.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:g,onSessionEnd:x,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=yu(f.type==="pointercancel"?this.lastMoveEventInfo:gu(d,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,S),x&&x(f,S)},!qd(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=Xo(t),s=gu(a,this.transformPagePoint),{point:l}=s,{timestamp:u}=ke;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(t,yu(s,this.history)),this.removeListeners=Ko(Qi(this.contextWindow,"pointermove",this.handlePointerMove),Qi(this.contextWindow,"pointerup",this.handlePointerUp),Qi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),_n(this.updatePoint)}}function gu(e,t){return t?{point:t(e.point)}:e}function zm(e,t){return{x:e.x-t.x,y:e.y-t.y}}function yu({point:e},t){return{point:e,delta:zm(e,Px(t)),offset:zm(e,PT(t)),velocity:TT(t,.1)}}function PT(e){return e[0]}function Px(e){return e[e.length-1]}function TT(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Px(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ht(t)));)n--;if(!r)return{x:0,y:0};const o=Yt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const Tx=1e-4,AT=1-Tx,_T=1+Tx,Ax=.01,jT=0-Ax,OT=0+Ax;function Je(e){return e.max-e.min}function MT(e,t,n){return Math.abs(e-t)<=n}function $m(e,t,n,r=.5){e.origin=r,e.originPoint=ae(t.min,t.max,e.origin),e.scale=Je(n)/Je(t),e.translate=ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=AT&&e.scale<=_T||isNaN(e.scale))&&(e.scale=1),(e.translate>=jT&&e.translate<=OT||isNaN(e.translate))&&(e.translate=0)}function Ji(e,t,n,r){$m(e.x,t.x,n.x,r?r.originX:void 0),$m(e.y,t.y,n.y,r?r.originY:void 0)}function Bm(e,t,n){e.min=n.min+t.min,e.max=e.min+Je(t)}function RT(e,t,n){Bm(e.x,t.x,n.x),Bm(e.y,t.y,n.y)}function Vm(e,t,n){e.min=t.min-n.min,e.max=e.min+Je(t)}function qi(e,t,n){Vm(e.x,t.x,n.x),Vm(e.y,t.y,n.y)}function LT(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ae(n,e,r.max):Math.min(e,n)),e}function Um(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function IT(e,{top:t,left:n,bottom:r,right:i}){return{x:Um(e.x,n,i),y:Um(e.y,t,r)}}function Wm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function FT(e,t){return{x:Wm(e.x,t.x),y:Wm(e.y,t.y)}}function DT(e,t){let n=.5;const r=Je(e),i=Je(t);return i>r?n=ti(t.min,t.max-r,e.min):r>i&&(n=ti(e.min,e.max-i,t.min)),Jt(0,1,n)}function NT(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Gc=.35;function zT(e=Gc){return e===!1?e=0:e===!0&&(e=Gc),{x:Hm(e,"left","right"),y:Hm(e,"top","bottom")}}function Hm(e,t,n){return{min:Ym(e,t),max:Ym(e,n)}}function Ym(e,t){return typeof e=="number"?e:e[t]||0}const Gm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ir=()=>({x:Gm(),y:Gm()}),Km=()=>({min:0,max:0}),de=()=>({x:Km(),y:Km()});function nt(e){return[e("x"),e("y")]}function _x({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function $T({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function BT(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function vu(e){return e===void 0||e===1}function Kc({scale:e,scaleX:t,scaleY:n}){return!vu(e)||!vu(t)||!vu(n)}function Wn(e){return Kc(e)||jx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function jx(e){return Xm(e.x)||Xm(e.y)}function Xm(e){return e&&e!=="0%"}function Ns(e,t,n){const r=e-n,i=t*r;return n+i}function Qm(e,t,n,r,i){return i!==void 0&&(e=Ns(e,i,r)),Ns(e,n,r)+t}function Xc(e,t=0,n=1,r,i){e.min=Qm(e.min,t,n,r,i),e.max=Qm(e.max,t,n,r,i)}function Ox(e,{x:t,y:n}){Xc(e.x,t.translate,t.scale,t.originPoint),Xc(e.y,n.translate,n.scale,n.originPoint)}const Jm=.999999999999,qm=1.0000000000001;function VT(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Dr(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Ox(e,a)),r&&Wn(o.latestValues)&&Dr(e,o.latestValues))}t.x<qm&&t.x>Jm&&(t.x=1),t.y<qm&&t.y>Jm&&(t.y=1)}function Fr(e,t){e.min=e.min+t,e.max=e.max+t}function Zm(e,t,n,r,i=.5){const o=ae(e.min,e.max,i);Xc(e,t,n,o,r)}function Dr(e,t){Zm(e.x,t.x,t.scaleX,t.scale,t.originX),Zm(e.y,t.y,t.scaleY,t.scale,t.originY)}function Mx(e,t){return _x(BT(e.getBoundingClientRect(),t))}function UT(e,t,n){const r=Mx(e,n),{scroll:i}=t;return i&&(Fr(r.x,i.offset.x),Fr(r.y,i.offset.y)),r}const Rx=({current:e})=>e?e.ownerDocument.defaultView:null,WT=new WeakMap;class HT{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=de(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Xo(c).point)},o=(c,f)=>{const{drag:d,dragPropagation:g,onDragStart:x}=this.getProps();if(d&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DC(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nt(S=>{let p=this.getAxisMotionValue(S).get()||0;if(It.test(p)){const{projection:h}=this.visualElement;if(h&&h.layout){const y=h.layout.layoutBox[S];y&&(p=Je(y)*(parseFloat(p)/100))}}this.originPoint[S]=p}),x&&q.postRender(()=>x(c,f)),zc(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},a=(c,f)=>{const{dragPropagation:d,dragDirectionLock:g,onDirectionLock:x,onDrag:v}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:S}=f;if(g&&this.currentDirection===null){this.currentDirection=YT(S),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),v&&v(c,f)},s=(c,f)=>this.stop(c,f),l=()=>nt(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Cx(t,{onSessionStart:i,onStart:o,onMove:a,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Rx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&q.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!_a(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=LT(a,this.constraints[t],this.elastic[t])),o.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Rr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=IT(i.layoutBox,n):this.constraints=!1,this.elastic=zT(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&nt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=NT(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Rr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=UT(r,i.root,this.visualElement.getTransformPagePoint());let a=FT(i.layout.layoutBox,o);if(n){const s=n($T(a));this.hasMutatedConstraints=!!s,s&&(a=_x(s))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=nt(c=>{if(!_a(c,n,this.currentDirection))return;let f=l&&l[c]||{};a&&(f={min:0,max:0});const d=i?200:1e6,g=i?40:1e7,x={type:"inertia",velocity:r?t[c]:0,bounceStiffness:d,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...f};return this.startAxisValueAnimation(c,x)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return zc(this.visualElement,t),r.start(cp(t,r,0,n,this.visualElement,!1))}stopAnimation(){nt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){nt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){nt(n=>{const{drag:r}=this.getProps();if(!_a(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(t[n]-ae(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Rr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};nt(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=DT({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),nt(a=>{if(!_a(a,t,null))return;const s=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];s.set(ae(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;WT.set(this.visualElement,this);const t=this.visualElement.current,n=Qi(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Rr(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),q.read(r);const a=Po(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(nt(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Gc,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function _a(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function YT(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class GT extends Dn{constructor(t){super(t),this.removeGroupControls=Xe,this.removeListeners=Xe,this.controls=new HT(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xe}unmount(){this.removeGroupControls(),this.removeListeners()}}const eg=e=>(t,n)=>{e&&q.postRender(()=>e(t,n))};class KT extends Dn{constructor(){super(...arguments),this.removePointerDownListener=Xe}onPointerDown(t){this.session=new Cx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Rx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:eg(t),onStart:eg(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&q.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=Qi(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const qa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function tg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ai={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(F.test(e))e=parseFloat(e);else return e;const n=tg(e,t.target.x),r=tg(e,t.target.y);return`${n}% ${r}%`}},XT={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=jn.parse(e);if(i.length>5)return r;const o=jn.createTransformer(e),a=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=s,i[1+a]/=l;const u=ae(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),o(i)}};class QT extends E.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;gC(JT),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),qa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,a=r.projection;return a&&(a.isPresent=o,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?a.promote():a.relegate()||q.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),zd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Lx(e){const[t,n]=g1(),r=E.useContext(jd);return m.jsx(QT,{...e,layoutGroup:r,switchLayoutGroup:E.useContext(E1),isPresent:t,safeToRemove:n})}const JT={borderRadius:{...Ai,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ai,borderTopRightRadius:Ai,borderBottomLeftRadius:Ai,borderBottomRightRadius:Ai,boxShadow:XT};function qT(e,t,n){const r=je(e)?e:Eo(e);return r.start(cp("",r,t,n)),r.animation}function ZT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const e3=(e,t)=>e.depth-t.depth;class t3{constructor(){this.children=[],this.isDirty=!1}add(t){Zd(this.children,t),this.isDirty=!0}remove(t){ep(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(e3),this.isDirty=!1,this.children.forEach(t)}}function n3(e,t){const n=Ft.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(_n(r),e(o-t))};return q.read(r,!0),()=>_n(r)}const Ix=["TopLeft","TopRight","BottomLeft","BottomRight"],r3=Ix.length,ng=e=>typeof e=="string"?parseFloat(e):e,rg=e=>typeof e=="number"||F.test(e);function i3(e,t,n,r,i,o){i?(e.opacity=ae(0,n.opacity!==void 0?n.opacity:1,o3(r)),e.opacityExit=ae(t.opacity!==void 0?t.opacity:1,0,a3(r))):o&&(e.opacity=ae(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<r3;a++){const s=`border${Ix[a]}Radius`;let l=ig(t,s),u=ig(n,s);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||rg(l)===rg(u)?(e[s]=Math.max(ae(ng(l),ng(u),r),0),(It.test(u)||It.test(l))&&(e[s]+="%")):e[s]=u}(t.rotate||n.rotate)&&(e.rotate=ae(t.rotate||0,n.rotate||0,r))}function ig(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const o3=Fx(0,.5,ex),a3=Fx(.5,.95,Xe);function Fx(e,t,n){return r=>r<e?0:r>t?1:n(ti(e,t,r))}function og(e,t){e.min=t.min,e.max=t.max}function tt(e,t){og(e.x,t.x),og(e.y,t.y)}function ag(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function sg(e,t,n,r,i){return e-=t,e=Ns(e,1/n,r),i!==void 0&&(e=Ns(e,1/i,r)),e}function s3(e,t=0,n=1,r=.5,i,o=e,a=e){if(It.test(t)&&(t=parseFloat(t),t=ae(a.min,a.max,t/100)-a.min),typeof t!="number")return;let s=ae(o.min,o.max,r);e===o&&(s-=t),e.min=sg(e.min,t,n,s,i),e.max=sg(e.max,t,n,s,i)}function lg(e,t,[n,r,i],o,a){s3(e,t[n],t[r],t[i],t.scale,o,a)}const l3=["x","scaleX","originX"],u3=["y","scaleY","originY"];function ug(e,t,n,r){lg(e.x,t,l3,n?n.x:void 0,r?r.x:void 0),lg(e.y,t,u3,n?n.y:void 0,r?r.y:void 0)}function cg(e){return e.translate===0&&e.scale===1}function Dx(e){return cg(e.x)&&cg(e.y)}function fg(e,t){return e.min===t.min&&e.max===t.max}function c3(e,t){return fg(e.x,t.x)&&fg(e.y,t.y)}function dg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nx(e,t){return dg(e.x,t.x)&&dg(e.y,t.y)}function pg(e){return Je(e.x)/Je(e.y)}function hg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class f3{constructor(){this.members=[]}add(t){Zd(this.members,t),t.scheduleRender()}remove(t){if(ep(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function d3(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:g,skewY:x}=n;u&&(r=`perspective(${u}px) ${r}`),c&&(r+=`rotate(${c}deg) `),f&&(r+=`rotateX(${f}deg) `),d&&(r+=`rotateY(${d}deg) `),g&&(r+=`skewX(${g}deg) `),x&&(r+=`skewY(${x}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const Hn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Di=typeof window<"u"&&window.MotionDebug!==void 0,xu=["","X","Y","Z"],p3={visibility:"hidden"},mg=1e3;let h3=0;function wu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function zx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=G1(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",q,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&zx(r)}function $x({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=t==null?void 0:t()){this.id=h3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Di&&(Hn.totalNodes=Hn.resolvedTargetDeltas=Hn.recalculatedProjection=0),this.nodes.forEach(y3),this.nodes.forEach(b3),this.nodes.forEach(k3),this.nodes.forEach(v3),Di&&window.MotionDebug.record(Hn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new t3)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new tp),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ZT(a),this.instance=a;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const d=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=n3(d,250),qa.hasAnimatedSinceResize&&(qa.hasAnimatedSinceResize=!1,this.nodes.forEach(yg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:g,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||A3,{onLayoutAnimationStart:S,onLayoutAnimationComplete:p}=c.getProps(),h=!this.targetLayout||!Nx(this.targetLayout,x)||g,y=!d&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,y);const w={...Xd(v,"layout"),onPlay:S,onComplete:p};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else d||yg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,_n(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(E3),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(gg);return}this.isUpdating||this.nodes.forEach(w3),this.isUpdating=!1,this.nodes.forEach(S3),this.nodes.forEach(m3),this.nodes.forEach(g3),this.clearAllSnapshots();const s=Ft.now();ke.delta=Jt(0,1e3/60,s-ke.timestamp),ke.timestamp=s,ke.isProcessing=!0,fu.update.process(ke),fu.preRender.process(ke),fu.render.process(ke),ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(x3),this.sharedNodes.forEach(C3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=de(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Dx(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;a&&(s||Wn(this.latestValues)||c)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),_3(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:s}=this.options;if(!s)return de();const l=s.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(j3))){const{scroll:c}=this.root;c&&(Fr(l.x,c.offset.x),Fr(l.y,c.offset.y))}return l}removeElementScroll(a){var s;const l=de();if(tt(l,a),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&tt(l,a),Fr(l.x,f.offset.x),Fr(l.y,f.offset.y))}return l}applyTransform(a,s=!1){const l=de();tt(l,a);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Dr(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Wn(c.latestValues)&&Dr(l,c.latestValues)}return Wn(this.latestValues)&&Dr(l,this.latestValues),l}removeTransform(a){const s=de();tt(s,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Wn(u.latestValues))continue;Kc(u.latestValues)&&u.updateSnapshot();const c=de(),f=u.measurePageBox();tt(c,f),ug(s,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Wn(this.latestValues)&&ug(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=ke.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),qi(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=de(),this.targetWithTransforms=de()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),RT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):tt(this.target,this.layout.layoutBox),Ox(this.target,this.targetDelta)):tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=de(),this.relativeTargetOrigin=de(),qi(this.relativeTargetOrigin,this.target,g.target),tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Di&&Hn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Kc(this.parent.latestValues)||jx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===ke.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;tt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,g=this.treeScale.y;VT(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=de());const{target:x}=s;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ag(this.prevProjectionDelta.x,this.projectionDelta.x),ag(this.prevProjectionDelta.y,this.projectionDelta.y)),Ji(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==g||!hg(this.projectionDelta.x,this.prevProjectionDelta.x)||!hg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Di&&Hn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ir(),this.projectionDelta=Ir(),this.projectionDeltaWithTransform=Ir()}setAnimationOrigin(a,s=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Ir();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const d=de(),g=l?l.source:void 0,x=this.layout?this.layout.source:void 0,v=g!==x,S=this.getStack(),p=!S||S.members.length<=1,h=!!(v&&!p&&this.options.crossfade===!0&&!this.path.some(T3));this.animationProgress=0;let y;this.mixTargetDelta=w=>{const b=w/1e3;vg(f.x,a.x,b),vg(f.y,a.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qi(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),P3(this.relativeTarget,this.relativeTargetOrigin,d,b),y&&c3(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=de()),tt(y,this.relativeTarget)),v&&(this.animationValues=c,i3(c,u,this.latestValues,b,h,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(_n(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=q.update(()=>{qa.hasAnimatedSinceResize=!0,this.currentAnimation=qT(0,mg,{...a,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=a;if(!(!s||!l||!u)){if(this!==a&&this.layout&&u&&Bx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||de();const f=Je(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const d=Je(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+d}tt(s,l),Dr(s,c),Ji(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new f3),this.sharedNodes.get(a).add(s);const u=s.options.initialPromotionConfig;s.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const u={};l.z&&wu("z",a,u,this.animationValues);for(let c=0;c<xu.length;c++)wu(`rotate${xu[c]}`,a,u,this.animationValues),wu(`skew${xu[c]}`,a,u,this.animationValues);a.render();for(const c in u)a.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);a.scheduleRender()}getProjectionStyles(a){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return p3;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Qa(a==null?void 0:a.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Qa(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Wn(this.latestValues)&&(v.transform=c?c({},""):"none",this.hasProjected=!1),v}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=d3(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:g,y:x}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(s=d.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const v in Rs){if(d[v]===void 0)continue;const{correct:S,applyTo:p}=Rs[v],h=u.transform==="none"?d[v]:S(d[v],f);if(p){const y=p.length;for(let w=0;w<y;w++)u[p[w]]=h}else u[v]=h}return this.options.layoutId&&(u.pointerEvents=f===this?Qa(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var s;return(s=a.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(gg),this.root.sharedNodes.clear()}}}function m3(e){e.updateLayout()}function g3(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,a=n.source!==e.layout.source;o==="size"?nt(f=>{const d=a?n.measuredBox[f]:n.layoutBox[f],g=Je(d);d.min=r[f].min,d.max=d.min+g}):Bx(o,n.layoutBox,r)&&nt(f=>{const d=a?n.measuredBox[f]:n.layoutBox[f],g=Je(r[f]);d.max=d.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const s=Ir();Ji(s,r,n.layoutBox);const l=Ir();a?Ji(l,e.applyTransform(i,!0),n.measuredBox):Ji(l,r,n.layoutBox);const u=!Dx(s);let c=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:g}=f;if(d&&g){const x=de();qi(x,n.layoutBox,d.layoutBox);const v=de();qi(v,r,g.layoutBox),Nx(x,v)||(c=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function y3(e){Di&&Hn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function v3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function x3(e){e.clearSnapshot()}function gg(e){e.clearMeasurements()}function w3(e){e.isLayoutDirty=!1}function S3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function yg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function b3(e){e.resolveTargetDelta()}function k3(e){e.calcProjection()}function E3(e){e.resetSkewAndRotation()}function C3(e){e.removeLeadSnapshot()}function vg(e,t,n){e.translate=ae(t.translate,0,n),e.scale=ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function xg(e,t,n,r){e.min=ae(t.min,n.min,r),e.max=ae(t.max,n.max,r)}function P3(e,t,n,r){xg(e.x,t.x,n.x,r),xg(e.y,t.y,n.y,r)}function T3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const A3={duration:.45,ease:[.4,0,.1,1]},wg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Sg=wg("applewebkit/")&&!wg("chrome/")?Math.round:Xe;function bg(e){e.min=Sg(e.min),e.max=Sg(e.max)}function _3(e){bg(e.x),bg(e.y)}function Bx(e,t,n){return e==="position"||e==="preserve-aspect"&&!MT(pg(t),pg(n),.2)}function j3(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const O3=$x({attachResizeListener:(e,t)=>Po(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Su={current:void 0},Vx=$x({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Su.current){const e=new O3({});e.mount(window),e.setOptions({layoutScroll:!0}),Su.current=e}return Su.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),M3={pan:{Feature:KT},drag:{Feature:GT,ProjectionNode:Vx,MeasureLayout:Lx}};function kg(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&q.postRender(()=>o(t,Xo(t)))}class R3 extends Dn{mount(){const{current:t}=this.node;t&&(this.unmount=MC(t,n=>(kg(this.node,n,"Start"),r=>kg(this.node,r,"End"))))}unmount(){}}class L3 extends Dn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ko(Po(this.node.current,"focus",()=>this.onFocus()),Po(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Eg(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&q.postRender(()=>o(t,Xo(t)))}class I3 extends Dn{mount(){const{current:t}=this.node;t&&(this.unmount=FC(t,n=>(Eg(this.node,n,"Start"),(r,{success:i})=>Eg(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qc=new WeakMap,bu=new WeakMap,F3=e=>{const t=Qc.get(e.target);t&&t(e)},D3=e=>{e.forEach(F3)};function N3({root:e,...t}){const n=e||document;bu.has(n)||bu.set(n,{});const r=bu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(D3,{root:e,...t})),r[i]}function z3(e,t,n){const r=N3(t);return Qc.set(e,n),r.observe(e),()=>{Qc.delete(e),r.unobserve(e)}}const $3={some:0,all:1};class B3 extends Dn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:$3[i]},s=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return z3(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(V3(t,n))&&this.startObserver()}unmount(){}}function V3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const U3={inView:{Feature:B3},tap:{Feature:I3},focus:{Feature:L3},hover:{Feature:R3}},W3={layout:{ProjectionNode:Vx,MeasureLayout:Lx}},Jc={current:null},Ux={current:!1};function H3(){if(Ux.current=!0,!!Rd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Jc.current=e.matches;e.addListener(t),t()}else Jc.current=!1}const Y3=[...hx,Ae,jn],G3=e=>Y3.find(px(e)),Cg=new WeakMap;function K3(e,t,n){for(const r in t){const i=t[r],o=n[r];if(je(i))e.addValue(r,i);else if(je(o))e.addValue(r,Eo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Eo(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Pg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class X3{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=sp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=Ft.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,q.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=a;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=vl(n),this.isVariantNode=b1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const g in d){const x=d[g];l[g]!==void 0&&je(x)&&x.set(l[g],!1)}}mount(t){this.current=t,Cg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Ux.current||H3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Jc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Cg.delete(this.current),this.projection&&this.projection.unmount(),_n(this.notifyUpdate),_n(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=mr.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&q.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in ni){const n=ni[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):de()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Pg.length;r++){const i=Pg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=t[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=K3(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Eo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(fx(i)||nx(i))?i=parseFloat(i):!G3(i)&&jn.test(n)&&(i=lx(t,n)),this.setBaseTarget(t,je(i)?i.get():i)),je(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=Bd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!je(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new tp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Wx extends X3{constructor(){super(...arguments),this.KeyframeResolver=mx}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;je(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Q3(e){return window.getComputedStyle(e)}class J3 extends Wx{constructor(){super(...arguments),this.type="html",this.renderInstance=O1}readValueFromInstance(t,n){if(mr.has(n)){const r=ap(n);return r&&r.default||0}else{const r=Q3(t),i=(A1(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Mx(t,n)}build(t,n,r){Wd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Kd(t,n,r)}}class q3 extends Wx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=de}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(mr.has(n)){const r=ap(n);return r&&r.default||0}return n=M1.has(n)?n:Nd(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return I1(t,n,r)}build(t,n,r){Hd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){R1(t,n,r,i)}mount(t){this.isSVGTag=Gd(t.tagName),super.mount(t)}}const Z3=(e,t)=>$d(e)?new q3(t):new J3(t,{allowProjection:e!==E.Fragment}),e4=CC({...kT,...U3,...M3,...W3},Z3),R=$E(e4);var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ze.apply(this,arguments)};function zs(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var X="-ms-",Zi="-moz-",U="-webkit-",Hx="comm",Sl="rule",fp="decl",t4="@import",Yx="@keyframes",n4="@layer",Gx=Math.abs,dp=String.fromCharCode,qc=Object.assign;function r4(e,t){return we(e,0)^45?(((t<<2^we(e,0))<<2^we(e,1))<<2^we(e,2))<<2^we(e,3):0}function Kx(e){return e.trim()}function $t(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function Za(e,t,n){return e.indexOf(t,n)}function we(e,t){return e.charCodeAt(t)|0}function ii(e,t,n){return e.slice(t,n)}function At(e){return e.length}function Xx(e){return e.length}function Ni(e,t){return t.push(e),e}function i4(e,t){return e.map(t).join("")}function Tg(e,t){return e.filter(function(n){return!$t(n,t)})}var bl=1,oi=1,Qx=0,ut=0,he=0,yi="";function kl(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:bl,column:oi,length:a,return:"",siblings:s}}function cn(e,t){return qc(kl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xr(e){for(;e.root;)e=cn(e.root,{children:[e]});Ni(e,e.siblings)}function o4(){return he}function a4(){return he=ut>0?we(yi,--ut):0,oi--,he===10&&(oi=1,bl--),he}function St(){return he=ut<Qx?we(yi,ut++):0,oi++,he===10&&(oi=1,bl++),he}function tr(){return we(yi,ut)}function es(){return ut}function El(e,t){return ii(yi,e,t)}function Zc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function s4(e){return bl=oi=1,Qx=At(yi=e),ut=0,[]}function l4(e){return yi="",e}function ku(e){return Kx(El(ut-1,ef(e===91?e+2:e===40?e+1:e)))}function u4(e){for(;(he=tr())&&he<33;)St();return Zc(e)>2||Zc(he)>3?"":" "}function c4(e,t){for(;--t&&St()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return El(e,es()+(t<6&&tr()==32&&St()==32))}function ef(e){for(;St();)switch(he){case e:return ut;case 34:case 39:e!==34&&e!==39&&ef(he);break;case 40:e===41&&ef(e);break;case 92:St();break}return ut}function f4(e,t){for(;St()&&e+he!==57;)if(e+he===84&&tr()===47)break;return"/*"+El(t,ut-1)+"*"+dp(e===47?e:St())}function d4(e){for(;!Zc(tr());)St();return El(e,ut)}function p4(e){return l4(ts("",null,null,null,[""],e=s4(e),0,[0],e))}function ts(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,f=a,d=0,g=0,x=0,v=1,S=1,p=1,h=0,y="",w=i,b=o,k=r,C=y;S;)switch(x=h,h=St()){case 40:if(x!=108&&we(C,f-1)==58){Za(C+=z(ku(h),"&","&\f"),"&\f",Gx(u?s[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=ku(h);break;case 9:case 10:case 13:case 32:C+=u4(x);break;case 92:C+=c4(es()-1,7);continue;case 47:switch(tr()){case 42:case 47:Ni(h4(f4(St(),es()),t,n,l),l);break;default:C+="/"}break;case 123*v:s[u++]=At(C)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:S=0;case 59+c:p==-1&&(C=z(C,/\f/g,"")),g>0&&At(C)-f&&Ni(g>32?_g(C+";",r,n,f-1,l):_g(z(C," ","")+";",r,n,f-2,l),l);break;case 59:C+=";";default:if(Ni(k=Ag(C,t,n,u,c,i,s,y,w=[],b=[],f,o),o),h===123)if(c===0)ts(C,t,k,k,w,o,f,s,b);else switch(d===99&&we(C,3)===110?100:d){case 100:case 108:case 109:case 115:ts(e,k,k,r&&Ni(Ag(e,k,k,0,0,i,s,y,i,w=[],f,b),b),i,b,f,s,r?w:b);break;default:ts(C,k,k,k,[""],b,0,s,b)}}u=c=g=0,v=p=1,y=C="",f=a;break;case 58:f=1+At(C),g=x;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&a4()==125)continue}switch(C+=dp(h),h*v){case 38:p=c>0?1:(C+="\f",-1);break;case 44:s[u++]=(At(C)-1)*p,p=1;break;case 64:tr()===45&&(C+=ku(St())),d=tr(),c=f=At(y=C+=d4(es())),h++;break;case 45:x===45&&At(C)==2&&(v=0)}}return o}function Ag(e,t,n,r,i,o,a,s,l,u,c,f){for(var d=i-1,g=i===0?o:[""],x=Xx(g),v=0,S=0,p=0;v<r;++v)for(var h=0,y=ii(e,d+1,d=Gx(S=a[v])),w=e;h<x;++h)(w=Kx(S>0?g[h]+" "+y:z(y,/&\f/g,g[h])))&&(l[p++]=w);return kl(e,t,n,i===0?Sl:s,l,u,c,f)}function h4(e,t,n,r){return kl(e,t,n,Hx,dp(o4()),ii(e,2,-2),0,r)}function _g(e,t,n,r,i){return kl(e,t,n,fp,ii(e,0,r),ii(e,r+1,-1),r,i)}function Jx(e,t,n){switch(r4(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return Zi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Zi+e+X+e+e;case 5936:switch(we(e,t+11)){case 114:return U+e+X+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+X+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+X+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+X+e+e;case 6165:return U+e+X+"flex-"+e+e;case 5187:return U+e+z(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return U+e+X+"flex-item-"+z(e,/flex-|-self/g,"")+($t(e,/flex-|baseline/)?"":X+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return U+e+X+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+X+z(e,"shrink","negative")+e;case 5292:return U+e+X+z(e,"basis","preferred-size")+e;case 6060:return U+"box-"+z(e,"-grow","")+U+e+X+z(e,"grow","positive")+e;case 4554:return U+z(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!$t(e,/flex-|baseline/))return X+"grid-column-align"+ii(e,t)+e;break;case 2592:case 3360:return X+z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$t(r.props,/grid-\w+-end/)})?~Za(e+(n=n[t].value),"span",0)?e:X+z(e,"-start","")+e+X+"grid-row-span:"+(~Za(n,"span",0)?$t(n,/\d+/):+$t(n,/\d+/)-+$t(e,/\d+/))+";":X+z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $t(r.props,/grid-\w+-start/)})?e:X+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(we(e,t+1)){case 109:if(we(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Zi+(we(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Za(e,"stretch",0)?Jx(z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return X+i+":"+o+u+(a?X+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(we(e,t+6)===121)return z(e,":",":"+U)+e;break;case 6444:switch(we(e,we(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(we(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+X+"$2box$3")+e;case 100:return z(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function $s(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function m4(e,t,n,r){switch(e.type){case n4:if(e.children.length)break;case t4:case fp:return e.return=e.return||e.value;case Hx:return"";case Yx:return e.return=e.value+"{"+$s(e.children,r)+"}";case Sl:if(!At(e.value=e.props.join(",")))return""}return At(n=$s(e.children,r))?e.return=e.value+"{"+n+"}":""}function g4(e){var t=Xx(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function y4(e){return function(t){t.root||(t=t.return)&&e(t)}}function v4(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fp:e.return=Jx(e.value,e.length,n);return;case Yx:return $s([cn(e,{value:z(e.value,"@","@"+U)})],r);case Sl:if(e.length)return i4(n=e.props,function(i){switch($t(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xr(cn(e,{props:[z(i,/:(read-\w+)/,":"+Zi+"$1")]})),xr(cn(e,{props:[i]})),qc(e,{props:Tg(n,r)});break;case"::placeholder":xr(cn(e,{props:[z(i,/:(plac\w+)/,":"+U+"input-$1")]})),xr(cn(e,{props:[z(i,/:(plac\w+)/,":"+Zi+"$1")]})),xr(cn(e,{props:[z(i,/:(plac\w+)/,X+"input-$1")]})),xr(cn(e,{props:[i]})),qc(e,{props:Tg(n,r)});break}return""})}}var x4={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},ai=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",qx="active",Zx="data-styled-version",Cl="6.1.18",pp=`/*!sc*/
`,Bs=typeof window<"u"&&typeof document<"u",w4=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),Pl=Object.freeze([]),si=Object.freeze({});function S4(e,t,n){return n===void 0&&(n=si),e.theme!==n.theme&&e.theme||t||n.theme}var ew=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),b4=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k4=/(^-|-$)/g;function jg(e){return e.replace(b4,"-").replace(k4,"")}var E4=/(a)(d)/gi,ja=52,Og=function(e){return String.fromCharCode(e+(e>25?39:97))};function tf(e){var t,n="";for(t=Math.abs(e);t>ja;t=t/ja|0)n=Og(t%ja)+n;return(Og(t%ja)+n).replace(E4,"$1-$2")}var Eu,tw=5381,Nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},nw=function(e){return Nr(tw,e)};function C4(e){return tf(nw(e)>>>0)}function P4(e){return e.displayName||e.name||"Component"}function Cu(e){return typeof e=="string"&&!0}var rw=typeof Symbol=="function"&&Symbol.for,iw=rw?Symbol.for("react.memo"):60115,T4=rw?Symbol.for("react.forward_ref"):60112,A4={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_4={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ow={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},j4=((Eu={})[T4]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Eu[iw]=ow,Eu);function Mg(e){return("type"in(t=e)&&t.type.$$typeof)===iw?ow:"$$typeof"in e?j4[e.$$typeof]:A4;var t}var O4=Object.defineProperty,M4=Object.getOwnPropertyNames,Rg=Object.getOwnPropertySymbols,R4=Object.getOwnPropertyDescriptor,L4=Object.getPrototypeOf,Lg=Object.prototype;function aw(e,t,n){if(typeof t!="string"){if(Lg){var r=L4(t);r&&r!==Lg&&aw(e,r,n)}var i=M4(t);Rg&&(i=i.concat(Rg(t)));for(var o=Mg(e),a=Mg(t),s=0;s<i.length;++s){var l=i[s];if(!(l in _4||n&&n[l]||a&&l in a||o&&l in o)){var u=R4(t,l);try{O4(e,l,u)}catch{}}}}return e}function li(e){return typeof e=="function"}function hp(e){return typeof e=="object"&&"styledComponentId"in e}function Qn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ig(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function To(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nf(e,t,n){if(n===void 0&&(n=!1),!n&&!To(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nf(e[r],t[r]);else if(To(t))for(var r in t)e[r]=nf(e[r],t[r]);return e}function mp(e,t){Object.defineProperty(e,"toString",{value:t})}function Qo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var I4=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Qo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(pp);return n},e}(),ns=new Map,Vs=new Map,rs=1,Oa=function(e){if(ns.has(e))return ns.get(e);for(;Vs.has(rs);)rs++;var t=rs++;return ns.set(e,t),Vs.set(t,e),t},F4=function(e,t){rs=t+1,ns.set(e,t),Vs.set(t,e)},D4="style[".concat(ai,"][").concat(Zx,'="').concat(Cl,'"]'),N4=new RegExp("^".concat(ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z4=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},$4=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(pp),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(N4);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(F4(c,u),z4(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Fg=function(e){for(var t=document.querySelectorAll(D4),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ai)!==qx&&($4(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function B4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(ai,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ai,qx),r.setAttribute(Zx,Cl);var a=B4();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},V4=function(){function e(t){this.element=sw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Qo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),U4=function(){function e(t){this.element=sw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),W4=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dg=Bs,H4={isServer:!Bs,useCSSOMInjection:!w4},lw=function(){function e(t,n,r){t===void 0&&(t=si),n===void 0&&(n={});var i=this;this.options=ze(ze({},H4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Bs&&Dg&&(Dg=!1,Fg(this)),mp(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(f){var d=function(p){return Vs.get(p)}(f);if(d===void 0)return"continue";var g=o.names.get(d),x=a.getGroup(f);if(g===void 0||!g.size||x.length===0)return"continue";var v="".concat(ai,".g").concat(f,'[id="').concat(d,'"]'),S="";g!==void 0&&g.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(pp)},c=0;c<s;c++)u(c);return l}(i)})}return e.registerId=function(t){return Oa(t)},e.prototype.rehydrate=function(){!this.server&&Bs&&Fg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new W4(i):r?new V4(i):new U4(i)}(this.options),new I4(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Oa(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Oa(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Oa(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Y4=/&/g,G4=/^\s*\/\/.*$/gm;function uw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=uw(n.children,t)),n})}function K4(e){var t,n,r,i=si,o=i.options,a=o===void 0?si:o,s=i.plugins,l=s===void 0?Pl:s,u=function(d,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):d},c=l.slice();c.push(function(d){d.type===Sl&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Y4,n).replace(r,u))}),a.prefix&&c.push(v4),c.push(m4);var f=function(d,g,x,v){g===void 0&&(g=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=d.replace(G4,""),p=p4(x||g?"".concat(x," ").concat(g," { ").concat(S," }"):S);a.namespace&&(p=uw(p,a.namespace));var h=[];return $s(p,g4(c.concat(y4(function(y){return h.push(y)})))),h};return f.hash=l.length?l.reduce(function(d,g){return g.name||Qo(15),Nr(d,g.name)},tw).toString():"",f}var X4=new lw,rf=K4(),cw=bt.createContext({shouldForwardProp:void 0,styleSheet:X4,stylis:rf});cw.Consumer;bt.createContext(void 0);function Ng(){return E.useContext(cw)}var Q4=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=rf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,mp(this,function(){throw Qo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rf),this.name+t.hash},e}(),J4=function(e){return e>="A"&&e<="Z"};function zg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;J4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fw=function(e){return e==null||e===!1||e===""},dw=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!fw(o)&&(Array.isArray(o)&&o.isCss||li(o)?r.push("".concat(zg(i),":"),o,";"):To(o)?r.push.apply(r,zs(zs(["".concat(i," {")],dw(o),!1),["}"],!1)):r.push("".concat(zg(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in x4||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function nr(e,t,n,r){if(fw(e))return[];if(hp(e))return[".".concat(e.styledComponentId)];if(li(e)){if(!li(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return nr(i,t,n,r)}var o;return e instanceof Q4?n?(e.inject(n,r),[e.getName(r)]):[e]:To(e)?dw(e):Array.isArray(e)?Array.prototype.concat.apply(Pl,e.map(function(a){return nr(a,t,n,r)})):[e.toString()]}function q4(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(li(n)&&!hp(n))return!1}return!0}var Z4=nw(Cl),eA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&q4(t),this.componentId=n,this.baseHash=Nr(Z4,n),this.baseStyle=r,lw.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Qn(i,this.staticRulesId);else{var o=Ig(nr(this.rules,t,n,r)),a=tf(Nr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=Qn(i,a),this.staticRulesId=a}else{for(var l=Nr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Ig(nr(f,t,n,r));l=Nr(l,d+c),u+=d}}if(u){var g=tf(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Qn(i,g)}}return i},e}(),pw=bt.createContext(void 0);pw.Consumer;var Pu={};function tA(e,t,n){var r=hp(e),i=e,o=!Cu(e),a=t.attrs,s=a===void 0?Pl:a,l=t.componentId,u=l===void 0?function(w,b){var k=typeof w!="string"?"sc":jg(w);Pu[k]=(Pu[k]||0)+1;var C="".concat(k,"-").concat(C4(Cl+k+Pu[k]));return b?"".concat(b,"-").concat(C):C}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(w){return Cu(w)?"styled.".concat(w):"Styled(".concat(P4(w),")")}(e):c,d=t.displayName&&t.componentId?"".concat(jg(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(w,b){return v(w,b)&&S(w,b)}}else x=v}var p=new eA(n,d,r?i.componentStyle:void 0);function h(w,b){return function(k,C,P){var D=k.attrs,L=k.componentStyle,te=k.defaultProps,Ue=k.foldedComponentIds,ct=k.styledComponentId,Et=k.target,gr=bt.useContext(pw),yr=Ng(),ne=k.shouldForwardProp||yr.shouldForwardProp,j=S4(C,gr,te)||si,I=function(nn,We,Nt){for(var xi,zn=ze(ze({},We),{className:void 0,theme:Nt}),Ml=0;Ml<nn.length;Ml+=1){var na=li(xi=nn[Ml])?xi(zn):xi;for(var rn in na)zn[rn]=rn==="className"?Qn(zn[rn],na[rn]):rn==="style"?ze(ze({},zn[rn]),na[rn]):na[rn]}return We.className&&(zn.className=Qn(zn.className,We.className)),zn}(D,C,j),N=I.as||Et,H={};for(var Y in I)I[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&I.theme===j||(Y==="forwardedAs"?H.as=I.forwardedAs:ne&&!ne(Y,N)||(H[Y]=I[Y]));var Nn=function(nn,We){var Nt=Ng(),xi=nn.generateAndInjectStyles(We,Nt.styleSheet,Nt.stylis);return xi}(L,I),ft=Qn(Ue,ct);return Nn&&(ft+=" "+Nn),I.className&&(ft+=" "+I.className),H[Cu(N)&&!ew.has(N)?"class":"className"]=ft,P&&(H.ref=P),E.createElement(N,H)}(y,w,b)}h.displayName=f;var y=bt.forwardRef(h);return y.attrs=g,y.componentStyle=p,y.displayName=f,y.shouldForwardProp=x,y.foldedComponentIds=r?Qn(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=d,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var P=0,D=k;P<D.length;P++)nf(b,D[P],!0);return b}({},i.defaultProps,w):w}}),mp(y,function(){return".".concat(y.styledComponentId)}),o&&aw(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function $g(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Bg=function(e){return Object.assign(e,{isCss:!0})};function nA(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(li(e)||To(e))return Bg(nr($g(Pl,zs([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?nr(r):Bg(nr($g(r,t)))}function of(e,t,n){if(n===void 0&&(n=si),!t)throw Qo(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,nA.apply(void 0,zs([i],o,!1)))};return r.attrs=function(i){return of(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return of(e,t,ze(ze({},n),i))},r}var hw=function(e){return of(tA,e)},T=hw;ew.forEach(function(e){T[e]=hw(e)});const rA=T.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,iA=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,oA=T.div`
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.5rem; /* Reduced from 1.8rem to fit longer text */
  font-weight: bold;
  color: #FF6B6B;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 1.3rem; /* Further reduced for tablets */
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem; /* Even smaller for mobile devices */
    max-width: 60%; /* Limit width on smallest screens */
  }
`,aA=T.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 480px) {
    position: absolute;
    flex-direction: column;
    background: white;
    top: 100%;
    right: ${e=>e.$isOpen?"0":"-100%"};
    width: 70%;
    height: calc(100vh - 70px);
    padding: 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`,_i=T(R.a)`
  margin: 0 1rem;
  color: #4A90E2;
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #FF6B6B;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  &.active {
    color: #FF6B6B;
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`,sA=T.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
  }
`,Tu=T.span`
  width: 100%;
  height: 3px;
  background-color: #4A90E2;
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${e=>e.$isOpen?"rotate(45deg) translate(5px, 5px)":"rotate(0)"};
  }
  
  &:nth-child(2) {
    opacity: ${e=>e.$isOpen?"0":"1"};
  }
  
  &:nth-child(3) {
    transform: ${e=>e.$isOpen?"rotate(-45deg) translate(5px, -5px)":"rotate(0)"};
  }
`,Jo=()=>{const[e,t]=E.useState(!1),n=Do();E.useEffect(()=>{const i=()=>{window.innerWidth>480&&t(!1)};return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),E.useEffect(()=>{t(!1)},[n]);const r=()=>{t(!e)};return m.jsx(rA,{children:m.jsxs(iA,{children:[m.jsx(oA,{as:yt,to:"/",children:"Joan E. Calliste Publication"}),m.jsxs(sA,{onClick:r,"aria-label":"Toggle menu",children:[m.jsx(Tu,{$isOpen:e}),m.jsx(Tu,{$isOpen:e}),m.jsx(Tu,{$isOpen:e})]}),m.jsxs(aA,{$isOpen:e,children:[m.jsx(_i,{as:yt,to:"/",className:n.pathname==="/"?"active":"",whileHover:{scale:1.1},whileTap:{scale:.95},children:"Home"}),m.jsx(_i,{as:yt,to:"/books",className:n.pathname==="/books"?"active":"",whileHover:{scale:1.1},whileTap:{scale:.95},children:"Books"}),m.jsx(_i,{as:yt,to:"/author",className:n.pathname==="/author"?"active":"",whileHover:{scale:1.1},whileTap:{scale:.95},children:"Author"}),m.jsx(_i,{as:yt,to:"/gallery",className:n.pathname==="/gallery"?"active":"",whileHover:{scale:1.1},whileTap:{scale:.95},children:"Gallery"}),m.jsx(_i,{as:yt,to:"/contact",className:n.pathname==="/contact"?"active":"",whileHover:{scale:1.1},whileTap:{scale:.95},children:"Contact"})]})]})})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function lA(e,t,n){return(t=cA(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vg(Object(n),!0).forEach(function(r){lA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uA(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cA(e){var t=uA(e,"string");return typeof t=="symbol"?t:t+""}const Ug=()=>{};let gp={},mw={},gw=null,yw={mark:Ug,measure:Ug};try{typeof window<"u"&&(gp=window),typeof document<"u"&&(mw=document),typeof MutationObserver<"u"&&(gw=MutationObserver),typeof performance<"u"&&(yw=performance)}catch{}const{userAgent:Wg=""}=gp.navigator||{},On=gp,J=mw,Hg=gw,Ma=yw;On.document;const tn=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",vw=~Wg.indexOf("MSIE")||~Wg.indexOf("Trident/");var fA=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,xw={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},pA={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ww=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Me="classic",Tl="duotone",hA="sharp",mA="sharp-duotone",Sw=[Me,Tl,hA,mA],gA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},yA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},vA=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),xA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},wA=["fak","fa-kit","fakd","fa-kit-duotone"],Yg={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},SA=["kit"],bA={kit:{"fa-kit":"fak"}},kA=["fak","fakd"],EA={kit:{fak:"fa-kit"}},Gg={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ra={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},CA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],PA=["fak","fa-kit","fakd","fa-kit-duotone"],TA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},AA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_A={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},af={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},jA=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],sf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...CA,...jA],OA=["solid","regular","light","thin","duotone","brands"],bw=[1,2,3,4,5,6,7,8,9,10],MA=bw.concat([11,12,13,14,15,16,17,18,19,20]),RA=[...Object.keys(_A),...OA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ra.GROUP,Ra.SWAP_OPACITY,Ra.PRIMARY,Ra.SECONDARY].concat(bw.map(e=>"".concat(e,"x"))).concat(MA.map(e=>"w-".concat(e))),LA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const qt="___FONT_AWESOME___",lf=16,kw="fa",Ew="svg-inline--fa",lr="data-fa-i2svg",uf="data-fa-pseudo-element",IA="data-fa-pseudo-element-pending",yp="data-prefix",vp="data-icon",Kg="fontawesome-i2svg",FA="async",DA=["HTML","HEAD","STYLE","SCRIPT"],Cw=(()=>{try{return!0}catch{return!1}})();function qo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Me]}})}const Pw=A({},xw);Pw[Me]=A(A(A(A({},{"fa-duotone":"duotone"}),xw[Me]),Yg.kit),Yg["kit-duotone"]);const NA=qo(Pw),cf=A({},xA);cf[Me]=A(A(A(A({},{duotone:"fad"}),cf[Me]),Gg.kit),Gg["kit-duotone"]);const Xg=qo(cf),ff=A({},af);ff[Me]=A(A({},ff[Me]),EA.kit);const xp=qo(ff),df=A({},AA);df[Me]=A(A({},df[Me]),bA.kit);qo(df);const zA=fA,Tw="fa-layers-text",$A=dA,BA=A({},gA);qo(BA);const VA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Au=pA,UA=[...SA,...RA],eo=On.FontAwesomeConfig||{};function WA(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function HA(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}J&&typeof J.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=HA(WA(n));i!=null&&(eo[r]=i)});const Aw={styleDefault:"solid",familyDefault:Me,cssPrefix:kw,replacementClass:Ew,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eo.familyPrefix&&(eo.cssPrefix=eo.familyPrefix);const ui=A(A({},Aw),eo);ui.autoReplaceSvg||(ui.observeMutations=!1);const M={};Object.keys(Aw).forEach(e=>{Object.defineProperty(M,e,{enumerable:!0,set:function(t){ui[e]=t,to.forEach(n=>n(M))},get:function(){return ui[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){ui.cssPrefix=e,to.forEach(t=>t(M))},get:function(){return ui.cssPrefix}});On.FontAwesomeConfig=M;const to=[];function YA(e){return to.push(e),()=>{to.splice(to.indexOf(e),1)}}const ln=lf,Ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function GA(e){if(!e||!tn)return;const t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=J.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return J.head.insertBefore(t,r),e}const KA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ao(){let e=12,t="";for(;e-- >0;)t+=KA[Math.random()*62|0];return t}function vi(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function wp(e){return e.classList?vi(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function _w(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function XA(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(_w(e[n]),'" '),"").trim()}function Al(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Sp(e){return e.size!==Ot.size||e.x!==Ot.x||e.y!==Ot.y||e.rotate!==Ot.rotate||e.flipX||e.flipY}function QA(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function JA(e){let{transform:t,width:n=lf,height:r=lf,startCentered:i=!1}=e,o="";return i&&vw?o+="translate(".concat(t.x/ln-n/2,"em, ").concat(t.y/ln-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/ln,"em), calc(-50% + ").concat(t.y/ln,"em)) "):o+="translate(".concat(t.x/ln,"em, ").concat(t.y/ln,"em) "),o+="scale(".concat(t.size/ln*(t.flipX?-1:1),", ").concat(t.size/ln*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var qA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function jw(){const e=kw,t=Ew,n=M.cssPrefix,r=M.replacementClass;let i=qA;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}let Qg=!1;function _u(){M.autoAddCss&&!Qg&&(GA(jw()),Qg=!0)}var ZA={mixout(){return{dom:{css:jw,insertCss:_u}}},hooks(){return{beforeDOMElementCreation(){_u()},beforeI2svg(){_u()}}}};const Zt=On||{};Zt[qt]||(Zt[qt]={});Zt[qt].styles||(Zt[qt].styles={});Zt[qt].hooks||(Zt[qt].hooks={});Zt[qt].shims||(Zt[qt].shims=[]);var Mt=Zt[qt];const Ow=[],Mw=function(){J.removeEventListener("DOMContentLoaded",Mw),Us=1,Ow.map(e=>e())};let Us=!1;tn&&(Us=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Us||J.addEventListener("DOMContentLoaded",Mw));function e6(e){tn&&(Us?setTimeout(e,0):Ow.push(e))}function Zo(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?_w(e):"<".concat(t," ").concat(XA(n),">").concat(r.map(Zo).join(""),"</").concat(t,">")}function Jg(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ju=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<a;l++)u=o[l],c=s(c,t[u],u,t);return c};function t6(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function pf(e){const t=t6(e);return t.length===1?t[0].toString(16):null}function n6(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function qg(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function hf(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=qg(t);typeof Mt.hooks.addPack=="function"&&!r?Mt.hooks.addPack(e,qg(t)):Mt.styles[e]=A(A({},Mt.styles[e]||{}),i),e==="fas"&&hf("fa",t)}const{styles:_o,shims:r6}=Mt,Rw=Object.keys(xp),i6=Rw.reduce((e,t)=>(e[t]=Object.keys(xp[t]),e),{});let bp=null,Lw={},Iw={},Fw={},Dw={},Nw={};function o6(e){return~UA.indexOf(e)}function a6(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!o6(i)?i:null}const zw=()=>{const e=r=>ju(_o,(i,o,a)=>(i[a]=ju(o,r,{}),i),{});Lw=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),Iw=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),Nw=e((r,i,o)=>{const a=i[2];return r[o]=o,a.forEach(s=>{r[s]=o}),r});const t="far"in _o||M.autoFetchSvg,n=ju(r6,(r,i)=>{const o=i[0];let a=i[1];const s=i[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:s}),r},{names:{},unicodes:{}});Fw=n.names,Dw=n.unicodes,bp=_l(M.styleDefault,{family:M.familyDefault})};YA(e=>{bp=_l(e.styleDefault,{family:M.familyDefault})});zw();function kp(e,t){return(Lw[e]||{})[t]}function s6(e,t){return(Iw[e]||{})[t]}function Jn(e,t){return(Nw[e]||{})[t]}function $w(e){return Fw[e]||{prefix:null,iconName:null}}function l6(e){const t=Dw[e],n=kp("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mn(){return bp}const Bw=()=>({prefix:null,iconName:null,rest:[]});function u6(e){let t=Me;const n=Rw.reduce((r,i)=>(r[i]="".concat(M.cssPrefix,"-").concat(i),r),{});return Sw.forEach(r=>{(e.includes(n[r])||e.some(i=>i6[r].includes(i)))&&(t=r)}),t}function _l(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Me}=t,r=NA[n][e];if(n===Tl&&!e)return"fad";const i=Xg[n][e]||Xg[n][r],o=e in Mt.styles?e:null;return i||o||null}function c6(e){let t=[],n=null;return e.forEach(r=>{const i=a6(M.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function Zg(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function jl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const i=sf.concat(PA),o=Zg(e.filter(f=>i.includes(f))),a=Zg(e.filter(f=>!sf.includes(f))),s=o.filter(f=>(r=f,!ww.includes(f))),[l=null]=s,u=u6(o),c=A(A({},c6(a)),{},{prefix:_l(l,{family:u})});return A(A(A({},c),h6({values:e,family:u,styles:_o,config:M,canonical:c,givenPrefix:r})),f6(n,r,c))}function f6(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};const o=t==="fa"?$w(i):{},a=Jn(r,i);return i=o.iconName||a||i,r=o.prefix||r,r==="far"&&!_o.far&&_o.fas&&!M.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const d6=Sw.filter(e=>e!==Me||e!==Tl),p6=Object.keys(af).filter(e=>e!==Me).map(e=>Object.keys(af[e])).flat();function h6(e){const{values:t,family:n,canonical:r,givenPrefix:i="",styles:o={},config:a={}}=e,s=n===Tl,l=t.includes("fa-duotone")||t.includes("fad"),u=a.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(l||u||c)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&d6.includes(n)&&(Object.keys(o).find(d=>p6.includes(d))||a.autoFetchSvg)){const d=vA.get(n).defaultShortPrefixId;r.prefix=d,r.iconName=Jn(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Mn()||"fas"),r}class m6{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]=A(A({},this.definitions[o]||{}),i[o]),hf(o,i[o]);const a=xp[Me][o];a&&hf(a,i[o]),zw()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:a,icon:s}=r[i],l=s[2];t[o]||(t[o]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(t[o][u]=s)}),t[o][a]=s}),t}}let e0=[],zr={};const Gr={},g6=Object.keys(Gr);function y6(e,t){let{mixoutsTo:n}=t;return e0=e,zr={},Object.keys(Gr).forEach(r=>{g6.indexOf(r)===-1&&delete Gr[r]}),e0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(a=>{n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(a=>{zr[a]||(zr[a]=[]),zr[a].push(o[a])})}r.provides&&r.provides(Gr)}),n}function mf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(zr[e]||[]).forEach(a=>{t=a.apply(null,[t,...r])}),t}function ur(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(zr[e]||[]).forEach(o=>{o.apply(null,n)})}function Rn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Gr[e]?Gr[e].apply(null,t):void 0}function gf(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Mn();if(t)return t=Jn(n,t)||t,Jg(Vw.definitions,n,t)||Jg(Mt.styles,n,t)}const Vw=new m6,v6=()=>{M.autoReplaceSvg=!1,M.observeMutations=!1,ur("noAuto")},x6={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tn?(ur("beforeI2svg",e),Rn("pseudoElements2svg",e),Rn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,e6(()=>{S6({autoReplaceSvgRoot:t}),ur("watch",e)})}},w6={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Jn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=_l(e[0]);return{prefix:n,iconName:Jn(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(zA))){const t=jl(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Mn(),iconName:Jn(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Mn();return{prefix:t,iconName:Jn(t,e)||e}}}},et={noAuto:v6,config:M,dom:x6,parse:w6,library:Vw,findIconDefinition:gf,toHtml:Zo},S6=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=J}=e;(Object.keys(Mt.styles).length>0||M.autoFetchSvg)&&tn&&M.autoReplaceSvg&&et.dom.i2svg({node:t})};function Ol(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Zo(n))}}),Object.defineProperty(e,"node",{get:function(){if(!tn)return;const n=J.createElement("div");return n.innerHTML=e.html,n.children}}),e}function b6(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:a}=e;if(Sp(a)&&n.found&&!r.found){const{width:s,height:l}=n,u={x:s/l/2,y:.5};i.style=Al(A(A({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function k6(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const a=o===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:a}),children:r}]}]}function Ep(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:a,title:s,maskId:l,titleId:u,extra:c,watchable:f=!1}=e,{width:d,height:g}=n.found?n:t,x=kA.includes(r),v=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(b=>c.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(c.classes).join(" ");let S={children:[],attributes:A(A({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(g)})};const p=x&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/g*16*.0625,"em")}:{};f&&(S.attributes[lr]=""),s&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Ao())},children:[s]}),delete S.attributes.title);const h=A(A({},S),{},{prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:a,styles:A(A({},p),c.styles)}),{children:y,attributes:w}=n.found&&t.found?Rn("generateAbstractMask",h)||{children:[],attributes:{}}:Rn("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=y,h.attributes=w,a?k6(h):b6(h)}function t0(e){const{content:t,width:n,height:r,transform:i,title:o,extra:a,watchable:s=!1}=e,l=A(A(A({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(l[lr]="");const u=A({},a.styles);Sp(i)&&(u.transform=JA({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=Al(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function E6(e){const{content:t,title:n,extra:r}=e,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Al(r.styles);o.length>0&&(i.style=o);const a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:Ou}=Mt;function yf(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Au.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Au.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Au.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const C6={found:!1,width:512,height:512};function P6(e,t){!Cw&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function vf(e,t){let n=t;return t==="fa"&&M.styleDefault!==null&&(t=Mn()),new Promise((r,i)=>{if(n==="fa"){const o=$w(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Ou[t]&&Ou[t][e]){const o=Ou[t][e];return r(yf(o))}P6(e,t),r(A(A({},C6),{},{icon:M.showMissingIcons&&e?Rn("missingIconAbstract")||{}:{}}))})}const n0=()=>{},xf=M.measurePerformance&&Ma&&Ma.mark&&Ma.measure?Ma:{mark:n0,measure:n0},zi='FA "6.7.2"',T6=e=>(xf.mark("".concat(zi," ").concat(e," begins")),()=>Uw(e)),Uw=e=>{xf.mark("".concat(zi," ").concat(e," ends")),xf.measure("".concat(zi," ").concat(e),"".concat(zi," ").concat(e," begins"),"".concat(zi," ").concat(e," ends"))};var Cp={begin:T6,end:Uw};const is=()=>{};function r0(e){return typeof(e.getAttribute?e.getAttribute(lr):null)=="string"}function A6(e){const t=e.getAttribute?e.getAttribute(yp):null,n=e.getAttribute?e.getAttribute(vp):null;return t&&n}function _6(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function j6(){return M.autoReplaceSvg===!0?os.replace:os[M.autoReplaceSvg]||os.replace}function O6(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function M6(e){return J.createElement(e)}function Ww(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?O6:M6}=t;if(typeof e=="string")return J.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ww(o,{ceFn:n}))}),r}function R6(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const os={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ww(n),t)}),t.getAttribute(lr)===null&&M.keepOriginalSource){let n=J.createComment(R6(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~wp(t).indexOf(M.replacementClass))return os.replace(e);const r=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((a,s)=>(s===M.replacementClass||s.match(r)?a.toSvg.push(s):a.toNode.push(s),a),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Zo(o)).join(`
`);t.setAttribute(lr,""),t.innerHTML=i}};function i0(e){e()}function Hw(e,t){const n=typeof t=="function"?t:is;if(e.length===0)n();else{let r=i0;M.mutateApproach===FA&&(r=On.requestAnimationFrame||i0),r(()=>{const i=j6(),o=Cp.begin("mutate");e.map(i),o(),n()})}}let Pp=!1;function Yw(){Pp=!0}function wf(){Pp=!1}let Ws=null;function o0(e){if(!Hg||!M.observeMutations)return;const{treeCallback:t=is,nodeCallback:n=is,pseudoElementsCallback:r=is,observeMutationsRoot:i=J}=e;Ws=new Hg(o=>{if(Pp)return;const a=Mn();vi(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!r0(s.addedNodes[0])&&(M.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&M.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&r0(s.target)&&~VA.indexOf(s.attributeName))if(s.attributeName==="class"&&A6(s.target)){const{prefix:l,iconName:u}=jl(wp(s.target));s.target.setAttribute(yp,l||a),u&&s.target.setAttribute(vp,u)}else _6(s.target)&&n(s.target)})}),tn&&Ws.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function L6(){Ws&&Ws.disconnect()}function I6(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function F6(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=jl(wp(e));return i.prefix||(i.prefix=Mn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=s6(i.prefix,e.innerText)||kp(i.prefix,pf(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function D6(e){const t=vi(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Ao()):(t["aria-hidden"]="true",t.focusable="false")),t}function N6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function a0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=F6(e),o=D6(e),a=mf("parseNodeAttributes",{},e);let s=t.styleParser?I6(e):[];return A({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},a)}const{styles:z6}=Mt;function Gw(e){const t=M.autoReplaceSvg==="nest"?a0(e,{styleParser:!1}):a0(e);return~t.extra.classes.indexOf(Tw)?Rn("generateLayersText",e,t):Rn("generateSvgReplacementMutation",e,t)}function $6(){return[...wA,...sf]}function s0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tn)return Promise.resolve();const n=J.documentElement.classList,r=c=>n.add("".concat(Kg,"-").concat(c)),i=c=>n.remove("".concat(Kg,"-").concat(c)),o=M.autoFetchSvg?$6():ww.concat(Object.keys(z6));o.includes("fa")||o.push("fa");const a=[".".concat(Tw,":not([").concat(lr,"])")].concat(o.map(c=>".".concat(c,":not([").concat(lr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let s=[];try{s=vi(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();const l=Cp.begin("onTree"),u=s.reduce((c,f)=>{try{const d=Gw(f);d&&c.push(d)}catch(d){Cw||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(d=>{Hw(d,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(d=>{l(),f(d)})})}function B6(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gw(e).then(n=>{n&&Hw([n],t)})}function V6(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:gf(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:gf(i||{})),e(r,A(A({},n),{},{mask:i}))}}const U6=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ot,symbol:r=!1,mask:i=null,maskId:o=null,title:a=null,titleId:s=null,classes:l=[],attributes:u={},styles:c={}}=t;if(!e)return;const{prefix:f,iconName:d,icon:g}=e;return Ol(A({type:"icon"},e),()=>(ur("beforeDOMElementCreation",{iconDefinition:e,params:t}),M.autoA11y&&(a?u["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(s||Ao()):(u["aria-hidden"]="true",u.focusable="false")),Ep({icons:{main:yf(g),mask:i?yf(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:A(A({},Ot),n),symbol:r,title:a,maskId:o,titleId:s,extra:{attributes:u,styles:c,classes:l}})))};var W6={mixout(){return{icon:V6(U6)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=s0,e.nodeCallback=B6,e}}},provides(e){e.i2svg=function(t){const{node:n=J,callback:r=()=>{}}=t;return s0(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:a,transform:s,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((d,g)=>{Promise.all([vf(r,a),u.iconName?vf(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[v,S]=x;d([t,Ep({icons:{main:v,mask:S},prefix:a,iconName:r,transform:s,symbol:l,maskId:c,title:i,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:a}=t;const s=Al(a);s.length>0&&(r.style=s);let l;return Sp(o)&&(l=Rn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},H6={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ol({type:"layer"},()=>{ur("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Y6={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return Ol({type:"counter",content:e},()=>(ur("beforeDOMElementCreation",{content:e,params:t}),E6({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(M.cssPrefix,"-layers-counter"),...r]}})))}}}},G6={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ot,title:r=null,classes:i=[],attributes:o={},styles:a={}}=t;return Ol({type:"text",content:e},()=>(ur("beforeDOMElementCreation",{content:e,params:t}),t0({content:e,transform:A(A({},Ot),n),title:r,extra:{attributes:o,styles:a,classes:["".concat(M.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let a=null,s=null;if(vw){const l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();a=u.width/l,s=u.height/l}return M.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,t0({content:t.innerHTML,width:a,height:s,transform:i,title:r,extra:o,watchable:!0})])}}};const K6=new RegExp('"',"ug"),l0=[1105920,1112319],u0=A(A(A(A({},{FontAwesome:{normal:"fas",400:"fas"}}),yA),LA),TA),Sf=Object.keys(u0).reduce((e,t)=>(e[t.toLowerCase()]=u0[t],e),{}),X6=Object.keys(Sf).reduce((e,t)=>{const n=Sf[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Q6(e){const t=e.replace(K6,""),n=n6(t,0),r=n>=l0[0]&&n<=l0[1],i=t.length===2?t[0]===t[1]:!1;return{value:pf(i?t[0]:t),isSecondary:r||i}}function J6(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Sf[n]||{})[i]||X6[n]}function c0(e,t){const n="".concat(IA).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const a=vi(e.children).filter(d=>d.getAttribute(uf)===t)[0],s=On.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match($A),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(a&&!u)return e.removeChild(a),r();if(u&&f!=="none"&&f!==""){const d=s.getPropertyValue("content");let g=J6(l,c);const{value:x,isSecondary:v}=Q6(d),S=u[0].startsWith("FontAwesome");let p=kp(g,x),h=p;if(S){const y=l6(x);y.iconName&&y.prefix&&(p=y.iconName,g=y.prefix)}if(p&&!v&&(!a||a.getAttribute(yp)!==g||a.getAttribute(vp)!==h)){e.setAttribute(n,h),a&&e.removeChild(a);const y=N6(),{extra:w}=y;w.attributes[uf]=t,vf(p,g).then(b=>{const k=Ep(A(A({},y),{},{icons:{main:b,mask:Bw()},prefix:g,iconName:h,extra:w,watchable:!0})),C=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(C,e.firstChild):e.appendChild(C),C.outerHTML=k.map(P=>Zo(P)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function q6(e){return Promise.all([c0(e,"::before"),c0(e,"::after")])}function Z6(e){return e.parentNode!==document.head&&!~DA.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(uf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function f0(e){if(tn)return new Promise((t,n)=>{const r=vi(e.querySelectorAll("*")).filter(Z6).map(q6),i=Cp.begin("searchPseudoElements");Yw(),Promise.all(r).then(()=>{i(),wf(),t()}).catch(()=>{i(),wf(),n()})})}var e_={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=f0,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=J}=t;M.searchPseudoElements&&f0(n)}}};let d0=!1;var t_={mixout(){return{dom:{unwatch(){Yw(),d0=!0}}}},hooks(){return{bootstrap(){o0(mf("mutationObserverCallbacks",{}))},noAuto(){L6()},watch(e){const{observeMutationsRoot:t}=e;d0?wf():o0(mf("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const p0=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let a=i.slice(1).join("-");if(o&&a==="h")return n.flipX=!0,n;if(o&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(o){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)};var n_={mixout(){return{parse:{transform:e=>p0(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=p0(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const a={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(s," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:c,path:f};return{tag:"g",attributes:A({},d.outer),children:[{tag:"g",attributes:A({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:A(A({},n.icon.attributes),d.path)}]}]}}}};const Mu={x:0,y:0,width:"100%",height:"100%"};function h0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function r_(e){return e.tag==="g"?e.children:[e]}var i_={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?jl(n.split(" ").map(i=>i.trim())):Bw();return r.prefix||(r.prefix=Mn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:a,transform:s}=t;const{width:l,icon:u}=i,{width:c,icon:f}=o,d=QA({transform:s,containerWidth:c,iconWidth:l}),g={tag:"rect",attributes:A(A({},Mu),{},{fill:"white"})},x=u.children?{children:u.children.map(h0)}:{},v={tag:"g",attributes:A({},d.inner),children:[h0(A({tag:u.tag,attributes:A(A({},u.attributes),d.path)},x))]},S={tag:"g",attributes:A({},d.outer),children:[v]},p="mask-".concat(a||Ao()),h="clip-".concat(a||Ao()),y={tag:"mask",attributes:A(A({},Mu),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,S]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:r_(f)},y]};return n.push(w,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Mu)}),{children:n,attributes:r}}}},o_={provides(e){let t=!1;On.matchMedia&&(t=On.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=A(A({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},a_={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},s_=[ZA,W6,H6,Y6,G6,e_,t_,n_,i_,o_,a_];y6(s_,{mixoutsTo:et});et.noAuto;et.config;et.library;et.dom;const bf=et.parse;et.findIconDefinition;et.toHtml;const l_=et.icon;et.layer;et.text;et.counter;function m0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m0(Object(n),!0).forEach(function(r){$r(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hs(e){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hs(e)}function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function c_(e,t){if(e==null)return{};var n=u_(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kf(e){return f_(e)||d_(e)||p_(e)||h_()}function f_(e){if(Array.isArray(e))return Ef(e)}function d_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function p_(e,t){if(e){if(typeof e=="string")return Ef(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ef(e,t)}}function Ef(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m_(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,g=e.inverse,x=e.border,v=e.listItem,S=e.flip,p=e.size,h=e.rotation,y=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":x,"fa-li":v,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},$r(t,"fa-".concat(p),typeof p<"u"&&p!==null),$r(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),$r(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),$r(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(b){return w[b]?b:null}).filter(function(b){return b})}function g_(e){return e=e-0,e===e}function Kw(e){return g_(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var y_=["style"];function v_(e){return e.charAt(0).toUpperCase()+e.slice(1)}function x_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Kw(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[v_(i)]=o:t[i]=o,t},{})}function Xw(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Xw(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=x_(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Kw(u)]=c}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=c_(n,y_);return i.attrs.style=_t(_t({},i.attrs.style),a),e.apply(void 0,[t.tag,_t(_t({},i.attrs),s)].concat(kf(r)))}var Qw=!1;try{Qw=!0}catch{}function w_(){if(!Qw&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function g0(e){if(e&&Hs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bf.icon)return bf.icon(e);if(e===null)return null;if(e&&Hs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ru(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$r({},e,t):{}}var y0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},vt=bt.forwardRef(function(e,t){var n=_t(_t({},y0),e),r=n.icon,i=n.mask,o=n.symbol,a=n.className,s=n.title,l=n.titleId,u=n.maskId,c=g0(r),f=Ru("classes",[].concat(kf(m_(n)),kf((a||"").split(" ")))),d=Ru("transform",typeof n.transform=="string"?bf.transform(n.transform):n.transform),g=Ru("mask",g0(i)),x=l_(c,_t(_t(_t(_t({},f),d),g),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!x)return w_("Could not find icon",c),null;var v=x.abstract,S={ref:t};return Object.keys(n).forEach(function(p){y0.hasOwnProperty(p)||(S[p]=n[p])}),S_(v[0],S)});vt.displayName="FontAwesomeIcon";vt.propTypes={beat:$.bool,border:$.bool,beatFade:$.bool,bounce:$.bool,className:$.string,fade:$.bool,flash:$.bool,mask:$.oneOfType([$.object,$.array,$.string]),maskId:$.string,fixedWidth:$.bool,inverse:$.bool,flip:$.oneOf([!0,!1,"horizontal","vertical","both"]),icon:$.oneOfType([$.object,$.array,$.string]),listItem:$.bool,pull:$.oneOf(["right","left"]),pulse:$.bool,rotation:$.oneOf([0,90,180,270]),shake:$.bool,size:$.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:$.bool,spinPulse:$.bool,spinReverse:$.bool,symbol:$.oneOfType([$.bool,$.string]),title:$.string,titleId:$.string,transform:$.oneOfType([$.string,$.object]),swapOpacity:$.bool};var S_=Xw.bind(null,bt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const b_={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},k_=T(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,E_=T(R.div)`
  background: white;
  width: 90%;
  max-width: 700px;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
`,C_=T.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #FF6B6B;
  }
`,P_=T.h2`
  color: #FF6B6B;
  font-family: 'Comic Sans MS', cursive;
  margin-bottom: 20px;
`,v0=({isOpen:e,onClose:t,title:n,children:r})=>(E.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[e]),E.useEffect(()=>{const i=o=>{o.keyCode===27&&t()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[t]),m.jsx(Ld,{children:e&&m.jsx(k_,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:m.jsxs(E_,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:i=>i.stopPropagation(),children:[m.jsx(C_,{onClick:t,children:"✕"}),m.jsx(P_,{children:n}),r]})})})),T_=T.footer`
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1rem 0; /* Reduced from 1.5rem */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem; /* Reduced from 2rem */
`,A_=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 0.8rem; /* Reduced from 1.5rem */
`,__=T.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem; /* Reduced from 1.5rem */
  margin-bottom: 0.5rem; /* Reduced from 1rem */
`,j_=T(R.a)`
  color: #4A90E2;
  font-size: 1.2rem; /* Reduced from 1.5rem */
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #FF6B6B;
  }
`,O_=T.p`
  font-family: 'Arial', sans-serif;
  color: #666;
  font-size: 0.8rem; /* Reduced from 0.9rem */
  text-align: center;
`,x0=T(R.a)`
  color: #4A90E2;
  text-decoration: none;
  position: relative;
  font-family: 'Comic Sans MS', cursive;
  font-size: 0.8rem; /* Added smaller font size */
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px; /* Reduced from 2px */
    bottom: -2px; /* Reduced from -3px */
    left: 0;
    background-color: #FF6B6B;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,M_=T.div`
  font-family: 'Comic Sans MS', cursive;
  font-size: 1rem; /* Reduced from 1.2rem */
  font-weight: bold;
  color: #FF6B6B;
  margin-bottom: 0.3rem; /* Reduced from 0.5rem */
`,ea=()=>{const e=new Date().getFullYear(),[t,n]=E.useState(!1),[r,i]=E.useState(!1);return m.jsxs(m.Fragment,{children:[m.jsx(T_,{children:m.jsxs(A_,{children:[m.jsx(M_,{children:"Joan E. Calliste Publication"}),m.jsx(__,{children:m.jsx(j_,{href:"https://www.instagram.com/joan.e.calliste/",target:"_blank",rel:"noopener noreferrer",as:R.a,whileHover:{scale:1.2},whileTap:{scale:.9},"aria-label":"Instagram",children:m.jsx(vt,{icon:b_})})}),m.jsxs(O_,{children:["© ",e," Joan E. Calliste Publication. All rights reserved."]}),m.jsxs("div",{children:[m.jsx(x0,{as:"button",whileHover:{scale:1.05},onClick:()=>n(!0),style:{background:"none",border:"none",padding:0,cursor:"pointer",fontFamily:"'Comic Sans MS', cursive",color:"#4A90E2"},children:"Privacy Policy"})," | ",m.jsx(x0,{as:"button",whileHover:{scale:1.05},onClick:()=>i(!0),style:{background:"none",border:"none",padding:0,cursor:"pointer",fontFamily:"'Comic Sans MS', cursive",color:"#4A90E2"},children:"Terms of Service"})]})]})}),m.jsx(v0,{isOpen:t,onClose:()=>n(!1),title:"Privacy Policy",children:m.jsxs("div",{style:{lineHeight:"1.6",color:"#333"},children:[m.jsx("h4",{children:"Last Updated: May 20, 2025"}),m.jsx("p",{children:"Welcome to Joan E. Calliste Publication's Privacy Policy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."}),m.jsx("h3",{children:"INFORMATION WE COLLECT"}),m.jsx("p",{children:"We may collect information about you in various ways. The information we collect may include:"}),m.jsxs("ul",{children:[m.jsx("li",{children:"Personal Data: Name, email address, and similar contact information."}),m.jsx("li",{children:"Usage Data: Information about how you use our website and which pages you visit."}),m.jsx("li",{children:"Cookies Data: We use cookies to enhance your browsing experience."})]}),m.jsx("h3",{children:"HOW WE USE YOUR INFORMATION"}),m.jsx("p",{children:"We may use the information we collect from you to:"}),m.jsxs("ul",{children:[m.jsx("li",{children:"Provide and maintain our website"}),m.jsx("li",{children:"Notify you about changes to our website"}),m.jsx("li",{children:"Respond to your inquiries"}),m.jsx("li",{children:"Send newsletters (with your consent)"}),m.jsx("li",{children:"Improve our website experience"})]}),m.jsx("h3",{children:"CHILDREN'S PRIVACY"}),m.jsx("p",{children:"Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."}),m.jsx("h3",{children:"CHANGES TO THIS PRIVACY POLICY"}),m.jsx("p",{children:"We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."}),m.jsx("p",{style:{marginTop:"30px",fontStyle:"italic",borderTop:"1px solid #eee",paddingTop:"20px"},children:"Website designed and developed by Sea Amos Business Solutions."})]})}),m.jsx(v0,{isOpen:r,onClose:()=>i(!1),title:"Terms of Service",children:m.jsxs("div",{style:{lineHeight:"1.6",color:"#333"},children:[m.jsx("h4",{children:"Last Updated: May 20, 2025"}),m.jsx("p",{children:"Please read these Terms of Service carefully before using the Joan E. Calliste Publication website."}),m.jsx("h3",{children:"1. ACCEPTANCE OF TERMS"}),m.jsx("p",{children:"By accessing and using this website, you accept and agree to be bound by these Terms of Service."}),m.jsx("h3",{children:"2. COPYRIGHT AND INTELLECTUAL PROPERTY"}),m.jsx("p",{children:"All content on this website, including text, images, graphics, and illustrations, is the property of Joan E. Calliste Publication and protected by copyright laws. The content may not be copied, reproduced, or distributed without prior written permission."}),m.jsx("h3",{children:"3. USER CONDUCT"}),m.jsx("p",{children:"You agree not to use our website for any unlawful purpose or in any way that might harm, disable, or impair the website."}),m.jsx("h3",{children:"4. DISCLAIMER"}),m.jsx("p",{children:'The materials on this website are provided "as is" without warranties of any kind, either express or implied. Joan E. Calliste Publication does not warrant that the website will be error-free or uninterrupted.'}),m.jsx("h3",{children:"5. LIMITATION OF LIABILITY"}),m.jsx("p",{children:"Joan E. Calliste Publication shall not be liable for any damages arising from the use or inability to use the materials on this website."}),m.jsx("h3",{children:"6. CHANGES TO TERMS"}),m.jsx("p",{children:"We reserve the right to modify these Terms of Service at any time. By continuing to use our website after such changes, you agree to be bound by the revised terms."}),m.jsx("p",{style:{marginTop:"30px",fontStyle:"italic",borderTop:"1px solid #eee",paddingTop:"20px"},children:"Website designed and developed by Sea Amos Business Solutions."})]})})]})},cr="/assets/leaves-DL5QiV4_.png",jo="/assets/flowers-DrDCS4k7.png",R_="/assets/author1-BLHqTSLc.jpg",L_="/assets/cover-e7jvenSO.png",I_="/assets/amazon-kk4Td5OG.png",F_="/assets/barnesandnoble-pyrcdhu2.jpg",D_="/assets/ebay-CTk3Uqrb.png",N_="/assets/thriftbooks-BCR9Iz7E.png",z_="/assets/walmart-BBNuWBvM.png",$_="/assets/readings-j6N2echc.png",B_=T.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  @media (max-width: 1080px) {
    padding: 5rem 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`,ta=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  
  .falling-element {
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
  }
  
  .leaf {
    opacity: 0.7;
  }
  
  .flower {
    opacity: 0.8;
  }
`,V_=T(R.h1)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.4rem, 5vw, 3rem); /* Reduced minimum size */
  color: #FF6B6B;
  margin-bottom: clamp(0.8rem, 2vw, 1rem);
  text-align: center;
  width: 100%;
  max-width: 100%; /* Allow full width on mobile */
  padding: 0 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.3;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 0 0.75rem;
    line-height: 1.2;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0 0.5rem;
    line-height: 1.2;
    max-width: 300px; /* Constrain width on mobile */
  }
  
  @media (max-width: 320px) {
    font-size: 1.3rem;
    max-width: 260px; /* Even smaller for tiny screens */
  }
`,U_=T(R.h2)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(0.9rem, 3vw, 1.8rem); /* Reduced minimum size */
  color: #4A90E2;
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
  text-align: center;
  width: 100%;
  max-width: 100%; /* Allow full width on mobile */
  padding: 0 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 0.75rem;
    line-height: 1.3;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
    line-height: 1.3;
    max-width: 280px; /* Constrain width on mobile */
  }
  
  @media (max-width: 320px) {
    font-size: 0.85rem;
    max-width: 240px; /* Even smaller for tiny screens */
  }
`,W_=T.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 1rem 0;
  overflow: hidden;
  position: relative;
  
  .carousel-inner {
    display: flex;
    align-items: center;
    gap: 3rem;
    
    @media (max-width: 768px) {
      gap: 2rem;
    }
    
    @media (max-width: 480px) {
      gap: 1.5rem;
    }
  }
  
  .logo-item {
    flex-shrink: 0;
  }
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    
    @media (max-width: 768px) {
      width: 40px;
    }
  }
  
  &:before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 229, 229, 0.8), transparent);
  }
  
  &:after {
    right: 0;
    background: linear-gradient(to left, rgba(229, 249, 255, 0.8), transparent);
  }
`;T(R.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 80px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    min-width: 120px;
    height: 60px;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    min-width: 100px;
    height: 50px;
    padding: 0.75rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;const Lu=T.img`
  max-width: 120px;
  max-height: 50px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: all 0.3s ease;
  
  @media (max-width: 1080px) {
    max-width: 100px;
    max-height: 45px;
    margin: 0 1.2rem;
  }
  
  @media (max-width: 768px) {
    max-width: 80px;
    max-height: 40px;
    margin: 0 1rem;
  }
  
  @media (max-width: 480px) {
    max-width: 70px;
    max-height: 35px;
    margin: 0 0.8rem;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`;T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(1rem, 3vw, 2rem);
  margin: 2rem 0;
  max-width: 1200px;
  width: 100%;
`;T(R.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: clamp(1.2rem, 3vw, 2rem);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;T.h3`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #FF6B6B;
  margin-bottom: 1rem;
`;T.p`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #666;
  line-height: 1.6;
`;const H_=T(R.button)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1rem, 2vw, 1.2rem);
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 50px;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  cursor: pointer;
  margin-top: clamp(2rem, 4vw, 3rem);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  text-decoration: none;3
  display: inline-block;
`,w0=T(R.section)`
  width: 100%;
  max-width: 1000px;
  margin: clamp(2rem, 5vw, 4rem) 0;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`,Iu=T.h2`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  color: #FF6B6B;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
  text-align: center;
  background: transparent;
`,Y_=T.div`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  
  p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }
`,Fu=T(R(yt))`
  display: inline-block;
  color: #4A90E2;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4A90E2;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,G_=T(R.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: clamp(1.5rem, 4vw, 2rem) 0 clamp(2rem, 6vw, 4rem) 0;
  cursor: pointer;
`,K_=T.span`
  font-family: 'Comic Sans MS', cursive;
  color: #4A90E2;
  margin-bottom: 0.5rem;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
`,X_=T.div`
  width: clamp(15px, 2vw, 20px);
  height: clamp(15px, 2vw, 20px);
  border-right: 3px solid #4A90E2;
  border-bottom: 3px solid #4A90E2;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    40% {
      transform: rotate(45deg) translateY(10px);
    }
    60% {
      transform: rotate(45deg) translateY(5px);
    }
  }
  
  @media (max-width: 768px) {
    border-right: 2px solid #4A90E2;
    border-bottom: 2px solid #4A90E2;
  }
`,Q_=T.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1.5rem, 3vw, 2rem);
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`,J_=T.div`
  flex: 1;
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  
  p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }
`,q_=T(R.div)`
  width: clamp(150px, 25vw, 220px);
  height: clamp(150px, 25vw, 220px);
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  
  @media (max-width: 480px) {
    border-width: 4px;
  }
`,Z_=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,ej=T(R.section)`
  width: 100%;
  max-width: 1000px;
  margin: clamp(2rem, 5vw, 4rem) 0;
  padding: clamp(1.5rem, 3vw, 2rem);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1.5rem, 3vw, 2rem);
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`,tj=T.div`
  width: 100%;
  max-width: 50%;
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  color: #555;
  line-height: 1.8;
  text-align: left;
  order: 1;
  
  p {
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }
  
  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
    order: 2;
  }
`,nj=T(R.img)`
  width: 45%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35); 
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotate(-3deg);
  background: none;
  isolation: isolate;
  position: relative;
  border: none;
  padding: 0;
  display: block;
  order: 2;
  
  @media (min-width: 1600px) {
    max-width: 500px;
  }
  
  @media (max-width: 900px) {
    width: min(450px, 90%);
    margin: 1rem 0 2rem 0;
    order: 1;
  }
  
  @media (max-width: 480px) {
    width: min(350px, 95%);
  }
  
  &:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.45);
  }
`,rj=()=>{const e=E.useRef(null),t=E.useRef(null),n=[{name:"Amazon",logo:I_,url:"https://amazon.com"},{name:"Barnes & Noble",logo:F_,url:"https://www.barnesandnoble.com"},{name:"Walmart",logo:z_,url:"https://www.walmart.com"},{name:"eBay",logo:D_,url:"https://www.ebay.com"},{name:"ThriftBooks",logo:N_,url:"https://www.thriftbooks.com"},{name:"Readings",logo:$_,url:"https://www.readings.com.au"}];E.useEffect(()=>{const i=()=>{if(!e.current)return;e.current.innerHTML="";const o=window.innerWidth>768?25:15,a=window.innerWidth>768?15:8;for(let l=0;l<o;l++)s(cr,"leaf");for(let l=0;l<a;l++)s(jo,"flower");function s(l,u){const c=document.createElement("div"),f=`${Math.random()*100}%`,d=`${Math.random()*15}s`,g=`${Math.random()*15+20}s`,x=Math.random()*.6+.4,v=Math.random()*360,S=20+Math.random()*20;c.style.backgroundImage=`url(${l})`,c.style.left=f,c.style.animationDelay=d,c.classList.add("falling-element",u),c.style.position="absolute",c.style.width=`${S}px`,c.style.height=`${S}px`,c.style.backgroundSize="contain",c.style.backgroundRepeat="no-repeat",c.style.opacity=u==="leaf"?"0.7":"0.8",c.style.animationName="fall, sway",c.style.animationTimingFunction="linear, ease-in-out",c.style.animationDuration=`${g}, 8s`,c.style.animationIterationCount="infinite",c.style.animationDelay=d,c.style.transform=`rotate(${v}deg) scale(${x})`,c.style.transformOrigin="center",c.style.pointerEvents="none",c.style.zIndex="-1",e.current.appendChild(c)}if(!document.querySelector("#falling-elements-keyframes")){const l=document.createElement("style");l.id="falling-elements-keyframes",l.innerHTML=`
          @keyframes fall {
            0% {
              top: -10%;
              transform: rotate(0deg);
            }
            100% {
              top: 110%;
              transform: rotate(360deg);
            }
          }
          
          @keyframes sway {
            0% {
              margin-left: 0px;
            }
            25% {
              margin-left: 50px;
            }
            50% {
              margin-left: -50px;
            }
            75% {
              margin-left: 50px;
            }
            100% {
              margin-left: 0px;
            }
          }
          
          /* Flower specific animation adjustment */
          .flower {
            animation-duration: 28s, 9s !important; /* Slightly different timing for flowers */
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
          }
        `,document.head.appendChild(l)}};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i);const o=document.querySelector("#falling-elements-keyframes");o&&o.remove()}},[]);const r=i=>{window.open(i,"_blank","noopener,noreferrer")};return m.jsxs(m.Fragment,{children:[m.jsx(Jo,{}),m.jsxs(B_,{children:[m.jsx(ta,{ref:e}),m.jsxs(Li,{name:"top",children:[m.jsx(V_,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:"Welcome to Joan E. Calliste's World"}),m.jsx(U_,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Discover enchanting stories and illustrations"}),m.jsx(W_,{ref:t,children:m.jsxs(R.div,{className:"carousel-inner",animate:{x:[0,-1800]},transition:{x:{repeat:1/0,duration:30,ease:"linear"}},children:[n.map((i,o)=>m.jsx(Lu,{src:i.logo,alt:`${i.name} logo`,as:R.img,whileHover:{y:-5},onClick:()=>r(i.url),className:"logo-item"},`${i.name}-${o}`)),n.map((i,o)=>m.jsx(Lu,{src:i.logo,alt:`${i.name} logo`,as:R.img,whileHover:{y:-5},onClick:()=>r(i.url),className:"logo-item"},`${i.name}-dup-${o}`)),n.map((i,o)=>m.jsx(Lu,{src:i.logo,alt:`${i.name} logo`,as:R.img,whileHover:{y:-5},onClick:()=>r(i.url),className:"logo-item"},`${i.name}-dup2-${o}`))]})}),m.jsxs(G_,{as:m1,to:"books",smooth:!0,duration:800,initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},whileHover:{y:5},children:[m.jsx(K_,{children:"Scroll Down"}),m.jsx(X_,{})]})]}),m.jsx(Li,{name:"books",children:m.jsxs(ej,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.3},transition:{duration:.6},children:[m.jsxs(tj,{children:[m.jsx(Iu,{children:"Enchanting Books"}),m.jsx("p",{children:"Dive into a world of imagination with beautifully illustrated children's books that captivate young readers. Each story is crafted with care, designed to inspire creativity, empathy, and a love for reading in children of all ages."}),m.jsx("p",{children:"From magical adventures to heartwarming tales of friendship, my books explore themes that resonate with children while helping them learn important life lessons."}),m.jsx(Fu,{as:yt,to:"/books",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Discover All Books →"})]}),m.jsx(nj,{src:L_,alt:"Book Cover",as:R.img,initial:{opacity:0,y:-30,rotate:-3},whileInView:{opacity:1,y:0,rotate:-3},viewport:{once:!1,amount:.3},transition:{duration:.6,delay:.2},whileHover:{scale:1.05,rotate:0,boxShadow:"0 35px 70px rgba(0, 0, 0, 0.45)"}})]})}),m.jsx(Li,{name:"author",children:m.jsxs(w0,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.3},transition:{duration:.6},children:[m.jsx(Iu,{children:"About the Author"}),m.jsxs(Q_,{children:[m.jsxs(J_,{children:[m.jsx("p",{children:"Joan E. Calliste is a passionate children's book author and illustrator with a unique talent for creating worlds that spark wonder and joy in young readers."}),m.jsx("p",{children:"With a background in early childhood education and a lifelong love of art, Joan creates stories that not only entertain but also help children develop empathy, curiosity, and a deeper understanding of the world around them."}),m.jsx(Fu,{as:yt,to:"/author",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Learn More About Joan →"})]}),m.jsx(q_,{as:R.div,initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!1,amount:.3},transition:{duration:.5},children:m.jsx(Z_,{src:R_,alt:"Joan E. Calliste"})})]})]})}),m.jsx(Li,{name:"gallery",children:m.jsxs(w0,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.3},transition:{duration:.6},children:[m.jsx(Iu,{children:"Gallery"}),m.jsxs(Y_,{children:[m.jsx("p",{children:"Explore a collection of vibrant illustrations that bring stories to life. From whimsical characters to breathtaking landscapes, each artwork is created with attention to detail and a touch of magic."}),m.jsx("p",{children:"The gallery showcases original illustrations from published books as well as exclusive artwork that provides a glimpse into the creative process behind the stories."}),m.jsx(Fu,{as:yt,to:"/gallery",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Full Gallery →"})]})]})}),m.jsx(H_,{as:yt,to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:.8},children:"Get in Touch"})]}),m.jsx(ea,{})," "]})},Cf="/assets/book1-CS6YXTfm.png",ij="/assets/book2-BMu-pv5g.png",oj="/assets/bookfront-B__D2KJN.jpg",aj="/assets/bookfront2-B71Yj2re.jpg",sj=T.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1080px) {
    padding: 5rem 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`,lj=T(R.h1)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.8rem, 5vw, 3rem);
  color: #FF6B6B;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  text-align: center;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;T(R.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;T(R.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;T.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 140%; /* Aspect ratio for book covers */
  overflow: hidden;
`;T.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;T.div`
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;T.h2`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #4A90E2;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;T.p`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;T(R.button)`
  font-family: 'Comic Sans MS', cursive;
  font-size: 1rem;
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: 0 3px 10px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff5252;
    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
  }
`;T(R.div)`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(2rem, 5vw, 3rem);
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    color: #555;
    line-height: 1.8;
    margin-bottom: 1rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;T.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1000px;
`;T(R.button)`
  background: ${e=>e.active?"#FF6B6B":"white"};
  color: ${e=>e.active?"white":"#4A90E2"};
  border: 2px solid ${e=>e.active?"#FF6B6B":"#4A90E2"};
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.active?"#ff5252":"#f0f7ff"};
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;T.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.2rem;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    font-family: 'Comic Sans MS', cursive;
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #4A90E2;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;T.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;T.input`
  flex-grow: 1;
  -webkit-appearance: none;
  height: 8px;
  background: #E0E0E0;
  border-radius: 5px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FF6B6B;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FF6B6B;
    cursor: pointer;
    border: none;
  }
`;T.span`
  font-family: 'Arial', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #555;
  white-space: nowrap;
  padding: 0 0.5rem;
  min-width: 80px;
  text-align: center;
`;const uj=T(R.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`,cj=T(R.div)`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1000px; /* Increased from 900px to 1000px */
  max-height: 90vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1080px) {
    max-width: 95%; /* Slightly increased from 90% to 95% */
  }
  
  @media (max-width: 480px) {
    max-width: 98%; /* Slightly increased from 95% to 98% */
  }
`,fj=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.5rem; /* Increased padding for more space */
  border-bottom: 1px solid #eee;
  
  h2 {
    font-family: 'Comic Sans MS', cursive;
    font-size: clamp(1.5rem, 2.5vw, 2rem); /* Slightly larger font */
    color: #4A90E2;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
  }
`,dj=T.button`
  background: none;
  border: none;
  font-size: 1.8rem; /* Slightly larger */
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #FF6B6B;
  }
`,pj=T.div`
  padding: 2.5rem; /* Increased from 2rem to 2.5rem */
  display: flex;
  gap: 3rem; /* Increased from 2rem to 3rem for more spacing between image and content */
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`,hj=T.div`
  flex: 0 0 300px; /* Increased from 250px to 300px for larger image */
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    max-width: 240px; /* Increased from 200px to 240px */
    margin: 0 auto;
  }
`,mj=T.div`
  flex: 1;
  
  h3 {
    font-family: 'Comic Sans MS', cursive;
    font-size: clamp(1.3rem, 2vw, 1.6rem);
    color: #FF6B6B;
    margin-bottom: 1.2rem; /* Slightly increased */
    margin-top: 1.5rem; /* Added margin-top for section spacing */
  }
  
  h3:first-child {
    margin-top: 0; /* Remove top margin from first heading */
  }
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.1rem); /* Slightly larger font */
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }
  
  ul {
    margin: 1.2rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.7rem; /* Slightly increased */
      font-family: 'Arial', sans-serif;
      font-size: clamp(1rem, 1.5vw, 1.1rem); /* Slightly larger font */
      color: #555;
      line-height: 1.6;
    }
  }
`,gj=T(R.a)`
  display: inline-block;
  background: #FF6B6B;
  color: white;
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1rem, 1.5vw, 1.2rem); /* Slightly larger */
  text-decoration: none;
  padding: 1rem 2rem; /* Increased from 0.8rem 1.5rem to 1rem 2rem */
  border-radius: 50px;
  margin-top: 1.5rem; /* Increased from 1rem */
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff5252;
    box-shadow: 0 5px 20px rgba(255, 107, 107, 0.5);
  }
`,yj=()=>{const e=[{id:1,title:"Love for the Children",coverImage:Cf,modalImage:oj,description:"Join Lucy on a magical adventure through enchanted forests and mystical lands.",ageRange:"5-9",category:"faith-based",details:{fullDescription:`This book was written to help children in their character development. They would learn the joy of kindness, obedience, honesty, and maintain a healthy self-image.

"You can do all things through Christ who strengthens you."`,publisher:"Covenant Books, Inc.",publishDate:"April 12, 2021",format:"Available in paperback and eBook",pages:58,dimensions:"229 x 152 x 4 mm (9 x 6 x 0.16 inches)",weight:"Approximately 118 g",isbn_paperback:"9781636304533",isbn_ebook:"9781636304540",features:["Character Development Focus: Teaches children the values of kindness, obedience, honesty, and maintaining a healthy self-image.",'Inspirational Message: Emphasizes the empowering belief: "You can do all things through Christ who strengthens you."',"Faith-Based Content: Integrates Christian principles to support moral and spiritual growth.","Child-Friendly Format: Designed for young readers with accessible language and length.","Digital Accessibility: Available as an eBook with features like read-aloud and offline access for flexible reading options."]},comingSoon:!1,amazonLink:"https://www.amazon.com/Love-Children-Joan-Calliste-ebook/dp/B096NKG9DS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xQDWPdvVJrqP8lnWxotWvA.4E5sabOre79CK9JG3xriB77YCTzUvv-bqCpvlQTu08A&dib_tag=se&qid=1747693172&refinements=p_27%3AJoan+E+Calliste&s=books&sr=1-1&text=Joan+E+Calliste"},{id:2,title:"Never Too Late",coverImage:ij,modalImage:aj,description:"A new journey of faith and discovery coming soon.",ageRange:"6-10",category:"faith-based",comingSoon:!0,releaseDate:"Fall 2025",details:{fullDescription:"We're excited to announce our upcoming title that will take children on another faith-filled adventure. Stay tuned for more information as we get closer to the release date."}}],[t,n]=E.useState(null),r=E.useRef(null),i=a=>{n(a),document.body.style.overflow="hidden"},o=()=>{n(null),document.body.style.overflow="auto"};return E.useEffect(()=>{const a=()=>{if(!r.current)return;r.current.innerHTML="";const s=window.innerWidth>768?25:15,l=window.innerWidth>768?15:8;for(let c=0;c<s;c++)u(cr,"leaf");for(let c=0;c<l;c++)u(jo,"flower");function u(c,f){const d=document.createElement("div"),g=`${Math.random()*100}%`,x=`${Math.random()*15}s`,v=`${Math.random()*15+20}s`,S=Math.random()*.6+.4,p=Math.random()*360,h=20+Math.random()*20;d.style.backgroundImage=`url(${c})`,d.style.left=g,d.style.animationDelay=x,d.classList.add("falling-element",f),d.style.position="absolute",d.style.width=`${h}px`,d.style.height=`${h}px`,d.style.backgroundSize="contain",d.style.backgroundRepeat="no-repeat",d.style.opacity=f==="leaf"?"0.7":"0.8",d.style.animationName="fall, sway",d.style.animationTimingFunction="linear, ease-in-out",d.style.animationDuration=`${v}, 8s`,d.style.animationIterationCount="infinite",d.style.animationDelay=x,d.style.transform=`rotate(${p}deg) scale(${S})`,d.style.transformOrigin="center",d.style.pointerEvents="none",d.style.zIndex="-1",r.current.appendChild(d)}if(!document.querySelector("#falling-elements-keyframes")){const c=document.createElement("style");c.id="falling-elements-keyframes",c.innerHTML=`
          @keyframes fall {
            0% {
              top: -10%;
              transform: rotate(0deg);
            }
            100% {
              top: 110%;
              transform: rotate(360deg);
            }
          }
          
          @keyframes sway {
            0% {
              margin-left: 0px;
            }
            25% {
              margin-left: 50px;
            }
            50% {
              margin-left: -50px;
            }
            75% {
              margin-left: 50px;
            }
            100% {
              margin-left: 0px;
            }
          }
          
          /* Flower specific animation adjustment */
          .flower {
            animation-duration: 28s, 9s !important; /* Slightly different timing for flowers */
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
          }
        `,document.head.appendChild(c)}};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a);const s=document.querySelector("#falling-elements-keyframes");s&&s.remove()}},[]),m.jsxs(m.Fragment,{children:[m.jsx(Jo,{}),m.jsxs(sj,{children:[m.jsx(ta,{ref:r}),m.jsx(lj,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Featured Books"}),m.jsxs("div",{style:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"40px",padding:"20px 0"},children:[m.jsx(R.div,{style:{width:"380px",display:"flex",justifyContent:"center",alignItems:"center",margin:"2rem 0",minHeight:"50vh"},children:m.jsx(R.img,{src:e[0].coverImage,alt:e[0].title,onClick:()=>i(e[0]),style:{width:"320px",maxWidth:"90%",height:"auto",borderRadius:"12px",boxShadow:"0 25px 40px rgba(0, 0, 0, 0.35)",transform:"rotate(-3deg)",transformStyle:"preserve-3d",cursor:"pointer"},whileHover:{y:-20,rotate:0,scale:1.08,filter:"drop-shadow(0 30px 40px rgba(0, 0, 0, 0.45))"},initial:{opacity:0,y:30,rotate:-3},animate:{opacity:1,y:[0,-12,0],rotate:-3,transition:{opacity:{duration:.5},y:{duration:3.5,repeat:1/0,ease:"easeInOut"},rotate:{duration:.5}}},whileTap:{scale:.97}})}),m.jsx(R.div,{style:{width:"380px",display:"flex",justifyContent:"center",alignItems:"center",margin:"2rem 0",minHeight:"50vh",position:"relative"},children:m.jsxs(R.div,{style:{position:"relative"},whileHover:{y:-20,rotate:0,scale:1.08,filter:"drop-shadow(0 30px 40px rgba(0, 0, 0, 0.45))"},initial:{opacity:0,y:30,rotate:3},animate:{opacity:1,y:[0,-10,0],rotate:3,transition:{opacity:{duration:.5,delay:.2},y:{duration:3,repeat:1/0,ease:"easeInOut"},rotate:{duration:.5}}},whileTap:{scale:.97},children:[m.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.7,duration:.5},style:{position:"absolute",top:"2%",left:"50%",transform:"translateX(-50%)",background:"#FF6B6B",color:"white",padding:"3px 12px",borderRadius:"4px",fontFamily:"Comic Sans MS, cursive",fontSize:"0.7rem",fontWeight:"bold",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.2)",zIndex:2,textAlign:"center",pointerEvents:"none",textTransform:"uppercase",letterSpacing:"0.3px",minWidth:"80px",width:"auto",maxWidth:"60%"},children:"Coming Soon"}),m.jsx(R.img,{src:e[1].coverImage,alt:e[1].title,onClick:()=>i(e[1]),style:{width:"320px",maxWidth:"90%",height:"auto",borderRadius:"12px",boxShadow:"0 25px 40px rgba(0, 0, 0, 0.35)",cursor:"pointer",transformStyle:"preserve-3d"}})]})})]}),m.jsx(Ld,{children:t&&m.jsx(uj,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:o,children:m.jsxs(cj,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},transition:{type:"spring",damping:25},onClick:a=>a.stopPropagation(),children:[m.jsxs(fj,{children:[m.jsx("h2",{children:t.title}),m.jsx(dj,{onClick:o,children:"×"})]}),m.jsxs(pj,{children:[m.jsx(hj,{children:m.jsx("img",{src:t.modalImage,alt:t.title})}),m.jsx(mj,{children:t.comingSoon?m.jsxs(m.Fragment,{children:[m.jsx(R.h3,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.3},style:{fontSize:"1.8rem",color:"#FF6B6B",marginBottom:"1.5rem"},children:"Coming Soon!"}),m.jsx(R.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:t.details.fullDescription}),t.releaseDate&&m.jsxs(R.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.7},style:{marginTop:"2rem",padding:"1rem 1.5rem",borderRadius:"10px",background:"rgba(74, 144, 226, 0.1)",display:"inline-block"},children:[m.jsx("h4",{style:{margin:"0 0 0.5rem",color:"#4A90E2"},children:"Expected Release:"}),m.jsx("p",{style:{margin:0,fontWeight:"bold",fontSize:"1.2rem"},children:t.releaseDate})]}),m.jsx(R.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.9},style:{marginTop:"2rem"},children:m.jsx("p",{children:"Want to be notified when this book becomes available? Subscribe to our newsletter to receive updates."})})]}):m.jsxs(m.Fragment,{children:[m.jsx("h3",{children:"About This Book"}),m.jsx("p",{children:t.details.fullDescription.split(`

`).map((a,s)=>a.includes('"')?m.jsx("em",{style:{display:"block",marginTop:"1rem",fontStyle:"italic"},children:a},s):m.jsx("span",{children:a},s))}),m.jsx("h3",{children:"Book Details"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("strong",{children:"Publisher:"})," ",t.details.publisher]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Publication Date:"})," ",t.details.publishDate]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Format:"})," ",t.details.format]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Age Range:"})," ",t.ageRange," years (eBook)"]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Pages:"})," ",t.details.pages]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Dimensions:"})," ",t.details.dimensions]}),m.jsxs("li",{children:[m.jsx("strong",{children:"Weight:"})," ",t.details.weight]}),m.jsxs("li",{children:[m.jsx("strong",{children:"ISBN (Paperback):"})," ",t.details.isbn_paperback]}),m.jsxs("li",{children:[m.jsx("strong",{children:"ISBN (eBook):"})," ",t.details.isbn_ebook]})]}),m.jsx("h3",{children:"Special Features"}),m.jsx("ul",{children:t.details.features.map((a,s)=>m.jsx("li",{children:a},s))}),m.jsx(gj,{href:t.amazonLink,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Purchase on Amazon"})]})})]})]})})})]}),m.jsx(ea,{})]})},vj="/assets/author-RqzG5odm.jpg",xj=T.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1080px) {
    padding: 5rem 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`,wj=T(R.h1)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.8rem, 5vw, 3rem);
  color: #FF6B6B;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  text-align: center;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,Sj=T.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  gap: 3rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`,bj=T(R.section)`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,kj=T(R.div)`
  flex: 0 0 40%;
  max-width: 400px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 300px;
  }
`,Ej=T(R.div)`
  flex: 1;
  
  h2 {
    font-family: 'Comic Sans MS', cursive;
    color: #4A90E2;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  
  p {
    font-family: 'Arial', sans-serif;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    color: #444;
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    text-align: center;
    
    h2 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`,Cj=T(R.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: default;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.05) 0%,
      rgba(74, 144, 226, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  blockquote {
    font-family: 'Comic Sans MS', cursive;
    font-style: italic;
    color: #FF6B6B;
    font-size: 1.3rem;
    line-height: 1.7;
    margin: 0;
    transition: transform 0.4s ease, color 0.4s ease;
    position: relative;
    z-index: 1;
  }
  
  cite {
    display: block;
    margin-top: 1rem;
    font-family: 'Arial', sans-serif;
    font-style: normal;
    color: #4A90E2;
    font-weight: bold;
    transition: color 0.4s ease;
    position: relative;
    z-index: 1;
  }
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border: 2px solid;
    border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #FF6B6B) 1;
    animation: quoteBorderAnimation 4s linear infinite;
    
    &::before {
      opacity: 1;
      animation: quoteGradientShift 4s ease infinite alternate;
    }
    
    blockquote {
      transform: scale(1.02);
      animation: quoteColorChange 6s infinite alternate;
    }
    
    cite {
      animation: citeColorChange 6s infinite alternate;
    }
  }
  
  @keyframes quoteBorderAnimation {
    0% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #FF6B6B) 1;
    }
    50% {
      border-image: linear-gradient(to right, #4A90E2, #FF6B6B, #4A90E2) 1;
    }
    100% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #FF6B6B) 1;
    }
  }
  
  @keyframes quoteGradientShift {
    0% {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%);
    }
    50% {
      background: linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(255, 107, 107, 0.05) 100%);
    }
    100% {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(74, 144, 226, 0.05) 100%);
    }
  }
  
  @keyframes quoteColorChange {
    0% { color: #FF6B6B; }
    50% { color: #FF8E8E; }
    75% { color: #FF6B6B; }
    100% { color: #E45858; }
  }
  
  @keyframes citeColorChange {
    0% { color: #4A90E2; }
    50% { color: #5DA0F2; }
    75% { color: #4A90E2; }
    100% { color: #3A80D2; }
  }
`,Pj=T(R.section)`
  h2 {
    font-family: 'Comic Sans MS', cursive;
    color: #4A90E2;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    text-align: center;
  }
`,Tj=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`,La=T(R.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  border: 3px solid transparent;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 107, 0.1) 0%,
      rgba(74, 144, 226, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }
  
  /* Add floating stars/sparkles effect on hover */
  &::after {
    content: '✨';
    position: absolute;
    font-size: 1.2rem;
    opacity: 0;
    transition: all 0.5s ease;
    pointer-events: none;
  }
  
  h3 {
    font-family: 'Comic Sans MS', cursive;
    color: #FF6B6B;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    transition: transform 0.3s ease, color 0.3s ease;
    position: relative;
    display: inline-block;
  }
  
  /* Decorative underline for heading on hover */
  h3::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #FF6B6B, #4A90E2);
    transition: width 0.4s ease;
  }
  
  p {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #444;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative;
  }
  
  /* Add multiple decorative elements that only show on hover */
  .decoration {
    position: absolute;
    opacity: 0;
    transition: all 0.6s ease;
    pointer-events: none;
  }
  
  .decoration-1 {
    top: 10%;
    right: 5%;
    color: #FF6B6B;
    font-size: 1.4rem;
  }
  
  .decoration-2 {
    bottom: 15%;
    left: 8%;
    color: #4A90E2;
    font-size: 1.2rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 3px solid;
    border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #8A2BE2, #FF6B6B) 1;
    animation: borderAnimation 3s linear infinite;
    
    &::before {
      opacity: 1;
      animation: gradientShift 3s ease infinite alternate;
    }
    
    &::after {
      content: '✨';
      opacity: 1;
      animation: sparkleFloat 3s ease-in-out infinite;
    }
    
    h3 {
      transform: scale(1.05);
      animation: colorChange 4s infinite alternate;
      
      /* Show underline animation on hover */
      &::after {
        width: 100%;
      }
    }
    
    p {
      color: #333;
      transform: translateY(-2px);
    }
    
    .decoration {
      opacity: 1;
    }
    
    .decoration-1 {
      animation: float1 3s ease-in-out infinite;
    }
    
    .decoration-2 {
      animation: float2 4s ease-in-out infinite;
    }
  }
  
  @keyframes borderAnimation {
    0% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #8A2BE2, #FF6B6B) 1;
    }
    25% {
      border-image: linear-gradient(to right, #4A90E2, #8A2BE2, #FF6B6B, #4A90E2) 1;
    }
    50% {
      border-image: linear-gradient(to right, #8A2BE2, #FF6B6B, #4A90E2, #8A2BE2) 1;
    }
    75% {
      border-image: linear-gradient(to right, #FF6B6B, #4A90E2, #8A2BE2, #FF6B6B) 1;
    }
    100% {
      border-image: linear-gradient(to right, #4A90E2, #8A2BE2, #FF6B6B, #4A90E2) 1;
    }
  }
  
  @keyframes gradientShift {
    0% {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(74, 144, 226, 0.1) 100%);
    }
    50% {
      background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
    }
    100% {
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%);
    }
  }
  
  @keyframes colorChange {
    0% { color: #FF6B6B; }
    33% { color: #4A90E2; }
    66% { color: #8A2BE2; }
    100% { color: #FF6B6B; }
  }
  
  @keyframes sparkleFloat {
    0% { top: 10%; left: 10%; }
    25% { top: 15%; left: 30%; }
    50% { top: 25%; left: 15%; }
    75% { top: 20%; left: 25%; }
    100% { top: 10%; left: 10%; }
  }
  
  @keyframes float1 {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes float2 {
    0%, 100% { transform: translateY(0) rotate(5deg); }
    50% { transform: translateY(-8px) rotate(-5deg); }
  }
`,Aj=()=>{const e=E.useRef(null);return bt.useEffect(()=>{const t=()=>{if(!e.current)return;e.current.innerHTML="";const n=window.innerWidth>768?25:15,r=window.innerWidth>768?15:8;for(let o=0;o<n;o++)i(cr,"leaf");for(let o=0;o<r;o++)i(jo,"flower");function i(o,a){const s=document.createElement("div"),l=`${Math.random()*100}%`,u=`${Math.random()*15}s`,c=`${Math.random()*15+20}s`,f=Math.random()*.6+.4,d=Math.random()*360,g=20+Math.random()*20;s.style.backgroundImage=`url(${o})`,s.style.left=l,s.style.animationDelay=u,s.classList.add("falling-element",a),s.style.position="absolute",s.style.width=`${g}px`,s.style.height=`${g}px`,s.style.backgroundSize="contain",s.style.backgroundRepeat="no-repeat",s.style.opacity=a==="leaf"?"0.7":"0.8",s.style.animationName="fall, sway",s.style.animationTimingFunction="linear, ease-in-out",s.style.animationDuration=`${c}, 8s`,s.style.animationIterationCount="infinite",s.style.animationDelay=u,s.style.transform=`rotate(${d}deg) scale(${f})`,s.style.transformOrigin="center",s.style.pointerEvents="none",s.style.zIndex="-1",e.current.appendChild(s)}if(!document.querySelector("#falling-elements-keyframes")){const o=document.createElement("style");o.id="falling-elements-keyframes",o.innerHTML=`
          @keyframes fall {
            0% {
              top: -10%;
              transform: rotate(0deg);
            }
            100% {
              top: 110%;
              transform: rotate(360deg);
            }
          }
          
          @keyframes sway {
            0% {
              margin-left: 0px;
            }
            25% {
              margin-left: 50px;
            }
            50% {
              margin-left: -50px;
            }
            75% {
              margin-left: 50px;
            }
            100% {
              margin-left: 0px;
            }
          }
          
          /* Flower specific animation adjustment */
          .flower {
            animation-duration: 28s, 9s !important; /* Slightly different timing for flowers */
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
          }
        `,document.head.appendChild(o)}};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t);const n=document.querySelector("#falling-elements-keyframes");n&&n.remove()}},[]),m.jsxs(m.Fragment,{children:[m.jsx(Jo,{}),m.jsxs(xj,{children:[m.jsx(ta,{ref:e}),m.jsx(wj,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:"About the Author"}),m.jsxs(Sj,{children:[m.jsxs(bj,{children:[m.jsx(kj,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8},children:m.jsx("img",{src:vj,alt:"Joan E. Calliste"})}),m.jsxs(Ej,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},children:[m.jsx("h2",{children:"Joan E. Calliste"}),m.jsx("p",{children:"My name is Joan E Calliste. I'm from Trinidad and Tobago. I'm the first of eight siblings and also a Seventh Day Adventist. It was in church during the children's hours where my storytelling journey began."}),m.jsx("p",{children:"After telling stories for a while, I decided to try writing. I had no idea what I was getting into, and now I'm enjoying writing and telling stories. The name of my book reflects my love for children, which is part of my joy."}),m.jsx("p",{children:"My hope is that after reading the book, it will help to shape children's character in the future. Through my stories, I aim to inspire young minds and instill positive values that will stay with them as they grow."})]})]}),m.jsxs(Cj,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[m.jsx("blockquote",{children:'"My love for children inspires my writing. Through storytelling, I hope to shape their character and bring joy to their lives."'}),m.jsx("cite",{children:"- Joan E. Calliste"})]}),m.jsxs(Pj,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[m.jsx("h2",{children:"Beyond Writing"}),m.jsxs(Tj,{children:[m.jsxs(La,{whileHover:{y:-10},transition:{type:"spring",stiffness:300},children:[m.jsx("span",{className:"decoration decoration-1",children:"★"}),m.jsx("span",{className:"decoration decoration-2",children:"✿"}),m.jsx("h3",{children:"Trinidad and Tobago Heritage"}),m.jsx("p",{children:"Born and raised in Trinidad and Tobago, Joan brings the rich cultural heritage and storytelling traditions of the Caribbean islands to her writing, infusing her stories with warmth and vibrant imagery."})]}),m.jsxs(La,{whileHover:{y:-10},transition:{type:"spring",stiffness:300},children:[m.jsx("span",{className:"decoration decoration-1",children:"♫"}),m.jsx("span",{className:"decoration decoration-2",children:"✧"}),m.jsx("h3",{children:"Faith Journey"}),m.jsx("p",{children:"As a devoted Seventh Day Adventist, Joan's faith forms an essential foundation of her storytelling. Her church experiences with children's hours developed her natural talent for engaging young minds through meaningful stories."})]}),m.jsxs(La,{whileHover:{y:-10},transition:{type:"spring",stiffness:300},children:[m.jsx("span",{className:"decoration decoration-1",children:"♥"}),m.jsx("span",{className:"decoration decoration-2",children:"❀"}),m.jsx("h3",{children:"Family Values"}),m.jsx("p",{children:"Being the first of eight siblings, Joan understands the importance of family bonds and sibling relationships. These experiences shape her approach to writing stories that emphasize love, respect, and cooperation."})]}),m.jsxs(La,{whileHover:{y:-10},transition:{type:"spring",stiffness:300},children:[m.jsx("span",{className:"decoration decoration-1",children:"✦"}),m.jsx("span",{className:"decoration decoration-2",children:"♪"}),m.jsx("h3",{children:"Character Development"}),m.jsx("p",{children:"Joan believes that childhood is when character is formed. Her writing focuses on helping children develop positive traits like kindness, honesty, and perseverance that will serve them throughout their lives."})]})]})]})]})]}),m.jsx(ea,{})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _j={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},jj={prefix:"fas",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Oj={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Mj={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Rj=Mj,Lj={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Ij={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Fj={prefix:"fas",iconName:"book-open",icon:[576,512,[128214,128366],"f518","M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"]},Dj={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},Nj=T.div`
  max-width: 1200px;
  margin: 100px auto 2rem;
  padding: 0 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  position: relative;
  overflow: hidden;
  z-index: 1;
`,zj=T.h1`
  font-family: 'Comic Sans MS', cursive;
  color: #FF6B6B;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`,$j=T.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
`,Bj=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Vj=T(R.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  aspect-ratio: 3/4;
  
  &:hover img {
    transform: scale(1.05);
  }
`,Uj=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`,Wj=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Hj=T.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`,Yj=T.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border: 2px solid white;
`,Gj=T.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`,Kj=T.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
`,S0=T.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`,Xj=T.div`
  color: white;
  padding: 1rem 0;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
`,Qj=T.div`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`,Jj=T.button`
  background: ${e=>e.$active?"#FF6B6B":"#e0e0e0"};
  color: ${e=>e.$active?"white":"#666"};
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.$active?"#FF6B6B":"#d0d0d0"};
  }
`,qj=`
  @keyframes fall {
    0% {
      top: -10%;
      transform: rotate(0deg);
    }
    100% {
      top: 110%;
      transform: rotate(360deg);
    }
  }
  
  @keyframes sway {
    0% {
      margin-left: 0px;
    }
    25% {
      margin-left: 50px;
    }
    50% {
      margin-left: -50px;
    }
    75% {
      margin-left: 50px;
    }
    100% {
      margin-left: 0px;
    }
  }
  
  /* Flower specific animation adjustment */
  .flower {
    animation-duration: 28s, 9s !important;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  }
`;if(typeof document<"u"&&!document.querySelector("#falling-elements-keyframes")){const e=document.createElement("style");e.id="falling-elements-keyframes",e.innerHTML=qj,document.head.appendChild(e)}const Zj=()=>{const e=[];for(let t=0;t<32;t++){const r={type:t%3===0?"flower":"leaf",positionX:`${Math.random()*100}%`,startPosition:Math.random()*100,delay:`${Math.random()*2}s`,fallDuration:`${Math.random()*15+20}s`,scale:Math.random()*.6+.4,rotation:Math.random()*360,size:20+Math.random()*20};e.push(r)}return e},eO=Zj(),tO=()=>{const[e,t]=E.useState(!1),[n,r]=E.useState(0),[i,o]=E.useState(1),a=6,s=E.useRef(null),l=E.useRef(!1),u=[{src:"/src/image/gallery1.jpg",alt:"Joan Calliste at a book signing event",caption:"Joan Calliste greeting fans at her book signing event in New York, 2024."},{src:"/src/image/gallery2.jpg",alt:"Joan Calliste giving a speech",caption:"Joan Calliste speaking at the International Writers Conference, 2023."},{src:"/src/image/gallery3.jpg",alt:"Joan Calliste in her writing studio",caption:"A glimpse into Joan's creative space where her stories come to life."},{src:"/src/image/gallery4.jpg",alt:"Joan Calliste with her award-winning book",caption:'Joan receiving the Literary Excellence Award for her novel "Whispers of Tomorrow".'},{src:"/src/image/gallery5.jpg",alt:"Joan Calliste reading to children",caption:"Joan reading passages from her children's book at a local elementary school."},{src:"/src/image/gallery6.jpg",alt:"Joan Calliste with other authors",caption:"Joan with fellow authors at the Annual Publishers' Gala, 2024."},{src:"/src/image/gallery7.jpg",alt:"Joan Calliste during an interview",caption:"Joan during her interview with Literary Today magazine."},{src:"/src/image/gallery1.jpg",alt:"Joan Calliste signing books",caption:"Fans lining up to get their books signed by Joan at Barnes & Noble."},{src:"/src/image/gallery2.jpg",alt:"Joan Calliste at a charity event",caption:"Joan supporting literacy programs at a charity fundraiser."},{src:"/src/image/gallery3.jpg",alt:"Joan Calliste in her garden",caption:"Joan finding inspiration in her beautiful garden."},{src:"/src/image/gallery4.jpg",alt:"Joan Calliste teaching a workshop",caption:"Joan leading a creative writing workshop for aspiring authors."},{src:"/src/image/gallery5.jpg",alt:"Joan Calliste traveling",caption:"Joan exploring new cultures for inspiration on her world travels."}],c=Math.ceil(u.length/a),f=i*a,d=f-a,g=u.slice(d,f),x=(k,C)=>{if(!s.current)return;const P=document.createElement("div");P.classList.add("falling-element",C.type),P.style.cssText=`
      position: absolute;
      left: ${C.positionX};
      top: ${C.startPosition}%;
      width: ${C.size}px;
      height: ${C.size}px;
      background-image: url(${k});
      background-size: contain;
      background-repeat: no-repeat;
      opacity: ${C.type==="leaf"?"0.7":"0.8"};
      animation-name: fall, sway;
      animation-timing-function: linear, ease-in-out;
      animation-duration: ${C.fallDuration}, 8s;
      animation-iteration-count: infinite;
      animation-delay: ${C.delay};
      transform: rotate(${C.rotation}deg) scale(${C.scale});
      transform-origin: center;
      pointer-events: none;
      z-index: -1;
    `,s.current.appendChild(P)},v=()=>{s.current&&(s.current.innerHTML="",eO.forEach(k=>{const C=k.type==="flower"?jo:cr;x(C,k)}),l.current=!0)},S=E.useRef(null);E.useEffect(()=>(l.current||(S.current=requestAnimationFrame(()=>{v(),setInterval(()=>{if(s.current){const k=Math.random()>.7,C={type:k?"flower":"leaf",positionX:`${Math.random()*100}%`,startPosition:-10,delay:"0s",fallDuration:`${Math.random()*15+20}s`,scale:Math.random()*.6+.4,rotation:Math.random()*360,size:20+Math.random()*20};x(k?jo:cr,C),s.current.children.length>50&&s.current.removeChild(s.current.firstChild)}},2e3)})),()=>{S.current&&cancelAnimationFrame(S.current)}),[]),E.useEffect(()=>{const k=()=>{l.current&&v()};return window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k)}},[]);const p=k=>{r(k+d),t(!0),document.body.style.overflow="hidden"},h=()=>{t(!1),document.body.style.overflow="auto"},y=()=>{r(k=>k===0?u.length-1:k-1)},w=()=>{r(k=>k===u.length-1?0:k+1)},b=k=>o(k);return E.useEffect(()=>{const k=C=>{if(e)switch(C.key){case"ArrowLeft":y();break;case"ArrowRight":w();break;case"Escape":h();break}};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[e]),m.jsxs(m.Fragment,{children:[m.jsx(Jo,{}),m.jsxs(Nj,{children:[m.jsx(ta,{ref:s}),m.jsx(zj,{children:"Joan Calliste Gallery"}),m.jsx($j,{children:"Welcome to our gallery showcasing moments from Joan E. Calliste's journey as an author. From book signings and speaking engagements to quiet moments of inspiration, these images capture the essence of Joan's dedication to storytelling."}),m.jsx(Bj,{children:g.map((k,C)=>m.jsx(Vj,{onClick:()=>p(C),whileHover:{y:-5},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:C*.1},children:m.jsx(Uj,{src:k.src,alt:k.alt,loading:"lazy"})},C))}),c>1&&m.jsx(Qj,{children:Array.from({length:c},(k,C)=>m.jsx(Jj,{$active:i===C+1,onClick:()=>b(C+1),children:C+1},C))})]}),e&&m.jsx(Wj,{onClick:h,children:m.jsxs(Hj,{onClick:k=>k.stopPropagation(),children:[m.jsx(Gj,{onClick:h,children:m.jsx(vt,{icon:Rj})}),m.jsx(Yj,{src:u[n].src,alt:u[n].alt}),m.jsxs(Kj,{children:[m.jsx(S0,{onClick:y,children:m.jsx(vt,{icon:Lj})}),m.jsx(S0,{onClick:w,children:m.jsx(vt,{icon:Ij})})]}),m.jsx(Xj,{children:u[n].caption})]})}),m.jsx(ea,{})]})},nO=T.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 229, 229, 0.8) 0%, rgba(229, 249, 255, 0.8) 100%);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1080px) {
    padding: 5rem 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`,rO=T(R.h1)`
  font-family: 'Comic Sans MS', cursive;
  font-size: clamp(1.8rem, 5vw, 3rem);
  color: #FF6B6B;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  text-align: center;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`,iO=T.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`,oO=T(R.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  
  h2 {
    font-family: 'Comic Sans MS', cursive;
    color: #4A90E2;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    font-family: 'Arial', sans-serif;
    line-height: 1.7;
    color: #444;
    font-size: 1.05rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
    
    h2 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`,aO=T(R.div)`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  
  /* Add decorative elements */
  &::before {
    content: "✉️";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    opacity: 0.15;
    transform: rotate(-15deg);
  }
  
  &::after {
    content: "📝";
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    opacity: 0.15;
    transform: rotate(15deg);
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,sO=T.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,Ia=T.div`
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:focus-within label {
    color: #4A90E2;
    transform: translateY(-12px) scale(0.9);
  }
`,Fa=T.label`
  font-family: 'Comic Sans MS', cursive;
  color: #666;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #FF6B6B;
  }
  
  span {
    color: #FF6B6B;
    margin-left: 0.25rem;
  }
`,Du=T.input`
  font-family: 'Arial', sans-serif;
  padding: 0.8rem 1rem;
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:hover {
    border-color: rgba(74, 144, 226, 0.5);
  }
`,lO=T.textarea`
  font-family: 'Arial', sans-serif;
  padding: 0.8rem 1rem;
  border: 2px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4A90E2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:hover {
    border-color: rgba(74, 144, 226, 0.5);
  }
`,uO=T(R.button)`
  background: linear-gradient(to right, #FF6B6B, #FF8E8E);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  font-family: 'Comic Sans MS', cursive;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  /* Rainbow shimmer effect on hover */
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.1) 50%, 
      rgba(255,255,255,0) 100%);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  &:hover:not(:disabled):before {
    animation: shimmer 1.5s infinite;
    opacity: 1;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`,cO=T(R.div)`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-family: 'Comic Sans MS', cursive;
  
  &.success {
    background-color: rgba(75, 181, 67, 0.2);
    color: #2c741c;
    border: 1px solid rgba(75, 181, 67, 0.4);
  }
  
  &.error {
    background-color: rgba(255, 107, 107, 0.2);
    color: #d32f2f;
    border: 1px solid rgba(255, 107, 107, 0.4);
  }
`,Jw=T(R.img)`
  position: absolute;
  opacity: 0.15;
  pointer-events: none;
  z-index: -1;
`,fO=T(Jw)`
  left: 2%;
  bottom: 10%;
  width: 180px;
  max-width: 20%;
  transform: rotate(-15deg);
`,dO=T(Jw)`
  right: 2%;
  top: 15%;
  width: 150px;
  max-width: 20%;
  transform: rotate(10deg);
`,pO=T.div`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-left: 0.5rem;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,hO=()=>{const[e,t]=E.useState({name:"",email:"",subject:"",message:""}),[n,r]=E.useState({submitted:!1,success:!1,message:"",loading:!1}),i=E.useRef(),o=E.useRef(null);bt.useEffect(()=>{const u=()=>{if(!o.current)return;o.current.innerHTML="";const c=window.innerWidth>768?25:15,f=window.innerWidth>768?15:8;for(let g=0;g<c;g++)d(cr,"leaf");for(let g=0;g<f;g++)d(Cf,"flower");function d(g,x){const v=document.createElement("div"),S=`${Math.random()*100}%`,p=`${Math.random()*15}s`,h=`${Math.random()*15+20}s`,y=Math.random()*.6+.4,w=Math.random()*360,b=20+Math.random()*20;v.style.backgroundImage=`url(${g})`,v.style.left=S,v.style.animationDelay=p,v.classList.add("falling-element",x),v.style.position="absolute",v.style.width=`${b}px`,v.style.height=`${b}px`,v.style.backgroundSize="contain",v.style.backgroundRepeat="no-repeat",v.style.opacity=x==="leaf"?"0.7":"0.8",v.style.animationName="fall, sway",v.style.animationTimingFunction="linear, ease-in-out",v.style.animationDuration=`${h}, 8s`,v.style.animationIterationCount="infinite",v.style.animationDelay=p,v.style.transform=`rotate(${w}deg) scale(${y})`,v.style.transformOrigin="center",v.style.pointerEvents="none",v.style.zIndex="-1",o.current.appendChild(v)}if(!document.querySelector("#falling-elements-keyframes")){const g=document.createElement("style");g.id="falling-elements-keyframes",g.innerHTML=`
          @keyframes fall {
            0% {
              top: -10%;
              transform: rotate(0deg);
            }
            100% {
              top: 110%;
              transform: rotate(360deg);
            }
          }
          
          @keyframes sway {
            0% {
              margin-left: 0px;
            }
            25% {
              margin-left: 50px;
            }
            50% {
              margin-left: -50px;
            }
            75% {
              margin-left: 50px;
            }
            100% {
              margin-left: 0px;
            }
          }
          
          /* Flower specific animation adjustment */
          .flower {
            animation-duration: 28s, 9s !important; /* Slightly different timing for flowers */
            filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
          }
        `,document.head.appendChild(g)}};return u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u);const c=document.querySelector("#falling-elements-keyframes");c&&c.remove()}},[]);const a=u=>{t({...e,[u.target.name]:u.target.value})},s=u=>{if(u.preventDefault(),!l())return;r({loading:!0,submitted:!0,message:"Opening your email client..."});const c=e.subject||`Message from ${e.name} via website`,f=`
Name: ${e.name}
Email: ${e.email}

Message:
${e.message}
    `,d=`mailto:spicyjoan@gmail.com?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(f)}`;window.location.href=d,setTimeout(()=>{r({loading:!1,submitted:!0,success:!0,message:"Email client opened! Please send the email to contact Joan directly."}),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>{r({submitted:!1,success:!1,message:"",loading:!1})},8e3)},1e3)},l=()=>e.name.trim()!==""&&e.email.trim()!==""&&e.message.trim()!=="";return m.jsxs(m.Fragment,{children:[m.jsx(Jo,{}),m.jsxs(nO,{children:[m.jsx(ta,{ref:o}),m.jsx(fO,{src:Cf,alt:"",initial:{opacity:0,x:-50},animate:{opacity:.15,x:0},transition:{duration:1}}),m.jsx(dO,{src:cr,alt:"",initial:{opacity:0,x:50},animate:{opacity:.15,x:0},transition:{duration:1}}),m.jsx(rO,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Contact Joan"}),m.jsxs(iO,{children:[m.jsxs(oO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[m.jsx("h2",{children:"Send a Message to Joan!"}),m.jsx("p",{children:"Have questions about Joan's books? Want to request a school visit or reading? Fill out the form below to contact Joan directly through email!"})]}),m.jsxs(aO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:[m.jsxs(sO,{ref:i,onSubmit:s,children:[m.jsxs(Ia,{children:[m.jsxs(Fa,{children:[m.jsx(vt,{icon:_j}),"Your Name ",m.jsx("span",{children:"*"})]}),m.jsx(Du,{type:"text",name:"name",value:e.name,onChange:a,placeholder:"Enter your name",required:!0})]}),m.jsxs(Ia,{children:[m.jsxs(Fa,{children:[m.jsx(vt,{icon:Oj}),"Your Email ",m.jsx("span",{children:"*"})]}),m.jsx(Du,{type:"email",name:"email",value:e.email,onChange:a,placeholder:"Enter your email address",required:!0})]}),m.jsxs(Ia,{children:[m.jsxs(Fa,{children:[m.jsx(vt,{icon:Fj}),"Subject"]}),m.jsx(Du,{type:"text",name:"subject",value:e.subject,onChange:a,placeholder:"What are you writing about?"})]}),m.jsxs(Ia,{children:[m.jsxs(Fa,{children:[m.jsx(vt,{icon:jj}),"Message ",m.jsx("span",{children:"*"})]}),m.jsx(lO,{name:"message",value:e.message,onChange:a,placeholder:"Type your message here...",required:!0})]}),m.jsxs(uO,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},disabled:!l(),children:[m.jsx(vt,{icon:Dj,style:{marginRight:"8px"}}),"Send Message",n.loading&&m.jsx(pO,{})]})]}),m.jsx(Ld,{children:n.submitted&&m.jsx(cO,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:n.success?"success":"error",children:n.message})})]})]})]}),m.jsx(ea,{})]})};function mO(){return m.jsx(kb,{children:m.jsx("div",{className:"App",children:m.jsxs(gb,{children:[m.jsx(wr,{path:"/",element:m.jsx(rj,{})}),m.jsx(wr,{path:"/books",element:m.jsx(yj,{})}),m.jsx(wr,{path:"/author",element:m.jsx(Aj,{})}),m.jsx(wr,{path:"/gallery",element:m.jsx(tO,{})})," ",m.jsx(wr,{path:"/contact",element:m.jsx(hO,{})})]})})})}const gO=Nu.createRoot(document.getElementById("root"));gO.render(m.jsx(bt.StrictMode,{children:m.jsx(mO,{})}));
