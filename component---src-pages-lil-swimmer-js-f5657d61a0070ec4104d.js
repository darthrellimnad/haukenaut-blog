(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i.n(s),r=i(162),n=function(){function t(t,e){this.context=null,this.tpview=null,this.state=null,this.delay=null,this.lastUpdateTime=null,this.context=t,this.tpview=e,this.delay=1e3/this.tpview.getMaxFps()}var e=t.prototype;return e.run=function(){var e,i,s,a,r,n,o=this,l=this.tpview,h=l.getLayers(),u=l.getMaxFrameSkips(),c=l.getNumLayers(),d=null,p=0;if(this.state=t.RUNNING,this.lastUpdateTime||(this.lastUpdateTime=(new Date).getTime()),this.state===t.RUNNING){if(!(d=this.context))return this.state=t.KILLED,void(this.lastUpdateTime=null);for(a=0,p=0,r=(s=(new Date).getTime())-this.lastUpdateTime;p<c;)(n=h[p]).update(r),n.draw(d),p++;if(e=(new Date).getTime()-s,i=this.delay-e,this.lastUpdateTime=s,i>0)return void setTimeout(function(){return o.run()},i);for(;i<0&&a<u;){for(p=0,r=(s=(new Date).getTime())-this.lastUpdateTime;p<c;)(n=h[p]).update(r),p++;e=(new Date).getTime()-s,i=this.delay-e,this.lastUpdateTime=s,a++}setTimeout(function(){return o.run()},0)}else this.lastUpdateTime=null},e.kill=function(){this.state=t.KILLED},e.getState=function(){return this.state},t}();n.RUNNING="RUNNING",n.KILLED="KILLED";var o=n,l=function(){function t(e){this.context=null,this.renderer=null,this.maxFps=null,this.maxFrameSkips=null,this.maxLayers=null,this.numLayers=0,this.layers=null,this.context=e,this.maxFps=t.DEFAULT_MAX_FPS,this.maxFrameSkips=t.DEFAULT_MAX_FRAME_SKIPS,this.registerMaxLayers(t.DEFAULT_MAX_LAYERS)}var e=t.prototype;return e.registerMaxLayers=function(t){return null==this.layers&&(this.maxLayers=t,this.layers=[],!0)},e.registerLayer=function(t){if(null==this.layers)return!1;for(var e=0;null!=this.layers[e];)e++;return!(e>=this.maxLayers)&&(this.layers[e]=t,this.numLayers+=1,!0)},e.getLayers=function(){return this.layers},e.getNumLayers=function(){return this.numLayers},e.getMaxFps=function(){return this.maxFps},e.getMaxFrameSkips=function(){return this.maxFrameSkips},e.unpause=function(t){this.renderer&&this.renderer.getState()!==o.KILLED||(this.renderer=t),this.renderer.run()},e.pause=function(){this.renderer&&this.renderer.kill()},t}();l.DEFAULT_MAX_LAYERS=5,l.DEFAULT_MAX_FPS=60,l.DEFAULT_MAX_FRAME_SKIPS=5,l.LOG_TAG="TinyPixView";var h=l,u=(i(185),i(42),400),c=480,d=16,p=480,m=640,f=function(){function t(t){this.color="#000000",this.player=t}var e=t.prototype;return e.update=function(t){},e.draw=function(t){var e=this.player.hit_count.toString(10),i=Math.floor(this.player.distance_traveled).toString(10);t.fillStyle=this.color,t.fillRect(0,0,m,p),t.font="16px Arial",t.fillStyle="#FFFFFF",t.fillText("HIT COUNT:",10,30),t.fillText(e,10,48),t.fillStyle="#FFFFFF",t.fillText("Distance:",10,100),t.font="12px Arial",t.fillText(i,10,114)},t}(),y=(i(176),function(){function t(t,e,i,s,a,r){this.x=t,this.y=e,this.max_radius=i,this.color=s,this.out_time=a,this.in_time=r,this.radius=0,this.pulse_direction=1,this.anim_time=0}var e=t.prototype;return e.update=function(t){this.anim_time+=t,1===this.pulse_direction?this.anim_time>=this.out_time&&(this.anim_time=this.anim_time%this.out_time,this.pulse_direction*=-1):this.anim_time>=this.in_time&&(this.anim_time=this.anim_time%this.in_time,this.pulse_direction*=-1),1===this.pulse_direction?this.radius=this.max_radius*(this.anim_time/this.out_time):this.radius=this.max_radius-this.max_radius*(this.anim_time/this.in_time)},e.draw=function(t){t.beginPath(),t.moveTo(this.x,this.y),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill()},t}()),v=function(){function t(t,e,i){this.x=t,this.y=e,this.r=0,this.color=i,this.tailamp=3,this.taillength=20,this.tailPos=0,this.tailspeed=.03,this.taildir=1,this.nucleus=new y(0,0,4,"#FF5555",200,800)}var e=t.prototype;return e.update=function(t){var e=this.tailPos+this.taildir*(this.tailspeed*t),i=Math.abs(e);if(i>this.tailamp){var s=i-this.tailamp;this.tailPos=this.taildir>0?this.tailamp-s:-1*this.tailamp+s,this.taildir*=-1}else this.tailPos=e;this.nucleus.update(t)},e.draw=function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.save(),t.save(),t.scale(1,2),t.beginPath(),t.moveTo(0,0),t.arc(0,0,5,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.restore(),this.nucleus.draw(t),t.beginPath();var e=this.taillength/2,i=e/2;t.moveTo(0,10),t.quadraticCurveTo(this.tailPos,10+i,0,10+e),t.quadraticCurveTo(-1*this.tailPos,10+3*i,0,10+this.taillength),t.strokeStyle=this.color,t.stroke(),t.restore(),t.restore()},t}(),g=function(){function t(){this.sprite=new v(m/2,p-120,"#FFFFFF"),this.speed=0,this.speedX=0,this.max_speed=2,this.accel=8e-5,this.deaccel=1e-4,this.hit_count=0,this.distance_traveled=0,this.leftDown=!1,this.rightDown=!1}var e=t.prototype;return e.rot_to_zero=function(e){var i=t.ROT_TO_ZERO_SPEED;this.sprite.r<0?this.sprite.r=Math.min(this.sprite.r+i*e,0):this.sprite.r>0&&(this.sprite.r=Math.max(this.sprite.r-i*e,0))},e.onZDown=function(){this.sprite.r=0},e.onXDown=function(){this.sprite.r+=Math.PI/4},e.update=function(e){this.leftDown&&this.rightDown?(this.speed+=e*this.accel,this.speed=this.speed>=this.max_speed?this.max_speed:this.speed,this.sprite.tailamp=5,this.sprite.tailspeed=.1):(this.leftDown&&(this.sprite.r-=t.TURN_SPEED*e),this.rightDown&&(this.sprite.r+=t.TURN_SPEED*e),this.speed-=e*this.deaccel,this.speed=this.speed<=0?0:this.speed,this.sprite.tailamp=3,this.sprite.tailspeed=.02),this.sprite.r<0?this.sprite.r=Math.max(t.MIN_R,this.sprite.r):this.sprite.r>0&&(this.sprite.r=Math.min(t.MAX_R,this.sprite.r)),this.rot_to_zero(e);var i=(t.MAX_SPEED_X*(this.speed/this.max_speed)+.01)*(Math.abs(this.sprite.r)/(Math.PI/2));this.sprite.r<0&&(i*=-1),this.sprite.x+=i*e,this.distance_traveled+=this.speed*e,this.sprite.update(e)},e.draw=function(t){this.sprite.draw(t)},t}();g.MAX_SPEED_X=.5,g.MIN_R=-1*Math.PI/2,g.MAX_R=Math.PI/2,g.ROT_TO_ZERO_SPEED=Math.PI/2160,g.TURN_SPEED=Math.PI/720;var w=g,_=function(){function t(t,e){this.player=e,this.track=t}var e=t.prototype;return e.update=function(t){this.player.update(t);var e=this.player.sprite.x,i=this.track.x;e=Math.max(e,i+10),e=Math.min(e,i+this.track.width-10),this.player.sprite.x=e},e.draw=function(t){this.player.draw(t)},t}(),E=function(){function t(t,e,i,s,a){this.x=t,this.top=e+0,this.bottom=e+i+0,this.width=s,this.baseLength=i,this.velTop=0,this.velBottom=0,this.color="#0000FF",this.lengthMod=0,this.player=a,this.rand=80*Math.random()}var e=t.prototype;return e.update=function(t){var e=this.player,i=this.rand;this.top>p?(this.top=0-this.baseLength-i,this.bottom=0-i):(this.top+=t*(this.velTop+.6*e.speed),this.bottom+=t*(this.velBottom+.6*e.speed),this.lengthMod=40*e.speed);var s=Math.floor(100*((this.velTop+this.velBottom)/2+e.speed)),a=Math.min(s,255),r=Math.max(255-s,0),n=a<16?"0"+a.toString(16):a.toString(16),o=r<16?"0"+r.toString(16):r.toString(16);this.color="#"+n+"88"+o},e.draw=function(t){t.beginPath(),t.moveTo(this.x,this.top),t.lineTo(this.x,this.bottom+this.lengthMod),t.lineWidth=this.width,t.strokeStyle=this.color,t.stroke()},t}(),T=function(){function t(t,e){this.x=0,this.y=0,this.starlines=[],this.width=t,this.height=e,this.time=0,this.visibleTrackInterval=Math.PI,this.lWallTX=0,this.lWallBX=0,this.rWallTX=t,this.rWallBX=t}var e=t.prototype;return e.lWallFn=function(t){return 0},e.rWallFn=function(t){return this.width},e.update=function(t){var e=this.time+=t;this.lWallTX=this.lWallFn(e/1e3),this.rWallTX=this.rWallFn(e/1e3),this.lWallBX=this.lWallFn(e/1e3-this.visibleTrackInterval),this.rWallBX=this.rWallFn(e/1e3-this.visibleTrackInterval);for(var i=0,s=this.starlines.length;i<s;i++)this.starlines[i].update(t)},e.draw=function(t){t.save(),t.translate(this.x,this.y),t.beginPath(),t.moveTo(this.lWallTX,0),t.lineTo(this.lWallBX,this.height),t.lineWidth=2,t.strokeStyle="#FFFFFF",t.stroke(),t.beginPath(),t.moveTo(this.rWallTX,0),t.lineTo(this.rWallBX,this.height),t.lineWidth=2,t.strokeStyle="#FFFFFF",t.stroke();for(var e=0,i=this.starlines.length;e<i;e++)this.starlines[e].draw(t);t.restore()},t}(),x=function(){function t(t,e,i,s,a,r){this.x=t,this.y=e,this.radius=i,this.speed=s,this.color="#00FF00",this.offscreen=!1,this.hitflag=!1,this.player=a,this.player_radius=a.sprite.nucleus.max_radius,this.offsetTop=r}var e=t.prototype;return e.update=function(t){var e=this.player,i=e.speed-this.speed;this.y+=i*t,Math.sqrt(Math.pow(e.sprite.x-this.x,2)+Math.pow(e.sprite.y-this.y,2))<this.radius+this.player_radius?!1===this.hitflag&&(this.hitflag=!0,this.player.hit_count++,this.color="#FF0000"):(this.hitflag=!1,this.color="#00FF00"),this.y<-3*this.radius||this.y>3*this.radius+this.offsetTop+c?this.offscreen=!0:this.offscreen=!1},e.draw=function(t){t.beginPath(),t.moveTo(this.x,this.y),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill()},t}(),M=function(){function t(t){this.objects=[],this.difficulty_increase_interval=3e4,this.last_diff=0,this.x=0,this.y=0,this.player=t}var e=t.prototype;return e.init=function(t){for(var e=0;e<t;e++)this.spawn_obstacle()},e.spawn_obstacle=function(){var t=6+Math.floor(9*Math.random()),e=this.x+t+Math.floor(Math.random()*(u-2*t)),i=this.player.speed-.5*Math.random();i=Math.min(i,1.6),this.objects.push(new x(e,-2*t,t,i,this.player,this.y))},e.update=function(e){var i=Math.floor(this.player.distance_traveled/this.difficulty_increase_interval);this.last_diff<i&&(this.objects.length<=t.MAX_PARTICLES&&this.spawn_obstacle(),this.last_diff=i);for(var s=0,a=this.objects.length;s<a;s++){var r=this.objects[s];if(r.offscreen){var n,o=6+Math.floor(9*Math.random()),l=this.x+o+Math.floor(Math.random()*(u-2*o));r.x=l,r.radius=o,r.y<0?(r.y=2*r.radius+this.y+c,n=this.player.speed+.1*Math.random(),r.speed=n):(r.y=-2*r.radius,n=this.player.speed-.4*Math.random(),r.speed=n),n=Math.min(n,1.6)}r.update(e)}},e.draw=function(t){for(var e=0,i=this.objects.length;e<i;e++)this.objects[e].draw(t)},t}();M.MAX_PARTICLES=40;var F=M,L=function(){var t=a.a.createRef();return Object(s.useEffect)(function(){var e=t.current.getContext("2d"),i=new h(e),s=new o(e,i),a=new w,r=function(t){return function(e){switch(e.code){case"KeyA":case"ArrowLeft":return void(t.leftDown=!0);case"KeyD":case"ArrowRight":return void(t.rightDown=!0);case"KeyZ":return void t.onZDown();case"KeyX":return void t.onXDown();default:return}}}(a),n=function(t){return function(e){switch(e.code){case"KeyA":case"ArrowLeft":return void(t.leftDown=!1);case"KeyD":case"ArrowRight":return void(t.rightDown=!1);default:return}}}(a),l=function(t){return function(e){t.pause()}}(i),y=function(t,e){return function(i){t.unpause(e)}}(i,s);return function(t,e,i){var s=u,a=c,r=d,n=p,o=m,l=new f(t),h=new T(s,a),y=new _(h,t),v=new F(t),g=(o-s)/2,w=(n-a)/2;h.x=v.x=g,h.y=v.y=w;for(var x=4;x<s;x+=8){var M=Math.floor(Math.random()*a),L=new E(x,M,r,1,t);L.velTop=.15,L.velBottom=.15,h.starlines.push(L)}setTimeout(function(){v.init(5)},5e3),e.registerLayer(l),e.registerLayer(h),e.registerLayer(v),e.registerLayer(y),e.unpause(i)}(a,i,s),document.addEventListener("keydown",r),document.addEventListener("keyup",n),window.addEventListener("focus",l),window.addEventListener("blur",y),function(){i.pause(),s.kill(),document.removeEventListener("keydown",r),document.removeEventListener("keyup",n),window.removeEventListener("focus",l),window.removeEventListener("blur",y)}}),a.a.createElement("div",{style:{width:"100%",height:"480px",position:"relative"}},a.a.createElement("canvas",{ref:t,width:"640",height:"480"}))};var b=i(168),D=i(166),S=i(221),P=i.n(S);e.default=function(){return a.a.createElement(b.a,null,a.a.createElement(D.a,{title:"Lil Swimmer"}),a.a.createElement("h1",null,"LilSwimmer"),a.a.createElement("div",{className:P.a.gameGrid},a.a.createElement("div",{className:P.a.game},a.a.createElement(L,null)),a.a.createElement("div",{className:P.a.controls},a.a.createElement("ul",null,a.a.createElement("li",null,"Hold down [LEFT] or [A] key to veer left"),a.a.createElement("li",null,"Hold down [RIGHT] or [D] key to veer right"),a.a.createElement("li",null,"Hold down [LEFT/A] and [RIGHT/D] keys to speed up"),a.a.createElement("li",null,"Do nothing to slow down"),a.a.createElement("li",null,"Sorry, touch screen not support atm :(")))),a.a.createElement("div",{style:{marginBottom:"1rem"}},a.a.createElement("p",null,"For background on this doodle, see related blog posts"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(r.a,{to:"/blog/2019-06-20-lil-swimmer/"},"2019-06-20: Revisiting an old Doodle"))),a.a.createElement(r.a,{to:"/"},"Go back to the homepage")))}},162:function(t,e,i){"use strict";i.d(e,"b",function(){return c});var s=i(0),a=i.n(s),r=i(5),n=i.n(r),o=i(40),l=i.n(o);i.d(e,"a",function(){return l.a});i(163);var h=a.a.createContext({});function u(t){var e=t.staticQueryData,i=t.data,s=t.query,r=t.render,n=i?i.data:e[s]&&e[s].data;return a.a.createElement(a.a.Fragment,null,n&&r(n),!n&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(t){var e=t.data,i=t.query,s=t.render,r=t.children;return a.a.createElement(h.Consumer,null,function(t){return a.a.createElement(u,{data:e,query:i,render:s||r,staticQueryData:t})})};c.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},163:function(t,e,i){var s;t.exports=(s=i(165))&&s.default||s},164:function(t){t.exports={data:{site:{siteMetadata:{title:"Haukenaut Blog"}}}}},165:function(t,e,i){"use strict";i.r(e);i(41);var s=i(0),a=i.n(s),r=i(5),n=i.n(r),o=i(65),l=function(t){var e=t.location,i=t.pageResources;return i?a.a.createElement(o.a,Object.assign({location:e,pageResources:i},i.json)):null};l.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},e.default=l},166:function(t,e,i){"use strict";var s=i(167),a=i(0),r=i.n(a),n=i(5),o=i.n(n),l=i(171),h=i.n(l);function u(t){var e=t.description,i=t.lang,a=t.meta,n=t.title,o=s.data.site,l=e||o.siteMetadata.description;return r.a.createElement(h.a,{htmlAttributes:{lang:i},title:n,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:n},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:l}].concat(a)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=u},167:function(t){t.exports={data:{site:{siteMetadata:{title:"Haukenaut Blog",description:"Thoughts and Doodles from a JavaScript Developer.",author:"@gatsbyjs"}}}}},168:function(t,e,i){"use strict";var s=i(164),a=i(0),r=i.n(a),n=i(5),o=i.n(n),l=i(162),h=function(t){var e=t.siteTitle;return r.a.createElement("header",{style:{background:"#0b6b50",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var u=h,c=(i(170),function(t){var e=t.children;return r.a.createElement(l.b,{query:"755544856",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,e),r.a.createElement("footer",null,"© ",(new Date).getFullYear()," Daniel Haukenes Miller, Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:s})});c.propTypes={children:o.a.node.isRequired};e.a=c},176:function(t,e,i){var s=i(9);s(s.P,"Array",{fill:i(220)}),i(66)("fill")},185:function(t,e,i){"use strict";i(219);var s=i(6),a=i(95),r=i(10),n=/./.toString,o=function(t){i(14)(RegExp.prototype,"toString",t,!0)};i(13)(function(){return"/a/b"!=n.call({source:"a",flags:"b"})})?o(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?a.call(t):void 0)}):"toString"!=n.name&&o(function(){return n.call(this)})},219:function(t,e,i){i(10)&&"g"!=/./g.flags&&i(12).f(RegExp.prototype,"flags",{configurable:!0,get:i(95)})},220:function(t,e,i){"use strict";var s=i(31),a=i(97),r=i(17);t.exports=function(t){for(var e=s(this),i=r(e.length),n=arguments.length,o=a(n>1?arguments[1]:void 0,i),l=n>2?arguments[2]:void 0,h=void 0===l?i:a(l,i);h>o;)e[o++]=t;return e}}}]);
//# sourceMappingURL=component---src-pages-lil-swimmer-js-f5657d61a0070ec4104d.js.map