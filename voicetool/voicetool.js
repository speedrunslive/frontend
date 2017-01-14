function roleId(role) {
	switch ( role ) {
		case "admin":
			return 1;
		case "op":
			return 2;
		case "halfop":
			return 3;
		case "voice":
			return 4;
		case "user":
			return 5;
		default:
			return 6;
	}
}

function channel(id) {
	return "#bta-" + id;
}

function checkUser() {
	if ( $("#oldusername").val() == "" ) {
		$(".usernamecheck").html("No username provided.<br />");
	}
	else {
		$.ajax({
			type: "GET",
			url: apiUrl + "/players/" + $("#oldusername").val(),
			processData: false,
			dataType: "jsonp",
			jsonpCallback: "setCheckUserText",
		});
	}
}

function getAdminLog() {
	lastSearch = "";
	if ( $(".searchButton").prev().is("input") && $(".searchButton").prev().val() != "" ) {
		searchAdminLog($(".searchButton").prev().val());
		return;
	}
	if ( roleId(sessionrole) > 4 ) {
		adminLogHtml = '<span class="accessDenied">You do not have access to this tool.</span>';
		$(".adminLogBody").html(adminLogHtml);
	}
	else {
		var page = 1;
		if ( window.location.hash.split('/').length > 2 ) {
			page = window.location.hash.split('/')[2];
		}
		$.ajax({
			type: "GET",
			url: apiUrl + "/adminlog?page=" + page,
			processData: false,
			xhrFields: {
				'withCredentials': 'true'
			},
			dataType: "jsonp",
			jsonpCallback: "setAdminLogEntries",
		});
	}
}

function searchAdminLog(search) {
	lastSearch = search;
	var page = 1;
	if ( window.location.hash.split('/').length > 2 ) {
		page = window.location.hash.split('/')[2];
	}
	$.ajax({
		type: "GET",
		url: apiUrl + "/adminlog?search=" + search + "&page=" + page,
		processData: false,
		xhrFields: {
			'withCredentials': 'true'
		},
		dataType: "jsonp",
		jsonpCallback: "setAdminLogEntries",
	});
}

function getPurgeLog() {
	if ( roleId(sessionrole) > 4 ) {
		purgeListHtml = '<span class="accessDenied">You do not have access to this tool.</span>';
		$(".purgeListBody").html(purgeListHtml);
	}
	else {
		$.ajax({
			type: "GET",
			url: apiUrl + "/adminlog/purges",
			processData: false,
			xhrFields: {
				'withCredentials': 'true'
			},
			dataType: "jsonp",
			jsonpCallback: "setPurgeLogEntries",
		});
	}
}

function updateGoalForRace(id, newGoal) {
	$.ajax({
		type: "POST",
		url: apiUrl + "/goalchanger",
		processData: false,
		xhrFields: {
			'withCredentials': true
		},
		data: '{"id": ' + id + ', "newGoal": "' + newGoal.replace("\"", "\\\"") + '"}',
	});
}

function getGoalEditor() {
	if ( roleId(sessionrole) > 3 ) {
		goalEditorHtml = '<span class="accessDenied">You do not have access to this tool.</span>';
		$(".goalEditorBody").html(goalEditorHtml);
	}
	else {
		var page = 1;
		if ( window.location.hash.split('/').length > 2 ) {
			page = window.location.hash.split('/')[2];
		}
		$.ajax({
			type: "GET",
			url: apiUrl + "/pastraces?page=" + page,
			processData: false,
			dataType: "jsonp",
			jsonpCallback: "setGoalEditorBody",
		});
	}
}

function getTimeEditor() {
	if ( roleId(sessionrole) > 3 ) {
		goalEditorHtml = '<span class="accessDenied">You do not have access to this tool.</span>';
		$(".timeEditorBody").html(goalEditorHtml);
	}
	else {
		$.ajax({
			type: "GET",
			url: apiUrl + "/races",
			processData: false,
			dataType: "jsonp",
			jsonpCallback: "setTimeEditorBody",
		});
	}
}

