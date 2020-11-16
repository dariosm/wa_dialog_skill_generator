/**
 * 
 *Copyright (c) 2014 Taylor Hakes
Copyright (c) 2014 Forbes Lindesay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
(function() {
  window.TW = {
    polyfill:'!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return!(!e||"undefined"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this)}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(r){return void f(n.promise,r)}i(n.promise,o)}else(1===e._state?i:f)(n.promise,e._value)})):e._deferreds.push(n)}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,u(e)}catch(r){f(e,r)}}function f(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,f(n,e))})}catch(o){if(t)return;t=!0,f(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,o)),o},o.prototype["finally"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(n){r(e,n)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=o});',		  

//	languges--each entry:
//	<source languge code>: <display name>		  
   
    languages: {
    	en: "English",
        acm: "للهجة العراقية",
        ar: "العربية",       
        bg: "Български",
        arz: "اللهجه المصريه",
        ca: "Català",
        cs: "Čeština",
        hr: "Hrvatski",
        da: "Dansk",
        et: "Eesti",
        de: "Deutsch",
        es: "Español",
        fi: "Suomi",
        fr: "Français",
        he: "עברית",
        hi: "हिंदी",
        hu: "Magyar",
        it: "Italiano",
        ga: "Gaeilge",
        id: "Bahasa Indonesia",
        ja: "日本語",
        ko: "한국어",
        lt: "Lietuvių",
        lv: "Latviešu",
        nb: "Norsk",
        nl: "Nederlands",
        pl: "Polski",
        pt: "Português",
        ro: "Română",
        ru: "Русский",
        sk: "Slovenčina",
        sl: "Slovene",
        sv: "Svenska",
        tr: "Türkçe",
        ur: "اُردُو‎",
        bn: "বাংলা",
        gu: "ગુજરાતી",
        ml: "മലയാളം",
        mt: "Malti",
        ms: "بهاس ملايو",
        ta: "தமிழ்",
        th: "ภาษาไทย",
        te: "తెలుగు",      
        zh: " 汉语",
        zht: " 漢語",
        vi: "Tiếng Việt"	
    },
    default_opts: {
      source_language: "en",
      target_languages: "all",
      display_hover: true,
      enable_corrections: false,
      enable_hover: true,
      monitor_page: false,
      remember_language: true,
      show_banner: false,
      show_disclaimer: false,
      current_domain: "",
      corrdb_name:"",
      minimal_ui: true,
      selector_div_id: "ibm-tw-selector-div-id",
      selector_table_class: "ibm-tw-selector-table-default",
      title_row_class: "ibm-tw-title-row-default",
      language_row_class: "ibm-tw-language-row-default",
      correction_row_class: "ibm-tw-correction-row-default"
    },
    opts: {},
    skip_frames: false,
    svcMap: {},
    pd: { // page data
      sa: [], // array of services to be considered given opts.{slang, tlangs, to_domains}
      svcid: "" // selected service
    },
    jarray: null,
    requests: [],
    root_url: "",
    xl_url: "",
    stat_url: "",
    curr_url:"",
    corr_url: "",
    corr_url_appr:"",
    
    loadScript: function(load) {
  	  var js = document.createElement('script');    	
  	  js.charset = "utf-8";
  	  js.innerHTML = TW.polyfill;
       
  	  js.onload = function() {
  	    load();
  	  };
  	  js.onerror = function() {    
  		  console.error("Failed to load script " + src);
  	  };
  	  document.head.appendChild(js);
  },
  
// Browsers that support all features run `init()` immediately.
// All other browsers loads polyfills and then run `init()`.
  start: function (){	
  	// /MSIE \d/.test(navigator.userAgent) ? TW.loadScript(TW.init) : TW.init();
	if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) TW.loadScript(TW.init)
  	else TW.init();
  }, 
  
    init: function(show) {     
 //     TW.loadKeyboard();
      var api_url = TW.root_url+"/tw/api/v1/";
      TW.xl_url = api_url+"translate";
      TW.stat_url = api_url+"stat";
      TW.corr_url = api_url+"corr";
      TW.corr_url_appr = api_url+"apprcorr";
      if(TW.inIframe() && !window.top.TW.skip_frames) {
        var scel = document.getElementById("ibm-transwidget-script-id");
        //TW.opts = Object.assign({}, JSON.parse(scel.getAttribute("data-ibm-tw-opts")));
        TW.opts = TW.doAssign({}, JSON.parse(scel.getAttribute("data-ibm-tw-opts")));
      } else {     
        TW.get(TW.root_url+"/tw/api/v1/services?app=tw").then(
      		  function(resp){TW.setSvcs(resp)},
      		  function(error){console.error(error)}
      		  );
      }
      // load css   
      var css_id = "transwidget-css-id";
      if(!document.getElementById(css_id)) {
        var el = document.createElement('style');
        el.id = css_id;
        el.innerHTML = TW.style;
        document.head.appendChild(el);
      }
     
    },
    loadKeyboard: function(){
      var head = document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = TW.root_url+"/keyboard.css";
      link.media = 'all';
      head.appendChild(link);
      var script = document.createElement('script');
      script.src = TW.root_url+"/keyboard.js";
      head.appendChild(script);
    },
    svc: null,
    MSIE: document.all && window.ActiveXObject,
    mode: "",
    max_url_length: 2000,
    tt_id: 0,
    tooltip_enabled: true,
    doc_title: "",
    debug: true,
    time_last_tooltip: new Date(),
    removable: "",
    removable_tags: [], // [ 'B', 'I', 'U', 'EM','STRONG' ];
    username: "",
    groupname: "",
    banner: null,
    banner_status: null,
    banner_text: null,
    queue: null,
    rqt_id: 0,
    request_scripts: null,
    // session data
    start_time: Date.now(),
    job_id: 0,
    num_nodes_translated: 0,
    // global sequence number
    transreq_id: 0,
    nsents: 0,
    clock_id: -1,
    stat_script: null,
    showTooltpTimer: [],
    hideTooltpTimer: [],
    // tooltip (info or correction)
    tt_tooltip: null,
    tt_hide_tooltip_timer: -1,
    tt_show_tooltip_timer: -1,
    tt_shim: null,
    tt_current_bg_color: null,
    tt_current_color: null,
    tt_current_node: null,
    // correction
    cr_srctext: null,
    cr_trans: null,
    cr_editing: false,
    cr_edited: false,
    cr_submit_button: null,
    cr_submit_script: null,
    cr_appr_script:null,
    cr_drag: null,
    cr_dragging: false,
    cr_dragX: 0,
    cr_dragY: 0,
    cr_repo: true,

    doAssign: function(o1, o2) {
    	
      var objs = [o1, o2],
        result =  objs.reduce(function (r, o) {
       	if(o != undefined){ 
          Object.keys(o).forEach(function (k) {
            var nk = k.replace(/-/g, "_");
            r[nk] = o[k];
          });
       	}
          return r;
        }, {});
      return result;
    },
    setSvcs: function(sstr) {
      var jobj = JSON.parse(sstr);
      // TW.default_opts = Object.assign({}, TW.default_opts, jobj.tw_opts);
      TW.default_opts = TW.doAssign(TW.default_opts, jobj.tw_opts);     
      var lopts = null;
      try {
        var scel = document.getElementById("ibm-transwidget-script-id");
        lopts = JSON.parse(scel.getAttribute("data-ibm-tw-opts"));      
        TW.skip_frames = scel.getAttribute("skip-frames", false);
        if(TW.skip_frames) {
          TW.deleteCookie("ibm-tw-disclaimer");
        }
      } catch(e) {
        TW.printMsg("GET local options failed--"+e);
        lopts = {};
      }
      //TW.opts = Object.assign({}, TW.default_opts, lopts);   
      
      TW.opts = TW.doAssign(TW.default_opts, lopts);       
      var svcs = jobj.services;
      var sarr = [];
      var from = TW.opts.source_language;
      TW.pd.sa = [];
      var tls = TW.opts.target_languages;
      var tset = null;
      if(tls == "all") tls = null;
      else {
        tset = {};
        tls.split(",").forEach(function(l) {
        if(l == "zh-TW") l = "zht"
        tset[l] = true;
        });
      }
      if(svcs != undefined){
      for(var i = 0; i < svcs.length; i++) {
        var svc = svcs[i];
        if(svc.def == true) {
          svc.tldn = TW.makeDN(svc, svc.tlang)
          TW.svcMap[svc.svcname] = svc;
          if(svc.slang != from) continue;
          if(tset == null || tset.hasOwnProperty(svc.tlang))
            TW.pd.sa.push(svc);
        }
      }
      }
      TW.pd.sa.sort(function(a,b) { return (a.tldn > b.tldn) ? 1 : ((b.tldn > a.tldn) ? -1 : 0);});
      TW.corrdb_name = TW.opts.corrdb_name;
      TW.build_tlsel();
    },
    addListener: function(el, ev, handler) {
      if (el.addEventListener) el.addEventListener(ev, handler, false);
      else if (el.attachEvent) el.attachEvent('on' + ev, handler);
      else el['on' + ev] = handler;
    },
    removeListener: function(el, ev, handler) {
      if (el.addEventListener) el.removeEventListener(ev, handler, false);
      else if (el.detachEvent) el.detachEvent('on' + ev, handler);
      else element['on' + ev] = null;
    },
    getVal: function(el, tag, def) {
      var v = el.getAttribute(tag);
      if(v == null) return def;
      if(def.constructor === Array)
        v = v.split(',');
      return v;
    },
    makeDN: function(svc, l) {
      if(l == "zh-TW") l = "zht"
      if(svc.tlang == "zh-TW") svc.tlang = "zht"

      if(svc.slang == l) return TW.languages[l];
      else return TW.languages[svc.tlang] + (svc.domain == "general" ? "" : " ("+svc.domain+")");
    },
    build_tlsel: function() {
      var sel = document.getElementById(TW.opts.selector_div_id);
      if(!sel) {
        sel = document.createElement("div");
        sel.id = TW.opts.selector_div_id;
        sel.display = "inline-block";
        sel.style.height = "70px";
        document.body.insertBefore(sel, document.body.childNodes[0]);
      }
      var selsvc = "";
      if (!TW.opts.minimal_ui) {
        selsvc = "<table id='ibm-tw-ui-container' class='"+TW.opts.selector_table_class+"'>" +
        //  "<tr><td colspan=2 class='"+TW.opts.title_row_class+"'>Translate</td></tr>"
          "<tr style='line-height:1.0em;'><td>";
      }     
      selsvc += "<select tabindex='0' id='ibm-tw-ui-langselect' style ='margin-left:1px;' class='"
        + TW.opts.language_row_class+"'><option value=''  selected>Select Language</option>";
      for(var i = 0; i < TW.pd.sa.length; i++) {
        var svc = TW.pd.sa[i];
//        var tldn = TW.makeDN(svc, svc.tlang);
        if(svc.tldn !="undefined") selsvc += "<option value='"+svc.svcname + "'>"+svc.tldn+"</option>";
      }
      selsvc += "</select>";
    	  if (TW.opts.display_hover) {
              var txt= TW.opts.enable_corrections == 1 ?
                "Show correction form on hover/focus" : "Show original text on hover/focus";
              selsvc += "<br><div style='font-family: verdana; font-size: 8pt'><input type='checkbox' id='ibm-tw-ui-tooltip' name='ibm-tw-ui-tooltip' "
                + (TW.opts.enable_hover ? "checked='checked'":"")
                + "><div id='ibm-tw-ui-tooltip-desc' style='display:inline; width: 100%;'>"+txt+"</div></div>";
            }
      if (!TW.opts.minimal_ui) {
        selsvc += "</td></tr></table>";
      }
      sel.innerHTML = selsvc;
      if (TW.opts.display_hover) {
        TW.addListener(document.getElementById('ibm-tw-ui-tooltip'), "change",
          function(e){TW.setHoverCookie(e);});       
      }
      document.getElementById('ibm-tw-ui-langselect').selectedIndex = 0;
      TW.addListener(sel, "change", TW.opts.show_disclaimer == false || TW.isDisclaimerAccepted() ?
        function(){TW.xlate();} : function(){TW.showDisclaimer();});
      TW.translate_cookie();
      if(!TW.skip_frames)
        TW.traverseFrames();
    },
    setRevertToOriginal: function() {
      var sel = document.getElementById('ibm-tw-ui-langselect');
      if (sel) {
        var langs = sel.options;
        langs[0].text = "Return to "+TW.languages[TW.opts.source_language];
        langs[0].value = "1";
      }
    },
    abortRequests: function(){
    	TW.requests.forEach(function(request) {
  		  request.abort()
  		});
    	TW.requests = [];
    },
    xlate: function () {    
      if (window.__tw_loading__) return;
      // abort all running requests
      TW.abortRequests();
      //  hide corrections tooltip
	  if (TW.tt_tooltip) {
	  TW.cr_editing = false;
	  TW.cr_edited = false;
      TW.hideTooltip();
	  }
      
      var langs = document.getElementById('ibm-tw-ui-langselect').options;
      if (langs.selectedIndex==0) {    	 
        if (langs[0].value == "1")
          langs[0].value = "";
        else
          return;
        TW.unsetSvcid();
        window.location.reload();
        return;
      }     
      var svcid = langs[langs.selectedIndex].value;
      // set a global translation sequence number
      TW.transreq_id ++;     
      TW.doTranslate(svcid);
    },
    doTranslate: function(svcid) {
      if (window.TW ) {
        if (TW.opts.remember_language) {
          document.cookie = "twsvcid=" + svcid + "; path=/; "+TW.opts.current_domain + "; SameSite=Lax";
        } else {
          var now = new Date();
          now.setTime(now.getTime()+8000);
          document.cookie = "twsvcid=" + svcid + "; path=/; "+TW.opts.current_domain+" expires=" + now.toGMTString() + "; SameSite=Lax";
        }
        svcid = TW.setSvcid(svcid);
        TW.svc = TW.svcMap[svcid]; 
        window.setTimeout(function(){TW.translateNow();}, 100);
        //window.location.reload();
      } else {
        window.__tw_loading__ = true;
        svcid = TW.setSvcid(svcid);
        window.__tw_loading__ = false;
        if (TW.opts.remember_language) {
          document.cookie = "twsvcid=" + svcid + "; path=/; "+TW.opts.current_domain + "; SameSite=Lax";
        }
      }
    },
    allowTo: function() {
      var ca = document.cookie.split(';');
      var l = "";
      for (var i = 0; i < ca.length; ++i) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf("twsvcid=")==0) {
          return false;
        }
      }
      return true;
    },
    unsetSvcid: function() {
      var now = new Date();
      now.setTime(now.getTime()+8000);
      document.cookie = "twsvcid=tobedeleted; path=/; "+TW.opts.current_domain+" expires=" + now.toGMTString()+ "; SameSite=Lax";
    },
    getSvcid: function() {
      var ca = document.cookie.split(';');
      var svcid = "";
      for (var i = 0; i < ca.length; ++i) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf("twsvcid=")==0) {
          svcid = c.substring("twsvcid=".length, c.length);
          // we are reverting to original - this is the marker
          if (svcid && svcid.indexOf("tobedeleted") >= 0) return "";
        }
      }
      if (svcid != "") {
        var svc = TW.svcMap[svcid];
        // check if language changed
       
        if (svc.slang != TW.opts.source_language) {
          var sel = document.getElementById('ibm-tw-ui-langselect');
          if (!sel) return "";
          var i;
          for(i = 0; i < TW.pd.sa.length; ++i) {
            if(TW.pd.sa[i].svcname == svcid) break;
          }
          if (i == TW.pd.sa.length) {
            TW.unsetSvcid();
            return "";
          }
        }
      }
      return svcid;
    },
    setSvcid: function(svcid) {
      var sel = document.getElementById('ibm-tw-ui-langselect');
      if (sel) {
        TW.setRevertToOriginal();
        var svcidl = sel.options;
        for (var i = 0; i < svcidl.length; ++i) {
          if (svcidl[i].value == svcid) {
            svcidl.selectedIndex=i;
            return svcidl[i].value;
          }
        }
      }
      return svcid;
    },
    translate_cookie: function() {
      var svcid = TW.getSvcid();
      if (svcid != "") {
        // first unset the cookie if we do not plan to store the language
        if (TW.opts.remember_language == false) TW.unsetSvcid();
        // we are trying to translate onload again, dangerous...
        TW.doTranslate(svcid);
      }
    },
    setHoverCookie: function(e) {
      var hoverEnable = this.checked ? 1 : 0;
      var now = new Date();
      now.setTime(now.getTime()+1000*60*60*24*7);
      var path = "/";
      //var id = window.location.pathname.indexOf("/", 1);
      //if (id != -1) path = window.location.pathname.slice(0, id+1);
      document.cookie = "hoverEnable="+hoverEnable+"; path="+path+"; "+TW.opts.current_domain+" expires="
        + now.toGMTString() + "; SameSite=Lax";
      if(hoverEnable == 0) TW.hide();
      e.stopPropagation();
    },
    getValue: function(e) {
      var s = "";
      for (m in e.childNodes) {
        var c = e.childNodes[m];
        if (c.nodeName=="#text") s = s + c.nodeValue;
        else s = s + TW.getValue(c);
      }
      return s;
    },
    setValue: function(e, str) {
      e.innerHTML = "";
      e.appendChild(document.createTextNode(str+ " "));
    },
    getMaxNodeSize: function(text, l) {
      // for Arabic, Farsi and Chinese, we assume a blow-up factor of 10
      if (TW.isLatin1(l) && TW.isLatin1Text(text)) return 1000;
      else return 150;
    },
    //return true if we should translate this
    //avoids sending numbers and punctuations for translation
    NUM_RE: /^[0-9]+$/,
    PUNCT_RE: /^[\$,@#~`\%\*\^\&\(\)\+\=\[\-\_\]\[\}\{\;\:\'\"\<\>\?\|\\\!\$\.]+$/,
    isTranslatable: function(s) {
      if(TW.NUM_RE.test(s) ||
         TW.PUNCT_RE.test(s)) {
        return false;
      }
      return true;
    },
    isLatin1Text: function(text) {
      for (var i = 0; i < text.length; ++i) {
        var ch = text.charCodeAt(i);
        if (ch > 255) {
          switch (ch) {
          case 338: case 339: case 352: case 353: case 376: case 402: case 8211:
          case 8212: case 8216: case 8217: case 8218: case 8220: case 8221: case 8222:
          case 8224: case 8225: case 8226: case 8230: case 8240: case 8364: case 8482:
            break;
          default:
            return false;
          }
        }
      }
      return true;
    },
    stringtrim: function(str) {
      if (str != null)
        return  str.replace(/^\s+/,'').replace(/\s+$/,'');
      return str;
    },
    getAttribute: function(n, a) {
      if (n==null || a==null || a=="") return null;
      if(!n.getAttribute) return null;
      try {
        var s = n.getAttribute(a);
        if (s==null || (typeof s != "string")) return null;
        return s;
      }catch(err) {
        TW.printMsg("GET ATT "+a+" for "+n)
      }
    },
    // the normalize routine would do the following two things: 1) replace
    // all multiple white space characters with a single space, 2) trim
    // the leading and trailing spaces
    normalize: function(str) {     	
      if (str==null) return "";
      RegExp.multiline = true;
      var s = str.replace(/\u200b/g, "");
      s = s.replace(/[\u00a0\s]+/g, ' ') //==
      s = s.replace(/^[\u00a0\s]+/,'');
      s = s.replace(/[\u00a0\s]+$/,'');
      return s;
    },
    printClockHand: function() {
      var per = (TW.queue) ? Math.floor(TW.num_nodes_translated*100/TW.queue.length) : 0;
      TW.updateStatus(per + "% translated");
    },
    updateStatus: function(str) {
      if (TW.opts.show_banner) {
        var sldn = TW.makeDN(TW.svc, TW.svc.slang);
        var tldn = TW.makeDN(TW.svc, TW.svc.tlang);
        var tover = "";
        if(str.indexOf("%")== -1) {
          // first time, add aria role to intro         
          if (TW.opts.display_hover) tover = " or mouse over text";
          TW.banner_text = "<b><span lang='en-US' xml:lang='en-US' aria-live='polite'>"
            + "This page is being translated to "+ tldn + " by a machine.</span>"
            + "<span lang='en-US' xml:lang='en-US'>" + str
            + ".</span></b><span lang='en-US' xml:lang='en-US'> "
            + "<a href='#' id='ibm-tw-banner-revert'> "
            + "Return to "+ sldn + "</a>"+  tover
            + " to view original language.</span>";
        } else {
          // continuation, add aria role to percentage
          TW.banner_text = "<b><span lang='en-US' xml:lang='en-US'>"
            + "This page is being translated to " + tldn + " by a machine.</span>"
            + "<span lang='en-US' xml:lang='en-US' aria-live='polite'> " + str
            + ".</span></b><span lang='en-US' xml:lang='en-US'>"
            + "<a href='#' id='ibm-tw-banner-revert'> "
            + "Return to "+ sldn
            + "</a>"+tover + " to view original language.</span>";
        }
        if (TW.banner_status) {
          TW.banner_status.innerHTML = TW.banner_text;
          TW.addListener(document.getElementById('ibm-tw-banner-revert'), "click",
            function(e){e.preventDefault(); TW.revert();});
        }
      } else {
        document.title = str
      }
    },
    setStatusToDone: function() {
      document.body.style.cursor = "auto";
      if (TW.clock_id != -1) window.clearInterval(TW.clock_id);
      TW.clock_id = -1;
      var dur = (Date.now() - TW.start_time)/1000;
      if (TW.opts.show_banner) {
    	  var tover = "";
          if (TW.opts.display_hover) tover = " or mouse over text";
        TW.banner_text = "<span lang='en-US' xml:lang='en-US' aria-live='polite'>"
          + "Translation complete.</span><span lang='en-US' xml:lang='en-US'>"
          + "This page was translated to "+ TW.makeDN(TW.svc, TW.svc.tlang) + " by a machine.</span> "
          + "<span lang='en-US' xml:lang='en-US' aria-live='polite'>"
          + "<a href='#' id='ibm-tw-banner-revert'> "
          + "Return to "+ TW.makeDN(TW.svc, TW.svc.slang)+ "</a>"+ tover+ " to view original language.</span>";
        if (TW.banner_status) {
          TW.banner_status.innerHTML = TW.banner_text;
          TW.addListener(document.getElementById('ibm-tw-banner-revert'), "click",
            function(e){e.preventDefault(); TW.revert();});
        }
      } else {
        document.title = TW.doc_title + " (" + dur + " s)";
      }
    },
    setStatusToTranslating: function() {
      if (TW.opts.show_banner) {
        if (TW.getCookie("hideBanner") != "yes") {
          TW.showBanner();
        } else {
          TW.hideBanner();
        }
        TW.banner_status = document.getElementById("ibm-tw-top-banner-status");
      }
      document.body.style.cursor = "wait";
      TW.clock_id = window.setInterval(function(){TW.printClockHand();}, 500);
      TW.updateStatus("Translating");
    },
    stopTranslation: function() {
    	 // abort all running requests
    	TW.abortRequests();
      // first tell all the children to stop
      for (var i=0; i<window.frames.length; ++i) {
        try {
          var win = window.frames[i];
          win.TW.stopTranslation();
        } catch(e) {
        }
      }
      // if we are already done, nothing to abort
      if (TW.mode == "translated") return;
      TW.mode = "aborted";
      TW.setStatusToDone();
      for (var i = 0; i < TW.request_scripts.length; ++i) {
        var script =  TW.request_scripts[i];
        if (script) document.body.removeChild(script);
         TW.request_scripts[i] = null;
      }
    },
    escapeHTML: function(str) {
      var s = str.replace("&", "&amp;");
      s = s.replace("<", "&lt;");
      s = s.replace(">", "&gt;");
      return s;
    },
    sendTranslationJobs: function() {    
      if (TW.mode == "aborted") return;
      //var xlquery="?service="+TW.svc.svcname
      //  +"&reply_type=js:TW.insertXl&json_fmt_out=p_sstm";
      var xlquery="?service="+TW.svc.svcname +"&json_fmt_out=p_sstm";
      TW.rqt_id = TW.job_id;
      var i = 0;
      while (TW.job_id < TW.queue.length) {
        var job = TW.queue[TW.job_id];
        var node = job.node;
        var s;
        switch(job.type) {
        case "title": s = TW.getAttribute(node, "title"); break;
        case "alt":   s = TW.getAttribute(node, "alt"); break;
        case "placeholder":   s = TW.getAttribute(node, "placeholder"); break;
        case "value": s = TW.getAttribute(node, "value"); break;
        case "tooltipText": s = node.tooltipText; break;
        case "aria-label": s = TW.getAttribute(node, "aria-label"); break;
        default:      s = node.nodeValue; break;
        }
        var s = TW.normalize(s);
        if (s!= "") {
        var p = "&text=" + encodeURIComponent(s);
        if ((TW.xl_url.length+xlquery.length+p.length) > TW.max_url_length) {
          // longer than allowed URL length, break out
          break;
        }
        xlquery += p;
        }
        i++;
        TW.job_id++;
      }
      xlquery += "&rqtid="+TW.rqt_id;
      //  query += "&uid="+TW.username;     
      if(i!=0) {    	  
    	  TW.curr_url = window.location.href;
    	//  TW.curr_url = TW.root_url;
        var src = TW.xl_url+xlquery + "&url="+ encodeURIComponent(TW.curr_url); 
        TW.sendTranslateRequest(src);
      } else {
        TW.job_id++;
        TW.num_nodes_translated++
      }
      if (TW.job_id < TW.queue.length) TW.sendTranslationJobs();
    },
    sendTranslateRequest: function(src){
        try{
         // Asign a global sequence number transreq_id
         var transreq_id = TW.transreq_id;       	
       	TW.get(src).then(function(resp){
       	 // to avoid race conditions
          	 if(transreq_id != TW.transreq_id) return;
          	 TW.insertXl(resp);
          	document.body.style.cursor = "auto";
       	    }, function(error){
       	    console.error(error);
       	    });
       	
        }
        catch(error){
       	 console.error(error); 
        }
    }, 
    insertXl: function(jsonstr) {    
      if (TW.mode == "aborted") return;      
      // construct the object
      var reply = JSON.parse(jsonstr);
      var job = null;
      var node = null;
      var p = null;
      var srctext = "";
      var rqtid = reply.rqtid;
      var irqtid = parseInt(rqtid);
      var sts;
      var msg;
      var plist;
      if(reply.hasOwnProperty("p")) {
        sts = "OK";
        plist = reply.p;
        msg = "got " + plist.length + " paragraphs";
      } else {
        sts = reply.hasOwnProperty("code") ? reply.code : reply.hasOwnProperty("error_code") ?
          reply.error_code : "ERROR";
        var msg = reply.hasOwnProperty("error") ? reply.error :
          reply.hasOwnProperty("error_message") ?
            reply.error_message : "unknown system error";
      }     
      if (sts != "OK") { // error translating
        TW.next(irqtid,true);
        TW.updateStatus(msg + ". Refresh the page, please.");
        document.body.style.cursor = "auto";
        if (TW.clock_id != -1) window.clearInterval(TW.clock_id);
        TW.clock_id = -1;     
        return;
      }       
      for(var h = 0; h < plist.length; h++) {
        TW.num_nodes_translated++;
        var id = h + irqtid;
        job = TW.queue[id];
        // skip bad jobs
        // TODO: this parentNode is a strange IE bug, which I hope will be resolved in the latest release and should be removed
        if (!job || !job.node || typeof job.node.parentNode == 'unknown') {
          continue;
        }
        node = job.node;
        p = node ? node.parentNode : null;
        srctext = node ? node.nodeValue : null;
        TW.queue[id] = null;
        var sents = plist[h];
        TW.nsents += sents.length;      
        var text = "";       
        for (var i = 0; i < sents.length; ++i) {          
        text += sents[i].ttxt + "\n";
        }
        if (node) {
          switch(job.type) {
          case "doctitle":
            TW.doc_title = text;
            continue;
          case "title":
            node.setAttribute("srctext", TW.getAttribute(node, "title"));
            node.setAttribute("title", text);
            continue;
          case "tooltipText":
            var srctext = node.tooltipText;
            node.setAttribute("srctext", srctext);
            node.setAttribute("title", "<i>" + srctext + "</i><br><br>" + text);
            //node.setAttribute("title", "");
            //node.tooltipText = "<i>" + srctext + "</i><br><br>" + text;
            //node.setAttribute("title", text);
            continue;
          case "alt":
            node.setAttribute("srctext", TW.getAttribute(node, "alt"));
            node.setAttribute("alt", text);
            continue;
          case "placeholder":
              node.setAttribute("srctext", TW.getAttribute(node, "placeholder"));
              node.setAttribute("placeholder", text);
              node.id = "ibm-tw-placeholder-"+ Math.floor((Math.random() * 100) + 1);
              TW.addListener(node, "mouseover", TW.delayedShowTooltip);
              TW.addListener(node, "mouseout", TW.delayedHideTooltip);
              TW.addListener(node, "focus", function(){TW.accessShowTooltip();});
              TW.addListener(node, "blur", function(){TW.delayedHideTooltip();});
              continue;
          case "aria-label":
              node.setAttribute("srctext", TW.getAttribute(node, "aria-label"));
              node.setAttribute("aria-label", text);
              continue;
          case "value":        	         		  
        		  node.setAttribute("srctext", TW.getAttribute(node, "value"));
        		  node.setAttribute("value", text);
        	 
            continue;
          default: break;
          }
        }
        if (p && (text!="" || p.nodeName=="PRE")) {
          // Keep the display property so newnode can be assigned the property
          var disp = p.currentStyle ? p.currentStyle.display : getComputedStyle(p, null).display;
          // next replace the text
          if (p.nodeName=="OPTION") {
            p.setAttribute("srctext", node.nodeValue);
            p.replaceChild(document.createTextNode(text), node);
            
          }
          else if (p.nodeName=="TEXTAREA") {
           p.setAttribute("srctext", p.value);
            p.value = text;
          }
          else {
            var isPRE = p.nodeName=="PRE";
            var isText = (p.nodeName.toUpperCase()=="TEXT" || p.nodeName.toUpperCase()=="TSPAN" || p.nodeName.toUpperCase()=="TEXTPATH");
            for (var j=0; j<sents.length; ++j) {
              // SVG text nodes need to be created in a different way
              if (isText)
                var newnode = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
              else
                var newnode = document.createElement('span');              
              var t = sents[j].ttxt;
             
              if (j==0) t = " " + t + " ";
              else t = t + " ";
         
              if (isPRE) t = t + "\n";
              newnode.id = "ibm-tw-" + TW.tt_id + "-" + j;
              TW.tt_id++;
              newnode.className = "ibm-tw-" + TW.svc.tlang;
              // append the new text node
              newnode.appendChild(document.createTextNode(t));
              if (disp!="none" && !isText)
                newnode.style.display = "inline";
              p.insertBefore(newnode, node);              
              newnode.setAttribute("srctext", sents[j].stxt + " ");
              // accessibility
              //newnode.setAttribute("tabindex","0");
              //newnode.setAttribute("xml:lang",TW.svc.tlang);
              newnode.setAttribute("lang",TW.svc.tlang);
              //startsWith absent in IE
              //if (sents[j].origin.startsWith("human")) newnode.className = newnode.className + " ibm-tw-tm";
              if (sents[j].src.substring(0, 1) == 'h') newnode.className = newnode.className + " ibm-tw-tm";
              TW.addListener(newnode, "mouseover", TW.delayedShowTooltip);
              TW.addListener(newnode, "mouseout", TW.delayedHideTooltip);
              TW.addListener(newnode, "focus", function(){TW.accessShowTooltip();});
              TW.addListener(newnode, "blur", function(){TW.delayedHideTooltip();});
            }
            p.removeChild(node);
          }
          // modify the styling of parent node for right-to-left langs
          if (TW.isRightToLeft(TW.svc.slang)) {
            //p.style.unicodeBidii = "bidi-override";
            p.style.direction = "ltr";
            p.style.textAlign = "left";
            if (p.parentNode) {
              // p.parentNodei.style.unicodeBidii = "embed");
              p.parentNode.style.direction = "ltr";
              p.parentNode.style.textAlign = "left";
            }
          }
          if (TW.isRightToLeft(TW.svc.tlang)) {
            // p.style.unicodeBidi = "embed";
            p.style.direction = "rtl";
            p.style.textAlign = "right";
          }
        }
      }
      TW.next(irqtid);
    },
    startTranslate: function() {
      // prepare some data structures
      TW.queue = new Array(0);
      TW.request_scripts = new Array(0);
      TW.rqt_id = 0;
      // if the text source language doesn't match, just ignore the request
      // if (!TW.checkSourceLang(document.body)) return;
      if (document.title!="" && TW.mode=="translating") {
        TW.queue.push({
          node: document.createTextNode(document.title),
          type: "doctitle"
        });
      }
      // traverse the DOM tree
      TW.selUntag(document.body);
      TW.mergeTextNodes(document.body);
      TW.traverseDOM(document.body);  
      TW.clearSession();
      if (TW.mode=="translating") {
        TW.setStatusToTranslating();
      }
      if (TW.queue.length>0) {
        TW.sendTranslationJobs();
      } else if (TW.opts.monitor_page && TW.mode=="translated")
        window.setTimeout(function(){TW.startTranslate();}, 1000);
    },
    next: function(id,clear) {
      if (id>=0) {
        var script =  TW.request_scripts[id];
        if (clear==true && script) {
          TW.num_nodes_translated+= script.src.split("txt=").length-1;
        }
        if (script) document.body.removeChild(script);
         TW.request_scripts[id] = null;
      }
      // done translating
      if (TW.num_nodes_translated >= TW.queue.length) {
        // TW.sendStats();
        if (TW.mode == "translating") {
          TW.mode = "translated";
          document.body.style.cursor = "auto";
          document.title = TW.doc_title;
          TW.setStatusToDone();
        }
        if (TW.opts.monitor_page && TW.mode=="translated")
          window.setTimeout(function(){TW.startTranslate();}, 1000);
        return;
      }
    },
    
    sendStats: function () {
     var stat = new Object();
      stat.st = TW.start_time;
      stat.dur = Date.now() - TW.start_time;
      stat.svcid = TW.svc.svcname;
      stat.ns = TW.nsents;
      stat.did = window.location.href;
      var src = TW.stat_url+"?stat=" + encodeURIComponent(JSON.stringify(stat));
      
      TW.get(src).then(function(resp){
         console.log(resp);
      }, function(error){
       	    console.error(error);
       	    });
    },   
   
    enterEditingMode: function() {
      // is the mouse over the editing panel?
      TW.cr_editing = true;
      TW.clearShowTooltipTimeout();
      TW.clearHideTooltipTimeout();
    },
    exitEditingMode: function() {
      // is the mouse over the editing panel?
      if (TW.cr_edited) return;
      TW.cr_editing = false;
      TW.clearShowTooltipTimeout();
      TW.clearHideTooltipTimeout();
      TW.tt_hide_tooltip_timer = window.setTimeout(function(){TW.hideTooltip();}, 5000);
    },
    setEditedCorrection: function() {
      if (!TW.cr_edited) {
        TW.cr_edited = true;
        var el = document.getElementById("ibm-tw-suggest");
        el.innerHTML = TW.suggestTextModified;
        el = document.getElementById("ibm-tw-mod-status");
        el.innerHTML = TW.modifiedStatus;
      }
    },
    isTooltipEnabled: function() {
      var tt = TW.skip_frames?
        window.document.getElementById('ibm-tw-ui-tooltip'):
        window.top.document.getElementById('ibm-tw-ui-tooltip');
      if (tt) TW.tooltip_enabled = tt.checked;
      return TW.tooltip_enabled;
    },
    accessShowTooltip: function () {
      if (TW.cr_editing || TW.isTooltipEnabled()==false) return;
      var e = document.getElementById(this.id);
      if (e==null) return;
      var st = TW.getAttribute(e, "srctext");
      if(st != null && st != "")
        TW.showTooltip(this.id);
    },
    delayedShowTooltip: function() {
      var timeCurrent = new Date();
      var timeElapsedSinceLastTooltip = new Date();
      timeElapsedSinceLastTooltip.setTime(timeCurrent.getTime() - TW.time_last_tooltip.getTime());
      var nTimer = 1000;
      if (timeElapsedSinceLastTooltip.getMilliseconds() < 500)
        nTimer = 100;
      // clear show/hide tooltip ids for corrections
      TW.clearShowTooltipId();     
      TW.clearHideTooltipId(); 
      TW.clearShowTooltipTimeout();
      if (TW.cr_editing || TW.isTooltipEnabled()==false) return;
      // set up new timeout
      var id = this.id;
      TW.tt_show_tooltip_timer = window.setTimeout(function(){TW.showTooltip(id);}, nTimer);
      // add  showtooltip timeout id
      TW.showTooltpTimer.push(TW.tt_show_tooltip_timer);
    },
    delayedHideTooltip: function() {
      if (!TW.opts.enable_corrections) {
        TW.hideTooltip();
      } else {
        TW.clearShowTooltipTimeout();
        TW.clearHideTooltipTimeout();
        if (TW.cr_editing) return;
        TW.hide_tooltip_timer = window.setTimeout(function(){TW.hideTooltip();}, 5000);
     // add  hidetooltip timeout id
        TW.hideTooltpTimer.push(TW.hide_tooltip_timer);
        if (TW.tt_current_node) {
          TW.tt_current_node.style.backgroundColor = TW.tt_current_bg_color;
          TW.tt_current_node.style.color = TW.tt_current_color;
        }
      }
    },
    clearShowTooltipTimeout: function() {
      if (TW.tt_show_tooltip_timer != -1) {
        window.clearTimeout(TW.tt_show_tooltip_timer);
        TW.tt_show_tooltip_timer = -1;
      }
    },
    clearHideTooltipTimeout: function() {
      if (TW.tt_hide_tooltip_timer != -1) {
        window.clearTimeout(TW.tt_hide_tooltip_timer);
        TW.tt_hide_tooltip_timer = -1;
      }
    },
    suggestText: "Suggest a better translation below",
    suggestTextModified: "Suggest a better translation below<span style='color: #666666;'>*</span>",
    modifiedStatus: "* Text has changed. To hide this click: Submit or Cancel",

    hideTooltip: function() {
      TW.clearHideTooltipTimeout();
      TW.clearShowTooltipTimeout();
      // hide the current tooltip
      //TW.cr_editing = false;
      if (TW.cr_edited) return;
      if (TW.cr_edited) {
        TW.cr_edited = false;
        var el = document.getElementById("ibm-tw-suggest");
        el.innerHTML = TW.suggestText;
        el = document.getElementById("ibm-tw-mod-status");
        el.innerHTML = "";
      }
      if(TW.cr_editing) return;
      if (TW.tt_tooltip  && TW.tt_shim) {
        TW.tt_tooltip.style.visibility =  "hidden";
        TW.tt_shim.style.visibility = "hidden";
        if (TW.cr_submit_button)
          TW.cr_submit_button.disabled = false;
        if (TW.tt_current_node) {
          TW.tt_current_node.style.backgroundColor = TW.tt_current_bg_color;
          TW.tt_current_node.style.color = TW.tt_current_color;
        }
        TW.time_last_tooltip = new Date();
       // VKI_close();
      }
      TW.cr_repo = true;
    },
    hide: function() {
      TW.clearHideTooltipTimeout();
      TW.clearShowTooltipTimeout();
      // hide the current tooltip
      TW.cr_editing = false;
      if (TW.cr_edited) {
        TW.cr_edited = false;
        var el = document.getElementById("ibm-tw-suggest");
        el.innerHTML = TW.suggestText;
        el = document.getElementById("ibm-tw-mod-status");
        el.innerHTML = "";
      }
      if (TW.tt_tooltip) {
        TW.tt_tooltip.style.visibility =  "hidden";
        TW.tt_shim.style.visibility = "hidden";
        if (TW.cr_submit_button)
          TW.cr_submit_button.disabled = false;
        if (TW.tt_current_node) {
          TW.tt_current_node.style.backgroundColor = TW.tt_current_bg_color;
          TW.tt_current_node.style.color = TW.tt_current_color;
        }
        TW.time_last_tooltip = new Date();
        TW.cr_repo = true;
       // VKI_close();
      }
    },
    showTooltip: function(id) {
      var hoverShow = false;
      var hoverElement = document.getElementById('ibm-tw-ui-tooltip');
      if (hoverElement == null) {
        hoverShow = TW.opts.enable_hover;
      } else if (hoverElement.checked) hoverShow = true;
      if ( !hoverShow ) return;
      var el = document.getElementById(id);
      if(el == null) return;
      if (TW.opts.enable_corrections == 1) {
        TW.showCorrectionTooltip(el);
      } else TW.showInfoTooltip(el);
      //TW.tt_tooltip.blur();
      //el.focus();
    },
    showCorrectionTooltip: function(e) {
      TW.tt_current_node = e;
      if (e.style.backgroundColor != "aliceblue") {
        TW.tt_current_bg_color = e.style.backgroundColor;
        TW.tt_current_color = e.style.color;
      }
      e.style.backgroundColor = "aliceblue";
      e.style.color = "grey";
      // create the tooltip element if it's not already there.
      if (!TW.tt_tooltip) {
        var div = document.createElement('div');
        div.innerHTML =
          "<div class='ibm-tw-table' translate='0'>\
            <table style='width : 100%;'>\
              <tr>\
                <td id='ibm-tw-drag' lang='en-US' aria-live='polite' tabindex='0'>Original Text</td>\
              </tr>\
              <tr>\
                <td colspan=2>\
                  <span class='ibm-tw-srctxt-c' aria-live='polite'>\
                    <textarea cols=30 rows=3 tabindex='0' id='ibm-tw-srctext'></textarea>\
                  </span>\
                </td>\
              </tr>\
              <tr>\
                <td colspan=2 id='ibm-tw-suggest' tabindex='0'>\
                  <span lang='en-US'>" + TW.suggestText + "</span>\
                </td>\
              </tr>\
              <tr>\
                <td colspan=2>\
                  <div class='ibm-tw-trans-c'>\
                    <textarea cols=30 rows=1 tabindex='0' id='ibm-tw-trans' class='keyboardInput'>\
                    </textarea>\
                  </div>\
                </td>\
              </tr>\
              <tr>\
                <td id='ibm-tw-buttons'> \
                  <button type=button class ='btn btn-secondary'id='ibm-tw-submit'  style='font-size: 8pt; margin-bottom: 2px;' >\
                    <span lang='en-US'><b>Submit</b></span>\
                  </button>\
                  &nbsp;&nbsp;\
                  <button class ='btn btn-secondary' id='ibm-tw-cancel-corr' style='font-size: 8pt' type=button>\
                    <span lang='en-US'>Cancel</span>\
                  </button> \
                  &nbsp;&nbsp;\
                </td>\
              </tr>\
              <tr>\
                <td><span id='ibm-tw-mod-status'></span></td>\
            </table>\
          </div>";
        div.id = "ibm-tw-tooltip";
        document.body.appendChild(div);
        TW.tt_tooltip = div;
              
        
        
        TW.addListener(document.getElementById('ibm-tw-submit'), "click",
            function(){TW.submitBetterTrans();});
   TW.addListener(document.getElementById('ibm-tw-cancel-corr'), "click",
            function(){TW.hide();});
        TW.addListener(document.getElementById('ibm-tw-srctext'), "keyup",
          function() { TW.resizeSource(); });
        TW.addListener(document.getElementById('ibm-tw-srctext'), "focus",
          function() { TW.resizeSource(); });
        TW.addListener(document.getElementById('ibm-tw-trans'), "keyup",
          function() { TW.resizeTranslation(); });
        TW.addListener(document.getElementById('ibm-tw-trans'), "change",
          function() { TW.setEditedCorrection(); });
        TW.addListener(document.getElementById('ibm-tw-trans'), "keypress",
          function() { TW.setEditedCorrection(); });
        TW.addListener(document.getElementById('ibm-tw-trans'), "focus",
          function() { TW.resizeTranslation(); });
        TW.cr_srctext = document.getElementById('ibm-tw-srctext');
        TW.cr_trans = document.getElementById('ibm-tw-trans');
        TW.cr_drag = document.getElementById('ibm-tw-drag');
        TW.cr_submit_button = document.getElementById('ibm-tw-submit');
        TW.addListener(div, "mouseover", function(){TW.enterEditingMode();});
        TW.addListener(div, "mouseout", function(){TW.exitEditingMode();});
        if (TW.isRightToLeft(TW.svc.slang)) {
          TW.cr_srctext.style.direction = "rtl";
          TW.cr_srctext.style.fontSize = "12pt";
          TW.cr_srctext.style.fontFamily = "tahoma";
        }
        if (TW.isRightToLeft(TW.svc.tlang)) {
          TW.cr_trans.style.direction = "rtl";
          TW.cr_trans.style.fontSize = "12pt";
          TW.cr_trans.style.fontFamily = "tahoma";
        }
				TW.addListener(TW.cr_drag, "mousedown", function(e) {TW.onDragStart(e);});
				TW.cr_drag.ondragstart = function() { return false; };
        var shim = document.createElement('iframe');
        shim.id = "ibm-tw-tooltip-shim";
        document.body.appendChild(shim);
        TW.tt_shim = shim;
      }
      TW.cr_srctext.value = TW.stringtrim(TW.getAttribute(e, "srctext"));
      TW.cr_srctext.setAttribute("lang", TW.svc.slang);
      TW.resizeSource();
      // TW.cr_trans.style.fontWeight = "normal";
      
      TW.cr_trans.value = TW.stringtrim(TW.getValue(e));
      if( e.id.indexOf("placeholder")!=-1) TW.cr_trans.value = TW.stringtrim(TW.getAttribute(e, "placeholder"));
      //TW.cr_trans.setAttribute("xml:lang", TW.svc.tlang);
      TW.cr_trans.setAttribute("lang", TW.svc.tlang);
      TW.resizeTranslation();
      
      // move the tooltip panel to the right place
      if(TW.cr_repo) TW.repositionTooltip(e);
      TW.clearHideTooltipTimeout();
      TW.tt_hideTooltipTimer = window.setTimeout(function(){TW.hideTooltip();}, 5000);
      // add hidetooltip timeout id
      TW.hideTooltpTimer.push(TW.tt_hideTooltipTimer);
      //VKI_buildKeyboardInputs();
    },
    showInfoTooltip: function(e) {
      TW.tt_current_node = e;
      if (e.style.backgroundColor != "aliceblue") {
        TW.tt_current_bg_color = e.style.backgroundColor;
        TW.tt_current_color = e.style.color;
      }
      e.style.backgroundColor = "aliceblue";
      e.style.color = "grey";
      // create the tooltip element if it's not already there.
      var srctext, trans;
      if (!TW.tt_tooltip) {
        var div = document.createElement('div');
        div.innerHTML =
          "<div class='ibm-tw-info-table' translate='0'>\
              <table width='100%' >\
                  <tr>\
                      <td colspan=2 >\
                          <div class='ibm-tw-info-tooltip-header' lang='en-US' aria-live='polite' tabindex='0'>Original Text</div>\
                      </td>\
                  </tr>\
                  <tr>\
                      <td class='ibm-tw-info-table-row' colspan=2 >\
                          <span>\
                              <span id='ibm-tw-srctext-info' aria-live='polite' tabindex='0'>\
                                  something new something new - a place holder for ibm-tw-srctext-info\
                              </span>\
                          </span>\
                      </td>\
                  </tr>\
                  <tr>\
                      <td colspan=2 >\
                          <span>\
                              <span   />\
                                  <HR WIDTH='100%'>\
                              </span>\
                          </span>\
                      </td>\
                  </tr>\
                  <tr>\
                      <td >\
                          <div class='ibm-tw-info-tooltip-header' lang='en-US' >Translated Text</div>\
                      </td>\
                  </tr>\
                  <tr>\
                      <td class='ibm-tw-info-table-row'>\
                          <span>\
                              <span id='ibm-tw-trans-info' />\
                                  something new something new - a place holder for ibm-tw-trans\
                              </span>\
                          </span>\
                      </td>\
                  </tr>\
              </table>\
          </div>";
        div.id = "ibm-tw-tooltip";
        document.body.appendChild(div);
        TW.tt_tooltip = div;
        srctext = document.getElementById('ibm-tw-srctext-info');
        trans = document.getElementById('ibm-tw-trans-info');
        if (TW.isRightToLeft(TW.svc.slang)) {
          srctext.style.direction = "rtl";
          srctext.style.fontSize = "8pt";
          srctext.style.fontFamily = "tahoma";
        }
        if (TW.isRightToLeft(TW.svc.tlang)) {
          trans.style.direction = "rtl";
          trans.style.fontSize = "8pt";
          trans.style.fontFamily = "tahoma";
        }
        var shim = document.createElement('iframe');
        shim.id = "ibm-tw-tooltip-shim";
        document.body.appendChild(shim);
        TW.tt_shim = shim;
      } else {
        srctext = document.getElementById('ibm-tw-srctext-info');
        trans = document.getElementById('ibm-tw-trans-info');
      }
      srctext.innerHTML = TW.escapeHTML(TW.getAttribute(e, "srctext"));
      trans.innerHTML = TW.escapeHTML(TW.stringtrim(TW.getValue(e)));
      srctext.setAttribute("lang",TW.svc.slang)
      trans.setAttribute("lang",TW.svc.tlang);
      // move the tooltip panel to the right place
      TW.repositionTooltip(e);
    },
		onDragStart: function(event) {     
      TW.cr_dragging = true;
  		var shiftX = event.clientX - TW.tt_tooltip.getBoundingClientRect().left;
  		var shiftY = event.clientY - TW.tt_tooltip.getBoundingClientRect().top;
  		TW.tt_tooltip.style.position = 'absolute';
  		TW.tt_tooltip.style.zIndex = 1000;
  		document.body.append(TW.tooltip);
			moveAt(event.pageX, event.pageY);

  		// centers the tooltip at (pageX, pageY) coordinates
  		function moveAt(pageX, pageY) {
    		TW.tt_tooltip.style.left = pageX - shiftX + 'px';
    		TW.tt_tooltip.style.top = pageY - shiftY + 'px';
  		}
  		function onMouseMove(event) {     
        if(TW.cr_dragging)
      		moveAt(event.pageX, event.pageY);
        else
          if(TW.tt_tooltip.onmouseup != null) {
            try {
        	    document.removeEventListener('mousemove', onMouseMove);
            }catch (ex) {
              //ignore
            }
    	      TW.tt_tooltip.onmouseup = null;
          }
  		}
  		// move the tooltip on mousemove
  		document.addEventListener('mousemove', onMouseMove);
  		// drop the tooltip, remove unneeded handlers
  		TW.tt_tooltip.onmouseup = function() {      
      TW.cr_dragging = false;
        try {
        	document.removeEventListener('mousemove', onMouseMove);
        }catch (ex) {
          //ignore
        }
    	  TW.tt_tooltip.onmouseup = null;
      }
    },
    resizeTranslation: function() {
      var e = TW.cr_trans;
      if(e == null) return;
      if (e.scrollHeight>e.offsetHeight) {
        // we are scrolling, increase the number of rows till we no longer scroll
        while (e.scrollHeight>(e.offsetHeight-2) && e.rows<10)
          e.rows++;
      } else {
        // we are not scrolling, try to reduce the number of lines till we just
        // start scrolling
        while (e.scrollHeight<=e.offsetHeight) {
          if (e.rows==1) {
            e.rows = 2;
            return;
          } else e.rows--;
        }
        e.rows++;
      }
    },
    resizeSource: function() {
      var e = TW.cr_srctext;
      if ( e == null) return;
      if (e.scrollHeight>e.offsetHeight) {
        // we are scrolling, increase the number of rows till we no longer scroll
        while (e.scrollHeight>(e.offsetHeight-2) && e.rows<10)
          e.rows++;
      } else {
        // we are not scrolling, try to reduce the number of lines till we just
        // start scrolling
        while (e.scrollHeight<=e.offsetHeight) {
          if (e.rows<=2) {
            e.rows = 2;
            return;
          } else e.rows--;
        }
        e.rows++;
      }
    },
    submitBetterTrans: function() {
      var srctext = TW.stringtrim(TW.cr_srctext.value);
      // remove me
      srctext = TW.normalize(srctext);
      var origsrc = TW.getAttribute(TW.tt_current_node, "srctext").trim();
      if (srctext!=origsrc) {
        var answer = window.confirm("You have modified the original source text, is that what you want?");
        if (!answer) return false;
      }
      var trans = TW.stringtrim(TW.cr_trans.value);
      if (trans=="") {
        //window.alert("empty translation is not allowed!");
        return;
      }
      var mt = 0;
      var mtstr = TW.getValue(TW.tt_current_node);
      if (trans==TW.stringtrim(mtstr)) {
        var answer = window.confirm("translation was not modified! do you "+
"w  ant to just indicate\nthat this machine translation is a good one?");
        if (!answer) return;
        mt = 1;
      }
      var corr = new Object();
      var srcurl= window.location.href;   
      corr.url = srcurl;
      corr.stxt =srctext;
      corr.ttxt = mtstr;
      corr.ctxt = trans;
      corr.slang = TW.svc.slang;
      corr.tlang = TW.svc.tlang;
      corr.gid = TW.groupname;
      corr.uid = TW.username;        
      var src = TW.corr_url;
      var postData = JSON.stringify({ "corr": corr});	 
      
      TW.post(src, postData).then(function(resp){
    	  TW.corrSaved(resp);
      }, function(error){
    	  alert(error);
      });
      TW.cr_submit_button.disabled = true;
    },
    corrSaved: function(ismt) {
      if (ismt != 1) ismt=0;
      TW.cr_submit_button.disabled = false;
 //     if (TW.cr_submit_script) document.body.removeChild(TW.cr_submit_script);
      TW.cr_submit_script = null;
      if (TW.tt_current_node && ismt==0) {
        TW.setValue(TW.tt_current_node, TW.cr_trans.value);
        TW.tt_current_node.className += " ibm-tw-tm";
      }
      //TW.hideTooltip();
      TW.hide();
    },
    repositionTooltip: function(e) {
      var box = e.getBoundingClientRect();
      var box1 = TW.tt_tooltip.getBoundingClientRect();
      // This works for all browsers except IE8 and before:
      // dimensions of visible rectangle, including scrollbars if any
      var ww =  window.innerWidth;
      var wh = window.innerHeight;
     // For IE (or any browser) in Standards mode
      if(ww == null) {
        if (document.compatMode == "CSS1Compat") {
          ww = document.documentElement.clientWidth;
          wh = document.documentElement.clientHeight;
        } else { // For browsers in Quirks mode
          ww = document.body.clientWidth;
          wh = document.body.clientHeight
        }
      }
      var sw = window.pageXOffset;
      var sh = window.pageYOffset; // document.documentElement.scrollTop;
      var tw = box1.right - box1.left;
      var th = box1.bottom - box1.top;
      var above =  box.bottom - box.height - 10;
      var x; // left tooltip corner
      var y; // top tooltip corner
      if(above > box1.height) { // place above sentence
        x = box.left + box.width/2 - tw/2;
        if(x < 10) x = 10;
        y = box.top - th - 10;
      } else if ( wh - (box.bottom + 10) > box1.height) { // place below sentence
        x = box.left + box.width/2 - tw/2;
        if(x < 10) x = 10;
        y = box.bottom + 10;
      } else if ( box.left - sw > tw + 10) { // place to the left
        x = box.left - tw - 10;
        y = box.bottom - box.height/2 - th/2;
        if(y < 10) y = 10;
      } else if ( box.right + box1.width + 10 < ww) { // place to the right
        x = box.right + 10;
        y = box.bottom - box.height/2 - th/2;
        if(y < 10) y = 10;
      } else { // has to overlay
        x = box.left + box.width/2 - tw/2;
        if(x < 10) x = 10;
        y = box.bottom - box.height/2 - th/2;
        if(y < 10) y = 10;
      }
      y += sh;     
      TW.tt_tooltip.style.left = x+"px";
      TW.tt_tooltip.style.top = y + "px";
      TW.tt_tooltip.style.visibility = "visible";
      TW.tt_shim.style.left = x+"px";
      TW.tt_shim.style.top = y+"px";
      TW.tt_shim.style.width = TW.tt_tooltip.offsetWidth+"px";
      TW.tt_shim.style.height = TW.tt_tooltip.offsetHeight+"px";
      TW.tt_shim.style.visibility = "visible";
    },
    runRemoteScript: function(src) {
      var x = document.createElement("script");
      x.type = "text/javascript";
      x.charset = "UTF-8";
      x.defer = false;
      x.src = src;
      document.body.appendChild(x);
      return x;
    },
    inIframe: function() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    },
    traverseFrames: function() {
      for (var i=0; i<window.frames.length; ++i) {
        var win = window.frames[i];
        var tws_id = "ibm-transwidget-script-id";
        var el = document.getElementById(tws_id);
        var doc;
        try {
          doc = win.document;
          if(el != null && doc.getElementById(tws_id) == null) {
            var ns = doc.createElement('script');
            ns.id = "ibm-transwidget-script-id";
            ns.src = el.src;
            ns.type = "text/javascript";
            ns.defer = false;
            ns.async = "false";
            ns.setAttribute("data-ibm-tw-opts", el.getAttribute("data-ibm-tw-opts"));
            ns.setAttribute("tw-in-frame", true);
            doc.getElementsByTagName("head")[0].appendChild(ns);
          }
        } catch(e) {
          if(doc != undefined)
            doc.body.appendChild(ns);
        }
      }
    },
    translateFrames: function() {
      for (var i=0; i<window.frames.length; ++i) {
        try {
          var win = window.frames[i];
          var doc = win.document;
          var tws_id = "ibm-transwidget-script-id";
          var el = document.getElementById(tws_id);
          if(el != null && win.frameElement != null && win.frameElement.contentWindow.TW != null) {
            win.frameElement.contentWindow.TW.svc = TW.svc;
            win.frameElement.contentWindow.TW.startTranslate();
          }
        } catch(e) { TW.printMsg("XL FRAMES EX "+e);}
      }
    },
    // start translation
    translateNow: function() {
      if (TW.mode=="translated") {
        // window.alert("This page has already been translated");
        window.location.reload();
        return;
      }
      if (TW.mode=="translating") return;
      if (TW.removable != "")
        TW.removable_tags = TW.removable.trim().split(/[ ,]+/)
      else TW.removable_tags = [];
      TW.mode = "translating";
      TW.doc_title = document.title;
      if (!TW.MSIE)
        document.body.style.opacity = 1;
      // go through all the frames first
      TW.startTranslate();
      if(!TW.skip_frames)
        window.setTimeout(function(){TW.translateFrames();}, 1000);
    },
    clearSession: function () {
      TW.start_time = Date.now();
      TW.job_id = 0;
      TW.num_nodes_translated = 0;
      TW.nsents = 0;
    },
    checkSourceLang: function (e) {
      var nl = TW.getAttribute(e, "lang");
      if (nl == null || nl == "")
        nl = TW.getAttribute(e, "xml:lang");
      if (nl != null && nl != "") {
        if (nl.substr(0,2) != TW.svc.slang) {
          return false;
        }
      }
      return true;
    },
    // this function is to be used after the page has been translated, and
    // some new text nodes are created due to user interaction with the page,
    // and the changed nodes are known
    translateNodes: function(nodes) {
      if (TW.opts.monitor_page) {
        window.alert("translateNodes cannot be called when pm is set to 1");
        return false;
      }
      TW.queue = new Array(0);
      TW.request_scripts = new Array(0);
      TW.rqt_id = 0;
      for (var i=0; i<arguments.length; ++i) {
        TW.traverseDOM(arguments[i]);
      }
      if (TW.queue.length>0) {
        TW.clearSession();
        TW.sendTranslationJobs();
      }
    },
    eosPunctuations: [
      // level 1: all question marks, exclamation marks, and Chinese period
      "?!".concat(String.fromCharCode(161, 191, 12290)),
      // level 2: comma, semi-colon, and colon, close parenthesis
      ",;:)",
      // level 3: the dangerous period
      "."
    ],
    splitTextNode: function(text, l) {
      // the tricky thing is to split at the right place, we want to get closer to
      // the maximum number of allowed characters, and we want to split at
      // punctuations, failing that, we want to split at white space.
      var nodes = new Array(0);
      var begin = 0;
      var end = 0;
      var maxNodeSize = TW.getMaxNodeSize(text, l);
      while (begin<text.length) {
        var last = Math.min( (begin+maxNodeSize), text.length);
        for (var i = 0; i < TW.eosPunctuations.length; ++i) {
          var puncts = TW.eosPunctuations[i];
          for (var j=0; j<puncts.length; ++j) {
            var p = puncts.charAt(j);
            // look for punctuations backward
            var loc = text.lastIndexOf(p, last);
            // if we found one, and it's not within regions already split
            if (loc!=-1 && loc>begin) {
              end = loc+1;
              break;
            }
          }
          if (begin!=end) break;
        }
        if (begin==end) end = last;	// last resort
        nodes.push(text.substring(begin, end));
        begin = end;
      }
      return nodes;
    },
    // check the length of the text node, because we are limited to GET
    // request, the maximum URL length must be followed. For IE is 2046,
    // after removing the overhead of other parameters and taking into
    // consideration of url-encode blow-up ratio (9), we end up with
    // approximately 200 characters as maximum.
    addTextNode: function(text, e) {
      // first check if we are dealing with a <PRE> node, if we are, we treat
      // each line as a sentence.
      var p = e.parentNode;
      if (p.nodeName=="PRE") {
        var lines = text.split(/\n/);
        // do we have more than 1 line in this textnode inside PRE?
        if (lines.length>1) {
          for (var i=0; i<lines.length; ++i) {
            if (lines[i]=="") lines[i]=" ";
            var nn = document.createTextNode(lines[i]);
            p.insertBefore(nn, e);
          }
          p.removeChild(e);
          // return false indicating we did some splitting, and the loop
          // should restart
          return false;
        }
      }
      if (text.length <= TW.getMaxNodeSize(text, TW.svc.slang)) {
        TW.queue.push({
          node: e,
          type: "textnode"
        });
        return true;
      } else {
        // if the text node is too long, let's split it into multiple parts
        // and replace the original long text node with its parts
        var nodes = TW.splitTextNode(text, TW.svc.slang);
        var p = e.parentNode;
        for (var i=0; i<nodes.length; ++i) {
          var nn = document.createTextNode(nodes[i]);
          p.insertBefore(nn, e);
        }
        if (nodes.length>0) {
          p.removeChild(e);
          // return false indicating we did some splitting, and the loop
          // should restart
          return false;
        }
      }
    },
    isLatin1: function(l) {
      l = l.substr(0, 2);
      if (l=="ar" || l=="fa" || l=="zh" || l=="ko" || l=="ja" || l=="ur" || l=="yi" || l=="he") return false;
      return true;
    },
    isRightToLeft: function(l) {
      l = l.substr(0, 2);
      return (l=="ar" || l=="fa" || l=="ur" || l=="yi" || l=="he" );
    },
    /**
     * Return true if this node is of the type on 'The List'
     */
    isRemovable: function(e) {
      var n = e.nodeName;
      for(var i = 0; i < TW.removable_tags.length; ++i) {
        if(n == TW.removable_tags[i]){
          return true;
        }
      }
      return false;
    },
