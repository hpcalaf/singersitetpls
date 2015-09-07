<?php

/**
 *  @file
 *  Extends the MediaReadOnlyStreamWrapper class to handle YouTube videos.
 */

/**
 *  Create an instance like this:
 *  $youtube = new MediaYouTubeStreamWrapper('youtube://v/[video-code]');
 */
class MediaYouTubeStreamWrapper extends MediaReadOnlyStreamWrapper {
  protected $base_url = 'http://www.youtube.com/watch';

  static function getMimeType($uri, $mapping = NULL) {
    return 'video/youtube';
  }

  function getOriginalThumbnailPath() {
    $parts = $this->get_parameters();
    $uri = file_stream_wrapper_uri_normalize('youtube://v/' . check_plain($parts['v']));
    $external_url = file_create_url($uri);
    $oembed_url = url('http://www.youtube.com/oembed', array('query' => array('url' => $external_url, 'format' => 'json')));
    $response = drupal_http_request($oembed_url);

    if (!isset($response->error)) {
      $data = drupal_json_decode($response->data);
      return $data['thumbnail_url'];
    }
    else {
      throw new Exception(t('Error Processing Request. (Error: %code, %error)', array('%code' => $response->code, '%error' => $response->error)));
    }
  }

  function getLocalThumbnailPath() {
    $parts = $this->get_parameters();
    $local_path = file_default_scheme() . '://media-youtube/' . check_plain($parts['v']) . '.jpg';

    if (!file_exists($local_path)) {
      // getOriginalThumbnailPath throws an exception if there are any errors
      // when retrieving the original thumbnail from YouTube.
      try {
        $dirname = drupal_dirname($local_path);
        file_prepare_directory($dirname, FILE_CREATE_DIRECTORY | FILE_MODIFY_PERMISSIONS);
        $response = drupal_http_request($this->getOriginalThumbnailPath());

        if (!isset($response->error)) {
          file_unmanaged_save_data($response->data, $local_path, TRUE);
        }
        else {
          @copy($this->getOriginalThumbnailPath(), $local_path);
        }
      }
      catch (Exception $e) {
        // In the event of an endpoint error, use the mime type icon provided
        // by the Media module.
        $file = file_uri_to_object($this->uri);
        $icon_dir = variable_get('media_icon_base_directory', 'public://media-icons') . '/' . variable_get('media_icon_set', 'default');
        $local_path = file_icon_path($file, $icon_dir);
      }
    }

    return $local_path;
  }
}
