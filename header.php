<?php session_start(); ?>
	<!-- Encoding -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<!-- Icon -->
	<link rel="icon" type="image/png" href="http://cdn.speedrunslive.com/images/favico.png">
	
	<!-- Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
	
	<!-- Style -->
	<link rel="stylesheet/less" type="text/css" href="/style/styles.less?2">
	<script src="/scripts/less.js" type="text/javascript"></script> <!-- less 2 css -->
	
	<!-- Scripts -->
	<script type="text/javascript" src="https://www.google.com/jsapi"></script> <!-- google libraries API -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> <!-- jquery -->
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script> <!-- jquery ui -->
	<script type="text/javascript" src="/scripts/jquery-selectbox-0.2.min.js"></script>
	<script type="text/javascript" src="/scripts/globals.js"></script>
	<script type="text/javascript" src="/scripts/updateRacesButton.js"></script>
	<script type="text/javascript" src="/scripts/login.js"></script>
	<script type="text/javascript" src="/scripts/racetable.js?3"></script>
	<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js"></script>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/racetabletemplate.html'); ?>
	<script type="text/javascript" src="/search.js"></script>
	
	<!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]--> <!-- make HTML5 tags work in IE7/8 -->
	<script type="text/javascript"> <!-- Google Analytics -->
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56546482-1', 'auto');
  ga('send', 'pageview');

	var srl = {}; // javascript holder
	
	function setcolor() {
		var pathArray = window.location.href.split('/');
		if (pathArray[3].toLowerCase() == 'races') { 
			$("#racesButtonHeader").addClass("current");
			return 'racesborder';
		}
		else if (pathArray[3].toLowerCase() == 'leaderboards') {
			//$("#leaderboardsButtonHeader").addClass("current");;
			return 'leaderboardsborder';
		}
		else if (pathArray[3].toLowerCase() == 'channel') {
			$("#channelButtonHeader").addClass("current");
			return 'channelborder';
		}
		else if (pathArray[3].toLowerCase() == 'faq') {
			$("#faqButtonHeader").addClass("current");
			return 'faqborder';
		}
		else if (pathArray[3].toLowerCase() == 'tools') {
			$("#toolsButtonHeader").addClass("current");
			return 'defaultborder';
		}
		else if (!pathArray[3] || pathArray[3] == '#!') {
			$("#streamsButtonHeader").addClass("current");
			return 'streamsborder';
		}
		else { return 'defaultborder' }
	}
	</script>
		<script>
		$.ajax({
			type: "GET",
			url: apiUrl + "/token",
			processData: true,
			data: {},
			dataType: "jsonp",
			jsonpCallback: "setSessionName",
			cache: true
		});
		function setSessionName(data) {
			if ( data.role != "anon" ) {
				sessionname = data.user;
				sessionrole = data.role;
				if ( sessionrole == "voice" || sessionrole == "halfop" || sessionrole == "op" || sessionrole == "admin" ) {
					admintools = '<a href="/voicetool">Voice Tool</a> - ';
				}
				else {
					admintools = '';
				}
				$("#logininfo").html('<span class="loginava"><div id="headerav" class="noavatar">&nbsp;</div></span><a href="/profiles/#!/' + sessionname + '/1">Welcome, <b>' + sessionname + '.</a><br>' + admintools + '<a href="/editprofile">Edit Profile</a> - <a onClick="logout()" id="logout">Log Out</a></b>');
				$("#loginname").html('<a href="/profiles/#!/'+sessionname+'">'+sessionname+'</a>');
				//$("#loginrole").html(sessionrole);
				<?php if ( !isset($_SESSION['avatar']) ) { ?>
				$.ajax({
					type: "GET",
					url: apiUrl + "/players",
					processData: true,
					data: {},
					dataType: "jsonp",
					jsonpCallback: "grabAvatar",
					cache: true
				});
				<?php } else { 
				?>
				$(".loginava").html('<div id="headerav" style="background-image:url(\'<?php echo $_SESSION['avatar']; ?>\');">&nbsp;</div>')
				<?php } ?>
			}
			else {
				sessionrole = "anon";
			}
		}
		function grabAvatar(data) {
			if ( data.api == "twitch" ) {
				getTwitchAvatar(data.channel);
			}
			else if ( data.api == "hitbox" ) {
				getHitboxAvatar(data.channel);
			}
		}
	</script>
	
</head>

