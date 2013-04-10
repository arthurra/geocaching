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

  $('div.menu-slider').click(function() {
    $('div#menu').toggleClass('open');
  });

  // if ("div#menu.open") {
  //   $('#main').click(function() {
  //     $('div#menu').removeClass('open');
  //   });
  // };

  $('div#main .header').click(function() {
    $('div#menu').removeClass('open');
  });

  $('div.map-btn').click(function() {
    $('div#menu').toggleClass('open');
  });

  $('div.cache-adv-log').click(function() {
    $(this).toggleClass('closed');
  });

  $('div.log-cache-slider').click(function() {
    $(this).toggleClass('slide');
    $('div.cache-log header > h5').toggleClass('hidden');
    $('div.cache-log header > h1').toggleClass('hidden');
  });

  $('div.search').click(function() {
    $('div.header').toggleClass('search-mode');
    $('div.search').toggleClass('search-mode');
    $('div.saved-caches').toggleClass('search-mode');
    $('div.canvas-overlay').toggleClass('search-mode');
  });
  
});