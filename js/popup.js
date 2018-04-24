$(function(){
  var BG = chrome.extension.getBackgroundPage();
  $('#counter').val(BG.getCounter());
  $('#update').click(function(){
    BG.updateCounter( $('#counter').val() );
  });
});
