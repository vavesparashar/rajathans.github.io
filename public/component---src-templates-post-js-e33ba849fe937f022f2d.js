(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6qSS":function(e,t,r){"use strict";r.r(t);r("q1tI");var a=r("9eSz"),n=r.n(a),i=r("A2+M"),o=r("wtQ5"),s=r("qKvR"),l=r("VUD3"),c=r("7oih"),d=r("xsmR"),u=r("Ke0l"),f={name:"i9gxme",styles:"flex-grow:1;"},p=function(e){e.url,e.title,e.twitterHandle;var t=Object(u.c)();return Object(s.d)("div",{css:Object(s.c)("display:flex;align-items:center;justify-content:flex-start;div{margin-right:20px;cursor:pointer;:hover{color:",t.colors.primary,";}}span{margin-right:20px;font-size:70%;text-transform:uppercase;line-height:2.5;opacity:0.7;}")},Object(s.d)("div",{css:f}))},g=r("6v7h"),m=r.n(g),h=r("Sw63");r.d(t,"default",(function(){return O})),r.d(t,"pageQuery",(function(){return v}));var b={name:"1age63q",styles:"width:100%;display:flex;"},y={name:"1u211r5",styles:"text-align:center;margin-bottom:20px;"};function O(e){var t=e.data,r=t.site,a=t.mdx,u=e.pageContext,f=(u.next,u.prev,a.frontmatter.author||m.a.author),g=a.frontmatter.date,O=a.frontmatter.title,v=a.frontmatter.banner;return Object(s.d)(c.a,{site:r,frontmatter:a.frontmatter},Object(s.d)(o.a,{frontmatter:a.frontmatter,isBlogPost:!0}),Object(s.d)("article",{css:b},Object(s.d)(l.a,null,Object(s.d)("h1",{css:y},O),Object(s.d)("div",{css:Object(s.c)("display:flex;justify-content:center;margin-bottom:20px;h3,span{text-align:center;font-size:15px;opacity:0.6;font-family:",d.b.regular,",sans-serif;font-weight:normal;margin:0 5px;}")},f&&Object(s.d)("h3",null,f),f&&Object(s.d)("span",null,"—"),g&&Object(s.d)("h3",null,g)),v&&Object(s.d)("div",{css:Object(s.c)("padding:30px;",h.b,"{padding:0;}")},Object(s.d)(n.a,{sizes:v.childImageSharp.fluid,alt:r.siteMetadata.keywords.join(", ")})),Object(s.d)("br",null),Object(s.d)(i.MDXRenderer,null,a.body))),Object(s.d)(l.a,{noVerticalPadding:!0},Object(s.d)(p,{url:m.a.siteUrl+"/"+a.frontmatter.slug+"/",title:O,twitterHandle:m.a.twitterHandle}),Object(s.d)("br",null)))}var v="1385080385"},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("3nLz");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),g=function(e){var t=u(e),r=f(t);return p[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function O(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function v(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function j(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function w(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function S(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(L,(0,l.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},L=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,p=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},g,{onLoad:o,onError:d,onClick:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!m&&b&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||h&&(m||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,S=e.loading,x=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:P?1:0,transition:R?"opacity "+b+"ms":"none"},s),k="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&C,{},s,{},f),q={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:v};if(g){var D=g,M=D[0];return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),k&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&C)}),M.base64&&c.default.createElement(I,{src:M.base64,spreadProps:q,imageVariants:D,generateSources:w}),M.tracedSVG&&c.default.createElement(I,{src:M.tracedSVG,spreadProps:q,imageVariants:D,generateSources:j}),this.state.isVisible&&c.default.createElement("picture",null,O(D),c.default.createElement(L,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:r,title:t,loading:S},M,{imageVariants:D}))}}))}if(m){var T=m,N=T[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},i);return"inherit"===i.display&&delete G.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},k&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:k,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},R&&C)}),N.base64&&c.default.createElement(I,{src:N.base64,spreadProps:q,imageVariants:T,generateSources:w}),N.tracedSVG&&c.default.createElement(I,{src:N.tracedSVG,spreadProps:q,imageVariants:T,generateSources:j}),this.state.isVisible&&c.default.createElement("picture",null,O(T),c.default.createElement(L,{alt:r,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:S,draggable:x})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:r,title:t,loading:S},N,{imageVariants:T}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});P.propTypes={resolutions:R,sizes:z,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=P;t.default=k},"A2+M":function(e,t,r){var a=r("X8hv");e.exports={MDXRenderer:a}},X8hv:function(e,t,r){function a(e,t,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n(i,r.prototype),i}).apply(null,arguments)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("xtjI"),r("Dq+y"),r("Ggvi"),r("YbXK"),r("cFtU"),r("m210"),r("4DPX"),r("rzGZ"),r("LagC"),r("q8oJ"),r("8npG"),r("nWfQ"),r("nWfQ"),r("LagC"),r("YbXK"),r("cFtU"),r("q8oJ"),r("m210"),r("xtjI"),r("4DPX"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi");var c=r("q1tI"),d=r("E/Ix"),u=d.useMDXComponents,f=d.mdx,p=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,o=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["scope","components","children"]),l=u(r),d=p(t),g=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:f},d),t=Object.keys(e),r=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(i(t),[""+n])).apply(void 0,[{}].concat(i(r)))}),[n,t]);return c.createElement(g,s({components:l},o))}},"eXD+":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rajat Hans","description":"This is where I post stuff about indie hacking and tech entrepreneurship!","canonicalUrl":"https://rajathans.github.io","image":"images/logo.png","author":{"name":"rajathans"},"organization":{"name":"rajathans.github.io","url":"https://rajathans.github.io","logo":"images/logo.png"},"social":{"twitter":"@rajathans9","fbAppID":""}}}}}')},nWfQ:function(e,t,r){var a=r("P8UN"),n=r("nsRs"),i=r("nONw"),o=r("1a8y"),s=r("BjK0"),l=r("96qb"),c=r("16Xr"),d=(r("emib").Reflect||{}).construct,u=l((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),f=!l((function(){d((function(){}))}));a(a.S+a.F*(u||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!u)return d(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var a=[null];return a.push.apply(a,t),new(c.apply(e,a))}var l=r.prototype,p=n(s(l)?l:Object.prototype),g=Function.apply.call(e,p,t);return s(g)?g:p}})},wtQ5:function(e,t,r){"use strict";var a=r("eXD+"),n=r("33yf"),i=r.n(n),o=r("q1tI"),s=r.n(o),l=r("TJpk"),c=r.n(l),d=r("Wbzz"),u=(r("pJf4"),r("qKvR")),f=s.a.memo((function(e){var t=e.author,r=e.canonicalUrl,a=e.datePublished,n=e.defaultTitle,i=e.description,o=e.image,s=e.isBlogPost,l=e.organization,d=e.title,f=e.url,p=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:d,alternateName:n}],g=s?[].concat(p,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":f,name:d,image:o}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:d,alternateName:n,headline:d,image:{"@type":"ImageObject",url:o},description:i,author:{"@type":"Person",name:t.name},publisher:{"@type":"Organization",url:l.url,logo:l.logo,name:l.name},mainEntityOfPage:{"@type":"WebSite","@id":r},datePublished:a}]):p;return Object(u.d)(c.a,null,Object(u.d)("script",{type:"application/ld+json"},JSON.stringify(g)))})),p=r("6v7h"),g=r.n(p),m=function(e){var t=e.postData,r=e.frontmatter,n=void 0===r?{}:r,o=e.postImage,l=e.isBlogPost;return Object(u.d)(d.StaticQuery,{query:"3550155404",render:function(e){var r=e.site.siteMetadata,a=n||t.childMarkdownRemark.frontmatter||{},d=l?a.title:g.a.siteTitle,p=a.description||r.description,m=o?""+r.canonicalUrl+o:r.image,h=a.slug?""+r.canonicalUrl+i.a.sep+a.slug:r.canonicalUrl,b=!!l&&a.datePublished;return Object(u.d)(s.a.Fragment,null,Object(u.d)(c.a,null,Object(u.d)("title",null,d),Object(u.d)("meta",{name:"description",content:p}),Object(u.d)("meta",{name:"image",content:m}),Object(u.d)("meta",{property:"og:url",content:h}),l?Object(u.d)("meta",{property:"og:type",content:"article"}):null,Object(u.d)("meta",{property:"og:title",content:d}),Object(u.d)("meta",{property:"og:description",content:p}),Object(u.d)("meta",{property:"og:image",content:m}),Object(u.d)("meta",{property:"fb:app_id",content:r.social.fbAppID}),Object(u.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(u.d)("meta",{name:"twitter:creator",content:r.social.twitter}),Object(u.d)("meta",{name:"twitter:title",content:d}),Object(u.d)("meta",{name:"twitter:description",content:p}),Object(u.d)("meta",{name:"twitter:image",content:m})),Object(u.d)(f,{isBlogPost:l,url:h,title:d,image:m,description:p,datePublished:b,canonicalUrl:r.canonicalUrl,author:r.author,organization:r.organization,defaultTitle:r.title}))},data:a})};m.defaultProps={isBlogPost:!1,postData:{childMarkdownRemark:{}},postImage:null};t.a=m}}]);
//# sourceMappingURL=component---src-templates-post-js-e33ba849fe937f022f2d.js.map