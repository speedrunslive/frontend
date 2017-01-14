<!doctype html>
<html>
<head>


	<!-- Title -->
	<title>API and RaceBot update - SpeedRunsLive</title>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

<p>
<h1>API and RaceBot update</h1>
<br>
We are now able to support races way larger than we previously have been able to. The API has been tested under load with up to 250 entrants, and we experienced only minimal slowdowns. <br>
This is in comparison to previously, where the API would slow down exponentially when entrants in a race reached 85 or above.<br></p>
<p>
While this shouldn't bring any new issues while racing, we encourage everyone who experiences problems to please inform an operator in #speedrunslive or e-mail us at staff@speedrunslive.com

</p>
<p>

<h2>Changes:</h2><br>
Optimized the race/entrant/player based API calls.<br><br>
Addressed some bugs within the ranking system in order to enable recording of larger races.<br><br>
Added regressive recording, wherein if the trueskill algorithm fails to calculate a race, it will attempt to scale back the entrants starting with last place finishers and won't remove people who forfeit or were disqualified for that race.
<ul style="margin-left:25px">	
<li>Entrants who are 'scaled back' will still be recorded in the race but will have their old rating from prior to the race copied showing a gain of +/- 0 or remaining unranked if they were previously unranked.
</li>
<li>This will happen automatically and only in cases where the race has failed to record with all entrants. Forfeits and disqualifications will always remain in the ratings list.
</li>

</ul>
</p>



<br> <br> <br>
<p><small>SpeedRunsLive staff - September 11th, 2014 </small> </p>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
