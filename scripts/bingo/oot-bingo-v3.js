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
  results.append ("OoT Bingo <strong>v3</strong>&emsp;Seed: <strong>" + 
  SEED + "</strong>&emsp;Card type: <strong>" + cardtype + "</strong>");
  
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
      thisRand = Math.floor(bingoList[getDifficulty].length * Math.random()); // random item #
      thisName = bingoList[getDifficulty][thisRand].name; // name of item
      thisType = bingoList[getDifficulty][thisRand].type; // type of item
      x = checkLine(i, thisType);
      comboBreaker++;
      if (comboBreaker > 15) {x = true;}
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
        //console.log(thisType + " matched on item " + i); IMPORTANT DEBUG LINE :)
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
    
    bingoList[d].push({ name: "Bullet Bag (50)", type: "deku" });
    bingoList[d].push({ name: "20 Deku Sticks", type: "sticks" });
    bingoList[d].push({ name: "Defeat a Skull Kid", type: "skullkid" });
    bingoList[d].push({ name: "Fairy Slingshot", type: "deku" });
    bingoList[d].push({ name: "Map & Compass in Deku Tree", type: "deku" });
    bingoList[d].push({ name: "Map & Compass in Bottom of the Well", type: "botw" });
    d++;
    bingoList[d].push({ name: "Bullet Bag (40)", type: "deku" });
    bingoList[d].push({ name: "Pocket Cucco", type: "atrade" });
    bingoList[d].push({ name: "Bottled Fish", type: "bottle" });
    bingoList[d].push({ name: "Bottled Fairy", type: "bottle" });
    bingoList[d].push({ name: "Bomb Bag (40)", type: "dc" });
    bingoList[d].push({ name: "Red Potion", type: "bottle" });
    bingoList[d].push({ name: "Green Potion", type: "bottle" });
    d++;
    bingoList[d].push({ name: "Map & Compass in Dodongo's Cavern", type: "dc" });
    bingoList[d].push({ name: "Cojiro", type: "atrade" });
    bingoList[d].push({ name: "Minuet of Forest", type: "forest" });
    bingoList[d].push({ name: "Bottled Poe", type: "ganon" });
    bingoList[d].push({ name: "Ruto's Letter", type: "bottle" });
    d++;
    bingoList[d].push({ name: "Defeat both Dead-Hands", type: "shadow" });
    bingoList[d].push({ name: "Black Gauntlets", type: "strength" });
    bingoList[d].push({ name: "Adult's Wallet", type: "strength" });
    bingoList[d].push({ name: "Bomb Bag (30)", type: "dc" });
    bingoList[d].push({ name: "Goron Tunic", type: "dmc" });
    bingoList[d].push({ name: "Bolero of Fire", type: "dmc" });
    d++;
    bingoList[d].push({ name: "Goron's Ruby", type: "dc" });
    bingoList[d].push({ name: "30 Deku Nuts", type: "nuts" });
    bingoList[d].push({ name: "Map & Compass in Shadow Temple", type: "shadow" });
    bingoList[d].push({ name: "Both heart pieces in Death Mountain Crater", type: "dmc" });
    bingoList[d].push({ name: "Beat Dodongo's Cavern", type: "dc" });
    bingoList[d].push({ name: "Defeat King Dodongo", type: "dc" });
    d++;
    bingoList[d].push({ name: "Defeat Queen Gohma", type: "deku" });
    bingoList[d].push({ name: "All 3 Kokiri Forest area Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "5 Hearts", type: "hearts" });
    bingoList[d].push({ name: "Cow in House", type: "cow" });
    bingoList[d].push({ name: "Milk", type: "lonlon" });
    bingoList[d].push({ name: "Epona's Song", type: "lonlon" });
    d++;
    bingoList[d].push({ name: "At least 3 songs", type: "atrade" });
    bingoList[d].push({ name: "Defeat all Lizalfos in Dodongo's Cavern", type: "dc" });
    bingoList[d].push({ name: "Ice Arrows", type: "water" });
    bingoList[d].push({ name: "2 unused keys in Gerudo Training Grounds", type: "water" });
    bingoList[d].push({ name: "Defeat Phantom Ganon", type: "forest" });
    bingoList[d].push({ name: "Requiem of Spirit", type: "spirit" });
    bingoList[d].push({ name: "Kokiri's Emerald", type: "deku" });
    d++;
    bingoList[d].push({ name: "Forest Medallion", type: "forest" });
    bingoList[d].push({ name: "All 4 Lost Woods area Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "Beat the Deku Tree", type: "deku" });
    bingoList[d].push({ name: "3 unused keys in Gerudo Training Grounds", type: "water" });
    bingoList[d].push({ name: "Map & Compass in Jabu-Jabu", type: "jabu" });
    d++;
    bingoList[d].push({ name: "Beat the Forest Temple", type: "forest" });
    bingoList[d].push({ name: "Blue Fire", type: "ice" });
    bingoList[d].push({ name: "Defeat Big Octo", type: "jabu" });
    bingoList[d].push({ name: "Ice Cavern Heart Piece", type: "ice" });
    bingoList[d].push({ name: "Map & Compass in Ice Cavern", type: "ice" });
    bingoList[d].push({ name: "Zora Tunic", type: "ice" });
    bingoList[d].push({ name: "All 4 Skulltulas in Jabu-Jabu", type: "jabu" });
    bingoList[d].push({ name: "All 3 Skulltulas in Ice Cavern", type: "ice" });
    bingoList[d].push({ name: "Zora's Sapphire", type: "jabu" });
    d++;
    bingoList[d].push({ name: "Plant bean in Death Mountain Crater", type: "dmc" });
    bingoList[d].push({ name: "Defeat a White Wolfos", type: "ice" });
    bingoList[d].push({ name: "Defeat Barinade", type: "jabu" });
    bingoList[d].push({ name: "Iron Boots", type: "ice" });
    bingoList[d].push({ name: "6 Hearts", type: "hearts" });
    bingoList[d].push({ name: "3 Tunics", type: "ice" });
    bingoList[d].push({ name: "3 Boots", type: "ice" });
    d++;
    bingoList[d].push({ name: "All 5 Skulltulas in Dodongo's Cavern", type: "dc" });
    bingoList[d].push({ name: "Odd Potion", type: "atrade" });
    bingoList[d].push({ name: "At least 4 songs", type: "atrade" });
    bingoList[d].push({ name: "Giant's Knife", type: "ice" });
    bingoList[d].push({ name: "3 Swords", type: "ice" });
    bingoList[d].push({ name: "Blue Potion", type: "atrade" });
    bingoList[d].push({ name: "Water Medallion", type: "water" });
    d++;
    bingoList[d].push({ name: "Beat Jabu-Jabu's Belly", type: "jabu" });
    bingoList[d].push({ name: "All 4 Skulltulas in Deku Tree", type: "deku" });
    bingoList[d].push({ name: "Double Magic", type: "dmc" });
    bingoList[d].push({ name: "Keaton Mask", type: "strength" });
    bingoList[d].push({ name: "Defeat Morpha", type: "water" });
    bingoList[d].push({ name: "Fairy Bow", type: "forest" });
    bingoList[d].push({ name: "Forest Temple Boss Key", type: "forest" });
    bingoList[d].push({ name: "Beat the Water Temple", type: "water" });
    bingoList[d].push({ name: "Get Bombchu chest in Spirit Temple", type: "spirit" });
    d++;
    bingoList[d].push({ name: "Map & Compass in Forest Temple", type: "forest" });
    bingoList[d].push({ name: "Megaton Hammer", type: "fire" });
    bingoList[d].push({ name: "Map & Compass in Fire Temple", type: "fire" });
    bingoList[d].push({ name: "At least 9 Magic Beans", type: "beans" });
    bingoList[d].push({ name: "Fire Temple Boss Key", type: "fire" });
    bingoList[d].push({ name: "At least 5 songs", type: "atrade" });
    d++;
    bingoList[d].push({ name: "Defeat both Flare Dancers", type: "fire" });
    bingoList[d].push({ name: "Defeat Volvagia", type: "fire" });
    bingoList[d].push({ name: "Quiver (40)", type: "forest" });
    bingoList[d].push({ name: "Beat the Fire Temple", type: "fire" });
    bingoList[d].push({ name: "Silver Gauntlets", type: "strength" });
    bingoList[d].push({ name: "Fire Medallion", type: "fire" });
    bingoList[d].push({ name: "Ganon's Castle Boss Key", type: "ganon" });
    d++;
    bingoList[d].push({ name: "Map & Compass in Water Temple", type: "water" });
    bingoList[d].push({ name: "Water Temple Boss Key", type: "water" });
    bingoList[d].push({ name: "Mirror Shield", type: "ice" });
    bingoList[d].push({ name: "3 Shields", type: "ice" });
    bingoList[d].push({ name: "At least 6 songs", type: "atrade" });
    bingoList[d].push({ name: "Giant's Wallet", type: "strength" });
    bingoList[d].push({ name: "5 unused keys in Gerudo Training Grounds", type: "water" });
    bingoList[d].push({ name: "4 unused keys in Gerudo Training Grounds", type: "water" });
    d++;
    bingoList[d].push({ name: "500 Rupees", type: "strength" });
    bingoList[d].push({ name: "Poacher's Saw", type: "atrade" });
    bingoList[d].push({ name: "Serenade of Water", type: "ice" });
    bingoList[d].push({ name: "Prelude of Light", type: "atrade" });
    bingoList[d].push({ name: "Nocturne of Shadow", type: "atrade" });
    bingoList[d].push({ name: "Shadow Temple Boss Key", type: "shadow" });
    bingoList[d].push({ name: "Defeat Bongo-Bongo", type: "shadow" });
    bingoList[d].push({ name: "Beat the Shadow Temple", type: "shadow" });
    bingoList[d].push({ name: "All 8 Kakariko area Skulltulas", type: "skulltula" });
    d++;
    bingoList[d].push({ name: "All 4 Gerudo Valley area Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "Bottled Big Poe", type: "bigpoe" });
    bingoList[d].push({ name: "All 5 Skulltulas in Forest Temple", type: "forest" });
    bingoList[d].push({ name: "Farore's Wind", type: "fw" });
    bingoList[d].push({ name: "All 4 Lon-Lon Ranch area Skulltulas", type: "jabu" });
    bingoList[d].push({ name: "All 3 Skulltulas in Bottom of the Well", type: "botw" });
    bingoList[d].push({ name: "Broken Goron's Sword", type: "atrade" });
    d++;
    bingoList[d].push({ name: "6 unused keys in Gerudo Training Grounds", type: "water" });
    bingoList[d].push({ name: "Gerudo's Card", type: "fortress" });
    bingoList[d].push({ name: "All Gerudo Fortress Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "All 5 Skulltulas in Fire Temple", type: "fire" });
    bingoList[d].push({ name: "37th heart piece (Fortress)", type: "fortress" });
    bingoList[d].push({ name: "Double Defense", type: "dd" });
    d++;
    bingoList[d].push({ name: "Saria's Song", type: "strength" });
    bingoList[d].push({ name: "Blue Gauntlets", type: "strength" });
    bingoList[d].push({ name: "Goron Bracelet", type: "strength" });
    bingoList[d].push({ name: "Nayru's Love", type: "spirit" });
    bingoList[d].push({ name: "Defeat Dark Link", type: "water" });
    bingoList[d].push({ name: "At least 7 songs", type: "atrade" });
    bingoList[d].push({ name: "Din's Fire", type: "df" });
    d++;
    bingoList[d].push({ name: "Longshot", type: "water" });
    bingoList[d].push({ name: "Defeat Meg (purple Poe)", type: "forest" });
    bingoList[d].push({ name: "Spirit Temple Boss Key", type: "spirit" });
    bingoList[d].push({ name: "Skull Mask", type: "strength" });
    bingoList[d].push({ name: "Stone of Agony", type: "agony" });
    bingoList[d].push({ name: "Spooky Mask", type: "strength" });
    d++;    
    bingoList[d].push({ name: "Fire Arrow", type: "water" });
    bingoList[d].push({ name: "Defeat Nabooru-Knuckle", type: "spirit" });
    bingoList[d].push({ name: "Prescription", type: "atrade" });
    bingoList[d].push({ name: "Both Hyrule Field area Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "At least 8 songs", type: "atrade" });
    bingoList[d].push({ name: "50 Bombchus", type: "ganon" });
    d++;
    bingoList[d].push({ name: "All 5 Skulltulas in Shadow Temple", type: "shadow" });
    bingoList[d].push({ name: "Map & Compass in Spirit Temple", type: "spirit" });
    bingoList[d].push({ name: "All 8 Death Mountain area Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "3 Tunics & 3 Boots", type: "ice" });
    bingoList[d].push({ name: "3 Swords & 3 Boots", type: "ice" });
	bingoList[d].push({ name: "3 Swords & 3 Tunics", type: "ice" });
    d++;
    bingoList[d].push({ name: "Green Gauntlets", type: "strength" });
	bingoList[d].push({ name: "7 Hearts", type: "hearts" });
    bingoList[d].push({ name: "All 8 Zora's Domain area Skulltulas", type: "jabu" });
    bingoList[d].push({ name: "3 Swords & 3 Shields", type: "ice" });
    bingoList[d].push({ name: "3 Shields & 3 Tunics", type: "ice" });
    bingoList[d].push({ name: "Bunny Hood", type: "strength" });
    d++;
    bingoList[d].push({ name: "Defeat Twinrova", type: "spirit" });
    bingoList[d].push({ name: "3 Shields & 3 Boots", type: "ice" });
    bingoList[d].push({ name: "Beat the Spirit Temple", type: "spirit" });
    bingoList[d].push({ name: "Light Arrows", type: "atrade" });
    bingoList[d].push({ name: "At least 9 songs", type: "atrade" });
    bingoList[d].push({ name: "All 5 Lake Hylia Skulltulas", type: "skulltula" });
    d++;
    bingoList[d].push({ name: "All 5 Skulltulas in Spirit Temple", type: "spirit" });
    bingoList[d].push({ name: "Golden Gauntlets", type: "strength" });
    bingoList[d].push({ name: "7 unused keys in Gerudo Training Grounds", type: "water" });
    bingoList[d].push({ name: "All 4 Market area Skulltulas", type: "skulltula" });
    bingoList[d].push({ name: "8 Hearts", type: "hearts" });
    bingoList[d].push({ name: "All 5 Skulltulas in Water Temple", type: "water" });
    bingoList[d].push({ name: "Claim Check", type: "atrade" });
    bingoList[d].push({ name: "Quiver (50)", type: "forest" });
    bingoList[d].push({ name: "At least 10 songs", type: "atrade" });
  }
    
}

$(Behavior.setup);