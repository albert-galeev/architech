// page init
jQuery(function(){
  initSlick();
  initTouchNav();
  initToTop();
  initMobileNav();
  initDropDownClasses();
  initOpenClose();
  initStickyScrollBlock();
  initWow();
  initCounter();
  initAnchors();
  initTabsVertical();
  initAccordion();
  initForm();
});

function initForm() {
  $(".callback_input").focus(function() {
    $(this).addClass("focus");
    if ($(this).val() == "") {
      $(this).addClass("focusout");
      $(this).closest(".label_input").find(".input_placeholder").addClass("state-1");
    }
  });
  $(".callback_input").blur(function() {
    $(this).removeClass("focus");
    if ($(this).val() == "") {
      $(this).addClass("focusout");
      $(this).closest(".label_input").find(".input_placeholder").removeClass("state-1");
    }
  });

  $(".textarea_input").focus(function() {
    $(this).addClass("focus");
    if ($(this).val() == "") {
      $(this).addClass("focusout");
      $(this).closest(".label_input").find(".input_placeholder").addClass("state-1");
    }
  });
  $(".textarea_input").blur(function() {
    $(this).removeClass("focus");
    if ($(this).val() == "") {
      $(this).addClass("focusout");
      $(this).closest(".label_input").find(".input_placeholder").removeClass("state-1");
    }
  });
}



function initAccordion(){
  $(document).ready(function () {

    $('.panel-heading-2').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading-2').not(this).removeClass('in').next().slideUp();
    });

});
}


function initTabsVertical() {
(function($) {
$(function() {
  $('ul.nav-tabs_vertical').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.row-items').find('div.tab-content2').removeClass('active').eq($(this).index()).addClass('active');
  });
});
})(jQuery);
}


function initCounter(){
var target = $('.section_achievements');
if (target.length) {
  var targetPos = target.offset().top;
}
var winHeight = $(window).height();
var scrollToCounter = targetPos - winHeight;
var counterOk = false;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if((winScrollTop > scrollToCounter) && !counterOk){
    $('.number').countTo();
    counterOk = true
  }
});
}

!function(t){function e(t,e){return t.toFixed(e.decimals)}var o=function(e,i){this.$element=t(e),this.options=t.extend({},o.DEFAULTS,this.dataOptions(),i),this.init()};o.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:e,onUpdate:null,onComplete:null},o.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},o.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},e=Object.keys(t);for(var o in e){var i=e[o];"undefined"==typeof t[i]&&delete t[i]}return t},o.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},o.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},o.prototype.restart=function(){this.stop(),this.init(),this.start()},o.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},o.prototype.stop=function(){this.interval&&clearInterval(this.interval)},o.prototype.toggle=function(){this.interval?this.stop():this.start()},t.fn.countTo=function(e){return this.each(function(){var i=t(this),n=i.data("countTo"),s=!n||"object"==typeof e,r="object"==typeof e?e:{},a="string"==typeof e?e:"start";s&&(n&&n.stop(),i.data("countTo",n=new o(this,r))),n[a].call(n)})}}(jQuery);



/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
function initWow(){
  var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {},
    scrollContainer: null
  }
);
wow.init();
}

function initAnchors(){
  $(function(){
    $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target;
            if ($target.length) {
                var targetOffset = $target.offset().top - ($(".header-main").outerHeight(true)+0); //#main-header - заменить на ваш элемент
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});
}



// initialize fixed blocks on scroll
function initStickyScrollBlock() {
  ResponsiveHelper.addRange({
    /*'1024..': {
      on: function() {
        jQuery('.header-main').stickyScrollBlock({
          setBoxHeight: true,
          activeClass: 'fixed-position',
          positionType: 'fixed',
          extraTop: function() {
            var totalHeight = 0;
            jQuery('10').each(function() {
              totalHeight += jQuery(this).outerHeight();
            });
            return totalHeight;
          },
          showAfterScrolled: true
        });
      },
      off: function() {
        jQuery('.header-main').stickyScrollBlock('destroy');
      }
    },*/
    '..1023': {
      on: function() {
        jQuery('.header-mobile').stickyScrollBlock({
          setBoxHeight: true,
          activeClass: 'fixed-position',
          positionType: 'fixed',
          extraTop: function() {
            var totalHeight = 0;
            jQuery('0').each(function() {
              totalHeight += jQuery(this).outerHeight();
            });
            return totalHeight;
          },
          showAfterScrolled: false
        });
      },
      off: function() {
        jQuery('.header-mobile').stickyScrollBlock('destroy');
      }
    }
  });
}


function initSlick() {
    var slickNext3 = '<a href="#" class="slick-next"><span class="arrow_right_inside"></span></a>';

  var slickPrev = '<a href="#" class="slick-prev"><svg width="50" height="91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 47" enable-background="new 0 0 25.7 47"><path d="M4.3 23.5l21.4-21.3-2.2-2.2-23.5 23.5 23.5 23.5 2.2-2.2z"/></svg></a>';
  var slickNext = '<a href="#" class="slick-next"><svg width="50" height="91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 47" enable-background="new 0 0 25.7 47"><path d="M21.3 23.5l-21.3 21.3 2.2 2.2 23.5-23.5-23.5-23.5-2.2 2.2z"/></svg></a>';

  var slickPrev2 = '<a href="#" class="slick-prev"><svg width="50" height="91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 47" enable-background="new 0 0 25.7 47"><path d="M4.3 23.5l21.4-21.3-2.2-2.2-23.5 23.5 23.5 23.5 2.2-2.2z"/></svg></a>';
  var slickNext2 = '<a href="#" class="slick-next"><svg width="50" height="91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 47" enable-background="new 0 0 25.7 47"><path d="M21.3 23.5l-21.3 21.3 2.2 2.2 23.5-23.5-23.5-23.5-2.2 2.2z"/></svg></a>';

  jQuery('.slider_top').slick({
    prevArrow: slickPrev2,
    nextArrow: slickNext2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 13000,
    pauseOnHover: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
      }
    }
    ]
  });

}

// open-close init
function initOpenClose(){
  jQuery('.mobile-block').openClose({
    activeClass: 'active',
    opener: '.mobile-block-opener',
    slider: '.mobile-block-slide',
    animSpeed: 400,
    effect: 'slide',
    hideOnClickOutside: true
  });

  jQuery('.header-mobile').openClose({
    activeClass: 'is-active',
    opener: '.kebab',
    slider: '.header-mobile-block-slide',
    animSpeed: 400,
    effect: 'fade',
    hideOnClickOutside: true
  });

  ResponsiveHelper.addRange({
    '1024..': {
      on: function() {
        jQuery('.search').openClose({
          activeClass: 'active',
          opener: '.opener',
          slider: '.search-holder',
          animSpeed: 400,
          effect: 'fade',
          hideOnClickOutside: true
        });
      },
      off: function() {
        jQuery('.search').openClose('destroy');
      }
    }
  });
}
// mobile menu init
function initMobileNav() {
  jQuery('body').mobileNav({
    menuActiveClass: 'nav-active',
    menuOpener: '.nav-opener',
    hideOnClickOutside: true,
    menuDrop: '.navbar'
  });
}


// add classes if item has dropdown
function initDropDownClasses() {
  jQuery('.nav li').each(function() {
    var item = jQuery(this);
    var drop = item.find('ul');
    var link = item.find('a').eq(0);
    if(drop.length) {
      item.addClass('has-drop-down');
      if(link.length) link.addClass('has-drop-down-a');
    }
  });
}


function initToTop() {
  $('#back-top').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('#back-top').fadeIn("slow");
    } else {
      $('#back-top').fadeOut("slow");
    }
  });

  $('#back-top').click(function(event){
    $('html, body').animate({scrollTop : 0},800);
    $('#back-top').fadeOut("slow").stop();
    event.preventDefault();
  });
}

// handle dropdowns on mobile devices
function initTouchNav() {
  jQuery('.nav').each(function(){
    new TouchNav({
      navBlock: this
    });
  });

  jQuery('.nav li:has(ul)').addClass('has-subnav');
  jQuery('.nav li:has(div)').addClass('has-subnav');
  jQuery('.nav li:has(div)').addClass('drop');
}


