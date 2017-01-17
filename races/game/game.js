var seasonData = getSeasonData();

function getSeasonData() {
	  return $.ajax({
		  type : "GET",
	      url : apiUrl + "/seasons",
		  //url : "http://api.speedrunslive.com:81/seasons",
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
		processData : true,
		data : {},
		dataType : "jsonp",
		cache : true
	});
};

function getGames() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/games",
		processData : true,
		data : {},
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		jsonpCallback : "renderList",
		cache : true
	});
};

function getStats(game) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/stat" + game,
		//processData : true,
		data : {},
		dataType : "json",
		//dataType : "jsonp",
		//jsonpCallback : "renderStats",
		//cache : true
		success: function(data) {
			if(data.stats.totalRaces > 0) {
				renderStats(data);
			}
		}
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
		url : apiUrl + "/pastraces" + pg + "&pageSize=16", //16 is the page size for this page.
		//processData : true,
		data : {},
		dataType : "json",
		//dataType : "jsonp",
		//jsonpCallback : "renderFeed",
		//cache : true
		success: function(data) {
			if(data.count > 0) {
				renderFeed(data);
			} else {
				emptyDivs();
				$("#gamepage").html("There are no races for this game in this season yet.");
				//if($("#0").length > 0) {
					//$("#0").trigger("click");
				//}
			}
		}
	});
	

};

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
}

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

function renderFeed ( data ) {
	setMax(data.count, 'Latest Races', 'Latest Races', 'Latest Races', 16) //16 is the page size for this page.
	renderRace(data);
}

function renderStats( data ) {
	if($('#side_gamepic').is(":empty")) {
		$('#side_gamepic').append('<h1>Pic</h1>');
		$('#side_gamepic').append('<object data="' + gameImage(data['game']['abbrev']) + '"><img src="' + gameImage('noimage') + '" alt="' + data['game']['abbrev'] + '" /></object>');
	}
	
	if($('#side_gamestats').is(":empty")) {
		$('#side_gamestats').append('<h1>Stats</h1>');
		$('#side_gamestats').append("Abbreviation: <strong id=\"gameAbbrev\" data-abbrev=\"" + data['game']['abbrev'] + "\">" + data['game']['abbrev'] + "</strong><br/>");
		$('#side_gamestats').append("Races: <strong>" + data['stats']['totalRaces'] + "</strong><br/>");
		$('#side_gamestats').append("Players: <strong>" + data['stats']['totalPlayers'] + "</strong><br/>");
		$('#side_gamestats').append("Time Played: <strong>" + timePlayed( data['stats']['totalTimePlayed'] ) + "</strong><br/>");
		$('#side_gamestats').append('Largest Race: <strong><a href="/raceresult/#!/' + data['stats']['largestRace'] + '">' + data['stats']['largestRaceSize'] + '</a></strong><br/>');
	}
}

