var CLIENT_ID = "77j5cesl781f4gpduf1278i38j8icr1";
var loginUrl = "http://login.speedrunslive.com:9000";

function postdata( name, pw ) {
	$.ajax({
		type : "POST",
		url : loginUrl + "/login?returnTo=example.com",
		data : "username=" + encodeURIComponent(name) + "&password=" + encodeURIComponent(pw),
		processData : false,
		xhrFields: {
			'withCredentials': true
		},
		success: function(data) { 
			if ( data.indexOf("Invalid username or password") > -1 ) {
				$('#loginfail').fadeIn().delay(3500).fadeOut();
			}
			else if ( data.indexOf("It appears you have not logged into the SRL IRC server") > -1 ) {
				$('#loginfailupdate').fadeIn().delay(3500).fadeOut();
			}
			else {
				location.reload();
			}
		},
		error: function(xhr, status, httpcode) {
			//this is kinda a hack, fix it later
			$.ajax({
				type: "GET",
				url: apiUrl + "/token/login",
				processData: false,
				xhrFields: {
					'withCredentials': true
				},
				success: function() {
					location.reload();
				}
			});
		}
	});
}

function getTwitchAvatar( channel ) {
	$.ajax({
		type : "GET",
		url : "https://api.twitch.tv/kraken/users/" + channel + "?client_id=" + CLIENT_ID,
		processData : true,
		data : {},
		dataType : "jsonp",
		jsonpCallback : "checkAvatar"
	});
}

function getHitboxAvatar(channel) {
	$.ajax({
		type: "GET",
		url: "https://api.hitbox.tv/user/" + channel + "?client_id=" + CLIENT_ID,
		processData: true,
		data: {},
		dataType: "json",
		success: function(data) {
			checkHAvatar(data);
		}
	});
}

function checkAvatar(data) {
	if (data.logo) {
		setTwitch( data.logo );
	}
	else {
		console.log(data);
		//location.reload();
	}
}

function checkHAvatar(data) {
	var hitboxcdn = "http://edge.sf.hitbox.tv";
	if (data.user_logo) {
		setTwitch( hitboxcdn + data.user_logo );
	}
	else {
		console.log(data);
		//location.reload();
	}
}

function setToken( token, name, channel ) {
	$.ajax({
		type : "POST",
		url : "/settoken.php",
		data : '{"token" : "' + token + '", "name" : "' + name + '", "channel" : "' + channel + '"}',
		dataType : "json",
		processData : false,
		complete: function() {
			getTwitchAvatar(channel);
			//location.reload(); this might be needed later if twitch dependency is fail
		}
	});
}

function setTwitch( avatar ) {
	$.ajax({
		type : "POST",
		url : "/settwitch.php",
		data : '{"avatar" : "' + avatar + '"}',
		dataType : "json",
		processData : false,
		complete: function() {
			location.reload();
		}
	});
}

function logout() {
	$.ajax({
		type: "GET",
		url: apiUrl + "/token/logout",
		xhrFields: {
			'withCredentials': true
		},
		complete: function() { finishLogout(); }
	});
}

function finishLogout() {
	$.ajax({
		type : "GET",
		url : "/logout.php",
		xhrFields: {
			'withCredentials': true
		},
		complete: function() {
			window.location = "http://login.speedrunslive.com:9000/logout?returnTo=www.speedrunslive.com";
		}
	});
}

function submitLogin() {
	postdata($("#headerusername").val(), $("#headerpassword").val());
}

function loginButtons() {
	$(".loginform").keyup(function(e) {
		if ( e.which == 13 ) {
			e.preventDefault();
			return false;
		}
	});
	$("#headerusername").keypress(function(event) {
		if ( event.which == 13 ) {
			submitLogin();
			e.preventDefault();
		}
	});
	
	$("#headerpassword").keypress(function(event) {
		if ( event.which == 13 ) {
			submitLogin();
			e.preventDefault();
		}
	});
}
$( document ).ready( function(){
	loginButtons();
});
