<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Ocarina of Time Restriction Race - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates random goals and restrictions in Ocarina of Time" />
	<meta name="keywords" content="oot generator" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<h1>Ocarina of Time Restriction Race</h1>
	
	<a class="smallbutton" href="">Generate!</a><br/>
	
	<script src="oot-restriction.js" type="text/javascript"></script>
	<div id="oot-restriction">
		<div id="results">

		</div>
	</div>
	
	<div id="oot-desc">
		<p>The item list generated is short enough to fit as the goal, so you should not link to it.
		As it does not support a seed parameter in the url, it will always be random every time you visit.</p>
		
		<p>Generate the itemlist and then copy/paste it as the goal.</p>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>