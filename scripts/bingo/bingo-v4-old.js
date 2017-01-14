srl.bingo = function (bingoList, size) {
  var SEED = gup( 'seed' );
  if (SEED == "") {
    window.location = '?seed=' + Math.ceil(999999 * Math.random());
  }
  var MODE = gup( 'mode' );
  var cardtype = "string";
  if (MODE == "short") {
    cardtype = "Short";
  } else {
    cardtype = "Normal";
  }
  if (typeof size == 'undefined') size = 5;
  
  Math.seedrandom(SEED); //sets up the RNG
  var MAX_SEED = 999999; //1 million cards
  var results = $("#results");
  results.append ("<p>SRL Bingo <strong>v4</strong>&emsp;Seed: <strong>" + 
  SEED + "</strong>&emsp;Card type: <strong>" + cardtype + "</strong></p>");
  
  var lineCheckList = [];
  
  
  if (size == 5) {
  
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
  
  }
  
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
  
} // setup
