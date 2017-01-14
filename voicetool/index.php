<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Voice Tool - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="Edit your profile." />
	<meta name="keywords" content="edit, profile" />
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>

	<script type="text/javascript" src="voicetool.js"></script>
	
	<h1>Voice Tool</h1>
	<h2>Role: <span class="userrole">anon</span></h2>

	<span class="toolDenied">You do not have access to the voice tool.</span>

	<span id="toolList">
		<p class="toolSelect">
			Select a tool:
			<a id="0" class="toolFilter toolSelected" href="#!/adminlog">Admin Log</a>
			<a id="1" class="toolFilter" href="#!/purgelist">Purge List</a>
		</p>
	</span>

	<div class="adminlog">
		<div class="formitem">
			<div class="adminLogBody"></div>
		</div>
	</div>

	<div class="purgelist">
		<div class="formitem">
			<div class="purgeListBody"></div>
		</div>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
