<?php

function dba_mysql_statpack_uptime($data) {
  $uptime = $data->status->Uptime;
  $days = (int)($uptime / 86400);
  $uptime %= 86400;

  $hours = (int)($uptime / 3600);
  $uptime %= 3600 ;

  $minutes = (int)($uptime / 60);

  $granularity = 0;
  $uptime = '';
  if ($days > 0 && $granularity < 2) {
    $uptime .= t('!days ', array('!days' => format_plural($days, '1 day', '@count days')));
    $granularity++;
  }
  if ($hours > 0 && $granularity < 2) {
    $uptime .= t('!hours ', array('!hours' => format_plural($hours, '1 hour', '@count hours')));
    $granularity++;
  }
  if ($minutes > 0 && $granularity < 2) {
    $uptime .= "$minutes mins ";
    $uptime .= t('!minutes ', array('!minutes' => format_plural($minutes, '1 min', '@count mins')));
    $granularity++;
  }
  return $uptime;
}

function dba_mysql_statpack_output($data) {
  $output = array();

  $output[] = dba_statpack_center(t('Database Activity'));
  $output[] = dba_statpack_line();

  $output[] = dba_mysql_statpack_activity(t('Threads Connected'), $data->status->Threads_connected, $data->status2->Threads_connected);
  $output[] = dba_mysql_statpack_activity(t('Threads Running'), $data->status->Threads_running, $data->status2->Threads_running);
  $output[] = dba_mysql_statpack_activity(t('Questions'), $data->status->Questions, $data->status2->Questions);
  $output[] = dba_mysql_statpack_activity(t('Bytes Received'), $data->status->Bytes_received, $data->status2->Bytes_received, TRUE);
  $output[] = dba_mysql_statpack_activity(t('Bytes Sent'), $data->status->Bytes_sent, $data->status2->Bytes_sent, TRUE);
  $output[] = dba_mysql_statpack_activity(t('Aborted Clients'), $data->status->Aborted_clients, $data->status2->Aborted_clients);
  $output[] = dba_mysql_statpack_activity(t('Aborted Connects'), $data->status->Aborted_connects, $data->status2->Aborted_connects);

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('Statement Activity'));
  $output[] = dba_statpack_line();

  // Statement totals
  $statements = array();
  $statements[0] = $data->status->Com_select + $data->status->Com_insert + $data->status->Com_update + $data->status->Com_delete + $data->status->Com_replace + $data->status->Com_insert_select + $data->status->Com_replace_select + $data->status->Com_update_multi + $data->status->Com_delete_multi + $data->status->Com_commit + $data->status->Com_rollback;
  $statements[1] = $data->status2->Com_select + $data->status2->Com_insert + $data->status2->Com_update + $data->status2->Com_delete + $data->status2->Com_replace + $data->status2->Com_insert_select + $data->status2->Com_replace_select + $data->status2->Com_update_multi + $data->status2->Com_delete_multi + $data->status2->Com_commit + $data->status2->Com_rollback;
  $statements[2] = $statements[1] - $statements[0];

  if ($return = dba_mysql_statpack_statement(t('SELECT'), $data->status->Com_select, $data->status2->Com_select, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('INSERT'), $data->status->Com_insert, $data->status2->Com_insert, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('UPDATE'), $data->status->Com_update, $data->status2->Com_update, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('DELETE'), $data->status->Com_delete, $data->status2->Com_delete, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('REPLACE'), $data->status->Com_replace, $data->status2->Com_replace, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('INSERT ... SELECT'), $data->status->Com_insert_select, $data->status2->Com_insert_select, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('REPLACE ... SELECT'), $data->status->Com_replace_select, $data->status2->Com_replace_select, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('Multi UPDATE'), $data->status->Com_update_multi, $data->status2->Com_update_multi, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('Multi DELETE'), $data->status->Com_delete_multi, $data->status2->Com_delete_multi, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('COMMIT'), $data->status->Com_commit, $data->status2->Com_commit, $statements)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_statement(t('ROLLBACK'), $data->status->Com_rollback, $data->status2->Com_rollback, $statements)) {
    $output[] = $return;
  }

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('Admin Commands'));
  $output[] = dba_statpack_line();

  if ($return = dba_mysql_statpack_activity(t('KILL'), $data->status->Com_kill, $data->status2->Com_kill, 0)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('FLUSH'), $data->status->Com_flush, $data->status2->Com_flush, 0)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('ANALYZE TABLE'), $data->status->Com_analyze, $data->status2->Com_analyze, 0)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('OPTIMIZE TABLE'), $data->status->Com_optimize, $data->status2->Com_optimize, 0)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('CHECK TABLE'), $data->status->Com_check, $data->status2->Com_check, 0)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('REPAIR TABLE'), $data->status->Com_repair, $data->status2->Com_repair, 0)) {
    $output[] = $return;
  }

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('Thread Cache'));
  $output[] = dba_statpack_line();

  $output[] = dba_statpack_columns(array(t('Thread Efficiency'), '', '', dba_statpack_short(100 - dba_statpack_to_percentage($data->status2->Threads_created / $data->status2->Connections)) .'%')); 
  $output[] = dba_mysql_statpack_activity(t('Connections'), $data->status->Connections, $data->status2->Connections);
  $output[] = dba_mysql_statpack_activity(t('Threads Created'), $data->status->Threads_created, $data->status2->Threads_created);

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('Table Cache'));
  $output[] = dba_statpack_line();

  $output[] = dba_statpack_columns(array(t('table_cache Efficiency'), '', '', dba_statpack_short(dba_statpack_to_percentage($data->status2->Open_tables / ($data->status2->Opened_tables + 1))) .'%')); 
  $output[] = dba_mysql_statpack_activity(t('Open Tables'), $data->status->Open_tables, $data->status2->Open_tables);
  $output[] = dba_mysql_statpack_activity(t('Opened Tables'), $data->status->Opened_tables, $data->status2->Opened_tables);

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('MyISAM Key Cache'));
  $output[] = dba_statpack_line();

  $output[] = dba_statpack_columns(array(t('Cache Read Efficiency'), '', '', dba_statpack_short(dba_statpack_to_percentage($data->status2->Key_reads / ($data->status2->Key_read_requests + 1))) .'%')); 
  $output[] = dba_statpack_columns(array(t('Cache Write Efficiency'), '', '', dba_statpack_short(dba_statpack_to_percentage($data->status2->Key_writes / ($data->status2->Key_write_requests + 1))) .'%')); 
  if ($return = dba_mysql_statpack_format(t('Memory Used'), $data->status2->Key_blocks_used - $data->status->Key_blocks_used, '', $data->status2->Key_blocks_used, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_format(t('Memory Free'), $data->status2->Key_blocks_unused - $data->status->Key_blocks_unused, '', $data->status2->Key_blocks_unused, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Key Reads'), $data->status2->Key_reads, $data->status2->Key_reads)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Key Read Requests'), $data->status2->Key_read_requests, $data->status2->Key_read_requests)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Key Writes'), $data->status2->Key_writes, $data->status2->Key_writes)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Key Write Requests'), $data->status2->Key_write_requests, $data->status2->Key_write_requests)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Blocks Not Flushed'), $data->status2->Key_blocks_not_flushed, $data->status->Key_blocks_not_flushed)) {
    $output[] = $return;
  }

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('InnoDB Buffer Pool'));
  $output[] = dba_statpack_line();

  $output[] = dba_statpack_columns(array(t('Buffer Pool Read Efficiency'), '', '', dba_statpack_short(100 - dba_statpack_to_percentage($data->status2->Innodb_buffer_pool_reads / ($data->status2->Innodb_buffer_pool_read_requests + 1))) .'%')); 
  if ($return = dba_mysql_statpack_format(t('Memory Total'), ($data->status2->Innodb_buffer_pool_pages_total - $data->status->Innodb_buffer_pool_pages_total) * 16384, '', $data->status2->Innodb_buffer_pool_pages_total * 16384, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_format(t('Memory Free'), ($data->status2->Innodb_buffer_pool_pages_free - $data->status->Innodb_buffer_pool_pages_free) * 16384, '', $data->status2->Innodb_buffer_pool_pages_free * 16384, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_format(t('Memory Data'), ($data->status2->Innodb_buffer_pool_pages_data - $data->status->Innodb_buffer_pool_pages_data) * 16384, '', $data->status2->Innodb_buffer_pool_pages_data * 16384, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_format(t('Memory Dirty'), ($data->status2->Innodb_buffer_pool_pages_dirty - $data->status->Innodb_buffer_pool_pages_dirty) * 16384, '', $data->status2->Innodb_buffer_pool_pages_dirty * 16384, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_format(t('Data Read'), ($data->status2->Innodb_data_read - $data->status->Innodb_data_read) * 16384, '', $data->status2->Innodb_data_read, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_format(t('Data Written'), $data->status2->Innodb_data_written - $data->status->Innodb_data_written, '', $data->status2->Innodb_data_written, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Buffer Pool Reads'), $data->status2->Innodb_buffer_pool_reads, $data->status->Innodb_buffer_pool_reads)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Buffer Pool Read Requests'), $data->status->Innodb_buffer_pool_read_requests, $data->status2->Innodb_buffer_pool_read_requests)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Buffer Pool Write Requests'), $data->status->Innodb_buffer_pool_write_requests, $data->status2->Innodb_buffer_pool_write_requests)) {
    $output[] = $return;
  }

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('InnoDB Log Files'));
  $output[] = dba_statpack_line();

  if ($return = dba_mysql_statpack_format(t('Log Data Written'), $data->status2->Innodb_os_log_written - $data->status->Innodb_os_log_written, '', $data->status2->Innodb_os_log_written, TRUE)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Log Writes'), $data->status->Innodb_log_writes, $data->status2->Innodb_log_writes)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Log Write Requests'), $data->status->Innodb_log_write_requests, $data->status2->Innodb_log_write_requests)) {
    $output[] = $return;
  }
  if ($return = dba_mysql_statpack_activity(t('Log Waits'), $data->status->Innodb_log_waits, $data->status2->Innodb_log_waits)) {
    $output[] = $return;
  }

  $output[] = dba_statpack_line();
  $output[] = dba_statpack_center(t('Query Cache'));
  $output[] = dba_statpack_line();

  return $output;
}

