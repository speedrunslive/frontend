var CLIENT_ID = "77j5cesl781f4gpduf1278i38j8icr1";

function getStreams() {
	$.ajax({
		type : "GET",
		url : "http://api.twitch.tv/api/team/srl/live_channels.json?client_id=" + CLIENT_ID,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderStream",
		cache : true
	});
};

function getRealName(twitchname) {
	$.ajax({
		type : "GET",
		url : apiUrl + "/streams/" + twitchname + "?channel=twitch",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "giveRealName",
		cache : true
	});
}

function giveRealName(data) {
	$('#featuredStream h1').html( 'Featured Stream <span class="grey">&raquo;</span> <a href="/profiles/#!/' + data.user + '/1">'+ data.user +'</a><a class="morestreams" href="/streams">more streams</a>' );
}

function formatStream( name ) {
	return '<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=' + name + '" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=' + name + '&auto_play=true&start_volume=0" /></object>'
}

function renderStream( data ) {
	var streamNum=Math.floor(Math.random()*(data.channels.length/2.5)) // grab one of the more popular streams
	getRealName ( data.channels[streamNum].channel.name );
	//$("#featuredStream h1").html('Featured Stream: ' + data.channels[streamNum].channel.display_name + '<a class="right" href="/streams">more streams</a>');
	$("#featuredStreamContainer").append(formatStream(data.channels[streamNum].channel.name));
};

function addRace( data ) {
	if ( data.statetext == 'In Progress' ) {
		time = '<span class="green" id=' + data.time + '></span>'
	}
	else { time = data.statetext }
	entrants = getEntrants( data.entrants, data.numentrants );
	var string = '<a class="racebar" title="' + entrants + '" href="/race/?id=' + data.id + '"><div class="race_img" style="background-image: url(\'' + gameImage(data.game[ 'abbrev' ]) + '\');"></div><div class="left"><strong>' + data.game[ 'name' ] + '</strong><br/>' + data.goal + '</div><div class="right"><strong>' + data.numentrants + ' entrant(s)</strong><br/>' + time + '</div></a>';
	return string;
};

function getRaces () {
	$.ajax({
		type : "GET",
		url : apiUrl + "/races", //test site.
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderRace",
		cache : true
	});
};

function renderRace( data ) {
	$( '#liveRaces' ).html( '<h1>Live races</h1>' );
	if ( data.count > 0 ) { // if there are races
		for ( x in data.races ) { // for each race
			if ( (data.races[ x ].statetext != "Complete") && (data.races[ x ].statetext != "Recorded") ) { // if they are not complete/recorded
				var stuff = addRace( data.races[ x ] ); // get the string to append
				$( '#liveRaces' ).append( stuff ); // append it
				if ( data.races[ x ].statetext == "In Progress" ) { // and if they are in progress
					$('#' + data.races[ x ].time ).countdown({compact: true, format: 'HH:MM:SS', since: new Date(data.races[ x ].time * 1000)}); // use a timer
				}
			}
		}
	} else { // else there's none in progress.
		$( '#liveRaces' ).append( "<p>There are currently no races in progress. Why don't you start one?</p>" );
	}
}

function getEntrants( index, total ){
	var line = '';
	var i = 0;
	for ( y in index ) {
		if ( i > 0 ) { line += ', '; };
		if ( i > 8 ) { 
			count = total - 8;
			line += count + ' more...';
			break
		}
		line += y;
		i++;
	};
	return line
};


$( document ).ready( function(){
	// Every 30 seconds ajax request
	// Need to check if theres actual new data to get
	var updateraces = function(){ 
		$( '#liveRaces h1' ).html( 'Live races <img src="' + siteImage('ajax-loader.gif') + '" />' );
		getRaces(); 
		setTimeout( updateraces, 30000 ); 
	}
	updateraces();
	//getStreams(); 
});

