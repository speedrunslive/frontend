var CLIENT_ID = "77j5cesl781f4gpduf1278i38j8icr1";

var bindOnce = false,
    realnamecache = {names: "", values: {}},
    eventsView = false; // EVENT
    // streamdata;

function streamsGetGoal (goal) {
    var goalArray = goal.split( ' ' );

    for (var i in goalArray) {
        //if(new RegExp("(https?://)?(([A-Za-z0-9#]+[.])+[A-Za-z]{2,3}($|([/][A-Za-z0-9#]+)+([.][A-Za-z]{2,4})?)").test(goalArray[i])) {
        if(new RegExp("(https?://)?(([A-Za-z0-9#]+[.])+[A-Za-z]{2,3}([/][A-Za-z0-9#]+)*([.][A-Za-z]{2,4})?)").test(goalArray[i])) {
        //if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(goalArray[i])) {
            // Append a URL protocol if it's missing.
            var prefix = '';
            if ((goalArray[i].substring(0, 7) != 'http://') && (goalArray[i].substring(0, 8) != 'https://')) {
                prefix = 'http://';
            }

            if (goalArray[i].length > 40) {
                goalArray[i] = '<a target="_blank" onmousedown="javascript:linkClick();" href="' + prefix + goalArray[i] + '">' + goalArray[i].substr(0, 40) + '...</a>';
            } else {
                goalArray[i] = '<a target="_blank" onmousedown="javascript:linkClick();" href="' + prefix + goalArray[i] + '">' + goalArray[i] + '</a>';
            }
        } else {
            if (goalArray[i].length > 40) {
                goalArray[i] = '<span title="' + goalArray[i] + '">' + goalArray[i].substr(0, 40) + '...</span>';
            }
        }
    }
    return goalArray.join(' ');
}

