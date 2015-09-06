<?php

/**
 * @file views_complex_grouping.views.inc
 * Just describing our Views style plugin; nothing much to see here.
 */

/**
 * Implements hook_views_plugins().
 */
function views_complex_grouping_views_plugins() {
  return array(
    'style' => array(
      'grouping_complex' => array(
        'title' => t('Complex Grouping Field'),
        'help' => t('Enable complex grouping fields'),
        'handler' => 'views_complex_grouping_style_plugin',
        'theme' => 'views_complex_grouping_leave',
        'uses row plugin' => TRUE,
        'uses options' => TRUE,
        'uses grouping' => TRUE,
        'type' => 'normal',
      ),
    ),
  );
}
