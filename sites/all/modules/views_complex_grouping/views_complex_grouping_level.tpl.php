<?php

/**
 * @file
 * This template is used to print a single grouping in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $grouping: The grouping instruction.
 * - $grouping_level: Integer indicating the hierarchical level of the grouping.
 * - $rows: The rows contained in this grouping.
 * - $title: The title of this grouping.
 * - $content: The processed content output that will normally be used.
 * - $fields: The processed extra field that will normally be used.
 */
?>

<div class="views-complex-grouping-level level_<?php print $grouping_level; ?>">
  <h1><?php print $title; ?></h1>
  <div class="views-complex-grouping-extra_fields">
  <?php foreach ($fields as $field): ?>
    <?php print $field; ?>
  <?php endforeach; ?>
  </div>
  <div class="views-complex-grouping-content">
    <?php print $content; ?>
  </div>
</div>
