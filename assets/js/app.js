$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 4000);
});

$(document).ready(function(){
  $('.carousel').carousel();

  $('.pets').click(function(){
  	$('.pets').css("color", "red");
  });
});