function renderSeasonList( data ) {
	if ($( '#seasonselectcontainer' ).length == 0) {
		$('.racesHighlighted').removeClass('racesHighlighted')
		$( '#buttonSeasons' ).addClass( 'racesHighlighted' );
		$( '#seasonList' ).html( '<div id="seasonselectcontainer"></div><div id="seasongamecontainer"></div>' );
		
		var text = '';
		for (var season in data.seasons) {
			text += selectSeason(data.seasons[season], data.current_season_id);
		}
		$('#seasonselectcontainer').html( '<p class="seasonSelect">Select a season: ' + text + '</p>' );
		
		var pathArray = window.location.hash.split( '/' );
		var gamestring = getGameString( pathArray );
		hideUnracedSeasons(gamestring);
		getRaces(gamestring + "&season=" + data.current_season_id);
	}
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

function hideUnracedSeasons( gamestring ) {
//alert($("#seasonselectcontainer").html());
	$(".seasonFilterContainer").each(function(index, seasonLink) {
		var racesData = getRacesData(gamestring + "&season=" + index);
		
		racesData.success(function (data) {
			if(data.count == 0) {
				// hide season links for seasons with no races in them
				seasonLink.style.display = "none";
			}
		});
	});
}

function selectSeason( season, currentSeasonID ) {
	var pathArray = window.location.hash.split( '/' );
	var cls = "seasonFilter";
	if(season.id == currentSeasonID) {
		cls += " seasonSelected";
	}
	return '<span class="seasonFilterContainer" id="season' + season.id + '"><a href="#!/' + pathArray[1] + '/' + pathArray[2] + '?season=' + season.id + '" class="' + cls + '" id="' + season.id + '">' + season.name + '</a></span>';
}

$(document).on("click", ".seasonFilter", function() {
	// disable the link from calling ajax again
	//$(this).toggleClass("seasonFilter filterClicked");
	
	var pathArray = window.location.hash.split( '/' );
	var newgame = pathArray[1];
	
	if($(".seasonSelected")) {
		//seasonID = $(".seasonSelected").attr("id");
	}
	
	var seasonID = $(this).attr("id");
	var gamestring = getGameString( pathArray );
	renderGameSeason(newgame, gamestring, seasonID);
	//seasonID = seasonID.replace("season", "");
	$(".seasonSelected").attr("class", "seasonFilter");
	//$(this).toggleClass("seasonFilter filterClicked");
	//$(this).addClass("seasonSelected");
	
	$(this).attr("class", "seasonFilter seasonSelected");
	return false;
});

function renderGameSeason (abbrev, gamestring, seasonID) {
	emptyDivs();
	getSeasons();
	
	$("#gamelist").hide();
	$("#gamepageloader").show();
	$("#gamepageloader").append('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
	$("#gamepage").append('<div id="playerslist">\
		</div><div id="rightside"><div id="side_gamepic"></div><div id="side_gamerules"></div>\
		<div id="side_gamestats"></div>\
		<div id="side_popgoals"></div>\
		</div>\
		<div id="centercolumn"><h1 id="pasth1">Latest Races</h1>\
		<div id="pageSorter"><button title="First" class="disabled first" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button><button title="Last" class="last disabled" id="last"><span>&nbsp;</span></button></div>\
		<div id="racefeed"></div>\
		<div id="pageSorter"><button title="First" class="disabled first" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button><button title="Last" class="last disabled" id="last"><span>&nbsp;</span></button></div>\
		</div>');
	getLeaderboard(abbrev + "?season=" + seasonID); // we need to actually check if this is a valid game name before we try to render anything.
	getRaces(gamestring + "&season=" + seasonID);
	getStats('?game=' + abbrev + "&season=" + seasonID);
	getRules('/' + abbrev);
	getTrackedGoals('/' + abbrev + "?season=" + seasonID);
	//hideUnracedSeasons(gamestring);
	buttons(window.location.hash.split( '/' ));
}

function emptyDivs() {
	//$( '#playerslist' ).empty()
	$( '#gamepage' ).empty();
	$( '#gamepageloader' ).empty();
	//$( '#seasonList' ).empty();
	//$( '#rightside' ).empty()
	//$( '#pageSorter' ).empty()
	//$( '#racefeed' ).empty()
}

function redirectPage(pathArray, index, value) {
	var url = window.location.href.substring(0, window.location.href.indexOf(window.location.hash)) + "#!";
	
	for(var x = 1; x < pathArray.length; x++) {
		if(x == index) {
			url += "/" + value;
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
	var newgame = pathArray[1];
	var location = window.location + "";

	abbrev = $( '#gameAbbrev' ).attr( 'data-abbrev' );
	
	if (pathArray[0] == '#!') {
		if ((page == false) || (page < 1)) { // don't allow any weird values
			updatePage(1);
			
		} else if ((!abbrev) || (abbrev != newgame)) {
			emptyDivs();
			gamestring = getGameString( pathArray );
			
			seasonData.success(function (data) {
				renderGameSeason(newgame, gamestring, data.current_season_id);
			});
				
		} else {
			var seasonID = $(".seasonSelected").attr("id");
			//console.log("SeasonID: " + seasonID);
			$("#racefeed").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>'); //ajax loader
			gamestring = getGameString( pathArray ) + "&season=" + seasonID;
			getRaces(gamestring);
		}
	} else {
		window.location = window.location.href.substring(0, window.location.href.indexOf(window.location.hash)) + '#!/gamelist/popular';
	}
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

$( document ).ready( function(){
	$("#gamepage").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
	hashChange();
	
	window.addEventListener("hashchange", hashChange, false);
});