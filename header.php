	<?php 
		session_start(); 
	
		if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 600)) {
    			session_unset();     // unset $_SESSION variable for the run-time 
    			session_destroy();   // destroy session data in storage
		}
		
		$_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
	
		function IsLoggedIn() { return array_key_exists("name", $_SESSION) && !is_null($_SESSION["name"]); }
	?>
	
	<!-- Encoding -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<!-- Icon -->
	<link rel="icon" type="image/png" href="http://cdn.rainbowism.net/images/favicon.png">
	
	<!-- Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
	
	<!-- Style -->
	<link rel="stylesheet/less" type="text/css" href="/style/styles.less?2">
	<script src="/scripts/less.js" type="text/javascript"></script> <!-- less 2 css -->
	
	<!-- Scripts -->
	<script type="text/javascript" src="https://www.google.com/jsapi"></script> <!-- google libraries API -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> <!-- jquery -->
	<script type="text/javascript" src="/scripts/globals.js"></script>
	<script type="text/javascript" src="/scripts/updateRacesButton.js"></script>
	<script type="text/javascript" src="/scripts/racetable.js?3"></script>
	<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/racetabletemplate.html'); ?>
	<script type="text/javascript" src="/login.js"></script>
	
	<!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]--> <!-- make HTML5 tags work in IE7/8 -->
	<script type="text/javascript"> <!-- Google Analytics -->
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-22967875-2']);
	_gaq.push(['_trackPageview']);
	
	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	
	var srl = {}; // javascript holder
	
	function setcolor() {
		var pathArray = window.location.href.split('/');
		if (pathArray[3].toLowerCase() == 'races') { return 'racesborder'}
		else if (pathArray[3].toLowerCase() == 'leaderboards') { return 'leaderboardsborder' }
		else if (pathArray[3].toLowerCase() == 'channel') { return 'channelborder' }
		else if (!pathArray[3]) { return 'streamsborder' }
		else { return 'defaultborder' }
	}
	</script>
	
		<script>
		var sessiontoken = <?php echo ( '"' . $_SESSION["token"] . '"' ); ?>;
		var sessionname = <?php echo ( '"' . $_SESSION["name"] . '"' ); ?>;
		var sessionchannel = <?php echo ( '"' . $_SESSION["channel"] . '"' ); ?>;
	</script>
	
</head>

<body>
	<div id="wrap"><div id="main">
	<header>
	<div class="container">
		<a id="logo" href="/"><span>SpeedRunsLive</span></a>
		<div id="headerright">
			<?php/* 
			if (IsLoggedIn()) { 
				if (array_key_exists("avatar", $_SESSION)) {
					echo( '<div id="headerav" style="background-image:url(\'' . $_SESSION["avatar"] . '\');">&nbsp;</div>' ); 
				}
				echo( '<a href="/profiles/#!/' . $_SESSION["name"] . '/1">Welcome, <b>' . $_SESSION["name"] . '.</a><br><a href="/editprofile">[edit profile]</a> <a href="#" id="logout" onclick="logout()">[logout]</a></b>' ); 
			}
			else { 
				echo('Login:<input type="text" id="headerusername" placeholder="username" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'username\'" /><input type="password" id="headerpassword" placeholder="password" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'password\'" /><a class="loginregister" onclick="submitLogin()" href="#">Login</a><br/><div id="loginfail">Incorrect username and/or password.</div>'); 
			}

			*/?>
		</div>
		<nav>
			<ul>
				<li><a id="streamsButtonHeader" href="/">Streams</a></li>
				<!--<li><a id="leaderboardsButtonHeader" href="#">Leaderboards</a></li>-->
				<li><a id="racesButtonHeader" href="/races/">Races &emsp;</a></li>
				<li><a href="/channel/">Channel</a></li>
				<li><a href="/faq/rules">Rules/FAQ</a></li>
				<li><a href="/tools/">Tools</a></li>
			</ul>
<a id="donation_server" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VGW56QDZNVHTA" title="All donations cover monthly server and bandwidth costs. Thanks to all donators!" target="_blank">
        <span>SRL server costs &mdash; donations for <?php echo date("F",time()); ?> <?php echo date("Y",time()); ?></span>
        <div id="donation_holder">
	 <div id="donation_bar"></div>
        </div>
        <span id="amount">raised <span class="gold" id="d-balance">$8.95</span> out of <span class="gold" id="d-target">$8.95</span></span>
</a>		
</nav>
	</div>
	</header>

	<div class="container" id="pageContent">
	
	<script type="text/javascript">
	function renderDonate(data) {
		$("#d-balance").text("$" + data.balance.toFixed(2));
		$("#d-target").text("$" + data.target.toFixed(2));
		$("#donation_bar").css("width", data.percent + "%");
	}

	$(document).ready(function () {
		$.ajax({
                dataType: 'json',
                async: false,
    		type : "GET",
    		url : apiUrl + "/test",
		success : function(data) { renderDonate(data); }
		});
	});
	$('header').addClass(setcolor());
	</script>
