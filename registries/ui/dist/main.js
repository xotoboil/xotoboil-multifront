/*! For license information please see main.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports["@xotoboil-multifront/ui"]=e(require("vue")):t["@xotoboil-multifront/ui"]=e(t.vue)}(self,(function(t){return(()=>{var e={130:(t,e,n)=>{(e=n(645)(!1)).push([t.id,"\n#single-spa-application\\:ui .ui-button[data-v-3f72dd1c] {\n    border: none;\n    border-radius: 10px;\n    box-sizing: border-box;\n    padding: 0.5em 2em;\n    background-color: rgb(255, 0, 0);\n    color: white;\n    font-weight: bold;\n    transition: all .2s;\n#single-spa-application\\:ui &[data-v-3f72dd1c]:hover {\n        transform: scale(1.1, 1.1);\n}\n}\n",""]),t.exports=e},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r,o,i=t[1]||"",c=t[3];if(!c)return i;if(e&&"function"==typeof btoa){var u=(n=c,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),a=c.sources.map((function(t){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(t," */")}));return[i].concat(a).concat([u]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},171:(t,e,n)=>{var r=n(379),o=n(130);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.id,o,""]]);r(o,{insert:"head",singleton:!1}),t.exports=o.locals||{}},379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var u=t[o],a=e.base?u[0]+e.base:u[0],s=n[a]||0,f="".concat(a," ").concat(s);n[a]=s+1;var l=c(f),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:h(p,e),references:1}),r.push(f)}return r}function a(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=o(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,v=0;function h(t,e){var n,r,o;if(e.singleton){var i=v++;n=d||(d=a(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=a(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=u(t,e),s=0;s<n.length;s++){var f=c(n[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=a}}}},651:function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c};e.__esModule=!0;var c=n(784),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),i([(0,c.Prop)({default:!1})],e.prototype,"isDisabled"),i([(0,c.Options)({name:"UIButton",emits:"click"})],e)}(c.Vue);e.default=u},893:(t,e,n)=>{"use strict";e.s=void 0;var r=n(748),o=["disabled"];e.s=function(t,e,n,i,c,u){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{disabled:t.isDisabled,class:"ui-button"},[(0,r.renderSlot)(t.$slots,"default",{},void 0,!0)],8,o)}},671:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||r(e,t,n)};e.__esModule=!0,o(n(859),e),o(n(914),e),o(n(755),e)},914:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};e.__esModule=!0,e.UIButton=e.UIPlugin=void 0;var o=r(n(755));e.UIButton=o.default,e.UIPlugin={install:function(t){t.component("UIButton",o.default)}}},859:(t,e)=>{"use strict";e.__esModule=!0,e.parseNestedArgs=void 0,e.parseNestedArgs=function(t){for(var e in t)if(/_/.test(e)){var n=e.split("_"),r=n[0];delete t[e],t[r]||(t[r]={}),t[r][n[1]]=t[e]}}},744:(t,e)=>{"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[t,r]of e)n[t]=r;return n}},755:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var r=n(423),o=n(384),i={};for(const t in o)"default"!==t&&(i[t]=()=>o[t]);n.d(e,i),n(250);const c=(0,n(744).Z)(o.default,[["render",r.s],["__scopeId","data-v-3f72dd1c"]])},250:(t,e,n)=>{"use strict";n(171)},384:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o.a});var r=n(651),o=n.n(r),i={};for(const t in r)"default"!==t&&(i[t]=()=>r[t]);n.d(e,i)},423:(t,e,n)=>{"use strict";n.d(e,{s:()=>r.s});var r=n(893)},784:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Emit:()=>x,Inject:()=>S,Model:()=>E,Options:()=>O,Prop:()=>M,Provide:()=>R,Ref:()=>A,Vue:()=>g,Watch:()=>C,mixins:()=>w});var r=n(748);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t,e,n){return d=p()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&l(o,n.prototype),o},d.apply(null,arguments)}function v(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){var e=p();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e,n){Object.defineProperty(t,e,{get:n,enumerable:!1,configurable:!0})}function m(t,e){return t.hasOwnProperty(e)?t[e]:void 0}var _=function(){function t(e,n){var r=this;o(this,t),y(this,"$props",(function(){return e})),y(this,"$attrs",(function(){return n.attrs})),y(this,"$slots",(function(){return n.slots})),y(this,"$emit",(function(){return n.emit})),Object.keys(e).forEach((function(t){Object.defineProperty(r,t,{enumerable:!1,configurable:!0,writable:!0,value:e[t]})}))}var e,n;return e=t,n=[{key:"registerHooks",value:function(t){var e,n;(e=this.__h).push.apply(e,function(t){if(Array.isArray(t))return b(t)}(n=t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"with",value:function(t){var e=new t,n={};Object.keys(e).forEach((function(t){var r=e[t];n[t]=null!=r?r:null}));var r=function(t){s(n,t);var e=h(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(this);return r.__b={props:n},r}},{key:"__vccOpts",get:function(){if(this===g)return{};var t=this,e=m(t,"__c");if(e)return e;var n=a({},m(t,"__o"));t.__c=n;var o=function(t){var e=Object.getPrototypeOf(t.prototype);if(e)return e.constructor}(t);o&&(n.extends=o.__vccOpts);var i=m(t,"__b");i&&(n.mixins=n.mixins||[],n.mixins.unshift(i)),n.methods=a({},n.methods),n.computed=a({},n.computed);var c=t.prototype;Object.getOwnPropertyNames(c).forEach((function(e){if("constructor"!==e)if(t.__h.indexOf(e)>-1)n[e]=c[e];else{var r=Object.getOwnPropertyDescriptor(c,e);"function"!=typeof r.value?(r.get||r.set)&&(n.computed[e]={get:r.get,set:r.set}):n.methods[e]=r.value}})),n.setup=function(e,n){var o,i=new t(e,n),c=Object.keys(i),u={},a=null;return c.forEach((function(t){void 0===i[t]||i[t]&&i[t].__s||(u[t]=(0,r.ref)(i[t]),function(t,e,n){Object.defineProperty(t,e,{get:function(){return n[e].value},set:function(t){n[e].value=t},enumerable:!0,configurable:!0})}(i,t,u))})),c.forEach((function(t){if(i[t]&&i[t].__s){var e=i[t].__s();e instanceof Promise?(a||(a=Promise.resolve(u)),a=a.then((function(){return e.then((function(e){return u[t]=(0,r.proxyRefs)(e),u}))}))):u[t]=(0,r.proxyRefs)(e)}})),null!==(o=a)&&void 0!==o?o:u};var u=m(t,"__d");return u&&u.forEach((function(t){return t(n)})),["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"].forEach((function(e){t[e]&&(n[e]=t[e])})),n}}],null&&i(e.prototype,null),n&&i(e,n),t}();_.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var g=_;function O(t){return function(e){return e.__o=t,e}}function j(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__d||(o.__d=[]),"number"!=typeof r&&(r=void 0),o.__d.push((function(e){return t(e,n,r)}))}}function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r;return r=function(t){s(r,t);var n=h(r);function r(){for(var t,i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return o(this,r),t=n.call.apply(n,[this].concat(c)),e.forEach((function(e){var n=d(e,c);Object.keys(n).forEach((function(e){t[e]=n[e]}))})),t}return r}(g),r.__b={mixins:e.map((function(t){return t.__vccOpts}))},r}const P=/\B([A-Z])/g;function x(t){return j(((e,n)=>{const r=t||n.replace(P,"-$1").toLowerCase();e.emits||(e.emits=[]),e.emits.push(r);const o=e.methods[n];e.methods[n]=function(...t){const e=e=>{void 0===e?0===t.length?this.$emit(r):1===t.length?this.$emit(r,t[0]):this.$emit(r,...t):(t.unshift(e),this.$emit(r,...t))},n=o.apply(this,t);var i;return(i=n)instanceof Promise||i&&"function"==typeof i.then?n.then(e):e(n),n}}))}function S(t=Object.create(null)){return j(((e,n)=>{const o=e.setup;e.setup=(e,i)=>{const c=null==o?void 0:o(e,i),u=(0,r.inject)(t.from||n,t.default);return Object.assign(Object.assign({},c),{[n]:u})}}))}function E(t,e){return j(((n,r)=>{const o=`update:${t}`;n.props||(n.props=Object.create(null)),n.props[t]=e,n.emits||(n.emits=[]),n.emits.push(o),n.computed||(n.computed=Object.create(null)),n.computed[r]={get(){return this[t]},set(t){this.$emit(o,t)}}}))}function M(t){return j(((e,n)=>{e.props||(e.props=Object.create(null)),e.props[n]=t}))}function R(t){return j(((e,n)=>{const o=e.provide;e.provide=function(){const e="function"==typeof o?o.call(this):o;return Object.assign(Object.assign({},e),{[(null==t?void 0:t.to)||n]:(null==t?void 0:t.reactive)?(0,r.computed)((()=>this[n])):this[n]})}}))}function A(t){return j(((e,n)=>{e.computed||(e.computed=Object.create(null)),e.computed[n]={cache:!1,get(){return this.$refs[t||n]}}}))}function C(t,e){return j(((n,r)=>{n.watch||(n.watch=Object.create(null));const o=n.watch;"object"!=typeof o[t]||Array.isArray(o[t])?void 0===o[t]&&(o[t]=[]):o[t]=[o[t]],o[t].push(Object.assign({handler:r},e))}))}},748:e=>{"use strict";e.exports=t}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(671)})()}));