// navigation accesibility module
function TouchNav(opt) {
  this.options = {
    hoverClass: 'hover',
    menuItems: 'li',
    menuOpener: 'a',
    menuDrop: 'ul',
    navBlock: null
  };
  for(var p in opt) {
    if(opt.hasOwnProperty(p)) {
      this.options[p] = opt[p];
    }
  }
  this.init();
}
TouchNav.isActiveOn = function(elem) {
  return elem && elem.touchNavActive;
};
TouchNav.prototype = {
  init: function() {
    if(typeof this.options.navBlock === 'string') {
      this.menu = document.getElementById(this.options.navBlock);
    } else if(typeof this.options.navBlock === 'object') {
      this.menu = this.options.navBlock;
    }
    if(this.menu) {
      this.addEvents();
    }
  },
  addEvents: function() {
    // attach event handlers
    var self = this;
    var touchEvent = (navigator.pointerEnabled && 'pointerdown') || (navigator.msPointerEnabled && 'MSPointerDown') || (this.isTouchDevice && 'touchstart');
    this.menuItems = lib.queryElementsBySelector(this.options.menuItems, this.menu);

    var initMenuItem = function(item) {
      var currentDrop = lib.queryElementsBySelector(self.options.menuDrop, item)[0],
      currentOpener = lib.queryElementsBySelector(self.options.menuOpener, item)[0];

      // only for touch input devices
      if( currentDrop && currentOpener && (self.isTouchDevice || self.isPointerDevice) ) {
        lib.event.add(currentOpener, 'click', lib.bind(self.clickHandler, self));
        lib.event.add(currentOpener, 'mousedown', lib.bind(self.mousedownHandler, self));
        lib.event.add(currentOpener, touchEvent, function(e){
          if( !self.isTouchPointerEvent(e) ) {
            self.preventCurrentClick = false;
            return;
          }
          self.touchFlag = true;
          self.currentItem = item;
          self.currentLink = currentOpener;
          self.pressHandler.apply(self, arguments);
        });
      }
      // for desktop computers and touch devices
      jQuery(item).bind('mouseenter', function(){
        if(!self.touchFlag) {
          self.currentItem = item;
          self.mouseoverHandler();
        }
      });
      jQuery(item).bind('mouseleave', function(){
        if(!self.touchFlag) {
          self.currentItem = item;
          self.mouseoutHandler();
        }
      });
      item.touchNavActive = true;
    };

    // addd handlers for all menu items
    for(var i = 0; i < this.menuItems.length; i++) {
      initMenuItem(self.menuItems[i]);
    }

    // hide dropdowns when clicking outside navigation
    if(this.isTouchDevice || this.isPointerDevice) {
      lib.event.add(document.documentElement, 'mousedown', lib.bind(this.clickOutsideHandler, this));
      lib.event.add(document.documentElement, touchEvent, lib.bind(this.clickOutsideHandler, this));
    }
  },
  mousedownHandler: function(e) {
    if(this.touchFlag) {
      e.preventDefault();
      this.touchFlag = false;
      this.preventCurrentClick = false;
    }
  },
  mouseoverHandler: function() {
    lib.addClass(this.currentItem, this.options.hoverClass);
    jQuery(this.currentItem).trigger('itemhover');
  },
  mouseoutHandler: function() {
    lib.removeClass(this.currentItem, this.options.hoverClass);
    jQuery(this.currentItem).trigger('itemleave');
  },
  hideActiveDropdown: function() {
    for(var i = 0; i < this.menuItems.length; i++) {
      if(lib.hasClass(this.menuItems[i], this.options.hoverClass)) {
        lib.removeClass(this.menuItems[i], this.options.hoverClass);
        jQuery(this.menuItems[i]).trigger('itemleave');
      }
    }
    this.activeParent = null;
  },
  pressHandler: function(e) {
    // hide previous drop (if active)
    if(this.currentItem !== this.activeParent) {
      if(this.activeParent && this.currentItem.parentNode === this.activeParent.parentNode) {
        lib.removeClass(this.activeParent, this.options.hoverClass);
      } else if(!this.isParent(this.activeParent, this.currentLink)) {
        this.hideActiveDropdown();
      }
    }
    // handle current drop
    this.activeParent = this.currentItem;
    if(lib.hasClass(this.currentItem, this.options.hoverClass)) {
      this.preventCurrentClick = false;
    } else {
      e.preventDefault();
      this.preventCurrentClick = true;
      lib.addClass(this.currentItem, this.options.hoverClass);
      jQuery(this.currentItem).trigger('itemhover');
    }
  },
  clickHandler: function(e) {
    // prevent first click on link
    if(this.preventCurrentClick) {
      e.preventDefault();
    }
  },
  clickOutsideHandler: function(event) {
    var e = event.changedTouches ? event.changedTouches[0] : event;
    if(this.activeParent && !this.isParent(this.menu, e.target)) {
      this.hideActiveDropdown();
      this.touchFlag = false;
    }
  },
  isParent: function(parent, child) {
    while(child.parentNode) {
      if(child.parentNode == parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  },
  isTouchPointerEvent: function(e) {
    return (e.type.indexOf('touch') > -1) ||
    (navigator.pointerEnabled && e.pointerType === 'touch') ||
    (navigator.msPointerEnabled && e.pointerType == e.MSPOINTER_TYPE_TOUCH);
  },
  isPointerDevice: (function() {
    return !!(navigator.pointerEnabled || navigator.msPointerEnabled);
  }()),
  isTouchDevice: (function() {
    return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
  }())
};

/*
 * Utility module
 */
 lib = {
  hasClass: function(el,cls) {
    return el && el.className ? el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) : false;
  },
  addClass: function(el,cls) {
    if (el && !this.hasClass(el,cls)) el.className += " "+cls;
  },
  removeClass: function(el,cls) {
    if (el && this.hasClass(el,cls)) {el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');}
  },
  extend: function(obj) {
    for(var i = 1; i < arguments.length; i++) {
      for(var p in arguments[i]) {
        if(arguments[i].hasOwnProperty(p)) {
          obj[p] = arguments[i][p];
        }
      }
    }
    return obj;
  },
  each: function(obj, callback) {
    var property, len;
    if(typeof obj.length === 'number') {
      for(property = 0, len = obj.length; property < len; property++) {
        if(callback.call(obj[property], property, obj[property]) === false) {
          break;
        }
      }
    } else {
      for(property in obj) {
        if(obj.hasOwnProperty(property)) {
          if(callback.call(obj[property], property, obj[property]) === false) {
            break;
          }
        }
      }
    }
  },
  event: (function() {
    var fixEvent = function(e) {
      e = e || window.event;
      if(e.isFixed) return e; else e.isFixed = true;
      if(!e.target) e.target = e.srcElement;
      e.preventDefault = e.preventDefault || function() {this.returnValue = false;};
      e.stopPropagation = e.stopPropagation || function() {this.cancelBubble = true;};
      return e;
    };
    return {
      add: function(elem, event, handler) {
        if(!elem.events) {
          elem.events = {};
          elem.handle = function(e) {
            var ret, handlers = elem.events[e.type];
            e = fixEvent(e);
            for(var i = 0, len = handlers.length; i < len; i++) {
              if(handlers[i]) {
                ret = handlers[i].call(elem, e);
                if(ret === false) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
            }
          };
        }
        if(!elem.events[event]) {
          elem.events[event] = [];
          if(elem.addEventListener) elem.addEventListener(event, elem.handle, false);
          else if(elem.attachEvent) elem.attachEvent('on'+event, elem.handle);
        }
        elem.events[event].push(handler);
      },
      remove: function(elem, event, handler) {
        var handlers = elem.events[event];
        for(var i = handlers.length - 1; i >= 0; i--) {
          if(handlers[i] === handler) {
            handlers.splice(i,1);
          }
        }
        if(!handlers.length) {
          delete elem.events[event];
          if(elem.removeEventListener) elem.removeEventListener(event, elem.handle, false);
          else if(elem.detachEvent) elem.detachEvent('on'+event, elem.handle);
        }
      }
    };
  }()),
  queryElementsBySelector: function(selector, scope) {
    scope = scope || document;
    if(!selector) return [];
    if(selector === '>*') return scope.children;
    if(typeof document.querySelectorAll === 'function') {
      return scope.querySelectorAll(selector);
    }
    var selectors = selector.split(',');
    var resultList = [];
    for(var s = 0; s < selectors.length; s++) {
      var currentContext = [scope || document];
      var tokens = selectors[s].replace(/^\s+/,'').replace(/\s+$/,'').split(' ');
      for (var i = 0; i < tokens.length; i++) {
        token = tokens[i].replace(/^\s+/,'').replace(/\s+$/,'');
        if (token.indexOf('#') > -1) {
          var bits = token.split('#'), tagName = bits[0], id = bits[1];
          var element = document.getElementById(id);
          if (element && tagName && element.nodeName.toLowerCase() != tagName) {
            return [];
          }
          currentContext = element ? [element] : [];
          continue;
        }
        if (token.indexOf('.') > -1) {
          var bits = token.split('.'), tagName = bits[0] || '*', className = bits[1], found = [], foundCount = 0;
          for (var h = 0; h < currentContext.length; h++) {
            var elements;
            if (tagName == '*') {
              elements = currentContext[h].getElementsByTagName('*');
            } else {
              elements = currentContext[h].getElementsByTagName(tagName);
            }
            for (var j = 0; j < elements.length; j++) {
              found[foundCount++] = elements[j];
            }
          }
          currentContext = [];
          var currentContextIndex = 0;
          for (var k = 0; k < found.length; k++) {
            if (found[k].className && found[k].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
              currentContext[currentContextIndex++] = found[k];
            }
          }
          continue;
        }
        if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
          var tagName = RegExp.$1 || '*', attrName = RegExp.$2, attrOperator = RegExp.$3, attrValue = RegExp.$4;
          if(attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
            attrName = 'htmlFor';
          }
          var found = [], foundCount = 0;
          for (var h = 0; h < currentContext.length; h++) {
            var elements;
            if (tagName == '*') {
              elements = currentContext[h].getElementsByTagName('*');
            } else {
              elements = currentContext[h].getElementsByTagName(tagName);
            }
            for (var j = 0; elements[j]; j++) {
              found[foundCount++] = elements[j];
            }
          }
          currentContext = [];
          var currentContextIndex = 0, checkFunction;
          switch (attrOperator) {
            case '=': checkFunction = function(e) { return (e.getAttribute(attrName) == attrValue) }; break;
            case '~': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('(\\s|^)'+attrValue+'(\\s|$)'))) }; break;
            case '|': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('^'+attrValue+'-?'))) }; break;
            case '^': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) == 0) }; break;
            case '$': checkFunction = function(e) { return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length) }; break;
            case '*': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) > -1) }; break;
            default : checkFunction = function(e) { return e.getAttribute(attrName) };
          }
          currentContext = [];
          var currentContextIndex = 0;
          for (var k = 0; k < found.length; k++) {
            if (checkFunction(found[k])) {
              currentContext[currentContextIndex++] = found[k];
            }
          }
          continue;
        }
        tagName = token;
        var found = [], foundCount = 0;
        for (var h = 0; h < currentContext.length; h++) {
          var elements = currentContext[h].getElementsByTagName(tagName);
          for (var j = 0; j < elements.length; j++) {
            found[foundCount++] = elements[j];
          }
        }
        currentContext = found;
      }
      resultList = [].concat(resultList,currentContext);
    }
    return resultList;
  },
  trim: function (str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  },
  bind: function(f, scope, forceArgs){
    return function() {return f.apply(scope, typeof forceArgs !== 'undefined' ? [forceArgs] : arguments);};
  }
};

