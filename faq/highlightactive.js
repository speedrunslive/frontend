$(document).ready(function() {
	var pathArray = window.location.href.split('/');
	if (pathArray[4].toLowerCase() == 'rules') { 
		$("#faqHead a:nth-of-type(1)").addClass("current");
	}
	else if ( pathArray[4].toLowerCase() == 'commandlist' ) {
		$("#faqHead a:nth-of-type(3)").addClass("current");
	}
	else if ( pathArray[4].toLowerCase() == 'glossary' ) {
		$("#faqHead a:nth-of-type(4)").addClass("current");
	}
	else {
		$("#faqHead a:nth-of-type(2)").addClass("current");
	}
});