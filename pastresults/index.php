<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Past Results - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Search for past race results." />
	<meta name="keywords" content="race, search" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	
	<script type="text/javascript" src="racehistory.js"></script>
		<script type="text/javascript" src="/scripts/racebuttons.js"></script>
	
	<div id="past_results">
	
	<h1 id="pasth1">Past Results</h1>
	
		<div id="pageSorter">
			<button title="First" class="disabled" id="first"><span>&nbsp;</span></button>
			<button title="Prev" class="disabled" id="prev"><span>&nbsp;</span></button>
			<button title="Next" class="disabled" id="next"><span>&nbsp;</span></button>   
			<button title="Last" class="disabled" id="last"><span>&nbsp;</span></button>
		</div>
		<div id="racefeed" data-max="0"></div>
	
	</div>
	
	<div id="globalStats">
	<h1>Global Stats</h1>
	</div>
		
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>