"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{3403:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(2982),a=n(5861),o=n(885),i=n(7757),u=n.n(i),c=n(2791),s=n(501),l=n(6871),f="HomePage_homepage__list__NWZiT",p="HomePage_homepage__item__487aT",m="HomePage_homepage__link__dd04z",d=n(4569),h=n.n(d);function v(){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("https://api.themoviedb.org/3/trending/movie/week?api_key=b0b2ab4c759c38b967f7e88f564a31ce").then((function(e){return e.data.results.map((function(e){return{id:e.id,title:e.title}}))}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(184);function g(){var e=(0,l.TH)(),t=(0,c.useState)((function(){var e;return null!==(e=localStorage.getItem("fetchDate"))&&void 0!==e?e:Date.now()})),n=(0,o.Z)(t,2),i=n[0],d=n[1],h=(0,c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("trendMovies")))&&void 0!==e?e:""})),_=(0,o.Z)(h,2),g=_[0],w=_[1];return(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Date.now()-i,6e5,!(t<6e5&&""!==g)){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,v();case 7:n=e.sent,w((0,r.Z)(n)),localStorage.setItem("trendMovies",JSON.stringify(n)),d(Date.now()),localStorage.setItem("fetchDate",Date.now()),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,g]),(0,b.jsx)("div",{children:(0,b.jsx)("ul",{className:f,children:g&&g.map((function(t){var n=t.id,r=t.title;return(0,b.jsx)("li",{className:p,children:(0,b.jsx)(s.OL,{to:"movies/".concat(n),state:{from:e,label:"back to popular movies",originPath:"/"},className:m,children:r})},n)}))})})}},2982:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(907);var a=n(181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=home-page.cc31443e.chunk.js.map