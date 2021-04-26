(this.webpackJsonpbupr=this.webpackJsonpbupr||[]).push([[0],{43:function(e,t,n){"use strict";t.a=5},61:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(9),i=n.n(a),r=n(15),s=n(105),o=n(106),l=n(107),u=n(108),b=n(101),j=(n(61),n(49)),d=n(39),h=n.n(d),m=n(37),k={light:Object(j.a)({type:"light",palette:{primary:{main:h.a[500]},secondary:{main:m.a[500]},bodyBackground:"white"}}),dark:Object(j.a)({palette:{type:"dark",primary:{main:h.a[300]},secondary:{main:m.a[300]},bodyBackground:"black"}})},O=n(109),f=n(4);function p(e){var t=e.setTimerInput,n=e.timerInput;return Object(f.jsx)(O.a,{type:"number",label:"Timer (seconds)",variant:"outlined",onChange:function(e){var n=parseInt(e.target.value);t(n)},value:n})}var v=n(67);function g(e){var t=e.message;return Object(f.jsx)(v.a,{children:t})}function x(e){e.miscklicksEnabled;var t=e.miscklicks;return null!==t?Object(f.jsx)(v.a,{variant:"h5",children:"Misclicks: ".concat(t)}):null}var w=n(102);function T(e){var t=e.bubbleClickCount,n=e.score;return null!==t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w.a,{}),Object(f.jsx)(v.a,{variant:"h4",children:"YOUR SCORE: ".concat(n)})]}):null}function y(){return Object(f.jsx)(v.a,{variant:"h1",children:"BUPR"})}var C=n(103),E=n(110);function S(e){var t=e.setMiscklicksEnabled,n=e.miscklicksEnabled;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w.a,{}),Object(f.jsx)(C.a,{control:Object(f.jsx)(E.a,{checked:!0===n,onChange:function(){return t(!n)},name:"checkedB"}),label:"Miscklicks enabled"}),Object(f.jsx)(w.a,{style:{marginBottom:8}})]})}var I=n(104);function U(e){var t=e.handleButtonClick;return Object(f.jsx)(I.a,{style:{marginTop:8},onClick:t,variant:"contained",color:"primary",children:"START THE GAME"})}var B=n(25);function M(e){var t=e.themeToUse,n=e.setThemeToUse,a=Object(B.a)();return Object(c.useEffect)((function(){document.body.style.backgroundColor=a.palette.bodyBackground}),[a]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w.a,{}),Object(f.jsx)(C.a,{control:Object(f.jsx)(E.a,{checked:"dark"===t,onChange:function(e){var t=e.target.checked?"dark":"light";n(t),localStorage.setItem("themeToUse",t)},name:"checkedA"}),label:"Dark theme"}),Object(f.jsx)(w.a,{})]})}var W=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,111))}));function A(e){var t=e.bubbleClickCount,n=e.score,a=e.themeToUse,i=e.setThemeToUse,r=e.message,s=e.miscklicksEnabled,o=e.miscklicks,l=e.setMiscklicksEnabled,u=e.setTimerInput,b=e.timerInput,j=e.handleButtonClick;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{}),Object(f.jsx)(M,{themeToUse:a,setThemeToUse:i}),Object(f.jsx)(g,{message:r}),Object(f.jsx)(T,{bubbleClickCount:t,score:n}),Object(f.jsx)(x,{miscklicksEnabled:s,miscklicks:o}),Object(f.jsx)(S,{setMiscklicksEnabled:l,miscklicksEnabled:s}),Object(f.jsx)(p,{setTimerInput:u,timerInput:b}),Object(f.jsx)(U,{handleButtonClick:j}),Object(f.jsx)(c.Suspense,{fallback:null,children:Object(f.jsx)(W,{bubbleClickCount:t})})]})}var R=n(43),F=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,112))})),G=Object(s.a)((function(e){return{main:{display:"flex",flexDirection:"column",padding:8,marginTop:16}}}));var L=function(){var e=G(),t=Object(c.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(0),j=Object(r.a)(s,2),d=j[0],h=j[1],m=Object(c.useState)(0),O=Object(r.a)(m,2),p=O[0],v=O[1],g=Object(c.useState)(null),x=Object(r.a)(g,2),w=x[0],T=x[1],y=Object(c.useState)(!1),C=Object(r.a)(y,2),E=C[0],S=C[1],I=Object(c.useState)('Set up the timer below, press "START THE GAME" and try to pop as many bubbles as possible (remember that every bubble has a lifetime of 1 second so it will disappear unless you click on it). Good luck :)'),U=Object(r.a)(I,2),B=U[0],M=U[1],W=Object(c.useState)(R.a),L=Object(r.a)(W,2),P=L[0],N=L[1],z=Object(c.useState)(!1),D=Object(r.a)(z,2),H=D[0],J=D[1];Object(c.useEffect)((function(){H?(v(a-(d-a)),T(d-a)):v(a)}),[E]),Object(c.useEffect)((function(){function e(){h((function(e){return e+1}))}if(E&&H)return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var Y=Object(c.useState)(localStorage.getItem("themeToUse")),$=Object(r.a)(Y,2),q=$[0],K=$[1];return Object(f.jsx)(o.a,{theme:k[q],children:E?Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(l.a,{}),children:Object(f.jsx)(F,{timerInput:P,bubbleClickCount:a,setBubbleClickCount:i,setTimerInput:N,setGameInProgress:S,setMessage:M})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(u.a,{maxWidth:"xs",children:Object(f.jsx)(b.a,{className:e.main,children:Object(f.jsx)(A,{bubbleClickCount:a,score:p,themeToUse:q,setThemeToUse:K,message:B,miscklicksEnabled:H,miscklicks:w,setMiscklicksEnabled:J,setTimerInput:N,timerInput:P,handleButtonClick:function(){i(0),h(0),T(null),S(!0)}})})})})})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(f.jsx)(L,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bupr/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bupr/build","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):N(t,e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.07f4a2a6.chunk.js.map