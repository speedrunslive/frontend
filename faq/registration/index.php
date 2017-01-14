<!doctype html>
<html>
<head>
        <!-- Title -->
        <title>Registration - SpeedRunsLive</title>

        <!-- Meta -->
        <meta name="description" content="Rules" />
        <meta name="keywords" content="rules" />

        <?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
        <?php include($_SERVER['DOCUMENT_ROOT'] . '/faq/faqhead.html'); ?>

<div id="faqNav">
		<h1>Navigation</h1>
		<a href="#what">What does registering mean?</a>
		<a href="#how">How do I register and use a nick?</a>
		<a href="#why">Why do I need to register to race?</a>
		<a href="#doihaveto">Do I have to register?</a>
		<a href="#whatelse">What else does registering affect?</a>
		<a href="#unregister">Can my nick become un-registered?</a>
		<a href="#forgotpass">Can I reset my password if I forget it?</a>
		
		<a style="display: none;" id="backToTopButton" href="#main">back to top</a>
	</div>

	<div id="faq">
	
	
<br>
<p><b>BOTTOM LINE</b>: In order to join race channels, you will need to be logged onto a registered nick. If you try to join a race channel on an un-registered nick, it will say you are banned from the channel. This change will be implemented on the <b>16th of December.</b></p>

<p><strong>Registration quick guide <a href="http://i.imgur.com/CNQXVAm.jpg">here.</a></strong>
<h1 id="what">What does registering mean?</h1>
<p>Once you register a nick on the SRL IRC network, only you are allowed to log onto that name.
<br>You will need to use this specific nick for any future races, so choose something you plan on sticking with. It does not have to be the same login that you use anywhere else.</p>
     
<h1 id="how">How do I register and log onto my nick on the SRL IRC?</h1>
<p><b>Note:</b> It is highly recommended that you type any <b>/ns</b> commands below into the console window of your client, rather than an actual chatroom. This eliminates the possibility of accidentally sending a message containing your password to an entire chatroom.</p>

<h2>Registering</h2>
<p>Simply log onto the nick you'd like to register, and type in <b>/ns register &lt;password&gt; &lt;email&gt;</b>.
<br>Example: If you want the nick "SM64man", you would log on as that nick, and type <b>/ns register iluvsm64 sm64dude@gmail.com</b></p>
     
<h2>Logging in manually</h2>
<p>Each time you log on as your nick, you can type <b>/ns identify &lt;password&gt;</b> to stay logged on.
<br>If you don't type it in time, you will be bumped to a generic "Trueskill" nick. If this happens you can type <b>/nick &lt;yournick&gt;</b> to switch nicks, and then <b>/ns identify &lt;password&gt;</b> as before to stay logged on.</p>
     
<h2>Logging in automatically</h2>
<p>Most clients offer automatic login so that you don't have to worry about this every time. To do it in mIRC, you have two options:
<ul>
<li>Use our custom-built script, linked <a href="http://pastebin.com/kiVCE5Fh" target="_blank">here</a>, OR</li>
<li>Open your options, then browse to Connect / Options. Click the "Perform" button. Make sure "Enable perform on connect" is checked, and type <b>/ns identify &lt;password&gt;</b> in the text field.</li>
</ul>
<p> Mibbit does not offer automatic login.</p>

<h2>Changing password</h2>
<p>To change your password, you must log onto your previously registered nick and type <b>/ns password &lt;newpassword&gt;</b>.</p>
     
<h1 id="why">Why are you suddenly requiring registration?</h1>
<p>It serves multiple purposes, but the main one is that several times a week, a user will accidentally race on the wrong nick. This can lead to users appearing on the race leaderboards as several nicks, if not caught before the race is recorded. By requiring all users to log into their nick, this initiative will prevent that.</p>
<p>It will also prevent anyone else from logging onto your nick.</p>
     
<h1 id="doihaveto">Do I have to register to be a part of the community?</h1>
<p>You are free to log onto the main #speedrunslive channel, or any other channels on the IRC, with an unregistered nick. However in order to join a race channel, you must be logged onto a registered nick.</p>
          
<h1 id="whatelse">Is this login also used as a login for the SRL website itself, my twitch account, or anything else? </h1>
<p>No, this login only affects logging into the SRL IRC server.</p>
     
<h1 id="unregister">Is it possible for my nick to become "un-registered"?</h1>
<p>If no user logs onto the nick for a year, the nick becomes un-registered and available to anybody.</p>
<h1 id="forgotpass">Can I reset my password in case I forget it?</h1>
<p>If you forgot your password, you can request an e-mail with instructions to reset it using /nickserv resetpass &lt;nickname&gt;. The e-mail may be filtered by your spam filter.</p>

        <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>




