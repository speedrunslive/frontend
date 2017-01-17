function scrollIntoView(element, container) {
  var containerTop = $(container).scrollTop(); 
  var containerBottom = containerTop + $(container).height(); 
  var elemTop = $(element).offset().top;
  var elemBottom = elemTop + $(element).height(); 
  console.log(elemTop);
  console.log(elemBottom);
  if (elemTop < containerTop) {
    $(container).scrollTop(elemTop);
  } else if (elemBottom > containerBottom) {
    $(container).scrollTop(elemBottom - $(container).height());
  }
}

// This is run everytime the url is changed
function hashChange () {
	// Get the url information and information on the page and store them appropriately
	var pathArray = window.location.hash.split( '/' );
	clearTimeout(timerid);
	
	// This compares the information thats on the page versus whats in the url, and if they're different it reloads the page with whatever is in the url
	if (pathArray[0] == '#!') {
		if (pathArray[1].toLowerCase() == 'live') {
			$('.racesHighlighted').removeClass('racesHighlighted')
			$( '#buttonLiveRaces' ).addClass( 'racesHighlighted' );
			var updateraces = function(){ 
				var pathArray = window.location.hash.split( '/' );
				if (pathArray[1].toLowerCase() == 'live') {
					$( '#racesMain' ).html( '<div id="liveRaces"><h1>Live Races <img src="' + siteImage('ajax-loader.gif') + '" /></h1>' );
					getLiveRaces(); 
				}
					timerid = setTimeout( updateraces, 90000 ); 
			}
			updateraces();
		}
		else if (pathArray[1].toLowerCase() == 'pastresults') {
			if ($( '#past_results' ).length == 0) {
				$('.racesHighlighted').removeClass('racesHighlighted')
				$( '#buttonPastResults' ).addClass( 'racesHighlighted' );
				$( '#racesMain' ).html( '<div id="past_results"><h1 id="pasth1">Past Results</h1>\
					<div id="pageSorter"><button title="First" class="disabled first" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button><button title="Last" class="disabled last" id="last"><span>&nbsp;</span></button></div>\
					<div id="racefeed" data-max="0"></div>\
					<div id="pageSorter"><button title="First" class="disabled first" id="first"><span>&nbsp;</span></button><button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button><button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button><button title="Last" class="disabled last" id="last"><span>&nbsp;</span></button></div>' ); 
				buttons(pathArray);
				loadRaces( pathArray );
			}
			else { loadRaces( pathArray ); }
		}
			
		else if (pathArray[1].toLowerCase() == 'racestats') {
				$('.racesHighlighted').removeClass('racesHighlighted')
				$( '#buttonRaceStats' ).addClass( 'racesHighlighted' );
				$( '#racesMain' ).html( '<div id="globalStats"><h1>Global Stats</h1></div><div id="leaderboardcontainer"><h1>Most <span id="sortby">Races</span></h1><div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div><table id="siteleaderboard"></table></div>' );
				$("#siteleaderboard").hide();
				$("#siteleaderboard").html('<tr><th>Rank</th><th>Name</th><th id="lbRaces" class="litColumn lbButton">Races</th><th id="lbWins" class="lbButton">Wins</th><th id="lbTime" class="lbButton">Time</th><th id="lbGames" class="lbButton">Games</th></tr>');
				getLeaderboard( 1 );
				getStats();
		}
		
		else if (pathArray[1].toLowerCase() == 'gamelist') {
			if ($( '#gamelist' ).length == 0) {
					$('.racesHighlighted').removeClass('racesHighlighted')
					$( '#buttonGamelist' ).addClass( 'racesHighlighted' );
					$( '#racesMain' ).html( '<div id="gameSort"><h1>Sort By</h1><a href="#!/gamelist/popular" id="sortPopular">Popular</a><a href="#!/gamelist/alphabetical" id="sortAlphabetical">Alphabetical</a><!--<a href="#" id="sortSeries">Series</a><a href="#" id="sortPlatform">Platform</a>--></div><div id="gamepageloader"></div><div id="gamepage"></div><div id="gamelist"></div></div>' ); 
			}
			if (pathArray[2].toLowerCase() == 'popular') {
				$('.racesHighlighted').removeClass('racesHighlighted')
				$( '#buttonGamelist' ).addClass( 'racesHighlighted' );
				$( '#sortPopular' ).addClass( 'racesHighlighted' );
				$("#gamepage").hide();
				$("#gamelist").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
				getPopularGames();
			}
			else if (pathArray[2].toLowerCase() == 'alphabetical') {
				if ($('#alphalist').length == 0) {
					$('.racesHighlighted').removeClass('racesHighlighted')
					$( '#buttonGamelist' ).addClass( 'racesHighlighted' );
					$( '#sortAlphabetical' ).addClass( 'racesHighlighted' );
					$("#gamepage").hide();
					$("#gamelist").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>');
					getAlphaGames();
				}
				else {
					if (pathArray[3]) {
					
						$('#alphalist').scrollTo('#list' + pathArray[3].toLowerCase());
						//scrollIntoView('#list' + pathArray[3].toLowerCase(), '#alphalist');
						//var rowpos = $('#list' + pathArray[3].toLowerCase()).position();
						//$('#alphalist').scrollTop($('#alphalist').scrollTop() + rowpos.top);
					}
				}
			}
		}
		
		else if (pathArray[1].toLowerCase() == 'seasons') {
			if ($( '#seasonselectcontainer' ).length == 0) {
				$('.racesHighlighted').removeClass('racesHighlighted')
				$( '#buttonSeasons' ).addClass( 'racesHighlighted' );
				$( '#racesMain' ).html( '<img id="seasons_image" src="http://cdn.speedrunslive.com/images/seasons_big.png" /><div id="seasons_desc"></div><div id="seasonselectcontainer"></div><div id="seasongamecontainer"></div><div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>' );
				getSeasons();
			}
			var page = findPageNum(pathArray);
			
			if ((page == false) || (page < 1)) { 
				updatePage(1); 
			} 
			else { 
				getSelectedSeason(page);
			}
		}
		
		else if (pathArray[1].toLowerCase() == 'bulletinboard') {
				$('.racesHighlighted').removeClass('racesHighlighted')
				$( '#buttonBulletinBoard' ).addClass( 'racesHighlighted' );
				$( '#racesMain' ).html( '<h1>Bulletin Board</h1><p>This list is for those seeking to find an opponent to race with in a more obscure game. It is not intended for more popular games like SM64 or OOT. Use CTRL + F to find games. Entries expire 30 days after posting.</p>' );
				
				$( '#racesMain' ).append( '<a href="https://docs.google.com/forms/d/14WD1yqrRIKAMzhz08SfM44pBouDVHCzq_4aEqawc4VU/viewform" class="smallbutton">Submit</a><br/><br/>');
				
				$.get('bboard.php', function(data) {
					$( '#racesMain' ).append(data);
				});
				
				//$( '#racesMain' ).append( '<div class="bulletininfo"><div class="gamerequest"><span class="gametitle">Castlevania 64</span>&ensp;&middot;&ensp;N64 (no emulators)&ensp;&middot;&ensp;full game Carrie or Reinhardt</div><div class="requestee">Cosmo&ensp;&middot;&ensp;twitter @cosmowright</div></div>' );
				
		}
		
		else { 	window.location = '/races/#!/gamelist/popular'; }
			
				
				/*$( 'button' ).addClass( 'disabled' );
				var page = findPageNum(pathArray);
				var newgame = pathArray[2];
				
				abbrev = $( '#gameAbbrev' ).attr( 'data-abbrev' );
				if (pathArray[0] == '#!') {
					if ((!abbrev) || (abbrev != newgame)) {
						//this is for a brand new game
						if ((page == false) || (page < 1)) {
							updatePage(1); // if no page, give it a page and try again. this will cause infinite back button issue though because of the quick redirect.
						} else {
							emptyDivs();
							gamestring = getGameString( pathArray );
							renderGamePage(newgame, gamestring);
						}
					}
					else if ((page == false) || (page < 1)) { // don't allow any weird values
						updatePage(1);
					}
					else {
						$("#racefeed").html('<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>'); //ajax loader
						gamestring = getGameString( pathArray );
						getRaces(gamestring);
					}
				}
				else
				{
					$("#gamepage").empty();
					$("#gamelist").show();
				}*/
		
		//else { window.location = 'http://beta.speedrunslive.com/races/#!/live'; }
		
	}
	
	else { window.location = '/races/#!/live'; }
}

$( document ).ready( function(){
	$( "#racesMain" ).html( '<div id="ajaxstage"><div id="ajaxspin">&nbsp;</div><div id="ajaxloading">LOADING...</div></div>' );
	timerid = 0;
	hashChange();
	window.addEventListener( "hashchange", hashChange, false );
});
