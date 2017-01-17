// function getRacesButton () {
	// $.ajax({
		// type : "GET",
		// url : apiUrl + "/races",
		// processData : true,
		// data : {},
		// dataType : "jsonp",
		// jsonpCallback : "renderRaceButton",
		// cache : true
	// });
// };

// function renderRaceButton( data ) {
	// var races = 0;

	// for (x in data['races']) {
		// if (data['races'][x]['state'] <= 3)
			// races++;
	// }

	// $( '#racesButtonHeader' ).html( 'Races (' + races + ')' );
// }

// $( document ).ready( function(){
	// // Every 60 seconds ajax request
	// var updateracesbutton = function(){ 
		// getRacesButton(); 
		// //setTimeout( updateracesbutton, 60000 ); 
	// }
	// //updateracesbutton(); 
// });