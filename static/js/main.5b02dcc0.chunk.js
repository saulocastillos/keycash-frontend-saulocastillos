(this["webpackJsonpkeycash-frontend-saulocastillos"]=this["webpackJsonpkeycash-frontend-saulocastillos"]||[]).push([[0],{42:function(n,e,t){n.exports=t.p+"static/media/logo.bd6a1e07.svg"},45:function(n,e,t){n.exports=t(72)},72:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(19),c=t.n(i),o=t(4),l=t(11),u=t(3),s=t(1),p=t(7);function f(){var n=Object(u.a)(["\n    div {\n      margin-right: 10px;\n\n      span {\n        font-size: 10px;\n        color: #010101;\n      }\n    }\n  "]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 5px;\n\n    strong {\n      display: block;\n      color: #000;\n    }\n\n    span {\n      font-size: 10px;\n      color: #010101;\n    }\n  }\n\n  ","\n"]);return m=function(){return n},n}function d(){var n=Object(u.a)(["\n\n    margin: 50px 50px;\n    img {\n      width: 300px;\n    }\n  "]);return d=function(){return n},n}function g(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 20px;\n  min-width: 350px;\n\n  img {\n    width: 200px;\n  }\n\n  ","\n"]);return g=function(){return n},n}var h=s.c.header(g(),p.a.greaterThan("medium")(d())),b=Object(s.c)(o.b)(m(),p.a.greaterThan("small")(f())),v=t(18);function x(){var n=Object(u.a)(["\n    width: 60px;\n    height: 60px;\n  "]);return x=function(){return n},n}function E(){var n=Object(u.a)(["\n  width: 40px;\n  height: 40px;\n  color: #e7308a;\n\n  ","\n"]);return E=function(){return n},n}var O=Object(s.c)(v.a)(E(),p.a.greaterThan("small")(x())),j=t(42),y=t.n(j);var w=Object(l.b)((function(n){return{favoritesSize:n.favorites.length}}))((function(n){var e=n.favoritesSize;return a.a.createElement(h,null,a.a.createElement(o.b,{to:"/"},a.a.createElement("img",{src:y.a,alt:"Keycash Properties"})),a.a.createElement(b,{to:"/favorites"},a.a.createElement("div",null,a.a.createElement("strong",null,"Favoritos"),a.a.createElement("span",null,e," itens")),a.a.createElement(O,null)))})),k=t(15),T=t(25),z=t.n(T),R=t(43),A=t.n(R).a.create({baseURL:"https://5e148887bce1d10014baea80.mockapi.io/keycash/challenge"});function F(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: inherit;\n"]);return F=function(){return n},n}function I(){var n=Object(u.a)(["\n    margin: 0 auto;\n  "]);return I=function(){return n},n}function P(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  list-style: none;\n  min-width: 350px;\n\n  ","\n"]);return P=function(){return n},n}var S=s.c.ul(P(),p.a.greaterThan("small")(I())),_=Object(s.c)(o.b)(F());function L(){var n=Object(u.a)(["\n  margin-top: -40px;\n  margin-left: 10px;\n\n  width: 30px;\n  height: 30px;\n  color: #e7308a;\n"]);return L=function(){return n},n}function D(){var n=Object(u.a)(["\n  li {\n    display: flex;\n    flex-direction: flex-start;\n    flex-grow: 1;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n    margin: 0 20px 20px;\n    max-width: 400px;\n\n    img {\n      align-self: flex-start;\n      max-width: 320px;\n    }\n\n    div {\n      display: flex;\n      flex-direction: column;\n      align-self: flex-start;\n      margin-top: 10px;\n      max-width: 320px;\n      justify-content: space-between;\n      strong {\n        font-size: 16px;\n        line-height: 20px;\n        color: #333;\n        margin-top: 5px;\n      }\n      > span {\n        font-size: 20px;\n        font-weight: bold;\n        margin: 5px 0 20px;\n      }\n    }\n  }\n"]);return D=function(){return n},n}var B=s.c.div(D());Object(s.c)(v.a)(L());var C=Object(k.f)((function(n){var e=n.item;return a.a.createElement(B,null,e?a.a.createElement("li",{key:e.id},a.a.createElement("img",{src:e.images[0],alt:"property"}),a.a.createElement("div",null,a.a.createElement("strong",null,e.address.formattedAddress),a.a.createElement("span",null,"R$ ",e.price))):a.a.createElement("li",null,a.a.createElement("div",{style:{width:"320px",height:"320px",background:"gray"}}),a.a.createElement("div",null,a.a.createElement("strong",null,"Address"),a.a.createElement("span",null,"Price"))))}));var J=Object(l.b)((function(n){return{properties:n.properties}}))((function(n){var e=n.dispatch,t=n.properties,i=void 0===t?[]:t;return Object(r.useEffect)((function(){!function(){var n,t;z.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,z.a.awrap(A.get("/"));case 2:n=r.sent,t=n.data.filter((function(n){return!1!==n.publish})),e({type:"FILL_PROPERTIES",properties:t});case 5:case"end":return r.stop()}}))}()}),[e]),a.a.createElement(a.a.Fragment,null,i.length>0?a.a.createElement(S,null,i.map((function(n){return a.a.createElement(_,{key:n.id,to:"/property/".concat(n.id)},a.a.createElement(C,{item:n}))}))):a.a.createElement("h1",null,"Carregando..."))}));function U(){var n=Object(u.a)(["\n  margin-top: -4rem;\n  margin-bottom: 2rem;\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: inherit;\n"]);return V=function(){return n},n}function $(){var n=Object(u.a)(["\n    margin: 0 auto 20px;\n    img {\n      max-width: 1024px;\n      flex-grow: stretch;\n    }\n  "]);return $=function(){return n},n}function H(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n  margin: 10px auto;\n\n  img {\n    max-width: 320px;\n  }\n\n  ","\n"]);return H=function(){return n},n}var K=s.c.div(H(),p.a.greaterThan("small")($())),N=(Object(s.c)(o.b)(V()),Object(s.c)(v.b)(U()));var q=Object(l.b)((function(n){return{properties:n.properties}}))((function(n){var e=n.match,t=n.dispatch,r=n.properties,i=void 0===r?[]:r,c=(n.favorites,e.params.id),o=i.filter((function(n){return n.id===c})),l=null;try{l=o[0]}catch(u){console.log(u)}return a.a.createElement(K,null," ",l?a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:l.images[0],alt:"".concat(l.images[0])}),a.a.createElement(N,{size:50,color:"gray",onClick:function(){return function(n){t({type:"ADD_TO_FAVORITE",favorite:n})}(l)}}),a.a.createElement("h1",null,"R$ ",l.price),a.a.createElement("h2",null,"Bathrooms: ",l.bathrooms),a.a.createElement("h2",null,"Bedrooms: ",l.bedrooms),a.a.createElement("h2",null,"Parking Spaces: ",l.parkingSpaces),a.a.createElement("h2",null,"Usable Area: ",l.parkingSpaces)):"")}));function G(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: inherit;\n"]);return G=function(){return n},n}function M(){var n=Object(u.a)(["\n    margin: 0 auto;\n  "]);return M=function(){return n},n}function Q(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  list-style: none;\n  min-width: 350px;\n\n  ","\n"]);return Q=function(){return n},n}var W=s.c.ul(Q(),p.a.greaterThan("small")(M())),X=Object(s.c)(o.b)(G());var Y=Object(l.b)((function(n){return{favorites:n.favorites}}))((function(n){var e=n.favorites,t=void 0===e?[]:e;return a.a.createElement(a.a.Fragment,null,t.length>0?a.a.createElement(W,null,t.map((function(n){return a.a.createElement(X,{key:n.id,to:"/property/".concat(n.id)},a.a.createElement(C,{item:n}))}))):a.a.createElement("h1",null,"Nenhum favorito ainda :("))}));function Z(){return a.a.createElement(k.c,null,a.a.createElement(k.a,{exact:!0,path:"/",component:J}),a.a.createElement(k.a,{path:"/property/:id",component:q}),a.a.createElement(k.a,{path:"/favorites",component:Y}))}function nn(){var n=Object(u.a)(["\n\n\n  "]);return nn=function(){return n},n}function en(){var n=Object(u.a)(["\n\n  *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    min-height: 100%;\n  }\n\n  body {\n    background: #f4f4f4;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    color: #222;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  ","\n\n\n"]);return en=function(){return n},n}var tn=Object(s.a)(en(),p.a.greaterThan("small")(nn())),rn=t(17),an=t(20);var cn=Object(rn.b)({favorites:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TO_FAVORITE":return[].concat(Object(an.a)(n),[e.favorite]);default:return n}},properties:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FILL_PROPERTIES":return Object(an.a)(e.properties);default:return n}}}),on=Object(rn.c)(cn);var ln=function(){return a.a.createElement(l.a,{store:on},a.a.createElement(o.a,null,a.a.createElement(w,null),a.a.createElement(Z,null),a.a.createElement(tn,null)))};c.a.render(a.a.createElement(ln,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5b02dcc0.chunk.js.map