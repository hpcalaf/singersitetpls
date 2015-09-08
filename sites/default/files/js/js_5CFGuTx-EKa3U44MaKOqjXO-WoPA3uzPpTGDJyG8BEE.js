/**
 * Galleria v 1.2.9 2013-01-18
 * http://galleria.io
 *
 * Licensed under the MIT license
 * https://raw.github.com/aino/galleria/master/LICENSE
 *
 */(function(a){var b,c=this,d=c.document,e=a(d),f=a(c),g=Array.prototype,h=1.29,i=!0,j=3e4,k=!1,l=navigator.userAgent.toLowerCase(),m=c.location.hash.replace(/#\//,""),n=function(){},o=function(){return!1},p=function(){var a=3,c=d.createElement("div"),e=c.getElementsByTagName("i");do c.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->";while(e[0]);return a>4?a:b}(),q=function(){return{html:d.documentElement,body:d.body,head:d.getElementsByTagName("head")[0],title:d.title}},r=c.parent!==c.self,s="data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image",t=function(){var b=[];return a.each(s.split(" "),function(a,c){b.push(c),/_/.test(c)&&b.push(c.replace(/_/g,""))}),b}(),u=function(b){var c;return typeof b!="object"?b:(a.each(b,function(d,e){/^[a-z]+_/.test(d)&&(c="",a.each(d.split("_"),function(a,b){c+=a>0?b.substr(0,1).toUpperCase()+b.substr(1):b}),b[c]=e,delete b[d])}),b)},v=function(b){return a.inArray(b,t)>-1?Galleria[b.toUpperCase()]:b},w={youtube:{reg:/https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,embed:function(a){return"http://www.youtube.com/embed/"+a},getThumb:function(b,d,e){e=e||n,a.getJSON(c.location.protocol+"//gdata.youtube.com/feeds/api/videos/"+b+"?v=2&alt=json-in-script&callback=?",function(a){try{d(a.entry.media$group.media$thumbnail[0].url)}catch(b){e()}}).error(e)}},vimeo:{reg:/https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,embed:function(a){return"http://player.vimeo.com/video/"+a},getThumb:function(b,c,d){d=d||n,a.getJSON("http://vimeo.com/api/v2/video/"+b+".json?callback=?",function(a){try{c(a[0].thumbnail_medium)}catch(b){d()}}).error(d)}},dailymotion:{reg:/https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,embed:function(a){return"http://www.dailymotion.com/embed/video/"+a},getThumb:function(b,c,d){d=d||n,a.getJSON("https://api.dailymotion.com/video/"+b+"?fields=thumbnail_medium_url&callback=?",function(a){try{c(a.thumbnail_medium_url)}catch(b){d()}}).error(d)}}},x=function(a){var b;for(var c in w){b=a&&a.match(w[c].reg);if(b&&b.length)return{id:b[2],provider:c}}return!1},y={support:function(){var a=q().html;return!r&&(a.requestFullscreen||a.mozRequestFullScreen||a.webkitRequestFullScreen)}(),callback:n,enter:function(a,b,c){this.instance=a,this.callback=b||n,c=c||q().html,c.requestFullscreen?c.requestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullScreen&&c.webkitRequestFullScreen()},exit:function(a){this.callback=a||n,d.exitFullscreen?d.exitFullscreen():d.mozCancelFullScreen?d.mozCancelFullScreen():d.webkitCancelFullScreen&&d.webkitCancelFullScreen()},instance:null,listen:function(){if(!this.support)return;var a=function(){if(!y.instance)return;var a=y.instance._fullscreen;d.fullscreen||d.mozFullScreen||d.webkitIsFullScreen?a._enter(y.callback):a._exit(y.callback)};d.addEventListener("fullscreenchange",a,!1),d.addEventListener("mozfullscreenchange",a,!1),d.addEventListener("webkitfullscreenchange",a,!1)}},z=[],A=[],B=!1,C=!1,D=[],E=function(b){Galleria.theme=b,a.each(D,function(a,b){b._initialized||b._init.call(b)}),D=[]},F=function(){return{clearTimer:function(b){a.each(Galleria.get(),function(){this.clearTimer(b)})},addTimer:function(b){a.each(Galleria.get(),function(){this.addTimer(b)})},array:function(a){return g.slice.call(a,0)},create:function(a,b){b=b||"div";var c=d.createElement(b);return c.className=a,c},removeFromArray:function(b,c){return a.each(b,function(a,d){if(d==c)return b.splice(a,1),!1}),b},getScriptPath:function(b){b=b||a("script:last").attr("src");var c=b.split("/");return c.length==1?"":(c.pop(),c.join("/")+"/")},animate:function(){var b=function(a){var b="transition WebkitTransition MozTransition OTransition".split(" "),d;if(c.opera)return!1;for(d=0;b[d];d++)if(typeof a[b[d]]!="undefined")return b[d];return!1}((d.body||d.documentElement).style),e={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[b],f={_default:[.25,.1,.25,1],galleria:[.645,.045,.355,1],galleriaIn:[.55,.085,.68,.53],galleriaOut:[.25,.46,.45,.94],ease:[.25,0,.25,1],linear:[.25,.25,.75,.75],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},g=function(b,c,d){var e={};d=d||"transition",a.each("webkit moz ms o".split(" "),function(){e["-"+this+"-"+d]=c}),b.css(e)},h=function(a){g(a,"none","transition"),Galleria.WEBKIT&&Galleria.TOUCH&&(g(a,"translate3d(0,0,0)","transform"),a.data("revert")&&(a.css(a.data("revert")),a.data("revert",null)))},i,j,k,l,m,o,p;return function(d,q,r){r=a.extend({duration:400,complete:n,stop:!1},r),d=a(d);if(!r.duration){d.css(q),r.complete.call(d[0]);return}if(!b){d.animate(q,r);return}r.stop&&(d.unbind(e),h(d)),i=!1,a.each(q,function(a,b){p=d.css(a),F.parseValue(p)!=F.parseValue(b)&&(i=!0),d.css(a,p)});if(!i){c.setTimeout(function(){r.complete.call(d[0])},r.duration);return}j=[],k=r.easing in f?f[r.easing]:f._default,l=" "+r.duration+"ms"+" cubic-bezier("+k.join(",")+")",c.setTimeout(function(b,c,d,e){return function(){b.one(c,function(a){return function(){h(a),r.complete.call(a[0])}}(b));if(Galleria.WEBKIT&&Galleria.TOUCH){m={},o=[0,0,0],a.each(["left","top"],function(a,c){c in d&&(o[a]=F.parseValue(d[c])-F.parseValue(b.css(c))+"px",m[c]=d[c],delete d[c])});if(o[0]||o[1])b.data("revert",m),j.push("-webkit-transform"+e),g(b,"translate3d("+o.join(",")+")","transform")}a.each(d,function(a,b){j.push(a+e)}),g(b,j.join(",")),b.css(d)}}(d,e,q,l),2)}}(),removeAlpha:function(a){if(p<9&&a){var b=a.style,c=a.currentStyle,d=c&&c.filter||b.filter||"";/alpha/.test(d)&&(b.filter=d.replace(/alpha\([^)]*\)/i,""))}},forceStyles:function(b,c){b=a(b),b.attr("style")&&b.data("styles",b.attr("style")).removeAttr("style"),b.css(c)},revertStyles:function(){a.each(F.array(arguments),function(b,c){c=a(c),c.removeAttr("style"),c.attr("style",""),c.data("styles")&&c.attr("style",c.data("styles")).data("styles",null)})},moveOut:function(a){F.forceStyles(a,{position:"absolute",left:-1e4})},moveIn:function(){F.revertStyles.apply(F,F.array(arguments))},elem:function(b){return b instanceof a?{$:b,dom:b[0]}:{$:a(b),dom:b}},hide:function(a,b,c){c=c||n;var d=F.elem(a),e=d.$;a=d.dom,e.data("opacity")||e.data("opacity",e.css("opacity"));var f={opacity:0};if(b){var g=p<9&&a?function(){F.removeAlpha(a),a.style.visibility="hidden",c.call(a)}:c;F.animate(a,f,{duration:b,complete:g,stop:!0})}else p<9&&a?(F.removeAlpha(a),a.style.visibility="hidden"):e.css(f)},show:function(a,b,c){c=c||n;var d=F.elem(a),e=d.$;a=d.dom;var f=parseFloat(e.data("opacity"))||1,g={opacity:f};if(b){p<9&&(e.css("opacity",0),a.style.visibility="visible");var h=p<9&&a?function(){g.opacity==1&&F.removeAlpha(a),c.call(a)}:c;F.animate(a,g,{duration:b,complete:h,stop:!0})}else p<9&&g.opacity==1&&a?(F.removeAlpha(a),a.style.visibility="visible"):e.css(g)},optimizeTouch:function(){var b,c,d,e,f={},g=function(b){b.preventDefault(),f=a.extend({},b,!0)},h=function(){this.evt=f},i=function(){this.handler.call(b,this.evt)};return function(f){a(f).bind("touchend",function(f){b=f.target,e=!0;while(b.parentNode&&b!=f.currentTarget&&e)c=a(b).data("events"),d=a(b).data("fakes"),c&&"click"in c?(e=!1,f.preventDefault(),a(b).click(g).click(),c.click.pop(),a.each(c.click,h),a(b).data("fakes",c.click),delete c.click):d&&(e=!1,f.preventDefault(),a.each(d,i)),b=b.parentNode})}}(),wait:function(b){b=a.extend({until:o,success:n,error:function(){Galleria.raise("Could not complete wait function.")},timeout:3e3},b);var d=F.timestamp(),e,f,g=function(){f=F.timestamp(),e=f-d;if(b.until(e))return b.success(),!1;if(typeof b.timeout=="number"&&f>=d+b.timeout)return b.error(),!1;c.setTimeout(g,10)};c.setTimeout(g,10)},toggleQuality:function(a,b){if(p!==7&&p!==8||!a||a.nodeName.toUpperCase()!="IMG")return;typeof b=="undefined"&&(b=a.style.msInterpolationMode==="nearest-neighbor"),a.style.msInterpolationMode=b?"bicubic":"nearest-neighbor"},insertStyleTag:function(b,c){if(c&&a("#"+c).length)return;var e=d.createElement("style");c&&(e.id=c),q().head.appendChild(e);if(e.styleSheet)e.styleSheet.cssText=b;else{var f=d.createTextNode(b);e.appendChild(f)}},loadScript:function(b,c){var d=!1,e=a("<script>").attr({src:b,async:!0}).get(0);e.onload=e.onreadystatechange=function(){!d&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(d=!0,e.onload=e.onreadystatechange=null,typeof c=="function"&&c.call(this,this))},q().head.appendChild(e)},parseValue:function(a){if(typeof a=="number")return a;if(typeof a=="string"){var b=a.match(/\-?\d|\./g);return b&&b.constructor===Array?b.join("")*1:0}return 0},timestamp:function(){return(new Date).getTime()},loadCSS:function(c,e,f){var g,h;a("link[rel=stylesheet]").each(function(){if((new RegExp(c)).test(this.href))return g=this,!1}),typeof e=="function"&&(f=e,e=b),f=f||n;if(g)return f.call(g,g),g;h=d.styleSheets.length;if(a("#"+e).length)a("#"+e).attr("href",c),h--;else{g=a("<link>").attr({rel:"stylesheet",href:c,id:e}).get(0);var i=a('link[rel="stylesheet"], style');i.length?i.get(0).parentNode.insertBefore(g,i[0]):q().head.appendChild(g);if(p&&h>=31){Galleria.raise("You have reached the browser stylesheet limit (31)",!0);return}}if(typeof f=="function"){var j=a("<s>").attr("id","galleria-loader").hide().appendTo(q().body);F.wait({until:function(){return j.height()==1},success:function(){j.remove(),f.call(g,g)},error:function(){j.remove(),Galleria.raise("Theme CSS could not load after 20 sec. "+(Galleria.QUIRK?"Your browser is in Quirks Mode, please add a correct doctype.":"Please download the latest theme at http://galleria.io/customer/."),!0)},timeout:5e3})}return g}}}(),G=function(){var b=function(b,c,d,e){var f=this.getOptions("easing"),g=this.getStageWidth(),h={left:g*(b.rewind?-1:1)},i={left:0};d?(h.opacity=0,i.opacity=1):h.opacity=1,a(b.next).css(h),F.animate(b.next,i,{duration:b.speed,complete:function(a){return function(){c(),a.css({left:0})}}(a(b.next).add(b.prev)),queue:!1,easing:f}),e&&(b.rewind=!b.rewind),b.prev&&(h={left:0},i={left:g*(b.rewind?1:-1)},d&&(h.opacity=1,i.opacity=0),a(b.prev).css(h),F.animate(b.prev,i,{duration:b.speed,queue:!1,easing:f,complete:function(){a(this).css("opacity",0)}}))};return{active:!1,init:function(a,b,c){G.effects.hasOwnProperty(a)&&G.effects[a].call(this,b,c)},effects:{fade:function(b,c){a(b.next).css({opacity:0,left:0}),F.animate(b.next,{opacity:1},{duration:b.speed,complete:c}),b.prev&&(a(b.prev).css("opacity",1).show(),F.animate(b.prev,{opacity:0},{duration:b.speed}))},flash:function(b,c){a(b.next).css({opacity:0,left:0}),b.prev?F.animate(b.prev,{opacity:0},{duration:b.speed/2,complete:function(){F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})}}):F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})},pulse:function(b,c){b.prev&&a(b.prev).hide(),a(b.next).css({opacity:0,left:0}).show(),F.animate(b.next,{opacity:1},{duration:b.speed,complete:c})},slide:function(a,c){b.apply(this,F.array(arguments))},fadeslide:function(a,c){b.apply(this,F.array(arguments).concat([!0]))},doorslide:function(a,c){b.apply(this,F.array(arguments).concat([!1,!0]))}}}}();y.listen(),Galleria=function(){var g=this;this._options={},this._playing=!1,this._playtime=5e3,this._active=null,this._queue={length:0},this._data=[],this._dom={},this._thumbnails=[],this._layers=[],this._initialized=!1,this._firstrun=!1,this._stageWidth=0,this._stageHeight=0,this._target=b,this._binds=[],this._id=parseInt(Math.random()*1e4,10);var h="container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip",i="current total";a.each(h.split(" "),function(a,b){g._dom[b]=F.create("galleria-"+b)}),a.each(i.split(" "),function(a,b){g._dom[b]=F.create("galleria-"+b,"span")});var j=this._keyboard={keys:{UP:38,DOWN:40,LEFT:37,RIGHT:39,RETURN:13,ESCAPE:27,BACKSPACE:8,SPACE:32},map:{},bound:!1,press:function(a){var b=a.keyCode||a.which;b in j.map&&typeof j.map[b]=="function"&&j.map[b].call(g,a)},attach:function(a){var b,c;for(b in a)a.hasOwnProperty(b)&&(c=b.toUpperCase(),c in j.keys?j.map[j.keys[c]]=a[b]:j.map[c]=a[b]);j.bound||(j.bound=!0,e.bind("keydown",j.press))},detach:function(){j.bound=!1,j.map={},e.unbind("keydown",j.press)}},k=this._controls={0:b,1:b,active:0,swap:function(){k.active=k.active?0:1},getActive:function(){return k[k.active]},getNext:function(){return k[1-k.active]}},l=this._carousel={next:g.$("thumb-nav-right"),prev:g.$("thumb-nav-left"),width:0,current:0,max:0,hooks:[],update:function(){var b=0,c=0,d=[0];a.each(g._thumbnails,function(e,f){f.ready&&(b+=f.outerWidth||a(f.container).outerWidth(!0),d[e+1]=b,c=Math.max(c,f.outerHeight||a(f.container).outerHeight(!0)))}),g.$("thumbnails").css({width:b,height:c}),l.max=b,l.hooks=d,l.width=g.$("thumbnails-list").width(),l.setClasses(),g.$("thumbnails-container").toggleClass("galleria-carousel",b>l.width),l.width=g.$("thumbnails-list").width()},bindControls:function(){var a;l.next.bind("click",function(b){b.preventDefault();if(g._options.carouselSteps==="auto"){for(a=l.current;a<l.hooks.length;a++)if(l.hooks[a]-l.hooks[l.current]>l.width){l.set(a-2);break}}else l.set(l.current+g._options.carouselSteps)}),l.prev.bind("click",function(b){b.preventDefault();if(g._options.carouselSteps==="auto")for(a=l.current;a>=0;a--){if(l.hooks[l.current]-l.hooks[a]>l.width){l.set(a+2);break}if(a===0){l.set(0);break}}else l.set(l.current-g._options.carouselSteps)})},set:function(a){a=Math.max(a,0);while(l.hooks[a-1]+l.width>=l.max&&a>=0)a--;l.current=a,l.animate()},getLast:function(a){return(a||l.current)-1},follow:function(a){if(a===0||a===l.hooks.length-2){l.set(a);return}var b=l.current;while(l.hooks[b]-l.hooks[l.current]<l.width&&b<=l.hooks.length)b++;a-1<l.current?l.set(a-1):a+2>b&&l.set(a-b+l.current+2)},setClasses:function(){l.prev.toggleClass("disabled",!l.current),l.next.toggleClass("disabled",l.hooks[l.current]+l.width>=l.max)},animate:function(a){l.setClasses();var b=l.hooks[l.current]*-1;if(isNaN(b))return;F.animate(g.get("thumbnails"),{left:b},{duration:g._options.carouselSpeed,easing:g._options.easing,queue:!1})}},m=this._tooltip={initialized:!1,open:!1,timer:"tooltip"+g._id,swapTimer:"swap"+g._id,init:function(){m.initialized=!0;var a=".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";F.insertStyleTag(a,"galleria-tooltip"),g.$("tooltip").css({opacity:.8,visibility:"visible",display:"none"})},move:function(a){var b=g.getMousePosition(a).x,c=g.getMousePosition(a).y,d=g.$("tooltip"),e=b,f=c,h=d.outerHeight(!0)+1,i=d.outerWidth(!0),j=h+15,k=g.$("container").width()-i-2,l=g.$("container").height()-h-2;!isNaN(e)&&!isNaN(f)&&(e+=10,f-=h+8,e=Math.max(0,Math.min(k,e)),f=Math.max(0,Math.min(l,f)),c<j&&(f=j),d.css({left:e,top:f}))},bind:function(b,c){if(Galleria.TOUCH)return;m.initialized||m.init();var d=function(){g.$("container").unbind("mousemove",m.move),g.clearTimer(m.timer),g.$("tooltip").stop().animate({opacity:0},200,function(){g.$("tooltip").hide(),g.addTimer(m.swapTimer,function(){m.open=!1},1e3)})},e=function(b,c){m.define(b,c),a(b).hover(function(){g.clearTimer(m.swapTimer),g.$("container").unbind("mousemove",m.move).bind("mousemove",m.move).trigger("mousemove"),m.show(b),g.addTimer(m.timer,function(){g.$("tooltip").stop().show().animate({opacity:1}),m.open=!0},m.open?0:500)},d).click(d)};typeof c=="string"?e(b in g._dom?g.get(b):b,c):a.each(b,function(a,b){e(g.get(a),b)})},show:function(b){b=a(b in g._dom?g.get(b):b);var d=b.data("tt"),e=function(a){c.setTimeout(function(a){return function(){m.move(a)}}(a),10),b.unbind("mouseup",e)};d=typeof d=="function"?d():d;if(!d)return;g.$("tooltip").html(d.replace(/\s/,"&#160;")),b.bind("mouseup",e)},define:function(b,c){if(typeof c!="function"){var d=c;c=function(){return d}}b=a(b in g._dom?g.get(b):b).data("tt",c),m.show(b)}},n=this._fullscreen={scrolled:0,crop:b,active:!1,keymap:g._keyboard.map,parseCallback:function(b,c){return G.active?function(){typeof b=="function"&&b.call(g);var d=g._controls.getActive(),e=g._controls.getNext();g._scaleImage(e),g._scaleImage(d),c&&g._options.trueFullscreen&&a(d.container).add(e.container).trigger("transitionend")}:b},enter:function(a){a=n.parseCallback(a,!0),g._options.trueFullscreen&&y.support?(n.active=!0,F.forceStyles(g.get("container"),{width:"100%",height:"100%"}),g.rescale(),Galleria.MAC?Galleria.WEBKIT?(g.$("container").css("opacity",0).addClass("fullscreen"),c.setTimeout(function(){n.scale(),g.$("container").css("opacity",1)},50)):(g.$("stage").css("opacity",0),c.setTimeout(function(){n.scale(),g.$("stage").css("opacity",1)},4)):g.$("container").addClass("fullscreen"),f.resize(n.scale),y.enter(g,a,g.get("container"))):(n.scrolled=f.scrollTop(),c.scrollTo(0,0),n._enter(a))},_enter:function(e){n.active=!0,r&&(n.iframe=function(){var b,e=d.referrer,f=d.createElement("a"),g=c.location;return f.href=e,f.protocol!=g.protocol||f.hostname!=g.hostname||f.port!=g.port?(Galleria.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."),!1):(n.pd=c.parent.document,a(n.pd).find("iframe").each(function(){var a=this.contentDocument||this.contentWindow.document;if(a===d)return b=this,!1}),b)}()),F.hide(g.getActiveImage()),r&&n.iframe&&(n.iframe.scrolled=a(c.parent).scrollTop(),c.parent.scrollTo(0,0));var h=g.getData(),i=g._options,j=!g._options.trueFullscreen||!y.support,k={height:"100%",overflow:"hidden",margin:0,padding:0};j&&(g.$("container").addClass("fullscreen"),F.forceStyles(g.get("container"),{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1e4}),F.forceStyles(q().html,k),F.forceStyles(q().body,k)),r&&n.iframe&&(F.forceStyles(n.pd.documentElement,k),F.forceStyles(n.pd.body,k),F.forceStyles(n.iframe,a.extend(k,{width:"100%",height:"100%",top:0,left:0,position:"fixed",zIndex:1e4,border:"none"}))),n.keymap=a.extend({},g._keyboard.map),g.attachKeyboard({escape:g.exitFullscreen,right:g.next,left:g.prev}),n.crop=i.imageCrop,i.fullscreenCrop!=b&&(i.imageCrop=i.fullscreenCrop);if(h&&h.big&&h.image!==h.big){var l=new Galleria.Picture,m=l.isCached(h.big),o=g.getIndex(),p=g._thumbnails[o];g.trigger({type:Galleria.LOADSTART,cached:m,rewind:!1,index:o,imageTarget:g.getActiveImage(),thumbTarget:p,galleriaData:h}),l.load(h.big,function(b){g._scaleImage(b,{complete:function(b){g.trigger({type:Galleria.LOADFINISH,cached:m,index:o,rewind:!1,imageTarget:b.image,thumbTarget:p});var c=g._controls.getActive().image;c&&a(c).width(b.image.width).height(b.image.height).attr("style",a(b.image).attr("style")).attr("src",b.image.src)}})})}g.rescale(function(){g.addTimer(!1,function(){j&&F.show(g.getActiveImage()),typeof e=="function"&&e.call(g)},100),g.trigger(Galleria.FULLSCREEN_ENTER)}),j?f.resize(n.scale):F.show(g.getActiveImage())},scale:function(){g.rescale()},exit:function(a){a=n.parseCallback(a),g._options.trueFullscreen&&y.support?y.exit(a):n._exit(a)},_exit:function(a){n.active=!1;var b=!g._options.trueFullscreen||!y.support;g.$("container").removeClass("fullscreen"),b&&(F.hide(g.getActiveImage()),F.revertStyles(g.get("container"),q().html,q().body),c.scrollTo(0,n.scrolled)),r&&n.iframe&&(F.revertStyles(n.pd.documentElement,n.pd.body,n.iframe),n.iframe.scrolled&&c.parent.scrollTo(0,n.iframe.scrolled)),g.detachKeyboard(),g.attachKeyboard(n.keymap),g._options.imageCrop=n.crop;var d=g.getData().big,e=g._controls.getActive().image;!g.getData().iframe&&e&&d&&d==e.src&&c.setTimeout(function(a){return function(){e.src=a}}(g.getData().image),1),g.rescale(function(){g.addTimer(!1,function(){b&&F.show(g.getActiveImage()),typeof a=="function"&&a.call(g),f.trigger("resize")},50),g.trigger(Galleria.FULLSCREEN_EXIT)}),f.unbind("resize",n.scale)}},o=this._idle={trunk:[],bound:!1,active:!1,add:function(b,c,d,e){if(!b)return;o.bound||o.addEvent(),b=a(b),typeof d=="boolean"&&(e=d,d={}),d=d||{};var f={},g;for(g in c)c.hasOwnProperty(g)&&(f[g]=b.css(g));b.data("idle",{from:a.extend(f,d),to:c,complete:!0,busy:!1}),e?b.css(c):o.addTimer(),o.trunk.push(b)},remove:function(b){b=a(b),a.each(o.trunk,function(a,c){c&&c.length&&!c.not(b).length&&(b.css(b.data("idle").from),o.trunk.splice(a,1))}),o.trunk.length||(o.removeEvent(),g.clearTimer(o.timer))},addEvent:function(){o.bound=!0,g.$("container").bind("mousemove click",o.showAll),g._options.idleMode=="hover"&&g.$("container").bind("mouseleave",o.hide)},removeEvent:function(){o.bound=!1,g.$("container").bind("mousemove click",o.showAll),g._options.idleMode=="hover"&&g.$("container").unbind("mouseleave",o.hide)},addTimer:function(){if(g._options.idleMode=="hover")return;g.addTimer("idle",function(){o.hide()},g._options.idleTime)},hide:function(){if(!g._options.idleMode||g.getIndex()===!1||g.getData().iframe)return;g.trigger(Galleria.IDLE_ENTER);var b=o.trunk.length;a.each(o.trunk,function(a,c){var d=c.data("idle");if(!d)return;c.data("idle").complete=!1,F.animate(c,d.to,{duration:g._options.idleSpeed,complete:function(){a==b-1&&(o.active=!1)}})})},showAll:function(){g.clearTimer("idle"),a.each(o.trunk,function(a,b){o.show(b)})},show:function(b){var c=b.data("idle");if(!o.active||!c.busy&&!c.complete)c.busy=!0,g.trigger(Galleria.IDLE_EXIT),g.clearTimer("idle"),F.animate(b,c.from,{duration:g._options.idleSpeed/2,complete:function(){o.active=!0,a(b).data("idle").busy=!1,a(b).data("idle").complete=!0}});o.addTimer()}},s=this._lightbox={width:0,height:0,initialized:!1,active:null,image:null,elems:{},keymap:!1,init:function(){g.trigger(Galleria.LIGHTBOX_OPEN);if(s.initialized)return;s.initialized=!0;var b="overlay box content shadow title info close prevholder prev nextholder next counter image",c={},d=g._options,e="",f="position:absolute;",h="lightbox-",i={overlay:"position:fixed;display:none;opacity:"+d.overlayOpacity+";filter:alpha(opacity="+d.overlayOpacity*100+");top:0;left:0;width:100%;height:100%;background:"+d.overlayBackground+";z-index:99990",box:"position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",shadow:f+"background:#000;width:100%;height:100%;",content:f+"background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",info:f+"bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",close:f+"top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",image:f+"top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",prevholder:f+"width:50%;top:0;bottom:40px;cursor:pointer;",nextholder:f+"width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",prev:f+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",next:f+"top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",title:"float:left",counter:"float:right;margin-left:8px;"},j=function(b){return b.hover(function(){a(this).css("color","#bbb")},function(){a(this).css("color","#444")})},k={};p&&p>7&&(i.nextholder+="background:#000;filter:alpha(opacity=0);",i.prevholder+="background:#000;filter:alpha(opacity=0);"),a.each(i,function(a,b){e+=".galleria-"+h+a+"{"+b+"}"}),e+=".galleria-"+h+"box.iframe .galleria-"+h+"prevholder,"+".galleria-"+h+"box.iframe .galleria-"+h+"nextholder{"+"width:100px;height:100px;top:50%;margin-top:-70px}",F.insertStyleTag(e,"galleria-lightbox"),a.each(b.split(" "),function(a,b){g.addElement("lightbox-"+b),c[b]=s.elems[b]=g.get("lightbox-"+b)}),s.image=new Galleria.Picture,a.each({box:"shadow content close prevholder nextholder",info:"title counter",content:"info image",prevholder:"prev",nextholder:"next"},function(b,c){var d=[];a.each(c.split(" "),function(a,b){d.push(h+b)}),k[h+b]=d}),g.append(k),a(c.image).append(s.image.container),a(q().body).append(c.overlay,c.box),F.optimizeTouch(c.box),j(a(c.close).bind("click",s.hide).html("&#215;")),a.each(["Prev","Next"],function(b,d){var e=a(c[d.toLowerCase()]).html(/v/.test(d)?"&#8249;&#160;":"&#160;&#8250;"),f=a(c[d.toLowerCase()+"holder"]);f.bind("click",function(){s["show"+d]()});if(p<8||Galleria.TOUCH){e.show();return}f.hover(function(){e.show()},function(a){e.stop().fadeOut(200)})}),a(c.overlay).bind("click",s.hide),Galleria.IPAD&&(g._options.lightboxTransitionSpeed=0)},rescale:function(b){var c=Math.min(f.width()-40,s.width),d=Math.min(f.height()-60,s.height),e=Math.min(c/s.width,d/s.height),h=Math.round(s.width*e)+40,i=Math.round(s.height*e)+60,j={width:h,height:i,"margin-top":Math.ceil(i/2)*-1,"margin-left":Math.ceil(h/2)*-1};b?a(s.elems.box).css(j):a(s.elems.box).animate(j,{duration:g._options.lightboxTransitionSpeed,easing:g._options.easing,complete:function(){var b=s.image,c=g._options.lightboxFadeSpeed;g.trigger({type:Galleria.LIGHTBOX_IMAGE,imageTarget:b.image}),a(b.container).show(),a(b.image).animate({opacity:1},c),F.show(s.elems.info,c)}})},hide:function(){s.image.image=null,f.unbind("resize",s.rescale),a(s.elems.box).hide(),F.hide(s.elems.info),g.detachKeyboard(),g.attachKeyboard(s.keymap),s.keymap=!1,F.hide(s.elems.overlay,200,function(){a(this).hide().css("opacity",g._options.overlayOpacity),g.trigger(Galleria.LIGHTBOX_CLOSE)})},showNext:function(){s.show(g.getNext(s.active))},showPrev:function(){s.show(g.getPrev(s.active))},show:function(b){s.active=b=typeof b=="number"?b:g.getIndex()||0,s.initialized||s.init(),s.keymap||(s.keymap=a.extend({},g._keyboard.map),g.attachKeyboard({escape:s.hide,right:s.showNext,left:s.showPrev})),f.unbind("resize",s.rescale);var d=g.getData(b),e=g.getDataLength(),h=g.getNext(b),i,j,k;F.hide(s.elems.info);try{for(k=g._options.preload;k>0;k--)j=new Galleria.Picture,i=g.getData(h),j.preload("big"in i?i.big:i.image),h=g.getNext(h)}catch(l){}s.image.isIframe=!!d.iframe,a(s.elems.box).toggleClass("iframe",!!d.iframe),s.image.load(d.iframe||d.big||d.image,function(h){if(h.isIframe){var i=a(c).width(),j=a(c).height();if(g._options.maxVideoSize){var k=Math.min(g._options.maxVideoSize/i,g._options.maxVideoSize/j);k<1&&(i*=k,j*=k)}s.width=i,s.height=j}else s.width=h.original.width,s.height=h.original.height;a(h.image).css({width:h.isIframe?"100%":"100.1%",height:h.isIframe?"100%":"100.1%",top:0,zIndex:99998,opacity:0,visibility:"visible"}),s.elems.title.innerHTML=d.title||"",s.elems.counter.innerHTML=b+1+" / "+e,f.resize(s.rescale),s.rescale()}),a(s.elems.overlay).show().css("visibility","visible"),a(s.elems.box).show()}},t=this._timer={trunk:{},add:function(a,b,d,e){a=a||(new Date).getTime(),e=e||!1,this.clear(a);if(e){var f=b;b=function(){f(),t.add(a,b,d)}}this.trunk[a]=c.setTimeout(b,d)},clear:function(a){var b=function(a){c.clearTimeout(this.trunk[a]),delete this.trunk[a]},d;if(!!a&&a in this.trunk)b.call(this,a);else if(typeof a=="undefined")for(d in this.trunk)this.trunk.hasOwnProperty(d)&&b.call(this,d)}};return this},Galleria.prototype={constructor:Galleria,init:function(c,d){var e=this;d=u(d),this._original={target:c,options:d,data:null},this._target=this._dom.target=c.nodeName?c:a(c).get(0),this._original.html=this._target.innerHTML,A.push(this);if(!this._target){Galleria.raise("Target not found",!0);return}return this._options={autoplay:!1,carousel:!0,carouselFollow:!0,carouselSpeed:400,carouselSteps:"auto",clicknext:!1,dailymotion:{foreground:"%23EEEEEE",highlight:"%235BCEC5",background:"%23222222",logo:0,hideInfos:1},dataConfig:function(a){return{}},dataSelector:"img",dataSort:!1,dataSource:this._target,debug:b,dummy:b,easing:"galleria",extend:function(a){},fullscreenCrop:b,fullscreenDoubleTap:!0,fullscreenTransition:b,height:0,idleMode:!0,idleTime:3e3,idleSpeed:200,imageCrop:!1,imageMargin:0,imagePan:!1,imagePanSmoothness:12,imagePosition:"50%",imageTimeout:b,initialTransition:b,keepSource:!1,layerFollow:!0,lightbox:!1,lightboxFadeSpeed:200,lightboxTransitionSpeed:200,linkSourceImages:!0,maxScaleRatio:b,maxVideoSize:b,minScaleRatio:b,overlayOpacity:.85,overlayBackground:"#0b0b0b",pauseOnInteraction:!0,popupLinks:!1,preload:2,queue:!0,responsive:!0,show:0,showInfo:!0,showCounter:!0,showImagenav:!0,swipe:!0,thumbCrop:!0,thumbEventType:"click",thumbFit:!0,thumbMargin:0,thumbQuality:"auto",thumbDisplayOrder:!0,thumbnails:!0,touchTransition:b,transition:"fade",transitionInitial:b,transitionSpeed:400,trueFullscreen:!0,useCanvas:!1,vimeo:{title:0,byline:0,portrait:0,color:"aaaaaa"},wait:5e3,width:"auto",youtube:{modestbranding:1,autohide:1,color:"white",hd:1,rel:0,showinfo:0}},this._options.initialTransition=this._options.initialTransition||this._options.transitionInitial,d&&d.debug===!1&&(i=!1),d&&typeof d.imageTimeout=="number"&&(j=d.imageTimeout),d&&typeof d.dummy=="string"&&(k=d.dummy),a(this._target).children().hide(),Galleria.QUIRK&&Galleria.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype."),typeof Galleria.theme=="object"?this._init():D.push(this),this},_init:function(){var b=this,e=this._options;if(this._initialized)return Galleria.raise("Init failed: Gallery instance already initialized."),this;this._initialized=!0;if(!Galleria.theme)return Galleria.raise("Init failed: No theme found.",!0),this;a.extend(!0,e,Galleria.theme.defaults,this._original.options,Galleria.configure.options),function(a){if(!("getContext"in a)){a=null;return}C=C||{elem:a,context:a.getContext("2d"),cache:{},length:0}}(d.createElement("canvas")),this.bind(Galleria.DATA,function(){this._original.data=this._data,this.get("total").innerHTML=this.getDataLength();var a=this.$("container");b._options.height<2&&(b._userRatio=b._ratio=b._options.height);var d={width:0,height:0},e=function(){return b.$("stage").height()};F.wait({until:function(){return d=b._getWH(),a.width(d.width).height(d.height),e()&&d.width&&d.height>50},success:function(){b._width=d.width,b._height=d.height,b._ratio=b._ratio||d.height/d.width,Galleria.WEBKIT?c.setTimeout(function(){b._run()},1):b._run()},error:function(){e()?Galleria.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:"+d.width+"px, height: "+d.height+"px.",!0):Galleria.raise("Could not extract a stage height from the CSS. Traced height: "+e()+"px.",!0)},timeout:typeof this._options.wait=="number"?this._options.wait:!1})}),this.append({"info-text":["info-title","info-description"],info:["info-text"],"image-nav":["image-nav-right","image-nav-left"],stage:["images","loader","counter","image-nav"],"thumbnails-list":["thumbnails"],"thumbnails-container":["thumb-nav-left","thumbnails-list","thumb-nav-right"],container:["stage","thumbnails-container","info","tooltip"]}),F.hide(this.$("counter").append(this.get("current"),d.createTextNode(" / "),this.get("total"))),this.setCounter("&#8211;"),F.hide(b.get("tooltip")),this.$("container").addClass(Galleria.TOUCH?"touch":"notouch"),a.each(new Array(2),function(c){var d=new Galleria.Picture;a(d.container).css({position:"absolute",top:0,left:0}).prepend(b._layers[c]=a(F.create("galleria-layer")).css({position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:2})[0]),b.$("images").append(d.container),b._controls[c]=d}),this.$("images").css({position:"relative",top:0,left:0,width:"100%",height:"100%"}),this.$("thumbnails, thumbnails-list").css({overflow:"hidden",position:"relative"}),this.$("image-nav-right, image-nav-left").bind("click",function(a){e.clicknext&&a.stopPropagation(),e.pauseOnInteraction&&b.pause();var c=/right/.test(this.className)?"next":"prev";b[c]()}),a.each(["info","counter","image-nav"],function(a,c){e["show"+c.substr(0,1).toUpperCase()+c.substr(1).replace(/-/,"")]===!1&&F.moveOut(b.get(c.toLowerCase()))}),this.load(),!e.keepSource&&!p&&(this._target.innerHTML=""),this.get("errors")&&this.appendChild("target","errors"),this.appendChild("target","container");if(e.carousel){var g=0,h=e.show;this.bind(Galleria.THUMBNAIL,function(){this.updateCarousel(),++g==this.getDataLength()&&typeof h=="number"&&h>0&&this._carousel.follow(h)})}return e.responsive&&f.bind("resize",function(){b.isFullscreen()||b.resize()}),e.swipe&&(function(a){var c=[0,0],d=[0,0],e=30,f=100,g=!1,h=0,i,j={start:"touchstart",move:"touchmove",stop:"touchend"},k=function(
a){return a.originalEvent.touches?a.originalEvent.touches[0]:a},l=function(a){if(a.originalEvent.touches&&a.originalEvent.touches.length>1)return;i=k(a),d=[i.pageX,i.pageY],c[0]||(c=d),Math.abs(c[0]-d[0])>10&&a.preventDefault()},m=function(i){a.unbind(j.move,l);if(i.originalEvent.touches&&i.originalEvent.touches.length||g){g=!g;return}F.timestamp()-h<1e3&&Math.abs(c[0]-d[0])>e&&Math.abs(c[1]-d[1])<f&&(i.preventDefault(),b[c[0]>d[0]?"next":"prev"]()),c=d=[0,0]};a.bind(j.start,function(b){if(b.originalEvent.touches&&b.originalEvent.touches.length>1)return;i=k(b),h=F.timestamp(),c=d=[i.pageX,i.pageY],a.bind(j.move,l).one(j.stop,m)})}(b.$("images")),e.fullscreenDoubleTap&&this.$("stage").bind("touchstart",function(){var a,c,d,e,f,g,h=function(a){return a.originalEvent.touches?a.originalEvent.touches[0]:a};return function(i){g=Galleria.utils.timestamp(),c=h(i).pageX,d=h(i).pageY;if(g-a<500&&c-e<20&&d-f<20){b.toggleFullscreen(),i.preventDefault(),b.$("stage").unbind("touchend",arguments.callee);return}a=g,e=c,f=d}}())),F.optimizeTouch(this.get("container")),a.each(Galleria.on.binds,function(c,d){a.inArray(d.hash,b._binds)==-1&&b.bind(d.type,d.callback)}),this},addTimer:function(){return this._timer.add.apply(this._timer,F.array(arguments)),this},clearTimer:function(){return this._timer.clear.apply(this._timer,F.array(arguments)),this},_getWH:function(){var b=this.$("container"),c=this.$("target"),d=this,e={},f;return a.each(["width","height"],function(a,g){d._options[g]&&typeof d._options[g]=="number"?e[g]=d._options[g]:(f=[F.parseValue(b.css(g)),F.parseValue(c.css(g)),b[g](),c[g]()],d["_"+g]||f.splice(f.length,F.parseValue(b.css("min-"+g)),F.parseValue(c.css("min-"+g))),e[g]=Math.max.apply(Math,f))}),d._userRatio&&(e.height=e.width*d._userRatio),e},_createThumbnails:function(b){this.get("total").innerHTML=this.getDataLength();var e,f,g,h,i,j=this,k=this._options,l=b?this._data.length-b.length:0,m=l,n=[],o=0,q=p<8?"http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif":"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",r=function(){var a=j.$("thumbnails").find(".active");return a.length?a.find("img").attr("src"):!1}(),s=typeof k.thumbnails=="string"?k.thumbnails.toLowerCase():null,t=function(a){return d.defaultView&&d.defaultView.getComputedStyle?d.defaultView.getComputedStyle(f.container,null)[a]:i.css(a)},u=function(b,c,d){return function(){a(d).append(b),j.trigger({type:Galleria.THUMBNAIL,thumbTarget:b,index:c,galleriaData:j.getData(c)})}},v=function(b){k.pauseOnInteraction&&j.pause();var c=a(b.currentTarget).data("index");j.getIndex()!==c&&j.show(c),b.preventDefault()},x=function(b,c){a(b.container).css("visibility","visible"),j.trigger({type:Galleria.THUMBNAIL,thumbTarget:b.image,index:b.data.order,galleriaData:j.getData(b.data.order)}),typeof c=="function"&&c.call(j,b)},y=function(b,c){b.scale({width:b.data.width,height:b.data.height,crop:k.thumbCrop,margin:k.thumbMargin,canvas:k.useCanvas,complete:function(b){var d=["left","top"],e=["Width","Height"],f,g,h=j.getData(b.index),i=h.thumb.split(":");a.each(e,function(c,e){f=e.toLowerCase(),(k.thumbCrop!==!0||k.thumbCrop===f)&&k.thumbFit&&(g={},g[f]=b[f],a(b.container).css(g),g={},g[d[c]]=0,a(b.image).css(g)),b["outer"+e]=a(b.container)["outer"+e](!0)}),F.toggleQuality(b.image,k.thumbQuality===!0||k.thumbQuality==="auto"&&b.original.width<b.width*3),h.iframe&&i.length==2&&i[0]in w?w[i[0]].getThumb(i[1],function(a){return function(d){a.src=d,x(b,c)}}(b.image)):k.thumbDisplayOrder&&!b.lazy?a.each(n,function(a,b){if(a===o&&b.ready&&!b.displayed){o++,b.displayed=!0,x(b,c);return}}):x(b,c)}})};b||(this._thumbnails=[],this.$("thumbnails").empty());for(;this._data[l];l++)g=this._data[l],e=g.thumb||g.image,k.thumbnails!==!0&&s!="lazy"||!g.thumb&&!g.image?g.iframe||s==="empty"||s==="numbers"?(f={container:F.create("galleria-image"),image:F.create("img","span"),ready:!0},s==="numbers"&&a(f.image).text(l+1),g.iframe&&a(f.image).addClass("iframe"),this.$("thumbnails").append(f.container),c.setTimeout(u(f.image,l,f.container),50+l*20)):f={container:null,image:null}:(f=new Galleria.Picture(l),f.index=l,f.displayed=!1,f.lazy=!1,f.video=!1,this.$("thumbnails").append(f.container),i=a(f.container),i.css("visibility","hidden"),f.data={width:F.parseValue(t("width")),height:F.parseValue(t("height")),order:l,src:e},k.thumbFit&&k.thumbCrop!==!0?i.css({width:"auto",height:"auto"}):i.css({width:f.data.width,height:f.data.height}),h=e.split(":"),h.length==2&&h[0]in w?(f.video=!0,f.ready=!0,f.load(q,{height:f.data.height,width:f.data.height*1.25},y)):s=="lazy"?(i.addClass("lazy"),f.lazy=!0,f.load(q,{height:f.data.height,width:f.data.width})):f.load(e,y),k.preload==="all"&&f.preload(g.image)),a(f.container).add(k.keepSource&&k.linkSourceImages?g.original:null).data("index",l).bind(k.thumbEventType,v).data("thumbload",y),r===e&&a(f.container).addClass("active"),this._thumbnails.push(f);return n=this._thumbnails.slice(m),this},lazyLoad:function(b,c){var d=b.constructor==Array?b:[b],e=this,f=this.$("thumbnails").children().filter(function(){return a(this).data("lazy-src")}),g=0;return a.each(d,function(b,f){if(f>e._thumbnails.length-1)return;var h=e._thumbnails[f],i=h.data,j=i.src.split(":"),k=function(){++g==d.length&&typeof c=="function"&&c.call(e)},l=a(h.container).data("thumbload");h.video?l.call(e,h,k):h.load(i.src,function(a){l.call(e,a,k)})}),this},lazyLoadChunks:function(a,b){var d=this.getDataLength(),e=0,f=0,g=[],h=[],i=this;b=b||0;for(;e<d;e++){h.push(e);if(++f==a||e==d-1)g.push(h),f=0,h=[]}var j=function(a){var d=g.shift();d&&c.setTimeout(function(){i.lazyLoad(d,function(){j(!0)})},b&&a?b:0)};return j(!1),this},_run:function(){var d=this;d._createThumbnails(),F.wait({timeout:1e4,until:function(){return Galleria.OPERA&&d.$("stage").css("display","inline-block"),d._stageWidth=d.$("stage").width(),d._stageHeight=d.$("stage").height(),d._stageWidth&&d._stageHeight>50},success:function(){z.push(d),F.show(d.get("counter")),d._options.carousel&&d._carousel.bindControls(),d._options.autoplay&&(d.pause(),typeof d._options.autoplay=="number"&&(d._playtime=d._options.autoplay),d._playing=!0);if(d._firstrun){d._options.autoplay&&d.trigger(Galleria.PLAY),typeof d._options.show=="number"&&d.show(d._options.show);return}d._firstrun=!0,Galleria.History&&Galleria.History.change(function(a){isNaN(a)?c.history.go(-1):d.show(a,b,!0)}),d.trigger(Galleria.READY),Galleria.theme.init.call(d,d._options),a.each(Galleria.ready.callbacks,function(a,b){typeof b=="function"&&b.call(d,d._options)}),d._options.extend.call(d,d._options),/^[0-9]{1,4}$/.test(m)&&Galleria.History?d.show(m,b,!0):d._data[d._options.show]&&d.show(d._options.show),d._options.autoplay&&d.trigger(Galleria.PLAY)},error:function(){Galleria.raise("Stage width or height is too small to show the gallery. Traced measures: width:"+d._stageWidth+"px, height: "+d._stageHeight+"px.",!0)}})},load:function(b,c,d){var e=this,f=this._options;return this._data=[],this._thumbnails=[],this.$("thumbnails").empty(),typeof c=="function"&&(d=c,c=null),b=b||f.dataSource,c=c||f.dataSelector,d=d||f.dataConfig,/^function Object/.test(b.constructor)&&(b=[b]),b.constructor===Array?this.validate(b)?this._data=b:Galleria.raise("Load failed: JSON Array not valid."):(c+=",.video,.iframe",a(b).find(c).each(function(b,c){c=a(c);var f={},g=c.parent(),h=g.attr("href"),i=g.attr("rel");h&&(c[0].nodeName=="IMG"||c.hasClass("video"))&&x(h)?f.video=h:h&&c.hasClass("iframe")?f.iframe=h:f.image=f.big=h,i&&(f.big=i),a.each("big title description link layer".split(" "),function(a,b){c.data(b)&&(f[b]=c.data(b))}),e._data.push(a.extend({title:c.attr("title")||"",thumb:c.attr("src"),image:c.attr("src"),big:c.attr("src"),description:c.attr("alt")||"",link:c.attr("longdesc"),original:c.get(0)},f,d(c)))})),typeof f.dataSort=="function"?g.sort.call(this._data,f.dataSort):f.dataSort=="random"&&this._data.sort(function(){return Math.round(Math.random())-.5}),this.getDataLength()&&this._parseData().trigger(Galleria.DATA),this},_parseData:function(){var b=this,c;return a.each(this._data,function(d,e){c=b._data[d],"thumb"in e==0&&(c.thumb=e.image),!1 in e&&(c.big=e.image);if("video"in e){var f=x(e.video);if(f){c.iframe=w[f.provider].embed(f.id)+function(){if(typeof b._options[f.provider]=="object"){var c="?",d=[];return a.each(b._options[f.provider],function(a,b){d.push(a+"="+b)}),f.provider=="youtube"&&(d=["wmode=opaque"].concat(d)),c+d.join("&")}return""}(),delete c.video;if(!("thumb"in c)||!c.thumb)c.thumb=f.provider+":"+f.id}}}),this},destroy:function(){return this.$("target").data("galleria",null),this.$("container").unbind("galleria"),this.get("target").innerHTML=this._original.html,this.clearTimer(),F.removeFromArray(A,this),F.removeFromArray(z,this),this},splice:function(){var a=this,b=F.array(arguments);return c.setTimeout(function(){g.splice.apply(a._data,b),a._parseData()._createThumbnails()},2),a},push:function(){var a=this,b=F.array(arguments);return b.length==1&&b[0].constructor==Array&&(b=b[0]),c.setTimeout(function(){g.push.apply(a._data,b),a._parseData()._createThumbnails(b)},2),a},_getActive:function(){return this._controls.getActive()},validate:function(a){return!0},bind:function(a,b){return a=v(a),this.$("container").bind(a,this.proxy(b)),this},unbind:function(a){return a=v(a),this.$("container").unbind(a),this},trigger:function(b){return b=typeof b=="object"?a.extend(b,{scope:this}):{type:v(b),scope:this},this.$("container").trigger(b),this},addIdleState:function(a,b,c,d){return this._idle.add.apply(this._idle,F.array(arguments)),this},removeIdleState:function(a){return this._idle.remove.apply(this._idle,F.array(arguments)),this},enterIdleMode:function(){return this._idle.hide(),this},exitIdleMode:function(){return this._idle.showAll(),this},enterFullscreen:function(a){return this._fullscreen.enter.apply(this,F.array(arguments)),this},exitFullscreen:function(a){return this._fullscreen.exit.apply(this,F.array(arguments)),this},toggleFullscreen:function(a){return this._fullscreen[this.isFullscreen()?"exit":"enter"].apply(this,F.array(arguments)),this},bindTooltip:function(a,b){return this._tooltip.bind.apply(this._tooltip,F.array(arguments)),this},defineTooltip:function(a,b){return this._tooltip.define.apply(this._tooltip,F.array(arguments)),this},refreshTooltip:function(a){return this._tooltip.show.apply(this._tooltip,F.array(arguments)),this},openLightbox:function(){return this._lightbox.show.apply(this._lightbox,F.array(arguments)),this},closeLightbox:function(){return this._lightbox.hide.apply(this._lightbox,F.array(arguments)),this},getActiveImage:function(){return this._getActive().image||b},getActiveThumb:function(){return this._thumbnails[this._active].image||b},getMousePosition:function(a){return{x:a.pageX-this.$("container").offset().left,y:a.pageY-this.$("container").offset().top}},addPan:function(b){if(this._options.imageCrop===!1)return;b=a(b||this.getActiveImage());var c=this,d=b.width()/2,e=b.height()/2,f=parseInt(b.css("left"),10),g=parseInt(b.css("top"),10),h=f||0,i=g||0,j=0,k=0,l=!1,m=F.timestamp(),n=0,o=0,q=function(a,c,d){if(a>0){o=Math.round(Math.max(a*-1,Math.min(0,c)));if(n!==o){n=o;if(p===8)b.parent()["scroll"+d](o*-1);else{var e={};e[d.toLowerCase()]=o,b.css(e)}}}},r=function(a){if(F.timestamp()-m<50)return;l=!0,d=c.getMousePosition(a).x,e=c.getMousePosition(a).y},s=function(a){if(!l)return;j=b.width()-c._stageWidth,k=b.height()-c._stageHeight,f=d/c._stageWidth*j*-1,g=e/c._stageHeight*k*-1,h+=(f-h)/c._options.imagePanSmoothness,i+=(g-i)/c._options.imagePanSmoothness,q(k,i,"Top"),q(j,h,"Left")};return p===8&&(b.parent().scrollTop(i*-1).scrollLeft(h*-1),b.css({top:0,left:0})),this.$("stage").unbind("mousemove",r).bind("mousemove",r),this.addTimer("pan"+c._id,s,50,!0),this},proxy:function(a,b){return typeof a!="function"?n:(b=b||this,function(){return a.apply(b,F.array(arguments))})},removePan:function(){return this.$("stage").unbind("mousemove"),this.clearTimer("pan"+this._id),this},addElement:function(b){var c=this._dom;return a.each(F.array(arguments),function(a,b){c[b]=F.create("galleria-"+b)}),this},attachKeyboard:function(a){return this._keyboard.attach.apply(this._keyboard,F.array(arguments)),this},detachKeyboard:function(){return this._keyboard.detach.apply(this._keyboard,F.array(arguments)),this},appendChild:function(a,b){return this.$(a).append(this.get(b)||b),this},prependChild:function(a,b){return this.$(a).prepend(this.get(b)||b),this},remove:function(a){return this.$(F.array(arguments).join(",")).remove(),this},append:function(a){var b,c;for(b in a)if(a.hasOwnProperty(b))if(a[b].constructor===Array)for(c=0;a[b][c];c++)this.appendChild(b,a[b][c]);else this.appendChild(b,a[b]);return this},_scaleImage:function(b,c){b=b||this._controls.getActive();if(!b)return;var d=this,e,f=function(b){a(b.container).children(":first").css({top:Math.max(0,F.parseValue(b.image.style.top)),left:Math.max(0,F.parseValue(b.image.style.left)),width:F.parseValue(b.image.width),height:F.parseValue(b.image.height)})};return c=a.extend({width:this._stageWidth,height:this._stageHeight,crop:this._options.imageCrop,max:this._options.maxScaleRatio,min:this._options.minScaleRatio,margin:this._options.imageMargin,position:this._options.imagePosition,iframelimit:this._options.maxVideoSize},c),this._options.layerFollow&&this._options.imageCrop!==!0?typeof c.complete=="function"?(e=c.complete,c.complete=function(){e.call(b,b),f(b)}):c.complete=f:a(b.container).children(":first").css({top:0,left:0}),b.scale(c),this},updateCarousel:function(){return this._carousel.update(),this},resize:function(c,d){typeof c=="function"&&(d=c,c=b),c=a.extend({width:0,height:0},c);var e=this,f=this.$("container");return a.each(c,function(a,b){b||(f[a]("auto"),c[a]=e._getWH()[a])}),a.each(c,function(a,b){f[a](b)}),this.rescale(d)},rescale:function(a,c,d){var e=this;typeof a=="function"&&(d=a,a=b);var f=function(){e._stageWidth=a||e.$("stage").width(),e._stageHeight=c||e.$("stage").height(),e._scaleImage(),e._options.carousel&&e.updateCarousel(),e.trigger(Galleria.RESCALE),typeof d=="function"&&d.call(e)};return f.call(e),this},refreshImage:function(){return this._scaleImage(),this._options.imagePan&&this.addPan(),this},show:function(a,b,c){if(this._queue.length>3||a===!1||!this._options.queue&&this._queue.stalled)return;a=Math.max(0,Math.min(parseInt(a,10),this.getDataLength()-1)),b=typeof b!="undefined"?!!b:a<this.getIndex(),c=c||!1;if(!c&&Galleria.History){Galleria.History.set(a.toString());return}return this._active=a,g.push.call(this._queue,{index:a,rewind:b}),this._queue.stalled||this._show(),this},_show:function(){var d=this,e=this._queue[0],f=this.getData(e.index);if(!f)return;var h=f.iframe||(this.isFullscreen()&&"big"in f?f.big:f.image),i=this._controls.getActive(),j=this._controls.getNext(),k=j.isCached(h),l=this._thumbnails[e.index],m=function(){a(j.image).trigger("mouseup")},n=function(b,e,f,h,i){return function(){var j;G.active=!1,F.toggleQuality(e.image,d._options.imageQuality),d._layers[d._controls.active].innerHTML="",a(f.container).css({zIndex:0,opacity:0}).show(),f.isIframe&&a(f.container).find("iframe").remove(),d.$("container").toggleClass("iframe",!!b.iframe),a(e.container).css({zIndex:1,left:0,top:0}).show(),d._controls.swap(),d._options.imagePan&&d.addPan(e.image),(b.link||d._options.lightbox||d._options.clicknext)&&a(e.image).css({cursor:"pointer"}).bind("mouseup",function(a){if(typeof a.which=="number"&&a.which>1)return;if(d._options.clicknext&&!Galleria.TOUCH){d._options.pauseOnInteraction&&d.pause(),d.next();return}if(b.link){d._options.popupLinks?j=c.open(b.link,"_blank"):c.location.href=b.link;return}d._options.lightbox&&d.openLightbox()}),d._playCheck(),d.trigger({type:Galleria.IMAGE,index:h.index,imageTarget:e.image,thumbTarget:i.image,galleriaData:b}),g.shift.call(d._queue),d._queue.stalled=!1,d._queue.length&&d._show()}}(f,j,i,e,l);this._options.carousel&&this._options.carouselFollow&&this._carousel.follow(e.index);if(this._options.preload){var o,p,q=this.getNext(),r;try{for(p=this._options.preload;p>0;p--)o=new Galleria.Picture,r=d.getData(q),o.preload(this.isFullscreen()&&"big"in r?r.big:r.image),q=d.getNext(q)}catch(s){}}F.show(j.container),j.isIframe=!!f.iframe,a(d._thumbnails[e.index].container).addClass("active").siblings(".active").removeClass("active"),d.trigger({type:Galleria.LOADSTART,cached:k,index:e.index,rewind:e.rewind,imageTarget:j.image,thumbTarget:l.image,galleriaData:f}),d._queue.stalled=!0,j.load(h,function(c){var g=a(d._layers[1-d._controls.active]).html(f.layer||"").hide();d._scaleImage(c,{complete:function(c){"image"in i&&F.toggleQuality(i.image,!1),F.toggleQuality(c.image,!1),d.removePan(),d.setInfo(e.index),d.setCounter(e.index),f.layer&&(g.show(),(f.link||d._options.lightbox||d._options.clicknext)&&g.css("cursor","pointer").unbind("mouseup").mouseup(m));var h=d._options.transition;a.each({initial:i.image===null,touch:Galleria.TOUCH,fullscreen:d.isFullscreen()},function(a,c){if(c&&d._options[a+"Transition"]!==b)return h=d._options[a+"Transition"],!1});if(h in G.effects==0)n();else{var j={prev:i.container,next:c.container,rewind:e.rewind,speed:d._options.transitionSpeed||400};G.active=!0,G.init.call(d,h,j,n)}d.trigger({type:Galleria.LOADFINISH,cached:k,index:e.index,rewind:e.rewind,imageTarget:c.image,thumbTarget:d._thumbnails[e.index].image,galleriaData:d.getData(e.index)})}})})},getNext:function(a){return a=typeof a=="number"?a:this.getIndex(),a===this.getDataLength()-1?0:a+1},getPrev:function(a){return a=typeof a=="number"?a:this.getIndex(),a===0?this.getDataLength()-1:a-1},next:function(){return this.getDataLength()>1&&this.show(this.getNext(),!1),this},prev:function(){return this.getDataLength()>1&&this.show(this.getPrev(),!0),this},get:function(a){return a in this._dom?this._dom[a]:null},getData:function(a){return a in this._data?this._data[a]:this._data[this._active]},getDataLength:function(){return this._data.length},getIndex:function(){return typeof this._active=="number"?this._active:!1},getStageHeight:function(){return this._stageHeight},getStageWidth:function(){return this._stageWidth},getOptions:function(a){return typeof a=="undefined"?this._options:this._options[a]},setOptions:function(b,c){return typeof b=="object"?a.extend(this._options,b):this._options[b]=c,this},play:function(a){return this._playing=!0,this._playtime=a||this._playtime,this._playCheck(),this.trigger(Galleria.PLAY),this},pause:function(){return this._playing=!1,this.trigger(Galleria.PAUSE),this},playToggle:function(a){return this._playing?this.pause():this.play(a)},isPlaying:function(){return this._playing},isFullscreen:function(){return this._fullscreen.active},_playCheck:function(){var a=this,b=0,c=20,d=F.timestamp(),e="play"+this._id;if(this._playing){this.clearTimer(e);var f=function(){b=F.timestamp()-d;if(b>=a._playtime&&a._playing){a.clearTimer(e),a.next();return}a._playing&&(a.trigger({type:Galleria.PROGRESS,percent:Math.ceil(b/a._playtime*100),seconds:Math.floor(b/1e3),milliseconds:b}),a.addTimer(e,f,c))};a.addTimer(e,f,c)}},setPlaytime:function(a){return this._playtime=a,this},setIndex:function(a){return this._active=a,this},setCounter:function(a){typeof a=="number"?a++:typeof a=="undefined"&&(a=this.getIndex()+1),this.get("current").innerHTML=a;if(p){var b=this.$("counter"),c=b.css("opacity");parseInt(c,10)===1?F.removeAlpha(b[0]):this.$("counter").css("opacity",c)}return this},setInfo:function(b){var c=this,d=this.getData(b);return a.each(["title","description"],function(a,b){var e=c.$("info-"+b);d[b]?e[d[b].length?"show":"hide"]().html(d[b]):e.empty().hide()}),this},hasInfo:function(a){var b="title description".split(" "),c;for(c=0;b[c];c++)if(!!this.getData(a)[b[c]])return!0;return!1},jQuery:function(b){var c=this,d=[];a.each(b.split(","),function(b,e){e=a.trim(e),c.get(e)&&d.push(e)});var e=a(c.get(d.shift()));return a.each(d,function(a,b){e=e.add(c.get(b))}),e},$:function(a){return this.jQuery.apply(this,F.array(arguments))}},a.each(t,function(a,b){var c=/_/.test(b)?b.replace(/_/g,""):b;Galleria[b.toUpperCase()]="galleria."+c}),a.extend(Galleria,{IE9:p===9,IE8:p===8,IE7:p===7,IE6:p===6,IE:p,WEBKIT:/webkit/.test(l),CHROME:/chrome/.test(l),SAFARI:/safari/.test(l)&&!/chrome/.test(l),QUIRK:p&&d.compatMode&&d.compatMode==="BackCompat",MAC:/mac/.test(navigator.platform.toLowerCase()),OPERA:!!c.opera,IPHONE:/iphone/.test(l),IPAD:/ipad/.test(l),ANDROID:/android/.test(l),TOUCH:"ontouchstart"in d}),Galleria.addTheme=function(b){b.name||Galleria.raise("No theme name specified"),typeof b.defaults!="object"?b.defaults={}:b.defaults=u(b.defaults);var d=!1,e;return typeof b.css=="string"?(a("link").each(function(a,c){e=new RegExp(b.css);if(e.test(c.href))return d=!0,E(b),!1}),d||a("script").each(function(a,f){e=new RegExp("galleria\\."+b.name.toLowerCase()+"\\."),e.test(f.src)&&(d=f.src.replace(/[^\/]*$/,"")+b.css,c.setTimeout(function(){F.loadCSS(d,"galleria-theme",function(){E(b)})},1))}),d||Galleria.raise("No theme CSS loaded")):E(b),b},Galleria.loadTheme=function(b,d){if(a("script").filter(function(){return a(this).attr("src")==b}).length)return;var e=!1,f;return a(c).load(function(){e||(f=c.setTimeout(function(){!e&&!Galleria.theme&&Galleria.raise("Galleria had problems loading theme at "+b+". Please check theme path or load manually.",!0)},2e4))}),Galleria.unloadTheme(),F.loadScript(b,function(){e=!0,c.clearTimeout(f)}),Galleria},Galleria.unloadTheme=function(){return typeof Galleria.theme=="object"&&(a("script").each(function(b,c){(new RegExp("galleria\\."+Galleria.theme.name+"\\.")).test(c.src)&&a(c).remove()}),Galleria.theme=b),Galleria},Galleria.get=function(a){if(!!A[a])return A[a];if(typeof a!="number")return A;Galleria.raise("Gallery index "+a+" not found")},Galleria.configure=function(b,c){var d={};return typeof b=="string"&&c?(d[b]=c,b=d):a.extend(d,b),Galleria.configure.options=d,a.each(Galleria.get(),function(a,b){b.setOptions(d)}),Galleria},Galleria.configure.options={},Galleria.on=function(b,c){if(!b)return;c=c||n;var d=b+c.toString().replace(/\s/g,"")+F.timestamp();return a.each(Galleria.get(),function(a,e){e._binds.push(d),e.bind(b,c)}),Galleria.on.binds.push({type:b,callback:c,hash:d}),Galleria},Galleria.on.binds=[],Galleria.run=function(b,c){return a.isFunction(c)&&(c={extend:c}),a(b||"#galleria").galleria(c),Galleria},Galleria.addTransition=function(a,b){return G.effects[a]=b,Galleria},Galleria.utils=F,Galleria.log=function(){var b=F.array(arguments);if(!("console"in c&&"log"in c.console))return c.alert(b.join("<br>"));try{return c.console.log.apply(c.console,b)}catch(d){a.each(b,function(){c.console.log(this)})}},Galleria.ready=function(b){return typeof b!="function"?Galleria:(a.each(z,function(a,c){b.call(c,c._options)}),Galleria.ready.callbacks.push(b),Galleria)},Galleria.ready.callbacks=[],Galleria.raise=function(b,c){var d=c?"Fatal error":"Error",e=this,f={color:"#fff",position:"absolute",top:0,left:0,zIndex:1e5},g=function(b){var e='<div style="padding:4px;margin:0 0 2px;background:#'+(c?"811":"222")+';">'+(c?"<strong>"+d+": </strong>":"")+b+"</div>";a.each(A,function(){var a=this.$("errors"),b=this.$("target");a.length||(b.css("position","relative"),a=this.addElement("errors").appendChild("target","errors").$("errors").css(f)),a.append(e)}),A.length||a("<div>").css(a.extend(f,{position:"fixed"})).append(e).appendTo(q().body)};if(i){g(b);if(c)throw new Error(d+": "+b)}else if(c){if(B)return;B=!0,c=!1,g("Gallery could not load.")}},Galleria.version=h,Galleria.requires=function(a,b){return b=b||"You need to upgrade Galleria to version "+a+" to use one or more components.",Galleria.version<a&&Galleria.raise(b,!0),Galleria},Galleria.Picture=function(b){this.id=b||null,this.image=null,this.container=F.create("galleria-image"),a(this.container).css({overflow:"hidden",position:"relative"}),this.original={width:0,height:0},this.ready=!1,this.isIframe=!1},Galleria.Picture.prototype={cache:{},show:function(){F.show(this.image)},hide:function(){F.moveOut(this.image)},clear:function(){this.image=null},isCached:function(a){return!!this.cache[a]},preload:function(b){a(new Image).load(function(a,b){return function(){b[a]=a}}(b,this.cache)).attr("src",b)},load:function(b,d,e){typeof d=="function"&&(e=d,d=null);if(this.isIframe){var f="if"+(new Date).getTime();return this.image=a("<iframe>",{src:b,frameborder:0,id:f,allowfullscreen:!0,css:{visibility:"hidden"}})[0],a(this.container).find("iframe,img").remove(),this.container.appendChild(this.image),a("#"+f).load(function(b,d){return function(){c.setTimeout(function(){a(b.image).css("visibility","visible"),typeof d=="function"&&d.call(b,b)},10)}}(this,e)),this.container}this.image=new Image,Galleria.IE8&&a(this.image).css("filter","inherit");var g=0,h=!1,i=!1,j=a(this.container),l=a(this.image),m=function(){h?k?a(this).attr("src",k):Galleria.raise("Image not found: "+b):(h=!0,c.setTimeout(function(a,b){return function(){a.attr("src",b+"?"+F.timestamp())}}(a(this),b),50))},n=function(b,e,f){return function(){var g=function(){a(this).unbind("load"),b.original=d||{height:this.height,width:this.width},b.container.appendChild(this),b.cache[f]=f,typeof e=="function"&&c.setTimeout(function(){e.call(b,b)},1)};!this.width||!this.height?c.setTimeout(function(b){return function(){b.width&&b.height?g.call(b):i?Galleria.raise("Could not extract width/height from image: "+b.src+". Traced measures: width:"+b.width+"px, height: "+b.height+"px."):(a(new Image).load(n).attr("src",b.src),i=!0)}}(this),2):g.call(this)}}(this,e,b);return j.find("iframe,img").remove(),l.css("display","block"),F.hide(this.image),a.each("minWidth minHeight maxWidth maxHeight".split(" "),function(a,b){l.css(b,/min/.test(b)?"0":"none")}),l.load(n).error(m).attr("src",b),this.container},scale:function(c){var d=this;c=a.extend({width:0,height:0,min:b,max:b,margin:0,complete:n,position:"center",crop:!1,canvas:!1,iframelimit:b},c);if(this.isIframe){var e=c.width,f=c.height,g,h;if(c.iframelimit){var i=Math.min(c.iframelimit/e,c.iframelimit/f);i<1?(g=e*i,h=f*i,a(this.image).css({top:f/2-h/2,left:e/2-g/2,position:"absolute"})):a(this.image).css({top:0,left:0})}a(this.image).width(g||e).height(h||f).removeAttr("width").removeAttr("height"),a(this.container).width(e).height(f),c.complete.call(d,d);try{this.image.contentWindow&&a(this.image.contentWindow).trigger("resize")}catch(j){}return this.container}if(!this.image)return this.container;var k,l,m=a(d.container),o;return F.wait({until:function(){return k=c.width||m.width()||F.parseValue(m.css("width")),l=c.height||m.height()||F.parseValue(m.css("height")),k&&l},success:function(){var b=(k-c.margin*2)/d.original.width,e=(l-c.margin*2)/d.original.height,f=Math.min(b,e),g=Math.max(b,e),h={"true":g,width:b,height:e,"false":f,landscape:d.original.width>d.original.height?g:f,portrait:d.original.width<d.original.height?g:f},i=h[c.crop.toString()],j="";c.max&&(i=Math.min(c.max,i)),c.min&&(i=Math.max(c.min,i)),a.each(["width","height"],function(b,c){a(d.image)[c](d[c]=d.image[c]=Math.round(d.original[c]*i))}),a(d.container).width(k).height(l),c.canvas&&C&&(C.elem.width=d.width,C.elem.height=d.height,j=d.image.src+":"+d.width+"x"+d.height,d.image.src=C.cache[j]||function(a){C.context.drawImage(d.image,0,0,d.original.width*i,d.original.height*i);try{return o=C.elem.toDataURL(),C.length+=o.length,C.cache[a]=o,o}catch(b){return d.image.src}}(j));var m={},n={},p=function(b,c,e){var f=0;if(/\%/.test(b)){var g=parseInt(b,10)/100,h=d.image[c]||a(d.image)[c]();f=Math.ceil(h*-1*g+e*g)}else f=F.parseValue(b);return f},q={top:{top:0},left:{left:0},right:{left:"100%"},bottom:{top:"100%"}};a.each(c.position.toLowerCase().split(" "),function(a,b){b==="center"&&(b="50%"),m[a?"top":"left"]=b}),a.each(m,function(b,c){q.hasOwnProperty(c)&&a.extend(n,q[c])}),m=m.top?a.extend(m,n):n,m=a.extend({top:"50%",left:"50%"},m),a(d.image).css({position:"absolute",top:p(m.top,"height",l),left:p(m.left,"width",k)}),d.show(),d.ready=!0,c.complete.call(d,d)},error:function(){Galleria.raise("Could not scale image: "+d.image.src)},timeout:1e3}),this}},a.extend(a.easing,{galleria:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},galleriaIn:function(a,b,c,d,e){return d*(b/=e)*b+c},galleriaOut:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c}}),a.fn.galleria=function(b){var c=this.selector;return a(this).length?this.each(function(){a.data(this,"galleria")&&(a.data(this,"galleria").destroy(),a(this).find("*").hide()),a.data(this,"galleria",(new Galleria).init(this,b))}):(a(function(){a(c).length?a(c).galleria(b):Galleria.utils.wait({until:function(){return a(c).length},success:function(){a(c).galleria(b)},error:function(){Galleria.raise('Init failed: Galleria could not find the element "'+c+'".')},timeout:5e3})}),this)}})(jQuery);;
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
