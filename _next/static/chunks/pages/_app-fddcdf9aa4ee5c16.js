(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1439:function(e,t,r){"use strict";r.d(t,{ZT:function(){return o},pi:function(){return i},_T:function(){return a},XA:function(){return c},CR:function(){return l},ev:function(){return u}});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}Object.create;function c(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function u(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1459)}])},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t,r=e.src,n=e.sizes,a=e.unoptimized,c=void 0!==a&&a,l=e.priority,f=void 0!==l&&l,m=e.loading,y=e.lazyRoot,g=void 0===y?null:y,b=e.lazyBoundary,w=void 0===b?"200px":b,x=e.className,j=e.quality,O=e.width,A=e.height,z=e.objectFit,_=e.objectPosition,C=e.onLoadingComplete,R=e.loader,P=void 0===R?S:R,I=e.placeholder,L=void 0===I?"empty":I,M=e.blurDataURL,N=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),T=u.useRef(null),D=N,$=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&($=D.layout),delete D.layout);var H="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(r)){var V=v(r)?r.default:r;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(M=M||V.blurDataURL,H=V.src,(!$||"fill"!==$)&&(A=A||V.height,O=O||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}r="string"===typeof r?r:H;var q=k(O),B=k(A),U=k(j),W=!f&&("lazy"===m||"undefined"===typeof m);(r.startsWith("data:")||r.startsWith("blob:"))&&(c=!0,W=!1);(null===(t=T.current)||void 0===t?void 0:t.complete)&&(W=!1);0;var F,K=i(d.useIntersection({rootRef:g,rootMargin:w,disabled:!W}),2),Q=K[0],J=K[1],Y=!W||J,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:_},te="blur"===L?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:_||"0% 0%"}:{};if("fill"===$)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof q&&"undefined"!==typeof B){var re=B/q,ne=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===$?(X.display="block",X.position="relative",G=!0,Z.paddingTop=ne):"intrinsic"===$?(X.display="inline-block",X.position="relative",X.maxWidth="100%",G=!0,Z.maxWidth="100%",F="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 version=%271.1%27 width=%27".concat(q,"%27 height=%27").concat(B,"%27/%3e")):"fixed"===$&&(X.display="inline-block",X.position="relative",X.width=q,X.height=B)}else 0;var oe={src:h,srcSet:void 0,sizes:void 0};Y&&(oe=E({src:r,unoptimized:c,layout:$,width:q,quality:U,sizes:n,loader:P}));var ie=r;0;var ae;0;var ce=(o(ae={},"imagesrcset",oe.srcSet),o(ae,"imagesizes",oe.sizes),ae),le=u.default.useLayoutEffect,ue=u.useRef(C);return u.useEffect((function(){ue.current=C}),[C]),le((function(){Q(T.current)}),[Q]),u.useEffect((function(){!function(e,t,r,n,o){var i=function(){var t=e.current;t&&(t.src!==h&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&("blur"===n&&(t.style.filter="",t.style.backgroundSize="",t.style.backgroundImage="",t.style.backgroundPosition=""),o.current)){var r=t.naturalWidth,i=t.naturalHeight;o.current({naturalWidth:r,naturalHeight:i})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(T,0,0,L,ue)}),[ie,$,L,Y]),u.default.createElement("span",{style:X},G?u.default.createElement("span",{style:Z},F?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:F}):null):null,u.default.createElement("img",Object.assign({},D,oe,{decoding:"async","data-nimg":$,className:x,ref:T,style:p({},ee,te)})),W&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},D,E({src:r,unoptimized:c,layout:$,width:q,quality:U,sizes:n,loader:P}),{decoding:"async","data-nimg":$,style:ee,className:x,loading:m||"lazy"}))),f?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+oe.src+oe.srcSet+oe.sizes,rel:"preload",as:"image",href:oe.srcSet?void 0:oe.src},ce))):null)};var l,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(l=r(5443))&&l.__esModule?l:{default:l},f=r(5809),d=r(7190);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){m(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}new Map;var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";var y=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t).concat(A(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(A(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(A(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||f.imageConfigDefault,b=g.deviceSizes,w=g.imageSizes,x=g.loader,j=g.path,O=(g.domains,a(b).concat(a(w)));function E(e){var t=e.src,r=e.unoptimized,n=e.layout,o=e.width,i=e.quality,c=e.sizes,l=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,i=[];n=o.exec(r);n)i.push(parseInt(n[2]));if(i.length){var c,l=.01*(c=Math).min.apply(c,a(i));return{widths:O.filter((function(e){return e>=b[0]*l})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return O.find((function(t){return t>=e}))||O[O.length-1]})))),kind:"x"}}(o,n,c),s=u.widths,f=u.kind,d=s.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:s.map((function(e,r){return"".concat(l({src:t,quality:i,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({src:t,quality:i,width:s[d]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=y.get(x);if(t)return t(p({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(x))}function A(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),O.sort((function(e,t){return e-t}))},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),l=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),i=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,m=i.as,p=e.children,h=e.replace,y=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var b=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=o(u.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],O=a.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);a.default.useEffect((function(){var e=j&&r&&c.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+m+(t?"%"+t:"")];e&&!o&&f(n,d,m,{locale:t})}),[m,d,j,g,r,n]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:a}))}(e,n,d,m,h,y,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:n&&n.locale,S=n&&n.isLocaleDomain&&c.getDomainLocale(m,k,n&&n.locales,n&&n.domainLocales);E.href=S||c.addBasePath(c.addLocale(m,k,n&&n.defaultLocale))}return a.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=i.useRef(),s=o(i.useState(!1),2),f=s[0],d=s[1],m=o(i.useState(t?t.current:null),2),p=m[0],h=m[1],y=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:r}))}),[n,p,r,f]);return i.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&h(t.current)}),[t]),[y,f]};var i=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},1459:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(5893),o=r(7294),i=r(8193),a=r(8357);function c(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}}]})(e)}var l=r(2585),u=r(9008);const s=(0,o.createContext)({setTheme:e=>{},themes:[]}),f=["light","dark"],d="(prefers-color-scheme: dark)",m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:i="theme",themes:a=["light","dark"],defaultTheme:c=(r?"system":"light"),attribute:l="data-theme",value:u,children:m})=>{const[g,b]=(0,o.useState)((()=>h(i,c))),[w,x]=(0,o.useState)((()=>h(i))),j=u?Object.values(u):a,O=(0,o.useCallback)((t=>{const r=v(t);x(r),"system"!==g||e||k(r,!1)}),[g,e]),E=(0,o.useRef)(O);E.current=O;const k=(0,o.useCallback)(((e,n=!0,o=!0)=>{let a=(null==u?void 0:u[e])||e;const c=t&&o?y():null;if(n)try{localStorage.setItem(i,e)}catch(e){}if("system"===e&&r){const e=v();a=(null==u?void 0:u[e])||e}if(o){const e=document.documentElement;"class"===l?(e.classList.remove(...j),e.classList.add(a)):e.setAttribute(l,a),null==c||c()}}),[]);(0,o.useEffect)((()=>{const e=function(){return E.current(...[].slice.call(arguments))},t=window.matchMedia(d);return t.addListener(e),e(t),()=>t.removeListener(e)}),[]);const S=(0,o.useCallback)((t=>{e?k(t,!0,!1):k(t),b(t)}),[e]);return(0,o.useEffect)((()=>{const e=e=>{e.key===i&&S(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[S]),(0,o.useEffect)((()=>{if(!n)return;let t=e&&f.includes(e)?e:g&&f.includes(g)?g:"system"===g&&w||null;document.documentElement.style.setProperty("color-scheme",t)}),[n,g,w,e]),o.createElement(s.Provider,{value:{theme:g,setTheme:S,forcedTheme:e,resolvedTheme:"system"===g?w:g,themes:r?[...a,"system"]:a,systemTheme:r?w:void 0}},o.createElement(p,{forcedTheme:e,storageKey:i,attribute:l,value:u,enableSystem:r,defaultTheme:c,attrs:j}),m)},p=(0,o.memo)((({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,defaultTheme:i,value:a,attrs:c})=>{const l="class"===r?`var d=document.documentElement.classList;d.remove(${c.map((e=>`'${e}'`)).join(",")});`:"var d=document.documentElement;",s=(e,t)=>{e=(null==a?void 0:a[e])||e;const n=t?e:`'${e}'`;return"class"===r?`d.add(${n})`:`d.setAttribute('${r}', ${n})`},f="system"===i;return o.createElement(u.default,null,o.createElement("script",e?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){${l}${s(e)}}()`}}:n?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try {${l}var e=localStorage.getItem('${t}');${f?"":s(i)+";"}if("system"===e||(!e&&${f})){var t="${d}",m=window.matchMedia(t);m.media!==t||m.matches?${s("dark")}:${s("light")}}else if(e) ${a?`var x=${JSON.stringify(a)};`:""}${s(a?"x[e]":"e",!0)}}catch(e){}}()`}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:`!function(){try{${l}var e=localStorage.getItem("${t}");if(e){${a?`var x=${JSON.stringify(a)};`:""}${s(a?"x[e]":"e",!0)}}else{${s(i)};}}catch(t){}}();`}}))}),((e,t)=>e.forcedTheme===t.forcedTheme)),h=(e,t)=>{if("undefined"==typeof window)return;let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},y=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},v=e=>(e||(e=window.matchMedia(d)),e.matches?"dark":"light");var g=r(5675),b=r(9325),w=function(){var e=(0,o.useContext)(s),t=e.theme,r=e.setTheme;return(0,n.jsxs)("div",{children:[(0,n.jsx)(g.default,{loader:function(){return"https://media-exp1.licdn.com/dms/image/C4D03AQHUYq-bBHQ8yw/profile-displayphoto-shrink_200_200/0/1614103725738?e=1648684800&v=beta&t=JVFrpWHVvRRNdLzlU7C5PEH_Q1geeDIuYuFyWhMrAM8"},src:"https://media-exp1.licdn.com/dms/image/C4D03AQHUYq-bBHQ8yw/profile-displayphoto-shrink_200_200/0/1614103725738?e=1648684800&v=beta&t=JVFrpWHVvRRNdLzlU7C5PEH_Q1geeDIuYuFyWhMrAM8",alt:"avatar",className:"mx-auto border rounded-full",height:"128",width:"128",layout:"intrinsic"}),(0,n.jsxs)("h3",{className:"my-4 text-3x1 font-medium tracking wider font-kaushan",children:[(0,n.jsx)("span",{children:"VICTOR "}),(0,n.jsx)("br",{}),"SALAZAR"]}),(0,n.jsx)("p",{className:"px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full dark:bg-black-500",children:"Embedded Software Developer"}),(0,n.jsxs)("a",{className:"flex items-center justify-center px-2 py-1 my-3 dark:bg-dark-200 bg-gray-200 rounded-full",href:"".concat(b.O,"/assets/ResumeVS.pdf"),download:"ResumeVS.pdf",children:[(0,n.jsx)(l.Gww,{className:"w-6 h-6"})," Download resume"]}),(0,n.jsxs)("div",{className:"flex justify-around w-9/12 mx-auto my-5 text-green md:w-full",children:[(0,n.jsx)("a",{href:"https://github.com/xaviSalazar",target:"_blank",children:(0,n.jsx)(i.RrF,{className:"w-8 h-8 cursor-pointer"})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/in/victor-salazar-32513614a",target:"_blank",children:(0,n.jsx)(i._iD,{className:"w-8 h-8 cursor-pointer"})})]}),(0,n.jsxs)("div",{className:"py-4 my-5 bg-gray-200 dark:bg-dark-200",style:{marginLeft:"-1rem",marginRight:"-1rem"},children:[(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,n.jsx)(c,{}),(0,n.jsx)("span",{children:"Paris, France"})]}),(0,n.jsx)("p",{className:"my-2",children:"xavicoel@gmail.com"}),(0,n.jsx)("p",{className:"my-2",children:"+33766445477"})]}),(0,n.jsx)("button",{className:" bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none",onClick:function(){return window.open("mailto:xavicoel@gmail.com")},children:"Email me"}),(0,n.jsx)("button",{onClick:function(){r("light"==t?"dark":"light")},className:"bg-black bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2",children:"Toggle Theme"})]})},x=r(1664),j=r(1163),O=function(e,t){var r=e.activeItem,o=e.setActiveItem,i=e.name,a=e.route;return r!==i?(0,n.jsx)(x.default,{scroll:!1,href:a,children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{onClick:function(){o(i)},className:"hover:text-green",children:i})})}):null},E=function(){var e=(0,o.useState)(""),t=e[0],r=e[1],i=(0,j.useRouter)().pathname;return(0,o.useEffect)((function(){"/"===i&&r("About"),"/projects"===i&&r("Projects"),"/resume"===i&&r("Resume")}),[]),(0,n.jsxs)("div",{className:"flex justify-between px-5 py-3 my-3",children:[(0,n.jsx)("span",{className:"font-bold text-green text-x1 border-b-4 border-green md:text-2x1",children:t}),(0,n.jsxs)("div",{className:"flex space-x-5 text-lg",children:[(0,n.jsx)(O,{activeItem:t,setActiveItem:r,name:"About",route:"/"}),(0,n.jsx)(O,{activeItem:t,setActiveItem:r,name:"Projects",route:"/projects"}),(0,n.jsx)(O,{activeItem:t,setActiveItem:r,name:"Resume",route:"/resume"})]})]})},k=(r(906),r(1439)),S=r(4735),A=r(5411);var z=r(240),_=r(6681),C=0;function R(){var e=C;return C++,e}var P=function(e){var t=e.children,r=e.initial,n=e.isPresent,i=e.onExitComplete,a=e.custom,c=e.presenceAffectsLayout,l=(0,_.h)(I),u=(0,_.h)(R),s=(0,o.useMemo)((function(){return{id:u,initial:r,isPresent:n,custom:a,onExitComplete:function(e){var t,r;l.set(e,!0);try{for(var n=(0,k.XA)(l.values()),o=n.next();!o.done;o=n.next()){if(!o.value)return}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}null===i||void 0===i||i()},register:function(e){return l.set(e,!1),function(){return l.delete(e)}}}}),c?void 0:[n]);return(0,o.useMemo)((function(){l.forEach((function(e,t){return l.set(t,!1)}))}),[n]),o.useEffect((function(){!n&&!l.size&&(null===i||void 0===i||i())}),[n]),o.createElement(z.O.Provider,{value:s},t)};function I(){return new Map}var L=r(5364);function M(e){return e.key||""}var N=function(e){var t=e.children,r=e.custom,n=e.initial,i=void 0===n||n,a=e.onExitComplete,c=e.exitBeforeEnter,l=e.presenceAffectsLayout,u=void 0===l||l,s=(0,k.CR)(function(){var e=(0,o.useRef)(!1),t=(0,k.CR)((0,o.useState)(0),2),r=t[0],n=t[1];(0,A.z)((function(){return e.current=!0}));var i=(0,o.useCallback)((function(){!e.current&&n(r+1)}),[r]);return[(0,o.useCallback)((function(){return S.ZP.postRender(i)}),[i]),r]}(),1)[0],f=(0,o.useContext)(L.p).forceRender;f&&(s=f);var d=(0,o.useRef)(!0),m=(0,o.useRef)(!0);(0,o.useEffect)((function(){return function(){m.current=!1}}),[]);var p=function(e){var t=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&t.push(e)})),t}(t),h=(0,o.useRef)(p),y=(0,o.useRef)(new Map).current,v=(0,o.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var r=M(e);t.set(r,e)}))}(p,y),d.current)return d.current=!1,o.createElement(o.Fragment,null,p.map((function(e){return o.createElement(P,{key:M(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:u},e)})));for(var g=(0,k.ev)([],(0,k.CR)(p),!1),b=h.current.map(M),w=p.map(M),x=b.length,j=0;j<x;j++){var O=b[j];-1===w.indexOf(O)?v.add(O):v.delete(O)}return c&&v.size&&(g=[]),v.forEach((function(e){if(-1===w.indexOf(e)){var t=y.get(e);if(t){var n=b.indexOf(e);g.splice(n,0,o.createElement(P,{key:M(t),isPresent:!1,onExitComplete:function(){y.delete(e),v.delete(e);var t=h.current.findIndex((function(t){return t.key===e}));if(h.current.splice(t,1),!v.size){if(h.current=p,!1===m.current)return;s(),a&&a()}},custom:r,presenceAffectsLayout:u},t))}}})),g=g.map((function(e){var t=e.key;return v.has(t)?e:o.createElement(P,{key:M(e),isPresent:!0,presenceAffectsLayout:u},e)})),h.current=g,o.createElement(o.Fragment,null,v.size?g:g.map((function(e){return(0,o.cloneElement)(e)})))};function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){T(e,t,r[t])}))}return e}var $=function(e){var t=e.Component,r=e.pageProps,i=e.router;return(0,n.jsx)(m,{attribute:"class",children:(0,n.jsxs)("div",{className:"grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32",children:[(0,n.jsx)("div",{className:"col-span-12 bg-white dark:bg-dark-500 lg:col-span-3 rounded-2x1 p-4 text-center shadow-custom-light dark:shadow-custom-dark",children:(0,n.jsx)(w,{})}),(0,n.jsxs)("div",{className:"flex flex-col overflow-hidden col-span-12 bg-white lg:col-span-9 rounded-2x1 dark:bg-dark-500",children:[(0,n.jsx)(E,{}),(0,n.jsx)(N,{exitBeforeEnter:!0,children:(0,o.createElement)(t,D({},r,{key:i.route}))})]})]})})}},9325:function(e,t,r){"use strict";r.d(t,{O:function(){return n}});var n="/portfolio"},906:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},8193:function(e,t,r){"use strict";r.d(t,{RrF:function(){return o},_iD:function(){return i}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}},2585:function(e,t,r){"use strict";r.d(t,{b5T:function(){return o},Gww:function(){return i}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M413.72 19.395v98.64l-46.116 46.117-34.198-34.2-6.607 6.61-141.52 141.516 113.513 113.51-52.775 52.773.002 50.31h18.687v-42.568l47.3-47.3 21.4 21.4 148.122-148.124-60.165-60.164 67.447-67.45V19.395h-18.687v123.33l-61.975 61.975-27.332-27.333 51.59-51.59V19.395H413.72zM19.36 30.303V48.99h186.607l44.254 44.254c-2.56 4.393-4.032 9.496-4.032 14.947 0 16.422 13.312 29.736 29.732 29.736s29.732-13.314 29.732-29.735c0-16.42-13.312-29.73-29.732-29.73-4.143 0-8.088.85-11.672 2.382l-50.54-50.54H19.36zm0 55.478v18.69l131.126.003 44.254 44.254c-2.56 4.392-4.035 9.496-4.035 14.947 0 16.42 13.312 29.732 29.732 29.732s29.733-13.312 29.733-29.732-13.312-29.733-29.732-29.733c-4.144 0-8.088.85-11.672 2.382l-50.54-50.54H19.362zm83.386 55.482l-83.385.002v18.69l75.646-.003 44.254 44.26c-2.56 4.39-4.033 9.496-4.033 14.946 0 16.42 13.312 29.733 29.732 29.733s29.73-13.313 29.73-29.734c0-16.42-13.31-29.734-29.73-29.734-4.145 0-8.09.85-11.675 2.383l-50.54-50.543zm230.66 15.12L455.1 278.08 333.406 399.77 211.71 278.08l121.696-121.695zm-1.254 27.388l-94.574 94.574 95.012 95.015 13.215-13.214-81.797-81.8 81.36-81.362-13.216-13.214zm-312.79 21.558v51.207l160.13 160.13v78.005h18.69V384.146L19.362 205.328zm346.51 8.397L352.66 226.94l51.48 51.482-51.77 51.77 13.218 13.214 64.982-64.984-64.695-64.697zm-29.93 33.16c-17.45 0-31.592 14.147-31.592 31.594 0 17.445 14.143 31.59 31.59 31.59 17.45 0 31.593-14.145 31.593-31.59 0-17.45-14.143-31.595-31.592-31.595zM19.36 295.35v51.207l94.886 94.88v53.233h18.688v-85.75L19.362 295.35zm427.378 73.154c-16.42 0-29.732 13.312-29.732 29.732s13.312 29.735 29.732 29.735c3.994 0 7.802-.794 11.28-2.222l36.62 36.615v-26.427l-22.402-22.4c2.688-4.47 4.237-9.704 4.237-15.3 0-16.42-13.314-29.732-29.735-29.732zM19.36 386.19V437.4l31.294 31.29-.002 25.982H69.34l.006-58.496L19.36 386.19zm371.902 37.796c-16.42 0-29.733 13.312-29.733 29.733 0 16.42 13.31 29.73 29.732 29.73 3.513 0 6.882-.612 10.01-1.73l12.955 12.95h26.43l-24.58-24.578c3.104-4.697 4.917-10.322 4.917-16.373 0-16.422-13.312-29.734-29.732-29.734z"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.124 33.908c-1 0-3.118.68-5.855 3.05-2.74 2.373-5.792 6.186-8.43 10.58-5.273 8.79-8.716 20.37-8.716 25.37s3.68 21.406 9.272 34.455c2.796 6.525 6.08 12.466 9.042 16.22 2.964 3.753 5.186 4.325 4.686 4.325h64c-.5 0 1.722-.572 4.686-4.326 2.963-3.753 6.246-9.694 9.043-16.22 5.592-13.048 9.27-29.454 9.27-34.454s-3.442-16.58-8.716-25.37c-2.637-4.394-5.69-8.207-8.428-10.58-2.738-2.37-4.856-3.05-5.856-3.05h-64zm7.22 112l-8.452 38.03 62.966-15.74-4.953-22.29h-49.562zm58.42 39.867l-71.238 17.81-10.693 48.12 91.5-22.875-9.568-43.055zm13.473 60.63l-99.77 24.945-10.693 48.12 120.032-30.01-9.57-43.054zm13.475 60.632L189.41 339.113l-10.694 48.12 148.564-37.14-9.568-43.056zm13.473 60.633L174.35 406.88l-3.103 13.96 35.193 23.463 134.313-33.578-9.568-43.055zm-7.084 65.77l-97.42 24.355 30.444 20.297 66.977-44.65z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return n.createElement(s,a({attr:a({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var r,o=e.attr,i=e.size,l=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},5364:function(e,t,r){"use strict";r.d(t,{p:function(){return n}});var n=(0,r(7294).createContext)({})},240:function(e,t,r){"use strict";r.d(t,{O:function(){return n}});var n=(0,r(7294).createContext)(null)},6681:function(e,t,r){"use strict";r.d(t,{h:function(){return o}});var n=r(7294);function o(e){var t=(0,n.useRef)(null);return null===t.current&&(t.current=e()),t.current}},5411:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(7294);function o(e){return(0,n.useEffect)((function(){return function(){return e()}}),[])}},4735:function(e,t,r){"use strict";r.d(t,{qY:function(){return m},ZP:function(){return b},iW:function(){return p},$B:function(){return g}});const n=1/60*1e3,o="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),i="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(o())),n);let a=!0,c=!1,l=!1;const u={delta:0,timestamp:0},s=["read","update","preRender","render","postRender"],f=s.reduce(((e,t)=>(e[t]=function(e){let t=[],r=[],n=0,o=!1,i=!1;const a=new WeakSet,c={schedule:(e,i=!1,c=!1)=>{const l=c&&o,u=l?t:r;return i&&a.add(e),-1===u.indexOf(e)&&(u.push(e),l&&o&&(n=t.length)),e},cancel:e=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1),a.delete(e)},process:l=>{if(o)i=!0;else{if(o=!0,[t,r]=[r,t],r.length=0,n=t.length,n)for(let r=0;r<n;r++){const n=t[r];n(l),a.has(n)&&(c.schedule(n),e())}o=!1,i&&(i=!1,c.process(l))}}};return c}((()=>c=!0)),e)),{}),d=s.reduce(((e,t)=>{const r=f[t];return e[t]=(e,t=!1,n=!1)=>(c||v(),r.schedule(e,t,n)),e}),{}),m=s.reduce(((e,t)=>(e[t]=f[t].cancel,e)),{}),p=s.reduce(((e,t)=>(e[t]=()=>f[t].process(u),e)),{}),h=e=>f[e].process(u),y=e=>{c=!1,u.delta=a?n:Math.max(Math.min(e-u.timestamp,40),1),u.timestamp=e,l=!0,s.forEach(h),l=!1,c&&(a=!1,i(y))},v=()=>{c=!0,a=!0,l||i(y)},g=()=>u;var b=d}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(387)}));var r=e.O();_N_E=r}]);