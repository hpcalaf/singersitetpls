/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);;

/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);
;
/**
 * @file
 * Attaches the behaviors for the Overlay parent pages.
 */

(function ($) {

/**
 * Open the overlay, or load content into it, when an admin link is clicked.
 */
Drupal.behaviors.overlayParent = {
  attach: function (context, settings) {
    if (Drupal.overlay.isOpen) {
      Drupal.overlay.makeDocumentUntabbable(context);
    }

    if (this.processed) {
      return;
    }
    this.processed = true;

    $(window)
      // When the hash (URL fragment) changes, open the overlay if needed.
      .bind('hashchange.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOperateByURLFragment'))
      // Trigger the hashchange handler once, after the page is loaded, so that
      // permalinks open the overlay.
      .triggerHandler('hashchange.drupal-overlay');

    $(document)
      // Instead of binding a click event handler to every link we bind one to
      // the document and only handle events that bubble up. This allows other
      // scripts to bind their own handlers to links and also to prevent
      // overlay's handling.
      .bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(Drupal.overlay, 'eventhandlerOverrideLink'));
  }
};

/**
 * Overlay object for parent windows.
 *
 * Events
 * Overlay triggers a number of events that can be used by other scripts.
 * - drupalOverlayOpen: This event is triggered when the overlay is opened.
 * - drupalOverlayBeforeClose: This event is triggered when the overlay attempts
 *   to close. If an event handler returns false, the close will be prevented.
 * - drupalOverlayClose: This event is triggered when the overlay is closed.
 * - drupalOverlayBeforeLoad: This event is triggered right before a new URL
 *   is loaded into the overlay.
 * - drupalOverlayReady: This event is triggered when the DOM of the overlay
 *   child document is fully loaded.
 * - drupalOverlayLoad: This event is triggered when the overlay is finished
 *   loading.
 * - drupalOverlayResize: This event is triggered when the overlay is being
 *   resized to match the parent window.
 */
Drupal.overlay = Drupal.overlay || {
  isOpen: false,
  isOpening: false,
  isClosing: false,
  isLoading: false
};

Drupal.overlay.prototype = {};

/**
 * Open the overlay.
 *
 * @param url
 *   The URL of the page to open in the overlay.
 *
 * @return
 *   TRUE if the overlay was opened, FALSE otherwise.
 */
Drupal.overlay.open = function (url) {
  // Just one overlay is allowed.
  if (this.isOpen || this.isOpening) {
    return this.load(url);
  }
  this.isOpening = true;
  // Store the original document title.
  this.originalTitle = document.title;

  // Create the dialog and related DOM elements.
  this.create();

  this.isOpening = false;
  this.isOpen = true;
  $(document.documentElement).addClass('overlay-open');
  this.makeDocumentUntabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayOpen');

  return this.load(url);
};

/**
 * Create the underlying markup and behaviors for the overlay.
 */
Drupal.overlay.create = function () {
  this.$container = $(Drupal.theme('overlayContainer'))
    .appendTo(document.body);

  // Overlay uses transparent iframes that cover the full parent window.
  // When the overlay is open the scrollbar of the parent window is hidden.
  // Because some browsers show a white iframe background for a short moment
  // while loading a page into an iframe, overlay uses two iframes. By loading
  // the page in a hidden (inactive) iframe the user doesn't see the white
  // background. When the page is loaded the active and inactive iframes
  // are switched.
  this.activeFrame = this.$iframeA = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.inactiveFrame = this.$iframeB = $(Drupal.theme('overlayElement'))
    .appendTo(this.$container);

  this.$iframeA.bind('load.drupal-overlay', { self: this.$iframeA[0], sibling: this.$iframeB }, $.proxy(this, 'loadChild'));
  this.$iframeB.bind('load.drupal-overlay', { self: this.$iframeB[0], sibling: this.$iframeA }, $.proxy(this, 'loadChild'));

  // Add a second class "drupal-overlay-open" to indicate these event handlers
  // should only be bound when the overlay is open.
  var eventClass = '.drupal-overlay.drupal-overlay-open';
  $(window)
    .bind('resize' + eventClass, $.proxy(this, 'eventhandlerOuterResize'));
  $(document)
    .bind('drupalOverlayLoad' + eventClass, $.proxy(this, 'eventhandlerOuterResize'))
    .bind('drupalOverlayReady' + eventClass +
          ' drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerSyncURLFragment'))
    .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRefreshPage'))
    .bind('drupalOverlayBeforeClose' + eventClass +
          ' drupalOverlayBeforeLoad' + eventClass +
          ' drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerDispatchEvent'));

  if ($('.overlay-displace-top, .overlay-displace-bottom').length) {
    $(document)
      .bind('drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerAlterDisplacedElements'))
      .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRestoreDisplacedElements'));
  }
};

/**
 * Load the given URL into the overlay iframe.
 *
 * Use this method to change the URL being loaded in the overlay if it is
 * already open.
 *
 * @return
 *   TRUE if URL is loaded into the overlay, FALSE otherwise.
 */
Drupal.overlay.load = function (url) {
  if (!this.isOpen) {
    return false;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayBeforeLoad');

  $(document.documentElement).addClass('overlay-loading');

  // The contentDocument property is not supported in IE until IE8.
  var iframeDocument = this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document;

  // location.replace doesn't create a history entry. location.href does.
  // In this case, we want location.replace, as we're creating the history
  // entry using URL fragments.
  iframeDocument.location.replace(url);

  return true;
};

/**
 * Close the overlay and remove markup related to it from the document.
 *
 * @return
 *   TRUE if the overlay was closed, FALSE otherwise.
 */
Drupal.overlay.close = function () {
  // Prevent double execution when close is requested more than once.
  if (!this.isOpen || this.isClosing) {
    return false;
  }

  // Allow other scripts to respond to this event.
  var event = $.Event('drupalOverlayBeforeClose');
  $(document).trigger(event);
  // If a handler returned false, the close will be prevented.
  if (event.isDefaultPrevented()) {
    return false;
  }

  this.isClosing = true;
  this.isOpen = false;
  $(document.documentElement).removeClass('overlay-open');
  // Restore the original document title.
  document.title = this.originalTitle;
  this.makeDocumentTabbable();

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayClose');

  // When the iframe is still loading don't destroy it immediately but after
  // the content is loaded (see Drupal.overlay.loadChild).
  if (!this.isLoading) {
    this.destroy();
    this.isClosing = false;
  }
  return true;
};

/**
 * Destroy the overlay.
 */
Drupal.overlay.destroy = function () {
  $([document, window]).unbind('.drupal-overlay-open');
  this.$container.remove();

  this.$container = null;
  this.$iframeA = null;
  this.$iframeB = null;

  this.iframeWindow = null;
};

/**
 * Redirect the overlay parent window to the given URL.
 *
 * @param url
 *   Can be an absolute URL or a relative link to the domain root.
 */
Drupal.overlay.redirect = function (url) {
  // Create a native Link object, so we can use its object methods.
  var link = $(url.link(url)).get(0);

  // If the link is already open, force the hashchange event to simulate reload.
  if (window.location.href == link.href) {
    $(window).triggerHandler('hashchange.drupal-overlay');
  }

  window.location.href = link.href;
  return true;
};

/**
 * Bind the child window.
 *
 * Note that this function is fired earlier than Drupal.overlay.loadChild.
 */
Drupal.overlay.bindChild = function (iframeWindow, isClosing) {
  this.iframeWindow = iframeWindow;

  // We are done if the child window is closing.
  if (isClosing || this.isClosing || !this.isOpen) {
    return;
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayReady');
};

/**
 * Event handler: load event handler for the overlay iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: load
 *   - event.currentTarget: iframe
 */
Drupal.overlay.loadChild = function (event) {
  var iframe = event.data.self;
  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var iframeWindow = iframeDocument.defaultView || iframeDocument.parentWindow;
  if (iframeWindow.location == 'about:blank') {
    return;
  }

  this.isLoading = false;
  $(document.documentElement).removeClass('overlay-loading');
  event.data.sibling.removeClass('overlay-active').attr({ 'tabindex': -1 });

  // Only continue when overlay is still open and not closing.
  if (this.isOpen && !this.isClosing) {
    // And child document is an actual overlayChild.
    if (iframeWindow.Drupal && iframeWindow.Drupal.overlayChild) {
      // Replace the document title with title of iframe.
      document.title = iframeWindow.document.title;

      this.activeFrame = $(iframe)
        .addClass('overlay-active')
        // Add a title attribute to the iframe for accessibility.
        .attr('title', Drupal.t('@title dialog', { '@title': iframeWindow.jQuery('#overlay-title').text() })).removeAttr('tabindex');
      this.inactiveFrame = event.data.sibling;

      // Load an empty document into the inactive iframe.
      (this.inactiveFrame[0].contentDocument || this.inactiveFrame[0].contentWindow.document).location.replace('about:blank');

      // Move the focus to just before the "skip to main content" link inside
      // the overlay.
      this.activeFrame.focus();
      var skipLink = iframeWindow.jQuery('a:first');
      Drupal.overlay.setFocusBefore(skipLink, iframeWindow.document);

      // Allow other scripts to respond to this event.
      $(document).trigger('drupalOverlayLoad');
    }
    else {
      window.location = iframeWindow.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }
  }
  else {
    this.destroy();
  }
};

/**
 * Creates a placeholder element to receive document focus.
 *
 * Setting the document focus to a link will make it visible, even if it's a
 * "skip to main content" link that should normally be visible only when the
 * user tabs to it. This function can be used to set the document focus to
 * just before such an invisible link.
 *
 * @param $element
 *   The jQuery element that should receive focus on the next tab press.
 * @param document
 *   The iframe window element to which the placeholder should be added. The
 *   placeholder element has to be created inside the same iframe as the element
 *   it precedes, to keep IE happy. (http://bugs.jquery.com/ticket/4059)
 */
Drupal.overlay.setFocusBefore = function ($element, document) {
  // Create an anchor inside the placeholder document.
  var placeholder = document.createElement('a');
  var $placeholder = $(placeholder).addClass('element-invisible').attr('href', '#');
  // Put the placeholder where it belongs, and set the document focus to it.
  $placeholder.insertBefore($element);
  $placeholder.focus();
  // Make the placeholder disappear as soon as it loses focus, so that it
  // doesn't appear in the tab order again.
  $placeholder.one('blur', function () {
    $(this).remove();
  });
};

/**
 * Check if the given link is in the administrative section of the site.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL represents an administrative link, FALSE otherwise.
 */
Drupal.overlay.isAdminLink = function (url) {
  if (Drupal.overlay.isExternalLink(url)) {
    return false;
  }

  var path = this.getPath(url);

  // Turn the list of administrative paths into a regular expression.
  if (!this.adminPathRegExp) {
    var prefix = '';
    if (Drupal.settings.overlay.pathPrefixes.length) {
      // Allow path prefixes used for language negatiation followed by slash,
      // and the empty string.
      prefix = '(' + Drupal.settings.overlay.pathPrefixes.join('/|') + '/|)';
    }
    var adminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.admin.replace(/\s+/g, '|') + ')$';
    var nonAdminPaths = '^' + prefix + '(' + Drupal.settings.overlay.paths.non_admin.replace(/\s+/g, '|') + ')$';
    adminPaths = adminPaths.replace(/\*/g, '.*');
    nonAdminPaths = nonAdminPaths.replace(/\*/g, '.*');
    this.adminPathRegExp = new RegExp(adminPaths);
    this.nonAdminPathRegExp = new RegExp(nonAdminPaths);
  }

  return this.adminPathRegExp.exec(path) && !this.nonAdminPathRegExp.exec(path);
};

/**
 * Determine whether a link is external to the site.
 *
 * @param url
 *   The URL to be tested.
 *
 * @return boolean
 *   TRUE if the URL is external to the site, FALSE otherwise.
 */
Drupal.overlay.isExternalLink = function (url) {
  var re = RegExp('^((f|ht)tps?:)?//(?!' + window.location.host + ')');
  return re.test(url);
};

/**
 * Constructs an internal URL (relative to this site) from the provided path.
 *
 * For example, if the provided path is 'admin' and the site is installed at
 * http://example.com/drupal, this function will return '/drupal/admin'.
 *
 * @param path
 *   The internal path, without any leading slash.
 *
 * @return
 *   The internal URL derived from the provided path, or null if a valid
 *   internal path cannot be constructed (for example, if an attempt to create
 *   an external link is detected).
 */
Drupal.overlay.getInternalUrl = function (path) {
  var url = Drupal.settings.basePath + path;
  if (!this.isExternalLink(url)) {
    return url;
  }
};

/**
 * Event handler: resizes overlay according to the size of the parent window.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerOuterResize = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  // IE6 uses position:absolute instead of position:fixed.
  if (typeof document.body.style.maxHeight != 'string') {
    this.activeFrame.height($(window).height());
  }

  // Allow other scripts to respond to this event.
  $(document).trigger('drupalOverlayResize');
};

/**
 * Event handler: resizes displaced elements so they won't overlap the scrollbar
 * of overlay's iframe.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerAlterDisplacedElements = function (event) {
  // Proceed only if the overlay still exists.
  if (!(this.isOpen || this.isOpening) || this.isClosing || !this.iframeWindow) {
    return;
  }

  $(this.iframeWindow.document.body).css({
    marginTop: Drupal.overlay.getDisplacement('top'),
    marginBottom: Drupal.overlay.getDisplacement('bottom')
  })
  // IE7 isn't reflowing the document immediately.
  // @todo This might be fixed in a cleaner way.
  .addClass('overlay-trigger-reflow').removeClass('overlay-trigger-reflow');

  var documentHeight = this.iframeWindow.document.body.clientHeight;
  var documentWidth = this.iframeWindow.document.body.clientWidth;
  // IE6 doesn't support maxWidth, use width instead.
  var maxWidthName = (typeof document.body.style.maxWidth == 'string') ? 'maxWidth' : 'width';

  if (Drupal.overlay.leftSidedScrollbarOffset === undefined && $(document.documentElement).attr('dir') === 'rtl') {
    // We can't use element.clientLeft to detect whether scrollbars are placed
    // on the left side of the element when direction is set to "rtl" as most
    // browsers dont't support it correctly.
    // http://www.gtalbot.org/BugzillaSection/DocumentAllDHTMLproperties.html
    // There seems to be absolutely no way to detect whether the scrollbar
    // is on the left side in Opera; always expect scrollbar to be on the left.
    if ($.browser.opera) {
      Drupal.overlay.leftSidedScrollbarOffset = document.documentElement.clientWidth - this.iframeWindow.document.documentElement.clientWidth + this.iframeWindow.document.documentElement.clientLeft;
    }
    else if (this.iframeWindow.document.documentElement.clientLeft) {
      Drupal.overlay.leftSidedScrollbarOffset = this.iframeWindow.document.documentElement.clientLeft;
    }
    else {
      var el1 = $('<div style="direction: rtl; overflow: scroll;"></div>').appendTo(document.body);
      var el2 = $('<div></div>').appendTo(el1);
      Drupal.overlay.leftSidedScrollbarOffset = parseInt(el2[0].offsetLeft - el1[0].offsetLeft);
      el1.remove();
    }
  }

  // Consider any element that should be visible above the overlay (such as
  // a toolbar).
  $('.overlay-displace-top, .overlay-displace-bottom').each(function () {
    var data = $(this).data();
    var maxWidth = documentWidth;
    // In IE, Shadow filter makes element to overlap the scrollbar with 1px.
    if (this.filters && this.filters.length && this.filters.item('DXImageTransform.Microsoft.Shadow')) {
      maxWidth -= 1;
    }

    if (Drupal.overlay.leftSidedScrollbarOffset) {
      $(this).css('left', Drupal.overlay.leftSidedScrollbarOffset);
    }

    // Prevent displaced elements overlapping window's scrollbar.
    var currentMaxWidth = parseInt($(this).css(maxWidthName));
    if ((data.drupalOverlay && data.drupalOverlay.maxWidth) || isNaN(currentMaxWidth) || currentMaxWidth > maxWidth || currentMaxWidth <= 0) {
      $(this).css(maxWidthName, maxWidth);
      (data.drupalOverlay = data.drupalOverlay || {}).maxWidth = true;
    }

    // Use a more rigorous approach if the displaced element still overlaps
    // window's scrollbar; clip the element on the right.
    var offset = $(this).offset();
    var offsetRight = offset.left + $(this).outerWidth();
    if ((data.drupalOverlay && data.drupalOverlay.clip) || offsetRight > maxWidth) {
      if (Drupal.overlay.leftSidedScrollbarOffset) {
        $(this).css('clip', 'rect(auto, auto, ' + (documentHeight - offset.top) + 'px, ' + (Drupal.overlay.leftSidedScrollbarOffset + 2) + 'px)');
      }
      else {
        $(this).css('clip', 'rect(auto, ' + (maxWidth - offset.left) + 'px, ' + (documentHeight - offset.top) + 'px, auto)');
      }
      (data.drupalOverlay = data.drupalOverlay || {}).clip = true;
    }
  });
};

/**
 * Event handler: restores size of displaced elements as they were before
 * overlay was opened.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerRestoreDisplacedElements = function (event) {
  var $displacedElements = $('.overlay-displace-top, .overlay-displace-bottom');
  try {
    $displacedElements.css({ maxWidth: '', clip: '' });
  }
  // IE bug that doesn't allow unsetting style.clip (http://dev.jquery.com/ticket/6512).
  catch (err) {
    $displacedElements.attr('style', function (index, attr) {
      return attr.replace(/clip\s*:\s*rect\([^)]+\);?/i, '');
    });
  }
};

/**
 * Event handler: overrides href of administrative links to be opened in
 * the overlay.
 *
 * This click event handler should be bound to any document (for example the
 * overlay iframe) of which you want links to open in the overlay.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: click, mouseup
 *   - event.currentTarget: document
 *
 * @see Drupal.overlayChild.behaviors.addClickHandler
 */
Drupal.overlay.eventhandlerOverrideLink = function (event) {
  // In some browsers the click event isn't fired for right-clicks. Use the
  // mouseup event for right-clicks and the click event for everything else.
  if ((event.type == 'click' && event.button == 2) || (event.type == 'mouseup' && event.button != 2)) {
    return;
  }

  var $target = $(event.target);

  // Only continue if clicked target (or one of its parents) is a link.
  if (!$target.is('a')) {
    $target = $target.closest('a');
    if (!$target.length) {
      return;
    }
  }

  // Never open links in the overlay that contain the overlay-exclude class.
  if ($target.hasClass('overlay-exclude')) {
    return;
  }

  // Close the overlay when the link contains the overlay-close class.
  if ($target.hasClass('overlay-close')) {
    // Clearing the overlay URL fragment will close the overlay.
    $.bbq.removeState('overlay');
    return;
  }

  var target = $target[0];
  var href = target.href;
  // Only handle links that have an href attribute and use the HTTP(S) protocol.
  if (href != undefined && href != '' && target.protocol.match(/^https?\:/)) {
    var anchor = href.replace(target.ownerDocument.location.href, '');
    // Skip anchor links.
    if (anchor.length == 0 || anchor.charAt(0) == '#') {
      return;
    }
    // Open admin links in the overlay.
    else if (this.isAdminLink(href)) {
      // If the link contains the overlay-restore class and the overlay-context
      // state is set, also update the parent window's location.
      var parentLocation = ($target.hasClass('overlay-restore') && typeof $.bbq.getState('overlay-context') == 'string')
        ? this.getInternalUrl($.bbq.getState('overlay-context'))
        : null;
      href = this.fragmentizeLink($target.get(0), parentLocation);
      // Only override default behavior when left-clicking and user is not
      // pressing the ALT, CTRL, META (Command key on the Macintosh keyboard)
      // or SHIFT key.
      if (event.button == 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        // Redirect to a fragmentized href. This will trigger a hashchange event.
        this.redirect(href);
        // Prevent default action and further propagation of the event.
        return false;
      }
      // Otherwise alter clicked link's href. This is being picked up by
      // the default action handler.
      else {
        $target
          // Restore link's href attribute on blur or next click.
          .one('blur mousedown', { target: target, href: target.href }, function (event) { $(event.data.target).attr('href', event.data.href); })
          .attr('href', href);
      }
    }
    // Non-admin links should close the overlay and open in the main window,
    // which is the default action for a link. We only need to handle them
    // if the overlay is open and the clicked link is inside the overlay iframe.
    else if (this.isOpen && target.ownerDocument === this.iframeWindow.document) {
      // Open external links in the immediate parent of the frame, unless the
      // link already has a different target.
      if (target.hostname != window.location.hostname) {
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
      else {
        // Add the overlay-context state to the link, so "overlay-restore" links
        // can restore the context.
        if ($target[0].hash) {
          // Leave links with an existing fragment alone. Adding an extra
          // parameter to a link like "node/1#section-1" breaks the link.
        }
        else {
          // For links with no existing fragment, add the overlay context.
          $target.attr('href', $.param.fragment(href, { 'overlay-context': this.getPath(window.location) + window.location.search }));
        }

        // When the link has a destination query parameter and that destination
        // is an admin link we need to fragmentize it. This will make it reopen
        // in the overlay.
        var params = $.deparam.querystring(href);
        if (params.destination && this.isAdminLink(params.destination)) {
          var fragmentizedDestination = $.param.fragment(this.getPath(window.location), { overlay: params.destination });
          $target.attr('href', $.param.querystring(href, { destination: fragmentizedDestination }));
        }

        // Make the link open in the immediate parent of the frame, unless the
        // link already has a different target.
        if (!$target.attr('target')) {
          $target.attr('target', '_parent');
        }
      }
    }
  }
};

/**
 * Event handler: opens or closes the overlay based on the current URL fragment.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: hashchange
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerOperateByURLFragment = function (event) {
  // If we changed the hash to reflect an internal redirect in the overlay,
  // its location has already been changed, so don't do anything.
  if ($.data(window.location, window.location.href) === 'redirect') {
    $.data(window.location, window.location.href, null);
    return;
  }

  // Get the overlay URL from the current URL fragment.
  var internalUrl = null;
  var state = $.bbq.getState('overlay');
  if (state) {
    internalUrl = this.getInternalUrl(state);
  }
  if (internalUrl) {
    // Append render variable, so the server side can choose the right
    // rendering and add child frame code to the page if needed.
    var url = $.param.querystring(internalUrl, { render: 'overlay' });

    this.open(url);
    this.resetActiveClass(this.getPath(Drupal.settings.basePath + state));
  }
  // If there is no overlay URL in the fragment and the overlay is (still)
  // open, close the overlay.
  else if (this.isOpen && !this.isClosing) {
    this.close();
    this.resetActiveClass(this.getPath(window.location));
  }
};

/**
 * Event handler: makes sure the internal overlay URL is reflected in the parent
 * URL fragment.
 *
 * Normally the parent URL fragment determines the overlay location. However, if
 * the overlay redirects internally, the parent doesn't get informed, and the
 * parent URL fragment will be out of date. This is a sanity check to make
 * sure we're in the right place.
 *
 * The parent URL fragment is also not updated automatically when overlay's
 * open, close or load functions are used directly (instead of through
 * eventhandlerOperateByURLFragment).
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayReady, drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerSyncURLFragment = function (event) {
  if (this.isOpen) {
    var expected = $.bbq.getState('overlay');
    // This is just a sanity check, so we're comparing paths, not query strings.
    if (this.getPath(Drupal.settings.basePath + expected) != this.getPath(this.iframeWindow.document.location)) {
      // There may have been a redirect inside the child overlay window that the
      // parent wasn't aware of. Update the parent URL fragment appropriately.
      var newLocation = Drupal.overlay.fragmentizeLink(this.iframeWindow.document.location);
      // Set a 'redirect' flag on the new location so the hashchange event handler
      // knows not to change the overlay's content.
      $.data(window.location, newLocation, 'redirect');
      // Use location.replace() so we don't create an extra history entry.
      window.location.replace(newLocation);
    }
  }
  else {
    $.bbq.removeState('overlay');
  }
};

/**
 * Event handler: if the child window suggested that the parent refresh on
 * close, force a page refresh.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: drupalOverlayClose
 *   - event.currentTarget: document
 */
Drupal.overlay.eventhandlerRefreshPage = function (event) {
  if (Drupal.overlay.refreshPage) {
    window.location.reload(true);
  }
};

/**
 * Event handler: dispatches events to the overlay document.
 *
 * @param event
 *   Event being triggered, with the following restrictions:
 *   - event.type: any
 *   - event.currentTarget: any
 */
Drupal.overlay.eventhandlerDispatchEvent = function (event) {
  if (this.iframeWindow && this.iframeWindow.document) {
    this.iframeWindow.jQuery(this.iframeWindow.document).trigger(event);
  }
};

/**
 * Make a regular admin link into a URL that will trigger the overlay to open.
 *
 * @param link
 *   A JavaScript Link object (i.e. an <a> element).
 * @param parentLocation
 *   (optional) URL to override the parent window's location with.
 *
 * @return
 *   A URL that will trigger the overlay (in the form
 *   /node/1#overlay=admin/config).
 */
Drupal.overlay.fragmentizeLink = function (link, parentLocation) {
  // Don't operate on links that are already overlay-ready.
  var params = $.deparam.fragment(link.href);
  if (params.overlay) {
    return link.href;
  }

  // Determine the link's original destination. Set ignorePathFromQueryString to
  // true to prevent transforming this link into a clean URL while clean URLs
  // may be disabled.
  var path = this.getPath(link, true);
  // Preserve existing query and fragment parameters in the URL, except for
  // "render=overlay" which is re-added in Drupal.overlay.eventhandlerOperateByURLFragment.
  var destination = path + link.search.replace(/&?render=overlay/, '').replace(/\?$/, '') + link.hash;

  // Assemble and return the overlay-ready link.
  return $.param.fragment(parentLocation || window.location.href, { overlay: destination });
};

/**
 * Refresh any regions of the page that are displayed outside the overlay.
 *
 * @param data
 *   An array of objects with information on the page regions to be refreshed.
 *   For each object, the key is a CSS class identifying the region to be
 *   refreshed, and the value represents the section of the Drupal $page array
 *   corresponding to this region.
 */
Drupal.overlay.refreshRegions = function (data) {
  $.each(data, function () {
    var region_info = this;
    $.each(region_info, function (regionClass) {
      var regionName = region_info[regionClass];
      var regionSelector = '.' + regionClass;
      // Allow special behaviors to detach.
      Drupal.detachBehaviors($(regionSelector));
      $.get(Drupal.settings.basePath + Drupal.settings.overlay.ajaxCallback + '/' + regionName, function (newElement) {
        $(regionSelector).replaceWith($(newElement));
        Drupal.attachBehaviors($(regionSelector), Drupal.settings);
      });
    });
  });
};

/**
 * Reset the active class on links in displaced elements according to
 * given path.
 *
 * @param activePath
 *   Path to match links against.
 */
Drupal.overlay.resetActiveClass = function(activePath) {
  var self = this;
  var windowDomain = window.location.protocol + window.location.hostname;

  $('.overlay-displace-top, .overlay-displace-bottom')
  .find('a[href]')
  // Remove active class from all links in displaced elements.
  .removeClass('active')
  // Add active class to links that match activePath.
  .each(function () {
    var linkDomain = this.protocol + this.hostname;
    var linkPath = self.getPath(this);

    // A link matches if it is part of the active trail of activePath, except
    // for frontpage links.
    if (linkDomain == windowDomain && (activePath + '/').indexOf(linkPath + '/') === 0 && (linkPath !== '' || activePath === '')) {
      $(this).addClass('active');
    }
  });
};

/**
 * Helper function to get the (corrected) Drupal path of a link.
 *
 * @param link
 *   Link object or string to get the Drupal path from.
 * @param ignorePathFromQueryString
 *   Boolean whether to ignore path from query string if path appears empty.
 *
 * @return
 *   The Drupal path.
 */
Drupal.overlay.getPath = function (link, ignorePathFromQueryString) {
  if (typeof link == 'string') {
    // Create a native Link object, so we can use its object methods.
    link = $(link.link(link)).get(0);
  }

  var path = link.pathname;
  // Ensure a leading slash on the path, omitted in some browsers.
  if (path.charAt(0) != '/') {
    path = '/' + path;
  }
  path = path.replace(new RegExp(Drupal.settings.basePath + '(?:index.php)?'), '');
  if (path == '' && !ignorePathFromQueryString) {
    // If the path appears empty, it might mean the path is represented in the
    // query string (clean URLs are not used).
    var match = new RegExp('([?&])q=(.+)([&#]|$)').exec(link.search);
    if (match && match.length == 4) {
      path = match[2];
    }
  }

  return path;
};

/**
 * Get the total displacement of given region.
 *
 * @param region
 *   Region name. Either "top" or "bottom".
 *
 * @return
 *   The total displacement of given region in pixels.
 */
Drupal.overlay.getDisplacement = function (region) {
  var displacement = 0;
  var lastDisplaced = $('.overlay-displace-' + region + ':last');
  if (lastDisplaced.length) {
    displacement = lastDisplaced.offset().top + lastDisplaced.outerHeight();

    // In modern browsers (including IE9), when box-shadow is defined, use the
    // normal height.
    var cssBoxShadowValue = lastDisplaced.css('box-shadow');
    var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
    // In IE8 and below, we use the shadow filter to apply box-shadow styles to
    // the toolbar. It adds some extra height that we need to remove.
    if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test(lastDisplaced.css('filter'))) {
      displacement -= lastDisplaced[0].filters.item('DXImageTransform.Microsoft.Shadow').strength;
      displacement = Math.max(0, displacement);
    }
  }
  return displacement;
};

/**
 * Makes elements outside the overlay unreachable via the tab key.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes changed. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentUntabbable = function (context) {
  // Manipulating tabindexes for the entire document is unacceptably slow in IE6
  // and IE7, so in those browsers, the underlying page will still be reachable
  // via the tab key. However, we still make the links within the Disable
  // message unreachable, because the same message also exists within the
  // child document. The duplicate copy in the underlying document is only for
  // assisting screen-reader users navigating the document with reading commands
  // that follow markup order rather than tab order.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
    $('#overlay-disable-message a', context).attr('tabindex', -1);
    return;
  }

  context = context || document.body;
  var $overlay, $tabbable, $hasTabindex;

  // Determine which elements on the page already have a tabindex.
  $hasTabindex = $('[tabindex] :not(.overlay-element)', context);
  // Record the tabindex for each element, so we can restore it later.
  $hasTabindex.each(Drupal.overlay._recordTabindex);
  // Add the tabbable elements from the current context to any that we might
  // have previously recorded.
  Drupal.overlay._hasTabindex = $hasTabindex.add(Drupal.overlay._hasTabindex);

  // Set tabindex to -1 on everything outside the overlay and toolbars, so that
  // the underlying page is unreachable.

  // By default, browsers make a, area, button, input, object, select, textarea,
  // and iframe elements reachable via the tab key.
  $tabbable = $('a, area, button, input, object, select, textarea, iframe');
  // If another element (like a div) has a tabindex, it's also tabbable.
  $tabbable = $tabbable.add($hasTabindex);
  // Leave links inside the overlay and toolbars alone.
  $overlay = $('.overlay-element, #overlay-container, .overlay-displace-top, .overlay-displace-bottom').find('*');
  $tabbable = $tabbable.not($overlay);
  // We now have a list of everything in the underlying document that could
  // possibly be reachable via the tab key. Make it all unreachable.
  $tabbable.attr('tabindex', -1);
};

/**
 * Restores the original tabindex value of a group of elements.
 *
 * @param context
 *   The part of the DOM that should have its tabindexes restored. Defaults to
 *   the entire page.
 */
Drupal.overlay.makeDocumentTabbable = function (context) {
  // Manipulating tabindexes is unacceptably slow in IE6 and IE7. In those
  // browsers, the underlying page was never made unreachable via tab, so
  // there is no work to be done here.
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
    return;
  }

  var $needsTabindex;
  context = context || document.body;

  // Make the underlying document tabbable again by removing all existing
  // tabindex attributes.
  var $tabindex = $('[tabindex]', context);
  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
    // removeAttr('tabindex') is broken in IE6-7, but the DOM function
    // removeAttribute works.
    var i;
    var length = $tabindex.length;
    for (i = 0; i < length; i++) {
      $tabindex[i].removeAttribute('tabIndex');
    }
  }
  else {
    $tabindex.removeAttr('tabindex');
  }

  // Restore the tabindex attributes that existed before the overlay was opened.
  $needsTabindex = $(Drupal.overlay._hasTabindex, context);
  $needsTabindex.each(Drupal.overlay._restoreTabindex);
  Drupal.overlay._hasTabindex = Drupal.overlay._hasTabindex.not($needsTabindex);
};

