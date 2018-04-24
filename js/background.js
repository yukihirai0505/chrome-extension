var counter = 0;
var limit = 0;
chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
chrome.tabs.getAllInWindow( null, function( tabs ){
  counter = tabs.length;
  chrome.browserAction.setBadgeText({ text:String(counter) });
});
chrome.tabs.onCreated.addListener( function( tab ){
  counter++;
  chrome.browserAction.setBadgeText({ text: String(counter) });
  var maxTabs = getOption();
  if ( maxTabs <= counter ) {
    limit = 1;
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  }
});
chrome.tabs.onRemoved.addListener( function( tab ){
  counter--;
  chrome.browserAction.setBadgeText({ text: String(counter) });
  var maxTabs = getOption();
  if ( maxTabs > counter ) {
    limit = 0;
    chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
  }
});
var getCounter = function(){
  return counter;
};
var updateCounter = function( counter ){
  chrome.browserAction.setBadgeText({text:String(counter)});
};
var isLimit = function(){
  return limit;
};
var getOption = function() {
  var str = localStorage.getItem("test");
  var obj = JSON.parse(str);
  return obj['tab'];
};