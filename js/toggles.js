$(document).ready(function() {

  $('div.new-post-btn').click(function() {
    $('div.compass-container').toggleClass('open');
  });

  $('div.back-btn').click(function() {
    $('div.compass-container').toggleClass('open');
  });

  $('div.menu-btn').click(function() {
    $('div#menu').toggleClass('open');
  });

  $('div.map-btn').click(function() {
    $('div#menu').toggleClass('open');
  });
  
});