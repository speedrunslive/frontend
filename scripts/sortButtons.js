var Behavior = {};
var popped = true;

Behavior.setup = function () {
    $("#pop").click(Behavior.popClicked);
	$("#abc").click(Behavior.abcClicked);
	
    var pops=[775, 336, 101];
	pops.push(183, 33)
	var i = 0;
	var popBarTotal = $('.popBar').size();
	do {
	var currentPopBar = $(".popBar:first");
	var popSize = currentPopBar.html();
	popSize = Math.floor(popSize * 200 / maxpop);
	if (popSize == 0) {
		currentPopBar.removeClass("popBar");
		currentPopBar.hide();
	} else {
		currentPopBar.css("width", popSize+"px");
		currentPopBar.removeClass("popBar");
		currentPopBar.addClass("popBar2");
	}
	currentPopBar.html("");
	i++
	} while (i < popBarTotal);
	
}

Behavior.popClicked = function() {
	if (popped == false) {
		$("#abc").addClass("sortButtonOff");
		$("#pop").removeClass("sortButtonOff");
		$("#abcTable").hide();
		$("#popTable").show();
		popped = true;
	}
}

Behavior.abcClicked = function() {
	if (popped == true) {
		$("#pop").addClass("sortButtonOff");
		$("#abc").removeClass("sortButtonOff");
		$("#popTable").hide();
		$("#abcTable").show();
		popped = false;
	}
}
	
$(Behavior.setup);