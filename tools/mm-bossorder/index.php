<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Mega Man Boss Order Generator - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Generates a boss order for races" />
	<meta name="keywords" content="mega man, boss order" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<?php
		// Get order
		$order = $_GET["order"];
		$order = intval($order);
		if (is_int($order) && ($order >= 0) && ($order <= 40320)) { // theres 40k possibilities here
			
			$bosses = array(1,2,3,4,5,6,7,8); // all the bosses are initially in a list to be picked

			for ($i = 7; $i >= 1; $i--) {
				$f=$i+1;
				$g=$fact=$i;
				while ($fact>1) {
					$f=$f*$fact--; // some factorial stuffs. required for this weird ordering thing
					$g=$g*$fact;   // i figured all that shit out on a piece of paper. im proud.
				}	
				$f=$f*$fact--;
			
				$num = ($order % ($f) / ($g)); // this part is cool
				if ($num == -1) $num = count($bosses) - 1; // fixes a really dumb bug!! thanks jiano
				$results[] = $bosses[$num];
				array_splice($bosses, $num, 1);
			}
			$results[] = $bosses[0];
			
			echo ('<div id="megaman_bossorder"><div id="imageholder">');
			echo ('<img src="bossorder_'.$results[0].'.gif" alt="'.$results[0].'" />');
			echo ('<img src="bossorder_'.$results[1].'.gif" alt="'.$results[1].'" />');
			echo ('<img src="bossorder_'.$results[2].'.gif" alt="'.$results[2].'" />');
			echo ('<img src="bossorder_'.$results[3].'.gif" alt="'.$results[3].'" />');
			echo ('<img src="bossorder_middle.gif" alt="middle" />');
			echo ('<img src="bossorder_'.$results[4].'.gif" alt="'.$results[4].'" />');
			echo ('<img src="bossorder_'.$results[5].'.gif" alt="'.$results[5].'" />');
			echo ('<img src="bossorder_'.$results[6].'.gif" alt="'.$results[6].'" />');
			echo ('<img src="bossorder_'.$results[7].'.gif" alt="'.$results[7].'" />');
			echo ('</div></div>');
					
		} else {
			echo ("Hey poopy brain, pick a number next time!");
		}
		
	?>
	
	<h1>Mega Man Boss Order Generator</h1>
	
	<?php echo ('<a class="smallbutton" href="?order='.mt_rand(1, 40320).'">Generate!</a>'); ?>
	
	<p>by Cosmo</p>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>