function bindDropdownMenus() {
    $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
    if ( bindOnce ) { return; }
    bindOnce = true;

    //save state
    expandedStreams = Array();
    var temp = $(".gamestreamlist:visible").filter(':not(".hiddenlist .gamestreamlist")');
    temp.prev().each(function(index) {
        expandedStreams.push($(this).children().html());
    });
    delete temp;

    $(document).on("click", ".hiddenlistlink a", function(e) {
        if ( $(".hiddenlist").hasClass("isHidden") ) {
            $(".hiddenlistlink a").html("&#9660; Hidden");
            $(".hiddenlist").show();
            $(".hiddenlist").html(hideList); //workaround for redraw bug
            bindDropdownMenus(); //yes, we have to reassign the events when we change html too
            $('.hiddenlist .game').width(function() {
                return 215 - $(this).next().width();
            });
            $(".hiddenlist .gamestreamlist").hide();
            $(".hiddenlist").removeClass("isHidden");
            performSearch($(".streamsearch"));
        }
        else {
            $(".hiddenlistlink a").html("&#9654; Hidden");
            $(".hiddenlist").hide();
            bindDropdownMenus();
            $(".hiddenlist").addClass("isHidden");
        }
        fixStreamerMargins();
    });

    $(document).on("keydown", ".streamsearch",function(e) {
        thingy2 = $(this);
        clearTimeout(timeout);
        var timeout = setTimeout("performSearch(thingy2)", 1000);
    });

    $(document).on("click", ".sortbyviewers", function(e) {
        $(".sortbygames, .sortbyviewers").attr("disabled", true);
        //setDefaultSort(2);
        renderList(streamdata, 2);
        $(".sortbygames").removeProp("checked");
    });
    $(document).on("click", ".sortbygames", function(e) {
        $(".sortbygames, .sortbyviewers").attr("disabled", true);
        //setDefaultSort(1);
        renderList(streamdata, 1);
        $(".sortbyviewers").removeProp("checked");
    });

    $(document).on("click", ".dropdown", function(e) {
        var temp = $(this).next();
        if ( temp.css('display') == "none" ) {
            $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
            temp.show();
        }
        else {
            $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
            temp.hide();
        }
        linkClick();
    });
    $(document).on("click", ".disableddropdown", function(e) {
        linkClick();
        alert("Log in to customize your front page!");
    });
    $(document).on("mouseover", ".dropdown, .disableddropdown", function(e) {
        $(this).parent().parent().parent().addClass("overdropdown");
    });
    $(document).on("mouseout", ".dropdown, .disableddropdown", function(e) {
        $(this).parent().parent().parent().removeClass("overdropdown");
    });
    $(document).on("mouseover", ".dropdownmenu, .dropdownmenua, .dropdownmenuh", function(e) {
        $(this).parent().parent().parent().addClass("overdropdown");
    });
    $(document).on("mouseout", ".dropdownmenu, .dropdownmenua, .dropdownmenuh", function(e) {
        $(this).parent().parent().parent().removeClass("overdropdown");
    });

    $(document).on("click", ".pinplayer", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("srlname")
        pinplayerlist.push(name.toLowerCase());
        pinStream(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".unpinplayer", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("srlname")
        pinplayerlist.splice($.inArray(name.toLowerCase(), pinplayerlist), 1)
        unpinStream(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".pingame", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("game")
        pingamelist.push(name.toLowerCase());
        pinGame(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".unpingame", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("game")
        pingamelist.splice($.inArray(name.toLowerCase(), pingamelist), 1)
        unpinGame(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".hideplayer", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("srlname")
        hideplayerlist.push(name.toLowerCase());
        hideStream(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".unhideplayer", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("srlname")
        hideplayerlist.splice($.inArray(name.toLowerCase(), hideplayerlist), 1)
        unhideStream(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".hidegame", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("game")
        hidegamelist.push(name.toLowerCase());
        hideGame(name)
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".unhidegame", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("game")
        hidegamelist.splice($.inArray(name.toLowerCase(), hidegamelist), 1)
        unhideGame(name);
        renderList(streamdata);
        linkClick();
    });
    $(document).on("click", ".blacklistplayer", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("srlname")
        blacklistStream(name);
        linkClick();
    });
    $(document).on("click", ".purgeplayer", function(e) {
        $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        name = $(this).closest(".twitchstreamer, .twitchstreamerg").data("srlname")
        purgeStream(name);
        linkClick();
    });
    $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
    $(document).on("click", ".twitchstreamer a, .twitchstreamerg a", function(e) {
        linkClicked = true;
        return;
    });
    $(document).on("click", ".twitchstreamer, .twitchstreamerg", function(e){
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
                api = $( this ).attr('data-api');
                document.title = srlname + " - Streams - SpeedRunsLive";
                $('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
                //featuredStream( name, fullname, game );
                window.location.hash = "!/" + fullname;
                $( '#'+ name ).addClass( 'watching' )
            }
        }
    });
    $(document).on("click", ".streamsdivider", function(e) {
        $(this).toggleClass("streamsdivideropen");
        var temp = $(this).next(".gamestreamlist");
        if ( temp.css('display') == "none" ) {
            temp.show();
        }
        else {
            temp.hide();
        }
    });
    $(".gamestreamlist").each(function(index) {
        if ( expandedStreams.indexOf($(this).prev().children().html()) > -1 ) {
            $(this).show();
        }
    });
    delete expandedStreams;
    $(document).on("click", function(e) {
        if ( e.target.className != "dropdown" ) {
            $(".dropdownmenu, .dropdownmenua, .dropdownmenuh").hide();
        }
    });
}
function getPinnedStreams() {
    $.ajax({
        type: "GET",
        url: apiUrl + "/streamprefs",
        processData: true,
        data: {},
        dataType: "jsonp",
        jsonpCallback: "setStreamPrefs",
        cache: true
    });
}
function pinStream(streamname) {
    $.ajax({
        type: "PUT",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"pinnedstreams":["' + sanitizeQuotes(streamname.toLowerCase()) + '"]}'
    })
}
function unpinStream(streamname) {
    $.ajax({
        type: "DELETE",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"pinnedstreams":["' + sanitizeQuotes(streamname.toLowerCase()) + '"]}'
    })
}
function hideStream(streamname) {
    $.ajax({
        type: "PUT",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"hiddenstreams":["' + sanitizeQuotes(streamname.toLowerCase()) + '"]}'
    })
}
function unhideStream(streamname) {
    $.ajax({
        type: "DELETE",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"hiddenstreams":["' + sanitizeQuotes(streamname.toLowerCase()) + '"]}'
    })
}
function pinGame(gamename) {
    $.ajax({
        type: "PUT",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"pinnedgames":["' + sanitizeQuotes(gamename.toLowerCase()) + '"]}'
    })
}
function unpinGame(gamename) {
    $.ajax({
        type: "DELETE",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"pinnedgames":["' + sanitizeQuotes(gamename.toLowerCase()) + '"]}'
    })
}
function hideGame(gamename) {
    $.ajax({
        type: "PUT",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"hiddengames":["' + sanitizeQuotes(gamename.toLowerCase()) + '"]}'
    })
}
function unhideGame(gamename) {
    $.ajax({
        type: "DELETE",
        url: apiUrl + "/streamprefs",
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"hiddengames":["' + sanitizeQuotes(gamename.toLowerCase()) + '"]}'
    })
}
function purgeStream(streamname) {
    var comment = prompt("Comment (optional):");
    if ( comment === null ) {
        return;
    }
    $.ajax({
        type: "POST",
        url: apiUrl + "/streamprefs/" + streamname,
        processData: false,
        xhrFields: {
            'withCredentials': true
        },
        data: '{"frontpage_pref":1, "comment":"' + comment + '"}',
        success: function() {
            alert(streamname + " successfully purged.  Please note it will take a few minutes to update.");
        }
    })
}
function getStreams() {
    twitchretry1 = 0;
    twitchretry2 = 0;
    $.ajax({
        type : "GET",
        url : "http://api.speedrunslive.com/frontend/streams",
        processData : true,
        data : {},
        dataType : "jsonp",
        jsonpCallback : "getCustomStreamsList",
        error: function(xhr) {
        	console.error(xhr);
        },
        cache : true
    });
};

function getCustomStreamsList(data) {
	twitchisstupid1 = data;
    streamdata = data._source;
    if ( importpreference > 0 ) {
        if ( customstreamsapi == "twitch" ) {
            customstreams = Array();
            $.ajax({
                type: "GET",
                url: "https://api.twitch.tv/kraken/users/" + customstreamsnick + "/follows/channels?limit=100&sortby=last_broadcast&client_id=" + CLIENT_ID,
                dataType: "jsonp",
                jsonpCallback: "getCustomStreams",
                error: function(xhr) {
		        	twitchretry1++;
                    if ( twitchretry1 < 3 ) {
                        getCustomStreamsList(twitchisstupid1);
                    }
                    else {
                        $("#featured #ajaxstage").html('<div id="ajaxloading" style="animation: none;">WE COULD NOT RETRIEVE YOUR FOLLOWS DUE TO AN ERROR ON TWITCH\'S SIDE.  PLEASE TRY AGAIN LATER.</span>');
                    }
		        },
            });
        }
        else {
            allcustomstreams = customstreams.slice(0);
            getRealNames(streamdata);
        }
    }
    else {
        allcustomstreams = customstreams.slice(0);
        getRealNames(streamdata);
    }
}

