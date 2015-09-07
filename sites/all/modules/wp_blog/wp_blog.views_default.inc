<?php
// $Id: wp_blog.views_default.inc,v 1.1 2011/02/13 22:01:18 manarth Exp $

/**
 * @file
 * Default views for the WP blog module.
 */

/**
 * Implements hook_views_default_views().
 */
function wp_blog_views_default_views() {
  $views = array();

  // Parse each .view file in the views folder.
  $path = dirname(__FILE__) . '/views';
  foreach (glob("{$path}/*.view") as $file) {
    include($file);
    $views[$view->name] = $view;
  }
  return $views;
}