function dba_mysql_statpack_activity($title, $first, $last, $bytes = FALSE) {
  $delta = $last - $first;
  $col2 = $delta / variable_get('dba_statpack_interval', DBA_STATPACK_INTERVAL);
  return dba_mysql_statpack_format($title, $delta, $col2, $last, $bytes);
}

function dba_mysql_statpack_format($title, $col1, $col2, $col3, $bytes = FALSE) {
  if ($col1) {
    $col1 = dba_statpack_short($col1, $bytes);
  }
  if ($col2) {
    $col2 = dba_statpack_short($col2, $bytes);
  }
  if ($col3) {
    $col3 = dba_statpack_short($col3, $bytes);
  }
  if (variable_get('dba_statpack_hide', TRUE) && !$col3) {
    return '';
  }
  else {
    return dba_statpack_columns(array($title, $col1, $col2, $col3));
  }
}

function dba_mysql_statpack_statement($title, $first, $last, $statements) {
  $delta = dba_statpack_short($last - $first);
  if ($delta > 0) {
    $col1 = "$delta (". dba_statpack_short(dba_statpack_to_percentage($delta / $statements[2])) .'%)';
  }
  else {
    $col1 = $delta;
  }
  $col2 = dba_statpack_short($delta / variable_get('dba_statpack_interval', DBA_STATPACK_INTERVAL));
  if ($last > 0) {
    $col3 = dba_statpack_short($last) .' ('. dba_statpack_short(dba_statpack_to_percentage($last / $statements[1])) . '%)';
  }
  else {
    $col3 = dba_statpack_short($last);
  }
  if (variable_get('dba_statpack_hide', TRUE) && !$col3) {
    return '';
  }
  else {
    return dba_statpack_columns(array($title, $col1, $col2, $col3));
  }
}

