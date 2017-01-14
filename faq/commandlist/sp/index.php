<!doctype html>
<html>
<head>
    <!-- Title -->
    <title>Lista de Comandos RaceBot - SpeedRunsLive</title>
    
    <!-- Meta -->
    <meta name="description" content="The Complete RaceBot Command List for racing on SpeedRunsLive" />
    <meta name="keywords" content="racebot, command list" />

    <?php include($_SERVER['DOCUMENT_ROOT'] . '/header.php'); ?>
    <div id="faqHead">
        <script type="text/javascript" src="/scripts/backtotop.js"></script>
        <a href="/faq/rules/sp">Reglas de Carreras</a>
        <a href="/faq/sp/">Preguntas Frecuentes</a>
        <a href="/faq/commandlist/sp">Lista de Comandos RaceBot</a>
        <!--<a href="/faq/streamguide">Stream Guide</a>-->
        <a href="/faq/glossary/sp">Glosario Speedrunning</a>
    </div>
    
    <div id="faqNav">
        <h1>Navegación</h1>
        <a href="#startrace">.startrace</a>
        <a href="#enter">.enter</a>
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
        <br>
        <a href="#queue">.queue</a>
        <a href="#record">.record</a>
        <a href="#end">.end</a>
        <a href="#dq">.dq</a>
        <a href="#remove">.remove</a>
        <a href="#creategame">.creategame</a>
        
        <a style="display: none;" id="backToTopButton" href="#main">volver al inicio</a>
    </div>

    <div id="faq">
    
    <div id="commandlist">
    <h1>Lista Completa de comandos de RaceBot&ensp;<a href=".."><img class="flag" src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/United_States_of_America.png" alt="En"/></a> <a href="../jp/"><img src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/Japan.png" class="flag" alt="Jp"/></a> <a href="../fr/"><img src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/France.png" class="flag" alt="Fr"/></a> <a href="../sp/"><img src="http://7b47f8f8b78332798868-a285273e418667e03d0d7008c32eb72c.r4.cf2.rackcdn.com/Spain.png" class="flag" alt="Sp"/></a></h1>

    <h2 id="startrace">.startrace <em>juego</em> <span class="grey right">(#speedrunslive)</span></h2>
    
    <p>Ésto creará una nueva carrera para que la gente se una.</p>
    <p>Nota: éste comando utiliza <em>abreviaciones</em> de juegos, NO el nombre completo del juego. Puedes encontrar la abreviación de cada juego en sus páginas respectivas. Un Ejemplo:</p>
    <p><img src="http://c15111086.r86.cf2.rackcdn.com/error.gif"><code>.startrace Super Mario 64</code></p>
    <p><img src="http://c15111086.r86.cf2.rackcdn.com/success.gif"><code>.startrace sm64</code></p>
    <p>Si estás empezando una carrera por algún juego en el cúal nunca antes se ha jugado, entonces debes crear una abreviación con sentido común respecto del nombre del juego.</p>
    <p>No empieces una carrera a menos que ya tengas un oponente como mínimo que se una a tu carrera. Puedes preguntar en el chat principal por si alguien quiere jugar contra ti.</p>
    
    <h2 id="enter">.enter <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Escribe ésto para participar en una carrera.</p>
    
    <h2 id="unenter">.unenter <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Éste comando te removerá de la carrera.</p>
    <p>Si la carrera ya está en progreso no puedes utilizar éste comando, pero puedes utilizar <code>.quit</code> para renunciar a la carrera (no es aconsejable acumular renuncias).</p>
    
    <h2 id="entrants">.entrants <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Muestra el listado completo de los participantes de la carrera y sus estados actuales.</p>
    
    <h2 id="ready">.ready <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Utiliza éste comando cuando estés listo para empezar la carrera.</p>
    <p>Una vez que todos escriban éste comando comenzará la cuenta regresiva y luego se dará inicio a la carrera.</p>
    
    <h2 id="unready">.unready <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Utiliza éste comando despues de <code>.ready</code> si no estás listo.</p>
    
    <h2 id="time">.time <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Muestra el tiempo que lleva la carrera.</p>
    
    <h2 id="goal">.goal <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Muestra la meta de la carrera.</p>
    
    <h2 id="setgoal">.setgoal <em>meta</em> <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Estable la meta de la carrera.</p>
    <p>Una meta debe ser establecida antes de que los usuarios estén listos para jugar (.ready).</p>
    
    <h2 id="setgame">.setgame <em>juego</em> <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Cambia el juego de la carrera.</p>
    <p>Éste comando se puede utilizar para corregir la meta de la carrera.</p>
    <p><code>.rematch</code> se puede utilizar después de finalizar una carrera para volver a correrla.</p>
    
    </p><h2 id="done">.done <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Debes escribir éste comando una vez que termines la carrera.</p> 
    <p>No puedes escribir éste comando sin antes terminar la meta establecida.</p>
    <p>Si lo haz escrito y aun no cumples con la meta usa <code>.quit</code> para renunciar a la carrera (si haces abuso de éste problema podrías ser sancionado o en su defecto un posible Ban).</p>
    
    <h2 id="undone">.undone <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Usa éste comando cuando accidentalmente escribiste <code>.done</code> o si escribiste <code>.quit</code> para renunciar y deseas continuar con tu partida.</p>
    
    <h2 id="quit">.quit <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Utiliza éste comando cuando no tengas intenciones de terminar la carrera.</p>
    <p>Si dejas el canal de la carrera por demaciado tiempo sin hacer uso del comando <code>.quit</code>, podrías ser descalificado.</p>
    <p>No se recomienda bajo ninguna circunstancia hacer uso excesivo del comando <code>.quit</code></p>
    
    <h2 id="comment">.comment <em>comentario</em> <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Quizá quieras dejar un comentario en la carrera al terminar, éste comando tiene un límite de 140 caracteres.</p>
    
    <h2 id="rematch">.rematch <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Una vez que la carrera termina, puedes hacer uso de éste comando si es que existiese la intención de volver a competir la misma carrera.</p>
    <p>Al escribir el comando .rematch también puedes volver a hacer uso del comando <code>.setgoal</code> si fuese necesario para establecer una nueva meta o la misma.</p>

    <h2 id="races">.races <span class="grey right">(#speedrunslive)</span></h2>
    <p>Sirve para revisar las carreras que están en progreso.</p>
    <p>Para evitar spam en el canal principal puedes revisar la página principal precisamente en el tag "races".</p>
    
    <h2 id="setstream">.setstream <em>url</em> <span class="grey right">#speedrunslive o #srl-xxxxx</span></h2>
    <p>Utiliza éste comando para establecer tu stream en SRL.</p>
    <p>Ejemplo: <code>.setstream http://twitch.tv/cosmowright</code></p>
    
    <h2 id="stream">.stream <em>nombre</em> <span class="grey right">#speedrunslive o #srl-xxxxx</span></h2>
    <p>Otorga el stream del nombre solicitado.</p>
    
    <h2 id="filename">.filename <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Genera 2 letras al nombre del archivo al azar luego que empiece la cuenta regresiva.</p>
    <p>Se usa principalmente para pruebas en juegos como <em>The Legend of Zelda: Ocarina of Time</em>.</p>
    <p>Exigir a los participantes utilizar el nombre de archivo generado asegura que todo el mundo comience al mismo tiempo.</p>
    
    <h1>Comandos de usuario Voice</h1>
    
    <h2 id="queue">.queue <span class="grey right">(#speedrunslive)</span></h2>
    <p>Entrega un listado completo de carreras que aun no se han finalizado/grabado.</p>
    
    <h2 id="record">.record <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Use éste comando para grabar las carreras completadas.</p>
    <p>Antes de grabar la carrera, asegurate de que todo esté en órden.</p>
    
    <h2 id="end">.end <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Se utiliza para matar una carrera.</p>
    <p>Las carreras pueden ser terminadas si todos en ella están de acuerdo en finalizarla, así también si nadie se une o si la meta es inapropiada.</p>
    
    <h2 id="dq">.dq <em>name</em> <em>razón</em> <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Razón para ser descalificado:</p>
    <ul>
    <li>participante que rompe las reglas de la meta.</li>
    <li>participante que hace trampa</li>
    <li>participante que desaparece por demaciado tiempo sin renunciar a la carrera</li>
    </ul>
    
    <h2 id="remove">.remove <em>nombre</em> <span class="grey right">(#srl-xxxxx)</span></h2>
    <p>Remueve a un participante de la carrera.</p>
    <p>Si la carrera está en progreso y un participante necesita irse repentinamente,él debería de renunciar a la carrera instantáneamente preguntando si es que puede ser removido de ella. Si una carrera se llevará a cabo por alguien que nunca se preparó, entonces la eliminación sería apropiada.</p>
    
    <h2 id="creategame">.creategame <em>juego</em> <em>Nombre completo del juego</em> <span class="grey right">#speedrunslive o #srl-xxxxx</span></h2>
    <p>Agregará un juego nuevo a la base de datos.</p>
    <p>No debes crear un juego a menos que esté listo para ser grabado.</p>
    <p>Puedes usar éste comando para cambiar el nombre completo del juego si ya estubiese creado.</p>
    
    </div>
    </div>
    <?php include($_SERVER['DOCUMENT_ROOT'] . '/footer.php'); ?>
