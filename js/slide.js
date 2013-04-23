$(function() {
	var w = $("div.btn").width();
	var u = w * 6;

	$("div.btn").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > u) {
				alert("Not available in demo mode.");
				$(this).animate({
					left: 0
				});
				$('div.log-cache-slider').toggleClass('slide');
		    $('div.cache-log header > h5').toggleClass('slide-hidden');
		    $('div.cache-log header > h1').toggleClass('slide-hidden');
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < u + 1) {
				$(this).animate({
					left: 0
				});
			}
		}
	});
});


// $(function() {
// 	var u = -800

// 	$("div#menu").draggable({
// 		axis: 'y',
// 		//containment: 'body',
// 		drag: function(event, ui) {
// 			if (ui.position.top > u ) {
// 				$("div#menu").addClass('open');
// 				$(this).animate({
// 					top: 0
// 				});
// 			}
// 		},
// 		stop: function(event, ui) {
// 			if (ui.position.top < u + 1) {
// 				$(this).animate({
// 					top: -1160
// 				});
// 			}
// 		}
// 	});
// });