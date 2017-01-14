<?php

function rating ($old, $new) {
	$change = $new - $old;
	
	// If it was before rating changes were stored
	if ($old == 0) { 
		$old = '????';
		$new = '????';
		$change = '?';
	}
	
	// Set +/-
	if ($change > 0) $change = '<span class="green">+'.$change.'</span>';
	else if ($change < 0) $change = '<span class="red">&minus;'.abs($change).'</span>';
	else $change = '&plusmn;'.$change;
	
	// Echo Rating Change
	echo ('<td class="raceFeedRating">'.$old.'</td> <td class="raceFeedRating raceFeedArrow">&rarr;</td> <td class="raceFeedRating">'.$new.'</td><td class="raceFeedRatingChange">'.$change.'</td></tr>');
}

?>