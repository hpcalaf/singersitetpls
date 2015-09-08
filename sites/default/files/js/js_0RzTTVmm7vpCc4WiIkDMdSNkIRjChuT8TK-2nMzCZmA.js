(function ($, soundManager, threeSixtyPlayer, settings) {

if (typeof soundManager != 'undefined' && settings.soundmanager2) {
  threeSixtyPlayer.config = {
    scaleFont: (navigator.userAgent.match(/msie/i) ? false : true),
    playNext: false,
    autoPlay: false,
    allowMultiple: false,
    loadRingColor: '#ccc',
    playRingColor: '#000',
    backgroundRingColor: '#eee',
    circleDiameter: 50,
    circleRadius: 25,
    animDuration: 500,
    animTransition: Animator.tx.bouncy,
    showHMSTime: true,
    scaleArcWidth: 1,

    useWaveformData: settings.soundmanager2.waveform,
    waveformDataColor: '#0099ff',
    waveformDataDownsample: 3,
    waveformDataOutside: false,
    waveformDataConstrain: false,
    waveformDataLineRatio: 0.64,

    useEQData: settings.soundmanager2.eq,
    eqDataColor: '#339933',
    eqDataDownsample: 4,
    eqDataOutside: true,
    eqDataLineRatio: 0.54,

    usePeakData: true,
    peakDataColor: '#ff33ff',
    peakDataOutside: true,
    peakDataLineRatio: 0.5,

    useAmplifier: settings.soundmanager2.amplifier
  }

  soundManager.flash9Options.useWaveformData = true;
  soundManager.flash9Options.useEQData = true;
  soundManager.flash9Options.usePeakData = true;
}
 
})(jQuery, soundManager, threeSixtyPlayer, Drupal.settings);
;
(function ($, soundManager, settings) {

// Setup the soundManager with reasonable defaults
if (typeof soundManager != 'undefined' && settings.soundmanager2) {
  soundManager.url = settings.soundmanager2.mod_url;
  soundManager.flashVersion = 9; // version of flash to require, either 8 or 9. Some API features require Flash 9.
  soundManager.debugMode = settings.soundmanager2.debug; // enable debugging output (div#soundmanager-debug, OR console if available+configured)
  soundManager.useHighPerformance = true; // position:fixed flash movie for faster JS/flash callbacks
  soundManager.useFastPolling = true; // uses lower flash timer interval for higher callback frequency, best combined with useHighPerformance
  soundManager.wmode = 'transparent'; // string: flash rendering mode - null, transparent, opaque (last two allow layering of HTML on top)
}

})(jQuery, soundManager, Drupal.settings);;
