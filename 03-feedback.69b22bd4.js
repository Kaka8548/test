!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function h(e){return c=e,u=setTimeout(S,t),s?p(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=b();if(O(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,v&&o?p(e):(o=i=void 0,f)}function T(){var e=b(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return h(l);if(d)return u=setTimeout(S,t),p(l)}return void 0===u&&(u=setTimeout(S,t)),f}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||u.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),O={};!function(){if(null!==localStorage.getItem("feedback-form-state"))try{var e=JSON.parse(localStorage.getItem("feedback-form-state"));for(var t in e)h.elements[t].value=e[t]}catch(e){console.log(e.message)}}();h.addEventListener("input",e(t)((function(e){e.preventDefault();var t=e.target;O[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),h.addEventListener("submit",(function(e){e.preventDefault();var t=h.elements.email.value,n=h.elements.message.value;console.log("User email: ".concat(t,", message: ").concat(n)),e.target.reset(),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.69b22bd4.js.map
