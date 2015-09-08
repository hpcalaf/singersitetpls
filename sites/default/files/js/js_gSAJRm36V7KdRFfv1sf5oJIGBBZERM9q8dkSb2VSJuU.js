/**
 * @file
 * Linkit dialog functions.
 */

(function ($) {

// Create the Linkit namespaces.
Drupal.linkit = Drupal.linkit || {};
Drupal.linkit.currentInstance = Drupal.linkit.currentInstance || {};
Drupal.linkit.dialogHelper = Drupal.linkit.dialogHelper || {};
Drupal.linkit.insertPlugins = Drupal.linkit.insertPlugins || {};

/**
 * Create the modal dialog.
 */
Drupal.linkit.createModal = function() {
  // Create the modal dialog element.
  Drupal.linkit.createModalElement()
  // Create jQuery UI Dialog.
  .dialog(Drupal.linkit.modalOptions())
  // Remove the title bar from the modal.
  .siblings(".ui-dialog-titlebar").hide();

  // Make the modal seem "fixed".
  $(window).bind("scroll resize", function() {
    $('#linkit-modal').dialog('option', 'position', ['center', 50]);
  });

  // Get modal content.
  Drupal.linkit.getDashboard();
};

/**
 * Create and append the modal element.
 */
Drupal.linkit.createModalElement = function() {
  // Create a new div and give it an ID of linkit-modal.
  // This is the dashboard container.
  var linkitModal = $('<div id="linkit-modal"></div>');

  // Create a modal div in the <body>.
  $('body').append(linkitModal);

  return linkitModal;
};

/**
 * Default jQuery dialog options used when creating the Linkit modal.
 */
Drupal.linkit.modalOptions = function() {
  return {
    dialogClass: 'linkit-wrapper',
    modal: true,
    draggable: false,
    resizable: false,
    width: 520,
    position: ['center', 50],
    minHeight: 0,
    zIndex: 210000,
    close: Drupal.linkit.modalClose,
    open: function (event, ui) {
      // Change the overlay style.
      $('.ui-widget-overlay').css({
        opacity: 0.5,
        filter: 'Alpha(Opacity=50)',
        backgroundColor: '#FFFFFF'
      });
    },
    title: 'Linkit'
  };
};

/**
 * Close the Linkit modal.
 */
Drupal.linkit.modalClose = function (e) {
  $('#linkit-modal').dialog('destroy').remove();
  // Make sure the current intstance settings are removed when the modal is
  // closed.
  Drupal.settings.linkit.currentInstance = {};

  // The event object does not have a preventDefault member in
  // Internet Explorer prior to version 9.
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  else {
    return false;
  }
};

/**
 *
 */
Drupal.linkit.getDashboard = function () {
  // Create the AJAX object.
  var ajax_settings = {};
  ajax_settings.event = 'LinkitDashboard';
  ajax_settings.url = Drupal.settings.linkit.dashboardPath +  Drupal.settings.linkit.currentInstance.profile;
  ajax_settings.progress = {
    type: 'throbber',
    message : Drupal.t('Loading Linkit dashboard...')
  };

  Drupal.ajax['linkit-modal'] = new Drupal.ajax('linkit-modal', $('#linkit-modal')[0], ajax_settings);

  // @TODO: Jquery 1.5 accept success setting to be an array of functions.
  // But we have to wait for jquery to get updated in Drupal core.
  // In the meantime we have to override it.
  Drupal.ajax['linkit-modal'].options.success = function (response, status) {
    if (typeof response == 'string') {
      response = $.parseJSON(response);
    }

    // Call the ajax success method.
    Drupal.ajax['linkit-modal'].success(response, status);
    // Run the afterInit function.
    var helper = Drupal.settings.linkit.currentInstance.helper;
    Drupal.linkit.getDialogHelper(helper).afterInit();

    // Set focus in the search field.
    $('#linkit-modal .linkit-search-element').focus();
  };

  // Update the autocomplete url.
  Drupal.settings.linkit.currentInstance.autocompletePathParsed =
    Drupal.settings.linkit.autocompletePath.replace('___profile___',  Drupal.settings.linkit.currentInstance.profile);

  // Trigger the ajax event.
  $('#linkit-modal').trigger('LinkitDashboard');
};

/**
 * Register new dialog helper.
 */
Drupal.linkit.registerDialogHelper = function(name, helper) {
  Drupal.linkit.dialogHelper[name] = helper;
};

/**
 * Get a dialog helper.
 */
Drupal.linkit.getDialogHelper = function(name) {
  return Drupal.linkit.dialogHelper[name];
};

/**
 * Register new insert plugins.
 */
Drupal.linkit.registerInsertPlugin = function(name, plugin) {
  Drupal.linkit.insertPlugins[name] = plugin;
};

/**
 * Get an insert plugin.
 */
Drupal.linkit.getInsertPlugin = function(name) {
  return Drupal.linkit.insertPlugins[name];
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.fieldablePanelPaneFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.vertical-tabs-pane.fieldable-pane-pane-form-reusable-information', context).drupalSetSummary(function (context) {
      var summary = [];

      if ($('input[name="reusable"]', context).is(':checked')) {
        summary.push(Drupal.t('Reusable: Yes'));
        var category = $('input[name="category"]', context).val() || Drupal.t('None');
        summary.push(Drupal.t('Category: @value', { '@value': category }));
        var admin_title = $('input[name="admin_title"]', context).val() || Drupal.t('None');
        summary.push(Drupal.t('Admin title: @value', { '@value': admin_title }));
      }
      else {
        summary.push(Drupal.t('Reusable: No'));
      }

      return summary.join('<br />');
    });

    $('fieldset.vertical-tabs-pane.fieldable-pane-pane-form-revision-information', context).drupalSetSummary(function (context) {
      var revisionCheckbox = $('input[name="revision"]', context);

      // Return 'New revision' if the 'Create new revision' checkbox is checked,
      // or if the checkbox doesn't exist, but the revision log does. For users
      // without the "Administer content" permission the checkbox won't appear,
      // but the revision log will if the content type is set to auto-revision.
      if (revisionCheckbox.is(':checked') || (!revisionCheckbox.length && $('.form-item-log textarea', context).length)) {
        return Drupal.t('New revision');
      }

      return Drupal.t('No revision');
    });
  }
};

})(jQuery);
;
/**
 * @file
 * Provides JavaScript additions to the managed file field type.
 *
 * This file provides progress bar support (if available), popup windows for
 * file previews, and disabling of other file fields during Ajax uploads (which
 * prevents separate file fields from accidentally uploading files).
 */

