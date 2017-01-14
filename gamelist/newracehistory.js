function getRaces( pg, cb ) {	
	$.ajax({
		type : "GET",
		url : apiUrl + "/pastraces" + pg + "",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderFeed",
		success: cb,
		cache : true
	});
};

function renderFeed ( data ) {
	var max = Math.ceil( data.count / 20 );
	$( '#racefeed' ).attr( 'data-max', max );
	$( '#racefeed' ).empty();
	renderRace(data);
}