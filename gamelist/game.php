<?php 

// Shortcuts
define('root', $_SERVER['DOCUMENT_ROOT']); // constant variable
include(root . '/scripts/srl_content.php');

// Game Abbrev
$abbrev = mysql_real_escape_string($_GET["game"]);

// Check if game exists
$q = "SELECT game_name,game_id,game_popularity FROM game WHERE game_abbrev='$abbrev'";
$r = mysql_query($q);

// If Game Exists
if (mysql_num_rows($r) > 0) { 

// Get Game Info
	$gamename = mysql_result($r, 0, 0);
	$gameid = mysql_result($r, 0, 1);
	$gamepop = mysql_result($r, 0, 2);
	
}

// If Game Doesn't Exist
else {
  die("Not a valid game name.");
}


?>

<!doctype html>
<html>
<head>
	<!-- Title -->
	<title><?php echo $gamename ?> - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Game page for <?php echo $gamename ?>" />
	<meta name="keywords" content="<?php echo $gamename?>" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	
	<div id="gamepage">

		<h1><?php echo($gamename)?></h1>
		
		<div id="playerslist">
			<?php 
			$ratings = SRLContent::ratings($gameid); ?>
		</div>

		<div id="rightside">
			<?php 
				// Game Image
				if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/images/game/'.strtolower( $abbrev ).'.jpg')) 
				{ $gameimage = $abbrev; }
				else {$gameimage = 'noimage';}

				echo('<img src="/images/game/'.strtolower( $gameimage ).'.jpg" alt="'.$gameimage.'"/>'); 
			?>

			<h1>Stats</h1>
			
				<?php
				// Get Popularity
				$q = mysql_query("SELECT COUNT(game_id) + 1 FROM game WHERE game_popularity > $gamepop");
				$gamerank = mysql_result($q, 0, 0);
				$pop = 1;

				// Display Player Total
				echo('Players: <strong>'.count($ratings).' </strong> <br/>');
				print "\n";

				// Race Total
				SRLContent::print_data("SELECT COUNT(race_id) FROM races WHERE game_game_id=$gameid", "Races: <strong>%s</strong> <br/> \n");

				// Largest Race
				SRLContent::print_data("SELECT races_race_id, COUNT(races_race_id) AS count FROM race_link LEFT JOIN races ON races_race_id=race_id WHERE game_game_id=$gameid GROUP BY races_race_id ORDER BY count DESC LIMIT 1", 'Largest Race: <strong><a href="#" onclick="javascript:window.open(\'/races/race.php?race=%s\', \'srl_large_race\', \'width=505,height=600,scrollbars=yes,resizable=no,location=no\'); return false">%s</a></strong> </br>'."\n");

				// Total time raced - this seems redundant and silly
				// SRLContent::print_data("SELECT FLOOR(SUM(time) / 86400) FROM (SELECT MAX(time) as time FROM race_link LEFT JOIN races ON races_race_id=race_id WHERE game_game_id=$gameid GROUP BY races_race_id) t", "Total Race Time: <strong>%s days</strong><br/>\n");

				// Total time played
				SRLContent::print_data("SELECT FLOOR(SUM(time) / 86400) FROM race_link LEFT JOIN races ON races_race_id=race_id WHERE game_game_id=$gameid", "Time Played: <strong>%s days</strong><br/>\n");

				// Get Tracked Goals
				$q = mysql_query("SELECT goal_id,tracked_goal FROM tracked_goals WHERE game_game_id=$gameid");
				while(($trackedgoals[] = mysql_fetch_assoc($q)) || array_pop($trackedgoals));

				// Best Times
				if ($trackedgoals) {
					
					echo ("<h1>Best race times</h1>");
					
					// Get Best Times
					foreach ($trackedgoals as $k => $v) {
						$goalid = $trackedgoals[$k]['goal_id'];
						$q = mysql_query("SELECT player_name, SEC_TO_TIME(MIN(time)) as best_time FROM players, race_link, races WHERE player_id=players_player_id AND race_id=races_race_id AND goal_goal_id=$goalid AND time > 0 GROUP BY player_name ORDER BY best_time LIMIT 5");
						while(($top5[$k][] = mysql_fetch_assoc($q)) || array_pop($top5[$k]));
					}
					
					// Best Time Tables	
					foreach ($top5 as $k => $v) {
						echo('<table class="raceResults"><col class="raceFeedPlacing"><col class="raceFeedName"><col class="raceFeedStatus"><tr><th colspan="3">'.$trackedgoals[$k]['tracked_goal'].'</th></tr>');
						print "\n";
						
						// Players and Times
						foreach ($top5[$k] as $k2 => $v2) {
								if ($k2%2 == 0) {
									echo ('<tr class="alt"><td>');
								}
								else {
									echo ('<tr><td>');
								}
							placing($k2+1, $blank, $blank);
							echo ('<td><a href="/profiles/?player='.$top5[$k][$k2]['player_name'].'">'.$top5[$k][$k2]['player_name'].'</a></td><td>'.$top5[$k][$k2]['best_time'].'</td></tr>');
						}
						
						// Close Table
						echo ('</table>');
						print "\n";
					}
				}
			?>

		</div>

			<?php
				// Game Rules
				if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/rbabot/data/gamerules/'.strtolower( $abbrev ).'rules.txt')) {
				$gamerules = $abbrev;
				echo('<div id="rules">');
				echo(file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/rbabot/data/gamerules/'.strtolower( $gamerules ).'rules.txt'));
				echo('</div>');
				}
			?>

		<div id="racefeed">

