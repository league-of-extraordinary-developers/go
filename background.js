size = 601
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('dist/index.html', {
    frame: 'none',
    minHeight: size,
    minWidth: size,
    width: size,
    height: size,
    maxWidth: size,
    maxHeight: size
  });
});
