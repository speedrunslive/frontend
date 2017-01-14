<!doctype html>
<html>
<head>


	<!-- Title -->
	<title>New front page features - SpeedRunsLive</title>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
<div id="faq">	
<h1>Site header</h1>
<h2>Log in</h2>
<p>
	You can now log in using your IRC nickname and password in the respective fields. Logging in gives you an edit profile option which takes you to your profile settings.
</p>
<p><h3>Profile settings:</h3>
	<ul>
		<li>SRL name: Ability to change capitalization of your SRL name (affects profile and front page).</li>
		<li>Twitch: Ability to set your stream to a Twitch.tv OR Hitbox.tv channel.</li>
		<li>Twitter: Ability to set your Twitter account.</li>
		<li>YouTube: Ability to set your YouTube account. Note that your channel link may be different from your username.</li>
		<li>Country: Option to change the flag displayed next to your name on the front page.</li>
		<li>Front page preference:</b> Choose from "Always display me", "Never display me", "Auto-detect", and "Show me only when racing". These options can be changed at any time.</li>
	</p></ul>
<ul>
	<li>Pinned games/players: Games or players added here will appear at the top of your streams page when logged in to SRL. Please note that games must match the Twitch.tv directory, and that players must match SRL account names.</li>
	<li>Hidden games/players: Same as above, but will put them at the bottom of the page.</il>
</ul>

<h2>Search</h2>
<p>
	Search algorithm has been improved to give you more relevant results in auto-complete.
</p>

<h1>Streams page</h1>

<h2>Sorting options</h2>
<p>
	Can now sort by games as well as viewers.
</p>
<h2>Full Screen button</h2>
<p>
	Will maximize the stream in your browser window, and keep the streams page open in the background.
</p>
<h2>Search filter</h2>
<p>
	The search filter will look for SRL names, game names, and title. It will display all the matched results below.
</p>
<h2>Streams</h2>
<p>
	The streams page is now a three column design instead of two. The stream buttons now display game name as well as title and viewers.
	</p>
<h2>Stream buttons</h2>
<p>Pressing the Twitch/Hitbox icon will open a new tab taking you to their respective channel.</p>
	<p>
	<h3>Flyout menu (active when logged in):</h3>
<ul>
	<li>View profile: Will take you to the SRL profile for that streamer.</li> 
	<li>Pin player: Will pin that streamer at the top of the streams page for your profile.</li>
	<li>Hide player: Will hide that streamer at the bottom of the streams page for your profile.</li>
	<li>Pin game: Will pin that game at the top of the streams page for your profile.</li>
	<li>Hide game: Will hide that game at the bottom of the streams page for your profile.</li>
</ul></p>
<h2>Moderation</h2>
<p>
We will moderate the front page more actively for non-speedrunning content.
<h3>Warning system:</h3>
<ul>
<li>1st offense: Profile set to "Do not display me", able to be toggled freely.</li>
<li>2nd and 3rd offenses: Profile set to "Do not display me" for 24 hours.</li>
<li>4th offense and beyond: Profile set to "Do not display me" for 1 week.</li>
</ul>
</p>
<h2>Requirements</h2>
<p>
	The requirements for qualifying for the front page have been lowered and made public:
<ul>
	<li>Having your stream set via .setstream in <strong>#speedrunslive</strong> on IRC,</li>
	<li>One hour of total race time, AND</li>
	<li>Visiting the site while logged in, or joining the <strong>#speedrunslive</strong> channel while being identified on IRC, within the past month.</li>
</ul></p>

<br> <br>
<p><small>SpeedRunsLive staff - November 13th, 2014 </small> </p>

</div>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
