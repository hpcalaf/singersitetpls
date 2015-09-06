<?php
// $Id $

define('DBA_STATPACK_INTERVAL', 1);

/**
 * Display database report.
 */
function dba_statpack_page() {
  $output = array();
  $data = new stdClass();

  // re-use code from dba_report
  $data->status = dba_invoke_driver_specific('status', $data, 'report');
  $sleep = variable_get('dba_statpack_interval', DBA_STATPACK_INTERVAL);
  sleep($sleep);
  $data->status2 = dba_invoke_driver_specific('status', $data, 'report');
  $data->name = dba_invoke_driver_specific('name', $data, 'report');

  // format uptime like statpack v2
  $data->uptime = dba_invoke_driver_specific('uptime', $data, 'statpack');

  $output = dba_statpack_header($data);

  $return = dba_invoke_driver_specific('output', $data, 'statpack');
  if (!empty($return)) {
    $output = array_merge($output, $return);
  }

  $display = '' ;
  foreach ($output as $line) {
    if (substr($line, 0, 1) == '_') {
      $display .= "\n" ;
    }
    $display .= $line . "\n" ;
  }
  return "<pre>$display</pre>" ;
}

/**
 * Add a line of === like standard statpack output.
 */
function dba_statpack_line() {
  return str_repeat('=', 100);
}

/**
 * Center text like standard statpack output.
 */
function dba_statpack_center($text, $length = 100) {
  $space = ($length - strlen($text)) / 2;
  return str_repeat(' ', $space) . $text;
}

/**
 * Display statpack columns.
 */
function dba_statpack_columns($columns = array()) {
  $output = '';
  for ($col = 0; $col < 4; $col++) {
    switch ($col) {
      case 0:
        $output .= sprintf('%28s', $columns[$col]);
        break;
      case 1:
        $output .= sprintf('%17s', $columns[$col]);
        break;
      case 2:
      case 3:
        $output .= sprintf('%25s', $columns[$col]);
        break;
    }
  }
  return $output;
}

/**
 * Format number.
 */
function dba_statpack_short($number, $kb = FALSE, $d = 2) {
  $n = 0;

  $format= array();

  if ($kb) {
    $format = array('b','Kb','Mb','Gb','Tb');
    while ($number > 1023) {
      $number /= 1024;
      $n++;
    }
  }
  else {
    $format = array('','K','M','G','T') ;
    while ($number > 999) {
      $number /= 1000;
      $n++;
    }
  }

  $short = sprintf("%.${d}f%s", $number, $format[$n]) ;

  if (preg_match('/^(.+)\.00$/', $short, $matches)) {
    return $matches[1] ; // Convert 12.00 to 12, but not 12.00kb to 12kb
  }

  return $short;
}

/**
 * Return value as percentage.
 */
function dba_statpack_to_percentage($fraction, $integer = FALSE) {
  if ($integer) {
    return (int)$fraction * 100 ;
  }
  else {
    return floatval($fraction * 100) ;
  }
}

/**
 * Display report header.
 */
function dba_statpack_header($data) {
  $output = array();
  $output[] = dba_statpack_line();
  $text = t('Uptime: ') . $data->uptime . t(' Snapshot Period: !count second interval', array('!count' => variable_get('dba_statpack_interval', DBA_STATPACK_INTERVAL)));
  $output[] = dba_statpack_center($text);
  $output[] = dba_statpack_line();
  $output[] = dba_statpack_columns(array(t('Variable'), t('Delta/Percentage'), t('Per Second'), t('Total')));
  $output[] = dba_statpack_line();
  return $output;
}