function getRealNames(data) {
    var twitchNames = '';
    for ( x in data[ 'channels' ] ) {
        twitchname = data[ 'channels' ][ x ][ 'name' ];
        twitchNames += twitchname + ',';
    }
    if ( compareList(realnamecache.names, twitchNames) ) { countGames(streamdata); }
    else {
        realnamecache.names = twitchNames;
        $.ajax({
            type : "GET",
            url : apiUrl + "/streams/?channels=" + twitchNames,
            processData : true,
            data : {},
            dataType : "jsonp",
            jsonpCallback : "cacheRealNames",
            error: function(xhr) {
	        	console.error(xhr);
	        },
        });
    }
}

function cacheRealNames(data) {
    realnamecache.values = data;
    var match = false;
    if ( importpreference == 2 ) {
        for ( x in allcustomstreams ) {
            for ( y in realnamecache.values ) {
                if ( realnamecache.values[y].channel.toLowerCase() == allcustomstreams[x].toLowerCase() ) {
                    pinplayerlist.push(realnamecache.values[y].name.toLowerCase());
                    match = true;
                    break;
                }
            }
            if ( match ) {
                match = false;
                continue;
            }
            else {
                pinplayerlist.push(allcustomstreams[x].toLowerCase());
            }
        }
    }
    countGames(streamdata);
}

function getCustomStreams(data) {
	if ( data["follows"]["_total"] == 0 && twitchretry1 < 3 ) { // retry up to 3 times
		twitchretry1++;
		getCustomStreamsList(twitchisstupid1);
	}
    for ( x in data["follows"] ) {
        customstreams.push(data["follows"][x]["channel"]["name"]);
    }
    var x = 0;
    var y = 0;
    var match = false;
    allcustomstreams = customstreams.slice(0);
    while ( x < customstreams.length ) {
        while ( y < streamdata["channels"].length ) {
            if ( streamdata["channels"][y]["name"] == customstreams[x] ) {
                customstreams.splice(x, 1);
                match = true;
            }
            y++;
        }
        y = 0;
        if ( match == true ) { match = false; continue; }
        x++;
    }
    if ( customstreams.length > 0 ) {
    	twitchisstupid2 = data;
        $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams?limit=100&channel=" + customstreams.join() + "&client_id=" + CLIENT_ID,
            dataType: "jsonp",
            jsonpCallback: "addCustomStreams",
            error: function(xhr) {
	        	twitchretry2++;
                if ( twitchretry2 < 3 ) {
                    getCustomStreams(twitchisstupid2);
                }
                else {
                    $("#featured #ajaxstage").html('<div id="ajaxloading" style="animation: none;">WE COULD NOT RETRIEVE YOUR FOLLOWS DUE TO AN ERROR ON TWITCH\'S SIDE.  PLEASE TRY AGAIN LATER.</span>');
                }
	        },
        });
    }
    else {
        streamdata['channels'].sort(function(a, b) {
            if ( a['current_viewers'] > b['current_viewers'] ) {
                return -1;
            }
            else if ( a['current_viewers'] < b['current_viewers'] ) {
                return 1;
            }
            return 0;
        });
        getRealNames(streamdata);
    }
}

