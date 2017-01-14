function getSeasons() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/seasons",
		processData : true,
		data : {},
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		jsonpCallback : "renderSeasonList",
		cache : true
	});
};

function getSelectedSeason( id ) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/seasons/" + id + "",
		processData : true,
		data : {},
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		jsonpCallback : "renderSeason",
		cache : true
	});
}

function findCurrentSeason() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/seasons",
		processData : true,
		data : {},
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		jsonpCallback : "renderCurrentSeason",
		cache : true
	});
}

function renderCurrentSeason() {
	return data.current_season_id;
}

function selectSeason( season ) {
	return '<a href="#!/seasons/' + season.id + '" id="season' + season.id + '">' + season.name + '</a>';
}

function selectSeasonGame( choice, seasonID ) {
	return '<div class="seasongame"><span class="season_gametitle">' + choice.game.name + '</span><img src="http://c15111072.r72.cf2.rackcdn.com/' + choice.game.abbrev + '.jpg" alt=""/><table><tr><th colspan="3">' + choice.name + '</th></tr>' + seasonPlayer( choice.leaders ) + seasonLink( choice.id, seasonID );
}

function seasonPlayer( players ) {
	var x;
	var text = '';
	for (x in players) {
		text += "<tr><td>" + seasonRank( players[x].rank ) + "</td><td><a href=\"/profiles/#!/" + players[x].name + "/1\"> " + players[x].name + "</a></td><td>" + Math.floor(players[x].trueskill) + "</td></tr>"
	}
	return text;
}

function seasonLink( gameID, seasonID ) {
	return '<td colspan="3"><a class="full_list" href="seasons/#!/' + seasonID + '/1/' + gameID + '">see full list &rarr;</a></td></tr>';
}

function seasonRank( rank ) {
	if ( rank == 1 ) { return '<span class="gold">#1</span>' }
	else if ( rank == 2 ) { return '<span class="silver">#2</span>' }
	else if ( rank == 3 ) { return '<span class="bronze">#3</span>' }
	else { return '<span class="grey">#' + rank + '</span>' }
}

function renderSeasonList( data ) {
	var x;
	var text = '';
	$('#seasons_desc').html( "<h1>Welcome to SRL Seasons!</h1><p>A season is a 3 month, ranked competition of races. At the start of a season, all players' ratings will be reset to zero across all games. At the end of a season, the ratings for all the games will be saved. A new season begings with everyone at zero again.</p><p>Every season will have about a dozen featured games. Specific categories for these games will have their own separate rating leaderboard for just that category. At the end of a season, the top 3 players in each featured game will get an award. This will take the form of a profile badge, showing off their accomplishment.</p>" );
	for ( x = data.seasons.length - 1; x > 0; x-- ) {
		text += selectSeason(data.seasons[x]);
	}
	$('#seasonselectcontainer').html( '<p class="seasonSelect">Select a season: ' + text + '</p>' );
}

function renderSeason( data ) {
	$('.seasonSelected').removeClass('seasonSelected')
	$('#season' + data.id).addClass('seasonSelected');
	var x;
	var text = '';
	$("#ajaxstage").show();
	for (x in data.goals) {
		text += selectSeasonGame( data.goals[x], data.id ) + '</table></div>';
	}
	$("#ajaxstage").hide();
	$('#seasongamecontainer').html(text);
}