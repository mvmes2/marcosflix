(this["webpackJsonpmarcos-flix"]=this["webpackJsonpmarcos-flix"]||[]).push([[0],{28:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(19),i=a.n(r),c=a(12),s=(a(28),a.p+"static/media/logo.489974ab.png"),o=a(23),l=a(10),u=a(11),d=a(5),A=a(2),h=a(0),m="entrar",g=!1,j=!1,v=!1,f=!1,b=function(){var e=Object(A.f)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],i=a[1],c={nome:"",email:"",senha:"",senha2:""},s=Object(n.useState)(c),b=Object(d.a)(s,2),x=b[0],p=b[1],O=Object(n.useState)({email:"",senha:""}),w=Object(d.a)(O,2),E=w[0],B=w[1];function k(e){p(Object(u.a)(Object(u.a)({},x),{},Object(l.a)({},e.target.id,e.target.value)));var t=document.querySelector("#email"),a=document.querySelector("#senha"),n=document.querySelector("#senha2"),r=document.querySelector("#nome"),i=document.querySelector(".entrar--btn-3"),c=document.querySelector(".span__nome-checked"),s=document.querySelector(".span__email-checked"),o=document.querySelector(".span__senha-checked"),d=document.querySelector(".span__senha2-checked");"nome"===e.target.id&&r.value.length>=3?(g=!0,c.innerHTML='<i class="uil uil-check checked-ok"></i>'):"nome"===e.target.id&&r.value.length<3&&(g=!1,c.innerHTML='<i class="uil uil-times checked-error"></i>',i.style.visibility="hidden"),"email"===e.target.id&&t.checkValidity()&&t.value.length>=1?(j=!0,s.innerHTML='<i class="uil uil-check checked-ok"></i>'):("email"===e.target.id&&!t.checkValidity()||t.value.length<1)&&(j=!1,s.innerHTML='<i class="uil uil-times checked-error"></i>',i.style.visibility="hidden"),"senha"===e.target.id&&a.value.length>=6?(v=!0,o.innerHTML='<i class="uil uil-check checked-ok"></i>'):"senha"===e.target.id&&a.value.length<6&&(v=!1,o.innerHTML='<i class="uil uil-times checked-error"></i>',i.style.visibility="hidden"),"senha2"===e.target.id&&a.value.length>=6&&a.value===n.value?(f=!0,d.innerHTML='<i class="uil uil-check checked-ok"></i>'):("senha2"===e.target.id&&a.value.length<6||a.value!==n.value)&&(f=!1,d.innerHTML='<i class="uil uil-times checked-error"></i>',i.style.visibility="hidden"),i.style.visibility=g&&j&&f&&v?"visible":"hidden"}function C(e){B(Object(u.a)(Object(u.a)({},E),{},Object(l.a)({},e.target.id,e.target.value)))}function N(){var e=document.querySelector(".signUpForm");!function(){var e=[],t={nome:x.nome,email:x.email,senha:x.senha,senha2:x.senha2};if(localStorage.users){if(localStorage.users){var a=JSON.parse(localStorage.users);if(a.some((function(e){return e.email===t.email})))return window.alert("usu\xe1rio j\xe1 cadastrado com este email!");e=[].concat(Object(o.a)(a),[t]),localStorage.users=JSON.stringify(e),window.alert("Usu\xe1rio cadastrado com sucesso!"),m="entrar",i(!0)}}else localStorage.users=JSON.stringify([t]),window.alert("Usu\xe1rio cadastrado com sucesso!"),m="entrar",i(!0)}(),e.reset()}return Object(n.useEffect)((function(){(p(c),g=!1,j=!1,v=!1,f=!1,"cadastrar"===m)&&(document.querySelector(".entrar--btn-3").style.visibility="hidden")}),[m]),Object(n.useEffect)((function(){g=!1,j=!1,v=!1,f=!1,p(c),console.log("effecti"),i(!1)}),[r]),Object(h.jsxs)("div",{className:"form--box",children:[window.addEventListener("resize",(function(){var e=!1;if(e){if(e){document.querySelector("meta[name=viewport]").setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),e=!1}}else{document.documentElement.style.setProperty("overflow","auto"),document.querySelector("meta[name=viewport]").setAttribute("content","height=window.innerHeight","px, width=device-width, initial-scale=1.0");var t=document.querySelector(".login--box");document.querySelector("[login--form input]").style={width:"200px"},t.style={width:"85%"},e=!0}})),Object(h.jsx)("h1",{className:"login--text",children:"entrar"===m?"Entrar":"Cadastro"}),"entrar"===m?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"login--form",children:[Object(h.jsx)("input",{id:"email",type:"email",placeholder:"Email",onChange:function(e){return C(e)}}),Object(h.jsx)("input",{id:"senha",type:"password",placeholder:"Senha",onChange:function(e){return C(e)}}),Object(h.jsx)("span",{className:"entrar--btn",onClick:function(){return function(){if(localStorage.users){if(JSON.parse(localStorage.users).some((function(e){return e.email===E.email}))){var t=JSON.parse(localStorage.users).filter((function(e){return e.email===E.email}));return E.senha===t[0].senha?e.push("/home"):window.alert("senha inv\xe1lida!")}return window.alert("email inv\xe1lido ou N\xe3o Cadastrado!")}return window.alert("Usu\xe1rio n\xe3o cadastrado!")}()},children:"Entrar"}),Object(h.jsx)("span",{className:"entrar--btn-2",onClick:function(){"cadastrar"===m?i(!0):(i(!0),m="cadastrar")},children:"Cadastrar"})]})}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("form",{className:"signUpForm",children:Object(h.jsxs)("div",{className:"login--form",children:[Object(h.jsxs)("div",{className:"input-nome",children:[Object(h.jsx)("input",{required:!0,id:"nome",type:"text",placeholder:"Nome: (Maior que 3 caracteres)",onChange:function(e){return k(e)}}),Object(h.jsx)("span",{className:"span__nome-checked"})]}),Object(h.jsxs)("div",{className:"input-email",children:[Object(h.jsx)("input",{required:!0,id:"email",type:"email",placeholder:"Email: (ex: teste@teste.com)",onChange:function(e){return k(e)}}),Object(h.jsx)("span",{className:"span__email-checked"})]}),Object(h.jsxs)("div",{className:"input-senha",children:[Object(h.jsx)("input",{required:!0,id:"senha",type:"password",placeholder:"Senha: (Maior que 6 caracteres)",onChange:function(e){return k(e)}}),Object(h.jsx)("span",{className:"span__senha-checked"})]}),Object(h.jsxs)("div",{className:"input-senha",children:[Object(h.jsx)("input",{required:!0,id:"senha2",type:"password",placeholder:"Confirmar Senha:",onChange:function(e){return k(e)}}),Object(h.jsx)("span",{className:"span__senha2-checked"})]}),Object(h.jsx)("span",{className:"entrar--btn-2 back",type:"submit",onClick:function(){return m="entrar",void i(!0)},children:"Voltar"}),Object(h.jsx)("span",{className:"entrar--btn-3",type:"submit",onClick:function(){return N()},children:"Confirmar"})]})})})]})},x=function(){return Object(h.jsxs)("div",{className:"login--container",children:[Object(h.jsx)("img",{src:s,alt:"logo",className:"main--logo"}),Object(h.jsx)("div",{className:"login--box",children:Object(h.jsx)("div",{className:"login--info-box",children:Object(h.jsx)(b,{})})})]})},p=a(6),O=a.n(p),w=a(7),E=a(22),B=a.p+"static/media/netflix-start.127e36ab.mp3",k="156438921b57666fdf2c84a358ccba0a",C=function(){var e=Object(w.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(k));case 2:return e.t0=e.sent,e.t1={pointer:"originals",title:"NetFlix",items:e.t0},e.next=6,C("/trending/all/week?language=pt-BR&api_key=".concat(k));case 6:return e.t2=e.sent,e.t3={pointer:"trending",title:"Recomendados",items:e.t2},e.next=10,C("/movie/top_rated?language=pt-BR&api_key=".concat(k));case 10:return e.t4=e.sent,e.t5={pointer:"toprated",title:"Em Alta",items:e.t4},e.next=14,C("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(k));case 14:return e.t6=e.sent,e.t7={pointer:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,C("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(k));case 18:return e.t8=e.sent,e.t9={pointer:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,C("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(k));case 22:return e.t10=e.sent,e.t11={pointer:"horror",title:"Terror",items:e.t10},e.next=26,C("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(k));case 26:return e.t12=e.sent,e.t13={pointer:"romance",title:"Romance",items:e.t12},e.next=30,C("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(k));case 30:return e.t14=e.sent,e.t15={pointer:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(w.a)(O.a.mark((function e(t,a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},!t){e.next=15;break}e.t0=a,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,C("/movie/".concat(t,"?language=pt-BR&api_key=").concat(k));case 7:case 11:return n=e.sent,e.abrupt("break",15);case 9:return e.next=11,C("/tv/".concat(t,"?language=pt-BR&api_key=").concat(k));case 13:return n="error at request api",e.abrupt("break",15);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(e){var t=e.title,a=e.list,r=Object(n.useState)(0),i=Object(d.a)(r,2),c=i[0],s=i[1];return Object(h.jsxs)("div",{className:"moviesection",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("div",{className:"moviesection-leftArrow",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),s(e)},children:Object(h.jsx)("i",{className:"uil uil-angle-left-b moviesection-leftArrow-img"})}),Object(h.jsx)("div",{className:"moviesection-rightArrow",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*a.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),s(e)},children:Object(h.jsx)("i",{className:"uil uil-angle-right-b moviesection-rightArrow-img"})}),Object(h.jsx)("div",{className:"moviesection--listarea",children:Object(h.jsx)("div",{className:"moviesection--list",style:{marginLeft:c,width:150*a.results.length},children:a.results.length>0&&a.results.map((function(e,t){return Object(h.jsx)("div",{className:"moviesection--item",children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})},D=function(e){var t=e.item,a=new Date(t.first_air_date),n=[];for(var r in t.genres)n.push(t.genres[r].name);var i=t.overview;return i.length>250&&(i=i.substring(0,250)+"..."),Object(h.jsx)("section",{className:"draft",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(h.jsx)("div",{className:"draft--vertical-fade",children:Object(h.jsxs)("div",{className:"draft--horizontal-fade",children:[Object(h.jsx)("div",{className:"draft--name",children:t.original_name}),Object(h.jsxs)("div",{className:"draft--info",children:[Object(h.jsxs)("div",{className:"draft--points",children:[t.vote_average," pontos"]}),Object(h.jsx)("div",{className:"draft--year",children:a.getFullYear()}),Object(h.jsxs)("div",{className:"draft--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]}),Object(h.jsx)("div",{className:"draft--description",children:i}),Object(h.jsx)("div",{className:"draft--buttons"}),Object(h.jsx)("a",{href:"/home",className:"draft--btn-assistir",children:"\u25ba Assistir"}),Object(h.jsx)("a",{href:"/home",className:"draft--btn-list",children:"+ Minha Lista"})]}),Object(h.jsxs)("div",{className:"draft--genres",children:[Object(h.jsx)("strong",{children:"G\xeaneros:"})," ",n.join(", ")]})]})})})},Q=function(e){var t=e.control;return Object(h.jsxs)("header",{className:t?"header--active-scroll":"",children:[Object(h.jsx)("div",{className:"header--logo",children:Object(h.jsx)("a",{href:"/marcosflix",children:Object(h.jsx)("img",{alt:"logo",src:s})})}),Object(h.jsx)("div",{className:"header--user",children:Object(h.jsx)("a",{href:"/marcosflix",children:Object(h.jsx)("img",{alt:"logo",src:"data:image/png;base64,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"})})})]})},M=a.p+"static/media/loading.cc57505c.gif",U=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),c=Object(d.a)(i,2),s=c[0],o=c[1],l=Object(n.useState)(!1),u=Object(d.a)(l,2),A=u[0],m=u[1];Object(n.useEffect)((function(){setTimeout((function(){g.main.playing()||g.main.play()}),2200)}),[]),Object(n.useEffect)((function(){var e=function(){window.scrollY>15?m(!0):m(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scrol",e)}}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(w.a)(O.a.mark((function e(){var t,a,n,i,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,setTimeout((function(){r(t)}),1500),a=t.filter((function(e){return"originals"===e.pointer})),n=Math.floor(Math.random()*a[0].items.results.length),i=a[0].items.results[n],e.next=9,y(i.id,"tv");case 9:c=e.sent,o(c),console.log(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g={main:new E.Howl({src:[B],volume:.4,loop:!1,html5:!0,preload:!0})};return Object(h.jsx)("div",{className:"page",children:a<=0?Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("img",{alt:"carregando",src:M})}):Object(h.jsxs)("div",{className:"renderHome",children:[Object(h.jsx)(Q,{control:A}),s&&Object(h.jsx)(D,{item:s}),Object(h.jsx)("section",{className:"lists",children:a.map((function(e,t){return Object(h.jsx)(S,{title:e.title,list:e.items},t)}))}),Object(h.jsx)("section",{className:"footer",children:Object(h.jsx)("footer",{children:Object(h.jsxs)("span",{className:"footer__copy",role:"img","aria-label":"copyRight",children:["Direitos de imagem para Netflix \xa9 Desenvolvido por MarcosMantovani. All rights reserved",Object(h.jsx)("br",{}),"Dados pegos do site ThemovieDB.org",Object(h.jsx)("br",{}),"Site ainda em desenvolvimento."]})})})]})})};var J=function(){return Object(h.jsxs)(A.c,{className:"App",children:[Object(h.jsx)(A.a,{exact:!0,path:"/marcosflix",component:x}),Object(h.jsx)(A.a,{exact:!0,path:"/home",component:U})]})};i.a.render(Object(h.jsx)(c.a,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8b04c0f6.chunk.js.map