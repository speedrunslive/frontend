var autocompleteTimeout;

function getgames( query ) {
    $.ajax({
        type : "GET",
        url : apiUrl + "/search/games/" + query + "?size=1",
        dataType : "json",
        success: function(data) {
            if (data.hits.total > 0) {
                window.location.href = "/races/game/#!/" + data.hits.hits[0]._source.short + "/1";
            }
            else {
                $('#searchfail').fadeIn().delay(3500).fadeOut();
            }
        }
    });
}

function getplayers(query) {
    $.ajax({
        type : "GET",
        url : apiUrl + "/search/players/" + query + "?size=1",
        dataType : "json",
        success: function(data) {
            if (data.hits.total > 0) {
                window.location.href = "/profiles/#!/" + data.hits.hits[0]._source.player + "/1";
            }
            else {
                $('#searchfail').fadeIn().delay(3500).fadeOut();
            }
        }
    });
}

function submitSearch() {
    var search = $('#headersearch').val().toLowerCase();
    var type = $('#headersearchtype').val();
    if (type == "game") {
        getgames(search);
    }
    else {
        getplayers(search);
    }
}

function searchbuttons() {
    $("#headersearch").keypress(function(event) {
        if ( event.which == 13 ) {
            submitSearch();
        }
        else if ( event.which != 0 ) {
            hideAutocompletes();
            window.clearTimeout(autocompleteTimeout);
            autocompleteTimeout = setTimeout('showAutocompletes()', 350);
        }
    });
    $("#headersearch").focusout(function(event) {
        hideAutocompletesAfterMouseUp(); // we want link clicks to actually register
    });
    $("#headersearchtype").selectbox({
        speed: 0
    });
    $(".sbOptions a").click(function(event) {
        window.clearTimeout(autocompleteTimeout);
        autocompleteTimeout = setTimeout('showAutocompletes()', 350);
    })
    $(".sbOptions a").focusout(function(event) {
        hideAutocompletesAfterMouseUp(); // for consistency
    })
}

function showAutocompletes() {
    if ( $("#headersearch").val().length > 0 ) {
        if ( $("#headersearchtype").val() == "game" ) {
            $.ajax({
                type : "GET",
                url : apiUrl + "/search/games/" + $("#headersearch").val().toLowerCase() + "?size=3",
                dataType : "json",
                success: function(data) {
                    switch (data.hits.hits.length) {
                        case 3:
                            $(".autocomplete3 > a > span").text(data.hits.hits[2]._source.name);
                            $(".autocomplete3 > a").attr("href", "/races/game/#!/" + data.hits.hits[2]._source.short + "/1")
                        case 2:
                            $(".autocomplete2 > a > span").text(data.hits.hits[1]._source.name);
                            $(".autocomplete2 > a").attr("href", "/races/game/#!/" + data.hits.hits[1]._source.short + "/1")
                        case 1:
                            $(".autocomplete1 > a > span").text(data.hits.hits[0]._source.name);
                            $(".autocomplete1 > a").attr("href", "/races/game/#!/" + data.hits.hits[0]._source.short + "/1")
                            autocompleteResults(data.hits.hits.length);
                            $(".autocompleteDropdown").show();
                            cleanupTitles();
                            break;
                        default:
                            //do nothing
                    }
                }
            });
        }
        else {
            $.ajax({
                type : "GET",
                url : apiUrl + "/search/players/" + $("#headersearch").val().toLowerCase() + "?size=3",
                dataType : "json",
                success: function(data) {
                    switch (data.hits.hits.length) {
                        case 3:
                            $(".autocomplete3 > a > span").text(data.hits.hits[2]._source.player);
                            $(".autocomplete3 > a").attr("href", "/profiles/#!/" + data.hits.hits[2]._source.player + "/1")
                        case 2:
                            $(".autocomplete2 > a > span").text(data.hits.hits[1]._source.player);
                            $(".autocomplete2 > a").attr("href", "/profiles/#!/" + data.hits.hits[1]._source.player + "/1")
                        case 1:
                            $(".autocomplete1 > a > span").text(data.hits.hits[0]._source.player);
                            $(".autocomplete1 > a").attr("href", "/profiles/#!/" + data.hits.hits[0]._source.player + "/1")
                            autocompleteResults(data.hits.hits.length);
                            $(".autocompleteDropdown").show();
                            cleanupTitles();
                            break;
                        default:
                            //do nothing
                    }
                }
            });
        }
    }
}

function hideAutocompletesAfterMouseUp() {
    $("body").mouseup(function() {
        setTimeout('hideAutocompletes()', 100);
    });
}

function hideAutocompletes() {
    $(".autocompleteDropdown").hide();
    clearTimeout(autocompleteTimeout);
}

function setupAutocomplete() {
    $(".autocompleteDropdown").hide();
}

function autocompleteResults(n) {
    switch (n) {
        case 1:
            $(".autocomplete1").show();
            $(".autocomplete2").hide();
            $(".autocomplete3").hide();
            break;
        case 2:
            $(".autocomplete1").show();
            $(".autocomplete2").show();
            $(".autocomplete3").hide();
            break;
        case 3:
            $(".autocomplete1").show();
            $(".autocomplete2").show();
            $(".autocomplete3").show();
            break;
    }
}

function cleanupTitles() {
    containerWidth = $(".autocomplete1 > a").width()
    if ( $(".autocomplete1 > a > span").width() > containerWidth ) {
        $(".autocomplete1 > a").attr("title", $(".autocomplete1 > a").text());
    }
    else {
        $(".autocomplete1 > a").removeAttr("title");
    }
    if ( $(".autocomplete2 > a > span").width() > containerWidth ) {
        $(".autocomplete2 > a").attr("title", $(".autocomplete2 > a").text());
    }
    else {
        $(".autocomplete2 > a").removeAttr("title");
    }
    if ( $(".autocomplete3 > a > span").width() > containerWidth ) {
        $(".autocomplete3 > a").attr("title", $(".autocomplete3 > a").text());
    }
    else {
        $(".autocomplete3 > a").removeAttr("title");
    }
}

$( document ).ready( function(){
    searchbuttons();
    setupAutocomplete();
});
