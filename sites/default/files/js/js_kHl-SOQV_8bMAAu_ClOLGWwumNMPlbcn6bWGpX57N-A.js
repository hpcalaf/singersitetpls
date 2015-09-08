
/**
 * Plugin written by the great jqueryfordesigners.com
 * http://jqueryfordesigners.com/jquery-infinite-carousel/
 *
 * Slightly addapted for our use case
 */
(function ($) {
  $.fn.infiniteCarousel = function () {

      function repeat(str, num) {
          return new Array( num + 1 ).join( str );
      }

      return this.each(function () {

          var $wrapper = $('> div', this).css('overflow', 'hidden'),
              $slider = $wrapper.find('> ul'),
              $items = $slider.find('> li'),
              $single = $items.filter(':first'),

              singleWidth = $single.outerWidth(),
              visible = Math.ceil($wrapper.innerWidth() / singleWidth), // note: doesn't include padding or border
              currentPage = 1,
              pages = Math.ceil($items.length / visible);


          // 1. Pad so that 'visible' number will always be seen, otherwise create empty items
          if (($items.length % visible) != 0) {
              $slider.append(repeat('<li class="empty" />', visible - ($items.length % visible)));
              $items = $slider.find('> li');
          }

          // 2. Top and tail the list with 'visible' number of items, top has the last section, and tail has the first
          $items.filter(':first').before($items.slice(- visible).clone().addClass('cloned'));
          $items.filter(':last').after($items.slice(0, visible).clone().addClass('cloned'));
          $items = $slider.find('> li'); // reselect

          // 3. Set the left position to the first 'real' item
          $wrapper.scrollLeft(singleWidth * visible);

          // 4. paging function
          function gotoPage(page) {
              var dir = page < currentPage ? -1 : 1,
                  n = Math.abs(currentPage - page),
                  left = singleWidth * dir * visible * n;

              $wrapper.filter(':not(:animated)').animate({
                  scrollLeft : '+=' + left
              }, 500, function () {
                  if (page == 0) {
                      $wrapper.scrollLeft(singleWidth * visible * pages);
                      page = pages;
                  } else if (page > pages) {
                      $wrapper.scrollLeft(singleWidth * visible);
                      // reset back to start position
                      page = 1;
                  }

                  currentPage = page;
              });

              return false;
          }

          $wrapper.after('<a class="arrow back" title="'+ Drupal.t('Previous page') +'">&lt;</a><a class="arrow forward" title="'+ Drupal.t('Next page') +'">&gt;</a>');

          // 5. Bind to the forward and back buttons
          $('a.back', this).click(function () {
              return gotoPage(currentPage - 1);
          });

          $('a.forward', this).click(function () {
              return gotoPage(currentPage + 1);
          });

          // create a public interface to move to a specific page
          $(this).bind('goto', function (event, page) {
              gotoPage(page);
          });

          // custom events to trigger next and prev pages
          $(this).bind('next', function () {
            gotoPage(currentPage + 1);
          });
          $(this).bind('prev', function () {
            gotoPage(currentPage - 1);
          })
      });
  };
})(jQuery);
;

Drupal.behaviors.galleryformatter = {
  attach: function (context) {
    // We must wait for everything to load in order to get images' dimensions.
    (jQuery)(window).bind('load', function() {
      (jQuery)('.galleryformatter:not(.gallery-processed)', context).each(function(){
        Drupal.galleryformatter.prepare(this);
      }).addClass('gallery-processed');
    });
  }
};

Drupal.galleryformatter = Drupal.galleryformatter || {};

