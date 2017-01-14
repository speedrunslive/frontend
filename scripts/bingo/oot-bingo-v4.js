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
  
  Math.seedrandom(SEED); //sets up the RNG
  var MAX_SEED = 999999; //1 million cards
  var results = $("#results");
  results.append ("OoT Bingo <strong>v4</strong>&emsp;Seed: <strong>" + 
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
  
  $("#bingo tr td").toggle(
    function () {
      $(this).addClass("greensquare");
    },
    function () {
      $(this).addClass("redsquare").removeClass("greensquare");
    },
    function () {
      $(this).removeClass("redsquare");
    }
    
  );
  
  /*
  for (var i=1;i<=25;i++) {
    bingoList[i] = [];
    $('#slot'+i).attr('data-difficulty', difficulty(i)); // put difficulty in attr
    $('#slot'+i).attr('data-type', 'none');  // fill type attr with none
  } 
  */
  var bingoBoard = []; //the board itself stored as an array first
  for (var i=1;i<=25;i++) {
    bingoBoard[i] = {difficulty: difficulty(i)}; //array with objects that
    //console.log(bingoBoard[i].difficulty);       //store the difficulty
  }                                          // in order 1-25
  
  populateList();
  
  //populate the bingo board in the array
  for (var i=1; i<=25; i++) {
    var getDifficulty = bingoBoard[i].difficulty; // difficulty of current square
    var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
    if (RNG == bingoList[getDifficulty].length) { RNG--; }; //fix a miracle
    var j = 0, synergy = 0, currentObj = null, minSynObj = null;
    
    do {
      currentObj = bingoList[getDifficulty][(j+RNG)%bingoList[getDifficulty].length];
      synergy = checkLine(i, currentObj.types);
      if (minSynObj == null || synergy < minSynObj.synergy) {
        minSynObj = { synergy: synergy, value: currentObj };
      }
      j++;
    } while ((synergy != 0) && (j<bingoList[getDifficulty].length));
    
    bingoBoard[i].types = minSynObj.value.types;
    bingoBoard[i].name = minSynObj.value.name;
    bingoBoard[i].synergy = minSynObj.synergy;
  }
  
  //populate the actual table on the page
  for (i=1; i<=25; i++) {
    $('#slot'+i).append(bingoBoard[i].name);
    //$('#slot'+i).append("<br/>" + bingoBoard[i].types.toString());
    //$('#slot'+i).append("<br/>" + bingoBoard[i].synergy);
  }
  
  function checkLine (i, typesA) {
    var synergy = 0;
    
    for (var j=0; j<lineCheckList[i].length; j++) {
      var typesB = bingoBoard[lineCheckList[i][j]+1].types;
      if (typeof typesB != 'undefined') {
      
        for (var k=0; k < typesA.length; k++) {
          for (var l=0; l < typesB.length; l++) {
            if (typesA[k] == typesB[l]) {
              synergy++; // if match increase
              if (k==0) { synergy++ }; // if main type increase
              if (l==0) { synergy++ }; // if main type increase
            }
          }
        }
      }
      
    }
    
    return synergy;
  }
  
  //OLD SHIT
  /*
  for (var i=1;i<=25;i++) {
    var x = false;
    var getDifficulty, thisRand, thisName, thisType, comboBreaker;
    getDifficulty = $('#slot'+i).attr('data-difficulty'); // difficulty of current square
    while (x == false) {
      thisRand = Math.floor(bingoList[getDifficulty].length * Math.random()); // random item #
      thisName = bingoList[getDifficulty][thisRand].name; // name of item
      thisType = bingoList[getDifficulty][thisRand].type; // type of item
      thisType2 = bingoList[getDifficulty][thisRand].type2; // type of item
      x = checkLine(i, thisType, thisType2);
      comboBreaker++;
      if (comboBreaker > 15) {x = true;}
    }
    comboBreaker = 0;
    $('#slot'+i).append(thisName); // add the name to the square
    $('#slot'+i).attr('data-type', thisType); // put the type in the attr
    if (thisType2 != "") { $('#slot'+i).attr('data-type2', thisType2); } // sometimes put type2
    bingoList[getDifficulty].splice(thisRand,1);
    //results.append("<br/>Removed: " + getDifficulty + " " + thisRand);
    //results.append("<br/>randomized: " + thisRand + " " + thisName + " " + thisType);
  }
  */
  
  

  
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
    
    bingoList[1] = [
      { name: "Bullet Bag (50)", types: ["deku"] },
      { name: "At least 20 Deku Sticks", types: ["sticks"] },
      { name: "Defeat a Skull Kid", types: ["skullkid"] },
      { name: "Fairy Slingshot", types: ["deku"] },
      { name: "Map & Compass in Deku Tree", types: ["deku"] },
      { name: "Map & Compass in Bottom of the Well", types: ["botw"] }
    ];
    bingoList[2] = [
      { name: "Bullet Bag (40)", types: ["deku"] },
      { name: "Pocket Cucco", types: ["rba"] },
      { name: "Bottled Fish", types: ["bottle", "rba"] },
      { name: "Bottled Fairy", types: ["bottle", "rba"] },
      { name: "Bomb Bag (40)", types: ["dc", "rba"] },
      { name: "Red Potion", types: ["bottle", "rba"] },
      { name: "Green Potion", types: ["bottle", "rba"] }
    ];
    bingoList[3] = [
      { name: "Map & Compass in Dodongo's Cavern", types: ["dc"] },
      { name: "Cojiro", types: ["rba"] },
      { name: "Minuet of Forest", types: ["forest", "songs"] },
      { name: "Bottled Poe", types: ["ganon", "rba"] },
      { name: "Ruto's Letter", types: ["ruto"] },
      { name: "Goron Tunic", types: ["dmc", "fire"] }
    ];
    bingoList[4] = [
      { name: "Defeat both Dead-Hands", types: ["shadow", "botw"] },
      { name: "Black Gauntlets", types: ["strength", "rba"] },
      { name: "Adult's Wallet", types: ["strength", "rba"] },
      { name: "Bomb Bag (30)", types: ["dc", "rba"] },
      { name: "Bolero of Fire", types: ["dmc", "fire"] }
    ];
    bingoList[5] = [
      { name: "Goron's Ruby", types: ["dc", "rba"] },
      { name: "At least 30 Deku Nuts", types: ["nuts", "forest"] },
      { name: "Map & Compass in Shadow Temple", types: ["shadow"] },
      { name: "Both heart pieces in Death Mountain Crater", types: ["dmc", "fire"] },
      { name: "Beat Dodongo's Cavern", types: ["dc"] },
      { name: "Defeat King Dodongo", types: ["dc"] }
    ];
    bingoList[6] = [
      { name: "Defeat Queen Gohma", types: ["deku", "hearts"] },
      { name: "All 3 Kokiri Forest area Skulltulas", types: ["skulltula"] },
      { name: "5 Hearts", types: ["hearts"] },
      { name: "Cow in House", types: ["cow"] },
      { name: "Milk", types: ["lonlon"] },
      { name: "Epona's Song", types: ["lonlon", "songs"] }
    ];
    bingoList[7] = [
      { name: "At least 3 songs", types: ["rba", "songs"] },
      { name: "Defeat all Lizalfos in Dodongo's Cavern", types: ["dc"] },
      { name: "Ice Arrows", types: ["gtg", "water"] },
      { name: "2 unused keys in Gerudo Training Grounds", types: ["gtg"] },
      { name: "Defeat Phantom Ganon", types: ["forest"] },
      { name: "Requiem of Spirit", types: ["spirit", "songs"] },
      { name: "Kokiri's Emerald", types: ["deku", "rba"] }
    ];
    bingoList[8] = [
      { name: "Forest Medallion", types: ["forest", "rba"] },
      { name: "All 4 Lost Woods area Skulltulas", types: ["skulltula"] },
      { name: "Beat the Deku Tree", types: ["deku"] },
      { name: "3 unused keys in Gerudo Training Grounds", types: ["gtg"] },
      { name: "Map & Compass in Jabu-Jabu", types: ["jabu"] }
    ];
    bingoList[9] = [
      { name: "Giant's Knife", types: ["sets", "rba"] },
      { name: "3 Swords", types: ["sets", "rba"] },
      { name: "Beat the Forest Temple", types: ["forest"] },
      { name: "Blue Fire", types: ["ice", "sets"] },
      { name: "Defeat Big Octo", types: ["jabu"] },
      { name: "Ice Cavern Heart Piece", types: ["ice"] },
      { name: "Map & Compass in Ice Cavern", types: ["ice"] },
      { name: "Zora Tunic", types: ["sets", "ice"] },
      { name: "All 4 Skulltulas in Jabu-Jabu", types: ["jabu", "skulltula"] },
      { name: "All 3 Skulltulas in Ice Cavern", types: ["ice", "skulltula"] },
      { name: "Zora's Sapphire", types: ["jabu", "rba"] }
    ];
    bingoList[10] = [
      { name: "Plant bean in Death Mountain Crater", types: ["dmc"] },
      { name: "Defeat a White Wolfos", types: ["ice", "gtg"] },
      { name: "Defeat Barinade", types: ["jabu"] },
      { name: "6 Hearts", types: ["hearts"] },
      { name: "3 Tunics", types: ["sets", "ice"] },
      { name: "3 Boots", types: ["sets", "ice"] }
    ];
    bingoList[11] = [
      { name: "Iron Boots", types: ["ice", "sets"] },
      { name: "All 5 Skulltulas in Dodongo's Cavern", types: ["dc", "skulltula"] },
      { name: "Odd Potion", types: ["rba"] },
      { name: "At least 4 songs", types: ["songs", "rba"] },
      { name: "Blue Potion", types: ["rba"] },
      { name: "Water Medallion", types: ["water", "rba"] }
    ];
    bingoList[12] = [
      { name: "Beat Jabu-Jabu's Belly", types: ["jabu"] },
      { name: "All 4 Skulltulas in Deku Tree", types: ["deku", "skulltula"] },
      { name: "Double Magic", types: ["dmc"] },
      { name: "Keaton Mask", types: ["mask", "saria"] },
      { name: "Defeat Morpha", types: ["water"] },
      { name: "Fairy Bow", types: ["forest"] },
      { name: "Forest Temple Boss Key", types: ["forest"] },
      { name: "Beat the Water Temple", types: ["water"] },
      { name: "Get Bombchu chest in Spirit Temple", types: ["spirit", "strength"] }
    ];
    bingoList[13] = [
      { name: "Map & Compass in Forest Temple", types: ["forest"] },
      { name: "Megaton Hammer", types: ["fire"] },
      { name: "Map & Compass in Fire Temple", types: ["fire"] },
      { name: "At least 9 Magic Beans", types: ["beans"] },
      { name: "Fire Temple Boss Key", types: ["fire"] },
      { name: "At least 5 songs", types: ["songs", "rba"] }
    ];
    bingoList[14] = [
      { name: "Defeat both Flare Dancers", types: ["fire"] },
      { name: "Defeat Volvagia", types: ["fire", "sets"] },
      { name: "Quiver (40)", types: ["forest"] },
      { name: "Beat the Fire Temple", types: ["fire", "sets"] },
      { name: "Silver Gauntlets", types: ["strength", "spirit"] },
      { name: "Fire Medallion", types: ["fire", "sets"] },
      { name: "Ganon's Castle Boss Key", types: ["ganon"] }
    ];
    bingoList[15] = [
      { name: "Map & Compass in Water Temple", types: ["water"] },
      { name: "Water Temple Boss Key", types: ["water", "gtg"] },
      { name: "Mirror Shield", types: ["sets", "spirit"] },
      { name: "3 Shields", types: ["sets", "spirit"] },
      { name: "At least 6 songs", types: ["songs", "rba"] },
      { name: "Giant's Wallet", types: ["rba", "strength"] },
      { name: "5 unused keys in Gerudo Training Grounds", types: ["gtg"] },
      { name: "4 unused keys in Gerudo Training Grounds", types: ["gtg"] }
    ];
    bingoList[16] = [
      { name: "500 Rupees", types: ["rba", "strength"] },
      { name: "Poacher's Saw", types: ["rba"] },
      { name: "Serenade of Water", types: ["ice", "rba"] },
      { name: "Prelude of Light", types: ["songs", "rba"] },
      { name: "Nocturne of Shadow", types: ["songs", "rba"] },
      { name: "Shadow Temple Boss Key", types: ["shadow"] },
      { name: "Defeat Bongo-Bongo", types: ["shadow"] },
      { name: "Beat the Shadow Temple", types: ["shadow"] },
      { name: "All 8 Kakariko area Skulltulas", types: ["skulltula", "botw"] }
    ];
    bingoList[17] = [
      { name: "All 4 Gerudo Valley area Skulltulas", types: ["skulltula", "jabu"] },
      { name: "Bottled Big Poe", types: ["bigpoe", "forest"] },
      { name: "All 5 Skulltulas in Forest Temple", types: ["forest", "skulltula"] },
      { name: "Farore's Wind", types: ["fw", "ice"] },
      { name: "All 4 Lon-Lon Ranch area Skulltulas", types: ["skulltula", "jabu"] },
      { name: "All 3 Skulltulas in Bottom of the Well", types: ["botw", "skulltula"] },
      { name: "Broken Goron's Sword", types: ["rba"] }
    ];
    bingoList[18] = [
      { name: "6 unused keys in Gerudo Training Grounds", types: ["gtg"] },
      { name: "Gerudo's Card", types: ["fortress"] },
      { name: "All 5 Skulltulas in Fire Temple", types: ["fire", "skulltula"] },
      { name: "37th heart piece (Child Fortress)", types: ["fortress"] },
      { name: "Double Defense", types: ["dd", "ganon"] },
      { name: "Skull Mask", types: ["masks"] }
    ];
    bingoList[19] = [
      { name: "Saria's Song", types: ["strength", "masks"] },
      { name: "Blue Gauntlets", types: ["strength", "rba"] },
      { name: "Goron Bracelet", types: ["strength", "rba"] },
      { name: "Nayru's Love", types: ["spirit"] },
      { name: "Defeat Dark Link", types: ["water"] },
      { name: "At least 7 songs", types: ["songs", "rba"] },
      { name: "Din's Fire", types: ["df"] }
    ];
    bingoList[20] = [
      { name: "Longshot", types: ["water"] },
      { name: "Defeat Meg (purple Poe)", types: ["forest"] },
      { name: "Spirit Temple Boss Key", types: ["spirit"] },
      { name: "Stone of Agony", types: ["agony", "skulltula"] },
      { name: "Spooky Mask", types: ["masks", "saria", "strength"] }
    ];
    bingoList[21] = [
      { name: "Defeat Nabooru-Knuckle", types: ["spirit"] },
      { name: "Prescription", types: ["rba"] },
      { name: "Both Hyrule Field area Skulltulas", types: ["skulltula", "df"] },
      { name: "At least 8 songs", types: ["songs", "rba"] },
      { name: "50 Bombchus", types: ["ganon", "rba"] },
      { name: "Both Gerudo's Fortress area Skulltulas", types: ["skulltula", "fortress"] }
    ];
    bingoList[22] = [
      { name: "All 5 Skulltulas in Shadow Temple", types: ["shadow", "skulltula"] },
      { name: "Map & Compass in Spirit Temple", types: ["spirit", "rba"] },
      { name: "All 8 Death Mountain area Skulltulas", types: ["skulltula", "dmc"] },
      { name: "3 Tunics & 3 Boots", types: ["sets", "ice"] },
      { name: "3 Swords & 3 Boots", types: ["sets", "ice"] },
      { name: "3 Swords & 3 Tunics", types: ["sets", "ice"] }
    ];
    bingoList[23] = [
      { name: "Fire Arrow", types: ["water"] },
      { name: "Green Gauntlets", types: ["strength", "rba"] },
      { name: "7 Hearts", types: ["hearts"] },
      { name: "All 8 Zora's Domain area Skulltulas", types: ["jabu", "rba"] },
      { name: "3 Swords & 3 Shields", types: ["sets", "spirit"] },
      { name: "3 Shields & 3 Tunics", types: ["sets", "spirit"] },
      { name: "Bunny Hood", types: ["masks", "saria", "strength"] }
    ];
    bingoList[24] = [
      { name: "Defeat Twinrova", types: ["spirit"] },
      { name: "3 Shields & 3 Boots", types: ["sets", "spirit"] },
      { name: "Beat the Spirit Temple", types: ["spirit"] },
      { name: "Light Arrows", types: ["rba"] },
      { name: "At least 9 songs", types: ["songs", "rba"] },
      { name: "All 5 Lake Hylia Skulltulas", types: ["skulltula", "ice"] }
    ];
    bingoList[25] = [
      { name: "All 5 Skulltulas in Spirit Temple", types: ["spirit"] },
      { name: "Golden Gauntlets", types: ["strength", "ganon"] },
      { name: "7 unused keys in Gerudo Training Grounds", types: ["gtg", "rba"] },
      { name: "All 4 Market area Skulltulas", types: ["skulltula"] },
      { name: "8 Hearts", types: ["hearts"] },
      { name: "All 5 Skulltulas in Water Temple", types: ["water", "rba"] },
      { name: "Claim Check", types: ["rba"] },
      { name: "Quiver (50)", types: ["forest", "fortress"] },
      { name: "At least 10 songs", types: ["songs", "rba"] }
    ];
  } // population of items
    
} // setup

$(Behavior.setup);










