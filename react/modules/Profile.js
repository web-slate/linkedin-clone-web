"use strict";(self.webpackChunklinkedin_clone_web=self.webpackChunklinkedin_clone_web||[]).push([[880],{6573:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(7294),a=t(3555),o=t(6138);const i=function(){return r.createElement(r.Fragment,null,r.createElement("p",{className:o.Z.line},"ProfileIntro goes here."))},l=()=>r.createElement(a.Z,null,r.createElement("div",{id:"profile-container"},r.createElement(i,null)))},3405:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([e.id,"\n  /* TODO: Component CSS Style goes here */\n  .J4eW5re2ptfrxU4koO9w {\n    color: blue;\n  }\n",""]),i.locals={line:"J4eW5re2ptfrxU4koO9w"};const l=i},2327:(e,n,t)=>{t.d(n,{$:()=>b});var r=t(3878),a=t(8192),o=t(5267);function i(e,n){return(0,r.Z)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||(0,a.Z)(e,n)||(0,o.Z)()}var l=t(4942),u=t(7294),c=t(8718);function s(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var f={};function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&f[n[0]]||("string"==typeof n[0]&&(f[n[0]]=new Date),s.apply(void 0,n))}function p(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function g(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return d("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!i(r,e)||a&&!i(o,e)))}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,u.useContext)(c.OO)||{},a=r.i18n,o=r.defaultNS,l=t||a||(0,c.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new c.zv),!l){d("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[s,{},!1];return f.t=s,f.i18n={},f.ready=!1,f}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var v=y(y(y({},(0,c.JP)()),l.options.react),n),b=v.useSuspense,h=v.keyPrefix,m=e||o||l.options&&l.options.defaultNS;m="string"==typeof m?[m]:m||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(m);var w=(l.isInitialized||l.initializedStoreOnce)&&m.every((function(e){return g(e,l,v)}));function O(){return l.getFixedT(null,"fallback"===v.nsMode?m:m[0],h)}var k=(0,u.useState)(O),S=i(k,2),P=S[0],j=S[1],C=(0,u.useRef)(!0);(0,u.useEffect)((function(){var e=v.bindI18n,n=v.bindI18nStore;function t(){C.current&&j(O)}return C.current=!0,w||b||p(l,m,(function(){C.current&&j(O)})),e&&l&&l.on(e,t),n&&l&&l.store.on(n,t),function(){C.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,t)})),n&&l&&n.split(" ").forEach((function(e){return l.store.off(e,t)}))}}),[l,m.join()]);var E=(0,u.useRef)(!0);(0,u.useEffect)((function(){C.current&&!E.current&&j(O),E.current=!1}),[l]);var I=[P,l,w];if(I.t=P,I.i18n=l,I.ready=w,w)return I;if(!w&&!b)return I;throw new Promise((function(e){p(l,m,(function(){e()}))}))}},6138:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(3379),a=t.n(r),o=t(7795),i=t.n(o),l=t(569),u=t.n(l),c=t(3565),s=t.n(c),f=t(9216),d=t.n(f),p=t(4589),g=t.n(p),v=t(3405),y={};y.styleTagTransform=g(),y.setAttributes=s(),y.insert=u().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d();var b=a()(v.default,y);if(!v.default.locals||e.hot.invalidate){var h=!v.default.locals,m=h?v:v.default.locals;e.hot.accept(3405,(n=>{v=t(3405),function(e,n,t){if(!e&&n||e&&!n)return!1;var r;for(r in e)if((!t||"default"!==r)&&e[r]!==n[r])return!1;for(r in n)if(!(t&&"default"===r||e[r]))return!1;return!0}(m,h?v:v.default.locals,h)?(m=h?v:v.default.locals,b(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){b()}));const w=v.default&&v.default.locals?v.default.locals:void 0}}]);