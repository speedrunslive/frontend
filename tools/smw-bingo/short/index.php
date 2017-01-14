<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Super Mario World Bingo - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates 'Bingo' boards for Super Mario World" />
	<meta name="keywords" content="smw bingo, mario bingo" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<!-- get seed random, the bingo script, and this game's item list -->
	<script src="/scripts/seedrandom-min.js" type="text/javascript"></script>
	<script src="/scripts/bingo/bingo-v5.js?<?php echo time(); ?>" type="text/javascript"></script>
	<script src="/scripts/bingo/smw-bingo-short.js?<?php echo time(); ?>" type="text/javascript"></script>

	<div id="bingoPage">
		<div id="about_bingo">
			<h1>Super Mario World <strong>Short</strong> Bingo</h1>

			<?php echo ('<a class="newcard" href="smw-bingo.php?seed='.mt_rand(0, 999999).'">Normal card</a>'); ?>
			<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'">Short card</a>'); ?>
			<div style="clear:both"></div>
			
			<h1>About</h1>
			
			<p>This is a "Bingo" board for Super Mario World races.</p>
			<p>To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally.</p>
			<p>The seed number is used to generate the board. Changing the seed will make a new board.</p>
			<p>You can click on the squares to turn them green and red. This may help you organize your route planning.</p>
			
			<p><strong>RULES:</strong></p>
			
			<p><strong>NORMAL BINGO</strong> - You must KILL BOWSER after completing your 5 goals.  Take any route to Bowser's castle.  Timing ends when the last mecha-koopa hits Bowser.</p>

			<p><strong>SHORT BINGO</strong> - You DO NOT need to kill Bowser.  Timing ends when you complete the last goal.
			If the last goal is an exit, timing ends when you touch that exit bar or keyhole.  If the
			last goal is a boss, timing ends when the whistle blows.  If the last goal is an item, such
			as a moon or 1-up, timing ends when you touch that item.</p>

			<p><strong>Rules for all Bingo versions:</strong></p>

			<ul>
			<li>For goals that don't require you to beat the level (e.g. moons, bonus rooms, coins), you
			may die or start-select to leave the stage once your objective is obtained.</li>

			<li>For goals that require you to beat a level but don't say which exit to use, you may use either exit.</li>

			<li>For "no yoshi" goals if you enter a level with yoshi you must hop off him immediately.  
			Carrying a baby yoshi is allowed.</li>

			<li>For "small mario" goals, if you grab a powerup you must get hit by the first available enemy.  If you enter
			a level as large mario you must get hit by the first enemy.  If you hit a midway gate you
			must kill mario.</li>

			<li>For "no flying" goals, you may float with the cape.  You may NOT jump to a height that exceeds mario's normal 
			running jump (without cape), and you may not do the "cape bounce" move (i.e pressing back on the d-pad while mario 
			is in flying mode).  You may not fly with yoshi.</li>

			<li>For "no cape" goals if you collect a cape, or if you begin the level with a cape, you must get hit by the first available enemy.</li>

			<li>You can not repeat the same stage multiple times to accomplish the same goal.  For
			example: getting the same moon or defeating the same reznor repeatedly.</li>

			<li>"Ghost house exits" - Can take 2 different exits from a single house.  Can not reuse the 
			same exit.  Donut Secret House counts as a ghost house, but Sunken Ghost Ship does not.</li>

			<li>"Bonus rooms" - These are the vertical rooms with several levels where you have to get
			three O's to get 1-up.   You do not need to go thru the bonus room or hit any of the blocks.
			You can just leave from the lower pipe.</li>

			<li>"Bonus game" - This is the 9-block matching game (100 stars).  Get all 9 blocks the same.</li>

			<li>"Star-block 1-ups" - These are the green blocks with the star on them (aka Bonus Blocks).
			You need to collect 30 coins in the level before hitting it to gain a 1-up.</li>

			<li>"Hidden 1-ups" - These are 1-ups that appear when you run by a certain spot.  
			You must collect the 1-up.  You can only get 1 hidden 1-up per stage.</li>

			<li>"Multi-powerup blocks" - These are the transparent blocks that 
			cycle through different powerups.  You must grab the star from it.</li>

			<li>"1-up from pink-berry cloud" - Eat 2 pink berries with yoshi to make a cloud appear.  
			Collect all the coins dropped by the cloud to make a 1-up appear.  You must collect the 1-up.</li>

			<li>"Mushroom from red berries" - Eat 10 red berries with yoshi to make a mushroom appear.  
			You must collect the mushroom.  
			(If you are also doing a "small mario" goal for that stage you must get hit immediately after collecting the mushroom.)</li>

			<li>"Pacifist" - You can not kill, damage, or stun any enemies.  You are allowed to spin-jump on
			enemies that do not react to it, and you may jump on such enemies with yoshi.  
			If you break the rules you must kill mario.  
			Popping bubbles is allowed (even if the enemy inside drops into a pit).</li>

			<li>"Coinless" - You must begin at the start of the level (not the midway gate).  
			If you collect a coin or yoshi coin you must kill mario.  
			If you already touched the midway gate before collecting any coins, you are allowed to continue from the midway gate.  
			Any exit is allowed, unless the goal states otherwise.</p>

			<li>"Beat FOI 4 without getting Lakitu 1-up; no flying" - If you touch the 1-up offered by Lakitu you must
			kill mario or start-select to exit the level.</li>

			<li>"All exits in Forest Of Illusion" - there are 14 exits total:<br/>
			FOI1(a,b), FOI2(a,b), FOI3(a,b), FOI4(a,b), Ghost House (a,b), Forest secret area, Fortress,
			Castle 5, Blue Switch</li>

			<li>"X swimming stages" - Any exit is acceptable.  See list below for which stages are considered swimming stages 
			(i.e. those that contain water up to the ceiling somewhere).</li>

			<li>The Sunken Ghost Ship counts as part of Valley Of Bowser.</li>

			<li>"300 coins on Yellow Switch" - You should be BIG mario for this.  There is no way to replay
			this level if you fail (besides waiting for the timer to run out), so you may wish to save
			right before attempting this so that you can reset if you fail.  For example you could play
			World 1 in this order:  YI1, YI2, YI3, YI4, Castle 1, Yellow Switch.</li>

			<li>TIP: When flying with yoshi, if you want to prevent yoshi from swallowing the shell you can
			periodically land, HOLD DOWN while spitting out the shell, and then re-eat it.</li>

			<li>TIP: "Cheese Bridge - coinless" - To get past the yellow pipe (after midway gate) do a non-pspeed 
			running jump of full height from the right edge of the preceding wooden platform.  Do not land on the the yellow pipe.</li>
			</ul>

			<p><strong>LOCATIONS:</strong></p>

			<strong>MOONS</strong> (7)
			<ul>
				<li>Yoshi's Island 1 - On a cloud after the midway gate.</li>
				<li>Donut Plains 4 - On a cloud near the end of the level.</li>
				<li>Vanilla Dome 3 - (need cape) Up and left from the first two yellow pipes.</li>
				<li>Cheese Bridge Area - Between the regular exit and the secret exit.</li>
				<li>Forest Ghost House - In the exit screen of the secret exit.</li>
				<li>Chocolate Island 1 - (need cape) On a cloud above the bowl-shaped valley after the midway gate.  
				You must take the first canon-pipe for the moon to appear</li>
				<li>Valley of Bowser 1 - Up and to the right of midway gate.</li>
			</ul>
	
			<strong>STAR BLOCKS</strong> (4) - green block with a star on it.  get 30 coins on stage for 1-up.
			<ul>
				<li>Yoshi's Island 3</li>
				<li>Donut Plains 3</li>
				<li>Butter Bridge 1</li>
				<li>Chocolate Island 3</li>
			</ul>

			<strong>BONUS ROOMS</strong> (9)
			<ul>
				<li>Donut Plains 1 - (need yellow switch) First pipe</li>
				<li>Donut Plains 3 - Yellow pipe in the air</li>
				<li>Castle 2 - (need cape) Fly up at the very start</li>
				<li>Vanilla Dome 3 - Up and right from the first two yellow pipes (can yoshi-jump if no cape)</li>
				<li>Castle 4 - Invisible ceiling before first door - go up and right</li>
				<li>Forest Of Illusion 3 - Second blue pipe</li>
				<li>Chocolate Island 5 - First pipe</li>
				<li>Valley Of Bowser 1 - Climb vine near end of stage</li>
				<li>Valley Of Bowser 3 - First yellow pipe</li>
			</ul>

			<strong>YOSHI WING EXITS</strong> (3) - wings that take you and yoshi to coin heaven.
			<ul>
				<li>Cheese Bridge Area</li>
				<li>Valley Of Bowser 2</li>
				<li>Way Cool</li>
			</ul>

			<strong>SWIMMING STAGES</strong> (7) - stages that contain water up to the ceiling.
			<ul>
				<li>Donut Secret 1</li>
				<li>Vanilla Dome 2</li>
				<li>Vanilla Fortress</li>
				<li>Soda Lake</li>
				<li>Forest Of Illusion 2</li>
				<li>Sunken Ghost Ship</li>
				<li>Star World 2</li>
			</ul>

			<strong>KEYHOLE EXITS</strong> (18)<br/>
			<ul>
				<li>Donut Plains 1, Donut Plains 2, Donut Secret 1</li>
				<li>Vanilla Dome 1, Vanilla Dome 2</li>
				<li>Forest 1, Forest  2, Forest 3, Forest 4</li>
				<li>Chocolate Island 2</li>
				<li>Valley Of Bowser 2, Valley Of Bowser 4, Valley Ghost House</li>
				<li>Star World 1, Star World 2, Star World 3, Star World 4, Star World 5</li>
			</ul>

			<strong>MULTI-POWERUP BOXES</strong> (7)
			<ul>
				<li>Donut Plains 4</li>
				<li>Vanilla Dome 2</li>
				<li>Cookie Mountain (need yoshi/cape/shell)</li>
				<li>Forest Of Illusion 1</li>
				<li>Forest Of Illusion 4</li>
				<li>Chocolate Island 5 (need yoshi/cape/shell)</li>
				<li>Groovy</li>
			</ul>

			<strong>HIDDEN 1-UPS</strong> (11) - check the <a href="http://deanyd.net/smw/index.php?title=Bingo">stage maps</a> for locations.
			<ul>
				<li>Yoshi's Island 4 - above where you start</li>
				<li>Donut Plains 4 - on a cloud above the canon-pipe</li>
				<li>Vanilla Fortress - second to last ball-and-chain</li>
				<li>Vanilla Ghost House - the first set of short platforms</li>
				<li>Vanilla Dome 4 - Below the first ? block</li>
				<li>Cookie Mountain - on clouds by the tall pipe</li>
				<li>Forest Of Illusion 3 - on top of the scattered ? blocks</li>
				<li>Castle 6 - in the chamber with the last 3 saws</li>
				<li>Valley Of Bowser 2 - two in dead-ends in 2nd section</li>
				<li>Castle 7 - first ball and chain above the 2nd lava pit</li>
				<li>Gnarly - one when falling next to note blocks, three below the P switches</li>
			</ul>

			<strong>PINK YOSHI BERRIES</strong> (4)
			<ul>
				<li>Cookie Mountain</li>
				<li>Forest Of Illusion 1</li>
				<li>Forest Of Illusion 3</li>
				<li>Groovy</li>
			</ul>

			<strong>RED YOSHI BERRIES</strong> (4)
			<ul>
				<li>Yoshi's Island 2</li>
				<li>Forest Of Illusion 1</li>
				<li>Forest Of Illusion 3</li>
				<li>Groovy</li>
			</ul>

			<strong>CHOCOLATE ISLAND 2</strong> (9 rooms) - takes at least 3 times through the level.
			<ul>
				<li>Room 1 has 1 version.</li>
				<li>Room 2 has 3 versions based on coins:  0-8, 9-20, 21+</li>
				<li>Room 3 has 3 versions based on time:  0-234, 235-249, 250+</li>
				<li>Room 4 has 2 versions based on yoshi coins:  0-3, 4</li>
			</ul>

		<p>List of bingo goals is here: <a href="http://pastebin.com/TjJF7uWv">http://pastebin.com/TjJF7uWv</a><br/>
		List of short bingo goals is here: <a href="http://pastebin.com/rsbaxUkf">http://pastebin.com/rsbaxUkf</a></p>

		<p><span class="note2">SMW bingo by feasel, dram55, dunnius, zozoken, bonesawwwwww. SRL Bingo v5 by Cosmo.</span></p>

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

			<a href="<?php echo $lang_url ?>"><img src="/images/en_flag.jpg" alt="English" /></a>&emsp;<a href="<?php echo $lang_url ?>&lang=jp"><img src="/images/jp_flag.jpg" alt="Japanese" /></a>

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
          window.open('bingo-popout-basic.html#'+ name +'='+ items.join(','),"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=420, height=180"); }
        else {
          window.open('bingo-popout.html#'+ name +'='+ items.join(','),"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=220, height=460"); }
      });
    });
  </script>


	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>