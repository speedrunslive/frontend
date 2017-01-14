var Behavior = {};

Behavior.setup = function () {
  var SEED = gup( 'seed' );
  var display = $('#results');

  if ((SEED > 99999) || (SEED < 0) || (SEED%1 != 0) || (SEED == "")) {
      results = ('ERROR. USE A POSITIVE INTEGER FROM 00000-99999');
      display.append(results);  
      return false;
  }

  var results = ("Hello World!!!")
 // display.append(results);
  
  var results = ('seed: ' + SEED + '<br/>');
 // display.prepend(results);  

  ITEMTOTAL = 70;
  results = ('total items: ' + ITEMTOTAL + '<br/><br/>');
 // display.append(results);

  var item = [];

  var seed2 = SEED * 7 + 5547;
  var seed3 = 1 / seed2;
  for (i=1; i<=25; i++) {

    if ((i != 1) && (i != 9) && (i != 12) && (i != 20) && (i != 23)) {
      var seed6 = Math.pow(3,i);
      var seed4 = seed3 * seed6 * 1000000;
      var seed5 = Math.floor(seed4);
      item[i] = seed5 % ITEMTOTAL;
      item[i]++;
      
      for (j=1; j<i; j++) {    
        if (item[i] == item[j]) { 
          for (k=1; k<i; k++) {
            while (item[i] == item[k]) { 
              var results2 = $('<p>fixing duplicate "' + item[i] + '" in item' + i + '.</p>');
            //  display.append(results2);
              if (item[i] == 70) {
                item[i] = 20;
                k=0;
              } else {
                item[i]++;
                k=0;
              }
            }
          }
        }
      }
    } else {
      var seed6 = Math.pow(3,i);
      var seed4 = seed3 * seed6 * 1000000;
      var seed5 = Math.floor(seed4);
      item[i] = seed5 % 5;
      item[i] += 72;

      for (j=1; j<i; j++) {    
        if (item[i] == item[j]) { 
          for (k=1; k<i; k++) {
            while (item[i] == item[k]) { 
              var results2 = $('<p>fixing duplicate "' + item[i] + '" in item' + i + '.</p>');
           //   display.append(results2);
              if (item[i] == 76) {
                item[i] = 72;
                k=0;
              } else {
                item[i]++;
                k=0;
              }
            }
          }
        }
      }      
    }

    var results3 = findItem(item[i], i);
    results = ('item' + i + ': ' + item[i] + '<br/>');
    $('#td' + i).prepend(results3);
 //   display.append(results);
  }


  $("td").toggle(
    function () {
      $(this).css({"background-color":"#006600"});
    },
    function () {
      $(this).css({"background-color":"#660000"});
    },
    function () {
      $(this).css({"background-color":"#000000"});
    }
  );


}

function gup( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
}

