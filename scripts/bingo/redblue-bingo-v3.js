var Behavior = {};

Behavior.setup = function () {
  var SEED = gup( 'seed' );
  var MODE = gup( 'mode' );
  var cardtype = "string";
  if (MODE == "short") {
    cardtype = "Short";
  } else {
    cardtype = "Normal";
  }
  
  Math.seedrandom(SEED);
  var MAX_SEED = 999999;
  var results = $("#results");
  results.append ("Pokemon red/blue bingo <strong>v3</strong>&emsp;Seed: <strong>" + SEED + "</strong>&emsp;Card type: <strong>" + cardtype + "</strong>");
  
  var bingoList = []; 
  var lineCheckList = [];
  
  lineCheckList[1]  = [1,2,3,4,5,10,15,20,6,12,18,24];
  lineCheckList[2]  = [0,2,3,4,6,11,16,21];
  lineCheckList[3]  = [0,1,3,4,7,12,17,22];
  lineCheckList[4]  = [0,1,2,4,8,13,18,23];
  lineCheckList[5]  = [0,1,2,3,8,12,16,20,9,14,19,24];
  
  lineCheckList[6]  = [0,10,15,20,6,7,8,9];
  lineCheckList[7]  = [0,12,18,24,5,7,8,9,1,11,16,21];
  lineCheckList[8]  = [5,6,8,9,2,12,17,22];
  lineCheckList[9]  = [4,12,16,20,9,7,6,5,3,13,18,23];
  lineCheckList[10]  = [4,14,19,24,8,7,6,5];
  
  lineCheckList[11] = [0,5,15,20,11,12,13,14];
  lineCheckList[12] = [1,6,16,21,10,12,13,14];
  lineCheckList[13] = [0,6,12,18,24,20,16,8,4,2,7,17,22,10,11,13,14];
  lineCheckList[14] = [3,8,18,23,10,11,12,14];
  lineCheckList[15] = [4,9,19,24,10,11,12,13];
  
  lineCheckList[16] = [0,5,10,20,16,17,18,19];
  lineCheckList[17] = [15,17,18,19,1,6,11,21,20,12,8,4];
  lineCheckList[18] = [15,16,18,19,2,7,12,22];
  lineCheckList[19] = [15,16,17,19,23,13,8,3,24,12,6,0];
  lineCheckList[20] = [4,9,14,24,15,16,17,18];
  
  lineCheckList[21] = [0,5,10,15,16,12,8,4,21,22,23,24];
  lineCheckList[22] = [20,22,23,24,1,6,11,16];
  lineCheckList[23] = [2,7,12,17,20,21,23,24];
  lineCheckList[24] = [20,21,22,24,3,8,13,18];
  lineCheckList[25] = [0,6,12,18,20,21,22,23,19,14,9,4];
  
  $("td").toggle(
    function () {
      $(this).css({"background-color":"#005511"});
    },
    function () {
      $(this).css({"background-color":"#550011"});
    },
    function () {
      $(this).css({"background-color":"#000000"});
    }
  );
  
  for (var i=1;i<=25;i++) {
    bingoList[i] = [];
    $('#slot'+i).attr('data-difficulty', difficulty(i)); // put difficulty in attr
    $('#slot'+i).attr('data-type', 'none'); // fill item attr with none
  }
    
  populateList();
  
  for (var i=1;i<=25;i++) {
    var x = false;
    var getDifficulty, thisRand, thisName, thisType, comboBreaker;
    while (x == false) {
      getDifficulty = $('#slot'+i).attr('data-difficulty'); // difficulty of current square
      thisRand = Math.floor(bingoList[getDifficulty].length * Math.random()); // random item 
      thisName = bingoList[getDifficulty][thisRand].name; // name of item
      thisType = bingoList[getDifficulty][thisRand].type; // type of item
      x = checkLine(i, thisType);
      comboBreaker++;
      if (comboBreaker > 10) {x = true;}
    }
    comboBreaker = 0;
    $('#slot'+i).append(thisName); // add the name to the square
    $('#slot'+i).attr('data-type', thisType); // put the type in the attr
    bingoList[getDifficulty].splice(thisRand,1);
    //results.append("<br/>Removed: " + getDifficulty + " " + thisRand);
    //results.append("<br/>randomized: " + thisRand + " " + thisName + " " + thisType);
  }
  
  function checkLine (i, thisType) {
    
    //results.append ("<br/>i: " + i + "&amp;" + thisType);
    
    for (var j=0; j<=lineCheckList[i].length; j++) {
      // if it finds the same itemtype in an adjacent row/colum/diagonal, fail
      if ( $('#slot'+(lineCheckList[i][j]+1)).attr('data-type') == thisType) {
        //results.append("<br/>FIXING!!");
        return false;
      }
    }
    return true;
  }
  
  function gup( name ) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
      return "";
    else
      return results[1];
  }
  
  function mirror(i) {
    if      (i == 0) { i = 4; }
    else if (i == 1) { i = 3; }
    else if (i == 3) { i = 1; }
    else if (i == 4) { i = 0; }
    return i;
  }
  
  function difficulty(i) {
    var x = 0;
    var y = 0;
    i--; // i = 0 on square 0,0; 24 on square 4,4
    x = i%5; // take x position
    x = 5+(SEED-x); // randomize it with the seed
    y = Math.floor(i/5); // same for y... except:
    y = 5+(Math.floor(SEED/10)-y); // randomize it using the tens place
    
    //results.append("<br/>index: " + i + " | x: " + x + " | y: " + y);
    
    if (SEED > MAX_SEED/2) { // one in two chance of swapping x and y to rotate the board
      var temp = x;
      x = y;
      y = temp;
    }
    
    x = x%5;
    y = y%5;
    
    // mirror the board sometimes
    if (SEED > MAX_SEED*(3/4)) {
      x = mirror(x);
      y = mirror(y);
    }
    else if (SEED > MAX_SEED*(2/4)) {
      x = mirror(x);
    }
    else if (SEED > MAX_SEED*(1/4)) {
      y = mirror(y);
    }
    
    var value = (5*((x+2*y)%5)) + ((x+3*y)%5); // magic square generator
    if (MODE == "short") { value = Math.floor(value/2); } // if short mode, limit difficulty
    value++;
    //results.append("<br/>VALUE: " + value);
    return value;
  }
  
  function populateList() {

    var d = 1; // difficulty level
    
    bingoList[d].push({ name: "TM 12 (Water Gun)", type: "watergun" });
    bingoList[d].push({ name: "Town Map", type: "map" });
    bingoList[d].push({ name: "TM 39 (Swift)", type: "swift" });
    d++;
    bingoList[d].push({ name: "Rattata", type: "lol" });
    bingoList[d].push({ name: "Vaporeon", type: "vapor" });
    bingoList[d].push({ name: "Farfetch'd", type: "trades" });
    d++;
    bingoList[d].push({ name: "Kill or catch both Snorlaxes", type: "snorlax" });
    bingoList[d].push({ name: "TM 19 (Seismic Toss)", type: "seismic" });
    bingoList[d].push({ name: "Kill a Haunter", type: "haunt" });
    d++;
    bingoList[d].push({ name: "TM 44 (Rest)", type: "rest" });
    bingoList[d].push({ name: "1,000 coins in Game Corner", type: "money" });
    bingoList[d].push({ name: "Any Pokemon with a multi-hit move", type: "fury" });
    d++;
    bingoList[d].push({ name: "4 Badges", type: "badges" });
    bingoList[d].push({ name: "Clefable", type: "moon" });
    bingoList[d].push({ name: "Good Rod", type: "rod" });
    d++;
    bingoList[d].push({ name: "Beedrill or Butterfree", type: "bug" });
    bingoList[d].push({ name: "Fearow", type: "fury" });
    bingoList[d].push({ name: "TM 10 (Double Edge)", type: "edge" });
    d++;
    bingoList[d].push({ name: "Vileplume or Victreebell", type: "grassy" });
    bingoList[d].push({ name: "Arcanine or Ninetales", type: "fiery" });
    bingoList[d].push({ name: "TM 40 (Skull Bash)", type: "safari" });
    d++;
    bingoList[d].push({ name: "Teach TM 49 (Tri Attack)", type: "tri" });
    bingoList[d].push({ name: "Raichu", type: "elec" });
    bingoList[d].push({ name: "Wigglytuff", type: "moon" });
    bingoList[d].push({ name: "3 HMs", type: "hm" });
    d++;
    bingoList[d].push({ name: "HM5 (Flash)", type: "hm" });
    bingoList[d].push({ name: "Nidoking or Nidoqueen", type: "nido" });
    bingoList[d].push({ name: "2 PP Ups", type: "pp" });
    bingoList[d].push({ name: "Defeat 2 Engineers on route 11", type: "engineers" });
    d++;
    bingoList[d].push({ name: "Mr. Mime", type: "trades" });
    bingoList[d].push({ name: "Dugtrio", type: "trio" });
    bingoList[d].push({ name: "TM26 (Earthquake)", type: "silph" });
    d++;
    bingoList[d].push({ name: "Ditto", type: "ditto" });
    bingoList[d].push({ name: "Beat Fighting Gym", type: "fighting" });
    bingoList[d].push({ name: "Kadabra", type: "abra" });
    bingoList[d].push({ name: "One starting move on starter", type: "tackle" });
    d++;
    bingoList[d].push({ name: "TM42 (Dream Eater)", type: "dream" });
    bingoList[d].push({ name: "Starmie", type: "water" });
    bingoList[d].push({ name: "Cloyster", type: "water" });
    d++;
    bingoList[d].push({ name: "Tentacruel", type: "surf" });
    bingoList[d].push({ name: "Any pokemon with a 5 PP non-TM move", type: "rock" });
    bingoList[d].push({ name: "Super Rod", type: "rod" });
    d++;
    bingoList[d].push({ name: "Any Pokemon with Stomp", type: "safari" });
    bingoList[d].push({ name: "Gyarados", type: "gyarados" });
    bingoList[d].push({ name: "Psyduck", type: "psyduck" });
    bingoList[d].push({ name: "20 pokemon caught", type: "catch" });
    d++;
    bingoList[d].push({ name: "Onix", type: "rock" });
    bingoList[d].push({ name: "Gobat", type: "golbat" });
    bingoList[d].push({ name: "Venomoth", type: "venomoth" });
    bingoList[d].push({ name: "Charmeleon", type: "starter" });
    d++;
    bingoList[d].push({ name: "Tangela", type: "tangela" });
    bingoList[d].push({ name: "Ivysaur", type: "starter" });
    bingoList[d].push({ name: "4 Rare Candies", type: "candy" });
    d++;
    bingoList[d].push({ name: "TM 41 (Softboiled) ", type: "softboiled" });
    bingoList[d].push({ name: "4 different level 30 Pokemon", type: "team" });
    bingoList[d].push({ name: "5 Badges", type: "badges" });
    d++;
    bingoList[d].push({ name: "Electrode", type: "elec" });
    bingoList[d].push({ name: "Squirtle", type: "starter" });
    bingoList[d].push({ name: "Kabuto or Omanyte", type: "fossil" });
    d++;
    bingoList[d].push({ name: "Venusaur", type: "starter" });
    bingoList[d].push({ name: "Dewgong", type: "dewgong" });
    bingoList[d].push({ name: "Lapras", type: "silph" });
    d++;    
    bingoList[d].push({ name: "Charizard", type: "starter" });
    bingoList[d].push({ name: "TM16 (Payday)", type: "payday" });
    bingoList[d].push({ name: "Graveler", type: "rock" });
    bingoList[d].push({ name: "Master Ball", type: "silph" });
    d++;
    bingoList[d].push({ name: "TM 31 (Mimic)", type: "silph" });
    bingoList[d].push({ name: "Kill a Parasect", type: "parasect" });
    bingoList[d].push({ name: "TM01 (Mega Punch)", type: "megapunch" });
    bingoList[d].push({ name: "Arbok or Sandslash", type: "raise" });
    d++;
    bingoList[d].push({ name: "Magnemite", type: "power" });
    bingoList[d].push({ name: "$85,000", type: "money" });
    bingoList[d].push({ name: "6 Badges ", type: "badges" });
    d++;
    bingoList[d].push({ name: "Cubone", type: "cubone" });
    bingoList[d].push({ name: "Aerodactyl", type: "fossil" });
    bingoList[d].push({ name: "Hypno", type: "raise" });
    d++;
    bingoList[d].push({ name: "Magmar or Electabuzz", type: "someass" });
    bingoList[d].push({ name: "Beat Blaine", type: "badges" });
    bingoList[d].push({ name: "Persian or Primeape", type: "raise" });
    d++;
    bingoList[d].push({ name: "Chansey or Kangaskhan or Tauros", type: "safari" });
    bingoList[d].push({ name: "Any level 50 pokemon", type: "zapdos" });
    bingoList[d].push({ name: "75 pokemon seen", type: "power" });
  }
    
}

$(Behavior.setup);