function sanitize(text) {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function unsanitize(text) {
	return text.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}

function sanitizeQuotes(text) {
    return text.replace(/"/g, '\\"');
}

function sanitizeQuotesHtml(text) {
    return text.replace(/"/g, '&quot;');
}

function addCustomStreams(data) {
	if ( data["_total"] == 0 && twitchretry2 < 3 ) { // retry up to 3 times
		twitchretry2++;
		getCustomStreams(twitchisstupid2);
	}
    for ( x in data["streams"] ) {
        if ( data["streams"][x]["game"] == null ) {
            var playingGame = "(none)";
        }
        else {
            var playingGame = data["streams"][x]["game"];
        }
        if ( data["streams"][x]["channel"]["logo"] == null ) {
            var logo = data["streams"][x]["preview"]["medium"]
        }
        else {
            var logo = data["streams"][x]["channel"]["logo"];
        }
        streamdata.channels.push({
            api: "twitch",
            current_viewers: data["streams"][x]["viewers"],
            display_name: data["streams"][x]["channel"]["display_name"],
            image: {
                size70: logo
            },
            isCustom: true,
            meta_game: sanitize(playingGame),
            name: data["streams"][x]["channel"]["name"],
            title: sanitize(data["streams"][x]["channel"]["status"]),
            user_name: data["streams"][x]["channel"]["name"]
        });
    }
    streamdata['channels'].sort(function(a, b) {
        if ( a['current_viewers'] > b['current_viewers'] ) {
            return -1;
        }
        else if ( a['current_viewers'] < b['current_viewers'] ) {
            return 1;
        }
        return 0;
    });
    getRealNames(streamdata);
}

function countGames(data) {
	data["games"] = [];
	for ( x in data["channels"] ) {
		var found = false;
		for ( y in data["games"] ) {
            if ( typeof data["channels"][x]["meta_game"] === "undefined" ) { console.log(data["channels"][x]); continue; }
			if ( data["channels"][x]["meta_game"] .toLowerCase().trim() == data["games"][y]["game"]["name"].toLowerCase().trim() ) {
				data["games"][y]["game"]["streams"]++;
				found = true;
			}
		}
		if ( !found ) {
			data.games.push({game: {name: data["channels"][x]["meta_game"].toLowerCase().trim(), streams: 1}});
		}
	}
	streamdata = data;
    renderList(streamdata);
}

function compareList(list1, list2) {
    var temp1 = list1.split(",");
    var temp2 = list2.split(",");

    temp1.sort(function(a, b) {
        if ( a > b ) {
            return 1;
        }
        else if ( a < b) {
            return -1;
        }
        return 0;
    });
    temp2.sort(function(a, b) {
        if ( a > b ) {
            return 1;
        }
        else if ( a < b) {
            return -1;
        }
        return 0;
    });

    temp1 = temp1.join(",");
    temp2 = temp2.join(",");

    if ( temp1 == temp2 ) { return true; }
    else { return false; }
}

function setStreamPrefs(data) {
    for ( x in data['pinnedstreams'] ) {
        pinplayerlist.push(data['pinnedstreams'][x]);
    }
    for ( x in data['hiddenstreams'] ) {
        hideplayerlist.push(data['hiddenstreams'][x]);
    }
    for ( x in data['pinnedgames'] ) {
        pingamelist.push(data['pinnedgames'][x]);
    }
    for ( x in data['hiddengames'] ) {
        hidegamelist.push(data['hiddengames'][x]);
    }
    customstreamsnick = data['streamname'];
    customstreamsapi = data['streamapi'];
    importpreference = data['importpreference'];
    //defaultsort = data['default_sort'];
}

function giveRealNames(data) {
    for ( x in data ) {
        $("#" + x + " .streamerinfo .name").text( data[x] );
    }
}

function fixStreamerMargins() {
    var temp = 1;
    $(".twitchstreamer:visible:not(.pinned .twitchstreamer)").each(function() {
        if ( temp % 3 == 0 ) { $(this).css("margin-right", "0"); }
        else { $(this).css("margin-right", ""); }
        temp++;
    });
    temp = 1;
    $(".pinned .twitchstreamer:visible").each(function() {
        if ( temp % 3 == 0 ) { $(this).css("margin-right", "-1px"); }
        else { $(this).css("margin-right", ""); }
        temp++;
    });
    temp = 1;
    $(".hiddenlist .twitchstreamer:visible").each(function() {
        if ( temp % 3 == 0 ) { $(this).css("margin-right", "-1px"); }
        else { $(this).css("margin-right", ""); }
        temp++;
    });
}

// badGame has been moved to teamapi

function performSearch(thing) {
    $(".twitchstreamer, .twitchstreamerg").show();
    $(".twitchstreamerhidden, .twitchstreamerghidden").show();
    if ( thing.val() == "" ) {
        $(".twitchstreamer").show();
        $(".twitchstreamerg").show();
        $(".streamsdivider").show();
        fixStreamerMargins();
        return;
    }
    $(".twitchstreamer, .twitchstreamerg").each(function() {
        if ( $(this).data("game").toLowerCase().indexOf(thing.val().toLowerCase()) > -1 || $(this).data("srlname").toLowerCase().indexOf(thing.val().toLowerCase()) > -1 || $(this).find(".description p:first-child").html().toLowerCase().indexOf(thing.val().toLowerCase()) > -1) {
            $(this).show();
        }
        else {
            $(this).hide();
        }
    });
    $(".gamestreamlist").each(function() {
        var displayMe = false;
        $(this).children().each(function() { if ( $(this).css("display") == "block" ) { displayMe = true; } });

        if ( displayMe == false ) {
            $(this).prev().hide();
        }
        else {
            $(this).prev().show();
        }
    });
    fixStreamerMargins();

    //old code that's bad that uses tons of memory:
    //searchterm = thing.val().toLowerCase();
    //renderList(streamdata);
}

function renderList( data, sort ) {
    sort = sort || defaultsort;
    if ( typeof searchterm === 'undefined' ) {
        searchterm = "";
    }
    //retain previous sort on refresh
    if ( $(".sortbygames:checked").val() && sort == 0 ) {
        sort = 1;
    }

    streamdata = data;
    var twitchNames = '';
    for ( x in data[ 'channels' ] ) {
        twitchname = data[ 'channels' ][ x ][ 'name' ];
        twitchNames += twitchname + ',';
    }
    //twitchNames = twitchNames.substring(0, twitchNames.len-1);
    //var thingy = {getRealNames(twitchNames)}
    thingy = {success: function(livenames) {
        var beforeList = '<div class="pinned"></div>';
        var addList = '';
        if ( sort == 1 ) {
            $(".sortbygames").prop("checked", "true");
            $(".sortbyviewers").removeProp("checked");
        }
        else if ( sort == 2 || sort == 0 ) {
            $(".sortbyviewers").prop("checked", "true");
            $(".sortbygames").removeProp("checked");
        }

        //var pinList = '';
        var pinList = '<span class="endoflist"><span>Pinned</span></span>';
        hideList = '';
        var lastGame = "";
        var lastPinGame = "";
        var lastHiddenGame = "";

        if ( sort == 1 ) {
            data['channels'].sort(function(a, b) {
                /*if ( a['meta_game'] == null ) { a['meta_game'] = ""; }*/
                /*decided game sort would make it harder to find stuff -- if ( getStreamCount(a['meta_game'] , data) > getStreamCount(b['meta_game'] , data) ) {
                    return -1;
                }
                else if ( getStreamCount(a['meta_game'] , data) < getStreamCount(b['meta_game'] , data) ) {
                    return 1;
                }*/
                if ( a['meta_game'].toLowerCase() < b['meta_game'].toLowerCase() ) {
                    return -1;
                }
                else if ( a['meta_game'].toLowerCase() > b['meta_game'].toLowerCase() ) {
                    return 1;
                }
                return 0;
            });
        }
        else if ( sort == 2 || sort == 0 ) {
            data['channels'].sort(function(a, b) {
                if ( a['current_viewers'] < b['current_viewers'] ) {
                    return 1;
                }
                else if ( a['current_viewers'] > b['current_viewers'] ) {
                    return -1;
                }
                if ( a['name'] > b['name'] ) {
                    return 1;
                }
                else if ( a['name'] < b['name'] ) {
                    return -1;
                }
                return 0;
            });
        }

        for ( x in data[ 'channels' ] ) {
            var onSRL = true;
            name = data[ 'channels' ][ x ][ 'name' ];
            viewers = data[ 'channels' ][ x ][ 'current_viewers' ];
            descrip = data[ 'channels' ][ x ][ 'title' ];
            twitchname = data[ 'channels' ][ x ][ 'name' ];
            srlname = livenames[ data[ 'channels' ][ x ][ 'name' ] ];
            racing = data['channels'][x]['is_racing'];
            isCustom = data['channels'][x]['isCustom'] || false;
            try {
                api = srlname['api'];
            }
            catch ( r ) {
                api = "twitch";
            }
            if (srlname === undefined) {
                srlname = new Object();
                srlname.country = "None";
                srlname.youtube = "";
                srlname.twitter = "";
                srlname.name = twitchname;
                onSRL = false;
            }
            img = data[ 'channels' ][ x ][ 'image' ][ 'size70' ];
            game = data[ 'channels' ][ x ][ 'meta_game' ];

            if ( ( sort != 1 && $.inArray(srlname.name.toLowerCase(), pinplayerlist) > -1 ) || $.inArray(unsanitize(game.toLowerCase().trim()), pingamelist) > -1 ) {
                if ($.inArray(unsanitize(game.toLowerCase()), hidegamelist) == -1 && $.inArray(srlname.name.toLowerCase(), hideplayerlist) == -1) {
                    if ( sort == 1 && lastPinGame != data['channels'][x]['meta_game'].toLowerCase().trim() ) {
                        if ( lastPinGame != "" ) {
                            pinList += formatPostDivider();
                        }
                        lastPinGame = data['channels'][x]['meta_game'].toLowerCase().trim();
                        pinList += formatDivider(data['channels'][x]['meta_game'], data);
                    }
                    if ( name.toLowerCase() == "speedrunslive" && sort != 1 ) {
                        pinList = formatList(name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ), api, sort, onSRL, racing, isCustom ) + pinList;
                    }
                    else {
                        pinList += formatList( name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ), api, sort, onSRL, racing, isCustom );
                    }
                }
                else if ( $.inArray(srlname.name.toLowerCase(), hideplayerlist) > -1 || $.inArray(unsanitize(game.toLowerCase().trim()), hidegamelist) > -1 ) {
                    if ( sort == 1 && lastGame != data['channels'][x]['meta_game'].toLowerCase().trim() ) {
                        if ( lastGame != "" ) {
                            hideList += formatPostDivider();
                        }
                        lastGame = data['channels'][x]['meta_game'].toLowerCase().trim();
                        hideList += formatDivider(data['channels'][x]['meta_game'], data);
                    }
                    hideList += formatList(name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ), api, sort, onSRL, racing, isCustom );
                }
            }
            else {
                if ($.inArray(unsanitize(game.toLowerCase()), hidegamelist) == -1 && $.inArray(srlname.name.toLowerCase(), hideplayerlist) == -1) {
                    if ( sort == 1 && lastGame != data['channels'][x]['meta_game'].toLowerCase().trim() ) {
                        if ( lastGame != "" ) {
                            addList += formatPostDivider();
                        }
                        lastGame = data['channels'][x]['meta_game'].toLowerCase().trim();
                        addList += formatDivider(data['channels'][x]['meta_game'], data);
                    }
                    if ( name.toLowerCase() == "speedrunslive" && sort != 1 ) {
                        addList = formatList(name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ), api, sort, onSRL, racing, isCustom ) + addList;
                    }
                    else {
                        addList += formatList( name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ), api, sort, onSRL, racing, isCustom );
                    }
                }
                else if ( $.inArray(srlname.name.toLowerCase(), hideplayerlist) > -1 || $.inArray(unsanitize(game.toLowerCase()), hidegamelist) > -1 ) {
                    if ( sort == 1 && lastHiddenGame != data['channels'][x]['meta_game'].toLowerCase().trim() ) {
                        if ( lastHiddenGame != "" ) {
                            hideList += formatPostDivider();
                        }
                        lastHiddenGame = data['channels'][x]['meta_game'].toLowerCase().trim();
                        hideList += formatDivider(data['channels'][x]['meta_game'], data);
                    }
                    hideList += formatList(name, viewers, descrip, twitchname, img, srlname, game, $( '.featuredstream' ).attr( 'data-name' ), api, sort, onSRL, racing, isCustom );
                }
            }
        }

        addList += formatPostDivider();
        if ( pinplayerlist.length > 0 || pingamelist.length > 0) {
            pinList += formatPostDivider();
        }
        pinList += formatPostDivider();
        pinList += '<span class="endoflist"></span>';

        if ( hideList != '' ) {
            var hideListAddon = '<span class="endoflist hiddenlistlink"><span><a>&#9654; Hidden</a></span></span><div class="hiddenlist isHidden">';
            var hideListAddonEnd = '</div><span class="endoflist hiddenlistlink"></span>';
            $( '#streamList' ).html( beforeList + addList + hideListAddon + hideList + hideListAddonEnd );
        }
        else {
            $( '#streamList' ).html( beforeList + addList );
        }
        $(".pinned").html(pinList);

        $(".hiddenlist").html(hideList);
        fixStreamerMargins();
        $(".hiddenlist").hide();
        $('.game').width(function() {
            return 215 - $(this).next().width();
        });
        bindDropdownMenus();
        $(".gamestreamlist").hide();
        fixDividers();
        if ( savedexpandedStreams.length > 0 ) {
            $(".streamsdivider").each(function(e) {
                if ( $.inArray($(this).children().html(), savedexpandedStreams) != -1 ) {
                    $(this).trigger("click");
                }
            });
            savedexpandedStreams = Array();
        }
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
                var api = $( "#" + name ).attr('data-api');
                var racing = $("#" + name).attr('data-racing');
                document.title = srlname + " - Streams - SpeedRunsLive";
                $( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
                $('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
                featuredStream(name,srlname,game,api,racing);
            }
            else
            {
                var pickchannels = data["channels"].slice(0);
                var pinnedonly = false;
                var matches = 0;
                var somevariable = 0;
                var divisor = 4;
                while ( (somevariable) < data["channels"].length ) {
                    var temp = livenames[data["channels"][somevariable]["name"]];
                    if ( typeof temp === "undefined" ) {
                        temp = {name: data["channels"][somevariable]["name"]};
                    }
                    temp = temp.name.toLowerCase();
                    if ( $.inArray(temp, pinplayerlist) > -1 || $.inArray(data["channels"][somevariable]["meta_game"].toLowerCase().trim(), pingamelist) > -1 ) {
                        if ( pinnedonly == false ) {
                            pickchannels = Array();
                            pinnedonly = true;
                            divisor = 1;
                        }
                        pickchannels.push(data["channels"][somevariable]);
                    }
                    somevariable++;
                }
                somevariable = 0;
                if ( pinnedonly == false ) {
                    while ( (somevariable-matches) < pickchannels.length ) {
                        if ( $.inArray(pickchannels[somevariable-matches]["user_name"].toLowerCase(), hideplayerlist) > -1 || $.inArray(unsanitize(pickchannels[somevariable-matches]["meta_game"].toLowerCase().trim()), hidegamelist) > -1 ) {
                            pickchannels.splice(somevariable-matches, 1);
                            matches++;
                        }
                        somevariable++;
                    }
                }
                var randomfeatured = Math.ceil(Math.random()*(pickchannels.length/divisor)) - 1;
                if ( pickchannels.length > 0 ) {
                    name = pickchannels[ randomfeatured ][ 'name' ]; // get name
                    fullname = $( "#" + name ).attr('data-fullname');
                    game = $( "#" + name ).attr('data-game');
                    var i = 0;
                    srlname = $( "#" + name ).attr('data-srlname');
                    api = $( "#" + name ).attr('data-api');
                    randomStreamTwitchName = fullname;
                    randomStreamSRLName = srlname;
                    randomStreamGame = game;
                    randomRacing = racing;
                    randomApi = api;
                    randomStreamAtStart = true;
                    $('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
                    featuredStream( name, fullname, game, api, racing ); // put on page
                    $( '#' + name ).addClass( 'watching' );
                }
                else {
                    $("#featured #ajaxstage").html('<div id="ajaxloading" style="animation: none;">THERE WAS AN ERROR, OR THERE WERE NO REMAINING STREAMS THAT FIT YOUR CRITERIA. PLEASE TRY AGAIN LATER.</span>');
                }
            }
        }

        if ($('.closechat').length == 0) {
        	if ( typeof pickchannels == "undefined" || pickchannels.length > 0 ) {
            	$('#featuredtitle').append( '<span class="closechat">Toggle Chat</span><span class="fullscreen">Fullscreen</span>' );
        	}
            $(".closechat").css("display", "");

            $(".closechat").click(function () {
                $(".featuredchat iframe").remove();
                $(".featuredchat").toggle();
                $(".featuredstreamcontainer").toggleClass("biggerFeaturedStream");
                $(".featuredchat" ).html( formatChat( $('.featuredstream' ).attr( 'data-name' ), api ) );
            });

            $(".fullscreen").click(function() {
                if ( $("#streamList").css("display") == "none" ) {
                    $("#streamList").show();
                    $(".sortmethod").show();
                    $("#promo").show();
                    $("header").show();
                    $("footer").show();
                    $(".featuredstreamcontainer").removeClass("fullscreen");
                    $(".featuredchat").removeClass("fullscreen");
                    $("#pageContent").width("");
                    $("#pageContent").css("padding", "");
                    $("#main").css("padding-bottom", "");
                    $("*").css("overflow", "");
                    renderList(streamdata); // updating while hidden causes things to render out of place
                }
                else {
                    //save state
                    savedexpandedStreams = Array();
                    $(".streamsdivideropen").each(function(e) {
                        savedexpandedStreams.push($(this).children().html());
                    });
                    $("#streamList").hide();
                    $(".sortmethod").hide();
                    $("#promo").hide();
                    $("header").hide();
                    $("footer").hide();
                    $(".featuredstreamcontainer").addClass("fullscreen");
                    $(".featuredchat").addClass("fullscreen");
                    $("#pageContent").width("100vw");
                    $("#pageContent").css("padding", "0");
                    $("#main").css("padding-bottom", "0");
                    $("*").css("overflow", "hidden");
                }
            });
        }
        performSearch($(".streamsearch"));
        $(".sortbygames, .sortbyviewers").removeAttr("disabled");
    }, fail: function(jqXHR, textStatus) {
    }};
    thingy.success(realnamecache.values);
};

