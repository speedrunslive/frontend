<!doctype html>

<html>
  <head>
        <title>Donkey Kong 64 Bingo - SpeedRunsLive</title>

        <!-- Meta -->
        <meta name="description" content="Generates 'Bingo' boards for Donkey Kong 64" />
        <meta name="keywords" content="dk64 bingo, donkey kong bingo, donkey kong 64 bingo" />
              <!-- Encoding -->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


        <link rel="icon" type="image/png" href="http://cdn.speedrunslive.com/images/favico.png">        

        <?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

 <script src="seedrandom-min.js" type="text/javascript"></script>
 <script src="bingo-v5.js?1340062450" type="text/javascript"></script>
 <script src="dk64-bingolist-beta-v2.js?1340062450" type="text/javascript"></script>




<div id="bingoPage">
<div id="about_bingo">
<h1>Donkey Kong 64 Bingo</h1>
<h2>Generate a new card</h2>

 <p><span class="note">Please note that if you got linked to this page as your goal, you are not allowed to use a different card.</span></p>


<div id="newcards">
<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'">Normal card</a>'); ?>
<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'&mode=short">Short card</a>'); ?>
<?php echo ('<a class="newcard" href="?seed='.mt_rand(0, 999999).'&mode=long">Long card</a>'); ?>
</div>
<div style="clear:both"></div>

<h1 style="margin-top:10px; padding-top:0px">About DK64 Bingo</h2>
<p>This is a "Bingo" board for Donkey Kong 64 races.</p>
<p>To win, you must complete 5 of the tasks in a row horizontally, vertically, or diagonally.</p>
<p>The seed number is used to generate the board. Changing the seed will make a new board.</p>
<p>You can click on the squares to turn them green and red. This may help you organize your route planning.</p>
 
<p>Rules for DK64 Bingo:</p>
<h2>Basic Rules:</h2>
<ol><li>Start from a new file and Hit A on GO!</li>
<li>You are done when you complete the Final Goal.</li>
<li>In almost every case, this is when the final GB/banana/key/crown/etc. touches you.</li>
<li>To avoid any confusion, if you are turning in blueprints for GBs, they do not count until the Kong starts their dance and the GB counter appears.</li>
<li>Intro Story Glitch (ISG) and Golden Banana duping are banned.</li>
 </ol>
<h2>Square Clarification:</h2>
<ol><li>Activate all warps in...: You must hit BOTH warps of each number. This includes warps in side temples such as the llama temple in Aztec or the crypt side areas in Castle.</li>
<li>For Banana Coin goals, you must have the appropriate Kong unlocked for it to count. For example, if you have '25 Coins with Tiny' as a goal, you can't simply collect 5 Rainbow Coins. She must be freed as well.</li>
<li>No Warps (Bananaport): You may not use any of the 1-5 warp pads (although activating them is fine).</li>
<li>Bonus Barrels are only the ones that leave a GB upon winning. Training Barrels or Helm minigames do NOT count.</li>
<li>Complete 4 Coin-Collecting 'Courses': You must complete any four of the following: Car Races, Beetle Slides, Minecart courses and the Seal race.</li>
<li>Spawn K. Rool Ship: You must cause the ship housing the final K. Rool fight to appear by turning in Keys 3 and 8.</li>
<li>Open K. Rool's Mouth: This refers to the 'mouth' of Crocodile Isle and turning in Keys 6 and 7.</li>
<li>When asked to collect GBs in a specific area (i.e. 5 Door Temple), blueprints collected there do NOT count.</li>
<li>Vulture GB/Owl GB: You must obtain the GB that appears as a result of completing the Rocketbarrel Ring courses in Aztec and Forest, respectively.</li>
<li>Tile Flipping GB in Crystal Caves: You must win Lanky's minigame in the small castle in Crystal Caves.</li>
<li>Chunky's Seasickness GB: Obtain the GB in the Galleon ship that causes Chunky to become seasick.</li>
<li>All Caged GBs in Jungle Japes/DK Isles: Even though there are numerous caged GBs in these levels, this refers to the five in Japes you normally collect by pounding on switches near Cranky and the five in DK Isles behind gates that you normally need the Kong's gun to obtain.</li>
<li>DK Isles Summit GB: You must Rocketbarrel up to the top of Kong Isle and complete the Bonus Barrel there.</li>
<li>Pound the X GB in DK Isles: The GB that appears when you Simian Slam the platform with an 'x' on it as Hunky Chunky.</li>
<li>Beanstalk GB: Complete Tiny's bean quest in Fungi Forest.</li>
<li>Ballroom GB: Obtain Diddy's GB in the Creepy Castle Ballroom.</li>
</ol>
 
 <p><span class="note">DK64 bingo by Cfox7, Znernicus, and Bismuth. SRL Bingo v5 by Cosmo.</span></p>

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



</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
