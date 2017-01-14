<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Super Mario 64 Bingo - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates 'Bingo' boards for Super Mario 64" />
	<meta name="keywords" content="sm64 bingo, mario bingo" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<!-- get seed random, the bingo script, and this game's item list -->
	<script src="/scripts/seedrandom-min.js" type="text/javascript"></script>
	<script src="/scripts/bingo/bingo-v5.js?<?php echo time(); ?>" type="text/javascript"></script>
	<script src="/scripts/bingo/sm64-bingo.js?<?php echo time(); ?>" type="text/javascript"></script>

	<div id="bingoPage">
		<div id="about_bingo">
			<h1>Super Mario 64 Bingo</h1>

			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'">New card</a>'); ?>
			<!--<?php echo ('<a class="newcard" href="short/?seed='.mt_rand(0, 999999).'">Short card</a>'); ?>-->
			<div style="clear:both"></div>
			
			<h1>About</h1>
			
			<p>This is a "Bingo" board for Super Mario 64 races.</p>
			<p>To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally.</p>
			<p>The seed number is used to generate the board. Changing the seed will make a new board.</p>
			<p>You can click on the squares to turn them green and red. This may help you organize your route planning.</p>
			<p>For SM64-Bingo, there are some specific rules in place:</p>

			<p>Basic Rules:<br/>
			<ul>
				<li>Start from a new file and reset on GO!</li>
				<li><strong>You are done when you collect the final bowser star to beat the game, with all 5 objectives completed.</strong></li>
				<li>LBLJ and SBLJ are not allowed.  Mips Clip and other BLJs are allowed.</li>
				<li>Be careful when choosing a route to make sure you get all stars you will need.  For example, to do "All Stars in WDW" you will want to get the vanish cap.</li>
			 </ul>

			<p>Individual Item Rules:</p>
			<ul>
				<li>Lose Marios Hat - your hat must be gone at the time the game is over.</li>
				<li>X Lives - Your number of lives must be at least X when the game is over.</li>
				<li>Win 3 Character Races - Koopa the Quick in BoB, Rematch with Koopa the Quick in THI, and Penguin Race in CCM.  You must collect the stars as well.</li>
				<li>Defeat all 4 Bosses - Bobomb King, Whomp King, Hand Boss in SSL, Wiggler</li>
				<li>Peach's Slide x 2 - you must collect both stars from Peach's Slide.</li>
				<li>1 star from each course means the 15 main courses, not Bowser stages or secret stages.</li>
				<li>X coins in one stage - you must collect a star while carrying at least X coins.</li>
				<li>HMC stars - The metal cap stage does not count as an HMC star.</li>
			</ul>

			<p><span class="note">SM64 bingo by Gombill. SRL Bingo v5 by Cosmo.</span></p>

		</div>

		<div id="results">

			<table id="bingo">
			<tr>
			<td class="popout" id="tlbr">TL-BR</td>
			<td class="popout" id="col1">COL1</td>
			<td class="popout" id="col2">COL2</td>
			<td class="popout" id="col3">COL3</td>
			<td class="popout" id="col4">COL4</td>
			<td class="popout" id="col5">COL5</td>
			</tr>
			<tr>
			<td class="popout" id="row1">ROW1</td>
			<td class="row1 col1 tlbr" id="slot1"></td> 
			<td class="row1 col2" id="slot2"></td> 
			<td class="row1 col3" id="slot3"></td> 
			<td class="row1 col4" id="slot4"></td> 
			<td class="row1 col5 bltr" id="slot5"></td> 
			</tr><tr> 
			<td class="popout" id="row2">ROW2</td>
			<td class="row2 col1" id="slot6"></td> 
			<td class="row2 col2 tlbr" id="slot7"></td> 
			<td class="row2 col3" id="slot8"></td> 
			<td class="row2 col4 bltr" id="slot9"></td> 
			<td class="row2 col5" id="slot10"></td> 
			</tr><tr> 
			<td class="popout" id="row3">ROW3</td>
			<td class="row3 col1" id="slot11"></td> 
			<td class="row3 col2" id="slot12"></td> 
			<td class="row3 col3 tlbr bltr" id="slot13"></td> 
			<td class="row3 col4" id="slot14"></td> 
			<td class="row3 col5" id="slot15"></td> 
			</tr><tr> 
			<td class="popout" id="row4">ROW4</td>
			<td class="row4 col1" id="slot16"></td> 
			<td class="row4 col2 bltr" id="slot17"></td> 
			<td class="row4 col3" id="slot18"></td> 
			<td class="row4 col4 tlbr" id="slot19"></td> 
			<td class="row4 col5" id="slot20"></td> 
			</tr><tr> 
			<td class="popout" id="row5">ROW5</td>
			<td class="row5 col1 bltr" id="slot21"></td> 
			<td class="row5 col2" id="slot22"></td> 
			<td class="row5 col3" id="slot23"></td> 
			<td class="row5 col4" id="slot24"></td> 
			<td class="row5 col5 tlbr" id="slot25"></td> 
			</tr>
			<tr>
			<td class="popout" id="bltr">BL-TR</td></tr>
			</table>

			<?php // remove lang from the current url
			$lang_url = preg_replace('/&lang=[a-z]+/', '', $_SERVER['REQUEST_URI']);
			// this produces a suck url if lang is the first option, but i lazy
			?>
			
		</div>
	</div>


	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>