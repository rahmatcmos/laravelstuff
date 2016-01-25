if(function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=!!t&&"length"in t&&t.length,n=rt.type(t);return"function"===n||rt.isWindow(t)?!1:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}function i(t,e,n){if(rt.isFunction(e))return rt.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return rt.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(mt.test(e))return rt.filter(e,t,n);e=rt.filter(e,t)}return rt.grep(t,function(t){return Z.call(e,t)>-1!==n})}function o(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}function r(t){var e={};return rt.each(t.match(xt)||[],function(t,n){e[n]=!0}),e}function s(){Y.removeEventListener("DOMContentLoaded",s),t.removeEventListener("load",s),rt.ready()}function a(){this.expando=rt.expando+a.uid++}function l(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(kt,"-$&").toLowerCase(),n=t.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Et.test(n)?rt.parseJSON(n):n}catch(o){}It.set(t,e,n)}else n=void 0;return n}function u(t,e,n,i){var o,r=1,s=20,a=i?function(){return i.cur()}:function(){return rt.css(t,e,"")},l=a(),u=n&&n[3]||(rt.cssNumber[e]?"":"px"),c=(rt.cssNumber[e]||"px"!==u&&+l)&&Pt.exec(rt.css(t,e));if(c&&c[3]!==u){u=u||c[3],n=n||[],c=+l||1;do r=r||".5",c/=r,rt.style(t,e,c+u);while(r!==(r=a()/l)&&1!==r&&--s)}return n&&(c=+c||+l||0,o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function c(t,e){var n="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e||"*"):"undefined"!=typeof t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&rt.nodeName(t,e)?rt.merge([t],n):n}function p(t,e){for(var n=0,i=t.length;i>n;n++)St.set(t[n],"globalEval",!e||St.get(e[n],"globalEval"))}function d(t,e,n,i,o){for(var r,s,a,l,u,d,h=e.createDocumentFragment(),f=[],m=0,g=t.length;g>m;m++)if(r=t[m],r||0===r)if("object"===rt.type(r))rt.merge(f,r.nodeType?[r]:r);else if(zt.test(r)){for(s=s||h.appendChild(e.createElement("div")),a=(jt.exec(r)||["",""])[1].toLowerCase(),l=Nt[a]||Nt._default,s.innerHTML=l[1]+rt.htmlPrefilter(r)+l[2],d=l[0];d--;)s=s.lastChild;rt.merge(f,s.childNodes),s=h.firstChild,s.textContent=""}else f.push(e.createTextNode(r));for(h.textContent="",m=0;r=f[m++];)if(i&&rt.inArray(r,i)>-1)o&&o.push(r);else if(u=rt.contains(r.ownerDocument,r),s=c(h.appendChild(r),"script"),u&&p(s),n)for(d=0;r=s[d++];)Lt.test(r.type||"")&&n.push(r);return h}function h(){return!0}function f(){return!1}function m(){try{return Y.activeElement}catch(t){}}function g(t,e,n,i,o,r){var s,a;if("object"==typeof e){"string"!=typeof n&&(i=i||n,n=void 0);for(a in e)g(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),o===!1)o=f;else if(!o)return this;return 1===r&&(s=o,o=function(t){return rt().off(t),s.apply(this,arguments)},o.guid=s.guid||(s.guid=rt.guid++)),t.each(function(){rt.event.add(this,e,o,i,n)})}function v(t,e){return rt.nodeName(t,"table")&&rt.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t:t}function y(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function b(t){var e=Bt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){var n,i,o,r,s,a,l,u;if(1===e.nodeType){if(St.hasData(t)&&(r=St.access(t),s=St.set(e,r),u=r.events)){delete s.handle,s.events={};for(o in u)for(n=0,i=u[o].length;i>n;n++)rt.event.add(e,o,u[o][n])}It.hasData(t)&&(a=It.access(t),l=rt.extend({},a),It.set(e,l))}}function x(t,e){var n=e.nodeName.toLowerCase();"input"===n&&Ot.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}function _(t,e,n,i){e=J.apply([],e);var o,r,s,a,l,u,p=0,h=t.length,f=h-1,m=e[0],g=rt.isFunction(m);if(g||h>1&&"string"==typeof m&&!it.checkClone&&Ft.test(m))return t.each(function(o){var r=t.eq(o);g&&(e[0]=m.call(this,o,r.html())),_(r,e,n,i)});if(h&&(o=d(e,t[0].ownerDocument,!1,t,i),r=o.firstChild,1===o.childNodes.length&&(o=r),r||i)){for(s=rt.map(c(o,"script"),y),a=s.length;h>p;p++)l=o,p!==f&&(l=rt.clone(l,!0,!0),a&&rt.merge(s,c(l,"script"))),n.call(t[p],l,p);if(a)for(u=s[s.length-1].ownerDocument,rt.map(s,b),p=0;a>p;p++)l=s[p],Lt.test(l.type||"")&&!St.access(l,"globalEval")&&rt.contains(u,l)&&(l.src?rt._evalUrl&&rt._evalUrl(l.src):rt.globalEval(l.textContent.replace(Ut,"")))}return t}function C(t,e,n){for(var i,o=e?rt.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||rt.cleanData(c(i)),i.parentNode&&(n&&rt.contains(i.ownerDocument,i)&&p(c(i,"script")),i.parentNode.removeChild(i));return t}function T(t,e){var n=rt(e.createElement(t)).appendTo(e.body),i=rt.css(n[0],"display");return n.detach(),i}function S(t){var e=Y,n=Xt[t];return n||(n=T(t,e),"none"!==n&&n||(Vt=(Vt||rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=Vt[0].contentDocument,e.write(),e.close(),n=T(t,e),Vt.detach()),Xt[t]=n),n}function I(t,e,n){var i,o,r,s,a=t.style;return n=n||Gt(t),n&&(s=n.getPropertyValue(e)||n[e],""!==s||rt.contains(t.ownerDocument,t)||(s=rt.style(t,e)),!it.pixelMarginRight()&&Yt.test(s)&&Qt.test(e)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function E(t,e){return{get:function(){return t()?void delete this.get:(this.get=e).apply(this,arguments)}}}function k(t){if(t in ie)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=ne.length;n--;)if(t=ne[n]+e,t in ie)return t}function $(t,e,n){var i=Pt.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function P(t,e,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===e?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=rt.css(t,n+At[r],!0,o)),i?("content"===n&&(s-=rt.css(t,"padding"+At[r],!0,o)),"margin"!==n&&(s-=rt.css(t,"border"+At[r]+"Width",!0,o))):(s+=rt.css(t,"padding"+At[r],!0,o),"padding"!==n&&(s+=rt.css(t,"border"+At[r]+"Width",!0,o)));return s}function A(e,n,i){var o=!0,r="width"===n?e.offsetWidth:e.offsetHeight,s=Gt(e),a="border-box"===rt.css(e,"boxSizing",!1,s);if(Y.msFullscreenElement&&t.top!==t&&e.getClientRects().length&&(r=Math.round(100*e.getBoundingClientRect()[n])),0>=r||null==r){if(r=I(e,n,s),(0>r||null==r)&&(r=e.style[n]),Yt.test(r))return r;o=a&&(it.boxSizingReliable()||r===e.style[n]),r=parseFloat(r)||0}return r+P(e,n,i||(a?"border":"content"),o,s)+"px"}function D(t,e){for(var n,i,o,r=[],s=0,a=t.length;a>s;s++)i=t[s],i.style&&(r[s]=St.get(i,"olddisplay"),n=i.style.display,e?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Dt(i)&&(r[s]=St.access(i,"olddisplay",S(i.nodeName)))):(o=Dt(i),"none"===n&&o||St.set(i,"olddisplay",o?n:rt.css(i,"display"))));for(s=0;a>s;s++)i=t[s],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?r[s]||"":"none"));return t}function O(t,e,n,i,o){return new O.prototype.init(t,e,n,i,o)}function j(){return t.setTimeout(function(){oe=void 0}),oe=rt.now()}function L(t,e){var n,i=0,o={height:t};for(e=e?1:0;4>i;i+=2-e)n=At[i],o["margin"+n]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function N(t,e,n){for(var i,o=(M.tweeners[e]||[]).concat(M.tweeners["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,e,t))return i}function z(t,e,n){var i,o,r,s,a,l,u,c,p=this,d={},h=t.style,f=t.nodeType&&Dt(t),m=St.get(t,"fxshow");n.queue||(a=rt._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,rt.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=rt.css(t,"display"),c="none"===u?St.get(t,"olddisplay")||S(t.nodeName):u,"inline"===c&&"none"===rt.css(t,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(i in e)if(o=e[i],se.exec(o)){if(delete e[i],r=r||"toggle"===o,o===(f?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue;f=!0}d[i]=m&&m[i]||rt.style(t,i)}else u=void 0;if(rt.isEmptyObject(d))"inline"===("none"===u?S(t.nodeName):u)&&(h.display=u);else{m?"hidden"in m&&(f=m.hidden):m=St.access(t,"fxshow",{}),r&&(m.hidden=!f),f?rt(t).show():p.done(function(){rt(t).hide()}),p.done(function(){var e;St.remove(t,"fxshow");for(e in d)rt.style(t,e,d[e])});for(i in d)s=N(f?m[i]:0,i,p),i in m||(m[i]=s.start,f&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function R(t,e){var n,i,o,r,s;for(n in t)if(i=rt.camelCase(n),o=e[i],r=t[n],rt.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),s=rt.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete t[i];for(n in r)n in t||(t[n]=r[n],e[n]=o)}else e[i]=o}function M(t,e,n){var i,o,r=0,s=M.prefilters.length,a=rt.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=oe||j(),n=Math.max(0,u.startTime+u.duration-e),i=n/u.duration||0,r=1-i,s=0,l=u.tweens.length;l>s;s++)u.tweens[s].run(r);return a.notifyWith(t,[u,r,n]),1>r&&l?n:(a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:rt.extend({},e),opts:rt.extend(!0,{specialEasing:{},easing:rt.easing._default},n),originalProperties:e,originalOptions:n,startTime:oe||j(),duration:n.duration,tweens:[],createTween:function(e,n){var i=rt.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)u.tweens[n].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),c=u.props;for(R(c,u.opts.specialEasing);s>r;r++)if(i=M.prefilters[r].call(u,t,c,u.opts))return rt.isFunction(i.stop)&&(rt._queueHooks(u.elem,u.opts.queue).stop=rt.proxy(i.stop,i)),i;return rt.map(c,N,u),rt.isFunction(u.opts.start)&&u.opts.start.call(t,u),rt.fx.timer(rt.extend(l,{elem:t,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function q(t){return t.getAttribute&&t.getAttribute("class")||""}function H(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,r=e.toLowerCase().match(xt)||[];if(rt.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function W(t,e,n,i){function o(a){var l;return r[a]=!0,rt.each(t[a]||[],function(t,a){var u=a(e,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(e.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=t===Se;return o(e.dataTypes[0])||!r["*"]&&o("*")}function F(t,e){var n,i,o=rt.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&rt.extend(!0,t,i),t}function B(t,e,n){for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function U(t,e,n,i){var o,r,s,a,l,u={},c=t.dataTypes.slice();if(c[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];for(r=c.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(s=u[l+" "+r]||u["* "+r],!s)for(o in u)if(a=o.split(" "),a[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){s===!0?s=u[o]:u[o]!==!0&&(r=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&t["throws"])e=s(e);else try{e=s(e)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}function V(t,e,n,i){var o;if(rt.isArray(e))rt.each(e,function(e,o){n||$e.test(t)?i(t,o):V(t+"["+("object"==typeof o&&null!=o?e:"")+"]",o,n,i)});else if(n||"object"!==rt.type(e))i(t,e);else for(o in e)V(t+"["+o+"]",e[o],n,i)}function X(t){return rt.isWindow(t)?t:9===t.nodeType&&t.defaultView}var Q=[],Y=t.document,G=Q.slice,J=Q.concat,K=Q.push,Z=Q.indexOf,tt={},et=tt.toString,nt=tt.hasOwnProperty,it={},ot="2.2.0",rt=function(t,e){return new rt.fn.init(t,e)},st=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,at=/^-ms-/,lt=/-([\da-z])/gi,ut=function(t,e){return e.toUpperCase()};rt.fn=rt.prototype={jquery:ot,constructor:rt,selector:"",length:0,toArray:function(){return G.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:G.call(this)},pushStack:function(t){var e=rt.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t){return rt.each(this,t)},map:function(t){return this.pushStack(rt.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(G.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:K,sort:Q.sort,splice:Q.splice},rt.extend=rt.fn.extend=function(){var t,e,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||rt.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(u&&i&&(rt.isPlainObject(i)||(o=rt.isArray(i)))?(o?(o=!1,r=n&&rt.isArray(n)?n:[]):r=n&&rt.isPlainObject(n)?n:{},s[e]=rt.extend(u,r,i)):void 0!==i&&(s[e]=i));return s},rt.extend({expando:"jQuery"+(ot+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===rt.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=t&&t.toString();return!rt.isArray(t)&&e-parseFloat(e)+1>=0},isPlainObject:function(t){return"object"!==rt.type(t)||t.nodeType||rt.isWindow(t)?!1:t.constructor&&!nt.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?tt[et.call(t)]||"object":typeof t},globalEval:function(t){var e,n=eval;t=rt.trim(t),t&&(1===t.indexOf("use strict")?(e=Y.createElement("script"),e.text=t,Y.head.appendChild(e).parentNode.removeChild(e)):n(t))},camelCase:function(t){return t.replace(at,"ms-").replace(lt,ut)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e){var i,o=0;if(n(t))for(i=t.length;i>o&&e.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(e.call(t[o],o,t[o])===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(st,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?rt.merge(i,"string"==typeof t?[t]:t):K.call(i,t)),i},inArray:function(t,e,n){return null==e?-1:Z.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){for(var i,o=[],r=0,s=t.length,a=!n;s>r;r++)i=!e(t[r],r),i!==a&&o.push(t[r]);return o},map:function(t,e,i){var o,r,s=0,a=[];if(n(t))for(o=t.length;o>s;s++)r=e(t[s],s,i),null!=r&&a.push(r);else for(s in t)r=e(t[s],s,i),null!=r&&a.push(r);return J.apply([],a)},guid:1,proxy:function(t,e){var n,i,o;return"string"==typeof e&&(n=t[e],e=t,t=n),rt.isFunction(t)?(i=G.call(arguments,2),o=function(){return t.apply(e||this,i.concat(G.call(arguments)))},o.guid=t.guid=t.guid||rt.guid++,o):void 0},now:Date.now,support:it}),"function"==typeof Symbol&&(rt.fn[Symbol.iterator]=Q[Symbol.iterator]),rt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){tt["[object "+e+"]"]=e.toLowerCase()});var ct=function(t){function e(t,e,n,i){var o,r,s,a,l,u,p,h,f=e&&e.ownerDocument,m=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==m&&9!==m&&11!==m)return n;if(!i&&((e?e.ownerDocument||e:q)!==D&&A(e),e=e||D,j)){if(11!==m&&(u=vt.exec(t)))if(o=u[1]){if(9===m){if(!(s=e.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(f&&(s=f.getElementById(o))&&R(e,s)&&s.id===o)return n.push(s),n}else{if(u[2])return K.apply(n,e.getElementsByTagName(t)),n;if((o=u[3])&&x.getElementsByClassName&&e.getElementsByClassName)return K.apply(n,e.getElementsByClassName(o)),n}if(x.qsa&&!U[t+" "]&&(!L||!L.test(t))){if(1!==m)f=e,h=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(bt,"\\$&"):e.setAttribute("id",a=M),p=S(t),r=p.length,l=dt.test(a)?"#"+a:"[id='"+a+"']";r--;)p[r]=l+" "+d(p[r]);h=p.join(","),f=yt.test(t)&&c(e.parentNode)||e}if(h)try{return K.apply(n,f.querySelectorAll(h)),n}catch(g){}finally{a===M&&e.removeAttribute("id")}}}return E(t.replace(at,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>_.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[M]=!0,t}function o(t){var e=D.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function r(t,e){for(var n=t.split("|"),i=n.length;i--;)_.attrHandle[n[i]]=e}function s(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||X)-(~t.sourceIndex||X);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function u(t){return i(function(e){return e=+e,i(function(n,i){for(var o,r=t([],n.length,e),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function c(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function p(){}function d(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function h(t,e,n){var i=e.dir,o=n&&"parentNode"===i,r=W++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,r)}:function(e,n,s){var a,l,u,c=[H,r];if(s){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,s))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(u=e[M]||(e[M]={}),l=u[e.uniqueID]||(u[e.uniqueID]={}),(a=l[i])&&a[0]===H&&a[1]===r)return c[2]=a[2];if(l[i]=c,c[2]=t(e,n,s))return!0}}}function f(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function m(t,n,i){for(var o=0,r=n.length;r>o;o++)e(t,n[o],i);return i}function g(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,u=null!=e;l>a;a++)(r=t[a])&&(!n||n(r,i,o))&&(s.push(r),u&&e.push(a));return s}function v(t,e,n,o,r,s){return o&&!o[M]&&(o=v(o)),r&&!r[M]&&(r=v(r,s)),i(function(i,s,a,l){var u,c,p,d=[],h=[],f=s.length,v=i||m(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:g(v,d,t,a,l),b=n?r||(i?t:f||o)?[]:s:y;if(n&&n(y,b,a,l),o)for(u=g(b,h),o(u,[],a,l),c=u.length;c--;)(p=u[c])&&(b[h[c]]=!(y[h[c]]=p));if(i){if(r||t){if(r){for(u=[],c=b.length;c--;)(p=b[c])&&u.push(y[c]=p);r(null,b=[],u,l)}for(c=b.length;c--;)(p=b[c])&&(u=r?tt(i,p):d[c])>-1&&(i[u]=!(s[u]=p))}}else b=g(b===s?b.splice(f,b.length):b),r?r(null,s,b,l):K.apply(s,b)})}function y(t){for(var e,n,i,o=t.length,r=_.relative[t[0].type],s=r||_.relative[" "],a=r?1:0,l=h(function(t){return t===e},s,!0),u=h(function(t){return tt(e,t)>-1},s,!0),c=[function(t,n,i){var o=!r&&(i||n!==k)||((e=n).nodeType?l(t,n,i):u(t,n,i));return e=null,o}];o>a;a++)if(n=_.relative[t[a].type])c=[h(f(c),n)];else{if(n=_.filter[t[a].type].apply(null,t[a].matches),n[M]){for(i=++a;o>i&&!_.relative[t[i].type];i++);return v(a>1&&f(c),a>1&&d(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(at,"$1"),n,i>a&&y(t.slice(a,i)),o>i&&y(t=t.slice(i)),o>i&&d(t))}c.push(n)}return f(c)}function b(t,n){var o=n.length>0,r=t.length>0,s=function(i,s,a,l,u){var c,p,d,h=0,f="0",m=i&&[],v=[],y=k,b=i||r&&_.find.TAG("*",u),w=H+=null==y?1:Math.random()||.1,x=b.length;for(u&&(k=s===D||s||u);f!==x&&null!=(c=b[f]);f++){if(r&&c){for(p=0,s||c.ownerDocument===D||(A(c),a=!j);d=t[p++];)if(d(c,s||D,a)){l.push(c);break}u&&(H=w)}o&&((c=!d&&c)&&h--,i&&m.push(c))}if(h+=f,o&&f!==h){for(p=0;d=n[p++];)d(m,v,s,a);if(i){if(h>0)for(;f--;)m[f]||v[f]||(v[f]=G.call(l));v=g(v)}K.apply(l,v),u&&!i&&v.length>0&&h+n.length>1&&e.uniqueSort(l)}return u&&(H=w,k=y),m};return o?i(s):s}var w,x,_,C,T,S,I,E,k,$,P,A,D,O,j,L,N,z,R,M="sizzle"+1*new Date,q=t.document,H=0,W=0,F=n(),B=n(),U=n(),V=function(t,e){return t===e&&(P=!0),0},X=1<<31,Q={}.hasOwnProperty,Y=[],G=Y.pop,J=Y.push,K=Y.push,Z=Y.slice,tt=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",rt=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",st=new RegExp(nt+"+","g"),at=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),lt=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ct=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),pt=new RegExp(rt),dt=new RegExp("^"+it+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it+"|[*])"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},ft=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,gt=/^[^{]+\{\s*\[native \w/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,bt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),xt=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},_t=function(){A()};try{K.apply(Y=Z.call(q.childNodes),q.childNodes),Y[q.childNodes.length].nodeType}catch(Ct){K={apply:Y.length?function(t,e){J.apply(t,Z.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}x=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},A=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:q;return i!==D&&9===i.nodeType&&i.documentElement?(D=i,O=D.documentElement,j=!T(D),(n=D.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",_t,!1):n.attachEvent&&n.attachEvent("onunload",_t)),x.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),x.getElementsByTagName=o(function(t){return t.appendChild(D.createComment("")),!t.getElementsByTagName("*").length}),x.getElementsByClassName=gt.test(D.getElementsByClassName),x.getById=o(function(t){return O.appendChild(t).id=M,!D.getElementsByName||!D.getElementsByName(M).length}),x.getById?(_.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&j){var n=e.getElementById(t);return n?[n]:[]}},_.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){return t.getAttribute("id")===e}}):(delete _.find.ID,_.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),_.find.TAG=x.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):x.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,r=e.getElementsByTagName(t);if("*"===t){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},_.find.CLASS=x.getElementsByClassName&&function(t,e){return"undefined"!=typeof e.getElementsByClassName&&j?e.getElementsByClassName(t):void 0},N=[],L=[],(x.qsa=gt.test(D.querySelectorAll))&&(o(function(t){O.appendChild(t).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&L.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||L.push("\\["+nt+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+M+"-]").length||L.push("~="),t.querySelectorAll(":checked").length||L.push(":checked"),t.querySelectorAll("a#"+M+"+*").length||L.push(".#.+[+~]")}),o(function(t){var e=D.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&L.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||L.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),L.push(",.*:")})),(x.matchesSelector=gt.test(z=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&o(function(t){x.disconnectedMatch=z.call(t,"div"),z.call(t,"[s!='']:x"),N.push("!=",rt)}),L=L.length&&new RegExp(L.join("|")),N=N.length&&new RegExp(N.join("|")),e=gt.test(O.compareDocumentPosition),R=e||gt.test(O.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},V=e?function(t,e){if(t===e)return P=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!x.sortDetached&&e.compareDocumentPosition(t)===n?t===D||t.ownerDocument===q&&R(q,t)?-1:e===D||e.ownerDocument===q&&R(q,e)?1:$?tt($,t)-tt($,e):0:4&n?-1:1)}:function(t,e){if(t===e)return P=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,a=[t],l=[e];if(!o||!r)return t===D?-1:e===D?1:o?-1:r?1:$?tt($,t)-tt($,e):0;if(o===r)return s(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===q?-1:l[i]===q?1:0},D):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&A(t),n=n.replace(ct,"='$1']"),x.matchesSelector&&j&&!U[n+" "]&&(!N||!N.test(n))&&(!L||!L.test(n)))try{var i=z.call(t,n);if(i||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(o){}return e(n,D,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==D&&A(t),R(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==D&&A(t);var n=_.attrHandle[e.toLowerCase()],i=n&&Q.call(_.attrHandle,e.toLowerCase())?n(t,e,!j):void 0;return void 0!==i?i:x.attributes||!j?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(P=!x.detectDuplicates,$=!x.sortStable&&t.slice(0),t.sort(V),P){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return $=null,t},C=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=C(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=C(e);return n},_=e.selectors={cacheLength:50,createPseudo:i,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,xt),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,xt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ht.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&pt.test(n)&&(e=S(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,xt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=F[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&F(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var r=e.attr(o,t);return null==r?"!="===n:n?(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(st," ")+" ").indexOf(i)>-1:"|="===n?r===i||r.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(t,e,n,i,o){var r="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var u,c,p,d,h,f,m=r!==s?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(g){if(r){for(;m;){for(d=e;d=d[m];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[s?g.firstChild:g.lastChild],s&&y){for(d=g,p=d[M]||(d[M]={}),c=p[d.uniqueID]||(p[d.uniqueID]={}),u=c[t]||[],h=u[0]===H&&u[1],b=h&&u[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(b=h=0)||f.pop();)if(1===d.nodeType&&++b&&d===e){c[t]=[H,h,b];break}}else if(y&&(d=e,p=d[M]||(d[M]={}),c=p[d.uniqueID]||(p[d.uniqueID]={}),u=c[t]||[],h=u[0]===H&&u[1],b=h),b===!1)for(;(d=++h&&d&&d[m]||(b=h=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&(p=d[M]||(d[M]={}),c=p[d.uniqueID]||(p[d.uniqueID]={}),c[t]=[H,b]),d!==e)););return b-=o,b===i||b%i===0&&b/i>=0}}},PSEUDO:function(t,n){var o,r=_.pseudos[t]||_.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return r[M]?r(n):r.length>1?(o=[t,t,"",n],_.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=r(t,n),s=o.length;s--;)i=tt(t,o[s]),t[i]=!(e[i]=o[s])}):function(t){return r(t,0,o)}):r}},pseudos:{not:i(function(t){var e=[],n=[],o=I(t.replace(at,"$1"));return o[M]?i(function(t,e,n,i){for(var r,s=o(t,null,i,[]),a=t.length;a--;)(r=s[a])&&(t[a]=!(e[a]=r))}):function(t,i,r){return e[0]=t,o(e,null,r,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(wt,xt),function(e){return(e.textContent||e.innerText||C(e)).indexOf(t)>-1}}),lang:i(function(t){return dt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,xt).toLowerCase(),function(e){var n;do if(n=j?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===O},focus:function(t){return t===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!_.pseudos.empty(t)},header:function(t){return mt.test(t.nodeName)},input:function(t){return ft.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:u(function(){return[0]}),last:u(function(t,e){return[e-1]}),eq:u(function(t,e,n){return[0>n?n+e:n]}),even:u(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:u(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t;
}),lt:u(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:u(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},_.pseudos.nth=_.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})_.pseudos[w]=l(w);return p.prototype=_.filters=_.pseudos,_.setFilters=new p,S=e.tokenize=function(t,n){var i,o,r,s,a,l,u,c=B[t+" "];if(c)return n?0:c.slice(0);for(a=t,l=[],u=_.preFilter;a;){(!i||(o=lt.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ut.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(at," ")}),a=a.slice(i.length));for(s in _.filter)!(o=ht[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):B(t,l).slice(0)},I=e.compile=function(t,e){var n,i=[],o=[],r=U[t+" "];if(!r){for(e||(e=S(t)),n=e.length;n--;)r=y(e[n]),r[M]?i.push(r):o.push(r);r=U(t,b(o,i)),r.selector=t}return r},E=e.select=function(t,e,n,i){var o,r,s,a,l,u="function"==typeof t&&t,p=!i&&S(t=u.selector||t);if(n=n||[],1===p.length){if(r=p[0]=p[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&x.getById&&9===e.nodeType&&j&&_.relative[r[1].type]){if(e=(_.find.ID(s.matches[0].replace(wt,xt),e)||[])[0],!e)return n;u&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(o=ht.needsContext.test(t)?0:r.length;o--&&(s=r[o],!_.relative[a=s.type]);)if((l=_.find[a])&&(i=l(s.matches[0].replace(wt,xt),yt.test(r[0].type)&&c(e.parentNode)||e))){if(r.splice(o,1),t=i.length&&d(r),!t)return K.apply(n,i),n;break}}return(u||I(t,p))(i,e,!j,n,!e||yt.test(t)&&c(e.parentNode)||e),n},x.sortStable=M.split("").sort(V).join("")===M,x.detectDuplicates=!!P,A(),x.sortDetached=o(function(t){return 1&t.compareDocumentPosition(D.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||r("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),x.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||r("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||r(et,function(t,e,n){var i;return n?void 0:t[e]===!0?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);rt.find=ct,rt.expr=ct.selectors,rt.expr[":"]=rt.expr.pseudos,rt.uniqueSort=rt.unique=ct.uniqueSort,rt.text=ct.getText,rt.isXMLDoc=ct.isXML,rt.contains=ct.contains;var pt=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&rt(t).is(n))break;i.push(t)}return i},dt=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},ht=rt.expr.match.needsContext,ft=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mt=/^.[^:#\[\.,]*$/;rt.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?rt.find.matchesSelector(i,t)?[i]:[]:rt.find.matches(t,rt.grep(e,function(t){return 1===t.nodeType}))},rt.fn.extend({find:function(t){var e,n=this.length,i=[],o=this;if("string"!=typeof t)return this.pushStack(rt(t).filter(function(){for(e=0;n>e;e++)if(rt.contains(o[e],this))return!0}));for(e=0;n>e;e++)rt.find(t,o[e],i);return i=this.pushStack(n>1?rt.unique(i):i),i.selector=this.selector?this.selector+" "+t:t,i},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&ht.test(t)?rt(t):t||[],!1).length}});var gt,vt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,yt=rt.fn.init=function(t,e,n){var i,o;if(!t)return this;if(n=n||gt,"string"==typeof t){if(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:vt.exec(t),!i||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof rt?e[0]:e,rt.merge(this,rt.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:Y,!0)),ft.test(i[1])&&rt.isPlainObject(e))for(i in e)rt.isFunction(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return o=Y.getElementById(i[2]),o&&o.parentNode&&(this.length=1,this[0]=o),this.context=Y,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):rt.isFunction(t)?void 0!==n.ready?n.ready(t):t(rt):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),rt.makeArray(t,this))};yt.prototype=rt.fn,gt=rt(Y);var bt=/^(?:parents|prev(?:Until|All))/,wt={children:!0,contents:!0,next:!0,prev:!0};rt.fn.extend({has:function(t){var e=rt(t,this),n=e.length;return this.filter(function(){for(var t=0;n>t;t++)if(rt.contains(this,e[t]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,r=[],s=ht.test(t)||"string"!=typeof t?rt(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&rt.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(r.length>1?rt.uniqueSort(r):r)},index:function(t){return t?"string"==typeof t?Z.call(rt(t),this[0]):Z.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(rt.uniqueSort(rt.merge(this.get(),rt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),rt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return pt(t,"parentNode")},parentsUntil:function(t,e,n){return pt(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return pt(t,"nextSibling")},prevAll:function(t){return pt(t,"previousSibling")},nextUntil:function(t,e,n){return pt(t,"nextSibling",n)},prevUntil:function(t,e,n){return pt(t,"previousSibling",n)},siblings:function(t){return dt((t.parentNode||{}).firstChild,t)},children:function(t){return dt(t.firstChild)},contents:function(t){return t.contentDocument||rt.merge([],t.childNodes)}},function(t,e){rt.fn[t]=function(n,i){var o=rt.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=rt.filter(i,o)),this.length>1&&(wt[t]||rt.uniqueSort(o),bt.test(t)&&o.reverse()),this.pushStack(o)}});var xt=/\S+/g;rt.Callbacks=function(t){t="string"==typeof t?r(t):rt.extend({},t);var e,n,i,o,s=[],a=[],l=-1,u=function(){for(o=t.once,i=e=!0;a.length;l=-1)for(n=a.shift();++l<s.length;)s[l].apply(n[0],n[1])===!1&&t.stopOnFalse&&(l=s.length,n=!1);t.memory||(n=!1),e=!1,o&&(s=n?[]:"")},c={add:function(){return s&&(n&&!e&&(l=s.length-1,a.push(n)),function i(e){rt.each(e,function(e,n){rt.isFunction(n)?t.unique&&c.has(n)||s.push(n):n&&n.length&&"string"!==rt.type(n)&&i(n)})}(arguments),n&&!e&&u()),this},remove:function(){return rt.each(arguments,function(t,e){for(var n;(n=rt.inArray(e,s,n))>-1;)s.splice(n,1),l>=n&&l--}),this},has:function(t){return t?rt.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return o=a=[],s=n="",this},disabled:function(){return!s},lock:function(){return o=a=[],n||(s=n=""),this},locked:function(){return!!o},fireWith:function(t,n){return o||(n=n||[],n=[t,n.slice?n.slice():n],a.push(n),e||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},rt.extend({Deferred:function(t){var e=[["resolve","done",rt.Callbacks("once memory"),"resolved"],["reject","fail",rt.Callbacks("once memory"),"rejected"],["notify","progress",rt.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return rt.Deferred(function(n){rt.each(e,function(e,r){var s=rt.isFunction(t[e])&&t[e];o[r[1]](function(){var t=s&&s.apply(this,arguments);t&&rt.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this===i?n.promise():this,s?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?rt.extend(t,i):i}},o={};return i.pipe=i.then,rt.each(e,function(t,r){var s=r[2],a=r[3];i[r[1]]=s.add,a&&s.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,r=G.call(arguments),s=r.length,a=1!==s||t&&rt.isFunction(t.promise)?s:0,l=1===a?t:rt.Deferred(),u=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?G.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(s>1)for(e=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&rt.isFunction(r[o].promise)?r[o].promise().progress(u(o,n,e)).done(u(o,i,r)).fail(l.reject):--a;return a||l.resolveWith(i,r),l.promise()}});var _t;rt.fn.ready=function(t){return rt.ready.promise().done(t),this},rt.extend({isReady:!1,readyWait:1,holdReady:function(t){t?rt.readyWait++:rt.ready(!0)},ready:function(t){(t===!0?--rt.readyWait:rt.isReady)||(rt.isReady=!0,t!==!0&&--rt.readyWait>0||(_t.resolveWith(Y,[rt]),rt.fn.triggerHandler&&(rt(Y).triggerHandler("ready"),rt(Y).off("ready"))))}}),rt.ready.promise=function(e){return _t||(_t=rt.Deferred(),"complete"===Y.readyState||"loading"!==Y.readyState&&!Y.documentElement.doScroll?t.setTimeout(rt.ready):(Y.addEventListener("DOMContentLoaded",s),t.addEventListener("load",s))),_t.promise(e)},rt.ready.promise();var Ct=function(t,e,n,i,o,r,s){var a=0,l=t.length,u=null==n;if("object"===rt.type(n)){o=!0;for(a in n)Ct(t,e,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,rt.isFunction(i)||(s=!0),u&&(s?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(rt(t),n)})),e))for(;l>a;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:u?e.call(t):l?e(t[0],n):r},Tt=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};a.uid=1,a.prototype={register:function(t,e){var n=e||{};return t.nodeType?t[this.expando]=n:Object.defineProperty(t,this.expando,{value:n,writable:!0,configurable:!0}),t[this.expando]},cache:function(t){if(!Tt(t))return{};var e=t[this.expando];return e||(e={},Tt(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);if("string"==typeof e)o[e]=n;else for(i in e)o[i]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][e]},access:function(t,e,n){var i;return void 0===e||e&&"string"==typeof e&&void 0===n?(i=this.get(t,e),void 0!==i?i:this.get(t,rt.camelCase(e))):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i,o,r=t[this.expando];if(void 0!==r){if(void 0===e)this.register(t);else{rt.isArray(e)?i=e.concat(e.map(rt.camelCase)):(o=rt.camelCase(e),e in r?i=[e,o]:(i=o,i=i in r?[i]:i.match(xt)||[])),n=i.length;for(;n--;)delete r[i[n]]}(void 0===e||rt.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!rt.isEmptyObject(e)}};var St=new a,It=new a,Et=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,kt=/[A-Z]/g;rt.extend({hasData:function(t){return It.hasData(t)||St.hasData(t)},data:function(t,e,n){return It.access(t,e,n)},removeData:function(t,e){It.remove(t,e)},_data:function(t,e,n){return St.access(t,e,n)},_removeData:function(t,e){St.remove(t,e)}}),rt.fn.extend({data:function(t,e){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===t){if(this.length&&(o=It.get(r),1===r.nodeType&&!St.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=rt.camelCase(i.slice(5)),l(r,i,o[i])));St.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof t?this.each(function(){It.set(this,t)}):Ct(this,function(e){var n,i;if(r&&void 0===e){if(n=It.get(r,t)||It.get(r,t.replace(kt,"-$&").toLowerCase()),void 0!==n)return n;if(i=rt.camelCase(t),n=It.get(r,i),void 0!==n)return n;if(n=l(r,i,void 0),void 0!==n)return n}else i=rt.camelCase(t),this.each(function(){var n=It.get(this,i);It.set(this,i,e),t.indexOf("-")>-1&&void 0!==n&&It.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){It.remove(this,t)})}}),rt.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=St.get(t,e),n&&(!i||rt.isArray(n)?i=St.access(t,e,rt.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=rt.queue(t,e),i=n.length,o=n.shift(),r=rt._queueHooks(t,e),s=function(){rt.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return St.get(t,n)||St.access(t,n,{empty:rt.Callbacks("once memory").add(function(){St.remove(t,[e+"queue",n])})})}}),rt.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?rt.queue(this[0],t):void 0===e?this:this.each(function(){var n=rt.queue(this,t,e);rt._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&rt.dequeue(this,t)})},dequeue:function(t){return this.each(function(){rt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=rt.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)n=St.get(r[s],t+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var $t=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pt=new RegExp("^(?:([+-])=|)("+$t+")([a-z%]*)$","i"),At=["Top","Right","Bottom","Left"],Dt=function(t,e){return t=e||t,"none"===rt.css(t,"display")||!rt.contains(t.ownerDocument,t)},Ot=/^(?:checkbox|radio)$/i,jt=/<([\w:-]+)/,Lt=/^$|\/(?:java|ecma)script/i,Nt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td;var zt=/<|&#?\w+;/;!function(){var t=Y.createDocumentFragment(),e=t.appendChild(Y.createElement("div")),n=Y.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),it.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",it.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Rt=/^key/,Mt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,qt=/^([^.]*)(?:\.(.+)|)/;rt.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,u,c,p,d,h,f,m,g=St.get(t);if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=rt.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(e){return"undefined"!=typeof rt&&rt.event.triggered!==e.type?rt.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(xt)||[""],u=e.length;u--;)a=qt.exec(e[u])||[],h=m=a[1],f=(a[2]||"").split(".").sort(),h&&(p=rt.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=rt.event.special[h]||{},c=rt.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&rt.expr.match.needsContext.test(o),namespace:f.join(".")},r),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(t,i,f,s)!==!1||t.addEventListener&&t.addEventListener(h,s)),p.add&&(p.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,c):d.push(c),rt.event.global[h]=!0)},remove:function(t,e,n,i,o){var r,s,a,l,u,c,p,d,h,f,m,g=St.hasData(t)&&St.get(t);if(g&&(l=g.events)){for(e=(e||"").match(xt)||[""],u=e.length;u--;)if(a=qt.exec(e[u])||[],h=m=a[1],f=(a[2]||"").split(".").sort(),h){for(p=rt.event.special[h]||{},h=(i?p.delegateType:p.bindType)||h,d=l[h]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=d.length;r--;)c=d[r],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(r,1),c.selector&&d.delegateCount--,p.remove&&p.remove.call(t,c));s&&!d.length&&(p.teardown&&p.teardown.call(t,f,g.handle)!==!1||rt.removeEvent(t,h,g.handle),delete l[h])}else for(h in l)rt.event.remove(t,h+e[u],n,i,!0);rt.isEmptyObject(l)&&St.remove(t,"handle events")}},dispatch:function(t){t=rt.event.fix(t);var e,n,i,o,r,s=[],a=G.call(arguments),l=(St.get(this,"events")||{})[t.type]||[],u=rt.event.special[t.type]||{};if(a[0]=t,t.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,t)!==!1){for(s=rt.event.handlers.call(this,t,l),e=0;(o=s[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.rnamespace||t.rnamespace.test(r.namespace))&&(t.handleObj=r,t.data=r.data,i=((rt.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(t.result=i)===!1&&(t.preventDefault(),t.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,r,s=[],a=e.delegateCount,l=t.target;if(a&&l.nodeType&&("click"!==t.type||isNaN(t.button)||t.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==t.type)){for(i=[],n=0;a>n;n++)r=e[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?rt(o,this).index(l)>-1:rt.find(o,this,null,[l]).length),i[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return a<e.length&&s.push({elem:this,handlers:e.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,r=e.button;return null==t.pageX&&null!=e.clientX&&(n=t.target.ownerDocument||Y,i=n.documentElement,o=n.body,t.pageX=e.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),t.pageY=e.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),t.which||void 0===r||(t.which=1&r?1:2&r?3:4&r?2:0),t}},fix:function(t){if(t[rt.expando])return t;var e,n,i,o=t.type,r=t,s=this.fixHooks[o];for(s||(this.fixHooks[o]=s=Mt.test(o)?this.mouseHooks:Rt.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,t=new rt.Event(r),e=i.length;e--;)n=i[e],t[n]=r[n];return t.target||(t.target=Y),3===t.target.nodeType&&(t.target=t.target.parentNode),s.filter?s.filter(t,r):t},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==m()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===m()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&rt.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(t){return rt.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},rt.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},rt.Event=function(t,e){return this instanceof rt.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&t.returnValue===!1?h:f):this.type=t,e&&rt.extend(this,e),this.timeStamp=t&&t.timeStamp||rt.now(),void(this[rt.expando]=!0)):new rt.Event(t,e)},rt.Event.prototype={constructor:rt.Event,isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=h,t&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=h,t&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=h,t&&t.stopImmediatePropagation(),this.stopPropagation()}},rt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){rt.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,r=t.handleObj;return(!o||o!==i&&!rt.contains(i,o))&&(t.type=r.origType,n=r.handler.apply(this,arguments),t.type=e),n}}}),rt.fn.extend({on:function(t,e,n,i){return g(this,t,e,n,i)},one:function(t,e,n,i){return g(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,rt(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(e===!1||"function"==typeof e)&&(n=e,e=void 0),n===!1&&(n=f),this.each(function(){rt.event.remove(this,t,n,e)})}});var Ht=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Wt=/<script|<style|<link/i,Ft=/checked\s*(?:[^=]|=\s*.checked.)/i,Bt=/^true\/(.*)/,Ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;rt.extend({htmlPrefilter:function(t){return t.replace(Ht,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a=t.cloneNode(!0),l=rt.contains(t.ownerDocument,t);if(!(it.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||rt.isXMLDoc(t)))for(s=c(a),r=c(t),i=0,o=r.length;o>i;i++)x(r[i],s[i]);if(e)if(n)for(r=r||c(t),s=s||c(a),i=0,o=r.length;o>i;i++)w(r[i],s[i]);else w(t,a);return s=c(a,"script"),s.length>0&&p(s,!l&&c(t,"script")),a},cleanData:function(t){for(var e,n,i,o=rt.event.special,r=0;void 0!==(n=t[r]);r++)if(Tt(n)){if(e=n[St.expando]){if(e.events)for(i in e.events)o[i]?rt.event.remove(n,i):rt.removeEvent(n,i,e.handle);n[St.expando]=void 0}n[It.expando]&&(n[It.expando]=void 0)}}}),rt.fn.extend({domManip:_,detach:function(t){return C(this,t,!0)},remove:function(t){return C(this,t)},text:function(t){return Ct(this,function(t){return void 0===t?rt.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return _(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=v(this,t);e.appendChild(t)}})},prepend:function(){return _(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=v(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return _(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return _(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(rt.cleanData(c(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null==t?!1:t,e=null==e?t:e,this.map(function(){return rt.clone(this,t,e)})},html:function(t){return Ct(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Wt.test(t)&&!Nt[(jt.exec(t)||["",""])[1].toLowerCase()]){t=rt.htmlPrefilter(t);try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(rt.cleanData(c(e,!1)),e.innerHTML=t);e=0}catch(o){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return _(this,arguments,function(e){var n=this.parentNode;rt.inArray(this,t)<0&&(rt.cleanData(c(this)),n&&n.replaceChild(e,this))},t)}}),rt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){rt.fn[t]=function(t){for(var n,i=[],o=rt(t),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),rt(o[s])[e](n),K.apply(i,n.get());return this.pushStack(i)}});var Vt,Xt={HTML:"block",BODY:"block"},Qt=/^margin/,Yt=new RegExp("^("+$t+")(?!px)[a-z%]+$","i"),Gt=function(e){var n=e.ownerDocument.defaultView;return n.opener||(n=t),n.getComputedStyle(e)},Jt=function(t,e,n,i){var o,r,s={};for(r in e)s[r]=t.style[r],t.style[r]=e[r];o=n.apply(t,i||[]);for(r in e)t.style[r]=s[r];return o},Kt=Y.documentElement;!function(){function e(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",Kt.appendChild(s);var e=t.getComputedStyle(a);n="1%"!==e.top,r="2px"===e.marginLeft,i="4px"===e.width,a.style.marginRight="50%",o="4px"===e.marginRight,Kt.removeChild(s)}var n,i,o,r,s=Y.createElement("div"),a=Y.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",it.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),rt.extend(it,{pixelPosition:function(){return e(),n},boxSizingReliable:function(){return null==i&&e(),i},pixelMarginRight:function(){return null==i&&e(),o},reliableMarginLeft:function(){return null==i&&e(),r},reliableMarginRight:function(){var e,n=a.appendChild(Y.createElement("div"));return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",Kt.appendChild(s),e=!parseFloat(t.getComputedStyle(n).marginRight),Kt.removeChild(s),a.removeChild(n),e}}))}();var Zt=/^(none|table(?!-c[ea]).+)/,te={position:"absolute",visibility:"hidden",display:"block"},ee={letterSpacing:"0",fontWeight:"400"},ne=["Webkit","O","Moz","ms"],ie=Y.createElement("div").style;rt.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=I(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,r,s,a=rt.camelCase(e),l=t.style;return e=rt.cssProps[a]||(rt.cssProps[a]=k(a)||a),s=rt.cssHooks[e]||rt.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:l[e]:(r=typeof n,"string"===r&&(o=Pt.exec(n))&&o[1]&&(n=u(t,e,o),r="number"),null!=n&&n===n&&("number"===r&&(n+=o&&o[3]||(rt.cssNumber[a]?"":"px")),it.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(l[e]=n)),void 0)}},css:function(t,e,n,i){var o,r,s,a=rt.camelCase(e);return e=rt.cssProps[a]||(rt.cssProps[a]=k(a)||a),s=rt.cssHooks[e]||rt.cssHooks[a],s&&"get"in s&&(o=s.get(t,!0,n)),void 0===o&&(o=I(t,e,i)),"normal"===o&&e in ee&&(o=ee[e]),""===n||n?(r=parseFloat(o),n===!0||isFinite(r)?r||0:o):o}}),rt.each(["height","width"],function(t,e){rt.cssHooks[e]={get:function(t,n,i){return n?Zt.test(rt.css(t,"display"))&&0===t.offsetWidth?Jt(t,te,function(){return A(t,e,i)}):A(t,e,i):void 0},set:function(t,n,i){var o,r=i&&Gt(t),s=i&&P(t,e,i,"border-box"===rt.css(t,"boxSizing",!1,r),r);return s&&(o=Pt.exec(n))&&"px"!==(o[3]||"px")&&(t.style[e]=n,n=rt.css(t,e)),$(t,n,s)}}}),rt.cssHooks.marginLeft=E(it.reliableMarginLeft,function(t,e){return e?(parseFloat(I(t,"marginLeft"))||t.getBoundingClientRect().left-Jt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px":void 0}),rt.cssHooks.marginRight=E(it.reliableMarginRight,function(t,e){return e?Jt(t,{display:"inline-block"},I,[t,"marginRight"]):void 0}),rt.each({margin:"",padding:"",border:"Width"},function(t,e){rt.cssHooks[t+e]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+At[i]+e]=r[i]||r[i-2]||r[0];return o}},Qt.test(t)||(rt.cssHooks[t+e].set=$)}),rt.fn.extend({css:function(t,e){return Ct(this,function(t,e,n){var i,o,r={},s=0;if(rt.isArray(e)){for(i=Gt(t),o=e.length;o>s;s++)r[e[s]]=rt.css(t,e[s],!1,i);return r}return void 0!==n?rt.style(t,e,n):rt.css(t,e)},t,e,arguments.length>1)},show:function(){return D(this,!0)},hide:function(){return D(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Dt(this)?rt(this).show():rt(this).hide()})}}),rt.Tween=O,O.prototype={constructor:O,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||rt.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(rt.cssNumber[n]?"":"px")},cur:function(){var t=O.propHooks[this.prop];return t&&t.get?t.get(this):O.propHooks._default.get(this)},run:function(t){var e,n=O.propHooks[this.prop];return this.options.duration?this.pos=e=rt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):O.propHooks._default.set(this),this}},O.prototype.init.prototype=O.prototype,O.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=rt.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){rt.fx.step[t.prop]?rt.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[rt.cssProps[t.prop]]&&!rt.cssHooks[t.prop]?t.elem[t.prop]=t.now:rt.style(t.elem,t.prop,t.now+t.unit)}}},O.propHooks.scrollTop=O.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},rt.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},rt.fx=O.prototype.init,rt.fx.step={};var oe,re,se=/^(?:toggle|show|hide)$/,ae=/queueHooks$/;rt.Animation=rt.extend(M,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return u(n.elem,t,Pt.exec(e),n),n}]},tweener:function(t,e){rt.isFunction(t)?(e=t,t=["*"]):t=t.match(xt);for(var n,i=0,o=t.length;o>i;i++)n=t[i],M.tweeners[n]=M.tweeners[n]||[],M.tweeners[n].unshift(e)},prefilters:[z],prefilter:function(t,e){e?M.prefilters.unshift(t):M.prefilters.push(t)}}),rt.speed=function(t,e,n){var i=t&&"object"==typeof t?rt.extend({},t):{complete:n||!n&&e||rt.isFunction(t)&&t,duration:t,easing:n&&e||e&&!rt.isFunction(e)&&e};return i.duration=rt.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in rt.fx.speeds?rt.fx.speeds[i.duration]:rt.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){rt.isFunction(i.old)&&i.old.call(this),i.queue&&rt.dequeue(this,i.queue)},i},rt.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Dt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=rt.isEmptyObject(t),r=rt.speed(e,n,i),s=function(){var e=M(this,rt.extend({},t),r);(o||St.get(this,"finish"))&&e.stop(!0)};return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",r=rt.timers,s=St.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&ae.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=t&&r[o].queue!==t||(r[o].anim.stop(n),e=!1,r.splice(o,1));(e||!n)&&rt.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var e,n=St.get(this),i=n[t+"queue"],o=n[t+"queueHooks"],r=rt.timers,s=i?i.length:0;for(n.finish=!0,rt.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===t&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;s>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),rt.each(["toggle","show","hide"],function(t,e){var n=rt.fn[e];rt.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(L(e,!0),t,i,o)}}),rt.each({slideDown:L("show"),slideUp:L("hide"),slideToggle:L("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){rt.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),rt.timers=[],rt.fx.tick=function(){var t,e=0,n=rt.timers;for(oe=rt.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||rt.fx.stop(),oe=void 0},rt.fx.timer=function(t){rt.timers.push(t),
t()?rt.fx.start():rt.timers.pop()},rt.fx.interval=13,rt.fx.start=function(){re||(re=t.setInterval(rt.fx.tick,rt.fx.interval))},rt.fx.stop=function(){t.clearInterval(re),re=null},rt.fx.speeds={slow:600,fast:200,_default:400},rt.fn.delay=function(e,n){return e=rt.fx?rt.fx.speeds[e]||e:e,n=n||"fx",this.queue(n,function(n,i){var o=t.setTimeout(n,e);i.stop=function(){t.clearTimeout(o)}})},function(){var t=Y.createElement("input"),e=Y.createElement("select"),n=e.appendChild(Y.createElement("option"));t.type="checkbox",it.checkOn=""!==t.value,it.optSelected=n.selected,e.disabled=!0,it.optDisabled=!n.disabled,t=Y.createElement("input"),t.value="t",t.type="radio",it.radioValue="t"===t.value}();var le,ue=rt.expr.attrHandle;rt.fn.extend({attr:function(t,e){return Ct(this,rt.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){rt.removeAttr(this,t)})}}),rt.extend({attr:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return"undefined"==typeof t.getAttribute?rt.prop(t,e,n):(1===r&&rt.isXMLDoc(t)||(e=e.toLowerCase(),o=rt.attrHooks[e]||(rt.expr.match.bool.test(e)?le:void 0)),void 0!==n?null===n?void rt.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:(i=rt.find.attr(t,e),null==i?void 0:i))},attrHooks:{type:{set:function(t,e){if(!it.radioValue&&"radio"===e&&rt.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i,o=0,r=e&&e.match(xt);if(r&&1===t.nodeType)for(;n=r[o++];)i=rt.propFix[n]||n,rt.expr.match.bool.test(n)&&(t[i]=!1),t.removeAttribute(n)}}),le={set:function(t,e,n){return e===!1?rt.removeAttr(t,n):t.setAttribute(n,n),n}},rt.each(rt.expr.match.bool.source.match(/\w+/g),function(t,e){var n=ue[e]||rt.find.attr;ue[e]=function(t,e,i){var o,r;return i||(r=ue[e],ue[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,ue[e]=r),o}});var ce=/^(?:input|select|textarea|button)$/i,pe=/^(?:a|area)$/i;rt.fn.extend({prop:function(t,e){return Ct(this,rt.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[rt.propFix[t]||t]})}}),rt.extend({prop:function(t,e,n){var i,o,r=t.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&rt.isXMLDoc(t)||(e=rt.propFix[e]||e,o=rt.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=rt.find.attr(t,"tabindex");return e?parseInt(e,10):ce.test(t.nodeName)||pe.test(t.nodeName)&&t.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),it.optSelected||(rt.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null}}),rt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){rt.propFix[this.toLowerCase()]=this});var de=/[\t\r\n\f]/g;rt.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,l=0;if(rt.isFunction(t))return this.each(function(e){rt(this).addClass(t.call(this,e,q(this)))});if("string"==typeof t&&t)for(e=t.match(xt)||[];n=this[l++];)if(o=q(n),i=1===n.nodeType&&(" "+o+" ").replace(de," ")){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");a=rt.trim(i),o!==a&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(rt.isFunction(t))return this.each(function(e){rt(this).removeClass(t.call(this,e,q(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(xt)||[];n=this[l++];)if(o=q(n),i=1===n.nodeType&&(" "+o+" ").replace(de," ")){for(s=0;r=e[s++];)for(;i.indexOf(" "+r+" ")>-1;)i=i.replace(" "+r+" "," ");a=rt.trim(i),o!==a&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):rt.isFunction(t)?this.each(function(n){rt(this).toggleClass(t.call(this,n,q(this),e),e)}):this.each(function(){var e,i,o,r;if("string"===n)for(i=0,o=rt(this),r=t.match(xt)||[];e=r[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else(void 0===t||"boolean"===n)&&(e=q(this),e&&St.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||t===!1?"":St.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+q(n)+" ").replace(de," ").indexOf(e)>-1)return!0;return!1}});var he=/\r/g;rt.fn.extend({val:function(t){var e,n,i,o=this[0];{if(arguments.length)return i=rt.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(o=i?t.call(this,n,rt(this).val()):t,null==o?o="":"number"==typeof o?o+="":rt.isArray(o)&&(o=rt.map(o,function(t){return null==t?"":t+""})),e=rt.valHooks[this.type]||rt.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))});if(o)return e=rt.valHooks[o.type]||rt.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(he,""):null==n?"":n)}}}),rt.extend({valHooks:{option:{get:function(t){return rt.trim(t.value)}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,r="select-one"===t.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(n=i[l],(n.selected||l===o)&&(it.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!rt.nodeName(n.parentNode,"optgroup"))){if(e=rt(n).val(),r)return e;s.push(e)}return s},set:function(t,e){for(var n,i,o=t.options,r=rt.makeArray(e),s=o.length;s--;)i=o[s],(i.selected=rt.inArray(rt.valHooks.option.get(i),r)>-1)&&(n=!0);return n||(t.selectedIndex=-1),r}}}}),rt.each(["radio","checkbox"],function(){rt.valHooks[this]={set:function(t,e){return rt.isArray(e)?t.checked=rt.inArray(rt(t).val(),e)>-1:void 0}},it.checkOn||(rt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var fe=/^(?:focusinfocus|focusoutblur)$/;rt.extend(rt.event,{trigger:function(e,n,i,o){var r,s,a,l,u,c,p,d=[i||Y],h=nt.call(e,"type")?e.type:e,f=nt.call(e,"namespace")?e.namespace.split("."):[];if(s=a=i=i||Y,3!==i.nodeType&&8!==i.nodeType&&!fe.test(h+rt.event.triggered)&&(h.indexOf(".")>-1&&(f=h.split("."),h=f.shift(),f.sort()),u=h.indexOf(":")<0&&"on"+h,e=e[rt.expando]?e:new rt.Event(h,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:rt.makeArray(n,[e]),p=rt.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,n)!==!1)){if(!o&&!p.noBubble&&!rt.isWindow(i)){for(l=p.delegateType||h,fe.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;a===(i.ownerDocument||Y)&&d.push(a.defaultView||a.parentWindow||t)}for(r=0;(s=d[r++])&&!e.isPropagationStopped();)e.type=r>1?l:p.bindType||h,c=(St.get(s,"events")||{})[e.type]&&St.get(s,"handle"),c&&c.apply(s,n),c=u&&s[u],c&&c.apply&&Tt(s)&&(e.result=c.apply(s,n),e.result===!1&&e.preventDefault());return e.type=h,o||e.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),n)!==!1||!Tt(i)||u&&rt.isFunction(i[h])&&!rt.isWindow(i)&&(a=i[u],a&&(i[u]=null),rt.event.triggered=h,i[h](),rt.event.triggered=void 0,a&&(i[u]=a)),e.result}},simulate:function(t,e,n){var i=rt.extend(new rt.Event,n,{type:t,isSimulated:!0});rt.event.trigger(i,null,e),i.isDefaultPrevented()&&n.preventDefault()}}),rt.fn.extend({trigger:function(t,e){return this.each(function(){rt.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?rt.event.trigger(t,e,n,!0):void 0}}),rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){rt.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),rt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),it.focusin="onfocusin"in t,it.focusin||rt.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){rt.event.simulate(e,t.target,rt.event.fix(t))};rt.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=St.access(i,e);o||i.addEventListener(t,n,!0),St.access(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=St.access(i,e)-1;o?St.access(i,e,o):(i.removeEventListener(t,n,!0),St.remove(i,e))}}});var me=t.location,ge=rt.now(),ve=/\?/;rt.parseJSON=function(t){return JSON.parse(t+"")},rt.parseXML=function(e){var n;if(!e||"string"!=typeof e)return null;try{n=(new t.DOMParser).parseFromString(e,"text/xml")}catch(i){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&rt.error("Invalid XML: "+e),n};var ye=/#.*$/,be=/([?&])_=[^&]*/,we=/^(.*?):[ \t]*([^\r\n]*)$/gm,xe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,_e=/^(?:GET|HEAD)$/,Ce=/^\/\//,Te={},Se={},Ie="*/".concat("*"),Ee=Y.createElement("a");Ee.href=me.href,rt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:me.href,type:"GET",isLocal:xe.test(me.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ie,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":rt.parseJSON,"text xml":rt.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?F(F(t,rt.ajaxSettings),e):F(rt.ajaxSettings,t)},ajaxPrefilter:H(Te),ajaxTransport:H(Se),ajax:function(e,n){function i(e,n,i,a){var u,p,y,b,x,C=n;2!==w&&(w=2,l&&t.clearTimeout(l),o=void 0,s=a||"",_.readyState=e>0?4:0,u=e>=200&&300>e||304===e,i&&(b=B(d,_,i)),b=U(d,b,_,u),u?(d.ifModified&&(x=_.getResponseHeader("Last-Modified"),x&&(rt.lastModified[r]=x),x=_.getResponseHeader("etag"),x&&(rt.etag[r]=x)),204===e||"HEAD"===d.type?C="nocontent":304===e?C="notmodified":(C=b.state,p=b.data,y=b.error,u=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),_.status=e,_.statusText=(n||C)+"",u?m.resolveWith(h,[p,C,_]):m.rejectWith(h,[_,C,y]),_.statusCode(v),v=void 0,c&&f.trigger(u?"ajaxSuccess":"ajaxError",[_,d,u?p:y]),g.fireWith(h,[_,C]),c&&(f.trigger("ajaxComplete",[_,d]),--rt.active||rt.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=void 0),n=n||{};var o,r,s,a,l,u,c,p,d=rt.ajaxSetup({},n),h=d.context||d,f=d.context&&(h.nodeType||h.jquery)?rt(h):rt.event,m=rt.Deferred(),g=rt.Callbacks("once memory"),v=d.statusCode||{},y={},b={},w=0,x="canceled",_={readyState:0,getResponseHeader:function(t){var e;if(2===w){if(!a)for(a={};e=we.exec(s);)a[e[1].toLowerCase()]=e[2];e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===w?s:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return w||(t=b[n]=b[n]||t,y[t]=e),this},overrideMimeType:function(t){return w||(d.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>w)for(e in t)v[e]=[v[e],t[e]];else _.always(t[_.status]);return this},abort:function(t){var e=t||x;return o&&o.abort(e),i(0,e),this}};if(m.promise(_).complete=g.add,_.success=_.done,_.error=_.fail,d.url=((e||d.url||me.href)+"").replace(ye,"").replace(Ce,me.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=rt.trim(d.dataType||"*").toLowerCase().match(xt)||[""],null==d.crossDomain){u=Y.createElement("a");try{u.href=d.url,u.href=u.href,d.crossDomain=Ee.protocol+"//"+Ee.host!=u.protocol+"//"+u.host}catch(C){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=rt.param(d.data,d.traditional)),W(Te,d,n,_),2===w)return _;c=rt.event&&d.global,c&&0===rt.active++&&rt.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!_e.test(d.type),r=d.url,d.hasContent||(d.data&&(r=d.url+=(ve.test(r)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=be.test(r)?r.replace(be,"$1_="+ge++):r+(ve.test(r)?"&":"?")+"_="+ge++)),d.ifModified&&(rt.lastModified[r]&&_.setRequestHeader("If-Modified-Since",rt.lastModified[r]),rt.etag[r]&&_.setRequestHeader("If-None-Match",rt.etag[r])),(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&_.setRequestHeader("Content-Type",d.contentType),_.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Ie+"; q=0.01":""):d.accepts["*"]);for(p in d.headers)_.setRequestHeader(p,d.headers[p]);if(d.beforeSend&&(d.beforeSend.call(h,_,d)===!1||2===w))return _.abort();x="abort";for(p in{success:1,error:1,complete:1})_[p](d[p]);if(o=W(Se,d,n,_)){if(_.readyState=1,c&&f.trigger("ajaxSend",[_,d]),2===w)return _;d.async&&d.timeout>0&&(l=t.setTimeout(function(){_.abort("timeout")},d.timeout));try{w=1,o.send(y,i)}catch(C){if(!(2>w))throw C;i(-1,C)}}else i(-1,"No Transport");return _},getJSON:function(t,e,n){return rt.get(t,e,n,"json")},getScript:function(t,e){return rt.get(t,void 0,e,"script")}}),rt.each(["get","post"],function(t,e){rt[e]=function(t,n,i,o){return rt.isFunction(n)&&(o=o||i,i=n,n=void 0),rt.ajax(rt.extend({url:t,type:e,dataType:o,data:n,success:i},rt.isPlainObject(t)&&t))}}),rt._evalUrl=function(t){return rt.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},rt.fn.extend({wrapAll:function(t){var e;return rt.isFunction(t)?this.each(function(e){rt(this).wrapAll(t.call(this,e))}):(this[0]&&(e=rt(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this)},wrapInner:function(t){return rt.isFunction(t)?this.each(function(e){rt(this).wrapInner(t.call(this,e))}):this.each(function(){var e=rt(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=rt.isFunction(t);return this.each(function(n){rt(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){rt.nodeName(this,"body")||rt(this).replaceWith(this.childNodes)}).end()}}),rt.expr.filters.hidden=function(t){return!rt.expr.filters.visible(t)},rt.expr.filters.visible=function(t){return t.offsetWidth>0||t.offsetHeight>0||t.getClientRects().length>0};var ke=/%20/g,$e=/\[\]$/,Pe=/\r?\n/g,Ae=/^(?:submit|button|image|reset|file)$/i,De=/^(?:input|select|textarea|keygen)/i;rt.param=function(t,e){var n,i=[],o=function(t,e){e=rt.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=rt.ajaxSettings&&rt.ajaxSettings.traditional),rt.isArray(t)||t.jquery&&!rt.isPlainObject(t))rt.each(t,function(){o(this.name,this.value)});else for(n in t)V(n,t[n],e,o);return i.join("&").replace(ke,"+")},rt.fn.extend({serialize:function(){return rt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=rt.prop(this,"elements");return t?rt.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!rt(this).is(":disabled")&&De.test(this.nodeName)&&!Ae.test(t)&&(this.checked||!Ot.test(t))}).map(function(t,e){var n=rt(this).val();return null==n?null:rt.isArray(n)?rt.map(n,function(t){return{name:e.name,value:t.replace(Pe,"\r\n")}}):{name:e.name,value:n.replace(Pe,"\r\n")}}).get()}}),rt.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(e){}};var Oe={0:200,1223:204},je=rt.ajaxSettings.xhr();it.cors=!!je&&"withCredentials"in je,it.ajax=je=!!je,rt.ajaxTransport(function(e){var n,i;return it.cors||je&&!e.crossDomain?{send:function(o,r){var s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest");for(s in o)a.setRequestHeader(s,o[s]);n=function(t){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Oe[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&t.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(e.hasContent&&e.data||null)}catch(l){if(n)throw l}},abort:function(){n&&n()}}:void 0}),rt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return rt.globalEval(t),t}}}),rt.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),rt.ajaxTransport("script",function(t){if(t.crossDomain){var e,n;return{send:function(i,o){e=rt("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&o("error"===t.type?404:200,t.type)}),Y.head.appendChild(e[0])},abort:function(){n&&n()}}}});var Le=[],Ne=/(=)\?(?=&|$)|\?\?/;rt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Le.pop()||rt.expando+"_"+ge++;return this[t]=!0,t}}),rt.ajaxPrefilter("json jsonp",function(e,n,i){var o,r,s,a=e.jsonp!==!1&&(Ne.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ne.test(e.data)&&"data");return a||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=rt.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ne,"$1"+o):e.jsonp!==!1&&(e.url+=(ve.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return s||rt.error(o+" was not called"),s[0]},e.dataTypes[0]="json",r=t[o],t[o]=function(){s=arguments},i.always(function(){void 0===r?rt(t).removeProp(o):t[o]=r,e[o]&&(e.jsonpCallback=n.jsonpCallback,Le.push(o)),s&&rt.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),it.createHTMLDocument=function(){var t=Y.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),rt.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||(it.createHTMLDocument?Y.implementation.createHTMLDocument(""):Y);var i=ft.exec(t),o=!n&&[];return i?[e.createElement(i[1])]:(i=d([t],e,o),o&&o.length&&rt(o).remove(),rt.merge([],i.childNodes))};var ze=rt.fn.load;rt.fn.load=function(t,e,n){if("string"!=typeof t&&ze)return ze.apply(this,arguments);var i,o,r,s=this,a=t.indexOf(" ");return a>-1&&(i=rt.trim(t.slice(a)),t=t.slice(0,a)),rt.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),s.length>0&&rt.ajax({url:t,type:o||"GET",dataType:"html",data:e}).done(function(t){r=arguments,s.html(i?rt("<div>").append(rt.parseHTML(t)).find(i):t)}).always(n&&function(t,e){s.each(function(){n.apply(s,r||[t.responseText,e,t])})}),this},rt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){rt.fn[e]=function(t){return this.on(e,t)}}),rt.expr.filters.animated=function(t){return rt.grep(rt.timers,function(e){return t===e.elem}).length},rt.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,u,c=rt.css(t,"position"),p=rt(t),d={};"static"===c&&(t.style.position="relative"),a=p.offset(),r=rt.css(t,"top"),l=rt.css(t,"left"),u=("absolute"===c||"fixed"===c)&&(r+l).indexOf("auto")>-1,u?(i=p.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),rt.isFunction(e)&&(e=e.call(t,n,rt.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+o),"using"in e?e.using.call(t,d):p.css(d)}},rt.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){rt.offset.setOffset(this,t,e)});var e,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument;if(r)return e=r.documentElement,rt.contains(e,i)?(o=i.getBoundingClientRect(),n=X(r),{top:o.top+n.pageYOffset-e.clientTop,left:o.left+n.pageXOffset-e.clientLeft}):o},position:function(){if(this[0]){var t,e,n=this[0],i={top:0,left:0};return"fixed"===rt.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),rt.nodeName(t[0],"html")||(i=t.offset()),i.top+=rt.css(t[0],"borderTopWidth",!0)-t.scrollTop(),i.left+=rt.css(t[0],"borderLeftWidth",!0)-t.scrollLeft()),{top:e.top-i.top-rt.css(n,"marginTop",!0),left:e.left-i.left-rt.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===rt.css(t,"position");)t=t.offsetParent;return t||Kt})}}),rt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;rt.fn[t]=function(i){return Ct(this,function(t,i,o){var r=X(t);return void 0===o?r?r[e]:t[i]:void(r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):t[i]=o)},t,i,arguments.length)}}),rt.each(["top","left"],function(t,e){rt.cssHooks[e]=E(it.pixelPosition,function(t,n){return n?(n=I(t,e),Yt.test(n)?rt(t).position()[e]+"px":n):void 0})}),rt.each({Height:"height",Width:"width"},function(t,e){rt.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){rt.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return Ct(this,function(e,n,i){var o;return rt.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?rt.css(e,n,s):rt.style(e,n,i,s)},e,r?i:void 0,r,null)}})}),rt.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},size:function(){return this.length}}),rt.fn.andSelf=rt.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return rt});var Re=t.jQuery,Me=t.$;return rt.noConflict=function(e){return t.$===rt&&(t.$=Me),e&&t.jQuery===rt&&(t.jQuery=Re),rt},e||(t.jQuery=t.$=rt),rt}),function(t,e,n){"use strict";!function i(t,e,n){function o(s,a){if(!e[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=e[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return o(n?n:e)},c,c.exports,i,t,e,n)}return e[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(i,o,r){var s=function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(r,"__esModule",{value:!0});var a,l,u,c,p=i("./modules/handle-dom"),d=i("./modules/utils"),h=i("./modules/handle-swal-dom"),f=i("./modules/handle-click"),m=i("./modules/handle-key"),g=s(m),v=i("./modules/default-params"),y=s(v),b=i("./modules/set-params"),w=s(b);r["default"]=u=c=function(){function i(t){var e=o;return e[t]===n?y["default"][t]:e[t]}var o=arguments[0];if(p.addClass(e.body,"stop-scrolling"),h.resetInput(),o===n)return d.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=d.extend({},y["default"]);switch(typeof o){case"string":r.title=o,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(o.title===n)return d.logStr('Missing "title" argument!'),!1;r.title=o.title;for(var s in y["default"])r[s]=i(s);r.confirmButtonText=r.showCancelButton?"Confirm":y["default"].confirmButtonText,r.confirmButtonText=i("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return d.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof o),!1}w["default"](r),h.fixVerticalPosition(),h.openModal(arguments[1]);for(var u=h.getModal(),m=u.querySelectorAll("button"),v=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],b=function(t){return f.handleButton(t,r,u)},x=0;x<m.length;x++)for(var _=0;_<v.length;_++){var C=v[_];m[x][C]=b}h.getOverlay().onclick=b,a=t.onkeydown;var T=function(t){return g["default"](t,r,u)};t.onkeydown=T,t.onfocus=function(){setTimeout(function(){l!==n&&(l.focus(),l=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(t){if(!t)throw new Error("userParams is required");if("object"!=typeof t)throw new Error("userParams has to be a object");d.extend(y["default"],t)},u.close=c.close=function(){var i=h.getModal();p.fadeOut(h.getOverlay(),5),p.fadeOut(i,5),p.removeClass(i,"showSweetAlert"),p.addClass(i,"hideSweetAlert"),p.removeClass(i,"visible");var o=i.querySelector(".sa-icon.sa-success");p.removeClass(o,"animate"),p.removeClass(o.querySelector(".sa-tip"),"animateSuccessTip"),p.removeClass(o.querySelector(".sa-long"),"animateSuccessLong");var r=i.querySelector(".sa-icon.sa-error");p.removeClass(r,"animateErrorIcon"),p.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=i.querySelector(".sa-icon.sa-warning");return p.removeClass(s,"pulseWarning"),p.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),p.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var t=i.getAttribute("data-custom-class");p.removeClass(i,t)},300),p.removeClass(e.body,"stop-scrolling"),t.onkeydown=a,t.previousActiveElement&&t.previousActiveElement.focus(),l=n,clearTimeout(i.timeout),!0},u.showInputError=c.showInputError=function(t){var e=h.getModal(),n=e.querySelector(".sa-input-error");p.addClass(n,"show");var i=e.querySelector(".sa-error-container");p.addClass(i,"show"),i.querySelector("p").innerHTML=t,setTimeout(function(){u.enableButtons()},1),e.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(t){if(t&&13===t.keyCode)return!1;var e=h.getModal(),n=e.querySelector(".sa-input-error");p.removeClass(n,"show");var i=e.querySelector(".sa-error-container");p.removeClass(i,"show")},u.disableButtons=c.disableButtons=function(t){var e=h.getModal(),n=e.querySelector("button.confirm"),i=e.querySelector("button.cancel");n.disabled=!0,i.disabled=!0},u.enableButtons=c.enableButtons=function(t){var e=h.getModal(),n=e.querySelector("button.confirm"),i=e.querySelector("button.cancel");n.disabled=!1,i.disabled=!1},"undefined"!=typeof t?t.sweetAlert=t.swal=u:d.logStr("SweetAlert is a frontend module!"),o.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0});var i={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=i,e.exports=n["default"]},{}],3:[function(e,n,i){Object.defineProperty(i,"__esModule",{value:!0});var o=e("./utils"),r=(e("./handle-swal-dom"),e("./handle-dom")),s=function(e,n,i){function s(t){f&&n.confirmButtonColor&&(h.style.backgroundColor=t)}var u,c,p,d=e||t.event,h=d.target||d.srcElement,f=-1!==h.className.indexOf("confirm"),m=-1!==h.className.indexOf("sweet-overlay"),g=r.hasClass(i,"visible"),v=n.doneFunction&&"true"===i.getAttribute("data-has-done-function");switch(f&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=o.colorLuminance(u,-.04),p=o.colorLuminance(u,-.14)),d.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(p);break;case"mouseup":s(c);break;case"focus":var y=i.querySelector("button.confirm"),b=i.querySelector("button.cancel");f?b.style.boxShadow="none":y.style.boxShadow="none";break;case"click":var w=i===h,x=r.isDescendant(i,h);if(!w&&!x&&g&&!n.allowOutsideClick)break;f&&v&&g?a(i,n):v&&g||m?l(i,n):r.isDescendant(i,h)&&"BUTTON"===h.tagName&&sweetAlert.close()}},a=function(t,e){var n=!0;r.hasClass(t,"show-input")&&(n=t.querySelector("input").value,n||(n="")),e.doneFunction(n),e.closeOnConfirm&&sweetAlert.close(),e.showLoaderOnConfirm&&sweetAlert.disableButtons()},l=function(t,e){var n=String(e.doneFunction).replace(/\s/g,""),i="function("===n.substring(0,9)&&")"!==n.substring(9,10);i&&e.doneFunction(!1),e.closeOnCancel&&sweetAlert.close()};i["default"]={handleButton:s,handleConfirm:a,handleCancel:l},n.exports=i["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,i,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(t,e){return new RegExp(" "+e+" ").test(" "+t.className+" ")},s=function(t,e){r(t,e)||(t.className+=" "+e)},a=function(t,e){var n=" "+t.className.replace(/[\t\r\n]/g," ")+" ";if(r(t,e)){for(;n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},l=function(t){var n=e.createElement("div");return n.appendChild(e.createTextNode(t)),n.innerHTML},u=function(t){t.style.opacity="",t.style.display="block"},c=function(t){if(t&&!t.length)return u(t);for(var e=0;e<t.length;++e)u(t[e])},p=function(t){t.style.opacity="",t.style.display="none"},d=function(t){if(t&&!t.length)return p(t);for(var e=0;e<t.length;++e)p(t[e])},h=function(t,e){for(var n=e.parentNode;null!==n;){if(n===t)return!0;n=n.parentNode}return!1},f=function(t){t.style.left="-9999px",t.style.display="block";var e,n=t.clientHeight;return e="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(t).getPropertyValue("padding-top"),10):parseInt(t.currentStyle.padding),t.style.left="",t.style.display="none","-"+parseInt((n+e)/2)+"px"},m=function(t,e){if(+t.style.opacity<1){e=e||16,t.style.opacity=0,t.style.display="block";var n=+new Date,i=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){t.style.opacity=+t.style.opacity+(new Date-n)/100,n=+new Date,+t.style.opacity<1&&setTimeout(i,e)});i()}t.style.display="block"},g=function(t,e){e=e||16,t.style.opacity=1;var n=+new Date,i=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){t.style.opacity=+t.style.opacity-(new Date-n)/100,n=+new Date,+t.style.opacity>0?setTimeout(i,e):t.style.display="none"});i()},v=function(n){if("function"==typeof MouseEvent){var i=new MouseEvent("click",{view:t,bubbles:!1,cancelable:!0});n.dispatchEvent(i)}else if(e.createEvent){var o=e.createEvent("MouseEvents");o.initEvent("click",!1,!1),n.dispatchEvent(o)}else e.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},y=function(e){"function"==typeof e.stopPropagation?(e.stopPropagation(),e.preventDefault()):t.event&&t.event.hasOwnProperty("cancelBubble")&&(t.event.cancelBubble=!0)};o.hasClass=r,o.addClass=s,o.removeClass=a,o.escapeHtml=l,o._show=u,o.show=c,o._hide=p,o.hide=d,o.isDescendant=h,o.getTopMargin=f,o.fadeIn=m,o.fadeOut=g,o.fireClick=v,o.stopEventPropagation=y},{}],5:[function(e,i,o){Object.defineProperty(o,"__esModule",{value:!0});var r=e("./handle-dom"),s=e("./handle-swal-dom"),a=function(e,i,o){var a=e||t.event,l=a.keyCode||a.which,u=o.querySelector("button.confirm"),c=o.querySelector("button.cancel"),p=o.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(l)){for(var d=a.target||a.srcElement,h=-1,f=0;f<p.length;f++)if(d===p[f]){h=f;break}9===l?(d=-1===h?u:h===p.length-1?p[0]:p[h+1],r.stopEventPropagation(a),d.focus(),i.confirmButtonColor&&s.setFocusStyle(d,i.confirmButtonColor)):13===l?("INPUT"===d.tagName&&(d=u,u.focus()),d=-1===h?u:n):27===l&&i.allowEscapeKey===!0?(d=c,r.fireClick(d,a)):d=n}};o["default"]=a,i.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,i,o){var r=function(t){return t&&t.__esModule?t:{"default":t}};Object.defineProperty(o,"__esModule",{value:!0});var s=n("./utils"),a=n("./handle-dom"),l=n("./default-params"),u=r(l),c=n("./injected-html"),p=r(c),d=".sweet-alert",h=".sweet-overlay",f=function(){var t=e.createElement("div");for(t.innerHTML=p["default"];t.firstChild;)e.body.appendChild(t.firstChild);
},m=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=e.querySelector(d);return t||(f(),t=m()),t}),g=function(){var t=m();return t?t.querySelector("input"):void 0},v=function(){return e.querySelector(h)},y=function(t,e){var n=s.hexToRgb(e);t.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},b=function(n){var i=m();a.fadeIn(v(),10),a.show(i),a.addClass(i,"showSweetAlert"),a.removeClass(i,"hideSweetAlert"),t.previousActiveElement=e.activeElement;var o=i.querySelector("button.confirm");o.focus(),setTimeout(function(){a.addClass(i,"visible")},500);var r=i.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;i.timeout=setTimeout(function(){var t=(s||null)&&"true"===i.getAttribute("data-has-done-function");t?s(null):sweetAlert.close()},r)}},w=function(){var t=m(),e=g();a.removeClass(t,"show-input"),e.value=u["default"].inputValue,e.setAttribute("type",u["default"].inputType),e.setAttribute("placeholder",u["default"].inputPlaceholder),x()},x=function(t){if(t&&13===t.keyCode)return!1;var e=m(),n=e.querySelector(".sa-input-error");a.removeClass(n,"show");var i=e.querySelector(".sa-error-container");a.removeClass(i,"show")},_=function(){var t=m();t.style.marginTop=a.getTopMargin(m())};o.sweetAlertInitialize=f,o.getModal=m,o.getOverlay=v,o.getInput=g,o.setFocusStyle=y,o.openModal=b,o.resetInput=w,o.resetInputError=x,o.fixVerticalPosition=_},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(t,e,n){Object.defineProperty(n,"__esModule",{value:!0});var i='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=i,e.exports=n["default"]},{}],8:[function(t,e,i){Object.defineProperty(i,"__esModule",{value:!0});var o=t("./utils"),r=t("./handle-swal-dom"),s=t("./handle-dom"),a=["error","warning","info","success","input","prompt"],l=function(t){var e=r.getModal(),i=e.querySelector("h2"),l=e.querySelector("p"),u=e.querySelector("button.cancel"),c=e.querySelector("button.confirm");if(i.innerHTML=t.html?t.title:s.escapeHtml(t.title).split("\n").join("<br>"),l.innerHTML=t.html?t.text:s.escapeHtml(t.text||"").split("\n").join("<br>"),t.text&&s.show(l),t.customClass)s.addClass(e,t.customClass),e.setAttribute("data-custom-class",t.customClass);else{var p=e.getAttribute("data-custom-class");s.removeClass(e,p),e.setAttribute("data-custom-class","")}if(s.hide(e.querySelectorAll(".sa-icon")),t.type&&!o.isIE8()){var d=function(){for(var i=!1,o=0;o<a.length;o++)if(t.type===a[o]){i=!0;break}if(!i)return logStr("Unknown alert type: "+t.type),{v:!1};var l=["success","error","warning","info"],u=n;-1!==l.indexOf(t.type)&&(u=e.querySelector(".sa-icon.sa-"+t.type),s.show(u));var c=r.getInput();switch(t.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",t.inputType),c.value=t.inputValue,c.setAttribute("placeholder",t.inputPlaceholder),s.addClass(e,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof d)return d.v}if(t.imageUrl){var h=e.querySelector(".sa-icon.sa-custom");h.style.backgroundImage="url("+t.imageUrl+")",s.show(h);var f=80,m=80;if(t.imageSize){var g=t.imageSize.toString().split("x"),v=g[0],y=g[1];v&&y?(f=v,m=y):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+t.imageSize)}h.setAttribute("style",h.getAttribute("style")+"width:"+f+"px; height:"+m+"px")}e.setAttribute("data-has-cancel-button",t.showCancelButton),t.showCancelButton?u.style.display="inline-block":s.hide(u),e.setAttribute("data-has-confirm-button",t.showConfirmButton),t.showConfirmButton?c.style.display="inline-block":s.hide(c),t.cancelButtonText&&(u.innerHTML=s.escapeHtml(t.cancelButtonText)),t.confirmButtonText&&(c.innerHTML=s.escapeHtml(t.confirmButtonText)),t.confirmButtonColor&&(c.style.backgroundColor=t.confirmButtonColor,c.style.borderLeftColor=t.confirmLoadingButtonColor,c.style.borderRightColor=t.confirmLoadingButtonColor,r.setFocusStyle(c,t.confirmButtonColor)),e.setAttribute("data-allow-outside-click",t.allowOutsideClick);var b=t.doneFunction?!0:!1;e.setAttribute("data-has-done-function",b),t.animation?"string"==typeof t.animation?e.setAttribute("data-animation",t.animation):e.setAttribute("data-animation","pop"):e.setAttribute("data-animation","none"),e.setAttribute("data-timer",t.timer)};i["default"]=l,e.exports=i["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(e,n,i){Object.defineProperty(i,"__esModule",{value:!0});var o=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},r=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?parseInt(e[1],16)+", "+parseInt(e[2],16)+", "+parseInt(e[3],16):null},s=function(){return t.attachEvent&&!t.addEventListener},a=function(e){t.console&&t.console.log("SweetAlert: "+e)},l=function(t,e){t=String(t).replace(/[^0-9a-f]/gi,""),t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;var n,i,o="#";for(i=0;3>i;i++)n=parseInt(t.substr(2*i,2),16),n=Math.round(Math.min(Math.max(0,n+n*e),255)).toString(16),o+=("00"+n).substr(n.length);return o};i.extend=o,i.hexToRgb=r,i.isIE8=s,i.logStr=a,i.colorLuminance=l},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",function(){n=!0});var o=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.alert");o||n.data("bs.alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})}var n='[data-dismiss="alert"]',i=function(e){t(e).on("click",n,this.close)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.close=function(e){function n(){s.detach().trigger("closed.bs.alert").remove()}var o=t(this),r=o.attr("data-target");r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));var s=t(r);e&&e.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.button"),r="object"==typeof e&&e;o||i.data("bs.button",o=new n(this,r)),"toggle"==e?o.toggle():e&&o.setState(e)})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.6",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data();e+="Text",null==r.resetText&&i.data("resetText",i[o]()),setTimeout(t.proxy(function(){i[o](null==r[e]?this.options[e]:r[e]),"loadingText"==e?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=t(n.target);i.hasClass("btn")||(i=i.closest(".btn")),e.call(i,"toggle"),t(n.target).is('input[type="radio"]')||t(n.target).is('input[type="checkbox"]')||n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.carousel"),r=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e),s="string"==typeof e?e:r.slide;o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof e?o.to(e):s?o[s]():r.interval&&o.pause().cycle()})}var n=function(e,n){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",t.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};n.VERSION="3.3.6",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},n.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},n.prototype.getItemForDirection=function(t,e){var n=this.getItemIndex(e),i="prev"==t&&0===n||"next"==t&&n==this.$items.length-1;if(i&&!this.options.wrap)return e;var o="prev"==t?-1:1,r=(n+o)%this.$items.length;return this.$items.eq(r)},n.prototype.to=function(t){var e=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",this.$items.eq(t))},n.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(e,o),s=this.interval,a="next"==e?"left":"right",l=this;if(r.hasClass("active"))return this.sliding=!1;var u=r[0],c=t.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var p=t(this.$indicators.children()[this.getItemIndex(r)]);p&&p.addClass("active")}var d=t.Event("slid.bs.carousel",{relatedTarget:u,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(r.addClass(e),r[0].offsetWidth,o.addClass(a),r.addClass(a),o.one("bsTransitionEnd",function(){r.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(d)),s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=n,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this};var o=function(n){var i,o=t(this),r=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(r.hasClass("carousel")){var s=t.extend({},r.data(),o.data()),a=o.attr("data-slide-to");a&&(s.interval=!1),e.call(r,s),a&&r.data("bs.carousel").to(a),n.preventDefault()}};t(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var n=t(this);e.call(n,n.data())})})}(jQuery),+function(t){"use strict";function e(e){var n,i=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(i)}function n(e){return this.each(function(){var n=t(this),o=n.data("bs.collapse"),r=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);!o&&r.toggle&&/show|hide/.test(e)&&(r.toggle=!1),o||n.data("bs.collapse",o=new i(this,r)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.6",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var r=t.Event("show.bs.collapse");if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),e||o.data("bs.collapse",null));var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var l=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,i){var o=t(i);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var o=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=t(this);o.attr("data-target")||i.preventDefault();var r=e(o),s=r.data("bs.collapse"),a=s?"toggle":o.data();n.call(r,a)})}(jQuery),+function(t){"use strict";function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&t(n);return i&&i.length?i:e.parent()}function n(n){n&&3===n.which||(t(o).remove(),t(r).each(function(){var i=t(this),o=e(i),r={relatedTarget:this};o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(o[0],n.target)||(o.trigger(n=t.Event("hide.bs.dropdown",r)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",r)))))}))}function i(e){return this.each(function(){var n=t(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new s(this)),"string"==typeof e&&i[e].call(n)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.6",s.prototype.toggle=function(i){var o=t(this);if(!o.is(".disabled, :disabled")){var r=e(o),s=r.hasClass("open");if(n(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var a={relatedTarget:this};if(r.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},s.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=t(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=e(i),s=o.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(r).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+a);if(l.length){var u=l.index(n.target);38==n.which&&u>0&&u--,40==n.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,i){return this.each(function(){var o=t(this),r=o.data("bs.modal"),s=t.extend({},n.DEFAULTS,o.data(),"object"==typeof e&&e);r||o.data("bs.modal",r=new n(this,s)),"string"==typeof e?r[e](i):s.show&&r.show(i)})}var n=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.6",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},n.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var r=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r)}))},n.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(e){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var r=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;r?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):s()}else e&&e()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=n,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=t(this),o=i.attr("href"),r=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},r.data(),i.data());i.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(r,s,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tooltip"),r="object"==typeof e&&e;(o||!/destroy|hide/.test(e))&&(o||i.data("bs.tooltip",o=new n(this,r)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,i){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,i){n[t]!=i&&(e[t]=i)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),n.isInStateTrue()?void 0:(clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide())},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var o=this,r=this.tip(),s=this.getUID(this.type);this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(a);u&&(a=a.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),p=r[0].offsetWidth,d=r[0].offsetHeight;if(u){var h=a,f=this.getPosition(this.$viewport);a="bottom"==a&&c.bottom+d>f.bottom?"top":"top"==a&&c.top-d<f.top?"bottom":"right"==a&&c.right+p>f.width?"left":"left"==a&&c.left-p<f.left?"right":a,r.removeClass(h).addClass(a)}var m=this.getCalculatedOffset(a,c,p,d);this.applyPlacement(m,a);var g=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",g).emulateTransitionEnd(n.TRANSITION_DURATION):g()}},n.prototype.applyPlacement=function(e,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,u=i[0].offsetHeight;"top"==n&&u!=r&&(e.top=e.top+r-u);var c=this.getViewportAdjustedDelta(n,e,l,u);c.left?e.left+=c.left:e.top+=c.top;var p=/top|bottom/.test(n),d=p?2*c.left-o+l:2*c.top-r+u,h=p?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(d,i[0][h],p);
},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(e){function i(){"in"!=o.hoverState&&r.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),e&&e()}var o=this,r=t(this.$tip),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(r.removeClass("in"),t.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],i="BODY"==n.tagName,o=n.getBoundingClientRect();null==o.width&&(o=t.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var r=i?{top:0,left:0}:e.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},o,s,a,r)},n.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,i){var o={top:0,left:0};if(!this.$viewport)return o;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+i;a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var u=e.left-r,c=e.left+r+n;u<s.left?o.left=s.left-u:c>s.right&&(o.left=s.left+s.width-c)}return o},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null})};var i=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.popover"),r="object"==typeof e&&e;(o||!/destroy|hide/.test(e))&&(o||i.data("bs.popover",o=new n(this,r)),"string"==typeof e&&o[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.6",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery),+function(t){"use strict";function e(n,i){this.$body=t(document.body),this.$scrollElement=t(t(n).is(document.body)?window:n),this.options=t.extend({},e.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n;o||i.data("bs.scrollspy",o=new e(this,r)),"string"==typeof n&&o[n]()})}e.VERSION="3.3.6",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,n="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),o=e.data("target")||e.attr("href"),r=/^#./.test(o)&&t(o);return r&&r.length&&r.is(":visible")&&[[r[n]().top+i,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),e>=i)return s!=(t=r[r.length-1])&&this.activate(t);if(s&&e<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)s!=r[t]&&e>=o[t]&&(void 0===o[t+1]||e<o[t+1])&&this.activate(r[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=n,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);n.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new n(this)),"string"==typeof e&&o[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),i=e.data("target");if(i||(i=e.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=n.find(".active:last a"),r=t.Event("hide.bs.tab",{relatedTarget:e[0]}),s=t.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(r),e.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){var a=t(i);this.activate(e.closest("li"),n),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(e,i,o){function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var s=i.find("> .active"),a=o&&t.support.transition&&(s.length&&s.hasClass("fade")||!!i.find("> .fade").length);s.length&&a?s.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),s.removeClass("in")};var i=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=i,this};var o=function(n){n.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.affix"),r="object"==typeof e&&e;o||i.data("bs.affix",o=new n(this,r)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.options=t.extend({},n.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.6",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(t,e,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),s=this.$target.height();if(null!=n&&"top"==this.affixed)return n>o?"top":!1;if("bottom"==this.affixed)return null!=n?o+this.unpin<=r.top?!1:"bottom":t-i>=o+s?!1:"bottom";var a=null==this.affixed,l=a?o:r.top,u=a?s:e;return null!=n&&n>=o?"top":null!=i&&l+u>=t-i?"bottom":!1},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},n.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element));var a=this.getState(s,e,o,r);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=t.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-e-r})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=n,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var n=t(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(n,i)})})}(jQuery),function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=b.elements;return"string"==typeof t?t.split(" "):t}function o(t,e){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof t&&(t=t.join(" ")),b.elements=n+" "+t,u(e)}function r(t){var e=y[t[g]];return e||(e={},v++,t[g]=v,y[v]=e),e}function s(t,n,i){if(n||(n=e),p)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():m.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!o.canHaveChildren||f.test(t)||o.tagUrn?o:i.frag.appendChild(o)}function a(t,n){if(t||(t=e),p)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)o.createElement(a[s]);return o}function l(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return b.shivMethods?s(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(b,e.frag)}function u(t){t||(t=e);var i=r(t);return!b.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),p||l(t,i),t}var c,p,d="3.7.3-pre",h=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,p=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,p=!0}}();var b={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:h.shivCSS!==!1,supportsUnknownElements:p,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:u,createElement:s,createDocumentFragment:a,addElements:o};t.html5=b,u(e),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof window?window:this,document),function(t){function e(){}function n(t){function n(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,n){t.fn[e]=function(o){if("string"==typeof o){for(var s=i.call(arguments,1),a=0,l=this.length;l>a;a++){var u=this[a],c=t.data(u,e);if(c)if(t.isFunction(c[o])&&"_"!==o.charAt(0)){var p=c[o].apply(c,s);if(void 0!==p)return p}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var i=t.data(this,e);i?(i.option(o),i._init()):(i=new n(this,o),t.data(this,e,i))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){n(e),o(t,e)},t.bridget}}var i=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],n):n("object"==typeof exports?require("jquery"):t.jQuery)}(window),function(t){function e(e){var n=t.event;return n.target=n.target||n.srcElement||e,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(t,e,n){t.addEventListener(e,n,!1)}:n.attachEvent&&(i=function(t,n,i){t[n+i]=i.handleEvent?function(){var n=e(t);i.handleEvent.call(i,n)}:function(){var n=e(t);i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var o=function(){};n.removeEventListener?o=function(t,e,n){t.removeEventListener(e,n,!1)}:n.detachEvent&&(o=function(t,e,n){t.detachEvent("on"+e,t[e+n]);try{delete t[e+n]}catch(i){t[e+n]=void 0}});var r={bind:i,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(){"use strict";function t(){}function e(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function n(t){return function(){return this[t].apply(this,arguments)}}var i=t.prototype,o=this,r=o.EventEmitter;i.getListeners=function(t){var e,n,i=this._getEvents();if(t instanceof RegExp){e={};for(n in i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n])}else e=i[t]||(i[t]=[]);return e},i.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},i.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&(e={},e[t]=n),e||n},i.addListener=function(t,n){var i,o=this.getListenersAsObject(t),r="object"==typeof n;for(i in o)o.hasOwnProperty(i)&&-1===e(o[i],n)&&o[i].push(r?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(t){return this.getListeners(t),this},i.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},i.removeListener=function(t,n){var i,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(i=e(r[o],n),-1!==i&&r[o].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},i.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},i.manipulateListeners=function(t,e,n){var i,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(i=n.length;i--;)r.call(this,e,n[i]);else for(i in e)e.hasOwnProperty(i)&&(o=e[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o));return this},i.removeEvent=function(t){var e,n=typeof t,i=this._getEvents();if("string"===n)delete i[t];else if(t instanceof RegExp)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(t,e){var n,i,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(i=s[o].length;i--;)n=s[o][i],n.once===!0&&this.removeListener(t,n.listener),r=n.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},i.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:o.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof i[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=n.length;r>o;o++)if(e=n[o]+t,"string"==typeof i[e])return e}}var n="Webkit Moz ms Ms O".split(" "),i=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t,e){function n(t){var e=parseFloat(t),n=-1===t.indexOf("%")&&!isNaN(e);return n&&e}function i(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,n=a.length;n>e;e++){var i=a[e];t[i]=0}return t}function r(e){function i(){if(!d){d=!0;var i=t.getComputedStyle;if(u=function(){var t=i?function(t){return i(t,null)}:function(t){return t.currentStyle};return function(e){var n=t(e);return n||s("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),n}}(),c=e("boxSizing")){var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style[c]="border-box";var r=document.body||document.documentElement;r.appendChild(o);var a=u(o);p=200===n(a.width),r.removeChild(o)}}}function r(t){if(i(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=u(t);if("none"===e.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var s=r.isBorderBox=!(!c||!e[c]||"border-box"!==e[c]),d=0,h=a.length;h>d;d++){var f=a[d],m=e[f];m=l(t,m);var g=parseFloat(m);r[f]=isNaN(g)?0:g}var v=r.paddingLeft+r.paddingRight,y=r.paddingTop+r.paddingBottom,b=r.marginLeft+r.marginRight,w=r.marginTop+r.marginBottom,x=r.borderLeftWidth+r.borderRightWidth,_=r.borderTopWidth+r.borderBottomWidth,C=s&&p,T=n(e.width);T!==!1&&(r.width=T+(C?0:v+x));var S=n(e.height);return S!==!1&&(r.height=S+(C?0:y+_)),r.innerWidth=r.width-(v+x),r.innerHeight=r.height-(y+_),r.outerWidth=r.width+b,r.outerHeight=r.height+w,r}}function l(e,n){if(t.getComputedStyle||-1===n.indexOf("%"))return n;var i=e.style,o=i.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),i.left=n,n=i.pixelLeft,i.left=o,s&&(r.left=s),n}var u,c,p,d=!1;return r}var s="undefined"==typeof console?i:function(t){console.error(t)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],r):"object"==typeof exports?module.exports=r(require("desandro-get-style-property")):t.getSize=r(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function n(t){var n="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||n||i()}function i(){e.isReady=!0;for(var t=0,n=s.length;n>t;t++){var i=s[t];i()}}function o(o){return"complete"===r.readyState?i():(o.bind(r,"DOMContentLoaded",n),o.bind(r,"readystatechange",n),o.bind(t,"load",n)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],o):"object"==typeof exports?module.exports=o(require("eventie")):t.docReady=o(t.eventie)}(window),function(t){"use strict";function e(t,e){return t[s](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function i(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function o(t,i){return n(t),e(t,i)}var r,s=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],n=0,i=e.length;i>n;n++){var o=e[n],r=o+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),l=e(a,"div");r=l?e:o}else r=i;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t,e){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(n,i){return e(t,n,i)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function(t,e,n){var i={};i.extend=function(t,e){for(var n in e)t[n]=e[n];return t},i.modulo=function(t,e){return(t%e+e)%e};var o=Object.prototype.toString;i.isArray=function(t){return"[object Array]"==o.call(t)},i.makeArray=function(t){var e=[];if(i.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e},i.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},i.removeFrom=function(t,e){var n=i.indexOf(t,e);-1!=n&&t.splice(n,1)},i.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},i.setText=function(){function t(t,n){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=n}var e;return t}(),i.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,n(t,e))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,e){t=i.makeArray(t);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r];if(i.isElement(a))if(e){n(a,e)&&o.push(a);for(var l=a.querySelectorAll(e),u=0,c=l.length;c>u;u++)o.push(l[u])}else o.push(a)}return o},i.debounceMethod=function(t,e,n){var i=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){i.apply(r,e),delete r[o]},n||100)}},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,n){return e+"-"+n}).toLowerCase()};var r=t.console;return i.htmlInit=function(n,o){e(function(){for(var e=i.toDashed(o),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",l=0,u=s.length;u>l;l++){var c,p=s[l],d=p.getAttribute(a);try{c=d&&JSON.parse(d)}catch(h){r&&r.error("Error parsing "+a+" on "+p.nodeName.toLowerCase()+(p.id?"#"+p.id:"")+": "+h);continue}var f=new n(p,c),m=t.jQuery;m&&m.data(p,o,f)}})},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(n,i,o,r){return e(t,n,i,o,r)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Outlayer={},t.Outlayer.Item=e(t,t.EventEmitter,t.getSize,t.getStyleProperty,t.fizzyUIUtils))}(window,function(t,e,n,i,o){"use strict";function r(t){for(var e in t)return!1;return e=null,!0}function s(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function a(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var l=t.getComputedStyle,u=l?function(t){return l(t,null)}:function(t){return t.currentStyle},c=i("transition"),p=i("transform"),d=c&&p,h=!!i("perspective"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[c],m=["transform","transition","transitionDuration","transitionProperty"],g=function(){for(var t={},e=0,n=m.length;n>e;e++){var o=m[e],r=i(o);r&&r!==o&&(t[o]=r)}return t}();o.extend(s.prototype,e.prototype),s.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.getSize=function(){this.size=n(this.element)},s.prototype.css=function(t){var e=this.element.style;for(var n in t){var i=g[n]||n;e[i]=t[n]}},s.prototype.getPosition=function(){var t=u(this.element),e=this.layout.options,n=e.isOriginLeft,i=e.isOriginTop,o=t[n?"left":"right"],r=t[i?"top":"bottom"],s=this.layout.size,a=-1!=o.indexOf("%")?parseFloat(o)/100*s.width:parseInt(o,10),l=-1!=r.indexOf("%")?parseFloat(r)/100*s.height:parseInt(r,10);a=isNaN(a)?0:a,l=isNaN(l)?0:l,a-=n?s.paddingLeft:s.paddingRight,l-=i?s.paddingTop:s.paddingBottom,this.position.x=a,this.position.y=l},s.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,n={},i=e.isOriginLeft?"paddingLeft":"paddingRight",o=e.isOriginLeft?"left":"right",r=e.isOriginLeft?"right":"left",s=this.position.x+t[i];n[o]=this.getXValue(s),n[r]="";var a=e.isOriginTop?"paddingTop":"paddingBottom",l=e.isOriginTop?"top":"bottom",u=e.isOriginTop?"bottom":"top",c=this.position.y+t[a];n[l]=this.getYValue(c),n[u]="",this.css(n),this.emitEvent("layout",[this])},s.prototype.getXValue=function(t){var e=this.layout.options;return e.percentPosition&&!e.isHorizontal?t/this.layout.size.width*100+"%":t+"px"},s.prototype.getYValue=function(t){var e=this.layout.options;return e.percentPosition&&e.isHorizontal?t/this.layout.size.height*100+"%":t+"px"},s.prototype._transitionTo=function(t,e){this.getPosition();var n=this.position.x,i=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-n,l=e-i,u={};u.transform=this.getTranslate(a,l),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},s.prototype.getTranslate=function(t,e){var n=this.layout.options;return t=n.isOriginLeft?t:-t,e=n.isOriginTop?e:-e,h?"translate3d("+t+"px, "+e+"px, 0)":"translate("+t+"px, "+e+"px)"},s.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},s.prototype.moveTo=d?s.prototype._transitionTo:s.prototype.goTo,s.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},s.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},s.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var n in t.onTransitionEnd)e.onEnd[n]=t.onTransitionEnd[n];for(n in t.to)e.ingProperties[n]=!0,t.isCleaning&&(e.clean[n]=!0);if(t.from){this.css(t.from);var i=this.element.offsetHeight;i=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var v="opacity,"+a(g.transform||"transform");s.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:v,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(f,this,!1))},s.prototype.transition=s.prototype[c?"_transition":"_nonTransition"],s.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},s.prototype.onotransitionend=function(t){this.ontransitionend(t)};var y={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};s.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=y[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],r(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var i=e.onEnd[n];i.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},s.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(f,this,!1),this.isTransitioning=!1},s.prototype._removeStyles=function(t){var e={};for(var n in t)e[n]="";this.css(e)};var b={transitionProperty:"",transitionDuration:""};return s.prototype.removeTransitionStyles=function(){this.css(b)},s.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},s.prototype.remove=function(){if(!c||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var t=this;this.once("transitionEnd",function(){t.removeElem()}),this.hide()},s.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},n=this.getHideRevealTransitionEndProperty("visibleStyle");e[n]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},s.prototype.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var n in e)return n},s.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},n=this.getHideRevealTransitionEndProperty("hiddenStyle");e[n]=this.onHideTransitionEnd,
this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},s.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},s.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(n,i,o,r,s){return e(t,n,i,o,r,s)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.eventie,t.EventEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,n,i,o,r){"use strict";function s(t,e){var n=o.getQueryElement(t);if(!n)return void(a&&a.error("Bad element for "+this.constructor.namespace+": "+(n||t)));this.element=n,l&&(this.$element=l(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var i=++c;this.element.outlayerGUID=i,p[i]=this,this._create(),this.options.isInitLayout&&this.layout()}var a=t.console,l=t.jQuery,u=function(){},c=0,p={};return s.namespace="outlayer",s.Item=r,s.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},o.extend(s.prototype,n.prototype),s.prototype.option=function(t){o.extend(this.options,t)},s.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},s.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},s.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),n=this.constructor.Item,i=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new n(s,this);i.push(a)}return i},s.prototype._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},s.prototype.getItemElements=function(){for(var t=[],e=0,n=this.items.length;n>e;e++)t.push(this.items[e].element);return t},s.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},s.prototype._init=s.prototype.layout,s.prototype._resetLayout=function(){this.getSize()},s.prototype.getSize=function(){this.size=i(this.element)},s.prototype._getMeasurement=function(t,e){var n,r=this.options[t];r?("string"==typeof r?n=this.element.querySelector(r):o.isElement(r)&&(n=r),this[t]=n?i(n)[e]:r):this[t]=0},s.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},s.prototype._getItemsForLayout=function(t){for(var e=[],n=0,i=t.length;i>n;n++){var o=t[n];o.isIgnored||e.push(o)}return e},s.prototype._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){for(var n=[],i=0,o=t.length;o>i;i++){var r=t[i],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e||r.isLayoutInstant,n.push(s)}this._processLayoutQueue(n)}},s.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},s.prototype._processLayoutQueue=function(t){for(var e=0,n=t.length;n>e;e++){var i=t[e];this._positionItem(i.item,i.x,i.y,i.isInstant)}},s.prototype._positionItem=function(t,e,n,i){i?t.goTo(e,n):t.moveTo(e,n)},s.prototype._postLayout=function(){this.resizeContainer()},s.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},s.prototype._getContainerSize=u,s.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var n=this.size;n.isBorderBox&&(t+=e?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},s.prototype._emitCompleteOnItems=function(t,e){function n(){o.dispatchEvent(t+"Complete",null,[e])}function i(){s++,s===r&&n()}var o=this,r=e.length;if(!e||!r)return void n();for(var s=0,a=0,l=e.length;l>a;a++){var u=e[a];u.once(t,i)}},s.prototype.dispatchEvent=function(t,e,n){var i=e?[e].concat(n):n;if(this.emitEvent(t,i),l)if(this.$element=this.$element||l(this.element),e){var o=l.Event(e);o.type=t,this.$element.trigger(o,n)}else this.$element.trigger(t,n)},s.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},s.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},s.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,n=t.length;n>e;e++){var i=t[e];this.ignore(i)}}},s.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,n=t.length;n>e;e++){var i=t[e];o.removeFrom(this.stamps,i),this.unignore(i)}},s.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)):void 0},s.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var n=this.stamps[t];this._manageStamp(n)}}},s.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},s.prototype._manageStamp=u,s.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},s.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.prototype.bindResize=function(){this.isResizeBound||(e.bind(t,"resize",this),this.isResizeBound=!0)},s.prototype.unbindResize=function(){this.isResizeBound&&e.unbind(t,"resize",this),this.isResizeBound=!1},s.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},s.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},s.prototype.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},s.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},s.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},s.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var n=this.items.slice(0);this.items=e.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(n)}},s.prototype.reveal=function(t){this._emitCompleteOnItems("reveal",t);for(var e=t&&t.length,n=0;e&&e>n;n++){var i=t[n];i.reveal()}},s.prototype.hide=function(t){this._emitCompleteOnItems("hide",t);for(var e=t&&t.length,n=0;e&&e>n;n++){var i=t[n];i.hide()}},s.prototype.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},s.prototype.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},s.prototype.getItem=function(t){for(var e=0,n=this.items.length;n>e;e++){var i=this.items[e];if(i.element===t)return i}},s.prototype.getItems=function(t){t=o.makeArray(t);for(var e=[],n=0,i=t.length;i>n;n++){var r=t[n],s=this.getItem(r);s&&e.push(s)}return e},s.prototype.remove=function(t){var e=this.getItems(t);if(this._emitCompleteOnItems("remove",e),e&&e.length)for(var n=0,i=e.length;i>n;n++){var r=e[n];r.remove(),o.removeFrom(this.items,r)}},s.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,n=this.items.length;n>e;e++){var i=this.items[e];i.destroy()}this.unbindResize();var o=this.element.outlayerGUID;delete p[o],delete this.element.outlayerGUID,l&&l.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&p[e]},s.create=function(t,e){function n(){s.apply(this,arguments)}return Object.create?n.prototype=Object.create(s.prototype):o.extend(n.prototype,s.prototype),n.prototype.constructor=n,n.defaults=o.extend({},s.defaults),o.extend(n.defaults,e),n.prototype.settings={},n.namespace=t,n.data=s.data,n.Item=function(){r.apply(this,arguments)},n.Item.prototype=new r,o.htmlInit(n,t),l&&l.bridget&&l.bridget(t,n),n},s.Item=r,s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var n in t){var i=e[n];this.sortData[n]=i(this.element,this)}}};var n=e.prototype.destroy;return e.prototype.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function n(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var i=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],o=0,r=i.length;r>o;o++){var s=i[o];n.prototype[s]=t(s)}}(),n.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),n=this.isotope.size&&e;return n&&e.innerHeight!=this.isotope.size.innerHeight},n.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},n.prototype.getSegmentSize=function(t,e){var n=t+e,i="outer"+e;if(this._getMeasurement(n,i),!this[n]){var o=this.getFirstItemSize();this[n]=o&&o[i]||this.isotope.size["inner"+e]}},n.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},n.modes={},n.create=function(t,e){function i(){n.apply(this,arguments)}return i.prototype=new n,e&&(i.options=e),i.prototype.namespace=t,n.modes[t]=i,i},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):t.Masonry=e(t.Outlayer,t.getSize,t.fizzyUIUtils)}(window,function(t,e,n){var i=t.create("masonry");return i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],n=t&&t.element;this.columnWidth=n&&e(n).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/i,s=i-o%i,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,n=e(t);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=n.indexOf(r,s),l={x:this.columnWidth*a,y:s},u=s+t.size.outerHeight,c=this.cols+1-r.length,p=0;c>p;p++)this.colYs[a+p]=u;return l},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],n=this.cols+1-t,i=0;n>i;i++){var o=this.colYs.slice(i,i+t);e[i]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var n=e(t),i=this._getElementOffset(t),o=this.options.isOriginLeft?i.left:i.right,r=o+n.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var l=(this.options.isOriginTop?i.top:i.bottom)+n.outerHeight,u=s;a>=u;u++)this.colYs[u]=Math.max(l,this.colYs[u])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";function n(t,e){for(var n in e)t[n]=e[n];return t}var i=t.create("masonry"),o=i.prototype._getElementOffset,r=i.prototype.layout,s=i.prototype._getMeasurement;n(i.prototype,e.prototype),i.prototype._getElementOffset=o,i.prototype.layout=r,i.prototype._getMeasurement=s;var a=i.prototype.measureColumns;i.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var l=i.prototype._manageStamp;return i.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,l.apply(this,arguments)},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,n=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>n&&(this.x=0,this.y=this.maxY);var i={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,i},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,n=this.y;return this.y+=t.size.outerHeight,{x:e,y:n}},e.prototype._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(n,i,o,r,s,a){return e(t,n,i,o,r,s,a)}):"object"==typeof exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,n,i,o,r,s){function a(t,e){return function(n,i){for(var o=0,r=t.length;r>o;o++){var s=t[o],a=n.sortData[s],l=i.sortData[s];if(a>l||l>a){var u=void 0!==e[s]?e[s]:e,c=u?1:-1;return(a>l?1:-1)*c}}return 0}}var l=t.jQuery,u=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},c=document.documentElement,p=c.textContent?function(t){return t.textContent}:function(t){return t.innerText},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=r,d.LayoutMode=s,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in s.modes)this._initLayoutMode(t)},d.prototype.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),n=0,i=t.length;i>n;n++){var o=t[n];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},d.prototype._initLayoutMode=function(t){var e=s.modes[t],n=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,n):n,this.modes[t]=new e(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){function e(){i.reveal(n.needReveal),i.hide(n.needHide)}this.option(t),this._getIsInstant();var n=this._filter(this.items);this.filteredItems=n.matches;var i=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._bindArrangeComplete=function(){function t(){e&&n&&i&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,n,i,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){n=!0,t()}),this.once("revealComplete",function(){i=!0,t()})},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var n=[],i=[],o=[],r=this._getFilterTest(e),s=0,a=t.length;a>s;s++){var l=t[s];if(!l.isIgnored){var u=r(l);u&&n.push(l),u&&l.isHidden?i.push(l):u||l.isHidden||o.push(l)}}return{matches:n,needReveal:i,needHide:o}},d.prototype._getFilterTest=function(t){return l&&this.options.isJQueryFiltering?function(e){return l(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return i(e.element,t)}},d.prototype.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var n=t[e];this._sorters[e]=h(n)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,n=0;e&&e>n;n++){var i=t[n];i.updateSortData()}};var h=function(){function t(t){if("string"!=typeof t)return t;var n=u(t).split(" "),i=n[0],o=i.match(/^\[(.+)\]$/),r=o&&o[1],s=e(r,i),a=d.sortDataParsers[n[1]];return t=a?function(t){return t&&a(s(t))}:function(t){return t&&s(t)}}function e(t,e){var n;return n=t?function(e){return e.getAttribute(t)}:function(t){var n=t.querySelector(e);return n&&p(n)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),n=a(e,this.options.sortAscending);this.filteredItems.sort(n),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var n=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(n)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var n=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=n.concat(this.filteredItems),this.items=e.concat(this.items)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var n,i,o=e.length;for(n=0;o>n;n++)i=e[n],this.element.appendChild(i.element);var r=this._filter(e).matches;for(n=0;o>n;n++)e[n].isLayoutInstant=!0;for(this.arrange(),n=0;o>n;n++)delete e[n].isLayoutInstant;this.reveal(r)}};var f=d.prototype.remove;return d.prototype.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);f.call(this,t);var n=e&&e.length;if(n)for(var i=0;n>i;i++){var r=e[i];o.removeFrom(this.filteredItems,r)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var n=this.items[t];n.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.call(this);return this.options.transitionDuration=e,n},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,n=this.filteredItems.length;n>e;e++)t.push(this.filteredItems[e].element);return t},d}),function(t){function e(){var t=location.href;return hashtag=-1!==t.indexOf("#prettyPhoto")?decodeURI(t.substring(t.indexOf("#prettyPhoto")+1,t.length)):!1,hashtag}function n(){"undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/")}function i(){-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto")}function o(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+t+"=([^&#]*)",i=new RegExp(n),o=i.exec(e);return null==o?"":o[1]}t.prettyPhoto={version:"3.1.5"},t.fn.prettyPhoto=function(r){function s(){t(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(I/2-v.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:v.contentHeight,width:v.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:E/2-v.containerWidth/2<0?0:E/2-v.containerWidth/2,width:v.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(v.height).width(v.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==p(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(v.resized?t("a.pp_expand,a.pp_contract").show():t("a.pp_expand").hide()),!settings.autoplay_slideshow||C||y||t.prettyPhoto.startSlideshow(),settings.changepicturecallback(),y=!0}),m(),r.ajaxcallback()}function a(e){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){t(".pp_loaderIcon").show(),e()})}function l(e){e>1?t(".pp_nav").show():t(".pp_nav").hide()}function u(t,e){if(resized=!1,c(t,e),imageWidth=t,imageHeight=e,(_>E||x>I)&&doresize&&settings.allow_resize&&!S){for(resized=!0,fitting=!1;!fitting;)_>E?(imageWidth=E-200,imageHeight=e/t*imageWidth):x>I?(imageHeight=I-200,imageWidth=t/e*imageHeight):fitting=!0,x=imageHeight,_=imageWidth;(_>E||x>I)&&u(_,x),c(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(x),containerWidth:Math.floor(_)+2*settings.horizontal_padding,contentHeight:Math.floor(b),contentWidth:Math.floor(w),resized:resized}}function c(e,n){e=parseFloat(e),n=parseFloat(n),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(e),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(e),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(t("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),b=n+detailsHeight,w=e,x=b+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),_=e}function p(t){return t.match(/youtube\.com\/watch/i)||t.match(/youtu\.be/i)?"youtube":t.match(/vimeo\.com/i)?"vimeo":t.match(/\b.mov\b/i)?"quicktime":t.match(/\b.swf\b/i)?"flash":t.match(/\biframe=true\b/i)?"iframe":t.match(/\bajax=true\b/i)?"ajax":t.match(/\bcustom=true\b/i)?"custom":"#"==t.substr(0,1)?"inline":"image"}function d(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=h(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=I/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>I)return;$pp_pic_holder.css({top:projectedTop,left:E/2+scroll_pos.scrollLeft-contentwidth/2})}}function h(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function f(){I=t(window).height(),E=t(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(t(document).height()).width(E)}function m(){isSet&&settings.overlay_gallery&&"image"==p(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((v.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,t.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function g(e){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),t("body").append(settings.markup),$pp_pic_holder=t(".pp_pic_holder"),$ppt=t(".ppt"),$pp_overlay=t("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var n=0;n<pp_images.length;n++)pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[n]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=t(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").click(function(){return t.prettyPhoto.changeGalleryPage("next"),t.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return t.prettyPhoto.changeGalleryPage("previous"),t.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(e){t(this).find("a").click(function(){return t.prettyPhoto.changePage(e),t.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return t.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:t(document).height(),width:t(window).width()}).bind("click",function(){settings.modal||t.prettyPhoto.close()}),t("a.pp_close").bind("click",function(){return t.prettyPhoto.close(),!1}),settings.allow_expand&&t("a.pp_expand").bind("click",function(e){return t(this).hasClass("pp_expand")?(t(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(t(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),a(function(){t.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return t.prettyPhoto.changePage("previous"),t.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return t.prettyPhoto.changePage("next"),t.prettyPhoto.stopSlideshow(),!1}),d()}r=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},r);var v,y,b,w,x,_,C,T=this,S=!1,I=t(window).height(),E=t(window).width();return doresize=!0,scroll_pos=h(),t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){d(),f()}),r.keyboard_shortcuts&&t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(e){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(e.keyCode){case 37:t.prettyPhoto.changePage("previous"),e.preventDefault();break;case 39:t.prettyPhoto.changePage("next"),e.preventDefault();break;case 27:settings.modal||t.prettyPhoto.close(),e.preventDefault()}}),t.prettyPhoto.initialize=function(){return settings=r,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=t(this).attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=galleryRegExp.exec(theRel)?!0:!1,pp_images=isSet?jQuery.map(T,function(e,n){return-1!=t(e).attr(settings.hook).indexOf(theRel)?t(e).attr("href"):void 0}):t.makeArray(t(this).attr("href")),pp_titles=isSet?jQuery.map(T,function(e,n){return-1!=t(e).attr(settings.hook).indexOf(theRel)?t(e).find("img").attr("alt")?t(e).find("img").attr("alt"):"":void 0}):t.makeArray(t(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(T,function(e,n){return-1!=t(e).attr(settings.hook).indexOf(theRel)?t(e).attr("title")?t(e).attr("title"):"":void 0}):t.makeArray(t(this).attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(t(this).attr("href"),pp_images),rel_index=isSet?set_position:t("a["+settings.hook+"^='"+theRel+"']").index(t(this)),g(this),settings.allow_resize&&t(window).bind("scroll.prettyphoto",function(){d()}),t.prettyPhoto.open(),!1},t.prettyPhoto.open=function(e){return"undefined"==typeof settings&&(settings=r,pp_images=t.makeArray(arguments[0]),pp_titles=arguments[1]?t.makeArray(arguments[1]):t.makeArray(""),pp_descriptions=arguments[2]?t.makeArray(arguments[2]):t.makeArray(""),isSet=pp_images.length>1?!0:!1,set_position=arguments[3]?arguments[3]:0,g(e.target)),settings.hideflash&&t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),l(t(pp_images).size()),t(".pp_loaderIcon").show(),settings.deeplinking&&n(),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link)),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+t(pp_images).size()),"undefined"!=typeof pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(o("width",pp_images[set_position]))?o("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(o("height",pp_images[set_position]))?o("height",pp_images[set_position]):settings.default_height.toString(),S=!1,-1!=movie_height.indexOf("%")&&(movie_height=parseFloat(t(window).height()*parseFloat(movie_height)/100-150),S=!0),-1!=movie_width.indexOf("%")&&(movie_width=parseFloat(t(window).width()*parseFloat(movie_width)/100-150),S=!0),$pp_pic_holder.fadeIn(function(){switch(settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" "),imgPreloader="",skipInjection=!1,p(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<t(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){v=u(imgPreloader.width,imgPreloader.height),s()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),t.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":v=u(movie_width,movie_height),movie_id=o("v",pp_images[set_position]),""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],movie_id.indexOf("?")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),movie_id.indexOf("&")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="http://www.youtube.com/embed/"+movie_id,o("rel",pp_images[set_position])?movie+="?rel="+o("rel",pp_images[set_position]):movie+="?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,v.width).replace(/{height}/g,v.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":v=u(movie_width,movie_height),movie_id=pp_images[set_position];var e=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,n=movie_id.match(e);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&byline=0&portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=v.width+"/embed/?moog_width="+v.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,v.height).replace(/{path}/g,movie);break;case"quicktime":v=u(movie_width,movie_height),v.height+=15,v.contentHeight+=15,v.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,v.width).replace(/{height}/g,v.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":v=u(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,v.width).replace(/{height}/g,v.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":v=u(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,v.width).replace(/{height}/g,v.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,v=u(movie_width,movie_height),doresize=!0,skipInjection=!0,t.get(pp_images[set_position],function(t){toInject=settings.inline_markup.replace(/{content}/g,t),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,s()});break;case"custom":v=u(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=t(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(),doresize=!1,v=u(t(myClone).width(),t(myClone).height()),doresize=!0,t(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,t(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,s())}),!1},t.prettyPhoto.changePage=function(e){currentGalleryPage=0,"previous"==e?(set_position--,set_position<0&&(set_position=t(pp_images).size()-1)):"next"==e?(set_position++,set_position>t(pp_images).size()-1&&(set_position=0)):set_position=e,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),a(function(){t.prettyPhoto.open()})},t.prettyPhoto.changeGalleryPage=function(t){"next"==t?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==t?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=t,slide_speed="next"==t||"previous"==t?settings.animation_speed:0,slide_to=currentGalleryPage*itemsPerPage*itemWidth,$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},t.prettyPhoto.startSlideshow=function(){"undefined"==typeof C?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return t.prettyPhoto.stopSlideshow(),!1}),C=setInterval(t.prettyPhoto.startSlideshow,settings.slideshow)):t.prettyPhoto.changePage("next")},t.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return t.prettyPhoto.startSlideshow(),!1}),clearInterval(C),C=void 0},t.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(t.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){t(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),t(this).remove(),t(window).unbind("scroll.prettyphoto"),i(),settings.callback(),doresize=!0,y=!1,delete settings}))},!pp_alreadyInitialized&&e()&&(pp_alreadyInitialized=!0,hashIndex=e(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){t("a["+r.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",t.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;!function(t){function e(){var e,n,i={height:u.innerHeight,width:u.innerWidth};return i.height||(e=l.compatMode,(e||!t.support.boxModel)&&(n="CSS1Compat"===e?c:l.body,i={height:n.clientHeight,width:n.clientWidth})),i}function n(){return{top:u.pageYOffset||c.scrollTop||l.body.scrollTop,left:u.pageXOffset||c.scrollLeft||l.body.scrollLeft}}function i(){var i,s=t(),l=0;if(t.each(a,function(t,e){var n=e.data.selector,i=e.$element;s=s.add(n?i.find(n):i)}),i=s.length)for(o=o||e(),r=r||n();i>l;l++)if(t.contains(c,s[l])){var u,p,d,h=t(s[l]),f={height:h.height(),width:h.width()},m=h.offset(),g=h.data("inview");if(!r||!o)return;m.top+f.height>r.top&&m.top<r.top+o.height&&m.left+f.width>r.left&&m.left<r.left+o.width?(u=r.left>m.left?"right":r.left+o.width<m.left+f.width?"left":"both",p=r.top>m.top?"bottom":r.top+o.height<m.top+f.height?"top":"both",d=u+"-"+p,g&&g===d||h.data("inview",d).trigger("inview",[!0,u,p])):g&&h.data("inview",!1).trigger("inview",[!1])}}var o,r,s,a={},l=document,u=window,c=l.documentElement,p=t.expando;t.event.special.inview={add:function(e){a[e.guid+"-"+this[p]]={data:e,$element:t(this)},s||t.isEmptyObject(a)||(s=setInterval(i,250))},remove:function(e){try{delete a[e.guid+"-"+this[p]]}catch(n){}t.isEmptyObject(a)&&(clearInterval(s),s=null)}},t(u).bind("scroll resize scrollstop",function(){o=r=null}),!c.addEventListener&&c.attachEvent&&c.attachEvent("onfocusin",function(){r=null})}(jQuery),function(t,e){"function"==typeof define&&define.amd?define("smoothScroll",e(t)):"object"==typeof exports?module.smoothScroll=e(t):t.smoothScroll=e(t)}(this,function(t){"use strict";var e,n={},i=!!document.querySelector&&!!t.addEventListener,o={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!1,callbackBefore:function(){},callbackAfter:function(){}},r=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(n,t[i],i,t);else for(var o=0,r=t.length;r>o;o++)e.call(n,t[o],o,t)},s=function(t,e){var n={};return r(t,function(e,i){n[i]=t[i]}),r(e,function(t,i){n[i]=e[i]}),n},a=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=.5>e?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=.5>e?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},l=function(t,e,n){var i=0;if(t.offsetParent)do i+=t.offsetTop,t=t.offsetParent;while(t);return i=i-e-n,i>=0?i:0},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(t){return t.replace(/^\s+|\s+$/g,"")},p=function(t){var e={};return t&&(t=t.split(";"),t.forEach(function(t){t=c(t),""!==t&&(t=t.split(":"),e[t[0]]=c(t[1]))})),e},d=function(t,e){history.pushState&&(e||"true"===e)&&history.pushState({pos:t.id},"",t)};return n.animateScroll=function(e,n,i,r){var c=s(c||o,i||{}),h=p(e?e.getAttribute("data-options"):null);c=s(c,h);var f,m,g,v=document.querySelector("[data-scroll-header]"),y=null===v?0:v.offsetHeight+v.offsetTop,b=t.pageYOffset,w=l(document.querySelector(n),y,parseInt(c.offset,10)),x=w-b,_=u(),C=0;e&&"a"===e.tagName.toLowerCase()&&r&&r.preventDefault(),d(n,c.updateURL);var T=function(i,o,r){var s=t.pageYOffset;(i==o||s==o||t.innerHeight+s>=_)&&(clearInterval(r),c.callbackAfter(e,n))},S=function(){C+=16,m=C/parseInt(c.speed,10),m=m>1?1:m,g=b+x*a(c.easing,m),t.scrollTo(0,Math.floor(g)),T(g,w,f)},I=function(){c.callbackBefore(e,n),f=setInterval(S,16)};0===t.pageYOffset&&t.scrollTo(0,0),I()},n.init=function(t){if(i){e=s(o,t||{});var a=document.querySelectorAll("[data-scroll]");r(a,function(t){t.addEventListener("click",n.animateScroll.bind(null,t,t.hash,e),!1)})}},n}),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,n){var i={init:function(e,n){var i=this;i.$elem=t(n),i.options=t.extend({},t.fn.owlCarousel.options,i.$elem.data(),e),i.userOptions=e,i.loadContent()},loadContent:function(){function e(t){var e,n="";if("function"==typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this,[t]);else{for(e in t.owl)t.owl.hasOwnProperty(e)&&(n+=t.owl[e].item);i.$elem.html(n)}i.logIn()}var n,i=this;"function"==typeof i.options.beforeInit&&i.options.beforeInit.apply(this,[i.$elem]),"string"==typeof i.options.jsonPath?(n=i.options.jsonPath,t.getJSON(n,e)):i.logIn()},logIn:function(){var t=this;t.$elem.data({"owl-originalStyles":t.$elem.attr("style"),"owl-originalClasses":t.$elem.attr("class")}),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible=null,t.setVars()},setVars:function(){var t=this;return 0===t.$elem.children().length?!1:(t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),void t.onStartup())},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),t.options.transitionStyle!==!1&&t.transitionTypes(t.options.transitionStyle),t.options.autoPlay===!0&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;t.options.lazyLoad===!0&&t.lazyLoad(),t.options.autoHeight===!0&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(){var t=this;e.setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var t=this;return t.$elem.is(":visible")!==!1?!1:(t.$elem.css({opacity:0}),e.clearInterval(t.autoPlayInterval),e.clearInterval(t.checkVisible),void(t.checkVisible=e.setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),e.clearInterval(t.checkVisible))},500)))},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),n=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),n||t.$elem.addClass(t.options.theme)},updateItems:function(){var e,n,i=this;if(i.options.responsive===!1)return!1;if(i.options.singleItem===!0)return i.options.items=i.orignalItems=1,i.options.itemsCustom=!1,i.options.itemsDesktop=!1,i.options.itemsDesktopSmall=!1,i.options.itemsTablet=!1,i.options.itemsTabletSmall=!1,i.options.itemsMobile=!1,!1;if(e=t(i.options.responsiveBaseWidth).width(),e>(i.options.itemsDesktop[0]||i.orignalItems)&&(i.options.items=i.orignalItems),i.options.itemsCustom!==!1)for(i.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.options.itemsCustom.length;n+=1)i.options.itemsCustom[n][0]<=e&&(i.options.items=i.options.itemsCustom[n][1]);else e<=i.options.itemsDesktop[0]&&i.options.itemsDesktop!==!1&&(i.options.items=i.options.itemsDesktop[1]),e<=i.options.itemsDesktopSmall[0]&&i.options.itemsDesktopSmall!==!1&&(i.options.items=i.options.itemsDesktopSmall[1]),e<=i.options.itemsTablet[0]&&i.options.itemsTablet!==!1&&(i.options.items=i.options.itemsTablet[1]),e<=i.options.itemsTabletSmall[0]&&i.options.itemsTabletSmall!==!1&&(i.options.items=i.options.itemsTabletSmall[1]),e<=i.options.itemsMobile[0]&&i.options.itemsMobile!==!1&&(i.options.items=i.options.itemsMobile[1]);i.options.items>i.itemsAmount&&i.options.itemsScaleUp===!0&&(i.options.items=i.itemsAmount)},response:function(){var n,i,o=this;return o.options.responsive!==!0?!1:(i=t(e).width(),o.resizer=function(){t(e).width()!==i&&(o.options.autoPlay!==!1&&e.clearInterval(o.autoPlayInterval),e.clearTimeout(n),n=e.setTimeout(function(){i=t(e).width(),o.updateVars()},o.options.responsiveRefreshRate))},void t(e).resize(o.resizer))},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),t.options.autoPlay!==!1&&t.checkAp()},appendItemsSizes:function(){var e=this,n=0,i=e.itemsAmount-e.options.items;e.$owlItems.each(function(o){var r=t(this);r.css({width:e.itemWidth}).data("owl-item",Number(o)),(o%e.options.items===0||o===i)&&(o>i||(n+=1)),r.data("owl-roundPages",n)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e,n,i,o=this,r=0,s=0;for(o.positionsInArray=[0],o.pagesInArray=[],e=0;e<o.itemsAmount;e+=1)s+=o.itemWidth,o.positionsInArray.push(-s),o.options.scrollPerPage===!0&&(n=t(o.$owlItems[e]),i=n.data("owl-roundPages"),i!==r&&(o.pagesInArray[r]=o.positionsInArray[e],r=i))},buildControls:function(){var e=this;(e.options.navigation===!0||e.options.pagination===!0)&&(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),e.options.pagination===!0&&e.buildPagination(),e.options.navigation===!0&&e.buildButtons()},buildButtons:function(){var e=this,n=t('<div class="owl-buttons"/>');e.owlControls.append(n),e.buttonPrev=t("<div/>",{"class":"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{"class":"owl-next",html:e.options.navigationText[1]||""}),n.append(e.buttonPrev).append(e.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)})},updatePagination:function(){var e,n,i,o,r,s,a=this;if(a.options.pagination===!1)return!1;for(a.paginationWrapper.html(""),e=0,n=a.itemsAmount-a.itemsAmount%a.options.items,o=0;o<a.itemsAmount;o+=1)o%a.options.items===0&&(e+=1,n===o&&(i=a.itemsAmount-a.options.items),r=t("<div/>",{"class":"owl-page"}),s=t("<span></span>",{text:a.options.paginationNumbers===!0?e:"","class":a.options.paginationNumbers===!0?"owl-numbers":""}),r.append(s),r.data("owl-page",n===o?i:o),r.data("owl-roundPages",e),a.paginationWrapper.append(r));a.checkPagination()},checkPagination:function(){var e=this;return e.options.pagination===!1?!1:void e.paginationWrapper.find(".owl-page").each(function(){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))})},checkNavigation:function(){var t=this;return t.options.navigation===!1?!1:void(t.options.rewindNav===!1&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled"))))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){var t=this;t.owlControls&&t.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem>e.maximumItem+(e.options.scrollPerPage===!0?e.options.items-1:0)){if(e.options.rewindNav!==!0)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(e.options.scrollPerPage===!0&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=e.options.scrollPerPage===!0?e.options.items:1,e.currentItem<0){if(e.options.rewindNav!==!0)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,n,i){var o,r=this;return r.isTransition?!1:("function"==typeof r.options.beforeMove&&r.options.beforeMove.apply(this,[r.$elem]),t>=r.maximumItem?t=r.maximumItem:0>=t&&(t=0),r.currentItem=r.owl.currentItem=t,r.options.transitionStyle!==!1&&"drag"!==i&&1===r.options.items&&r.browser.support3d===!0?(r.swapSpeed(0),r.browser.support3d===!0?r.transition3d(r.positionsInArray[t]):r.css2slide(r.positionsInArray[t],1),r.afterGo(),r.singleItemTransition(),!1):(o=r.positionsInArray[t],r.browser.support3d===!0?(r.isCss3Finish=!1,n===!0?(r.swapSpeed("paginationSpeed"),e.setTimeout(function(){r.isCss3Finish=!0},r.options.paginationSpeed)):"rewind"===n?(r.swapSpeed(r.options.rewindSpeed),e.setTimeout(function(){r.isCss3Finish=!0},r.options.rewindSpeed)):(r.swapSpeed("slideSpeed"),e.setTimeout(function(){r.isCss3Finish=!0},r.options.slideSpeed)),r.transition3d(o)):n===!0?r.css2slide(o,r.options.paginationSpeed):"rewind"===n?r.css2slide(o,r.options.rewindSpeed):r.css2slide(o,r.options.slideSpeed),void r.afterGo()))},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:0>=t&&(t=0),e.swapSpeed(0),e.browser.support3d===!0?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),t.options.autoPlay!==!1&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){var t=this;t.apStatus="stop",e.clearInterval(t.autoPlayInterval)},checkAp:function(){var t=this;"stop"!==t.apStatus&&t.play()},play:function(){var t=this;return t.apStatus="play",t.options.autoPlay===!1?!1:(e.clearInterval(t.autoPlayInterval),void(t.autoPlayInterval=e.setInterval(function(){t.next(!0)},t.options.autoPlay)))},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){var e=this;e.$owlWrapper.css(e.doTranslate(t))},css2move:function(t){var e=this;e.$owlWrapper.css({left:t})},css2slide:function(t,e){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var t,i,o,r,s=this,a="translate3d(0px, 0px, 0px)",l=n.createElement("div");l.style.cssText="  -moz-transform:"+a+"; -ms-transform:"+a+"; -o-transform:"+a+"; -webkit-transform:"+a+"; transform:"+a,t=/translate3d\(0px, 0px, 0px\)/g,i=l.style.cssText.match(t),o=null!==i&&i.length>=1,r="ontouchstart"in e||e.navigator.msMaxTouchPoints,s.browser={support3d:o,isTouch:r}},moveEvents:function(){var t=this;(t.options.mouseDrag!==!1||t.options.touchDrag!==!1)&&(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},t.options.mouseDrag===!0&&t.options.touchDrag===!0?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:t.options.mouseDrag===!1&&t.options.touchDrag===!0?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:t.options.mouseDrag===!0&&t.options.touchDrag===!1&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(t){t.preventDefault()}),e.$elem.on("mousedown.disableTextSelect",function(e){return t(e.target).is("input, textarea, select, option")})},gestures:function(){function i(t){if(void 0!==t.touches)return{x:t.touches[0].pageX,y:t.touches[0].pageY};if(void 0===t.touches){if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY};if(void 0===t.pageX)return{x:t.clientX,y:t.clientY}}}function o(e){"on"===e?(t(n).on(l.ev_types.move,s),t(n).on(l.ev_types.end,a)):"off"===e&&(t(n).off(l.ev_types.move),t(n).off(l.ev_types.end))}function r(n){var r,s=n.originalEvent||n||e.event;if(3===s.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(l.isCssFinish===!1&&!l.options.dragBeforeAnimFinish)return!1;if(l.isCss3Finish===!1&&!l.options.dragBeforeAnimFinish)return!1;l.options.autoPlay!==!1&&e.clearInterval(l.autoPlayInterval),l.browser.isTouch===!0||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,t(this).css(l.removeTransition()),r=t(this).position(),u.relativePos=r.left,u.offsetX=i(s).x-r.left,u.offsetY=i(s).y-r.top,o("on"),u.sliding=!1,u.targetElement=s.target||s.srcElement}}function s(o){var r,s,a=o.originalEvent||o||e.event;l.newPosX=i(a).x-u.offsetX,l.newPosY=i(a).y-u.offsetY,l.newRelativeX=l.newPosX-u.relativePos,"function"==typeof l.options.startDragging&&u.dragging!==!0&&0!==l.newRelativeX&&(u.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&l.browser.isTouch===!0&&(void 0!==a.preventDefault?a.preventDefault():a.returnValue=!1,u.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&u.sliding===!1&&t(n).off("touchmove.owl"),r=function(){return l.newRelativeX/5},s=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,r()),s()),l.browser.support3d===!0?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function a(n){var i,r,s,a=n.originalEvent||n||e.event;a.target=a.target||a.srcElement,u.dragging=!1,l.browser.isTouch!==!0&&l.$owlWrapper.removeClass("grabbing"),l.dragDirection=l.owl.dragDirection=l.newRelativeX<0?"left":"right",0!==l.newRelativeX&&(i=l.getNewPosition(),l.goTo(i,!1,"drag"),u.targetElement===a.target&&l.browser.isTouch!==!0&&(t(a.target).on("click.disable",function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(e.target).off("click.disable")}),r=t._data(a.target,"events").click,s=r.pop(),r.splice(0,0,s))),o("off")}var l=this,u={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",r)},getNewPosition:function(){var t=this,e=t.closestItem();
return e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var e=this,n=e.options.scrollPerPage===!0?e.pagesInArray:e.positionsInArray,i=e.newPosX,o=null;return t.each(n,function(r,s){i-e.itemWidth/20>n[r+1]&&i-e.itemWidth/20<s&&"left"===e.moveDirection()?(o=s,e.currentItem=e.options.scrollPerPage===!0?t.inArray(o,e.positionsInArray):r):i+e.itemWidth/20<s&&i+e.itemWidth/20>(n[r+1]||n[r]-e.itemWidth)&&"right"===e.moveDirection()&&(e.options.scrollPerPage===!0?(o=n[r+1]||n[n.length-1],e.currentItem=t.inArray(o,e.positionsInArray)):(o=n[r+1],e.currentItem=r+1))}),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",function(){t.next()}),t.$elem.on("owl.prev",function(){t.prev()}),t.$elem.on("owl.play",function(e,n){t.options.autoPlay=n,t.play(),t.hoverStatus="play"}),t.$elem.on("owl.stop",function(){t.stop(),t.hoverStatus="stop"}),t.$elem.on("owl.goTo",function(e,n){t.goTo(n)}),t.$elem.on("owl.jumpTo",function(e,n){t.jumpTo(n)})},stopOnHover:function(){var t=this;t.options.stopOnHover===!0&&t.browser.isTouch!==!0&&t.options.autoPlay!==!1&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var e,n,i,o,r,s=this;if(s.options.lazyLoad===!1)return!1;for(e=0;e<s.itemsAmount;e+=1)n=t(s.$owlItems[e]),"loaded"!==n.data("owl-loaded")&&(i=n.data("owl-item"),o=n.find(".lazyOwl"),"string"==typeof o.data("src")?(void 0===n.data("owl-loaded")&&(o.hide(),n.addClass("loading").data("owl-loaded","checked")),r=s.options.lazyFollow===!0?i>=s.currentItem:!0,r&&i<s.currentItem+s.options.items&&o.length&&o.each(function(){s.lazyPreload(n,t(this))})):n.data("owl-loaded","loaded"))},lazyPreload:function(t,n){function i(){t.data("owl-loaded","loaded").removeClass("loading"),n.removeAttr("data-src"),"fade"===s.options.lazyEffect?n.fadeIn(400):n.show(),"function"==typeof s.options.afterLazyLoad&&s.options.afterLazyLoad.apply(this,[s.$elem])}function o(){a+=1,s.completeImg(n.get(0))||r===!0?i():100>=a?e.setTimeout(o,100):i()}var r,s=this,a=0;"DIV"===n.prop("tagName")?(n.css("background-image","url("+n.data("src")+")"),r=!0):n[0].src=n.data("src"),o()},autoHeight:function(){function n(){var n=t(r.$owlItems[r.currentItem]).height();r.wrapperOuter.css("height",n+"px"),r.wrapperOuter.hasClass("autoHeight")||e.setTimeout(function(){r.wrapperOuter.addClass("autoHeight")},0)}function i(){o+=1,r.completeImg(s.get(0))?n():100>=o?e.setTimeout(i,100):r.wrapperOuter.css("height","")}var o,r=this,s=t(r.$owlItems[r.currentItem]).find("img");void 0!==s.get(0)?(o=0,i()):n()},completeImg:function(t){var e;return t.complete?(e=typeof t.naturalWidth,"undefined"!==e&&0===t.naturalWidth?!1:!0):!1},onVisibleItems:function(){var e,n=this;for(n.options.addClassActive===!0&&n.$owlItems.removeClass("active"),n.visibleItems=[],e=n.currentItem;e<n.currentItem+n.options.items;e+=1)n.visibleItems.push(e),n.options.addClassActive===!0&&t(n.$owlItems[e]).addClass("active");n.owl.visibleItems=n.visibleItems},transitionTypes:function(t){var e=this;e.outClass="owl-"+t+"-out",e.inClass="owl-"+t+"-in"},singleItemTransition:function(){function t(t){return{position:"relative",left:t+"px"}}var e=this,n=e.outClass,i=e.inClass,o=e.$owlItems.eq(e.currentItem),r=e.$owlItems.eq(e.prevItem),s=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],a=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":a+"px","-moz-perspective-origin":a+"px","perspective-origin":a+"px"}),r.css(t(s,10)).addClass(n).on(l,function(){e.endPrev=!0,r.off(l),e.clearTransStyle(r,n)}),o.addClass(i).on(l,function(){e.endCurrent=!0,o.off(l),e.clearTransStyle(o,i)})},clearTransStyle:function(t,e){var n=this;t.css({position:"",left:""}).removeClass(e),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),t(n).off(".owl owl"),t(e).off("resize",i.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr({style:t.$elem.data("owl-originalStyles")||"","class":t.$elem.data("owl-originalClasses")})},destroy:function(){var t=this;t.stop(),e.clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var n=this,i=t.extend({},n.userOptions,e);n.unWrap(),n.init(i,n.$elem)},addItem:function(t,e){var n,i=this;return t?0===i.$elem.children().length?(i.$elem.append(t),i.setVars(),!1):(i.unWrap(),n=void 0===e||-1===e?-1:e,n>=i.$userItems.length||-1===n?i.$userItems.eq(-1).after(t):i.$userItems.eq(n).before(t),void i.setVars()):!1},removeItem:function(t){var e,n=this;return 0===n.$elem.children().length?!1:(e=void 0===t||-1===t?-1:t,n.unWrap(),n.$userItems.eq(e).remove(),void n.setVars())}};t.fn.owlCarousel=function(e){return this.each(function(){if(t(this).data("owl-init")===!0)return!1;t(this).data("owl-init",!0);var n=Object.create(i);n.init(e,this),t.data(this,"owlCarousel",n)})},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),window.matchMedia=window.matchMedia||function(t){"use strict";var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,o=t.createElement("body"),r=t.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(r),function(t){return r.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(o,i),e=42===r.offsetWidth,n.removeChild(o),{matches:e,media:t}}}(document),function(t){"use strict";function e(){x(!0)}var n={};t.respond=n,n.update=function(){},n.mediaQueriesSupported=t.matchMedia&&t.matchMedia("only all").matches,n.mediaQueriesSupported;var i,o,r,s=t.document,a=s.documentElement,l=[],u=[],c=[],p={},d=30,h=s.getElementsByTagName("head")[0]||a,f=s.getElementsByTagName("base")[0],m=h.getElementsByTagName("link"),g=[],v=function(){for(var e=0;m.length>e;e++){var n=m[e],i=n.href,o=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&r&&!p[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(b(n.styleSheet.rawCssText,i,o),p[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!f||i.replace(RegExp.$1,"").split("/")[0]===t.location.host)&&g.push({href:i,media:o}))}y()},y=function(){if(g.length){var t=g.shift();_(t.href,function(e){b(e,t.href,t.media),p[t.href]=!0,setTimeout(function(){y()},0)})}},b=function(t,e,n){var i=t.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),o=i&&i.length||0;e=e.substring(0,e.lastIndexOf("/"));var r=function(t){return t.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+e+"$2$3")},s=!o&&n;e.length&&(e+="/"),s&&(o=1);for(var a=0;o>a;a++){var c,p,d,h;s?(c=n,u.push(r(t))):(c=i[a].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,u.push(RegExp.$2&&r(RegExp.$2))),d=c.split(","),h=d.length;for(var f=0;h>f;f++)p=d[f],l.push({media:p.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:u.length-1,hasquery:p.indexOf("(")>-1,minw:p.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:p.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}x()},w=function(){var t,e=s.createElement("div"),n=s.body,i=!1;return e.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=s.createElement("body"),n.style.background="none"),n.appendChild(e),a.insertBefore(n,a.firstChild),t=e.offsetWidth,i?a.removeChild(n):n.removeChild(e),t=r=parseFloat(t)},x=function(t){var e="clientWidth",n=a[e],p="CSS1Compat"===s.compatMode&&n||s.body[e]||n,f={},g=m[m.length-1],v=(new Date).getTime();if(t&&i&&d>v-i)return clearTimeout(o),void(o=setTimeout(x,d));i=v;for(var y in l)if(l.hasOwnProperty(y)){var b=l[y],_=b.minw,C=b.maxw,T=null===_,S=null===C,I="em";_&&(_=parseFloat(_)*(_.indexOf(I)>-1?r||w():1)),C&&(C=parseFloat(C)*(C.indexOf(I)>-1?r||w():1)),b.hasquery&&(T&&S||!(T||p>=_)||!(S||C>=p))||(f[b.media]||(f[b.media]=[]),f[b.media].push(u[b.rules]))}for(var E in c)c.hasOwnProperty(E)&&c[E]&&c[E].parentNode===h&&h.removeChild(c[E]);for(var k in f)if(f.hasOwnProperty(k)){var $=s.createElement("style"),P=f[k].join("\n");$.type="text/css",$.media=k,h.insertBefore($,g.nextSibling),$.styleSheet?$.styleSheet.cssText=P:$.appendChild(s.createTextNode(P)),c.push($)}},_=function(t,e){var n=C();n&&(n.open("GET",t,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||e(n.responseText)},4!==n.readyState&&n.send(null))},C=function(){var e=!1;try{e=new t.XMLHttpRequest}catch(n){e=new t.ActiveXObject("Microsoft.XMLHTTP")}return function(){return e}}();v(),n.update=v,t.addEventListener?t.addEventListener("resize",e,!1):t.attachEvent&&t.attachEvent("onresize",e)}(this),window.Modernizr=function(t,e,n){function i(t){b.cssText=t}function o(t,e){return i(C.join(t+";")+(e||""))}function r(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var o=t[i];if(!s(o,"-")&&b[o]!==n)return"pfx"==e?o:!0}return!1}function l(t,e,i){for(var o in t){var s=e[t[o]];if(s!==n)return i===!1?t[o]:r(s,"function")?s.bind(i||e):s}return!1}function u(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+S.join(i+" ")+i).split(" ");return r(e,"string")||r(e,"undefined")?a(o,e):(o=(t+" "+I.join(i+" ")+i).split(" "),l(o,e,n))}function c(){f.input=function(n){for(var i=0,o=n.length;o>i;i++)P[n[i]]=!!(n[i]in w);return P.list&&(P.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var i,o,r,s=0,a=t.length;a>s;s++)w.setAttribute("type",o=t[s]),i="text"!==w.type,i&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(g.appendChild(w),r=e.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),$[t[s]]=!!i;return $}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var p,d,h="2.8.3",f={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,w=e.createElement("input"),x=":)",_={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",S=T.split(" "),I=T.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},k={},$={},P={},A=[],D=A.slice,O=function(t,n,i,o){var r,s,a,l,u=e.createElement("div"),c=e.body,p=c||e.createElement("body");if(parseInt(i,10))for(;i--;)a=e.createElement("div"),a.id=o?o[i]:v+(i+1),u.appendChild(a);return r=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),u.id=v,(c?u:p).innerHTML+=r,p.appendChild(u),c||(p.style.background="",p.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(p)),s=n(u,t),c?u.parentNode.removeChild(u):(p.parentNode.removeChild(p),g.style.overflow=l),!!s},j=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var i;return O("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},L=function(){function t(t,o){o=o||e.createElement(i[t]||"div"),t="on"+t;var s=t in o;return s||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),s=r(o[t],"function"),r(o[t],"undefined")||(o[t]=n),o.removeAttribute(t))),o=null,s}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),N={}.hasOwnProperty;d=r(N,"undefined")||r(N.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return N.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=D.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=e.prototype;var r=new o,s=e.apply(r,n.concat(D.call(arguments)));return Object(s)===s?s:r}return e.apply(t,n.concat(D.call(arguments)))};return i}),k.flexbox=function(){return u("flexWrap")},k.flexboxlegacy=function(){return u("boxDirection")},k.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},k.canvastext=function(){return!(!f.canvas||!r(e.createElement("canvas").getContext("2d").fillText,"function"))},k.webgl=function(){return!!t.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:O(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!t.postMessage},k.websqldatabase=function(){return!!t.openDatabase},k.indexedDB=function(){return!!u("indexedDB",t)},k.hashchange=function(){return L("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},k.history=function(){return!(!t.history||!history.pushState)},k.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},k.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},k.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),s(b.backgroundColor,"rgba")},k.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),s(b.backgroundColor,"rgba")||s(b.backgroundColor,"hsla")},k.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},k.backgroundsize=function(){return u("backgroundSize")},k.borderimage=function(){return u("borderImage")},k.borderradius=function(){return u("borderRadius")},k.boxshadow=function(){return u("boxShadow")},k.textshadow=function(){return""===e.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},k.cssanimations=function(){return u("animationName")},k.csscolumns=function(){return u("columnCount")},k.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+C.join(n+t)).slice(0,-t.length)),s(b.backgroundImage,"gradient")},k.cssreflections=function(){return u("boxReflect")},k.csstransforms=function(){return!!u("transform")},k.csstransforms3d=function(){var t=!!u("perspective");return t&&"webkitPerspective"in g.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},k.csstransitions=function(){return u("transition")},k.fontface=function(){var t;return O('@font-face {font-family:"font";src:url("https://")}',function(n,i){var o=e.getElementById("smodernizr"),r=o.sheet||o.styleSheet,s=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";t=/src/i.test(s)&&0===s.indexOf(i.split(" ")[0])}),t},k.generatedcontent=function(){var t;return O(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},k.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},k.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},k.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},k.webworkers=function(){return!!t.Worker},k.applicationcache=function(){return!!t.applicationCache},k.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},k.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},k.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(_.call(e.createElementNS(E.svg,"animate")))},k.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(_.call(e.createElementNS(E.svg,"clipPath")))};for(var z in k)d(k,z)&&(p=z.toLowerCase(),f[p]=k[z](),A.push((f[p]?"":"no-")+p));return f.input||c(),f.addTest=function(t,e){if("object"==typeof t)for(var i in t)d(t,i)&&f.addTest(i,t[i]);else{if(t=t.toLowerCase(),f[t]!==n)return f;e="function"==typeof e?e():e,"undefined"!=typeof m&&m&&(g.className+=" "+(e?"":"no-")+t),f[t]=e}return f},i(""),y=w=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=v[t[m]];return e||(e={},g++,t[m]=g,v[g]=e),e}function r(t,n,i){if(n||(n=e),c)return n.createElement(t);i||(i=o(n));var r;return r=i.cache[t]?i.cache[t].cloneNode():f.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!r.canHaveChildren||h.test(t)||r.tagUrn?r:i.frag.appendChild(r)}function s(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||o(t);for(var r=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)r.createElement(a[s]);return r}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?r(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function l(t){t||(t=e);var i=o(t);return!y.shivCSS||u||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||a(t,i),t}var u,c,p="3.7.0",d=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:p,shivCSS:d.shivCSS!==!1,supportsUnknownElements:c,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:s};t.html5=y,l(e)}(this,e),f._version=h,f._prefixes=C,f._domPrefixes=I,f._cssomPrefixes=S,f.mq=j,f.hasEvent=L,f.testProp=function(t){return a([t])},f.testAllProps=u,f.testStyles=O,f.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),f}(this,this.document),function(){var t,e,n=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in t)i=t[n],null!=i&&(e[n]=i);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),e=this.WeakMap||(e=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;o>i;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=n(this.scrollCallback,this),this.scrollHandler=n(this.scrollHandler,this),this.start=n(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new e}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},i.prototype.start=function(){var t,e,n,i;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(i=this.boxes,e=0,n=i.length;n>e;e++)t=i[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},i.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},i.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},i.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),i.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.setAttribute("style","visibility: visible;"));return o},i.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(t,e){var n,i,o,r;r=[];for(n in e)i=e[n],t[""+n]=i,r.push(function(){var e,r,s,a;for(s=this.vendors,a=[],e=0,r=s.length;r>e;e++)o=s[e],a.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=i);return a}.call(this));return r},i.prototype.vendorCSS=function(t,e){var n,i,o,r,s,a;for(i=window.getComputedStyle(t),n=i.getPropertyCSSValue(e),a=this.vendors,r=0,s=a.length;s>r;r++)o=a[r],n=n||i.getPropertyCSSValue("-"+o+"-"+e);return n},i.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},i.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},i.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length)?this.stop():void 0},i.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,o=r+this.element.clientHeight-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},i.prototype.util=function(){return this._util||(this._util=new t)},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}.call(this),!function t(e,n,i){function o(s,a){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return o(n?n:t)},c,c.exports,t,e,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){"use strict"},{}]},{},[1]);
/*
 * bootstrap-filestyle
 * doc: http://markusslima.github.io/bootstrap-filestyle/
 * github: https://github.com/markusslima/bootstrap-filestyle
 *
 * Copyright (c) 2014 Markus Vinicius da Silva Lima
 * Version 1.2.1
 * Licensed under the MIT license.
 */
(function($) {"use strict";

    var nextId = 0;

    var Filestyle = function(element, options) {
        this.options = options;
        this.$elementFilestyle = [];
        this.$element = $(element);
    };

    Filestyle.prototype = {
        clear : function() {
            this.$element.val('');
            this.$elementFilestyle.find(':text').val('');
            this.$elementFilestyle.find('.badge').remove();
        },

        destroy : function() {
            this.$element.removeAttr('style').removeData('filestyle');
            this.$elementFilestyle.remove();
        },

        disabled : function(value) {
            if (value === true) {
                if (!this.options.disabled) {
                    this.$element.attr('disabled', 'true');
                    this.$elementFilestyle.find('label').attr('disabled', 'true');
                    this.options.disabled = true;
                }
            } else if (value === false) {
                if (this.options.disabled) {
                    this.$element.removeAttr('disabled');
                    this.$elementFilestyle.find('label').removeAttr('disabled');
                    this.options.disabled = false;
                }
            } else {
                return this.options.disabled;
            }
        },

        buttonBefore : function(value) {
            if (value === true) {
                if (!this.options.buttonBefore) {
                    this.options.buttonBefore = true;
                    if (this.options.input) {
                        this.$elementFilestyle.remove();
                        this.constructor();
                        this.pushNameFiles();
                    }
                }
            } else if (value === false) {
                if (this.options.buttonBefore) {
                    this.options.buttonBefore = false;
                    if (this.options.input) {
                        this.$elementFilestyle.remove();
                        this.constructor();
                        this.pushNameFiles();
                    }
                }
            } else {
                return this.options.buttonBefore;
            }
        },

        icon : function(value) {
            if (value === true) {
                if (!this.options.icon) {
                    this.options.icon = true;
                    this.$elementFilestyle.find('label').prepend(this.htmlIcon());
                }
            } else if (value === false) {
                if (this.options.icon) {
                    this.options.icon = false;
                    this.$elementFilestyle.find('.icon-span-filestyle').remove();
                }
            } else {
                return this.options.icon;
            }
        },

        input : function(value) {
            if (value === true) {
                if (!this.options.input) {
                    this.options.input = true;

                    if (this.options.buttonBefore) {
                        this.$elementFilestyle.append(this.htmlInput());
                    } else {
                        this.$elementFilestyle.prepend(this.htmlInput());
                    }

                    this.$elementFilestyle.find('.badge').remove();

                    this.pushNameFiles();

                    this.$elementFilestyle.find('.group-span-filestyle').addClass('input-group-btn');
                }
            } else if (value === false) {
                if (this.options.input) {
                    this.options.input = false;
                    this.$elementFilestyle.find(':text').remove();
                    var files = this.pushNameFiles();
                    if (files.length > 0 && this.options.badge) {
                        this.$elementFilestyle.find('label').append(' <span class="badge">' + files.length + '</span>');
                    }
                    this.$elementFilestyle.find('.group-span-filestyle').removeClass('input-group-btn');
                }
            } else {
                return this.options.input;
            }
        },

        size : function(value) {
            if (value !== undefined) {
                var btn = this.$elementFilestyle.find('label'), input = this.$elementFilestyle.find('input');

                btn.removeClass('btn-lg btn-sm');
                input.removeClass('input-lg input-sm');
                if (value != 'nr') {
                    btn.addClass('btn-' + value);
                    input.addClass('input-' + value);
                }
            } else {
                return this.options.size;
            }
        },

        placeholder : function(value) {
            if (value !== undefined) {
                this.options.placeholder = value;
                this.$elementFilestyle.find('input').attr('placeholder', value);
            } else {
                return this.options.placeholder;
            }
        },		

        buttonText : function(value) {
            if (value !== undefined) {
                this.options.buttonText = value;
                this.$elementFilestyle.find('label .buttonText').html(this.options.buttonText);
            } else {
                return this.options.buttonText;
            }
        },

        buttonName : function(value) {
            if (value !== undefined) {
                this.options.buttonName = value;
                this.$elementFilestyle.find('label').attr({
                    'class' : 'btn ' + this.options.buttonName
                });
            } else {
                return this.options.buttonName;
            }
        },

        iconName : function(value) {
            if (value !== undefined) {
                this.$elementFilestyle.find('.icon-span-filestyle').attr({
                    'class' : 'icon-span-filestyle ' + this.options.iconName
                });
            } else {
                return this.options.iconName;
            }
        },

        htmlIcon : function() {
            if (this.options.icon) {
                return '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ';
            } else {
                return '';
            }
        },

        htmlInput : function() {
            if (this.options.input) {
                return '<input type="text" class="form-control ' + (this.options.size == 'nr' ? '' : 'input-' + this.options.size) + '" placeholder="'+ this.options.placeholder +'" disabled> ';
            } else {
                return '';
            }
        },

        // puts the name of the input files
        // return files
        pushNameFiles : function() {
            var content = '', files = [];
            if (this.$element[0].files === undefined) {
                files[0] = {
                    'name' : this.$element[0] && this.$element[0].value
                };
            } else {
                files = this.$element[0].files;
            }

            for (var i = 0; i < files.length; i++) {
                content += files[i].name.split("\\").pop() + ', ';
            }

            if (content !== '') {
                this.$elementFilestyle.find(':text').val(content.replace(/\, $/g, ''));
            } else {
                this.$elementFilestyle.find(':text').val('');
            }

            return files;
        },

        constructor : function() {
            var _self = this, 
            html = '', 
            id = _self.$element.attr('id'), 
            files = [], 
            btn = '', 
            $label;

            if (id === '' || !id) {
                id = 'filestyle-' + nextId;
                _self.$element.attr({
                    'id' : id
                });
                nextId++;
            }

            btn = '<span class="group-span-filestyle ' + (_self.options.input ? 'input-group-btn' : '') + '">' + 
                '<label for="' + id + '" class="btn ' + _self.options.buttonName + ' ' + 
                (_self.options.size == 'nr' ? '' : 'btn-' + _self.options.size) + '" ' + 
                (_self.options.disabled ? 'disabled="true"' : '') + '>' + 
                _self.htmlIcon() + '<span class="buttonText">' + _self.options.buttonText + '</span>' + 
                '</label>' + 
                '</span>';

            html = _self.options.buttonBefore ? btn + _self.htmlInput() : _self.htmlInput() + btn;

            _self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + html + '</div>');
            _self.$elementFilestyle.find('.group-span-filestyle').attr('tabindex', "0").keypress(function(e) {
                if (e.keyCode === 13 || e.charCode === 32) {
                    _self.$elementFilestyle.find('label').click();
                    return false;
                }
            });

            // hidding input file and add filestyle
            _self.$element.css({
                'position' : 'absolute',
                'clip' : 'rect(0px 0px 0px 0px)' // using 0px for work in IE8
            }).attr('tabindex', "-1").after(_self.$elementFilestyle);

            if (_self.options.disabled) {
                _self.$element.attr('disabled', 'true');
            }

            // Getting input file value
            _self.$element.change(function() {
                var files = _self.pushNameFiles();

                if (_self.options.input == false && _self.options.badge) {
                    if (_self.$elementFilestyle.find('.badge').length == 0) {
                        _self.$elementFilestyle.find('label').append(' <span class="badge">' + files.length + '</span>');
                    } else if (files.length == 0) {
                        _self.$elementFilestyle.find('.badge').remove();
                    } else {
                        _self.$elementFilestyle.find('.badge').html(files.length);
                    }
                } else {
                    _self.$elementFilestyle.find('.badge').remove();
                }
            });

            // Check if browser is Firefox
            if (window.navigator.userAgent.search(/firefox/i) > -1) {
                // Simulating choose file for firefox
                _self.$elementFilestyle.find('label').click(function() {
                    _self.$element.click();
                    return false;
                });
            }
        }
    };

    var old = $.fn.filestyle;

    $.fn.filestyle = function(option, value) {
        var get = '', element = this.each(function() {
            if ($(this).attr('type') === 'file') {
                var $this = $(this), data = $this.data('filestyle'), options = $.extend({}, $.fn.filestyle.defaults, option, typeof option === 'object' && option);

                if (!data) {
                    $this.data('filestyle', ( data = new Filestyle(this, options)));
                    data.constructor();
                }

                if ( typeof option === 'string') {
                    get = data[option](value);
                }
            }
        });

        if ( typeof get !== undefined) {
            return get;
        } else {
            return element;
        }
    };

    $.fn.filestyle.defaults = {
        'buttonText' : 'Bestand',
        'iconName' : 'glyphicon glyphicon-folder-open',
        'buttonName' : 'btn-primary',
        'size' : 'nr',
        'input' : true,
        'badge' : true,
        'icon' : true,
        'buttonBefore' : false,
        'disabled' : false,
        'placeholder': ''
    };

    $.fn.filestyle.noConflict = function() {
        $.fn.filestyle = old;
        return this;
    };

    $(function() {
        $('.filestyle').each(function() {
            var $this = $(this), options = {

                'input' : $this.attr('data-input') === 'false' ? false : true,
                'icon' : $this.attr('data-icon') === 'false' ? false : true,
                'buttonBefore' : $this.attr('data-buttonBefore') === 'true' ? true : false,
                'disabled' : $this.attr('data-disabled') === 'true' ? true : false,
                'size' : $this.attr('data-size'),
                'buttonText' : $this.attr('data-buttonText'),
                'buttonName' : $this.attr('data-buttonName'),
                'iconName' : $this.attr('data-iconName'),
                'badge' : $this.attr('data-badge') === 'false' ? false : true,
                'placeholder': $this.attr('data-placeholder')
            };

            $this.filestyle(options);
        });
    });
})(window.jQuery);

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.6'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.6'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.6'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.7
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var styling = require('./modules/form-styling-methods');
var scroll = require('./modules/scroll');
var prettyphoto = require('./modules/prettyphoto.js');

$(function () {
    // on document.ready()
    /******************************************* Start Dashboard Scripts ********************************************/

    /**
     * global
     */
    styling.changeAutoCompleteColorAllFields(); // Change the autocomplete color

    if (top.location.pathname === '/dashboard') {
        scroll.init();
        scroll.navigationScroll();
        scroll.smoothScrolling();
        prettyphoto.prettyPhoto();
    }

    /******************************************* End Dashboard Scripts **********************************************/
});

},{"./modules/form-styling-methods":2,"./modules/prettyphoto.js":3,"./modules/scroll":4}],2:[function(require,module,exports){
/**
 * Change the autocomplete color for a single element
 * @param element
 */
'use strict';

exports.changeAutoCompleteColor = function (element) {
    $(element).attr('style', '-webkit-box-shadow: inset 0 0 0 1000px white !important; width: 100%;');
};

/**
 * Remove the autocomplete color for a single element
 * @param element
 */
exports.removeAutoCompleteColor = function (element) {
    $(element).css('-webkit-box-shadow', '');
};

/**
 * Used to change autocomplete color to white for all input fields
 */
exports.changeAutoCompleteColorAllFields = function () {
    $('#registration-form input[type="text"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
    $('#registration-form input[type="password"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
    $('#registration-form input[type="email"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important');
};

/**
 * Used to remove autocomplete color from all input fields
 */
exports.removeAutoCompleteColorAllFields = function () {
    $('#registration-form input[type="text"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
    $('#registration-form input[type="password"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
    $('#registration-form input[type="email"]').css('-webkit-box-shadow: inset 0 0 0 1000px white !important', '');
};

/**
 * Configuration for the tooltips
 * @param id
 * @param theme
 * @param position
 */
exports.tooltipsterConfig = function (id, theme, position) {
    var tooltip = $('#' + id).tooltipster({
        trigger: 'custom', // default is 'hover' which is no good here
        onlyOne: false, // allow multiple tips to be open at a time
        position: position, // display the tips on a specific position
        theme: theme, // set the theme
        touchDevices: false, // Don't show tooltips on touch devices
        delay: 100, // set the delay in milliseconds for the animation to kick in
        speed: 300, // se the speed of the animation
        animation: 'grow' // set the animation
    });
};

},{}],3:[function(require,module,exports){
// Pretty Photo
"use strict";

exports.prettyPhoto = function () {
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
};

},{}],4:[function(require,module,exports){
'use strict';

exports.smoothScrolling = function () {
    $('.main-menu ul li .apply-smooth-scroll,.smooth-scroll').scrollingTo();
};

// Navigation Scroll
exports.navigationScroll = function () {
    (function ($) {
        $.fn.scrollingTo = function (opts) {
            var defaults = {
                animationTime: 1000,
                easing: '',
                callbackBeforeTransition: function callbackBeforeTransition() {},
                callbackAfterTransition: function callbackAfterTransition() {}
            };

            var config = $.extend({}, defaults, opts);

            $(this).click(function (e) {
                var eventVal = e;
                e.preventDefault();

                var $section = $(document).find($(this).data('section'));
                if ($section.length < 1) {
                    return false;
                }

                if ($('html, body').is(':animated')) {
                    $('html, body').stop(true, true);
                }

                var scrollPos = $section.offset().top;

                if ($(window).scrollTop() == scrollPos) {
                    return false;
                }

                config.callbackBeforeTransition(eventVal, $section);

                $('html, body').animate({
                    'scrollTop': scrollPos + 'px'
                }, config.animationTime, config.easing, function () {
                    config.callbackAfterTransition(eventVal, $section);
                });
            });
        };
    })(jQuery);
};

// init
exports.init = function () {
    // SmoothScroll
    smoothScroll.init();
};

},{}]},{},[1]);
