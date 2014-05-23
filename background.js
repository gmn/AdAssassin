
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  //chrome.tabs.executeScript( tab.id, {code: "console.log('extension is: '+window.killer.toggle())"} );
  //chrome.tabs.executeScript( tab.id, {file:"killer2.js"} );
  //chrome.tabs.executeScript( tab.id, {code: "document.body.onclick=function(e){console.log(e.toElement.textContent);return false}"} );
  chrome.tabs.executeScript( null, {file:"killer.js"} );
});
