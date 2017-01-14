<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Races - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Live races & streams" />
	<meta name="keywords" content="speedruns, speedrunslive" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	
	<div id="racesNav">
		<h1>Races Navigation</h1>
		<a href="#!/live" id="buttonLiveRaces">Live Races <img src="http://c15111086.r86.cf2.rackcdn.com/liveraces.png" alt="" /></a>
		<a href="#!/seasons" id="buttonSeasons">Seasons <img src="http://c15111086.r86.cf2.rackcdn.com/seasons.png" alt="" /></a>
		<a href="#!/racestats" id="buttonRaceStats">Race Stats <img src="http://c15111086.r86.cf2.rackcdn.com/pastresults.png" alt="" /></a>
		<a href="#!/pastresults/1" id="buttonPastResults">Past Results <img src="http://c15111086.r86.cf2.rackcdn.com/awards.png" alt="" /></a>
		<a href="#!/gamelist/popular" id="buttonGamelist">Game List <img src="http://c15111086.r86.cf2.rackcdn.com/gamelist.png" alt="" /></a>
		<a href="#!/bulletinboard" id="buttonBulletinBoard">Bulletin Board <img src="http://c15111086.r86.cf2.rackcdn.com/bboard.png" alt="" /></a>
		<br>
	</div>


	
	<div id="racesMain">
	</div>
	
	<script type="text/javascript" src="/scripts/jquery.scrollTo-1.4.3.1-min.js"></script>
	<script type="text/javascript" src="/scripts/jquery.countdown.min.js"></script>
	<script type="text/javascript" src="/scripts/globals.js"></script>
	<script type="text/javascript" src="/scripts/racetable.js"></script>
	<script type="text/javascript" src="liveraces.js"></script>
	<script type="text/javascript" src="races.js"></script>
	<script type="text/javascript" src="/scripts/racebuttons.js"></script>
	<script type="text/javascript" src="racehistory.js"></script>
	<script type="text/javascript" src="gamelist.js"></script>
	<script type="text/javascript" src="leaderboardpage.js"></script>
	<script type="text/javascript" src="seasons.js"></script>
	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
