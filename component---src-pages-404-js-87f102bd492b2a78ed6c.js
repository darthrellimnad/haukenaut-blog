(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(160),o=a(164),l=a(165);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"Nothing to see here, move along!"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},160:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(40),c=a.n(l);a.d(t,"a",function(){return c.a});a(161);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Haukenaut Blog"}}}}},163:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),l=a(64),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){"use strict";var n=a(162),r=a(0),i=a.n(r),o=a(5),l=a.n(o),c=a(160),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#0b6b50",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:l.a.string},s.defaultProps={siteTitle:""};var u=s,d=(a(167),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," Daniel Haukenes Miller, Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d},165:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),o=a(5),l=a.n(o),c=a(168),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Haukenaut Blog",description:"Thoughts and Doodles from a JavaScript Developer.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-87f102bd492b2a78ed6c.js.map