/*
 * Simple Mobile Navigation
 */
 ;(function($) {
  function MobileNav(options) {
    this.options = $.extend({
      container: null,
      hideOnClickOutside: false,
      menuActiveClass: 'nav-active',
      menuOpener: '.nav-opener',
      menuDrop: '.nav-drop',
      toggleEvent: 'click',
      outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
    }, options);
    this.initStructure();
    this.attachEvents();
  }
  MobileNav.prototype = {
    initStructure: function() {
      this.page = $('html');
      this.container = $(this.options.container);
      this.opener = this.container.find(this.options.menuOpener);
      this.drop = this.container.find(this.options.menuDrop);
    },
    attachEvents: function() {
      var self = this;

      if(activateResizeHandler) {
        activateResizeHandler();
        activateResizeHandler = null;
      }

      this.outsideClickHandler = function(e) {
        if(self.isOpened()) {
          var target = $(e.target);
          if(!target.closest(self.opener).length && !target.closest(self.drop).length) {
            self.hide();
          }
        }
      };

      this.openerClickHandler = function(e) {
        e.preventDefault();
        self.toggle();
      };

      this.opener.on(this.options.toggleEvent, this.openerClickHandler);
    },
    isOpened: function() {
      return this.container.hasClass(this.options.menuActiveClass);
    },
    show: function() {
      this.container.addClass(this.options.menuActiveClass);
      if(this.options.hideOnClickOutside) {
        this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
      }
    },
    hide: function() {
      this.container.removeClass(this.options.menuActiveClass);
      if(this.options.hideOnClickOutside) {
        this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
      }
    },
    toggle: function() {
      if(this.isOpened()) {
        this.hide();
      } else {
        this.show();
      }
    },
    destroy: function() {
      this.container.removeClass(this.options.menuActiveClass);
      this.opener.off(this.options.toggleEvent, this.clickHandler);
      this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
    }
  };

  var activateResizeHandler = function() {
    var win = $(window),
    doc = $('html'),
    resizeClass = 'resize-active',
    flag, timer;
    var removeClassHandler = function() {
      flag = false;
      doc.removeClass(resizeClass);
    };
    var resizeHandler = function() {
      if(!flag) {
        flag = true;
        doc.addClass(resizeClass);
      }
      clearTimeout(timer);
      timer = setTimeout(removeClassHandler, 500);
    };
    win.on('resize orientationchange', resizeHandler);
  };

  $.fn.mobileNav = function(options) {
    return this.each(function() {
      var params = $.extend({}, options, {container: this}),
      instance = new MobileNav(params);
      $.data(this, 'MobileNav', instance);
    });
  };
}(jQuery));

/*
 * Responsive Layout helper
 */
 window.ResponsiveHelper = (function($){
  // init variables
  var handlers = [],
  prevWinWidth,
  win = $(window),
  nativeMatchMedia = false;

  // detect match media support
  if(window.matchMedia) {
    if(window.Window && window.matchMedia === Window.prototype.matchMedia) {
      nativeMatchMedia = true;
    } else if(window.matchMedia.toString().indexOf('native') > -1) {
      nativeMatchMedia = true;
    }
  }

  // prepare resize handler
  function resizeHandler() {
    var winWidth = win.width();
    if(winWidth !== prevWinWidth) {
      prevWinWidth = winWidth;

      // loop through range groups
      $.each(handlers, function(index, rangeObject){
        // disable current active area if needed
        $.each(rangeObject.data, function(property, item) {
          if(item.currentActive && !matchRange(item.range[0], item.range[1])) {
            item.currentActive = false;
            if(typeof item.disableCallback === 'function') {
              item.disableCallback();
            }
          }
        });

        // enable areas that match current width
        $.each(rangeObject.data, function(property, item) {
          if(!item.currentActive && matchRange(item.range[0], item.range[1])) {
            // make callback
            item.currentActive = true;
            if(typeof item.enableCallback === 'function') {
              item.enableCallback();
            }
          }
        });
      });
    }
  }
  win.bind('load resize orientationchange', resizeHandler);

  // test range
  function matchRange(r1, r2) {
    var mediaQueryString = '';
    if(r1 > 0) {
      mediaQueryString += '(min-width: ' + r1 + 'px)';
    }
    if(r2 < Infinity) {
      mediaQueryString += (mediaQueryString ? ' and ' : '') + '(max-width: ' + r2 + 'px)';
    }
    return matchQuery(mediaQueryString, r1, r2);
  }

  // media query function
  function matchQuery(query, r1, r2) {
    if(window.matchMedia && nativeMatchMedia) {
      return matchMedia(query).matches;
    } else if(window.styleMedia) {
      return styleMedia.matchMedium(query);
    } else if(window.media) {
      return media.matchMedium(query);
    } else {
      return prevWinWidth >= r1 && prevWinWidth <= r2;
    }
  }

  // range parser
  function parseRange(rangeStr) {
    var rangeData = rangeStr.split('..');
    var x1 = parseInt(rangeData[0], 10) || -Infinity;
    var x2 = parseInt(rangeData[1], 10) || Infinity;
    return [x1, x2].sort(function(a, b){
      return a - b;
    });
  }

  // export public functions
  return {
    addRange: function(ranges) {
      // parse data and add items to collection
      var result = {data:{}};
      $.each(ranges, function(property, data){
        result.data[property] = {
          range: parseRange(property),
          enableCallback: data.on,
          disableCallback: data.off
        };
      });
      handlers.push(result);

      // call resizeHandler to recalculate all events
      prevWinWidth = null;
      resizeHandler();
    }
  };
}(jQuery));


