	$(document).ready(function(){
		// hide #back-top first
		$("#backToTopButton").hide();
        
		$('a[href*=#]').bind("click", jump);
        
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 400) {
					$('#backToTopButton').fadeIn();
				} else {
					$('#backToTopButton').fadeOut();
				}
			});
		});
	});

	var jump=function(e) {
		/*
		
		//prevent the "normal" behaviour which would be a "hard" jump
		e.preventDefault();
		//Get the target
		var target = $(this).attr("href");
		//perform animated scrolling
		$('html,body').animate({
			//get top-position of target-element and set it as scroll target
			scrollTop: $(target).offset().top
			//scrolldelay: 1 second
		},1000,function(){
		//attach the hash (#jumptarget) to the pageurl
		location.hash = target;
		});
		*/
		
	}