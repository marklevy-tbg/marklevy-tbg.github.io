/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict"
"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict"
function n(e,t){t=t||ne
var n=t.createElement("script")
n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function r(e){var t=!!e&&"length"in e&&e.length,n=me.type(e)
return"function"!==n&&!me.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function o(e,t,n){return me.isFunction(t)?me.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?me.grep(e,function(e){return e===t!==n}):"string"!=typeof t?me.grep(e,function(e){return se.call(t,e)>-1!==n}):Ee.test(t)?me.filter(t,e,n):(t=me.filter(t,e),me.grep(e,function(e){return se.call(t,e)>-1!==n&&1===e.nodeType}))}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function s(e){var t={}
return me.each(e.match(Ne)||[],function(e,n){t[n]=!0}),t}function u(e){return e}function l(e){throw e}function c(e,t,n,r){var i
try{e&&me.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&me.isFunction(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function f(){ne.removeEventListener("DOMContentLoaded",f),e.removeEventListener("load",f),me.ready()}function d(){this.expando=me.expando+d.uid++}function p(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:He.test(e)?JSON.parse(e):e)}function h(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Pe,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=p(n)}catch(e){}Fe.set(e,t,n)}else n=void 0
return n}function m(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return me.css(e,t,"")},u=s(),l=n&&n[3]||(me.cssNumber[t]?"":"px"),c=(me.cssNumber[t]||"px"!==l&&+u)&&ze.exec(me.css(e,t))
if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1
do{o=o||".5",c/=o,me.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function g(e){var t,n=e.ownerDocument,r=e.nodeName,i=$e[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=me.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),$e[r]=i,i)}function v(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?("none"===n&&(i[o]=qe.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&We(r)&&(i[o]=g(r))):"none"!==n&&(i[o]="none",qe.set(r,"display",n)))
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}function y(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&i(e,t)?me.merge([e],n):n}function b(e,t){for(var n=0,r=e.length;n<r;n++)qe.set(e[n],"globalEval",!t||qe.get(t[n],"globalEval"))}function w(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===me.type(o))me.merge(d,o.nodeType?[o]:o)
else if(Ve.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(Ye.exec(o)||["",""])[1].toLowerCase(),u=Qe[s]||Qe._default,a.innerHTML=u[1]+me.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild
me.merge(d,a.childNodes),a=f.firstChild,a.textContent=""}else d.push(t.createTextNode(o))
for(f.textContent="",p=0;o=d[p++];)if(r&&me.inArray(o,r)>-1)i&&i.push(o)
else if(l=me.contains(o.ownerDocument,o),a=y(f.appendChild(o),"script"),l&&b(a),n)for(c=0;o=a[c++];)Xe.test(o.type||"")&&n.push(o)
return f}function x(){return!0}function T(){return!1}function A(){try{return ne.activeElement}catch(e){}}function C(e,t,n,r,i,o){var a,s
if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0)
for(s in t)C(e,s,n,r,t[s],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=T
else if(!i)return e
return 1===o&&(a=i,i=function(e){return me().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=me.guid++)),e.each(function(){me.event.add(this,t,i,r,n)})}function E(e,t){return i(e,"table")&&i(11!==t.nodeType?t:t.firstChild,"tr")?me(">tbody",e)[0]||e:e}function S(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function k(e){var t=rt.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function D(e,t){var n,r,i,o,a,s,u,l
if(1===t.nodeType){if(qe.hasData(e)&&(o=qe.access(e),a=qe.set(t,o),l=o.events)){delete a.handle,a.events={}
for(i in l)for(n=0,r=l[i].length;n<r;n++)me.event.add(t,i,l[i][n])}Fe.hasData(e)&&(s=Fe.access(e),u=me.extend({},s),Fe.set(t,u))}}function _(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Ue.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function N(e,t,r,i){t=oe.apply([],t)
var o,a,s,u,l,c,f=0,d=e.length,p=d-1,h=t[0],m=me.isFunction(h)
if(m||d>1&&"string"==typeof h&&!pe.checkClone&&nt.test(h))return e.each(function(n){var o=e.eq(n)
m&&(t[0]=h.call(this,n,o.html())),N(o,t,r,i)})
if(d&&(o=w(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=me.map(y(o,"script"),S),u=s.length;f<d;f++)l=o,f!==p&&(l=me.clone(l,!0,!0),u&&me.merge(s,y(l,"script"))),r.call(e[f],l,f)
if(u)for(c=s[s.length-1].ownerDocument,me.map(s,k),f=0;f<u;f++)l=s[f],Xe.test(l.type||"")&&!qe.access(l,"globalEval")&&me.contains(c,l)&&(l.src?me._evalUrl&&me._evalUrl(l.src):n(l.textContent.replace(it,""),c))}return e}function L(e,t,n){for(var r,i=t?me.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||me.cleanData(y(r)),r.parentNode&&(n&&me.contains(r.ownerDocument,r)&&b(y(r,"script")),r.parentNode.removeChild(r))
return e}function M(e,t,n){var r,i,o,a,s=e.style
return n=n||st(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||me.contains(e.ownerDocument,e)||(a=me.style(e,t)),!pe.pixelMarginRight()&&at.test(a)&&ot.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function j(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function O(e){if(e in pt)return e
for(var t=e[0].toUpperCase()+e.slice(1),n=dt.length;n--;)if((e=dt[n]+t)in pt)return e}function q(e){var t=me.cssProps[e]
return t||(t=me.cssProps[e]=O(e)||e),t}function F(e,t,n){var r=ze.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function H(e,t,n,r,i){var o,a=0
for(o=n===(r?"border":"content")?4:"width"===t?1:0;o<4;o+=2)"margin"===n&&(a+=me.css(e,n+Ie[o],!0,i)),r?("content"===n&&(a-=me.css(e,"padding"+Ie[o],!0,i)),"margin"!==n&&(a-=me.css(e,"border"+Ie[o]+"Width",!0,i))):(a+=me.css(e,"padding"+Ie[o],!0,i),"padding"!==n&&(a+=me.css(e,"border"+Ie[o]+"Width",!0,i)))
return a}function P(e,t,n){var r,i=st(e),o=M(e,t,i),a="border-box"===me.css(e,"boxSizing",!1,i)
return at.test(o)?o:(r=a&&(pe.boxSizingReliable()||o===e.style[t]),"auto"===o&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)]),(o=parseFloat(o)||0)+H(e,t,n||(a?"border":"content"),r,i)+"px")}function R(e,t,n,r,i){return new R.prototype.init(e,t,n,r,i)}function z(){mt&&(!1===ne.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(z):e.setTimeout(z,me.fx.interval),me.fx.tick())}function I(){return e.setTimeout(function(){ht=void 0}),ht=me.now()}function W(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)n=Ie[r],i["margin"+n]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function B(e,t,n){for(var r,i=(Y.tweeners[t]||[]).concat(Y.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function $(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,d=this,p={},h=e.style,m=e.nodeType&&We(e),g=qe.get(e,"fxshow")
n.queue||(a=me._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,me.queue(e,"fx").length||a.empty.fire()})}))
for(r in t)if(i=t[r],gt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue
m=!0}p[r]=g&&g[r]||me.style(e,r)}if((u=!me.isEmptyObject(t))||!me.isEmptyObject(p)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=g&&g.display,null==l&&(l=qe.get(e,"display")),c=me.css(e,"display"),"none"===c&&(l?c=l:(v([e],!0),l=e.style.display||l,c=me.css(e,"display"),v([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===me.css(e,"float")&&(u||(d.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1
for(r in p)u||(g?"hidden"in g&&(m=g.hidden):g=qe.access(e,"fxshow",{display:l}),o&&(g.hidden=!m),m&&v([e],!0),d.done(function(){m||v([e]),qe.remove(e,"fxshow")
for(r in p)me.style(e,r,p[r])})),u=B(m?g[r]:0,r,d),r in g||(g[r]=u.start,m&&(u.end=u.start,u.start=0))}}function U(e,t){var n,r,i,o,a
for(n in e)if(r=me.camelCase(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=me.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r]
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function Y(e,t,n){var r,i,o=0,a=Y.prefilters.length,s=me.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1
for(var t=ht||I(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o)
return s.notifyWith(e,[l,o,n]),o<1&&u?n:(u||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:me.extend({},t),opts:me.extend(!0,{specialEasing:{},easing:me.easing._default},n),originalProperties:t,originalOptions:n,startTime:ht||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=me.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)l.tweens[n].run(1)
return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props
for(U(c,l.opts.specialEasing);o<a;o++)if(r=Y.prefilters[o].call(l,e,c,l.opts))return me.isFunction(r.stop)&&(me._queueHooks(l.elem,l.opts.queue).stop=me.proxy(r.stop,r)),r
return me.map(c,B,l),me.isFunction(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),me.fx.timer(me.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}function X(e){return(e.match(Ne)||[]).join(" ")}function Q(e){return e.getAttribute&&e.getAttribute("class")||""}function V(e,t,n,r){var i
if(Array.isArray(t))me.each(t,function(t,i){n||kt.test(e)?r(e,i):V(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)})
else if(n||"object"!==me.type(t))r(e,t)
else for(i in t)V(e+"["+i+"]",t[i],n,r)}function G(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(Ne)||[]
if(me.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function J(e,t,n,r){function i(s){var u
return o[s]=!0,me.each(e[s]||[],function(e,s){var l=s(t,n,r)
return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Rt
return i(t.dataTypes[0])||!o["*"]&&i("*")}function K(e,t){var n,r,i=me.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&me.extend(!0,e,r),e}function Z(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function ee(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice()
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]))
break}if(!0!==a)if(a&&e.throws)t=a(t)
else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var te=[],ne=e.document,re=Object.getPrototypeOf,ie=te.slice,oe=te.concat,ae=te.push,se=te.indexOf,ue={},le=ue.toString,ce=ue.hasOwnProperty,fe=ce.toString,de=fe.call(Object),pe={},he="3.2.1",me=function(e,t){return new me.fn.init(e,t)},ge=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ve=/^-ms-/,ye=/-([a-z])/g,be=function(e,t){return t.toUpperCase()}
me.fn=me.prototype={jquery:he,constructor:me,length:0,toArray:function(){return ie.call(this)},get:function(e){return null==e?ie.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=me.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return me.each(this,e)},map:function(e){return this.pushStack(me.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ie.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ae,sort:te.sort,splice:te.splice},me.extend=me.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1
for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||me.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(me.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&me.isPlainObject(n)?n:{},a[t]=me.extend(l,o,r)):void 0!==r&&(a[t]=r))
return a},me.extend({expando:"jQuery"+(he+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===me.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=me.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==le.call(e)||(t=re(e))&&("function"!=typeof(n=ce.call(t,"constructor")&&t.constructor)||fe.call(n)!==de))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[le.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(ve,"ms-").replace(ye,be)},each:function(e,t){var n,i=0
if(r(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break
return e},trim:function(e){return null==e?"":(e+"").replace(ge,"")},makeArray:function(e,t){var n=t||[]
return null!=e&&(r(Object(e))?me.merge(n,"string"==typeof e?[e]:e):ae.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i])
return r},map:function(e,t,n){var i,o,a=0,s=[]
if(r(e))for(i=e.length;a<i;a++)null!=(o=t(e[a],a,n))&&s.push(o)
else for(a in e)null!=(o=t(e[a],a,n))&&s.push(o)
return oe.apply([],s)},guid:1,proxy:function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),me.isFunction(e))return r=ie.call(arguments,2),i=function(){return e.apply(t||this,r.concat(ie.call(arguments)))},i.guid=e.guid=e.guid||me.guid++,i},now:Date.now,support:pe}),"function"==typeof Symbol&&(me.fn[Symbol.iterator]=te[Symbol.iterator]),me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ue["[object "+t+"]"]=t.toLowerCase()})
var we=function(e){function t(e,t,n,r){var i,o,a,s,u,c,d,p=t&&t.ownerDocument,h=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n
if(!r&&((t?t.ownerDocument||t:R)!==L&&N(t),t=t||L,j)){if(11!==h&&(u=me.exec(e)))if(i=u[1]){if(9===h){if(!(a=t.getElementById(i)))return n
if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&H(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return G.apply(n,t.getElementsByTagName(e)),n
if((i=u[3])&&w.getElementsByClassName&&t.getElementsByClassName)return G.apply(n,t.getElementsByClassName(i)),n}if(w.qsa&&!$[e+" "]&&(!O||!O.test(e))){if(1!==h)p=t,d=e
else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(be,we):t.setAttribute("id",s=P),c=C(e),o=c.length;o--;)c[o]="#"+s+" "+f(c[o])
d=c.join(","),p=ge.test(e)&&l(t.parentNode)||t}if(d)try{return G.apply(n,p.querySelectorAll(d)),n}catch(e){}finally{s===P&&t.removeAttribute("id")}}}return S(e.replace(oe,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[]
return e}function r(e){return e[P]=!0,e}function i(e){var t=L.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)x.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function s(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Te(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function l(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function d(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=I++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i)
return!1}:function(t,n,u){var l,c,f,d=[z,s]
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[P]||(t[P]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
else{if((l=c[o])&&l[0]===z&&l[1]===s)return d[2]=l[2]
if(c[o]=d,d[2]=e(t,n,u))return!0}return!1}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function h(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r)
return r}function m(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)))
return a}function g(e,t,n,i,o,a){return i&&!i[P]&&(i=g(i)),o&&!o[P]&&(o=g(o,a)),r(function(r,a,s,u){var l,c,f,d=[],p=[],g=a.length,v=r||h(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:m(v,d,e,s,u),b=n?o||(r?e:g||i)?[]:a:y
if(n&&n(y,b,s,u),i)for(l=m(b,p),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(b[p[c]]=!(y[p[c]]=f))
if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(f=b[c])&&l.push(y[c]=f)
o(null,b=[],l,u)}for(c=b.length;c--;)(f=b[c])&&(l=o?K(r,f):d[c])>-1&&(r[l]=!(a[l]=f))}}else b=m(b===a?b.splice(g,b.length):b),o?o(null,a,b,u):G.apply(a,b)})}function v(e){for(var t,n,r,i=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return K(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==k)||((t=n).nodeType?u(e,n,r):l(e,n,r))
return t=null,i}];s<i;s++)if(n=x.relative[e[s].type])c=[d(p(c),n)]
else{if(n=x.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;r<i&&!x.relative[e[r].type];r++);return g(s>1&&p(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&f(e))}c.push(n)}return p(c)}function y(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,d,p=0,h="0",g=r&&[],v=[],y=k,b=r||o&&x.find.TAG("*",l),w=z+=null==y?1:Math.random()||.1,T=b.length
for(l&&(k=a===L||a||l);h!==T&&null!=(c=b[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===L||(N(c),s=!j);d=e[f++];)if(d(c,a||L,s)){u.push(c)
break}l&&(z=w)}i&&((c=!d&&c)&&p--,r&&g.push(c))}if(p+=h,i&&h!==p){for(f=0;d=n[f++];)d(g,v,a,s)
if(r){if(p>0)for(;h--;)g[h]||v[h]||(v[h]=Q.call(u))
v=m(v)}G.apply(u,v),l&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(u)}return l&&(z=w,k=y),g}
return i?r(a):a}var b,w,x,T,A,C,E,S,k,D,_,N,L,M,j,O,q,F,H,P="sizzle"+1*new Date,R=e.document,z=0,I=0,W=n(),B=n(),$=n(),U=function(e,t){return e===t&&(_=!0),0},Y={}.hasOwnProperty,X=[],Q=X.pop,V=X.push,G=X.push,J=X.slice,K=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ne="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),le=new RegExp(re),ce=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},de=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/[+~]/,ve=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,n){var r="0x"+t-65536
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,we=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},xe=function(){N()},Te=d(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"})
try{G.apply(X=J.call(R.childNodes),R.childNodes),X[R.childNodes.length].nodeType}catch(e){G={apply:X.length?function(e,t){V.apply(e,J.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},N=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:R
return r!==L&&9===r.nodeType&&r.documentElement?(L=r,M=L.documentElement,j=!A(L),R!==L&&(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=he.test(L.getElementsByClassName),w.getById=i(function(e){return M.appendChild(e).id=P,!L.getElementsByName||!L.getElementsByName(P).length}),w.getById?(x.filter.ID=function(e){var t=e.replace(ve,ye)
return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&j){var n=t.getElementById(e)
return n?[n]:[]}}):(x.filter.ID=function(e){var t=e.replace(ve,ye)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&j){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},x.find.CLASS=w.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&j)return t.getElementsByClassName(e)},q=[],O=[],(w.qsa=he.test(L.querySelectorAll))&&(i(function(e){M.appendChild(e).innerHTML="<a id='"+P+"'></a><select id='"+P+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&O.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||O.push("\\["+ee+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+P+"-]").length||O.push("~="),e.querySelectorAll(":checked").length||O.push(":checked"),e.querySelectorAll("a#"+P+"+*").length||O.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=L.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&O.push("name"+ee+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&O.push(":enabled",":disabled"),M.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&O.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),O.push(",.*:")})),(w.matchesSelector=he.test(F=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){w.disconnectedMatch=F.call(e,"*"),F.call(e,"[s!='']:x"),q.push("!=",re)}),O=O.length&&new RegExp(O.join("|")),q=q.length&&new RegExp(q.join("|")),t=he.test(M.compareDocumentPosition),H=t||he.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},U=t?function(e,t){if(e===t)return _=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===R&&H(R,e)?-1:t===L||t.ownerDocument===R&&H(R,t)?1:D?K(D,e)-K(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return _=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t]
if(!i||!o)return e===L?-1:t===L?1:i?-1:o?1:D?K(D,e)-K(D,t):0
if(i===o)return a(e,t)
for(n=e;n=n.parentNode;)s.unshift(n)
for(n=t;n=n.parentNode;)u.unshift(n)
for(;s[r]===u[r];)r++
return r?a(s[r],u[r]):s[r]===R?-1:u[r]===R?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&N(e),n=n.replace(ue,"='$1']"),w.matchesSelector&&j&&!$[n+" "]&&(!q||!q.test(n))&&(!O||!O.test(n)))try{var r=F.call(e,n)
if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&N(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&N(e)
var n=x.attrHandle[t.toLowerCase()],r=n&&Y.call(x.attrHandle,t.toLowerCase())?n(e,t,!j):void 0
return void 0!==r?r:w.attributes||!j?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(be,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
if(_=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),_){for(;t=e[i++];)t===e[i]&&(r=n.push(i))
for(;r--;)e.splice(n[r],1)}return D=null,e},T=t.getText=function(e){var t,n="",r=0,i=e.nodeType
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=T(t)
return n},x=t.selectors={cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "]
return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,d,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,b=!1
if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(d=g,f=d[P]||(d[P]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===z&&l[1],b=p&&l[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(b=p=0)||h.pop();)if(1===d.nodeType&&++b&&d===t){c[e]=[z,p,b]
break}}else if(y&&(d=t,f=d[P]||(d[P]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),l=c[e]||[],p=l[0]===z&&l[1],b=p),!1===b)for(;(d=++p&&d&&d[m]||(b=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&(f=d[P]||(d[P]={}),c=f[d.uniqueID]||(f[d.uniqueID]={}),c[e]=[z,b]),d!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,n){var i,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return o[P]?o(n):o.length>1?(i=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=K(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(oe,"$1"))
return i[P]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(ve,ye),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:r(function(e){return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n
do{if(n=j?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:s(!1),disabled:s(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return pe.test(e.nodeName)},input:function(e){return de.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[n<0?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e}),lt:u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e}),gt:u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e})}},x.pseudos.nth=x.pseudos.eq
for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[b]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(b)
for(b in{submit:!0,reset:!0})x.pseudos[b]=function(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}(b)
return c.prototype=x.filters=x.pseudos,x.setFilters=new c,C=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=B[e+" "]
if(c)return n?0:c.slice(0)
for(s=e,u=[],l=x.preFilter;s;){r&&!(i=ae.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=se.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(oe," ")}),s=s.slice(r.length))
for(a in x.filter)!(i=fe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length))
if(!r)break}return n?s.length:s?t.error(e):B(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=$[e+" "]
if(!o){for(t||(t=C(e)),n=t.length;n--;)o=v(t[n]),o[P]?r.push(o):i.push(o)
o=$(e,y(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,u,c="function"==typeof e&&e,d=!r&&C(e=c.selector||e)
if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&j&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(ve,ye),t)||[])[0]))return n
c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=fe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((u=x.find[s])&&(r=u(a.matches[0].replace(ve,ye),ge.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&f(o)))return G.apply(n,r),n
break}}return(c||E(e,d))(r,t,!j,n,!t||ge.test(e)&&l(t.parentNode)||t),n},w.sortStable=P.split("").sort(U).join("")===P,w.detectDuplicates=!!_,N(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e)
me.find=we,me.expr=we.selectors,me.expr[":"]=me.expr.pseudos,me.uniqueSort=me.unique=we.uniqueSort,me.text=we.getText,me.isXMLDoc=we.isXML,me.contains=we.contains,me.escapeSelector=we.escape
var xe=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&me(e).is(n))break
r.push(e)}return r},Te=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},Ae=me.expr.match.needsContext,Ce=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Ee=/^.[^:#\[\.,]*$/
me.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?me.find.matchesSelector(r,e)?[r]:[]:me.find.matches(e,me.grep(t,function(e){return 1===e.nodeType}))},me.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(me(e).filter(function(){for(t=0;t<r;t++)if(me.contains(i[t],this))return!0}))
for(n=this.pushStack([]),t=0;t<r;t++)me.find(e,i[t],n)
return r>1?me.uniqueSort(n):n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&Ae.test(e)?me(e):e||[],!1).length}})
var Se,ke=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(me.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||Se,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ke.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof me?t[0]:t,me.merge(this,me.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ne,!0)),Ce.test(r[1])&&me.isPlainObject(t))for(r in t)me.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return i=ne.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):me.isFunction(e)?void 0!==n.ready?n.ready(e):e(me):me.makeArray(e,this)}).prototype=me.fn,Se=me(ne)
var De=/^(?:parents|prev(?:Until|All))/,_e={children:!0,contents:!0,next:!0,prev:!0}
me.fn.extend({has:function(e){var t=me(e,this),n=t.length
return this.filter(function(){for(var e=0;e<n;e++)if(me.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&me(e)
if(!Ae.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&me.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?me.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(me(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(me.uniqueSort(me.merge(this.get(),me(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),me.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return xe(e,"parentNode")},parentsUntil:function(e,t,n){return xe(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return xe(e,"nextSibling")},prevAll:function(e){return xe(e,"previousSibling")},nextUntil:function(e,t,n){return xe(e,"nextSibling",n)},prevUntil:function(e,t,n){return xe(e,"previousSibling",n)},siblings:function(e){return Te((e.parentNode||{}).firstChild,e)},children:function(e){return Te(e.firstChild)},contents:function(e){return i(e,"iframe")?e.contentDocument:(i(e,"template")&&(e=e.content||e),me.merge([],e.childNodes))}},function(e,t){me.fn[e]=function(n,r){var i=me.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=me.filter(r,i)),this.length>1&&(_e[e]||me.uniqueSort(i),De.test(e)&&i.reverse()),this.pushStack(i)}})
var Ne=/[^\x20\t\r\n\f]+/g
me.Callbacks=function(e){e="string"==typeof e?s(e):me.extend({},e)
var t,n,r,i,o=[],a=[],u=-1,l=function(){for(i=i||e.once,r=t=!0;a.length;u=-1)for(n=a.shift();++u<o.length;)!1===o[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(u=o.length-1,a.push(n)),function t(n){me.each(n,function(n,r){me.isFunction(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==me.type(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return me.each(arguments,function(e,t){for(var n;(n=me.inArray(t,o,n))>-1;)o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?me.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}}
return c},me.extend({Deferred:function(t){var n=[["notify","progress",me.Callbacks("memory"),me.Callbacks("memory"),2],["resolve","done",me.Callbacks("once memory"),me.Callbacks("once memory"),0,"resolved"],["reject","fail",me.Callbacks("once memory"),me.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return me.Deferred(function(t){me.each(n,function(n,r){var i=me.isFunction(e[r[4]])&&e[r[4]]
o[r[1]](function(){var e=i&&i.apply(this,arguments)
e&&me.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var s=this,c=arguments,f=function(){var e,f
if(!(t<a)){if((e=r.apply(s,c))===n.promise())throw new TypeError("Thenable self-resolution")
f=e&&("object"==typeof e||"function"==typeof e)&&e.then,me.isFunction(f)?i?f.call(e,o(a,n,u,i),o(a,n,l,i)):(a++,f.call(e,o(a,n,u,i),o(a,n,l,i),o(a,n,u,n.notifyWith))):(r!==u&&(s=void 0,c=[e]),(i||n.resolveWith)(s,c))}},d=i?f:function(){try{f()}catch(e){me.Deferred.exceptionHook&&me.Deferred.exceptionHook(e,d.stackTrace),t+1>=a&&(r!==l&&(s=void 0,c=[e]),n.rejectWith(s,c))}}
t?d():(me.Deferred.getStackHook&&(d.stackTrace=me.Deferred.getStackHook()),e.setTimeout(d))}}var a=0
return me.Deferred(function(e){n[0][3].add(o(0,e,me.isFunction(i)?i:u,e.notifyWith)),n[1][3].add(o(0,e,me.isFunction(t)?t:u)),n[2][3].add(o(0,e,me.isFunction(r)?r:l))}).promise()},promise:function(e){return null!=e?me.extend(e,i):i}},o={}
return me.each(n,function(e,t){var a=t[2],s=t[5]
i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[0][2].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=ie.call(arguments),o=me.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?ie.call(arguments):n,--t||o.resolveWith(r,i)}}
if(t<=1&&(c(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||me.isFunction(i[n]&&i[n].then)))return o.then()
for(;n--;)c(i[n],a(n),o.reject)
return o.promise()}})
var Le=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
me.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Le.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},me.readyException=function(t){e.setTimeout(function(){throw t})}
var Me=me.Deferred()
me.fn.ready=function(e){return Me.then(e).catch(function(e){me.readyException(e)}),this},me.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--me.readyWait:me.isReady)||(me.isReady=!0,!0!==e&&--me.readyWait>0||Me.resolveWith(ne,[me]))}}),me.ready.then=Me.then,"complete"===ne.readyState||"loading"!==ne.readyState&&!ne.documentElement.doScroll?e.setTimeout(me.ready):(ne.addEventListener("DOMContentLoaded",f),e.addEventListener("load",f))
var je=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n
if("object"===me.type(n)){i=!0
for(s in n)je(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,me.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(me(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},Oe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
d.uid=1,d.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},Oe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[me.camelCase(t)]=n
else for(r in t)i[me.camelCase(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][me.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(me.camelCase):(t=me.camelCase(t),t=t in r?[t]:t.match(Ne)||[]),n=t.length
for(;n--;)delete r[t[n]]}(void 0===t||me.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!me.isEmptyObject(t)}}
var qe=new d,Fe=new d,He=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Pe=/[A-Z]/g
me.extend({hasData:function(e){return Fe.hasData(e)||qe.hasData(e)},data:function(e,t,n){return Fe.access(e,t,n)},removeData:function(e,t){Fe.remove(e,t)},_data:function(e,t,n){return qe.access(e,t,n)},_removeData:function(e,t){qe.remove(e,t)}}),me.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(i=Fe.get(o),1===o.nodeType&&!qe.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=me.camelCase(r.slice(5)),h(o,r,i[r])))
qe.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Fe.set(this,e)}):je(this,function(t){var n
if(o&&void 0===t){if(void 0!==(n=Fe.get(o,e)))return n
if(void 0!==(n=h(o,e)))return n}else this.each(function(){Fe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Fe.remove(this,e)})}}),me.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=qe.get(e,t),n&&(!r||Array.isArray(n)?r=qe.access(e,t,me.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=me.queue(e,t),r=n.length,i=n.shift(),o=me._queueHooks(e,t),a=function(){me.dequeue(e,t)}
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return qe.get(e,n)||qe.access(e,n,{empty:me.Callbacks("once memory").add(function(){qe.remove(e,[t+"queue",n])})})}}),me.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?me.queue(this[0],e):void 0===t?this:this.each(function(){var n=me.queue(this,e,t)
me._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&me.dequeue(this,e)})},dequeue:function(e){return this.each(function(){me.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=me.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=qe.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s))
return s(),i.promise(t)}})
var Re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ze=new RegExp("^(?:([+-])=|)("+Re+")([a-z%]*)$","i"),Ie=["Top","Right","Bottom","Left"],We=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&me.contains(e.ownerDocument,e)&&"none"===me.css(e,"display")},Be=function(e,t,n,r){var i,o,a={}
for(o in t)a[o]=e.style[o],e.style[o]=t[o]
i=n.apply(e,r||[])
for(o in t)e.style[o]=a[o]
return i},$e={}
me.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){We(this)?me(this).show():me(this).hide()})}})
var Ue=/^(?:checkbox|radio)$/i,Ye=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Xe=/^$|\/(?:java|ecma)script/i,Qe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Qe.optgroup=Qe.option,Qe.tbody=Qe.tfoot=Qe.colgroup=Qe.caption=Qe.thead,Qe.th=Qe.td
var Ve=/<|&#?\w+;/
!function(){var e=ne.createDocumentFragment(),t=e.appendChild(ne.createElement("div")),n=ne.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),pe.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",pe.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
var Ge=ne.documentElement,Je=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ze=/^([^.]*)(?:\.(.+)|)/
me.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,m,g=qe.get(e)
if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&me.find.matchesSelector(Ge,i),n.guid||(n.guid=me.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==me&&me.event.triggered!==t.type?me.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ne)||[""],l=t.length;l--;)s=Ze.exec(t[l])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p&&(f=me.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=me.event.special[p]||{},c=me.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&me.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||(d=u[p]=[],d.delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),me.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,m,g=qe.hasData(e)&&qe.get(e)
if(g&&(u=g.events)){for(t=(t||"").match(Ne)||[""],l=t.length;l--;)if(s=Ze.exec(t[l])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(f=me.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,d=u[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;o--;)c=d[o],!i&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c))
a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||me.removeEvent(e,p,g.handle),delete u[p])}else for(p in u)me.event.remove(e,p+t[l],n,r,!0)
me.isEmptyObject(u)&&qe.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=me.event.fix(e),u=new Array(arguments.length),l=(qe.get(this,"events")||{})[s.type]||[],c=me.event.special[s.type]||{}
for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t]
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=me.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((me.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target
if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)r=t[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?me(i,this).index(l)>-1:me.find(i,this,null,[l]).length),a[i]&&o.push(r)
o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(me.Event.prototype,e,{enumerable:!0,configurable:!0,get:me.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[me.expando]?e:new me.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==A()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===A()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&i(this,"input"))return this.click(),!1},_default:function(e){return i(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},me.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},me.Event=function(e,t){return this instanceof me.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?x:T,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&me.extend(this,t),this.timeStamp=e&&e.timeStamp||me.now(),void(this[me.expando]=!0)):new me.Event(e,t)},me.Event.prototype={constructor:me.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=x,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=x,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=x,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},me.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button
return null==e.which&&Je.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},me.event.addProp),me.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){me.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
return i&&(i===r||me.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),me.fn.extend({on:function(e,t,n,r){return C(this,e,t,n,r)},one:function(e,t,n,r){return C(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,me(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=T),this.each(function(){me.event.remove(this,e,n,t)})}})
var et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,tt=/<script|<style|<link/i,nt=/checked\s*(?:[^=]|=\s*.checked.)/i,rt=/^true\/(.*)/,it=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
me.extend({htmlPrefilter:function(e){return e.replace(et,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=me.contains(e.ownerDocument,e)
if(!(pe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||me.isXMLDoc(e)))for(a=y(s),o=y(e),r=0,i=o.length;r<i;r++)_(o[r],a[r])
if(t)if(n)for(o=o||y(e),a=a||y(s),r=0,i=o.length;r<i;r++)D(o[r],a[r])
else D(e,s)
return a=y(s,"script"),a.length>0&&b(a,!u&&y(e,"script")),s},cleanData:function(e){for(var t,n,r,i=me.event.special,o=0;void 0!==(n=e[o]);o++)if(Oe(n)){if(t=n[qe.expando]){if(t.events)for(r in t.events)i[r]?me.event.remove(n,r):me.removeEvent(n,r,t.handle)
n[qe.expando]=void 0}n[Fe.expando]&&(n[Fe.expando]=void 0)}}}),me.fn.extend({detach:function(e){return L(this,e,!0)},remove:function(e){return L(this,e)},text:function(e){return je(this,function(e){return void 0===e?me.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){E(this,e).appendChild(e)}})},prepend:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=E(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(me.cleanData(y(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return me.clone(this,e,t)})},html:function(e){return je(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!tt.test(e)&&!Qe[(Ye.exec(e)||["",""])[1].toLowerCase()]){e=me.htmlPrefilter(e)
try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(me.cleanData(y(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[]
return N(this,arguments,function(t){var n=this.parentNode
me.inArray(this,e)<0&&(me.cleanData(y(this)),n&&n.replaceChild(t,this))},e)}}),me.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){me.fn[e]=function(e){for(var n,r=[],i=me(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),me(i[a])[t](n),ae.apply(r,n.get())
return this.pushStack(r)}})
var ot=/^margin/,at=new RegExp("^("+Re+")(?!px)[a-z%]+$","i"),st=function(t){var n=t.ownerDocument.defaultView
return n&&n.opener||(n=e),n.getComputedStyle(t)}
!function(){function t(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Ge.appendChild(a)
var t=e.getComputedStyle(s)
n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Ge.removeChild(a),s=null}}var n,r,i,o,a=ne.createElement("div"),s=ne.createElement("div")
s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",pe.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),me.extend(pe,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}()
var ut=/^(none|table(?!-c[ea]).+)/,lt=/^--/,ct={position:"absolute",visibility:"hidden",display:"block"},ft={letterSpacing:"0",fontWeight:"400"},dt=["Webkit","Moz","ms"],pt=ne.createElement("div").style
me.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=M(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=me.camelCase(t),u=lt.test(t),l=e.style
return u||(t=q(s)),a=me.cssHooks[t]||me.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]:(o=typeof n,"string"===o&&(i=ze.exec(n))&&i[1]&&(n=m(e,t,i),o="number"),void(null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(me.cssNumber[s]?"":"px")),pe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))))}},css:function(e,t,n,r){var i,o,a,s=me.camelCase(t)
return lt.test(t)||(t=q(s)),a=me.cssHooks[t]||me.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=M(e,t,r)),"normal"===i&&t in ft&&(i=ft[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),me.each(["height","width"],function(e,t){me.cssHooks[t]={get:function(e,n,r){if(n)return!ut.test(me.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?P(e,t,r):Be(e,ct,function(){return P(e,t,r)})},set:function(e,n,r){var i,o=r&&st(e),a=r&&H(e,t,r,"border-box"===me.css(e,"boxSizing",!1,o),o)
return a&&(i=ze.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=me.css(e,t)),F(e,n,a)}}}),me.cssHooks.marginLeft=j(pe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(M(e,"marginLeft"))||e.getBoundingClientRect().left-Be(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),me.each({margin:"",padding:"",border:"Width"},function(e,t){me.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ie[r]+t]=o[r]||o[r-2]||o[0]
return i}},ot.test(e)||(me.cssHooks[e+t].set=F)}),me.fn.extend({css:function(e,t){return je(this,function(e,t,n){var r,i,o={},a=0
if(Array.isArray(t)){for(r=st(e),i=t.length;a<i;a++)o[t[a]]=me.css(e,t[a],!1,r)
return o}return void 0!==n?me.style(e,t,n):me.css(e,t)},e,t,arguments.length>1)}}),me.Tween=R,R.prototype={constructor:R,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||me.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(me.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop]
return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop]
return this.options.duration?this.pos=t=me.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=me.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){me.fx.step[e.prop]?me.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[me.cssProps[e.prop]]&&!me.cssHooks[e.prop]?e.elem[e.prop]=e.now:me.style(e.elem,e.prop,e.now+e.unit)}}},R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},me.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},me.fx=R.prototype.init,me.fx.step={}
var ht,mt,gt=/^(?:toggle|show|hide)$/,vt=/queueHooks$/
me.Animation=me.extend(Y,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return m(n.elem,e,ze.exec(t),n),n}]},tweener:function(e,t){me.isFunction(e)?(t=e,e=["*"]):e=e.match(Ne)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],Y.tweeners[n]=Y.tweeners[n]||[],Y.tweeners[n].unshift(t)},prefilters:[$],prefilter:function(e,t){t?Y.prefilters.unshift(e):Y.prefilters.push(e)}}),me.speed=function(e,t,n){var r=e&&"object"==typeof e?me.extend({},e):{complete:n||!n&&t||me.isFunction(e)&&e,duration:e,easing:n&&t||t&&!me.isFunction(t)&&t}
return me.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in me.fx.speeds?r.duration=me.fx.speeds[r.duration]:r.duration=me.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){me.isFunction(r.old)&&r.old.call(this),r.queue&&me.dequeue(this,r.queue)},r},me.fn.extend({fadeTo:function(e,t,n,r){return this.filter(We).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=me.isEmptyObject(e),o=me.speed(t,n,r),a=function(){var t=Y(this,me.extend({},e),o);(i||qe.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=me.timers,a=qe.get(this)
if(i)a[i]&&a[i].stop&&r(a[i])
else for(i in a)a[i]&&a[i].stop&&vt.test(i)&&r(a[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||me.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=qe.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=me.timers,a=r?r.length:0
for(n.finish=!0,me.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),me.each(["toggle","show","hide"],function(e,t){var n=me.fn[t]
me.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,i)}}),me.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){me.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),me.timers=[],me.fx.tick=function(){var e,t=0,n=me.timers
for(ht=me.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||me.fx.stop(),ht=void 0},me.fx.timer=function(e){me.timers.push(e),me.fx.start()},me.fx.interval=13,me.fx.start=function(){mt||(mt=!0,z())},me.fx.stop=function(){mt=null},me.fx.speeds={slow:600,fast:200,_default:400},me.fn.delay=function(t,n){return t=me.fx?me.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t)
r.stop=function(){e.clearTimeout(i)}})},function(){var e=ne.createElement("input"),t=ne.createElement("select"),n=t.appendChild(ne.createElement("option"))
e.type="checkbox",pe.checkOn=""!==e.value,pe.optSelected=n.selected,e=ne.createElement("input"),e.value="t",e.type="radio",pe.radioValue="t"===e.value}()
var yt,bt=me.expr.attrHandle
me.fn.extend({attr:function(e,t){return je(this,me.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){me.removeAttr(this,e)})}}),me.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?me.prop(e,t,n):(1===o&&me.isXMLDoc(e)||(i=me.attrHooks[t.toLowerCase()]||(me.expr.match.bool.test(t)?yt:void 0)),void 0!==n?null===n?void me.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=me.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!pe.radioValue&&"radio"===t&&i(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Ne)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),yt={set:function(e,t,n){return!1===t?me.removeAttr(e,n):e.setAttribute(n,n),n}},me.each(me.expr.match.bool.source.match(/\w+/g),function(e,t){var n=bt[t]||me.find.attr
bt[t]=function(e,t,r){var i,o,a=t.toLowerCase()
return r||(o=bt[a],bt[a]=i,i=null!=n(e,t,r)?a:null,bt[a]=o),i}})
var wt=/^(?:input|select|textarea|button)$/i,xt=/^(?:a|area)$/i
me.fn.extend({prop:function(e,t){return je(this,me.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[me.propFix[e]||e]})}}),me.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&me.isXMLDoc(e)||(t=me.propFix[t]||t,i=me.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=me.find.attr(e,"tabindex")
return t?parseInt(t,10):wt.test(e.nodeName)||xt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),pe.optSelected||(me.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),me.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){me.propFix[this.toLowerCase()]=this}),me.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0
if(me.isFunction(e))return this.each(function(t){me(this).addClass(e.call(this,t,Q(this)))})
if("string"==typeof e&&e)for(t=e.match(Ne)||[];n=this[u++];)if(i=Q(n),r=1===n.nodeType&&" "+X(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
s=X(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0
if(me.isFunction(e))return this.each(function(t){me(this).removeClass(e.call(this,t,Q(this)))})
if(!arguments.length)return this.attr("class","")
if("string"==typeof e&&e)for(t=e.match(Ne)||[];n=this[u++];)if(i=Q(n),r=1===n.nodeType&&" "+X(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
s=X(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):me.isFunction(e)?this.each(function(n){me(this).toggleClass(e.call(this,n,Q(this),t),t)}):this.each(function(){var t,r,i,o
if("string"===n)for(r=0,i=me(this),o=e.match(Ne)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else void 0!==e&&"boolean"!==n||(t=Q(this),t&&qe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":qe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+X(Q(n))+" ").indexOf(t)>-1)return!0
return!1}})
var Tt=/\r/g
me.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=me.isFunction(e),this.each(function(n){var i
1===this.nodeType&&(i=r?e.call(this,n,me(this).val()):e,null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=me.map(i,function(e){return null==e?"":e+""})),(t=me.valHooks[this.type]||me.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=me.valHooks[i.type]||me.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Tt,""):null==n?"":n)):void 0}}),me.extend({valHooks:{option:{get:function(e){var t=me.find.attr(e,"value")
return null!=t?t:X(me.text(e))}},select:{get:function(e){var t,n,r,o=e.options,a=e.selectedIndex,s="select-one"===e.type,u=s?null:[],l=s?a+1:o.length
for(r=a<0?l:s?a:0;r<l;r++)if(n=o[r],(n.selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!i(n.parentNode,"optgroup"))){if(t=me(n).val(),s)return t
u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,o=me.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=me.inArray(me.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),me.each(["radio","checkbox"],function(){me.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=me.inArray(me(e).val(),t)>-1}},pe.checkOn||(me.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})
var At=/^(?:focusinfocus|focusoutblur)$/
me.extend(me.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,f,d=[r||ne],p=ce.call(t,"type")?t.type:t,h=ce.call(t,"namespace")?t.namespace.split("."):[]
if(a=s=r=r||ne,3!==r.nodeType&&8!==r.nodeType&&!At.test(p+me.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),l=p.indexOf(":")<0&&"on"+p,t=t[me.expando]?t:new me.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:me.makeArray(n,[t]),f=me.event.special[p]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!me.isWindow(r)){for(u=f.delegateType||p,At.test(u+p)||(a=a.parentNode);a;a=a.parentNode)d.push(a),s=a
s===(r.ownerDocument||ne)&&d.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=d[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||p,c=(qe.get(a,"events")||{})[t.type]&&qe.get(a,"handle"),c&&c.apply(a,n),(c=l&&a[l])&&c.apply&&Oe(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault())
return t.type=p,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!Oe(r)||l&&me.isFunction(r[p])&&!me.isWindow(r)&&(s=r[l],s&&(r[l]=null),me.event.triggered=p,r[p](),me.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=me.extend(new me.Event,n,{type:e,isSimulated:!0})
me.event.trigger(r,null,t)}}),me.fn.extend({trigger:function(e,t){return this.each(function(){me.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n)return me.event.trigger(e,t,n,!0)}}),me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){me.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),me.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),pe.focusin="onfocusin"in e,pe.focusin||me.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){me.event.simulate(t,e.target,me.event.fix(e))}
me.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=qe.access(r,t)
i||r.addEventListener(e,n,!0),qe.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=qe.access(r,t)-1
i?qe.access(r,t,i):(r.removeEventListener(e,n,!0),qe.remove(r,t))}}})
var Ct=e.location,Et=me.now(),St=/\?/
me.parseXML=function(t){var n
if(!t||"string"!=typeof t)return null
try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||me.error("Invalid XML: "+t),n}
var kt=/\[\]$/,Dt=/\r?\n/g,_t=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i
me.param=function(e,t){var n,r=[],i=function(e,t){var n=me.isFunction(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(Array.isArray(e)||e.jquery&&!me.isPlainObject(e))me.each(e,function(){i(this.name,this.value)})
else for(n in e)V(n,e[n],t,i)
return r.join("&")},me.fn.extend({serialize:function(){return me.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=me.prop(this,"elements")
return e?me.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!me(this).is(":disabled")&&Nt.test(this.nodeName)&&!_t.test(e)&&(this.checked||!Ue.test(e))}).map(function(e,t){var n=me(this).val()
return null==n?null:Array.isArray(n)?me.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}})
var Lt=/%20/g,Mt=/#.*$/,jt=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ft=/^(?:GET|HEAD)$/,Ht=/^\/\//,Pt={},Rt={},zt="*/".concat("*"),It=ne.createElement("a")
It.href=Ct.href,me.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:qt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":me.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?K(K(e,me.ajaxSettings),t):K(me.ajaxSettings,e)},ajaxPrefilter:G(Pt),ajaxTransport:G(Rt),ajax:function(t,n){function r(t,n,r,s){var l,d,p,w,x,T=n
c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",A.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(w=Z(h,A,r)),w=ee(h,w,A,l),l?(h.ifModified&&(x=A.getResponseHeader("Last-Modified"),x&&(me.lastModified[o]=x),(x=A.getResponseHeader("etag"))&&(me.etag[o]=x)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=w.state,d=w.data,p=w.error,l=!p)):(p=T,!t&&T||(T="error",t<0&&(t=0))),A.status=t,A.statusText=(n||T)+"",l?v.resolveWith(m,[d,T,A]):v.rejectWith(m,[A,T,p]),A.statusCode(b),b=void 0,f&&g.trigger(l?"ajaxSuccess":"ajaxError",[A,h,l?d:p]),y.fireWith(m,[A,T]),f&&(g.trigger("ajaxComplete",[A,h]),--me.active||me.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{}
var i,o,a,s,u,l,c,f,d,p,h=me.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?me(m):me.event,v=me.Deferred(),y=me.Callbacks("once memory"),b=h.statusCode||{},w={},x={},T="canceled",A={readyState:0,getResponseHeader:function(e){var t
if(c){if(!s)for(s={};t=Ot.exec(a);)s[t[1].toLowerCase()]=t[2]
t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t
if(e)if(c)A.always(e[A.status])
else for(t in e)b[t]=[b[t],e[t]]
return this},abort:function(e){var t=e||T
return i&&i.abort(t),r(0,t),this}}
if(v.promise(A),h.url=((t||h.url||Ct.href)+"").replace(Ht,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ne)||[""],null==h.crossDomain){l=ne.createElement("a")
try{l.href=h.url,l.href=l.href,h.crossDomain=It.protocol+"//"+It.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=me.param(h.data,h.traditional)),J(Pt,h,n,A),c)return A
f=me.event&&h.global,f&&0==me.active++&&me.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Ft.test(h.type),o=h.url.replace(Mt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Lt,"+")):(p=h.url.slice(o.length),h.data&&(o+=(St.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(jt,"$1"),p=(St.test(o)?"&":"?")+"_="+Et+++p),h.url=o+p),h.ifModified&&(me.lastModified[o]&&A.setRequestHeader("If-Modified-Since",me.lastModified[o]),me.etag[o]&&A.setRequestHeader("If-None-Match",me.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&A.setRequestHeader("Content-Type",h.contentType),A.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+zt+"; q=0.01":""):h.accepts["*"])
for(d in h.headers)A.setRequestHeader(d,h.headers[d])
if(h.beforeSend&&(!1===h.beforeSend.call(m,A,h)||c))return A.abort()
if(T="abort",y.add(h.complete),A.done(h.success),A.fail(h.error),i=J(Rt,h,n,A)){if(A.readyState=1,f&&g.trigger("ajaxSend",[A,h]),c)return A
h.async&&h.timeout>0&&(u=e.setTimeout(function(){A.abort("timeout")},h.timeout))
try{c=!1,i.send(w,r)}catch(e){if(c)throw e
r(-1,e)}}else r(-1,"No Transport")
return A},getJSON:function(e,t,n){return me.get(e,t,n,"json")},getScript:function(e,t){return me.get(e,void 0,t,"script")}}),me.each(["get","post"],function(e,t){me[t]=function(e,n,r,i){return me.isFunction(n)&&(i=i||r,r=n,n=void 0),me.ajax(me.extend({url:e,type:t,dataType:i,data:n,success:r},me.isPlainObject(e)&&e))}}),me._evalUrl=function(e){return me.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},me.fn.extend({wrapAll:function(e){var t
return this[0]&&(me.isFunction(e)&&(e=e.call(this[0])),t=me(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this},wrapInner:function(e){return me.isFunction(e)?this.each(function(t){me(this).wrapInner(e.call(this,t))}):this.each(function(){var t=me(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=me.isFunction(e)
return this.each(function(n){me(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){me(this).replaceWith(this.childNodes)}),this}}),me.expr.pseudos.hidden=function(e){return!me.expr.pseudos.visible(e)},me.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},me.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}}
var Wt={0:200,1223:204},Bt=me.ajaxSettings.xhr()
pe.cors=!!Bt&&"withCredentials"in Bt,pe.ajax=Bt=!!Bt,me.ajaxTransport(function(t){var n,r
if(pe.cors||Bt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr()
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a]
t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest")
for(a in i)s.setRequestHeader(a,i[a])
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Wt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort")
try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),me.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),me.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return me.globalEval(e),e}}}),me.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),me.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(r,i){t=me("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),ne.head.appendChild(t[0])},abort:function(){n&&n()}}}})
var $t=[],Ut=/(=)\?(?=&|$)|\?\?/
me.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=$t.pop()||me.expando+"_"+Et++
return this[e]=!0,e}}),me.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Ut.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(t.data)&&"data")
if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=me.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ut,"$1"+i):!1!==t.jsonp&&(t.url+=(St.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||me.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?me(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,$t.push(i)),a&&me.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),pe.createHTMLDocument=function(){var e=ne.implementation.createHTMLDocument("").body
return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),me.parseHTML=function(e,t,n){if("string"!=typeof e)return[]
"boolean"==typeof t&&(n=t,t=!1)
var r,i,o
return t||(pe.createHTMLDocument?(t=ne.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=ne.location.href,t.head.appendChild(r)):t=ne),i=Ce.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=w([e],t,o),o&&o.length&&me(o).remove(),me.merge([],i.childNodes))},me.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ")
return s>-1&&(r=X(e.slice(s)),e=e.slice(0,s)),me.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&me.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?me("<div>").append(me.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},me.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){me.fn[t]=function(e){return this.on(t,e)}}),me.expr.pseudos.animated=function(e){return me.grep(me.timers,function(t){return e===t.elem}).length},me.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=me.css(e,"position"),f=me(e),d={}
"static"===c&&(e.style.position="relative"),s=f.offset(),o=me.css(e,"top"),u=me.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),me.isFunction(t)&&(t=t.call(e,n,me.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+i),"using"in t?t.using.call(e,d):f.css(d)}},me.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){me.offset.setOffset(this,e,t)})
var t,n,r,i,o=this[0]
return o?o.getClientRects().length?(r=o.getBoundingClientRect(),t=o.ownerDocument,n=t.documentElement,i=t.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===me.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),i(e[0],"html")||(r=e.offset()),r={top:r.top+me.css(e[0],"borderTopWidth",!0),left:r.left+me.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-me.css(n,"marginTop",!0),left:t.left-r.left-me.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===me.css(e,"position");)e=e.offsetParent
return e||Ge})}}),me.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t
me.fn[e]=function(r){return je(this,function(e,r,i){var o
return me.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),me.each(["top","left"],function(e,t){me.cssHooks[t]=j(pe.pixelPosition,function(e,n){if(n)return n=M(e,t),at.test(n)?me(e).position()[t]+"px":n})}),me.each({Height:"height",Width:"width"},function(e,t){me.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){me.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border")
return je(this,function(t,n,i){var o
return me.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?me.css(t,n,s):me.style(t,n,i,s)},t,a?i:void 0,a)}})}),me.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),me.holdReady=function(e){e?me.readyWait++:me.ready(!0)},me.isArray=Array.isArray,me.parseJSON=JSON.parse,me.nodeName=i,"function"==typeof define&&define.amd&&define("jquery",[],function(){return me})
var Yt=e.jQuery,Xt=e.$
return me.noConflict=function(t){return e.$===me&&(e.$=Xt),t&&e.jQuery===me&&(e.jQuery=Yt),me},t||(e.jQuery=e.$=me),me}),function(e,t,n){function r(e,t){return typeof e===t}var i=[],o=[],a={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this
setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},s=function(){}
s.prototype=a,s=new s
var u=t.documentElement,l="svg"===u.nodeName.toLowerCase();(function(){var e,t,n,a,u,l,c
for(var f in o)if(o.hasOwnProperty(f)){if(e=[],t=o[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase())
for(a=r(t.fn,"function")?t.fn():t.fn,u=0;u<e.length;u++)l=e[u],c=l.split("."),1===c.length?s[c[0]]=a:(!s[c[0]]||s[c[0]]instanceof Boolean||(s[c[0]]=new Boolean(s[c[0]])),s[c[0]][c[1]]=a),i.push((a?"":"no-")+c.join("-"))}})(),function(e){var t=u.className,n=s._config.classPrefix||""
if(l&&(t=t.baseVal),s._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)")
t=t.replace(r,"$1"+n+"js$2")}s._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?u.className.baseVal=t:u.className=t)}(i),delete a.addTest,delete a.addAsyncTest
for(var c=0;c<s._q.length;c++)s._q[c]()
e.Modernizr=s}(window,document),function(e){var t=navigator.userAgent
e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode
"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]")
for(e=0;e<t.length;e++)r(t[e])},o=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),s=function(){o(),a&&a.addListener&&a.addListener(o)}
return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?s():document.addEventListener("DOMContentLoaded",s),o}())}(window),function(e,t,n){"use strict"
function r(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function i(){q=!1,P=e.devicePixelRatio,F={},H={},g.DPR=P||1,R.width=Math.max(e.innerWidth||0,A.clientWidth),R.height=Math.max(e.innerHeight||0,A.clientHeight),R.vw=R.width/100,R.vh=R.height/100,m=[R.height,R.width,P].join("-"),R.em=g.getEmValue(),R.rem=R.em}function o(e,t,n,r){var i,o,a,s
return"saveData"===E.algorithm?e>2.7?s=n+1:(o=t-n,i=Math.pow(e-.6,1.5),a=o*i,r&&(a+=.1*i),s=e+a):s=n>1?Math.sqrt(e*t):e,s>n}function a(e){var t,n=g.getSet(e),r=!1
"pending"!==n&&(r=m,n&&(t=g.setRes(n),g.applySetCandidate(t,e))),e[g.ns].evaled=r}function s(e,t){return e.res-t.res}function u(e,t,n){var r
return!n&&t&&(n=e[g.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=g.makeUrl(t),e[g.ns].curSrc=t,e[g.ns].curCan=r,r.res||J(r,r.set.sizes)),r}function l(e,t){var n,r,i
if(e&&t)for(i=g.parseSet(t),e=g.makeUrl(e),n=0;n<i.length;n++)if(e===g.makeUrl(i[n].url)){r=i[n]
break}return r}function c(e,t){var n,r,i,o,a=e.getElementsByTagName("source")
for(n=0,r=a.length;r>n;n++)i=a[n],i[g.ns]=!0,(o=i.getAttribute("srcset"))&&t.push({srcset:o,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function f(e,t){function n(t){var n,r=t.exec(e.substring(f))
return r?(n=r[0],f+=n.length,n):void 0}function i(){var e,n,r,i,s,u,l,c,f,p=!1,h={}
for(i=0;i<a.length;i++)s=a[i],u=s[s.length-1],l=s.substring(0,s.length-1),c=parseInt(l,10),f=parseFloat(l),Y.test(l)&&"w"===u?((e||n)&&(p=!0),0===c?p=!0:e=c):X.test(l)&&"x"===u?((e||n||r)&&(p=!0),0>f?p=!0:n=f):Y.test(l)&&"h"===u?((r||n)&&(p=!0),0===c?p=!0:r=c):p=!0
p||(h.url=o,e&&(h.w=e),n&&(h.d=n),r&&(h.h=r),r||n||e||(h.d=1),1===h.d&&(t.has1x=!0),h.set=t,d.push(h))}for(var o,a,s,u,l,c=e.length,f=0,d=[];;){if(n(B),f>=c)return d
o=n($),a=[],","===o.slice(-1)?(o=o.replace(U,""),i()):function(){for(n(W),s="",u="in descriptor";;){if(l=e.charAt(f),"in descriptor"===u)if(r(l))s&&(a.push(s),s="",u="after descriptor")
else{if(","===l)return f+=1,s&&a.push(s),void i()
if("("===l)s+=l,u="in parens"
else{if(""===l)return s&&a.push(s),void i()
s+=l}}else if("in parens"===u)if(")"===l)s+=l,u="in descriptor"
else{if(""===l)return a.push(s),void i()
s+=l}else if("after descriptor"===u)if(r(l));else{if(""===l)return void i()
u="in descriptor",f-=1}f+=1}}()}}function d(e){var t,n,i,o,a,s,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i
for(n=function(e){function t(){o&&(a.push(o),o="")}function n(){a[0]&&(s.push(a),a=[])}for(var i,o="",a=[],s=[],u=0,l=0,c=!1;;){if(""===(i=e.charAt(l)))return t(),n(),s
if(c){if("*"===i&&"/"===e[l+1]){c=!1,l+=2,t()
continue}l+=1}else{if(r(i)){if(e.charAt(l-1)&&r(e.charAt(l-1))||!o){l+=1
continue}if(0===u){t(),l+=1
continue}i=" "}else if("("===i)u+=1
else if(")"===i)u-=1
else{if(","===i){t(),n(),l+=1
continue}if("/"===i&&"*"===e.charAt(l+1)){c=!0,l+=2
continue}}o+=i,l+=1}}}(e),i=n.length,t=0;i>t;t++)if(o=n[t],a=o[o.length-1],function(e){return!!(u.test(e)&&parseFloat(e)>=0)||(!!l.test(e)||("0"===e||"-0"===e||"+0"===e))}(a)){if(s=a,o.pop(),0===o.length)return s
if(o=o.join(" "),g.matchesMedia(o))return s}return"100vw"}t.createElement("picture")
var p,h,m,g={},v=!1,y=function(){},b=t.createElement("img"),w=b.getAttribute,x=b.setAttribute,T=b.removeAttribute,A=t.documentElement,C={},E={algorithm:""},S="data-pfsrc",k=S+"set",D=navigator.userAgent,_=/rident/.test(D)||/ecko/.test(D)&&D.match(/rv\:(\d+)/)&&RegExp.$1>35,N="currentSrc",L=/\s+\+?\d+(e\d+)?w/,M=/(\([^)]+\))?\s*(.+)/,j=e.picturefillCFG,O="font-size:100%!important;",q=!0,F={},H={},P=e.devicePixelRatio,R={px:1,in:96},z=t.createElement("a"),I=!1,W=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,$=/^[^ \t\n\r\u000c]+/,U=/[,]+$/,Y=/^\d+$/,X=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Q=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},V=function(e){var t={}
return function(n){return n in t||(t[n]=e(n)),t[n]}},G=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t])
return n},n=V(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"})
return function(t,r){var i
if(!(t in F))if(F[t]=!1,r&&(i=t.match(e)))F[t]=i[1]*R[i[2]]
else try{F[t]=new Function("e",n(t))(R)}catch(e){}return F[t]}}(),J=function(e,t){return e.w?(e.cWidth=g.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},K=function(e){if(v){var n,r,i,o=e||{}
if(o.elements&&1===o.elements.nodeType&&("IMG"===o.elements.nodeName.toUpperCase()?o.elements=[o.elements]:(o.context=o.elements,o.elements=null)),n=o.elements||g.qsa(o.context||t,o.reevaluate||o.reselect?g.sel:g.selShort),i=n.length){for(g.setupRun(o),I=!0,r=0;i>r;r++)g.fillImg(n[r],o)
g.teardownRun(o)}}}
e.console&&console.warn,N in b||(N="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.ns=("pf"+(new Date).getTime()).substr(0,9),g.supSrcset="srcset"in b,g.supSizes="sizes"in b,g.supPicture=!!e.HTMLPictureElement,g.supSrcset&&g.supPicture&&!g.supSizes&&function(e){b.srcset="data:,a",e.src="data:,a",g.supSrcset=b.complete===e.complete,g.supPicture=g.supSrcset&&g.supPicture}(t.createElement("img")),g.supSrcset&&!g.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),r=function(){2===n.width&&(g.supSizes=!0),h=g.supSrcset&&!g.supSizes,v=!0,setTimeout(K)}
n.onload=r,n.onerror=r,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",n.src=e}():v=!0,g.selShort="picture>img,img[srcset]",g.sel=g.selShort,g.cfg=E,g.DPR=P||1,g.u=R,g.types=C,g.setSize=y,g.makeUrl=V(function(e){return z.href=e,z.href}),g.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},g.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?g.matchesMedia=function(e){return!e||matchMedia(e).matches}:g.matchesMedia=g.mMQ,g.matchesMedia.apply(this,arguments)},g.mMQ=function(e){return!e||G(e)},g.calcLength=function(e){var t=G(e,!0)||!1
return 0>t&&(t=!1),t},g.supportsType=function(e){return!e||C[e]},g.parseSize=V(function(e){var t=(e||"").match(M)
return{media:t&&t[1],length:t&&t[2]}}),g.parseSet=function(e){return e.cands||(e.cands=f(e.srcset,e)),e.cands},g.getEmValue=function(){var e
if(!p&&(e=t.body)){var n=t.createElement("div"),r=A.style.cssText,i=e.style.cssText
n.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",A.style.cssText=O,e.style.cssText=O,e.appendChild(n),p=n.offsetWidth,e.removeChild(n),p=parseFloat(p,10),A.style.cssText=r,e.style.cssText=i}return p||16},g.calcListLength=function(e){if(!(e in H)||E.uT){var t=g.calcLength(d(e))
H[e]=t||R.width}return H[e]},g.setRes=function(e){var t
if(e){t=g.parseSet(e)
for(var n=0,r=t.length;r>n;n++)J(t[n],e.sizes)}return t},g.setRes.res=J,g.applySetCandidate=function(e,t){if(e.length){var n,r,i,a,l,c,f,d,p,h=t[g.ns],m=g.DPR
if(c=h.curSrc||t[N],f=h.curCan||u(t,c,e[0].set),f&&f.set===e[0].set&&((p=_&&!t.complete&&f.res-.1>m)||(f.cached=!0,f.res>=m&&(l=f))),!l)for(e.sort(s),a=e.length,l=e[a-1],r=0;a>r;r++)if(n=e[r],n.res>=m){i=r-1,l=e[i]&&(p||c!==g.makeUrl(n.url))&&o(e[i].res,n.res,m,e[i].cached)?e[i]:n
break}l&&(d=g.makeUrl(l.url),h.curSrc=d,h.curCan=l,d!==c&&g.setSrc(t,l),g.setSize(t))}},g.setSrc=function(e,t){var n
e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},g.getSet=function(e){var t,n,r,i=!1,o=e[g.ns].sets
for(t=0;t<o.length&&!i;t++)if(n=o[t],n.srcset&&g.matchesMedia(n.media)&&(r=g.supportsType(n.type))){"pending"===r&&(n=r),i=n
break}return i},g.parseSets=function(e,t,r){var i,o,a,s,u=t&&"PICTURE"===t.nodeName.toUpperCase(),f=e[g.ns];(f.src===n||r.src)&&(f.src=w.call(e,"src"),f.src?x.call(e,S,f.src):T.call(e,S)),(f.srcset===n||r.srcset||!g.supSrcset||e.srcset)&&(i=w.call(e,"srcset"),f.srcset=i,s=!0),f.sets=[],u&&(f.pic=!0,c(t,f.sets)),f.srcset?(o={srcset:f.srcset,sizes:w.call(e,"sizes")},f.sets.push(o),(a=(h||f.src)&&L.test(f.srcset||""))||!f.src||l(f.src,o)||o.has1x||(o.srcset+=", "+f.src,o.cands.push({url:f.src,d:1,set:o}))):f.src&&f.sets.push({srcset:f.src,sizes:null}),f.curCan=null,f.curSrc=n,f.supported=!(u||o&&!g.supSrcset||a&&!g.supSizes),s&&g.supSrcset&&!f.supported&&(i?(x.call(e,k,i),e.srcset=""):T.call(e,k)),f.supported&&!f.srcset&&(!f.src&&e.src||e.src!==g.makeUrl(f.src))&&(null===f.src?e.removeAttribute("src"):e.src=f.src),f.parsed=!0},g.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate
e[g.ns]||(e[g.ns]={}),n=e[g.ns],(r||n.evaled!==m)&&((!n.parsed||t.reevaluate)&&g.parseSets(e,e.parentNode,t),n.supported?n.evaled=m:a(e))},g.setupRun=function(){(!I||q||P!==e.devicePixelRatio)&&i()},g.supPicture?(K=y,g.fillImg=y):function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||""
o=setTimeout(i,"loading"===e?200:999),t.body&&(g.fillImgs(),(n=n||r.test(e))&&clearTimeout(o))},o=setTimeout(i,t.body?9:99),a=A.clientHeight,s=function(){q=Math.max(e.innerWidth||0,A.clientWidth)!==R.width||A.clientHeight!==a,a=A.clientHeight,q&&g.fillImgs()}
Q(e,"resize",function(e,t){var n,r,i=function(){var o=new Date-r
t>o?n=setTimeout(i,t-o):(n=null,e())}
return function(){r=new Date,n||(n=setTimeout(i,t))}}(s,99)),Q(t,"readystatechange",i)}(),g.picturefill=K,g.fillImgs=K,g.teardownRun=y,K._=g,e.picturefillCFG={pf:g,push:function(e){var t=e.shift()
"function"==typeof g[t]?g[t].apply(g,e):(E[t]=e[0],I&&g.fillImgs({reselect:!0}))}}
for(;j&&j.length;)e.picturefillCFG.push(j.shift())
e.picturefill=K,"object"==typeof module&&"object"==typeof module.exports?module.exports=K:"function"==typeof define&&define.amd&&define("picturefill",function(){return K}),g.supPicture||(C["image/webp"]=function(t,n){var r=new e.Image
return r.onerror=function(){C[t]=!1,K()},r.onload=function(){C[t]=1===r.width,K()},r.src=n,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(e,t){var n=function(e,t){"use strict"
if(t.getElementsByClassName){var n,r,i=t.documentElement,o=e.Date,a=e.HTMLPictureElement,s="addEventListener",u="getAttribute",l=e[s],c=e.setTimeout,f=e.requestAnimationFrame||c,d=e.requestIdleCallback,p=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],m={},g=Array.prototype.forEach,v=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[u]("class")||"")&&m[t]},y=function(e,t){v(e,t)||e.setAttribute("class",(e[u]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[u]("class")||"").replace(n," "))},w=function(e,t,n){var r=n?s:"removeEventListener"
n&&w(e,t),h.forEach(function(n){e[r](n,t)})},x=function(e,r,i,o,a){var s=t.createEvent("CustomEvent")
return i||(i={}),i.instance=n,s.initCustomEvent(r,!o,!a,i),e.dispatchEvent(s),s},T=function(t,n){var i
!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode
return n},E=function(){var e,n,r=[],i=[],o=r,a=function(){var t=o
for(o=r.length?i:r,e=!0,n=!1;t.length;)t.shift()()
e=!1},s=function(r,i){e&&!i?r.apply(this,arguments):(o.push(r),n||(n=!0,(t.hidden?c:f)(a)))}
return s._lsFlush=a,s}(),S=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments
E(function(){e.apply(t,n)})}},k=function(e){var t,n=0,r=666,i=function(){t=!1,n=o.now(),e()},a=d?function(){d(i,{timeout:r}),666!==r&&(r=666)}:S(function(){c(i)},!0)
return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,i=125-(o.now()-n),0>i&&(i=0),e||9>i&&d?a():c(a,i))}},D=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=o.now()-n
99>e?c(i,99-e):(d||r)(r)}
return function(){n=o.now(),t||(t=c(i,99))}},_=function(){var a,f,d,h,m,C,_,L,M,j,O,q,F,H,P=/^img$/i,R=/^iframe$/i,z="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,W=0,B=-1,$=function(e){W--,e&&e.target&&w(e.target,$),(!e||0>W||!e.target)&&(W=0)},U=function(e,n){var r,o=e,a="hidden"==A(t.body,"visibility")||"hidden"!=A(e,"visibility")
for(L-=n,O+=n,M-=n,j+=n;a&&(o=o.offsetParent)&&o!=t.body&&o!=i;)(a=(A(o,"opacity")||1)>0)&&"visible"!=A(o,"overflow")&&(r=o.getBoundingClientRect(),a=j>r.left&&M<r.right&&O>r.top-1&&L<r.bottom+1)
return a},Y=function(){var e,o,s,l,c,d,p,m,g,v=n.elements
if((h=r.loadMode)&&8>W&&(e=v.length)){o=0,B++,null==F&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),q=r.expand,F=q*r.expFactor),F>I&&1>W&&B>2&&h>2&&!t.hidden?(I=F,B=0):I=h>1&&B>1&&6>W?q:0
for(;e>o;o++)if(v[o]&&!v[o]._lazyRace)if(z)if((m=v[o][u]("data-expand"))&&(d=1*m)||(d=I),g!==d&&(C=innerWidth+d*H,_=innerHeight+d,p=-1*d,g=d),s=v[o].getBoundingClientRect(),(O=s.bottom)>=p&&(L=s.top)<=_&&(j=s.right)>=p*H&&(M=s.left)<=C&&(O||j||M||L)&&(r.loadHidden||"hidden"!=A(v[o],"visibility"))&&(f&&3>W&&!m&&(3>h||4>B)||U(v[o],d))){if(ee(v[o]),c=!0,W>9)break}else!c&&f&&!l&&4>W&&4>B&&h>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(O||j||M||L||"auto"!=v[o][u](r.sizesAttr)))&&(l=a[0]||v[o])
else ee(v[o])
l&&!c&&ee(l)}},X=k(Y),Q=function(e){y(e.target,r.loadedClass),b(e.target,r.loadingClass),w(e.target,G),x(e.target,"lazyloaded")},V=S(Q),G=function(e){V({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,n=e[u](r.srcsetAttr);(t=r.customMedia[e[u]("data-media")||e[u]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Z=S(function(e,t,n,i,o){var a,s,l,f,h,m;(h=x(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,r.autosizesClass):e.setAttribute("sizes",i)),s=e[u](r.srcsetAttr),a=e[u](r.srcAttr),o&&(l=e.parentNode,f=l&&p.test(l.nodeName||"")),m=t.firesLoad||"src"in e&&(s||a||f),h={target:e},m&&(w(e,$,!0),clearTimeout(d),d=c($,2500),y(e,r.loadingClass),w(e,G,!0)),f&&g.call(l.getElementsByTagName("source"),K),s?e.setAttribute("srcset",s):a&&!f&&(R.test(e.nodeName)?J(e,a):e.src=a),o&&(s||f)&&T(e,{src:a})),e._lazyRace&&delete e._lazyRace,b(e,r.lazyClass),E(function(){(!m||e.complete&&e.naturalWidth>1)&&(m?$(h):W--,Q(h))},!0)}),ee=function(e){var t,n=P.test(e.nodeName),i=n&&(e[u](r.sizesAttr)||e[u]("sizes")),o="auto"==i;(!o&&f||!n||!e[u]("src")&&!e.srcset||e.complete||v(e,r.errorClass))&&(t=x(e,"lazyunveilread").detail,o&&N.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,W++,Z(e,t,o,i,n))},te=function(){if(!f){if(o.now()-m<999)return void c(te,999)
var e=D(function(){r.loadMode=3,X()})
f=!0,r.loadMode=3,X(),l("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}}
return{_:function(){m=o.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),H=r.hFac,l("scroll",X,!0),l("resize",X,!0),e.MutationObserver?new MutationObserver(X).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",X,!0),i[s]("DOMAttrModified",X,!0),setInterval(X,999)),l("hashchange",X,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[s](e,X,!0)}),/d$|^c/.test(t.readyState)?te():(l("load",te),t[s]("DOMContentLoaded",X),c(te,2e4)),n.elements.length?(Y(),E._lsFlush()):X()},checkElems:X,unveil:ee}}(),N=function(){var e,n=S(function(e,t,n,r){var i,o,a
if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),o=0,a=i.length;a>o;o++)i[o].setAttribute("sizes",r)
n.detail.dataAttr||T(e,n.detail)}),i=function(e,t,r){var i,o=e.parentNode
o&&(r=C(e,o,r),i=x(e,"lazybeforesizes",{width:r,dataAttr:!!t}),i.defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,o,i,r))},o=function(){var t,n=e.length
if(n)for(t=0;n>t;t++)i(e[t])},a=D(o)
return{_:function(){e=t.getElementsByClassName(r.autosizesClass),l("resize",a)},checkElems:a,updateElem:i}}(),L=function(){L.i||(L.i=!0,N._(),_._())}
return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0}
r=e.lazySizesConfig||e.lazysizesConfig||{}
for(t in n)t in r||(r[t]=n[t])
e.lazySizesConfig=r,c(function(){r.init&&L()})}(),n={cfg:r,autoSizer:N,loader:_,init:L,uP:T,aC:y,rC:b,hC:v,fire:x,gW:C,rAF:E}}}(e,e.document)
e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window),function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(e){"use strict"
function t(t){return!t||void 0!==t.allowPageScroll||void 0===t.swipe&&void 0===t.swipeStatus||(t.allowPageScroll=l),void 0!==t.click&&void 0===t.tap&&(t.tap=t.click),t||(t={}),t=e.extend({},e.fn.swipe.defaults,t),this.each(function(){var r=e(this),i=r.data(k)
i||(i=new n(this,t),r.data(k,i))})}function n(t,n){function D(t){if(!(le()||e(t.target).closest(n.excludedElements,Ue).length>0)){var r=t.originalEvent?t.originalEvent:t
if(!r.pointerType||"mouse"!=r.pointerType||0!=n.fallbackToMouseEvents){var i,o=r.touches,a=o?o[0]:r
return Ye=w,o?Xe=o.length:!1!==n.preventDefaultEvents&&t.preventDefault(),qe=0,Fe=null,He=null,Be=null,Pe=0,Re=0,ze=0,Ie=1,We=0,$e=ge(),se(),fe(0,a),!o||Xe===n.fingers||n.fingers===y||B()?(Ve=Ee(),2==Xe&&(fe(1,o[1]),Re=ze=be(Qe[0].start,Qe[1].start)),(n.swipeStatus||n.pinchStatus)&&(i=q(r,Ye))):i=!1,!1===i?(Ye=A,q(r,Ye),i):(n.hold&&(tt=setTimeout(e.proxy(function(){Ue.trigger("hold",[r.target]),n.hold&&(i=n.hold.call(Ue,r,r.target))},this),n.longTapThreshold)),ce(!0),null)}}}function _(e){var t=e.originalEvent?e.originalEvent:e
if(Ye!==T&&Ye!==A&&!ue()){var r,i=t.touches,o=i?i[0]:t,a=de(o)
if(Ge=Ee(),i&&(Xe=i.length),n.hold&&clearTimeout(tt),Ye=x,2==Xe&&(0==Re?(fe(1,i[1]),Re=ze=be(Qe[0].start,Qe[1].start)):(de(i[1]),ze=be(Qe[0].end,Qe[1].end),Be=xe(Qe[0].end,Qe[1].end)),Ie=we(Re,ze),We=Math.abs(Re-ze)),Xe===n.fingers||n.fingers===y||!i||B()){if(Fe=Ce(a.start,a.end),He=Ce(a.last,a.end),I(e,He),qe=Te(a.start,a.end),Pe=ye(),he(Fe,qe),r=q(t,Ye),!n.triggerOnTouchEnd||n.triggerOnTouchLeave){var s=!0
if(n.triggerOnTouchLeave){var u=Se(this)
s=ke(a.end,u)}!n.triggerOnTouchEnd&&s?Ye=O(x):n.triggerOnTouchLeave&&!s&&(Ye=O(T)),Ye!=A&&Ye!=T||q(t,Ye)}}else Ye=A,q(t,Ye)
!1===r&&(Ye=A,q(t,Ye))}}function N(e){var t=e.originalEvent?e.originalEvent:e,r=t.touches
if(r){if(r.length&&!ue())return ae(t),!0
if(r.length&&ue())return!0}return ue()&&(Xe=Ke),Ge=Ee(),Pe=ye(),P()||!H()?(Ye=A,q(t,Ye)):n.triggerOnTouchEnd||!1===n.triggerOnTouchEnd&&Ye===x?(!1!==n.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),Ye=T,q(t,Ye)):!n.triggerOnTouchEnd&&G()?(Ye=T,F(t,Ye,p)):Ye===x&&(Ye=A,q(t,Ye)),ce(!1),null}function L(){Xe=0,Ge=0,Ve=0,Re=0,ze=0,Ie=1,se(),ce(!1)}function M(e){var t=e.originalEvent?e.originalEvent:e
n.triggerOnTouchLeave&&(Ye=O(T),q(t,Ye))}function j(){Ue.unbind(Ne,D),Ue.unbind(Oe,L),Ue.unbind(Le,_),Ue.unbind(Me,N),je&&Ue.unbind(je,M),ce(!1)}function O(e){var t=e,r=z(),i=H(),o=P()
return!r||o?t=A:!i||e!=x||n.triggerOnTouchEnd&&!n.triggerOnTouchLeave?!i&&e==T&&n.triggerOnTouchLeave&&(t=A):t=T,t}function q(e,t){var n,r=e.touches
return(X()||Y())&&(n=F(e,t,f)),($()||B())&&!1!==n&&(n=F(e,t,d)),ie()&&!1!==n?n=F(e,t,h):oe()&&!1!==n?n=F(e,t,m):re()&&!1!==n&&(n=F(e,t,p)),t===A&&L(e),t===T&&(r?r.length||L(e):L(e)),n}function F(t,l,c){var g
if(c==f){if(Ue.trigger("swipeStatus",[l,Fe||null,qe||0,Pe||0,Xe,Qe,He]),n.swipeStatus&&!1===(g=n.swipeStatus.call(Ue,t,l,Fe||null,qe||0,Pe||0,Xe,Qe,He)))return!1
if(l==T&&U()){if(clearTimeout(et),clearTimeout(tt),Ue.trigger("swipe",[Fe,qe,Pe,Xe,Qe,He]),n.swipe&&!1===(g=n.swipe.call(Ue,t,Fe,qe,Pe,Xe,Qe,He)))return!1
switch(Fe){case r:Ue.trigger("swipeLeft",[Fe,qe,Pe,Xe,Qe,He]),n.swipeLeft&&(g=n.swipeLeft.call(Ue,t,Fe,qe,Pe,Xe,Qe,He))
break
case i:Ue.trigger("swipeRight",[Fe,qe,Pe,Xe,Qe,He]),n.swipeRight&&(g=n.swipeRight.call(Ue,t,Fe,qe,Pe,Xe,Qe,He))
break
case o:Ue.trigger("swipeUp",[Fe,qe,Pe,Xe,Qe,He]),n.swipeUp&&(g=n.swipeUp.call(Ue,t,Fe,qe,Pe,Xe,Qe,He))
break
case a:Ue.trigger("swipeDown",[Fe,qe,Pe,Xe,Qe,He]),n.swipeDown&&(g=n.swipeDown.call(Ue,t,Fe,qe,Pe,Xe,Qe,He))}}}if(c==d){if(Ue.trigger("pinchStatus",[l,Be||null,We||0,Pe||0,Xe,Ie,Qe]),n.pinchStatus&&!1===(g=n.pinchStatus.call(Ue,t,l,Be||null,We||0,Pe||0,Xe,Ie,Qe)))return!1
if(l==T&&W())switch(Be){case s:Ue.trigger("pinchIn",[Be||null,We||0,Pe||0,Xe,Ie,Qe]),n.pinchIn&&(g=n.pinchIn.call(Ue,t,Be||null,We||0,Pe||0,Xe,Ie,Qe))
break
case u:Ue.trigger("pinchOut",[Be||null,We||0,Pe||0,Xe,Ie,Qe]),n.pinchOut&&(g=n.pinchOut.call(Ue,t,Be||null,We||0,Pe||0,Xe,Ie,Qe))}}return c==p?l!==A&&l!==T||(clearTimeout(et),clearTimeout(tt),J()&&!ee()?(Ze=Ee(),et=setTimeout(e.proxy(function(){Ze=null,Ue.trigger("tap",[t.target]),n.tap&&(g=n.tap.call(Ue,t,t.target))},this),n.doubleTapThreshold)):(Ze=null,Ue.trigger("tap",[t.target]),n.tap&&(g=n.tap.call(Ue,t,t.target)))):c==h?l!==A&&l!==T||(clearTimeout(et),clearTimeout(tt),Ze=null,Ue.trigger("doubletap",[t.target]),n.doubleTap&&(g=n.doubleTap.call(Ue,t,t.target))):c==m&&(l!==A&&l!==T||(clearTimeout(et),Ze=null,Ue.trigger("longtap",[t.target]),n.longTap&&(g=n.longTap.call(Ue,t,t.target)))),g}function H(){var e=!0
return null!==n.threshold&&(e=qe>=n.threshold),e}function P(){var e=!1
return null!==n.cancelThreshold&&null!==Fe&&(e=me(Fe)-qe>=n.cancelThreshold),e}function R(){return null===n.pinchThreshold||We>=n.pinchThreshold}function z(){return!(n.maxTimeThreshold&&Pe>=n.maxTimeThreshold)}function I(e,t){if(!1!==n.preventDefaultEvents)if(n.allowPageScroll===l)e.preventDefault()
else{var s=n.allowPageScroll===c
switch(t){case r:(n.swipeLeft&&s||!s&&n.allowPageScroll!=g)&&e.preventDefault()
break
case i:(n.swipeRight&&s||!s&&n.allowPageScroll!=g)&&e.preventDefault()
break
case o:(n.swipeUp&&s||!s&&n.allowPageScroll!=v)&&e.preventDefault()
break
case a:(n.swipeDown&&s||!s&&n.allowPageScroll!=v)&&e.preventDefault()}}}function W(){var e=Q(),t=V(),n=R()
return e&&t&&n}function B(){return!!(n.pinchStatus||n.pinchIn||n.pinchOut)}function $(){return!(!W()||!B())}function U(){var e=z(),t=H(),n=Q(),r=V()
return!P()&&r&&n&&t&&e}function Y(){return!!(n.swipe||n.swipeStatus||n.swipeLeft||n.swipeRight||n.swipeUp||n.swipeDown)}function X(){return!(!U()||!Y())}function Q(){return Xe===n.fingers||n.fingers===y||!C}function V(){return 0!==Qe[0].end.x}function G(){return!!n.tap}function J(){return!!n.doubleTap}function K(){return!!n.longTap}function Z(){if(null==Ze)return!1
var e=Ee()
return J()&&e-Ze<=n.doubleTapThreshold}function ee(){return Z()}function te(){return(1===Xe||!C)&&(isNaN(qe)||qe<n.threshold)}function ne(){return Pe>n.longTapThreshold&&qe<b}function re(){return!(!te()||!G())}function ie(){return!(!Z()||!J())}function oe(){return!(!ne()||!K())}function ae(e){Je=Ee(),Ke=e.touches.length+1}function se(){Je=0,Ke=0}function ue(){var e=!1
if(Je){Ee()-Je<=n.fingerReleaseThreshold&&(e=!0)}return e}function le(){return!(!0!==Ue.data(k+"_intouch"))}function ce(e){Ue&&(!0===e?(Ue.bind(Le,_),Ue.bind(Me,N),je&&Ue.bind(je,M)):(Ue.unbind(Le,_,!1),Ue.unbind(Me,N,!1),je&&Ue.unbind(je,M,!1)),Ue.data(k+"_intouch",!0===e))}function fe(e,t){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}}
return n.start.x=n.last.x=n.end.x=t.pageX||t.clientX,n.start.y=n.last.y=n.end.y=t.pageY||t.clientY,Qe[e]=n,n}function de(e){var t=void 0!==e.identifier?e.identifier:0,n=pe(t)
return null===n&&(n=fe(t,e)),n.last.x=n.end.x,n.last.y=n.end.y,n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n}function pe(e){return Qe[e]||null}function he(e,t){e!=l&&(t=Math.max(t,me(e)),$e[e].distance=t)}function me(e){if($e[e])return $e[e].distance}function ge(){var e={}
return e[r]=ve(r),e[i]=ve(i),e[o]=ve(o),e[a]=ve(a),e}function ve(e){return{direction:e,distance:0}}function ye(){return Ge-Ve}function be(e,t){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y)
return Math.round(Math.sqrt(n*n+r*r))}function we(e,t){return(t/e*1).toFixed(2)}function xe(){return Ie<1?u:s}function Te(e,t){return Math.round(Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))}function Ae(e,t){var n=e.x-t.x,r=t.y-e.y,i=Math.atan2(r,n),o=Math.round(180*i/Math.PI)
return o<0&&(o=360-Math.abs(o)),o}function Ce(e,t){if(De(e,t))return l
var n=Ae(e,t)
return n<=45&&n>=0?r:n<=360&&n>=315?r:n>=135&&n<=225?i:n>45&&n<135?a:o}function Ee(){return(new Date).getTime()}function Se(t){t=e(t)
var n=t.offset()
return{left:n.left,right:n.left+t.outerWidth(),top:n.top,bottom:n.top+t.outerHeight()}}function ke(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom}function De(e,t){return e.x==t.x&&e.y==t.y}var n=e.extend({},n),_e=C||S||!n.fallbackToMouseEvents,Ne=_e?S?E?"MSPointerDown":"pointerdown":"touchstart":"mousedown",Le=_e?S?E?"MSPointerMove":"pointermove":"touchmove":"mousemove",Me=_e?S?E?"MSPointerUp":"pointerup":"touchend":"mouseup",je=_e?S?"mouseleave":null:"mouseleave",Oe=S?E?"MSPointerCancel":"pointercancel":"touchcancel",qe=0,Fe=null,He=null,Pe=0,Re=0,ze=0,Ie=1,We=0,Be=0,$e=null,Ue=e(t),Ye="start",Xe=0,Qe={},Ve=0,Ge=0,Je=0,Ke=0,Ze=0,et=null,tt=null
try{Ue.bind(Ne,D),Ue.bind(Oe,L)}catch(t){e.error("events not supported "+Ne+","+Oe+" on jQuery.swipe")}this.enable=function(){return this.disable(),Ue.bind(Ne,D),Ue.bind(Oe,L),Ue},this.disable=function(){return j(),Ue},this.destroy=function(){j(),Ue.data(k,null),Ue=null},this.option=function(t,r){if("object"==typeof t)n=e.extend(n,t)
else if(void 0!==n[t]){if(void 0===r)return n[t]
n[t]=r}else{if(!t)return n
e.error("Option "+t+" does not exist on jQuery.swipe.options")}return null}}var r="left",i="right",o="up",a="down",s="in",u="out",l="none",c="auto",f="swipe",d="pinch",p="tap",h="doubletap",m="longtap",g="horizontal",v="vertical",y="all",b=10,w="start",x="move",T="end",A="cancel",C="ontouchstart"in window,E=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!C,S=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!C,k="TouchSwipe",D={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0}
e.fn.swipe=function(n){var r=e(this),i=r.data(k)
if(i&&"string"==typeof n){if(i[n])return i[n].apply(i,Array.prototype.slice.call(arguments,1))
e.error("Method "+n+" does not exist on jQuery.swipe")}else if(i&&"object"==typeof n)i.option.apply(i,arguments)
else if(!(i||"object"!=typeof n&&n))return t.apply(this,arguments)
return r},e.fn.swipe.version="1.6.18",e.fn.swipe.defaults=D,e.fn.swipe.phases={PHASE_START:w,PHASE_MOVE:x,PHASE_END:T,PHASE_CANCEL:A},e.fn.swipe.directions={LEFT:r,RIGHT:i,UP:o,DOWN:a,IN:s,OUT:u},e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:g,VERTICAL:v,AUTO:c},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:y}}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.pickmeup=t()}(this,function(){function e(e,t,n){if(n=n||[],e instanceof Element)t.apply(t,[e].concat(n))
else{var r,i
for(r=e.length,i=0;i<r;++i)t.apply(t,[e[i]].concat(n))}}function t(t){e(t,function(e){e.parentElement.removeChild(e)})}function n(e,t){do{e=e.parentElement}while(e&&!r(e,t))
return e}function r(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}function i(e,t){return e&&e.classList.contains(t)}function o(e,t){e.classList.add(t)}function a(e,t,n,r){if(-1!==n.indexOf(" ")){n=n.split(" ")
var i,o=n.length
for(i=0;i<o;++i)a(e,t,n[i],r)}else e.__pickmeup.events.push([t,n,r]),t.addEventListener(n,r)}function s(e,t,n,r){var i,o,a
if(n&&-1!==n.indexOf(" "))for(i=n.split(" "),o=i.length,a=0;a<o;++a)s(e,t,i[a],r)
else for(i=e.__pickmeup.events,o=i.length,a=0;a<o;++a)t&&t!=i[a][0]||n&&n!=i[a][1]||r&&r!=i[a][2]||i[a][0].removeEventListener(i[a][1],i[a][2])}function u(e){return e=e.getBoundingClientRect(),{top:e.top+window.pageYOffset-document.documentElement.clientTop,left:e.left+window.pageXOffset-document.documentElement.clientLeft}}function l(e,t,n){var r=document.createEvent("Event")
return n&&(r.detail=n),r.initEvent("pickmeup-"+t,!1,!0),e.dispatchEvent(r)}function c(e){e=new Date(e)
for(var t=28,n=e.getMonth();e.getMonth()==n;)++t,e.setDate(t)
return t-1}function f(e,t){e.setDate(e.getDate()+t)}function d(e,t){var n=e.getDate()
e.setDate(1),e.setMonth(e.getMonth()+t),e.setDate(Math.min(n,c(e)))}function p(e,t){var n=e.getDate()
e.setDate(1),e.setFullYear(e.getFullYear()+t),e.setDate(Math.min(n,c(e)))}function h(e){var n,r,a,s,u,c=e.__pickmeup.element,h=e.__pickmeup.options,m=Math.floor(h.calendars/2),y=h.date,b=h.current,w=h.min?new Date(h.min):null,x=h.max?new Date(h.max):null
w&&(w.setDate(1),d(w,1),f(w,-1)),x&&(x.setDate(1),d(x,1),f(x,-1)),t(Array.prototype.slice.call(c.querySelectorAll(".pmu-instance > :not(nav)")))
for(var T=0;T<h.calendars;T++)if(n=new Date(b),g(n),a=Array.prototype.slice.call(c.querySelectorAll(".pmu-instance"))[T],i(c,"pmu-view-years")?(p(n,12*(T-m)),r=n.getFullYear()-6+" - "+(n.getFullYear()+5)):i(c,"pmu-view-months")?(p(n,T-m),r=n.getFullYear()):i(c,"pmu-view-days")&&(d(n,T-m),r=v(n,h.title_format,h.locales[h.locale])),!u&&x&&(u=new Date(n),h.select_day?d(u,h.calendars-1):h.select_month?p(u,h.calendars-1):p(u,12*(h.calendars-1)),u>x))--T,d(b,-1),u=void 0
else if(u=new Date(n),!s&&(s=new Date(n),s.setDate(1),d(s,1),f(s,-1),w&&w>s))--T,d(b,1),s=void 0
else{a.querySelector(".pmu-month").textContent=r
var A=function(e){return"range"==h.mode&&e>=new Date(y[0]).getFullYear()&&e<=new Date(y[1]).getFullYear()||"multiple"==h.mode&&-1!==y.reduce(function(e,t){return e.push(new Date(t).getFullYear()),e},[]).indexOf(e)||new Date(y).getFullYear()==e},C=function(e,t){var n=new Date(y[0]).getFullYear(),r=new Date(y[1]).getFullYear(),i=new Date(y[0]).getMonth(),o=new Date(y[1]).getMonth()
return"range"==h.mode&&(e>n&&e<r||e>n&&e==r&&t<=o||e==n&&e<r&&t>=i||e==n&&e==r&&t>=i&&t<=o)||"multiple"==h.mode&&-1!==y.reduce(function(e,t){return t=new Date(t),e.push(t.getFullYear()+"-"+t.getMonth()),e},[]).indexOf(e+"-"+t)||new Date(y).getFullYear()==e&&new Date(y).getMonth()==t}
!function(){var e,t,r,i=[],s=n.getFullYear()-6,u=new Date(h.min).getFullYear(),l=new Date(h.max).getFullYear()
for(r=0;12>r;++r)e=s+r,t=document.createElement("div"),t.textContent=e,t.__pickmeup_year=e,h.min&&e<u||h.max&&e>l?o(t,"pmu-disabled"):A(e)&&o(t,"pmu-selected"),i.push(t)
a.appendChild(h.instance_content_template(i,"pmu-years"))}(),function(){var e,t,r=[],i=n.getFullYear(),s=new Date(h.min).getFullYear(),u=new Date(h.min).getMonth(),l=new Date(h.max).getFullYear(),c=new Date(h.max).getMonth()
for(e=0;12>e;++e)t=document.createElement("div"),t.textContent=h.locales[h.locale].monthsShort[e],t.__pickmeup_month=e,t.__pickmeup_year=i,h.min&&(i<s||e<u&&i==s)||h.max&&(i>l||e>c&&i>=l)?o(t,"pmu-disabled"):C(i,e)&&o(t,"pmu-selected"),r.push(t)
a.appendChild(h.instance_content_template(r,"pmu-months"))}(),function(){var e,t,r,i,s,u=[],l=n.getMonth(),c=g(new Date).valueOf()
for(function(){n.setDate(1)
var e=(n.getDay()-h.first_day)%7
f(n,-(e+(0>e?7:0)))}(),e=0;42>e;++e)t=document.createElement("div"),t.textContent=n.getDate(),t.__pickmeup_day=n.getDate(),t.__pickmeup_month=n.getMonth(),t.__pickmeup_year=n.getFullYear(),l!=n.getMonth()&&o(t,"pmu-not-in-month"),0==n.getDay()?o(t,"pmu-sunday"):6==n.getDay()&&o(t,"pmu-saturday"),r=h.render(new Date(n))||{},i=g(new Date(n)).valueOf(),s=h.min&&h.min>n||h.max&&h.max<n,selected=h.date.valueOf()==i||h.date instanceof Array&&h.date.reduce(function(e,t){return e||i===t.valueOf()},!1)||"range"==h.mode&&i>=h.date[0]&&i<=h.date[1],r.disabled||!("disabled"in r)&&s?o(t,"pmu-disabled"):(r.selected||!("selected"in r)&&selected)&&o(t,"pmu-selected"),i==c&&o(t,"pmu-today"),r.class_name&&r.class_name.split(" ").forEach(o.bind(t,t)),u.push(t),f(n,1)
a.appendChild(h.instance_content_template(u,"pmu-days"))}()}s.setDate(1),u.setDate(1),d(u,1),f(u,-1),m=c.querySelector(".pmu-prev"),c=c.querySelector(".pmu-next"),m&&(m.style.visibility=h.min&&h.min>=s?"hidden":"visible"),c&&(c.style.visibility=h.max&&h.max<=u?"hidden":"visible"),l(e,"fill")}function m(e,t){var n=t.format,r=t.separator,i=t.locales[t.locale]
if(e instanceof Date||e instanceof Number)return g(new Date(e))
if(!e)return g(new Date)
if(e instanceof Array){for(e=e.slice(),n=0;n<e.length;++n)e[n]=m(e[n],t)
return e}if(r=e.split(r),1<r.length)return r.forEach(function(e,n,r){r[n]=m(e.trim(),t)}),r
r=[].concat(i.daysShort,i.daysMin,i.days,i.monthsShort,i.months),r=r.map(function(e){return"("+e+")"}),r=new RegExp("[^0-9a-zA-Z"+r.join("")+"]+"),e=e.split(r)
for(var o,a,s,u,l,r=n.split(r),c=new Date,n=0;n<e.length;n++)switch(r[n]){case"b":a=i.monthsShort.indexOf(e[n])
break
case"B":a=i.months.indexOf(e[n])
break
case"d":case"e":o=parseInt(e[n],10)
break
case"m":a=parseInt(e[n],10)-1
break
case"Y":case"y":s=parseInt(e[n],10),s+=100<s?0:29>s?2e3:1900
break
case"H":case"I":case"k":case"l":u=parseInt(e[n],10)
break
case"P":case"p":/pm/i.test(e[n])&&12>u?u+=12:/am/i.test(e[n])&&12<=u&&(u-=12)
break
case"M":l=parseInt(e[n],10)}return i=new Date(void 0===s?c.getFullYear():s,void 0===a?c.getMonth():a,void 0===o?c.getDate():o,void 0===u?c.getHours():u,void 0===l?c.getMinutes():l,0),isNaN(1*i)&&(i=new Date),g(i)}function g(e){return e.setHours(0,0,0,0),e}function v(e,t,n){var r,i=e.getMonth(),o=e.getDate(),a=e.getFullYear(),s=e.getDay(),u=e.getHours(),l=12<=u,c=l?u-12:u
r=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0)
var f=new Date(e.getFullYear(),0,0,0,0,0)
r=Math.floor((r-f)/24*36e5),0==c&&(c=12)
var f=e.getMinutes(),d=e.getSeconds()
t=t.split("")
for(var p,h=0;h<t.length;h++){switch(p=t[h]){case"a":p=n.daysShort[s]
break
case"A":p=n.days[s]
break
case"b":p=n.monthsShort[i]
break
case"B":p=n.months[i]
break
case"C":p=1+Math.floor(a/100)
break
case"d":p=10>o?"0"+o:o
break
case"e":p=o
break
case"H":p=10>u?"0"+u:u
break
case"I":p=10>c?"0"+c:c
break
case"j":p=100>r?10>r?"00"+r:"0"+r:r
break
case"k":p=u
break
case"l":p=c
break
case"m":p=9>i?"0"+(1+i):1+i
break
case"M":p=10>f?"0"+f:f
break
case"p":case"P":p=l?"PM":"AM"
break
case"s":p=Math.floor(e.getTime()/1e3)
break
case"S":p=10>d?"0"+d:d
break
case"u":p=s+1
break
case"w":p=s
break
case"y":p=(""+a).substr(2,2)
break
case"Y":p=a}t[h]=p}return t.join("")}function y(e,t){var n,i=e.__pickmeup.options
g(t)
e:{var o
switch(i.mode){case"multiple":for(o=t.valueOf(),n=0;n<i.date.length;++n)if(i.date[n].valueOf()===o){i.date.splice(n,1)
break e}i.date.push(t)
break
case"range":i.lastSel||(i.date[0]=t),t<=i.date[0]?(i.date[1]=i.date[0],i.date[0]=t):i.date[1]=t,i.lastSel=!i.lastSel
break
default:i.date=t.valueOf()}}t=w(i),r(e,"input")&&(e.value="single"==i.mode?t.formatted_date:t.formatted_date.join(i.separator)),l(e,"change",t),i.flat||!i.hide_on_select||"range"==i.mode&&i.lastSel||i.bound.hide()}function b(e,t){var a=t.target
if(i(a,"pmu-button")||(a=n(a,".pmu-button")),!i(a,"pmu-button")||i(a,"pmu-disabled"))return!1
t.preventDefault(),t.stopPropagation(),e=e.__pickmeup.options
var s=n(a,".pmu-instance")
return t=s.parentElement,s=Array.prototype.slice.call(t.querySelectorAll(".pmu-instance")).indexOf(s),r(a.parentElement,"nav")?i(a,"pmu-month")?(d(e.current,s-Math.floor(e.calendars/2)),i(t,"pmu-view-years")?(e.current="single"!=e.mode?new Date(e.date[e.date.length-1]):new Date(e.date),e.select_day?(t.classList.remove("pmu-view-years"),o(t,"pmu-view-days")):e.select_month&&(t.classList.remove("pmu-view-years"),o(t,"pmu-view-months"))):i(t,"pmu-view-months")?e.select_year?(t.classList.remove("pmu-view-months"),o(t,"pmu-view-years")):e.select_day&&(t.classList.remove("pmu-view-months"),o(t,"pmu-view-days")):i(t,"pmu-view-days")&&(e.select_month?(t.classList.remove("pmu-view-days"),o(t,"pmu-view-months")):e.select_year&&(t.classList.remove("pmu-view-days"),o(t,"pmu-view-years")))):i(a,"pmu-prev")?e.bound.prev(!1):e.bound.next(!1):i(t,"pmu-view-years")?(e.current.setFullYear(a.__pickmeup_year),e.select_month?(t.classList.remove("pmu-view-years"),o(t,"pmu-view-months")):e.select_day?(t.classList.remove("pmu-view-years"),o(t,"pmu-view-days")):e.bound.update_date(e.current)):i(t,"pmu-view-months")?(e.current.setMonth(a.__pickmeup_month),e.current.setFullYear(a.__pickmeup_year),e.select_day?(t.classList.remove("pmu-view-months"),o(t,"pmu-view-days")):e.bound.update_date(e.current),d(e.current,Math.floor(e.calendars/2)-s)):(t=new Date(e.current),t.setYear(a.__pickmeup_year),t.setMonth(a.__pickmeup_month),t.setDate(a.__pickmeup_day),e.bound.update_date(t)),e.bound.fill(),!0}function w(e){var t
return"single"==e.mode?(t=new Date(e.date),{formatted_date:v(t,e.format,e.locales[e.locale]),date:t}):(t={formatted_date:[],date:[]},e.date.forEach(function(n){n=new Date(n),t.formatted_date.push(v(n,e.format,e.locales[e.locale])),t.date.push(n)}),t)}function x(e,t){var n=e.__pickmeup.element
if(t||i(n,"pmu-hidden")){var o=e.__pickmeup.options,s=u(e),c=window.pageXOffset,f=window.pageYOffset,d=document.documentElement.clientWidth,p=document.documentElement.clientHeight,h=s.top,m=s.left
if(o.bound.fill(),r(e,"input")&&((t=e.value)&&o.bound.set_date(t),a(e,e,"keydown",function(e){9==e.which&&o.bound.hide()}),o.lastSel=!1),l(e,"show")&&!o.flat){switch(o.position){case"top":h-=n.offsetHeight
break
case"left":m-=n.offsetWidth
break
case"right":m+=e.offsetWidth
break
case"bottom":h+=e.offsetHeight}h+n.offsetHeight>f+p&&(h=s.top-n.offsetHeight),h<f&&(h=s.top+e.offsetHeight),m+n.offsetWidth>c+d&&(m=s.left-n.offsetWidth),m<c&&(m=s.left+e.offsetWidth),n.style.top=h+"px",n.style.left=m+"px",n.classList.remove("pmu-hidden"),setTimeout(function(){a(e,document.documentElement,"click",o.bound.hide),a(e,window,"resize",o.bound.forced_show)})}}}function T(e,t){var n=e.__pickmeup.element,r=e.__pickmeup.options
t&&t.target&&(t.target==e||16&n.compareDocumentPosition(t.target))||!l(e,"hide")||(o(n,"pmu-hidden"),s(e,document.documentElement,"click",r.bound.hide),s(e,window,"resize",r.bound.forced_show),r.lastSel=!1)}function A(e){var t=e.__pickmeup.options
s(e,document.documentElement,"click",t.bound.hide),s(e,window,"resize",t.bound.forced_show),t.bound.forced_show()}function C(e){e=e.__pickmeup.options,"single"!=e.mode&&(e.date=[],e.lastSel=!1,e.bound.fill())}function E(e,t){void 0===t&&(t=!0)
var n=e.__pickmeup.element
e=e.__pickmeup.options,i(n,"pmu-view-years")?p(e.current,-12):i(n,"pmu-view-months")?p(e.current,-1):i(n,"pmu-view-days")&&d(e.current,-1),t&&e.bound.fill()}function S(e,t){void 0===t&&(t=!0)
var n=e.__pickmeup.element
e=e.__pickmeup.options,i(n,"pmu-view-years")?p(e.current,12):i(n,"pmu-view-months")?p(e.current,1):i(n,"pmu-view-days")&&d(e.current,1),t&&e.bound.fill()}function k(e,t){var n=e.__pickmeup.options
return e=w(n),"string"==typeof t?(e=e.date,e instanceof Date?v(e,t,n.locales[n.locale]):e.map(function(e){return v(e,t,n.locales[n.locale])})):e[t?"formatted_date":"date"]}function D(e,t,n){var i=e.__pickmeup.options
if(!(t instanceof Array)||0<t.length)if(i.date=m(t,i),"single"!=i.mode)for(i.date instanceof Array?(i.date[0]=i.date[0]||m(new Date,i),"range"==i.mode&&(i.date[1]=i.date[1]||m(i.date[0],i))):(i.date=[i.date],"range"==i.mode&&i.date.push(m(i.date[0],i))),t=0;t<i.date.length;++t)i.date[t]=N(i.date[t],i.min,i.max)
else i.date instanceof Array&&(i.date=i.date[0]),i.date=N(i.date,i.min,i.max)
else i.date=[]
if(!i.select_day)if(i.date instanceof Array)for(t=0;t<i.date.length;++t)i.date[t].setDate(1)
else i.date.setDate(1)
if("multiple"==i.mode)for(t=0;t<i.date.length;++t)i.date.indexOf(i.date[t])!==t&&(i.date.splice(t,1),--t)
n?i.current=m(n,i):(n="single"===i.mode?i.date:i.date[i.date.length-1],i.current=n?new Date(n):new Date),i.current.setDate(1),i.bound.fill(),r(e,"input")&&!1!==i.default_date&&(n=w(i),t=e.value,i="single"==i.mode?n.formatted_date:n.formatted_date.join(i.separator),t||l(e,"change",n),t!=i&&(e.value=i))}function _(e){var n=e.__pickmeup.element
s(e),t(n),delete e.__pickmeup}function N(e,t,n){return t&&t>e?new Date(t):n&&n<e?new Date(n):e}function L(e,t){if("string"==typeof e&&(e=document.querySelector(e)),!e)return null
if(!e.__pickmeup){var n,r={}
t=t||{}
for(n in L.defaults)r[n]=n in t?t[n]:L.defaults[n]
for(n in r)null!==(t=e.getAttribute("data-pmu-"+n))&&(r[n]=t)
"days"!=r.view||r.select_day||(r.view="months"),"months"!=r.view||r.select_month||(r.view="years"),"years"!=r.view||r.select_year||(r.view="days"),"days"!=r.view||r.select_day||(r.view="months"),r.calendars=Math.max(1,parseInt(r.calendars,10)||1),r.mode=/single|multiple|range/.test(r.mode)?r.mode:"single",r.min&&(r.min=m(r.min,r),r.select_day||r.min.setDate(1)),r.max&&(r.max=m(r.max,r),r.select_day||r.max.setDate(1)),t=document.createElement("div"),e.__pickmeup={options:r,events:[],element:t},t.__pickmeup_target=e,o(t,"pickmeup"),r.class_name&&o(t,r.class_name),r.bound={fill:h.bind(e,e),update_date:y.bind(e,e),click:b.bind(e,e),show:x.bind(e,e),forced_show:x.bind(e,e,!0),hide:T.bind(e,e),update:A.bind(e,e),clear:C.bind(e,e),prev:E.bind(e,e),next:S.bind(e,e),get_date:k.bind(e,e),set_date:D.bind(e,e),destroy:_.bind(e,e)},o(t,"pmu-view-"+r.view)
var i=r.instance_template(r),s=""
for(n=0;n<r.calendars;++n)s+=i
t.innerHTML=s,a(e,t,"click",r.bound.click),a(e,t,"onselectstart"in Element.prototype?"selectstart":"mousedown",function(e){e.preventDefault()}),r.flat?(o(t,"pmu-flat"),e.appendChild(t)):(o(t,"pmu-hidden"),document.body.appendChild(t),a(e,e,"click",x.bind(e,e,!1)),a(e,e,"input",r.bound.update),a(e,e,"change",r.bound.update)),r.bound.set_date(r.date,r.current)}return r=e.__pickmeup.options,{hide:r.bound.hide,show:r.bound.show,clear:r.bound.clear,update:r.bound.update,prev:r.bound.prev,next:r.bound.next,get_date:r.bound.get_date,set_date:r.bound.set_date,destroy:r.bound.destroy}}return L.defaults={current:null,date:new Date,default_date:new Date,flat:!1,first_day:1,prev:"&#9664;",next:"&#9654;",mode:"single",select_year:!0,select_month:!0,select_day:!0,view:"days",calendars:1,format:"d-m-Y",title_format:"B, Y",position:"bottom",class_name:"",separator:" - ",hide_on_select:!1,min:null,max:null,render:function(){},locale:"en",locales:{en:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),daysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),daysMin:"Su Mo Tu We Th Fr Sa".split(" "),months:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},instance_template:function(e){var t=e.locales[e.locale].daysMin.slice()
return e.first_day&&t.push(t.shift()),'<div class="pmu-instance"><nav><div class="pmu-prev pmu-button">'+e.prev+'</div><div class="pmu-month pmu-button"></div><div class="pmu-next pmu-button">'+e.next+'</div></nav><nav class="pmu-day-of-week"><div>'+t.join("</div><div>")+"</div></nav></div>"},instance_content_template:function(e,t){var n=document.createElement("div")
for(o(n,t),t=0;t<e.length;++t)o(e[t],"pmu-button"),n.appendChild(e[t])
return n}},L})
