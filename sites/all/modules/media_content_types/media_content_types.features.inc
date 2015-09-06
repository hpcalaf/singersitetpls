<?php
/**
 * @file
 * media_content_types.features.inc
 */

/**
 * Implements hook_node_info().
 */
function media_content_types_node_info() {
  $items = array(
    'audio' => array(
      'name' => t('audio'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
