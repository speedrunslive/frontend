function getRaces( pg ) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/pastraces?page=" + pg + "&pageSize=20",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderFeed",
		cache : true
	});
};

function getStats() {	
	$.ajax({
		type : "GET",
		url : apiUrl + "/stat",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderStats",
		cache : true
	});
};

function getMonthlies() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/stat/monthly",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderMonthlies",
		cache : true
	});
};

function renderStats ( data ) {
	$("#globalStats").append("Races: <strong>" + data.stats.totalRaces + "</strong><br/>");
	$("#globalStats").append("Players: <strong>" + data.stats.totalPlayers + "</strong><br/>");
	$("#globalStats").append("Games: <strong>" + data.stats.totalGames + "</strong><br/>");
	$("#globalStats").append("Time Played: <strong>" + timePlayed( data['stats']['totalTimePlayed'] ) + "</strong><br/>");
	//$("#globalStats").append("Largest Race: <strong>" + data.stats.largestRace + "</strong><br/>");
	
	getMonthlies();
}

function getFullMonth( num ) {
	if (num == 1) month = 'January';
	else if (num == 2) month = 'February';
	else if (num == 3) month = 'March';
	else if (num == 4) month = 'April';
	else if (num == 5) month = 'May';
	else if (num == 6) month = 'June';
	else if (num == 7) month = 'July';
	else if (num == 8) month = 'August';
	else if (num == 9) month = 'September';
	else if (num == 10) month = 'October';
	else if (num == 11) month = 'November';
	else if (num == 12) month = 'December';
	return month;
}

function renderMonthlies ( data ) {
	var year;
	var currentyear = 1111;
	var biggestmonth = 0;
	var stats = $("#globalStats");
	var x;
	stats.append("<h1>Monthlies</h1>");
	
	for ( x in data[ 'monthlyStats' ] ) {
		if (data[ 'monthlyStats' ][x].totalRaces > biggestmonth) {
			biggestmonth = data[ 'monthlyStats' ][x].totalRaces;
		}
	}
	
	var stat;
	var percentageFilled;
	for ( x in data[ 'monthlyStats' ] ) {
		stat = data[ 'monthlyStats' ][x];
		if (stat.year != currentyear) {
			stats.append('<div class="meteryear" id="y' + stat.year + '"><h5>' + stat.year + '</h5></div>');
			currentyear = stat.year;
		}
		stat.month = getFullMonth(stat.month);
		percentageFilled = (stat.totalRaces / biggestmonth) * 100;
		$('#y' + stat.year).append('<div class="meterbg"><div class="meterfill" style="width:' + percentageFilled + '%"><div class="metervalue">' + stat.month + '<span>' + stat.totalRaces +' race(s)</span></div></div></div>');
		$('#y' + stat.year).append('<div class="morestats">Active players: <strong>' + stat.totalPlayers + '</strong><br/>Active games: <strong>' + stat.totalGames + '</strong><br/>Largest race: <strong><a href="/raceresult/#!/' + stat.largestRace + '">' + stat.largestRaceSize + '</a></strong><br/>Time played: <strong>' + timePlayed(stat.totalTimePlayed) + '</strong> </div>');
	}
	
	$(".meterbg").click( function(){ 
		$(this).next().toggle();
	});
}


function loadRaces( pathArray ) {
	$( 'button' ).addClass( 'disabled' );
	var page = findPageNum(pathArray);
	
	if ((page == false) || (page < 1)) { // don't allow any weird values
		updatePage(1);
	} else {
		$("#racefeed").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>'); //ajax loader
		getRaces( page );
	}
}

function renderFeed ( data ) {
	setMax(data.count, 'Last 20 Races', 'Past Results', 'The Beginning', 20);
	renderRace(data);
}