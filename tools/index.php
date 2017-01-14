<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Tools - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Streaming software, timers, etc." />
	<meta name="keywords" content="wsplit, scfh dsf" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	
	<div id="tools">
		<div id="tools_left">
	
			<h1>Streaming Software</h1>

			<p><a href="http://www.xsplit.com/">XSplit</a> 
			&mdash; Useful "all in one" stream software that connects to your Twitch account.</p>

			<p><a href="http://obsproject.com/">Open Broadcaster Software</a>
			&mdash; Open Broadcaster Software is free and open source software for recording and live streaming. Source code is available to everyone to contribute and improve.</p>
			
			<p><a href="http://www.ffsplit.com/">FFsplit</a> 
			&mdash; Another free XSplit alternative.</p>
			
			<p><a href="http://www.adobe.com/products/flashmediaserver/flashmediaencoder/">FMLE</a>
			&mdash; Alternative to XSplit, harder to use. If you're using FMLE you may be interested 
			also using <a href="http://mosax.sakura.ne.jp/fswiki.cgi?page=SCFH+DSF">SCFH DSF</a>, which is used usually in tandem 
			with FMLE to stream a screen region.</p>

			<h1>Video Capture Software</h1>
			
			<p><a href="http://www.amarectv.com/english/amarectv_e.htm">AmaRecTV</a>
			&mdash; Video capture &amp; preview. The AmaRec codec has a watermark but you can use any codec such as 
			<a href="http://lags.leetcode.net/codec.html">LAGS</a>. Using AmaRecTV as a video source for 
			streaming works well and enables lossless video capture and streaming simultaneously. Highly recommended 
			over Pinnacle if you use a Dazzle.</p>


			<h1>Timers</h1>

			<p><a href="http://www.mediafire.com/download/x6e6g8d0m5daa3q/WSplit_1.5.2.zip">WSplit</a> 
			&mdash; Very awesome timer that tracks how far ahead or behind you are of set checkpoints. 
			Lots of new options for image support, color customization, etc. Created by Wodanaz of SDA
			and currently maintained by Nitrofski.</p>

			<p><a href="http://jenmaarai.com/xunkar/llanfair/">Llanfair 1.2</a>
			&mdash; New alternative to WSplit.</p>
			
			<p><a href="http://livesplit.org/downloads/">LiveSplit</a> 
			&mdash; A sleek highly customizable timer for speedrunners.
			Supports SRL racing and split comparisons.</p>

			<p><a href="http://cdn.rainbowism.net/tools/BKST%20LapTool%20Eng1.2.rar">BKST + LapTool English (v1.2)</a> 
			&mdash; Translated LapTool, by Lutepin.</p>

			<p><a href="http://www.kazamit.com/index.php?p=5">Kazami Timer</a> 
			&mdash; Lightweight Japanese timer program.</p>

			<p><a href="http://www.w00ty.com/sda/timer/">w00ty SDA Timer</a> 
			&mdash; bmn's browser-based timer with real-time, NTSC, and PAL.</p>
			<p><a href="http://play.google.com/store/apps/details?id=com.msplit">Msplit</a>
			&mdash; Mobile timer for Android.</p>

		</div>
		<div id="tools_right">

			<h1>Misc.</h1>

			<p><a href="/promotion">Promote SRL!</a> 
			&mdash; Goodies for your Twitch page &amp; stream.</p>
			
			<p><a href="http://www.mirc.com/get.html">mIRC</a> 
			&mdash; IRC client. Used to connect to #speedrunslive</p>

			<p><a href="https://dl.dropbox.com/u/6998359/BingoPlannerG.zip">Dessyreqt's Bingo Planner</a>
			&mdash; Bingo planning program &amp; card fetcher.</p>


			<h1>Bingo</h1>
			
			<div id="bingo_list">
				<a class="newcard oot" href="/tools/bingo-oot/?seed=<?php echo rand(1, 999999); ?>">Zelda OoT</a>
				<a class="newcard mm" href="/tools/bingo-mm/?seed=<?php echo rand(1, 999999); ?>">Zelda MM</a>
				<a class="newcard sm" href="/tools/bingo-supermetroid/?seed=<?php echo rand(1, 999999); ?>">Super Metroid</a>
				<a class="newcard sotn" href="/tools/bingo-sotn/?seed=<?php echo rand(1, 999999); ?>">CV:SotN</a>
				<a class="newcard sm64" href="/tools/bingo-sm64/?seed=<?php echo rand(1, 999999); ?>">SM64</a>
				<a class="newcard smw" href="/tools/bingo-smw/?seed=<?php echo rand(1, 999999); ?>">SMW</a>
				<a class="newcard pokemonrb" href="/tools/bingo-redblue/?seed=<?php echo rand(1, 999999); ?>">Pok&eacute; Red/Blue</a>
				<a class="newcard pokemoncrystal" href="/tools/bingo-crystal/?seed=<?php echo rand(1, 999999); ?>">Pok&eacute; Crystal</a>
			</div>

			<div id="bingo_desc">
			
				<p>In Bingo races, everybody gets the same randomly generated 5&times;5 card of objectives. To finish the race, you must complete objectives in a line. 
				Once you get a full row, column, or diagonal, you are done.</p> 
				
				<p>You get to choose which objectives you want to complete, and avoid the ones you do not want to do. 
				Several games have Bingo. Bingo tends to work well for games that can be open-ended and require route planning.</p>
			
			</div>
			
			<h1>More Goal Generators</h1>
			
			<p><a href="/tools/sotn-equipment/">SotN Inventory Race</a> 
			&mdash; Generates a random set of equipment to go find &amp; equip.</p>
			
			<p><a href="/tools/oot-restriction/">OoT Restriction Race</a> 
			&mdash; Generates a random OoT race goal with various restrictions.</p>
			
			<!-- <p><a href="/tools/mm-bossorder/">Mega Man Boss Order Generator</a>
			&mdash; Random boss orders for the Mega Man series.</p> -->
				
		</div>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