(function ($) {

/**
 * Attach behaviors to managed file element upload fields.
 */
Drupal.behaviors.fileValidateAutoAttach = {
  attach: function (context, settings) {
    if (settings.file && settings.file.elements) {
      $.each(settings.file.elements, function(selector) {
        var extensions = settings.file.elements[selector];
        $(selector, context).bind('change', {extensions: extensions}, Drupal.file.validateExtension);
      });
    }
  },
  detach: function (context, settings) {
    if (settings.file && settings.file.elements) {
      $.each(settings.file.elements, function(selector) {
        $(selector, context).unbind('change', Drupal.file.validateExtension);
      });
    }
  }
};

/**
 * Attach behaviors to the file upload and remove buttons.
 */
Drupal.behaviors.fileButtons = {
  attach: function (context) {
    $('input.form-submit', context).bind('mousedown', Drupal.file.disableFields);
    $('div.form-managed-file input.form-submit', context).bind('mousedown', Drupal.file.progressBar);
  },
  detach: function (context) {
    $('input.form-submit', context).unbind('mousedown', Drupal.file.disableFields);
    $('div.form-managed-file input.form-submit', context).unbind('mousedown', Drupal.file.progressBar);
  }
};

/**
 * Attach behaviors to links within managed file elements.
 */
Drupal.behaviors.filePreviewLinks = {
  attach: function (context) {
    $('div.form-managed-file .file a, .file-widget .file a', context).bind('click',Drupal.file.openInNewWindow);
  },
  detach: function (context){
    $('div.form-managed-file .file a, .file-widget .file a', context).unbind('click', Drupal.file.openInNewWindow);
  }
};

/**
 * File upload utility functions.
 */
Drupal.file = Drupal.file || {
  /**
   * Client-side file input validation of file extensions.
   */
  validateExtension: function (event) {
    // Remove any previous errors.
    $('.file-upload-js-error').remove();

    // Add client side validation for the input[type=file].
    var extensionPattern = event.data.extensions.replace(/,\s*/g, '|');
    if (extensionPattern.length > 1 && this.value.length > 0) {
      var acceptableMatch = new RegExp('\\.(' + extensionPattern + ')$', 'gi');
      if (!acceptableMatch.test(this.value)) {
        var error = Drupal.t("The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.", {
          // According to the specifications of HTML5, a file upload control
          // should not reveal the real local path to the file that a user
          // has selected. Some web browsers implement this restriction by
          // replacing the local path with "C:\fakepath\", which can cause
          // confusion by leaving the user thinking perhaps Drupal could not
          // find the file because it messed up the file path. To avoid this
          // confusion, therefore, we strip out the bogus fakepath string.
          '%filename': this.value.replace('C:\\fakepath\\', ''),
          '%extensions': extensionPattern.replace(/\|/g, ', ')
        });
        $(this).closest('div.form-managed-file').prepend('<div class="messages error file-upload-js-error" aria-live="polite">' + error + '</div>');
        this.value = '';
        return false;
      }
    }
  },
  /**
   * Prevent file uploads when using buttons not intended to upload.
   */
  disableFields: function (event){
    var clickedButton = this;

    // Only disable upload fields for Ajax buttons.
    if (!$(clickedButton).hasClass('ajax-processed')) {
      return;
    }

    // Check if we're working with an "Upload" button.
    var $enabledFields = [];
    if ($(this).closest('div.form-managed-file').length > 0) {
      $enabledFields = $(this).closest('div.form-managed-file').find('input.form-file');
    }

    // Temporarily disable upload fields other than the one we're currently
    // working with. Filter out fields that are already disabled so that they
    // do not get enabled when we re-enable these fields at the end of behavior
    // processing. Re-enable in a setTimeout set to a relatively short amount
    // of time (1 second). All the other mousedown handlers (like Drupal's Ajax
    // behaviors) are excuted before any timeout functions are called, so we
    // don't have to worry about the fields being re-enabled too soon.
    // @todo If the previous sentence is true, why not set the timeout to 0?
    var $fieldsToTemporarilyDisable = $('div.form-managed-file input.form-file').not($enabledFields).not(':disabled');
    $fieldsToTemporarilyDisable.attr('disabled', 'disabled');
    setTimeout(function (){
      $fieldsToTemporarilyDisable.attr('disabled', false);
    }, 1000);
  },
  /**
   * Add progress bar support if possible.
   */
  progressBar: function (event) {
    var clickedButton = this;
    var $progressId = $(clickedButton).closest('div.form-managed-file').find('input.file-progress');
    if ($progressId.length) {
      var originalName = $progressId.attr('name');

      // Replace the name with the required identifier.
      $progressId.attr('name', originalName.match(/APC_UPLOAD_PROGRESS|UPLOAD_IDENTIFIER/)[0]);

      // Restore the original name after the upload begins.
      setTimeout(function () {
        $progressId.attr('name', originalName);
      }, 1000);
    }
    // Show the progress bar if the upload takes longer than half a second.
    setTimeout(function () {
      $(clickedButton).closest('div.form-managed-file').find('div.ajax-progress-bar').slideDown();
    }, 500);
  },
  /**
   * Open links to files within forms in a new window.
   */
  openInNewWindow: function (event) {
    $(this).attr('target', '_blank');
    window.open(this.href, 'filePreview', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=500,height=550');
    return false;
  }
};

})(jQuery);
;
(function ($) {

/**
 * Behavior to add source options to configured fields.
 */
Drupal.behaviors.fileFieldSources = {};
Drupal.behaviors.fileFieldSources.attach = function(context, settings) {
  $('div.filefield-sources-list:not(.filefield-sources-processed)', context).each(function() {
    $(this).addClass('filefield-sources-processed');
    var $fileFieldElement = $(this).parents('div.form-managed-file:first');
    $(this).find('a').click(function() {
      // Remove the active class.
      $(this).parents('div.filefield-sources-list').find('a.active').removeClass('active');

      // Find the unique FileField Source class name.
      var fileFieldSourceClass = this.className.match(/filefield-source-[0-9a-z]+/i)[0];

      // The default upload element is a special case.
      if ($(this).is('.filefield-source-upload')) {
        $fileFieldElement.find('div.filefield-sources-list').siblings('.form-file, .form-submit').css('display', '');
        $fileFieldElement.find('div.filefield-source').css('display', 'none');
      }
      else {
        $fileFieldElement.find('div.filefield-sources-list').siblings('.form-file, .form-submit').css('display', 'none');
        $fileFieldElement.find('div.filefield-source').not('div.' + fileFieldSourceClass).css('display', 'none');
        $fileFieldElement.find('div.' + fileFieldSourceClass).css('display', '');
      }

      // Add the active class.
      $(this).addClass('active');
      Drupal.fileFieldSources.updateHintText($fileFieldElement.get(0));
    }).first().triggerHandler('click');

    // Clipboard support.
    $fileFieldElement.find('.filefield-source-clipboard-capture')
      .bind('paste', Drupal.fileFieldSources.pasteEvent)
      .bind('focus', Drupal.fileFieldSources.pasteFocus)
      .bind('blur', Drupal.fileFieldSources.pasteBlur);
  });

  if (context === document) {
    $('form').submit(function() {
      Drupal.fileFieldSources.removeHintText();
    });
  }
};

/**
 * Helper functions used by FileField Sources.
 */
Drupal.fileFieldSources = {
  /**
   * Update the hint text when clicking between source types.
   */
  updateHintText: function(fileFieldElement) {
    // Add default value hint text to text fields.
    $(fileFieldElement).find('div.filefield-source').each(function() {
      var matches = this.className.match(/filefield-source-([a-z]+)/);
      var sourceType = matches[1];
      var defaultText = '';
      var textfield = $(this).find('input.form-text:first').get(0);
      var defaultText = (Drupal.settings.fileFieldSources && Drupal.settings.fileFieldSources[sourceType]) ? Drupal.settings.fileFieldSources[sourceType].hintText : '';

      // If the field doesn't exist, just return.
      if (!textfield) {
        return;
      }

      // If this field is not shown, remove its value and be done.
      if (!$(this).is(':visible') && textfield.value == defaultText) {
        textfield.value = '';
        return;
      }

      // Set a default value:
      if (textfield.value == '') {
        textfield.value = defaultText;
      }

      // Set a default class.
      if (textfield.value == defaultText) {
        $(textfield).addClass('hint');
      }

      $(textfield).focus(hideHintText);
      $(textfield).blur(showHintText);

      function showHintText() {
        if (this.value == '') {
          this.value = defaultText;
          $(this).addClass('hint');
        }
      }

      function hideHintText() {
        if (this.value == defaultText) {
          this.value = '';
          $(this).removeClass('hint');
        }
      }
    });
  },

  /**
   * Delete all hint text from a form before submit.
   */
  removeHintText: function() {
    $('div.filefield-source input.hint').val('').removeClass('hint');
  },

  /**
   * Clean up the default value on focus.
   */
  pasteFocus: function(e) {
    // Set default text.
    if (!this.defaultText) {
      this.defaultText = this.innerHTML;
      this.innerHTML = '';
    }
    // Remove non-text nodes.
    $(this).children().remove();
  },

  /**
   * Restore default value on blur.
   */
  pasteBlur: function(e) {
    if (this.defaultText && !this.innerHTML) {
      this.innerHTML = this.defaultText;
    }
  },

  pasteEvent: function(e) {
    var clipboardData = null;
    var targetElement = this;

    // Chrome.
    if (window.event && window.event.clipboardData && window.event.clipboardData.items) {
      clipboardData = window.event.clipboardData;
    }
    // All browsers in the future (hopefully).
    else if (e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items) {
      clipboardData = e.originalEvent.clipboardData;
    }
    // Firefox with content editable pastes as img tag with data href.
    else if ($.browser.mozilla) {
      Drupal.fileFieldSources.waitForPaste(targetElement);
      return true;
    }
    else {
      Drupal.fileFieldSources.pasteError(targetElement, Drupal.t('Paste from clipboard not supported in this browser.'));
      return false;
    }

    var items = clipboardData.items;
    var types = clipboardData.types;
    var filename = targetElement.firstChild ? targetElement.firstChild.textContent : '';

    // Handle files and image content directly in the clipboard.
    var fileFound = false;
    for (var n = 0; n < items.length; n++) {
      if (items[n] && items[n].kind === 'file') {
        var fileBlob = items[n].getAsFile();
        var fileReader = new FileReader();
        // Define events to fire after the file is read into memory.
        fileReader.onload = function() {
          Drupal.fileFieldSources.pasteSubmit(targetElement, filename, this.result);
        };
        fileReader.onerror = function() {
          Drupal.fileFieldSources.pasteError(targetElement, Drupal.t('Error reading file from clipboard.'));
        };
        // Read in the file to fire the above events.
        fileReader.readAsDataURL(fileBlob);
        fileFound = true;
        break;
      }
      // Handle files that a copy/pasted as a file reference.
      //if (types[n] && types[n] === 'Files') {
      //  TODO: Figure out how to capture copy/paste of entire files from desktop.
      //}
    }
    if (!fileFound) {
      Drupal.fileFieldSources.pasteError(targetElement, Drupal.t('No file in clipboard.'));
    }
    return false;
  },

  /**
   * For browsers that don't support native clipboardData attributes.
   */
  waitForPaste: function(targetElement) {
    if (targetElement.children && targetElement.children.length > 0) {
      var filename = targetElement.firstChild ? targetElement.firstChild.textContent : '';
      var tagFound = false;
      $(targetElement).find('img[src^="data:image"]').each(function(n, element) {
        Drupal.fileFieldSources.pasteSubmit(targetElement, filename, element.src);
        tagFound = true;
      });
      $(targetElement).html(filename);
      if (!tagFound) {
        Drupal.fileFieldSources.pasteError(targetElement, Drupal.t('No file in clipboard.'));
      }
    }
    else {
      setTimeout(function() {
        Drupal.fileFieldSources.waitForPaste(targetElement);
      }, 200);
    }
  },

  /**
   * Set an error on the paste field temporarily then clear it.
   */
  pasteError: function(domElement, errorMessage) {
    var $description = $(domElement).parents('.filefield-source-clipboard:first').find('.description');
    if (!$description.data('originalDescription')) {
      $description.data('originalDescription', $description.html())
    }
    $description.html(errorMessage);
    var errorTimeout = setTimeout(function() {
      $description.html($description.data('originalDescription'));
      $(this).unbind('click.pasteError');
    }, 3000);
    $(domElement).bind('click.pasteError', function() {
      clearTimeout(errorTimeout);
      $description.html($description.data('originalDescription'));
      $(this).unbind('click.pasteError');
    });
  },

  /**
   * After retreiving a clipboard, post the results to the server.
   */
  pasteSubmit: function(targetElement, filename, contents) {
    var $wrapper = $(targetElement).parents('.filefield-source-clipboard');
    $wrapper.find('.filefield-source-clipboard-filename').val(filename);
    $wrapper.find('.filefield-source-clipboard-contents').val(contents);
    $wrapper.find('input.form-submit').trigger('mousedown');
  }
};

})(jQuery);;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
window.CKEDITOR_BASEPATH = '/sites/all/libraries/ckeditor/';;