/*
 * jQuery Open/Close plugin
 */
 ;(function($) {
  function OpenClose(options) {
    this.options = $.extend({
      addClassBeforeAnimation: true,
      hideOnClickOutside: false,
      activeClass: 'active',
      opener: '.opener',
      slider: '.slide',
      animSpeed: 400,
      effect: 'fade',
      event: 'click'
    }, options);
    this.init();
  }
  OpenClose.prototype = {
    init: function() {
      if (this.options.holder) {
        this.findElements();
        this.attachEvents();
        this.makeCallback('onInit', this);
      }
    },
    findElements: function() {
      this.holder = $(this.options.holder);
      this.opener = this.holder.find(this.options.opener);
      this.slider = this.holder.find(this.options.slider);
    },
    attachEvents: function() {
      // add handler
      var self = this;
      this.eventHandler = function(e) {
        e.preventDefault();
        if (self.slider.hasClass(slideHiddenClass)) {
          self.showSlide();
        } else {
          self.hideSlide();
        }
      };
      self.opener.on(self.options.event, this.eventHandler);

      // hover mode handler
      if (self.options.event === 'hover') {
        self.opener.on('mouseenter', function() {
          if (!self.holder.hasClass(self.options.activeClass)) {
            self.showSlide();
          }
        });
        self.holder.on('mouseleave', function() {
          self.hideSlide();
        });
      }

      // outside click handler
      self.outsideClickHandler = function(e) {
        if (self.options.hideOnClickOutside) {
          var target = $(e.target);
          if (!target.is(self.holder) && !target.closest(self.holder).length) {
            self.hideSlide();
          }
        }
      };

      // set initial styles
      if (this.holder.hasClass(this.options.activeClass)) {
        $(document).on('click touchstart', self.outsideClickHandler);
      } else {
        this.slider.addClass(slideHiddenClass);
      }
    },
    showSlide: function() {
      var self = this;
      if (self.options.addClassBeforeAnimation) {
        self.holder.addClass(self.options.activeClass);
      }
      self.slider.removeClass(slideHiddenClass);
      $(document).on('click touchstart', self.outsideClickHandler);

      self.makeCallback('animStart', true);
      toggleEffects[self.options.effect].show({
        box: self.slider,
        speed: self.options.animSpeed,
        complete: function() {
          if (!self.options.addClassBeforeAnimation) {
            self.holder.addClass(self.options.activeClass);
          }
          self.makeCallback('animEnd', true);
        }
      });
    },
    hideSlide: function() {
      var self = this;
      if (self.options.addClassBeforeAnimation) {
        self.holder.removeClass(self.options.activeClass);
      }
      $(document).off('click touchstart', self.outsideClickHandler);

      self.makeCallback('animStart', false);
      toggleEffects[self.options.effect].hide({
        box: self.slider,
        speed: self.options.animSpeed,
        complete: function() {
          if (!self.options.addClassBeforeAnimation) {
            self.holder.removeClass(self.options.activeClass);
          }
          self.slider.addClass(slideHiddenClass);
          self.makeCallback('animEnd', false);
        }
      });
    },
    destroy: function() {
      this.slider.removeClass(slideHiddenClass).css({
        display: ''
      });
      this.opener.off(this.options.event, this.eventHandler);
      this.holder.removeClass(this.options.activeClass).removeData('OpenClose');
      $(document).off('click touchstart', this.outsideClickHandler);
    },
    makeCallback: function(name) {
      if (typeof this.options[name] === 'function') {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    }
  };

  // add stylesheet for slide on DOMReady
  var slideHiddenClass = 'js-slide-hidden';
  (function() {
    var tabStyleSheet = $('<style type="text/css">')[0];
    var tabStyleRule = '.' + slideHiddenClass;
    tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
    if (tabStyleSheet.styleSheet) {
      tabStyleSheet.styleSheet.cssText = tabStyleRule;
    } else {
      tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
    }
    $('head').append(tabStyleSheet);
  }());

  // animation effects
  var toggleEffects = {
    slide: {
      show: function(o) {
        o.box.stop(true).hide().slideDown(o.speed, o.complete);
      },
      hide: function(o) {
        o.box.stop(true).slideUp(o.speed, o.complete);
      }
    },
    fade: {
      show: function(o) {
        o.box.stop(true).hide().fadeIn(o.speed, o.complete);
      },
      hide: function(o) {
        o.box.stop(true).fadeOut(o.speed, o.complete);
      }
    },
    none: {
      show: function(o) {
        o.box.hide().show(0, o.complete);
      },
      hide: function(o) {
        o.box.hide(0, o.complete);
      }
    }
  };

  // jQuery plugin interface
  $.fn.openClose = function(opt) {
    var args = Array.prototype.slice.call(arguments);
    var method = args[0];

    return this.each(function() {
      var $holder = jQuery(this);
      var instance = $holder.data('OpenClose');

      if (typeof opt === 'object' || typeof opt === 'undefined') {
        $holder.data('OpenClose', new OpenClose($.extend({
          holder: this
        }, opt)));
      } else if (typeof method === 'string' && instance) {
        if (typeof instance[method] === 'function') {
          args.shift();
          instance[method].apply(instance, args);
        }
      }
    });
  };
}(jQuery));


/*
 * jQuery sticky box plugin 
 */
 ;(function($, $win) {

  'use strict';

  function StickyScrollBlock($stickyBox, options) {
    this.options = options;
    this.$stickyBox = $stickyBox;
    this.init();
  }

  var StickyScrollBlockPrototype = {
    init: function() {
      this.findElements();
      this.attachEvents();
      this.makeCallback('onInit');
    },

    findElements: function() {
      // find parent container in which will be box move 
      this.$container = this.$stickyBox.closest(this.options.container);
      // define box wrap flag
      this.isWrap = this.options.positionType === 'fixed' && this.options.setBoxHeight;
      // define box move flag
      this.moveInContainer = !!this.$container.length;
      // wrapping box to set place in content
      if (this.isWrap) {
        this.$stickyBoxWrap = this.$stickyBox.wrap('<div class="' + this.getWrapClass() + '"/>').parent();
      }
      //define block to add active class
      this.parentForActive = this.getParentForActive();
      this.isInit = true;
    },

    attachEvents: function() {
      var self = this;

      // bind events
      this.onResize = function() {
        if (!self.isInit) return;
        self.resetState();
        self.recalculateOffsets();
        self.checkStickyPermission();
        self.scrollHandler();
      };

      this.onScroll = function() {
        self.scrollHandler();
      };

      // initial handler call
      this.onResize();

      // handle events
      $win.on('load resize orientationchange', this.onResize)
      .on('scroll', this.onScroll);
    },

    defineExtraTop: function() {
      // define box's extra top dimension
      var extraTop;

      if (typeof this.options.extraTop === 'number') {
        extraTop = this.options.extraTop;
      } else if (typeof this.options.extraTop === 'function') {
        extraTop = this.options.extraTop();
      }

      this.extraTop = this.options.positionType === 'absolute' ?
      extraTop :
      Math.min(this.winParams.height - this.data.boxFullHeight, extraTop);
    },

    checkStickyPermission: function() {
      // check the permission to set sticky
      this.isStickyEnabled = this.moveInContainer ?
      this.data.containerOffsetTop + this.data.containerHeight > this.data.boxFullHeight + this.data.boxOffsetTop + this.options.extraBottom :
      true;
    },

    getParentForActive: function() {
      if (this.isWrap) {
        return this.$stickyBoxWrap;
      }

      if (this.$container.length) {
        return this.$container;
      }

      return this.$stickyBox;
    },

    getWrapClass: function() {
      // get set of container classes
      try {
        return this.$stickyBox.attr('class').split(' ').map(function(name) {
          return 'sticky-wrap-' + name;
        }).join(' ');
      } catch (err) {
        return 'sticky-wrap';
      }
    },

    resetState: function() {
      // reset dimensions and state
      this.stickyFlag = false;
      this.$stickyBox.css({
        '-webkit-transition': '',
        '-webkit-transform': '',
        transition: '',
        transform: '',
        position: '',
        width: '',
        left: '',
        top: ''
      }).removeClass(this.options.activeClass);

      if (this.isWrap) {
        this.$stickyBoxWrap.removeClass(this.options.activeClass).removeAttr('style');
      }

      if (this.moveInContainer) {
        this.$container.removeClass(this.options.activeClass);
      }
    },

    recalculateOffsets: function() {
      // define box and container dimensions
      this.winParams = this.getWindowParams();

      this.data = $.extend(
        this.getBoxOffsets(),
        this.getContainerOffsets()
        );

      this.defineExtraTop();
    },

    getBoxOffsets: function() {
      function offetTop(obj){
        obj.top = 0;
        return obj
      }
      var boxOffset = this.$stickyBox.css('position') ==='fixed' ? offetTop(this.$stickyBox.offset()) : this.$stickyBox.offset();
      var boxPosition = this.$stickyBox.position();

      return {
        // sticky box offsets
        boxOffsetLeft: boxOffset.left,
        boxOffsetTop: boxOffset.top,
        // sticky box positions
        boxTopPosition: boxPosition.top,
        boxLeftPosition: boxPosition.left,
        // sticky box width/height
        boxFullHeight: this.$stickyBox.outerHeight(true),
        boxHeight: this.$stickyBox.outerHeight(),
        boxWidth: this.$stickyBox.outerWidth()
      };
    },

    getContainerOffsets: function() {
      var containerOffset = this.moveInContainer ? this.$container.offset() : null;

      return containerOffset ? {
        // container offsets
        containerOffsetLeft: containerOffset.left,
        containerOffsetTop: containerOffset.top,
        // container height
        containerHeight: this.$container.outerHeight()
      } : {};
    },

    getWindowParams: function() {
      return {
        height: window.innerHeight || document.documentElement.clientHeight
      };
    },

    makeCallback: function(name) {
      if (typeof this.options[name] === 'function') {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    },

    destroy: function() {
      this.isInit = false;
      // remove event handlers and styles
      $win.off('load resize orientationchange', this.onResize)
      .off('scroll', this.onScroll);
      this.resetState();
      this.$stickyBox.removeData('StickyScrollBlock');
      if (this.isWrap) {
        this.$stickyBox.unwrap();
      }
      this.makeCallback('onDestroy');
    }
  };

  var stickyMethods = {
    fixed: {
      scrollHandler: function() {
        this.winScrollTop = $win.scrollTop();
        var isActiveSticky = this.winScrollTop -
        (this.options.showAfterScrolled ? this.extraTop : 0) -
        (this.options.showAfterScrolled ? this.data.boxHeight + this.extraTop : 0) >
        this.data.boxOffsetTop - this.extraTop;

        if (isActiveSticky) {
          this.isStickyEnabled && this.stickyOn();
        } else {
          this.stickyOff();
        }
      },

      stickyOn: function() {
        if (!this.stickyFlag) {
          this.stickyFlag = true;
          this.parentForActive.addClass(this.options.activeClass);
          this.$stickyBox.css({
            width: this.data.boxWidth,
            position: this.options.positionType
          });
          if (this.isWrap) {
            this.$stickyBoxWrap.css({
              height: this.data.boxFullHeight
            });
          }
          this.makeCallback('fixedOn');
        }
        this.setDynamicPosition();
      },

      stickyOff: function() {
        if (this.stickyFlag) {
          this.stickyFlag = false;
          this.resetState();
          this.makeCallback('fixedOff');
        }
      },

      setDynamicPosition: function() {
        this.$stickyBox.css({
          top: this.getTopPosition(),
          left: this.data.boxOffsetLeft - $win.scrollLeft()
        });
      },

      getTopPosition: function() {
        if (this.moveInContainer) {
          var currScrollTop = this.winScrollTop + this.data.boxHeight + this.options.extraBottom;

          return Math.min(this.extraTop, (this.data.containerHeight + this.data.containerOffsetTop) - currScrollTop);
        } else {
          return this.extraTop;
        }
      }
    },
    absolute: {
      scrollHandler: function() {
        this.winScrollTop = $win.scrollTop();
        var isActiveSticky = this.winScrollTop > this.data.boxOffsetTop - this.extraTop;

        if (isActiveSticky) {
          this.isStickyEnabled && this.stickyOn();
        } else {
          this.stickyOff();
        }
      },

      stickyOn: function() {
        if (!this.stickyFlag) {
          this.stickyFlag = true;
          this.parentForActive.addClass(this.options.activeClass);
          this.$stickyBox.css({
            width: this.data.boxWidth,
            transition: 'transform ' + this.options.animSpeed + 's ease',
            '-webkit-transition': 'transform ' + this.options.animSpeed + 's ease',
          });

          if (this.isWrap) {
            this.$stickyBoxWrap.css({
              height: this.data.boxFullHeight
            });
          }

          this.makeCallback('fixedOn');
        }

        this.clearTimer();
        this.timer = setTimeout(function() {
          this.setDynamicPosition();
        }.bind(this), this.options.animDelay * 1000);
      },

      stickyOff: function() {
        if (this.stickyFlag) {
          this.clearTimer();
          this.stickyFlag = false;

          this.timer = setTimeout(function() {
            this.setDynamicPosition();
            setTimeout(function() {
              this.resetState();
            }.bind(this), this.options.animSpeed * 1000);
          }.bind(this), this.options.animDelay * 1000);
          this.makeCallback('fixedOff');
        }
      },

      clearTimer: function() {
        clearTimeout(this.timer);
      },

      setDynamicPosition: function() {
        var topPosition = Math.max(0, this.getTopPosition());

        this.$stickyBox.css({
          transform: 'translateY(' + topPosition + 'px)',
          '-webkit-transform': 'translateY(' + topPosition + 'px)'
        });
      },

      getTopPosition: function() {
        var currTopPosition = this.winScrollTop - this.data.boxOffsetTop + this.extraTop;

        if (this.moveInContainer) {
          var currScrollTop = this.winScrollTop + this.data.boxHeight + this.options.extraBottom;
          var diffOffset = Math.abs(Math.min(0, (this.data.containerHeight + this.data.containerOffsetTop) - currScrollTop - this.extraTop));

          return currTopPosition - diffOffset;
        } else {
          return currTopPosition;
        }
      }
    }
  };

  // jQuery plugin interface
  $.fn.stickyScrollBlock = function(opt) {
    var args = Array.prototype.slice.call(arguments);
    var method = args[0];

    var options = $.extend({
      container: null,
      positionType: 'fixed', // 'fixed' or 'absolute'
      activeClass: 'fixed-position',
      setBoxHeight: true,
      showAfterScrolled: false,
      extraTop: 0,
      extraBottom: 0,
      animDelay: 0.1,
      animSpeed: 0.2
    }, opt);

    return this.each(function() {
      var $stickyBox = jQuery(this);
      var instance = $stickyBox.data('StickyScrollBlock');

      if (typeof opt === 'object' || typeof opt === 'undefined') {
        StickyScrollBlock.prototype = $.extend(stickyMethods[options.positionType], StickyScrollBlockPrototype);
        $stickyBox.data('StickyScrollBlock', new StickyScrollBlock($stickyBox, options));
      } else if (typeof method === 'string' && instance) {
        if (typeof instance[method] === 'function') {
          args.shift();
          instance[method].apply(instance, args);
        }
      }
    });
  };

  // module exports
  window.StickyScrollBlock = StickyScrollBlock;
}(jQuery, jQuery(window)));


/*!
 * SmoothScroll module
 */
 ;(function($, exports) {
  // private variables
  var page,
  win = $(window),
  activeBlock, activeWheelHandler,
  wheelEvents = ('onwheel' in document || document.documentMode >= 9 ? 'wheel' : 'mousewheel DOMMouseScroll');

  // animation handlers
  function scrollTo(offset, options, callback) {
    // initialize variables
    var scrollBlock;
    if (document.body) {
      if (typeof options === 'number') {
        options = {
          duration: options
        };
      } else {
        options = options || {};
      }
      page = page || $('html, body');
      scrollBlock = options.container || page;
    } else {
      return;
    }

    // treat single number as scrollTop
    if (typeof offset === 'number') {
      offset = {
        top: offset
      };
    }

    // handle mousewheel/trackpad while animation is active
    if (activeBlock && activeWheelHandler) {
      activeBlock.off(wheelEvents, activeWheelHandler);
    }
    if (options.wheelBehavior && options.wheelBehavior !== 'none') {
      activeWheelHandler = function(e) {
        if (options.wheelBehavior === 'stop') {
          scrollBlock.off(wheelEvents, activeWheelHandler);
          scrollBlock.stop();
        } else if (options.wheelBehavior === 'ignore') {
          e.preventDefault();
        }
      };
      activeBlock = scrollBlock.on(wheelEvents, activeWheelHandler);
    }

    // start scrolling animation
    scrollBlock.stop().animate({
      scrollLeft: offset.left,
      scrollTop: offset.top
    }, options.duration, function() {
      if (activeWheelHandler) {
        scrollBlock.off(wheelEvents, activeWheelHandler);
      }
      if ($.isFunction(callback)) {
        callback();
      }
    });
  }

  // smooth scroll contstructor
  function SmoothScroll(options) {
    this.options = $.extend({
      anchorLinks: 'a[href^="#"]', // selector or jQuery object
      container: null, // specify container for scrolling (default - whole page)
      extraOffset: null, // function or fixed number
      activeClasses: null, // null, "link", "parent"
      easing: 'swing', // easing of scrolling
      animMode: 'duration', // or "speed" mode
      animDuration: 800, // total duration for scroll (any distance)
      animSpeed: 1500, // pixels per second
      anchorActiveClass: 'anchor-active',
      sectionActiveClass: 'section-active',
      wheelBehavior: 'stop', // "stop", "ignore" or "none"
      useNativeAnchorScrolling: false // do not handle click in devices with native smooth scrolling
    }, options);
    this.init();
  }
  SmoothScroll.prototype = {
    init: function() {
      this.initStructure();
      this.attachEvents();
      this.isInit = true;
    },
    initStructure: function() {
      var self = this;

      this.container = this.options.container ? $(this.options.container) : $('html,body');
      this.scrollContainer = this.options.container ? this.container : win;
      this.anchorLinks = jQuery(this.options.anchorLinks).filter(function() {
        return jQuery(self.getAnchorTarget(jQuery(this))).length;
      });
    },
    getId: function(str) {
      try {
        return '#' + str.replace(/^.*?(#|$)/, '');
      } catch (err) {
        return null;
      }
    },
    getAnchorTarget: function(link) {
      // get target block from link href
      var targetId = this.getId($(link).attr('href'));
      return $(targetId.length > 1 ? targetId : 'html');
    },
    getTargetOffset: function(block) {
      // get target offset
      var blockOffset = block.offset().top;
      if (this.options.container) {
        blockOffset -= this.container.offset().top - this.container.prop('scrollTop');
      }

      // handle extra offset
      if (typeof this.options.extraOffset === 'number') {
        blockOffset -= this.options.extraOffset;
      } else if (typeof this.options.extraOffset === 'function') {
        blockOffset -= this.options.extraOffset(block);
      }
      return {
        top: blockOffset
      };
    },
    attachEvents: function() {
      var self = this;

      // handle active classes
      if (this.options.activeClasses && this.anchorLinks.length) {
        // cache structure
        this.anchorData = [];

        for (var i = 0; i < this.anchorLinks.length; i++) {
          var link = jQuery(this.anchorLinks[i]),
          targetBlock = self.getAnchorTarget(link),
          anchorDataItem = null;

          $.each(self.anchorData, function(index, item) {
            if (item.block[0] === targetBlock[0]) {
              anchorDataItem = item;
            }
          });

          if (anchorDataItem) {
            anchorDataItem.link = anchorDataItem.link.add(link);
          } else {
            self.anchorData.push({
              link: link,
              block: targetBlock
            });
          }
        };

        // add additional event handlers
        this.resizeHandler = function() {
          if (!self.isInit) return;
          self.recalculateOffsets();
        };
        this.scrollHandler = function() {
          self.refreshActiveClass();
        };

        this.recalculateOffsets();
        this.scrollContainer.on('scroll', this.scrollHandler);
        win.on('resize load orientationchange refreshAnchor', this.resizeHandler);
      }

      // handle click event
      this.clickHandler = function(e) {
        self.onClick(e);
      };
      if (!this.options.useNativeAnchorScrolling) {
        this.anchorLinks.on('click', this.clickHandler);
      }
    },
    recalculateOffsets: function() {
      var self = this;
      $.each(this.anchorData, function(index, data) {
        data.offset = self.getTargetOffset(data.block);
        data.height = data.block.outerHeight();
      });
      this.refreshActiveClass();
    },
    toggleActiveClass: function(anchor, block, state) {
      anchor.toggleClass(this.options.anchorActiveClass, state);
      block.toggleClass(this.options.sectionActiveClass, state);
    },
    refreshActiveClass: function() {
      var self = this,
      foundFlag = false,
      containerHeight = this.container.prop('scrollHeight'),
      viewPortHeight = this.scrollContainer.height(),
      scrollTop = this.options.container ? this.container.prop('scrollTop') : win.scrollTop();

      // user function instead of default handler
      if (this.options.customScrollHandler) {
        this.options.customScrollHandler.call(this, scrollTop, this.anchorData);
        return;
      }

      // sort anchor data by offsets
      this.anchorData.sort(function(a, b) {
        return a.offset.top - b.offset.top;
      });

      // default active class handler
      $.each(this.anchorData, function(index) {
        var reverseIndex = self.anchorData.length - index - 1,
        data = self.anchorData[reverseIndex],
        anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

        if (scrollTop >= containerHeight - viewPortHeight) {
          // handle last section
          if (reverseIndex === self.anchorData.length - 1) {
            self.toggleActiveClass(anchorElement, data.block, true);
          } else {
            self.toggleActiveClass(anchorElement, data.block, false);
          }
        } else {
          // handle other sections
          if (!foundFlag && (scrollTop >= data.offset.top - 1 || reverseIndex === 0)) {
            foundFlag = true;
            self.toggleActiveClass(anchorElement, data.block, true);
          } else {
            self.toggleActiveClass(anchorElement, data.block, false);
          }
        }
      });
    },
    calculateScrollDuration: function(offset) {
      var distance;
      if (this.options.animMode === 'speed') {
        distance = Math.abs(this.scrollContainer.scrollTop() - offset.top);
        return (distance / this.options.animSpeed) * 1000;
      } else {
        return this.options.animDuration;
      }
    },
    onClick: function(e) {
      var targetBlock = this.getAnchorTarget(e.currentTarget),
      targetOffset = this.getTargetOffset(targetBlock);

      e.preventDefault();
      scrollTo(targetOffset, {
        container: this.container,
        wheelBehavior: this.options.wheelBehavior,
        duration: this.calculateScrollDuration(targetOffset)
      });
      this.makeCallback('onBeforeScroll', e.currentTarget);
    },
    makeCallback: function(name) {
      if (typeof this.options[name] === 'function') {
        var args = Array.prototype.slice.call(arguments);
        args.shift();
        this.options[name].apply(this, args);
      }
    },
    destroy: function() {
      var self = this;

      this.isInit = false;
      if (this.options.activeClasses) {
        win.off('resize load orientationchange refreshAnchor', this.resizeHandler);
        this.scrollContainer.off('scroll', this.scrollHandler);
        $.each(this.anchorData, function(index) {
          var reverseIndex = self.anchorData.length - index - 1,
          data = self.anchorData[reverseIndex],
          anchorElement = (self.options.activeClasses === 'parent' ? data.link.parent() : data.link);

          self.toggleActiveClass(anchorElement, data.block, false);
        });
      }
      this.anchorLinks.off('click', this.clickHandler);
    }
  };

  // public API
  $.extend(SmoothScroll, {
    scrollTo: function(blockOrOffset, durationOrOptions, callback) {
      scrollTo(blockOrOffset, durationOrOptions, callback);
    }
  });

  // export module
  exports.SmoothScroll = SmoothScroll;
}(jQuery, this));

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
 if(Object.create){!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");}



// ==================================================
// fancyBox v3.3.5
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=t&&t.data?t.data.options:e||{},o=e.$target||n(t.currentTarget),i=o.attr("data-fancybox")||"",i?(a=e.selector?n(e.selector):t.data?t.data.items:[],a=a.length?a.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]'),s=a.index(o),s<0&&(s=0)):a=[o],n.fancybox.open(a,e,s))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={loop:!1,gutter:50,keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',arrowLeft:'<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',arrowRight:'<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},h=function(t,o,i){var a=this;a.opts=p({index:i},n.fancybox.defaults),n.isPlainObject(o)&&(a.opts=p(a.opts,o)),n.fancybox.isMobile&&(a.opts=p(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&(a.$lastFocus=n(e.activeElement).trigger("blur"),a.init())};n.extend(h.prototype,{init:function(){var i,a,s,r=this,c=r.group[r.currIndex],l=c.opts,d=n.fancybox.scrollbarWidth;n.fancybox.getInstance()||l.hideScrollbar===!1||(n("body").addClass("fancybox-active"),!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(i=n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(l.buttons,function(t,e){s+=l.btnTpl[e]||""}),a=n(r.translate(r,l.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",l.btnTpl.arrowLeft+l.btnTpl.arrowRight))).attr("id","fancybox-container-"+r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox",r).appendTo(l.parentEl),r.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){r.$refs[t]=a.find(".fancybox-"+t)}),r.trigger("onInit"),r.activate(),r.jumpTo(r.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},addContent:function(t){var e,i=this,a=n.makeArray(t);n.each(a,function(t,e){var a,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(a=n(e),u=a.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=a,d.src=i.opts.src||u.src||a.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},i.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(s="video",d.opts.videoFormat||(d.opts.videoFormat="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="iframe":"#"===c.charAt(0)&&(s="inline")),s?d.type=s:i.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=i.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.opts.$trigger&&d.index===i.opts.index&&(d.opts.$thumb=d.opts.$trigger.find("img:first")),d.opts.$thumb&&d.opts.$thumb.length||!d.opts.$orig||(d.opts.$thumb=d.opts.$orig.find("img:first")),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[i,d])),"function"===n.type(i.opts.caption)&&(d.opts.caption=i.opts.caption.apply(e,[i,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),i.group.push(d)}),Object.keys(i.slides).length&&(i.updateControls(),e=i.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?d(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},n.fancybox.isMobile?600:250))}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;o.isClosing||!o.current||!o.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||o&&"fixed"!==n(t.target).css("position")&&!o.$refs.container.has(t.target).length&&(t.stopPropagation(),o.focus())}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!(t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var i,a,s,r,c,l,d,u=this,p=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),a=u.current?u.current.opts.loop:u.opts.loop,!a&&(t<0||t>=p))return!1;if(i=u.firstRun=!Object.keys(u.slides).length,!(p<2&&!i&&u.isDragging)){if(r=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,s=u.createSlide(t),p>1&&((a||s.index>0)&&u.createSlide(t-1),(a||s.index<p-1)&&u.createSlide(t+1)),u.current=s,u.currIndex=s.index,u.currPos=s.pos,u.trigger("beforeShow",i),u.updateControls(),l=n.fancybox.getTranslate(s.$slide),s.isMoved=(0!==l.left||0!==l.top)&&!s.$slide.hasClass("fancybox-animated"),s.forcedDuration=o,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return s.opts.animationEffect&&e&&u.$refs.container.css("transition-duration",e+"ms"),u.$refs.container.removeClass("fancybox-is-hidden"),f(u.$refs.container),u.$refs.container.addClass("fancybox-is-open"),f(u.$refs.container),s.$slide.addClass("fancybox-slide--previous"),u.loadSlide(s),s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),void u.preload("image");n.each(u.slides,function(t,e){n.fancybox.stop(e.$slide)}),s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),s.isMoved?(c=Math.round(s.$slide.width()),n.each(u.slides,function(t,o){var i=o.pos-s.pos;n.fancybox.animate(o.$slide,{top:0,left:i*c+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===u.currPos&&(s.isMoved=!1,u.complete())})})):u.$refs.stage.children().removeAttr("style"),s.isLoaded?u.revealContent(s):u.loadSlide(s),u.preload("image"),r.pos!==s.pos&&(d="fancybox-slide--"+(r.pos>s.pos?"next":"previous"),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),r.isComplete=!1,e&&(s.isMoved||s.opts.transitionEffect)&&(s.isMoved?r.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+s.opts.transitionEffect,n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;!d.isAnimating&&f&&"image"==u.type&&u.isLoaded&&!u.hasError&&(n.fancybox.stop(f),d.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,a=n.fancybox.getTranslate(f),a.top-=n.fancybox.getTranslate(u.$slide).top,a.left-=n.fancybox.getTranslate(u.$slide).left,c=g/a.width,l=b/a.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;!o.isAnimating&&a&&"image"==i.type&&i.isLoaded&&!i.hasError&&(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,n,o,i,a,s=this,r=t.$content,c=t.width||t.opts.width,l=t.height||t.opts.height,d={};return!!(t.isLoaded&&r&&r.length)&&(i={top:parseInt(t.$slide.css("paddingTop"),10),right:parseInt(t.$slide.css("paddingRight"),10),bottom:parseInt(t.$slide.css("paddingBottom"),10),left:parseInt(t.$slide.css("paddingLeft"),10)},e=parseInt(s.$refs.stage.width(),10)-(i.left+i.right),n=parseInt(s.$refs.stage.height(),10)-(i.top+i.bottom),c&&l||(c=e,l=n),o=Math.min(1,e/c,n/l),c=Math.floor(o*c),l=Math.floor(o*l),"image"===t.type?(d.top=Math.floor(.5*(n-l))+i.top,d.left=Math.floor(.5*(e-c))+i.left):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?c/l:t.opts.ratio||16/9,l>c/a?l=c/a:c>l*a&&(c=l*a)),d.width=c,d.height=l,d)},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height;i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),t.$slide.trigger("refresh"),o.$refs.toolbar.toggleClass("compensate-for-scrollbar",t.$slide.get(0).scrollHeight>t.$slide.get(0).clientHeight),o.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a,s=this;s.current&&(i=Math.round(t.$slide.width()),a=t.pos-s.current.pos,n.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===o?0:e,null,!1))},updateCursor:function(t,e){var o,i=this,a=i.current,s=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a&&!i.isClosing&&(o=i.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),n("[data-fancybox-zoom]").prop("disabled",!o),o&&("zoom"===a.opts.clickContent||n.isFunction(a.opts.clickContent)&&"zoom"===a.opts.clickContent(a))?i.isScaledDown(t,e)?s.addClass("fancybox-can-zoomIn"):a.opts.touch?s.addClass("fancybox-can-drag"):s.addClass("fancybox-can-zoomOut"):a.opts.touch&&"video"!==a.contentType&&s.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),n.width>t.width||n.height>t.height)return!0}return!1},isScaledDown:function(t,e){var i=this,a=!1,s=i.current,r=s.$content;return t!==o&&e!==o?a=t<s.width&&e<s.height:r&&(a=n.fancybox.getTranslate(r),a=a.width<s.width&&a.height<s.height),a},canPan:function(){var t,e=this,n=!1,o=e.current;return"image"===o.type&&(t=o.$content)&&!o.hasError&&(n=e.getFitPos(o),n=Math.abs(t.width()-n.width)>1||Math.abs(t.height()-n.height)>1),n},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,'<video class="fancybox-video" controls controlsList="nodownload"><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video");break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r,c=this,l=e.opts.srcset||e.opts.image.srcset;if(e.timouts=setTimeout(function(){var t=e.$image;!e.isLoading||t&&t[0].complete||e.hasError||c.showLoading(e)},350),l){s=t.devicePixelRatio||1,r=t.innerWidth*s,a=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var d=0;d<a.length;d++){var u=a[d];if("w"===u.postfix&&u.value>=r||"x"===u.postfix&&u.value>=s){i=u;break}}!i&&a.length&&(i=a[a.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value),e.opts.srcset=l)}e.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),o=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&o&&(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null}).one("load",function(){c.afterLoad(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",o)),c.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){var n;t.$ghost||(e.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),e.afterLoad(t)),t.timouts&&(clearTimeout(t.timouts),t.timouts=null),e.isClosing||(t.opts.srcset&&(n=t.opts.sizes,n&&"auto"!==n||(n=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),o.attr("sizes",n).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!e.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),e.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s=t.$content,r=a.css.width,c=a.css.height;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&i.children().length&&(s.css({width:"",height:""}),r===o&&(r=Math.ceil(Math.max(i[0].clientWidth,i.outerWidth(!0)))),r&&s.width(r),c===o&&(c=Math.ceil(Math.max(i[0].clientHeight,i.outerHeight(!0)))),c&&s.height(c)),s.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?(e.parent().parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.pos===e.currPos&&e.updateCursor(),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).prependTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r=this,c=t.$slide,l=!1,d=!1;return e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],a=t.opts[r.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),t.pos===r.currPos&&(t.isComplete?e=!1:r.isAnimating=!0),!t.isMoved&&t.pos===r.currPos&&a||(e=!1),"zoom"===e&&(t.pos===r.currPos&&a&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),f(t.$content),void n.fancybox.animate(t.$content,l,a,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),i="fancybox-animated fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-fx-"+e,c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(c),void n.fancybox.animate(c,"fancybox-slide--current",a,function(e){c.removeClass(i).removeAttr("style"),t.pos===r.currPos&&r.complete()},!0)):(f(c),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=o.opts.$thumb,c=r&&r.length&&r[0].ownerDocument===e?r.offset():0,l=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()};return c&&l(r)&&(i=a.$refs.stage.offset(),s={top:c.top-i.top+parseFloat(r.css("border-top-width")||0),left:c.left-i.left+parseFloat(r.css("border-left-width")||0),width:r.width(),height:r.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};!o.isMoved&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),t.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=i),t.isAnimating=!1,t.updateCursor(),t.trigger("afterShow"),o.$slide.find("video,audio").filter(":visible:first").trigger("play"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(t){var e=this,n=e.slides[e.currPos+1],o=e.slides[e.currPos-1];n&&n.type===t&&e.loadSlide(n),o&&o.type===t&&e.loadSlide(o)},focus:function(){var t,e=this.current;this.isClosing||e&&e.isComplete&&e.$content&&(t=e.$content.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),t=t&&t.length?t:e.$content,t.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,p=this,h=p.current,g=function(){p.cleanUp(t)};return!p.isClosing&&(p.isClosing=!0,p.trigger("beforeClose",t)===!1?(p.isClosing=!1,d(function(){p.update()}),!1):(p.removeEvents(),h.timouts&&clearTimeout(h.timouts),a=h.$content,o=h.opts.animationEffect,i=n.isNumeric(e)?e:o?h.opts.animationDuration:0,h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),h.$slide.siblings().trigger("onReset").remove(),i&&p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),p.hideLoading(h),p.hideControls(),p.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===h.type&&!h.hasError&&(l=p.getThumbPos(h))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=h.opts.zoomOpacity,"auto"==r&&(r=Math.abs(h.width/h.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),f(a),n.fancybox.animate(a,l,i,g),!0):(o&&i?t===!0?setTimeout(g,i):n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,g):g(),!0)))},cleanUp:function(t){var e,o=this,i=n("body");o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.trigger("focus"),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(i.removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i))},updateControls:function(t){var e=this,n=e.current,o=n.index,i=n.opts.caption,a=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=i&&i.length?s.html(i):null,e.isHiddenControls||e.isIdle||e.showControls(),a.find("[data-fancybox-count]").html(e.group.length),a.find("[data-fancybox-index]").html(o+1),a.find("[data-fancybox-prev]").toggleClass("disabled",!n.opts.loop&&o<=0),a.find("[data-fancybox-next]").toggleClass("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():n.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.3.5",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=!1;n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),n.fancybox.stop(t),t.on(u,function(o){(!o||!o.originalEvent||t.is(o.originalEvent.target)&&"z-index"!=o.originalEvent.propertyName)&&(n.fancybox.stop(t),r&&n.fancybox.setTranslate(t,r),
  n.isPlainObject(e)?s===!1&&t.removeAttr("style"):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(o))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(r=n.extend({},e,{width:t.width()*e.scaleX,height:t.height()*e.scaleY,scaleX:1,scaleY:1}),delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){t&&t.length&&(clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-trigger]",function(t){i(t,{$target:n('[data-fancybox="'+n(t.currentTarget).attr("data-trigger")+'"]').eq(n(t.currentTarget).attr("data-index")||0),$trigger:n(this)})})}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},n,a.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,f=n,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[n],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):e(o.thumb,c),"youtube"===n?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){this.$container.off(".fb.touch")},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$content,p="touchstart"==o.type;if(p&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||d.isClosing)return o.stopPropagation(),void o.preventDefault();if(i.realPoints=i.startPoints=a(o),i.startPoints.length){if(o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=f,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(u.$slide[0].clientWidth),i.canvasHeight=Math.round(u.$slide[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=i.sliderLastPos||n.fancybox.getTranslate(u.$slide),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),!i.opts&&!d.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is(".fancybox-image")&&o.preventDefault());n.fancybox.isMobile&&(l(c)||l(c.parent()))||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.instance.canPan()?(n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this,o=n(t.target);return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling||!o.is(e.$stage)&&!e.$stage.find(o).length?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.instance.canPan())&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.isSwiping,c=s.sliderStartPos.left||0;if(r!==!0)"x"==r&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?c+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?c-=Math.pow(-s.distanceX,.8):c+=s.distanceX),s.sliderLastPos={top:"x"==r?0:s.sliderStartPos.top+s.distanceY,left:c},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,s.instance.group.length<2&&s.opts.vertical?s.isSwiping="y":s.instance.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),s.canTap=!1,"y"===s.isSwiping&&n.fancybox.isMobile&&(l(s.$target)||l(s.$target.parent())))return void(s.isScrolling=!0);s.instance.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(s.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===s.instance.current.pos&&(s.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left-n.fancybox.getTranslate(s.instance.$refs.stage).left)}),s.instance.SlideShow&&s.instance.SlideShow.isActive&&s.instance.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(i(t.requestId),t.requestId=null),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),y=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),v=m-e.centerPointStartX,x=y-e.centerPointStartY,w=l+(g+v),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming,d=o.isScrolling;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r,d)))},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,200)):"x"==t&&o.distanceX>50&&a>1?i=o.instance.previous(o.speedX):"x"==t&&o.distanceX<-50&&a>1&&(i=o.instance.next(o.speedX)),i!==!1||"x"!=t&&"y"!=t||(e||a<2?o.instance.centerSlide(o.instance.current,150):o.instance.jumpTo(o.instance.current.index)),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.opts.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.$content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls(!0);break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active",i=n+"-loading";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e,n,o=this;o.instance=t,t.Thumbs=o,o.opts=t.group[t.currIndex].opts.thumbs,e=t.group[0],e=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),t.group.length>1&&(n=t.group[1],n=n.opts.thumb||!(!n.opts.$thumb||!n.opts.$thumb.length)&&n.opts.$thumb.attr("src")),o.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),o.opts&&e&&n&&e&&n?(o.$button.show().on("click",function(){o.toggle()}),o.isActive=!0):o.$button.hide()},create:function(){var t,o=this,a=o.instance,s=o.opts.parentEl,r=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)),o.$grid.on("click","li",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e("<ul>").appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.opts.thumb||(n.opts.$thumb?n.opts.$thumb.attr("src"):null),t||"image"!==n.type||(t=n.src),r.push('<li data-index="'+e+'" tabindex="0" class="'+i+'"'+(t&&t.length?' style="background-image:url('+t+')" />':"")+"></li>")}),o.$list[0].innerHTML=r.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,i=this,a=i.$list,s=i.$grid;i.instance.current&&(e=a.children().removeClass(o).filter('[data-index="'+i.instance.current.index+'"]').addClass(o),n=e.position(),"y"===i.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===i.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery||jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:t,index:o<1?1:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).trigger("click.fb-start"))}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&i.opts.hash!==!1&&(r=a(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),e.location.hash!=="#"+o.currentHash&&(o.origHash||(o.origHash=e.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in e.history?(e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):e.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,i){var s;i.opts.hash!==!1&&(s=a(o),o.currentHash&&o.hasCreatedHistory?e.history.back():o.currentHash&&("replaceState"in e.history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+(o.origHash||"")):e.location.hash=o.origHash),o.currentHash=null,clearTimeout(o.hashTimer))}}),n(e).on("hashchange.fb",function(){var t,e=o();n.each(n(".fancybox-container").get().reverse(),function(e,o){var i=n(o).data("FancyBox");if(i.currentHash)return t=i,!1}),t?!t.currentHash||t.currentHash===e.gallery+"-"+e.index||1===e.index&&t.currentHash==e.gallery||(t.currentHash=null,t.close()):""!==e.gallery&&i(e)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);

/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/

 Version: 1.8.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues

 */
 !function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});


