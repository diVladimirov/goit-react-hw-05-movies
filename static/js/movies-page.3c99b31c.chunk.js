"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{9956:function(n,t,e){e.d(t,{l:function(){return c},B:function(){return p}});var r,i,o=e(168),a=e(5751),c=a.ZP.h1(r||(r=(0,o.Z)(["\n  text-align: center;\n  color: #3807fd;\n"]))),p=a.ZP.ul(i||(i=(0,o.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])))},3862:function(n,t,e){e.d(t,{tN:function(){return p},l_:function(){return u},OQ:function(){return l}});var r,i,o,a=e(168),c=e(5751),p=c.ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n"]))),u=c.ZP.input(i||(i=(0,a.Z)(["\n  display: inline-block;\n  width: 200px;\n  font: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  padding: 8px 16px;\n  ::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),l=c.ZP.button(o||(o=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #10a446;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #f2e310;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"])))},7479:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(8152),i=e(2791),o=e(4390),a=e(9271),c=e(1523),p=e(3862),u=e(9956),l=e(184),s=function(n){var t=n.handleSubmit,e=n.moviesList,r=(0,a.$B)().url,i=(0,a.TH)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(p.tN,{onSubmit:t,children:[(0,l.jsx)(p.l_,{type:"text",placeholder:"Enter movie to find...",name:"movieToFind"}),(0,l.jsx)(p.OQ,{type:"submit",children:"Search Movies"})]}),(0,l.jsx)(u.B,{children:e&&e.map((function(n){var t=n.original_title,e=n.id,o=n.backdrop_path,a=n.title,p=n.poster_path;return(0,l.jsx)("li",{children:(0,l.jsxs)(c.rU,{to:{pathname:"".concat(r,"/").concat(e),state:{from:i}},children:[(0,l.jsx)("p",{children:t}),o?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(o),alt:a}):(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(p),alt:a})]})},e)}))})]})},d=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],c=t[1],p=(0,a.k6)(),u=(0,a.TH)(),d=u.pathname,f=u.search;(0,i.useEffect)((function(){var n=f.slice(12,f.length);""!==n&&(0,o.B8)(n).then((function(n){var t=n.data;c(t.results)})).catch((function(n){console.log(n)}))}),[f]);return(0,l.jsx)(s,{onSubmit:function(n){n.preventDefault(),console.log(n.target),p.push({pathname:d,search:"query=".concat(n.target.movieToFind.value)}),n.target.movieToFind.value=""},moviesList:e})}},4390:function(n,t,e){e.d(t,{V9:function(){return c},wr:function(){return p},B8:function(){return u}});var r=e(4569),i=e.n(r),o="?api_key=d0d2393ff57617bcd19c89c64bc8a08d",a="https://api.themoviedb.org/3",c=function(n){return i().get("\n  ".concat(a,"/movie/").concat(n).concat(o,"&append_to_response=credits,reviews"))},p=function(){return i().get("".concat(a,"/trending/movie/day").concat(o))},u=function(n){return i().get("".concat(a,"/search/movie").concat(o,"&query=").concat(n))}}}]);
//# sourceMappingURL=movies-page.3c99b31c.chunk.js.map