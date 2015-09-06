<?php

/**
 * @file: Webform component that allows to suscribe to a simplenews newsletter.
 * This way you can subscribe to a newsletter using a webform, so you can add extra options.
 */

/**
 * Create a default newsletter_email component.
 */
function _webform_defaults_newsletter_email() {
  return array(
    'name' => '',
    'form_key' => NULL,
    'pid' => 0,
    'weight' => 0,
    'value' => '',
    'user_email' => 1,
    'title_display' => 0,
    'mandatory' => 0,
    'email' => 1,
    'extra' => array(
      'width' => '',
      'description' => '',
      'attributes' => array(),
      'news_vid' => 0,
      'action' => '',
      'private' => 0,
    ),
  );
}

/**
 * Implementation of _webform_theme_component().
 */
function _webform_theme_newsletter_email() {
  return array(
    'webform_display_newsletter_email' => array(
      'render element' => 'element',
    ),
  );
}

/**
 * Implementation of _webform_edit_component().
 */
function _webform_edit_newsletter_email($component) {
  $options = array();
  foreach (taxonomy_get_tree(variable_get('simplenews_vid', '')) as $newsletter) {
    $options[$newsletter->tid] = $newsletter->name;
  }

  $form['user_email'] = array(
    '#type' => 'checkbox',
    '#title' => t('User email as default'),
    '#default_value' => $component['user_email'],
    '#description' => t('Set the default value of this field to the user email, if he/she is logged in.'),
    '#weight' => 0,
    '#element_validate' => array('_webform_edit_newsletter_email_validate'),
  );
  $form['extra']['news_vid'] = array(
    '#type' => 'select',
    '#title' => t("Newsletter"),
    '#default_value' => $component['extra']['news_vid'],
    '#description' => t('Select the newsletter this form will handle.'),
    '#required' => TRUE,
    '#multiple' => TRUE,
    '#size' => sizeof($options),
    '#options' => $options,
  );
  $form['extra']['individual_newsletter_selection'] = array(
    '#type' => 'checkbox',
    '#title' => t('Allow individual selection of newsletters'),
    '#default_value' => isset($component['extra']['individual_newsletter_selection']) ? $component['extra']['individual_newsletter_selection'] : '',
    '#description' => t('If this box is checked and multiple newsletters are selected above, the user will be presented with a list of invdividual newsletters that they can subscribe to.'),
  );
  $form['extra']['action'] = array(
    '#type' => 'radios',
    '#title' => t('Action'),
    '#default_value' => $component['extra']['action'] ? $component['extra']['action'] : 'subscribe',
    '#description' => t('Choose the action to be taken on submit.'),
    '#required' => TRUE,
    '#options' => array(
      'subscribe' => t('Subscription'),
      'unsubscribe' => t('Unsubscription'),
    )
  );
  $form['extra']['width'] = array(
    '#type' => 'textfield',
    '#title' => t('Width'),
    '#default_value' => $component['extra']['width'],
    '#description' => t('Width of the textfield.') . ' ' . t('Leaving blank will use the default size.'),
    '#size' => 5,
    '#maxlength' => 10,
  );
  return $form;
}

/**
 * Validation function for the email edit form.
 */
function _webform_edit_newsletter_email_validate($element, &$form_state) {
  if ($form_state['values']['user_email']) {
    $form_state['values']['value'] = '%useremail';
  }
}

/**
 * Implementation of _webform_render_component().
 */
function _webform_render_newsletter_email($component, $value = NULL, $filter = TRUE) {
  $element = array(
    '#title' => $filter ? _webform_filter_xss($component['name']) : $component['name'],
    '#title_display' => $component['extra']['title_display'] ? $component['extra']['title_display'] : 'before',
    '#required' => $component['mandatory'],
    '#weight' => $component['weight'],
    '#attributes' => $component['extra']['attributes'],
    '#element_validate' => array('_webform_validate_newsletter_email'),
    '#theme_wrappers' => array('webform_element'),
    '#webform_component' => $component,
    '#description' => $filter ? _webform_filter_descriptions($component['extra']['description']) : $component['extra']['description']
  );
  $element['newsletter_email_address'] = array(
    '#type' => 'textfield',
    '#default_value' => _webform_filter_values($component['value']),
  );

  if (isset($value)) {
    $element['email']['#default_value'] = $value[0];
  }

  // Change the 'width' option to the correct 'size' option.
  if ($component['extra']['width'] > 0) {
    $element['newsletter_email_address']['#size'] = $component['extra']['width'];
  }

  $news_vid = $component['extra']['news_vid'];

  if (count($news_vid) > 1 && $component['extra']['individual_newsletter_selection']) {
    $options = array();
    foreach (taxonomy_get_tree(variable_get('simplenews_vid', '')) as $newsletter) {
      if ($news_vid[$newsletter->tid] != 0) {
        $options[$newsletter->tid] = $newsletter->name;
      }
    }

    $element['newsletter_selection'] = array(
      '#type' => 'checkboxes',
      '#default_value' => array(),
      '#options' => $options,
    );
  }
  return $element;
}

/**
 * A Drupal Forms API Validation function. Validates the entered values from
 * email components on the client-side form.
 * @param $form_element
 *   The e-mail form element.
 * @param $form_state
 *   The full form state for the webform.
 * @return
 *   None. Calls a form_set_error if the e-mail is not valid.
 */
