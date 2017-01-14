function getStreams() {
	$.ajax({
		type : "GET",
		url : "http://api.twitch.tv/api/team/srl/live_channels.json",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderList"
	});
};

function getRealName(twitchname) {
	$.ajax({
		type : "GET",
		url : "http://api.speedrunslive.com/streams/" + twitchname + "?channel=twitch",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "giveRealName"
	});
}

function getRealNames(twitchnames) {
	$.ajax({
		type : "GET",
		url : "http://api.speedrunslive.com/streams/?channels=" + twitchnames,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "giveRealNames"
	});
}

function giveRealNames(data) {
	//console.log(data);
	
	for ( x in data ) {
		$("#" + x + " .streamerinfo .name").text( data[x] );
	}
}

function giveRealName(data) {
	$('#featuredtitle').html( 'Featured Stream <span class="grey">&raquo;</span> <a href="/profiles/#!/' + data.user + '/1">'+ data.user +'</a>' );
}

function renderList( data ) {
	if ( $( '#featuredstream' ).attr( 'data-name' ) == 'none' ) {
		name = data[ 'channels' ][ 0 ][ 'channel' ][ 'name' ];
		fullname = data[ 'channels' ][ 0 ][ 'channel' ][ 'display_name' ];
		getRealName(name);
		featuredStream( name, fullname );
	}

	var addList = ''
	var twitchNames = '';
	for ( x in data[ 'channels' ] ) {
		name = data[ 'channels' ][ x ][ 'channel' ][ 'display_name' ];
		viewers = data[ 'channels' ][ x ][ 'channel' ][ 'current_viewers' ];
		descrip = data[ 'channels' ][ x ][ 'channel' ][ 'description' ];
		twitchname = data[ 'channels' ][ x ][ 'channel' ][ 'name' ];
		twitchNames += twitchname + ',';
		img = data[ 'channels' ][ x ][ 'channel' ][ 'image' ][ 'size70' ];
		addList += formatList( name, viewers, descrip, twitchname, img );
	}
	$( '#streamList' ).html( addList );
	twitchNames = twitchNames.slice(0, - 1); // remove trailing comma
	getRealNames(twitchNames); // change twitch names to SRL names
	$( '#'+ $( '#featuredstream' ).attr( 'data-name' ) ).addClass( 'watching' )
	$( ".twitchstreamer" ).click( function(){ 
		$( '#'+ $( '#featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
		name = $( this ).attr('id');
		fullname = $( this ).attr('data-fullname');
		getRealName(name);
		featuredStream( name, fullname );
		$( '#'+ name ).addClass( 'watching' )
	});
};

function featuredStream( name, fullname ) {
	$( '#featuredstream' ).html( formatStream( name ) );
	//$( '#featuredtitle' ).html( 'Featured Stream <a>'+ fullname +'</a>' );
	$( '#featuredstream' ).attr( 'data-name', name );
	$( '#featuredchat' ).html( formatChat( name ) );
}

function formatStream( name ) {

	return '<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=${name}" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel='+ name +'&auto_play=true&start_volume=0" /></object>'
}

function formatChat( name ) {
	return '<iframe frameborder="0" scrolling="no" id="chat_embed" src="http://twitch.tv/chat/embed?channel='+ name + '&amp;popout_chat=true" height="364" width="350"></iframe>';
	//return '<iframe frameborder="0" scrolling="no" id="chat_embed" src="http://www.twitch.tv/chat/embed?channel='+ name +'" height="364" width="350"></iframe>'
}

function formatList( name, viewers, descrip, twitchname, img ) {
	if ( descrip == null ) descrip = '';
	if ( viewers == 1 ) viewers = '1 viewer'
	else viewers += ' viewers'
	return '<a href="#" class="twitchstreamer" id='+ twitchname +' data-fullname='+ name +'><img class="ava" src="'+ img +'" alt=""/><div class="streamerinfo"><span class="name"></span>'+ viewers +'<br/><span class="description">'+ descrip +'</span></div></a>'
}

$( document ).ready( function(){
	var updatestreams = function(){ 
		getStreams(); 
		setTimeout( updatestreams, 30000 ); 
	}
	updatestreams();
});