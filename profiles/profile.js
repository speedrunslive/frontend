function getStats(string) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/stat?player=" + string,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderStats",
		cache : true
	});
};

function getGames(player) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/ratings/" + player,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderGames",
		cache : true
	});
};

function getPlayerInfo(player) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/players/" + player,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderInfo",
		cache : true
	});
};

/*
function getStream(player) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/streams/" + player,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderStreamButton",
		cache : true
	});
};
*/

function getRaces(player) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/pastraces?player=" + player + "&pageSize=10", //pageSize is 10 for profile
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderFeed",
		cache : true
	});
};

function getTwitch(twitchname) {
	$.ajax({
		type : "GET",
		url : "http://api.justin.tv/api/user/show/" + twitchname + ".json?jsonp=?",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderTwitchStuff",
		cache : true
	});
};

/*
function checkIfLive(twitchname) {
	$.ajax({
		type : "GET",
		url : "http://api.justin.tv/api/stream/list.json?channel=" + twitchname + "&jsonp=?",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "weLive",
		cache : true
	});
};
*/

function renderInfo (data) {
	if (data.channel != "") {
		$("#buttonCollection").append('<a target="_blank" title="Twitch" href="http://www.twitch.tv/' + data.channel + '"><img class="icons" src="' + siteImage('ttv_icon20px.png') + '"/></a>');
		getTwitch(data.channel);
	}
	if (data.twitter != "") {
		$("#buttonCollection").append('<a target="_blank" title="Twitter" href="http://www.twitter.com/' + data.twitter + '"><img class="icons" src="' + siteImage('twitter_icon20px.png') + '"/></a>');
	}
	if (data.youtube != "") {
		$("#buttonCollection").append('<a target="_blank" title="YouTube" href="http://www.youtube.com/' + data.youtube + '"><img class="icons" src="' + siteImage('youtube_icon20px.png') + '"/></a>');
	}
}

function renderTwitchStuff (data) {
	$("#avatarHolder").append('<img class="avatar" src="' + data.image_url_medium + '" alt="avatar"/>');
}

/*
function weLive (data) {
	$("#buttonCollection").append(' <span class="live">LIVE!</span>');
}
*/

function renderFeed (data) {
	$( '#racefeed' ).empty();
	$("#changeStats").removeClass("disabled");
	$( 'button' ).removeClass( 'disabled' );
	setMax(data.count, 'Latest Races', 'Latest Races', 'Latest Races', 10) //pageSize is 10 for profile
	renderRace(data);
}

function renderStats (data) {

	dataCopy = data;
	for ( x in dataCopy.stats ) {
		if (dataCopy.stats[ x ] == 0) { data.stats[ x ] = '<span class="grey">&ndash;</span>'; }
	}
	
	$("#statsType").html(data.game.name);
	
	var n = getDate(data.stats.firstRaceDate * 1000).split( '-' );
	$("#date").html(n[0]);
	
	$("#races").html(data.stats.totalRaces);
	$("#rank").html(data.stats.rank);
	data.stats.totalTimePlayed = timePlayed(data.stats.totalTimePlayed);
	$("#played").html(data.stats.totalTimePlayed);
	$("#games").html(data.stats.totalGames);
	$("#firsts").html(data.stats.totalFirstPlace);
	$("#seconds").html(data.stats.totalSecondPlace);
	$("#thirds").html(data.stats.totalThirdPlace);
	$("#quits").html(data.stats.totalQuits);
	$("#dqs").html(data.stats.totalDisqualifications);

}

function renderGames (data) {
	$("#changeStats").append('<li id="overallStats">Overall Stats</li>');
	$.each( data, function(k, v){
		$("#changeStats").append('<li id="' + this.gameAbbrev + '">' + this.gameName + '</li>');
	});
	
	$("#changeStats li").click(function(e) {
		e.preventDefault();
		if (!$("#changeStats").hasClass("disabled")) { //if not disabled
			var pathArray = window.location.hash.split( '/' );
			if (this.id == "overallStats") {
				location.hash = pathArray[0] + '/' + pathArray[1] + '/1';
			} else {
				if (pathArray.length == 2) {
					pathArray.push(this.id);
				} else if (pathArray.length > 2) {
					pathArray[2] = this.id;
				} else {
					//console.log('Something went wrong.');
				}
				location.hash = pathArray[0] + '/' + pathArray[1] + '/' + pathArray[2] + '/1';
			}
		} else { /*console.log("HELLO");*/ }
	});
}

/*
function renderStreamButton (data) {
	var streamName = data.channel;
	if (streamName != "") {
		$("#buttonCollection").append('<a target="_blank" title="Twitch Stream" href="http://twitch.tv/' + streamName + '"><img class="icons" src="' + siteImage('ttv_icon20px.png') + '"/></a>');
	}
	getTwitch(streamName);
	//if (streamName) { checkIfLive(streamName); }
}
*/

//$("#buttonCollection").empty();
//$("#avatarHolder").empty();

function hashChange () {
	var pathArray = window.location.hash.split( '/' );
	var player, oldplayer, game, playerstring = false;
	var page = findPageNum(pathArray);
	//$(".next").unbind("click");
	
	$("#changeStats").addClass("disabled");
	$( 'button' ).addClass( 'disabled' );
	if ((page == false) || (page < 1)) {
		updatePage(1);
	}
	else {
		player = pathArray[1];
		oldplayer = $("#profile_playername").text();
		$("#racefeed").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>'); //ajax loader
		
		if (player != oldplayer) { 
			location.reload();  // fixes manually changing the player in the hashtag
		}

		playerstring = getPlayerString( pathArray )
		
		getStats(playerstring);
		getRaces(playerstring);
	}
}

function getPlayerString( path ) {
	if (path[2]) {
		if ((path[3]) && (isNumber(path[3]))) {
			if (path[3] < 1) path[3] = 1;
			return path[1] + '&game=' + path[2] + '&page=' + path[3];
		}
		else if (isNumber(path[2])) {
			if (path[2] < 1) path[2] = 1;
			return path[1] + '&page=' + path[2];
		}
		else return path[1] + '&game=' + path[2];
	}
	else return path[1];
}
	

$( document ).ready( function( event ){
	window.addEventListener("hashchange", hashChange, false); //detect hash changing
	var pathArray = window.location.hash.split( '/' );
	var player = pathArray[1];
	var page = findPageNum(pathArray);
	$("#profile_playername").html(player);
	
	if ((page == false) || (page < 1)) location.hash += '/1'
	else hashChange();
	buttons(pathArray); // Button javascript
	
	getGames(player);
	getPlayerInfo(player);
});