//Reference: 
//https://www.onextrapixel.com/2012/12/10/how-to-create-a-custom-file-input-with-jquery-css3-and-php/
;(function($) {

      // Browser supports HTML5 multiple file?
      var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
      isIE = /msie/i.test( navigator.userAgent );

      $.fn.customFile = function() {

        return this.each(function() {

          var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
          $wrap = $('<div class="file-upload-wrapper">'),
          $input = $('<input type="text" class="file-upload-input" />'),
              // Button that will be used in non-IE browsers
              $button = $('<button type="button" class="file-upload-button">Выберите файл</button>'),
              // Hack for IE
              $label = $('<label class="file-upload-button" for="'+ $file[0].id +'">Выберите файл</label>');

          // Hide by shifting to the left so we
          // can still trigger events
          $file.css({
            position: 'absolute',
            left: '-9999px'
          });

          $wrap.insertAfter( $file )
          .append( $file, $input, ( isIE ? $label : $button ) );

          // Prevent focus
          $file.attr('tabIndex', -1);
          $button.attr('tabIndex', -1);

          $button.click(function () {
            $file.focus().click(); // Open dialog
          });

          $file.change(function() {

            var files = [], fileArr, filename;

            // If multiple is supported then extract
            // all filenames from the file array
            if ( multipleSupport ) {
              fileArr = $file[0].files;
              for ( var i = 0, len = fileArr.length; i < len; i++ ) {
                files.push( fileArr[i].name );
              }
              filename = files.join(', ');

            // If not supported then just take the value
            // and remove the path to just show the filename
          } else {
            filename = $file.val().split('\\').pop();
          }

            $input.val( filename ) // Set the value
              .attr('title', filename) // Show filename in title tootlip
              .focus(); // Regain focus

            });

          $input.on({
            blur: function() { $file.trigger('blur'); },
            keydown: function( e ) {
              if ( e.which === 13 ) { // Enter
                if ( !isIE ) { $file.trigger('click'); }
              } else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
                // On some browsers the value is read-only
                // with this trick we remove the old input and add
                // a clean clone with all the original events attached
                $file.replaceWith( $file = $file.clone( true ) );
                $file.trigger('change');
                $input.val('');
              } else if ( e.which === 9 ){ // TAB
                return;
              } else { // All other keys
                return false;
              }
            }
          });

        });

      };

      // Old browser fallback
      if ( !multipleSupport ) {
        $( document ).on('change', 'input.customfile', function() {

          var $this = $(this),
              // Create a unique ID so we
              // can attach the label to the input
              uniqId = 'customfile_'+ (new Date()).getTime(),
              $wrap = $this.parent(),

              // Filter empty input
              $inputs = $wrap.siblings().find('.file-upload-input')
              .filter(function(){ return !this.value }),

              $file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

          // 1ms timeout so it runs after all other events
          // that modify the value have triggered
          setTimeout(function() {
            // Add a new input
            if ( $this.val() ) {
              // Check for empty fields to prevent
              // creating new inputs when changing files
              if ( !$inputs.length ) {
                $wrap.after( $file );
                $file.customFile();
              }
            // Remove and reorganize inputs
          } else {
            $inputs.parent().remove();
              // Move the input so it's always last on the list
              $wrap.appendTo( $wrap.parent() );
              $wrap.find('input').focus();
            }
          }, 1);

        });
      }

    }(jQuery));



