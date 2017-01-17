<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>Liste complète des commandes de RaceBot - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="The Complete RaceBot Command List for racing on SpeedRunsLive" />
	<meta name="keywords" content="racebot, command list" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/faq/faqhead.html'); ?>
	
	<div id="faqNav">
		<h1>Nav</h1>
		<a href="#startrace">.startrace</a>
		<a href="#enter">.enter </a>
		<a href="#unenter">.unenter</a>
		<a href="#entrants">.entrants</a>
		<a href="#ready">.ready</a>
		<a href="#time">.time</a>
		<a href="#goal">.goal</a>
		<a href="#setgoal">.setgoal</a>
		<a href="#setgame">.setgame</a>
		<a href="#done">.done</a>
		<a href="#undone">.undone</a>
		<a href="#quit">.quit</a>
		<a href="#comment">.comment</a>
		<a href="#rematch">.rematch</a>
		<a href="#races">.races</a>
		<a href="#setstream">.setstream</a>
		<a href="#stream">.stream</a>
		<a href="#filename">.filename</a>
		<br/>
		<a href="#queue">.queue</a>
		<a href="#record">.record</a>
		<a href="#end">.end</a>
		<a href="#dq">.dq</a>
		<a href="#remove">.remove</a>
		<a href="#creategame">.creategame</a>
		
		<a id="backToTopButton" href="#main">back to top</a>
	</div>

	<div id="faq">
	
	<div id="commandlist">
	<h1>Liste complète des commandes de RaceBot&ensp;<a href="../"><img class="flag" src="http://cdn.speedrunslive.com/images/flags/United_States_of_America.png" alt="En"/></a> <a href="../jp/"><img src="http://cdn.speedrunslive.com/images/flags/Japan.png" class="flag" alt="Jp"/></a> <a href=""><img src="http://cdn.speedrunslive.com/images/flags/France.png" class="flag" alt="Fr"/></a> <a href="../sp/"><img src="http://cdn.speedrunslive.com/images/flags/Spain.png" class="flag" alt="Sp"/></a></h1>


	<h2 id="startrace">.startrace <em>jeu</em> <span class="grey right">(#speedrunslive)</span></h2>
	
	<p>Ouvre une nouvelle course que les joueurs peuvent rejoindre.</p>
	<p>A noter que cette commande utilise l'abréviation du jeu, et pas le nom complet. Vous trouverez les abréviations sur les <a href="/races/#!/gamelist/alphabetical">pages respectives</a> de chaque jeu.</p>
	
	<p><img src="http://cdn.speedrunslive.com/images/error.gif" /><code>.startrace Super Mario 64</code></p>
	<p><img src="http://cdn.speedrunslive.com/images/success.gif" /><code>.startrace sm64</code></p>
	<p>Si vous démarrez une course pour un jeu qui n'a pas encore été joué sur SpeedRunsLive, utilisez une abréviation qui a du sens.</p>
	<p>Ne démarrez pas une course avant d'avoir trouvé au moins un adversaire. Demandez autour de vous!</p>
	
	<h2 id="enter">.enter <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Tapez cette commande pour vous inscrire à la course.</p>
	
	<h2 id="unenter">.unenter <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Pour vous désinscrire de la course.</p>
	<p>Si la course a déjà démarré, vous ne pouvez plus vous désinscrire. Utilisez <code>.quit</code> à la place pour abandonner.</p>
	
	<h2 id="entrants">.entrants <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Montre la liste complète des participants et leur statut au sein de la course.</p>
	
	<h2 id="ready">.ready <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Utilisez cette commande quand vous êtes prêt à jouer.</p>
	<p>Une fois que tous les joueurs inscrits sont prêts, RaceBot lance un compte à rebours et la course commence.</p>
	
	<h2 id="unready">.unready <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>A utiliser pour annuler la commande <code>.ready</code>, si vous n'êtes plus prêt à démarrer la course.</p>
	
	<h2 id="time">.time <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Affiche le temps écoulé d'une course.</p>
	
	<h2 id="goal">.goal <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Affiche l'objectif de la course.</p>
	
	<h2 id="setgoal">.setgoal <em>objectif</em> <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Définit l'objectif à atteindre de la course.</p>
	<p>Les joueurs ne peuvent utiliser la commande .ready que quand l'objectif est défini.</p>
	
	<h2 id="setgame">.setgame <em>jeu</em> <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Change le jeu sur lequel la course est jouée.</p>
	<p>Cette commande peut être utilisée pour réparer une erreur commise au moment de la création de la course.</p>
	<p>Elle peut aussi être utilisée après la commande .rematch, pour changer de jeu.</p>
	
	<h2 id="done">.done <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Entrez cette commande lorsque vous avez accompli l'objectif de la course.</p> 
	<p>Ne l'utilisez pas si vous n'avez pas atteint l'objectif!</p>
	<p>Si vous ne souhaitez pas terminer la course, utilisez <code>.quit</code> à la place pour abandonner.</p>
	
	<h2 id="undone">.undone <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Utilisez cette commande si vous avez tapé <code>.done</code> par erreur avant d'avoir atteint l'objectif.</p>
	<p>Egalement utile si vous avez changé d'avis après un abandon (<code>.quit</code>), et souhaitez continuer.</p>
	
	<h2 id="quit">.quit <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Utilisez cette commande si vous ne souhaitez pas terminer la course.</p>
	<p>Si vous quittez le salon de discussion dédié à la course (#srl-xxxxx) sans utiliser <code>.quit</code> pour abandonner, vous risquez d'être disqualifié.</p>
	
	<h2 id="comment">.comment <em>commentaire</em> <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Vous pouvez laisser un commentaire à propos d'une course après avoir utilisé <code>.done</code> ou </code>.quit</code>. 140 caractères maximum.</p>
	
	<h2 id="rematch">.rematch <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Une fois que la course est terminée et enregistrée, vous pouvez utiliser cette commande si vous souhaitez concourir de nouveau.</p>
	<p>Après avoir <code>.rematch</code>, vous pouvez utiliser <code>.setgame</code> et/ou <code>.setgoal</code> si nécessaire, pour changer de jeu et/ou d'objectif.</p>

	<h2 id="races">.races <span class="grey right">(#speedrunslive)</span></h2>
	<p>Affiche la liste des courses en cours.</p>
	<p>Pour éviter de surcharger le salon principal (#speedrunslive), vous pouvez également consulter cette liste sur le site, sous l'onglet Races.</p>
	
	<h2 id="setstream">.setstream <em>adresse web</em> <span class="grey right">#speedrunslive ou #srl-xxxxx</span></h2>
	<p>Utilisez cette commande pour associer votre stream à votre pseudonyme sur SpeedRunsLive.</p>
	<p>Exemple: <code>.setstream http://twitch.tv/cosmowright</code></p>
	
	<h2 id="stream">.stream <em>pseudonyme</em> <span class="grey right">#speedrunslive ou #srl-xxxxx</span></h2>
	<p>Affiche l'adresse web du stream associé au pseudonyme.</p>
	
	<h2 id="filename">.filename <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Génère un nom de fichier aléatoire de 2 lettres, et l'affiche après le compte à rebours.</p>
	<p>Cette commande est généralement utilisée pour des jeux comme <em>The Legend of Zelda: Ocarina of Time</em>, en guise de mesure anti-triche.</p>
	<p>En effet, les participants étant requis d'utiliser ce nom de fichier, cela permet de s'assurer que tout le monde démarre la course au même moment.</p>
	
	<h1>Commandes réservées aux Voice (admins)</h1>
	
	<h2 id="queue">.queue <span class="grey right">(#speedrunslive)</span></h2>
	<p>Affiche la liste des courses terminées qui n'ont pas encore été enregistrées ou fermées.</p>
	
	<h2 id="record">.record <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Permet d'enregistrer une course terminée.</p>
	<p>Avant d'enregistrer une course, il est important de vérifier que tout soit en ordre.</p>
	
	<h2 id="end">.end <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Permet de forcer la fermeture d'une course.</p>
	<p>Cette commande peut être utilisée si tous les participants en ont fait la demande, si personne ne rejoint une course, ou si l'objectif défini n'est pas acceptable pour le jeu.</p>
	
	<h2 id="dq">.dq <em>pseudonyme raison</em> <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Motifs d'une disqualification:</p>
	<ul>
	<li>le joueur n'a pas respecté les règles associées à l'objectif de la course</li>
	<li>le joueur a triché</li>
	<li>le joueur a disparu depuis longtemps sans abandonner la course</li>
	</ul>
	
	<h2 id="remove">.remove <em>pseudonyme</em> <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>Retire un participant de la course.</p>
	<p>Si une course a démarré et qu'un des participants doit soudainement partir, il doit abandonner la course et non pas demander à être retiré.</p>
	<p>Si le lancement d'une course est retardé par un participant qui n'a pas utilisé <code>.ready</code>, le retirer de la course est approprié.</p>
	
	<h2 id="creategame">.creategame <em>abréviation Nom Complet du Jeu</em> <span class="grey right">#speedrunslive ou #srl-xxxxx</span></h2>
	<p>Ajoute un nouveau jeu à la base de données de SpeedRunsLive.</p>
	<p>Ne créez pas de nouveau jeu tant que la course n'est pas en attente d'enregistrement.</p>
	<p>Vous pouvez utiliser cette commande pour changer le nom complet du jeu si celui-ci est déjà créé.</p>
	
	</div>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
