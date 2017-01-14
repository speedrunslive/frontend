<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Symphony of the Night Bingo - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates 'Bingo' boards for Symphony of the Night" />
	<meta name="keywords" content="sotn, bingo" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<!-- get seed random, the bingo script, and this game's item list -->
	<script src="/scripts/seedrandom-min.js" type="text/javascript"></script>
	<script src="/scripts/bingo/bingo-v5.js?<?php echo time(); ?>" type="text/javascript"></script>
	<script src="/scripts/bingo/sotn-bingo.js?<?php echo time(); ?>" type="text/javascript"></script>

	<div id="bingoPage">
		<div id="about_bingo">
			<h1>Symphony of the Night Bingo</h1>

			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'">New card</a>'); ?>
			<div style="clear:both"></div>
			
			<h1>About</h1>
			
			<p>This is a "Bingo" board for Symphony of the Night races.</p>
			<p>To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally.</p>
			<p>The seed number is used to generate the board. Changing the seed will make a new board.</p>
			<p>You can click on the squares to turn them green and red. This may help you organize your route planning.</p>

			<p><span class="note">Symphony of the Night itemlist by RaneOfSoTN &amp; romscout. SRL Bingo v5 by Cosmo.</span></p>

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