function getRace( num ) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/pastraces/" + num,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderRace",
		cache : true
	});
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

$( document ).ready( function(){
	var pathArray = window.location.hash.split( '/' );
	var racenum = pathArray[1];
	if (isNumber(racenum)) {
		getRace(racenum);
	}
});