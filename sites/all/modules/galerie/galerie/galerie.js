
(function($) {


Drupal.behaviors.galerie = {
  attach: function (context) {
    $('.node-galerie').each(function() {
      var nid = $(this).attr('id').replace(/^node-/, '');
      Drupal.galerie.settings(nid).element = $(this);

      Drupal.galerie.fixThumbnailLinks(nid);

      if ($(this).hasClass('node-teaser')) {
      } else {
        // let's assume there is only one, for this.
        if (document.location.hash != '') {
          var id = document.location.hash.substr(1);
          Drupal.galerie.showImageAjax(nid, id);
        }

        $(this).find('.galerie-browser img').live('click', function() {
          var image_id = $(this).attr('id').replace('galerie-', '');

          document.location.hash = '#' + image_id;
          Drupal.galerie.showImageAjax(nid, image_id);

          return false;
        });
        $(this).find('.galerie-browser-more a').click(function() {
          Drupal.galerie.loadMoreThumbs(nid);
          return false;
          });
        $(this).find('.galerie-browser-wrapper').scroll(function() {
          var top = $(this).scrollTop();
          var wrapper = Drupal.galerie.settings(nid).element.find('.galerie-browser-wrapper');
          var totalHeight = wrapper[0].scrollHeight;
          var frameHeight = wrapper.height();

          var hiddenHeight = totalHeight - frameHeight;

          if (hiddenHeight-top < totalHeight*0.333) {
            Drupal.galerie.loadMoreThumbs(nid);
          }
        }).scroll();

        var grippie = $('<div class="grippie"></div>');
        var galerie = $(this).find('.galerie-wrapper');
        galerie.after(grippie);

        var startDrag = function(e) {
          staticOffset = galerie.height() - e.pageY;
          galerie.animate({opacity: 0.5}, 50);
          $(document).mousemove(performDrag).mouseup(endDrag);
          return false;
        };

        var performDrag = function(e) {
          galerie.height(Math.max(32, staticOffset + e.pageY) + 'px');
          return false;
        };

        var endDrag = function(e) {
          $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
          galerie.animate({opacity: 1}, 50);
          return false;
        };

        grippie.mousedown(startDrag);
      }
    });
  }
};

Drupal.galerie = Drupal.galerie || {
  loadingMoreThumbs: false,
};

Drupal.galerie.settings = function(nid) {
  return Drupal.settings.galerie['galerie-' + nid];
}

Drupal.galerie.fixThumbnailLinks = function(nid) {
  Drupal.galerie.settings(nid).element.find('.galerie-browser a').each(function() {
    var id = $(this).find('img').attr('id').replace(/^galerie-/, '');
    var link = Drupal.galerie.settings(nid).baseUrl + '#' + id;

    $(this).attr('href', link);
  });
}

Drupal.galerie.loadMoreThumbs = function(nid) {
  if (!Drupal.galerie.loadingMoreThumbs) {
    Drupal.galerie.loadingMoreThumbs = true;

    $('body').addClass('galerie-ajax-waiting');

    $.ajax({
      url: Drupal.galerie.settings(nid).imageListUrl + '/' + Drupal.galerie.settings(nid).offset + '/' + Drupal.galerie.settings(nid).count,
      success: function(json) {
        Drupal.galerie.appendThumbs(nid, json);
      },
      dataType: 'json',
      complete: function() {
        Drupal.galerie.loadingMoreThumbs = false;
        $('body').removeClass('galerie-ajax-waiting');
      },
    });
  }
};

Drupal.galerie.appendThumbs = function(nid, json) {
  if (json.count == 0) {
    Drupal.galerie.settings(nid).element.find('.galerie-browser-more').fadeOut();
    Drupal.galerie.settings(nid).element.find('.galerie-browser-wrapper').unbind('scroll');
  } else {
    Drupal.galerie.settings(nid).offset += json.count;
    Drupal.galerie.settings(nid).element.find('.galerie-browser').append(json.markup);
    Drupal.galerie.fixThumbnailLinks(nid);
  }
};

Drupal.galerie.showImageAjax = function(nid, image_id) {
  $('body').addClass('galerie-ajax-waiting');

  $.ajax({
    url: Drupal.galerie.settings(nid).imageInfoUrl + '/' + encodeURIComponent(image_id),
    success: function(json) {
      Drupal.galerie.showImage(nid, json);
    },
    dataType: 'json',
    complete: function() {
      $('body').removeClass('galerie-ajax-waiting');
    },
  });
};

Drupal.galerie.showImage = function(nid, json) {
  var image = $(json.markup).hide();
  image.find('img').load(
    (function(image) {
      return function() {
        image.fadeIn()
      }
    })(image)
  );

  Drupal.galerie.settings(nid).element.find('.galerie-viewer').prepend(image);
};

})(jQuery);