function featuredStream( name, fullname, game, api, racing ) {
    $( '.featuredstream' ).html( formatStream( name, api ) );
    $("#racingFlag").remove();
    $(".sortmethod").show();
    $( '.featuredstream' ).attr( 'data-name', name );
    $( '.featuredchat' ).html( formatChat( name, api ) );
    if ( racing > 0 && ( sessionrole == "voice" || sessionrole == "halfop" || sessionrole == "op" || sessionrole == "admin" ) ) {
        var racingFlag = '<span id="racingFlag"><img src="//cdn.speedrunslive.com/images/checkered.png" /></span>';
    }
    else {
        var racingFlag = '';
    }
    if ( game == "" ) {
        $( '.featuredgame' ).html('');
    }
    else {
        $( '.featuredgame' ).html('<span class="grey"> playing </span><span class="silver">' + game + '</span><span class="grey">.</span>');
    }
    $("#left_titletext").prepend(racingFlag);
    $("#featured #ajaxstage").remove();

}

function formatStream( name, api ) {
    if ( api == "hitbox" ) {
        return '<iframe class="hitboxframe" src="http://hitbox.tv/#!/embed/' + name + '?autoplay=true" frameborder="0" allowfullscreen></iframe>';
    }
    else if ( api == "twitch" ) {
        return '<iframe class="twitchframe" frameborder="0" src="https://player.twitch.tv/?channel=' + name + '" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>';
        // return '<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=${name}" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel='+ name +'&auto_play=true" /></object>';
    }
}
function formatDivider( gamename, data ) {
    var temp = getStreamCount(gamename, data);
    if ( gamename == "(none)" ) { gamename = "<i>(none)</i>"; }
    if ( temp == 1 ) {
        s = "";
    }
    else {
        s = "s";
    }
    return '<span class="streamsdivider"><p>' + gamename + '<span class="numstreams">' + temp + ' stream' + s + '</span></p></span><span class="gamestreamlist">';
}
function getStreamCount(gamename, data) {
    for ( x in data["games"] ) {
        if ( data["games"][x].game.name.toLowerCase().trim() == gamename.toLowerCase().trim() ) {
            return data["games"][x].game.streams;
        }
    }
    return 0;
}
function formatPostDivider() {
    return '</span>';
}
function formatChat( name, api ) {
    if ($(".featuredstream").hasClass("biggerFeaturedStream")) {
        return ''; //don't log me into a chat that's hidden.
    } else {
        if ( api == "hitbox" ) {
            return '<iframe frameborder="0" scrolling="no" id="chat_embed" src="http://hitbox.tv/embedchat/' + name + '" height="400" width="361"></iframe>';
        }
        else if ( api == "twitch" ) {
            return '<iframe frameborder="0" scrolling="no" id="chat_embed" src="http://twitch.tv/' + name + '/chat" height="400" width="361"></iframe>';
        }
    }
}

