/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);;
/**
 * @file
 * Attaches the behaviors for the Overlay child pages.
 */

(function ($) {

/**
 * Attach the child dialog behavior to new content.
 */
Drupal.behaviors.overlayChild = {
  attach: function (context, settings) {
    // Make sure this behavior is not processed more than once.
    if (this.processed) {
      return;
    }
    this.processed = true;

    // If we cannot reach the parent window, break out of the overlay.
    if (!parent.Drupal || !parent.Drupal.overlay) {
      window.location = window.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }

    var settings = settings.overlayChild || {};

    // If the entire parent window should be refreshed when the overlay is
    // closed, pass that information to the parent window.
    if (settings.refreshPage) {
      parent.Drupal.overlay.refreshPage = true;
    }

    // If a form has been submitted successfully, then the server side script
    // may have decided to tell the parent window to close the popup dialog.
    if (settings.closeOverlay) {
      parent.Drupal.overlay.bindChild(window, true);
      // Use setTimeout to close the child window from a separate thread,
      // because the current one is busy processing Drupal behaviors.
      setTimeout(function () {
        if (typeof settings.redirect == 'string') {
          parent.Drupal.overlay.redirect(settings.redirect);
        }
        else {
          parent.Drupal.overlay.close();
        }
      }, 1);
      return;
    }

    // If one of the regions displaying outside the overlay needs to be
    // reloaded immediately, let the parent window know.
    if (settings.refreshRegions) {
      parent.Drupal.overlay.refreshRegions(settings.refreshRegions);
    }

    // Ok, now we can tell the parent window we're ready.
    parent.Drupal.overlay.bindChild(window);

    // IE8 crashes on certain pages if this isn't called; reason unknown.
    window.scrollTo(window.scrollX, window.scrollY);

    // Attach child related behaviors to the iframe document.
    Drupal.overlayChild.attachBehaviors(context, settings);

    // There are two links within the message that informs people about the
    // overlay and how to disable it. Make sure both links are visible when
    // either one has focus and add a class to the wrapper for styling purposes.
    $('#overlay-disable-message', context)
      .focusin(function () {
        $(this).addClass('overlay-disable-message-focused');
        $('a.element-focusable', this).removeClass('element-invisible');
      })
      .focusout(function () {
        $(this).removeClass('overlay-disable-message-focused');
        $('a.element-focusable', this).addClass('element-invisible');
      });
  }
};

/**
 * Overlay object for child windows.
 */
Drupal.overlayChild = Drupal.overlayChild || {
  behaviors: {}
};

Drupal.overlayChild.prototype = {};

/**
 * Attach child related behaviors to the iframe document.
 */
Drupal.overlayChild.attachBehaviors = function (context, settings) {
  $.each(this.behaviors, function () {
    this(context, settings);
  });
};

/**
 * Capture and handle clicks.
 *
 * Instead of binding a click event handler to every link we bind one to the
 * document and handle events that bubble up. This also allows other scripts
 * to bind their own handlers to links and also to prevent overlay's handling.
 */
Drupal.overlayChild.behaviors.addClickHandler = function (context, settings) {
  $(document).bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(parent.Drupal.overlay, 'eventhandlerOverrideLink'));
};

/**
 * Modify forms depending on their relation to the overlay.
 *
 * By default, forms are assumed to keep the flow in the overlay. Thus their
 * action attribute get a ?render=overlay suffix.
 */
Drupal.overlayChild.behaviors.parseForms = function (context, settings) {
  $('form', context).once('overlay', function () {
    // Obtain the action attribute of the form.
    var action = $(this).attr('action');
    // Keep internal forms in the overlay.
    if (action == undefined || (action.indexOf('http') != 0 && action.indexOf('https') != 0)) {
      action += (action.indexOf('?') > -1 ? '&' : '?') + 'render=overlay';
      $(this).attr('action', action);
    }
    // Submit external forms into a new window.
    else {
      $(this).attr('target', '_new');
    }
  });
};

/**
 * Replace the overlay title with a message while loading another page.
 */
Drupal.overlayChild.behaviors.loading = function (context, settings) {
  var $title;
  var text = Drupal.t('Loading');
  var dots = '';

  $(document).bind('drupalOverlayBeforeLoad.drupal-overlay.drupal-overlay-child-loading', function () {
    $title = $('#overlay-title').text(text);
    var id = setInterval(function () {
      dots = (dots.length > 10) ? '' : dots + '.';
      $title.text(text + dots);
    }, 500);
  });
};

/**
 * Switch active tab immediately.
 */
Drupal.overlayChild.behaviors.tabs = function (context, settings) {
  var $tabsLinks = $('#overlay-tabs > li > a');

  $('#overlay-tabs > li > a').bind('click.drupal-overlay', function () {
    var active_tab = Drupal.t('(active tab)');
    $tabsLinks.parent().siblings().removeClass('active').find('element-invisible:contains(' + active_tab + ')').appendTo(this);
    $(this).parent().addClass('active');
  });
};

/**
 * If the shortcut add/delete button exists, move it to the overlay titlebar.
 */
Drupal.overlayChild.behaviors.shortcutAddLink = function (context, settings) {
  // Remove any existing shortcut button markup from the titlebar.
  $('#overlay-titlebar').find('.add-or-remove-shortcuts').remove();
  // If the shortcut add/delete button exists, move it to the titlebar.
  var $addToShortcuts = $('.add-or-remove-shortcuts');
  if ($addToShortcuts.length) {
    $addToShortcuts.insertAfter('#overlay-title');
  }

  $(document).bind('drupalOverlayBeforeLoad.drupal-overlay.drupal-overlay-child-loading', function () {
    $('#overlay-titlebar').find('.add-or-remove-shortcuts').remove();
  });
};

/**
 * Use displacement from parent window.
 */
Drupal.overlayChild.behaviors.alterTableHeaderOffset = function (context, settings) {
  if (Drupal.settings.tableHeaderOffset) {
    Drupal.overlayChild.prevTableHeaderOffset = Drupal.settings.tableHeaderOffset;
  }
  Drupal.settings.tableHeaderOffset = 'Drupal.overlayChild.tableHeaderOffset';
};

/**
 * Callback for Drupal.settings.tableHeaderOffset.
 */
Drupal.overlayChild.tableHeaderOffset = function () {
  var topOffset = Drupal.overlayChild.prevTableHeaderOffset ? eval(Drupal.overlayChild.prevTableHeaderOffset + '()') : 0;

  return topOffset + parseInt($(document.body).css('marginTop'));
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
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/*!
 * jQuery Form Plugin
 * version: 2.69 (06-APR-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(a){function b(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}a.fn.ajaxSubmit=function(c){function r(){function t(){if(!j.aborted){var c=i.contentWindow?i.contentWindow.document:i.contentDocument?i.contentDocument:i.document;if(!c||c.location.href==e.iframeSrc)if(!m)return;i.detachEvent?i.detachEvent("onload",t):i.removeEventListener("load",t,!1);var d=!0;try{if(m)throw"timeout";var f=e.dataType=="xml"||c.XMLDocument||a.isXMLDoc(c);b("isXml="+f);if(!f&&window.opera&&(c.body==null||c.body.innerHTML=="")&&--s){b("requeing onLoad callback, DOM not available"),setTimeout(t,250);return}j.responseText=c.body?c.body.innerHTML:c.documentElement?c.documentElement.innerHTML:null,j.responseXML=c.XMLDocument?c.XMLDocument:c,j.getResponseHeader=function(a){var b={"content-type":e.dataType};return b[a]};var g=/(json|script)/.test(e.dataType);if(g||e.textarea){var l=c.getElementsByTagName("textarea")[0];if(l)j.responseText=l.value;else if(g){var n=c.getElementsByTagName("pre")[0],o=c.getElementsByTagName("body")[0];n?j.responseText=n.textContent:o&&(j.responseText=o.innerHTML)}}else e.dataType=="xml"&&!j.responseXML&&j.responseText!=null&&(j.responseXML=u(j.responseText));q=w(j,e.dataType,e)}catch(p){b("error caught:",p),d=!1,j.error=p,e.error&&e.error.call(e.context,j,"error",p),k&&a.event.trigger("ajaxError",[j,e,p])}j.aborted&&(b("upload aborted"),d=!1),d&&(e.success&&e.success.call(e.context,q,"success",j),k&&a.event.trigger("ajaxSuccess",[j,e])),k&&a.event.trigger("ajaxComplete",[j,e]),k&&!--a.active&&a.event.trigger("ajaxStop"),e.complete&&e.complete.call(e.context,j,d?"success":"error"),setTimeout(function(){h.removeData("form-plugin-onload"),h.remove(),j.responseXML=null},100)}}function p(){var b=l.attr("target"),c=l.attr("action");d.setAttribute("target",f),d.getAttribute("method")!="POST"&&d.setAttribute("method","POST"),d.getAttribute("action")!=e.url&&d.setAttribute("action",e.url),e.skipEncodingOverride||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),e.timeout&&setTimeout(function(){m=!0,t()},e.timeout);var g=[];try{if(e.extraData)for(var j in e.extraData)g.push(a('<input type="hidden" name="'+j+'" value="'+e.extraData[j]+'" />').appendTo(d)[0]);h.appendTo("body"),i.attachEvent?i.attachEvent("onload",t):i.addEventListener("load",t,!1),d.submit()}finally{d.setAttribute("action",c),b?d.setAttribute("target",b):l.removeAttr("target"),a(g).remove()}}var d=l[0];if(a(":input[name=submit],:input[id=submit]",d).length)alert('Error: Form elements must not have name or id of "submit".');else{var e=a.extend(!0,{},a.ajaxSettings,c);e.context=e.context||e;var f="jqFormIO"+(new Date).getTime(),g="_"+f,h=a('<iframe id="'+f+'" name="'+f+'" src="'+e.iframeSrc+'" />'),i=h[0];h.css({position:"absolute",top:"-1000px",left:"-1000px"});var j={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){b("aborting upload...");var c="aborted";this.aborted=1,h.attr("src",e.iframeSrc),j.error=c,e.error&&e.error.call(e.context,j,"error",c),k&&a.event.trigger("ajaxError",[j,e,c]),e.complete&&e.complete.call(e.context,j,"error")}},k=e.global;k&&!(a.active++)&&a.event.trigger("ajaxStart"),k&&a.event.trigger("ajaxSend",[j,e]);if(e.beforeSend&&e.beforeSend.call(e.context,j,e)===!1){e.global&&a.active--;return}if(j.aborted)return;var m=0,n=d.clk;if(n){var o=n.name;o&&!n.disabled&&(e.extraData=e.extraData||{},e.extraData[o]=n.value,n.type=="image"&&(e.extraData[o+".x"]=d.clk_x,e.extraData[o+".y"]=d.clk_y))}e.forceSync?p():setTimeout(p,10);var q,r,s=50,u=a.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&b.documentElement.nodeName!="parsererror"?b:null},v=a.parseJSON||function(a){return window.eval("("+a+")")},w=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f=c==="xml"||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;f&&g.documentElement.nodeName==="parsererror"&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),typeof g=="string"&&(c==="json"||!c&&e.indexOf("json")>=0?g=v(g):(c==="script"||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g));return g}}}if(!this.length){b("ajaxSubmit: skipping submit process - no element selected");return this}typeof c=="function"&&(c={success:c});var d=this.attr("action"),e=typeof d=="string"?a.trim(d):"";e&&(e=(e.match(/^([^#]+)/)||[])[1]),e=e||window.location.href||"",c=a.extend(!0,{url:e,success:a.ajaxSettings.success,type:this[0].getAttribute("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},c);var f={};this.trigger("form-pre-serialize",[this,c,f]);if(f.veto){b("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(c.beforeSerialize&&c.beforeSerialize(this,c)===!1){b("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var g,h,i=this.formToArray(c.semantic);if(c.data){c.extraData=c.data;for(g in c.data)if(c.data[g]instanceof Array)for(var j in c.data[g])i.push({name:g,value:c.data[g][j]});else h=c.data[g],h=a.isFunction(h)?h():h,i.push({name:g,value:h})}if(c.beforeSubmit&&c.beforeSubmit(i,this,c)===!1){b("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[i,this,c,f]);if(f.veto){b("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var k=a.param(i);c.type.toUpperCase()=="GET"?(c.url+=(c.url.indexOf("?")>=0?"&":"?")+k,c.data=null):c.data=k;var l=this,m=[];c.resetForm&&m.push(function(){l.resetForm()}),c.clearForm&&m.push(function(){l.clearForm()});if(!c.dataType&&c.target){var n=c.success||function(){};m.push(function(b){var d=c.replaceTarget?"replaceWith":"html";a(c.target)[d](b).each(n,arguments)})}else c.success&&m.push(c.success);c.success=function(a,b,d){var e=c.context||c;for(var f=0,g=m.length;f<g;f++)m[f].apply(e,[a,b,d||l,l])};var o=a("input:file",this).length>0,p="multipart/form-data",q=l.attr("enctype")==p||l.attr("encoding")==p;c.iframe!==!1&&(o||c.iframe||q)?c.closeKeepAlive?a.get(c.closeKeepAlive,r):r():a.ajax(c),this.trigger("form-submit-notify",[this,c]);return this},a.fn.ajaxForm=function(c){if(this.length===0){var d={s:this.selector,c:this.context};if(!a.isReady&&d.s){b("DOM not ready, queuing ajaxForm"),a(function(){a(d.s,d.c).ajaxForm(c)});return this}b("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(b){b.isDefaultPrevented()||(b.preventDefault(),a(this).ajaxSubmit(c))}).bind("click.form-plugin",function(b){var c=b.target,d=a(c);if(!d.is(":submit,input:image")){var e=d.closest(":submit");if(e.length==0)return;c=e[0]}var f=this;f.clk=c;if(c.type=="image")if(b.offsetX!=undefined)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if(typeof a.fn.offset=="function"){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)})},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b){var c=[];if(this.length===0)return c;var d=this[0],e=b?d.getElementsByTagName("*"):d.elements;if(!e)return c;var f,g,h,i,j,k,l;for(f=0,k=e.length;f<k;f++){j=e[f],h=j.name;if(!h)continue;if(b&&d.clk&&j.type=="image"){!j.disabled&&d.clk==j&&(c.push({name:h,value:a(j).val()}),c.push({name:h+".x",value:d.clk_x},{name:h+".y",value:d.clk_y}));continue}i=a.fieldValue(j,!0);if(i&&i.constructor==Array)for(g=0,l=i.length;g<l;g++)c.push({name:h,value:i[g]});else i!==null&&typeof i!="undefined"&&c.push({name:h,value:i})}if(!b&&d.clk){var m=a(d.clk),n=m[0];h=n.name,h&&!n.disabled&&n.type=="image"&&(c.push({name:h,value:m.val()}),c.push({name:h+".x",value:d.clk_x},{name:h+".y",value:d.clk_y}))}return c},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];this.each(function(){var d=this.name;if(!!d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;f<g;f++)c.push({name:d,value:e[f]});else e!==null&&typeof e!="undefined"&&c.push({name:this.name,value:e})}});return a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;d<e;d++){var f=this[d],g=a.fieldValue(f,b);if(g===null||typeof g=="undefined"||g.constructor==Array&&!g.length)continue;g.constructor==Array?a.merge(c,g):c.push(g)}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();c===undefined&&(c=!0);if(c&&(!d||b.disabled||e=="reset"||e=="button"||(e=="checkbox"||e=="radio")&&!b.checked||(e=="submit"||e=="image")&&b.form&&b.form.clk!=b||f=="select"&&b.selectedIndex==-1))return null;if(f=="select"){var g=b.selectedIndex;if(g<0)return null;var h=[],i=b.options,j=e=="select-one",k=j?g+1:i.length;for(var l=j?g:0;l<k;l++){var m=i[l];if(m.selected){var n=m.value;n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value);if(j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(){return this.each(function(){a("input,select,textarea",this).clearFields()})},a.fn.clearFields=a.fn.clearInputs=function(){return this.each(function(){var a=this.type,b=this.tagName.toLowerCase();a=="text"||a=="password"||b=="textarea"?this.value="":a=="checkbox"||a=="radio"?this.checked=!1:b=="select"&&(this.selectedIndex=-1)})},a.fn.resetForm=function(){return this.each(function(){(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){a===undefined&&(a=!0);return this.each(function(){this.disabled=!a})},a.fn.selected=function(b){b===undefined&&(b=!0);return this.each(function(){var c=this.type;if(c=="checkbox"||c=="radio")this.checked=b;else if(this.tagName.toLowerCase()=="option"){var d=a(this).parent("select");b&&d[0]&&d[0].type=="select-one"&&d.find("option").selected(!1),this.selected=b}})}})(jQuery);
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i,s=this,n=!1,a=!1;for(e.ui.ddmanager&&!this.options.dropBehaviour&&(a=e.ui.ddmanager.drop(this,t)),this.dropped&&(a=this.dropped,this.dropped=!1),i=this.element[0];i&&(i=i.parentNode);)i===document&&(n=!0);return n||"original"!==this.options.helper?("invalid"===this.options.revert&&!a||"valid"===this.options.revert&&a||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,a)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){s._trigger("stop",t)!==!1&&s._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;if("parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=["document"===n.containment?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"===n.containment?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"===n.containment?0:e(window).scrollLeft())+e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"===n.containment?0:e(window).scrollTop())+(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||n.containment.constructor===Array)n.containment.constructor===Array&&(this.containment=n.containment);else{if(i=e(n.containment),s=i[0],!s)return;t="hidden"!==e(s).css("overflow"),this.containment=[(parseInt(e(s).css("borderLeftWidth"),10)||0)+(parseInt(e(s).css("paddingLeft"),10)||0),(parseInt(e(s).css("borderTopWidth"),10)||0)+(parseInt(e(s).css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e(s).css("borderRightWidth"),10)||0)-(parseInt(e(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e(s).css("borderBottomWidth"),10)||0)-(parseInt(e(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName),l=t.pageX,u=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(u=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(u=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,u=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,g>r-m&&h+m>g&&y>l-m&&u+m>y||g>r-m&&h+m>g&&b>l-m&&u+m>b||v>r-m&&h+m>v&&y>l-m&&u+m>y||v>r-m&&h+m>v&&b>l-m&&u+m>b?("inner"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d):(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(i)?i:function(e){return e.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n,a,o=(e.positionAbs||e.position.absolute).left,r=o+e.helperProportions.width,h=(e.positionAbs||e.position.absolute).top,l=h+e.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,d=i.offset.top,p=d+i.proportions.height;switch(s){case"fit":return o>=u&&c>=r&&h>=d&&p>=l;case"intersect":return o+e.helperProportions.width/2>u&&c>r-e.helperProportions.width/2&&h+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return n=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,a=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(a,d,i.proportions.height)&&t(n,u,i.proportions.width);case"touch":return(h>=d&&p>=h||l>=d&&p>=l||d>h&&l>p)&&(o>=u&&c>=o||r>=u&&c>=r||u>o&&r>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions.height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions={width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight})}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===n}),a.length&&(s=e.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,a.widgetName+"-item")===a?(s=t(this),!1):undefined}),t.data(e.target,a.widgetName+"-item")===a&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=t("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:e.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:e.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(e.pageY-t(document).scrollTop()<o.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<o.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+o.scrollSpeed)),e.pageX-t(document).scrollLeft()<o.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<o.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+o.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u=s+l>r&&h>s+l&&e+c>a&&o>e+c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?u:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,n,a,o=[],r=[],h=this._connectWith();if(h&&e)for(i=h.length-1;i>=0;i--)for(n=t(h[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&r.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(r.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=r.length-1;i>=0;i--)r[i][0].each(function(){o.push(this)});return t(o)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)a=t.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(u.push([t.isFunction(a.options.items)?a.options.items.call(a.element[0],e,{item:this.currentItem}):t(a.options.items,a.element),a]),this.containers.push(a));for(i=u.length-1;i>=0;i--)for(o=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",o),c.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t(e.document[0].createElement(s)).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?n.append("<td colspan='99'>&#160;</td>"):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,c,u,d,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)t.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(u=this.items[a].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[a][l]-c)&&(d=!0,u+=this.items[a][l]),o>Math.abs(u-c)&&(o=Math.abs(u-c),r=this.items[a],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,a=e.pageX,o=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){this.reverting=!1;var i,s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)e||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(i=0;s.length>i;i++)s[i].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);;
/**
 * @file
 * Attaches behaviors for the Contextual module.
 */

(function ($) {

Drupal.contextualLinks = Drupal.contextualLinks || {};

/**
 * Attaches outline behavior for regions associated with contextual links.
 */
Drupal.behaviors.contextualLinks = {
  attach: function (context) {
    $('div.contextual-links-wrapper', context).once('contextual-links', function () {
      var $wrapper = $(this);
      var $region = $wrapper.closest('.contextual-links-region');
      var $links = $wrapper.find('ul.contextual-links');
      var $trigger = $('<a class="contextual-links-trigger" href="#" />').text(Drupal.t('Configure')).click(
        function () {
          $links.stop(true, true).slideToggle(100);
          $wrapper.toggleClass('contextual-links-active');
          return false;
        }
      );
      // Attach hover behavior to trigger and ul.contextual-links.
      $trigger.add($links).hover(
        function () { $region.addClass('contextual-links-region-active'); },
        function () { $region.removeClass('contextual-links-region-active'); }
      );
      // Hide the contextual links when user clicks a link or rolls out of the .contextual-links-region.
      $region.bind('mouseleave click', Drupal.contextualLinks.mouseleave);
      $region.hover(
        function() { $trigger.addClass('contextual-links-trigger-active'); },
        function() { $trigger.removeClass('contextual-links-trigger-active'); }
      );
      // Prepend the trigger.
      $wrapper.prepend($trigger);
    });
  }
};

/**
 * Disables outline for the region contextual links are associated with.
 */
Drupal.contextualLinks.mouseleave = function () {
  $(this)
    .find('.contextual-links-active').removeClass('contextual-links-active')
    .find('ul.contextual-links').hide();
};

})(jQuery);
;
/**
 * Galleria v 1.2.9 2013-01-18
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */(function(a){var b,c=this,d=c.document,e=a(d),f=a(c),g=Array.prototype,h=1.29,i=!0,j=3e4,k=!1,l=navigator.userAgent.toLowerCase(),m=c.location.hash.replace(/#\//,""),n=function(){},o=function(){return!1},p=function(){var a=3,c=d.createElement("div"),e=c.getElementsByTagName("i");do c.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->";while(e[0]);return a>4?a:b}(),q=function(){return{html:d.documentElement,body:d.body,head:d.getElementsByTagName("head")[0],title:d.title}},r=c.parent!==c.self,s="data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image",t=function(){var b=[];return a.each(s.split(" "),function(a,c){b.push(c),/_/.test(c)&&b.push(c.replace(/_/g,""))}),b}(),u=function(b){var c;return typeof b!="object"?b:(a.each(b,function(d,e){/^[a-z]+_/.test(d)&&(c="",a.each(d.split("_"),function(a,b){c+=a>0?b.substr(0,1).toUpperCase()+b.substr(1):b}),b[c]=e,delete b[d])}),b)},v=function(b){return a.inArray(b,t)>-1?Galleria[b.toUpperCase()]:b},w={youtube:{reg:/https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,embed:function(a){return"http://www.youtube.com/embed/"+a},getThumb:function(b,d,e){e=e||n,a.getJSON(c.location.protocol+"//gdata.youtube.com/feeds/api/videos/"+b+"?v=2&alt=json-in-script&callback=?",function(a){try{d(a.entry.media$group.media$thumbnail[0].url)}catch(b){e()}}).error(e)}},vimeo:{reg:/https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,embed:function(a){return"http://player.vimeo.com/video/"+a},getThumb:function(b,c,d){d=d||n,a.getJSON("http://vimeo.com/api/v2/video/"+b+".json?callback=?",function(a){try{c(a[0].thumbnail_medium)}catch(b){d()}}).error(d)}},dailymotion:{reg:/https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,embed:function(a){return"http://www.dailymotion.com/embed/video/"+a},getThumb:function(b,c,d){d=d||n,a.getJSON("https://api.dailymotion.com/video/"+b+"?fields=thumbnail_medium_url&callback=?",function(a){try{c(a.thumbnail_medium_url)}catch(b){d()}}).error(d)}}},x=function(a){var b;for(var c in w){b=a&&a.match(w[c].reg);if(b&&b.length)return{id:b[2],provider:c}}return!1},y={support:function(){var a=q().html;return!r&&(a.requestFullscreen||a.mozRequestFullScreen||a.webkitRequestFullScreen)}(),callback:n,enter:function(a,b,c){this.instance=a,this.callback=b||n,c=c||q().html,c.requestFullscreen?c.requestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullScreen&&c.webkitRequestFullScreen()},exit:function(a){this.callback=a||n,d.exitFullscreen?d.exitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitCancelFullScreen&&d.webkitCancelFullScreen()},instance:null,listen:function(){if(!this.support)return;var a=function(){if(!y.instance)return;var a=y.instance._fullscreen;d.fullscreen||d.mozFullScreen||d.webkitIsFullScreen?a._enter(y.callback):a._exit(y.callback)};d.addEventListener("fullscreenchange",a,!1),d.addEventListener("mozfullscreenchange",a,!1),d.addEventListener("webkitfullscreenchange",a,!1)}},z=[],A=[],B=!1,C=!1,D=[],E=function(b){Galleria.theme=b,a.each(D,function(a,b){b._initialized||b._init.call(b)}),D=[]},F=function(){return{clearTimer:function(b){a.each(Galleria.get(),function(){this.clearTimer(b)})},addTimer:function(b){a.each(Galleria.get(),function(){this.addTimer(b)})},array:function(a){return g.slice.call(a,0)},create:function(a,b){b=b||"div";var c=d.createElement(b);return c.className=a,c},removeFromArray:function(b,c){return a.each(b,function(a,d){if(d==c)return b.splice(a,1),!1}),b},getScriptPath:function(b){b=b||a("script:last").attr("src");var c=b.split("/");return c.length==1?"":(c.pop(),c.join("/")+"/")},animate:function(){var b=function(a){var b="transition WebkitTransition MozTransition OTransition".split(" "),d;if(c.opera)return!1;for(d=0;b[d];d++)if(typeof a[b[d]]!="undefined")return b[d];return!1}((d.body||d.documentElement).style),e={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[b],f={_default:[.25,.1,.25,1],galleria:[.645,.045,.355,1],galleriaIn:[.55,.085,.68,.53],galleriaOut:[.25,.46,.45,.94],ease:[.25,0,.25,1],linear:[.25,.25,.75,.75],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},g=function(b,c,d){var e={};d=d||"transition",a.each("webkit moz ms o".split(" "),function(){e["-"+this+"-"+d]=c}),b.css(e)},h=function(a){g(a,"none","transition"),Galleria.WEBKIT&&Galleria.TOUCH&&(g(a,"translate3d(0,0,0)","transform"),a.data("revert")&&(a.css(a.data("revert")),a.data("revert",null)))},i,j,k,l,m,o,p;return function(d,q,r){r=a.extend({duration:400,complete:n,stop:!1},r),d=a(d);if(!r.duration){d.css(q),r.complete.call(d[0]);return}if(!b){d.animate(q,r);return}r.stop&&(d.unbind(e),h(d)),i=!1,a.each(q,function(a,b){p=d.css(a),F.parseValue(p)!=F.parseValue(b)&&(i=!0),d.css(a,p)});if(!i){c.setTimeout(function(){r.complete.call(d[0])},r.duration);return}j=[],k=r.easing in f?f[r.easing]:f._default,l=" "+r.duration+"ms"+" cubic-bezier("+k.join(",")+")",c.setTimeout(function(b,c,d,e){return function(){b.one(c,function(a){return function(){h(a),r.complete.call(a[0])}}(b));if(Galleria.WEBKIT&&Galleria.TOUCH){m={},o=[0,0,0],a.each(["left","top"],function(a,c){c in d&&(o[a]=F.parseValue(d[c])-F.parseValue(b.css(c))+"px",m[c]=d[c],delete d[c])});if(o[0]||o[1])b.data("revert",m),j.push("-webkit-transform"+e),g(b,"translate3d("+o.join(",")+")","transform")}a.each(d,function(a,b){j.push(a+e)}),g(b,j.join(",")),b.css(d)}}(d,e,q,l),2)}}(),removeAlpha:function(a){if(p<9&&a){var b=a.style,c=a.currentStyle,d=c&&c.filter||b.filter||"";/alpha/.test(d)&&(b.filter=d.replace(/alpha\([^)]*\)/i,""))}},forceStyles:function(b,c){b=a(b),b.attr("style")&&b.data("styles",b.attr("style")).removeAttr("style"),b.css(c)},revertStyles:function(){a.each(F.array(arguments),function(b,c){c=a(c),c.removeAttr("style"),c.attr("style",""),c.data("styles")&&c.attr("style",c.data("styles")).data("styles",null)})},moveOut:function(a){F.forceStyles(a,{position:"absolute",left:-1e4})},moveIn:function(){F.revertStyles.apply(F,F.array(arguments))},elem:function(b){return b instanceof a?{$:b,dom:b[0]}:{$:a(b),dom:b}},hide:function(a,b,c){c=c||n;var d=F.elem(a),e=d.$;a=d.dom,e.data("opacity")||e.data("opacity",e.css("opacity"));var f={opacity:0};if(b){var g=p<9&&a?function(){F.removeAlpha(a),a.style.visibility="hidden",c.call(a)}:c;F.animate(a,f,{duration:b,complete:g,stop:!0})}else p<9&&a?(F.removeAlpha(a),a.style.visibility="hidden"):e.css(f)},show:function(a,b,c){c=c||n;var d=F.elem(a),e=d.$;a=d.dom;var f=parseFloat(e.data("opacity"))||1,g={opacity:f};if(b){p<9&&(e.css("opacity",0),a.style.visibility="visible");var h=p<9&&a?function(){g.opacity==1&&F.removeAlpha(a),c.call(a)}:c;F.animate(a,g,{duration:b,complete:h,stop:!0})}else p<9&&g.opacity==1&&a?(F.removeAlpha(a),a.style.visibility="visible"):e.css(g)},optimizeTouch:function(){var b,c,d,e,f={},g=function(b){b.preventDefault(),f=a.extend({},b,!0)},h=function(){this.evt=f},i=function(){this.handler.call(b,this.evt)};return function(f){a(f).bind("touchend",function(f){b=f.target,e=!0;while(b.parentNode&&b!=f.currentTarget&&e)c=a(b).data("events"),d=a(b).data("fakes"),c&&"click"in c?(e=!1,f.preventDefault(),a(b).click(g).click(),c.click.pop(),a.each(c.click,h),a(b).data("fakes",c.click),delete c.click):d&&(e=!1,f.preventDefault(),a.each(d,i)),b=b.parentNode})}}(),wait:function(b){b=a.extend({until:o,success:n,error:function(){Galleria.raise("Could not complete wait function.")},timeout:3e3},b);var d=F.timestamp(),e,f,g=function(){f=F.timestamp(),e=f-d;if(b.until(e))return b.success(),!1;if(typeof b.timeout=="number"&&f>=d+b.timeout)return b.error(),!1;c.setTimeout(g,10)};c.setTimeout(g,10)},toggleQuality:function(a,b){if(p!==7&&p!==8||!a||a.nodeName.toUpperCase()!="IMG")return;typeof b=="undefined"&&(b=a.style.msInterpolationMode==="nearest-neighbor"),a.style.msInterpolationMode=b?"bicubic":"nearest-neighbor"},insertStyleTag:function(b,c){if(c&&a("#"+c).length)return;var e=d.createElement("style");c&&(e.id=c),q().head.appendChild(e);if(e.styleSheet)e.styleSheet.cssText=b;else{var f=d.createTextNode(b);e.appendChild(f)}},loadScript:function(b,c){var d=!1,e=a("<script>").attr({src:b,async:!0}).get(0);e.onload=e.onreadystatechange=function(){!d&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(d=!0,e.onload=e.onreadystatechange=null,typeof c=="function"&&c.call(this,this))},q().head.appendChild(e)},parseValue:function(a){if(typeof a=="number")return a;if(typeof a=="string"){var b=a.match(/\-?\d|\./g);return b&&b.constructor===Array?b.join("")*1:0}return 0},timestamp:function(){return(new Date).getTime()},loadCSS:function(c,e,f){var g,h;a("link[rel=stylesheet]").each(function(){if((new RegExp(c)).test(this.href))return g=this,!1}),typeof e=="function"&&(f=e,e=b),f=f||n;if(g)return f.call(g,g),g;h=d.styleSheets.length;if(a("#"+e).length)a("#"+e).attr("href",c),h--;else{g=a("<link>").attr({rel:"stylesheet",href:c,id:e}).get(0);var i=a('link[rel="stylesheet"], style');i.length?i.get(0).parentNode.insertBefore(g,i[0]):q().head.appendChild(g);if(p&&h>=31){Galleria.raise("You have reached the browser stylesheet limit (31)",!0);return}}if(typeof f=="function"){var j=a("<s>").attr("id","galleria-loader").hide().appendTo(q().body);F.wait({until:function(){return j.height()==1},success:function(){j.remove(),f.call(g,g)},error:function(){j.remove(),Galleria.raise("Theme CSS could not load after 20 sec. "+(Galleria.QUIRK?"Your browser is in Quirks Mode, please add a correct doctype.":"Please download the latest theme at http://galleria.io/customer/."),!0)},timeout:5e3})}return g}}}(),G=function(){var b=function(b,c,d,e){var f=this.getOptions("easing"),g=this.getStageWidth(),h={left:g*(b.rewind?-1:1)},i={left:0};d?(h.opacity=0,i.opacity=1):h.opacity=1,a(b.next).css(h),F.animate(b.next,i,{duration:b.speed,complete:function(a){return function(){c(),a.css({left:0})}}(a(b.next).add(b.prev)),queue:!1,easing:f}),e&&(b.rewind=!b.rewind),b.prev&&(h={left:0},i={left:g*(b.rewind?1:-1)},d&&(h.opacity=1,i.opacity=0),a(b.prev).css(h),F.animate(b.prev,i,{duration:b.speed,queue:!1,easing:f,complete:function(){a(this).css("opacity",0)}}))};return{active:!1,init:function(a,b,c){G.effects.hasOwnProperty(a)&&G.effects[a].call(this,b,c)},effects:{fade:function(b,c){a(b.next).css({opacity:0,left:0}),F.animate(b.next,{opacity:1},{duration:b.speed,complete:c}),b.prev&&(a(b.prev).css("opacity",1).show(),F.animate(b.prev,{opacity:0},{duration:b.speed}))},flash:function(b,c){a(b.next).css({opacity:0,left:0}),b.prev?F.animate(b.prev,{opacity:0},{duration:b.speed/2,complete:function(){F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})}}):F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})},pulse:function(b,c){b.prev&&a(b.prev).hide(),a(b.next).css({opacity:0,left:0}).show(),F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})},slide:function(a,c){b.apply(this,F.array(arguments))},fadeslide:function(a,c){b.apply(this,F.array(arguments).concat([!0]))},doorslide:function(a,c){b.apply(this,F.array(arguments).concat([!1,!0]))}}}}();y.listen(),Galleria=function(){var g=this;this._options={},this._playing=!1,this._playtime=5e3,this._active=null,this._queue={length:0},this._data=[],this._dom={},this._thumbnails=[],this._layers=[],this._initialized=!1,this._firstrun=!1,this._stageWidth=0,this._stageHeight=0,this._target=b,this._binds=[],this._id=parseInt(Math.random()*1e4,10);var h="container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip",i="current total";a.each(h.split(" "),function(a,b){g._dom[b]=F.create("galleria-"+b)}),a.each(i.split(" "),function(a,b){g._dom[b]=F.create("galleria-"+b,"span")});var j=this._keyboard={keys:{UP:38,DOWN:40,LEFT:37,RIGHT:39,RETURN:13,ESCAPE:27,BACKSPACE:8,SPACE:32},map:{},bound:!1,press:function(a){var b=a.keyCode||a.which;b in j.map&&typeof j.map[b]=="function"&&j.map[b].call(g,a)},attach:function(a){var b,c;for(b in a)a.hasOwnProperty(b)&&(c=b.toUpperCase(),c in j.keys?j.map[j.keys[c]]=a[b]:j.map[c]=a[b]);j.bound||(j.bound=!0,e.bind("keydown",j.press))},detach:function(){j.bound=!1,j.map={},e.unbind("keydown",j.press)}},k=this._controls={0:b,1:b,active:0,swap:function(){k.active=k.active?0:1},getActive:function(){return k[k.active]},getNext:function(){return k[1-k.active]}},l=this._carousel={next:g.$("thumb-nav-right"),prev:g.$("thumb-nav-left"),width:0,current:0,max:0,hooks:[],update:function(){var b=0,c=0,d=[0];a.each(g._thumbnails,function(e,f){f.ready&&(b+=f.outerWidth||a(f.container).outerWidth(!0),d[e+1]=b,c=Math.max(c,f.outerHeight||a(f.container).outerHeight(!0)))}),g.$("thumbnails").css({width:b,height:c}),l.max=b,l.hooks=d,l.width=g.$("thumbnails-list").width(),l.setClasses(),g.$("thumbnails-container").toggleClass("galleria-carousel",b>l.width),l.width=g.$("thumbnails-list").width()},bindControls:function(){var a;l.next.bind("click",function(b){b.preventDefault();if(g._options.carouselSteps==="auto"){for(a=l.current;a<l.hooks.length;a++)if(l.hooks[a]-l.hooks[l.current]>l.width){l.set(a-2);break}}else l.set(l.current+g._options.carouselSteps)}),l.prev.bind("click",function(b){b.preventDefault();if(g._options.carouselSteps==="auto")for(a=l.current;a>=0;a--){if(l.hooks[l.current]-l.hooks[a]>l.width){l.set(a+2);break}if(a===0){l.set(0);break}}else l.set(l.current-g._options.carouselSteps)})},set:function(a){a=Math.max(a,0);while(l.hooks[a-1]+l.width>=l.max&&a>=0)a--;l.current=a,l.animate()},getLast:function(a){return(a||l.current)-1},follow:function(a){if(a===0||a===l.hooks.length-2){l.set(a);return}var b=l.current;while(l.hooks[b]-l.hooks[l.current]<l.width&&b<=l.hooks.length)b++;a-1<l.current?l.set(a-1):a+2>b&&l.set(a-b+l.current+2)},setClasses:function(){l.prev.toggleClass("disabled",!l.current),l.next.toggleClass("disabled",l.hooks[l.current]+l.width>=l.max)},animate:function(a){l.setClasses();var b=l.hooks[l.current]*-1;if(isNaN(b))return;F.animate(g.get("thumbnails"),{left:b},{duration:g._options.carouselSpeed,easing:g._options.easing,queue:!1})}},m=this._tooltip={initialized:!1,open:!1,timer:"tooltip"+g._id,swapTimer:"swap"+g._id,init:function(){m.initialized=!0;var a=".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";F.insertStyleTag(a,"galleria-tooltip"),g.$("tooltip").css({opacity:.8,visibility:"visible",display:"none"})},move:function(a){var b=g.getMousePosition(a).x,c=g.getMousePosition(a).y,d=g.$("tooltip"),e=b,f=c,h=d.outerHeight(!0)+1,i=d.outerWidth(!0),j=h+15,k=g.$("container").width()-i-2,l=g.$("container").height()-h-2;!isNaN(e)&&!isNaN(f)&&(e+=10,f-=h+8,e=Math.max(0,Math.min(k,e)),f=Math.max(0,Math.min(l,f)),c<j&&(f=j),d.css({left:e,top:f}))},bind:function(b,c){if(Galleria.TOUCH)return;m.initialized||m.init();var d=function(){g.$("container").unbind("mousemove",m.move),g.clearTimer(m.timer),g.$("tooltip").stop().animate({opacity:0},200,function(){g.$("tooltip").hide(),g.addTimer(m.swapTimer,function(){m.open=!1},1e3)})},e=function(b,c){m.define(b,c),a(b).hover(function(){g.clearTimer(m.swapTimer),g.$("container").unbind("mousemove",m.move).bind("mousemove",m.move).trigger("mousemove"),m.show(b),g.addTimer(m.timer,function(){g.$("tooltip").stop().show().animate({opacity:1}),m.open=!0},m.open?0:500)},d).click(d)};typeof c=="string"?e(b in g._dom?g.get(b):b,c):a.each(b,function(a,b){e(g.get(a),b)})},show:function(b){b=a(b in g._dom?g.get(b):b);var d=b.data("tt"),e=function(a){c.setTimeout(function(a){return function(){m.move(a)}}(a),10),b.unbind("mouseup",e)};d=typeof d=="function"?d():d;if(!d)return;g.$("tooltip").html(d.replace(/\s/,"&#160;")),b.bind("mouseup",e)},define:function(b,c){if(typeof c!="function"){var d=c;c=function(){return d}}b=a(b in g._dom?g.get(b):b).data("tt",c),m.show(b)}},n=this._fullscreen={scrolled:0,crop:b,active:!1,keymap:g._keyboard.map,parseCallback:function(b,c){return G.active?function(){typeof b=="function"&&b.call(g);var d=g._controls.getActive(),e=g._controls.getNext();g._scaleImage(e),g._scaleImage(d),c&&g._options.trueFullscreen&&a(d.container).add(e.container).trigger("transitionend")}:b},enter:function(a){a=n.parseCallback(a,!0),g._options.trueFullscreen&&y.support?(n.active=!0,F.forceStyles(g.get("container"),{width:"100%",height:"100%"}),g.rescale(),Galleria.MAC?Galleria.WEBKIT?(g.$("container").css("opacity",0).addClass("fullscreen"),c.setTimeout(function(){n.scale(),g.$("container").css("opacity",1)},50)):(g.$("stage").css("opacity",0),c.setTimeout(function(){n.scale(),g.$("stage").css("opacity",1)},4)):g.$("container").addClass("fullscreen"),f.resize(n.scale),y.enter(g,a,g.get("container"))):(n.scrolled=f.scrollTop(),c.scrollTo(0,0),n._enter(a))},_enter:function(e){n.active=!0,r&&(n.iframe=function(){var b,e=d.referrer,f=d.createElement("a"),g=c.location;return f.href=e,f.protocol!=g.protocol||f.hostname!=g.hostname||f.port!=g.port?(Galleria.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."),!1):(n.pd=c.parent.document,a(n.pd).find("iframe").each(function(){var a=this.contentDocument||this.contentWindow.document;if(a===d)return b=this,!1}),b)}()),F.hide(g.getActiveImage()),r&&n.iframe&&(n.iframe.scrolled=a(c.parent).scrollTop(),c.parent.scrollTo(0,0));var h=g.getData(),i=g._options,j=!g._options.trueFullscreen||!y.support,k={height:"100%",overflow:"hidden",margin:0,padding:0};j&&(g.$("container").addClass("fullscreen"),F.forceStyles(g.get("container"),{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e4}),F.forceStyles(q().html,k),F.forceStyles(q().body,k)),r&&n.iframe&&(F.forceStyles(n.pd.documentElement,k),F.forceStyles(n.pd.body,k),F.forceStyles(n.iframe,a.extend(k,{width:"100%",height:"100%",top:0,left:0,position:"fixed",zIndex:1e4,border:"none"}))),n.keymap=a.extend({},g._keyboard.map),g.attachKeyboard({escape:g.exitFullscreen,right:g.next,left:g.prev}),n.crop=i.imageCrop,i.fullscreenCrop!=b&&(i.imageCrop=i.fullscreenCrop);if(h&&h.big&&h.image!==h.big){var l=new Galleria.Picture,m=l.isCached(h.big),o=g.getIndex(),p=g._thumbnails[o];g.trigger({type:Galleria.LOADSTART,cached:m,rewind:!1,index:o,imageTarget:g.getActiveImage(),thumbTarget:p,galleriaData:h}),l.load(h.big,function(b){g._scaleImage(b,{complete:function(b){g.trigger({type:Galleria.LOADFINISH,cached:m,index:o,rewind:!1,imageTarget:b.image,thumbTarget:p});var c=g._controls.getActive().image;c&&a(c).width(b.image.width).height(b.image.height).attr("style",a(b.image).attr("style")).attr("src",b.image.src)}})})}g.rescale(function(){g.addTimer(!1,function(){j&&F.show(g.getActiveImage()),typeof e=="function"&&e.call(g)},100),g.trigger(Galleria.FULLSCREEN_ENTER)}),j?f.resize(n.scale):F.show(g.getActiveImage())},scale:function(){g.rescale()},exit:function(a){a=n.parseCallback(a),g._options.trueFullscreen&&y.support?y.exit(a):n._exit(a)},_exit:function(a){n.active=!1;var b=!g._options.trueFullscreen||!y.support;g.$("container").removeClass("fullscreen"),b&&(F.hide(g.getActiveImage()),F.revertStyles(g.get("container"),q().html,q().body),c.scrollTo(0,n.scrolled)),r&&n.iframe&&(F.revertStyles(n.pd.documentElement,n.pd.body,n.iframe),n.iframe.scrolled&&c.parent.scrollTo(0,n.iframe.scrolled)),g.detachKeyboard(),g.attachKeyboard(n.keymap),g._options.imageCrop=n.crop;var d=g.getData().big,e=g._controls.getActive().image;!g.getData().iframe&&e&&d&&d==e.src&&c.setTimeout(function(a){return function(){e.src=a}}(g.getData().image),1),g.rescale(function(){g.addTimer(!1,function(){b&&F.show(g.getActiveImage()),typeof a=="function"&&a.call(g),f.trigger("resize")},50),g.trigger(Galleria.FULLSCREEN_EXIT)}),f.unbind("resize",n.scale)}},o=this._idle={trunk:[],bound:!1,active:!1,add:function(b,c,d,e){if(!b)return;o.bound||o.addEvent(),b=a(b),typeof d=="boolean"&&(e=d,d={}),d=d||{};var f={},g;for(g in c)c.hasOwnProperty(g)&&(f[g]=b.css(g));b.data("idle",{from:a.extend(f,d),to:c,complete:!0,busy:!1}),e?b.css(c):o.addTimer(),o.trunk.push(b)},remove:function(b){b=a(b),a.each(o.trunk,function(a,c){c&&c.length&&!c.not(b).length&&(b.css(b.data("idle").from),o.trunk.splice(a,1))}),o.trunk.length||(o.removeEvent(),g.clearTimer(o.timer))},addEvent:function(){o.bound=!0,g.$("container").bind("mousemove click",o.showAll),g._options.idleMode=="hover"&&g.$("container").bind("mouseleave",o.hide)},removeEvent:function(){o.bound=!1,g.$("container").bind("mousemove click",o.showAll),g._options.idleMode=="hover"&&g.$("container").unbind("mouseleave",o.hide)},addTimer:function(){if(g._options.idleMode=="hover")return;g.addTimer("idle",function(){o.hide()},g._options.idleTime)},hide:function(){if(!g._options.idleMode||g.getIndex()===!1||g.getData().iframe)return;g.trigger(Galleria.IDLE_ENTER);var b=o.trunk.length;a.each(o.trunk,function(a,c){var d=c.data("idle");if(!d)return;c.data("idle").complete=!1,F.animate(c,d.to,{duration:g._options.idleSpeed,complete:function(){a==b-1&&(o.active=!1)}})})},showAll:function(){g.clearTimer("idle"),a.each(o.trunk,function(a,b){o.show(b)})},show:function(b){var c=b.data("idle");if(!o.active||!c.busy&&!c.complete)c.busy=!0,g.trigger(Galleria.IDLE_EXIT),g.clearTimer("idle"),F.animate(b,c.from,{duration:g._options.idleSpeed/2,complete:function(){o.active=!0,a(b).data("idle").busy=!1,a(b).data("idle").complete=!0}});o.addTimer()}},s=this._lightbox={width:0,height:0,initialized:!1,active:null,image:null,elems:{},keymap:!1,init:function(){g.trigger(Galleria.LIGHTBOX_OPEN);if(s.initialized)return;s.initialized=!0;var b="overlay box content shadow title info close prevholder prev nextholder next counter image",c={},d=g._options,e="",f="position:absolute;",h="lightbox-",i={overlay:"position:fixed;display:none;opacity:"+d.overlayOpacity+";filter:alpha(opacity="+d.overlayOpacity*100+");top:0;left:0;width:100%;height:100%;background:"+d.overlayBackground+";z-index:99990",box:"position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",shadow:f+"background:#000;width:100%;height:100%;",content:f+"background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",info:f+"bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",close:f+"top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",image:f+"top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",prevholder:f+"width:50%;top:0;bottom:40px;cursor:pointer;",nextholder:f+"width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",prev:f+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",next:f+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",title:"float:left",counter:"float:right;margin-left:8px;"},j=function(b){return b.hover(function(){a(this).css("color","#bbb")},function(){a(this).css("color","#444")})},k={};p&&p>7&&(i.nextholder+="background:#000;filter:alpha(opacity=0);",i.prevholder+="background:#000;filter:alpha(opacity=0);"),a.each(i,function(a,b){e+=".galleria-"+h+a+"{"+b+"}"}),e+=".galleria-"+h+"box.iframe .galleria-"+h+"prevholder,"+".galleria-"+h+"box.iframe .galleria-"+h+"nextholder{"+"width:100px;height:100px;top:50%;margin-top:-70px}",F.insertStyleTag(e,"galleria-lightbox"),a.each(b.split(" "),function(a,b){g.addElement("lightbox-"+b),c[b]=s.elems[b]=g.get("lightbox-"+b)}),s.image=new Galleria.Picture,a.each({box:"shadow content close prevholder nextholder",info:"title counter",content:"info image",prevholder:"prev",nextholder:"next"},function(b,c){var d=[];a.each(c.split(" "),function(a,b){d.push(h+b)}),k[h+b]=d}),g.append(k),a(c.image).append(s.image.container),a(q().body).append(c.overlay,c.box),F.optimizeTouch(c.box),j(a(c.close).bind("click",s.hide).html("&#215;")),a.each(["Prev","Next"],function(b,d){var e=a(c[d.toLowerCase()]).html(/v/.test(d)?"&#8249;&#160;":"&#160;&#8250;"),f=a(c[d.toLowerCase()+"holder"]);f.bind("click",function(){s["show"+d]()});if(p<8||Galleria.TOUCH){e.show();return}f.hover(function(){e.show()},function(a){e.stop().fadeOut(200)})}),a(c.overlay).bind("click",s.hide),Galleria.IPAD&&(g._options.lightboxTransitionSpeed=0)},rescale:function(b){var c=Math.min(f.width()-40,s.width),d=Math.min(f.height()-60,s.height),e=Math.min(c/s.width,d/s.height),h=Math.round(s.width*e)+40,i=Math.round(s.height*e)+60,j={width:h,height:i,"margin-top":Math.ceil(i/2)*-1,"margin-left":Math.ceil(h/2)*-1};b?a(s.elems.box).css(j):a(s.elems.box).animate(j,{duration:g._options.lightboxTransitionSpeed,easing:g._options.easing,complete:function(){var b=s.image,c=g._options.lightboxFadeSpeed;g.trigger({type:Galleria.LIGHTBOX_IMAGE,imageTarget:b.image}),a(b.container).show(),a(b.image).animate({opacity:1},c),F.show(s.elems.info,c)}})},hide:function(){s.image.image=null,f.unbind("resize",s.rescale),a(s.elems.box).hide(),F.hide(s.elems.info),g.detachKeyboard(),g.attachKeyboard(s.keymap),s.keymap=!1,F.hide(s.elems.overlay,200,function(){a(this).hide().css("opacity",g._options.overlayOpacity),g.trigger(Galleria.LIGHTBOX_CLOSE)})},showNext:function(){s.show(g.getNext(s.active))},showPrev:function(){s.show(g.getPrev(s.active))},show:function(b){s.active=b=typeof b=="number"?b:g.getIndex()||0,s.initialized||s.init(),s.keymap||(s.keymap=a.extend({},g._keyboard.map),g.attachKeyboard({escape:s.hide,right:s.showNext,left:s.showPrev})),f.unbind("resize",s.rescale);var d=g.getData(b),e=g.getDataLength(),h=g.getNext(b),i,j,k;F.hide(s.elems.info);try{for(k=g._options.preload;k>0;k--)j=new Galleria.Picture,i=g.getData(h),j.preload("big"in i?i.big:i.image),h=g.getNext(h)}catch(l){}s.image.isIframe=!!d.iframe,a(s.elems.box).toggleClass("iframe",!!d.iframe),s.image.load(d.iframe||d.big||d.image,function(h){if(h.isIframe){var i=a(c).width(),j=a(c).height();if(g._options.maxVideoSize){var k=Math.min(g._options.maxVideoSize/i,g._options.maxVideoSize/j);k<1&&(i*=k,j*=k)}s.width=i,s.height=j}else s.width=h.original.width,s.height=h.original.height;a(h.image).css({width:h.isIframe?"100%":"100.1%",height:h.isIframe?"100%":"100.1%",top:0,zIndex:99998,opacity:0,visibility:"visible"}),s.elems.title.innerHTML=d.title||"",s.elems.counter.innerHTML=b+1+" / "+e,f.resize(s.rescale),s.rescale()}),a(s.elems.overlay).show().css("visibility","visible"),a(s.elems.box).show()}},t=this._timer={trunk:{},add:function(a,b,d,e){a=a||(new Date).getTime(),e=e||!1,this.clear(a);if(e){var f=b;b=function(){f(),t.add(a,b,d)}}this.trunk[a]=c.setTimeout(b,d)},clear:function(a){var b=function(a){c.clearTimeout(this.trunk[a]),delete this.trunk[a]},d;if(!!a&&a in this.trunk)b.call(this,a);else if(typeof a=="undefined")for(d in this.trunk)this.trunk.hasOwnProperty(d)&&b.call(this,d)}};return this},Galleria.prototype={constructor:Galleria,init:function(c,d){var e=this;d=u(d),this._original={target:c,options:d,data:null},this._target=this._dom.target=c.nodeName?c:a(c).get(0),this._original.html=this._target.innerHTML,A.push(this);if(!this._target){Galleria.raise("Target not found",!0);return}return this._options={autoplay:!1,carousel:!0,carouselFollow:!0,carouselSpeed:400,carouselSteps:"auto",clicknext:!1,dailymotion:{foreground:"%23EEEEEE",highlight:"%235BCEC5",background:"%23222222",logo:0,hideInfos:1},dataConfig:function(a){return{}},dataSelector:"img",dataSort:!1,dataSource:this._target,debug:b,dummy:b,easing:"galleria",extend:function(a){},fullscreenCrop:b,fullscreenDoubleTap:!0,fullscreenTransition:b,height:0,idleMode:!0,idleTime:3e3,idleSpeed:200,imageCrop:!1,imageMargin:0,imagePan:!1,imagePanSmoothness:12,imagePosition:"50%",imageTimeout:b,initialTransition:b,keepSource:!1,layerFollow:!0,lightbox:!1,lightboxFadeSpeed:200,lightboxTransitionSpeed:200,linkSourceImages:!0,maxScaleRatio:b,maxVideoSize:b,minScaleRatio:b,overlayOpacity:.85,overlayBackground:"#0b0b0b",pauseOnInteraction:!0,popupLinks:!1,preload:2,queue:!0,responsive:!0,show:0,showInfo:!0,showCounter:!0,showImagenav:!0,swipe:!0,thumbCrop:!0,thumbEventType:"click",thumbFit:!0,thumbMargin:0,thumbQuality:"auto",thumbDisplayOrder:!0,thumbnails:!0,touchTransition:b,transition:"fade",transitionInitial:b,transitionSpeed:400,trueFullscreen:!0,useCanvas:!1,vimeo:{title:0,byline:0,portrait:0,color:"aaaaaa"},wait:5e3,width:"auto",youtube:{modestbranding:1,autohide:1,color:"white",hd:1,rel:0,showinfo:0}},this._options.initialTransition=this._options.initialTransition||this._options.transitionInitial,d&&d.debug===!1&&(i=!1),d&&typeof d.imageTimeout=="number"&&(j=d.imageTimeout),d&&typeof d.dummy=="string"&&(k=d.dummy),a(this._target).children().hide(),Galleria.QUIRK&&Galleria.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype."),typeof Galleria.theme=="object"?this._init():D.push(this),this},_init:function(){var b=this,e=this._options;if(this._initialized)return Galleria.raise("Init failed: Gallery instance already initialized."),this;this._initialized=!0;if(!Galleria.theme)return Galleria.raise("Init failed: No theme found.",!0),this;a.extend(!0,e,Galleria.theme.defaults,this._original.options,Galleria.configure.options),function(a){if(!("getContext"in a)){a=null;return}C=C||{elem:a,context:a.getContext("2d"),cache:{},length:0}}(d.createElement("canvas")),this.bind(Galleria.DATA,function(){this._original.data=this._data,this.get("total").innerHTML=this.getDataLength();var a=this.$("container");b._options.height<2&&(b._userRatio=b._ratio=b._options.height);var d={width:0,height:0},e=function(){return b.$("stage").height()};F.wait({until:function(){return d=b._getWH(),a.width(d.width).height(d.height),e()&&d.width&&d.height>50},success:function(){b._width=d.width,b._height=d.height,b._ratio=b._ratio||d.height/d.width,Galleria.WEBKIT?c.setTimeout(function(){b._run()},1):b._run()},error:function(){e()?Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:"+d.width+"px, height: "+d.height+"px.",!0):Galleria.raise("Could not extract a stage height from the CSS. Traced height: "+e()+"px.",!0)},timeout:typeof this._options.wait=="number"?this._options.wait:!1})}),this.append({"info-text":["info-title","info-description"],info:["info-text"],"image-nav":["image-nav-right","image-nav-left"],stage:["images","loader","counter","image-nav"],"thumbnails-list":["thumbnails"],"thumbnails-container":["thumb-nav-left","thumbnails-list","thumb-nav-right"],container:["stage","thumbnails-container","info","tooltip"]}),F.hide(this.$("counter").append(this.get("current"),d.createTextNode(" / "),this.get("total"))),this.setCounter("&#8211;"),F.hide(b.get("tooltip")),this.$("container").addClass(Galleria.TOUCH?"touch":"notouch"),a.each(new Array(2),function(c){var d=new Galleria.Picture;a(d.container).css({position:"absolute",top:0,left:0}).prepend(b._layers[c]=a(F.create("galleria-layer")).css({position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2})[0]),b.$("images").append(d.container),b._controls[c]=d}),this.$("images").css({position:"relative",top:0,left:0,width:"100%",height:"100%"}),this.$("thumbnails, thumbnails-list").css({overflow:"hidden",position:"relative"}),this.$("image-nav-right, image-nav-left").bind("click",function(a){e.clicknext&&a.stopPropagation(),e.pauseOnInteraction&&b.pause();var c=/right/.test(this.className)?"next":"prev";b[c]()}),a.each(["info","counter","image-nav"],function(a,c){e["show"+c.substr(0,1).toUpperCase()+c.substr(1).replace(/-/,"")]===!1&&F.moveOut(b.get(c.toLowerCase()))}),this.load(),!e.keepSource&&!p&&(this._target.innerHTML=""),this.get("errors")&&this.appendChild("target","errors"),this.appendChild("target","container");if(e.carousel){var g=0,h=e.show;this.bind(Galleria.THUMBNAIL,function(){this.updateCarousel(),++g==this.getDataLength()&&typeof h=="number"&&h>0&&this._carousel.follow(h)})}return e.responsive&&f.bind("resize",function(){b.isFullscreen()||b.resize()}),e.swipe&&(function(a){var c=[0,0],d=[0,0],e=30,f=100,g=!1,h=0,i,j={start:"touchstart",move:"touchmove",stop:"touchend"},k=function(
a){return a.originalEvent.touches?a.originalEvent.touches[0]:a},l=function(a){if(a.originalEvent.touches&&a.originalEvent.touches.length>1)return;i=k(a),d=[i.pageX,i.pageY],c[0]||(c=d),Math.abs(c[0]-d[0])>10&&a.preventDefault()},m=function(i){a.unbind(j.move,l);if(i.originalEvent.touches&&i.originalEvent.touches.length||g){g=!g;return}F.timestamp()-h<1e3&&Math.abs(c[0]-d[0])>e&&Math.abs(c[1]-d[1])<f&&(i.preventDefault(),b[c[0]>d[0]?"next":"prev"]()),c=d=[0,0]};a.bind(j.start,function(b){if(b.originalEvent.touches&&b.originalEvent.touches.length>1)return;i=k(b),h=F.timestamp(),c=d=[i.pageX,i.pageY],a.bind(j.move,l).one(j.stop,m)})}(b.$("images")),e.fullscreenDoubleTap&&this.$("stage").bind("touchstart",function(){var a,c,d,e,f,g,h=function(a){return a.originalEvent.touches?a.originalEvent.touches[0]:a};return function(i){g=Galleria.utils.timestamp(),c=h(i).pageX,d=h(i).pageY;if(g-a<500&&c-e<20&&d-f<20){b.toggleFullscreen(),i.preventDefault(),b.$("stage").unbind("touchend",arguments.callee);return}a=g,e=c,f=d}}())),F.optimizeTouch(this.get("container")),a.each(Galleria.on.binds,function(c,d){a.inArray(d.hash,b._binds)==-1&&b.bind(d.type,d.callback)}),this},addTimer:function(){return this._timer.add.apply(this._timer,F.array(arguments)),this},clearTimer:function(){return this._timer.clear.apply(this._timer,F.array(arguments)),this},_getWH:function(){var b=this.$("container"),c=this.$("target"),d=this,e={},f;return a.each(["width","height"],function(a,g){d._options[g]&&typeof d._options[g]=="number"?e[g]=d._options[g]:(f=[F.parseValue(b.css(g)),F.parseValue(c.css(g)),b[g](),c[g]()],d["_"+g]||f.splice(f.length,F.parseValue(b.css("min-"+g)),F.parseValue(c.css("min-"+g))),e[g]=Math.max.apply(Math,f))}),d._userRatio&&(e.height=e.width*d._userRatio),e},_createThumbnails:function(b){this.get("total").innerHTML=this.getDataLength();var e,f,g,h,i,j=this,k=this._options,l=b?this._data.length-b.length:0,m=l,n=[],o=0,q=p<8?"http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif":"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",r=function(){var a=j.$("thumbnails").find(".active");return a.length?a.find("img").attr("src"):!1}(),s=typeof k.thumbnails=="string"?k.thumbnails.toLowerCase():null,t=function(a){return d.defaultView&&d.defaultView.getComputedStyle?d.defaultView.getComputedStyle(f.container,null)[a]:i.css(a)},u=function(b,c,d){return function(){a(d).append(b),j.trigger({type:Galleria.THUMBNAIL,thumbTarget:b,index:c,galleriaData:j.getData(c)})}},v=function(b){k.pauseOnInteraction&&j.pause();var c=a(b.currentTarget).data("index");j.getIndex()!==c&&j.show(c),b.preventDefault()},x=function(b,c){a(b.container).css("visibility","visible"),j.trigger({type:Galleria.THUMBNAIL,thumbTarget:b.image,index:b.data.order,galleriaData:j.getData(b.data.order)}),typeof c=="function"&&c.call(j,b)},y=function(b,c){b.scale({width:b.data.width,height:b.data.height,crop:k.thumbCrop,margin:k.thumbMargin,canvas:k.useCanvas,complete:function(b){var d=["left","top"],e=["Width","Height"],f,g,h=j.getData(b.index),i=h.thumb.split(":");a.each(e,function(c,e){f=e.toLowerCase(),(k.thumbCrop!==!0||k.thumbCrop===f)&&k.thumbFit&&(g={},g[f]=b[f],a(b.container).css(g),g={},g[d[c]]=0,a(b.image).css(g)),b["outer"+e]=a(b.container)["outer"+e](!0)}),F.toggleQuality(b.image,k.thumbQuality===!0||k.thumbQuality==="auto"&&b.original.width<b.width*3),h.iframe&&i.length==2&&i[0]in w?w[i[0]].getThumb(i[1],function(a){return function(d){a.src=d,x(b,c)}}(b.image)):k.thumbDisplayOrder&&!b.lazy?a.each(n,function(a,b){if(a===o&&b.ready&&!b.displayed){o++,b.displayed=!0,x(b,c);return}}):x(b,c)}})};b||(this._thumbnails=[],this.$("thumbnails").empty());for(;this._data[l];l++)g=this._data[l],e=g.thumb||g.image,k.thumbnails!==!0&&s!="lazy"||!g.thumb&&!g.image?g.iframe||s==="empty"||s==="numbers"?(f={container:F.create("galleria-image"),image:F.create("img","span"),ready:!0},s==="numbers"&&a(f.image).text(l+1),g.iframe&&a(f.image).addClass("iframe"),this.$("thumbnails").append(f.container),c.setTimeout(u(f.image,l,f.container),50+l*20)):f={container:null,image:null}:(f=new Galleria.Picture(l),f.index=l,f.displayed=!1,f.lazy=!1,f.video=!1,this.$("thumbnails").append(f.container),i=a(f.container),i.css("visibility","hidden"),f.data={width:F.parseValue(t("width")),height:F.parseValue(t("height")),order:l,src:e},k.thumbFit&&k.thumbCrop!==!0?i.css({width:"auto",height:"auto"}):i.css({width:f.data.width,height:f.data.height}),h=e.split(":"),h.length==2&&h[0]in w?(f.video=!0,f.ready=!0,f.load(q,{height:f.data.height,width:f.data.height*1.25},y)):s=="lazy"?(i.addClass("lazy"),f.lazy=!0,f.load(q,{height:f.data.height,width:f.data.width})):f.load(e,y),k.preload==="all"&&f.preload(g.image)),a(f.container).add(k.keepSource&&k.linkSourceImages?g.original:null).data("index",l).bind(k.thumbEventType,v).data("thumbload",y),r===e&&a(f.container).addClass("active"),this._thumbnails.push(f);return n=this._thumbnails.slice(m),this},lazyLoad:function(b,c){var d=b.constructor==Array?b:[b],e=this,f=this.$("thumbnails").children().filter(function(){return a(this).data("lazy-src")}),g=0;return a.each(d,function(b,f){if(f>e._thumbnails.length-1)return;var h=e._thumbnails[f],i=h.data,j=i.src.split(":"),k=function(){++g==d.length&&typeof c=="function"&&c.call(e)},l=a(h.container).data("thumbload");h.video?l.call(e,h,k):h.load(i.src,function(a){l.call(e,a,k)})}),this},lazyLoadChunks:function(a,b){var d=this.getDataLength(),e=0,f=0,g=[],h=[],i=this;b=b||0;for(;e<d;e++){h.push(e);if(++f==a||e==d-1)g.push(h),f=0,h=[]}var j=function(a){var d=g.shift();d&&c.setTimeout(function(){i.lazyLoad(d,function(){j(!0)})},b&&a?b:0)};return j(!1),this},_run:function(){var d=this;d._createThumbnails(),F.wait({timeout:1e4,until:function(){return Galleria.OPERA&&d.$("stage").css("display","inline-block"),d._stageWidth=d.$("stage").width(),d._stageHeight=d.$("stage").height(),d._stageWidth&&d._stageHeight>50},success:function(){z.push(d),F.show(d.get("counter")),d._options.carousel&&d._carousel.bindControls(),d._options.autoplay&&(d.pause(),typeof d._options.autoplay=="number"&&(d._playtime=d._options.autoplay),d._playing=!0);if(d._firstrun){d._options.autoplay&&d.trigger(Galleria.PLAY),typeof d._options.show=="number"&&d.show(d._options.show);return}d._firstrun=!0,Galleria.History&&Galleria.History.change(function(a){isNaN(a)?c.history.go(-1):d.show(a,b,!0)}),d.trigger(Galleria.READY),Galleria.theme.init.call(d,d._options),a.each(Galleria.ready.callbacks,function(a,b){typeof b=="function"&&b.call(d,d._options)}),d._options.extend.call(d,d._options),/^[0-9]{1,4}$/.test(m)&&Galleria.History?d.show(m,b,!0):d._data[d._options.show]&&d.show(d._options.show),d._options.autoplay&&d.trigger(Galleria.PLAY)},error:function(){Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:"+d._stageWidth+"px, height: "+d._stageHeight+"px.",!0)}})},load:function(b,c,d){var e=this,f=this._options;return this._data=[],this._thumbnails=[],this.$("thumbnails").empty(),typeof c=="function"&&(d=c,c=null),b=b||f.dataSource,c=c||f.dataSelector,d=d||f.dataConfig,/^function Object/.test(b.constructor)&&(b=[b]),b.constructor===Array?this.validate(b)?this._data=b:Galleria.raise("Load failed: JSON Array not valid."):(c+=",.video,.iframe",a(b).find(c).each(function(b,c){c=a(c);var f={},g=c.parent(),h=g.attr("href"),i=g.attr("rel");h&&(c[0].nodeName=="IMG"||c.hasClass("video"))&&x(h)?f.video=h:h&&c.hasClass("iframe")?f.iframe=h:f.image=f.big=h,i&&(f.big=i),a.each("big title description link layer".split(" "),function(a,b){c.data(b)&&(f[b]=c.data(b))}),e._data.push(a.extend({title:c.attr("title")||"",thumb:c.attr("src"),image:c.attr("src"),big:c.attr("src"),description:c.attr("alt")||"",link:c.attr("longdesc"),original:c.get(0)},f,d(c)))})),typeof f.dataSort=="function"?g.sort.call(this._data,f.dataSort):f.dataSort=="random"&&this._data.sort(function(){return Math.round(Math.random())-.5}),this.getDataLength()&&this._parseData().trigger(Galleria.DATA),this},_parseData:function(){var b=this,c;return a.each(this._data,function(d,e){c=b._data[d],"thumb"in e==0&&(c.thumb=e.image),!1 in e&&(c.big=e.image);if("video"in e){var f=x(e.video);if(f){c.iframe=w[f.provider].embed(f.id)+function(){if(typeof b._options[f.provider]=="object"){var c="?",d=[];return a.each(b._options[f.provider],function(a,b){d.push(a+"="+b)}),f.provider=="youtube"&&(d=["wmode=opaque"].concat(d)),c+d.join("&")}return""}(),delete c.video;if(!("thumb"in c)||!c.thumb)c.thumb=f.provider+":"+f.id}}}),this},destroy:function(){return this.$("target").data("galleria",null),this.$("container").unbind("galleria"),this.get("target").innerHTML=this._original.html,this.clearTimer(),F.removeFromArray(A,this),F.removeFromArray(z,this),this},splice:function(){var a=this,b=F.array(arguments);return c.setTimeout(function(){g.splice.apply(a._data,b),a._parseData()._createThumbnails()},2),a},push:function(){var a=this,b=F.array(arguments);return b.length==1&&b[0].constructor==Array&&(b=b[0]),c.setTimeout(function(){g.push.apply(a._data,b),a._parseData()._createThumbnails(b)},2),a},_getActive:function(){return this._controls.getActive()},validate:function(a){return!0},bind:function(a,b){return a=v(a),this.$("container").bind(a,this.proxy(b)),this},unbind:function(a){return a=v(a),this.$("container").unbind(a),this},trigger:function(b){return b=typeof b=="object"?a.extend(b,{scope:this}):{type:v(b),scope:this},this.$("container").trigger(b),this},addIdleState:function(a,b,c,d){return this._idle.add.apply(this._idle,F.array(arguments)),this},removeIdleState:function(a){return this._idle.remove.apply(this._idle,F.array(arguments)),this},enterIdleMode:function(){return this._idle.hide(),this},exitIdleMode:function(){return this._idle.showAll(),this},enterFullscreen:function(a){return this._fullscreen.enter.apply(this,F.array(arguments)),this},exitFullscreen:function(a){return this._fullscreen.exit.apply(this,F.array(arguments)),this},toggleFullscreen:function(a){return this._fullscreen[this.isFullscreen()?"exit":"enter"].apply(this,F.array(arguments)),this},bindTooltip:function(a,b){return this._tooltip.bind.apply(this._tooltip,F.array(arguments)),this},defineTooltip:function(a,b){return this._tooltip.define.apply(this._tooltip,F.array(arguments)),this},refreshTooltip:function(a){return this._tooltip.show.apply(this._tooltip,F.array(arguments)),this},openLightbox:function(){return this._lightbox.show.apply(this._lightbox,F.array(arguments)),this},closeLightbox:function(){return this._lightbox.hide.apply(this._lightbox,F.array(arguments)),this},getActiveImage:function(){return this._getActive().image||b},getActiveThumb:function(){return this._thumbnails[this._active].image||b},getMousePosition:function(a){return{x:a.pageX-this.$("container").offset().left,y:a.pageY-this.$("container").offset().top}},addPan:function(b){if(this._options.imageCrop===!1)return;b=a(b||this.getActiveImage());var c=this,d=b.width()/2,e=b.height()/2,f=parseInt(b.css("left"),10),g=parseInt(b.css("top"),10),h=f||0,i=g||0,j=0,k=0,l=!1,m=F.timestamp(),n=0,o=0,q=function(a,c,d){if(a>0){o=Math.round(Math.max(a*-1,Math.min(0,c)));if(n!==o){n=o;if(p===8)b.parent()["scroll"+d](o*-1);else{var e={};e[d.toLowerCase()]=o,b.css(e)}}}},r=function(a){if(F.timestamp()-m<50)return;l=!0,d=c.getMousePosition(a).x,e=c.getMousePosition(a).y},s=function(a){if(!l)return;j=b.width()-c._stageWidth,k=b.height()-c._stageHeight,f=d/c._stageWidth*j*-1,g=e/c._stageHeight*k*-1,h+=(f-h)/c._options.imagePanSmoothness,i+=(g-i)/c._options.imagePanSmoothness,q(k,i,"Top"),q(j,h,"Left")};return p===8&&(b.parent().scrollTop(i*-1).scrollLeft(h*-1),b.css({top:0,left:0})),this.$("stage").unbind("mousemove",r).bind("mousemove",r),this.addTimer("pan"+c._id,s,50,!0),this},proxy:function(a,b){return typeof a!="function"?n:(b=b||this,function(){return a.apply(b,F.array(arguments))})},removePan:function(){return this.$("stage").unbind("mousemove"),this.clearTimer("pan"+this._id),this},addElement:function(b){var c=this._dom;return a.each(F.array(arguments),function(a,b){c[b]=F.create("galleria-"+b)}),this},attachKeyboard:function(a){return this._keyboard.attach.apply(this._keyboard,F.array(arguments)),this},detachKeyboard:function(){return this._keyboard.detach.apply(this._keyboard,F.array(arguments)),this},appendChild:function(a,b){return this.$(a).append(this.get(b)||b),this},prependChild:function(a,b){return this.$(a).prepend(this.get(b)||b),this},remove:function(a){return this.$(F.array(arguments).join(",")).remove(),this},append:function(a){var b,c;for(b in a)if(a.hasOwnProperty(b))if(a[b].constructor===Array)for(c=0;a[b][c];c++)this.appendChild(b,a[b][c]);else this.appendChild(b,a[b]);return this},_scaleImage:function(b,c){b=b||this._controls.getActive();if(!b)return;var d=this,e,f=function(b){a(b.container).children(":first").css({top:Math.max(0,F.parseValue(b.image.style.top)),left:Math.max(0,F.parseValue(b.image.style.left)),width:F.parseValue(b.image.width),height:F.parseValue(b.image.height)})};return c=a.extend({width:this._stageWidth,height:this._stageHeight,crop:this._options.imageCrop,max:this._options.maxScaleRatio,min:this._options.minScaleRatio,margin:this._options.imageMargin,position:this._options.imagePosition,iframelimit:this._options.maxVideoSize},c),this._options.layerFollow&&this._options.imageCrop!==!0?typeof c.complete=="function"?(e=c.complete,c.complete=function(){e.call(b,b),f(b)}):c.complete=f:a(b.container).children(":first").css({top:0,left:0}),b.scale(c),this},updateCarousel:function(){return this._carousel.update(),this},resize:function(c,d){typeof c=="function"&&(d=c,c=b),c=a.extend({width:0,height:0},c);var e=this,f=this.$("container");return a.each(c,function(a,b){b||(f[a]("auto"),c[a]=e._getWH()[a])}),a.each(c,function(a,b){f[a](b)}),this.rescale(d)},rescale:function(a,c,d){var e=this;typeof a=="function"&&(d=a,a=b);var f=function(){e._stageWidth=a||e.$("stage").width(),e._stageHeight=c||e.$("stage").height(),e._scaleImage(),e._options.carousel&&e.updateCarousel(),e.trigger(Galleria.RESCALE),typeof d=="function"&&d.call(e)};return f.call(e),this},refreshImage:function(){return this._scaleImage(),this._options.imagePan&&this.addPan(),this},show:function(a,b,c){if(this._queue.length>3||a===!1||!this._options.queue&&this._queue.stalled)return;a=Math.max(0,Math.min(parseInt(a,10),this.getDataLength()-1)),b=typeof b!="undefined"?!!b:a<this.getIndex(),c=c||!1;if(!c&&Galleria.History){Galleria.History.set(a.toString());return}return this._active=a,g.push.call(this._queue,{index:a,rewind:b}),this._queue.stalled||this._show(),this},_show:function(){var d=this,e=this._queue[0],f=this.getData(e.index);if(!f)return;var h=f.iframe||(this.isFullscreen()&&"big"in f?f.big:f.image),i=this._controls.getActive(),j=this._controls.getNext(),k=j.isCached(h),l=this._thumbnails[e.index],m=function(){a(j.image).trigger("mouseup")},n=function(b,e,f,h,i){return function(){var j;G.active=!1,F.toggleQuality(e.image,d._options.imageQuality),d._layers[d._controls.active].innerHTML="",a(f.container).css({zIndex:0,opacity:0}).show(),f.isIframe&&a(f.container).find("iframe").remove(),d.$("container").toggleClass("iframe",!!b.iframe),a(e.container).css({zIndex:1,left:0,top:0}).show(),d._controls.swap(),d._options.imagePan&&d.addPan(e.image),(b.link||d._options.lightbox||d._options.clicknext)&&a(e.image).css({cursor:"pointer"}).bind("mouseup",function(a){if(typeof a.which=="number"&&a.which>1)return;if(d._options.clicknext&&!Galleria.TOUCH){d._options.pauseOnInteraction&&d.pause(),d.next();return}if(b.link){d._options.popupLinks?j=c.open(b.link,"_blank"):c.location.href=b.link;return}d._options.lightbox&&d.openLightbox()}),d._playCheck(),d.trigger({type:Galleria.IMAGE,index:h.index,imageTarget:e.image,thumbTarget:i.image,galleriaData:b}),g.shift.call(d._queue),d._queue.stalled=!1,d._queue.length&&d._show()}}(f,j,i,e,l);this._options.carousel&&this._options.carouselFollow&&this._carousel.follow(e.index);if(this._options.preload){var o,p,q=this.getNext(),r;try{for(p=this._options.preload;p>0;p--)o=new Galleria.Picture,r=d.getData(q),o.preload(this.isFullscreen()&&"big"in r?r.big:r.image),q=d.getNext(q)}catch(s){}}F.show(j.container),j.isIframe=!!f.iframe,a(d._thumbnails[e.index].container).addClass("active").siblings(".active").removeClass("active"),d.trigger({type:Galleria.LOADSTART,cached:k,index:e.index,rewind:e.rewind,imageTarget:j.image,thumbTarget:l.image,galleriaData:f}),d._queue.stalled=!0,j.load(h,function(c){var g=a(d._layers[1-d._controls.active]).html(f.layer||"").hide();d._scaleImage(c,{complete:function(c){"image"in i&&F.toggleQuality(i.image,!1),F.toggleQuality(c.image,!1),d.removePan(),d.setInfo(e.index),d.setCounter(e.index),f.layer&&(g.show(),(f.link||d._options.lightbox||d._options.clicknext)&&g.css("cursor","pointer").unbind("mouseup").mouseup(m));var h=d._options.transition;a.each({initial:i.image===null,touch:Galleria.TOUCH,fullscreen:d.isFullscreen()},function(a,c){if(c&&d._options[a+"Transition"]!==b)return h=d._options[a+"Transition"],!1});if(h in G.effects==0)n();else{var j={prev:i.container,next:c.container,rewind:e.rewind,speed:d._options.transitionSpeed||400};G.active=!0,G.init.call(d,h,j,n)}d.trigger({type:Galleria.LOADFINISH,cached:k,index:e.index,rewind:e.rewind,imageTarget:c.image,thumbTarget:d._thumbnails[e.index].image,galleriaData:d.getData(e.index)})}})})},getNext:function(a){return a=typeof a=="number"?a:this.getIndex(),a===this.getDataLength()-1?0:a+1},getPrev:function(a){return a=typeof a=="number"?a:this.getIndex(),a===0?this.getDataLength()-1:a-1},next:function(){return this.getDataLength()>1&&this.show(this.getNext(),!1),this},prev:function(){return this.getDataLength()>1&&this.show(this.getPrev(),!0),this},get:function(a){return a in this._dom?this._dom[a]:null},getData:function(a){return a in this._data?this._data[a]:this._data[this._active]},getDataLength:function(){return this._data.length},getIndex:function(){return typeof this._active=="number"?this._active:!1},getStageHeight:function(){return this._stageHeight},getStageWidth:function(){return this._stageWidth},getOptions:function(a){return typeof a=="undefined"?this._options:this._options[a]},setOptions:function(b,c){return typeof b=="object"?a.extend(this._options,b):this._options[b]=c,this},play:function(a){return this._playing=!0,this._playtime=a||this._playtime,this._playCheck(),this.trigger(Galleria.PLAY),this},pause:function(){return this._playing=!1,this.trigger(Galleria.PAUSE),this},playToggle:function(a){return this._playing?this.pause():this.play(a)},isPlaying:function(){return this._playing},isFullscreen:function(){return this._fullscreen.active},_playCheck:function(){var a=this,b=0,c=20,d=F.timestamp(),e="play"+this._id;if(this._playing){this.clearTimer(e);var f=function(){b=F.timestamp()-d;if(b>=a._playtime&&a._playing){a.clearTimer(e),a.next();return}a._playing&&(a.trigger({type:Galleria.PROGRESS,percent:Math.ceil(b/a._playtime*100),seconds:Math.floor(b/1e3),milliseconds:b}),a.addTimer(e,f,c))};a.addTimer(e,f,c)}},setPlaytime:function(a){return this._playtime=a,this},setIndex:function(a){return this._active=a,this},setCounter:function(a){typeof a=="number"?a++:typeof a=="undefined"&&(a=this.getIndex()+1),this.get("current").innerHTML=a;if(p){var b=this.$("counter"),c=b.css("opacity");parseInt(c,10)===1?F.removeAlpha(b[0]):this.$("counter").css("opacity",c)}return this},setInfo:function(b){var c=this,d=this.getData(b);return a.each(["title","description"],function(a,b){var e=c.$("info-"+b);d[b]?e[d[b].length?"show":"hide"]().html(d[b]):e.empty().hide()}),this},hasInfo:function(a){var b="title description".split(" "),c;for(c=0;b[c];c++)if(!!this.getData(a)[b[c]])return!0;return!1},jQuery:function(b){var c=this,d=[];a.each(b.split(","),function(b,e){e=a.trim(e),c.get(e)&&d.push(e)});var e=a(c.get(d.shift()));return a.each(d,function(a,b){e=e.add(c.get(b))}),e},$:function(a){return this.jQuery.apply(this,F.array(arguments))}},a.each(t,function(a,b){var c=/_/.test(b)?b.replace(/_/g,""):b;Galleria[b.toUpperCase()]="galleria."+c}),a.extend(Galleria,{IE9:p===9,IE8:p===8,IE7:p===7,IE6:p===6,IE:p,WEBKIT:/webkit/.test(l),CHROME:/chrome/.test(l),SAFARI:/safari/.test(l)&&!/chrome/.test(l),QUIRK:p&&d.compatMode&&d.compatMode==="BackCompat",MAC:/mac/.test(navigator.platform.toLowerCase()),OPERA:!!c.opera,IPHONE:/iphone/.test(l),IPAD:/ipad/.test(l),ANDROID:/android/.test(l),TOUCH:"ontouchstart"in d}),Galleria.addTheme=function(b){b.name||Galleria.raise("No theme name specified"),typeof b.defaults!="object"?b.defaults={}:b.defaults=u(b.defaults);var d=!1,e;return typeof b.css=="string"?(a("link").each(function(a,c){e=new RegExp(b.css);if(e.test(c.href))return d=!0,E(b),!1}),d||a("script").each(function(a,f){e=new RegExp("galleria\\."+b.name.toLowerCase()+"\\."),e.test(f.src)&&(d=f.src.replace(/[^\/]*$/,"")+b.css,c.setTimeout(function(){F.loadCSS(d,"galleria-theme",function(){E(b)})},1))}),d||Galleria.raise("No theme CSS loaded")):E(b),b},Galleria.loadTheme=function(b,d){if(a("script").filter(function(){return a(this).attr("src")==b}).length)return;var e=!1,f;return a(c).load(function(){e||(f=c.setTimeout(function(){!e&&!Galleria.theme&&Galleria.raise("Galleria had problems loading theme at "+b+". Please check theme path or load manually.",!0)},2e4))}),Galleria.unloadTheme(),F.loadScript(b,function(){e=!0,c.clearTimeout(f)}),Galleria},Galleria.unloadTheme=function(){return typeof Galleria.theme=="object"&&(a("script").each(function(b,c){(new RegExp("galleria\\."+Galleria.theme.name+"\\.")).test(c.src)&&a(c).remove()}),Galleria.theme=b),Galleria},Galleria.get=function(a){if(!!A[a])return A[a];if(typeof a!="number")return A;Galleria.raise("Gallery index "+a+" not found")},Galleria.configure=function(b,c){var d={};return typeof b=="string"&&c?(d[b]=c,b=d):a.extend(d,b),Galleria.configure.options=d,a.each(Galleria.get(),function(a,b){b.setOptions(d)}),Galleria},Galleria.configure.options={},Galleria.on=function(b,c){if(!b)return;c=c||n;var d=b+c.toString().replace(/\s/g,"")+F.timestamp();return a.each(Galleria.get(),function(a,e){e._binds.push(d),e.bind(b,c)}),Galleria.on.binds.push({type:b,callback:c,hash:d}),Galleria},Galleria.on.binds=[],Galleria.run=function(b,c){return a.isFunction(c)&&(c={extend:c}),a(b||"#galleria").galleria(c),Galleria},Galleria.addTransition=function(a,b){return G.effects[a]=b,Galleria},Galleria.utils=F,Galleria.log=function(){var b=F.array(arguments);if(!("console"in c&&"log"in c.console))return c.alert(b.join("<br>"));try{return c.console.log.apply(c.console,b)}catch(d){a.each(b,function(){c.console.log(this)})}},Galleria.ready=function(b){return typeof b!="function"?Galleria:(a.each(z,function(a,c){b.call(c,c._options)}),Galleria.ready.callbacks.push(b),Galleria)},Galleria.ready.callbacks=[],Galleria.raise=function(b,c){var d=c?"Fatal error":"Error",e=this,f={color:"#fff",position:"absolute",top:0,left:0,zIndex:1e5},g=function(b){var e='<div style="padding:4px;margin:0 0 2px;background:#'+(c?"811":"222")+';">'+(c?"<strong>"+d+": </strong>":"")+b+"</div>";a.each(A,function(){var a=this.$("errors"),b=this.$("target");a.length||(b.css("position","relative"),a=this.addElement("errors").appendChild("target","errors").$("errors").css(f)),a.append(e)}),A.length||a("<div>").css(a.extend(f,{position:"fixed"})).append(e).appendTo(q().body)};if(i){g(b);if(c)throw new Error(d+": "+b)}else if(c){if(B)return;B=!0,c=!1,g("Gallery could not load.")}},Galleria.version=h,Galleria.requires=function(a,b){return b=b||"You need to upgrade Galleria to version "+a+" to use one or more components.",Galleria.version<a&&Galleria.raise(b,!0),Galleria},Galleria.Picture=function(b){this.id=b||null,this.image=null,this.container=F.create("galleria-image"),a(this.container).css({overflow:"hidden",position:"relative"}),this.original={width:0,height:0},this.ready=!1,this.isIframe=!1},Galleria.Picture.prototype={cache:{},show:function(){F.show(this.image)},hide:function(){F.moveOut(this.image)},clear:function(){this.image=null},isCached:function(a){return!!this.cache[a]},preload:function(b){a(new Image).load(function(a,b){return function(){b[a]=a}}(b,this.cache)).attr("src",b)},load:function(b,d,e){typeof d=="function"&&(e=d,d=null);if(this.isIframe){var f="if"+(new Date).getTime();return this.image=a("<iframe>",{src:b,frameborder:0,id:f,allowfullscreen:!0,css:{visibility:"hidden"}})[0],a(this.container).find("iframe,img").remove(),this.container.appendChild(this.image),a("#"+f).load(function(b,d){return function(){c.setTimeout(function(){a(b.image).css("visibility","visible"),typeof d=="function"&&d.call(b,b)},10)}}(this,e)),this.container}this.image=new Image,Galleria.IE8&&a(this.image).css("filter","inherit");var g=0,h=!1,i=!1,j=a(this.container),l=a(this.image),m=function(){h?k?a(this).attr("src",k):Galleria.raise("Image not found: "+b):(h=!0,c.setTimeout(function(a,b){return function(){a.attr("src",b+"?"+F.timestamp())}}(a(this),b),50))},n=function(b,e,f){return function(){var g=function(){a(this).unbind("load"),b.original=d||{height:this.height,width:this.width},b.container.appendChild(this),b.cache[f]=f,typeof e=="function"&&c.setTimeout(function(){e.call(b,b)},1)};!this.width||!this.height?c.setTimeout(function(b){return function(){b.width&&b.height?g.call(b):i?Galleria.raise("Could not extract width/height from image: "+b.src+". Traced measures: width:"+b.width+"px, height: "+b.height+"px."):(a(new Image).load(n).attr("src",b.src),i=!0)}}(this),2):g.call(this)}}(this,e,b);return j.find("iframe,img").remove(),l.css("display","block"),F.hide(this.image),a.each("minWidth minHeight maxWidth maxHeight".split(" "),function(a,b){l.css(b,/min/.test(b)?"0":"none")}),l.load(n).error(m).attr("src",b),this.container},scale:function(c){var d=this;c=a.extend({width:0,height:0,min:b,max:b,margin:0,complete:n,position:"center",crop:!1,canvas:!1,iframelimit:b},c);if(this.isIframe){var e=c.width,f=c.height,g,h;if(c.iframelimit){var i=Math.min(c.iframelimit/e,c.iframelimit/f);i<1?(g=e*i,h=f*i,a(this.image).css({top:f/2-h/2,left:e/2-g/2,position:"absolute"})):a(this.image).css({top:0,left:0})}a(this.image).width(g||e).height(h||f).removeAttr("width").removeAttr("height"),a(this.container).width(e).height(f),c.complete.call(d,d);try{this.image.contentWindow&&a(this.image.contentWindow).trigger("resize")}catch(j){}return this.container}if(!this.image)return this.container;var k,l,m=a(d.container),o;return F.wait({until:function(){return k=c.width||m.width()||F.parseValue(m.css("width")),l=c.height||m.height()||F.parseValue(m.css("height")),k&&l},success:function(){var b=(k-c.margin*2)/d.original.width,e=(l-c.margin*2)/d.original.height,f=Math.min(b,e),g=Math.max(b,e),h={"true":g,width:b,height:e,"false":f,landscape:d.original.width>d.original.height?g:f,portrait:d.original.width<d.original.height?g:f},i=h[c.crop.toString()],j="";c.max&&(i=Math.min(c.max,i)),c.min&&(i=Math.max(c.min,i)),a.each(["width","height"],function(b,c){a(d.image)[c](d[c]=d.image[c]=Math.round(d.original[c]*i))}),a(d.container).width(k).height(l),c.canvas&&C&&(C.elem.width=d.width,C.elem.height=d.height,j=d.image.src+":"+d.width+"x"+d.height,d.image.src=C.cache[j]||function(a){C.context.drawImage(d.image,0,0,d.original.width*i,d.original.height*i);try{return o=C.elem.toDataURL(),C.length+=o.length,C.cache[a]=o,o}catch(b){return d.image.src}}(j));var m={},n={},p=function(b,c,e){var f=0;if(/\%/.test(b)){var g=parseInt(b,10)/100,h=d.image[c]||a(d.image)[c]();f=Math.ceil(h*-1*g+e*g)}else f=F.parseValue(b);return f},q={top:{top:0},left:{left:0},right:{left:"100%"},bottom:{top:"100%"}};a.each(c.position.toLowerCase().split(" "),function(a,b){b==="center"&&(b="50%"),m[a?"top":"left"]=b}),a.each(m,function(b,c){q.hasOwnProperty(c)&&a.extend(n,q[c])}),m=m.top?a.extend(m,n):n,m=a.extend({top:"50%",left:"50%"},m),a(d.image).css({position:"absolute",top:p(m.top,"height",l),left:p(m.left,"width",k)}),d.show(),d.ready=!0,c.complete.call(d,d)},error:function(){Galleria.raise("Could not scale image: "+d.image.src)},timeout:1e3}),this}},a.extend(a.easing,{galleria:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},galleriaIn:function(a,b,c,d,e){return d*(b/=e)*b+c},galleriaOut:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}}),a.fn.galleria=function(b){var c=this.selector;return a(this).length?this.each(function(){a.data(this,"galleria")&&(a.data(this,"galleria").destroy(),a(this).find("*").hide()),a.data(this,"galleria",(new Galleria).init(this,b))}):(a(function(){a(c).length?a(c).galleria(b):Galleria.utils.wait({until:function(){return a(c).length},success:function(){a(c).galleria(b)},error:function(){Galleria.raise('Init failed: Galleria could not find the element "'+c+'".')},timeout:5e3})}),this)}})(jQuery);;
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
/**
 *
 * SoundManager 2 Demo: Play MP3 links "in-place"
 * ----------------------------------------------
 *
 * http://schillmania.com/projects/soundmanager2/
 *
 * A simple demo making MP3s playable "inline"
 * and easily styled/customizable via CSS.
 *
 * Requires SoundManager 2 Javascript API.
 *
 */

function InlinePlayer() {
  var self = this;
  var pl = this;
  var sm = soundManager; // soundManager instance
  var isIE = (navigator.userAgent.match(/msie/i));
  this.playableClass = 'inline-playable'; // CSS class for forcing a link to be playable (eg. doesn't have .MP3 in it)
  this.excludeClass = 'inline-exclude'; // CSS class for ignoring MP3 links
  this.links = [];
  this.sounds = [];
  this.soundsByURL = [];
  this.indexByURL = [];
  this.lastSound = null;
  this.soundCount = 0;

  this.config = {
    playNext: false, // stop after one sound, or play through list until end
    autoPlay: false  // start playing the first sound right away
  }

  this.css = {
    // CSS class names appended to link during various states
    sDefault: 'sm2_link', // default state
    sLoading: 'sm2_loading',
    sPlaying: 'sm2_playing',
    sPaused: 'sm2_paused'
  }

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

  this.classContains = function(o,cStr) {
	return (typeof(o.className)!='undefined'?o.className.match(new RegExp('(\\s|^)'+cStr+'(\\s|$)')):false);
  }

  this.addClass = function(o,cStr) {
    if (!o || !cStr || self.classContains(o,cStr)) return false;
    o.className = (o.className?o.className+' ':'')+cStr;
  }

  this.removeClass = function(o,cStr) {
    if (!o || !cStr || !self.classContains(o,cStr)) return false;
    o.className = o.className.replace(new RegExp('( '+cStr+')|('+cStr+')','g'),'');
  }

  this.getSoundByURL = function(sURL) {
    return (typeof self.soundsByURL[sURL] != 'undefined'?self.soundsByURL[sURL]:null);
  }

  this.isChildOfNode = function(o,sNodeName) {
    if (!o || !o.parentNode) {
      return false;
    }
    sNodeName = sNodeName.toLowerCase();
    do {
      o = o.parentNode;
    } while (o && o.parentNode && o.nodeName.toLowerCase() != sNodeName);
    return (o.nodeName.toLowerCase() == sNodeName?o:null);
  }

  this.events = {

    // handlers for sound events as they're started/stopped/played

    play: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLink,this._data.className);
    },

    stop: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = '';
    },

    pause: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPaused;
      pl.addClass(this._data.oLink,this._data.className);
    },

    resume: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = pl.css.sPlaying;
      pl.addClass(this._data.oLink,this._data.className);      
    },

    finish: function() {
      pl.removeClass(this._data.oLink,this._data.className);
      this._data.className = '';
      if (pl.config.playNext) {
        var nextLink = (pl.indexByURL[this._data.oLink.href]+1);
        if (nextLink<pl.links.length) {
          pl.handleClick({'target':pl.links[nextLink]});
        }
      }
    }

  }

  this.stopEvent = function(e) {
   if (typeof e != 'undefined' && typeof e.preventDefault != 'undefined') {
      e.preventDefault();
    } else if (typeof event != 'undefined' && typeof event.returnValue != 'undefined') {
      event.returnValue = false;
    }
    return false;
  }

  this.getTheDamnLink = (isIE)?function(e) {
    // I really didn't want to have to do this.
    return (e && e.target?e.target:window.event.srcElement);
  }:function(e) {
    return e.target;
  }

  this.handleClick = function(e) {
    // a sound link was clicked
    if (typeof e.button != 'undefined' && e.button>1) {
      // ignore right-click
      return true;
    }
    var o = self.getTheDamnLink(e);
    if (o.nodeName.toLowerCase() != 'a') {
      o = self.isChildOfNode(o,'a');
      if (!o) return true;
    }
    var sURL = o.getAttribute('href');
    if (!o.href || (!sm.canPlayLink(o) && !self.classContains(o,self.playableClass)) || self.classContains(o,self.excludeClass)) {
      return true; // pass-thru for non-MP3/non-links
    }
    var soundURL = (o.href);
    var thisSound = self.getSoundByURL(soundURL);
    if (thisSound) {
      // already exists
      if (thisSound == self.lastSound) {
        // and was playing (or paused)
        thisSound.togglePause();
      } else {
        // different sound
        sm._writeDebug('sound different than last sound: '+self.lastSound.id);
        if (self.lastSound) {
          self.stopSound(self.lastSound);
        }
        thisSound.togglePause(); // start playing current
      }
    } else {
      // stop last sound
      if (self.lastSound) {
        self.stopSound(self.lastSound);
      }
      // create sound
      thisSound = sm.createSound({
       id:'inlineMP3Sound'+(self.soundCount++),
       url:soundURL,
       onplay:self.events.play,
       onstop:self.events.stop,
       onpause:self.events.pause,
       onresume:self.events.resume,
       onfinish:self.events.finish,
       type:(o.type||null)
      });
      // tack on some custom data
      thisSound._data = {
        oLink: o, // DOM node for reference within SM2 object event handlers
        className: self.css.sPlaying
      };
      self.soundsByURL[soundURL] = thisSound;
      self.sounds.push(thisSound);
      thisSound.play();
    }

    self.lastSound = thisSound; // reference for next call

    if (typeof e != 'undefined' && typeof e.preventDefault != 'undefined') {
      e.preventDefault();
    } else {
      event.returnValue = false;
    }
    return false;
  }

  this.stopSound = function(oSound) {
    soundManager.stop(oSound.id);
    soundManager.unload(oSound.id);
  }

  this.init = function() {
    sm._writeDebug('inlinePlayer.init()');
    var oLinks = document.getElementsByTagName('a');
    // grab all links, look for .mp3
    var foundItems = 0;
    for (var i=0, j=oLinks.length; i<j; i++) {
      if ((sm.canPlayLink(oLinks[i]) || self.classContains(oLinks[i],self.playableClass)) && !self.classContains(oLinks[i],self.excludeClass)) {
        self.addClass(oLinks[i],self.css.sDefault); // add default CSS decoration
        self.links[foundItems] = (oLinks[i]);
        self.indexByURL[oLinks[i].href] = foundItems; // hack for indexing
        foundItems++;
      }
    }
    if (foundItems>0) {
      self.addEventHandler(document,'click',self.handleClick);
      if (self.config.autoPlay) {
        self.handleClick({target:self.links[0],preventDefault:function(){}});
      }
    }
    sm._writeDebug('inlinePlayer.init(): Found '+foundItems+' relevant items.');
  }

  this.init();

}

var inlinePlayer = null;

soundManager.setup({
  // disable or enable debug output
  debugMode: true,
  // use HTML5 audio for MP3/MP4, if available
  preferFlash: false,
  useFlashBlock: true,
  // path to directory containing SM2 SWF
  url: '../../swf/',
  // optional: enable MPEG-4/AAC support (requires flash 9)
  flashVersion: 9
});

// ----

soundManager.onready(function() {
  // soundManager.createSound() etc. may now be called
  inlinePlayer = new InlinePlayer();
});

;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).removeClass('views-slideshow-controls-text-status-play');
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).addClass('views-slideshow-controls-text-status-pause');
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).removeClass('views-slideshow-controls-text-status-pause');
    $('#views_slideshow_controls_text_pause_' + options.slideshowID).addClass('views-slideshow-controls-text-status-play');
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager != "undefined" && typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager != "undefined" && typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            };

            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            };

            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    };

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
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
