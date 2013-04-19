$(function() {
	var w = $("div.btn").width();
	var u = w * 5.5;

	$("div.btn").draggable({
		axis: 'x',
		containment: 'parent',
		drag: function(event, ui) {
			if (ui.position.left > u) {
				$("body").fadeOut();
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


$(function() {
	var u = -800

	$("div#menu").draggable({
		axis: 'y',
		//containment: 'body',
		drag: function(event, ui) {
			if (ui.position.top > u ) {
				$("div#menu").addClass('open');
				$(this).animate({
					top: 0
				});
			}
		},
		stop: function(event, ui) {
			if (ui.position.top < u + 1) {
				$(this).animate({
					top: -1160
				});
			}
		}
	});
});