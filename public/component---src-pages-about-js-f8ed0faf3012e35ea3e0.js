(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3XHS":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));a("v9g0"),a("q1tI");var i=a("9eSz"),r=a.n(i),n=a("qKvR"),s=a("VUD3"),o=a("wtQ5"),l=a("7oih"),d=a("JB2W"),c=a("Sw63"),u={name:"x566xh",styles:"margin-top:30px;margin-bottom:10px;"},f={name:"1q7njkh",styles:"margin-top:10px;"},p={name:"46b038",styles:"margin-top:30px;"},g={name:"15ijm9t",styles:"margin:50px 0;"};t.default=function(e){var t=e.data,a=t.site,i=t.allMdx,m=e.pageContext,h=m.pagination,b=(m.categories,h.page),y=h.nextPagePath,S=h.previousPagePath,v=b.map((function(e){return i.edges.find((function(t){return t.node.id===e}))})).filter((function(e){return void 0!==e}));return Object(n.d)(l.a,{site:a},Object(n.d)(o.a,null),Object(n.d)(s.a,{noVerticalPadding:!0},v.map((function(e){var t=e.node;return Object(n.d)("div",{key:t.id,css:Object(n.c)(":not(:first-of-type){margin-top:60px;",c.a,"{margin-top:40px;}",c.b,"{margin-top:20px;}}:first-of-type{margin-top:20px;",c.b,"{margin-top:20px;}}.gatsby-image-wrapper{}",c.b,"{padding:20px;}display:flex;flex-direction:column;")},t.frontmatter.banner&&Object(n.d)("div",{css:Object(n.c)("padding:60px 60px 40px 60px;",c.b,"{padding:20px;}")},Object(n.d)(d.a,{"aria-label":"View "+t.frontmatter.title+" article",to:"/"+t.fields.slug},Object(n.d)(r.a,{sizes:t.frontmatter.banner.childImageSharp.fluid}))),Object(n.d)("h2",{css:u},Object(n.d)(d.a,{"aria-label":"View "+t.frontmatter.title+" article",to:"/"+t.fields.slug},t.frontmatter.title)),Object(n.d)("p",{css:f},t.excerpt)," ",Object(n.d)(d.a,{to:"/"+t.fields.slug,"aria-label":'view "'+t.frontmatter.title+'" article'},"Read Article →"))})),Object(n.d)("div",{css:p},y&&Object(n.d)(d.a,{to:y,"aria-label":"View next page"},"Next Page →"),S&&Object(n.d)(d.a,{to:S,"aria-label":"View previous page"},"← Previous Page")),Object(n.d)("hr",{css:g})))};var m="4184737020"},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function j(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+d+s+o+a+i+t+n+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=d.default.createElement(I,(0,l.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,i(a),n):n},I=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,p=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:c,onClick:u,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,j=e.loading,x=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,l.default)({opacity:z?1:0,transition:P?"opacity "+b+"ms":"none"},o),R="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&V,{},o,{},f),T={title:t,alt:this.state.isVisible?"":a,style:C,className:p,itemProp:v};if(g){var q=g,N=q[0];return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&V)}),N.base64&&d.default.createElement(E,{src:N.base64,spreadProps:T,imageVariants:q,generateSources:w}),N.tracedSVG&&d.default.createElement(E,{src:N.tracedSVG,spreadProps:T,imageVariants:q,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(I,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:j,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:j},N,{imageVariants:q}))}}))}if(m){var M=m,W=M[0],U=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete U.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:R,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},P&&V)}),W.base64&&d.default.createElement(E,{src:W.base64,spreadProps:T,imageVariants:M,generateSources:w}),W.tracedSVG&&d.default.createElement(E,{src:W.tracedSVG,spreadProps:T,imageVariants:M,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(I,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:v,loading:j,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:j},W,{imageVariants:M}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:P,sizes:k,fixed:c.default.oneOfType([P,c.default.arrayOf(P)]),fluid:c.default.oneOfType([k,c.default.arrayOf(k)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=z;t.default=R},"eXD+":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Rajat Hans","description":"This is where I post stuff about indie hacking and tech entrepreneurship!","canonicalUrl":"https://rajathans.github.io","image":"images/logo.png","author":{"name":"rajathans"},"organization":{"name":"rajathans.github.io","url":"https://rajathans.github.io","logo":"images/logo.png"},"social":{"twitter":"@rajathans9","fbAppID":""}}}}}')},wtQ5:function(e,t,a){"use strict";var i=a("eXD+"),r=a("33yf"),n=a.n(r),s=a("q1tI"),o=a.n(s),l=a("TJpk"),d=a.n(l),c=a("Wbzz"),u=(a("pJf4"),a("qKvR")),f=o.a.memo((function(e){var t=e.author,a=e.canonicalUrl,i=e.datePublished,r=e.defaultTitle,n=e.description,s=e.image,o=e.isBlogPost,l=e.organization,c=e.title,f=e.url,p=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:c,alternateName:r}],g=o?[].concat(p,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":f,name:c,image:s}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:c,alternateName:r,headline:c,image:{"@type":"ImageObject",url:s},description:n,author:{"@type":"Person",name:t.name},publisher:{"@type":"Organization",url:l.url,logo:l.logo,name:l.name},mainEntityOfPage:{"@type":"WebSite","@id":a},datePublished:i}]):p;return Object(u.d)(d.a,null,Object(u.d)("script",{type:"application/ld+json"},JSON.stringify(g)))})),p=a("6v7h"),g=a.n(p),m=function(e){var t=e.postData,a=e.frontmatter,r=void 0===a?{}:a,s=e.postImage,l=e.isBlogPost;return Object(u.d)(c.StaticQuery,{query:"3550155404",render:function(e){var a=e.site.siteMetadata,i=r||t.childMarkdownRemark.frontmatter||{},c=l?i.title:g.a.siteTitle,p=i.description||a.description,m=s?""+a.canonicalUrl+s:a.image,h=i.slug?""+a.canonicalUrl+n.a.sep+i.slug:a.canonicalUrl,b=!!l&&i.datePublished;return Object(u.d)(o.a.Fragment,null,Object(u.d)(d.a,null,Object(u.d)("title",null,c),Object(u.d)("meta",{name:"description",content:p}),Object(u.d)("meta",{name:"image",content:m}),Object(u.d)("meta",{property:"og:url",content:h}),l?Object(u.d)("meta",{property:"og:type",content:"article"}):null,Object(u.d)("meta",{property:"og:title",content:c}),Object(u.d)("meta",{property:"og:description",content:p}),Object(u.d)("meta",{property:"og:image",content:m}),Object(u.d)("meta",{property:"fb:app_id",content:a.social.fbAppID}),Object(u.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(u.d)("meta",{name:"twitter:creator",content:a.social.twitter}),Object(u.d)("meta",{name:"twitter:title",content:c}),Object(u.d)("meta",{name:"twitter:description",content:p}),Object(u.d)("meta",{name:"twitter:image",content:m})),Object(u.d)(f,{isBlogPost:l,url:h,title:c,image:m,description:p,datePublished:b,canonicalUrl:a.canonicalUrl,author:a.author,organization:a.organization,defaultTitle:a.title}))},data:i})};m.defaultProps={isBlogPost:!1,postData:{childMarkdownRemark:{}},postImage:null};t.a=m}}]);
//# sourceMappingURL=component---src-pages-about-js-f8ed0faf3012e35ea3e0.js.map