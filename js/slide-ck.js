$(function(){var e=$("div.btn").width(),t=e*5.5;$("div.btn").draggable({axis:"x",containment:"parent",drag:function(e,n){n.position.left>t&&$("body").fadeOut()},stop:function(e,n){n.position.left<t+1&&$(this).animate({left:0})}})});$(function(){var e=-400;$("div#menu").draggable({axis:"y",drag:function(t,n){if(n.position.top>e){$("div#menu").addClass("open");$(this).animate({top:0})}},stop:function(t,n){n.position.top<e+1&&$(this).animate({top:-582})}})});