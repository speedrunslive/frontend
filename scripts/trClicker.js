	$(document).ready(function() {
		$('tr, th').click(function() {
			var href = $(this).find("a").attr("href");
			if(href) {
				window.location = href;
			}
		});
		
		$('tr th').each(function(index) {
			var href = $(this).find("a").attr("href");
			if (href) {
				$(this).addClass('clickable_th');
			}
		});
	});