function getChamp() {
	$.ajax({
		type : "GET",
		url : apiUrl + "/ratings",
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "renderChamp",
		cache : true
	});
};

function renderChamp ( data ) {
	$("#randomchamp").append('<img src="' + siteImage('crown.png') +'" alt="champ icon" /> <a href="/profiles/#!/' + data.player.name + '/1">' + data.player.name + '</a> is champion of<br/><a href="/gamelist/#!/' + data.game.abbrev + '/1">' + data.game.name + '</a>');
}


$( document ).ready( function(){
	getChamp();
});