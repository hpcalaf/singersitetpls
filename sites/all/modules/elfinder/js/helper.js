// $Id: helper.js,v 1.1 2010/10/06 09:44:51 ph0enix Exp $

Drupal.elfinder = {
  editor: {
  
  }

}

function elfinder_tinymce_callback(field_name, url, type, win) {
  var w = window.open(tinymce.settings.file_browser_url, null, 'toolbar=yes,menubar=yes,width=600,height=500');
  w.tinymceFileField = field_name;
  w.tinymceFileWin = win;
}