function formatList( name, viewers, descrip, twitchname, img, user, game, currentlywatching, api, sort, onSRL, racing, isCustom ) {
    sort = sort || 0;
    var watching = '';
    if ( descrip == null ) descrip = '';
    descrip = streamsGetGoal(descrip);
    //if ( viewers == 1 ) viewers = '1 viewer'
    //else viewers += ' viewers'
    if ( game == "(none)" ) { game = "<i>(none)</i>"; }
    var pathArray = window.location.hash.split( '/' );
    if (currentlywatching == twitchname || ( pathArray[0] == "#!" && pathArray[1].toLowerCase() == twitchname.toLowerCase() ) )
    {
        watching = ' watching';
    }
    if ( $.inArray(twitchname, allcustomstreams) > -1 ) {
        watching += ' customstream';
    }
    if ( api == "hitbox" ) {
        apiicon = "hb_icon20px";
        streamlink = '<a href="//hitbox.tv/' + twitchname + '" target="_blank">';
    }
    else if ( api == "twitch" ) {
        apiicon = "ttv_icon20px";
        streamlink = '<a href="//twitch.tv/' + twitchname + '" target="_blank">';
    }
    if ( user.country == "None" || user.country == "" ) {
        countrytext = "";
    }
    else {
        countrytext = '<img src="http://cdn.speedrunslive.com/images/flags/' + user.country.split(' ').join("_") +'.png" class="flag" title="' + user.country + '"/>';
    }
    if ( sort == 1 ) {
        classtext = "twitchstreamerg";
    }
    else {
        classtext = "twitchstreamer";
    }
    if ( typeof sessionrole !== 'undefined' ) {
        if ( sessionrole == "op" || sessionrole == "admin" ) {
            dropdownclass = "dropdownmenuh";
        }
        else if ( sessionrole == "halfop" || sessionrole == "voice" ) {
            dropdownclass = "dropdownmenuh";
        }
        else {
            dropdownclass = "dropdownmenu";
        }
    }
    if ( typeof sessionname === 'undefined' ) {
        buttonstext = '<span class="streamerbuttons"><span class="disableddropdown">&#9660;</span></span>';
    }
    else {
        buttonstext = '<span class="streamerbuttons"><span class="dropdown">&#9660;</span><ul class="' + dropdownclass + '"><li>';
        if ( onSRL ) {
            buttonstext += '<a class="viewprofile" href="/profiles/#!/' + user.name + '/1" target="_blank">View Profile</a></li><li>';
        }
        else {
            buttonstext += '<a class="viewprofile disabled">View Profile</a></li><li>';
        }
        if ( pinplayerlist.indexOf(user.name.toLowerCase()) > -1 ) {
            buttonstext += '<a class="unpinplayer">Unpin Player</a>'
        }
        else {
            buttonstext += '<a class="pinplayer">Pin Player</a>'
        }
        if ( hideplayerlist.indexOf(user.name.toLowerCase()) > -1 ) {
            buttonstext += '</li><li><a class="unhideplayer">Unhide Player</a></li><li>';
        }
        else {
            buttonstext += '</li><li><a class="hideplayer">Hide Player</a></li><li>';
        }
        if ( pingamelist.indexOf(unsanitize(game.toLowerCase().trim())) > -1 ) {
            buttonstext += '<a class="unpingame">Unpin Game</a>'
        }
        else {
            buttonstext += '<a class="pingame">Pin Game</a>'
        }
        if ( hidegamelist.indexOf(unsanitize(game.toLowerCase().trim())) > -1 ) {
            buttonstext += '</li><li><a class="unhidegame">Unhide Game</a></li>';
        }
        else {
            buttonstext += '</li><li><a class="hidegame">Hide Game</a></li>';
        }
        if ( sessionrole == "voice" || sessionrole == "halfop" || sessionrole == "op" || sessionrole == "admin" ) {
            if ( isCustom  ) {
                buttonstext += '<li><a class="disabled">Purge</a></li>';
            }
            else {
                buttonstext += '<li><a class="purgeplayer">Purge</a></li>';
            }
        }
        /*if ( sessionrole == "op" || sessionrole == "admin" ) {
            buttonstext += '<li><a class="blacklistplayer">Blacklist</a></li>';
        }*/
        buttonstext += '</ul></span>';
    }
    return '<div class="' + classtext + watching + '" id="' + twitchname + '" data-racing="' + racing + '" data-game="' + game + '" data-fullname=' + name + ' data-srlname=' + user.name + ' data-twitchname=' + twitchname + ' data-api=' + api + '><img class="ava" src="' + img + '" alt=""/><div class="streamerinfo"><span class="name" title="' + user.name + '">' + countrytext + user.name + '</span>' + buttonstext + '<br/><span class="description"><p title="' + sanitize($("<p>" + descrip + "</p>").text()) + '">' + descrip + '</p></span><span class="game">' + game + '</span><span class="viewers">' + viewers + streamlink + '<img src="http://cdn.speedrunslive.com/images/' + apiicon +'.png" class="apiicon" title="' + twitchname + '"/></a></span></div></div>';
}

