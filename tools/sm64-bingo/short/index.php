<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Super Mario 64 Short Bingo - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates 'Bingo' boards for Super Mario 64" />
	<meta name="keywords" content="sm64 bingo, mario bingo" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<!-- get seed random, the bingo script, and this game's item list -->
	<script src="/scripts/seedrandom-min.js" type="text/javascript"></script>
	<script src="/scripts/bingo/bingo-v5.js?<?php echo time(); ?>" type="text/javascript"></script>
	<script src="/scripts/bingo/sm64-bingo-short.js?<?php echo time(); ?>" type="text/javascript"></script>

	<div id="bingoPage">
		<div id="about_bingo">
			<h1>Super Mario 64 <strong>Short</strong> Bingo</h1>

			<?php echo ('<a class="newcard" href="../?seed='.mt_rand(0, 999999).'">Normal card</a>'); ?>
			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'">Short card</a>'); ?>
			<div style="clear:both"></div>
			
			<h1>About</h1>
			
			<p>This is a "Bingo" board for Super Mario 64 races.</p>
			<p>To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally.</p>
			<p>The seed number is used to generate the board. Changing the seed will make a new board.</p>
			<p>You can click on the squares to turn them green and red. This may help you organize your route planning.</p>

			<p>Rules for SM64 Short Bingo:</p>
			<p>Basic Rules:<br/>
			<ol>
				<li>Start from a new file and reset on GO!</li>
				<li>You are done when you finish the 5th objective. <strong>You do not have to defeat the final bowser in short bingo.</strong></li>
				<li>LBLJ and SBLJ are not allowed.  Mips Clip and other BLJs are allowed.</li>
				<li>Be careful when choosing a route to make sure you get all stars you will need.  For example, to do "All Stars in WDW" you will want to get the vanish cap.</li>
			</ol>
			<p>Individual Item Rules:</p>
			<ol>
				<li>Lose Marios Hat - your hat must be gone at the time the game is over.</li>
				<li>X Lives - Your number of lives must be at least X when the game is over.</li>
				<li>Win 3 Character Races - Koopa the Quick in BoB, Rematch with Koopa the Quick in THI, and Penguin Race in CCM.  You must collect the stars as well.</li>
				<li>Defeat all 4 Bosses - Bobomb King, Whomp King, Hand Boss in SSL, Wiggler</li>
				<li>Peach's Slide x 2 - you must collect both stars from Peach's Slide.</li>
				<li>1 star from each course means the 15 main courses, not Bowser stages or secret stages.</li>
				<li>X coins in one stage - you must collect a star while carrying at least X coins.</li>
				<li>HMC stars - The metal cap stage does not count as an HMC star.</li>
			</ol>

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

			<a href="<?php echo $lang_url ?>"><img src="http://c15111086.r86.cf2.rackcdn.com/en_flag.jpg" alt="English" /></a>&emsp;<a href="<?php echo $lang_url ?>&lang=jp"><img src="http://c15111086.r86.cf2.rackcdn.com/jp_flag.jpg" alt="Japanese" /></a>

		</div>
	</div>
  
  <script type="text/javascript">
    $(function() {
      $('.popout').click(function() {
        var mode = null;
        var line = $(this).attr('id');
        var name = $(this).html();
        var items = [];
        var cells = $('#bingo .'+ line);
        for (var i = 0; i < 5; i++) {
          items.push($(cells[i]).html());
        };
        if (mode == 'simple-stream') {
          window.open('/tools/bingo-popout-basic.html#'+ name +'='+ items.join(','),"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=420, height=180"); }
        else {
          window.open('/tools/bingo-popout.html#'+ name +'='+ items.join(','),"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=220, height=460"); }
      });
    });
  </script>


	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>