<body>
	<div id="wrap"><div id="main">
	<header>
	<div class="container">
		<a id="logo" href="/"><span>SpeedRunsLive</span></a>
		<div id="headerright">
			<!--<div id="searchbar">
			<select id="headersearchtype">
				<option value="game">Games</option>
				<option value="player">Players</option>
			</select><div class="autocompleteHolder"><input type="text" id="headersearch" name="q" placeholder="Search" onfocus="this.placeholder=''" onblur="this.placeholder='Search'" autocomplete="off"><ul class="autocompleteDropdown"><li class="autocomplete1"><a><span>Result 1</span></a></li><li class="autocomplete2"><a><span>Result 2</span></a></li><li class="autocomplete3"><a><span>Result 3</span></a></li></ul></div><a class="searchregister" onclick="submitSearch()">Search</a>
			<div id="searchfail">No results found.</div>
			</div>-->

			<a id="donation_server" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SQ2NXSJRUVWLW" title="All donations cover monthly server and bandwidth costs. Thanks to all donators!" target="_blank">
        			<span>SRL server costs &mdash; donations for <?php echo date("F",time()); ?> <?php echo date("Y",time()); ?></span>
        			<div id="donation_holder">
	 			<div id="donation_bar"></div>
        			</div>
        			<span id="amount">raised <span class="gold" id="d-balance">$8.95</span> out of <span class="gold" id="d-target">$8.95</span></span>
			</a>

			<div id="logininfo"><span class="loggedout"><a href="/faq/#getregged" class="registerlink">Register via IRC</a></span><form class="loginform" action="javascript:void(0)"><input type="text" name="username" id="headerusername" placeholder="username" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'username\'" /><input type="password" name="password" id="headerpassword" placeholder="password" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'password\'" /><a class="loginregister" onClick="submitLogin()">Log In</a><br/><div id="loginfail">Incorrect username and/or password.</div><div id="loginfailupdate">Please log into IRC first to update your credentials.</div></div>
		</div>
		<nav>
			<ul>
				<li><a id="streamsButtonHeader" class="headerButton" href="/">Streams</a></li>
				<li><a id="racesButtonHeader" class="headerButton" href="/races/#!/live">Races</a></li>
				<li><a id="channelButtonHeader" class="headerButton" href="/channel/">Channel</a></li>
				<li><a id="faqButtonHeader" class="headerButton" href="/faq/rules">Rules/FAQ</a></li>
				<li><a id="toolsButtonHeader" class="headerButton" href="/tools/">Tools</a></li>
			</ul>
			<div id="searchbar">
				<select id="headersearchtype">
					<option value="game">Games</option>
					<option value="player">Players</option>
				</select><div class="autocompleteHolder"><input type="text" id="headersearch" name="q" placeholder="Search" onfocus="this.placeholder=''" onblur="this.placeholder='Search'" autocomplete="off"><ul class="autocompleteDropdown"><li class="autocomplete1"><a><span>Result 1</span></a></li><li class="autocomplete2"><a><span>Result 2</span></a></li><li class="autocomplete3"><a><span>Result 3</span></a></li></ul></div><a class="searchregister" onclick="submitSearch()">Search</a>
				<div id="searchfail">No results found.</div>
			</div>
</nav>
	</div>
	</header>
		</div>

	</header>

	<div class="container" id="pageContent">

        <script type="text/javascript">
        var target = 65.0;
        function renderDonate(data) {
                var balance = Math.min(data._source.amount, target);
                $("#d-balance").text("$" + balance.toFixed(2));
                $("#d-target").text("$" + target.toFixed(2));
                $("#donation_bar").css("width", balance / target * 100 + "%");
        }

        $(document).ready(function () {
                $.ajax({
                dataType: 'json',
                async: false,
                type : "GET",
                url : "http://api.speedrunslive.com/frontend/donate",
                success : function(data) { renderDonate(data); }
                });
                $("*:not(title)").tooltip({
                	tooltipClass: 'tooltipPopup',
                	show: { delay: 500 },
                	content: function() {
					    // support: IE<9, Opera in jQuery <1.7
					    // .text() can't accept undefined, so coerce to a string
					    var title = $( this ).attr( "title" ) || "";
					    // Escape title, since we're going from an attribute to raw HTML
					    return $( "<a>" ).text( title ).html().replace(/\n/g, "<br />");
					}
                });
        });
        $("header").addClass(setcolor());
        </script>
