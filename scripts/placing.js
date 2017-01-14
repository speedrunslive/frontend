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

function getTime( secs, place ) {
	if ( secs > 0 ) { 
		convert = secondsToTime( secs )
		return convert.h + ':' + convert.m + ':' + convert.s;
	}
	else if ( place == 9999 ) { return '<span class="red">Forfeit</span>' }
	else if ( place == 9998 ) { return '<span class="red">DQ</span>' }
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
	seconds += ''
	while ( seconds.length < 2 ) { seconds = '0' + seconds };
   
    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}

function comment( msg ) {
	if ( msg ) {
		return '<td><span class="raceMessage">&ensp;Comment&ensp;<span>' + msg + '</span></span></td>'
	}
	return '<td></td>'
};