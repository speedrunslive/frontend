/* PLEASE BE CAREFUL NOT TO OVERWRITE RECENT CHANGES IN THIS FILE - esi */

var apiurl = apiUrl;
var autocompleteStreamsTimeout;

function getSession() {
    $.ajax({
        type: "GET",
        url: apiUrl + "/token",
        processData: true,
        data: {},
        dataType: "jsonp",
        jsonpCallback: "setSessionName",
    });
}

function getProfile( name ) {
    $.ajax({
        type : "GET",
        url : apiurl + "/players/" + name,
        processData : true,
        data : {},
        dataType : "jsonp",
        jsonpCallback : "renderprofile"
    });
    $.ajax({
        type: "GET",
        url: apiUrl + "/streamprefs",
        processData: true,
        data: {},
        dataType: "jsonp",
        jsonpCallback: "renderstreamprefs",
        cache: true
    });
}

function submitChange() {
    var stream = ($("input[name=api]:checked").val()=="hitbox")?$("#edithitbox").val():$("#edittwitch").val();
    $.ajax({
        type : "PUT",
        url : apiurl + "/players/" + sessionname,
        data : '{"youtube" : "' + $("#edityoutube").val() + '", "twitter" : "' + $("#edittwitter").val() + '", "channel": "' + stream + '", "api" : "' + $("input[name=api]:checked").val() + '", "country" : "' + $("#countrylist").val() + '", "casename": "' + $("#editsrlname").val() + '"}',
        dataType : "json",
        xhrFields: {
            'withCredentials': true
        },
        processData : false,
        complete: function() { submitOtherChanges(); }
    });
}
function submitOtherChanges() {
    var importpreference = 0;
    if ( $(".importtwitch").is(":checked") ) {
        importpreference += 1;
        if ( $(".importpintwitch").is(":checked") ) {
            importpreference += 1;
        }
    }
    $.ajax({
        type : "POST",
        url : apiurl + "/streamprefs",
        data : '{"frontpage_pref":' + $("input[name=frontpage]:checked").val() + ', "importpreference":' + importpreference + '}',
        dataType : "json",
        xhrFields: {
            'withCredentials': true
        },
        processData : true,
        complete: function() { location.reload(); }
    });
}
function newSubmitStreamChanges(type, action, stream) {
    console.log('{"' + type + '":["' + stream + '"]}');
    $.ajax({
        type: action,
        url: apiurl + "/streamprefs",
        data: '{"' + type + '":["' + stream + '"]}',
        dataType: "text",
        xhrFields: {
            'withCredentials': true
        },
        processData: false
    });
}

function renderprofile(data) {
    if ( data.api == "hitbox" ) {
        $(".apiselectt").removeAttr("checked");
        $(".apiselecthb").attr('checked', true);
        $("#edithitbox").val(data.channel);
        $(".twitchspan").hide();
    }
    else {
        $("#edittwitch").val(data.channel);
        $(".hitboxspan").hide();
    }
    $("#edityoutube").val( data.youtube );
    $("#edittwitter").val( data.twitter );
    $("#countrylist").val( data.country );
    $("#editsrlname").val( data.name );
    $(".apiselectt").click(function(e) {
        $(".twitchspan").show();
        $(".hitboxspan").hide();
        $("#edittwitch").val($("#edithitbox").val());
        $(".apiselecthb").removeAttr("checked");
        $(".apiselectt").attr("checked", true);
    });
    $(".apiselecthb").click(function(e) {
        $(".hitboxspan").show();
        $(".twitchspan").hide();
        $("#edithitbox").val($("#edittwitch").val());
        $(".apiselectt").removeAttr("checked");
        $(".apiselecthb").attr("checked", true);
    })
}

function renderstreamprefs(data) {
    var html = "";
    for ( x in data.pinnedstreams ) {
        html += '<option value="' + sanitizeQuotesHtml(data.pinnedstreams[x]) + '">' + sanitize(data.pinnedstreams[x]) + '</option>';
    }
    $("#editpinnedstreams").html(html);
    html = "";
    for ( x in data.hiddenstreams ) {
        html += '<option value="' + sanitizeQuotesHtml(data.hiddenstreams[x]) + '">' + sanitize(data.hiddenstreams[x]) + '</option>';
    }
    $("#edithiddenstreams").html(html);
    html = "";
    for ( x in data.pinnedgames ) {
        html += '<option value="' + sanitizeQuotesHtml(data.pinnedgames[x]) + '">' + sanitize(data.pinnedgames[x]) + '</option>';
    }
    $("#editpinnedgames").html(html);
    html = "";
    for ( x in data.hiddengames ) {
        html += '<option value="' + sanitizeQuotesHtml(data.hiddengames[x]) + '">' + sanitize(data.hiddengames[x]) + '</option>';
    }
    $("#edithiddengames").html(html);
    switch ( data.frontpage_pref ) {
        case 0:
            $(".frontpageselect").removeAttr("checked");
            $("#select0").attr("checked", true);
            break;
        case 1:
            $(".frontpageselect").removeAttr("checked");
            $("#select1").attr("checked", true);
            break;
        case 2:
            $(".frontpageselect").removeAttr("checked");
            $("#select2").attr("checked", true);
            break;
        case 3:
            $(".frontpageselect").removeAttr("checked");
            $("#select3").attr("checked", true);
            break;
        case 5:
            $(".frontpageselect").removeAttr("checked");
            $("#select1").attr("checked", true);
            $(".frontpageselect").attr("disabled", true);
            $(".frontpageselectwarning").html("You have been temporarily blacklisted from the frontpage due to a previous rule violation.")
            break;
        case 6:
            $(".frontpageselect").removeAttr("checked");
            $("#select1").attr("checked", true);
            $(".frontpageselect").attr("disabled", true);
            $(".frontpageselectwarning").html("You have been permanently blacklisted from the frontpage due to a previous rule violation.")
    }
    switch ( data.importpreference ) {
        case 0:
        default:
            $(".importpintwitch").attr("disabled", true);
            break;
        case 2:
            $(".importpintwitch").attr("checked", true);
        case 1:
             $(".importtwitch").attr("checked", true);
             break;
    }
}

