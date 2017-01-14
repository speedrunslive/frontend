<!doctype html>
<html>
<head>


	<!-- Title -->
	<title>Stream Viewer - SpeedRunsLive</title>
	<style type="text/css">
	#myElement_wrapper, #myElement2_wrapper, #myElement3_wrapper, #myElement4_wrapper {
		display: inline-block !important;
	}
	</style>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
<script src="http://jwpsrv.com/library/HK83RiykEeS3LiIAC0MJiQ.js"></script>
<div id="myElement"></div>
<div id="myElement2"></div>

<div id="myElement3"></div>

<div id="myElement4"></div>

</div>
<div align="center">
<a class="stream1submit" onClick="updateStream1()" style="cursor: pointer">Update</a><input type="text" class="stream1"><input type="text" class="stream2"> 
<a class="stream2submit" onClick="updateStream2()" style="cursor: pointer">Update</a>
<br>
<a class="stream3submit" onClick="updateStream3()" style="cursor: pointer">Update</a><input type="text" class="stream3"><input type="text" class="stream4">
<a class="stream4submit" onClick="updateStream4()" style="cursor: pointer">Update</a>
</div>

<br>

<script type="text/javascript">
$(function() {
	$("#pageContent").width("100%");
	$("#pageContent").css("text-align", "center");
});

jwplayer("myElement").setup({
    file: "rtmp://vpn.sluip.com/srl/blank",
image: 'http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png',
    width: 640,
    height: 360
});
jwplayer("myElement2").setup({
    file: "rtmp://vpn.sluip.com/srl/blank",
image: 'http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png',
    width: 640,
    height: 360
	});


function updateStream1() {
	jwplayer("myElement").setup({
		file: "rtmp://vpn.sluip.com/srl/" + $(".stream1").val(),
		image: "http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png",
		width: 640,
		height: 360,
		autostart: true,
		mute: true,
		style: "display: inline-block"
	});
}
function updateStream2() {
	jwplayer("myElement2").setup({
		file: "rtmp://vpn.sluip.com/srl/" + $(".stream2").val(),
		image: "http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png",
		width: 640,
		height: 360,
		mute: true,
		autostart: true
	});
}
function updateStream3() {
        jwplayer("myElement3").setup({
                file: "rtmp://vpn.sluip.com/srl/" + $(".stream3").val(),
                image: "http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png",
                width: 640,
                height: 360,
                mute: true,
                autostart: true
        });
}
function updateStream4() {
        jwplayer("myElement4").setup({
                file: "rtmp://vpn.sluip.com/srl/" + $(".stream4").val(),
                image: "http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png",
                width: 640,
                height: 360,
                mute: true,
                autostart: true
        });
}

jwplayer("myElement3").setup({
    file: "rtmp://vpn.sluip.com/srl/blank",
image: 'http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png',
    width: 640,
    height: 360	

});
jwplayer("myElement4").setup({
    file: "rtmp://vpn.sluip.com/srl/blank",
image: 'http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png',
    width: 640,
    height: 360

});

</script>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
