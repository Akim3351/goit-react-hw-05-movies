"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{2924:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var i=a(8683),s=a(5861),r=a(885),n=a(7757),c=a.n(n),o=a(2791),_=a(3504),l=a(6871),u=a(4569),p=a.n(u);function v(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=b0b2ab4c759c38b967f7e88f564a31ce&language=en-US&external_source=imdb_id")).then((function(e){var t=e.data;return{id:t.id,title:t.title,poster_path:t.poster_path,popularity:t.popularity,overview:t.overview,genres:t.genres,backdrop_path:t.backdrop_path}}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h="MovieDetailsPage_movie__wrapper__+EvMa",m="MovieDetailsPage_movie__main__LEZc4",g="MovieDetailsPage_movie__poster__tcEZS",f="MovieDetailsPage_descr__wrapper__Y9+gX",x="MovieDetailsPage_descr__subtitle__g3iLt",b="MovieDetailsPage_genres__list__XlwMR",j="MovieDetailsPage_descr__overwiew__c6YmI",w="MovieDetailsPage_backbutton__YEzyu",k="MovieDetailsPage_additional__subheader__D-to+",M="MovieDetailsPage_movie__navigation__KFGxb",D="MovieDetailsPage_link__RKs6x",P="MovieDetailsPage_activeLink__Yz-m1 MovieDetailsPage_link__RKs6x",N=a(7692),y=a(184);function Z(){var e=(0,l.s0)(),t=(0,l.UO)().movieId,a=(0,o.useState)(""),n=(0,r.Z)(a,2),u=n[0],p=n[1];(0,o.useEffect)((function(){function e(){return(e=(0,s.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.id!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(t);case 4:a=e.sent,p((0,i.Z)({},a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,u.id]);var d=u.title,Z=u.poster_path,C=u.popularity,E=u.overview,L=u.genres,O=u.backdrop_path;if(u)return(0,y.jsxs)("div",{className:h,style:{background:"url(https://image.tmdb.org/t/p/original/".concat(O)},children:[(0,y.jsxs)("button",{className:w,type:"button",onClick:function(){e(-1)},children:[(0,y.jsx)(N.YiX,{}),"GO BACK"]}),(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)("img",{className:g,src:Z&&"https://image.tmdb.org/t/p/original/".concat(Z),alt:d}),(0,y.jsxs)("div",{className:f,children:[(0,y.jsx)("h2",{children:d}),(0,y.jsxs)("p",{children:["Popularity: ",C]}),(0,y.jsx)("p",{className:x,children:"Overview"}),(0,y.jsx)("p",{className:j,children:E}),(0,y.jsx)("p",{className:x,children:"Genres"}),(0,y.jsx)("ul",{className:b,children:L.map((function(e){return(0,y.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:k,children:"Additional information"}),(0,y.jsxs)("nav",{className:M,children:[(0,y.jsx)(_.OL,{to:"cast",className:function(e){var t=e.isActive;return"".concat(t?P:D)},children:"Cast"}),(0,y.jsx)(_.OL,{to:"reviews",className:function(e){var t=e.isActive;return"".concat(t?P:D)},children:"Reviews"})]})]}),(0,y.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=movie-details-page.81d51b34.chunk.js.map