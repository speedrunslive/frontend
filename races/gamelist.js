function getPopularGames() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/games",
		processData : true,
		data : {},
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		jsonpCallback : "renderPopularGameList",
		cache : true
	});
};

function getAlphaGames() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/games",
		processData : true,
		data : {},
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		jsonpCallback : "renderAlphaGameList",
		cache : true
	});
};

function getGameListStats(game) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/stat" + game,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderGameListStats",
		cache : true
	});
};

function getTrackedGoals(game) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/goals" + game,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderTrackedGoals",
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
		url : apiUrl + "/pastraces?page=" + pg + "&pageSize=16", //16 is the page size for this page.
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderGameListFeed",
		cache : true
	});
};

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
	$( '#playerslist' ).append('<h1>Game Leaderboard</h1>');
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
	return "<tr><td>#" + i + "</td><td><a href=\"/profiles/#!/"+ name + "/1\"> " + name + "</a></td><td>" + Math.floor(rating) + "</td></tr>\n"
}

function formatTable( k, v ) {
	return '<table class="r' + k + ' club"><col class="playersListRank"><col class="playersListName"><col class="playersListRating">' + v + '</table>'
}

function renderRules (data) {
	$("#side_gamerules").append("<h1>Rules</h1>");
	$("#side_gamerules").append(data.rules);
}

function renderGameListFeed ( data ) {
	setMax(data.count, 'Latest Races', 'Latest Races', 'Latest Races', 16) //16 is the page size for this page.
	renderRace(data);
}

function renderGameListStats( data ) {
	$('#side_gamepic').append('<h1>Pic</h1>');
	$('#side_gamepic').append('<object data="' + gameImage(data['game']['abbrev']) + '"><img src="' + gameImage('noimage') + '" alt="' + data['game']['abbrev'] + '" /></object>');
	
	$('#side_gamestats').append('<h1>Stats</h1>');
	$('#side_gamestats').append("Abbreviation: <strong id=\"gameAbbrev\" data-abbrev=\"" + data['game']['abbrev'] + "\">" + data['game']['abbrev'] + "</strong><br/>");
	$('#side_gamestats').append("Races: <strong>" + data['stats']['totalRaces'] + "</strong><br/>");
	$('#side_gamestats').append("Players: <strong>" + data['stats']['totalPlayers'] + "</strong><br/>");
	$('#side_gamestats').append("Time Played: <strong>" + timePlayed( data['stats']['totalTimePlayed'] ) + "</strong><br/>");
	$('#side_gamestats').append('Largest Race: <strong><a href="/raceresult/#!/' + data['stats']['largestRace'] + '">' + data['stats']['largestRaceSize'] + '</a></strong><br/>');
}

function getGoalShort (goal) {
	var goalArray = goal.split( ' ' );
	
	for (var i in goalArray) {
		if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(goalArray[i])) {
			if (goalArray[i].length > 20) {
				goalArray[i] = '<a href="' + goalArray[i] + '">' + goalArray[i].substr(0, 20) + '...</a>';
			} else {
				goalArray[i] = '<a href="' + goalArray[i] + '">' + goalArray[i] + '</a>';
			}
		} else {
			if (goalArray[i].length > 20) {
				goalArray[i] = '<span title="' + goalArray[i] + '">' + goalArray[i].substr(0, 20) + '...</span>';
			}
		}
	}
	return goalArray.join(' ');
}

function renderTrackedGoals( data ) {
	var maxShownPlayers = 5;
	var timeTable = "";
	$('#side_popgoals').append('<h1>Best race times</h1>');
	
	for(var goal = 0; goal < data.goals.length; goal++) {
		timeTable += "<table class=\"raceResults\"><col class=\"raceFeedPlacing\"><col class=\"raceFeedName\"><col class=\"raceFeedStatus\">";
		data.goals[goal].name = getGoalShort( data.goals[goal].name ); // fixes long URLs and long goals
		timeTable += "<tr><th colspan=\"3\">" + data.goals[goal].name + "</th></tr>";
		for(var time = 0; time < data.goals[goal].toptimes.length; time++) {
		
			var timeObj = secondsToTime( data.goals[goal].toptimes[time].time );
		
			// limit results shown to 5
			if(time >= maxShownPlayers) {
				break;
			}
			
			if(time == 0) {
				timeTable += "<tr><td><span class=\"gold\">1st</span></td>";
			} else if(time == 1) {
				timeTable += "<tr><td><span class=\"silver\">2nd</span></td>";
			} else if(time == 2) {
				timeTable += "<tr><td><span class=\"bronze\">3rd</span></td>";
			} else {
				timeTable += "<tr><td><span class=\"grey\">" + (time + 1) + "th</span></td>";
			}
			timeTable += "<td><a href=\"/profiles/#!/" + data.goals[goal].toptimes[time].player + "/1\">" + data.goals[goal].toptimes[time].player + "</a></td>";
			timeTable += "<td><a href=\"/raceresult/#!/" + data.goals[goal].toptimes[time].race + "\">" + timeObj.h + ":" + timeObj.m + ":" + timeObj.s + "</a></td></tr>";
		}
		timeTable += "</col></col></col></table>";
	}
	$('#side_popgoals').append( timeTable );
	$("#gamepageloader").hide();
	$("#gamepage").show(); // show the page here, hopefully most ajax requests have finished by now.
}

function chrAsc(a, b){
	a = a.toLowerCase(); b = b.toLowerCase();
	if ( a > b ) return 1;
	if ( a < b ) return -1;
	return 0; 
}

function string( strValue ) { // this makes any non-letters all be part of the same # category.
  var objRegExp  =  /^[a-zA-Z]+$/
  return objRegExp.test( strValue );
}

