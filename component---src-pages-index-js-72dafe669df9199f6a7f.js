(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(162),s=a(179),l=a(180),o=a.n(l),d=function(){return i.a.createElement(n.b,{query:"1390692316",render:function(e){return i.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},c=a(168),u=a(166),f=a(181),p=a.n(f);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(u.a,{title:"Home"}),i.a.createElement("div",{className:p.a.titleGrid},i.a.createElement("div",{className:p.a.titleImage},i.a.createElement(d,null)),i.a.createElement("div",{className:p.a.titleText},i.a.createElement("h1",null,"Thoughts and Doodles from a JavaScript Developer"),i.a.createElement("pre",null,"... it's a work in progress :)"))),i.a.createElement("h2",null,"Blog Posts"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/blog/2019-06-20-lil-swimmer/"},"2019-06-20: Revisiting an old Doodle"))),i.a.createElement("h2",null,"Code Doodles"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/lil-swimmer/"},'► Play "Lil Swimmer"'))))}},162:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),i=a.n(r),n=a(5),s=a.n(n),l=a(40),o=a.n(l);a.d(t,"a",function(){return o.a});a(163);var d=i.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,s=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,s&&n(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(d.Consumer,null,function(e){return i.a.createElement(c,{data:t,query:a,render:r||n,staticQueryData:e})})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},163:function(e,t,a){var r;e.exports=(r=a(165))&&r.default||r},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Haukenaut Blog"}}}}},165:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),i=a.n(r),n=a(5),s=a.n(n),l=a(64),o=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},166:function(e,t,a){"use strict";var r=a(167),i=a(0),n=a.n(i),s=a(5),l=a.n(s),o=a(170),d=a.n(o);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=r.data.site,o=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=c},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Haukenaut Blog",description:"Thoughts and Doodles from a JavaScript Developer.",author:"@gatsbyjs"}}}}},168:function(e,t,a){"use strict";var r=a(164),i=a(0),n=a.n(i),s=a(5),l=a.n(s),o=a(162),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"#0b6b50",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(169),function(e){var t=e.children;return n.a.createElement(o.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear()," Daniel Haukenes Miller, Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});u.propTypes={children:l.a.node.isRequired};t.a=u},179:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAFaklEQVQ4yx2U+0/b5xXG/QdM2lSlFDDGYAPGYC42BkJtB9uAwVxsczU4DvdwMTSBEpMl2NjczCVAoHG5tCGkK01Cw70JokmXbW2zqpmqSNMmbaombT+sf0DV3z97lx+OXp3vV+/zPud5zjmSs7/+i9cnj3h1vMvL40NePT3hL08O+dvXL/jnt7/n2dotHoZHuDPQyVz3RXrLrZxXyMlKlKOOl5Ea+w4pMTFkparRFpiR2PojDNkreK+smKEyCyFXJZMuGxv9bZwuBgm11NNdWkqLuZgeAfb/UEvjSYyNJekdKalxMSKPJVelRpcnALtdDRx11xKqttBfpCNkOU+0wsC93os8vRVguMGF02DCrMliyFlGp9WAJkGOSiZCKiVDFodWFoNenYm+wIJkrbeRL30NRBpszHd5iPZ5eL44wY/fv+Q/f3/NN2fHnB0+4mDnPif3NogGbqI8F8vbv3oL6a/fQi2LJ1sw1GflkK7KQrLc0yzYmQh763i2/xEvXmzz8rsDfvrvv/nl55/5x/df8+MP33H86RZnu1v88Oc/EPBfYWH2Jr3t9WTJpWQKptkZuSTKFEhW+poJOoppM+rptxQyO+jmwVaAw99tEvL52L89wcrYEDnKdIYv1vDFwRSnp3PsbAe53FKBRgAqBUNFolSEAFwfbGfVW8uIuYCAWUuTOhlPfhZ70SV2IiFaKu04S230N9YzWF3MQrCTyxerUCUkkvR2HKokBSlymQCTk5QgQxJuruL96hJmWmpY9DoJuixEOj0crUV5/fQAb7WD8nwjm6MD+J0WStW5VOuFMTIlarkcZXwiKfFSkoVRqcIoyWp3HdNuO/eGO1judnOjtoyXT/Z4/tk2mxNBkdtF1BDqacdXVc7VWgd7mx/QZbfRdD4Hb3EerSYdblM+de/mI7lRZ6GnxECroYBLBi2tFwp5sDzD0focEQFyp7eF9R4vc31tBLu8HIvvr0536G9wYFIpseVm4NBnviESdpcjGaw24DXqaNLn0CB+2DUqFgYuc7AyxcHqHFvjQ2z4+9gKD/P4g0nOtpd5vnOHoVY36XHnyE6Sok9Nxm3Mo89uQuIq1FNbqKEmV4VVvFiQLGe8u51PxkfZCft5OB/kk+nr7Iqp+fx2mMM705zdX+Xe0gy1lgvohMv5acnoVAoK1WlIzqfJKclQCMB0+ipMuIvyuNboFCV6CDQ7WLvWy+ZvfWyM+YiO9rB0pZ39D2eZGOymvaacXFksxVkpmMV9Y2Y6kgtqkahTKU1XsCVK++PGHCfzN1m/MUCfq4pQm1tI0EZEaBnuaGLW186nS2EcpiK6HHY6HFWUaDMxatTU2axIrBlKKrUaAt56ThZCnK5M82x1mv3IGDc7mumwlzDS7GSgtpSuSjNbU6MEBjpQiOVQlp+Lv70ZX0sjodGrfHhrAkmJRsG4p4Zv7y7yp7tC8PUFzlanOFoYY3N8mEuVRmwFOVQU6Gg0i6UR8eMsuYD03G/IVsgoMxWyIgbgycO77N+PIhltqnxT4lfRSZ6sBNmfH+PRxAhnm4t8NOWnuaIYVXISGfJEOusq2Zr1CzOMYinI0KYk4CkpYuG9Tuav+bgdGkGyJ1w8WZri6e1JvozOcLo8zsNJP+vXfTSZi0RLiNGSJqCMjWFIaLgj5HBXWd8A6tKU6EVnXLYZmW5zMdHqQPJ4IcjRygR7QuhHkSAPpgN8LjbJ7vT71IuFoVMmCiYycpLjcImmv+KppcZcSIFagSlbQZFGSWleBjc8ojN6GpF8Nhfmseipg5UZdoUR2+N+1q5f5ePAVcYu1VOcmYY5OxVjRhIGEdbcFKzaNCxa1ZvTqkvDkJOJ06xnXDD8H9QrUK0y0uAfAAAAAElFTkSuQmCC",aspectRatio:1,src:"/haukenaut-blog/static/89ea87cc8991077951fabfbc0bad85d6/728bb/haukenaut-dog.png",srcSet:"/haukenaut-blog/static/89ea87cc8991077951fabfbc0bad85d6/f0363/haukenaut-dog.png 270w,\n/haukenaut-blog/static/89ea87cc8991077951fabfbc0bad85d6/5364a/haukenaut-dog.png 540w,\n/haukenaut-blog/static/89ea87cc8991077951fabfbc0bad85d6/728bb/haukenaut-dog.png 1080w",sizes:"(max-width: 1080px) 100vw, 1080px"}}}}}},180:function(e,t,a){"use strict";var r=a(11);t.__esModule=!0,t.default=void 0;var i,n=r(a(8)),s=r(a(43)),l=r(a(96)),o=r(a(99)),d=r(a(0)),c=r(a(5)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,h=g&&window.IntersectionObserver,b=new WeakMap;var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:s,onError:c,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var S=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&h&&!t.critical&&!a.seenBefore;var r=t.critical||g&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,L=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:L?1:0,transition:I?"opacity "+b+"ms":"none"},l),R="boolean"==typeof h?"lightgray":h,A={transitionDelay:b+"ms"},O=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&A,l,f),N={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(m){var x=m;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&A)}),x.base64&&d.default.createElement(E,(0,o.default)({src:x.base64},N)),x.tracedSVG&&d.default.createElement(E,(0,o.default)({src:x.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(E,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},x))}}))}if(g){var M=g,V=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete V.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:R,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},I&&A)}),M.base64&&d.default.createElement(E,(0,o.default)({src:M.base64},N)),M.tracedSVG&&d.default.createElement(E,(0,o.default)({src:M.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,M.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),d.default.createElement(E,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:w},M))}}))}return null},t}(d.default.Component);S.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:w,sizes:L,fixed:w,fluid:L,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var I=S;t.default=I}}]);
//# sourceMappingURL=component---src-pages-index-js-72dafe669df9199f6a7f.js.map