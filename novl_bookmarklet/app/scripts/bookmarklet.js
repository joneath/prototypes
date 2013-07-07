(function() {
  var frame = document.createElement('iframe');
  frame.setAttribute('src', '//bookmarklet.novl.dev/');
  frame.setAttribute('style', 'position:absolute;top:0;left:0;height:100%;width:100%;z-index:9999;background:rgba(255,255,255,.9);');

  document.body.style['overflow'] = 'hidden';
  document.body.appendChild(frame);
}());