function fixDividers() {
    $(".gamestreamlist:visible").prev().addClass("streamsdivideropen");
    $(".gamestreamlist:hidden").prev().removeClass("streamsdivideropen");
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
    $( "#featured" ).prepend( '<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>' );
    $(".sortmethod").hide();
    //these will be grabbed from db from logged in users
    pinplayerlist = Array();
    pingamelist = Array();
    hideplayerlist = Array();
    hidegamelist = Array();
    customstreamsnick = "";
    customstreamsapi = "";
    importpreference = -1;
    customstreams = Array();
    if ( typeof defaultsort === "undefined" ) {
        defaultsort = 0;
    }
    savedexpandedStreams = Array();
    var updatestreams = function(){
        if ( typeof sessionrole == "undefined" ) {
            setTimeout(updatestreams, 200);
            return;
        }
        else if ( sessionrole == "anon" ) {
            importpreference = 0;
        }
        else if ( importpreference < 0 ) {
            getPinnedStreams();
            setTimeout(updatestreams, 200);
            return;
        }
        expandedStreams = Array();
        var temp = $(".gamestreamlist:visible");
        temp.prev().each(function(index) {
            expandedStreams.push($(this).children().html());
        });
        delete temp;
        // EVENT
        if (!eventsView) {
          getStreams();
        } else {
          getEventStreamsList();
        }
        // getStreams();
        setTimeout( updatestreams, 360000 );
    }
        $(window).on("hashchange", function(e) {
        var pathArray = window.location.hash.split( '/' );
        var existingStream = "";
        if (pathArray[0] == "#!" && document.getElementById(pathArray[1].toLowerCase()))
        {
            var name  = pathArray[1].toLowerCase();
	    var twitchname = $("#" + name).attr('data-twitchname');
            var srluser = $( "#" + name ).attr('data-srlname');
            var fullname = $( "#" + name ).attr('data-fullname');
            var game = $( "#" + name ).attr('data-game');
            var srlname = $( "#" + name ).attr('data-srlname');
            var racing = $("#" + name).attr('data-racing');
            var api = $( "#" + name ).attr('data-api');
            document.title = srlname + " - Streams - SpeedRunsLive";
            $( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
            $('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + srlname + '/1">'+ srlname +'</a>' );
            featuredStream(name,srlname,game,api,racing);
        }
        else
        {
            if (randomStreamAtStart)
            {
                document.title = "Streams - SpeedRunsLive";
                $( '#'+ $( '.featuredstream' ).attr( 'data-name' ) ).removeClass( 'watching' )
                $('#featuredtitle .streamer').html( '<a href="/profiles/#!/' + randomStreamSRLName + '/1">'+ randomStreamSRLName +'</a>' );
                featuredStream(randomStreamTwitchName,randomStreamSRLName,randomStreamGame,randomApi,randomRacing);
            }
        }

    });

    updatestreams();

});

// EVENT
function switchStreamsView() {
  $('#streamList div').remove();
  if (eventsView) {
    streamdata = fpStreamdata;
    getStreams();
    eventsView = !eventsView;
    $('.eventstreams').removeClass('active');
  } else {
    fpStreamdata = streamdata;
    getEventStreamsList();
    eventsView = !eventsView;
    $('.eventstreams').addClass('active');
  }
}

function getEventStreamsList() {
  $.ajax({
    type: "GET",
    url: "http://api.speedrunslive.com/frontend/events/1",
    dataType: "json",
  }).done(function(data) {
    streamdata = data._source;
    getRealNames(streamdata);
    countGames(streamdata);
  });
}
