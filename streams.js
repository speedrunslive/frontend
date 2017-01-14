function getStreams() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/test/team",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderList",
		cache : true
	});
};

function getRealNames(twitchnames) {
	return $.ajax({
		type : "GET",
		url : apiUrl + "/streams/?channels=" + twitchnames,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "test",
		cache : true
	});
}

function giveRealNames(data) {
	for ( x in data ) {
		$("#" + x + " .streamerinfo .name").text( data[x] );
	}
}

function badGame( game ) {
	// this is the SRL blacklist

	var blacklist = [
		/Audiosurf/i, /beatmania/i, /Dance Dance Revolution/i, /DayZ/i, /Diablo/i,
		/Dota 2/i, /Final Fantasy XIV Online/i, /Fortune Street/i, /Guild Wars/i,
		/Guitar Hero/i, /Hatsune Miku: Project Diva/i, /Heroes of Newerth/i, /iDOLM@STER/i,
		/Idolmaster/i, /League of Legends/i, /Mario Party/i, /Mario Kart 8/i,
		/Minecraft/i, /Osu!/i, /Ragnarok Online/i, /Rock Band/i, /RuneScape/i,
		/Starcraft/i, /StepMania/i, /Super Smash Bros/i, /Team Fortress/i,
		/Terraria/i, /Total Annihilation/i, /Warcraft/i, /Worms/i,
	]
	// /Borderlands/i
	// /Call of Duty/i
	// /Touhou/i

	if (game == null)
		return false;

	for (var i=0; i < blacklist.length; i++) {
		if (game.search(blacklist[i]) > -1)
			return true;
	}
	return false;
}

