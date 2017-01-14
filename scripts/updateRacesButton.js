function getRacesButton () {
	$.ajax({
		type : "GET",
		url : apiUrl + "/races",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderRaceButton",
		cache : true
	});
};

function renderRaceButton( data ) {
	$( '#racesButtonHeader' ).html( 'Races (' + data.count + ')' );
}

$( document ).ready( function(){
	// Every 60 seconds ajax request
	var updateracesbutton = function(){ 
		getRacesButton(); 
		setTimeout( updateracesbutton, 60000 ); 
	}
	updateracesbutton(); 
});