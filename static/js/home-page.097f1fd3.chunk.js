"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{9956:function(t,n,r){r.d(n,{l:function(){return o},B:function(){return u}});var e,c,a=r(168),i=r(5751),o=i.ZP.h1(e||(e=(0,a.Z)(["\n  text-align: center;\n  color: #3807fd;\n"]))),u=i.ZP.ul(c||(c=(0,a.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},6165:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e=r(8152),c=r(2791),a=function(t){return t.map((function(t){return{backdrop_path:t.backdrop_path,title:t.title,id:t.id}}))},i=r(4390),o=r(1523),u=r(9271),s=r(9956),d=r(184),p=function(t){var n=t.films,r=(0,u.TH)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.l,{children:"Trending Today"}),(0,d.jsx)(s.B,{children:n&&n.map((function(t){var n=t.id,e=t.title,c=t.backdrop_path,a=t.poster_path;return(0,d.jsx)("li",{children:(0,d.jsxs)(o.rU,{to:{pathname:"/movies/".concat(n),state:{from:r}},children:[(0,d.jsx)("p",{children:e}),c?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:e}):(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:e})]})},n)}))})]})},l=function(){var t=(0,c.useState)([]),n=(0,e.Z)(t,2),r=n[0],o=n[1];return(0,c.useEffect)((function(){(0,i.wr)().then((function(t){var n=t.data;o(a(n.results))}))}),[]),(0,d.jsx)(p,{films:r})}},4390:function(t,n,r){r.d(n,{V9:function(){return o},wr:function(){return u},B8:function(){return s}});var e=r(4569),c=r.n(e),a="?api_key=d0d2393ff57617bcd19c89c64bc8a08d",i="https://api.themoviedb.org/3",o=function(t){return c().get("\n  ".concat(i,"/movie/").concat(t).concat(a,"&append_to_response=credits,reviews"))},u=function(){return c().get("".concat(i,"/trending/movie/day").concat(a))},s=function(t){return c().get("".concat(i,"/search/movie").concat(a,"&query=").concat(t))}}}]);
//# sourceMappingURL=home-page.097f1fd3.chunk.js.map