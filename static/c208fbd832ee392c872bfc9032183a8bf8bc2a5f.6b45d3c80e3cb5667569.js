(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"+zpY":function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return l}));var r=n("XWHH"),a=n.n(r),o=n("4GRs"),i=n("ykc6"),u=n.n(i);const s=e.env.OBJECT_STORAGE_URL||"https://files.ibm.org",c=u()(["YOUR_CAUSE_URL"]),f=Object.freeze({GetBadgeData:"[Redux Badges] Get Badge Data"}),l=(e,t)=>{if(!e||!t){let n;return e||t?e?t||(n=f.GetBadgeData+": cnum not supplied"):n=f.GetBadgeData+": UserID not supplied":n=f.GetBadgeData+": UserID & cnum not supplied",new Error(n)}return async n=>{try{const{badges:i}=await(async(e,t)=>{try{const n=await Object(o.genLocalURL)("/api/getBadges"),r={method:"POST",body:JSON.stringify({cnum:t,email:e}),headers:{"Content-Type":"application/json"}},i=await a()(n,r);return await i.json()}catch(n){console.error("[getBadges] - Unable to retrieve badges\n",n)}})(e,t);if("undefined"!==typeof i&&!Array.isArray(i)&&500===i.status)return console.debug(f.GetBadgeData+": Trying to fetch badges again"),await l(e);const u=((e=[])=>e.length>0&&e.filter(e=>e.badge_group.indexOf("Volunteer")>=0).sort((e,t)=>t.badge_order-e.badge_order))(i),d="object"==typeof(r=u)&&r.findIndex(e=>!0===e.badge_earned);let p=[{title:"In Progress",badgeTitle:"IBM Volunteers Bronze Award",badgeURL:s+"/static/images/badges/IBMVolunteersBronzeFinalGray.png",ctaText:"Log Volunteer Hours",href:c.YOUR_CAUSE_URL+"/home#/newvolunteer/individualactivity/record/",btnType:"pri"},{title:"Most Recently Achieved",badgeTitle:"IBM Volunteers Bronze Award",badgeURL:s+"/static/images/badges/IBMVolunteersBronzeFinal.png",ctaText:"View All My Earned Badges",href:"https://www.youracclaim.com/",btnType:"sec"}];d>0&&(p[1].badgeURL=u[d].image_url,p[1].badgeTitle=u[d].id,p[0].badgeURL=u[d-1].image_url,p[0].badgeTitle=u[d-1].id),0===d&&(p[1].badgeURL=u[d].image_url,p[0]=Object.assign({},p[0],{title:"Congratulations!",cardDesc:"You\u2019ve achieved all the possible Corporate Social Responsibility badges!"}),delete p[0].badgeURL);let g={lastBadgeInd:d,badgeUIData:p,allBadges:i,volunteerBadges:u,hasBadges:!(d<0)};return n({type:f.GetBadgeData,payload:g})}catch(i){console.error(f.GetBadgeData+": Unable to save badge data to redux store",i)}var r}}}).call(this,n("8oxB"))},"4GRs":function(e,t,n){(function(t){var r=n("yLiY").default;e.exports={genLocalURL:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=!0,a="undefined"!==typeof t;if(n){var o=window.location.origin;return o+e}if(a){var i=r().publicRuntimeConfig.URI_ARRAY,u=i.some((function(e){return e.includes("ibm.org")}))?i.find((function(e){return e.includes("ibm.org")})):i[0];0!==u.search(/https?/)&&(u="https://"+u);var s=u+e;return s}}}}).call(this,n("8oxB"))},M0D8:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a.a}));var r=n("rePB"),a=n("+zpY");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const u={lastBadgeInd:0,badgeUIData:[],allBadges:[],volunteerBadges:[],hasBadges:!1},s=(e=u,t)=>{switch(t.type){case a.b.GetBadgeData:return i(i({},e),t.payload);default:return e}}},RYSQ:function(e,t){function n(){}var r=function(){if("undefined"!==typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if("undefined"!=typeof navigator&&navigator.getDeviceStorage)return!1;try{return new Function("","return true;")()}catch(e){return!1}}();function a(e){return+e===e>>>0&&""!==e}function o(e){return e===Object(e)}var i="__proto__"in{}?function(e){return e}:function(e){var t=e.__proto__;if(!t)return e;var n=Object.create(t);return Object.getOwnPropertyNames(e).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})),n};var u=new RegExp("^[$_a-zA-Z]+[$_a-zA-Z0-9]*$");function s(e){return u.test(e)}var c={};function f(e,t){if(t!==c)throw Error("Use Path.get to retrieve path objects");for(var n=0;n<e.length;n++)this.push(String(e[n]));r&&this.length&&(this.getValueFrom=this.compiledGetValueFromFn())}var l={};function d(e){return a(e)?"["+e+"]":'["'+e.replace(/"/g,'\\"')+'"]'}function p(e){if(void 0===e)return"eof";var t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:case 48:return e;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return 97<=t&&t<=122||65<=t&&t<=90?"ident":49<=t&&t<=57?"number":"else"}f.get=function(e){if(e instanceof f)return e;if(null!=e&&0!=e.length||(e=""),"string"!=typeof e){if(a(e.length))return new f(e,c);e=String(e)}if(r=l[e])return r;var t=function(e){var t,r,a,o,i,u,s,c=[],f=-1,l="beforePath",d={push:function(){void 0!==a&&(c.push(a),a=void 0)},append:function(){void 0===a?a=r:a+=r}};function h(){if(!(f>=e.length)){var t=e[f+1];return"inSingleQuote"==l&&"'"==t||"inDoubleQuote"==l&&'"'==t?(f++,r=t,d.append(),!0):void 0}}for(;l;)if(f++,"\\"!=(t=e[f])||!h()){if(o=p(t),"error"==(i=(s=g[l])[o]||s.else||"error"))return;if(l=i[0],u=d[i[1]]||n,r=void 0===i[2]?t:i[2],u(),"afterPath"===l)return c}}(e);if(!t)return h;var r=new f(t,c);return l[e]=r,r},f.prototype=i({__proto__:[],valid:!0,toString:function(){for(var e="",t=0;t<this.length;t++){var n=this[t];s(n)?e+=t?"."+n:n:e+=d(n)}return e},getValueFrom:function(e,t){for(var n=0;n<this.length;n++){if(null==e)return;e=e[this[n]]}return e},iterateObjects:function(e,t){for(var n=0;n<this.length;n++){if(n&&(e=e[this[n-1]]),!o(e))return;t(e,this[n])}},compiledGetValueFromFn:function(){var e="",t="obj";e+="if (obj != null";for(var n,r=0;r<this.length-1;r++)e+=" &&\n     "+(t+=s(n=this[r])?"."+n:d(n))+" != null";return e+=")\n",e+="  return "+(t+=s(n=this[r])?"."+n:d(n))+";\nelse\n  return undefined;",new Function("obj",e)},setValueFrom:function(e,t){if(!this.length)return!1;for(var n=0;n<this.length-1;n++){if(!o(e))return!1;e=e[this[n]]}return!!o(e)&&(e[this[n]]=t,!0)}});var g={beforePath:{ws:["beforePath"],ident:["inIdent","append"],"[":["beforeElement"],eof:["afterPath"]},inPath:{ws:["inPath"],".":["beforeIdent"],"[":["beforeElement"],eof:["afterPath"]},beforeIdent:{ws:["beforeIdent"],ident:["inIdent","append"]},inIdent:{ident:["inIdent","append"],0:["inIdent","append"],number:["inIdent","append"],ws:["inPath","push"],".":["beforeIdent","push"],"[":["beforeElement","push"],eof:["afterPath","push"]},beforeElement:{ws:["beforeElement"],0:["afterZero","append"],number:["inIndex","append"],"'":["inSingleQuote","append",""],'"':["inDoubleQuote","append",""]},afterZero:{ws:["afterElement","push"],"]":["inPath","push"]},inIndex:{0:["inIndex","append"],number:["inIndex","append"],ws:["afterElement"],"]":["inPath","push"]},inSingleQuote:{"'":["afterElement"],eof:["error"],else:["inSingleQuote","append"]},inDoubleQuote:{'"':["afterElement"],eof:["error"],else:["inDoubleQuote","append"]},afterElement:{ws:["afterElement"],"]":["inPath","push"]}},h=new f("",c);h.valid=!1,h.getValueFrom=h.setValueFrom=function(){},e.exports=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),u=n("elyg"),s=n("nOHt"),c=new Map,f=window.IntersectionObserver,l={};var d=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var g=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],c=a[1],g=(0,s.useRouter)(),h=g&&g.pathname||"/",b=i.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href);return{href:t,as:e.as?(0,u.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),v=b.href,y=b.as;i.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,u.isLocalURL)(v)&&!l[v+"%"+y])return d(o,(function(){p(g,v,y)}))}),[t,o,v,y,g]);var w=e.children,m=e.replace,O=e.shallow,B=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var E=i.Children.only(w),_={ref:function(e){e&&c(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,g,v,y,m,O,B)}};return t&&(_.onMouseEnter=function(e){(0,u.isLocalURL)(v)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),p(g,v,y,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(_.href=(0,u.addBasePath)(y)),i.default.cloneElement(E,_)};t.default=g},kBdY:function(e,t,n){var r=n("RYSQ");e.exports=function(e,t){if("string"!==typeof t)throw new TypeError("path must be a string");if("object"!==typeof e)throw new TypeError("object must be passed");var n=r.get(t);if(!n.valid)throw new Error("path is not a valid object path");return n.getValueFrom(e)}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);