(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var r=a(0),n=a.n(r),i=a(205),o=a(217),s=a(208),l=a(209),d=a(206);a(197);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return n.a.createElement(s.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:"All posts"}),n.a.createElement(o.a,null),n.a.createElement("div",{style:{flex:"1"}},a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("article",{key:t.fields.slug},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},n.a.createElement(i.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))}),n.a.createElement("div",{className:"link-home"},n.a.createElement(i.a,{style:{borderBottom:"1px solid white"},to:"/"},"Go back to the homepage"))))},r}(n.a.Component);t.default=c;var u="2785444898"},204:function(e,t,a){var r;e.exports=(r=a(207))&&r.default||r},205:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(204),a(9).default.enqueue,n.a.createContext({})},206:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(214),n=a.n(r),i=a(215),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,d=s.scale},207:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e,t,a){"use strict";a(18);var r=a(0),n=a.n(r),i=a(205),o=a(206);a(197);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.location,a=e.title,r=e.children,s=null;return"/eportfolio-v2/blog"===t.pathname?s=n.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blog"},a)):"/eportfolio-v2/about"===t.pathname||"/eportfolio-v2/"===t.pathname?(s=null,console.log("test")):s=n.a.createElement("h3",null,n.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/blog"},a)),n.a.createElement("div",{className:"layout"},s?n.a.createElement("header",null,s):null,r,n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},r}(n.a.Component);t.a=s},209:function(e,t,a){"use strict";var r=a(210),n=a(0),i=a.n(n),o=a(216),s=a.n(o);function l(e){var t=e.description,a=e.lang,n=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Interreaction",description:"A starter blog demonstrating what Gatsby can do.",author:"Robbe Decorte"}}}}},211:function(e,t,a){"use strict";a(212)("fixed",function(e){return function(){return e(this,"tt","","")}})},212:function(e,t,a){var r=a(1),n=a(7),i=a(32),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},213:function(e,t,a){"use strict";a(29),a(30),a(13),a(93),a(133),a(211);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),o=r(a(69)),s=r(a(134)),l=r(a(135)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(R,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},R=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},A,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,j=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:L?1:0,transition:B?"opacity "+h+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,C={transitionDelay:h+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},B&&C,s,f),N={title:t,alt:this.state.isVisible?"":a,style:T,className:A};if(p){var k=p,D=k[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&C)}),D.base64&&d.default.createElement(x,{src:D.base64,spreadProps:N,imageVariants:k,generateSources:w}),D.tracedSVG&&d.default.createElement(x,{src:D.tracedSVG,spreadProps:N,imageVariants:k,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(R,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},D,{imageVariants:k}))}}))}if(g){var M=g,V=M[0],z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete z.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},B&&C)}),V.base64&&d.default.createElement(x,{src:V.base64,spreadProps:N,imageVariants:M,generateSources:w}),V.tracedSVG&&d.default.createElement(x,{src:V.tracedSVG,spreadProps:N,imageVariants:M,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,E(M),d.default.createElement(R,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:M}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:B,sizes:O,fixed:c.default.oneOfType([B,c.default.arrayOf(B)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=L;t.default=Q},217:function(e,t,a){"use strict";a(211);var r=a(218),n=a(0),i=a.n(n),o=a(213),s=a.n(o),l=a(206);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(1)}},i.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Personal blog by"," ",i.a.createElement("strong",null,i.a.createElement("a",{target:"_blank",href:"https://twitter.com/robbedecorte"},a))," ","who lives and works in San Francisco building useful things."," ",i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))}},218:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAABjSXp0pIGXb2wjIw//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAAxITESEy/9oACAEBAAEFAusnbkgiO+QpUam9UIHsFaiaazP/xAAWEQEBAQAAAAAAAAAAAAAAAAABESD/2gAIAQMBAT8Bq4//xAAXEQADAQAAAAAAAAAAAAAAAAABAhEg/9oACAECAQE/AQsx/8QAHxAAAgECBwAAAAAAAAAAAAAAAAERAhASITEyQUJh/9oACAEBAAY/Ak+uZ5alRoTA4IZh4NiP/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERITFBYXH/2gAIAQEAAT8h3w2rfBL52ISAQln3RmibymiFBlw33PDELHR2h//aAAwDAQACAAMAAAAQ++hD/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAEDAQE/EHJCf//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBEh/9oACAECAQE/EEaKHH//xAAdEAEBAAMAAgMAAAAAAAAAAAABEQAhMWFxUZGx/9oACAEBAAE/EBshAcEkv3kQxJ8u8gwT2mGTLjfTSvxgZepQGavjEWDfTkwFxbFLgRCTPDs9Y7jnmifmf//Z",width:50,height:50,src:"/eportfolio-v2/static/6bdef032ead627d58eb4f72ce69980b5/9b664/avatar.jpg",srcSet:"/eportfolio-v2/static/6bdef032ead627d58eb4f72ce69980b5/9b664/avatar.jpg 1x,\n/eportfolio-v2/static/6bdef032ead627d58eb4f72ce69980b5/06a10/avatar.jpg 1.5x,\n/eportfolio-v2/static/6bdef032ead627d58eb4f72ce69980b5/f1b5a/avatar.jpg 2x"}}},site:{siteMetadata:{author:"Robbe Decorte",social:{twitter:"robbedec"}}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-23d301130240b53c1a07.js.map