/**
 * demo2.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
    // From https://davidwalsh.name/javascript-debounce-function.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
    };
    
    class Slideshow {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.settings = {
                animation: {
                    slides: {
                        duration: 600,
                        easing: 'easeOutQuint'
                    },
                    shape: {
                        duration: 300,
                        easing: {in: 'easeOutQuint', out: 'easeOutQuad'}
                    }
                },
                frameFill: '#aaa'
            }
            this.init();
        }
        init() {
            this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slides > .slide'));
            this.slidesTotal = this.DOM.slides.length;
            this.DOM.nav = this.DOM.el.querySelector('.slidenav');
            this.DOM.nextCtrl = this.DOM.nav.querySelector('.slidenav__item--next');
            this.DOM.prevCtrl = this.DOM.nav.querySelector('.slidenav__item--prev');
            this.current = 0;
            this.createFrame(); 
            this.initEvents();
        }
        createFrame() {
            this.rect = this.DOM.el.getBoundingClientRect();
            this.frameSize = this.rect.width/12;
            this.paths = {
                initial: this.calculatePath('initial'),
                final: this.calculatePath('final')
            };
            this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.DOM.svg.setAttribute('class', 'shape');
            this.DOM.svg.setAttribute('width','100%');
            this.DOM.svg.setAttribute('height','100%');
            this.DOM.svg.setAttribute('viewbox',`0 0 ${this.rect.width} ${this.rect.height}`);
            this.DOM.svg.innerHTML = `<path fill="${this.settings.frameFill}" d="${this.paths.initial}"/>`;
            this.DOM.el.insertBefore(this.DOM.svg, this.DOM.nav);
            this.DOM.shape = this.DOM.svg.querySelector('path');
        }
        updateFrame() {
            this.paths.initial = this.calculatePath('initial');
            this.paths.final = this.calculatePath('final');
            this.DOM.svg.setAttribute('viewbox',`0 0 ${this.rect.width} ${this.rect.height}`);
            this.DOM.shape.setAttribute('d', this.isAnimating ? this.paths.final : this.paths.initial);
        }
        calculatePath(path = 'initial') {
            return path === 'initial' ?
                    `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M 0,0 ${this.rect.width},0 ${this.rect.width},${this.rect.height} 0,${this.rect.height} Z` :
                    `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M ${this.frameSize},${this.frameSize} ${this.rect.width-this.frameSize},${this.frameSize} ${this.rect.width-this.frameSize},${this.rect.height-this.frameSize} ${this.frameSize},${this.rect.height-this.frameSize} Z`;
        }
        initEvents() {
            this.DOM.nextCtrl.addEventListener('click', () => this.navigate('next'));
            this.DOM.prevCtrl.addEventListener('click', () => this.navigate('prev'));
            
            window.addEventListener('resize', debounce(() => {
                this.rect = this.DOM.el.getBoundingClientRect();
                this.updateFrame();
            }, 20));
            
            document.addEventListener('keydown', (ev) => {
                const keyCode = ev.keyCode || ev.which;
                if ( keyCode === 37 ) {
                    this.navigate('prev');
                }
                else if ( keyCode === 39 ) {
                    this.navigate('next');
                }
            });
        }
        navigate(dir = 'next') {
            if ( this.isAnimating ) return false;
            this.isAnimating = true;

            const animateShapeIn = anime({
                targets: this.DOM.shape,
                duration: this.settings.animation.shape.duration,
                easing: this.settings.animation.shape.easing.in,
                d: this.paths.final
            });

            const animateSlides = () => {
                return new Promise((resolve, reject) => {
                    const currentSlide = this.DOM.slides[this.current];
                    anime({
                        targets: currentSlide,
                        duration: this.settings.animation.slides.duration,
                        easing: this.settings.animation.slides.easing,
                        translateX: dir === 'next' ? -1*this.rect.width : this.rect.width,
                        complete: () => {
                            currentSlide.classList.remove('slide--current');
                            resolve();
                        }
                    });
        
                    this.current = dir === 'next' ? 
                        this.current < this.slidesTotal-1 ? this.current + 1 : 0 :
                        this.current > 0 ? this.current - 1 : this.slidesTotal-1; 
                    
                    const newSlide = this.DOM.slides[this.current];
                    newSlide.classList.add('slide--current');
                    anime({
                        targets: newSlide,
                        duration: this.settings.animation.slides.duration,
                        easing: this.settings.animation.slides.easing,
                        translateX: [dir === 'next' ? this.rect.width : -1*this.rect.width,0]
                    });
        
                    const newSlideImg = newSlide.querySelector('.slide__img');
                    anime.remove(newSlideImg);
                    anime({
                        targets: newSlideImg,
                        duration: this.settings.animation.slides.duration*4,
                        easing: this.settings.animation.slides.easing,
                        translateX: [dir === 'next' ? 200 : -200, 0]
                    });
        
                    anime({
                        targets: [newSlide.querySelector('.slide__title'), newSlide.querySelector('.slide__desc'), newSlide.querySelector('.slide__link')],
                        duration: this.settings.animation.slides.duration*2,
                        easing: this.settings.animation.slides.easing,
                        delay: (t,i) => i*100+100,
                        translateX: [dir === 'next' ? 300 : -300,0],
                        opacity: [0,1]
                    });
                });
            };

            const animateShapeOut = () => {
                anime({
                    targets: this.DOM.shape,
                    duration: this.settings.animation.shape.duration,
                    delay: 150,
                    easing: this.settings.animation.shape.easing.out,
                    d: this.paths.initial,
                    complete: () => this.isAnimating = false
                });
            }

            animateShapeIn.finished.then(animateSlides).then(animateShapeOut);
        }
    };

    new Slideshow(document.querySelector('.slideshow'));
};
