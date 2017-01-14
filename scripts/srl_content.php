<?php

// Necessary stuff
require_once($_SERVER['DOCUMENT_ROOT'] . '/scripts/placing.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/scripts/rating.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/scripts/connect.php');
date_default_timezone_set('America/New_York');

class SRLContent {

  // SRLContent::race_results((integer)$race_id, [ (boolean)$game ])
  // SRLContent::race_results((array)$race_data, [ (boolean)$game ])
  // Prints a race results table for one race
  public static function race_results($v, $game = false) {
    
    if ( (!is_array($v)) && ($v == (int) $v) ) {
      // Get Race
      $q = mysql_query("SELECT race_id,race_date,race_goal,game_name,game_abbrev FROM races,game WHERE race_id=$v AND game_id=game_game_id");
      if (mysql_num_rows($q) == 0) die('Race does not exist');
      $v = mysql_fetch_assoc($q);
    }

    if ( (!is_array($v['entrants'])) || (count($v['entrants']) == 0) ) {
      // Get Entrants
      $q = mysql_query("SELECT player_name,place,SEC_TO_TIME(time) AS player_time,message,old_rating,new_rating FROM race_link,players WHERE player_id=players_player_id AND races_race_id={$v['race_id']} ORDER BY place");
      while(($v['entrants'][] = mysql_fetch_assoc($q)) || array_pop($v['entrants']));
    }

    echo '<div class="row">';
    
    // Date and Time
    echo ('<span class="note2">Race #'.$v['race_id'].': '.date('M d, Y - G:i:s',$v['race_date']).'&mdash;</span>');
    print "\n";
    
    $v['race_goal'] = self::add_links($v['race_goal']);

    // Race Goal and Start of Table
    echo <<<RACEINFO
    <table><col class="raceFeedPlacing"><col class="raceFeedName"><col class="raceFeedStatus"><col class="raceFeedComment"><col><col><col><col><tr><th colspan="8"><a href="/gamelist/game.php?game={$v['game_abbrev']}">{$v['game_name']}</a></th></tr>
    <tr class="alt"><td colspan="8"><span class="note2">Goal&mdash;&ensp;{$v['race_goal']}</span></td></tr>
RACEINFO;
    
    $i = 0;
      
    // Loop through each entrant
    foreach ($v['entrants'] as $entrant) {
    
      // Alternates the backround for each entrant
      echo ($i % 2) ? '<tr class="alt"><td>' : '<tr><td>';
      
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

      // Quit Message
      print '<td>';
      if ($entrant['message']) echo ('<span class="raceMessage">&ensp;Comment&ensp;<em>'.$entrant['message'].'</em></span>');
      print '</td>';
      
      // Rating Change
      rating(floor($entrant['old_rating']), floor($entrant['new_rating']));
      
      print "\n";
      $i++;
    }
    
    // Close Table
    echo('</table></div>');
    print "\n";

  }

  // SRLContent::ratings() - print overall ratings table
  // SRLContent::ratings((int)$game_id) - print ratings table for game $game_id
  public static function ratings($v = null) {
    
    // Distinguish between games and global
    if ( ($v) && ($v == (int) $v) ) {
      $mode = 'game';
      $query = "SELECT player_name,rating as score FROM game_rating,players WHERE players_player_id=player_id AND game_game_id=$v AND rating>0 ORDER BY rating DESC";    
    } else {
      $mode = 'global';
      $clubs = array(
        '1700' => 5000,
        '1600' => 2500,
        '1500' => 2000,
        '1400' => 1500,
        '1300' => 1000,
        '1200' => 500,
        '1100' => 250,
        '1000' => 100,
        '900' => 50,
        '800' => 1,
      );
      $query = "SELECT player_name, SUM( IF(rating > 1000, rating - 1000, 0)) AS score FROM players, game_rating WHERE player_id=players_player_id GROUP BY players_player_id ORDER BY score DESC LIMIT 200";
    }
    
    // Get Ratings
    $q = mysql_query($query);
    $ratings = array();
    while(($ratings[] = mysql_fetch_assoc($q)) || array_pop($ratings)); 
	
	$total = count($ratings);
    
    // Let's go
    $content = array();
    foreach ($ratings as $k => $v) {
    
      // Overall club
      if ($mode == 'global') {
        $p_club = floor( $v['score'] );
        $club = false;
        foreach ($clubs as $k2 => $v2) {
          if ($p_club >= $v2) {
            $club = $k2;
            break;
          }
        }
        if (!$club) $club = '700';
      // Game club
      } 
	  else { 
		$perc = (($k+1) / $total)*100;
		if ($perc <= 3) $club = 1;
		else if ($perc <= 8) $club = 2;
		else if ($perc <= 20) $club = 3;
		else if ($perc <= 35) $club = 4;
		else if ($perc <= 55) $club = 5;
		else if ($perc <= 75) $club = 6;
		else $club = 7;
	  }
      // Player Name and Rating
      $content[$club] .= "<tr><td>#".($k+1)."</td><td><a href=\"/profiles/?player=".$v['player_name']."\"> ".$v['player_name']."</td><td>".floor($v['score']*40)."</td></tr>\n";

    }
    
    // Print 'em out
    foreach ($content as $k => $v) {
      echo '<table class="r'.$k.' club"><col class="playersListRank"><col class="playersListName"><col class="playersListRating">'.$v.'</table>';
    }
    
    // Return the players in case the page needs the data
    return $ratings;

  }
  
  // SRLContent::print_data((array)$data, (string)$content)
  // $data is either an array of data (multidimensional or not)
  //   or a SQL select query.
  // $content is a printf format string, see http://php.net/sprintf for details.
  public static function print_data($data, $content) {
    if (is_array($data)) {
      // If data is provided, array it if it's a single record
      if (!is_array(reset($data))) $data = array($data);
    } else {
      // If a SQL query is provided, load the record(s) into an array
      $q = mysql_query($data);
      $data = array();
      while(($data[] = mysql_fetch_row($q)) || array_pop($data)); 
    }
    // Print
    foreach ($data as $v) vprintf($content, $v);
  }
  
  // SRLContent::add_links((string)$content)
  // Turns URLs into HTML links
  public static function add_links($content) {
    $pattern = '/(((ht|f)tp(s?):\/\/)|(www\.[^ \[\]\(\)\n\r\t]+)|(([012]?[0-9]{1,2}\.){3}[012]?[0-9]{1,2})\/)([^ \[\]\(\),;"\'<>\n\r\t]+)([^\. \[\]\(\),;"\'<>\n\r\t])|(([012]?[0-9]{1,2}\.){3}[012]?[0-9]{1,2})/i';
    return preg_replace($pattern, '<a href="$0">$0</a>', $content);
  }

}