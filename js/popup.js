var showOption = function() {
  var str = localStorage.getItem("test");
  var obj = JSON.parse(str);
  $('#maxtab').text(obj['tab']);
};
$(function(){
  showOption();
  var BG = chrome.extension.getBackgroundPage();
  if ( BG.isLimit() ) {
    $('#maxtab').css('color', '#f00');
  } else {
    $('#maxtab').css('color', '#000');
  }
});