function getNameChanger() {
	if ( roleId(sessionrole) > 4 ) {
		nameChangerHtml = '<span class="accessDenied">You do not have access to this tool.</span>';
		$(".nameChangerBody").html(nameChangerHtml);
	}
	else if ( roleId(sessionrole) > 2 ) {
		nameChangerHtml	= '<span class="accessDenied">The voice/halfop section of this tool is not implemented yet.</span>';
		$(".nameChangerBody").html(nameChangerHtml);
	}
	else {
		nameChangerHtml = '<span class="notice2">Please note this will not change the user\'s NickServ name, they will need to GROUP their new name with their old name to be able to login.</span><br /><input type="text" class="oldName" placeholder="old name" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'old name\'" /><input type="text" class="newName" placeholder="new name" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'new name\'"/><button class="renamePlayerButton" type="button">Submit</button><br /><span class="notice"></span>';
		$(".nameChangerBody").html(nameChangerHtml);
		$(".renamePlayerButton").click(function(e) {
			renamePlayer($(".oldName").val(), $(".newName").val());
		});
	}
}

function getGoalMerger() {
	if ( roleId(sessionrole) > 4 ) {
		var goalMergerHtml = '<span class="accessDenied">You do not have access to this tool.</span>';
		$(".goalMergerBody").html(goalMergerHtml);
	}
	else {
		var goalMergerHtml = '<input type="text" class="game" placeholder="game abbrev" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'game abbrev\'" /><button type="button">Fetch</button>';
		goalMergerHtml += '<br />this is where a list of goals would be when you click the button to search for a game by abbreviation.';
		$(".goalMergerBody").html(goalMergerHtml);
	}
}

function renamePlayer(oldname, newname) {
	$.ajax({
		type: "POST",
		url: apiUrl + "/namechanger",
		processData: false,
		xhrFields: {
			'withCredentials': true
		},
		data: '{"oldName":"' + oldname + '","newName":"' + newname + '"}',
		statusCode: {
			200: function() {
				$(".oldName").val("");
				$(".newName").val("");
				$('.namechanger .notice').html("Rename successful.");
				$('.namechanger .notice').fadeIn().delay(3500).fadeOut();
			}
		},
		error: function() {
			$('.namechanger .notice').html("Cannot rename - player already exists.");
			$('.namechanger .notice').fadeIn().delay(3500).fadeOut();
		}
	});
}

function setTimeEditorBody(data) {
	var timeEditorHtml = '<table class="timeEditorTable">';
	for ( x in data["races"] ) {
		timeEditorHtml += '<tr><td><span class="timeEditorId">#bta-' + data["races"][x]["id"] + '</span></td><td><span class="timeEditorGame">' + data["races"][x]["game"]["name"] + '</span></td><td><span class="timeEditorGoal">' + data["races"][x]["goal"] + "</td></tr>";
		for ( y in data["races"][x]["entrants"] ) {
			if ( data["races"][x]["entrants"][y]["time"] > 0 ) {
				timeEditorHtml += '<tr><td class="timeEditorEntrant"><span class="timeEditorUsername">' + data["races"][x]["entrants"][y]["displayname"] + '</span></td><td><span class="timeEditorTime"><a data-id="' + data["races"][x]["id"] + '" data-entrant="' + data["races"][x]["entrants"][y]["displayname"] +  '" data-time = "' + formatTime(data["races"][x]["entrants"][y]["time"], data["races"][x]["entrants"][y]["place"]) +  '">' + formatTime(data["races"][x]["entrants"][y]["time"], data["races"][x]["entrants"][y]["place"]) + '</a></span></tr>';
			}
			else {
				timeEditorHtml += '<tr><td class="timeEditorEntrant"><span class="timeEditorUsername">' + data["races"][x]["entrants"][y]["displayname"] + '</span></td><td><span class="timeEditorTime">' + formatTime(data["races"][x]["entrants"][y]["time"], data["races"][x]["entrants"][y]["place"]) + '</span></tr>';
			}
		}
	}
	timeEditorHtml += '</table>';
	$(".timeEditorBody").html(timeEditorHtml);
	$(".timeEditorBody a").click(function(e) {
		// allow only one input at a time or stuff will happen
		if ( $(".timeEditorTable button").length > 0 ) {
			$(".timeEditorTable button").trigger("click");
		}
		var time = $(this).data("time");
		$(this).parent().html('<input type="text" class="newTime" value="' + time + '" /><button type="button" class="updateTimeButton" data-id="' + $(this).data("id") + '" data-entrant="' + $(this).data("entrant") + '" data-time="' + $(this).data("time") + '">Update</button>');
		$(".updateTimeButton").click(function(e) {
			updateTime($(".updateTimeButton").data("id"), $(".updateTimeButton").data("entrant"), $(".newTime").val());
		});
	})
}

