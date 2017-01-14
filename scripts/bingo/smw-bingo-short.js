// Super Mario World SRL Bingo - Short
// version 1.0
// updated 10/18/2011
// created by feasel, dram55, dunnius, Zozoken, BONESAWWWWWW
// for questions or suggestions pm feasel at irc.metroid2002.com

var bingoList = [];

// LONG GOAL
bingoList[1] = [
 { name: "5 moons", types: ["cape3"] }  //17+1
];
bingoList[2] = [
 { name: "10 keyhole exits", types: [] }  //18
];
bingoList[3] = [
 { name: "6 bonus rooms", types: ["bonusrooms"] }  //18+1
];
bingoList[4] = [
 { name: "2 Reznors", types: [] }  //19
];
bingoList[5] = [
 { name: "Defeat 5 Koopa Kids", types: ["koopakids"] },  //19
 { name: "Open crossing paths in Forest Of Illusion", types: [] }  //19
];

// SHORT GOAL
bingoList[6] = [
 { name: "4 special worlds", types: [] }  //11+1?
];
bingoList[7] = [
 { name: "3 star-block 1-ups", types: [] }  //12+1
];
bingoList[8] = [
 { name: "5 ghost house exits", types: [] }  //13
];
bingoList[9] = [
 { name: "Defeat 4 Koopa Kids", types: ["koopakids"] }  //15
];
bingoList[10] = [
 { name: "4 bonus rooms", types: ["bonusrooms"] },  //15+1
 { name: "4 swimming stages", types: [] }  //16
];

// COIN-COLLECTING GOAL
bingoList[11] = [
 { name: "50 coins in 5 stages", types: [] }
];
bingoList[12] = [
 { name: "5 yoshi coins on 2 stages (Yoshi's Island)", types: [] },
 { name: "5 yoshi coins on 2 stages (Donut Plains)", types: [] }
];
bingoList[13] = [
 { name: "5 yoshi coins on 2 stages (Star World)", types: [] }
];
bingoList[14] = [
 { name: "5 yoshi coins on 2 stages (Vanilla Dome)", types: [] },
 { name: "5 yoshi coins on 2 stages (Twin Bridges)", types: [] }
];
bingoList[15] = [
 { name: "5 yoshi coins on 2 stages (Forest Of Illusion)", types: [] }
];

// CHALLENGE 1
bingoList[16] = [
 { name: "Vanilla Secret 2 - small mario no yoshi", types: [] },  //
 { name: "Butter Bridge 2 - small mario no yoshi", types: [] }  //
];
bingoList[17] = [
 { name: "Vanilla Dome 1 normal exit - no star", types: [] },  //
 { name: "Vanilla Dome 2 normal exit - small mario no star", types: [] } //?
];
bingoList[18] = [
 { name: "Vanilla Dome 4 - small mario no yoshi", types: [] },  //
 { name: "Vanilla Secret 1 secret exit - no blue switch, no flying", types: ["cape2"] }  //
];
bingoList[19] = [
 { name: "Soda Lake - small mario no yoshi", types: [] },  //
 { name: "Star World 1 - time 286+", types: [] },  //
 { name: "Forest Of Illusion 3 - pacifist", types: [] }  //?
];
bingoList[20] = [
 { name: "Forest Secret Area - three 1-ups behind exit gate", types: [] }, //?
 { name: "Cheese Bridge secret exit - no yoshi", types: ["cape1"] }  //
];

// CHALLENGE 2
bingoList[21] = [
 { name: "Perfect matching game (8-up)", types: [] },  //
 { name: "Butter Bridge 1 - get 4 lives from turtles", types: [] }  //
];
bingoList[22] = [
 { name: "99 lives", types: [] },   //
 { name: "Blue Switch - get 8 silver coins", types: [] }  //
];
bingoList[23] = [
 { name: "NO CAPE", types: ["cape1","cape2","cape3"] },
 { name: "NO YOSHI", types: [] }
];
bingoList[24] = [
 { name: "Green Switch - get 3 lives from turtles", types: [] }, //
 { name: "Yellow Switch - get 300 coins", types: [] } //
];
bingoList[25] = [
 { name: "Red Switch - get 3 lives from turtles", types: [] },   //
 { name: "Forest Of Illusion 4 - don't get Lakitu 1-up; no flying", types: [] }   //
];

$(function() { srl.bingo(bingoList, 5); });


// Rules are here:  http://pastebin.com/0FmSVGjf