function _webform_validate_newsletter_email($form_element, $form_state) {
  $component = $form_element['#webform_component'];
  if (!empty($form_element['newsletter_email_address']['#value']) && !valid_email_address($form_element['newsletter_email_address']['#value'])) {
    form_error($form_element, t('%value is not a valid email address.', array('%value' => $form_element['newsletter_email_address']['#value'])));
  }
  elseif (empty($form_element['newsletter_email_address']['#value']) && $form_element['#required']) {
    form_error($form_element, t('E-mail address for newsletter "%name" is required.', array('%name' => $component['name'])));
  }
}

/**
 * Implementation of _webform_submit_component().
 */
function _webform_submit_newsletter_email($component, $value) {
  global $user;
  $mail = $value['newsletter_email_address'];
  $return_val = array(0 => $value['newsletter_email_address']);
  $selected_subscriptions = array();
  if (!empty($value['newsletter_selection'])) {
    foreach ($value['newsletter_selection'] as $k => $v) {
      if ($v > 0) {
        $selected_subscriptions[(int) $k] = (int) $k;
      }
    }
  }
  $news_vid = $component['extra']['news_vid'];

  if (count($selected_subscriptions) > 0) {
    $news_vid = $selected_subscriptions;
  }

  $action = $component['extra']['action'];
  $account = simplenews_load_user_by_mail($mail);
  // If email belongs to the current registered user, don't send confirmation.
  // Other addresses receive a confirmation if double opt-in is selected.
  if ($account->uid && $account->uid == $user->uid) {
    $confirm = FALSE;
  }
  else {
    $confirm = variable_get('simplenews_opt_inout_' . $news_vid, 'double') == 'double';
  }

  if ($mail && isset($news_vid)) {
    if ($action == 'subscribe') {
      if (count($news_vid) > 0) {
        foreach ($news_vid as $k => $v) {
          simplenews_subscribe_user($mail, $v, $confirm);
        }
      }
    }
    else {
      if (count($news_vid) > 0) {
        foreach ($news_vid as $k => $v) {
          simplenews_unsubscribe_user($mail, $v, $confirm);
        }
      }
    }
  }
  return $return_val;
}

/**
 * Implementation of _webform_display_component().
 */
function _webform_display_newsletter_email($component, $value, $format = 'html') {
  return array(
    '#title' => $component['name'],
    '#weight' => $component['weight'],
    '#theme' => 'webform_display_newsletter_email',
    '#theme_wrappers' => $format == 'html' ? array('webform_element') : array('webform_element_text'),
    '#post_render' => array('webform_element_wrapper'),
    '#webform_component' => $component,
    '#format' => $format,
    '#value' => isset($value[0]) ? $value[0] : '',
  );
}

/**
 * Format the text output for this component.
 */
function theme_webform_display_newsletter_email($variables) {
  $element = $variables['element'];
  $element['#value'] = empty($element['#value']) ? ' ' : $element['#value'];
  return $element['#format'] == 'html' ? check_plain($element['#value']) : $element['#value'];
}

/**
 * Implementation of _webform_form_builder_save_component().
 */
function _webform_form_builder_save_newsletter_email($component, $form_element) {
  $component['extra']['width'] = isset($form_element['#size']) ? $form_element['#size'] : NULL;
  $component['extra']['news_vid'] = isset($form_element['#news_vid']) ? $form_element['#news_vid'] : NULL;
  $component['extra']['action'] = isset($form_element['#action']) ? $form_element['#action'] : NULL;
  return $component;
}

/**
 * Implementation of _webform_form_builder_types_component().
 */
function _webform_form_builder_types_newsletter_email() {
  $fields = array();

  $fields['newsletter_email'] = array(
    'title' => t('Newsletter email'),
    'properties' => array(
      'title',
      'description',
      'default_value',
      'required',
      'size',
      'key',
    ),
    'default' => array(
      '#title' => t('New e-mail for newsletters'),
      '#type' => 'textfield',
      '#form_builder' => array('element_type' => 'newsletter_email'),
    ),
  );

  return $fields;
}

/**
 * Implementation of _webform_analysis_component().
 */
function _webform_analysis_newsletter_email($component) {
  $rows = array();
  $nonblanks = 0;
  $submissions = 0;
  $wordcount = 0;

  $result = db_query("SELECT data FROM {webform_submitted_data} WHERE nid = :nid AND cid = :cid", array(':nid' => $component['nid'], ':cid' => $component['cid']))->fetchAll();
  foreach ($result as $data) {
    if (drupal_strlen(trim($data->data)) > 0) {
      $nonblanks++;
      $wordcount += str_word_count(trim($data->data));
    }
    $submissions++;
  }

  $rows[0] = array(t('Submissions'), $submissions);
  return $rows;
}

/**
 * Implementation of _webform_csv_headers_component().
 */
function _webform_csv_headers_newsletter_email($component, $export_options) {
  $header = array();
  $header[0] = '';
  $header[1] = '';
  $header[2] = $component['name'];
  return $header;
}

/**
 * Implementation of _webform_csv_data_component().
 */
function _webform_csv_data_newsletter_email($component, $export_options, $value) {
  return empty($value[0]) ? '' : $value[0];
}

/**
 * Implementation of _webform_table_component().
 */
function _webform_table_newsletter_email($component, $value) {
  return check_plain(empty($value[0]) ? '' : $value[0]);
}
