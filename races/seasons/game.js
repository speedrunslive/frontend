// URL: #!/[seasonID]/[pageNum]/[seasonGameID]
var seasonData = getSeasonData();

function getSeasonData() {
	  return $.ajax({
		  type : "GET",
	      url : apiUrl + "/seasons",
		  processData : true,
		  data : {},
		  dataType : "jsonp",
		  cache : true
	  });
}

function getRacesData( pg ) {	
	return $.ajax({
		type : "GET",
		url : apiUrl + "/pastraces" + pg + "&pageSize=16", //16 is the page size for this page.
		processData : true
		//data : {},
		//dataType : "jsonp",
		//jsonpCallback : "renderFeed",
		//cache : true
	});
};

function getStats(game) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/stat" + game,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderStats",
		cache : true
	});
};

function getRules(game) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/rules" + game,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderRules",
		cache : true
	});
};

function getRaces( pg ) {	
	$.ajax({
		type : "GET",
		url : apiUrl + "/pastraces" + pg + "&pageSize=16", //16 is the page size for this page.
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderFeed",
		cache : true
	});
};

function getLeaderboard( abbrev ) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/seasongoal/" + abbrev + "",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderLeaderboard",
		cache : true
	});
};

function renderLeaderboard( data ) {
	$( '#ajaxstage' ).remove();
	$( '#playerslist' ).append('<h1>Season Leaderboard</h1>');
	data = data.season_goal;
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
};


function formatPlayer( i, name, rating ) {
	return "<tr><td>#" + i + "</td><td><a href=\"/profiles/#!/"+ name + "/1\"> " + name + "</a></td><td>" + Math.floor(rating) + "</td></tr>\n"
}

function formatTable( k, v ) {
	return '<table class="r' + k + ' club"><col class="playersListRank"><col class="playersListName"><col class="playersListRating">' + v + '</table>'
}

function renderRules (data) {
	$("#side_gamerules").append("<h1>Rules</h1>");
	$("#side_gamerules").append(data.rules);
}

function renderFeed ( data ) {
	setMax(data.count, 'Latest Races', 'Latest Races', 'Latest Races', 16) //16 is the page size for this page.
	if(data.count == 0) {
		emptyDivs();
		$("#gamepage").html("There are no races for this game in this season yet.");
	}
	renderRace(data);
}

function renderStats( data ) {
	$('#side_gamepic').append('<h1>Pic</h1>');
	$('#side_gamepic').append('<object data="' + gameImage(data['game']['abbrev']) + '"><img src="' + gameImage('noimage') + '" alt="' + data['game']['abbrev'] + '" /></object>');
	
	//$('#side_gamestats').append('<h1>Stats</h1>');
	//$('#side_gamestats').append("Abbreviation: <strong id=\"gameAbbrev\" data-abbrev=\"" + data['game']['abbrev'] + "\">" + data['game']['abbrev'] + "</strong><br/>");
	//$('#side_gamestats').append("Races: <strong>" + data['stats']['totalRaces'] + "</strong><br/>");
	//$('#side_gamestats').append("Players: <strong>" + data['stats']['totalPlayers'] + "</strong><br/>");
	//$('#side_gamestats').append("Time Played: <strong>" + timePlayed( data['stats']['totalTimePlayed'] ) + "</strong><br/>");
	//$('#side_gamestats').append('Largest Race: <strong><a href="/raceresult/#!/' + data['stats']['largestRace'] + '">' + data['stats']['largestRaceSize'] + '</a></strong><br/>');
}

function renderSeasonGame (abbrev, seasonGameID, pg) {
	emptyDivs();
	$("#gamelist").hide();
	$("#gamepageloader").show();
	$("#gamepageloader").append('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
	$("#gamepage").append('<div id="playerslist"></div>\
		<div id="rightside"><div id="side_gamepic"></div><div id="side_gamerules"></div><div id="side_gamestats"></div><div id="side_popgoals"></div></div>\
		<div id="centercolumn"><h1 id="pasth1">Latest Races</h1>\
		<div id="pageSorter"><button title="First" class="disabled first" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button><button title="Last" class="disabled last" id="last"><span>&nbsp;</span></button></div>\
		<div id="racefeed"></div>\
		<div id="pageSorter"><button title="First" class="disabled first" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button><button title="Last" class="disabled last" id="last"><span>&nbsp;</span></button></div>\
		</div>');
	getLeaderboard(seasonGameID); // we need to actually check if this is a valid game name before we try to render anything.
	getRaces("?seasongoal=" + seasonGameID + "&page=" + pg);
	getStats('?game=' + abbrev);// + "&seasongoal=" + seasonGameID);
	getRules('/' + abbrev);
	buttons(window.location.hash.split( '/' ));
}

function emptyDivs() {
	//$( '#playerslist' ).empty()
	$( '#gamepage' ).empty();
	$( '#gamepageloader' ).empty();
	//$( '#rightside' ).empty()
	//$( '#pageSorter' ).empty()
	//$( '#racefeed' ).empty()
}

function redirectPage(pathArray, index) {
	var url = window.location.href.substring(0, window.location.href.indexOf(window.location.hash)) + "#!";
	
	for(var x = 1; x < pathArray.length; x++) {
		if(x == index) {
			url += "/1";
		} else {
			url += "/" + pathArray[x];
		}
	}
	window.location.replace(url);
}

function hashChange () {
	$( 'button' ).addClass( 'disabled' );
	var pathArray = window.location.hash.split( '/' );
	var page = findPageNum(pathArray);
	var location = window.location + "";
	var seasonID = pathArray[1];
	var page = pathArray[1];
	var gameID = pathArray[3];
	var racesData = getRacesData("?seasongoal=" + gameID);
	
	if (pathArray[0] == '#!') {
		if ((page == false) || (page < 1)) {
			updatePage(1); // if no page, give it a page and try again. this will cause infinite back button issue though because of the quick redirect.
		} else {
			emptyDivs();
			
			racesData.success(function (data) {
				var pages = Math.ceil( data.count / 16 );
				if(page > pages) {
					redirectPage(pathArray, 2);
				}
			});
			
			seasonData.success(function (data) {
				var gameData;
			
				if(typeof data.seasons[seasonID] === 'undefined') {
					seasonID = 1;
					//redirectPage(pathArray, 1);
				}
				
				if(typeof data.seasons[seasonID].goals[gameID - 1] === 'undefined') {
					gameData = data.seasons[seasonID].goals[0].game;
					gameID = 1;
					redirectPage(pathArray, 3);
				} else {
					gameData = data.seasons[seasonID].goals[gameID - 1].game;
				}
				renderSeasonGame(gameData.abbrev, gameID, page);
			});
		}
	} else {
		window.location = window.location.href.substring(0, window.location.href.indexOf(window.location.hash)) + '#!/gamelist/popular';
	}
}

function getGameString( path ) {
	var pageRef = 2;
	
	if (path[pageRef]) {
		if (isNumber(path[pageRef])) {
			if (path[pageRef] < 1) path[pageRef] = 1;
			return '?game=' + path[1] + '&page=' + path[pageRef];
		}
		else return '?game=' + path[1];
	}
}

$( document ).ready( function(){
	$("#gamepage").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
	hashChange();
	window.addEventListener("hashchange", hashChange, false);
});
