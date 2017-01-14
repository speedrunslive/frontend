<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Race - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Live races & streams" />
	<meta name="keywords" content="speedruns, speedrunslive" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header2.html'); ?>
	
	<!-- right side -->
	<div id="activeTimer">
		<div id="timer">01:34:52</div>
		<span class="showhide_entrants">hide entrants</span>
		<span class="showhide_streams">hide streams</span>
	</div>

	<!-- left side -->
	<div id="gameAndGoal">
		<div class="race_img" style="background-image: url('/images/game/oot.jpg');"></div>
		<h1>The Legend of Zelda: Ocarina of Time</h1>
		<strong class="silver"><a href="/tools/oot-bingo-v4/?seed=996017">http://www.speedrunslive.com/tools/oot-bingo-v4/?seed=996017</a></strong><br/>
	</div>
	
	<div id="ls_container"> <!-- stream container -->
	
	<div id="ls_entrants">
		<div id="ls_entrantsbar"><strong>16 Entrants</strong></div> <!-- this needs to be clickable to hide it. -->
		<table>
		<colgroup>
			<col class="raceFeedPlacing">
			<col class="raceFeedName">
			<col class="raceFeedStatus">
		</colgroup>
		<tr><td class="gold">1st</td><td><a href="#">Runnerguy2489</a> <span class="small grey">1506</span></td><td>01:11:15</td></tr> <!-- ordered by finish time -->
		<tr><td class="silver">2nd</td><td><a href="#">izu</a> <span class="small grey">1351</span></td><td>01:18:15</td></tr>
		<tr><td class="bronze">3rd</td><td><a href="#">woawkoaw</a> <span class="small grey">1230</span></td><td>01:20:24</td></tr>
		<tr><td class="grey">4th</td><td><a href="#">Moltov</a> <span class="small grey">1420</span></td><td>01:25:17</td></tr>
		<tr><td class="grey">5th</td><td><a href="#">Elminster</a> <span class="small grey">1433</span></td><td>01:28:07</td></tr>
		<tr><td>   </td><td><a href="#">Cafde</a> <span class="small grey">1677</span></td><td> </td></tr> <!-- ordered by rating -->
		<tr><td>   </td><td><a href="#">zodiac</a> <span class="small grey">1342</span></td><td> </td></tr>
		<tr><td>   </td><td><a href="#">Pokey</a> <span class="small grey">1338</span></td><td> </td></tr>
		<tr><td>   </td><td><a href="#">Kosmicd12</a> <span class="small grey">1196</span></td><td> </td></tr>
		<tr><td>   </td><td><a href="#">TheOnlyOne</a> <span class="small grey">1146</span></td><td> </td></tr>
		<tr><td>   </td><td><a href="#">Wodahs-Reklaw</a> <span class="small grey">1109</span></td><td> </td></tr>
		<tr><td>   </td><td><a href="#">SD2</a> <span class="small grey">1075</span></td><td> </td></tr>
		<tr><td>   </td><td><a href="#">Tom127</a> <span class="small grey">1000</span></td><td class="red">forfeit</td></tr> <!-- ordered by rating -->
		<tr><td>   </td><td><a href="#">Firejackson</a> <span class="small grey">860</span></td><td class="red">forfeit</td></tr>
		<tr><td>   </td><td><a href="#">Aceprune1</a> <span class="small grey">780</span></td><td class="red">forfeit</td></tr>
		<tr><td>   </td><td><a href="#">zackcloud117</a> <span class="small grey">695</span></td><td class="red">forfeit</td></tr>
		</table>
		<span>
			<a href="#">Game page</a>
			<a href="#">Race chat</a>
		</span>

	</div>
	<div class="ls_streams"> <!-- this isn't an ID because I'm going to be using toggleClass to overwrite the right margin and I run into specifity issues. -->
			
		<div class="ls_row">
			<div class="liquidstream"> 
				<div class="ls_namebar">
					<table><tr><td> <!-- I use a table because of issues with the name bar being liquid -->
						<div class="ls_name"><div class="ls_padder"><strong><a href="#">Cosmo</a></strong> <b class="small">1546</b></div></div>
					</td><td class="ls_icons">
						<a class="chatIcon" title="Popout Chat" onClick="window.open('http://www.twitch.tv/chat/embed?channel=cosmowright&popout_chat=true','_blank','width=400,height=550,scrollbars=no,toolbar=no')"><span>[chat]</span></a>
					</td><td class="ls_icons">
						<a class="collapseIcon" title="Hide/Show"><span>[collapse]</span></a>
					</td></tr></table>
				</div>
				<div class="ls_objectContainer">
				  <img src="aspect-ratio-16-9.png" /> <!-- this is a hack to keep 16:9 ratio while still being liquid -->
					<div>
						<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=cosmowright" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=cosmowright&auto_play=false&start_volume=25" /></object>
					</div>
				</div>
			</div>
			
			<div class="liquidstream"> 
				<div class="ls_namebar">
					<table><tr><td> <!-- I use a table because of issues with the name bar being liquid -->
						<div class="ls_name"><div class="ls_padder"><strong><a href="#">Jiano</a></strong> <b class="small">1478</b></div></div>
					</td><td class="ls_icons">
						<a class="chatIcon" title="Popout Chat" onClick="window.open('http://www.twitch.tv/chat/embed?channel=sunjiano&popout_chat=true','_blank','width=400,height=550,scrollbars=no,toolbar=no')"><span>[chat]</span></a>
					</td><td class="ls_icons">
						<a class="collapseIcon" title="Hide/Show"><span>[collapse]</span></a>
					</td></tr></table>
				</div>
				<div class="ls_objectContainer">
				  <img src="aspect-ratio-16-9.png" /> <!-- this is a hack to keep 16:9 ratio while still being liquid -->
					<div>
						<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=sunjiano" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=sunjiano&auto_play=false&start_volume=25" /></object>
					</div>
				</div>
			</div>
		</div>
		
		<div class="ls_row">
			<div class="liquidstream ls_small"> 
				<div class="ls_namebar">
					<table><tr><td> <!-- I use a table because of issues with the name bar being liquid -->
						<div class="ls_name"><div class="ls_padder"><strong><a href="#">PEACHES_</a></strong> <b class="small">1442</b></div></div>
					</td><td class="ls_icons">
						<a class="chatIcon" title="Popout Chat" onClick="window.open('http://www.twitch.tv/chat/embed?channel=peaches__&popout_chat=true','_blank','width=400,height=550,scrollbars=no,toolbar=no')"><span>[chat]</span></a>
					</td><td class="ls_icons">
						<a class="collapseIcon" title="Hide/Show"><span>[collapse]</span></a>
					</td></tr></table>
				</div>
				<div class="ls_objectContainer">
				  <img src="aspect-ratio-16-9.png" /> <!-- this is a hack to keep 16:9 ratio while still being liquid -->
					<div>
						<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=peaches__" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=peaches__&auto_play=false&start_volume=25" /></object>
					</div>
				</div>
			</div>
			
			<div class="liquidstream ls_small"> 
				<div class="ls_namebar">
					<table><tr><td> <!-- I use a table because of issues with the name bar being liquid -->
						<div class="ls_name"><div class="ls_padder"><strong><a href="#">Runnerguy2489</a></strong> <b class="small">1397</b></div></div>
					</td><td class="ls_icons">
						<a class="chatIcon" title="Popout Chat" onClick="window.open('http://www.twitch.tv/chat/embed?channel=runnerguy2489&popout_chat=true','_blank','width=400,height=550,scrollbars=no,toolbar=no')"><span>[chat]</span></a>
					</td><td class="ls_icons">
						<a class="collapseIcon" title="Hide/Show"><span>[collapse]</span></a>
					</td></tr></table>
				</div>
				<div class="ls_objectContainer">
				  <img src="aspect-ratio-16-9.png" /> <!-- this is a hack to keep 16:9 ratio while still being liquid -->
					<div>
						<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=runnerguy2489" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=runnerguy2489&auto_play=false&start_volume=25" /></object>
					</div>
				</div>
			</div>
			
			<div class="liquidstream ls_small"> 
				<div class="ls_namebar">
					<table><tr><td> <!-- I use a table because of issues with the name bar being liquid -->
						<div class="ls_name"><div class="ls_padder"><strong><a href="#">Siglemic</a></strong> <b class="small">1301</b></div></div>
					</td><td class="ls_icons">
						<a class="chatIcon" title="Popout Chat" onClick="window.open('http://www.twitch.tv/chat/embed?channel=siglemic&popout_chat=true','_blank','width=400,height=550,scrollbars=no,toolbar=no')"><span>[chat]</span></a>
					</td><td class="ls_icons">
						<a class="collapseIcon" title="Hide/Show"><span>[collapse]</span></a>
					</td></tr></table>
				</div>
				<div class="ls_objectContainer">
				  <img src="aspect-ratio-16-9.png" /> <!-- this is a hack to keep 16:9 ratio while still being liquid -->
					<div>
						<object type="application/x-shockwave-flash" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=siglemic" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=siglemic&auto_play=false&start_volume=25" /></object>
					</div>
				</div>
			</div>
		</div>
			
	</div></div>
	
	<script type="text/javascript">
    $(function() {
		$('.showhide_entrants').toggle(
		function() {
			$("#ls_entrants").toggle('medium', function() {
				$(".ls_streams").toggleClass("ls_streams_big"); // do not animate the streams moving because they are heavy flash windows.
				$('.showhide_entrants').html("show entrants");
			});
		},
		function() {
			$(".ls_streams").toggleClass("ls_streams_big");
			$("#ls_entrants").toggle('medium', function() {
				$('.showhide_entrants').html("hide entrants");
			});
		}
		);
		
		$('.showhide_streams').toggle(
		function() {
			$(".ls_objectContainer").hide();
			$('.showhide_streams').html("show streams");
		},
		function() {
			$(".ls_objectContainer").show();
			$('.showhide_streams').html("hide streams");
		}
		);
		
		$('.collapseIcon').click(
			function() { $(this).closest('.ls_namebar').next('.ls_objectContainer').toggle(); }
		);
	});
	</script>

	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>