function renderList( data ) {
	var twitchNames = '';
	for ( x in data[ 'channels' ] ) {
		twitchname = data[ 'channels' ][ x ][ 'channel' ][ 'name' ];
		twitchNames += twitchname + ',';
	}
	var thingy = getRealNames(twitchNames)
	thingy.success(function(livenames) {
		var addList = '';
		var spliceList = [];
		for ( x in data[ 'channels' ] ) {
			name = data[ 'channels' ][ x ][ 'channel' ][ 'display_name' ];
			viewers = data[ 'channels' ][ x ][ 'channel' ][ 'current_viewers' ];
			descrip = data[ 'channels' ][ x ][ 'channel' ][ 'title' ];
			twitchname = data[ 'channels' ][ x ][ 'channel' ][ 'name' ];
			srlname = livenames[ data[ 'channels' ][ x ][ 'channel' ][ 'name' ] ];
			if (srlname === undefined) {
				srlname = new Object();
				srlname.country = "None";
				srlname.youtube = "";
				srlname.twitter = "";
				srlname.name = twitchname;
				console.log(srlname);
			}
			img = data[ 'channels' ][ x ][ 'channel' ][ 'image' ][ 'size70' ];
			game = data[ 'channels' ][ x ][ 'channel' ][ 'meta_game' ];
			if (!badGame(game)) {
				addList += formatList( name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ) );
			} else {
				spliceList.push(x);
			}
		}
		
		spliceList.reverse(); // reverse the list of items to be spliced, so the array indexes don't jump around as we're removing them.
		for ( x in spliceList) {
			data[ 'channels' ].splice(spliceList[x], 1); // remove channels playing blacklisted games
		}
		
		$( '#streamList' ).html( addList );

		$( ".twitchstreamer" ).mousedown( function(e){ 
			if (linkClicked)
			{
				linkClicked = false;
				return;
			}
			if (e.which != 3)
			{
				if (e.which == 2)
				{
					fullname = $( this ).attr('data-fullname');
					window.open("/#!/" + fullname);
				}
				else
				{
					
					$( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
					name = $( this ).attr('id');
					fullname = $( this ).attr('data-fullname');
					game = $( this ).attr('data-game');
					srlname = $( this ).attr('data-srlname');
					document.title = srlname + " - Streams - SpeedRunsLive";
					$('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
					//featuredStream( name, fullname, game );
					window.location.hash = "!/" + fullname;
					$( '#'+ name ).addClass( 'watching' )
				}
			}
		});		
		if ( $( '.featuredstream' ).attr( 'data-name' ) == 'none' ) { //if no featured stream
			var pathArray = window.location.hash.split( '/' );
			var existingStream = "";
			if (pathArray[0] == "#!"  && document.getElementById(pathArray[1].toLowerCase()))
			{	
				var name  = pathArray[1].toLowerCase();
				var srluser = $( "#" + name ).attr('data-srlname');						
				var fullname = $( "#" + name ).attr('data-fullname');
				var game = $( "#" + name ).attr('data-game');
				var srlname = $( "#" + name ).attr('data-srlname');			
				document.title = srlname + " - Streams - SpeedRunsLive";
				$( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
				$('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
				featuredStream(name,srlname,game);
			}
			else
			{
				var randomfeatured = Math.floor(Math.random()*(data[ 'channels'].length/4));
				name = data[ 'channels' ][ randomfeatured ][ 'channel' ][ 'name' ]; // get name
				fullname = $( "#" + name ).attr('data-fullname');
				game = $( "#" + name ).attr('data-game');
				srlname = $( "#" + name ).attr('data-srlname');
				randomStreamTwitchName = fullname;
				randomStreamSRLName = srlname;
				randomStreamGame = game;			
				randomStreamAtStart = true;
				$('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
				featuredStream( name, fullname, game ); // put on page
				$( '#' + name ).addClass( 'watching' );
			}
		}
		
		if ($('.closechat').length == 0) {
			$('#featuredtitle').append( '<span class="closechat">Toggle Chat</span>' )
			$(".closechat").css("display", "");
		
			$(".closechat").click(function () {
				$(".featuredchat iframe").remove();
				$(".featuredchat").toggle();
				$(".featuredstreamcontainer").toggleClass("biggerFeaturedStream");
				$(".featuredchat" ).html( formatChat( $('.featuredstream' ).attr( 'data-name' ) ) );
			});
		}
		
	})
	thingy.fail(function(jqXHR, textStatus) {
	})
};

function featuredStream( name, fullname, game ) {
	$( '.featuredstream' ).html( formatStream( name ) );	
	$( '.featuredstream' ).attr( 'data-name', name );
	$( '.featuredchat' ).html( formatChat( name ) );
	$( '.featuredgame' ).html('<span class="grey"> playing </span><span class="silver">' + game + '</span><span class="grey">.</span>');		
	
}

function formatStream( name ) {

	return '<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=${name}" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel='+ name +'&auto_play=true" /></object>'
}

function formatChat( name ) {
	if ($(".featuredstream").hasClass("biggerFeaturedStream")) {
		return ''; //don't log me into a chat that's hidden.
	} else {
		return '<iframe frameborder="0" scrolling="no" id="chat_embed" src="http://twitch.tv/' + name + '/chat" height="400" width="361"></iframe>';
	}
}

function formatList( name, viewers, descrip, twitchname, img, user, game, currentlywatching ) {
	var watching = '';
	if ( descrip == null ) descrip = '';
	descrip = getGoal(descrip);
	if ( viewers == 1 ) viewers = '1 viewer'
	else viewers += ' viewers'	
	if (currentlywatching == twitchname)
	{
		watching = ' watching';
	}
	return '<div class="twitchstreamer'+ watching +'" id=' + twitchname + ' data-game="' + game + '" data-fullname=' + name + ' data-srlname=' + user.name + '><img class="ava" src="' + img + '" alt=""/><div class="streamerinfo"><span class="name"><img src="http://cdn.rainbowism.net/images/flags/' + user.country.split(' ').join("_") +'.png" class="flag" title="' + user.country + '"/>' + user.name + '</span>' + '<span class="viewers">' + viewers + '</span><br/><span class="description"><p>' + descrip + '</p></span></div></div>'
}
var linkClicked = false;
var randomStreamAtStart = false;
var randomStreamTwitchName = null;
var randomStreamSRLName = null;
var randomStreamGame = null;
function linkClick()
{
	linkClicked = true;
}
$( document ).ready( function(){
	$( ".featuredstream" ).html( '<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>' );
	var updatestreams = function(){ 
		getStreams(); 
		setTimeout( updatestreams, 300000 ); 
	}
		$(window).on("hashchange", function(e) { 
		var pathArray = window.location.hash.split( '/' );
		var existingStream = "";
		if (pathArray[0] == "#!" && document.getElementById(pathArray[1].toLowerCase()))
		{
			var name  = pathArray[1].toLowerCase();
			var srluser = $( "#" + name ).attr('data-srlname');						
			var fullname = $( "#" + name ).attr('data-fullname');
			var game = $( "#" + name ).attr('data-game');
			var srlname = $( "#" + name ).attr('data-srlname');			
			document.title = srlname + " - Streams - SpeedRunsLive";
			$( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
			$('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
			featuredStream(name,srlname,game);
		}
		else
		{
			if (randomStreamAtStart)
			{
				document.title = "Streams - SpeedRunsLive";
				$( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
				$('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + randomStreamSRLName + '/1">'+ randomStreamSRLName +'</a>' );
				featuredStream(randomStreamTwitchName,randomStreamSRLName,randomStreamGame);
			}
		}
		
	});

	updatestreams();
	
});
