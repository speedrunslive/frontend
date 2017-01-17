<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Profiles - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="SRL Profile Page" />
	<meta name="keywords" content="speedrun, profile, user" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	<script type="text/javascript" src="profile.js"></script>
		<script type="text/javascript" src="/scripts/racebuttons.js"></script>

	
	<div id="profile_name">
		<h1 id="profile_playername"></h1>

		<div id="avatarHolder"></div>

		
		<p id="buttonCollection">
			<!--<script type="text/javascript" src="http://download.skype.com/share/skypebuttons/js/skypeCheck.js"></script>
			<a title="Message Cosmo on Skype" href="skype:cosmowright?chat"><img class="icons" src="/images/skype_icon.png"/></a>-->
		</p>
		
		<!--
		<div id="awards">
		<h1>Awards</h1>
		<figure class="special_sticker" title="An award of dominance.">
			<img src="/images/awards/special_sticker.png" alt="Special Sticker"/>
			<figcaption>Special Sticker</figcaption>
		</figure>
		</div>
		-->

	</div>
	

	<div id="profile_gamelist">
		<h1>Games</h1>

		<ul id="changeStats">
		</ul>
	</div>

	<div id="profile_races">
		<h1 id="profile_stats">Stats <span class="grey">&raquo;</span> <span id="statsType">Overall</span></h1>
		
		<table id="stats"><col>
			<tr><td>First Race</td><td id="date"></td></tr>
			<tr><td>Total Races</td><td id="races"></td></tr>
			<tr><td>Time Played</td><td id="played"></td></tr> 
			<tr><td>Total Games</td><td id="games"></td></tr>
			<tr><td>Rank</td><td id="rank"></td></tr> 
			<tr><td><span class="gold">1sts</span></td><td id="firsts"></td></tr>
			<tr><td><span class="silver">2nds</span></td><td id="seconds"></td></tr> 
			<tr><td><span class="bronze">3rds</span></td><td id="thirds"></td></tr> 
			<tr><td><span class="red">Forfeits</span></td><td id="quits"></td></tr> 
			<tr><td><span class="red">DQs</span></td><td id="dqs"></td></tr>
		</table> 

		<h1 id="pasth1">Latest Races</h1> 
		<div id="pageSorter">
			<button title="First" class="disabled first" id="first"><span>&nbsp;</span></button>
			<button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button>
			<button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button>   
			<button title="Last" class="disabled last" id="last"><span>&nbsp;</span></button>
		</div>
		<div id="racefeed">

		</div>
		<div id="pageSorter">
			<button title="First" class="disabled first" id="first"><span>&nbsp;</span></button>
			<button title="Prev" class="disabled prev" id="prev"><span>&nbsp;</span></button>
			<button title="Next" class="disabled next" id="next"><span>&nbsp;</span></button>   
			<button title="Last" class="disabled last" id="last"><span>&nbsp;</span></button>
		</div>		
	</div>
		
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>