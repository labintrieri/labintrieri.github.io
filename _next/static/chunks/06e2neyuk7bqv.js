(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56420,e=>{"use strict";var t=e.i(71645),r=e.i(96661);let i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a=e.i(5014);e.s(["default",0,(e,o)=>{let s=(0,t.forwardRef)(({className:s,...n},l)=>(0,t.createElement)(a.default,{ref:l,iconNode:o,className:(0,r.mergeClasses)(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...n}));return s.displayName=i(e),s}],56420)},88143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:o,objectFit:s}){let n=r?40*r:e,l=a?40*a:t,d=n&&l?`viewBox='0 0 ${n} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return s}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let o=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let i=e.r(43369),a=e.r(88143),o=e.r(87690),s=["-moz-initial","fill","none","scale-down",void 0];function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:u=!1,loading:p,className:m,quality:h,width:f,height:g,fill:v=!1,style:b,overrideSrc:x,onLoad:y,onLoadingComplete:w,placeholder:j="empty",blurDataURL:k,fetchPriority:_,decoding:S="async",layout:C,objectFit:N,objectPosition:P,lazyBoundary:E,lazyRoot:z,...R},O){var I;let M,$,A,{imgConf:L,showAltText:D,blurComplete:T,defaultLoader:F}=O,W=L||o.imageConfigDefault;if("allSizes"in W)M=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),r=W.qualities?.sort((e,t)=>e-t);M={...W,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=R.loader||F;delete R.loader,delete R.srcSet;let q="__next_img_default"in B;if(q){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let U="",G=l(f),H=l(g);if((I=e)&&"object"==typeof I&&(n(I)||void 0!==I.src)){let t=n(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if($=t.blurWidth,A=t.blurHeight,k=k||t.blurDataURL,U=t.src,!v)if(G||H){if(G&&!H){let e=G/t.width;H=Math.round(t.height*e)}else if(!G&&H){let e=H/t.height;G=Math.round(t.width*e)}}else G=t.width,H=t.height}let V=!c&&!u&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:U)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,V=!1),M.unoptimized&&(r=!0),q&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let J=l(h),X=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:P}:{},D?{}:{color:"transparent"},b),K=T||"empty"===j?null:"blur"===j?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:$,blurHeight:A,blurDataURL:k||"",objectFit:X.objectFit})}")`:`url("${j}")`,Y=s.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,Q=K?{backgroundSize:Y,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Z=function({config:e,src:t,unoptimized:r,width:a,quality:o,sizes:s,loader:n}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=r.exec(i);)a.push(parseInt(e[2]));if(a.length){let r=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,s),c=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((r,i)=>`${n({config:e,src:t,quality:o,width:r})} ${"w"===d?r:i+1}${d}`).join(", "),src:n({config:e,src:t,quality:o,width:l[c]})}}({config:M,src:e,unoptimized:r,width:G,quality:J,sizes:t,loader:B}),ee=V?"lazy":p;return{props:{...R,loading:ee,fetchPriority:_,width:G,height:H,decoding:S,className:m,style:{...X,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:r,preload:u||c,placeholder:j,fill:v}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let i=e.r(71645),a="u"<typeof window,o=a?()=>{}:i.useLayoutEffect,s=a?()=>{}:i.useEffect;function n(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return a&&(t?.mountedInstances?.add(e.children),n()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return f},defaultHead:function(){return u}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let o=e.r(55682),s=e.r(90809),n=e.r(43476),l=s._(e.r(71645)),d=o._(e.r(98879)),c=e.r(42732);function u(){return[(0,n.jsx)("meta",{charSet:"utf-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let m=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,i,a;return e.reduce(p,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,i=new Set,a={},e=>{let o=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?o=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?o=!1:r.add(e.type);break;case"meta":for(let t=0,r=m.length;t<r;t++){let r=m[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?o=!1:i.add(r);else{let t=e.props[r],i=a[r]||new Set;("name"!==r||!s)&&i.has(t)?o=!1:(i.add(t),a[r]=i)}}}return o})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let f=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,n.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=e.r(55682)._(e.r(71645)),a=e.r(87690),o=i.default.createContext(a.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let i=e.r(70965),a=e.r(43369);function o({config:e,src:t,width:r,quality:s}){let n=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){n=i,r.delete("dpl");let a=r.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,i.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&n?`&dpl=${n}`:""}`}o.__next_img_default=!0;let s=o},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let i=e.r(55682),a=e.r(90809),o=e.r(43476),s=a._(e.r(71645)),n=i._(e.r(74080)),l=i._(e.r(25633)),d=e.r(8927),c=e.r(87690),u=e.r(18556);e.r(33525);let p=e.r(65856),m=i._(e.r(1948)),h=e.r(18581),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,a,o,s){let n=e?.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function v(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,s.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:a,decoding:n,className:l,style:d,fetchPriority:c,placeholder:u,loading:p,unoptimized:m,fill:f,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:y,setShowAltText:w,sizesInput:j,onLoad:k,onError:_,...S},C)=>{let N=(0,s.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&g(e,u,b,x,y,m,j))},[e,u,b,x,y,_,m,j]),P=(0,h.useMergedRef)(C,N);return(0,o.jsx)("img",{...S,...v(c),loading:p,width:a,height:i,decoding:n,"data-nimg":f?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:P,onLoad:e=>{g(e.currentTarget,u,b,x,y,m,j)},onError:e=>{w(!0),"empty"!==u&&y(!0),_&&_(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&n.default.preload?(n.default.preload(t.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(p.RouterContext),i=(0,s.useContext)(u.ImageConfigContext),a=(0,s.useMemo)(()=>{let e=f||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:a,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:n,onLoadingComplete:l}=e,h=(0,s.useRef)(n);(0,s.useEffect)(()=>{h.current=n},[n]);let g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let[v,y]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),{props:k,meta:_}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:a,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...k,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.preload?(0,o.jsx)(x,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return c},getImageProps:function(){return d}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let o=e.r(55682),s=e.r(8927),n=e.r(5500),l=o._(e.r(1948));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=n.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},36333,e=>{"use strict";var t=e.i(43476),r=e.i(56420);let i=(0,r.default)("arrow-down-right",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]),a=(0,r.default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),o=(0,r.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),s=(0,r.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),n=(0,r.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var l=e.i(57688),d=e.i(71645);let c=(0,r.default)("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]),u=(0,r.default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),p={"speech-topics":"An archival TV Alerj frame from Flavio Bolsonaro's time as a state lawmaker.","government-links":"Reporting captures show a government search result leading to a gambling interface.","deepfake-courses":"AI-generated course material examined during the reporting.","police-video":"A source-video frame shows Gen Kimura inside the patrol car.","ai-apps":"Reporting captures compare an overbuilt health tracker with the final workout app.","undecided-panel":"A longitudinal reporting project following undecided voters.","payment-audit":"Reporting based on an audit of a public payment database.","ai-provenance":"Reporting on the provenance claims behind a Brazilian AI model."},m=new Set(["speech-topics","government-links","deepfake-courses","police-video"]),h=new Set(["speech-topics","government-links","deepfake-courses","police-video"]);function f({src:e,alt:r,className:i=""}){return(0,t.jsx)(l.default,{className:`story-evidence-photo ${i}`.trim(),src:e,alt:r,fill:!0,unoptimized:!0,sizes:"(max-width: 760px) 230px, 150px"})}function g(){return(0,t.jsx)("span",{className:"story-evidence story-evidence-speech",children:(0,t.jsx)(f,{src:"/story-media/flavio-alerj.jpg",alt:"Flavio Bolsonaro speaking at the TV Alerj podium on February 7, 2018"})})}function v(){return(0,t.jsxs)("span",{className:"story-evidence story-evidence-split story-evidence-gov",children:[(0,t.jsx)("span",{className:"story-evidence-frame",children:(0,t.jsx)(f,{src:"/story-media/gov-search.jpg",alt:"Search results showing altered government links"})}),(0,t.jsx)("span",{className:"story-evidence-frame",children:(0,t.jsx)(f,{src:"/story-media/gov-redirect.jpg",alt:"Gambling interface reached after a redirect"})})]})}function b(){return(0,t.jsx)("span",{className:"story-evidence story-evidence-deepfake",children:(0,t.jsx)(f,{src:"/story-media/deepfake-course.jpg",alt:"AI-generated course material depicting Lula and Jair Bolsonaro"})})}function x(){return(0,t.jsx)("span",{className:"story-evidence story-evidence-police",children:(0,t.jsx)(f,{src:"/story-media/police-video.jpg",alt:"Gen Kimura inside a Sao Paulo Military Police patrol car"})})}function y({kind:e}){switch(e){case"speech-topics":return(0,t.jsx)(g,{});case"government-links":return(0,t.jsx)(v,{});case"deepfake-courses":return(0,t.jsx)(b,{});case"police-video":return(0,t.jsx)(x,{});case"ai-apps":case"undecided-panel":case"payment-audit":case"ai-provenance":return null}}function w({kind:e}){return"speech-topics"===e?(0,t.jsx)("div",{className:"story-video-frame",children:(0,t.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/rF-u4JGw_EI?start=148&rel=0",title:"Flavio Bolsonaro speaking during the February 7, 2018 TV Alerj session",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",sandbox:"allow-scripts allow-same-origin allow-presentation allow-popups",allowFullScreen:!0})}):"police-video"===e?(0,t.jsx)("div",{className:"story-video-frame",children:(0,t.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/futT5F-qx_A?rel=0",title:"Gen Kimura's source video from inside a Sao Paulo Military Police patrol car",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",sandbox:"allow-scripts allow-same-origin allow-presentation allow-popups",allowFullScreen:!0})}):"government-links"===e?(0,t.jsxs)("div",{className:"story-dialog-evidence-pair",children:[(0,t.jsxs)("figure",{className:"story-dialog-figure",children:[(0,t.jsx)(l.default,{src:"/story-media/gov-search.jpg",alt:"Search results showing altered government links",width:768,height:432,unoptimized:!0}),(0,t.jsx)("figcaption",{children:"Search result found during the reporting."})]}),(0,t.jsxs)("figure",{className:"story-dialog-figure",children:[(0,t.jsx)(l.default,{src:"/story-media/gov-redirect.jpg",alt:"Gambling interface reached after a redirect",width:768,height:432,unoptimized:!0}),(0,t.jsx)("figcaption",{children:"Destination reached from the altered government link."})]})]}):(0,t.jsxs)("figure",{className:"story-dialog-figure",children:[(0,t.jsxs)("div",{className:"story-dialog-image-wrap",children:[(0,t.jsx)(l.default,{src:"/story-media/deepfake-course.jpg",alt:"AI-generated course material depicting Lula and Jair Bolsonaro",width:1200,height:800,unoptimized:!0}),(0,t.jsx)("span",{className:"story-dialog-badge",children:"AI-generated / reporting material"})]}),(0,t.jsx)("figcaption",{children:"Course material examined during the reporting, via Folha de S.Paulo."})]})}function j({id:e,kind:r}){let[i,a]=(0,d.useState)(!1),o=(0,d.useRef)(null),s=(0,d.useRef)(null),l=p[r],m=`${e}-caption`,f=h.has(r),g=f?r:null;(0,d.useEffect)(()=>{i&&o.current&&!o.current.open&&o.current.showModal()},[i]);let v=()=>{o.current?.open&&o.current.close()},b="speech-topics"===r?"Watch the TV Alerj archive":"police-video"===r?"Watch the source video":"government-links"===r?"Open the reporting captures":"Open the reporting material";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("figure",{className:`story-visual story-visual-${r}`,"aria-describedby":m,children:[(0,t.jsx)("div",{className:"story-visual-stage",children:(0,t.jsxs)("div",{className:"story-visual-panel story-visual-evidence",children:[(0,t.jsx)(y,{kind:r}),f?(0,t.jsx)("button",{ref:s,type:"button",className:"story-media-open","aria-label":b,title:b,onClick:()=>a(!0),children:"speech-topics"===r||"police-video"===r?(0,t.jsx)(u,{size:14,fill:"currentColor","aria-hidden":"true"}):(0,t.jsx)(c,{size:14,"aria-hidden":"true"})}):null]})}),(0,t.jsx)("figcaption",{className:"sr-only",id:m,children:l})]}),g?(0,t.jsx)("dialog",{ref:o,className:"story-media-dialog","aria-labelledby":`${e}-dialog-title`,"aria-describedby":`${e}-dialog-description`,onClick:e=>{e.target===e.currentTarget&&v()},onClose:()=>{a(!1),requestAnimationFrame(()=>s.current?.focus())},children:(0,t.jsxs)("div",{className:"story-media-dialog-shell",children:[(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{id:`${e}-dialog-title`,children:"speech-topics"===g?"TV Alerj archive":"police-video"===g?"Source video":"government-links"===g?"Reporting captures":"AI-generated course material"}),(0,t.jsx)("p",{id:`${e}-dialog-description`,children:l}),(0,t.jsx)("p",{className:"story-dialog-source",children:"speech-topics"===g?"TV Alerj / YouTube, Feb. 7, 2018":"police-video"===g?"Gen Kimura / YouTube":"government-links"===g?"Reporting captures / Folha de S.Paulo":"Course material examined during reporting / via Folha de S.Paulo"})]}),(0,t.jsx)("button",{type:"button",className:"story-dialog-close","aria-label":"Close media",title:"Close media",onClick:v,children:(0,t.jsx)(n,{size:20,"aria-hidden":"true"})})]}),(0,t.jsx)("div",{className:"story-media-dialog-body",children:i?(0,t.jsx)(w,{kind:g}):null})]})}):null]})}let k=[108,97,98,46,105,110,116,114,105,101,114,105,64,103,109,97,105,108,46,99,111,109];function _(){return String.fromCharCode(...k)}function S(e){e.currentTarget.href=`mailto:${_()}`}e.s(["EmailContact",0,function(){let[e,r]=(0,d.useState)(null),i=(0,d.useRef)(null);return((0,d.useEffect)(()=>{e&&i.current?.focus()},[e]),e)?(0,t.jsxs)("a",{ref:i,className:"contact-email",href:`mailto:${e}`,"aria-label":`Email Laura Intrieri at ${e}`,children:[e,(0,t.jsx)(o,{size:17,strokeWidth:1.8,"aria-hidden":"true"})]}):(0,t.jsxs)("button",{type:"button",className:"contact-email","aria-label":"Reveal email address for Laura Intrieri",onClick:()=>r(_()),children:["Email",(0,t.jsx)(o,{size:17,strokeWidth:1.8,"aria-hidden":"true"})]})},"InlineEmailLink",0,function(){return(0,t.jsx)("a",{className:"inline-email-link",href:"#contact",onClick:S,"aria-label":"Email Laura Intrieri",children:"email"})},"PortraitFigure",0,function(){return(0,t.jsxs)("figure",{className:"portrait-figure",children:[(0,t.jsx)("div",{className:"portrait-stage",children:(0,t.jsx)(l.default,{className:"portrait-image",src:"/laura-intrieri.jpg",alt:"Portrait of Laura Intrieri",fill:!0,priority:!0,unoptimized:!0,sizes:"(max-width: 760px) 96px, (max-width: 1020px) 148px, 176px"})}),(0,t.jsx)("figcaption",{className:"portrait-caption",children:"She earned a bachelor's degree in Public Administration from FGV EAESP and completed Insper's postgraduate program in Data Journalism, Automation and Data Storytelling."})]})},"SiteHeader",0,function({navItems:e}){let[r,i]=(0,d.useState)("");(0,d.useEffect)(()=>{let t=e.map(e=>e.sectionId?document.getElementById(e.sectionId):null).filter(e=>!!e);if(0===t.length)return;let r=new Map(t.map(e=>[e.id,0])),a=new IntersectionObserver(e=>{e.forEach(e=>{r.set(e.target.id,e.isIntersecting?e.intersectionRatio:0)});let t=[...r.entries()].sort((e,t)=>t[1]-e[1]);t[0]?.[1]>0&&i(t[0][0])},{rootMargin:"-18% 0px -58% 0px",threshold:[.08,.2,.4]});return t.forEach(e=>a.observe(e)),()=>a.disconnect()},[e]);let a=e=>{e.currentTarget.closest("details")?.removeAttribute("open")},o=(i=!1)=>e.map(e=>{let o=r===e.sectionId;return(0,t.jsx)("a",{href:e.href,className:o?"is-active":void 0,"aria-current":o?"location":void 0,onClick:i?a:void 0,children:e.label},e.id)});return(0,t.jsx)("header",{className:"site-header",children:(0,t.jsxs)("div",{className:"header-inner",children:[(0,t.jsxs)("a",{className:"brand",href:"#content","aria-label":"Laura Intrieri, home",children:[(0,t.jsx)("span",{className:"brand-mark","aria-hidden":"true"}),(0,t.jsx)("span",{children:"Laura Intrieri"})]}),(0,t.jsxs)("div",{className:"header-actions",children:[(0,t.jsx)("nav",{className:"site-nav desktop-nav","aria-label":"Main navigation",children:o()}),(0,t.jsxs)("details",{className:"mobile-nav",children:[(0,t.jsxs)("summary",{className:"icon-button","aria-label":"Main menu",title:"Main menu",children:[(0,t.jsx)(s,{className:"menu-icon menu-icon-open",size:19,strokeWidth:1.8}),(0,t.jsx)(n,{className:"menu-icon menu-icon-close",size:19,strokeWidth:1.8})]}),(0,t.jsx)("nav",{"aria-label":"Mobile navigation",children:o(!0)})]})]})]})})},"StoryRow",0,function({article:e}){let r=e.visual,o=!!r&&m.has(r);return(0,t.jsxs)("article",{className:`article-row ${o?"article-row-has-visual":"article-row-text-only"}`,id:`story-${e.id}`,children:[(0,t.jsxs)("div",{className:"article-story",children:[e.href?(0,t.jsx)("a",{className:"article-title",href:e.href,target:"_blank",rel:"noreferrer","aria-label":`${e.title}. Published by Folha de S.Paulo on ${e.date}. Opens in a new tab.`,children:e.title}):(0,t.jsx)("span",{className:"article-title",children:e.title}),e.links?.length?(0,t.jsx)("span",{className:"article-related-links",role:"group","aria-label":`Links for ${e.title}`,children:e.links.map(r=>{let o=r.href.startsWith("#");return(0,t.jsxs)("a",{href:r.href,target:o?void 0:"_blank",rel:o?void 0:"noreferrer","aria-label":o?`${r.label} for ${e.title}`:`${r.label} for ${e.title}, opens in a new tab`,children:[r.label,o?(0,t.jsx)(i,{size:13,strokeWidth:1.8,"aria-hidden":"true"}):(0,t.jsx)(a,{size:13,strokeWidth:1.8,"aria-hidden":"true"})]},r.href)})}):null]}),o&&r?(0,t.jsx)(j,{id:`story-visual-${e.id}`,kind:r}):null,(0,t.jsx)("time",{className:"article-date",dateTime:e.sortDate,children:e.date}),e.href?(0,t.jsx)("a",{className:"article-arrow",href:e.href,target:"_blank",rel:"noreferrer","aria-label":`Open ${e.title} in a new tab`,children:(0,t.jsx)(a,{size:19,strokeWidth:1.7,"aria-hidden":"true"})}):null]})}],36333)},46240,e=>{"use strict";var t=e.i(43476);let r=(0,e.i(56420).default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);var i=e.i(57688),a=e.i(71645);function o(e,t){return"function"==typeof e.addEventListener?(e.addEventListener("change",t),()=>e.removeEventListener("change",t)):(e.addListener(t),()=>e.removeListener(t))}let s=`
  .house-model-feature {
    width: min(100%, 500px);
    margin-inline: auto;
    color: var(--ink, #141414);
  }

  .house-model-toolbar {
    min-height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-block: 6px;
    border-top: 1px solid var(--line, #d5d5d5);
  }

  .house-model-switch {
    display: inline-grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid var(--line-strong, #909090);
    border-radius: 4px;
    overflow: hidden;
  }

  .house-model-switch button,
  .house-model-reset {
    min-height: 34px;
    border: 0;
    background: transparent;
    color: var(--ink, #141414);
    cursor: pointer;
  }

  .house-model-switch button {
    min-width: 110px;
    padding-inline: 12px;
    font-family: var(--font-geist-mono, Consolas, monospace);
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .house-model-switch button + button {
    border-left: 1px solid var(--line-strong, #909090);
  }

  .house-model-switch button[aria-pressed="true"] {
    background: var(--ink, #141414);
    color: var(--surface, #fff);
  }

  .house-model-switch button:disabled {
    cursor: not-allowed;
    opacity: 0.46;
  }

  .house-model-switch button:hover:not([aria-pressed="true"]),
  .house-model-switch button:focus-visible:not([aria-pressed="true"]),
  .house-model-reset:hover,
  .house-model-reset:focus-visible {
    background: var(--pastel, #dfe6e2);
  }

  .house-model-reset {
    width: 34px;
    display: inline-grid;
    place-items: center;
    border: 1px solid var(--line-strong, #909090);
    border-radius: 4px;
  }

  .house-model-reset[hidden] {
    visibility: hidden;
    display: inline-grid;
  }

  .house-model-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 600 / 344;
    overflow: hidden;
    isolation: isolate;
    border-block: 1px solid var(--line, #d5d5d5);
    background: #f0f0ed;
  }

  .house-model-poster,
  .house-model-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .house-model-poster {
    z-index: 1;
    object-fit: cover;
    background: #fff;
    transition: opacity 180ms ease;
  }

  .house-model-canvas {
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: opacity 180ms ease;
  }

  .house-model-canvas.is-ready {
    opacity: 1;
    pointer-events: auto;
  }

  .house-model-canvas canvas {
    width: 100%;
    height: 100%;
    display: block;
    touch-action: pan-y;
  }

  .house-model-comparison {
    position: absolute;
    z-index: 4;
    inset: 0;
    overflow: hidden;
  }

  .house-model-compare-published {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .house-model-compare-published img {
    object-fit: cover;
  }

  .house-model-compare-labels {
    position: absolute;
    z-index: 5;
    top: 8px;
    right: 8px;
    left: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    pointer-events: none;
  }

  .house-model-compare-labels span {
    padding: 5px 7px;
    background: rgba(245, 245, 245, 0.92);
    color: var(--ink, #141414);
    font-family: var(--font-geist-mono, Consolas, monospace);
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .house-model-compare-divider {
    position: absolute;
    z-index: 6;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--ink, #141414);
    pointer-events: none;
    transform: translateX(-50%);
  }

  .house-model-compare-divider span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    border: 1px solid var(--ink, #141414);
    border-radius: 50%;
    background: var(--surface, #fff);
    transform: translate(-50%, -50%);
  }

  .house-model-compare-divider span::before {
    content: "";
    position: absolute;
    inset: 8px 9px;
    border-inline: 1px solid var(--ink, #141414);
  }

  .house-model-compare-range {
    appearance: none;
    position: absolute;
    z-index: 7;
    top: 50%;
    left: 0;
    width: 100%;
    height: 44px;
    margin: 0;
    background: transparent;
    cursor: ew-resize;
    transform: translateY(-50%);
    touch-action: pan-y;
  }

  .house-model-compare-range:focus-visible {
    outline: 2px solid var(--ink, #141414);
    outline-offset: -2px;
  }

  .house-model-compare-range::-webkit-slider-runnable-track {
    height: 2px;
    background: transparent;
  }

  .house-model-compare-range::-webkit-slider-thumb {
    width: 44px;
    height: 44px;
    margin-top: -21px;
    appearance: none;
    border: 0;
    background: transparent;
  }

  .house-model-compare-range::-moz-range-track {
    height: 2px;
    border: 0;
    background: transparent;
  }

  .house-model-compare-range::-moz-range-thumb {
    width: 44px;
    height: 44px;
    border: 0;
    background: transparent;
  }

  .house-model-status {
    position: absolute;
    z-index: 8;
    left: 10px;
    bottom: 10px;
    margin: 0;
    padding: 6px 8px;
    background: rgba(245, 245, 245, 0.92);
    color: var(--muted, #666);
    font-family: var(--font-geist-mono, Consolas, monospace);
    font-size: 9px;
    text-transform: uppercase;
  }

  .house-model-a11y {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 760px) {
    .house-model-toolbar {
      align-items: stretch;
    }

    .house-model-switch {
      flex: 1;
    }

    .house-model-switch button {
      min-width: 0;
      min-height: 44px;
      padding-inline: 9px;
    }

    .house-model-reset {
      width: 44px;
      min-height: 44px;
    }

  }

  @media (max-width: 360px) {
    .house-model-toolbar {
      gap: 8px;
    }

    .house-model-switch button {
      padding-inline: 6px;
      font-size: 9px;
      white-space: nowrap;
    }

  }

  @media (prefers-reduced-motion: reduce) {
    .house-model-poster,
    .house-model-canvas {
      transition: none;
    }
  }
`;function n({className:l,defaultView:d="compare",infographicAlt:c="Published diagram showing an approximate model of Jair Bolsonaro's house",infographicSrc:u="/story-media/house-published-comparator.png"}){let p=(0,a.useRef)(null),m=(0,a.useRef)(null),h=(0,a.useRef)(null),[f,g]=(0,a.useState)(d),[v,b]=(0,a.useState)(50),[x,y]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),[k,_]=(0,a.useState)("idle");(0,a.useEffect)(()=>{let e=p.current;if(!e)return;if(!("IntersectionObserver"in window)){let e=requestAnimationFrame(()=>y(!0));return()=>cancelAnimationFrame(e)}let t=new IntersectionObserver(([e])=>y(e.isIntersecting),{rootMargin:"240px 0px",threshold:.01});return t.observe(e),()=>t.disconnect()},[]),(0,a.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>j(e.matches);return t(),o(e,t)},[]),(0,a.useEffect)(()=>{h.current?.setReducedMotion(w)},[w]),(0,a.useEffect)(()=>{let t="model"===f&&x;if(h.current?.setActive(t),!t||h.current||!m.current)return;let r=!1;return _("loading"),e.A(77191).then(({mountHouseModel:e})=>{if(r||!m.current)return;let t=e(m.current,{reducedMotion:w,describedById:"house-model-instructions",onUnavailable:()=>{h.current?.setActive(!1),_("error"),g("compare")}});h.current=t,t.setActive(!0),_("ready")}).catch(()=>{r||(_("error"),g("compare"))}),()=>{r=!0}},[x,w,f]),(0,a.useEffect)(()=>()=>{h.current?.dispose(),h.current=null},[]);let S="model"===f&&"ready"===k,C="error"===k?"Interactive 3D unavailable. The process comparison remains available.":"model"===f&&"loading"===k?"Loading 3D model":null;return(0,t.jsxs)("div",{ref:p,className:["house-model-feature",l].filter(Boolean).join(" "),children:[(0,t.jsx)("style",{children:s}),(0,t.jsxs)("div",{className:"house-model-toolbar",children:[(0,t.jsxs)("div",{className:"house-model-switch",role:"group","aria-label":"Choose visual",children:[(0,t.jsx)("button",{type:"button","aria-pressed":"compare"===f,onClick:()=>g("compare"),children:"Compare"}),(0,t.jsx)("button",{type:"button","aria-pressed":"model"===f,disabled:"error"===k,title:"error"===k?"3D model unavailable":void 0,onClick:()=>g("model"),children:"Explore 3D"})]}),(0,t.jsx)("button",{type:"button",className:"house-model-reset",hidden:!S,"aria-label":"Reset 3D view",title:"Reset 3D view",onClick:()=>h.current?.reset(),children:(0,t.jsx)(r,{size:17,strokeWidth:1.8,"aria-hidden":"true"})})]}),(0,t.jsxs)("div",{className:`house-model-frame is-${f}`,children:[(0,t.jsx)(i.default,{className:"house-model-poster",src:"/story-media/house-model-still.webp",alt:"","aria-hidden":"true",fill:!0,unoptimized:!0,sizes:"(max-width: 760px) calc(100vw - 36px), 500px",priority:!1}),(0,t.jsx)("div",{ref:m,className:`house-model-canvas${S?" is-ready":""}`,"aria-hidden":!S}),"compare"===f?(0,t.jsxs)("div",{className:"house-model-comparison",role:"group","aria-label":`Comparison between the working 3D model and: ${c}`,children:[(0,t.jsx)("div",{className:"house-model-compare-published",style:{clipPath:`inset(0 0 0 ${v}%)`},"aria-hidden":"true",children:(0,t.jsx)(i.default,{src:u,alt:"",fill:!0,unoptimized:!0,sizes:"(max-width: 760px) calc(100vw - 36px), 500px"})}),(0,t.jsxs)("div",{className:"house-model-compare-labels","aria-hidden":"true",children:[(0,t.jsx)("span",{children:"3D model"}),(0,t.jsx)("span",{children:"Published graphic"})]}),(0,t.jsx)("div",{className:"house-model-compare-divider",style:{left:`${v}%`},"aria-hidden":"true",children:(0,t.jsx)("span",{})}),(0,t.jsx)("input",{className:"house-model-compare-range",type:"range",min:"4",max:"96",value:v,"aria-label":"Move the comparison divider","aria-valuetext":`${100-v}% published graphic visible`,onChange:e=>b(Number(e.currentTarget.value))})]}):null,C?(0,t.jsx)("p",{className:"house-model-status",role:"status","aria-live":"polite",children:C}):null,(0,t.jsx)("p",{id:"house-model-instructions",className:"house-model-a11y",children:"Drag or use the arrow keys to rotate the model. Use the plus and minus keys to zoom. Hold Control or Command while scrolling to zoom. Hold Shift while dragging to pan."})]})]})}e.s(["HouseModelFeature",0,n,"HouseModelPreviewLoop",0,function(){let e=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current,i=r.current;if(!t||!i)return;i.defaultPlaybackRate=.55,i.playbackRate=.55;let a=window.matchMedia("(prefers-reduced-motion: reduce)"),s=!("IntersectionObserver"in window),n=()=>{!s||a.matches||document.hidden?i.pause():i.play().catch(()=>void 0)},l="IntersectionObserver"in window?new IntersectionObserver(([e])=>{s=e.isIntersecting&&e.intersectionRatio>=.25,n()},{threshold:[0,.25]}):null;l?.observe(t);let d=o(a,n);return document.addEventListener("visibilitychange",n),i.addEventListener("canplay",n),n(),()=>{l?.disconnect(),d(),document.removeEventListener("visibilitychange",n),i.removeEventListener("canplay",n),i.pause()}},[]),(0,t.jsx)("span",{ref:e,className:"house-model-preview","aria-hidden":"true",children:(0,t.jsxs)("video",{ref:r,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:"/story-media/house-model-still.webp",children:[(0,t.jsx)("source",{src:"/story-media/house-model-process.webm",type:"video/webm"}),(0,t.jsx)("source",{src:"/story-media/house-model-process.mp4",type:"video/mp4"})]})})},"default",0,n],46240)}]);