$(document).ready(function() {

var dungeons = [
	"Deku Tree",
	"Dodongo's Cavern",
	"Jabu-Jabu's Belly",
	"Forest Temple",
	"Fire Temple",
	"Water Temple",
	"Spirit Temple",
	"Shadow Temple"
];

var items = [
	// items affected by dungeons
	"Boomerang", //remove if jabu
	"Megaton Hammer", //remove if fire
	"Mirror Shield", //remove if spirit, avoid silver gauntlets
	"Boomerang", //remove if jabu
	"Megaton Hammer", //remove if fire
	"Mirror Shield", //remove if spirit, avoid silver gauntlets
	
	// grouped items
	"ironbootsmix", // Iron Boots, Big Poe, Blue Fire
	"gerudostuff", // Ice Arrow, Gerudo's Card
	"spells", // Din's Fire, Nayru's Live, Farore's Wind
	"masks", // Keaton Mask, Skull Mask, Spooky Mask, Bunny Hood, Mask of Truth+stupid masks
	"strength", // Goron Bracelet, Silver Gauntlets, Golden Gauntlets
	"scale", // Golden Scale, Silver Scale
	"atrade", // atrade plus wallets and giants knife
	"skulltula", // stone, 30, or giants
	"ironbootsmix",
	"gerudostuff",
	"spells",
	"masks",
	"strength",
	"scale",
	"atrade",
	"skulltula",
	
	// outside of dungeon, not affected by dungeons or items
	"Lens of Truth",
	"Fire Arrow",
	"Zora Tunic",
	"Zora Tunic",
	
	// dungeon items not affected by dungeon choice
	"Fairy Slingshot",
	"Fairy Bow",
	"Longshot",
	"Fairy Slingshot",
	"Fairy Bow",
	"Longshot",
	"Fairy Bow",
	"Longshot",
	
	// dungeon funstuff
	"mapcompass",
	"mapcompass",
	"mapcompass",
	"mapcompass",
	"all the Golden Skulltulas in both dungeons",
	"all the Golden Skulltulas in both dungeons",
	"all the Golden Skulltulas in both dungeons",
	"all the Golden Skulltulas in both dungeons"
];

var restrict = [

// DONE
	//"No Goron Tunic", // fire temple only.
	"Never spend rupees", // masks, scales
	"No Hylian Shield", // at least 1 adult dungeon
	"No Deku Shield", // at least 1 child dungeon.
	"No ISG", // at least 1 adult dungeon
	"No Kokiri Sword", // no additional functionality required
	"No deaths on file counter", // force adult dungeons I guess.
	//"No obtaining warp songs", // <-- iron boots last, forest shenanigans. require 2 adult dung
	"No Deku Sticks. No Deku Nuts", // 1 or 2 child dung
	"No Bombchus",
	"No Bomb Bag",
	"No Hover Boots", // include adult shit
	"No Hookshot", // include adult shit
	"No Save & Quit",
	"No BK skips", // at least 1 adult dungeon, no shadow temple
	//"Must enter both dungeons as child before Master Sword is obtained",
	"No RBA",
	"No Ocarina Items",
	
// NOT DONE 
	
	/*
	"No small keys", // bow, spirit, shadow, no bk skip water, fire //fire temple with RBA, lens of truth,
	"No gauntlets", // spirit temple without hoverboots is lol
	"Never unequip Hover Boots", // must be required somehow ??
	"No DoT Skip", // (force adult dungeons), check for no deku shield",
	"No Adult Link", // check for impossible shit
	"No picking up Cuccos", // hehheheheheheh
	"Open the Shadow Temple before entering" // no dins, shadow only??
	*/
	
];

var dungeon1 = Math.floor(Math.random()*dungeons.length);
var dungeon2 = Math.floor(Math.random()*dungeons.length);
while (dungeon1 == dungeon2) { 
		dungeon2 = Math.floor(Math.random()*dungeons.length);
	}
	
////////////////////////////////////	

var lightArrowCount = 0;

if ((dungeons[dungeon1] == "Jabu-Jabu's Belly") || (dungeons[dungeon2] == "Jabu-Jabu's Belly")) {
	while(items.indexOf("Boomerang") != -1) { items.splice(items.indexOf("Boomerang"), 1); }
}
if ((dungeons[dungeon1] == "Fire Temple") || (dungeons[dungeon2] == "Fire Temple")) {
	while(items.indexOf("Megaton Hammer") != -1) { items.splice(items.indexOf("Megaton Hammer"), 1); }
}
if ((dungeons[dungeon1] == "Spirit Temple") || (dungeons[dungeon2] == "Spirit Temple")) {
	while(items.indexOf("Mirror Shield") != -1) { items.splice(items.indexOf("Mirror Shield"), 1); }
	++lightArrowCount;
}
if ((dungeons[dungeon1] == "Shadow Temple") || (dungeons[dungeon2] == "Shadow Temple")) {
	++lightArrowCount;
}

if (lightArrowCount == 1) {
	items.push("Light Arrow");
}
	


function groupedItemCheck(item) {

	var mapcompass = [
		"the Dungeon Map & Compass in both dungeons",
		"the Dungeon Map in both dungeons",
		"the Compass in both dungeons",
		"the Dungeon Map & Compass in both dungeons",
	];

	var ironbootsmix = [
		"Iron Boots",
		"Iron Boots",
		"Iron Boots",
		"Iron Boots",
		"Iron Boots",
		"Blue Fire",
		"Blue Fire", // 2:3:5 ratio seems right
		"Big Poe",
		"Big Poe",
		"Big Poe",
	];
	
	var gerudostuff = [
		"Ice Arrow",
		"Gerudo's Card"
	];
	
	var spells = [
		"Din's Fire",
		"Nayru's Love",
		"Farore's Wind"
	];
	
	var masks = [
		"Keaton Mask",
		"Skull Mask",
		"Spooky Mask",
		"Bunny Hood",
		"Keaton Mask", // duplicates to decrease chance of it being a final mask
		"Skull Mask",  // this ratio gives a 2:1 chance of avoiding a final mask
		"Spooky Mask",
		"Bunny Hood",
		"Mask of Truth",
		"Goron Mask",
		"Zora Mask",
		"Gerudo Mask"
	];

	var strength = [
		"Goron Bracelet",
		"Silver Gauntlets",
		"Silver Gauntlets", // silver gs are fun
		"Golden Gauntlets"
	];
	
	var scale = [
		"Silver Scale",
		"Golden Scale"
	];
	
	var atrade = [
		"Pocket Egg", // including expendable trade items adds weird route issues
		"Pocket Cucco",
		"Cojiro",
		"Odd Mushroom",
		"Odd Potion",
		"Poacher's Saw",
		"Broken Goron's Sword",
		"Prescription",
		"Eyeball Frog",
		"World's Finest Eyedrops",
		"Claim Check"
	];
	
	var skulltula = [
		"Stone of Agony",
		"Stone of Agony",
		"Giant's Wallet",
		"30 Golden Skulltulas",
		"Giant's Knife"
	];
	
	if (item == "gerudostuff") { item = gerudostuff[Math.floor(Math.random()*gerudostuff.length)]; }
	else if (item == "mapcompass") { item = mapcompass[Math.floor(Math.random()*mapcompass.length)]; }
	else if (item == "ironbootsmix") { item = ironbootsmix[Math.floor(Math.random()*ironbootsmix.length)]; }
	else if (item == "spells") { item = spells[Math.floor(Math.random()*spells.length)]; }
	else if (item == "masks") { item = masks[Math.floor(Math.random()*masks.length)]; }
	else if (item == "strength") { item = strength[Math.floor(Math.random()*strength.length)]; }
	else if (item == "scale") { item = scale[Math.floor(Math.random()*scale.length)]; }
	else if (item == "atrade") { item = atrade[Math.floor(Math.random()*atrade.length)]; }
	else if (item == "skulltula") { item = skulltula[Math.floor(Math.random()*skulltula.length)]; }
	
	return item;
}

var rupeeSpender = false;

var item1num = Math.floor(Math.random()*items.length);
var item1 = items[item1num];

if ((item1 == "masks") || (item1 == "scales")) {
	rupeeSpender = true;
}

while(items.indexOf(item1) != -1) { items.splice(items.indexOf(item1), 1); }
item1 = groupedItemCheck(item1);

var item2num = Math.floor(Math.random()*items.length);
var item2 = items[item2num];

if ((item2 == "masks") || (item2 == "scales")) {
	rupeeSpender = true;
}

if (rupeeSpender) {
	while(restrict.indexOf("Never spend rupees") != -1) { restrict.splice(restrict.indexOf("Never spend rupees"), 1); }
}

var item2 = groupedItemCheck(item2);

//////////////////

if ((dungeons[dungeon1] == "Fire Temple") || (dungeons[dungeon2] == "Fire Temple")) {
	//while(restrict.indexOf("Boomerang") != -1) { restrict.splice(restrict.indexOf("Boomerang"), 1); }
	restrict.push("No Goron Tunic");
}

var childDungs = 0;
if ((dungeons[dungeon1] == "Deku Tree") || (dungeons[dungeon2] == "Deku Tree")) { childDungs++; }
if ((dungeons[dungeon1] == "Dodongo's Cavern") || (dungeons[dungeon2] == "Dodongo's Cavern")) { childDungs++; }
if ((dungeons[dungeon1] == "Jabu-Jabu's Belly") || (dungeons[dungeon2] == "Jabu-Jabu's Belly")) { childDungs++; }

if (childDungs == 2) { // mostly child row, plz remove adult crap
	while(restrict.indexOf("No Hylian Shield") != -1) { restrict.splice(restrict.indexOf("No Hylian Shield"), 1); }
	while(restrict.indexOf("No ISG") != -1) { restrict.splice(restrict.indexOf("No ISG"), 1); }
	while(restrict.indexOf("No Hover Boots") != -1) { restrict.splice(restrict.indexOf("No Hover Boots"), 1); }
	while(restrict.indexOf("No Hookshot") != -1) { restrict.splice(restrict.indexOf("No Hookshot"), 1); }
	while(restrict.indexOf("No BK skips") != -1) { restrict.splice(restrict.indexOf("No BK skips"), 1); }
	while(restrict.indexOf("No deaths on file counter") != -1) { restrict.splice(restrict.indexOf("No deaths on file counter"), 1); }
}

if (childDungs == 0) { // mostly adult row, remove child crap
	while(restrict.indexOf("No Deku Shield") != -1) { restrict.splice(restrict.indexOf("No Deku Shield"), 1); }
	restrict.push("No obtaining warp songs");
	//restrict.push("Must enter both dungeons as child before Master Sword is obtained");
	while(restrict.indexOf("No Deku Sticks. No Deku Nuts") != -1) { restrict.splice(restrict.indexOf("No Deku Sticks. No Deku Nuts"), 1); }
	while(restrict.indexOf("No Kokiri Sword") != -1) { restrict.splice(restrict.indexOf("No Kokiri Sword"), 1); }
	
	if ((dungeons[dungeon1] != "Shadow Temple") && (dungeons[dungeon2] != "Shadow Temple")) {
		while(restrict.indexOf("No BK skips") != -1) { restrict.splice(restrict.indexOf("No BK skips"), 1); }
	}
}

if ((dungeons[dungeon1] == "Fire Temple") || (dungeons[dungeon2] == "Fire Temple")) {
	//while(restrict.indexOf("Boomerang") != -1) { restrict.splice(restrict.indexOf("Boomerang"), 1); }
	restrict.push("No Goron Tunic");
}


var restrict1num = Math.floor(Math.random()*restrict.length);
var restrict1 = restrict[restrict1num];
while(restrict.indexOf(restrict1) != -1) { restrict.splice(restrict.indexOf(restrict1), 1); }
//restrict1 = groupedItemCheck(restrict1);

var restrict2num = Math.floor(Math.random()*restrict.length);
var restrict2 = restrict[restrict2num];

$("#results").append("Beat " + dungeons[dungeon1] + " & " + dungeons[dungeon2] + ". " + "Obtain " + item1 + ". Obtain " + item2 + ". " + restrict1 + ". " + restrict2 + ".");


// if RBA then no Bottle cannot appear as 2nd restriction
// 

});