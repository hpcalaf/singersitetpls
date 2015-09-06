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
 * - $rows: The rows contained in this grouping.
 * - $title: The title of this grouping.
 */

?>
<div class="views-complex-grouping-leave level_<?php print $grouping_level; ?>">
  <?php if (!empty($title)): ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  <?php foreach ($rows as $id => $row): ?>
    <div class="views-row views-row-<?php print $zebra; ?> <?php print $classes; ?>">
      <?php print $row; ?>
    </div>
  <?php endforeach; ?>
</div>
