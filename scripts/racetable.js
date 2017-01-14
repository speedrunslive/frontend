//var apiUrl = "http://api.speedrunslive.com:81";  //live
//var apiUrl = "http://beta.speedrunslive.com:81";  //beta

function renderRace(data, seasonSkill) {
	if (data.count > 0) {
		var lastComment = false;
	
		$.each(data.pastraces, function (index) {
			var date = getDate( data.pastraces[index].date * 1000 );
			data.pastraces[index].date = date;
			var goal = getGoal( data.pastraces[index].goal );
			$("#raceTemplate").tmpl(this).appendTo("#racefeed");
			var id = data.pastraces[ index ].id;
			$("#raceid" + id + " .raceGoal").append(goal);
			firstPlaceTime = data.pastraces[index].results[0].time;
			$.each(data.pastraces[index].results, function (index2) {
				if((index + 1) == data.count && (index2 + 1) == data.pastraces.length) {
					lastComment = true;
				}
				this.placetext = getPlace(this.place);
				this.timetext = getTime( this.time, this.place, firstPlaceTime );
				this.commenttext = getComment( this.message, lastComment );
				if (seasonSkill) {
					this.ratingtext = getRating( this.oldseasontrueskill, this.newseasontrueskill, this.seasontrueskillchange );
				} else {
					this.ratingtext = getRating( this.oldtrueskill, this.newtrueskill, this.trueskillchange );
				}
				$("#trTemplate").tmpl(this).appendTo("#raceid" + id);
			});
		});
	}
}

function gameImage(abbrev) {
	return ('http://c15111072.r72.cf2.rackcdn.com/' + abbrev + '.jpg');
}
function siteImage(imagename) {
	return ('http://c15111086.r86.cf2.rackcdn.com/' + imagename);
}

function getGoal (goal) {
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
				goalArray[i] = '<a onmousedown="javascript:linkClick();" href="' + prefix + goalArray[i] + '">' + goalArray[i].substr(0, 40) + '...</a>';
			} else {
				goalArray[i] = '<a onmousedown="javascript:linkClick();" href="' + prefix + goalArray[i] + '">' + goalArray[i] + '</a>';
			}
		} else {
			if (goalArray[i].length > 40) {
				goalArray[i] = '<span title="' + goalArray[i] + '">' + goalArray[i].substr(0, 40) + '...</span>';
			}
		}
	}
	return goalArray.join(' ');
}

function getCalDate( time ) {
	var myDate = new Date(time);
	var curr_date = myDate.getDate();
	var curr_month = myDate.getMonth() + 1; //months are zero based
	var curr_year = myDate.getFullYear();
	return (('' + curr_month).length < 2 ? '0' : '') + curr_month + '/' + (('' + curr_date).length < 2 ? '0' : '') + curr_date + '/' + curr_year;
	//return curr_month + ' ' + curr_date + ', ' + curr_year;
}

function getDate( time ) {
	var myDate = new Date(time);
	var curr_date = myDate.getDate();
	var curr_month = getAbbrev( myDate.getMonth() + 1 ); //months are zero based
	var curr_year = myDate.getFullYear();
	var secs = secondsToTime( ( myDate.getHours() * 60 * 60 ) + ( myDate.getMinutes() * 60 ) + ( myDate.getSeconds() ) );
	return curr_month + ' ' + curr_date + ', ' + curr_year + ' - ' + secs.h + ':' + secs.m + ':' + secs.s
}

function getAbbrev( num ) {
	if (num == 1) month = 'Jan'
	else if (num == 2) month = 'Feb'
	else if (num == 3) month = 'Mar'
	else if (num == 4) month = 'Apr'
	else if (num == 5) month = 'May'
	else if (num == 6) month = 'Jun'
	else if (num == 7) month = 'Jul'
	else if (num == 8) month = 'Aug'
	else if (num == 9) month = 'Sep'
	else if (num == 10) month = 'Oct'
	else if (num == 11) month = 'Nov'
	else if (num == 12) month = 'Dec'
	return month
}

function getPlace( place ) {
	if ( place < 9994 ) { return getRank( place ) }
	else { return '' }
};

function getRank( rank ) {
	if ( rank == 1 ) { return '<span class="gold">1st</span>' }
	else if ( rank == 2 ) { return '<span class="silver">2nd</span>' }
	else if ( rank == 3 ) { return '<span class="bronze">3rd</span>' }
	else if (( rank == 11 ) || ( rank == 12 ) || ( rank == 13 )) { return '<span class="grey">' + rank + 'th</span>' }
	else if ( rank%10 == 1 ) { return '<span class="grey">' + rank + 'st</span>' }
	else if ( rank%10 == 2 ) { return '<span class="grey">' + rank + 'nd</span>' }
	else if ( rank%10 == 3 ) { return '<span class="grey">' + rank + 'rd</span>' }
	else { return '<span class="grey">' + rank + 'th</span>' }
};

