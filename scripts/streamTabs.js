$(document).ready(function(){
	$(".streamLitRed").click(function(){
		$(this).next().slideToggle("medium");
		$(this).toggleClass("streamLitRed").toggleClass("streamNotLit"); 
		return false;
	});
	$(".streamLitBlue").click(function(){
		$(this).next().slideToggle("medium");
		$(this).toggleClass("streamLitBlue").toggleClass("streamNotLit"); 
		return false;
	});
	$(".streamNotLit").click(function(){
		$(this).next().slideToggle("medium");
		if ($(this).hasClass("bluebar")) {
			$(this).toggleClass("streamNotLit").toggleClass("streamLitBlue"); 
		} else {
			$(this).toggleClass("streamNotLit").toggleClass("streamLitRed"); 
		}
		return false;
	});
});