function renderCountry(data) {
    clist = $("#countrylist");
    $.each(data.countries, function(index, val) {
        clist.append(
            $('<option></option>').val(val).html(val)
        );
    });
}

function getCountries() {
        $.ajax({
                type : "GET",
                url : apiurl + "/country",
                processData : true,
                data : {},
                dataType : "jsonp",
                jsonpCallback : "renderCountry",
        complete : function() { getProfile(sessionname); }
        });
}

function sanitize(text) {
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function sanitizeQuotes(text) {
    return text.replace(/"/g, '\\"');
}

function sanitizeQuotesHtml(text) {
    return text.replace(/"/g, '&quot;');
}

function addClick(klass, option) {
    if ( option == "" ) { return; }
    $('#' + klass).append('<option value="' + sanitizeQuotesHtml(option.toLowerCase()) + '">' + sanitize(option.toLowerCase()) + '</option>');
    newSubmitStreamChanges(klass.substr(4), "PUT", sanitizeQuotes(option.toLowerCase()));
    var temp = $('#' + klass + " option");
    temp.sort(function(a, b) {
        a = a.value; b = b.value;
        if ( a < b ) { return -1; }
        else if ( a > b ) { return 1; }
        else { return 0; }
    });
    console.log(temp);
    $("#" + klass).html(temp);
}

function removeClick(klass, option) {
    $('#' + klass + ' option[value="' + sanitizeQuotes(option.toLowerCase()) + '"]').remove();
    newSubmitStreamChanges(klass.substr(4), "DELETE", sanitizeQuotes(option.toLowerCase()));
}

function getPlayer(element, query) {
    $.ajax({
        type : "GET",
        url : "http://api-beta.speedrunslive.com/search/players/" + query + "?size=1",
        dataType : "json",
        success: function(data) {
            if (data.hits.hits.length == 0 ||
                data.hits.hits[0]._source.player.toLowerCase().indexOf(query.toLowerCase()) != 0) {
                $(element).val('');
            } else {
                $(element).val(query + data.hits.hits[0]._source.player.slice(query.length));
            }
        }
    });
}

$( document ).ready( function(){
    getCountries();
    $(".streamsform .add").click(function(e) {
        thingy = $(this).prev().prev().prev().prev().attr('id');
        addClick(thingy, $(this).prev().prev().children('.stream').val());
        $(this).prev().prev().children('.stream').val("");
    });
    $(".streamsform .remove").click(function(e) {
        thingy = $(this).prev().prev().prev().prev().prev().attr('id');
        removeClick(thingy, $("#" + thingy + " option:selected").val());
    });
    $(".gamesform .add").click(function(e) {
        thingy = $(this).prev().prev().prev().prev().attr('id');
        addClick(thingy, $(this).prev().prev().val());
        $(this).prev().prev().val("");
    });
    $(".gamesform .remove").click(function(e) {
        thingy = $(this).prev().prev().prev().prev().prev().attr('id');
        removeClick(thingy, $("#" + thingy + " option:selected").val());
    });
    $(".importtwitch").mouseup(function(e) {
        if ( $(this).is(":checked") ) {
            $(".importpintwitch").attr("disabled", true);
        }
        else {
            $(".importpintwitch").removeAttr("disabled");
        }
    });
    $(".formitem.streams select").click(function(e) {
        $(this).next().next().val($(this).val());
    });
    $(".autodetecthelp").tooltip({
                    tooltipClass: 'tooltipPopup',
                    show: { delay: 0 },
                    content: function() {
                        // support: IE<9, Opera in jQuery <1.7
                        // .text() can't accept undefined, so coerce to a string
                        var title = $( this ).attr( "title" ) || "";
                        return $( "<a>" + title + "</a>" ).html().replace(/\n/g, "<br />");
                    }
                });

    $(".stream").keydown(function(event) {
        if (event.which == 9 || event.which == 13) {
            if ($(this).parent().children('.autocompleteStreams:first').val() != '') {
                $(this).val($(this).parent().children('.autocompleteStreams:first').val());
            }
            $(this).parent().children('.autocompleteStreams:first').val('');
            return false;
        } else if (event.which == 8 || event.which == 46) {
            $(this).parent().children('.autocompleteStreams:first').val('');
            window.clearTimeout(autocompleteStreamsTimeout);
            var self = this;
            autocompleteStreamsTimeout = setTimeout(function () {
                getPlayer($(self).parent().children('.autocompleteStreams:first'), $(self).val());
            }, 250);
        }
    });
    $(".stream").keypress(function(event) {
        if (event.which != 0) {
            $(this).parent().children('.autocompleteStreams:first').val('');
            window.clearTimeout(autocompleteStreamsTimeout);
            var self = this;
            autocompleteStreamsTimeout = setTimeout(function () {
                getPlayer($(self).parent().children('.autocompleteStreams:first'), $(self).val());
            }, 250);
        }
    });
});
