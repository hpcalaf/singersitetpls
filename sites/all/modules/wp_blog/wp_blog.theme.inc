<?php
// $Id: wp_blog.theme.inc,v 1.1 2011/02/13 22:01:18 manarth Exp $
/**
 * @file
 * Theme functions for the WP blog module.
 */


/**
 * Theme handler for theme('wp_blog_archive).
 */
function theme_wp_blog_archive($element) {
  $items = array();
  $items[] = $element['element']['show_all_link'];

  $archive = $element['element']['archive'];

  foreach ($archive as $ykey => $year) {
    $item = array(
      'data' => t('!year [@count]', array('!year' => l($year['text'], "blog/{$ykey}"), '@count' => $year['count'])),
      'children' => array(),
    );
    foreach ($year['months'] as $mkey => $month) {
      $item['children'][] = array(
        'data' => t('!month [@count]', array('!month' => l($month['text'], "blog/{$ykey}/{$mkey}"), '@count' => $month['count'])),
      );
    }
    $items[] = $item;
  }

  return theme('item_list', array(
    'items' => $items,
  ));
}
