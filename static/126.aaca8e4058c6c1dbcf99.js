(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{x7oD:function(e,n,o){"use strict";o.r(n),o.d(n,"IfCookieConsent",(function(){return i}));var t=o("q1tI"),s=o.n(t),r=o("/MKj");class i extends s.a.Component{constructor(e){super(e);const{cookieConsentLevel:n,minLevel:o}=this.props;if(void 0===n||void 0===o)return null;let t=n>=o;this.state={haveConsent:t}}render(){const{haveConsent:e}=this.state,{renderWConsent:n,renderWOConsent:o,children:t}=this.props;return e?n||t:o||null}}n.default=Object(r.b)(e=>({cookieConsentLevel:e.cookies.cookieConsentLevel}))(i)}}]);