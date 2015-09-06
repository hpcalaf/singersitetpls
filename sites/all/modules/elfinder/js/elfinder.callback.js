// $Id: elfinder.callback.js,v 1.1.2.3 2010/12/01 19:54:14 ph0enix Exp $


$().ready(function() {
  if (Drupal.settings.elfinder) {
    var editorApp = Drupal.settings.elfinder.editorApp;
    var funcNum = null;
    var langCode = Drupal.settings.elfinder.langCode;
    var editorCallbackFunction = null;

    var elfinderOpts = {
      url : Drupal.settings.elfinder.connectorUrl,
      lang : langCode,
      rememberLastDir : Drupal.settings.elfinder.rememberLastDir,
      closeOnEditorCallback : false,
    }

    switch (editorApp) {
      case 'ckeditor':
        editorCallbackFunction = function(url) {
          funcNum = window.location.search.replace(/^.*CKEditorFuncNum=(\d+).*$/, "$1");
          window.opener.CKEDITOR.tools.callFunction(funcNum, url);
          window.close();
        }
        break;

      case 'fckeditor':
        editorCallbackFunction = function(url) {
          window.opener.SetUrl(url) ;
          window.close();
        }
        break;

      case 'tinymce':
        editorCallbackFunction = function(url) {
          window.tinymceFileWin.document.forms[0].elements[window.tinymceFileField].value = url;
          window.tinymceFileWin.focus();
          window.close();
        }
        break;

      case 'bueditor':
        editorCallbackFunction = function(url) {        
          var img = $('<img/>').attr('src', url).css('display', 'none').insertBefore($('#finder')); 
          parent.jQuery("#bue-tgd-form input[name=attr_width]").val(img.width());
          parent.jQuery("#bue-tgd-form input[name=attr_height]").val(img.height());
          parent.BUE.imce.target.value = url;
          parent.BUE.popups['bue-imce-pop'].close();
        }
        break;

      case 'jwysiwyg':
        editorCallbackFunction = function(url) {   
          window.opener.jQuery('.ui-dialog input[type=text][name=url]').val(url);
          window.close();
        }
        break;

      case 'yui':
        editorCallbackFunction = function(url) {
          var editorId = window.opener.Drupal.wysiwyg.activeId;
          window.opener.jQuery('input#' + editorId + '_insertimage_url').val(url);
          window.close();
        }
        break;

      case 'wymeditor':
        editorCallbackFunction = function(url) {
          window.opener.jQuery('input.wym_src').val(url);
          window.close();
        }
        break;

      case 'drupalnodeattach':
        //elfinderOpts.cutURL = 'root';
        editorCallbackFunction = function(url) {
          parent.jQuery('input#edit-attach-url').val(url);
          alert(url);
        }
        break;

      case 'ffs':
        elfinderOpts.url += '/relative';
        editorCallbackFunction = function(url) {

          var fieldName = Drupal.settings.elfinder.field_name;
          var fieldId = Drupal.settings.elfinder.filepath_id;
          
          var filePath = url;

          window.opener.jQuery('input#'+fieldId).val(filePath).change();
          window.opener.focus();
          window.close();
        }
        break;
    }
    

    elfinderOpts.editorCallback = editorCallbackFunction;
    
    $('#finder').elfinder(elfinderOpts);
  }
});

