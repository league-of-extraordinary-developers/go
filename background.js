chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app/index.html', {
    frame: 'none',
    minHeight: 830,
    minWidth: 800,
    width: 800,
    height: 830,
    maxWidth: 800,
    maxHeight: 830
  });
});
