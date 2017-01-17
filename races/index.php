<!doctype html>
<html>
<head>
    <!-- Title -->
    <title>Races - SpeedRunsLive</title>
    
    <!-- Meta -->
    <meta name="description" content="Live races & streams" />
    <meta name="keywords" content="speedruns, speedrunslive" />

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
    
    <div id="racesNav">
        <h1>Races Navigation</h1>
        <a href="#!/live" id="buttonLiveRaces">Live Races <img src="http://cdn.speedrunslive.com/images/liveraces.png" alt="" /></a>
        <a href="#!/seasons" id="buttonSeasons">Seasons <img src="http://cdn.speedrunslive.com/images/seasons.png" alt="" /></a>
        <a href="#!/racestats" id="buttonRaceStats">Race Stats <img src="http://cdn.speedrunslive.com/images/pastresults.png" alt="" /></a>
        <a href="#!/pastresults/1" id="buttonPastResults">Past Results <img src="http://cdn.speedrunslive.com/images/awards.png" alt="" /></a>
        <a href="#!/gamelist/popular" id="buttonGamelist">Game List <img src="http://cdn.speedrunslive.com/images/gamelist.png" alt="" /></a>
        <a href="#!/bulletinboard" id="buttonBulletinBoard">Bulletin Board <img src="http://cdn.speedrunslive.com/images/bboard.png" alt="" /></a>
        
        <div>
        <a href="http://www.speedrunslive.com/news/get-yourself-speedrunning-agdq-2017/"> <img alt="Get Yourself Speedrunning #5" src="http://imgur.com/yVUDo16.png"> </a>
        </div>
    
    </div>
    


    
    <div id="racesMain">
    </div>
    
    <script type="text/javascript" src="/scripts/jquery.scrollTo-1.4.3.1-min.js"></script>
    <script type="text/javascript" src="/scripts/jquery.countdown.min.js"></script>
    <script type="text/javascript" src="/scripts/globals.js"></script>
    <script type="text/javascript" src="/scripts/racetable.js"></script>
    <script type="text/javascript" src="liveraces.js"></script>
    <script type="text/javascript" src="races.js"></script>
    <script type="text/javascript" src="/scripts/racebuttons.js"></script>
    <script type="text/javascript" src="racehistory.js"></script>
    <script type="text/javascript" src="gamelist.js"></script>
    <script type="text/javascript" src="leaderboardpage.js"></script>
    <script type="text/javascript" src="seasons.js"></script>
    
    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
