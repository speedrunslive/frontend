<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Majora's Mask Bingo - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates 'Bingo' boards for Zelda: Majora's Mask" />
	<meta name="keywords" content="mm bingo, zelda bingo" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<!-- get seed random, the bingo script, and this game's item list -->
	<script src="/scripts/seedrandom-min.js" type="text/javascript"></script>
	<script src="/scripts/bingo/bingo-v5.js?<?php echo time(); ?>" type="text/javascript"></script>
	<script src="/scripts/bingo/mm-bingo.js?<?php echo time(); ?>" type="text/javascript"></script>

	<div id="bingoPage">
		<div id="about_bingo">
			<h1>Majora's Mask Bingo</h1>
			
			<div id="newcards">
			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'">Normal card</a>'); ?>
			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'&mode=short">Short card</a>'); ?>
			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'&mode=long">Long card</a>'); ?>
			</div>
			<div style="clear:both"></div>
			
			<h1>About</h1>
			
			<p>This is a "Bingo" board for Majora's Mask races.</p>
			<p>To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally.</p>
			<p>The seed number is used to generate the board. Changing the seed will make a new board.</p>
			<p>You can click on the squares to turn them green and red. This may help you organize your route planning.</p>
			
			<p><strong>Basic Bingo Rules:</strong></p>

<ul><li>All bingos are from a race file, unless otherwise specified.</li>

<li>Bingo squares that tell you to do something, can be done at any time or in any cycle of 3 days.</li>

<li>Bingo squares that lists the name of something must be true by the end of your bingo. For example, the "Room Key" square means you must end with the room key in your inventory.</li>
</ul>

<p><strong>Explanation of select squares which may be confusing:</strong></p>

<ul>
<li>Hit hidden owl in West Clock Town: In West Clock Town, there is an owl statue visible near the higher exit. By hovering, you can get to and hit it. <a style="text-decoration:underline;" href="http://www.youtube.com/watch?v=dtjgLvXf4Dc">Video here</a>.</li>

<li>Clear all 3 chest icons on Termina Field Map: Get the Clock Town Map from Tingle and open the 3 chests in Termina Field to complete this goal.</li>

<li>Save Sun Mask: Complete the small sidequest with Kafei in Sakon's Hideout.</li>

<li>5 Termina Grotto HPs: Get the 5 heart pieces in Termina Field. They are all in grottos; 1 in each compass direction, as well as the gossip stone grotto HP.</li>

<li>Rock Sirloin above head: End your bingo holding the Rock Sirloin.</li>

<li>Pictograph of dancing redead: Wearing the Captain’s Hat, Garo Mask, or Gibdo Mask make Redeads start dancing. Use the pictograph box to take a picture of this.</li>

<li>All 4 Business Scrub HPs: Get the Heart Pieces next to the Business Scrubs in Southern Swamp, Mountain Village, Zora Hall, and Ikana Canyon.</li>

<li>Gold Rupee from Ikana Business Scrub: Complete the Title Deed trading quest.</li>

<li>Open 11 Pirates' Fortress area chests: Open all 11 chests scattered in the boat area, the sewers, and the fortress sections of Pirates' Fortress.</li>

<li>Lullaby Intro: Get the first part of the Goron Lullaby. Make sure not to get the full Goron Lullaby, or the square will no longer count.</li>

<li>Pictograph of Pamela outside her house: Use the pictograph box to snap a picture of Pamela, the girl that comes out of the Music Box House in Ikana every 2 minutes after the river has been restored.</li>

<li>3 bottom row songs: Get 3 songs on the bottom row of songs on the pause screen. Lullaby Intro does count.</li>

<li>Diagonal of 4 slots in item inventory: On the item inventory on the pause menu, have a diagonal of 4 items collected, from top to bottom.</li>

<li>5 HPs in East Clock Town: Obtain 5 Heart Pieces while in East Clock Town or a shop in it. Using the Postman’s Hat to get a heart piece from a mailbox in East Clock Town is allowed.</li>

<li>20 Pictures in Notebook: Obtain the Bomber's Notebook, then talk to each of the 20 people mentioned. This will put their picture on the left side of the notebook.</li>

<li>7 songs: Have 7 songs on your pause screen. This means, Scarecrow's Song, Song of Double Time, and Inverted Song of Time do NOT count towards this total.</li>

<li>Remove all blocks from Snowhead Pillar: Goron Punch out all of the blue discs from the giant pillar in Snowhead Temple.</li>

<li>Open chest of Magic Beans: After inverting Stone Tower Temple, you can ride a bean plant to 3 chests, 1 of which contains magic beans. Open it.</li>

<li>Destroy 15 ice blocks in Snowhead: Melt or break 15 blocks of ice in the temple. The freezards (ice enemies) do not count.</li>

<li>20 total stray fairies: Collect 20 stray fairies between temples. The stray fairy in Clock Town does count.</li>

<li>Activate Green Water Pump in GBT: Push the 3 green turnkey switches in Great Bay Temple to activate the jet stream in the room before the boss.</li>

<li>Cremia's Reward (hug or 200 rupees): Take Cremia's cart ride for Romani's Mask, then take it again in a later cycle to get a hug or a gold rupee from Cremia.</li>
</ul>

			 
			<p class="note">MM-Bingo itemlist by keeta. This is version 5 of the Bingo script. Written &amp; designed by Cosmo.</p>
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

			<a href="<?php echo $lang_url ?>"><img src="http://c15111086.r86.cf2.rackcdn.com/flagen.jpg" alt="English" /></a>&emsp;<a href="<?php echo $lang_url ?>&lang=jp"><img src="http://c15111086.r86.cf2.rackcdn.com/flagjp.jpg" alt="Japanese" /></a>
			
		</div>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>