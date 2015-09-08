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

/**
 * Auto-hide summary textarea if empty and show hide and unhide links.
 */
Drupal.behaviors.textSummary = {
  attach: function (context, settings) {
    $('.text-summary', context).once('text-summary', function () {
      var $widget = $(this).closest('div.field-type-text-with-summary');
      var $summaries = $widget.find('div.text-summary-wrapper');

      $summaries.once('text-summary-wrapper').each(function(index) {
        var $summary = $(this);
        var $summaryLabel = $summary.find('label').first();
        var $full = $widget.find('.text-full').eq(index).closest('.form-item');
        var $fullLabel = $full.find('label').first();

        // Create a placeholder label when the field cardinality is
        // unlimited or greater than 1.
        if ($fullLabel.length == 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }

        // Setup the edit/hide summary link.
        var $link = $('<span class="field-edit-link">(<a class="link-edit-summary" href="#">' + Drupal.t('Hide summary') + '</a>)</span>');
        var $a = $link.find('a');
        var toggleClick = true;
        $link.bind('click', function (e) {
          if (toggleClick) {
            $summary.hide();
            $a.html(Drupal.t('Edit summary'));
            $link.appendTo($fullLabel);
          }
          else {
            $summary.show();
            $a.html(Drupal.t('Hide summary'));
            $link.appendTo($summaryLabel);
          }
          toggleClick = !toggleClick;
          return false;
        }).appendTo($summaryLabel);

        // If no summary is set, hide the summary field.
        if ($(this).find('.text-summary').val() == '') {
          $link.click();
        }
      });
    });
  }
};

})(jQuery);
;
