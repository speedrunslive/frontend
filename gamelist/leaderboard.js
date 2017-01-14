function getLeaderboard( abbrev ) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/leaderboard/" + abbrev + "",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderLeaderboard",
		cache : true
	});
};

function renderLeaderboard( data ) {
	$( '#ajaxstage' ).remove();
	document.title = data.game.name + ' - Game list - SpeedRunsLive';
	var content = new Array();
	total = data.leadersCount;
	i = 1;
	for ( x in data.leaders ) {
		perc = ( ( i / total ) * 100 );
		if ( perc <= 1 ) club = 1;
		else if ( perc <= 3 ) club = 2;
		else if ( perc <= 6 ) club = 3;
		else if ( perc <= 12 ) club = 4;
		else if ( perc <= 28 ) club = 5;
		else if ( perc <= 55 ) club = 6;
		else club = 7;
		
		if ( content[ club ] ) content[ club ] += formatPlayer( i, data.leaders[ x ].name, data.leaders[ x ].trueskill );
		else content[ club ] = formatPlayer( i, data.leaders[ x ].name, data.leaders[ x ].trueskill )
		i += 1;
	}
	for ( x in content ) {
		$( '#playerslist' ).append( formatTable( x, content[ x ] ) );
	}
	$( '#playerslist' ).append( '<table id="unrankedtable" class="r8 club"><tr id="unranked"><td colspan="2">Show Unranked [' + data.unrankedCount +'] </td></tr></table>' );
	
	$( "#unranked" ).toggle(
		function() {
			$("#unranked").html('<td colspan="2">Hide Unranked [' + data.unrankedCount +'] </td>');
			for ( x in data.unranked ) {
				$( '#unrankedtable' ).append( '<tr><td>#&thinsp;&ndash;</td><td><a href="/profiles/#!/' + data.unranked[ x ].name + '/1">' + data.unranked[ x ].name + '</td></tr>');
			}
		},
		function() {
			$("#unranked").html('<td colspan="2">Show Unranked [' + data.unrankedCount +'] </td>');
			$("#unrankedtable").find("tr:gt(0)").remove();
		}
	);
	
	
	/*
	$( "#unranked" ).click( function(){ 
		$("#unranked").html('<td colspan="2">Hide Unranked [' + data.unrankedCount +'] </td>');
		for ( x in data.unranked ) {
			$( '#unrankedtable' ).append( '<tr><td>#&thinsp;&ndash;</td><td><a href="/profiles/#!/' + data.unranked[ x ].name + '">' + data.unranked[ x ].name + '</td></tr>');
		}
	});*/
};

function formatPlayer( i, name, rating ) {
	return "<tr><td>#" + i + "</td><td><a href=\"/profiles/#!/"+ name + "\"> " + name + "</a></td><td>" + Math.floor(rating) + "</td></tr>\n"
}

function formatTable( k, v ) {
	return '<table class="r' + k + ' club"><col class="playersListRank"><col class="playersListName"><col class="playersListRating">' + v + '</table>'
}
