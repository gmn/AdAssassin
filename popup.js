
/*chrome.extension.onRequest.addListener

var i = 1;

window.onload = function() {

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id}, function(activeTabs) {
      // killer.js loaded when extension button pressed
      chrome.tabs.executeScript( activeTabs[0].id, {file: 'killer.js', allFrames: true});

    });
  });

};
*/