function popular( info, rank, maxpop ) {
	var pop = Math.floor( info[ 'popularity' ] / maxpop * 500 )
	return '<a class="very_popular" href="/races/game/#!/' + info[ 'abbrev' ] + '/1"><div class="race_img" style="background-image: url(\'' + gameImage(info[ 'abbrev' ]) + '\');"></div><strong>' + info[ 'name' ] + '<span class="gamerank">#' + rank + '</span></strong><br/><span class="popBar" style="width: ' + pop + 'px;"></span> </a>'
}

//function is_string(input){
//	return typeof(input)=='string';
//}

function renderPopularGameList( data ) {
	var gamelist = new Array();
	var gameabbrev = new Array();
	var maxpop = data[ 'games' ][ 0 ][ 'popularity' ];
	$('#gamelist').html( renderPopularPage() )
	for ( x in data[ 'games' ] ) {
		if ( x < 20 ) { $('.popularity').append( popular( data[ 'games' ][ x ], parseInt( x ) + 1, maxpop ) ) }
		else { break; }
	}
}

function renderAlphaGameList( data ) {
	var gamelist = new Array();
	var gameabbrev = new Array();
	var maxpop = data[ 'games' ][ 0 ][ 'popularity' ];
	var x;
	$('#gamelist').html( renderAlphaPage() )
	for ( x in data[ 'games' ] ) {
		gamelist.push( data[ 'games' ][ x ][ 'name' ] )
		gameabbrev[ data[ 'games' ][ x ][ 'name' ] ] = data[ 'games' ][ x ][ 'abbrev' ]
	}
	var gamelist_sorted = gamelist.sort( chrAsc );
	var currentletter = '';
	var newletter;
	for ( x in gamelist_sorted ) {
		newletter = gamelist[ x ].substring(0,1);
		if ( currentletter.toLowerCase() != newletter.toLowerCase() ) {
			currentletter = newletter;
			if ( string( newletter ) ) { $('#alphalist').append( '<h1 id="list' + newletter.toLowerCase() + '">' + newletter +'</h1>' ) }
		}
		$('#alphalist').append( '<a href="/races/game/#!/' + gameabbrev[ gamelist[ x ] ] + '/1">' + gamelist[ x ] + '</a><br/>' );
	};
}


function renderPopularPage() {
	return '<div class="popularity"><h1>Popular</h1></div>'
}

function renderAlphaPage() {
	return '<div class="alphabetical"><h1>Alphabetical</h1><div class="letterpicker"><a href="#!/gamelist/alphabetical/symbol">#</a><a href="#!/gamelist/alphabetical/A">A</a><a href="#!/gamelist/alphabetical/B">B</a><a href="#!/gamelist/alphabetical/C">C</a><a href="#!/gamelist/alphabetical/D">D</a><a href="#!/gamelist/alphabetical/E">E</a><a href="#!/gamelist/alphabetical/F">F</a><a href="#!/gamelist/alphabetical/G">G</a><a href="#!/gamelist/alphabetical/H">H</a><a href="#!/gamelist/alphabetical/I">I</a><a href="#!/gamelist/alphabetical/J">J</a><a href="#!/gamelist/alphabetical/K">K</a><a href="#!/gamelist/alphabetical/L">L</a><a href="#!/gamelist/alphabetical/M">M</a><a href="#!/gamelist/alphabetical/N">N</a><a href="#!/gamelist/alphabetical/O">O</a><a href="#!/gamelist/alphabetical/P">P</a><a href="#!/gamelist/alphabetical/Q">Q</a><a href="#!/gamelist/alphabetical/R">R</a><a href="#!/gamelist/alphabetical/S">S</a><a href="#!/gamelist/alphabetical/T">T</a><a href="#!/gamelist/alphabetical/U">U</a><a href="#!/gamelist/alphabetical/V">V</a><a href="#!/gamelist/alphabetical/W">W</a><a href="#!/gamelist/alphabetical/X">X</a><a href="#!/gamelist/alphabetical/Y">Y</a><a href="#!/gamelist/alphabetical/Z">Z</a></div><div id="alphalist"><h1 id="listsymbol">#</h1></div>'
}

function renderGamePage (abbrev, gamestring) {
	$("#gamelist").hide();
	$("#gamepageloader").show();
	$("#gamepageloader").append('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
	$("#gamepage").append('<div id="playerslist"></div><div id="rightside"><div id="side_gamepic"></div><div id="side_gamerules"></div><div id="side_gamestats"></div><div id="side_popgoals"></div></div><div id="centercolumn"><h1 id="pasth1">Latest Races</h1><div id="pageSorter"><button title="First" class="disabled" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled" id="next"><span>&nbsp;</span></button><button title="Last" class="disabled" id="last"><span>&nbsp;</span></button></div><div id="racefeed"></div></div>');
	getLeaderboard(abbrev); // we need to actually check if this is a valid game name before we try to render anything.
	getRaces(gamestring);
	getStats('?game=' + abbrev);
	getRules('/' + abbrev);
	getTrackedGoals('/' + abbrev);
	buttons(window.location.hash.split( '/' ));
}

function emptyDivs() {
	//$( '#playerslist' ).empty()
	$( '#gamepage' ).empty();
	//$( '#rightside' ).empty()
	//$( '#pageSorter' ).empty()
	//$( '#racefeed' ).empty()
}

function getGameString( path ) {
	if (path[2]) {
		if (isNumber(path[2])) {
			if (path[2] < 1) path[2] = 1;
			return '?game=' + path[1] + '&page=' + path[2];
		}
		else return '?game=' + path[1];
	}
}