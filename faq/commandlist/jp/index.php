<!doctype html>
<html>
<head>
	<!-- Title -->
	<title>RaceBot用全コマンドリスト - SpeedRunsLive</title>
	
	<!-- Meta -->
	<meta name="description" content="The Complete RaceBot Command List for racing on SpeedRunsLive" />
	<meta name="keywords" content="racebot, command list" />

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/faq/faqhead.html'); ?>
	
	<div id="faqNav">
		<h1>メニュー</h1>
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
		
		<a id="backToTopButton" href="#main">ページのトップへ</a>
	</div>

	<div id="faq">
	
	<div id="commandlist">
	<h1>RaceBot用全コマンドリスト&ensp;<a href="../"><img class="flag" src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/United_States_of_America.png" alt="En"/></a> <a href="../jp/"><img src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/Japan.png" class="flag" alt="Jp"/></a> <a href="../fr/"><img src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/France.png" class="flag" alt="Fr"/></a> <a href="../sp/"><img src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/Spain.png" class="flag" alt="Sp"/></a></h1>

	<h2 id="startrace">.startrace (ゲーム名) <span class="grey right">(#speedrunslive)</span></h2>
	
	<p>新しいレースを始めるコマンドです。</p>
	<p>このコマンドを使う時にはゲームの略語を使用します。フルネームは使用しないでください。
	略語はSpeedRunsLive内のゲームのページで確認できます。</p>
	
	<p><img src="http://c15111086.r86.cf2.rackcdn.com/error.gif" /><code>.startrace Super Mario 64</code></p>
	<p><img src="http://c15111086.r86.cf2.rackcdn.com/success.gif" /><code>.startrace sm64</code></p>
	<p>過去にレースが行われたことのないゲームのレースをする場合は、そのゲームだとわかる略語を使用してください。</p>
	<p>最低1人競争相手が見つかるまでは、このコマンドを使用しないでください。いない場合は周りの人に声をかけてみてください。 </p>
	
	<h2 id="enter">.enter <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースに参加する時に使うコマンドです。</p>
	
	<h2 id="unenter">.unenter <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースを辞退する時に使うコマンドです。</p>
	<p>レースが既に始まっている場合はこのコマンドは使えません。
	その場合は代わりに<code>.quit</code>を使ってください。</p>
	
	<h2 id="entrants">.entrants <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>参加者の名前と進行状況を表示します。</p>
	
	<h2 id="ready">.ready <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースをする準備が出来た時に使うコマンドです。</p>
	<p>参加者全員がこのコマンドを打ち終わった時にレースが始まります。</p>
	
	<h2 id="unready">.unready <span class="grey right">(#srl-xxxxx)</span></h2>
	<p><code>.ready</code>コマンド使用後、すぐにレースを開始できない状況になった時に使用するコマンドです。</p>
	
	<h2 id="time">.time <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースの経過時間を表示します。</p>
	
	<h2 id="goal">.goal <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースのルールを表示します。</p>
	
	<h2 id="setgoal">.setgoal <em>goal</em> <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースのルールを設定するコマンドです。</p>
	<p>走者が準備し終わるまでにゲームのルールを設定してください。</p>
	
	<h2 id="setgame">.setgame (ゲーム名) <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースに使うゲームを変更する時に使うコマンドです。</p>
	<p>レースを始める時にゲームのタイトルを間違えてしまった時はこのコマンドを使用してください。</p>
	<p>違うゲームでリマッチしたい時にも使えます。</p>
	
	<h2 id="done">.done <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>走り終わった時に使うコマンドです。</p> 
	<p>実際にゴールするまで、このコマンドは打たないでください。</p>
	<p>レースを途中で終わらせたい場合は代わりに<code>.quit</code>を使用してください。</p>
	
	<h2 id="undone">.undone <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>間違えて走り終わる前に<code>.done</code>を打ってしまった時に使うコマンドです。
	.quitした後、レースに復帰したい時にも使えます。</p>
	
	<h2 id="quit">.quit <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースを途中でリタイアしたい時に使うコマンドです。 </p>
	<p>このコマンドを使用せずにレース中長時間離席した場合、失格(DQ)になる可能性があります。</p>
	
	<h2 id="comment">.comment (コメント) <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>このコマンド使用することで、任意で走り終わった後のレースにコメントを残すことができます。文字制限は140字です。</p>
	
	<h2 id="rematch">.rematch <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レース終了後、続けてもう1度レースをしたい時に使うコマンドです。</p>
	<p><code>.rematch</code>コマンド実行後、必要に応じて<code>.setgoal</code>コマンドを使用してください。</p>

	<h2 id="races">.races <span class="grey right">(#speedrunslive)</span></h2>
	<p>現在進行中のレースを調べます。</p>
	<p>.racesコマンドは使い過ぎるとチャンネルサーバーに負担を掛ける可能性があるので注意してください。また、speedrunslive.comのトップページからでも進行中のレースを調べることができます。</p>
	
	<h2 id="setstream">.setstream (配信チャンネルのURL) <span class="grey right">(どのチャットボックスでも可)</span></h2>
	<p>自分の配信チャンネルURLを登録するコマンドです。</p>
	<p>例：<code>.setstream http://twitch.tv/cosmowright</code></p>
	
	<h2 id="stream">.stream (名前) <span class="grey right">(どのチャットボックスでも可)</span></h2>
	<p>その人の配信チャンネルURLを表示します。</p>
	
	<h2 id="filename">.filename <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>カウントダウン後、ランダムで2つのアルファベットを表示します。</p>
	<p>通常、「ゼルダの伝説時のオカリナ」等のゲームで、新しいゲームファイルを使用していることを証明するために使います。</p>
	<p>走者全員が毎回ランダムで決められるゲームファイル名を使用することで、フライングをしたり事前にレース用のデータを作っておく等の不正を防ぐことができます。</p>
	
	<h1>管理者専用コマンド</h1>

	<h2 id="queue">.queue <span class="grey right">(#speedrunslive)</span></h2>
	<p>終了済みのレースのうち、まだ<code>.record</code>もしくは<code>.end</code>されていないレースを表示します。</p>	
	
	<h2 id="record">.record <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>終了済みのレースを記録します。</p>
	<p>レースを記録する前に、必ずそのレースが記録できる状態か、不正等ないかを確認してください。</p>
	
	<h2 id="end">.end <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースを消去します。</p>
	<p>走者全員がレースの中止に同意した、参加者がいない、レースのルールが不適切、そのような場合にはこのコマンドを使用してレースを終了させてください。</p>
	
	<h2 id="dq">.dq (失格となる走者の名前) (失格とする理由) <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>失格の対象者</p>
	<ul>
	<li>ルール違反をした者</li>
	<li>不正を犯した者</li>
	<li>レース中に長時間離席した者</li>
	</ul>
	
	<h2 id="remove">.remove (レースから外す人の名前) <span class="grey right">(#srl-xxxxx)</span></h2>
	<p>レースから走者を外すコマンドです。</p>
	<p>レース中に急にレースを続けることができなくなってしまった場合は、管理者に<code>.remove</code>コマンドを打ってもらうのではなく.quitコマンドを使用してください。</p>
	<p><code>.ready</code>コマンドを打たない走者によってレースが始められない場合は、<code>.remove</code>コマンドを使用しても構いません。</p>
	
	<h2 id="creategame">.creategame (ゲームの略語) (ゲームのフルネーム) <span class="grey right">(どのチャットボックスでも可)</span></h2>
	<p>データベースに新たなゲームを追加するコマンドです。</p>
	<p>そのゲームの最初のレースが記録されるまでこのコマンドは使用しないでください。</p>
	<p>また、このコマンドで既存のゲームのフルネームを変更することもできます。</p>
	
	<!--
	<h2 id="removestream">.removestream (名前)	 <span class="grey right">(どのチャットボックスでも可)</span></h2>
	<p>その人の配信チャンネルURLを消去するコマンドです。</p>
	--->
	
	</div>
	</div>

	<?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