/**
 * Record the tabindex for an element, using $.data.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._recordTabindex = function () {
  var $element = $(this);
  var tabindex = $(this).attr('tabindex');
  $element.data('drupalOverlayOriginalTabIndex', tabindex);
};

/**
 * Restore an element's original tabindex.
 *
 * Meant to be used as a jQuery.fn.each callback.
 */
Drupal.overlay._restoreTabindex = function () {
  var $element = $(this);
  var tabindex = $element.data('drupalOverlayOriginalTabIndex');
  $element.attr('tabindex', tabindex);
};

/**
 * Theme function to create the overlay iframe element.
 */
Drupal.theme.prototype.overlayContainer = function () {
  return '<div id="overlay-container"><div class="overlay-modal-background"></div></div>';
};

/**
 * Theme function to create an overlay iframe element.
 */
Drupal.theme.prototype.overlayElement = function (url) {
  return '<iframe class="overlay-element" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>';
};

})(jQuery);
;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(){return++n}function s(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),u=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),u={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,u))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),a.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),(e.active===!1&&e.collapsible===!0||!this.headers.length)&&(e.active=!1,this.active=t()),e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,a=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),a=n.attr("id");s||(s=o+"-header-"+e,i.attr("id",s)),a||(a=o+"-panel-"+e,n.attr("id",a)),i.attr("aria-controls",a),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=a.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?t():n,newPanel:r};e.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var a,o,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(a=t.show().outerHeight(),e.animate(i,{duration:r,easing:o,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:o,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(a-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,o,p):t.animate(s,r,o,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})})(jQuery);;
/*
 * Shadowbox.js, version 3.0.3
 * http://shadowbox-js.com/
 *
 * Copyright 2007-2010, Michael J. I. Jackson
 * Date: 2011-05-14 07:12:22 +0000
 */
