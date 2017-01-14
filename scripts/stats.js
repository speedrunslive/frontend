$( document ).ready( function(){
	$( ".changeStats" ).click( function(){ // When a games rating is clicked
		abbrev = $( this ).attr( "id" ); // Get the game abbrev which is the ID
		name = document.getElementById( "playername" ).innerHTML; // Get the players name
		
		$.get( "profilegame.php", { abbrev: abbrev, name: name }, // GET the data	
		function( data ){ // Replace with the new stats

			info = JSON.parse( data ); // Decode the JSON into an object
			$( "#date" ).html( info.stats[ 'date' ] );
			$( "#races" ).html( info.stats[ 'races' ] );
			$( "#played" ).html( info.stats[ 'played' ] );
			$( "#1sts" ).html( info.stats[ 'rank1' ] );
			$( "#2nds" ).html( info.stats[ 'rank2' ] );
			$( "#3rds" ).html( info.stats[ 'rank3' ] );
			$( "#quits" ).html( info.stats[ 'quits' ] );
			$( "#dqs" ).html( info.stats[ 'dqs' ] );
			if ( abbrev == 'overall' ) {
				$( "#statistics" ).replaceWith( '<h2 id="statistics">Statistics &raquo; Overall</h2> ' );
			}
			else {
				$( "#statistics" ).replaceWith( '<h2 id="statistics">Statistics &raquo; <a href="/gamelist/game.php?game=' + abbrev + '">' + info.stats[ 'game_name' ] + '</a></h2> ' );
			}
			$( "#rank" ).html( info.stats[ 'rank' ] );
			$( "#profileRaceFeed" ).html ( '' );
			for ( i = 0; i < info.races.length; i++ ) {
					$( "#profileRaceFeed" ).append( info.races[ i ] [ 'data' ] );
				};
			
		});
	});
});