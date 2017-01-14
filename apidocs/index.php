<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>API Documentation - SpeedRunsLive</title>
	
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

	<div class="container">

		<div><i>Last updated 9/15/2016</i></div>

		<div>This is an overview of the SpeedRunsLive API.  This document contains all publically accessible API endpoints, how to use them, and example outputs.</div>

		<div>
			<h1>Frontend</h1>
			
			<h2>List frontpage streams</h2>

			<div>/frontend/streams</div>

			<div>Returns a list of the current streamers on the front page.  This list includes all global site filters but does NOT include any user-specific filters specified in the profile editor.  This list also does not include any streams grabbed from twitch.tv.  You will most likely be interested only in the JSON found under "_source".  Each channel in the list has the following parameters:<br /></div>

			<div>
				<ul>
					<li>display_name - The display name in Twitch.</li>
					<li>meta_game - The name of the game being played.</li>
					<li>title - The title of the stream.</li>
					<li>image - Contains one parameter, "size70" which contains a 70x70 thumbnail of the user's avatar.</li>
					<li>is_racing - 1 if the user is racing on SRL, 0 otherwise.</li>
					<li>current_viewers - The number of viewers the stream has.</li>
					<li>user_name - The user's nickname on SRL.</li>
					<li>name - The user's stream name.</li>
				</ul>
			</div>

			<div><pre>
{
    "_index": "frontend",
    "_type": "streams",
    "_id": "1",
    "_version": 316734,
    "found": true,
    "_source": {
	"channels": [{
	    "display_name": "Albrecht84",
	    "meta_game": "Super Mario RPG: Legend of the Seven Stars",
	    "title": "SMRPG Any% Speedrun",
	    "image": {
		"size70": "https://static-cdn.jtvnw.net/jtv_user_pictures/albrecht84-profile_image-c942817757a32a81-70x70.png"
	    },
	    "is_racing": 0,
	    "api": "twitch",
	    "current_viewers": 35,
	    "user_name": "Albrecht",
	    "name": "albrecht84"
	}, &lt;snip&gt;]
    }
}</pre></div>

			<h2>Get donation status</h2>

			<div>/frontend/donate</div>

			<div>Returns the amount of donations SRL has received for the month.  You will most likely only be interested in the value under "_source".  There is only one parameter:</div> 

			<div>
				<ul>
					<li>amount - The amount donated to the site in dollars, out of $65.</li>
				</ul>
			</div>

			<div><pre>
{  
   "_index":"frontend",
   "_type":"donate",
   "_id":"1",
   "_version":317890,
   "found":true,
   "_source":{  
      "amount":29.85
   }
}</pre></div>
		</div>

		<div>
			<h1>Racing</h1>
			
			<h2>List current races</h2>

			<div>/races, /races/:id</div>

			<div>Returns a list of races happening on SRL.  If the :id parameter is specified, returns only the race matching the :id parameter.  This is identical to the 5 alphanumeric identifier after #srl- in IRC.  Each race in the list has the following parameters:<br /></div>

			<div>
				<ul>
					<li>id - The 5 digit alphanumeric identifier for the race, identical to the channel identifer after #srl- on IRC.</li>
					<li>game - Information about the game:
						<ul>
							<li>id - The number for the game.</li>
							<li>name - The name for the game.</li>
							<li>abbrev - The abbreviation for the game.</li>
							<li>popularity - A ranking for the popularity of the game based on factors such as race count and entrant count - higher is more popular.</li>
							<li>popularityrank - The overall ranking in popularity for the game.</li>
						</ul>
					</li>
					<li>goal - The goal of the race.</li>
					<li>time - The server timestamp when the race began, in POSIX format.</li>
					<li>state - A number indicating the status of the race:
						<ul>
							<li>1 - Entry Open</li>
							<li>2 - Entry Closed (Countdown in progress)</li>
							<li>3 - In Progress</li>
							<li>4 - Completed</li>
							<li>5 - Recorded</li>
						</ul>
					</li>
					<li>statetext - A string describing the state.</li>
					<li>filename - If .filename is used, the filename given by RaceBot upon race start.</li>
					<li>numentrants - The number of entrants in the race.</li>
					<li>entrants - A named array of entrants in the race:
						<ul>
							<li>displayname - The entrant's display name</li>
							<li>place - The place the entrant placed in.  999x values are special:
								<ul>
									<li>9994 - Ready</li>
									<li>9995 - Quit</li>
									<li>9996 - DQ</li>
								</ul>
							</li>
							<li>time - The entrant's finish time, in seconds.  Negative values are special:
								<ul>
									<li>-1 - Quit</li>
									<li>-2 - DQ</li>
									<li>-3 - Ready</li>
									<li>Occasionally, other values are used to omit a time</li>
								</ul>
							</li>
							<li>message - A string containing an entrant's .comment.</li>
							<li>statetext - A string describing the entrant's state.</li>
							<li>twitch - The entrant's stream username (should be twitch if they're racing but this isn't guaranteed).</li>
							<li>trueskill - The entrant's trueskill rank.</li>
						</ul>
					</li>
				</ul>
			</div>

			<div><pre>
{  
   "id":"dmpz2",
   "game":{  
      "id":3680,
      "name":"Dragon Warrior (NES) Hacks",
      "abbrev":"dwhacks",
      "popularity":67.000000,
      "popularityrank":14
   },
   "goal":"Ultra Randomizer v1.2.1 (Ultra, Fast, YES) Seed 61671067",
   "time":1473992300,
   "state":3,
   "statetext":"In Progress",
   "filename":"",
   "numentrants":6,
   "entrants":{  
      "jkoper":{  
         "displayname":"jkoper",
         "place":9994,
         "time":-3,
         "message":"",
         "statetext":"Ready",
         "twitch":"jkoper",
         "trueskill":"868"
      }, &lt;snip&gt;
   }
}</pre></div>

			<h2>Get past races</h2>

			<div>/pastraces, /pastraces/:id</div>

			<div>Gets a list of past races, or if :id is specified, the :id'th past race.  Note these may not be consecutive if a race was deleted due to errors recording.  The parameters are similar to current races:</div> 

			<div>
				<ul>
					<li>count - The number of past races returned.</li>
					<li>pastraces - An array of past races:
					<ul>
						<li>id - The 5 digit alphanumeric identifier for the race, identical to the channel identifer after #srl- on IRC.</li>
						<li>game - Information about the game:
							<ul>
								<li>id - The number for the game.</li>
								<li>name - The name for the game.</li>
								<li>abbrev - The abbreviation for the game.</li>
								<li>popularity - A ranking for the popularity of the game based on factors such as race count and entrant count - higher is more popular.</li>
								<li>popularityrank - The overall ranking in popularity for the game.</li>
							</ul>
						</li>
						<li>goal - The goal of the race.</li>
						<li>date - The server timestamp when the race was recorded, in POSIX format.</li>
						<li>numentrants - The number of entrants in the race.</li>
						<li>results - An array of entrants in the race:
							<ul>
								<li>race - The race ID again.</li>
								<li>place - The place the entrant placed in.  999x values are special:
									<ul>
										<li>9994 - Ready</li>
										<li>9995 - Quit</li>
										<li>9996 - DQ</li>
									</ul>
								</li>
								<li>player - The entrant's display name.</li>
								<li>time - The entrant's finish time, in seconds.  Negative values are special:
									<ul>
										<li>-1 - Quit</li>
										<li>-2 - DQ</li>
										<li>-3 - Ready</li>
										<li>Occasionally, other values are used to omit a time</li>
									</ul>
								</li>
								<li>message - A string containing an entrant's .comment.</li>
								<li>oldtrueskill - The entrant's trueskill rank before the race.</li>
								<li>newtrueskill - The entrant's trueskill rank after the race.</li>
								<li>trueskillchange - newtrueskill minus oldtrueskill.</li>
								<li>oldseasontrueskill - The entrant's season trueskill before the race, or 0 if the race was out of season.</li>
								<li>newseasontrueskill - The entrant's season trueskill after the race, or 0 if the race was out of season.</li>
								<li>seasontrueskillchange - newseasontrueskill minus oldseasontrueskill
							</ul>
						</li>
					</ul>
					</li>
				</ul>
			</div>

			<div><pre>
{  
   "count":1,
   "pastraces":[  
      {  
         "id":"62417",
         "game":{  
            "id":695,
            "name":"Half-Life 2",
            "abbrev":"hl2",
            "popularity":30.000000,
            "popularityrank":37
         },
         "goal":"beat the game (new engine, no scripts)",
         "date":"1376199023",
         "numentrants":7,
         "results":[  
            {  
               "race":62417,
               "place":1,
               "player":"esi",
               "time":29467,
               "message":"never racing a game this long again",
               "oldtrueskill":0,
               "newtrueskill":698,
               "trueskillchange":698,
               "oldseasontrueskill":0,
               "newseasontrueskill":0,
               "seasontrueskillchange":0
            }, &lt;snip&gt;
	 ]
     
   ]
}</pre></div>
		</div>
	</div>
	
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
