var apiurl = "http://api.rainbowism.net";

function LoginUser() {
	var name = $("#user").val()
	var pw = $('#pwd').val()
	$.ajax({
		type : "PUT",
		url : apiurl + "/token/" + name,
		data : '{"password" : "' + pw + '"}',
		dataType : "json",
		processData : false,
		success: function(data) { 
			if (data.token) { 		
				setToken( data.token, name );
			} 
			else { 
				window.location = 'http://beta.speedrunslive.com/login' 
				$("#loginhalf").html('Wrong username and/or password<br><p><div class="inputtext">Username</div><input type="text" id="user"></p><p><div class="inputtext">Password</div><input type="password" id="pwd"></p><p><button type="button" id="submit">Submit</button></p>' );
			}
		}
	});
}

function setToken( token, name ) {
	$.ajax({
		type : "POST",
		url : "http://beta.speedrunslive.com/test/settoken.php",
		data : '{"token" : "' + token + '", "name" : "' + name + '"}',
		dataType : "json",
		processData : true,
		complete: function(data) { 	
			window.location = 'http://beta.speedrunslive.com/editprofile' 
		}
	});
}

function logout() {
	$.ajax({
		type : "GET",
		url : "http://beta.speedrunslive.com/test/login.php",
		complete: function(data) { 	
			window.location = 'http://beta.speedrunslive.com/' 
		}
	});
}

function buttons() {
	$("#pwd").keypress(function(e) {
		if(e.which == 13) {
			LoginUser();
		}
	})
	$("#logout").click(function() {
		logout();
    })
};

$( document ).ready( function(){
	buttons();
});