function findItem( itemNo, i ) {
    
    var itemText = "";
    
    switch (itemNo) {
     case 1:
	 itemText = "Cerberus Skip"
	 break;
	 case 2:
	 itemText = "MP refill glitch"
	 break;
	 case 3:
	 itemText = "Do not use a save room"
	 break;
	 case 4:
	 itemText = "No Shield Rod"
	 break;
	 case 5:
	 itemText = "Big tossed by 3 diff enemies"
	 break;
	 case 6:
	 itemText = "Alucard begins with 85 HP"
	 break;
	 case 7:
	 itemText = "Activate all 1st castle warps"
	 break;
	 case 8:
	 itemText = "Activate all 2nd castle warps"
	 break;
	 case 9:
	 itemText = "No equipping/using items"
	 break;
	 case 10:
	 itemText = "3 Heart Refreshes"
	 break;
	 case 11:
	 itemText = "3 Power of Sires"
	 break;
	 case 12:
	 itemText = "Meet Librarian sub-9 min"
	 break;
	 case 13:
	 itemText = "Save Richter sub-40 min"
	 break;
	 case 14:
	 itemText = "Final Save sub-45 Min"
	 break;
	 case 15:
	 itemText = "No Cube of Zoe"
	 break;
	 case 16:
	 itemText = "Hippogryph"
	 break;
	 case 17:
	 itemText = "Scylla"
	 break;
	 case 18:
	 itemText = "Succubus"
	 break;
	 case 19:
	 itemText = "Cerberus"
	 break;
	 case 20:
	 itemText = "The Creature"
	 break;
	 case 21:
	 itemText = "Fake Trevor/Grant/Sylpha"
	 break;
	 case 22:
	 itemText = "Akmodan II"
	 break;
	 case 23:
	 itemText = "Doppleganger 40"
	 break;
	 case 24:
	 itemText = "Beelzebub"
	 break;
	 case 25:
	 itemText = "Gravity Boots"
	 break;
	 case 26:
	 itemText = "Power of Wolf"
	 break;
	 case 27:
	 itemText = "Power of Mist"
	 break;
	 case 28:
	 itemText = "Echo of Bat"
	 break;
	 case 29:
	 itemText = "Force of Echo"
	 break;
	 case 30:
	 itemText = "Merman Statue"
	 break;
	 case 31:
	 itemText = "Holy Symbol"
	 break;
	 case 32:
	 itemText = "Spirit Orb"
	 break;
	 case 33:
	 itemText = "Sword Card"
	 break;
	 case 34:
	 itemText = "Bat card"
	 break;
	 case 35:
	 itemText = "Ghost Card"
	 break;
	 case 36:
	 itemText = "Demon Card"
	 break;
	 case 37:
	 itemText = "Holy Glasses"
	 break;
	 case 38:
	 itemText = "Spikebreaker"
	 break;
	 case 39:
	 itemText = "Duplicator"
	 break;
	 case 40:
	 itemText = "Combat Knife"
	 break;
	 case 41:
	 itemText = "Joseph's Cloak"
	 break;
	 case 42:
	 itemText = "Axe Lord Armor"
	 break;
	 case 43:
	 itemText = "Ankh of Life"
	 break;
	 case 44:
	 itemText = "Holy Mail"
	 break;
	 case 45:
	 itemText = "Sunglasses"
	 break;
	 case 46:
	 itemText = "Nunchaku"
	 break;
	 case 47:
	 itemText = "Badelaire"
	 break;
	 case 48:
	 itemText = "Sun Stone"
	 break;
	 case 49:
	 itemText = "Talisman"
	 break;
	 case 50:
	 itemText = "Twilight Cloak"
	 break;
	 case 51:
	 itemText = "Gram"
	 break;
	 case 52:
	 itemText = "Gauntlet"
	 break;
	 case 53:
	 itemText = "Sword of Dawn"
	 break;
	 case 54:
	 itemText = "Staurolite"
	 break;
	 case 55:
	 itemText = "Dark Blade"
	 break;
	 case 56:
	 itemText = "Osafune Katana"
	 break;
	 case 57:
	 itemText = "Sword of Hador"
	 break;
	 case 58:
	 itemText = "Fury Plate"
	 break;
	 case 59:
	 itemText = "Goddess Shield"
	 break;
	 case 60:
	 itemText = "Moon Rod"
	 break;
	 case 61:
	 itemText = "Ruby Circlet"
	 break;
	 case 62:
	 itemText = "Necklace of J"
	 break;
	 case 63:
	 itemText = "Alucard Mail"
	 break;
	 case 64:
	 itemText = "Blood Cloak"
	 break;
	 case 65:
	 itemText = "Holy Sword"
	 break;
	 case 66:
	 itemText = "Holy Rod"
	 break;
	 case 67:
	 itemText = "Jewel Knuckles"
	 break;
	 case 68:
	 itemText = "Alucart Gear"
	 break;
	 case 69:
	 itemText = "Gold Plate"
	 break;
	 case 70: 
	 itemText = "Silver Plate"
	 break;
	 
	 case 72:
	 itemText = "Defeat Granfaloon"
	 break;
	 case 73:
	 itemText = "180+ Max Hearts"
	 break;
	 case 74:
	 itemText = "Defeat Dracula"
	 break;
	 case 75:
	 itemText = "350+ Max HP"
	 break;
	 case 76:
	 itemText = "Defeat Galamoth"
	 break;
    }
    return itemText;

}

$(Behavior.setup);	