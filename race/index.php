<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Race Viewer - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Live races & streams" />
	<meta name="keywords" content="speedruns, speedrunslive" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	
	<script type="text/javascript" src="/scripts/jquery.countdown.min.js"></script>
	<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
	<script>
	$(function() {
		$( "#pageContent" ).addClass('container2').removeClass('container');
	});
	</script>
	<script type="text/javascript" src="/scripts/globals.js"></script>
	<script type="text/javascript" src="/scripts/racetable.js"></script>
	<script type="text/javascript" src="racedata.js"></script>
	
	<script id="streamTemplate" type="text/x-jquery-tmpl">
		<div class="ls_namebar">
			<table><tr><td>
					<div class="ls_name"><div class="ls_padder"><strong><a href="/profiles/#!/${srlname}/1">${srlname}</a></strong></div></div>
				</td><td class="ls_icons">
					<a class="chatIcon" title="Popout Chat" onClick="window.open('http://www.twitch.tv/chat/embed?channel=${twitch}&popout_chat=true','_blank','width=400,height=550,scrollbars=no,toolbar=no')"><span>[chat]</span></a>
				</td><td class="ls_icons">
					<a class="collapseIcon ${collapseid}" title="Hide/Show"><span>[collapse]</span></a>
				</td><td class="ls_icons">
					<a class="closeStreamIcon ${closestreamid}" title="Remove Stream"><span>[remove]</span></a>
			</td></tr></table>
		</div>
		<div class="ls_objectContainer">
			<img src="http://cdn.speedrunslive.com/images/aspect-ratio-16-9.png" />
			<div>
				<iframe class="twitchracespageembed" frameborder="0" src="https://player.twitch.tv/?channel=${twitch}" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
			</div>
		</div>
    </script>
	
	<!-- right side -->
	<div id="hideControls">
	<span class="showhide_streams">hide streams</span> <span class="showhide_entrants">hide entrants</span>
	</div>

	<!-- left side -->
	<div id="gameAndGoal"><img src="http://cdn.speedrunslive.com/images/ajax-loader.gif" style="margin-top:16px;"/></div>
	
	<?php 
		$id = $_GET[ 'id' ];
		echo( '<div data-raceid="' . $id . '" id="ls_container">' );
	?>
	
	<div id="noStreams"></div>
	
	<div id="ls_sidebar">
		<div id="ls_entrants"></div>
		<div id="ls_controls">
			<span class="numperrow" id="oneperrow">1</span> <span class="numperrow" id="twoperrow">2</span> <span class="numperrow" id="threeperrow">3</span> <span class="numperrow" id="fourperrow">4</span>
		</div>
	</div>
	<div id="streamData"></div>
	<div id="streamBlock"></div>
	<div id="streamBlockList"></div>
	<div class="ls_streams">
		<div id="column1" class="ls_column"></div>
		<div id="column2" class="ls_column"></div>
		<div id="column3" class="ls_column"></div>
		<div id="column4" class="ls_column"></div>
	</div>

	</div>
	

	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
