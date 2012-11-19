chrome.app.runtime.onLaunched.addListener (launchData) ->
  chrome.app.window.create "../main.html",
    width: 500
    height: 600
    minWidth: 500
    minHeight: 600
    frame: "none"


chrome.runtime.onInstalled.addListener ->
  console.log "installed"

chrome.runtime.onSuspend.addListener ->


# Do some simple clean-up tasks.
