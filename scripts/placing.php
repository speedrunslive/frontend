<?php

function placing ($place, $forfeit, $pop) {
	$place2 = $place % 100;
	if ($forfeit) { $place = ""; }
	else if ($place == 1)    { $place = '<span class="gold">1st</span>'; }
	else if ($place == 2)    { $place = '<span class="silver">2nd</span>'; }
	else if ($place == 3)    { $place = '<span class="bronze">3rd</span>'; }
	else if ($place2 == 11)  { $place = '<span class="grey">'.$place.'th</span>'; }
	else if ($place2 == 12)  { $place = '<span class="grey">'.$place.'th</span>'; }
	else if ($place2 == 13)  { $place = '<span class="grey">'.$place.'th</span>'; }
	else if ($place%10 == 1) { $place = '<span class="grey">'.$place.'st</span>'; }
	else if ($place%10 == 2) { $place = '<span class="grey">'.$place.'nd</span>'; }
	else if ($place%10 == 3) { $place = '<span class="grey">'.$place.'rd</span>'; }
	else { $place = '<span class="grey">'.$place.'th</span>'; }
	if ($pop == 1) { echo ($place); }
	else { echo ($place.'</td>'); }
}

?>