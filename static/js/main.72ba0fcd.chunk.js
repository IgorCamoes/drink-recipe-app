(window.webpackJsonplildrink=window.webpackJsonplildrink||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/github.76d344f0.svg"},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCRMCFB1dlDZuAAACHElEQVRIx+2VzUuUURSHnztjzqQETphmJmEh0YfUoghaFEQQSRIjJUVMYO2qjREIbcq/ICraZCDRrujDjVHQBy0iJOgDbGMiNDndc2dyXkHBEfO00KEZG513XEZ39957fs99z+/cey74GtItKiob/UUXAgxK1ItoYJly2ygTI+HCa2V+AOYwLxqn1LhT2mrqGZy9Xvclu+brp7SFfg0m++gyL80NnQ68k2gJCcRXyuRog+uSt4mKuRnXIuOJ6rwU1IxXLQbIHNBvlROZmOmuCHmh0clt0zX98j4QpScHkDyvN5fwgMwY6P0MUP2EKDBkGvJ9rpRPcqWwXIbdvvlt9kvabgeQN65jYdgmSdkjf8sTWyStZQA/14t17QCuXVy6akEVaodNzNx1TQsBwRZ9bmZgKDTzkLBucGfknt7WkxEvz0SAmqf2Go/kIppHOMaAHAROM6Ex0za7hs+/muvjf/zJrbdxj2nlYw4ixFY+AE14s7vqkkVrnlwlg3Ipx5k2NwB2j3g/dhcVzyM2y5gcyn65O3JVaiVuz/qUA9ijkrKNcynJd9lrX8utxaML3IW1fdpjHoyEwTVTpifMilRnCfsDaFCeSS+A7ZREcl2JcgAvIl/lnOwQL3sKSx5up3gSdxeWKQewl92r4lFLNBST0uIHx19H+g/45wEFnjZbGS4HmKow5V4EQDXbAX0BTG/mOMx1u8wYAGlWLwb4DQA73m1hqtcRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA5LTE5VDAyOjIwOjI5KzAwOjAwvwELawAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOS0xOVQwMjoyMDoyOSswMDowMM5cs9cAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},20:function(e,t,n){e.exports=n.p+"static/media/linkedin.698ddeaf.svg"},23:function(e,t,n){e.exports=n(40)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),l=n.n(c),i=(n(28),n(3)),s=n.n(i),o=n(7),u=n(6),m=n(9),A=n(8),d=(n(30),n(18)),E=n.n(d),p=n(19),h=n.n(p),f=n(20),w=n.n(f),k=(n(16),function(e){var t=e.match,n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],i=c[1],m=t.params.id,A=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n.drinks);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A()}),[]),r.a.createElement("div",{id:"dpContent"},l.map((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:e.strDrinkThumb,alt:""}),r.a.createElement("div",null,r.a.createElement("h2",null,e.strDrink),r.a.createElement("h3",null,"Ingredients:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"WIP"))),r.a.createElement("h3",null,"Instructions:"),r.a.createElement("p",{className:"instructions"},e.strInstructions)),r.a.createElement("div",null,r.a.createElement("p",null,"Glass: ",e.strGlass),r.a.createElement("p",null,e.strAlcoholic)))})))}),v=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.drinks);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),r.a.createElement("div",{id:"dpContent"},n.map((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:e.strDrinkThumb,alt:""}),r.a.createElement("div",null,r.a.createElement("h2",null,e.strDrink),r.a.createElement("h3",null,"Ingredients:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"WIP"))),r.a.createElement("h3",null,"Instructions:"),r.a.createElement("p",{className:"instructions"},e.strInstructions)),r.a.createElement("div",null,r.a.createElement("p",null,"Glass: ",e.strGlass),r.a.createElement("p",null,e.strAlcoholic)))})))},b=(n(31),function(e){var t=e.match.params.query,n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],i=c[1],A=function(){var e=Object(o.a)(s.a.mark((function e(){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,i(a.drinks);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){A()})),null!==l?r.a.createElement("div",null,l.map((function(e){return r.a.createElement(m.b,{style:{textDecoration:"none"},to:"/drinks/".concat(e.idDrink)},r.a.createElement("div",{className:"drinkDisplay"},r.a.createElement("h2",{key:e.idDrink},e.strDrink),r.a.createElement("div",null,r.a.createElement("img",{className:"drinkImg",src:e.strDrinkThumb,alt:""}))))})),";"):r.a.createElement("div",{id:"error"},r.a.createElement("h2",null,"No drinks found, are you sure you were searching for ",t,"?"))});function g(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.drinks),(a=document.querySelectorAll(".drinkDisplay")).forEach((function(e,t){a[t].style.animation="anim1 0.5s ease-in-out"}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),r.a.createElement("div",null,n.map((function(e){return r.a.createElement(m.b,{style:{textDecoration:"none"},to:"/drinks/".concat(e.idDrink)},r.a.createElement("div",{className:"drinkDisplay","data-id":e.idDrink},r.a.createElement("h2",{key:e.drinkId},e.strDrink),r.a.createElement("div",null,r.a.createElement("img",{className:"drinkImg",src:e.strDrinkThumb,alt:""}))))})),";")}var j=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(m.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:h.a,alt:""})),r.a.createElement("input",{onChange:function(e){c(e.target.value)},type:"text",placeholder:"Search for a drink"}),r.a.createElement(m.b,{to:"/search/".concat(n)},r.a.createElement("button",null,"Search")),r.a.createElement(m.b,{to:"/random"},r.a.createElement("button",null,"Random")))),r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",exact:!0,component:g}),r.a.createElement(A.a,{path:"/drinks/:id",component:k}),r.a.createElement(A.a,{path:"/search/:query",component:b}),r.a.createElement(A.a,{patch:"/random",component:v})),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("p",null,"Made with ",r.a.createElement("span",{role:"img"},"\u2615")," and ",r.a.createElement("span",{role:"img"},"\ud83c\udfb6")," by Igor Cam\xf5es")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/IgorCamoes"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("a",{href:"https://www.linkedin.com/in/igorcamoes/"},r.a.createElement("img",{src:w.a,alt:""}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.72ba0fcd.chunk.js.map