function updateTime(id, entrant, time) {
	var timeArray = time.split(":");
	if ( timeArray.length != 3 ) {
		alert("error validating time");
		return;
	}
	else {
		var hours = parseInt(timeArray[0]);
		var minutes = parseInt(timeArray[1]);
		var seconds = parseInt(timeArray[2]);
		if ( minutes >= 60 || seconds >= 60 ) {
			alert("error validating time");
			return;
		}
		var rawTime = seconds + (minutes * 60) + (hours * 60 * 60);
		if ( rawTime == 0 ) {
			alert("time must be > 0 seconds");
			return;
		}
		$.ajax({
			type: "PUT",
			url: apiUrl + "/timeeditor",
			processData: false,
			data: '{"race_id":"' + id + '", "entrant": "' + entrant + '", "time": ' + rawTime + '}',
			xhrFields: {
				'withCredentials': true
			},
			statusCode: {
				200: function(e) {
					location.reload();
				}
			}
		});
	}
}

function formatTime(time, place) {
	if ( time <= 0 ) {
		switch (time) {
			case -3:
				return "Ready";
			case 0:
				return '<span class="timeEditorIdle">Idle</span>';
		}
	}
	else {
		return getTime(time, place, 99999999999);
	}
}

function setGoalEditorBody(data) {
	var page = 1;
	var count = data["count"];
	if ( window.location.hash.split('/').length > 2 ) {
		page = window.location.hash.split('/')[2];
	}
	var goalEditorHtml = '<table class="goalEditorTable">';
	for ( x in data["pastraces"] ) {
			goalEditorHtml += '<tr><td><span class="goalEditorId">#' + data["pastraces"][x]["id"] + '</span></td><td><span class="goalEditorGame">' + data["pastraces"][x]["game"]["name"] + '</span></td><td><span class="goalEditorGoal"><a data-id="' + data["pastraces"][x]["id"] + '">' + data["pastraces"][x]["goal"] + "</a></td></tr>";
	}
	goalEditorHtml += "</table>";
	if ( page > 1 ) {
		goalEditorHtml += '<a href="#!/goaleditor/' + (parseInt(page)-1) + '">&lt;&lt; Previous Page</a>';
		if ( page * 20 < count ) {
			goalEditorHtml += ' | ';
		}
	}
	if ( page * 20 < count ) {
		goalEditorHtml += '<a href="#!/goaleditor/' + (parseInt(page)+1) + '">Next Page &gt;&gt;</a>';
	}
	$(".goalEditorBody").html(goalEditorHtml);
	$(".goalEditorTable a").click(function(e) {
		// allow only one input at a time else you'll get undefined in goal name
		if ( $(".goalEditorTable button").length > 0 ) {
			$(".goalEditorTable button").trigger("click");
		}
		var goaltext = $(this).html().replace("\"", "&quot;");
		$(this).parent().html('<input type="text" value="' + goaltext + '" /><button type="button" class="updateGoalButton" data-id="' + $(this).data("id") + '">Update</button>');
		$(".updateGoalButton").click(function(e) {
			updateGoalForRace($(this).data("id"), $(this).prev().val());
			$(this).parent().html('<a data-id="' + $(this).data("id") + '">' + $(this).prev().val() + "</a>")
		});
	})
}

