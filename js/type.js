var audio = document.getElementById(`click4`),
    textarea = document.getElementById('content'),
    curtain = document.getElementById('curtain'),
    saveElement = document.getElementById('save'),
    filenameValue = document.getElementById('filename');

var d = function(a, b) {
    return Math.random() * (b - a) + a
};

textarea.addEventListener('keydown', function(e) {
  if (e.keyCode == 9) {
    document.execCommand('insertText', 1, '    ')
    e.preventDefault();
  }

  if ((e.keyCode > 64) && (e.keyCode < 91)) {
    audio.pause(),
    audio.currentTime = 0,
    audio.playbackRate = d(.85, 1),
    audio.play();
  }
});

curtain.addEventListener("click", function() {
  curtain.parentNode.removeChild(curtain);

  var el = document.documentElement,
    rfs = el.requestFullscreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
      || el.msRequestFullscreen
  ;

  rfs.call(el);
  setTimeout(() => {
    textarea.focus();
  }, 500)
});

saveElement.addEventListener('click', function(e) {
  var blob = new Blob([textarea.value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filenameValue.value);
});
