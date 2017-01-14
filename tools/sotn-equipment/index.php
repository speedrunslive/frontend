<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Symphony of the Night Inventory Race - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates random sets of equipment to find and equip in Castlevania: Symphony of the Night" />
	<meta name="keywords" content="sotn, inventory, generator" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<h1>Symphony of the Night Inventory Race</h1>
	
	<a class="smallbutton" href="">Generate!</a><br/>
	
	<script src="sotn-inventory.js" type="text/javascript"></script>
	<div id="sotn-inventory">
		<div id="results">
			<span class="grey">You are done when you have equipped:</span><br/>
		</div>
	</div>
	
	<div id="sotn-desc">
		<p>The item list generated is short enough to fit as the goal, so you should not link to it.
		As it does not support a seed parameter in the url, it will always be random every time you visit.</p>
		
		<p>Generate the itemlist and then copy/paste it as the goal.</p>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>