function setAdminLogEntries(data) {
	var count = data["count"];
	var page = 1;
	if ( window.location.hash.split('/').length > 2 ) {
		page = window.location.hash.split('/')[2];
	}
	var adminLogHtml = '<input type="text" placeholder="search or something"';
	if ( typeof lastSearch != "undefined" && lastSearch != "" ) {
		adminLogHtml += ' value="' + lastSearch + '"';
	}
	adminLogHtml += '><button type="button" class="searchButton">search</button><table class="adminLogTable" id="siteleaderboard"><tr><th>Date</th><th>Entry</th></tr>';
	var comment;
	for ( x in data["entries"] ) {
		if ( data["entries"][x]["comment"] == "" ) {
			comment = "<i>No Comment</i>";
		}
		else {
			comment = data["entries"][x]["comment"];
		}
		adminLogHtml += '<tr><td><span class="adminLogDate">' + formatTimestamp(data["entries"][x]["timestamp"]) + '</span></td><td><span class="adminLogSource">' + data["entries"][x]["source"] + '</span> <span class="adminLogAction">' + data["entries"][x]["action"] + '</span> <span class="adminLogTarget"><a href="/profiles/#!/' + data["entries"][x]["target"] + '/1">' + data["entries"][x]["target"] + '</a></span> <span class="adminLogComment">(' + comment + ")</span></td></tr>";
	}
	adminLogHtml += "</table>";
	if ( page > 1 ) {
		adminLogHtml += '<a href="#!/adminlog/' + (parseInt(page)-1) + '">&lt;&lt; Previous Page</a>';
		if ( page * 20 < count ) {
			adminLogHtml += ' | ';
		}
	}
	if ( page * 20 < count ) {
		adminLogHtml += '<a href="#!/adminlog/' + (parseInt(page)+1) + '">Next Page &gt;&gt;</a>';
	}
	$(".adminLogBody").html(adminLogHtml);
	$(".adminLogBody .searchButton").click(function() {
		searchAdminLog($(this).prev("input").val());
	});
	$(".adminLogBody input").keypress(function(e) {
		if ( e.which == 13 ) {
			$(".adminLogBody .searchButton").trigger("click");
		}
	});
}

function setPurgeLogEntries(data) {
	var purgeListHtml = '<table class="purgeListTable" id="siteleaderboard"><tr><th class="lbButton">User</th><th class="lbButton"># Warnings</th><th class="lbButton">Time Remaining</th><th class="lbButton">Last Log Entry</th></tr>';
	for ( x in data["purges"] ) {
		purgeListHtml += '<tr><td><span class="purgeListUser">' + data["purges"][x]["user"] + '</span></td><td><span class="purgeListNumWarnings">' + data["purges"][x]["num_warnings"] + '</span></td><td><span class="purgeListRemaining">' + formatDuration(data["purges"][x]["remaining"]) + '</span></td><td><span class="LastPurgeLogEntry">'
		if ( data["purges"][x]["last_purge"]["timestamp"] != "" ) {
			var comment = "";
			if ( data["purges"][x]["last_purge"]["comment"] == "" ) {
				comment = "<i>No Comment</i>";
			}
			else {
				comment = data["purges"][x]["last_purge"]["comment"];
			}
			purgeListHtml += '<span class="adminLogDate">' + formatTimestamp(data["purges"][x]["last_purge"]["timestamp"]) + '</span> - <span class="adminLogSource">' + data["purges"][x]["last_purge"]["source"] + '</span> <span class="adminLogAction">' + data["purges"][x]["last_purge"]["action"] + '</span> <span class="adminLogTarget">' + data["purges"][x]["last_purge"]["target"] + '</span> <span class="adminLogComment">(' + comment + ")</span>";
		}
		else {
			purgeListHtml += '<span class="purgeListNoData">(no data)</span>';
		}
		purgeListHtml += '</span></td></tr>';
	}
	purgeListHtml += "</table>";
	$(".purgeListBody").html(purgeListHtml);
}

