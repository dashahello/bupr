(this.webpackJsonpbupr=this.webpackJsonpbupr||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var i,c=n(0),r=n(64),u=n(13),o=n.p+"static/media/audio.80f01a1b.mp3",b=n(53),a=n(63),s=n(3),l=new Audio(o),d="bubble";function f(e){var t,n,r,o,f=e.bubbleClickCount,w=e.setBubbleClickCount,j=e.miscklicksEnabled,m=e.bubbleLifetime,h=Object(c.useState)(null),p=Object(u.a)(h,2),k=p[0],v=p[1];function O(){!function(){var e=(window.innerWidth+window.innerHeight)/2/100,i=window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth,c=5*e,u=25*e;t=Object(a.a)(250),2*(n=Object(b.a)(c,u))>i&&(n=i/2);var s=(1.1*n-n)/2;r=Object(b.a)(s,window.innerHeight-n-s),o=Object(b.a)(s,window.innerWidth-n-s)}(),v({background:"linear-gradient(\n        to bottom, \n        rgba(254,255,255) 0%,\n        rgba(221,241,249) 35%,\n        ".concat(t," \n      )"),width:"".concat(n,"px"),height:"".concat(n,"px"),top:"".concat(r,"px"),left:"".concat(o,"px")}),m&&(clearTimeout(i),i=setTimeout(O,1e3))}return Object(c.useEffect)(O,[f]),Object(c.useEffect)((function(){function e(){O()}function t(e){e.target.id!==d&&O()}return window.addEventListener("resize",e),j&&window.addEventListener("click",t),function(){window.removeEventListener("resize",e),j&&window.removeEventListener("click",t),i&&clearTimeout(i)}}),[]),Object(s.jsx)("div",{id:d,style:k,onClick:function(){l.play(),w((function(e){return e+1}))}})}var w=n(132),j=n(125),m=n(94);function h(e){var t=e.timerInput;return Object(s.jsx)(w.a,{maxWidth:"xs",children:Object(s.jsx)(j.a,{children:Object(s.jsx)(m.a,{children:"REMAINING TIME: ".concat(t)})})})}function p(e){var t=e.timerInput,n=e.bubbleClickCount,i=e.setBubbleClickCount,u=e.setTimerInput,o=e.setGameInProgress,b=(e.setMessage,e.miscklicksEnabled),a=e.score,l=e.bubbleLifetime;return Object(c.useEffect)((function(){var e=setInterval((function(){u((function(e){return e-1}))}),1e3);setTimeout((function(){o(!1),u(r.a),clearInterval(e)}),1e3*t)}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{timerInput:t}),Object(s.jsx)(f,{bubbleClickCount:n,setBubbleClickCount:i,miscklicksEnabled:b,score:a,bubbleLifetime:l})]})}}}]);
//# sourceMappingURL=3.ff2fe812.chunk.js.map