"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[347],{2924:function(e,a,i){i.r(a),i.d(a,{default:function(){return Z}});var t=i(8683),s=i(5861),r=i(885),n=i(7757),c=i.n(n),l=i(2791),o=i(3504),_=i(6871),v=i(4569),u=i.n(v);function d(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(c().mark((function e(a){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=b0b2ab4c759c38b967f7e88f564a31ce&language=en-US&external_source=imdb_id")).then((function(e){var a=e.data;return{id:a.id,title:a.title,poster_path:a.poster_path,popularity:a.popularity,overview:a.overview,genres:a.genres,backdrop_path:a.backdrop_path}}));case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h="MovieDetailsPage_movie__wrapper__+EvMa",g="MovieDetailsPage_movie__main__LEZc4",m="MovieDetailsPage_movie__poster__tcEZS",f="MovieDetailsPage_descr__wrapper__Y9+gX",x="MovieDetailsPage_descr__subtitle__g3iLt",b="MovieDetailsPage_genres__list__XlwMR",j="MovieDetailsPage_descr__overwiew__c6YmI",k="MovieDetailsPage_backlink__5kTdd",w="MovieDetailsPage_additional__subheader__D-to+",P="MovieDetailsPage_movie__navigation__KFGxb",M="MovieDetailsPage_link__RKs6x",D="MovieDetailsPage_activeLink__Yz-m1 MovieDetailsPage_link__RKs6x",N=i(7692),y=i(184);function Z(){var e,a,i,n,v=(0,_.TH)(),u=(0,_.UO)().movieId,p=(0,l.useState)(""),Z=(0,r.Z)(p,2),L=Z[0],E=Z[1];(0,l.useEffect)((function(){function e(){return(e=(0,s.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.id!==u){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,d(u);case 4:a=e.sent,E((0,t.Z)({},a));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u,L.id]);var O=L.title,R=L.poster_path,Y=L.popularity,A=L.overview,C=L.genres,K=L.backdrop_path,S=null!==(e=null===v||void 0===v||null===(a=v.state)||void 0===a?void 0:a.originPath)&&void 0!==e?e:"/",U=null!==(i=null===v||void 0===v||null===(n=v.state)||void 0===n?void 0:n.label)&&void 0!==i?i:"back";if(L)return(0,y.jsxs)("div",{className:h,style:{background:"url(https://image.tmdb.org/t/p/original/".concat(K)},children:[(0,y.jsxs)(o.rU,{to:S,className:k,children:[(0,y.jsx)(N.YiX,{}),null!==U&&void 0!==U?U:"go back"]}),(0,y.jsxs)("div",{className:g,children:[(0,y.jsx)("img",{className:m,src:R&&"https://image.tmdb.org/t/p/original/".concat(R),alt:O}),(0,y.jsxs)("div",{className:f,children:[(0,y.jsx)("h2",{children:O}),(0,y.jsxs)("p",{children:["Popularity: ",Y]}),(0,y.jsx)("p",{className:x,children:"Overview"}),(0,y.jsx)("p",{className:j,children:A}),(0,y.jsx)("p",{className:x,children:"Genres"}),(0,y.jsx)("ul",{className:b,children:C.map((function(e){return(0,y.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:w,children:"Additional information"}),(0,y.jsxs)("nav",{className:P,children:[(0,y.jsx)(o.OL,{to:"cast",state:{originPath:S,label:U},className:function(e){var a=e.isActive;return"".concat(a?D:M)},children:"Cast"}),(0,y.jsx)(o.OL,{to:"reviews",state:{originPath:S,label:U},className:function(e){var a=e.isActive;return"".concat(a?D:M)},children:"Reviews"})]})]}),(0,y.jsx)(_.j3,{})]})}}}]);
//# sourceMappingURL=movie-details-page.bee2473e.chunk.js.map