function formatDuration(duration) {
	var seconds = duration;
	
	var minutes = Math.floor(seconds/60);
	seconds = Math.floor(seconds%60);

	var hours = Math.floor(minutes/60);
	minutes = Math.floor(minutes%60);

	var days = Math.floor(hours/24);
	hours = Math.floor(hours%24);

	var returnVar = ""

	if ( days > 0 ) {
		returnVar += days + " day";
		if ( days > 1 ) { returnVar += "s"; }
		returnVar += ", ";
	}
	if ( hours > 0 ) {
		returnVar += hours + " hour";
		if ( hours > 1 ) { returnVar += "s"; }
		returnVar += ", ";
	}
	if ( minutes > 0 ) {
		returnVar += minutes + " minute";
		if ( minutes > 1 ) { returnVar += "s"; }
		returnVar += ", ";
	}
	returnVar += seconds + " second";
	if ( seconds > 1 ) { returnVar += "s"; }

	return returnVar;
}

function formatTimestamp(timestamp) {
	var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var date = timestamp.split(" ")[0];
	var time = timestamp.split(" ")[1];

	var year = date.split("-")[0];
	var month = date.split("-")[1];
	var day = date.split("-")[2];

	var hour = time.split(":")[0];
	var minute = time.split(":")[1];
	var second = time.split(":")[2];
	var ampm = "AM";

	if ( hour > 12 ) {
		hour -= 12;
		ampm = "PM";
	}
	return monthname[month-1] + " " + day + ", " + year + " " + hour + ":" + minute + ":" + second + " " + ampm;
}

function hideAllTools() {
	$(".adminlog").hide();
	$(".purgelist").hide();
}

function highlightToolLink(name) {
	$(".toolFilter").removeClass("toolSelected");
	if ( name == "adminlog" ) {
		$("#0").addClass("toolSelected");
	}
	else if ( name == "purgelist" ) {
		$("#1").addClass("toolSelected");
	}
}

function prepareTool(tool) {
	if ( tool == "adminlog" ) {
		getAdminLog();
	}
	else if ( tool == "purgelist" ) {
		getPurgeLog();
	}
}

function getToolById(id) {
	switch (id) {
		case 0: return "adminlog";
		case 1: return "purgelist";
	}
}

function hideDeniedTools(roleid) {
	//none
}

$(window).ready(function() {
	stuffReady();
});

function stuffReady() {
	if ( typeof sessionrole === "undefined" ) { 
		setTimeout("stuffReady()", 10);
		return;
	}
	$(".userrole").html(sessionrole);
	var pathArray = window.location.hash.split('/');
	hideDeniedTools(roleId(sessionrole));
	hideAllTools();
	if ( roleId(sessionrole) < 5 ) {
		if ( pathArray[0] == "#!" ) {
			highlightToolLink(pathArray[1]);
			$("."+pathArray[1]).show();
			prepareTool(pathArray[1]);
		}
		else {
			prepareTool("adminlog");
			$(".adminlog").show();
		}
	}
	else {
		$(".toolDenied").show();
		$("#toolList").hide();
	}
}
$(window).on("hashchange", function(e) {
	var pathArray = window.location.hash.split('/');
	if ( pathArray[0] == "#!" ) {
		hideAllTools();
		highlightToolLink(pathArray[1]);
		$("."+pathArray[1]).show();
		prepareTool(pathArray[1]);
	}
})