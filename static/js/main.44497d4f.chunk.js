(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/cersei.e74166ad.jpeg"},function(e,t,a){e.exports=a.p+"static/media/snow.d06026a7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/arya.b6b069e2.png"},function(e,t,a){e.exports=a.p+"static/media/barath.cc2ef562.png"},function(e,t,a){e.exports=a.p+"static/media/joffrey.868851c8.jpeg"},function(e,t,a){e.exports=a.p+"static/media/sansa.cd40eab1.jpeg"},function(e,t,a){e.exports=a.p+"static/media/wild.d28654a1.jpeg"},function(e,t,a){e.exports=a.p+"static/media/hound.faf2fa5d.jpeg"},function(e,t,a){e.exports=a.p+"static/media/tyrion.7c36cfce.jpeg"},,,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(2),i=a.n(o),s=(a(24),a(15)),r=a(3),m=a(4),u=a(16),l=a(5),f=a(17);a(25),a(26);var p=function(e){return c.a.createElement("div",{className:"Scoreboard"},c.a.createElement("p",{className:"Score"}," score: ",e.state.chosen.length),c.a.createElement("p",{className:"Message"},e.state.message))};a(27),a(28);var d=function(e){return c.a.createElement("div",{className:"Card",onClick:e.action,"data-img":e.imgSrc,style:{backgroundImage:"url("+e.imgSrc+")"}})};var g=function(e){return c.a.createElement("div",{className:"Gameboard"},e.images.map(function(t,a){return c.a.createElement(d,{key:a,imgSrc:t,action:e.action})}))},h=a(6),v=a.n(h),b=a(7),j=a.n(b),w=a(8),E=a.n(w),k=a(9),x=a.n(k),y=a(10),O=a.n(y),S=a(11),N=a.n(S),C=a(12),M=a.n(C),A=a(13),B=a.n(A),I=a(14),J=a.n(I),W=[v.a,j.a,E.a,x.a,O.a,N.a,M.a,B.a,J.a],G=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},a.onClick=function(e){var t=e.target.getAttribute("data-img");a.state.chosen.includes(t)?(console.log("game over"),a.gameOver()):a.setState({chosen:[].concat(Object(s.a)(a.state.chosen),[t]),message:""}),a.shuffle(W),console.log(a.state.chosen)},a.gameOver=function(){a.setState({chosen:[],message:"game over"})},a.state={chosen:[],message:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,{state:this.state}),c.a.createElement(g,{images:W,action:this.onClick}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.44497d4f.chunk.js.map