/*  ** Return true if the node contains only removable tags and/or text */
    canBeCleaned: function(e) {
      if (!TW.isRemovable(e)) return false;
      for(var i = 0; i < e.childNodes.length; ++i) {
        var child = e.childNodes[i];
        if(child.nodeName != '#text' && !(TW.isRemovable(child) && TW.canBeCleaned(child)))
          return false;
      }
      return true;
    },
    clean: function(e, t) {
      for(var i = 0; i < e.childNodes.length; ++i) {
        var child = e.childNodes[i];
        if(child.nodeName == '#text') {
          if(t != "") t += " ";
          t += child.nodeValue;
        } else {
          t = TW.clean(child, t);
        }
      }
      return t;
    },
    selUntag: function(e) {
      for(var i = 0; i < e.childNodes.length; ++i) {
        var child = e.childNodes[i];
        if(child.nodeName.charAt(0) == '#') continue;
        if(TW.canBeCleaned(child)) {
          var txt = TW.clean(child, "");
          e.replaceChild(document.createTextNode(txt),child);
        } else {
          TW.selUntag(child);
        }
      }
    },
    mergeTextNodes: function(e) {
      var f = 0;
      while(f < e.childNodes.length) {
        if(e.childNodes[f].nodeName != '#text') {
          if(e.childNodes[f].nodeName.charAt(0) != '#') {
            TW.mergeTextNodes(e.childNodes[f]);
          }
          ++f;
          continue;
        }
        var l = f+1;
        var txt = e.childNodes[f].nodeValue;
        for(; l < e.childNodes.length && e.childNodes[l].nodeName == '#text'; ++l) {
          txt += ' ';
          txt += e.childNodes[l].nodeValue;
        }
        if(l - f > 1) {
          e.replaceChild(document.createTextNode(txt),e.childNodes[f]);
          for(var i = f+1; i < l; ++i) {
            e.replaceChild(document.createTextNode(''),e.childNodes[i]);
          }
        }
        f = l;
      }
    },
    /* traverseDOM goes through the entire DOM tree and create translation job
     * queue, the second parameter vis indicates whether or not the element's
     * parent node is visible */
    traverseDOM: function(e) {      
    if (e && e.id!="ibm-tw-ui-container" && e.id!="ibm-tw-ui-langselect" &&
      		        e.id!="ibm-tw-tooltip" && e.id!="ibm-tw-ui-tooltip-desc" && TW.getAttribute(e, "translate") !="0"
      ) {
        // skip any tag whose specified language doesn't match the source     
        if (!TW.checkSourceLang(e))
          return true;
        var n = e.nodeName;
        var p = e.parentNode;
        // Make sure name is upper case. SVG elements are not upper case
        var parentNodeName = p.nodeName.toUpperCase();
        if (n=="#text" && p && TW.getAttribute(p, "srctext")==null &&
          parentNodeName!="SCRIPT" && parentNodeName!="NOSCRIPT" &&
          parentNodeName!="STYLE" && parentNodeName!="LINK"
        ) {
          // some pages are using LINK in the body, we need to skip them
          var ntext = TW.normalize(e.nodeValue);
          var text = parentNodeName=="PRE" ? e.nodeValue : ntext;
          // go through each character to see if we should translate this text
          // node at all. What we really want to avoid, is to translate pure
          // English text when the target language is English.
         
          if (TW.svc.tlang != "en" || TW.isLatin1(TW.svc.slang)) {
            if (ntext.length != 0 && TW.isTranslatable(ntext)) {
              return TW.addTextNode(text, e);
            }
          } else {
            // if the target language is English, AND the source language is not
            // using the latin alphabet, then we check each character, if any one
            // of the letters is above ASCII, we translate
            if (!TW.isLatin1Text(text))
              return TW.addTextNode(text, e);
          }
        } else if (e.nodeType==1 && TW.getAttribute(e, "srctext")==null) {
          var t = TW.getAttribute(e, "alt");
          if (t) t = TW.stringtrim(t);
          if (t && t!="") {
            TW.queue.push({ node: e, type: "alt" });
          }
          //placeholder 
          t = TW.getAttribute(e, "placeholder");
          if (t) t = TW.stringtrim(t);
          if (t && t!="") {
            TW.queue.push({ node: e, type: "placeholder" });
          }
          
          t = TW.getAttribute(e, "title");
          if (t) t = TW.stringtrim(t);
          if (t && t!="" && e.nodeName != "LINK" ) {
            TW.queue.push({ node: e, type: "title" });
          }
          t = e.tooltipText;
          if (t) t = TW.stringtrim(t);
          if (t && t!="") {
            TW.queue.push({ node: e, type: "tooltipText" });
          }
          t = TW.getAttribute(e, "value");
          if (t) t = TW.stringtrim(t);
          if (t && t!="" && e.nodeName &&
            e.nodeName != "BUTTON" &&
            e.nodeName != "OPTION" &&
            e.nodeName != "INPUT"  &&
            e.nodeName != "TEXTAREA" &&
            e.nodeName != "LINK"
          ) {
            TW.queue.push({ node: e, type: "value" });
          }
        }
        // go through all the child nodes
        var i = 0;
        var child = e.childNodes[i];
        while(child) {
          if (TW.traverseDOM(child)) child = e.childNodes[++i];
          else child = e.childNodes[i];
        }
      }
      return true;
    },
    printMsg: function(t) {
      // window.console && TW.debug && window.console.log(t);
    },
    revert: function() {
      // Stop any translation that is happening
      TW.stopTranslation();
      // reset language selection if it exists
      var twsel = document.getElementById('ibm-tw-ui-langselect');
      if (twsel)
        twsel.selectedIndex = 0;
      // revert the translation
      TW.xlate();
    },
    //------------------------------------------------------------------------
    // Banner implementation
    //------------------------------------------------------------------------
    showBanner: function() {
      TW.deleteCookie("hideBanner")
      if (!TW.banner) {
        TW.banner = TW.createBanner();
      }
      TW.banner.innerHTML =
        "<table translate='0' aria-live='polite' style='width: 100%'>\
           <tr>\
             <td id='ibm-tw-top-banner-status'>"+
               TW.banner_text +
             "</td>\
               <td lang='en-us' xml:lang='en-us' style='text-align: right'>\
                 <a href='#' id='ibm-tw-banner-toggle'>\
                   Close [x]</a>\
               </td>\
            </tr>\
          </table>";
      TW.banner_status = document.getElementById("ibm-tw-top-banner-status");
      TW.addListener(document.getElementById('ibm-tw-banner-toggle'), "click",
        function(e){TW.hideBanner(); e.preventDefault(); });
      if(TW.banner_status && document.getElementById('ibm-tw-banner-revert')) {
        TW.addListener(document.getElementById('ibm-tw-banner-revert'), "click",
          function(e){e.preventDefault(); TW.revert();});
      }
    },
    createBanner: function() {
      var banner = document.createElement('div');
      banner.id = "ibm-tw-top-banner";
      banner.translate="0";
      //banner.setAttribute("aria-live",'polite');
      banner.setAttribute("tabindex","0");
      document.body.insertBefore(banner, document.body.childNodes[0]);
      // ibm hack for masthead
      var imast = document.getElementById("masthead");
      if (imast) {
        imast.style.position = "relative";
        var ct = document.getElementById("content");
        if (ct) ct.style.marginTop = "0px";
      }
      return banner;
    },
    hideBanner: function() {
      if (!TW.banner) TW.banner = TW.createBanner();
      TW.banner.innerHTML = "<div title='Expand the translation banner' id='ibm-tw-show-banner' tabindex='-1' translate=0>Expand the translation banner</div>";

      TW.addListener(document.getElementById('ibm-tw-show-banner'), "click",
        function(e){e.preventDefault(); TW.showBanner();});
      TW.writeCookie("hideBanner", "yes");
      //alert("writeCookie_hideBanner_yes");
    },
    getCookie: function (cookieName) {
      var exp = new RegExp (escape(cookieName) + "=([^;]+)");
      if (exp.test (document.cookie + ";")) {
        exp.exec (document.cookie + ";");
        return unescape(RegExp.$1);
      } else return false;
    },
    writeCookie: function (CookieName, CookieValue) {
      var expireDate = new Date ();
      var offset = 1;
      var year = expireDate.getYear();
      if (year < 1000) year = year + 1900;
      expireDate.setYear(year + offset);
      document.cookie = escape(CookieName ) + "=" + escape(CookieValue) + "; expires=" + expireDate.toGMTString() + "; path=/";
    },
    deleteCookie: function(cookieName) {
      if (TW.getCookie(cookieName)) TW.writeCookie(cookieName,"tobedeleted","years", -1);
      return true;
    },
    isDisclaimerAccepted: function() {
      // check if cookie is present, if so we are good
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf("ibm-tw-disclaimer=acc") == 0)
          return true;
      }
      return false;
      // otherwise show disclaimer and wait for result
    },
    acceptDisclaimer: function() {
      document.cookie = "ibm-tw-disclaimer=accepted; path=/;"
      var d = document.getElementById("ibm-tw-disclaimer-outer");
      d.parentNode.removeChild(d);
      TW.xlate();
    },
    cancelDisclaimer: function() {
      document.getElementById("ibm-tw-disclaimer-outer").style.display = 'none';
      var sel = document.getElementById("ibm-tw-ui-langselect");
      if (sel) sel.options.selectedIndex=0;
    },
    showDisclaimer: function() {
      var div = document.getElementById("ibm-tw-disclaimer-outer");
      if(div == null) {
        div = document.createElement("div");
        div.id = "ibm-tw-disclaimer-outer";
        document.body.appendChild(div);
      }
      var html = "<div id='ibm-tw-disclaimer' class='ibm-tw-disclaimer'>"
        + "<div class='ibm-tw-disclaimer-head' lang='en' xml:lang='en'>"
        + "<center>IBM Transwidget</center></div>";
      var sel = document.getElementById("ibm-tw-ui-langselect");
      if (!sel) return;
      var m = TW.svcMap[sel.options[sel.options.selectedIndex].value];
      if(!m) return;
      var sn = TW.notes[m.slang];
      var tn = TW.notes[m.tlang];
      html += "<div class='ibm-tw-disclaimer-body'>"
        + "<table><tr><td><div tabindex='0' aria-live='polite' " + tn.latt
        +  " style='font-size:.75em;'>" + tn.txt + "</div></td>"
        + "<td><div tabindex='0' style='font-size:.75em;' "+ sn.latt + ">" + sn.txt
        + "</div></td></tr><tr><td></td><td>"
        + "<button id='ibm-tw-disclaimer-accept' style='float: right;'><strong><div "+tn.latt
        +">"+ tn.accept
        + "<div><hr style='height: 0pt; visibility: hidden; margin-bottom:-1px;'>"
        + "<div "+tn.latt + ">"+sn.accept+"</div></button>"
        + "<button id='ibm-tw-disclaimer-cancel' style='float: right;'><strong><div "+sn.latt
        +">" + tn.cancel
        + "<div><hr style='height: 0pt; visibility: hidden; margin-bottom:-1px;'>"
        + "<div "+sn.latt + ">"+sn.cancel+"</div></button>"
        + "</td></tr></table></div></div>";
      div.innerHTML = html;
      TW.addListener(document.getElementById('ibm-tw-disclaimer-accept'), "click",
        function() { TW.acceptDisclaimer();});
      TW.addListener(document.getElementById('ibm-tw-disclaimer-cancel'), "click",
        function() { TW.cancelDisclaimer();});
    },    
    getTtxt: function(stxt){
    	if(TW.jarray!=null){
    		for(i=0;i<TW.jarray.length;i++){
    			if(TW.jarray[i].stxt === stxt ) {
    				return TW.jarray[i].ttxt;
    			}
    		}
    	}
    	return "";
    },
    
    // set corrections for the current page
    runAllJsonCorr: function(url, slang, tlang) {
    	var src = TW.root_url+"/tw/api/v1/corrs/approved?url="+url+"&slang="+slang+"&tlang="+tlang ;

    	TW.get(src).then(function(response) {			
    		TW.getAllJsonCorr(response);
		},function(error) {
			alert(error);
		})
    },

    
    getAllJsonCorr: function(resp){
   	 var jobj = (JSON.parse(resp)).docs;
   	 TW.jarray = new Array();    	
   	 for(var i =0;i<jobj.length;i++){     		 
   		if(TW.jarray!=null) TW.jarray.push({"stxt":jobj[i].stxt, "ttxt":jobj[i].ctxt});    		
   	 }
   },
    
   
    getTtxt: function(stxt){
    	if(TW.jarray!=null){
    		for(i=0;i<TW.jarray.length;i++){
    			if(TW.jarray[i].stxt === stxt ) {
    				return TW.jarray[i].ttxt;
    			}
    		}
    	}
    	return "";
    },
    
    // approval dialog ---------------
    getAllDraftCorr: function(url, slang, tlang) {
    	if(tlang == null){
    		window.alert("Please select a language first.");
    		return;
    	}
    	var src = TW.root_url+"/tw/api/v1/corrs/draft?url="+url+"&slang="+slang+"&tlang="+tlang;
    	TW.get(src).then(function(response) {			
    		TW.showAllDraftCorr(response);
		},function(error) {
			alert(error);
		}) 
    },
   
    showAllDraftCorr:function(resp){
// if (TW.cr_submit_script) document.body.removeChild(TW.cr_submit_script);
    	 var jobj = (JSON.parse(resp)).docs;
    	 var innerhtml="";    	
    	 for(var i =0;i<jobj.length;i++){    		
    		 
    		 var matches = document.querySelectorAll("span[srctext='" + jobj[i].stxt+"']");
    		 matches.forEach(function(correlem) {
    			  correlem.innerHTML = jobj[i].ctxt;
    			  correlem.style.background = 'rgb(255, 255, 128, 0.5)';
    			});
    		 
    		 innerhtml = innerhtml + "<br><div id='"+jobj[i]._id +"'>"+"<div class='ibm-tw-corr-src-all'>"+jobj[i].stxt+"</div>"+
    		 
    		 "<textarea class='ibm-tw-corr-trg-all' cols=130 rows=3>"+jobj[i].ctxt+ "</textarea>"+"</div>";

    	 }
    	 TW.showAllDraftCorrDialog(innerhtml);
    },
    showAllDraftCorrDialog:  function(innerhtml) {    	 
    	 var div = document.createElement('div');
         div.innerHTML =
           "<div class='ibm-tw-table' translate='0'><table style='width : 100%;'><tr><th style='text-align: center;margin-top:4px;'>List of proposed changes.</th><tr>"+
                 "<td   aria-live='polite' tabindex='0'>"+innerhtml+"</td> </tr>"+
                              
               "<tr><td id='ibm-tw-buttons'><button class= 'btn-tw btn-secondary-tw' type=button id='ibm-tw-submit-all' style='font-size: 9pt;margin-bottom:4px;'><span lang='en-US'><b>Approve</span>"+
                   "</button>  &nbsp;&nbsp;    <button class= 'btn-tw btn-secondary-tw' id='ibm-tw-cancel-corr-all' style='font-size: 9pt;margin-bottom:4px;' type=button>"+
                     "<span lang='en-US'>Cancel</span> </button> &nbsp;&nbsp;</td></tr><tr><td><span id='ibm-tw-mod-status'></span></td></table></div>";
         div.id = "ibm-tw-tooltip-all";
         div.style.left = "50px";
         div.style.top = "130px";
         document.body.appendChild(div); 
         div.style.position= "absolute";
         div.style.visibility = "visible"; 
         TW.addListener(document.getElementById('ibm-tw-cancel-corr-all'), "click",
                 function(){TW.hideApproveDlg();});
         TW.addListener(document.getElementById('ibm-tw-submit-all'), "click",
                 function(){TW.saveApproved(div);});
    	
    },    
    hideApproveDlg: function(){
    	var dlg =document.getElementById("ibm-tw-tooltip-all");
    	dlg.parentNode.removeChild(dlg);
    },
    saveApproved: function(elem){

    	var parent;
    	var corr_array = [];
    	var corr={"ctxt":"","_id":""};
    	var src = TW.corr_url_appr;
    	var telements = elem.querySelectorAll('textarea.ibm-tw-corr-trg-all');    	
    	for(var i=0;i<telements.length;i++){
    		parent=telements[i].parentNode;
    		if(parent!=null){
    	        TW.cr_appr_script = null;    	       
    			corr.ctxt = telements[i].value;
    			corr._id = parent.id;
    			corr_array.push({"ctxt":corr.ctxt,"_id":corr._id});
    		}
    	} 
    	
    	var postData = JSON.stringify({ "corr": corr_array});
    	TW.post(src,postData).then(function(response) {
			alert("All corrections were approved");
    		TW.hideApproveDlg();
		},function(error) {
			alert(error);
		})
    	
    	
    	
    	
    // if(TW.cr_appr_script ) {
    // document.body.removeChild(TW.cr_appr_script);
    // TW.cr_appr_script = null;
    // alert("All corections were approved");
    // TW.hideApproveDlg();
    // }
    },
    
    
    addCSS: function(){    	
        var head = document.getElementsByTagName('HEAD')[0];        
        var link = document.createElement('link');   
        // set the attributes for link element  
        link.rel = 'stylesheet';      
        link.type = 'text/css';       
      //  link.href = TW.root_url+"/twstyle.css"; 
        // <link href="../webjars/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
     //   link.href =TW.root_url+"/bootstrap.min.css";
        link.href =TW.root_url+"/webjars/bootstrap/4.1.1/css/bootstrap.min.css";
        // Append link element to HTML head 
        head.appendChild(link);  	
    },
    clearShowTooltipId: function(){
   	 TW.showTooltpTimer.forEach(function(id) {
   		 window.clearTimeout(id);
   		});
   	 TW.showTooltpTimer = [];
   },
   clearHideTooltipId: function(){
  	 TW.hideTooltpTimer.forEach(function(id) {
  		 window.clearTimeout(id);
  		});
  	 TW.hideTooltpTimer = [];
  },
    get:function(url) {
    	  return new Promise(function(succeed, fail) {
    	    var request = new XMLHttpRequest();    	   
    	    request.open("GET", url, true);
    	  //  request.setRequestHeader("Access-Control-Allow-Origin", "*");
    	    request.addEventListener("load", function() {
    	      if (request.status < 400)
    	        succeed(request.response);
    	      else
    	    	  TW.printMsg("Request failed:" + request.statusText);
    	    });
    	    request.addEventListener("error", function() {
    	    	TW.printMsg("Request failed:" + request.statusText);
    	    });
    	    request.send();
    	  });
    	},
    	post:function (url, requestBody) {
    		  return new Promise(function(succeed, fail) {
    		    var request = new XMLHttpRequest();
    		    request.open("POST", url, true);
    		    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');    		    
    		    request.addEventListener("load", function() {
    		      if (request.status < 400)
    		        succeed(request.responseText);
    		      else
    		    	  TW.printMsg("Request failed:" + request.statusText);
    		    });
    		    request.addEventListener("error", function() {
    		    	TW.printMsg("Request failed:" + request.statusText);
    		    });
    		    request.send(requestBody);
    		  });
    		},
    
   style: "#ibm-tw-tooltip {\n"
