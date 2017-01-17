   /* 
   IDs
	const TotalRaces = 1;
    const TotalPlayers = 2;
    const TotalGames = 3;
    const LargestRace = 4;
    const TotalRaceTime = 5;
    const TotalTimePlayed = 6;
    const FirstRace = 7;
    const TotalFirstPlace = 8;
    const TotalSecondPlace = 9;
    const TotalThirdPlace = 10;
    const TotalQuits = 11;
    const TotalDisqualifications = 12;
    const OverallRank = 13;
    const TotalRankedPlayers = 14;
	*/

function getLeaderboard( id ) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/leaderboard?sortField=" + id,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderList",
		cache : true
	});
};

function renderList( data ) {
	var rank = 1;
	var x;
	for ( x in data ) {
		$("#siteleaderboard").append( formatLine( data[ x ], rank ) );
		rank += 1;
	}
	$(".lbButton").click(function(e) {
		if (!$(this).hasClass("disabled")) {
			$("#siteleaderboard").hide();
			$("#ajaxstage").show();
			$("#siteleaderboard").find("tr:gt(0)").remove();
			var col = this.id;
			var sorttype = $(this).text();
			$("#sortby").text(sorttype);
			var id = getID( col );
			$(".lbButton").addClass("disabled");
			getLeaderboard( id );
			$(".litColumn").removeClass("litColumn"); //remove the glow from all columns
			$('#' + col).addClass("litColumn"); //add glow to the specific column
		}
	});
	
	$(".lbButton").removeClass("disabled");
	$("#ajaxstage").hide();
	$("#siteleaderboard").show();
};

function formatLine( text, rank ) {
	return '<tr><td>#' + rank + '</td><td><a href="/profiles/#!/' + text.name + '/1">' + text.name + '</a></div></td><td>' + text.totalRaces + '</td><td>' + text.totalFirstPlace + '</td><td>' + timePlayed( text.totalTimePlayed ) + '</td><td>' + text.totalGames + '</td></tr>'
}

function getID( col ) {
	if ( col == 'lbOverall' ) return 15;
	else if ( col == 'lbRaces' ) return 1;
	else if ( col == 'lbWins' ) return 8;
	else if ( col == 'lbTime' ) return 6;
	else if ( col == 'lbGames' ) return 3;
	else return 15;
}
