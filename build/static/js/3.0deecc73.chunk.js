(this.webpackJsonpbupr=this.webpackJsonpbupr||[]).push([[3],{113:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return O}));var i=e(0),c=e(45),r=e(14),u=e.p+"static/media/audio.80f01a1b.wav",o=e(39),a=e(44),b=e(4),s=new Audio(u);function d(n){var t=n.onBubbleClick,e=n.bubbleClickCount,c=n.setBubbleClickCount;return function(n){var t=Object(i.useState)(null),u=Object(r.a)(t,2),d=u[0],l=u[1];function f(){var n=(window.innerWidth+window.innerHeight)/2/100,t=window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth,e=5*n,i=25*n,c=Object(a.a)(250),r=Object(o.a)(e,i);2*r>t&&(r=t/2);var u=(1.1*r-r)/2,b=Object(o.a)(u,window.innerHeight-r-u),s=Object(o.a)(u,window.innerWidth-r-u);l({background:"".concat(c),width:"".concat(r,"px"),height:"".concat(r,"px"),top:"".concat(b,"px"),left:"".concat(s,"px")})}function n(){s.play(),c((function(n){return n+1}))}return Object(i.useEffect)(f,[e]),Object(i.useEffect)((function(){function n(){f()}return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}})),Object(b.jsx)("div",{id:"bubble",style:d,onClick:n})}(t)}var l=e(108),f=e(103),w=e(69);function j(n){var t=n.timerInput;return Object(b.jsx)(l.a,{maxWidth:"xs",children:Object(b.jsx)(f.a,{children:Object(b.jsx)(w.a,{children:"REMAINING TIME: ".concat(t)})})})}function O(n){var t=n.timerInput,e=n.bubbleClickCount,r=n.setBubbleClickCount,u=n.setTimerInput,o=n.setGameInProgress,a=n.setMessage;return Object(i.useEffect)((function(){var n=setInterval((function(){u((function(n){return n-1}))}),1e3);setTimeout((function(){o(!1),a(e>t?"GOOD JOB!":"YOU CAN DO BETTER"),u(c.a),clearInterval(n)}),1e3*t)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{timerInput:t}),Object(b.jsx)(d,{bubbleClickCount:e,setBubbleClickCount:r})]})}}}]);
//# sourceMappingURL=3.0deecc73.chunk.js.map