// Super Mario World SRL Bingo
// version 1.0
// updated 10/18/2011
// created by feasel, dram55, dunnius, Zozoken, BONESAWWWWWW
// for questions or suggestions pm feasel at irc.metroid2002.com

var bingoList = [];

// GAME-LENGTH GOAL
bingoList[1] = [
 { name: "Defeat 6/7 Koopa Kids", types: [] }  //1.5
];
bingoList[2] = [
 { name: "Open star road from Valley Of Bowser", types: ["yoshi1"] }  //2
];
bingoList[3] = [
 { name: "All 14 exits in Forest Of Illusion", types: [] }  //2.5
];
bingoList[4] = [
 { name: "Open Chocolate Island 3 useless exit", types: [] }  //3
];
bingoList[5] = [
 { name: "6 swimming stages", types: [] }  //???
];

// MAIN TASK
bingoList[6] = [
 { name: "6/10 ghost house exits", types: [] }
];
bingoList[7] = [
 { name: "10/18 keyhole exits", types: [] }
];
bingoList[8] = [
 { name: "7 moons", types: ["cape3"] },
 { name: "3/4 Reznors", types: [] }
];
bingoList[9] = [
 { name: "3 yoshi wing exits", types: ["yoshi2", "tubular"] },
 { name: "4 star-block 1-ups", types: [] }
];
bingoList[10] = [
 { name: "8/9 bonus rooms", types: [] }
];

// COLLECTING TASK
bingoList[11] = [
 { name: "50 coins in 5 stages", types: [] }
];
bingoList[12] = [
 { name: "5 yoshi coins on 2 stages (Yoshi's Island)", types: [] },
 { name: "5 yoshi coins on 2 stages (Donut Plains)", types: [] },
 { name: "5 yoshi coins on 2 stages (Vanilla Dome)", types: [] }
];
bingoList[13] = [
 { name: "5 yoshi coins on 2 stages (Twin Bridges)", types: [] },
 { name: "5 yoshi coins on 2 stages (Forest Of Illusion)", types: [] }
];
bingoList[14] = [
 { name: "5 yoshi coins on 2 stages (Chocolate Island)", types: [] },
 { name: "5 yoshi coins on 2 stages (Valley Of Bowser)", types: [] }
];
bingoList[15] = [
 { name: "5 yoshi coins on 2 stages (Star World)", types: [] }
];

// CHALLENGE 1
bingoList[16] = [
 { name: "Vanilla Secret 2 - small mario no yoshi", types: [] },
 { name: "Butter Bridge 2 - small mario no yoshi", types: [] },
 { name: "Vanilla Dome 2 normal exit - small mario no star", types: [] }
];
bingoList[17] = [
 { name: "Castle 6 - small mario", types: [] },
 { name: "Vanilla Dome 1 normal exit - no star", types: [] },
 { name: "Forest Of Illusion 3 - pacifist, small mario", types: [] },
 { name: "Chocolate Island 3 normal exit - small mario no yoshi", types: [] },
 { name: "Chocolate Island 2 - visit all 9 rooms", types: [] }
];
bingoList[18] = [
 { name: "Soda Lake - small mario no yoshi", types: [] },
 { name: "Vanilla Secret 1 secret exit - no blue switch, no flying", types: ["cape2"] },
 { name: "Vanilla Dome 4 - small mario no yoshi", types: [] }  //?
];
bingoList[19] = [
 { name: "Tubular", types: ["tubular"] },
 { name: "Chocolate Fortress - small mario", types: [] },
 { name: "Castle 7 - small mario", types: [] },
 { name: "Star World 1 - time 286+", types: [] }
];
bingoList[20] = [
 { name: "Cheese Bridge secret exit - no yoshi", types: ["cape1"] },
 { name: "Forest Secret Area - three 1-ups behind exit gate", types: [] },
 { name: "Valley Of Bowser 3 - small mario no yoshi", types: [] },  //?
 { name: "Valley Of Bowser 4 - small mario no yoshi", types: [] }  //?
];

// CHALLENGE 2
bingoList[21] = [
 { name: "Perfect matching game (8-up)", types: [] },  //0
 { name: "Sunken Ship - get 1 life from star", types: [] } //0+1.5
];
bingoList[22] = [
 { name: "99 lives", types: [] },   //1.5
 { name: "Blue Switch - get 8 silver coins", types: [] },  //1.5
 { name: "Butter Bridge 1 - get 4 lives from turtles", types: [] },  //0+1
 { name: "Chocolate Island 2 - get 11 bubble mushrooms", types: [] } //1+1
];
bingoList[23] = [
 { name: "NO CAPE", types: ["cape1","cape2","cape3"] },
 { name: "NO YOSHI", types: ["yoshi1","yoshi2"] }
];
bingoList[24] = [
 { name: "Green Switch - get 3 lives from turtles", types: [] }, //2
 { name: "Yellow Switch - get 300 coins", types: [] } //2
];
bingoList[25] = [
 { name: "Red Switch - get 3 lives from turtles", types: [] },   //3
 { name: "Forest Of Illusion 4 - don't get Lakitu 1-up; no flying", types: [] }   //3+.5
];

$(function() { srl.bingo(bingoList, 5); });



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/*

DESIGN NOTES:
* All bingo games end with killing Bowser.  Take any route to Bowser's castle.
* Expected time should be between 45 minutes and 90 minutes.
* Ordering of the goals within a category is (supposed to be) in increasing order of the
  amount of time it adds to the run, using the standard any%-no-star-world route as a
  baseline.  For challenge goals it is good to also consider the cost of failure and
  the rate of failure you'd expect for an average player).
* The "Game-length Goal" ensures that all rows/cols will involve completing a
  significant portion of the game.  Ideally we want some routes to reach bowser through
  the star-world and other routes to reach bowser through world 7, without giving a huge
  advantage to either one.
* The "Main Task" and "Collecting Task" are flexible goals that can be varied to suit
  the rest of the route.  The "Challenge" goals are meant to add some difficulty and
  open up different parts of the map.

TO DO:
* The order of the goals in all categories needs sorting (by amount of time to complete).
* Needs more goals in the "game-length" category (things that require you to go
  past world 5, do something far into special world, etc).
		
POTENTIAL GOALS
* Beat [some hard stage] as small mario, no yoshi
* Collect [XX] coins in [stage]
* Collect zero coins in [stage]
* Beat [stage] without harming any enemies
* Get time [XXX] or greater on [stage]
* Beat [stage] with [blue/yellow/red] yoshi (this could be used as a game-length goal)
* More game-length-enforcing goals (i.e. ways to encourage players to open up different
  areas in FOI, CI, and VOB)


Rules are here:  http://pastebin.com/zj4uSAHu


*/