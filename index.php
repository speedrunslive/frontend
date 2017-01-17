<!doctype html>
<html>
<head>
    <!-- Title -->
    <title>Streams - SpeedRunsLive</title>

    <!-- Meta -->
    <meta name="description" content="Speedrunning live-streams." />
    <meta name="keywords" content="stream, live" />

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

    <script type="text/javascript" src="streams.js?5"></script>
    <div id="featured">
        <div class="featuredstreamcontainer">
        <h1 id="featuredtitle"><span id="left_titletext"><span class="streamer"></span><span class="featuredgame"></span></span></h1>
        <div class="featuredstream" data-name="none"></div>
        </div>
        <div class="featuredchat"></div>
        <div id="promo">
            <a href="http://www.speedrunslive.com/news/get-yourself-speedrunning-agdq-2017/"> <img alt="Get Yourself Speedrunning #5" src="http://imgur.com/Rxwn1rc.png"> </a>
        </div>
        <div>&nbsp;</div>
    
    <div class="sortmethod">Sort by: <input type="radio" name="sort" value="viewers" class="sortbyviewers" checked> Viewers <input type="radio" name="sort" value="games" class="sortbygames"> Games
            <input type="text" name="search" class="streamsearch" placeholder="Search">
            <!--<span name="switchStreamView" class="eventstreams" onclick="switchStreamsView();">12 Hour Challenge</span>-->
        </div>
    </div>
    <div id="streamList"></div>


    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