function getTime( secs, place, firstPlaceTime ) {
	if ( secs > 0 ) { 
		convert = secondsToTime( secs )
		secondsDifference = secs - firstPlaceTime
		difference = secondsToTime( secondsDifference )
		timeDifference = ''
		if( secondsDifference > 0 ) {
			return '<span title="+' + difference.h + ':' + difference.m + ':' + difference.s + '">' + convert.h + ':' + convert.m + ':' + convert.s + '</span>';
		} else { 
			return convert.h + ':' + convert.m + ':' + convert.s;
		}
	}
	else if ( place == 9999 ) { return '<span class="red">DQ</span>' }
	else if ( place == 9998 ) { return '<span class="red">Forfeit</span>' }
	else { return '' }
};

function secondsToTime( secs )
{
    var hours = Math.floor(secs / (60 * 60));
	hours += '';
	while ( hours.length < 2 ) { hours = '0' + hours };
   
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
	minutes += '';
	while ( minutes.length < 2 ) { minutes = '0' + minutes };
 
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
	seconds += '';
	while ( seconds.length < 2 ) { seconds = '0' + seconds };
   
    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}

function secondsToParsedTime( secs ) {
	var timeObj = secondsToTime( secs );
	var parsedTime = "";
	if( timeObj.h > 0 ) {
		parsedTime += timeObj.h + ":";
	}
	parsedTime += timeObj.m + ":" + timeObj.s;
	return parsedTime;
}

function timePlayed( time )
{
	if ( time >= 31556926 ) {
		var yrs = Math.floor(time/31556926);
		time = (time%31556926);
	}
	if ( time >= 604800 ) {
		var wks = Math.floor(time/604800);
		time = (time%604800);
	}
	if ( time >= 86400 ) {
      var days = Math.floor(time/86400);
      time = (time%86400);
    }
	if ( time >= 3600 ) {
      var hrs = Math.floor(time/3600);
      time = (time%3600);
    }
	if ( time >= 60 ){
		var mins = Math.floor(time/60);
		time = (time%60);
    }
	var secs = Math.floor(time);
	var obj = {
		"yrs": yrs,
		"wks": wks,
		"days": days,
		"hrs": hrs,
		"mins": mins,
		"secs": secs
    };
	
	var string = ''
	i = 1
	for ( x in obj ) {
		if ( i > 3 ) break
		num = obj[ x ]
		word = x
		if ( is_int( num ) ) {
			if ( num == 1 ) word = word.substr( 0, word.length - 1 )
			string += num + word + ' '
			i += 1
		}
	}
	return string
}

function is_int(input){
	return typeof(input)=='number'&&parseInt(input)==input;
}

function getComment( msg, lastComment ) {
	var charLimit = 60;
	if ( msg ) {
		if( lastComment && msg.length > charLimit ) {
			var msgEnd = msg.substring(charLimit, msg.length);
			var spaceIndex = msgEnd.indexOf(" ");
			msg = msg.substring( 0, charLimit + spaceIndex ) + "...";
		}
		return '<td><span class="raceMessage">&ensp;Comment&ensp;<span>' + msg + '</span></span></td>';
	}
	return '<td></td>';
};

function getRating (oldrating, newrating, ratingchange) {
	if ( newrating <= 0 ) {
		return '<td colspan="3" class="unranked">unranked</td><td class="raceFeedRatingChange"></td>';
	}
	
	if ( oldrating <= 0 ) {
		return '<td colspan="3" class="unranked">ranked!</td><td class="raceFeedRatingChange"><span class="green">+' + ratingchange + '</span></td>';
	}
	
	var fluff = '<td class="raceFeedRating">' + oldrating + ' </td><td class="raceFeedRating raceFeedArrow">&rarr;</td><td class="raceFeedRating">' + newrating + '</td>';
	
	if (oldrating > newrating) { 
		ratingchange = Math.abs(ratingchange);
		return (fluff + '<td class="raceFeedRatingChange"><span class="red">&minus;' + ratingchange + '</td>');
	}
	
	if (newrating > oldrating) {
		return (fluff + '<td class="raceFeedRatingChange"><span class="green">+' + ratingchange + '</td>');
	}
	
	return (fluff + '<td class="raceFeedRatingChange">&plusmn;0</td>');

}