+"z-index : 1000; position : absolute; left : 0; top : 0; width : 32em; height : auto;\n"
+"direction : ltr; font-size: 80%;\n"
+"}\n"
+"/*font-family : verdana,\"DejaVu Sans\", \"Vera Sans\", sans-serif;*/\n"
+"#ibm-tw-tooltip td { font-size: 100%; border: 0px; }\n"
+"#ibm-tw-tooltip-shim { z-index: 999; position: absolute; left: 0px; top: 0px;\n"
+"  border: 0px; margin: 0px; padding: 0px; \n"
+"}\n"
+".ibm-tw-selector-table-default { float: left; margin: 3px; border: 1px solid #4477bb; padding: 0px; }\n"
+".ibm-tw-title-row-default {\n"
+"  background-repeat: repeat; color: 4675c3; font-family: sans-serif,arial; font-size: 10pt; \n"
+"  text-align: center; font-weight: normal; padding: 1px;\n"
+"}\n"
+".ibm-tw-corr-trg-all { font-family: verdana;color:blue; font-size: 1em;width:100%; }\n"
+".ibm-tw-corr-src-all { font-family: verdana; font-size: 1em; }\n"
+".ibm-tw-language-row-default { font-family: verdana; font-size: 0.8em; }\n"
+".ibm-tw-correction-row-default {\n"
+"  background-color: 4477bb; color: white; cursor: pointer; font-weight: bold;\n"
+"  font-size: 8pt; font-weight: bold; padding: 4px;\n"
+"}\n"
+".ibm-tw-disclaimer-font { font:12px/1.231 arial,helvetica,clean,sans-serif; }\n"
+".ibm-tw-info-table {\n"
+"	background-color : #F4F7F9; border : 1px solid #98B1C4; box-shadow: 0 5px 10px rgba(0,0,0,.4);\n"
+"	-moz-box-shadow: 0 5px 10px rgba(0,0,0,.4); -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.4);\n"
+"	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; padding: 5px;\n"
+"}\n"
+"/* 	font-family: Arial, Helvetica, sans-serif; */\n"
+".ibm-tw-info-table-row { font-size: 1em; text-align : left; padding-left : 6px; }\n"
+".ibm-tw-info-tooltip-header { font-size: 1em; color : #000000; font-weight : bold; text-align : left; }\n"
+".ibm-tw-table {\n"
+"	background-color : #F4F7F9; border : 1px solid #98B1C4; box-shadow: 0 5px 10px rgba(0,0,0,.4);\n"
+"	-moz-box-shadow: 0 5px 10px rgba(0,0,0,.4); -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.4);\n"
+"	border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;\n"
+"}\n"
+"#ibm-tw-suggest { font-size : 1em; font-family : verdana, \"DejaVu Sans\", \"Vera Sans\", sans-serif;\n"
+"  font-weight : bold;\n"
+"}\n"
+"#ibm-tw-mod-status { font-size : 0.7em; color: #666666; font-family : arial, sans-serif;\n"
+"  font-weight : bold;\n"
+"}\n"
+"#ibm-tw-srctext { \n"
+"  width: 100%; border: thin solid #D5DDF3; font-site : inherit; font-weight : inherit;\n"
+"  font-family : inherit; color: inherit; font-family: Arial, Helvetica, sans-serif;\n"
+"  font-weight : normal; font-size: 0.9em;\n"
+"}\n"
+".ibm-tw-srctext-c { } \n"
+"#ibm-tw-trans { width : 100%; border: thin solid #D5DDF3; font-size: 0.9em;\n"
+"  font-weight : normal; font-family: Arial, Helvetica, sans-serif;\n"
+"}\n"
+".ibm-tw-trans-c { }\n"
+"* { direction: ltr; }\n"
+".tt { max-width: 400px; z-index: 100 }\n"
+"#ibm-tw-buttons { font-family : verdana, \"DejaVu Sans\", \"Vera Sans\", sans-serif;\n"
+"  font-size : 8pt; text-align : center; \n"
+"}\n"
+"#ibm-tw-ctable { width: 100%;   }\n"
+"#ibm-tw-drag { \n"
+"  font-family : verdana, \"DejaVu Sans\", \"Vera Sans\", sans-serif; font-size : 1em;\n"
+"  font-weight : bold; border : 0; cursor : move; width : 100%; text-align : left; direction : ltr;\n"
+"}\n"
+"#ibm-tw-percent { font-size : 8pt; border : 0; margin : 0; padding-left : 5px; }\n"
+"#ibm-tw-undone { background-color : #b3b3b3; width : 100px; } \n"
+"#ibm-tw-done { width : 0; }\n"
+"* { direction : ltr; word-wrap : break-word; }\n"
+".tt { max-width : 400px; z-index : 100; }\n"
+".ibm-tw-en, .ibm-tw-en_us { direction : ltr; text-align : left; }\n"
+".ibm-tw-ar, .ibm-tw-ar_ar { \n"
+"  /*font-family : Simplified Arabic; */\n"
+"  direction : rtl; text-align : right; unicode-bidi : embed; /*font-size : 120%;*/\n"
+"}\n"
+".ibm-tw-tm { font-style : italic; }\n"
+"#ibm-tw-top-banner {\n"
+"  border: 0px; margin: 0px; padding: 0px; font-family: tahoma; font-size: 8pt;\n"
+"  background-color: #F8F8C8; width: 100%; position : relative; z-index : 100;\n"
+"}\n"
+"#ibm-com.v17 .ibm-tw-info-table { background-color: #eee; border-color: #999; }\n"
+"#ibm-com.v17 #ibm-tw-top-banner {\n"
+"  margin-bottom: -74px; margin-top: 75px; padding: 2px 0; background-color: #eee;\n"
+"}\n"
+"#ibm-tw-top-banner TABLE { width: 100%; font-size: 8pt; margin: 0px; border: 0px; padding: 0px; }\n"
+"#ibm-tw-top-banner TD { margin: 0px; border: 0px; padding: 3px; }\n"
+"#ibm-tw-top-banner TR { margin: 0px; border: 0px; padding: 0px; }\n"
+"#ibm-tw-top-banner TD { margin: 0px; border: 0px; padding: 3px; }\n"
+"#ibm-tw-show-banner { cursor: pointer }\n"
+"#ibm-tw-show-banner A { text-decoration: none; border: 0px; margin: 0px; padding: 0px }\n"
+"#ibm-tw-show-banner A IMG { border-style: none; border: 0px; margin: 0px; padding: 0px }\n"
+"#ibm-tw-show-banner { border: 0px; padding: 0px; margin: 0px; width: 100%; text-align: center }\n"
+"#ibm-tw-top-sel-banner {\n"
+"  border: 0px; margin: 0px; padding: 0px; font-family: tahoma; font-size: 8pt;\n"
+"  background-color: #F4F7F9; width: 100%; position: relative; z-index: 101;\n"
+"}\n"
+"#ibm-tw-top-sel-banner TABLE { font-size: 8pt; margin: 0px; border: 0px; padding: 0px }\n"
+"#ibm-tw-top-sel-banner TD { margin: 0px; border: 0px; padding: 3px; }\n"
+"#ibm-tw-top-sel-banner TR { margin: 0px; border: 0px; padding: 0px }\n"
+"#ibm-tw-top-sel-banner TD { margin: 0px; border: 0px; padding: 3px; }\n"
+"#ibm-tw-show-sel-banner { cursor: pointer }\n"
+"#ibm-tw-show-sel-banner A { text-decoration: none; border: 0px; margin: 0px; padding: 0px }\n"
+"#ibm-tw-show-sel-banner A IMG { border-style: none; border: 0px; margin: 0px; padding: 0px }\n"
+"#ibm-tw-show-sel-banner { border: 0px; padding: 0px; margin: 0px; \n"
+"  background-color: #F4F7F9; width: 100%; text-align: center; z-index: 2; }\n"
+"#ibm-tw-sel-sel { text-align: left; }  \n"
+"#ibm-tw-disclaimer-outer {\n"
+"  position: fixed; /* Stay in place */\n"
+"  z-index: 1; /* Sit on top */\n"
+"  padding-top: 100px; /* Location of the box */\n"
+"  left: 0; \n"
+"  top: 0;\n"
+"  width: 100%; /* Full width */\n"
+"  height: 100%; /* Full height */\n"
+"  overflow: auto; /* Enable scroll if needed */\n"
+"  background-color: rgb(0,0,0); /* Fallback color */\n"
+"  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n"
+"}\n"
+"#ibm-tw-disclaimer {\n"
+"  position: relative;\n"
+"  background-color: #fefefe;\n"
+"  margin: auto;\n"
+"  padding: 0;\n"
+"  border: 1px solid #888;\n"
+"  width: 80%;\n"
+"  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n"
+"  -webkit-animation-name: animatetop;\n"
+"  -webkit-animation-duration: 0.4s;\n"
+"  animation-name: animatetop;\n"
+"  animation-duration: 0.4s\n"
+"}\n"
+"/* Add Animation */\n"
+"@-webkit-keyframes animatetop {\n"
+"  from {top:-300px; opacity:0}\n"
+"  to {top:0; opacity:1}\n"
+"}\n"
+"@keyframes animatetop {\n"
+"  from {top:-300px; opacity:0}\n"
+"  to {top:0; opacity:1}\n"
+"}\n"
+"#ibm-tw-disclaimer-header { padding: 2px 16px; background-color: #5cb85c; color: white; }\n"
+"#ibm-tw-disclaimer-body {padding: 2px 16px;}\n",
  };

  var src;
  if(typeof document.currentScript !== 'undefined') {
    src = document.currentScript.src || document.querySelector('script[src*=tw.js]');
  } else { //  IE 11 has no currentScript
    src = document.getElementById('ibm-transwidget-script-id').src
  }
  TW.root_url = src.substr(0, src.lastIndexOf("/tw.js"));
  
  
  if(document.readyState === 'ready' || document.readyState === 'complete') {
      window.console && TW.debug && window.console.log("CALL TW INIT IN LOADED PAGE");
    TW.start();
  } else {
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", function() { TW.start(); }, false);
    } else {
      if (window.onload) window.orig_onload = window.onload;
      window.onload = function() {
        try {
          if (window.orig_onload) window.orig_onload.call(window);
        } catch (e) {}
      window.console && TW.debug && window.console.log("CALL TW INIT IN ONLOAD");
        TW.start();
      }
    }
  }  
  
}());


