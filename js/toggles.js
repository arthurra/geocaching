$(document).ready(function() {

  $('div.photo').click(function(){
    alert("Not available in demo mode.");
  });

  $('div.text').click(function(){
    alert("Not available in demo mode.");
  });

  $('div.video').click(function(){
    alert("Not available in demo mode.");
  });

  $('div.mini-map').click(function(){
    $('div.content-container').toggleClass('hidden');
  });

  $('div.map-container').click(function(){
    $('div.content-container').toggleClass('hidden');
  });

  $('div.new-post-btn').click(function() {
    $('div.compass-container').toggleClass('open');
    $('div.menu-container .dividers').toggleClass('hidden');
  });

  $('div.back-btn').click(function() {
    $('div.compass-container').toggleClass('open');
    $('div.menu-container .dividers').toggleClass('hidden');
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

  $('div#main').click(function() {
    $('div#menu').removeClass('open');
    $('div#menu').animate({
      top: -1190
    });
  });

  $('div.map-btn').click(function() {
    $('div#menu').toggleClass('open');
  });

  $('div.cache-adv-log').click(function() {
    $(this).toggleClass('closed');
  });

  $('div.log-cache-slider').click(function() {
    $(this).toggleClass('slide');
    $('div.cache-log header > h5').toggleClass('slide-hidden');
    $('div.cache-log header > h1').toggleClass('slide-hidden');
  });

  $('div.search').click(function() {
    $('div.header').toggleClass('search-mode');
    $('div.search').toggleClass('search-mode');
    $('div.saved-caches').toggleClass('search-mode');
    $('div.local-guide').toggleClass('search-mode');
    $('div.guide-menu').toggleClass('search-mode');
    $('div.canvas-overlay').toggleClass('search-mode');
  });

  $('div.more-info').click(function() {
    $(this).toggleClass('closed');
  });

  $('div.nearby-cache').click(function() {
    $(this).toggleClass('active');
  });
  
});