	<?php
		$key = "";
		$url = "http://spreadsheets.google.com/feeds/list/".$key."/2/public/values?alt=json";

		$ch = curl_init();
		$timeout = 5;
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
		curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
		curl_setopt($ch,CURLOPT_USERAGENT,'Doicm\'s Script');
		$data = json_decode(curl_exec($ch),true); //dump json into an associative array
		curl_close($ch);
		$entries = $data["feed"]["entry"];
		$i=0;

		foreach($entries as $entry){
			if ($i < 1) {
				$i++;
				continue;
				}
			$time = strtotime($entry['gsx$timestamp']['$t']) - strtotime('-30 days');
			if ($entry['gsx$game']['$t'] == "" || $time < 0) continue;
			// gsx$game = game - gsx$system = system - gsx$category = categories
			// gsx$requester = requester- gsx$contact = contact
			echo '<div class="bulletininfo"><div class="gamerequest">';
			echo '<span class="gametitle">'	. htmlspecialchars($entry['gsx$game']['$t']) . '</span><span>&ensp;&middot;&ensp;' . htmlspecialchars($entry['gsx$system']['$t']) . '&ensp;&middot;&ensp;' . htmlspecialchars($entry['gsx$category']['$t']) . '</span><br />';
			echo '<div class="requestee">' . htmlspecialchars($entry['gsx$requester']['$t']) . '&ensp;&middot;&ensp;' . htmlspecialchars($entry['gsx$contact']['$t']) . '&ensp;&middot;&ensp;<span class=\"small\">Submitted on ' . htmlspecialchars($entry['gsx$timestamp']['$t']) . '</span></div>';
			echo "</div></div>";
	}
	?>