<?php

function getRaces($gameid, $raceamount) {
// Get Last 10 Races
$q = mysql_query("SELECT race_id,race_date,race_goal FROM races WHERE game_game_id=$gameid ORDER BY race_id DESC LIMIT $raceamount");
while(($racefeed[] = mysql_fetch_assoc($q)) || array_pop($racefeed));


// Race Feed
foreach ($racefeed as $k => $v) {

	// Get Entrants
	$q = mysql_query("SELECT player_name,place,SEC_TO_TIME(time) AS player_time,message,old_rating,new_rating,old_sigma,new_sigma FROM race_link,players WHERE player_id=players_player_id AND races_race_id={$v['race_id']} ORDER BY place");
	
	// Date and Time
	echo ('<span class="note">'.date('M d, Y - G:i:s',$v['race_date']).'&mdash;</span>');
	print "\n";
	
	// Race Goal and Start of Table
	echo ('<table class="raceResults"><col class="raceFeedPlacing" /><col class="raceFeedName" /><col class="raceFeedStatus" /><col class="raceFeedComment" /><tr><th colspan="8"><a href="/gamelist/game.php?game='.$gameid.'">'.$gameid.'</a></th></tr><tr><td colspan="8"><span class="note">'.$v['race_goal'].'</span></td></tr>');

	print "\n";
	
	$i = 0;
	
	// Loop through each entrant
	while ($entrant = mysql_fetch_assoc($q)) {
	
		// Alternatating bg will be done through CSS3 now.
		echo '<tr><td>';
		
		// Check for forfeit/DQ/Unknown
		if ($entrant['place'] == 9999) {
			$entrant['player_time'] = '<span class="red">Forfeit</span>';
		}
		else if ($entrant['place'] == 9998) {
			$entrant['player_time'] = '<span class="red">DQ</span>';
		}
		else if ($entrant['place'] == 9997) {
			$entrant['player_time'] = '<span class="red">Unknown</span>';
		}	
		
		// Placing if not a forfeit/DQ/Unknown
		else { 
			placing($entrant['place'], $blank, $blank);
		}
		
		// Name and Time/Forfeit/DQ/Unknown
		echo ('<td><a href="/profiles/?player='.$entrant['player_name'].'">'.$entrant['player_name'].'</a></td>');
		echo ('<td>'.$entrant['player_time'].'</td>');
		
		// Comment
		print '<td>';
		if ($entrant['message']) echo ('<span class="raceMessage">&ensp;Comment&ensp;<span>'.$entrant['message'].'</span></span>');
		print '</td>';
		
		// Rating Change
		rating(floor($entrant['old_rating'] * 40), floor($entrant['new_rating'] * 40));
		
		print "\n";
		$i++;
	}
	
	// Close Table
	echo('</table>');
	print "\n";
}
}

getRaces($gameid, 10);

?>

		
	
</div>


</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