// setting up the main behaviour
Drupal.galleryformatter.prepare = function(el) {
  (function ($) {
    // var $settings = Drupal.settings.galleryformatter;
    $el = $(el);
    var $slides = $('li.gallery-slide', $el);
    var $slideContainer = $('div.gallery-slides', $el);

    var $thumbs = $('.gallery-thumbs', $el);
    var $thumbsLi = $('li', $thumbs);
    var thumbWidth = $thumbsLi.filter(':first').width() + 'px';
    var liWidth = $thumbsLi.outerWidth(); // includes padding
    var $wrapper = $('.wrapper', $el);
    var visibleWidth = $wrapper.outerWidth();

    /*
     * Only start the thumbs carrousel if needed
     */
    if (($thumbsLi.size() * liWidth) > $thumbs.width()) {
      $('ul', $thumbs).width('99999px');
      $thumbs.infiniteCarousel();
      $thumbsLi = $('li', $thumbs); // we need to reselect because infiniteCarousel inserts new empty li elements if necessary
      // we need to reselect because infiniteCarousel inserts new empty li elements if necessary
      $el = $(el);
      $thumbsLi = $('.gallery-thumbs ul li', $el);
    }

    $thumbsLi = $('li', $thumbs); // we need to reselect because infiniteCarousel inserts new empty li elements if necessary

    $thumbsLi.each(function(){
      $(this).css({
          width: thumbWidth
        });
    });
    var $thumbslinks = $('a', $thumbsLi);

    /*
     * @TODO:
     * figure out how to get this into proper functions reusing selections
     */
    $thumbslinks.click(function(e){
      $hash = $(this.hash);
      if(!$hash.is(':visible')){
        $thumbsLi.removeClass('active');
        $(this).parent().addClass('active');
        $slides.filter(':visible').fadeOut('slow');
        $hash.fadeIn('slow');
        // set the slide container's height to allow use of portrait images
        $slideContainer.css("height",$hash.find('img').height());
        /*
         * @FIXME
         * Need to figure out a way to update the location bar of the browser, for bookmarking etc, without making the scroll jump
         * window.location.hash = this.hash; solution below does update the location, but makes the scroll jump.
         */
        // window.location.hash = this.hash;  // not sure if this is the best way to do it.
      }
      e.preventDefault();
    });

    /*
     *  Startup behaviour (when the page first loads)
     */
    if ($slides.length > 1) {
      $slides.hide(); // hide all slides
    }
    var $locationHash = window.location.hash; // if we are being deeplinked to a specific slide, capture that

    function showFirstSlide(){
      // Activate the first slide
      $('a', $thumbsLi.filter('.slide-0:not(".cloned")')).trigger('click');
     }

    // if we have a hash in the url
    if ($locationHash) {
      var $slideToShow = $slides.filter($locationHash);
      // if the hash corresponds to one of our slides
      if ($slideToShow.length > 0) {
        $slideToShow.show(); //  show that slide
        $thumbsLi.not($(".cloned")).find("a[href="+$locationHash+"]").parent().addClass('active'); // activate that thumbnail
        // set the slide container's height to allow use of portrait images
        $slideContainer.css("height", $slideToShow.find('img').height());
      }
      // otherwise the default
      else {
        showFirstSlide();
      }
    }
    // otherwise the default
    else {
      showFirstSlide();
    }

    /*
     * Create a public interface to move to the next and previous images
     */
    // Shows the previous slide and scrolls to the previous page if necessary
    $thumbs.bind('showPrev', function (event) {
      var currentScroll = $wrapper.get(0).scrollLeft;
      var $prevThumbLi = $thumbsLi.filter('.active').prev(':not(".cloned, .empty, .active")');
      // if no results we are on the first element
      if(!$prevThumbLi.size()) {
        // select the last one
        $prevThumbLi = $thumbsLi.not('.empty, .cloned').filter(':last');
      }
      var $slideToClick = $('a', $prevThumbLi);
      var $prevIsVisible = (($prevThumbLi.get(0).offsetLeft >= currentScroll) && ($prevThumbLi.get(0).offsetLeft <= (visibleWidth + currentScroll)));
      if($prevIsVisible) {
        $slideToClick.trigger('click');
      }
      else {
        $thumbs.trigger('prev');
        $slideToClick.trigger('click');
      }
    });
    // Shows the next slide and scrolls to the next page if necessary
    $thumbs.bind('showNext', function (event) {
      var currentScroll = $wrapper.get(0).scrollLeft;
      // this selector could be optimized perhaps, but
      var $nextThumbLi = $thumbsLi.filter('.active').next(':not(".cloned, .empty, .active")');
      // if no results we are on the last element
      if(!$nextThumbLi.size()) {
        // select the first one
        $nextThumbLi = $thumbsLi.not('.empty, .cloned').filter(':first');
      }

      var $slideToClick = $('a', $nextThumbLi);
      var $nextIsVisible = (($nextThumbLi.get(0).offsetLeft >= currentScroll) && ($nextThumbLi.get(0).offsetLeft <= (visibleWidth + currentScroll)));
      if($nextIsVisible) {
        var $slideToClick = $('a', $nextThumbLi);
        $('a', $nextThumbLi).trigger('click');
      }
      else {
        $thumbs.trigger('next');
        $slideToClick.trigger('click');
      }
    });

    $('.shownext + img', $slideContainer).click(function(){
      $thumbs.trigger('showNext');
    });

    if ($slides.length > 1) {
      // Setup buttons for next/prev slide
      $slideButtons = ('<a class="prev-slide slide-button" title="'+ Drupal.t('Previous image') +'">&lt;</a><a class="next-slide slide-button" title="'+ Drupal.t('Next image') +'">&gt;</a>');
      $('.gallery-slides', $el).append($slideButtons);
      // Trigger the appropiate events on click
      $('a.prev-slide', $el).click(function(){
        $thumbs.trigger('showPrev');
      });
      $('a.next-slide', $el).click(function(){
        $thumbs.trigger('showNext');
      });
    }
  })(jQuery);
}
;