(function(au,k){var Q={version:"3.0.3"};var J=navigator.userAgent.toLowerCase();if(J.indexOf("windows")>-1||J.indexOf("win32")>-1){Q.isWindows=true}else{if(J.indexOf("macintosh")>-1||J.indexOf("mac os x")>-1){Q.isMac=true}else{if(J.indexOf("linux")>-1){Q.isLinux=true}}}Q.isIE=J.indexOf("msie")>-1;Q.isIE6=J.indexOf("msie 6")>-1;Q.isIE7=J.indexOf("msie 7")>-1;Q.isGecko=J.indexOf("gecko")>-1&&J.indexOf("safari")==-1;Q.isWebKit=J.indexOf("applewebkit/")>-1;var ab=/#(.+)$/,af=/^(light|shadow)box\[(.*?)\]/i,az=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,f=/[0-9a-z]+$/i,aD=/(.+\/)shadowbox\.js/i;var A=false,a=false,l={},z=0,R,ap;Q.current=-1;Q.dimensions=null;Q.ease=function(K){return 1+Math.pow(K-1,3)};Q.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};Q.gallery=[];Q.onReady=aj;Q.path=null;Q.player=null;Q.playerId="sb-player";Q.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:aj,onClose:aj,onFinish:aj,onOpen:aj,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};Q.getCurrent=function(){return Q.current>-1?Q.gallery[Q.current]:null};Q.hasNext=function(){return Q.gallery.length>1&&(Q.current!=Q.gallery.length-1||Q.options.continuous)};Q.isOpen=function(){return A};Q.isPaused=function(){return ap=="pause"};Q.applyOptions=function(K){l=aC({},Q.options);aC(Q.options,K)};Q.revertOptions=function(){aC(Q.options,l)};Q.init=function(aG,aJ){if(a){return}a=true;if(Q.skin.options){aC(Q.options,Q.skin.options)}if(aG){aC(Q.options,aG)}if(!Q.path){var aI,S=document.getElementsByTagName("script");for(var aH=0,K=S.length;aH<K;++aH){aI=aD.exec(S[aH].src);if(aI){Q.path=aI[1];break}}}if(aJ){Q.onReady=aJ}P()};Q.open=function(S){if(A){return}var K=Q.makeGallery(S);Q.gallery=K[0];Q.current=K[1];S=Q.getCurrent();if(S==null){return}Q.applyOptions(S.options||{});G();if(Q.gallery.length){S=Q.getCurrent();if(Q.options.onOpen(S)===false){return}A=true;Q.skin.onOpen(S,c)}};Q.close=function(){if(!A){return}A=false;if(Q.player){Q.player.remove();Q.player=null}if(typeof ap=="number"){clearTimeout(ap);ap=null}z=0;aq(false);Q.options.onClose(Q.getCurrent());Q.skin.onClose();Q.revertOptions()};Q.play=function(){if(!Q.hasNext()){return}if(!z){z=Q.options.slideshowDelay*1000}if(z){R=aw();ap=setTimeout(function(){z=R=0;Q.next()},z);if(Q.skin.onPlay){Q.skin.onPlay()}}};Q.pause=function(){if(typeof ap!="number"){return}z=Math.max(0,z-(aw()-R));if(z){clearTimeout(ap);ap="pause";if(Q.skin.onPause){Q.skin.onPause()}}};Q.change=function(K){if(!(K in Q.gallery)){if(Q.options.continuous){K=(K<0?Q.gallery.length+K:0);if(!(K in Q.gallery)){return}}else{return}}Q.current=K;if(typeof ap=="number"){clearTimeout(ap);ap=null;z=R=0}Q.options.onChange(Q.getCurrent());c(true)};Q.next=function(){Q.change(Q.current+1)};Q.previous=function(){Q.change(Q.current-1)};Q.setDimensions=function(aS,aJ,aQ,aR,aI,K,aO,aL){var aN=aS,aH=aJ;var aM=2*aO+aI;if(aS+aM>aQ){aS=aQ-aM}var aG=2*aO+K;if(aJ+aG>aR){aJ=aR-aG}var S=(aN-aS)/aN,aP=(aH-aJ)/aH,aK=(S>0||aP>0);if(aL&&aK){if(S>aP){aJ=Math.round((aH/aN)*aS)}else{if(aP>S){aS=Math.round((aN/aH)*aJ)}}}Q.dimensions={height:aS+aI,width:aJ+K,innerHeight:aS,innerWidth:aJ,top:Math.floor((aQ-(aS+aM))/2+aO),left:Math.floor((aR-(aJ+aG))/2+aO),oversized:aK};return Q.dimensions};Q.makeGallery=function(aI){var K=[],aH=-1;if(typeof aI=="string"){aI=[aI]}if(typeof aI.length=="number"){aF(aI,function(aK,aL){if(aL.content){K[aK]=aL}else{K[aK]={content:aL}}});aH=0}else{if(aI.tagName){var S=Q.getCache(aI);aI=S?S:Q.makeObject(aI)}if(aI.gallery){K=[];var aJ;for(var aG in Q.cache){aJ=Q.cache[aG];if(aJ.gallery&&aJ.gallery==aI.gallery){if(aH==-1&&aJ.content==aI.content){aH=K.length}K.push(aJ)}}if(aH==-1){K.unshift(aI);aH=0}}else{K=[aI];aH=0}}aF(K,function(aK,aL){K[aK]=aC({},aL)});return[K,aH]};Q.makeObject=function(aH,aG){var aI={content:aH.href,title:aH.getAttribute("title")||"",link:aH};if(aG){aG=aC({},aG);aF(["player","title","height","width","gallery"],function(aJ,aK){if(typeof aG[aK]!="undefined"){aI[aK]=aG[aK];delete aG[aK]}});aI.options=aG}else{aI.options={}}if(!aI.player){aI.player=Q.getPlayer(aI.content)}var K=aH.getAttribute("rel");if(K){var S=K.match(af);if(S){aI.gallery=escape(S[2])}aF(K.split(";"),function(aJ,aK){S=aK.match(az);if(S){aI[S[1]]=S[2]}})}return aI};Q.getPlayer=function(aG){if(aG.indexOf("#")>-1&&aG.indexOf(document.location.href)==0){return"inline"}var aH=aG.indexOf("?");if(aH>-1){aG=aG.substring(0,aH)}var S,K=aG.match(f);if(K){S=K[0].toLowerCase()}if(S){if(Q.img&&Q.img.ext.indexOf(S)>-1){return"img"}if(Q.swf&&Q.swf.ext.indexOf(S)>-1){return"swf"}if(Q.flv&&Q.flv.ext.indexOf(S)>-1){return"flv"}if(Q.qt&&Q.qt.ext.indexOf(S)>-1){if(Q.wmp&&Q.wmp.ext.indexOf(S)>-1){return"qtwmp"}else{return"qt"}}if(Q.wmp&&Q.wmp.ext.indexOf(S)>-1){return"wmp"}}return"iframe"};function G(){var aH=Q.errorInfo,aI=Q.plugins,aK,aL,aO,aG,aN,S,aM,K;for(var aJ=0;aJ<Q.gallery.length;++aJ){aK=Q.gallery[aJ];aL=false;aO=null;switch(aK.player){case"flv":case"swf":if(!aI.fla){aO="fla"}break;case"qt":if(!aI.qt){aO="qt"}break;case"wmp":if(Q.isMac){if(aI.qt&&aI.f4m){aK.player="qt"}else{aO="qtf4m"}}else{if(!aI.wmp){aO="wmp"}}break;case"qtwmp":if(aI.qt){aK.player="qt"}else{if(aI.wmp){aK.player="wmp"}else{aO="qtwmp"}}break}if(aO){if(Q.options.handleUnsupported=="link"){switch(aO){case"qtf4m":aN="shared";S=[aH.qt.url,aH.qt.name,aH.f4m.url,aH.f4m.name];break;case"qtwmp":aN="either";S=[aH.qt.url,aH.qt.name,aH.wmp.url,aH.wmp.name];break;default:aN="single";S=[aH[aO].url,aH[aO].name]}aK.player="html";aK.content='<div class="sb-message">'+s(Q.lang.errors[aN],S)+"</div>"}else{aL=true}}else{if(aK.player=="inline"){aG=ab.exec(aK.content);if(aG){aM=ad(aG[1]);if(aM){aK.content=aM.innerHTML}else{aL=true}}else{aL=true}}else{if(aK.player=="swf"||aK.player=="flv"){K=(aK.options&&aK.options.flashVersion)||Q.options.flashVersion;if(Q.flash&&!Q.flash.hasFlashPlayerVersion(K)){aK.width=310;aK.height=177}}}}if(aL){Q.gallery.splice(aJ,1);if(aJ<Q.current){--Q.current}else{if(aJ==Q.current){Q.current=aJ>0?aJ-1:aJ}}--aJ}}}function aq(K){if(!Q.options.enableKeys){return}(K?F:M)(document,"keydown",an)}function an(aG){if(aG.metaKey||aG.shiftKey||aG.altKey||aG.ctrlKey){return}var S=v(aG),K;switch(S){case 81:case 88:case 27:K=Q.close;break;case 37:K=Q.previous;break;case 39:K=Q.next;break;case 32:K=typeof ap=="number"?Q.pause:Q.play;break}if(K){n(aG);K()}}function c(aK){aq(false);var aJ=Q.getCurrent();var aG=(aJ.player=="inline"?"html":aJ.player);if(typeof Q[aG]!="function"){throw"unknown player "+aG}if(aK){Q.player.remove();Q.revertOptions();Q.applyOptions(aJ.options||{})}Q.player=new Q[aG](aJ,Q.playerId);if(Q.gallery.length>1){var aH=Q.gallery[Q.current+1]||Q.gallery[0];if(aH.player=="img"){var S=new Image();S.src=aH.content}var aI=Q.gallery[Q.current-1]||Q.gallery[Q.gallery.length-1];if(aI.player=="img"){var K=new Image();K.src=aI.content}}Q.skin.onLoad(aK,W)}function W(){if(!A){return}if(typeof Q.player.ready!="undefined"){var K=setInterval(function(){if(A){if(Q.player.ready){clearInterval(K);K=null;Q.skin.onReady(e)}}else{clearInterval(K);K=null}},10)}else{Q.skin.onReady(e)}}function e(){if(!A){return}Q.player.append(Q.skin.body,Q.dimensions);Q.skin.onShow(I)}function I(){if(!A){return}if(Q.player.onLoad){Q.player.onLoad()}Q.options.onFinish(Q.getCurrent());if(!Q.isPaused()){Q.play()}aq(true)}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(S,aG){var K=this.length>>>0;aG=aG||0;if(aG<0){aG+=K}for(;aG<K;++aG){if(aG in this&&this[aG]===S){return aG}}return -1}}function aw(){return(new Date).getTime()}function aC(K,aG){for(var S in aG){K[S]=aG[S]}return K}function aF(aH,aI){var S=0,K=aH.length;for(var aG=aH[0];S<K&&aI.call(aG,S,aG)!==false;aG=aH[++S]){}}function s(S,K){return S.replace(/\{(\w+?)\}/g,function(aG,aH){return K[aH]})}function aj(){}function ad(K){return document.getElementById(K)}function C(K){K.parentNode.removeChild(K)}var h=true,x=true;function d(){var K=document.body,S=document.createElement("div");h=typeof S.style.opacity==="string";S.style.position="fixed";S.style.margin=0;S.style.top="20px";K.appendChild(S,K.firstChild);x=S.offsetTop==20;K.removeChild(S)}Q.getStyle=(function(){var K=/opacity=([^)]*)/,S=document.defaultView&&document.defaultView.getComputedStyle;return function(aJ,aI){var aH;if(!h&&aI=="opacity"&&aJ.currentStyle){aH=K.test(aJ.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return aH===""?"1":aH}if(S){var aG=S(aJ,null);if(aG){aH=aG[aI]}if(aI=="opacity"&&aH==""){aH="1"}}else{aH=aJ.currentStyle[aI]}return aH}})();Q.appendHTML=function(aG,S){if(aG.insertAdjacentHTML){aG.insertAdjacentHTML("BeforeEnd",S)}else{if(aG.lastChild){var K=aG.ownerDocument.createRange();K.setStartAfter(aG.lastChild);var aH=K.createContextualFragment(S);aG.appendChild(aH)}else{aG.innerHTML=S}}};Q.getWindowSize=function(K){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+K]}return document.body["client"+K]};Q.setOpacity=function(aG,K){var S=aG.style;if(h){S.opacity=(K==1?"":K)}else{S.zoom=1;if(K==1){if(typeof S.filter=="string"&&(/alpha/i).test(S.filter)){S.filter=S.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")}}else{S.filter=(S.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(K*100)+")"}}};Q.clearOpacity=function(K){Q.setOpacity(K,1)};function o(S){var K=S.target?S.target:S.srcElement;return K.nodeType==3?K.parentNode:K}function V(S){var K=S.pageX||(S.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),aG=S.pageY||(S.clientY+(document.documentElement.scrollTop||document.body.scrollTop));return[K,aG]}function n(K){K.preventDefault()}function v(K){return K.which?K.which:K.keyCode}function F(aH,aG,S){if(aH.addEventListener){aH.addEventListener(aG,S,false)}else{if(aH.nodeType===3||aH.nodeType===8){return}if(aH.setInterval&&(aH!==au&&!aH.frameElement)){aH=au}if(!S.__guid){S.__guid=F.guid++}if(!aH.events){aH.events={}}var K=aH.events[aG];if(!K){K=aH.events[aG]={};if(aH["on"+aG]){K[0]=aH["on"+aG]}}K[S.__guid]=S;aH["on"+aG]=F.handleEvent}}F.guid=1;F.handleEvent=function(aH){var K=true;aH=aH||F.fixEvent(((this.ownerDocument||this.document||this).parentWindow||au).event);var S=this.events[aH.type];for(var aG in S){this.__handleEvent=S[aG];if(this.__handleEvent(aH)===false){K=false}}return K};F.preventDefault=function(){this.returnValue=false};F.stopPropagation=function(){this.cancelBubble=true};F.fixEvent=function(K){K.preventDefault=F.preventDefault;K.stopPropagation=F.stopPropagation;return K};function M(aG,S,K){if(aG.removeEventListener){aG.removeEventListener(S,K,false)}else{if(aG.events&&aG.events[S]){delete aG.events[S][K.__guid]}}}var y=false,al;if(document.addEventListener){al=function(){document.removeEventListener("DOMContentLoaded",al,false);Q.load()}}else{if(document.attachEvent){al=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",al);Q.load()}}}}function g(){if(y){return}try{document.documentElement.doScroll("left")}catch(K){setTimeout(g,1);return}Q.load()}function P(){if(document.readyState==="complete"){return Q.load()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",al,false);au.addEventListener("load",Q.load,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",al);au.attachEvent("onload",Q.load);var K=false;try{K=au.frameElement===null}catch(S){}if(document.documentElement.doScroll&&K){g()}}}}Q.load=function(){if(y){return}if(!document.body){return setTimeout(Q.load,13)}y=true;d();Q.onReady();if(!Q.options.skipSetup){Q.setup()}Q.skin.init()};Q.plugins={};if(navigator.plugins&&navigator.plugins.length){var w=[];aF(navigator.plugins,function(K,S){w.push(S.name)});w=w.join(",");var ai=w.indexOf("Flip4Mac")>-1;Q.plugins={fla:w.indexOf("Shockwave Flash")>-1,qt:w.indexOf("QuickTime")>-1,wmp:!ai&&w.indexOf("Windows Media")>-1,f4m:ai}}else{var p=function(K){var S;try{S=new ActiveXObject(K)}catch(aG){}return !!S};Q.plugins={fla:p("ShockwaveFlash.ShockwaveFlash"),qt:p("QuickTime.QuickTime"),wmp:p("wmplayer.ocx"),f4m:false}}var X=/^(light|shadow)box/i,am="shadowboxCacheKey",b=1;Q.cache={};Q.select=function(S){var aG=[];if(!S){var K;aF(document.getElementsByTagName("a"),function(aJ,aK){K=aK.getAttribute("rel");if(K&&X.test(K)){aG.push(aK)}})}else{var aI=S.length;if(aI){if(typeof S=="string"){if(Q.find){aG=Q.find(S)}}else{if(aI==2&&typeof S[0]=="string"&&S[1].nodeType){if(Q.find){aG=Q.find(S[0],S[1])}}else{for(var aH=0;aH<aI;++aH){aG[aH]=S[aH]}}}}else{aG.push(S)}}return aG};Q.setup=function(K,S){aF(Q.select(K),function(aG,aH){Q.addCache(aH,S)})};Q.teardown=function(K){aF(Q.select(K),function(S,aG){Q.removeCache(aG)})};Q.addCache=function(aG,K){var S=aG[am];if(S==k){S=b++;aG[am]=S;F(aG,"click",u)}Q.cache[S]=Q.makeObject(aG,K)};Q.removeCache=function(K){M(K,"click",u);delete Q.cache[K[am]];K[am]=null};Q.getCache=function(S){var K=S[am];return(K in Q.cache&&Q.cache[K])};Q.clearCache=function(){for(var K in Q.cache){Q.removeCache(Q.cache[K].link)}Q.cache={}};function u(K){Q.open(this);if(Q.gallery.length){n(K)}}
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 *
 * Modified for inclusion in Shadowbox.js
 */
Q.find=(function(){var aP=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,aQ=0,aS=Object.prototype.toString,aK=false,aJ=true;[0,0].sort(function(){aJ=false;return 0});var aG=function(a1,aW,a4,a5){a4=a4||[];var a7=aW=aW||document;if(aW.nodeType!==1&&aW.nodeType!==9){return[]}if(!a1||typeof a1!=="string"){return a4}var a2=[],aY,a9,bc,aX,a0=true,aZ=aH(aW),a6=a1;while((aP.exec(""),aY=aP.exec(a6))!==null){a6=aY[3];a2.push(aY[1]);if(aY[2]){aX=aY[3];break}}if(a2.length>1&&aL.exec(a1)){if(a2.length===2&&aM.relative[a2[0]]){a9=aT(a2[0]+a2[1],aW)}else{a9=aM.relative[a2[0]]?[aW]:aG(a2.shift(),aW);while(a2.length){a1=a2.shift();if(aM.relative[a1]){a1+=a2.shift()}a9=aT(a1,a9)}}}else{if(!a5&&a2.length>1&&aW.nodeType===9&&!aZ&&aM.match.ID.test(a2[0])&&!aM.match.ID.test(a2[a2.length-1])){var a8=aG.find(a2.shift(),aW,aZ);aW=a8.expr?aG.filter(a8.expr,a8.set)[0]:a8.set[0]}if(aW){var a8=a5?{expr:a2.pop(),set:aO(a5)}:aG.find(a2.pop(),a2.length===1&&(a2[0]==="~"||a2[0]==="+")&&aW.parentNode?aW.parentNode:aW,aZ);a9=a8.expr?aG.filter(a8.expr,a8.set):a8.set;if(a2.length>0){bc=aO(a9)}else{a0=false}while(a2.length){var bb=a2.pop(),ba=bb;if(!aM.relative[bb]){bb=""}else{ba=a2.pop()}if(ba==null){ba=aW}aM.relative[bb](bc,ba,aZ)}}else{bc=a2=[]}}if(!bc){bc=a9}if(!bc){throw"Syntax error, unrecognized expression: "+(bb||a1)}if(aS.call(bc)==="[object Array]"){if(!a0){a4.push.apply(a4,bc)}else{if(aW&&aW.nodeType===1){for(var a3=0;bc[a3]!=null;a3++){if(bc[a3]&&(bc[a3]===true||bc[a3].nodeType===1&&aN(aW,bc[a3]))){a4.push(a9[a3])}}}else{for(var a3=0;bc[a3]!=null;a3++){if(bc[a3]&&bc[a3].nodeType===1){a4.push(a9[a3])}}}}}else{aO(bc,a4)}if(aX){aG(aX,a7,a4,a5);aG.uniqueSort(a4)}return a4};aG.uniqueSort=function(aX){if(aR){aK=aJ;aX.sort(aR);if(aK){for(var aW=1;aW<aX.length;aW++){if(aX[aW]===aX[aW-1]){aX.splice(aW--,1)}}}}return aX};aG.matches=function(aW,aX){return aG(aW,null,null,aX)};aG.find=function(a3,aW,a4){var a2,a0;if(!a3){return[]}for(var aZ=0,aY=aM.order.length;aZ<aY;aZ++){var a1=aM.order[aZ],a0;if((a0=aM.leftMatch[a1].exec(a3))){var aX=a0[1];a0.splice(1,1);if(aX.substr(aX.length-1)!=="\\"){a0[1]=(a0[1]||"").replace(/\\/g,"");a2=aM.find[a1](a0,aW,a4);if(a2!=null){a3=a3.replace(aM.match[a1],"");break}}}}if(!a2){a2=aW.getElementsByTagName("*")}return{set:a2,expr:a3}};aG.filter=function(a6,a5,a9,aZ){var aY=a6,bb=[],a3=a5,a1,aW,a2=a5&&a5[0]&&aH(a5[0]);while(a6&&a5.length){for(var a4 in aM.filter){if((a1=aM.match[a4].exec(a6))!=null){var aX=aM.filter[a4],ba,a8;aW=false;if(a3===bb){bb=[]}if(aM.preFilter[a4]){a1=aM.preFilter[a4](a1,a3,a9,bb,aZ,a2);if(!a1){aW=ba=true}else{if(a1===true){continue}}}if(a1){for(var a0=0;(a8=a3[a0])!=null;a0++){if(a8){ba=aX(a8,a1,a0,a3);var a7=aZ^!!ba;if(a9&&ba!=null){if(a7){aW=true}else{a3[a0]=false}}else{if(a7){bb.push(a8);aW=true}}}}}if(ba!==k){if(!a9){a3=bb}a6=a6.replace(aM.match[a4],"");if(!aW){return[]}break}}}if(a6===aY){if(aW==null){throw"Syntax error, unrecognized expression: "+a6}else{break}}aY=a6}return a3};var aM=aG.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(aW){return aW.getAttribute("href")}},relative:{"+":function(a2,aX){var aZ=typeof aX==="string",a1=aZ&&!/\W/.test(aX),a3=aZ&&!a1;if(a1){aX=aX.toLowerCase()}for(var aY=0,aW=a2.length,a0;aY<aW;aY++){if((a0=a2[aY])){while((a0=a0.previousSibling)&&a0.nodeType!==1){}a2[aY]=a3||a0&&a0.nodeName.toLowerCase()===aX?a0||false:a0===aX}}if(a3){aG.filter(aX,a2,true)}},">":function(a2,aX){var a0=typeof aX==="string";if(a0&&!/\W/.test(aX)){aX=aX.toLowerCase();for(var aY=0,aW=a2.length;aY<aW;aY++){var a1=a2[aY];if(a1){var aZ=a1.parentNode;a2[aY]=aZ.nodeName.toLowerCase()===aX?aZ:false}}}else{for(var aY=0,aW=a2.length;aY<aW;aY++){var a1=a2[aY];if(a1){a2[aY]=a0?a1.parentNode:a1.parentNode===aX}}if(a0){aG.filter(aX,a2,true)}}},"":function(aZ,aX,a1){var aY=aQ++,aW=aU;if(typeof aX==="string"&&!/\W/.test(aX)){var a0=aX=aX.toLowerCase();aW=K}aW("parentNode",aX,aY,aZ,a0,a1)},"~":function(aZ,aX,a1){var aY=aQ++,aW=aU;if(typeof aX==="string"&&!/\W/.test(aX)){var a0=aX=aX.toLowerCase();aW=K}aW("previousSibling",aX,aY,aZ,a0,a1)}},find:{ID:function(aX,aY,aZ){if(typeof aY.getElementById!=="undefined"&&!aZ){var aW=aY.getElementById(aX[1]);return aW?[aW]:[]}},NAME:function(aY,a1){if(typeof a1.getElementsByName!=="undefined"){var aX=[],a0=a1.getElementsByName(aY[1]);for(var aZ=0,aW=a0.length;aZ<aW;aZ++){if(a0[aZ].getAttribute("name")===aY[1]){aX.push(a0[aZ])}}return aX.length===0?null:aX}},TAG:function(aW,aX){return aX.getElementsByTagName(aW[1])}},preFilter:{CLASS:function(aZ,aX,aY,aW,a2,a3){aZ=" "+aZ[1].replace(/\\/g,"")+" ";if(a3){return aZ}for(var a0=0,a1;(a1=aX[a0])!=null;a0++){if(a1){if(a2^(a1.className&&(" "+a1.className+" ").replace(/[\t\n]/g," ").indexOf(aZ)>=0)){if(!aY){aW.push(a1)}}else{if(aY){aX[a0]=false}}}}return false},ID:function(aW){return aW[1].replace(/\\/g,"")},TAG:function(aX,aW){return aX[1].toLowerCase()},CHILD:function(aW){if(aW[1]==="nth"){var aX=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(aW[2]==="even"&&"2n"||aW[2]==="odd"&&"2n+1"||!/\D/.test(aW[2])&&"0n+"+aW[2]||aW[2]);aW[2]=(aX[1]+(aX[2]||1))-0;aW[3]=aX[3]-0}aW[0]=aQ++;return aW},ATTR:function(a0,aX,aY,aW,a1,a2){var aZ=a0[1].replace(/\\/g,"");if(!a2&&aM.attrMap[aZ]){a0[1]=aM.attrMap[aZ]}if(a0[2]==="~="){a0[4]=" "+a0[4]+" "}return a0},PSEUDO:function(a0,aX,aY,aW,a1){if(a0[1]==="not"){if((aP.exec(a0[3])||"").length>1||/^\w/.test(a0[3])){a0[3]=aG(a0[3],null,null,aX)}else{var aZ=aG.filter(a0[3],aX,aY,true^a1);if(!aY){aW.push.apply(aW,aZ)}return false}}else{if(aM.match.POS.test(a0[0])||aM.match.CHILD.test(a0[0])){return true}}return a0},POS:function(aW){aW.unshift(true);return aW}},filters:{enabled:function(aW){return aW.disabled===false&&aW.type!=="hidden"},disabled:function(aW){return aW.disabled===true},checked:function(aW){return aW.checked===true},selected:function(aW){aW.parentNode.selectedIndex;return aW.selected===true},parent:function(aW){return !!aW.firstChild},empty:function(aW){return !aW.firstChild},has:function(aY,aX,aW){return !!aG(aW[3],aY).length},header:function(aW){return/h\d/i.test(aW.nodeName)},text:function(aW){return"text"===aW.type},radio:function(aW){return"radio"===aW.type},checkbox:function(aW){return"checkbox"===aW.type},file:function(aW){return"file"===aW.type},password:function(aW){return"password"===aW.type},submit:function(aW){return"submit"===aW.type},image:function(aW){return"image"===aW.type},reset:function(aW){return"reset"===aW.type},button:function(aW){return"button"===aW.type||aW.nodeName.toLowerCase()==="button"},input:function(aW){return/input|select|textarea|button/i.test(aW.nodeName)}},setFilters:{first:function(aX,aW){return aW===0},last:function(aY,aX,aW,aZ){return aX===aZ.length-1},even:function(aX,aW){return aW%2===0},odd:function(aX,aW){return aW%2===1},lt:function(aY,aX,aW){return aX<aW[3]-0},gt:function(aY,aX,aW){return aX>aW[3]-0},nth:function(aY,aX,aW){return aW[3]-0===aX},eq:function(aY,aX,aW){return aW[3]-0===aX}},filter:{PSEUDO:function(a2,aY,aZ,a3){var aX=aY[1],a0=aM.filters[aX];if(a0){return a0(a2,aZ,aY,a3)}else{if(aX==="contains"){return(a2.textContent||a2.innerText||S([a2])||"").indexOf(aY[3])>=0}else{if(aX==="not"){var a1=aY[3];for(var aZ=0,aW=a1.length;aZ<aW;aZ++){if(a1[aZ]===a2){return false}}return true}else{throw"Syntax error, unrecognized expression: "+aX}}}},CHILD:function(aW,aZ){var a2=aZ[1],aX=aW;switch(a2){case"only":case"first":while((aX=aX.previousSibling)){if(aX.nodeType===1){return false}}if(a2==="first"){return true}aX=aW;case"last":while((aX=aX.nextSibling)){if(aX.nodeType===1){return false}}return true;case"nth":var aY=aZ[2],a5=aZ[3];if(aY===1&&a5===0){return true}var a1=aZ[0],a4=aW.parentNode;if(a4&&(a4.sizcache!==a1||!aW.nodeIndex)){var a0=0;for(aX=a4.firstChild;aX;aX=aX.nextSibling){if(aX.nodeType===1){aX.nodeIndex=++a0}}a4.sizcache=a1}var a3=aW.nodeIndex-a5;if(aY===0){return a3===0}else{return(a3%aY===0&&a3/aY>=0)}}},ID:function(aX,aW){return aX.nodeType===1&&aX.getAttribute("id")===aW},TAG:function(aX,aW){return(aW==="*"&&aX.nodeType===1)||aX.nodeName.toLowerCase()===aW},CLASS:function(aX,aW){return(" "+(aX.className||aX.getAttribute("class"))+" ").indexOf(aW)>-1},ATTR:function(a1,aZ){var aY=aZ[1],aW=aM.attrHandle[aY]?aM.attrHandle[aY](a1):a1[aY]!=null?a1[aY]:a1.getAttribute(aY),a2=aW+"",a0=aZ[2],aX=aZ[4];return aW==null?a0==="!=":a0==="="?a2===aX:a0==="*="?a2.indexOf(aX)>=0:a0==="~="?(" "+a2+" ").indexOf(aX)>=0:!aX?a2&&aW!==false:a0==="!="?a2!==aX:a0==="^="?a2.indexOf(aX)===0:a0==="$="?a2.substr(a2.length-aX.length)===aX:a0==="|="?a2===aX||a2.substr(0,aX.length+1)===aX+"-":false},POS:function(a0,aX,aY,a1){var aW=aX[2],aZ=aM.setFilters[aW];if(aZ){return aZ(a0,aY,aX,a1)}}}};var aL=aM.match.POS;for(var aI in aM.match){aM.match[aI]=new RegExp(aM.match[aI].source+/(?![^\[]*\])(?![^\(]*\))/.source);aM.leftMatch[aI]=new RegExp(/(^(?:.|\r|\n)*?)/.source+aM.match[aI].source)}var aO=function(aX,aW){aX=Array.prototype.slice.call(aX,0);if(aW){aW.push.apply(aW,aX);return aW}return aX};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(aV){aO=function(a0,aZ){var aX=aZ||[];if(aS.call(a0)==="[object Array]"){Array.prototype.push.apply(aX,a0)}else{if(typeof a0.length==="number"){for(var aY=0,aW=a0.length;aY<aW;aY++){aX.push(a0[aY])}}else{for(var aY=0;a0[aY];aY++){aX.push(a0[aY])}}}return aX}}var aR;if(document.documentElement.compareDocumentPosition){aR=function(aX,aW){if(!aX.compareDocumentPosition||!aW.compareDocumentPosition){if(aX==aW){aK=true}return aX.compareDocumentPosition?-1:1}var aY=aX.compareDocumentPosition(aW)&4?-1:aX===aW?0:1;if(aY===0){aK=true}return aY}}else{if("sourceIndex" in document.documentElement){aR=function(aX,aW){if(!aX.sourceIndex||!aW.sourceIndex){if(aX==aW){aK=true}return aX.sourceIndex?-1:1}var aY=aX.sourceIndex-aW.sourceIndex;if(aY===0){aK=true}return aY}}else{if(document.createRange){aR=function(aZ,aX){if(!aZ.ownerDocument||!aX.ownerDocument){if(aZ==aX){aK=true}return aZ.ownerDocument?-1:1}var aY=aZ.ownerDocument.createRange(),aW=aX.ownerDocument.createRange();aY.setStart(aZ,0);aY.setEnd(aZ,0);aW.setStart(aX,0);aW.setEnd(aX,0);var a0=aY.compareBoundaryPoints(Range.START_TO_END,aW);if(a0===0){aK=true}return a0}}}}function S(aW){var aX="",aZ;for(var aY=0;aW[aY];aY++){aZ=aW[aY];if(aZ.nodeType===3||aZ.nodeType===4){aX+=aZ.nodeValue}else{if(aZ.nodeType!==8){aX+=S(aZ.childNodes)}}}return aX}(function(){var aX=document.createElement("div"),aY="script"+(new Date).getTime();aX.innerHTML="<a name='"+aY+"'/>";var aW=document.documentElement;aW.insertBefore(aX,aW.firstChild);if(document.getElementById(aY)){aM.find.ID=function(a0,a1,a2){if(typeof a1.getElementById!=="undefined"&&!a2){var aZ=a1.getElementById(a0[1]);return aZ?aZ.id===a0[1]||typeof aZ.getAttributeNode!=="undefined"&&aZ.getAttributeNode("id").nodeValue===a0[1]?[aZ]:k:[]}};aM.filter.ID=function(a1,aZ){var a0=typeof a1.getAttributeNode!=="undefined"&&a1.getAttributeNode("id");return a1.nodeType===1&&a0&&a0.nodeValue===aZ}}aW.removeChild(aX);aW=aX=null})();(function(){var aW=document.createElement("div");aW.appendChild(document.createComment(""));if(aW.getElementsByTagName("*").length>0){aM.find.TAG=function(aX,a1){var a0=a1.getElementsByTagName(aX[1]);if(aX[1]==="*"){var aZ=[];for(var aY=0;a0[aY];aY++){if(a0[aY].nodeType===1){aZ.push(a0[aY])}}a0=aZ}return a0}}aW.innerHTML="<a href='#'></a>";if(aW.firstChild&&typeof aW.firstChild.getAttribute!=="undefined"&&aW.firstChild.getAttribute("href")!=="#"){aM.attrHandle.href=function(aX){return aX.getAttribute("href",2)}}aW=null})();if(document.querySelectorAll){(function(){var aW=aG,aY=document.createElement("div");aY.innerHTML="<p class='TEST'></p>";if(aY.querySelectorAll&&aY.querySelectorAll(".TEST").length===0){return}aG=function(a2,a1,aZ,a0){a1=a1||document;if(!a0&&a1.nodeType===9&&!aH(a1)){try{return aO(a1.querySelectorAll(a2),aZ)}catch(a3){}}return aW(a2,a1,aZ,a0)};for(var aX in aW){aG[aX]=aW[aX]}aY=null})()}(function(){var aW=document.createElement("div");aW.innerHTML="<div class='test e'></div><div class='test'></div>";if(!aW.getElementsByClassName||aW.getElementsByClassName("e").length===0){return}aW.lastChild.className="e";if(aW.getElementsByClassName("e").length===1){return}aM.order.splice(1,0,"CLASS");aM.find.CLASS=function(aX,aY,aZ){if(typeof aY.getElementsByClassName!=="undefined"&&!aZ){return aY.getElementsByClassName(aX[1])}};aW=null})();function K(aX,a2,a1,a5,a3,a4){for(var aZ=0,aY=a5.length;aZ<aY;aZ++){var aW=a5[aZ];if(aW){aW=aW[aX];var a0=false;while(aW){if(aW.sizcache===a1){a0=a5[aW.sizset];break}if(aW.nodeType===1&&!a4){aW.sizcache=a1;aW.sizset=aZ}if(aW.nodeName.toLowerCase()===a2){a0=aW;break}aW=aW[aX]}a5[aZ]=a0}}}function aU(aX,a2,a1,a5,a3,a4){for(var aZ=0,aY=a5.length;aZ<aY;aZ++){var aW=a5[aZ];if(aW){aW=aW[aX];var a0=false;while(aW){if(aW.sizcache===a1){a0=a5[aW.sizset];break}if(aW.nodeType===1){if(!a4){aW.sizcache=a1;aW.sizset=aZ}if(typeof a2!=="string"){if(aW===a2){a0=true;break}}else{if(aG.filter(a2,[aW]).length>0){a0=aW;break}}}aW=aW[aX]}a5[aZ]=a0}}}var aN=document.compareDocumentPosition?function(aX,aW){return aX.compareDocumentPosition(aW)&16}:function(aX,aW){return aX!==aW&&(aX.contains?aX.contains(aW):true)};var aH=function(aW){var aX=(aW?aW.ownerDocument||aW:0).documentElement;return aX?aX.nodeName!=="HTML":false};var aT=function(aW,a3){var aZ=[],a0="",a1,aY=a3.nodeType?[a3]:a3;while((a1=aM.match.PSEUDO.exec(aW))){a0+=a1[0];aW=aW.replace(aM.match.PSEUDO,"")}aW=aM.relative[aW]?aW+"*":aW;for(var a2=0,aX=aY.length;a2<aX;a2++){aG(aW,aY[a2],aZ)}return aG.filter(a0,aZ)};return aG})();Q.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};var D,at="sb-drag-proxy",E,j,ag;function ax(){E={x:0,y:0,startX:null,startY:null}}function aA(){var K=Q.dimensions;aC(j.style,{height:K.innerHeight+"px",width:K.innerWidth+"px"})}function O(){ax();var K=["position:absolute","cursor:"+(Q.isGecko?"-moz-grab":"move"),"background-color:"+(Q.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");Q.appendHTML(Q.skin.body,'<div id="'+at+'" style="'+K+'"></div>');j=ad(at);aA();F(j,"mousedown",L)}function B(){if(j){M(j,"mousedown",L);C(j);j=null}ag=null}function L(S){n(S);var K=V(S);E.startX=K[0];E.startY=K[1];ag=ad(Q.player.id);F(document,"mousemove",H);F(document,"mouseup",i);if(Q.isGecko){j.style.cursor="-moz-grabbing"}}function H(aI){var K=Q.player,aJ=Q.dimensions,aH=V(aI);var aG=aH[0]-E.startX;E.startX+=aG;E.x=Math.max(Math.min(0,E.x+aG),aJ.innerWidth-K.width);var S=aH[1]-E.startY;E.startY+=S;E.y=Math.max(Math.min(0,E.y+S),aJ.innerHeight-K.height);aC(ag.style,{left:E.x+"px",top:E.y+"px"})}function i(){M(document,"mousemove",H);M(document,"mouseup",i);if(Q.isGecko){j.style.cursor="-moz-grab"}}Q.img=function(S,aG){this.obj=S;this.id=aG;this.ready=false;var K=this;D=new Image();D.onload=function(){K.height=S.height?parseInt(S.height,10):D.height;K.width=S.width?parseInt(S.width,10):D.width;K.ready=true;D.onload=null;D=null};D.src=S.content};Q.img.ext=["bmp","gif","jpg","jpeg","png"];Q.img.prototype={append:function(S,aI){var aG=document.createElement("img");aG.id=this.id;aG.src=this.obj.content;aG.style.position="absolute";var K,aH;if(aI.oversized&&Q.options.handleOversize=="resize"){K=aI.innerHeight;aH=aI.innerWidth}else{K=this.height;aH=this.width}aG.setAttribute("height",K);aG.setAttribute("width",aH);S.appendChild(aG)},remove:function(){var K=ad(this.id);if(K){C(K)}B();if(D){D.onload=null;D=null}},onLoad:function(){var K=Q.dimensions;if(K.oversized&&Q.options.handleOversize=="drag"){O()}},onWindowResize:function(){var aH=Q.dimensions;switch(Q.options.handleOversize){case"resize":var K=ad(this.id);K.height=aH.innerHeight;K.width=aH.innerWidth;break;case"drag":if(ag){var aG=parseInt(Q.getStyle(ag,"top")),S=parseInt(Q.getStyle(ag,"left"));if(aG+this.height<aH.innerHeight){ag.style.top=aH.innerHeight-this.height+"px"}if(S+this.width<aH.innerWidth){ag.style.left=aH.innerWidth-this.width+"px"}aA()}break}}};var ao=false,Y=[],q=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],aa,ae,Z,m=true;function N(aG,aQ,aN,aL,aR){var K=(aQ=="opacity"),aM=K?Q.setOpacity:function(aS,aT){aS.style[aQ]=""+aT+"px"};if(aL==0||(!K&&!Q.options.animate)||(K&&!Q.options.animateFade)){aM(aG,aN);if(aR){aR()}return}var aO=parseFloat(Q.getStyle(aG,aQ))||0;var aP=aN-aO;if(aP==0){if(aR){aR()}return}aL*=1000;var aH=aw(),aK=Q.ease,aJ=aH+aL,aI;var S=setInterval(function(){aI=aw();if(aI>=aJ){clearInterval(S);S=null;aM(aG,aN);if(aR){aR()}}else{aM(aG,aO+aK((aI-aH)/aL)*aP)}},10)}function aB(){aa.style.height=Q.getWindowSize("Height")+"px";aa.style.width=Q.getWindowSize("Width")+"px"}function aE(){aa.style.top=document.documentElement.scrollTop+"px";aa.style.left=document.documentElement.scrollLeft+"px"}function ay(K){if(K){aF(Y,function(S,aG){aG[0].style.visibility=aG[1]||""})}else{Y=[];aF(Q.options.troubleElements,function(aG,S){aF(document.getElementsByTagName(S),function(aH,aI){Y.push([aI,aI.style.visibility]);aI.style.visibility="hidden"})})}}function r(aG,K){var S=ad("sb-nav-"+aG);if(S){S.style.display=K?"":"none"}}function ah(K,aJ){var aI=ad("sb-loading"),aG=Q.getCurrent().player,aH=(aG=="img"||aG=="html");if(K){Q.setOpacity(aI,0);aI.style.display="block";var S=function(){Q.clearOpacity(aI);if(aJ){aJ()}};if(aH){N(aI,"opacity",1,Q.options.fadeDuration,S)}else{S()}}else{var S=function(){aI.style.display="none";Q.clearOpacity(aI);if(aJ){aJ()}};if(aH){N(aI,"opacity",0,Q.options.fadeDuration,S)}else{S()}}}function t(aO){var aJ=Q.getCurrent();ad("sb-title-inner").innerHTML=aJ.title||"";var aP,aL,S,aQ,aM;if(Q.options.displayNav){aP=true;var aN=Q.gallery.length;if(aN>1){if(Q.options.continuous){aL=aM=true}else{aL=(aN-1)>Q.current;aM=Q.current>0}}if(Q.options.slideshowDelay>0&&Q.hasNext()){aQ=!Q.isPaused();S=!aQ}}else{aP=aL=S=aQ=aM=false}r("close",aP);r("next",aL);r("play",S);r("pause",aQ);r("previous",aM);var K="";if(Q.options.displayCounter&&Q.gallery.length>1){var aN=Q.gallery.length;if(Q.options.counterType=="skip"){var aI=0,aH=aN,aG=parseInt(Q.options.counterLimit)||0;if(aG<aN&&aG>2){var aK=Math.floor(aG/2);aI=Q.current-aK;if(aI<0){aI+=aN}aH=Q.current+(aG-aK);if(aH>aN){aH-=aN}}while(aI!=aH){if(aI==aN){aI=0}K+='<a onclick="Shadowbox.change('+aI+');"';if(aI==Q.current){K+=' class="sb-counter-current"'}K+=">"+(++aI)+"</a>"}}else{K=[Q.current+1,Q.lang.of,aN].join(" ")}}ad("sb-counter").innerHTML=K;aO()}function U(aH){var K=ad("sb-title-inner"),aG=ad("sb-info-inner"),S=0.35;K.style.visibility=aG.style.visibility="";if(K.innerHTML!=""){N(K,"marginTop",0,S)}N(aG,"marginTop",0,S,aH)}function av(aG,aM){var aK=ad("sb-title"),K=ad("sb-info"),aH=aK.offsetHeight,aI=K.offsetHeight,aJ=ad("sb-title-inner"),aL=ad("sb-info-inner"),S=(aG?0.35:0);N(aJ,"marginTop",aH,S);N(aL,"marginTop",aI*-1,S,function(){aJ.style.visibility=aL.style.visibility="hidden";aM()})}function ac(K,aH,S,aJ){var aI=ad("sb-wrapper-inner"),aG=(S?Q.options.resizeDuration:0);N(Z,"top",aH,aG);N(aI,"height",K,aG,aJ)}function ar(K,aH,S,aI){var aG=(S?Q.options.resizeDuration:0);N(Z,"left",aH,aG);N(Z,"width",K,aG,aI)}function ak(aM,aG){var aI=ad("sb-body-inner"),aM=parseInt(aM),aG=parseInt(aG),S=Z.offsetHeight-aI.offsetHeight,K=Z.offsetWidth-aI.offsetWidth,aK=ae.offsetHeight,aL=ae.offsetWidth,aJ=parseInt(Q.options.viewportPadding)||20,aH=(Q.player&&Q.options.handleOversize!="drag");return Q.setDimensions(aM,aG,aK,aL,S,K,aJ,aH)}var T={};T.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';T.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};T.init=function(){Q.appendHTML(document.body,s(T.markup,Q.lang));T.body=ad("sb-body-inner");aa=ad("sb-container");ae=ad("sb-overlay");Z=ad("sb-wrapper");if(!x){aa.style.position="absolute"}if(!h){var aG,K,S=/url\("(.*\.png)"\)/;aF(q,function(aI,aJ){aG=ad(aJ);if(aG){K=Q.getStyle(aG,"backgroundImage").match(S);if(K){aG.style.backgroundImage="none";aG.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+K[1]+",sizingMethod=scale);"}}})}var aH;F(au,"resize",function(){if(aH){clearTimeout(aH);aH=null}if(A){aH=setTimeout(T.onWindowResize,10)}})};T.onOpen=function(K,aG){m=false;aa.style.display="block";aB();var S=ak(Q.options.initialHeight,Q.options.initialWidth);ac(S.innerHeight,S.top);ar(S.width,S.left);if(Q.options.showOverlay){ae.style.backgroundColor=Q.options.overlayColor;Q.setOpacity(ae,0);if(!Q.options.modal){F(ae,"click",Q.close)}ao=true}if(!x){aE();F(au,"scroll",aE)}ay();aa.style.visibility="visible";if(ao){N(ae,"opacity",Q.options.overlayOpacity,Q.options.fadeDuration,aG)}else{aG()}};T.onLoad=function(S,K){ah(true);while(T.body.firstChild){C(T.body.firstChild)}av(S,function(){if(!A){return}if(!S){Z.style.visibility="visible"}t(K)})};T.onReady=function(aH){if(!A){return}var S=Q.player,aG=ak(S.height,S.width);var K=function(){U(aH)};switch(Q.options.animSequence){case"hw":ac(aG.innerHeight,aG.top,true,function(){ar(aG.width,aG.left,true,K)});break;case"wh":ar(aG.width,aG.left,true,function(){ac(aG.innerHeight,aG.top,true,K)});break;default:ar(aG.width,aG.left,true);ac(aG.innerHeight,aG.top,true,K)}};T.onShow=function(K){ah(false,K);m=true};T.onClose=function(){if(!x){M(au,"scroll",aE)}M(ae,"click",Q.close);Z.style.visibility="hidden";var K=function(){aa.style.visibility="hidden";aa.style.display="none";ay(true)};if(ao){N(ae,"opacity",0,Q.options.fadeDuration,K)}else{K()}};T.onPlay=function(){r("play",false);r("pause",true)};T.onPause=function(){r("pause",false);r("play",true)};T.onWindowResize=function(){if(!m){return}aB();var K=Q.player,S=ak(K.height,K.width);ar(S.width,S.left);ac(S.innerHeight,S.top);if(K.onWindowResize){K.onWindowResize()}};Q.skin=T;au.Shadowbox=Q})(window);;
(function ($) {

// Check that shadowbox library is available
if (typeof Shadowbox === 'undefined') return;

Drupal.behaviors.shadowbox = {
  attach: function(context, settings) {
    Shadowbox.init(Drupal.settings.shadowbox);
    if (settings.shadowbox.auto_enable_all_images == 1) {
      $("a[href$='.jpg'], a[href$='.png'], a[href$='.gif'], a[href$='.jpeg'], a[href$='.bmp'], a[href$='.JPG'], a[href$='.PNG'], a[href$='.GIF'], a[href$='.JPEG'], a[href$='.BMP']").each(function() {
        if ($(this).attr('rel') == '') {
          if (settings.shadowbox.auto_gallery == 1) {
            $(this).attr('rel', 'shadowbox[gallery]');
          }
          else {
            $(this).attr('rel', 'shadowbox');
          }
        }
      });
    }
    Shadowbox.clearCache();
    Shadowbox.setup();
  }
};

})(jQuery);
;
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20130101
 */
(function(i,g){function R(R,fa){function S(b){return c.preferFlash&&A&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function m(b){return function(c){var d=this._s;return!d||!d._a?null:b.call(this,c)}}this.setupOptions={url:R||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID=
"sm2-container";this.id=fa||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20130101";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};
this.flash={};this.ignoreFlash=this.html5Only=!1;var Ga,c=this,Ha=null,h=null,T,q=navigator.userAgent,ga=i.location.href.toString(),l=document,ha,Ia,ia,k,r=[],J=!1,K=!1,j=!1,s=!1,ja=!1,L,t,ka,U,la,B,C,D,Ja,ma,V,na,W,oa,E,pa,M,qa,X,F,Ka,ra,La,sa,Ma,N=null,ta=null,v,ua,G,Y,Z,H,p,O=!1,va=!1,Na,Oa,Pa,$=0,P=null,aa,Qa=[],u=null,Ra,ba,Q,y,wa,xa,Sa,n,db=Array.prototype.slice,w=!1,ya,A,za,Ta,x,ca=q.match(/(ipad|iphone|ipod)/i),Ua=q.match(/android/i),z=q.match(/msie/i),eb=q.match(/webkit/i),Aa=q.match(/safari/i)&&
!q.match(/chrome/i),Ba=q.match(/opera/i),Ca=q.match(/(mobile|pre\/|xoom)/i)||ca||Ua,Va=!ga.match(/usehtml5audio/i)&&!ga.match(/sm2\-ignorebadua/i)&&Aa&&!q.match(/silk/i)&&q.match(/OS X 10_6_([3-7])/i),Da=l.hasFocus!==g?l.hasFocus():null,da=Aa&&(l.hasFocus===g||!l.hasFocus()),Wa=!da,Xa=/(mp3|mp4|mpa|m4a|m4b)/i,Ea=l.location?l.location.protocol.match(/http/i):null,Ya=!Ea?"http://":"",Za=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,$a="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),
fb=RegExp("\\.("+$a.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Ea;var Fa;try{Fa=Audio!==g&&(Ba&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(hb){Fa=!1}this.hasHTML5=Fa;this.setup=function(b){var e=!c.url;b!==g&&(j&&u&&c.ok()&&(b.flashVersion!==g||b.url!==g||b.html5Test!==g))&&H(v("setupLate"));ka(b);e&&(M&&b.url!==g)&&c.beginDelayedInit();!M&&(b.url!==g&&"complete"===l.readyState)&&setTimeout(E,1);return c};
this.supported=this.ok=function(){return u?j&&!s:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return T(b)||l[b]||i[b]};this.createSound=function(b,e){function d(){a=Y(a);c.sounds[a.id]=new Ga(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!j||!c.ok())return H(void 0),!1;e!==g&&(b={id:b,url:e});a=t(b);a.url=aa(a.url);if(p(a.id,!0))return c.sounds[a.id];ba(a)?(f=d(),f._setup_html5(a)):(8<k&&null===a.isMovieStar&&(a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match(Za)||a.url.match(fb)))),
a=Z(a,void 0),f=d(),8===k?h._createSound(a.id,a.loops||1,a.usePolicyFile):(h._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f))),!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a));!a.serverURL&&a.autoPlay&&f.play();return f};this.destroySound=function(b,e){if(!p(b))return!1;var d=c.sounds[b],a;
d._iO={};d.stop();d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return!p(b)?!1:c.sounds[b].load(e)};this.unload=function(b){return!p(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,e,d,a){return!p(b)?!1:c.sounds[b].onposition(e,d,a)};this.clearOnPosition=function(b,e,d){return!p(b)?!1:c.sounds[b].clearOnPosition(e,d)};this.start=this.play=function(b,e){var d=
!1;return!j||!c.ok()?(H("soundManager.play(): "+v(!j?"notReady":"notOK")),d):!p(b)?(e instanceof Object||(e={url:e}),e&&e.url&&(e.id=b,d=c.createSound(e).play()),d):c.sounds[b].play(e)};this.setPosition=function(b,e){return!p(b)?!1:c.sounds[b].setPosition(e)};this.stop=function(b){return!p(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!p(b)?!1:c.sounds[b].pause()};this.pauseAll=function(){var b;
for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!p(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!p(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,e){return!p(b)?!1:c.sounds[b].setPan(e)};this.setVolume=function(b,e){return!p(b)?!1:c.sounds[b].setVolume(e)};this.mute=function(b){var e=0;b instanceof String&&(b=null);if(b)return!p(b)?
!1:c.sounds[b].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!p(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return!p(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=0;h&&8!==k&&(b=parseInt(h._getMemoryUse(),
10));return b};this.disable=function(b){var e;b===g&&(b=!1);if(s)return!1;s=!0;for(e=c.soundIDs.length-1;0<=e;e--)La(c.sounds[c.soundIDs[e]]);L(b);n.remove(i,"load",C);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&(e=Q({type:b}));!e&&u&&(e=b&&c.ok()?!!(8<k&&b.match(Za)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=Q({url:b}));!e&&u&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?
!0:c.canPlayURL(b.href)};this.getSoundById=function(b){if(!b)throw Error("soundManager.getSoundById(): sID is null/_undefined");return c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=i),la("onready",b,c),B();else throw v("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=i),la("ontimeout",b,c),B({type:"ontimeout"});else throw v("needFunction","ontimeout");return!0};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};
this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(h)try{z&&(ta=h.innerHTML),N=h.parentNode.removeChild(h)}catch(g){}ta=N=u=h=null;c.enabled=M=j=O=va=J=K=s=w=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};if(b)r=[];else for(d in r)if(r.hasOwnProperty(d)){a=0;for(f=r[d].length;a<f;a++)r[d][a].fired=!1}c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;i.setTimeout(function(){oa();e||c.beginDelayedInit()},20);return c};this.reset=
function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return h&&"PercentLoaded"in h?h.PercentLoaded():null};this.beginDelayedInit=function(){ja=!0;E();setTimeout(function(){if(va)return!1;X();W();return va=!0},20);D()};this.destruct=function(){c.disable(!0)};Ga=function(b){var e,d,a=this,f,ab,i,I,l,m,q=!1,j=[],n=0,s,u,r=null;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=t(b);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=
!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(b){var c=null;b!==g?a._iO=t(b,a.options):(b=a.options,a._iO=b,r&&r!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=aa(a._iO.url);b=a.instanceOptions=a._iO;if(b.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&b.onload&&b.onload.apply(a,[!!a.duration]),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ba(b))c=a._setup_html5(b),c._called_load||(a._html5_canplay=!1,a.url!==
b.url&&(a._a.src=b.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0,b.autoPlay&&a.play());else try{a.isHTML5=!1,a._iO=Z(Y(b)),b=a._iO,8===k?h._load(a.id,b.url,b.stream,b.autoPlay,b.usePolicyFile):h._load(a.id,b.url,!!b.stream,!!b.autoPlay,b.loops||1,!!b.autoLoad,b.usePolicyFile)}catch(e){F({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}a.url=b.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(I(),a._a&&(a._a.pause(),wa(a._a,"about:blank"),r="about:blank")):
8===k?h._unload(a.id,"about:blank"):h._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(I(),a._a&&(a._a.pause(),wa(a._a),w||i(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,h._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,c){var e,d;d=!0;d=null;c=c===g?!0:c;b||(b={});a.url&&(a._iO.url=a.url);a._iO=t(a._iO,a.options);a._iO=t(b,a._iO);a._iO.url=aa(a._iO.url);a.instanceOptions=a._iO;if(a._iO.serverURL&&!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),
a;ba(a._iO)&&(a._setup_html5(a._iO),l());1===a.playState&&!a.paused&&((e=a._iO.multiShot)||(d=a));if(null!==d)return d;b.url&&b.url!==a.url&&a.load(a._iO);a.loaded||(0===a.readyState?(a.isHTML5||(a._iO.autoPlay=!0),a.load(a._iO),a.instanceOptions=a._iO):2===a.readyState&&(d=a));if(null!==d)return d;!a.isHTML5&&(9===k&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();else{a._iO=t(b,a._iO);if(null!==a._iO.from&&null!==a._iO.to&&
0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){e=function(){a._iO=t(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({oncanplay:e}),d=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:e}),d=!1;if(null!==d)return d;a._iO=u()}(!a.instanceCount||a._iO.multiShotEvents||!a.isHTML5&&8<k&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&m(a);a.playState=1;a.paused=!1;a.position=a._iO.position!==g&&!isNaN(a._iO.position)?a._iO.position:
0;a.isHTML5||(a._iO=Z(Y(a._iO)));a._iO.onplay&&c&&(a._iO.onplay.apply(a),q=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(l(),d=a._setup_html5(),a.setPosition(a._iO.position),d.play()):(d=h._start(a.id,a._iO.loops||1,9===k?a._iO.position:a._iO.position/1E3,a._iO.multiShot),9===k&&!d&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),s(),c.to&&
a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),I()):(h._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(h._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(b){b===g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||
a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else b=9===k?a.position:b,a.readyState&&2!==a.readyState&&h._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(b){if(a.paused||0===a.playState&&1!==a.readyState)return a;a.paused=!0;
a.isHTML5?(a._setup_html5().pause(),I()):(b||b===g)&&h._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),l()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),h._pause(a.id,b.multiShot));!q&&b.onplay?(b.onplay.apply(a),q=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===a.playState)return a.play({position:9===k&&!a.isHTML5?
a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||h._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===g&&(b=100);e===g&&(e=!1);a.isHTML5?a._a&&(a._a.volume=Math.max(0,Math.min(1,b/100))):h._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=!0;a.isHTML5?a._a&&(a._a.muted=!0):h._setVolume(a.id,
0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):h._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){j.push({position:parseInt(b,10),method:c,scope:e!==g?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c,a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<j.length;c++)if(a===j[c].position&&(!b||b===j[c].method))j[c].fired&&
n--,j.splice(c,1)};this._processOnPosition=function(){var b,c;b=j.length;if(!b||!a.playState||n>=b)return!1;for(b-=1;0<=b;b--)c=j[b],!c.fired&&a.position>=c.position&&(c.fired=!0,n++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=j.length;if(!b)return!1;for(b-=1;0<=b;b--)c=j[b],c.fired&&a<=c.position&&(c.fired=!1,n--);return!0};u=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,f);a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,
f)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,d());return b};m=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};s=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};l=function(){a.isHTML5&&Na(a)};I=function(){a.isHTML5&&Oa(a)};f=function(b){b||(j=[],n=0);q=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?
a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&!a.paused))c=a._get_html5_duration(),c!==e&&(e=c,
a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,g,g,g,g);return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){var b=t(a._iO,b),c=decodeURI,e=w?Ha:a._a,d=c(b.url),g;w?d===ya&&(g=!0):d===r&&(g=!0);if(e){if(e._s)if(w)e._s&&(e._s.playState&&
!g)&&e._s.stop();else if(!w&&d===c(r))return a._apply_loop(e,b.loops),e;g||(f(!1),e.src=b.url,ya=r=a.url=b.url,e._called_load=!1)}else a._a=b.autoLoad||b.autoPlay?new Audio(b.url):Ba&&10>opera.version()?new Audio(null):new Audio,e=a._a,e._called_load=!1,w&&(Ha=e);a.isHTML5=!0;a._a=e;e._s=a;ab();a._apply_loop(e,b.loops);b.autoLoad||b.autoPlay?a.load():(e.autobuffer=!1,e.preload="auto");return e};ab=function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in x)x.hasOwnProperty(b)&&
a._a&&a._a.addEventListener(b,x[b],!1);return!0};i=function(){var b;a._a._added_events=!1;for(b in x)x.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,x[b],!1)};this._onload=function(b){b=!!b||!a.isHTML5&&8===k&&a.duration;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};
this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(a,b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(s(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},I(),a.isHTML5&&(a.position=0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&b.apply(a))};this._whileloading=
function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var h=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();
!a.isHTML5&&8<k&&(h.usePeakData&&(c!==g&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),h.useWaveformData&&(e!==g&&e)&&(a.waveformData={left:e.split(","),right:d.split(",")}),h.useEQData&&(f!==g&&f&&f.leftEQ)&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=f.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===k&&!a.position&&a.isBuffering)&&a._onbufferchange(0),h.whileplaying&&h.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=
b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onid3=function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=t(a.id3,e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,p(a.id)&&(a.getAutoPlay()?a.play(g,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,
[b])};this._ondataerror=function(){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};qa=function(){return l.body||l._docElement||l.getElementsByTagName("div")[0]};T=function(b){return l.getElementById(b)};t=function(b,e){var d=b||{},a,f;a=e===g?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&d[f]===g&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:t(d[f],a[f]));return d};U={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};ka=function(b,e){var d,a=!0,f=e!==
g,h=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&U[e]!==g?c[e][d]=b[d]:h[d]!==g?(c.setupOptions[d]=b[d],c[d]=b[d]):U[d]===g?(H(v(c[d]===g?"setupUndef":"setupError",d),2),a=!1):c[d]instanceof Function?c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(U[d]===g)H(v(c[d]===g?"setupUndef":"setupError",d),2),a=!1;else return ka(b[d],d);return a};var bb=function(b){var b=db.call(b),c=b.length;ea?(b[1]=
"on"+b[1],3<c&&b.pop()):3===c&&b.push(!1);return b},cb=function(b,c){var d=b.shift(),a=[gb[c]];if(ea)d[a](b[0],b[1]);else d[a].apply(d,b)},ea=i.attachEvent,gb={add:ea?"attachEvent":"addEventListener",remove:ea?"detachEvent":"removeEventListener"};n={add:function(){cb(bb(arguments),"add")},remove:function(){cb(bb(arguments),"remove")}};x={abort:m(function(){}),canplay:m(function(){var b=this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==g&&!isNaN(b._iO.position)?
b._iO.position/1E3:null;if(b.position&&this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:m(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),ended:m(function(){this._s._onfinish()}),error:m(function(){this._s._onload(!1)}),loadeddata:m(function(){var b=this._s;!b._loaded&&!Aa&&(b.duration=b._get_html5_duration())}),loadedmetadata:m(function(){}),loadstart:m(function(){this._s._onbufferchange(1)}),
play:m(function(){this._s._onbufferchange(0)}),playing:m(function(){this._s._onbufferchange(0)}),progress:m(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var g=b.total||1;c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=f/(1E3*b.target.duration)}isNaN(d)||(c._onbufferchange(0),c._whileloading(d,g,c._get_html5_duration()),d&&(g&&d===g)&&x.canplaythrough.call(this,b))}),ratechange:m(function(){}),
suspend:m(function(b){var c=this._s;x.progress.call(this,b);c._onsuspend()}),stalled:m(function(){}),timeupdate:m(function(){this._s._onTimer()}),waiting:m(function(){this._s._onbufferchange(1)})};ba=function(b){return b.serverURL||b.type&&S(b.type)?!1:b.type?Q({type:b.type}):Q({url:b.url})||c.html5Only};wa=function(b,c){b&&(b.src=c,b._called_load=!1);w&&(ya=null)};Q=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=b.url||null,b=b.type||null,d=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&
!S(b);if(!y){y=[];for(a in d)d.hasOwnProperty(a)&&(y.push(a),d[a].related&&(y=y.concat(d[a].related)));y=RegExp("\\.("+y.join("|")+")(\\?.*)?$","i")}a=e?e.toLowerCase().match(y):null;!a||!a.length?b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6)):a=a[1];a&&c.html5[a]!==g?e=c.html5[a]&&!S(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!S(b));return e};Sa=function(){function b(a){var b,d,f=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof
Array){b=0;for(d=a.length;b<d;b++)if(c.html5[a[b]]||e.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match(Xa);b=f}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=Audio!==g?Ba&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},h;h=c.audioFormats;for(d in h)if(h.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(h[d].type),f[a]=f[d],d.match(Xa)?(c.flash[d]=!0,c.flash[a]=
!0):(c.flash[d]=!1,c.flash[a]=!1),h[d]&&h[d].related))for(a=h[d].related.length-1;0<=a;a--)f["audio/"+h[d].related[a]]=f[d],c.html5[h[d].related[a]]=f[d],c.flash[h[d].related[a]]=f[d];f.canPlayType=e?b:null;c.html5=t(c.html5,f);return!0};na={};v=function(){};Y=function(b){8===k&&(1<b.loops&&b.stream)&&(b.stream=!1);return b};Z=function(b){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};H=function(){};ha=function(){return!1};La=function(b){for(var c in b)b.hasOwnProperty(c)&&
"function"===typeof b[c]&&(b[c]=ha)};sa=function(b){b===g&&(b=!1);(s||b)&&c.disable(b)};Ma=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts="+(new Date).getTime());return b};ma=function(){k=parseInt(c.flashVersion,10);8!==k&&9!==k&&(c.flashVersion=k=8);var b=c.debugMode||c.debugFlash?
"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>k)&&(c.flashVersion=k=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===k?" (AS3/Flash 9)":" (AS2/Flash 8)");8<k?(c.defaultOptions=t(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=t(c.defaultOptions,c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+$a.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==k?
"flash9":"flash8"];c.movieURL=(8===k?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<k};Ka=function(b,c){if(!h)return!1;h._setPolling(b,c)};ra=function(){c.debugURLParam.test(ga)&&(c.debugMode=!0)};p=this.getSoundById;G=function(){var b=[];c.debugMode&&b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};ua=function(){v("fbHandler");var b=c.getMoviePercent(),
e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[G(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(u&&(c.oMC.className=G()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,B({type:"ontimeout",ignoreInit:!0,error:e}),F(e))};la=function(b,c,d){r[b]===g&&(r[b]=[]);r[b].push({method:c,scope:d||null,fired:!1})};B=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!j&&b&&!b.ignoreInit||"ontimeout"===b.type&&
(c.ok()||s&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!s},d=b&&b.type?r[b.type]||[]:[],a=[],f,e=[e],g=u&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length){b=0;for(f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),g||(a[b].fired=!0)}return!0};C=function(){i.setTimeout(function(){c.useFlashBlock&&ua();B();"function"===typeof c.onload&&c.onload.apply(i);c.waitForWindowLoad&&n.add(i,"load",
C)},1)};za=function(){if(A!==g)return A;var b=!1,c=navigator,d=c.plugins,a,f=i.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(f!==g&&!q.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(h){}b=!!a}return A=b};Ra=function(){var b,e,d=c.audioFormats;if(ca&&q.match(/os (1|2|3_0|3_1)/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&
(c.oMC.style.display="none");else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(e in d)if(d.hasOwnProperty(e)&&(d[e].required&&!c.html5.canPlayType(d[e].type)||c.preferFlash&&(c.flash[e]||c.flash[d[e].type])))b=!0;c.ignoreFlash&&(b=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};aa=function(b){var e,d,a=0;if(b instanceof Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=
e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Na=function(b){b._hasTimer||(b._hasTimer=!0,!Ca&&c.html5PollingInterval&&(null===P&&0===$&&(P=i.setInterval(Pa,c.html5PollingInterval)),$++))};Oa=function(b){b._hasTimer&&(b._hasTimer=!1,!Ca&&c.html5PollingInterval&&$--)};Pa=function(){var b;if(null!==P&&!$)return i.clearInterval(P),P=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};F=function(b){b=b!==
g?b:{};"function"===typeof c.onerror&&c.onerror.apply(i,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};Ta=function(){if(!Va||!za())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,b[d]&&b[d].related)for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;c.swfLoaded=!0;da=!1;Va&&Ta();setTimeout(ia,z?100:1)};X=function(b,
e){function d(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(J&&K)return!1;if(c.html5Only)return ma(),c.oMC=T(c.movieID),ia(),K=J=!0,!1;var a=e||c.url,f=c.altURL||a,h=qa(),i=G(),k=null,k=l.getElementsByTagName("html")[0],j,n,m,k=k&&k.dir&&k.dir.match(/rtl/i),b=b===g?c.id:b;ma();c.url=Ma(Ea?a:f);e=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(q.match(/msie 8/i)||!z&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))Qa.push(na.spcWmode),
c.wmode=null;h={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:Ya+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars="debug=1");c.wmode||delete h.wmode;if(z)a=l.createElement("div"),n=['<object id="'+b+'" data="'+e+'" type="'+h.type+'" title="'+h.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+
Ya+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",h.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",h.FlashVars):"","</object>"].join("");else for(j in a=l.createElement("embed"),h)h.hasOwnProperty(j)&&a.setAttribute(j,h[j]);ra();i=G();if(h=qa())if(c.oMC=T(c.movieID)||l.createElement("div"),c.oMC.id)m=c.oMC.className,c.oMC.className=
(m?m+" ":"movieContainer")+(i?" "+i:""),c.oMC.appendChild(a),z&&(j=c.oMC.appendChild(l.createElement("div")),j.className="sm2-object-box",j.innerHTML=n),K=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+i;j=i=null;c.useFlashBlock||(c.useHighPerformance?i={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(i={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},k&&(i.left=Math.abs(parseInt(i.left,10))+"px")));eb&&(c.oMC.style.zIndex=
1E4);if(!c.debugFlash)for(m in i)i.hasOwnProperty(m)&&(c.oMC.style[m]=i[m]);try{z||c.oMC.appendChild(a),h.appendChild(c.oMC),z&&(j=c.oMC.appendChild(l.createElement("div")),j.className="sm2-object-box",j.innerHTML=n),K=!0}catch(p){throw Error(v("domError")+" \n"+p.toString());}}return J=!0};W=function(){if(c.html5Only)return X(),!1;if(h||!c.url)return!1;h=c.getMovie(c.id);h||(N?(z?c.oMC.innerHTML=ta:c.oMC.appendChild(N),N=null,J=!0):X(c.id,c.url),h=c.getMovie(c.id));"function"===typeof c.oninitmovie&&
setTimeout(c.oninitmovie,1);return!0};D=function(){setTimeout(Ja,1E3)};Ja=function(){var b,e=!1;if(!c.url||O)return!1;O=!0;n.remove(i,"load",D);if(da&&!Da)return!1;j||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();if(e)return O=!1,i.setTimeout(D,1),!1;!j&&Wa&&(null===b?c.useFlashBlock||0===c.flashLoadTimeout?c.useFlashBlock&&ua():B({type:"ontimeout",ignoreInit:!0}):0!==c.flashLoadTimeout&&sa(!0))},c.flashLoadTimeout)};V=function(){if(Da||!da)return n.remove(i,
"focus",V),!0;Da=Wa=!0;O=!1;D();n.remove(i,"focus",V);return!0};L=function(b){if(j)return!1;if(c.html5Only)return j=!0,C(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())j=!0,s&&(d={type:!A&&u?"NO_FLASH":"INIT_TIMEOUT"});if(s||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=G()+" "+(null===c.getMoviePercent()?"swf_timedout":"swf_error")),B({type:"ontimeout",error:d,ignoreInit:!0}),F(d),e=!1;s||(c.waitForWindowLoad&&!ja?n.add(i,"load",C):C());return e};Ia=function(){var b,e=
c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===g?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};ia=function(){if(j)return!1;if(c.html5Only)return j||(n.remove(i,"load",c.beginDelayedInit),c.enabled=!0,L()),!0;W();try{h._externalInterfaceTest(!1),Ka(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||h._disableDebug(),c.enabled=!0,c.html5Only||n.add(i,"unload",ha)}catch(b){return F({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),sa(!0),L(),!1}L();n.remove(i,"load",c.beginDelayedInit);
return!0};E=function(){if(M)return!1;M=!0;Ia();ra();!A&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Sa();c.html5.usingFlash=Ra();u=c.html5.usingFlash;!A&&u&&(Qa.push(na.needFlash),c.setup({flashLoadTimeout:1}));l.removeEventListener&&l.removeEventListener("DOMContentLoaded",E,!1);W();return!0};xa=function(){"complete"===l.readyState&&(E(),l.detachEvent("onreadystatechange",xa));return!0};pa=function(){ja=!0;n.remove(i,"load",pa)};oa=function(){if(Ca&&(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=
!1,ca||Ua&&!q.match(/android\s2\.3/i)))ca&&(c.ignoreFlash=!0),w=!0};oa();za();n.add(i,"focus",V);n.add(i,"load",D);n.add(i,"load",pa);l.addEventListener?l.addEventListener("DOMContentLoaded",E,!1):l.attachEvent?l.attachEvent("onreadystatechange",xa):F({type:"NO_DOM2_EVENTS",fatal:!0})}var fa=null;if(void 0===i.SM2_DEFER||!SM2_DEFER)fa=new R;i.SoundManager=R;i.soundManager=fa})(window);;
// Excanvas (Explorer Canvas) R43
// http://excanvas.sourceforge.net/
// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

if(!document.createElement("canvas").getContext){(function(){var u=Math;var v=u.round;var r=u.sin;var C=u.cos;var l=u.abs;var B=u.sqrt;var a=10;var n=a/2;function g(){return this.context_||(this.context_=new p(this))}var t=Array.prototype.slice;function D(j,m,E){var i=t.call(arguments,2);return function(){return j.apply(m,i.concat(t.call(arguments)))}}var h={init:function(i){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var j=i||document;j.createElement("canvas");j.attachEvent("onreadystatechange",D(this.init_,this,j))}},init_:function(F){if(!F.namespaces.g_vml_){F.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")}if(!F.namespaces.g_o_){F.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")}if(!F.styleSheets.ex_canvas_){var E=F.createStyleSheet();E.owningElement.id="ex_canvas_";E.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}var m=F.getElementsByTagName("canvas");for(var j=0;j<m.length;j++){this.initElement(m[j])}},initElement:function(j){if(!j.getContext){j.getContext=g;j.innerHTML="";j.attachEvent("onpropertychange",A);j.attachEvent("onresize",b);var i=j.attributes;if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"}else{j.width=j.clientWidth}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"}else{j.height=j.clientHeight}}return j}};function A(j){var i=j.srcElement;switch(j.propertyName){case"width":i.style.width=i.attributes.width.nodeValue+"px";i.getContext().clearRect();break;case"height":i.style.height=i.attributes.height.nodeValue+"px";i.getContext().clearRect();break}}function b(j){var i=j.srcElement;if(i.firstChild){i.firstChild.style.width=i.clientWidth+"px";i.firstChild.style.height=i.clientHeight+"px"}}h.init();var e=[];for(var y=0;y<16;y++){for(var x=0;x<16;x++){e[y*16+x]=y.toString(16)+x.toString(16)}}function q(){return[[1,0,0],[0,1,0],[0,0,1]]}function d(E,m){var j=q();for(var i=0;i<3;i++){for(var H=0;H<3;H++){var F=0;for(var G=0;G<3;G++){F+=E[i][G]*m[G][H]}j[i][H]=F}}return j}function w(j,i){i.fillStyle=j.fillStyle;i.lineCap=j.lineCap;i.lineJoin=j.lineJoin;i.lineWidth=j.lineWidth;i.miterLimit=j.miterLimit;i.shadowBlur=j.shadowBlur;i.shadowColor=j.shadowColor;i.shadowOffsetX=j.shadowOffsetX;i.shadowOffsetY=j.shadowOffsetY;i.strokeStyle=j.strokeStyle;i.globalAlpha=j.globalAlpha;i.arcScaleX_=j.arcScaleX_;i.arcScaleY_=j.arcScaleY_;i.lineScale_=j.lineScale_}function c(m){var G,F=1;m=String(m);if(m.substring(0,3)=="rgb"){var I=m.indexOf("(",3);var j=m.indexOf(")",I+1);var H=m.substring(I+1,j).split(",");G="#";for(var E=0;E<3;E++){G+=e[Number(H[E])]}if(H.length==4&&m.substr(3,1)=="a"){F=H[3]}}else{G=m}return{color:G,alpha:F}}function s(i){switch(i){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function p(j){this.m_=q();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=a*1;this.globalAlpha=1;this.canvas=j;var i=j.ownerDocument.createElement("div");i.style.width=j.clientWidth+"px";i.style.height=j.clientHeight+"px";i.style.overflow="hidden";i.style.position="absolute";j.appendChild(i);this.element_=i;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1}var k=p.prototype;k.clearRect=function(){this.element_.innerHTML=""};k.beginPath=function(){this.currentPath_=[]};k.moveTo=function(j,i){var m=this.getCoords_(j,i);this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};k.lineTo=function(j,i){var m=this.getCoords_(j,i);this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});this.currentX_=m.x;this.currentY_=m.y};k.bezierCurveTo=function(m,j,J,I,H,F){var i=this.getCoords_(H,F);var G=this.getCoords_(m,j);var E=this.getCoords_(J,I);o(this,G,E,i)};function o(i,E,m,j){i.currentPath_.push({type:"bezierCurveTo",cp1x:E.x,cp1y:E.y,cp2x:m.x,cp2y:m.y,x:j.x,y:j.y});i.currentX_=j.x;i.currentY_=j.y}k.quadraticCurveTo=function(H,m,j,i){var G=this.getCoords_(H,m);var F=this.getCoords_(j,i);var I={x:this.currentX_+2/3*(G.x-this.currentX_),y:this.currentY_+2/3*(G.y-this.currentY_)};var E={x:I.x+(F.x-this.currentX_)/3,y:I.y+(F.y-this.currentY_)/3};o(this,I,E,F)};k.arc=function(K,I,J,F,j,m){J*=a;var O=m?"at":"wa";var L=K+C(F)*J-n;var N=I+r(F)*J-n;var i=K+C(j)*J-n;var M=I+r(j)*J-n;if(L==i&&!m){L+=0.125}var E=this.getCoords_(K,I);var H=this.getCoords_(L,N);var G=this.getCoords_(i,M);this.currentPath_.push({type:O,x:E.x,y:E.y,radius:J,xStart:H.x,yStart:H.y,xEnd:G.x,yEnd:G.y})};k.rect=function(m,j,i,E){this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+E);this.lineTo(m,j+E);this.closePath()};k.strokeRect=function(m,j,i,E){var F=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+E);this.lineTo(m,j+E);this.closePath();this.stroke();this.currentPath_=F};k.fillRect=function(m,j,i,E){var F=this.currentPath_;this.beginPath();this.moveTo(m,j);this.lineTo(m+i,j);this.lineTo(m+i,j+E);this.lineTo(m,j+E);this.closePath();this.fill();this.currentPath_=F};k.createLinearGradient=function(j,E,i,m){var F=new z("gradient");F.x0_=j;F.y0_=E;F.x1_=i;F.y1_=m;return F};k.createRadialGradient=function(E,G,m,j,F,i){var H=new z("gradientradial");H.x0_=E;H.y0_=G;H.r0_=m;H.x1_=j;H.y1_=F;H.r1_=i;return H};k.drawImage=function(R,m){var K,I,M,Z,P,N,T,ab;var L=R.runtimeStyle.width;var Q=R.runtimeStyle.height;R.runtimeStyle.width="auto";R.runtimeStyle.height="auto";var J=R.width;var X=R.height;R.runtimeStyle.width=L;R.runtimeStyle.height=Q;if(arguments.length==3){K=arguments[1];I=arguments[2];P=N=0;T=M=J;ab=Z=X}else{if(arguments.length==5){K=arguments[1];I=arguments[2];M=arguments[3];Z=arguments[4];P=N=0;T=J;ab=X}else{if(arguments.length==9){P=arguments[1];N=arguments[2];T=arguments[3];ab=arguments[4];K=arguments[5];I=arguments[6];M=arguments[7];Z=arguments[8]}else{throw Error("Invalid number of arguments")}}}var aa=this.getCoords_(K,I);var E=T/2;var j=ab/2;var Y=[];var i=10;var G=10;Y.push(" <g_vml_:group",' coordsize="',a*i,",",a*G,'"',' coordorigin="0,0"',' style="width:',i,"px;height:",G,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var F=[];F.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",v(aa.x/a),",","Dy=",v(aa.y/a),"");var V=aa;var U=this.getCoords_(K+M,I);var S=this.getCoords_(K,I+Z);var O=this.getCoords_(K+M,I+Z);V.x=u.max(V.x,U.x,S.x,O.x);V.y=u.max(V.y,U.y,S.y,O.y);Y.push("padding:0 ",v(V.x/a),"px ",v(V.y/a),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",F.join(""),", sizingmethod='clip');")}else{Y.push("top:",v(aa.y/a),"px;left:",v(aa.x/a),"px;")}Y.push(' ">','<g_vml_:image src="',R.src,'"',' style="width:',a*M,"px;"," height:",a*Z,'px;"',' cropleft="',P/J,'"',' croptop="',N/X,'"',' cropright="',(J-P-T)/J,'"',' cropbottom="',(X-N-ab)/X,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",Y.join(""))};k.stroke=function(ae){var J=[];var K=false;var ap=c(ae?this.fillStyle:this.strokeStyle);var aa=ap.color;var ak=ap.alpha*this.globalAlpha;var F=10;var M=10;J.push("<g_vml_:shape",' filled="',!!ae,'"',' style="position:absolute;width:',F,"px;height:",M,'px;"',' coordorigin="0 0" coordsize="',a*F," ",a*M,'"',' stroked="',!ae,'"',' path="');var L=false;var ao={x:null,y:null};var V={x:null,y:null};for(var aj=0;aj<this.currentPath_.length;aj++){var ai=this.currentPath_[aj];var an;switch(ai.type){case"moveTo":an=ai;J.push(" m ",v(ai.x),",",v(ai.y));break;case"lineTo":J.push(" l ",v(ai.x),",",v(ai.y));break;case"close":J.push(" x ");ai=null;break;case"bezierCurveTo":J.push(" c ",v(ai.cp1x),",",v(ai.cp1y),",",v(ai.cp2x),",",v(ai.cp2y),",",v(ai.x),",",v(ai.y));break;case"at":case"wa":J.push(" ",ai.type," ",v(ai.x-this.arcScaleX_*ai.radius),",",v(ai.y-this.arcScaleY_*ai.radius)," ",v(ai.x+this.arcScaleX_*ai.radius),",",v(ai.y+this.arcScaleY_*ai.radius)," ",v(ai.xStart),",",v(ai.yStart)," ",v(ai.xEnd),",",v(ai.yEnd));break}if(ai){if(ao.x==null||ai.x<ao.x){ao.x=ai.x}if(V.x==null||ai.x>V.x){V.x=ai.x}if(ao.y==null||ai.y<ao.y){ao.y=ai.y}if(V.y==null||ai.y>V.y){V.y=ai.y}}}J.push(' ">');if(!ae){var U=this.lineScale_*this.lineWidth;if(U<1){ak*=U}J.push("<g_vml_:stroke",' opacity="',ak,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',s(this.lineCap),'"',' weight="',U,'px"',' color="',aa,'" />')}else{if(typeof this.fillStyle=="object"){var N=this.fillStyle;var S=0;var ah={x:0,y:0};var ab=0;var Q=1;if(N.type_=="gradient"){var P=N.x0_/this.arcScaleX_;var m=N.y0_/this.arcScaleY_;var O=N.x1_/this.arcScaleX_;var aq=N.y1_/this.arcScaleY_;var am=this.getCoords_(P,m);var al=this.getCoords_(O,aq);var I=al.x-am.x;var G=al.y-am.y;S=Math.atan2(I,G)*180/Math.PI;if(S<0){S+=360}if(S<0.000001){S=0}}else{var am=this.getCoords_(N.x0_,N.y0_);var j=V.x-ao.x;var E=V.y-ao.y;ah={x:(am.x-ao.x)/j,y:(am.y-ao.y)/E};j/=this.arcScaleX_*a;E/=this.arcScaleY_*a;var ag=u.max(j,E);ab=2*N.r0_/ag;Q=2*N.r1_/ag-ab}var Z=N.colors_;Z.sort(function(H,i){return H.offset-i.offset});var T=Z.length;var Y=Z[0].color;var X=Z[T-1].color;var ad=Z[0].alpha*this.globalAlpha;var ac=Z[T-1].alpha*this.globalAlpha;var af=[];for(var aj=0;aj<T;aj++){var R=Z[aj];af.push(R.offset*Q+ab+" "+R.color)}J.push('<g_vml_:fill type="',N.type_,'"',' method="none" focus="100%"',' color="',Y,'"',' color2="',X,'"',' colors="',af.join(","),'"',' opacity="',ac,'"',' g_o_:opacity2="',ad,'"',' angle="',S,'"',' focusposition="',ah.x,",",ah.y,'" />')}else{J.push('<g_vml_:fill color="',aa,'" opacity="',ak,'" />')}}J.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",J.join(""))};k.fill=function(){this.stroke(true)};k.closePath=function(){this.currentPath_.push({type:"close"})};k.getCoords_=function(E,j){var i=this.m_;return{x:a*(E*i[0][0]+j*i[1][0]+i[2][0])-n,y:a*(E*i[0][1]+j*i[1][1]+i[2][1])-n}};k.save=function(){var i={};w(this,i);this.aStack_.push(i);this.mStack_.push(this.m_);this.m_=d(q(),this.m_)};k.restore=function(){w(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};k.translate=function(m,j){var i=[[1,0,0],[0,1,0],[m,j,1]];this.m_=d(i,this.m_)};k.rotate=function(j){var E=C(j);var m=r(j);var i=[[E,m,0],[-m,E,0],[0,0,1]];this.m_=d(i,this.m_)};k.scale=function(G,F){this.arcScaleX_*=G;this.arcScaleY_*=F;var j=[[G,0,0],[0,F,0],[0,0,1]];var i=this.m_=d(j,this.m_);var E=i[0][0]*i[1][1]-i[0][1]*i[1][0];this.lineScale_=B(l(E))};k.clip=function(){};k.arcTo=function(){};k.createPattern=function(){return new f};function z(i){this.type_=i;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}z.prototype.addColorStop=function(j,i){i=c(i);this.colors_.push({offset:j,color:i.color,alpha:i.alpha})};function f(){}G_vmlCanvasManager=h;CanvasRenderingContext2D=p;CanvasGradient=z;CanvasPattern=f})()};;
﻿/** @license
	Animator.js 1.1.9
	
	This library is released under the BSD license:

	Copyright (c) 2006, Bernard Sumption. All rights reserved.
	
	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:
	
	Redistributions of source code must retain the above copyright notice, this
	list of conditions and the following disclaimer. Redistributions in binary
	form must reproduce the above copyright notice, this list of conditions and
	the following disclaimer in the documentation and/or other materials
	provided with the distribution. Neither the name BernieCode nor
	the names of its contributors may be used to endorse or promote products
	derived from this software without specific prior written permission. 
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR
	ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
	DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
	SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
	CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
	LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
	OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
	DAMAGE.

*/

// http://www.berniecode.com/writing/animator.html

// Applies a sequence of numbers between 0 and 1 to a number of subjects
// construct - see setOptions for parameters
function Animator(options) {
	this.setOptions(options);
	var _this = this;
	this.timerDelegate = function(){_this.onTimerEvent()};
	this.subjects = [];
	this.subjectScopes = [];
	this.target = 0;
	this.state = 0;
	this.lastTime = null;
};
Animator.prototype = {
	// apply defaults
	setOptions: function(options) {
		this.options = Animator.applyDefaults({
			interval: 20,  // time between animation frames
			duration: 400, // length of animation
			onComplete: function(){},
			onStep: function(){},
			transition: Animator.tx.easeInOut
		}, options);
	},
	// animate from the current state to provided value
	seekTo: function(to) {
		this.seekFromTo(this.state, to);
	},
	// animate from the current state to provided value
	seekFromTo: function(from, to) {
		this.target = Math.max(0, Math.min(1, to));
		this.state = Math.max(0, Math.min(1, from));
		this.lastTime = new Date().getTime();
		if (!this.intervalId) {
			this.intervalId = window.setInterval(this.timerDelegate, this.options.interval);
		}
	},
	// animate from the current state to provided value
	jumpTo: function(to) {
		this.target = this.state = Math.max(0, Math.min(1, to));
		this.propagate();
	},
	// seek to the opposite of the current target
	toggle: function() {
		this.seekTo(1 - this.target);
	},
	// add a function or an object with a method setState(state) that will be called with a number
	// between 0 and 1 on each frame of the animation
	addSubject: function(subject,scope) {
		this.subjects[this.subjects.length] = subject;
		this.subjectScopes[this.subjectScopes.length] = scope;
		return this;
	},
	// remove all subjects
	clearSubjects: function() {
		this.subjects = [];
		this.subjectScopes = [];
	},
	// forward the current state to the animation subjects
	propagate: function() {
		var value = this.options.transition(this.state);
		for (var i=0; i<this.subjects.length; i++) {
			if (this.subjects[i].setState) {
				this.subjects[i].setState(value);
			} else {
				this.subjects[i].apply(this.subjectScopes[i],[value]);
			}
		}
	},
	// called once per frame to update the current state
	onTimerEvent: function() {
		var now = new Date().getTime();
		var timePassed = now - this.lastTime;
		this.lastTime = now;
		var movement = (timePassed / this.options.duration) * (this.state < this.target ? 1 : -1);
		if (Math.abs(movement) >= Math.abs(this.state - this.target)) {
			this.state = this.target;
		} else {
			this.state += movement;
		}
		
		try {
			this.propagate();
		} finally {
			this.options.onStep.call(this);
			if (this.target == this.state) {
				window.clearInterval(this.intervalId);
				this.intervalId = null;
				this.options.onComplete.call(this);
			}
		}
	},
	// shortcuts
	play: function() {this.seekFromTo(0, 1)},
	reverse: function() {this.seekFromTo(1, 0)},
	// return a string describing this Animator, for debugging
	inspect: function() {
		var str = "#<Animator:\n";
		for (var i=0; i<this.subjects.length; i++) {
			str += this.subjects[i].inspect();
		}
		str += ">";
		return str;
	}
}
// merge the properties of two objects
Animator.applyDefaults = function(defaults, prefs) {
	prefs = prefs || {};
	var prop, result = {};
	for (prop in defaults) result[prop] = prefs[prop] !== undefined ? prefs[prop] : defaults[prop];
	return result;
}
// make an array from any object
Animator.makeArray = function(o) {
	if (o == null) return [];
	if (!o.length) return [o];
	var result = [];
	for (var i=0; i<o.length; i++) result[i] = o[i];
	return result;
}
// convert a dash-delimited-property to a camelCaseProperty (c/o Prototype, thanks Sam!)
Animator.camelize = function(string) {
	var oStringList = string.split('-');
	if (oStringList.length == 1) return oStringList[0];
	
	var camelizedString = string.indexOf('-') == 0
		? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1)
		: oStringList[0];
	
	for (var i = 1, len = oStringList.length; i < len; i++) {
		var s = oStringList[i];
		camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
	}
	return camelizedString;
}
// syntactic sugar for creating CSSStyleSubjects
Animator.apply = function(el, style, options) {
	if (style instanceof Array) {
		return new Animator(options).addSubject(new CSSStyleSubject(el, style[0], style[1]));
	}
	return new Animator(options).addSubject(new CSSStyleSubject(el, style));
}
// make a transition function that gradually accelerates. pass a=1 for smooth
// gravitational acceleration, higher values for an exaggerated effect
Animator.makeEaseIn = function(a) {
	return function(state) {
		return Math.pow(state, a*2); 
	}
}
// as makeEaseIn but for deceleration
Animator.makeEaseOut = function(a) {
	return function(state) {
		return 1 - Math.pow(1 - state, a*2); 
	}
}
// make a transition function that, like an object with momentum being attracted to a point,
// goes past the target then returns
Animator.makeElastic = function(bounces) {
	return function(state) {
		state = Animator.tx.easeInOut(state);
		return ((1-Math.cos(state * Math.PI * bounces)) * (1 - state)) + state; 
	}
}
// make an Attack Decay Sustain Release envelope that starts and finishes on the same level
// 
Animator.makeADSR = function(attackEnd, decayEnd, sustainEnd, sustainLevel) {
	if (sustainLevel == null) sustainLevel = 0.5;
	return function(state) {
		if (state < attackEnd) {
			return state / attackEnd;
		}
		if (state < decayEnd) {
			return 1 - ((state - attackEnd) / (decayEnd - attackEnd) * (1 - sustainLevel));
		}
		if (state < sustainEnd) {
			return sustainLevel;
		}
		return sustainLevel * (1 - ((state - sustainEnd) / (1 - sustainEnd)));
	}
}
// make a transition function that, like a ball falling to floor, reaches the target and/
// bounces back again
Animator.makeBounce = function(bounces) {
	var fn = Animator.makeElastic(bounces);
	return function(state) {
		state = fn(state); 
		return state <= 1 ? state : 2-state;
	}
}
 
// pre-made transition functions to use with the 'transition' option
Animator.tx = {
	easeInOut: function(pos){
		return ((-Math.cos(pos*Math.PI)/2) + 0.5);
	},
	linear: function(x) {
		return x;
	},
	easeIn: Animator.makeEaseIn(1.5),
	easeOut: Animator.makeEaseOut(1.5),
	strongEaseIn: Animator.makeEaseIn(2.5),
	strongEaseOut: Animator.makeEaseOut(2.5),
	elastic: Animator.makeElastic(1),
	veryElastic: Animator.makeElastic(3),
	bouncy: Animator.makeBounce(1),
	veryBouncy: Animator.makeBounce(3)
}

// animates a pixel-based style property between two integer values
function NumericalStyleSubject(els, property, from, to, units) {
	this.els = Animator.makeArray(els);
	if (property == 'opacity' && window.ActiveXObject) {
		this.property = 'filter';
	} else {
		this.property = Animator.camelize(property);
	}
	this.from = parseFloat(from);
	this.to = parseFloat(to);
	this.units = units != null ? units : 'px';
}
NumericalStyleSubject.prototype = {
	setState: function(state) {
		var style = this.getStyle(state);
		var visibility = (this.property == 'opacity' && state == 0) ? 'hidden' : '';
		var j=0;
		for (var i=0; i<this.els.length; i++) {
			try {
				this.els[i].style[this.property] = style;
			} catch (e) {
				// ignore fontWeight - intermediate numerical values cause exeptions in firefox
				if (this.property != 'fontWeight') throw e;
			}
			if (j++ > 20) return;
		}
	},
	getStyle: function(state) {
		state = this.from + ((this.to - this.from) * state);
		if (this.property == 'filter') return "alpha(opacity=" + Math.round(state*100) + ")";
		if (this.property == 'opacity') return state;
		return Math.round(state) + this.units;
	},
	inspect: function() {
		return "\t" + this.property + "(" + this.from + this.units + " to " + this.to + this.units + ")\n";
	}
}

// animates a colour based style property between two hex values
function ColorStyleSubject(els, property, from, to) {
	this.els = Animator.makeArray(els);
	this.property = Animator.camelize(property);
	this.to = this.expandColor(to);
	this.from = this.expandColor(from);
	this.origFrom = from;
	this.origTo = to;
}

ColorStyleSubject.prototype = {
	// parse "#FFFF00" to [256, 256, 0]
	expandColor: function(color) {
		var hexColor, red, green, blue;
		hexColor = ColorStyleSubject.parseColor(color);
		if (hexColor) {
			red = parseInt(hexColor.slice(1, 3), 16);
			green = parseInt(hexColor.slice(3, 5), 16);
			blue = parseInt(hexColor.slice(5, 7), 16);
			return [red,green,blue]
		}
		if (window.DEBUG) {
			alert("Invalid colour: '" + color + "'");
		}
	},
	getValueForState: function(color, state) {
		return Math.round(this.from[color] + ((this.to[color] - this.from[color]) * state));
	},
	setState: function(state) {
		var color = '#'
				+ ColorStyleSubject.toColorPart(this.getValueForState(0, state))
				+ ColorStyleSubject.toColorPart(this.getValueForState(1, state))
				+ ColorStyleSubject.toColorPart(this.getValueForState(2, state));
		for (var i=0; i<this.els.length; i++) {
			this.els[i].style[this.property] = color;
		}
	},
	inspect: function() {
		return "\t" + this.property + "(" + this.origFrom + " to " + this.origTo + ")\n";
	}
}

// return a properly formatted 6-digit hex colour spec, or false
ColorStyleSubject.parseColor = function(string) {
	var color = '#', match;
	if(match = ColorStyleSubject.parseColor.rgbRe.exec(string)) {
		var part;
		for (var i=1; i<=3; i++) {
			part = Math.max(0, Math.min(255, parseInt(match[i])));
			color += ColorStyleSubject.toColorPart(part);
		}
		return color;
	}
	if (match = ColorStyleSubject.parseColor.hexRe.exec(string)) {
		if(match[1].length == 3) {
			for (var i=0; i<3; i++) {
				color += match[1].charAt(i) + match[1].charAt(i);
			}
			return color;
		}
		return '#' + match[1];
	}
	return false;
}
// convert a number to a 2 digit hex string
ColorStyleSubject.toColorPart = function(number) {
	if (number > 255) number = 255;
	var digits = number.toString(16);
	if (number < 16) return '0' + digits;
	return digits;
}
ColorStyleSubject.parseColor.rgbRe = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;
ColorStyleSubject.parseColor.hexRe = /^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

// Animates discrete styles, i.e. ones that do not scale but have discrete values
// that can't be interpolated
function DiscreteStyleSubject(els, property, from, to, threshold) {
	this.els = Animator.makeArray(els);
	this.property = Animator.camelize(property);
	this.from = from;
	this.to = to;
	this.threshold = threshold || 0.5;
}

DiscreteStyleSubject.prototype = {
	setState: function(state) {
		var j=0;
		for (var i=0; i<this.els.length; i++) {
			this.els[i].style[this.property] = state <= this.threshold ? this.from : this.to; 
		}
	},
	inspect: function() {
		return "\t" + this.property + "(" + this.from + " to " + this.to + " @ " + this.threshold + ")\n";
	}
}

// animates between two styles defined using CSS.
// if style1 and style2 are present, animate between them, if only style1
// is present, animate between the element's current style and style1
function CSSStyleSubject(els, style1, style2) {
	els = Animator.makeArray(els);
	this.subjects = [];
	if (els.length == 0) return;
	var prop, toStyle, fromStyle;
	if (style2) {
		fromStyle = this.parseStyle(style1, els[0]);
		toStyle = this.parseStyle(style2, els[0]);
	} else {
		toStyle = this.parseStyle(style1, els[0]);
		fromStyle = {};
		for (prop in toStyle) {
			fromStyle[prop] = CSSStyleSubject.getStyle(els[0], prop);
		}
	}
	// remove unchanging properties
	var prop;
	for (prop in fromStyle) {
		if (fromStyle[prop] == toStyle[prop]) {
			delete fromStyle[prop];
			delete toStyle[prop];
		}
	}
	// discover the type (numerical or colour) of each style
	var prop, units, match, type, from, to;
	for (prop in fromStyle) {
		var fromProp = String(fromStyle[prop]);
		var toProp = String(toStyle[prop]);
		if (toStyle[prop] == null) {
			if (window.DEBUG) alert("No to style provided for '" + prop + '"');
			continue;
		}
		
		if (from = ColorStyleSubject.parseColor(fromProp)) {
			to = ColorStyleSubject.parseColor(toProp);
			type = ColorStyleSubject;
		} else if (fromProp.match(CSSStyleSubject.numericalRe)
				&& toProp.match(CSSStyleSubject.numericalRe)) {
			from = parseFloat(fromProp);
			to = parseFloat(toProp);
			type = NumericalStyleSubject;
			match = CSSStyleSubject.numericalRe.exec(fromProp);
			var reResult = CSSStyleSubject.numericalRe.exec(toProp);
			if (match[1] != null) {
				units = match[1];
			} else if (reResult[1] != null) {
				units = reResult[1];
			} else {
				units = reResult;
			}
		} else if (fromProp.match(CSSStyleSubject.discreteRe)
				&& toProp.match(CSSStyleSubject.discreteRe)) {
			from = fromProp;
			to = toProp;
			type = DiscreteStyleSubject;
			units = 0;   // hack - how to get an animator option down to here
		} else {
			if (window.DEBUG) {
				alert("Unrecognised format for value of "
					+ prop + ": '" + fromStyle[prop] + "'");
			}
			continue;
		}
		this.subjects[this.subjects.length] = new type(els, prop, from, to, units);
	}
}

CSSStyleSubject.prototype = {
	// parses "width: 400px; color: #FFBB2E" to {width: "400px", color: "#FFBB2E"}
	parseStyle: function(style, el) {
		var rtn = {};
		// if style is a rule set
		if (style.indexOf(":") != -1) {
			var styles = style.split(";");
			for (var i=0; i<styles.length; i++) {
				var parts = CSSStyleSubject.ruleRe.exec(styles[i]);
				if (parts) {
					rtn[parts[1]] = parts[2];
				}
			}
		}
		// else assume style is a class name
		else {
			var prop, value, oldClass;
			oldClass = el.className;
			el.className = style;
			for (var i=0; i<CSSStyleSubject.cssProperties.length; i++) {
				prop = CSSStyleSubject.cssProperties[i];
				value = CSSStyleSubject.getStyle(el, prop);
				if (value != null) {
					rtn[prop] = value;
				}
			}
			el.className = oldClass;
		}
		return rtn;
		
	},
	setState: function(state) {
		for (var i=0; i<this.subjects.length; i++) {
			this.subjects[i].setState(state);
		}
	},
	inspect: function() {
		var str = "";
		for (var i=0; i<this.subjects.length; i++) {
			str += this.subjects[i].inspect();
		}
		return str;
	}
}
// get the current value of a css property, 
CSSStyleSubject.getStyle = function(el, property){
	var style;
	if(document.defaultView && document.defaultView.getComputedStyle){
		style = document.defaultView.getComputedStyle(el, "").getPropertyValue(property);
		if (style) {
			return style;
		}
	}
	property = Animator.camelize(property);
	if(el.currentStyle){
		style = el.currentStyle[property];
	}
	return style || el.style[property]
}


CSSStyleSubject.ruleRe = /^\s*([a-zA-Z\-]+)\s*:\s*(\S(.+\S)?)\s*$/;
CSSStyleSubject.numericalRe = /^-?\d+(?:\.\d+)?(%|[a-zA-Z]{2})?$/;
CSSStyleSubject.discreteRe = /^\w+$/;

// required because the style object of elements isn't enumerable in Safari
/*
CSSStyleSubject.cssProperties = ['background-color','border','border-color','border-spacing',
'border-style','border-top','border-right','border-bottom','border-left','border-top-color',
'border-right-color','border-bottom-color','border-left-color','border-top-width','border-right-width',
'border-bottom-width','border-left-width','border-width','bottom','color','font-size','font-size-adjust',
'font-stretch','font-style','height','left','letter-spacing','line-height','margin','margin-top',
'margin-right','margin-bottom','margin-left','marker-offset','max-height','max-width','min-height',
'min-width','orphans','outline','outline-color','outline-style','outline-width','overflow','padding',
'padding-top','padding-right','padding-bottom','padding-left','quotes','right','size','text-indent',
'top','width','word-spacing','z-index','opacity','outline-offset'];*/


CSSStyleSubject.cssProperties = ['azimuth','background','background-attachment','background-color','background-image','background-position','background-repeat','border-collapse','border-color','border-spacing','border-style','border-top','border-top-color','border-right-color','border-bottom-color','border-left-color','border-top-style','border-right-style','border-bottom-style','border-left-style','border-top-width','border-right-width','border-bottom-width','border-left-width','border-width','bottom','clear','clip','color','content','cursor','direction','display','elevation','empty-cells','css-float','font','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','height','left','letter-spacing','line-height','list-style','list-style-image','list-style-position','list-style-type','margin','margin-top','margin-right','margin-bottom','margin-left','max-height','max-width','min-height','min-width','orphans','outline','outline-color','outline-style','outline-width','overflow','padding','padding-top','padding-right','padding-bottom','padding-left','pause','position','right','size','table-layout','text-align','text-decoration','text-indent','text-shadow','text-transform','top','vertical-align','visibility','white-space','width','word-spacing','z-index','opacity','outline-offset','overflow-x','overflow-y'];


// chains several Animator objects together
function AnimatorChain(animators, options) {
	this.animators = animators;
	this.setOptions(options);
	for (var i=0; i<this.animators.length; i++) {
		this.listenTo(this.animators[i]);
	}
	this.forwards = false;
	this.current = 0;
}

AnimatorChain.prototype = {
	// apply defaults
	setOptions: function(options) {
		this.options = Animator.applyDefaults({
			// by default, each call to AnimatorChain.play() calls jumpTo(0) of each animator
			// before playing, which can cause flickering if you have multiple animators all
			// targeting the same element. Set this to false to avoid this.
			resetOnPlay: true
		}, options);
	},
	// play each animator in turn
	play: function() {
		this.forwards = true;
		this.current = -1;
		if (this.options.resetOnPlay) {
			for (var i=0; i<this.animators.length; i++) {
				this.animators[i].jumpTo(0);
			}
		}
		this.advance();
	},
	// play all animators backwards
	reverse: function() {
		this.forwards = false;
		this.current = this.animators.length;
		if (this.options.resetOnPlay) {
			for (var i=0; i<this.animators.length; i++) {
				this.animators[i].jumpTo(1);
			}
		}
		this.advance();
	},
	// if we have just play()'d, then call reverse(), and vice versa
	toggle: function() {
		if (this.forwards) {
			this.seekTo(0);
		} else {
			this.seekTo(1);
		}
	},
	// internal: install an event listener on an animator's onComplete option
	// to trigger the next animator
	listenTo: function(animator) {
		var oldOnComplete = animator.options.onComplete;
		var _this = this;
		animator.options.onComplete = function() {
			if (oldOnComplete) oldOnComplete.call(animator);
			_this.advance();
		}
	},
	// play the next animator
	advance: function() {
		if (this.forwards) {
			if (this.animators[this.current + 1] == null) return;
			this.current++;
			this.animators[this.current].play();
		} else {
			if (this.animators[this.current - 1] == null) return;
			this.current--;
			this.animators[this.current].reverse();
		}
	},
	// this function is provided for drop-in compatibility with Animator objects,
	// but only accepts 0 and 1 as target values
	seekTo: function(target) {
		if (target <= 0) {
			this.forwards = false;
			this.animators[this.current].seekTo(0);
		} else {
			this.forwards = true;
			this.animators[this.current].seekTo(1);
		}
	}
}

// an Accordion is a class that creates and controls a number of Animators. An array of elements is passed in,
// and for each element an Animator and a activator button is created. When an Animator's activator button is
// clicked, the Animator and all before it seek to 0, and all Animators after it seek to 1. This can be used to
// create the classic Accordion effect, hence the name.
// see setOptions for arguments
function Accordion(options) {
	this.setOptions(options);
	var selected = this.options.initialSection, current;
	if (this.options.rememberance) {
		current = document.location.hash.substring(1);
	}
	this.rememberanceTexts = [];
	this.ans = [];
	var _this = this;
	for (var i=0; i<this.options.sections.length; i++) {
		var el = this.options.sections[i];
		var an = new Animator(this.options.animatorOptions);
		var from = this.options.from + (this.options.shift * i);
		var to = this.options.to + (this.options.shift * i);
		an.addSubject(new NumericalStyleSubject(el, this.options.property, from, to, this.options.units));
		an.jumpTo(0);
		var activator = this.options.getActivator(el);
		activator.index = i;
		activator.onclick = function(){_this.show(this.index)};
		this.ans[this.ans.length] = an;
		this.rememberanceTexts[i] = activator.innerHTML.replace(/\s/g, "");
		if (this.rememberanceTexts[i] === current) {
			selected = i;
		}
	}
	this.show(selected);
}

Accordion.prototype = {
	// apply defaults
	setOptions: function(options) {
		this.options = Object.extend({
			// REQUIRED: an array of elements to use as the accordion sections
			sections: null,
			// a function that locates an activator button element given a section element.
			// by default it takes a button id from the section's "activator" attibute
			getActivator: function(el) {return document.getElementById(el.getAttribute("activator"))},
			// shifts each animator's range, for example with options {from:0,to:100,shift:20}
			// the animators' ranges will be 0-100, 20-120, 40-140 etc.
			shift: 0,
			// the first page to show
			initialSection: 0,
			// if set to true, document.location.hash will be used to preserve the open section across page reloads 
			rememberance: true,
			// constructor arguments to the Animator objects
			animatorOptions: {}
		}, options || {});
	},
	show: function(section) {
		for (var i=0; i<this.ans.length; i++) {
			this.ans[i].seekTo(i > section ? 1 : 0);
		}
		if (this.options.rememberance) {
			document.location.hash = this.rememberanceTexts[section];
		}
	}
}
;
/**
 *
 * SoundManager 2 Demo: 360-degree / "donut player"
 * ------------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * An inline player with a circular UI.
 * Based on the original SM2 inline player.
 * Inspired by Apple's preview feature in the
 * iTunes music store (iPhone), among others.
 *
 * Requires SoundManager 2 Javascript API.
 * Also uses Bernie's Better Animation Class (BSD):
 * http://www.berniecode.com/writing/animator.html
 *
*/

/*jslint white: false, onevar: true, undef: true, nomen: false, eqeqeq: true, plusplus: false, bitwise: true, regexp: false, newcap: true, immed: true */
/*global document, window, soundManager, navigator */

var threeSixtyPlayer, // instance
    ThreeSixtyPlayer; // constructor

(function(window) {

function ThreeSixtyPlayer() {

  var self = this,
      pl = this,
      sm = soundManager, // soundManager instance
      uA = navigator.userAgent,
      isIE = (uA.match(/msie/i)),
      isOpera = (uA.match(/opera/i)),
      isSafari = (uA.match(/safari/i)),
      isChrome = (uA.match(/chrome/i)),
      isFirefox = (uA.match(/firefox/i)),
      isTouchDevice = (uA.match(/ipad|iphone/i)),
      hasRealCanvas = (typeof window.G_vmlCanvasManager === 'undefined' && typeof document.createElement('canvas').getContext('2d') !== 'undefined'),
      // I dunno what Opera doesn't like about this. I'm probably doing it wrong.
      fullCircle = (isOpera||isChrome?359.9:360);

  // CSS class for ignoring MP3 links
  this.excludeClass = 'threesixty-exclude';
  this.links = [];
  this.sounds = [];
  this.soundsByURL = [];
  this.indexByURL = [];
  this.lastSound = null;
  this.lastTouchedSound = null;
  this.soundCount = 0;
  this.oUITemplate = null;
  this.oUIImageMap = null;
  this.vuMeter = null;
  this.callbackCount = 0;
  this.peakDataHistory = [];

  // 360player configuration options
  this.config = {

    playNext: false,   // stop after one sound, or play through list until end
    autoPlay: false,   // start playing the first sound right away
    allowMultiple: false,  // let many sounds play at once (false = only one sound playing at a time)
    loadRingColor: '#ccc', // how much has loaded
    playRingColor: '#000', // how much has played
    backgroundRingColor: '#eee', // color shown underneath load + play ("not yet loaded" color)

    // optional segment/annotation (metadata) stuff..
    segmentRingColor: 'rgba(255,255,255,0.33)', // metadata/annotation (segment) colors
    segmentRingColorAlt: 'rgba(0,0,0,0.1)',
    loadRingColorMetadata: '#ddd', // "annotations" load color
    playRingColorMetadata: 'rgba(128,192,256,0.9)', // how much has played when metadata is present

    circleDiameter: null, // set dynamically according to values from CSS
    circleRadius: null,
    animDuration: 500,
    animTransition: window.Animator.tx.bouncy, // http://www.berniecode.com/writing/animator.html
    showHMSTime: false, // hours:minutes:seconds vs. seconds-only
    scaleFont: true,  // also set the font size (if possible) while animating the circle

    // optional: spectrum or EQ graph in canvas (not supported in IE <9, too slow via ExCanvas)
    useWaveformData: false,
    waveformDataColor: '#0099ff',
    waveformDataDownsample: 3, // use only one in X (of a set of 256 values) - 1 means all 256
    waveformDataOutside: false,
    waveformDataConstrain: false, // if true, +ve values only - keep within inside circle
    waveformDataLineRatio: 0.64,

    // "spectrum frequency" option
    useEQData: false,
    eqDataColor: '#339933',
    eqDataDownsample: 4, // use only one in X (of 256 values)
    eqDataOutside: true,
    eqDataLineRatio: 0.54,

    // enable "amplifier" (canvas pulses like a speaker) effect
    usePeakData: true,
    peakDataColor: '#ff33ff',
    peakDataOutside: true,
    peakDataLineRatio: 0.5,

    useAmplifier: true, // "pulse" like a speaker

    fontSizeMax: null, // set according to CSS

    scaleArcWidth: 1,  // thickness factor of playback progress ring

    useFavIcon: false // Experimental (also requires usePeakData: true).. Try to draw a "VU Meter" in the favicon area, if browser supports it (Firefox + Opera as of 2009)

  };

  this.css = {

    // CSS class names appended to link during various states
    sDefault: 'sm2_link', // default state
    sBuffering: 'sm2_buffering',
    sPlaying: 'sm2_playing',
    sPaused: 'sm2_paused'

  };

  this.addEventHandler = (typeof window.addEventListener !== 'undefined' ? function(o, evtName, evtHandler) {
    return o.addEventListener(evtName,evtHandler,false);
  } : function(o, evtName, evtHandler) {
    o.attachEvent('on'+evtName,evtHandler);
  });

  this.removeEventHandler = (typeof window.removeEventListener !== 'undefined' ? function(o, evtName, evtHandler) {
    return o.removeEventListener(evtName,evtHandler,false);
  } : function(o, evtName, evtHandler) {
    return o.detachEvent('on'+evtName,evtHandler);
  });

  this.hasClass = function(o,cStr) {
    return typeof(o.className)!=='undefined'?o.className.match(new RegExp('(\\s|^)'+cStr+'(\\s|$)')):false;
  };

  this.addClass = function(o,cStr) {

    if (!o || !cStr || self.hasClass(o,cStr)) {
      return false;
    }
    o.className = (o.className?o.className+' ':'')+cStr;

  };

  this.removeClass = function(o,cStr) {

    if (!o || !cStr || !self.hasClass(o,cStr)) {
      return false;
    }
    o.className = o.className.replace(new RegExp('( '+cStr+')|('+cStr+')','g'),'');

  };

  this.getElementsByClassName = function(className,tagNames,oParent) {

    var doc = (oParent||document),
        matches = [], i,j, nodes = [];
    if (typeof tagNames !== 'undefined' && typeof tagNames !== 'string') {
      for (i=tagNames.length; i--;) {
        if (!nodes || !nodes[tagNames[i]]) {
          nodes[tagNames[i]] = doc.getElementsByTagName(tagNames[i]);
        }
      }
    } else if (tagNames) {
      nodes = doc.getElementsByTagName(tagNames);
    } else {
      nodes = doc.all||doc.getElementsByTagName('*');
    }
    if (typeof(tagNames)!=='string') {
      for (i=tagNames.length; i--;) {
        for (j=nodes[tagNames[i]].length; j--;) {
          if (self.hasClass(nodes[tagNames[i]][j],className)) {
            matches.push(nodes[tagNames[i]][j]);
          }
        }
      }
    } else {
      for (i=0; i<nodes.length; i++) {
        if (self.hasClass(nodes[i],className)) {
          matches.push(nodes[i]);
        }
      }
    }
    return matches;

  };

  this.getParentByNodeName = function(oChild,sParentNodeName) {

    if (!oChild || !sParentNodeName) {
      return false;
    }
    sParentNodeName = sParentNodeName.toLowerCase();
    while (oChild.parentNode && sParentNodeName !== oChild.parentNode.nodeName.toLowerCase()) {
      oChild = oChild.parentNode;
    }
    return (oChild.parentNode && sParentNodeName === oChild.parentNode.nodeName.toLowerCase()?oChild.parentNode:null);

  };

  this.getParentByClassName = function(oChild,sParentClassName) {

    if (!oChild || !sParentClassName) {
      return false;
    }
    while (oChild.parentNode && !self.hasClass(oChild.parentNode,sParentClassName)) {
      oChild = oChild.parentNode;
    }
    return (oChild.parentNode && self.hasClass(oChild.parentNode,sParentClassName)?oChild.parentNode:null);

  };

  this.getSoundByURL = function(sURL) {
    return (typeof self.soundsByURL[sURL] !== 'undefined'?self.soundsByURL[sURL]:null);
  };

  this.isChildOfNode = function(o,sNodeName) {

    if (!o || !o.parentNode) {
      return false;
    }
    sNodeName = sNodeName.toLowerCase();
    do {
      o = o.parentNode;
    } while (o && o.parentNode && o.nodeName.toLowerCase() !== sNodeName);
    return (o && o.nodeName.toLowerCase() === sNodeName?o:null);

  };

  this.isChildOfClass = function(oChild,oClass) {

    if (!oChild || !oClass) {
      return false;
    }
    while (oChild.parentNode && !self.hasClass(oChild,oClass)) {
      oChild = self.findParent(oChild);
    }
    return (self.hasClass(oChild,oClass));

  };

  this.findParent = function(o) {

    if (!o || !o.parentNode) {
      return false;
    }
    o = o.parentNode;
    if (o.nodeType === 2) {
      while (o && o.parentNode && o.parentNode.nodeType === 2) {
        o = o.parentNode;
      }
    }
    return o;

  };

  this.getStyle = function(o,sProp) {

    // http://www.quirksmode.org/dom/getstyles.html
    try {
      if (o.currentStyle) {
        return o.currentStyle[sProp];
      } else if (window.getComputedStyle) {
        return document.defaultView.getComputedStyle(o,null).getPropertyValue(sProp);
      }
    } catch(e) {
      // oh well
    }
    return null;

  };

  this.findXY = function(obj) {

    var curleft = 0, curtop = 0;
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (!!(obj = obj.offsetParent));
    return [curleft,curtop];

  };

  this.getMouseXY = function(e) {

    // http://www.quirksmode.org/js/events_properties.html
    e = e?e:window.event;
    if (isTouchDevice && e.touches) {
      e = e.touches[0];
    }
    if (e.pageX || e.pageY) {
      return [e.pageX,e.pageY];
    } else if (e.clientX || e.clientY) {
      return [e.clientX+self.getScrollLeft(),e.clientY+self.getScrollTop()];
    }

  };

  this.getScrollLeft = function() {
    return (document.body.scrollLeft+document.documentElement.scrollLeft);
  };

  this.getScrollTop = function() {
    return (document.body.scrollTop+document.documentElement.scrollTop);
  };

  this.events = {

    // handlers for sound events as they're started/stopped/played

    play: function() {
      pl.removeClass(this._360data.oUIBox,this._360data.className);
      this._360data.className = pl.css.sPlaying;
      pl.addClass(this._360data.oUIBox,this._360data.className);
      self.fanOut(this);
    },

    stop: function() {
      pl.removeClass(this._360data.oUIBox,this._360data.className);
      this._360data.className = '';
      self.fanIn(this);
    },

    pause: function() {
      pl.removeClass(this._360data.oUIBox,this._360data.className);
      this._360data.className = pl.css.sPaused;
      pl.addClass(this._360data.oUIBox,this._360data.className);
    },

    resume: function() {
      pl.removeClass(this._360data.oUIBox,this._360data.className);
      this._360data.className = pl.css.sPlaying;
      pl.addClass(this._360data.oUIBox,this._360data.className);      
    },

    finish: function() {
      var nextLink;
      pl.removeClass(this._360data.oUIBox,this._360data.className);
      this._360data.className = '';
      // self.clearCanvas(this._360data.oCanvas);
      this._360data.didFinish = true; // so fan draws full circle
      self.fanIn(this);
      if (pl.config.playNext) {
        nextLink = (pl.indexByURL[this._360data.oLink.href]+1);
        if (nextLink<pl.links.length) {
          pl.handleClick({'target':pl.links[nextLink]});
        }
      }
    },

    whileloading: function() {
      if (this.paused) {
        self.updatePlaying.apply(this);
      }
    },

    whileplaying: function() {
      self.updatePlaying.apply(this);
      this._360data.fps++;
    },

    bufferchange: function() {
      if (this.isBuffering) {
        pl.addClass(this._360data.oUIBox,pl.css.sBuffering);
      } else {
        pl.removeClass(this._360data.oUIBox,pl.css.sBuffering);
      }
    }

  };

  this.stopEvent = function(e) {

   if (typeof e !== 'undefined' && typeof e.preventDefault !== 'undefined') {
      e.preventDefault();
    } else if (typeof window.event !== 'undefined' && typeof window.event.returnValue !== 'undefined') {
      window.event.returnValue = false;
    }
    return false;

  };

  this.getTheDamnLink = (isIE)?function(e) {
    // I really didn't want to have to do this.
    return (e && e.target?e.target:window.event.srcElement);
  }:function(e) {
    return e.target;
  };

  this.handleClick = function(e) {

    // a sound link was clicked
    if (e.button > 1) {
      // only catch left-clicks
      return true;
    }

    var o = self.getTheDamnLink(e),
        sURL, soundURL, thisSound, oContainer, has_vis, diameter;

    if (o.nodeName.toLowerCase() !== 'a') {
      o = self.isChildOfNode(o,'a');
      if (!o) {
        return true;
      }
    }

    if (!self.isChildOfClass(o,'ui360')) {
      // not a link we're interested in
      return true;
    }

    sURL = o.getAttribute('href');

    if (!o.href || !sm.canPlayLink(o) || self.hasClass(o,self.excludeClass)) {
      return true; // pass-thru for non-MP3/non-links
    }

    sm._writeDebug('handleClick()');
    soundURL = (o.href);
    thisSound = self.getSoundByURL(soundURL);

    if (thisSound) {

      // already exists
      if (thisSound === self.lastSound) {
        // and was playing (or paused)
        thisSound.togglePause();
      } else {
        // different sound
        thisSound.togglePause(); // start playing current
        sm._writeDebug('sound different than last sound: '+self.lastSound.id);
        if (!self.config.allowMultiple && self.lastSound) {
          self.stopSound(self.lastSound);
        }
      }

    } else {

      // append some dom shiz, make noise

      oContainer = o.parentNode;
      has_vis = (self.getElementsByClassName('ui360-vis','div',oContainer.parentNode).length);

      // create sound
      thisSound = sm.createSound({
       id:'ui360Sound'+(self.soundCount++),
       url:soundURL,
       onplay:self.events.play,
       onstop:self.events.stop,
       onpause:self.events.pause,
       onresume:self.events.resume,
       onfinish:self.events.finish,
       onbufferchange:self.events.bufferchange,
       type:(o.type||null),
       whileloading:self.events.whileloading,
       whileplaying:self.events.whileplaying,
       useWaveformData:(has_vis && self.config.useWaveformData),
       useEQData:(has_vis && self.config.useEQData),
       usePeakData:(has_vis && self.config.usePeakData)
      });

      // tack on some custom data

      diameter = parseInt(self.getElementsByClassName('sm2-360ui','div',oContainer)[0].offsetWidth, 10);

      thisSound._360data = {
        oUI360: self.getParentByClassName(o,'ui360'), // the (whole) entire container
        oLink: o, // DOM node for reference within SM2 object event handlers
        className: self.css.sPlaying,
        oUIBox: self.getElementsByClassName('sm2-360ui','div',oContainer)[0],
        oCanvas: self.getElementsByClassName('sm2-canvas','canvas',oContainer)[0],
        oButton: self.getElementsByClassName('sm2-360btn','span',oContainer)[0],
        oTiming: self.getElementsByClassName('sm2-timing','div',oContainer)[0],
        oCover: self.getElementsByClassName('sm2-cover','div',oContainer)[0],
        circleDiameter: diameter,
        circleRadius: diameter/2,
        lastTime: null,
        didFinish: null,
        pauseCount:0,
        radius:0,
        fontSize: 1,
        fontSizeMax: self.config.fontSizeMax,
        scaleFont: (has_vis && self.config.scaleFont),
        showHMSTime: has_vis,
        amplifier: (has_vis && self.config.usePeakData?0.9:1), // TODO: x1 if not being used, else use dynamic "how much to amplify by" value
        radiusMax: diameter*0.175, // circle radius
        width:0,
        widthMax: diameter*0.4, // width of the outer ring
        lastValues: {
          bytesLoaded: 0,
          bytesTotal: 0,
          position: 0,
          durationEstimate: 0
        }, // used to track "last good known" values before sound finish/reset for anim
        animating: false,
        oAnim: new window.Animator({
          duration: self.config.animDuration,
          transition:self.config.animTransition,
          onComplete: function() {
            // var thisSound = this;
            // thisSound._360data.didFinish = false; // reset full circle
          }
        }),
        oAnimProgress: function(nProgress) {
          var thisSound = this;
          thisSound._360data.radius = parseInt(thisSound._360data.radiusMax*thisSound._360data.amplifier*nProgress, 10);
          thisSound._360data.width = parseInt(thisSound._360data.widthMax*thisSound._360data.amplifier*nProgress, 10);
          if (thisSound._360data.scaleFont && thisSound._360data.fontSizeMax !== null) {
            thisSound._360data.oTiming.style.fontSize = parseInt(Math.max(1,thisSound._360data.fontSizeMax*nProgress), 10)+'px';
            thisSound._360data.oTiming.style.opacity = nProgress;
          }
          if (thisSound.paused || thisSound.playState === 0 || thisSound._360data.lastValues.bytesLoaded === 0 || thisSound._360data.lastValues.position === 0) {
            self.updatePlaying.apply(thisSound);
          }
        },
        fps: 0
      };

      // "Metadata" (annotations)
      if (typeof self.Metadata !== 'undefined' && self.getElementsByClassName('metadata','div',thisSound._360data.oUI360).length) {
        thisSound._360data.metadata = new self.Metadata(thisSound,self);
      }

      // minimize ze font
      if (thisSound._360data.scaleFont && thisSound._360data.fontSizeMax !== null) {
        thisSound._360data.oTiming.style.fontSize = '1px';
      }

      // set up ze animation
      thisSound._360data.oAnim.addSubject(thisSound._360data.oAnimProgress,thisSound);

      // animate the radius out nice
      self.refreshCoords(thisSound);

      self.updatePlaying.apply(thisSound);

      self.soundsByURL[soundURL] = thisSound;
      self.sounds.push(thisSound);
      if (!self.config.allowMultiple && self.lastSound) {
        self.stopSound(self.lastSound);
      }
      thisSound.play();

    }

    self.lastSound = thisSound; // reference for next call

    if (typeof e !== 'undefined' && typeof e.preventDefault !== 'undefined') {
      e.preventDefault();
    } else if (typeof window.event !== 'undefined') {
      window.event.returnValue = false;
    }
    return false;

  };

  this.fanOut = function(oSound) {

     var thisSound = oSound;
     if (thisSound._360data.animating === 1) {
       return false;
     }
     thisSound._360data.animating = 0;
     soundManager._writeDebug('fanOut: '+thisSound.id+': '+thisSound._360data.oLink.href);
     thisSound._360data.oAnim.seekTo(1); // play to end
     window.setTimeout(function() {
       // oncomplete hack
       thisSound._360data.animating = 0;
     },self.config.animDuration+20);

  };

  this.fanIn = function(oSound) {

     var thisSound = oSound;
     if (thisSound._360data.animating === -1) {
       return false;
     }
     thisSound._360data.animating = -1;
     soundManager._writeDebug('fanIn: '+thisSound.id+': '+thisSound._360data.oLink.href);
     // massive hack
     thisSound._360data.oAnim.seekTo(0); // play to end
     window.setTimeout(function() {
       // reset full 360 fill after animation has completed (oncomplete hack)
       thisSound._360data.didFinish = false;
       thisSound._360data.animating = 0;
       self.resetLastValues(thisSound);
     }, self.config.animDuration+20);

  };

  this.resetLastValues = function(oSound) {
    oSound._360data.lastValues.position = 0;
  };

  this.refreshCoords = function(thisSound) {

    thisSound._360data.canvasXY = self.findXY(thisSound._360data.oCanvas);
    thisSound._360data.canvasMid = [thisSound._360data.circleRadius,thisSound._360data.circleRadius];
    thisSound._360data.canvasMidXY = [thisSound._360data.canvasXY[0]+thisSound._360data.canvasMid[0], thisSound._360data.canvasXY[1]+thisSound._360data.canvasMid[1]];

  };

  this.stopSound = function(oSound) {

    soundManager._writeDebug('stopSound: '+oSound.id);
    soundManager.stop(oSound.id);
    if (!isTouchDevice) { // iOS 4.2+ security blocks onfinish() -> playNext() if we set a .src in-between(?)
      soundManager.unload(oSound.id);
    }

  };

  this.buttonClick = function(e) {

    var o = e?(e.target?e.target:e.srcElement):window.event.srcElement;
    self.handleClick({target:self.getParentByClassName(o,'sm2-360ui').nextSibling}); // link next to the nodes we inserted
    return false;

  };

  this.buttonMouseDown = function(e) {

    // user might decide to drag from here
    // watch for mouse move
    if (!isTouchDevice) {
      document.onmousemove = function(e) {
        // should be boundary-checked, really (eg. move 3px first?)
        self.mouseDown(e);
      };
    } else {
      self.addEventHandler(document,'touchmove',self.mouseDown);
    }
    self.stopEvent(e);
    return false;

  };

  this.mouseDown = function(e) {

    if (!isTouchDevice && e.button > 1) {
      return true; // ignore non-left-click
    }

    if (!self.lastSound) {
      self.stopEvent(e);
      return false;
    }

    var evt = e?e:window.event,
        target, thisSound, oData;

    if (isTouchDevice && evt.touches) {
      evt = evt.touches[0];
    }
    target = (evt.target||evt.srcElement);

    thisSound = self.getSoundByURL(self.getElementsByClassName('sm2_link','a',self.getParentByClassName(target,'ui360'))[0].href); // self.lastSound; // TODO: In multiple sound case, figure out which sound is involved etc.
    // just in case, update coordinates (maybe the element moved since last time.)
    self.lastTouchedSound = thisSound;
    self.refreshCoords(thisSound);
    oData = thisSound._360data;
    self.addClass(oData.oUIBox,'sm2_dragging');
    oData.pauseCount = (self.lastTouchedSound.paused?1:0);
    // self.lastSound.pause();
    self.mmh(e?e:window.event);

    if (isTouchDevice) {
      self.removeEventHandler(document,'touchmove',self.mouseDown);
      self.addEventHandler(document,'touchmove',self.mmh);
      self.addEventHandler(document,'touchend',self.mouseUp);
    } else {
      // incredibly old-skool. TODO: Modernize.
      document.onmousemove = self.mmh;
      document.onmouseup = self.mouseUp;
    }

    self.stopEvent(e);
    return false;

  };

  this.mouseUp = function(e) {

    var oData = self.lastTouchedSound._360data;
    self.removeClass(oData.oUIBox,'sm2_dragging');
    if (oData.pauseCount === 0) {
      self.lastTouchedSound.resume();
    }
    if (!isTouchDevice) {
      document.onmousemove = null;
      document.onmouseup = null;
    } else {
      self.removeEventHandler(document,'touchmove',self.mmh);
      self.removeEventHandler(document,'touchend',self.mouseUP);
    }

  };

  this.mmh = function(e) {

    if (typeof e === 'undefined') {
      e = window.event;
    }
    var oSound = self.lastTouchedSound,
        coords = self.getMouseXY(e),
        x = coords[0],
        y = coords[1],
        deltaX = x-oSound._360data.canvasMidXY[0],
        deltaY = y-oSound._360data.canvasMidXY[1],
        angle = Math.floor(fullCircle-(self.rad2deg(Math.atan2(deltaX,deltaY))+180));

    oSound.setPosition(oSound.durationEstimate*(angle/fullCircle));
    self.stopEvent(e);
    return false;

  };

  // assignMouseDown();

  this.drawSolidArc = function(oCanvas, color, radius, width, radians, startAngle, noClear) {

    // thank you, http://www.snipersystems.co.nz/community/polarclock/tutorial.html

    var x = radius,
        y = radius,
        canvas = oCanvas,
        ctx, innerRadius, doesntLikeZero, endPoint;

    if (canvas.getContext){
      // use getContext to use the canvas for drawing
      ctx = canvas.getContext('2d');
    }

    // re-assign canvas as the actual context
    oCanvas = ctx;

    if (!noClear) {
      self.clearCanvas(canvas);
    }
    // ctx.restore();

    if (color) {
      ctx.fillStyle = color;
    }

    oCanvas.beginPath();

    if (isNaN(radians)) {
      radians = 0;
    }

    innerRadius = radius-width;
    doesntLikeZero = (isOpera || isSafari); // safari 4 doesn't actually seem to mind.

    if (!doesntLikeZero || (doesntLikeZero && radius > 0)) {
      oCanvas.arc(0, 0, radius, startAngle, radians, false);
      endPoint = self.getArcEndpointCoords(innerRadius, radians);
      oCanvas.lineTo(endPoint.x, endPoint.y);
      oCanvas.arc(0, 0, innerRadius, radians, startAngle, true);
      oCanvas.closePath();
      oCanvas.fill();
    }

  };

  this.getArcEndpointCoords = function(radius, radians) {

    return {
      x: radius * Math.cos(radians), 
      y: radius * Math.sin(radians)
    };

  };

  this.deg2rad = function(nDeg) {
    return (nDeg * Math.PI/180);
  };

  this.rad2deg = function(nRad) {
    return (nRad * 180/Math.PI);
  };

  this.getTime = function(nMSec,bAsString) {

    // convert milliseconds to mm:ss, return as object literal or string
    var nSec = Math.floor(nMSec/1000),
        min = Math.floor(nSec/60),
        sec = nSec-(min*60);
    // if (min === 0 && sec === 0) return null; // return 0:00 as null
    return (bAsString?(min+':'+(sec<10?'0'+sec:sec)):{'min':min,'sec':sec});

  };

  this.clearCanvas = function(oCanvas) {

    var canvas = oCanvas,
        ctx = null,
        width, height;
    if (canvas.getContext){
      // use getContext to use the canvas for drawing
      ctx = canvas.getContext('2d');
    }
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    ctx.clearRect(-(width/2), -(height/2), width, height);

  };

  this.updatePlaying = function() {

    var timeNow = (this._360data.showHMSTime?self.getTime(this.position,true):parseInt(this.position/1000, 10));
    var ringScaleFactor = self.config.scaleArcWidth;

    if (this.bytesLoaded) {
      this._360data.lastValues.bytesLoaded = this.bytesLoaded;
      this._360data.lastValues.bytesTotal = this.bytesTotal;
    }

    if (this.position) {
      this._360data.lastValues.position = this.position;
    }

    if (this.durationEstimate) {
      this._360data.lastValues.durationEstimate = this.durationEstimate;
    }

    // background ring
    self.drawSolidArc(this._360data.oCanvas,self.config.backgroundRingColor,this._360data.width,this._360data.radius * ringScaleFactor,self.deg2rad(fullCircle),false);

    // loaded ring
    self.drawSolidArc(this._360data.oCanvas,(this._360data.metadata?self.config.loadRingColorMetadata:self.config.loadRingColor),this._360data.width,this._360data.radius * ringScaleFactor,self.deg2rad(fullCircle*(this._360data.lastValues.bytesLoaded/this._360data.lastValues.bytesTotal)),0,true);

    // don't draw if 0 (full black circle in Opera)
    if (this._360data.lastValues.position !== 0) {
      self.drawSolidArc(this._360data.oCanvas,(this._360data.metadata?self.config.playRingColorMetadata:self.config.playRingColor),this._360data.width,this._360data.radius * ringScaleFactor,self.deg2rad((this._360data.didFinish===1?fullCircle:fullCircle*(this._360data.lastValues.position/this._360data.lastValues.durationEstimate))),0,true);
    }

    // metadata goes here
    if (this._360data.metadata) {
      this._360data.metadata.events.whileplaying();
    }

    if (timeNow !== this._360data.lastTime) {
      this._360data.lastTime = timeNow;
      this._360data.oTiming.innerHTML = timeNow;
    }

    // draw spectrum, if applicable
    if ((this.instanceOptions.useWaveformData || this.instanceOptions.useEQData) && hasRealCanvas) { // IE <9 can render maybe 3 or 4 FPS when including the wave/EQ, so don't bother.
      self.updateWaveform(this);
    }

    if (self.config.useFavIcon && self.vuMeter) {
      self.vuMeter.updateVU(this);
    }

  };

  this.updateWaveform = function(oSound) {

    if ((!self.config.useWaveformData && !self.config.useEQData) || (!sm.features.waveformData && !sm.features.eqData)) {
      // feature not enabled..
      return false;
    }

    if (!oSound.waveformData.left.length && !oSound.eqData.length && !oSound.peakData.left) {
      // no data (or errored out/paused/unavailable?)
      return false;
    }

    /* use for testing the data */
    /*
     for (i=0; i<256; i++) {
       oSound.eqData[i] = 1-(i/256);
     }
    */

    var oCanvas = oSound._360data.oCanvas.getContext('2d'),
        offX = 0,
        offY = parseInt(oSound._360data.circleDiameter/2, 10),
        scale = offY/2, // Y axis (+/- this distance from 0)
        // lineWidth = Math.floor(oSound._360data.circleDiameter-(oSound._360data.circleDiameter*0.175)/(oSound._360data.circleDiameter/255)); // width for each line
        lineWidth = 1,
        lineHeight = 1,
        thisY = 0,
        offset = offY,
        i, j, direction, downSample, dataLength, sampleCount, startAngle, endAngle, waveData, innerRadius, perItemAngle, yDiff, eqSamples, playedAngle, iAvg, nPeak;

    if (self.config.useWaveformData) {
      // raw waveform
      downSample = self.config.waveformDataDownsample; // only sample X in 256 (greater number = less sample points)
      downSample = Math.max(1,downSample); // make sure it's at least 1
      dataLength = 256;
      sampleCount = (dataLength/downSample);
      startAngle = 0;
      endAngle = 0;
      waveData = null;
      innerRadius = (self.config.waveformDataOutside?1:(self.config.waveformDataConstrain?0.5:0.565));
      scale = (self.config.waveformDataOutside?0.7:0.75);
      perItemAngle = self.deg2rad((360/sampleCount)*self.config.waveformDataLineRatio); // 0.85 = clean pixel lines at 150? // self.deg2rad(360*(Math.max(1,downSample-1))/sampleCount);
      for (i=0; i<dataLength; i+=downSample) {
        startAngle = self.deg2rad(360*(i/(sampleCount)*1/downSample)); // +0.67 - counter for spacing
        endAngle = startAngle+perItemAngle;
        waveData = oSound.waveformData.left[i];
        if (waveData<0 && self.config.waveformDataConstrain) {
          waveData = Math.abs(waveData);
        }
        self.drawSolidArc(oSound._360data.oCanvas,self.config.waveformDataColor,oSound._360data.width*innerRadius*(2-self.config.scaleArcWidth),oSound._360data.radius*scale*1.25*waveData,endAngle,startAngle,true);
      }
    }

    if (self.config.useEQData) {
      // EQ spectrum
      downSample = self.config.eqDataDownsample; // only sample N in 256
      yDiff = 0;
      downSample = Math.max(1,downSample); // make sure it's at least 1
      eqSamples = 192; // drop the last 25% of the spectrum (>16500 Hz), most stuff won't actually use it.
      sampleCount = (eqSamples/downSample);
      innerRadius = (self.config.eqDataOutside?1:0.565);
      direction = (self.config.eqDataOutside?-1:1);
      scale = (self.config.eqDataOutside?0.5:0.75);
      startAngle = 0;
      endAngle = 0;
      perItemAngle = self.deg2rad((360/sampleCount)*self.config.eqDataLineRatio); // self.deg2rad(360/(sampleCount+1));
      playedAngle = self.deg2rad((oSound._360data.didFinish===1?360:360*(oSound._360data.lastValues.position/oSound._360data.lastValues.durationEstimate)));
      j=0;
      iAvg = 0;
      for (i=0; i<eqSamples; i+=downSample) {
        startAngle = self.deg2rad(360*(i/eqSamples));
        endAngle = startAngle+perItemAngle;
        self.drawSolidArc(oSound._360data.oCanvas,(endAngle>playedAngle?self.config.eqDataColor:self.config.playRingColor),oSound._360data.width*innerRadius,oSound._360data.radius*scale*(oSound.eqData.left[i]*direction),endAngle,startAngle,true);
      }
    }

    if (self.config.usePeakData) {
      if (!oSound._360data.animating) {
        nPeak = (oSound.peakData.left||oSound.peakData.right);
        // GIANT HACK: use EQ spectrum data for bass frequencies
        eqSamples = 3;
        for (i=0; i<eqSamples; i++) {
          nPeak = (nPeak||oSound.eqData[i]);
        }
        oSound._360data.amplifier = (self.config.useAmplifier?(0.9+(nPeak*0.1)):1);
        oSound._360data.radiusMax = oSound._360data.circleDiameter*0.175*oSound._360data.amplifier;
        oSound._360data.widthMax = oSound._360data.circleDiameter*0.4*oSound._360data.amplifier;
        oSound._360data.radius = parseInt(oSound._360data.radiusMax*oSound._360data.amplifier, 10);
        oSound._360data.width = parseInt(oSound._360data.widthMax*oSound._360data.amplifier, 10);
      }
    }

  };

  this.getUIHTML = function(diameter) {

    return [
     '<canvas class="sm2-canvas" width="'+diameter+'" height="'+diameter+'"></canvas>',
     ' <span class="sm2-360btn sm2-360btn-default"></span>', // note use of imageMap, edit or remove if you use a different-size image.
     ' <div class="sm2-timing'+(navigator.userAgent.match(/safari/i)?' alignTweak':'')+'"></div>', // + Ever-so-slight Safari horizontal alignment tweak
     ' <div class="sm2-cover"></div>'
    ];

  };

  this.uiTest = function(sClass) {

    // fake a 360 UI so we can get some numbers from CSS, etc.

    var oTemplate = document.createElement('div'),
        oFakeUI, oFakeUIBox, oTemp, fakeDiameter, uiHTML, circleDiameter, circleRadius, fontSizeMax, oTiming;

    oTemplate.className = 'sm2-360ui';

    oFakeUI = document.createElement('div');
    oFakeUI.className = 'ui360'+(sClass?' '+sClass:''); // ui360 ui360-vis

    oFakeUIBox = oFakeUI.appendChild(oTemplate.cloneNode(true));

    oFakeUI.style.position = 'absolute';
    oFakeUI.style.left = '-9999px';

    oTemp = document.body.appendChild(oFakeUI);

    fakeDiameter = oFakeUIBox.offsetWidth;

    uiHTML = self.getUIHTML(fakeDiameter);

    oFakeUIBox.innerHTML = uiHTML[1]+uiHTML[2]+uiHTML[3];

    circleDiameter = parseInt(oFakeUIBox.offsetWidth, 10);
    circleRadius = parseInt(circleDiameter/2, 10);

    oTiming = self.getElementsByClassName('sm2-timing','div',oTemp)[0];
    fontSizeMax = parseInt(self.getStyle(oTiming,'font-size'), 10);
    if (isNaN(fontSizeMax)) {
      // getStyle() etc. didn't work.
      fontSizeMax = null;
    }

    // soundManager._writeDebug('diameter, font size: '+circleDiameter+','+fontSizeMax);

    oFakeUI.parentNode.removeChild(oFakeUI);

    uiHTML = oFakeUI = oFakeUIBox = oTemp = null;

    return {
      circleDiameter: circleDiameter,
      circleRadius: circleRadius,
      fontSizeMax: fontSizeMax
    };

  };

  this.init = function() {

    sm._writeDebug('threeSixtyPlayer.init()');

    var oItems = self.getElementsByClassName('ui360','div'),
        i, j, oLinks = [], is_vis = false, foundItems = 0, oCanvas, oCanvasCTX, oCover, diameter, radius, uiData, uiDataVis, oUI, oBtn, o, o2, oID;

    for (i=0,j=oItems.length; i<j; i++) {
      oLinks.push(oItems[i].getElementsByTagName('a')[0]);
      // remove "fake" play button (unsupported case)
      oItems[i].style.backgroundImage = 'none';
    }
    // grab all links, look for .mp3

    self.oUITemplate = document.createElement('div');
    self.oUITemplate.className = 'sm2-360ui';

    self.oUITemplateVis = document.createElement('div');
    self.oUITemplateVis.className = 'sm2-360ui';

    uiData = self.uiTest();

    self.config.circleDiameter = uiData.circleDiameter;
    self.config.circleRadius = uiData.circleRadius;
    // self.config.fontSizeMax = uiData.fontSizeMax;

    uiDataVis = self.uiTest('ui360-vis');

    self.config.fontSizeMax = uiDataVis.fontSizeMax;

    // canvas needs inline width and height, doesn't quite work otherwise
    self.oUITemplate.innerHTML = self.getUIHTML(self.config.circleDiameter).join('');

    self.oUITemplateVis.innerHTML = self.getUIHTML(uiDataVis.circleDiameter).join('');

    for (i=0,j=oLinks.length; i<j; i++) {
      if (sm.canPlayLink(oLinks[i]) && !self.hasClass(oLinks[i],self.excludeClass) && !self.hasClass(oLinks[i],self.css.sDefault)) {
        self.addClass(oLinks[i],self.css.sDefault); // add default CSS decoration
        self.links[foundItems] = (oLinks[i]);
        self.indexByURL[oLinks[i].href] = foundItems; // hack for indexing
        foundItems++;

        is_vis = self.hasClass(oLinks[i].parentNode, 'ui360-vis');

        diameter = (is_vis ? uiDataVis : uiData).circleDiameter;
        radius = (is_vis ? uiDataVis : uiData).circleRadius;

        // add canvas shiz
        oUI = oLinks[i].parentNode.insertBefore((is_vis?self.oUITemplateVis:self.oUITemplate).cloneNode(true),oLinks[i]);

        if (isIE && typeof window.G_vmlCanvasManager !== 'undefined') { // IE only
          o = oLinks[i].parentNode;
          o2 = document.createElement('canvas');
          o2.className = 'sm2-canvas';
          oID = 'sm2_canvas_'+parseInt(Math.random()*1048576, 10);
          o2.id = oID;
          o2.width = diameter;
          o2.height = diameter;
          oUI.appendChild(o2);
          window.G_vmlCanvasManager.initElement(o2); // Apply ExCanvas compatibility magic
          oCanvas = document.getElementById(oID);
        } else { 
          // add a handler for the button
          oCanvas = oLinks[i].parentNode.getElementsByTagName('canvas')[0];
        }
        oCover = self.getElementsByClassName('sm2-cover','div',oLinks[i].parentNode)[0];
        oBtn = oLinks[i].parentNode.getElementsByTagName('span')[0];
        self.addEventHandler(oBtn,'click',self.buttonClick);
        if (!isTouchDevice) {
          self.addEventHandler(oCover,'mousedown',self.mouseDown);
        } else {
          self.addEventHandler(oCover,'touchstart',self.mouseDown);
        }
        oCanvasCTX = oCanvas.getContext('2d');
        oCanvasCTX.translate(radius, radius);
        oCanvasCTX.rotate(self.deg2rad(-90)); // compensate for arc starting at EAST // http://stackoverflow.com/questions/319267/tutorial-for-html-canvass-arc-function
      }
    }
    if (foundItems>0) {
      self.addEventHandler(document,'click',self.handleClick);
      if (self.config.autoPlay) {
        self.handleClick({target:self.links[0],preventDefault:function(){}});
      }
    }
    sm._writeDebug('threeSixtyPlayer.init(): Found '+foundItems+' relevant items.');

    if (self.config.useFavIcon && typeof this.VUMeter !== 'undefined') {
      this.vuMeter = new this.VUMeter(this);
    }

  };

}

// Optional: VU Meter component

ThreeSixtyPlayer.prototype.VUMeter = function(oParent) {

  var self = oParent,
      me = this,
      _head = document.getElementsByTagName('head')[0],
      isOpera = (navigator.userAgent.match(/opera/i)),
      isFirefox = (navigator.userAgent.match(/firefox/i));

  this.vuMeterData = [];
  this.vuDataCanvas = null;

  this.setPageIcon = function(sDataURL) {

    if (!self.config.useFavIcon || !self.config.usePeakData || !sDataURL) {
      return false;
    }

    var link = document.getElementById('sm2-favicon');
    if (link) {
      _head.removeChild(link);
      link = null;
    }
    if (!link) {
      link = document.createElement('link');
      link.id = 'sm2-favicon';
      link.rel = 'shortcut icon';
      link.type = 'image/png';
      link.href = sDataURL;
      document.getElementsByTagName('head')[0].appendChild(link);
    }

  };

  this.resetPageIcon = function() {

    if (!self.config.useFavIcon) {
      return false;
    }
    var link = document.getElementById('favicon');
    if (link) {
      link.href = '/favicon.ico';
    }

  };

  this.updateVU = function(oSound) {

    if (soundManager.flashVersion >= 9 && self.config.useFavIcon && self.config.usePeakData) {
      me.setPageIcon(me.vuMeterData[parseInt(16*oSound.peakData.left, 10)][parseInt(16*oSound.peakData.right, 10)]);
    }

  };

  this.createVUData = function() {

    var i=0, j=0,
        canvas = me.vuDataCanvas.getContext('2d'),
        vuGrad = canvas.createLinearGradient(0, 16, 0, 0),
        bgGrad = canvas.createLinearGradient(0, 16, 0, 0),
        outline = 'rgba(0,0,0,0.2)';

    vuGrad.addColorStop(0,'rgb(0,192,0)');
    vuGrad.addColorStop(0.30,'rgb(0,255,0)');
    vuGrad.addColorStop(0.625,'rgb(255,255,0)');
    vuGrad.addColorStop(0.85,'rgb(255,0,0)');
    bgGrad.addColorStop(0,outline);
    bgGrad.addColorStop(1,'rgba(0,0,0,0.5)');
    for (i=0; i<16; i++) {
      me.vuMeterData[i] = [];
    }
    for (i=0; i<16; i++) {
      for (j=0; j<16; j++) {
        // reset/erase canvas
        me.vuDataCanvas.setAttribute('width',16);
        me.vuDataCanvas.setAttribute('height',16);
        // draw new stuffs
        canvas.fillStyle = bgGrad;
        canvas.fillRect(0,0,7,15);
        canvas.fillRect(8,0,7,15);
        /*
        // shadow
        canvas.fillStyle = 'rgba(0,0,0,0.1)';
        canvas.fillRect(1,15-i,7,17-(17-i));
        canvas.fillRect(9,15-j,7,17-(17-j));
        */
        canvas.fillStyle = vuGrad;
        canvas.fillRect(0,15-i,7,16-(16-i));
        canvas.fillRect(8,15-j,7,16-(16-j));
        // and now, clear out some bits.
        canvas.clearRect(0,3,16,1);
        canvas.clearRect(0,7,16,1);
        canvas.clearRect(0,11,16,1);
        me.vuMeterData[i][j] = me.vuDataCanvas.toDataURL('image/png');
        // for debugging VU images
        /*
        var o = document.createElement('img');
        o.style.marginRight = '5px'; 
        o.src = vuMeterData[i][j];
        document.documentElement.appendChild(o);
        */
      }
    }

  };

  this.testCanvas = function() {

    // canvas + toDataURL();
    var c = document.createElement('canvas'),
        ctx = null, ok;
    if (!c || typeof c.getContext === 'undefined') {
      return null;
    }
    ctx = c.getContext('2d');
    if (!ctx || typeof c.toDataURL !== 'function') {
      return null;
    }
    // just in case..
    try {
      ok = c.toDataURL('image/png');
    } catch(e) {
      // no canvas or no toDataURL()
      return null;
    }
    // assume we're all good.
    return c;

  };

  this.init = function() {

    if (self.config.useFavIcon) {
      me.vuDataCanvas = me.testCanvas();
      if (me.vuDataCanvas && (isFirefox || isOpera)) {
        // these browsers support dynamically-updating the favicon
        me.createVUData();
      } else {
        // browser doesn't support doing this
        self.config.useFavIcon = false;
      }
    }

  };

  this.init();

};

// completely optional: Metadata/annotations/segments code

ThreeSixtyPlayer.prototype.Metadata = function(oSound, oParent) {

  soundManager._wD('Metadata()');

  var me = this,
      oBox = oSound._360data.oUI360,
      o = oBox.getElementsByTagName('ul')[0],
      oItems = o.getElementsByTagName('li'),
      isFirefox = (navigator.userAgent.match(/firefox/i)),
      isAlt = false, i, oDuration;

  this.lastWPExec = 0;
  this.refreshInterval = 250;
  this.totalTime = 0;

  this.events = {

    whileplaying: function() {

      var width = oSound._360data.width,
          radius = oSound._360data.radius,
          fullDuration = (oSound.durationEstimate||(me.totalTime*1000)),
          isAlt = null, i, j, d;

      for (i=0,j=me.data.length; i<j; i++) {
        isAlt = (i%2===0);
        oParent.drawSolidArc(oSound._360data.oCanvas,(isAlt?oParent.config.segmentRingColorAlt:oParent.config.segmentRingColor),isAlt?width:width, isAlt?radius/2:radius/2, oParent.deg2rad(360*(me.data[i].endTimeMS/fullDuration)), oParent.deg2rad(360*((me.data[i].startTimeMS||1)/fullDuration)), true);
      }
      d = new Date();
      if (d-me.lastWPExec>me.refreshInterval) {
        me.refresh();
        me.lastWPExec = d;
      }

    }

  };

  this.refresh = function() {

    // Display info as appropriate
    var i, j, index = null,
        now = oSound.position,
        metadata = oSound._360data.metadata.data;

    for (i=0, j=metadata.length; i<j; i++) {
      if (now >= metadata[i].startTimeMS && now <= metadata[i].endTimeMS) {
        index = i;
        break;
      }
    }
    if (index !== metadata.currentItem && index < metadata.length) {
      // update
      oSound._360data.oLink.innerHTML = metadata.mainTitle+' <span class="metadata"><span class="sm2_divider"> | </span><span class="sm2_metadata">'+metadata[index].title+'</span></span>';
      // self.setPageTitle(metadata[index].title+' | '+metadata.mainTitle);
      metadata.currentItem = index;
    }

  };

  this.strToTime = function(sTime) {
    var segments = sTime.split(':'),
        seconds = 0, i;
    for (i=segments.length; i--;) {
      seconds += parseInt(segments[i], 10)*Math.pow(60,segments.length-1-i); // hours, minutes
    }
    return seconds;
  };

  this.data = [];
  this.data.givenDuration = null;
  this.data.currentItem = null;
  this.data.mainTitle = oSound._360data.oLink.innerHTML;

  for (i=0; i<oItems.length; i++) {
    this.data[i] = {
      o: null,
      title: oItems[i].getElementsByTagName('p')[0].innerHTML,
      startTime: oItems[i].getElementsByTagName('span')[0].innerHTML,
      startSeconds: me.strToTime(oItems[i].getElementsByTagName('span')[0].innerHTML.replace(/[()]/g,'')),
      duration: 0,
      durationMS: null,
      startTimeMS: null,
      endTimeMS: null,
      oNote: null
    };
  }
  oDuration = oParent.getElementsByClassName('duration','div',oBox);
  this.data.givenDuration = (oDuration.length?me.strToTime(oDuration[0].innerHTML)*1000:0);
  for (i=0; i<this.data.length; i++) {
    this.data[i].duration = parseInt(this.data[i+1]?this.data[i+1].startSeconds:(me.data.givenDuration?me.data.givenDuration:oSound.durationEstimate)/1000, 10)-this.data[i].startSeconds;
    this.data[i].startTimeMS = this.data[i].startSeconds*1000;
    this.data[i].durationMS = this.data[i].duration*1000;
    this.data[i].endTimeMS = this.data[i].startTimeMS+this.data[i].durationMS;
    this.totalTime += this.data[i].duration;
  }

};

if (navigator.userAgent.match(/webkit/i) && navigator.userAgent.match(/mobile/i)) {
  // iPad, iPhone etc.
  soundManager.setup({
    useHTML5Audio: true
  });
}

soundManager.setup({
  html5PollingInterval: 50, // increased framerate for whileplaying() etc.
  debugMode: (window.location.href.match(/debug=1/i)), // disable or enable debug output
  consoleOnly: true,
  flashVersion: 9,
  useHighPerformance: true,
  useFlashBlock: true
});

// FPS data, testing/debug only
if (soundManager.debugMode) {
  window.setInterval(function() {
    var p = window.threeSixtyPlayer;
    if (p && p.lastSound && p.lastSound._360data.fps && typeof window.isHome === 'undefined') {
      soundManager._writeDebug('fps: ~'+p.lastSound._360data.fps);
      p.lastSound._360data.fps = 0;
    }
  },1000);
}

window.ThreeSixtyPlayer = ThreeSixtyPlayer; // constructor

}(window));

threeSixtyPlayer = new ThreeSixtyPlayer();

// hook into SM2 init
soundManager.onready(threeSixtyPlayer.init);;
(function ($) {

/**
 * Provides Ajax page updating via jQuery $.ajax (Asynchronous JavaScript and XML).
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with #ajax['path'] and
 * #ajax['wrapper'] properties. If set, this file will automatically be included
 * to provide Ajax capabilities.
 */

Drupal.ajax = Drupal.ajax || {};

Drupal.settings.urlIsAjaxTrusted = Drupal.settings.urlIsAjaxTrusted || {};

/**
 * Attaches the Ajax behavior to each Ajax form element.
 */
Drupal.behaviors.AJAX = {
  attach: function (context, settings) {
    // Load all Ajax behaviors specified in the settings.
    for (var base in settings.ajax) {
      if (!$('#' + base + '.ajax-processed').length) {
        var element_settings = settings.ajax[base];

        if (typeof element_settings.selector == 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).each(function () {
          element_settings.element = this;
          Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
        });

        $('#' + base).addClass('ajax-processed');
      }
    }

    // Bind Ajax behaviors to all items showing the class.
    $('.use-ajax:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};
      // Clicked links look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      // For anchor tags, these will go to the target of the anchor rather
      // than the usual location.
      if ($(this).attr('href')) {
        element_settings.url = $(this).attr('href');
        element_settings.event = 'click';
      }
      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });

    // This class means to submit the form to the action using Ajax.
    $('.use-ajax-submit:not(.ajax-processed)').addClass('ajax-processed').each(function () {
      var element_settings = {};

      // Ajax submits specified in this manner automatically submit to the
      // normal form action.
      element_settings.url = $(this.form).attr('action');
      // Form submit button clicks need to tell the form what was clicked so
      // it gets passed in the POST request.
      element_settings.setClick = true;
      // Form buttons use the 'click' event rather than mousedown.
      element_settings.event = 'click';
      // Clicked form buttons look better with the throbber than the progress bar.
      element_settings.progress = { 'type': 'throbber' };

      var base = $(this).attr('id');
      Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
    });
  }
};

/**
 * Ajax object.
 *
 * All Ajax objects on a page are accessible through the global Drupal.ajax
 * object and are keyed by the submit button's ID. You can access them from
 * your module's JavaScript file to override properties or functions.
 *
 * For example, if your Ajax enabled button has the ID 'edit-submit', you can
 * redefine the function that is called to insert the new content like this
 * (inside a Drupal.behaviors attach block):
 * @code
 *    Drupal.behaviors.myCustomAJAXStuff = {
 *      attach: function (context, settings) {
 *        Drupal.ajax['edit-submit'].commands.insert = function (ajax, response, status) {
 *          new_content = $(response.data);
 *          $('#my-wrapper').append(new_content);
 *          alert('New content was appended to #my-wrapper');
 *        }
 *      }
 *    };
 * @endcode
 */
Drupal.ajax = function (base, element, element_settings) {
  var defaults = {
    url: 'system/ajax',
    event: 'mousedown',
    keypress: true,
    selector: '#' + base,
    effect: 'none',
    speed: 'none',
    method: 'replaceWith',
    progress: {
      type: 'throbber',
      message: Drupal.t('Please wait...')
    },
    submit: {
      'js': true
    }
  };

  $.extend(this, defaults, element_settings);

  this.element = element;
  this.element_settings = element_settings;

  // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
  // the server detect when it needs to degrade gracefully.
  // There are five scenarios to check for:
  // 1. /nojs/
  // 2. /nojs$ - The end of a URL string.
  // 3. /nojs? - Followed by a query (with clean URLs enabled).
  //      E.g.: path/nojs?destination=foobar
  // 4. /nojs& - Followed by a query (without clean URLs enabled).
  //      E.g.: ?q=path/nojs&destination=foobar
  // 5. /nojs# - Followed by a fragment.
  //      E.g.: path/nojs#myfragment
  this.url = element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g, '/ajax$1');
  // If the 'nojs' version of the URL is trusted, also trust the 'ajax' version.
  if (Drupal.settings.urlIsAjaxTrusted[element_settings.url]) {
    Drupal.settings.urlIsAjaxTrusted[this.url] = true;
  }

  this.wrapper = '#' + element_settings.wrapper;

  // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
  // bind Ajax to links as well.
  if (this.element.form) {
    this.form = $(this.element.form);
  }

  // Set the options for the ajaxSubmit function.
  // The 'this' variable will not persist inside of the options object.
  var ajax = this;
  ajax.options = {
    url: ajax.url,
    data: ajax.submit,
    beforeSerialize: function (element_settings, options) {
      return ajax.beforeSerialize(element_settings, options);
    },
    beforeSubmit: function (form_values, element_settings, options) {
      ajax.ajaxing = true;
      return ajax.beforeSubmit(form_values, element_settings, options);
    },
    beforeSend: function (xmlhttprequest, options) {
      ajax.ajaxing = true;
      return ajax.beforeSend(xmlhttprequest, options);
    },
    success: function (response, status, xmlhttprequest) {
      // Sanity check for browser support (object expected).
      // When using iFrame uploads, responses must be returned as a string.
      if (typeof response == 'string') {
        response = $.parseJSON(response);
      }

      // Prior to invoking the response's commands, verify that they can be
      // trusted by checking for a response header. See
      // ajax_set_verification_header() for details.
      // - Empty responses are harmless so can bypass verification. This avoids
      //   an alert message for server-generated no-op responses that skip Ajax
      //   rendering.
      // - Ajax objects with trusted URLs (e.g., ones defined server-side via
      //   #ajax) can bypass header verification. This is especially useful for
      //   Ajax with multipart forms. Because IFRAME transport is used, the
      //   response headers cannot be accessed for verification.
      if (response !== null && !Drupal.settings.urlIsAjaxTrusted[ajax.url]) {
        if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
          var customMessage = Drupal.t("The response failed verification so will not be processed.");
          return ajax.error(xmlhttprequest, ajax.url, customMessage);
        }
      }

      return ajax.success(response, status);
    },
    complete: function (xmlhttprequest, status) {
      ajax.ajaxing = false;
      if (status == 'error' || status == 'parsererror') {
        return ajax.error(xmlhttprequest, ajax.url);
      }
    },
    dataType: 'json',
    type: 'POST'
  };

  // Bind the ajaxSubmit function to the element event.
  $(ajax.element).bind(element_settings.event, function (event) {
    if (!Drupal.settings.urlIsAjaxTrusted[ajax.url] && !Drupal.urlIsLocal(ajax.url)) {
      throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
    }
    return ajax.eventResponse(this, event);
  });

  // If necessary, enable keyboard submission so that Ajax behaviors
  // can be triggered through keyboard input as well as e.g. a mousedown
  // action.
  if (element_settings.keypress) {
    $(ajax.element).keypress(function (event) {
      return ajax.keypressResponse(this, event);
    });
  }

  // If necessary, prevent the browser default action of an additional event.
  // For example, prevent the browser default action of a click, even if the
  // AJAX behavior binds to mousedown.
  if (element_settings.prevent) {
    $(ajax.element).bind(element_settings.prevent, false);
  }
};

/**
 * Handle a key press.
 *
 * The Ajax object will, if instructed, bind to a key press response. This
 * will test to see if the key press is valid to trigger this event and
 * if it is, trigger it for us and prevent other keypresses from triggering.
 * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
 * and 32. RETURN is often used to submit a form when in a textfield, and 
 * SPACE is often used to activate an element without submitting. 
 */
Drupal.ajax.prototype.keypressResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Detect enter key and space bar and allow the standard response for them,
  // except for form elements of type 'text' and 'textarea', where the 
  // spacebar activation causes inappropriate activation if #ajax['keypress'] is 
  // TRUE. On a text-type widget a space should always be a space.
  if (event.which == 13 || (event.which == 32 && element.type != 'text' && element.type != 'textarea')) {
    $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    return false;
  }
};

/**
 * Handle an event that triggers an Ajax response.
 *
 * When an event that triggers an Ajax response happens, this method will
 * perform the actual Ajax call. It is bound to the event using
 * bind() in the constructor, and it uses the options specified on the
 * ajax object.
 */
Drupal.ajax.prototype.eventResponse = function (element, event) {
  // Create a synonym for this to reduce code confusion.
  var ajax = this;

  // Do not perform another ajax command if one is already in progress.
  if (ajax.ajaxing) {
    return false;
  }

  try {
    if (ajax.form) {
      // If setClick is set, we must set this to ensure that the button's
      // value is passed.
      if (ajax.setClick) {
        // Mark the clicked button. 'form.clk' is a special variable for
        // ajaxSubmit that tells the system which element got clicked to
        // trigger the submit. Without it there would be no 'op' or
        // equivalent.
        element.form.clk = element;
      }

      ajax.form.ajaxSubmit(ajax.options);
    }
    else {
      ajax.beforeSerialize(ajax.element, ajax.options);
      $.ajax(ajax.options);
    }
  }
  catch (e) {
    // Unset the ajax.ajaxing flag here because it won't be unset during
    // the complete response.
    ajax.ajaxing = false;
    alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message);
  }

  // For radio/checkbox, allow the default event. On IE, this means letting
  // it actually check the box.
  if (typeof element.type != 'undefined' && (element.type == 'checkbox' || element.type == 'radio')) {
    return true;
  }
  else {
    return false;
  }

};

/**
 * Handler for the form serialization.
 *
 * Runs before the beforeSend() handler (see below), and unlike that one, runs
 * before field data is collected.
 */
Drupal.ajax.prototype.beforeSerialize = function (element, options) {
  // Allow detaching behaviors to update field values before collecting them.
  // This is only needed when field values are added to the POST data, so only
  // when there is a form such that this.form.ajaxSubmit() is used instead of
  // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
  // isn't called, but don't rely on that: explicitly check this.form.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.detachBehaviors(this.form, settings, 'serialize');
  }

  // Prevent duplicate HTML ids in the returned markup.
  // @see drupal_html_id()
  options.data['ajax_html_ids[]'] = [];
  $('[id]').each(function () {
    options.data['ajax_html_ids[]'].push(this.id);
  });

  // Allow Drupal to return new JavaScript and CSS files to load without
  // returning the ones already loaded.
  // @see ajax_base_page_theme()
  // @see drupal_get_css()
  // @see drupal_get_js()
  options.data['ajax_page_state[theme]'] = Drupal.settings.ajaxPageState.theme;
  options.data['ajax_page_state[theme_token]'] = Drupal.settings.ajaxPageState.theme_token;
  for (var key in Drupal.settings.ajaxPageState.css) {
    options.data['ajax_page_state[css][' + key + ']'] = 1;
  }
  for (var key in Drupal.settings.ajaxPageState.js) {
    options.data['ajax_page_state[js][' + key + ']'] = 1;
  }
};

/**
 * Modify form values prior to form submission.
 */
Drupal.ajax.prototype.beforeSubmit = function (form_values, element, options) {
  // This function is left empty to make it simple to override for modules
  // that wish to add functionality here.
};

/**
 * Prepare the Ajax request before it is sent.
 */
Drupal.ajax.prototype.beforeSend = function (xmlhttprequest, options) {
  // For forms without file inputs, the jQuery Form plugin serializes the form
  // values, and then calls jQuery's $.ajax() function, which invokes this
  // handler. In this circumstance, options.extraData is never used. For forms
  // with file inputs, the jQuery Form plugin uses the browser's normal form
  // submission mechanism, but captures the response in a hidden IFRAME. In this
  // circumstance, it calls this handler first, and then appends hidden fields
  // to the form to submit the values in options.extraData. There is no simple
  // way to know which submission mechanism will be used, so we add to extraData
  // regardless, and allow it to be ignored in the former case.
  if (this.form) {
    options.extraData = options.extraData || {};

    // Let the server know when the IFRAME submission mechanism is used. The
    // server can use this information to wrap the JSON response in a TEXTAREA,
    // as per http://jquery.malsup.com/form/#file-upload.
    options.extraData.ajax_iframe_upload = '1';

    // The triggering element is about to be disabled (see below), but if it
    // contains a value (e.g., a checkbox, textfield, select, etc.), ensure that
    // value is included in the submission. As per above, submissions that use
    // $.ajax() are already serialized prior to the element being disabled, so
    // this is only needed for IFRAME submissions.
    var v = $.fieldValue(this.element);
    if (v !== null) {
      options.extraData[this.element.name] = Drupal.checkPlain(v);
    }
  }

  // Disable the element that received the change to prevent user interface
  // interaction while the Ajax request is in progress. ajax.ajaxing prevents
  // the element from triggering a new request, but does not prevent the user
  // from changing its value.
  $(this.element).addClass('progress-disabled').attr('disabled', true);

  // Insert progressbar or throbber.
  if (this.progress.type == 'bar') {
    var progressBar = new Drupal.progressBar('ajax-progress-' + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  }
  else if (this.progress.type == 'throbber') {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      $('.throbber', this.progress.element).after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  }
};

/**
 * Handler for the form redirection completion.
 */
Drupal.ajax.prototype.success = function (response, status) {
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');

  Drupal.freezeHeight();

  for (var i in response) {
    if (response.hasOwnProperty(i) && response[i]['command'] && this.commands[response[i]['command']]) {
      this.commands[response[i]['command']](this, response[i], status);
    }
  }

  // Reattach behaviors, if they were detached in beforeSerialize(). The
  // attachBehaviors() called on the new content from processing the response
  // commands is not sufficient, because behaviors from the entire form need
  // to be reattached.
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }

  Drupal.unfreezeHeight();

  // Remove any response-specific settings so they don't get used on the next
  // call by mistake.
  this.settings = null;
};

/**
 * Build an effect object which tells us how to apply the effect when adding new HTML.
 */
Drupal.ajax.prototype.getEffect = function (response) {
  var type = response.effect || this.effect;
  var speed = response.speed || this.speed;

  var effect = {};
  if (type == 'none') {
    effect.showEffect = 'show';
    effect.hideEffect = 'hide';
    effect.showSpeed = '';
  }
  else if (type == 'fade') {
    effect.showEffect = 'fadeIn';
    effect.hideEffect = 'fadeOut';
    effect.showSpeed = speed;
  }
  else {
    effect.showEffect = type + 'Toggle';
    effect.hideEffect = type + 'Toggle';
    effect.showSpeed = speed;
  }

  return effect;
};

/**
 * Handler for the form redirection error.
 */
Drupal.ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
  alert(Drupal.ajaxError(xmlhttprequest, uri, customMessage));
  // Remove the progress element.
  if (this.progress.element) {
    $(this.progress.element).remove();
  }
  if (this.progress.object) {
    this.progress.object.stopMonitoring();
  }
  // Undo hide.
  $(this.wrapper).show();
  // Re-enable the element.
  $(this.element).removeClass('progress-disabled').removeAttr('disabled');
  // Reattach behaviors, if they were detached in beforeSerialize().
  if (this.form) {
    var settings = this.settings || Drupal.settings;
    Drupal.attachBehaviors(this.form, settings);
  }
};

/**
 * Provide a series of commands that the server can request the client perform.
 */
Drupal.ajax.prototype.commands = {
  /**
   * Command to insert new content into the DOM.
   */
  insert: function (ajax, response, status) {
    // Get information from the response. If it is not there, default to
    // our presets.
    var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
    var method = response.method || ajax.method;
    var effect = ajax.getEffect(response);

    // We don't know what response.data contains: it might be a string of text
    // without HTML, so don't rely on jQuery correctly iterpreting
    // $(response.data) as new HTML rather than a CSS selector. Also, if
    // response.data contains top-level text nodes, they get lost with either
    // $(response.data) or $('<div></div>').replaceWith(response.data).
    var new_content_wrapped = $('<div></div>').html(response.data);
    var new_content = new_content_wrapped.contents();

    // For legacy reasons, the effects processing code assumes that new_content
    // consists of a single top-level element. Also, it has not been
    // sufficiently tested whether attachBehaviors() can be successfully called
    // with a context object that includes top-level text nodes. However, to
    // give developers full control of the HTML appearing in the page, and to
    // enable Ajax content to be inserted in places where DIV elements are not
    // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
    // content satisfies the requirement of a single top-level element, and
    // only use the container DIV created above when it doesn't. For more
    // information, please see http://drupal.org/node/736066.
    if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
      new_content = new_content_wrapped;
    }

    // If removing content from the wrapper, detach behaviors first.
    switch (method) {
      case 'html':
      case 'replaceWith':
      case 'replaceAll':
      case 'empty':
      case 'remove':
        var settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.detachBehaviors(wrapper, settings);
    }

    // Add the new content to the page.
    wrapper[method](new_content);

    // Immediately hide the new content if we're using any effects.
    if (effect.showEffect != 'show') {
      new_content.hide();
    }

    // Determine which effect to use and what content will receive the
    // effect, then show the new content.
    if ($('.ajax-new-content', new_content).length > 0) {
      $('.ajax-new-content', new_content).hide();
      new_content.show();
      $('.ajax-new-content', new_content)[effect.showEffect](effect.showSpeed);
    }
    else if (effect.showEffect != 'show') {
      new_content[effect.showEffect](effect.showSpeed);
    }

    // Attach all JavaScript behaviors to the new content, if it was successfully
    // added to the page, this if statement allows #ajax['wrapper'] to be
    // optional.
    if (new_content.parents('html').length > 0) {
      // Apply any settings from the returned JSON if available.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(new_content, settings);
    }
  },

  /**
   * Command to remove a chunk from the page.
   */
  remove: function (ajax, response, status) {
    var settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.detachBehaviors($(response.selector), settings);
    $(response.selector).remove();
  },

  /**
   * Command to mark a chunk changed.
   */
  changed: function (ajax, response, status) {
    if (!$(response.selector).hasClass('ajax-changed')) {
      $(response.selector).addClass('ajax-changed');
      if (response.asterisk) {
        $(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ');
      }
    }
  },

  /**
   * Command to provide an alert.
   */
  alert: function (ajax, response, status) {
    alert(response.text, response.title);
  },

  /**
   * Command to provide the jQuery css() function.
   */
  css: function (ajax, response, status) {
    $(response.selector).css(response.argument);
  },

  /**
   * Command to set the settings that will be used for other commands in this response.
   */
  settings: function (ajax, response, status) {
    if (response.merge) {
      $.extend(true, Drupal.settings, response.settings);
    }
    else {
      ajax.settings = response.settings;
    }
  },

  /**
   * Command to attach data using jQuery's data API.
   */
  data: function (ajax, response, status) {
    $(response.selector).data(response.name, response.value);
  },

  /**
   * Command to apply a jQuery method.
   */
  invoke: function (ajax, response, status) {
    var $element = $(response.selector);
    $element[response.method].apply($element, response.arguments);
  },

  /**
   * Command to restripe a table.
   */
  restripe: function (ajax, response, status) {
    // :even and :odd are reversed because jQuery counts from 0 and
    // we count from 1, so we're out of sync.
    // Match immediate children of the parent element to allow nesting.
    $('> tbody > tr:visible, > tr:visible', $(response.selector))
      .removeClass('odd even')
      .filter(':even').addClass('odd').end()
      .filter(':odd').addClass('even');
  },

  /**
   * Command to add css.
   *
   * Uses the proprietary addImport method if available as browsers which
   * support that method ignore @import statements in dynamically added
   * stylesheets.
   */
  add_css: function (ajax, response, status) {
    // Add the styles in the normal way.
    $('head').prepend(response.data);
    // Add imports in the styles using the addImport method if available.
    var match, importMatch = /^@import url\("(.*)"\);$/igm;
    if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
      importMatch.lastIndex = 0;
      while (match = importMatch.exec(response.data)) {
        document.styleSheets[0].addImport(match[1]);
      }
    }
  },

  /**
   * Command to update a form's build ID.
   */
  updateBuildId: function(ajax, response, status) {
    $('input[name="form_build_id"][value="' + response['old'] + '"]').val(response['new']);
  }
};

})(jQuery);
;
(function (D) {
  var beforeSerialize = D.ajax.prototype.beforeSerialize;
  D.ajax.prototype.beforeSerialize = function (element, options) {
    beforeSerialize.call(this, element, options);
    options.data['ajax_page_state[jquery_version]'] = D.settings.ajaxPageState.jquery_version;
  }
})(Drupal);
;