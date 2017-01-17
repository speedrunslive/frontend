function findPageNum(pathArray) {
	for (var i in pathArray) {
		if (isNumber(pathArray[i])) { 
			return pathArray[i];
		}
	}
	return false;
}

function is_int(input){
	return typeof(input)=='number'&&parseInt(input)==input;
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function updatePage(page) {
	var pathArray = window.location.hash.split( '/' );
	var found = false;
	
	for (var i in pathArray) {
		if (isNumber(pathArray[i])) { 
			pathArray[i] = page;
			found = true;
			break;
		}
	}
	if (!found) { pathArray.push(page); }
	location.hash = pathArray.join('/');
}

function setMax( count, first, middle, last, pgsize ) {
	var pathArray = window.location.hash.split( '/' );
	var page = findPageNum(pathArray);
	var max = Math.ceil( count / pgsize );
	if ((page < 1) || (page > max)) { // don't allow outside values
		updatePage(1);
	} else {
		$( '#racefeed' ).attr( 'data-max', max );
		$( '#racefeed' ).empty();
		$( 'button' ).removeClass( 'disabled' ); //allow buttons to be clicked again
		
		if ((!window.location.hash) || (page == '1')) { // if first page, disable appropriate buttons
			$('.first').addClass( 'disabled' );
			$('.prev').addClass( 'disabled' );
		}
		if (page == max) { // if last page, disable appropriate buttons
			$('.next').addClass( 'disabled' );
			$('.last').addClass( 'disabled' );
		}
		if (page == 1 || page == '') { //flavor text. can add more stuff later when we have individual game results
			$("#pasth1").html(first);
		} else if (page == max) {
			$("#pasth1").html(last + " <span class=\"grey\">&raquo;</span> Page " + page);
		} else {
			$("#pasth1").html(middle + " <span class=\"grey\">&raquo;</span> Page " + page);
		}
}
}

function buttons( path ) {
	
	$( ".first" ).click( function( event ){ 
		if ( !$( '.first' ).hasClass( 'disabled' ) ) {
			page = 1;
			$('html,body').scrollTop(0);
			updatePage(page);
		}
	});
	$( ".prev" ).click( function( event ){ 
		if ( !$( '.prev' ).hasClass( 'disabled' ) ) {
			var page = parseInt(findPageNum(window.location.hash.split( '/' )))
			if ( page > 1 ) { 
				page--;
				$('html,body').scrollTop(0);
				updatePage(page);
			}
		}
		event.stopImmediatePropagation();
	}); 
	$( ".next" ).click( function( event ){ 
		if ( !$( '.next' ).hasClass( 'disabled' ) ) {
			max = parseInt($( '#racefeed' ).attr( 'data-max' ));
			var page = parseInt(findPageNum(window.location.hash.split( '/' )));
			if ( page < max ) { 
				page++;
				$('html,body').scrollTop(0);
				updatePage(page);
			}
		}
		event.stopImmediatePropagation();
	})
	$( ".last" ).click( function( event ){ 
		if ( !$( '.last' ).hasClass( 'disabled' ) ) {
			max = $( '#racefeed' ).attr( 'data-max' ); //get max from the html attribute
			page = max;
			$('html,body').scrollTop(0);
			updatePage(page);
		}
	});
	// $(".first, .last, .next, .prev").click( function(event) {
	// 	$("html, body").animate({ scrollTop: 0 }, "slow");
	// });
}