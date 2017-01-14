$(document).ready(function() {

one_handed = [
	"Alucard Sword",
	"Broadsword",
	"Falchion",
	"Cutlass",
	"Scimitar",
	"Dark Blade",
	"Bekatowa",
	"Bastard Sword",
	"Luminus",
	"Mormegil",
	"Badelaire",
	"Gram",
	"Sword of Hador",
	"Holy Sword",
	"Talwar",
	"Alucart Sword",

	"Jewel Knuckles",
	"Knuckle Duster",

	"Bat Pentegram",
	"Pentegram",
	"Power of Sire",
	"Karma Coin",
	"Neutron Bomb",

	"Star Flail",
	"Holy Rod",
	"Morningstar",
	"Moon Rod",

	"Herald Shield",
	"Shaman Shield",
	"Alucard Shield",
	"Alucart Shield",
	"Knight Shield",
	"Goddess Shield"
];

two_handed = [
	"Nunchaku",
	"Sword of Dawn",
	"Estoc",
	"Claymore",
	"Katana",
	"Osafune Katana"
];


head_gear = [
	"Goggles",
	"Bandanna",
	"Holy Glasses",
	"Ruby Circlet",
	"Ballroom mask",
	"Cat-eye circlet",
	"Stone Mask",
	"Topaz Circlet",
	"Sunglasses",
	"Dragon Helm",
	"Beryl Circlet"
];

armor = [
	"Holy Mail",
	"Gold Plate",
	"Healing Mail",
	"Ice Mail",
	"Platinum Mail",
	"Silver Plate",
	"Alucard Mail",
	"Spike Breaker",
	"Mirror Cuirass",
	"Walk Armor",
	"Fury Plate",
	"Lightning Mail",
	"Axe Lord Armor"
];

cloaks = [
	"Crystal Cloak",
	"Royal Cloak",
	"Blood Cloak",
	"Twilight Cloak"
];

accessories = [
	"Necklace of J",
	"Onyx",
	"Turquoise",
	"Ankh of Life",
	"Mystic Pendant",
	"Aquamarine",
	"Silver Ring",
	"Gold Ring",
	"Diamond",
	"Opal",
	"Garnet",
	"Ring of Arcana",
	"Bloodstone",
	"Secret Boots",
	"Sunstone",
	"Moonstone",
	"Staurolite",
	"Ring of Ares",
	"Talisman"
];

//one handed or two handed?
chance = one_handed.length / (one_handed.length + two_handed.length);
random = Math.random();
itemlist = [];
twohanded = false; 

if (random > chance) {
	// this happens if its a two handed sword
	sword = Math.floor(Math.random()*two_handed.length);
	itemlist.push(two_handed[sword]);
	itemlist.push(two_handed[sword]);
	twohanded = true;
} else {
	//this happens if its a one handed sword
	sword1 = Math.floor(Math.random()*one_handed.length);
	itemlist.push(one_handed[sword1]);
	sword2 = Math.floor(Math.random()*one_handed.length);
	while (sword2 == sword1) { 
		sword2 = Math.floor(Math.random()*one_handed.length);
	}
	itemlist.push(one_handed[sword2]);
}

head = Math.floor(Math.random()*head_gear.length);
arm = Math.floor(Math.random()*armor.length);
cloak = Math.floor(Math.random()*cloaks.length);
acc1 = Math.floor(Math.random()*accessories.length);
acc2 = Math.floor(Math.random()*accessories.length);
while (acc2 == acc1) {
	acc2 = Math.floor(Math.random()*accessories.length);
}

itemlist.push(head_gear[head]);
itemlist.push(armor[arm]);
itemlist.push(cloaks[cloak]);
itemlist.push(accessories[acc1]);
itemlist.push(accessories[acc2]);

$("#results").append(itemlist[0] + ", ");
if (twohanded == false) {
	$("#results").append(itemlist[1] + ", ");
}
$("#results").append(itemlist[2] + ", ");
$("#results").append(itemlist[3] + ", ");
$("#results").append(itemlist[4] + ", ");
$("#results").append(itemlist[5] + ", ");
$("#results").append(itemlist[6]);


funky_2h = [
	"Namakura",
	"Red Rust",
	"Takemitsu",
	"Nunchaku",
	"Muramasa",
	"Claymore",
	"Sword of Dawn",
	"Flamberge",
	"Katana",
	"Zwei hander",
	"Estoc",
	"Obsidian Sword",
	"Osafune Katana",
	"Yasutsuna Katana",
	"Masamune Katana",
	"Great Sword"
];

funky_1h = [
	"Tyrfing",
	"Basilard",
	"Knuckle Duster",
	"Stone Sword",
	"Alucart Sword",
	"Short Sword",
	"Gladius",
	"Scimitar",
	"Holbein Dagger",
	"Cutlass",
	"Rapier",
	"Blue Knuckles",
	"Mace",
	"Saber",
	"Falchion",
	"Morningstar",
	"Broadsword",
	"Holy Rod",
	"Bekatowa",
	"Chakram",
	"Jewel Sword",
	"Star Flail",
	"Shield Rod",
	"Damascus Sword",
	"Moon Rod",
	"Were Bane",
	"Hunter Sword",
	"Bastard Sword",
	"Shotel",
	"Heaven Sword",
	"Jewel Knuckles",
	"Talwar",
	"Combat Knife",
	"Sword of Hador",
	"Firebrand",
	"Icebrand",
	"Mormegil",
	"Thunderbrand",
	"Gurthang",
	"Vorpal Blade",
	"Holy Sword",
	"Iron Fist",
	"Luminous",
	"Harper",
	"Gram",
	"Marsil",
	"Dark Blade",
	"Crissaegrim",
	"Mourneblade",
	"Fist of Tulkas",
	"Mablung Sword",
	"Rune Sword",
	"Alucard Sword",
	"Badelaire",
	"Sword Familiar",

	"Alucart Shield",
	"Leather Shield",
	"Medusa Shield",
	"Iron Shield",
	"Knight Shield",
	"Axelord Shield",
	"Dark Shield",
	"Fire Shield",
	"Goddess Shield",
	"Herald Shield",
	"Shaman Shield",
	"Skull Shield",
	"Alucard Shield",

	"Dynamite",
	"Flame Star",
	"Buffalo Star",
	"Cross Shurike",
	"TNT",
	"Iron Ball",
	"Fire Boomerang",
	"Javelin",
	"Shuriken",
	"Monster Vial 1",
	"Monster Vial 2",
	"Monster Vial 3",
	"Bwaka Knife",
	"Magic Missile",
	"Boomerang",

	"Bat Pentagram",
	"Pentagram",
	"Karma Coin",
	"Power Of Sire",
	"Neutron Bomb",

	"Elixer",
	"High Potion",
	"Potion",
	"Manna Prism",
	"Heart Refresh",
	"Antivenom",
	"Uncurse",
	"Hammer",
	"Life Apple",
	"Str. Potion",
	"Smart Potion",
	"Luck Potion",
	"Attack Potion",
	"Shield Potion",
	"Resist Fire",
	"Resist Ice",
	"Resist Thunder",
	"Resist Dark",
	"Resist Holy",
	"Resist Stone",
	"Library Card",

	"Sirloin",
	"Sushi",
	"Turkey",
	"Pot Roast",
	"Peanuts",
	"Natou",
	"Dim Sum Set",
	"Ramen",
	"Shiitake",
	"Gyros Plate",
	"Curry Rice",
	"Spaghetti",
	"Lunch B",
	"Lunch A",
	"Morning set",
	"Omelette",
	"Ham and eggs",
	"Pizza",
	"Grape juice",
	"Hamburger",
	"Miso soup",
	"Frankfurter",
	"Cheese",
	"Pork bun",
	"Pudding",
	"Parfait",
	"Barley Tea",
	"Ice Cream",
	"Cheesecake",
	"Red Bean Bun",
	"Tart",
	"Shortcake",
	"Chinese Bun",
	"Green Tea",
	"Strawberry",
	"Apple",
	"Pineapple",
	"Banana",
	"Orange",
	"Grapes",
	"Toadstool",
	"Meal ticket"
];

funky_head = [
	"Beryl circlet",
	"Cat-eye circl.",
	"Circlet",
	"Coral circlet",
	"Gold circlet",
	"Opal circlet",
	"Ruby circlet",
	"Silver crown",
	"Topaz circlet",
	"Felt hat",
	"Goggles",
	"Holy glasses",
	"Sunglasses",
	"Velvet hat",
	"Ballroom mask",
	"Bandana",
	"Leather hat",
	"Stone mask",
	"Dragon helm",
	"Steel helm",
	"Wizard hat"
];

funky_armor = [
	"Cloth tunic",
	"Alucart Mail",
	"Hide cuirass",
	"Bronze cuirass",
	"Mirror cuirass",
	"Fire mail",
	"Iron cuirass",
	"Steel cuirass",
	"Silver plate",
	"Dark armor",
	"Gold plate",
	"Ice mail",
	"Lightning mail",
	"Platinum mail",
	"Holy mail",
	"Brilliant mail",
	"Spike Breaker",
	"Fury plate",
	"Dracula tunic",
	"Axe Lord armor",
	"Diamond plate",
	"Mojo mail",
	"Alucard mail",
	"God's Garb",
	"Walk Armor"
];

funky_cloaks = [
	"Cloth cape",
	"Blood cloak",
	"Reverse cloak",
	"Crystal cloak",
	"Elven cloak",
	"Joseph's cloak",
	"Royal cloak",
	"Twilight cloak"
];

funky_access = [
	"Zircon",
	"Aquamarine",
	"Turquoise",
	"Onyx",
	"Garnet",
	"Opal",
	"Diamond",
	"Ankh of Life",
	"Bloodstone",
	"Covenant stone",
	"Duplicator",
	"Gauntlet",
	"Gold Ring",
	"Heart broach",
	"King's stone",
	"Lapis Lazuli",
	"Medal",
	"Moonstone",
	"Mystic Pendant",
	"Mauglamir",
	"Necklace of J",
	"Ring of Arcana",
	"Ring of Ares",
	"Ring of Feanor",
	"Ring of Pales",
	"Ring of Varda",
	"Secret Boots",
	"Silver Ring",
	"Staurolite",
	"Sunstone",
	"Talisman"
];


//one handed or two handed?
chance = funky_1h.length / (funky_1h.length + funky_2h.length);
random = Math.random();
itemlist = [];
twohanded = false; 

if (random > chance) {
	// this happens if its a two handed sword
	sword = Math.floor(Math.random()*funky_2h.length);
	itemlist.push(funky_2h[sword]);
	itemlist.push(funky_2h[sword]);
	twohanded = true;
} else {
	//this happens if its a one handed sword
	sword1 = Math.floor(Math.random()*funky_1h.length);
	itemlist.push(funky_1h[sword1]);
	sword2 = Math.floor(Math.random()*funky_1h.length);
	while (sword2 == sword1) { 
		sword2 = Math.floor(Math.random()*funky_1h.length);
	}
	itemlist.push(funky_1h[sword2]);
}

head = Math.floor(Math.random()*funky_head.length);
arm = Math.floor(Math.random()*funky_armor.length);
cloak = Math.floor(Math.random()*funky_cloaks.length);
acc1 = Math.floor(Math.random()*funky_access.length);
acc2 = Math.floor(Math.random()*funky_access.length);
while (acc2 == acc1) {
	acc2 = Math.floor(Math.random()*funky_access.length);
}

itemlist.push(funky_head[head]);
itemlist.push(funky_armor[arm]);
itemlist.push(funky_cloaks[cloak]);
itemlist.push(funky_access[acc1]);
itemlist.push(funky_access[acc2]);

$("#results").append("<br/><br/><span class=\"grey\">Super special funky mode:</span><br/>" + itemlist[0] + ", ");
if (twohanded == false) {
	$("#results").append(itemlist[1] + ", ");
}
$("#results").append(itemlist[2] + ", ");
$("#results").append(itemlist[3] + ", ");
$("#results").append(itemlist[4] + ", ");
$("#results").append(itemlist[5] + ", ");
$("#results").append(itemlist[6]);


});