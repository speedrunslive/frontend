var bingoList = []; //number represents difficulty 
  bingoList[1] = [
      { name: "Baboon Blast GB in Jungle Japes", types: ["japes","donkey"] },
      { name: "50 Bananas in Gloomy Galleon", types: ["gloomy","banana","banana2"] },
      { name: "Angry Aztec Lobby GB", types: ["isles","bonus","tiny"] },
      { name: "100 Bananas in Jungle Japes", types: ["japes","banana","banana2"] },
      { name: "5 Blueprints", types: ["bp","manybp"] },
      { name: "50 bananas in Creepy Castle", types: ["castle","banana","banana2"] },
      { name: "Open Gloomy Galleon Treasure Room", types: ["gloomy"] },
      { name: "Activate Production Room in Factory", types: ["factory","donkey"] },
      { name: "Key 2", types: ["key"] },
      { name: "1 GB on each kong", types: ["manygb"] },
  ];
  bingoList[2] = [
      { name: "3 Tiny Blueprints", types: ["bp","tiny","manygb"] },
      { name: "2 Battle Crowns", types: ["crown"] },
      { name: "Complete 3 Baboon Blasts", types: ["donkey"] },
      { name: "100 Bananas in Angry Aztec", types: ["aztec","banana","banana2"] },
      { name: "3 Donkey Blueprints", types: ["donkey","bp","manygb"] },
      { name: "3 Diddy Blueprints", types: ["diddy","bp","manygb"] },
      { name: "5 GBs in Jungle Japes", types: ["japes","manygb"] },
      { name: "150 Bananas in any Level", types: ["banana","banana2"] },
      { name: "50 Bananas in Crystal Caves", types: ["cave","banana","banana2"] },
      { name: "50 Bananas in Fungi Forest", types: ["banana","banana2","fungi"] },
      { name: "Gloomy Galleon Battle Crown", types: ["gloomy","crown"] }
  ];
  bingoList[3] = [
      { name: "Baboon Blast GB in Crystal Caves", types: ["cave","donkey"] },
      { name: "Seal Race GB", types: ["donkey","gloomy","race"] },
      { name: "Shoot 10 Banana Balloons", types: ["banana","banana2"] },
      { name: "Galleon Submarine GB", types: ["gloomy","bonus","tiny"] },
      { name: "Tile Flipping GB in Crystal Caves", types: ["cave","lanky"] },
      { name: "100 Bananas in Frantic Factory", types: ["factory","banana","banana2"] },
      { name: "Cannon Game GB in Gloomy Galleon", types: ["chunky","gloomy"] },
      { name: "Kill Giant Kosha", types: ["cave"] },
      { name: "Frantic Factory Battle Crown", types: ["factory","crown"] },
      { name: "Vulture GB", types: ["diddy","aztec"] }
  ];
  bingoList[4] = [
      { name: "100 Bananas in Gloomy Galleon", types: ["banana","banana2","gloomy"] },
      { name: "Key 4", types: ["key"] },
      { name: "No Bananaport Warps", types: ["restrict","restrict_warp","warp"] },
      { name: "Crystal Caves Battle Crown", types: ["cave","crown"] },
      { name: "Llama Temple Matching Game GB", types: ["lanky","aztec"] },
      { name: "Both Banana Fairies in Gloomy Galleon", types: ["gloomy","fairy"] },
      { name: "5 GBs in DK Isles", types: ["manygb","isles"] },
      { name: "100 Bananas in Creepy Castle", types: ["banana","banana2","castle"] },
      { name: "Diddy Minecart GB", types: ["japes","diddy","race"] },
      { name: "25 Coins with all Kongs", types: ["coin"] }
  ];
  bingoList[5] = [
      { name: "All Caged GBs in Jungle Japes", types: ["manygb","japes"] },
      { name: "Key 3", types: ["key","key3"] },
      { name: "Fungi Forest Battle Crown", types: ["fungi","crown"] },
      { name: "Turn on Lighthouse", types: ["gloomy","donkey"] },
      { name: "3 Chunky Blueprints", types: ["chunky","bp","manygb"] },
      { name: "Activate All Warps in Jungle Japes", types: ["japes","warp"] },
      { name: "Activate All Warps in Frantic Factory", types: ["factory","warp"] },
      { name: "5 Banana Fairies", types: ["fairy"] },
      { name: "3 Lanky Blueprints", types: ["lanky","bp","manygb"] },
      { name: "All 100 Bananas with any Kong in any level", types: ["banana","banana2"] }
  ];
  bingoList[6] = [
      { name: "No Pause Exit", types: ["restrict"] },
      { name: "100 Bananas in Crystal Caves", types: ["cave","banana","banana2"] },
      { name: "Pound the X GB in DK Isles", types: ["chunky","isles"] },
      { name: "Giant Toy Monster GB", types: ["chunky","factory"] },
      { name: "All Blueprints in Frantic Factory", types: ["factory","manybp","bp"] },
      { name: "5 GBs in Frantic Factory", types: ["factory","manygb"] },
      { name: "Both Banana Fairies in Frantic Factory", types: ["factory","fairy"] },
      { name: "250 Total Bananas", types: ["banana","banana2"] },
      { name: "DK Isles Summit GB", types: ["diddy","bonus","isles"] },
      { name: "5 GBs in Angry Aztec", types: ["aztec","manygb"] },
      { name: "Both Stealthy Snoop GBs", types: ["aztec","gloomy","manygb","bonus"] }
  ];
  bingoList[7] = [
      { name: "100 Bananas in Fungi Forest", types: ["fungi","banana","banana2"] },
      { name: "Key 6", types: ["key","key6"] },
      { name: "Pearl Rescue GB", types: ["tiny","gloomy"] },
      { name: "All Blueprints in Jungle Japes", types: ["japes","manybp","bp"] },
      { name: "Angry Aztec Battle Crown", types: ["aztec","lanky","crown"] },
      { name: "Both Banana Fairies in Angry Aztec", types: ["aztec","fairy"] },
      { name: "Both Banana Fairies in Jungle Japes", types: ["japes","fairy"] },
      { name: "10 GBs", types: ["manygb","manybp","bp"] },
      { name: "1 GB for each Kong in Factory", types: ["factory","manygb"] },
      { name: "All Caged GBs in DK Isles", types: ["manygb","isles"] },
      { name: "9 Rainbow Coins", types: ["coin","restrict_coin"] }
  ];
  bingoList[8] = [
      { name: "Chunky's Caged Bonus GB in Angry Aztec", types: ["aztec","chunky","bonus"] },
      { name: "3 Battle Crowns", types: ["crown"] },
      { name: "Mechanical Fish GB", types: ["diddy","gloomy"] },
      { name: "Key 8", types: ["key","fairy","helm","key8"] },
      { name: "Shoot 15 Banana Balloons", types: ["banana","banana2"] },
      { name: "5 GBs in Gloomy Galleon", types: ["manygb","gloomy"] },
      { name: "Squash Tomatoes GB", types: ["fungi","chunky"] },
      { name: "Both Splish-Splash Salvage GBs", types: ["gloomy","bonus","japes"] },
      { name: "5 Tiny Blueprints", types: ["bp","tiny","manygb"] },
      { name: "Chunky's Seasickness GB", types: ["gloomy","chunky","donkey"] },
      { name: "All 3 Batty Barrel Bandit GBs", types: ["factory","gloomy","bonus","manygb"] }
  ];
  bingoList[9] = [
      { name: "Both Tree GBs in Creepy Castle", types: ["chunky","donkey","castle","bonus"] },
      { name: "All Blueprints in Gloomy Galleon", types: ["gloomy","manybp","bp"] },
      { name: "Activate All Warps in Creepy Castle", types: ["castle","warp"] },
      { name: "Activate All Warps in Angry Aztec", types: ["aztec","warp"] },
      { name: "5 Diddy Blueprints", types: ["bp","diddy","manygb"] },
      { name: "Spider Mini-Boss GB", types: ["tiny","fungi"] },
      { name: "Both Mad Maze Maul GBs", types: ["cave","bonus","japes"] },
      { name: "100 bananas for 1 Kong in Jungle Japes", types: ["banana","banana2","japes"] },
      { name: "5 Lobby GBs", types: ["isles","manygb"] },
      { name: "1 GB for each Kong in Jungle Japes", types: ["japes","manygb"] }
  ];
  bingoList[10] = [
      { name: "Both Banana Fairies in Crystal Caves", types: ["cave","fairy"] },
      { name: "All Blueprints in Creepy Castle", types: ["manybp","castle","bp"] },
      { name: "All Blueprints in Crystal Caves", types: ["manybp","cave","bp"] },
      { name: "Key 7", types: ["castle","key7","key"] },
      { name: "200 Bananas in Jungle Japes", types: ["japes","banana","banana2"] },
      { name: "Activate All Warps in Gloomy Galleon", types: ["gloomy","warp"] },
      { name: "10 Blueprints", types: ["bp","manybp"] },
      { name: "5 Donkey Blueprints", types: ["bp","donkey","manygb"] },
      { name: "Beanstalk GB", types: ["tiny","fungi"] },
      { name: "Creepy Castle Battle Crown", types: ["crown","castle","lanky"] },
      { name: "Enter Every Level", types: ["helm","manylevel"] }
  ];
  bingoList[11] = [
      { name: "No Rainbow Coins", types: ["restrict","restrict_coin","coin"] },
      { name: "Chunky Minecart GB", types: ["chunky","fungi","race"] },
      { name: "8 Banana Fairies", types: ["fairy"] },
      { name: "Both Speedy Swing Sortie GBs", types: ["japes","bonus","fungi"] },
      { name: "5 Bonus Barrel GBs", types: ["manygb","bonus"] },
      { name: "3 Banana Medals in Jungle Japes", types: ["banana","banana2","japes","medal"] },
      { name: "10 Donkey GBs", types: ["donkey","manygb","bp"] },
      { name: "1 GB for each Kong in Gloomy Galleon", types: ["gloomy","manygb"] },
      { name: "200 Bananas in Frantic Factory", types: ["banana","banana2","factory"] },
      { name: "100 bananas for 1 Kong in Angry Aztec", types: ["aztec","banana2","banana2"] },
      { name: "Activate All Warps in Crystal Caves", types: ["cave","warp"] }
  ];
  bingoList[12] = [
      { name: "Rabbit Race GB", types: ["fungi","lanky"] },
      { name: "Ballroom GB", types: ["diddy","castle","bonus"] },
      { name: "Both Banana Fairies in Fungi Forest", types: ["fungi","fairy"] },
      { name: "5 Lanky Blueprints", types: ["bp","lanky","manygb"] },
      { name: "5 Chunky Blueprints", types: ["bp","chunky","manygb"] },
      { name: "2 GBs on each kong", types: ["manygb","manybp"] },
      { name: "Activate All Warps in Fungi Forest", types: ["fungi","warp"] },
      { name: "5 GBs in Crystal Caves", types: ["cave","manygb"] },
      { name: "3 Banana Medals", types: ["banana","banana2","medal"] },
      { name: "All 5 DK Isles Instrument Pad GBs", types: ["manygb","isles"] },
      { name: "Hideout Helm Battle Crown", types: ["helm","crown"] }
  ];
  bingoList[13] = [
      { name: "Owl GB", types: ["diddy","bonus","fungi"] },
      { name: "Both DK Isles Battle Crowns", types: ["crown","isles"] },
      { name: "Both Banana Fairies in Creepy Castle", types: ["fairy","castle"] },
      { name: "Donkey Minecart GB", types: ["donkey","castle","race"] },
      { name: "250 Total Bananas With Donkey", types: ["banana","banana2"] },
      { name: "200 Bananas in Gloomy Galleon", types: ["gloomy","banana","banana2"] },
      { name: "15 GBs", types: ["manygb","manybp","bp"] },
      { name: "All 4 GB's in Llama Temple", types: ["aztec","manygb"] },
      { name: "100 Bananas for Any Kong in Frantic Factory", types: ["factory","banana","banana2"] },
      { name: "100 Bananas for Any Kong in Gloomy Galleon", types: ["gloomy","banana","banana2"] }
  ];
  bingoList[14] = [
      { name: "5 GBs in Fungi Forest", types: ["fungi","manygb"] },
      { name: "All Banana Fairies in DK Isles", types: ["fairy","isles"] },
      { name: "All Blueprints in DK Isles", types: ["isles","bp","manybp"] },
      { name: "All 5 Production Room GBs in Frantic Factory", types: ["factory","manygb"] },
      { name: "1 GB for each Kong in Angry Aztec", types: ["aztec","manygb"] },
      { name: "2 Blueprints on each Kong", types: ["manybp","bp"] },
      { name: "All Blueprints in Angry Aztec", types: ["aztec","bp","manybp"] },
      { name: "200 Bananas in Angry Aztec", types: ["aztec","banana","banana2"] },
      { name: "1 GB for each Kong in Crystal Caves", types: ["cave","manygb"] },
      { name: "2 Minecart Mayhem GBs", types: ["bonus"] }
  ];
  bingoList[15] = [
      { name: "3 Banana Medals in Frantic Factory", types: ["factory","medal","banana","banana2"] },
      { name: "100 bananas for Any Kong in Fungi Forest", types: ["fungi","banana","banana2"] },
      { name: "Shoot 20 Banana Balloons", types: ["banana","banana2"] },
      { name: "100 bananas for Any Kong in Crystal Caves", types: ["cave","banana","banana2"] },
      { name: "5 GBs in Creepy Castle", types: ["castle","manygb"] },
      { name: "3 Donkey Banana Medals", types: ["medal","banana","banana2"] },
      { name: "10 GBs in Jungle Japes", types: ["japes","manygb"] },
      { name: "350 Total Bananas", types: ["banana","banana2"] },
      { name: "Both Car Races", types: ["tiny","race"] },
      { name: "All 4 GBs in Tiny Temple", types: ["manygb","aztec"] }
  ];
  bingoList[16] = [
      { name: "All 5 GBs from 5 Door Ship", types: ["gloomy","manygb"] },
      { name: "13 Blueprints", types: ["bp","manybp"] },
      { name: "250 Total Bananas With Diddy", types: ["banana","banana2"] },
      { name: "Both Beetle Slides", types: ["lanky","tiny","aztec","cave","race"] },
      { name: "1 GB for each Kong in Fungi Forest", types: ["fungi","manygb"] },
      { name: "All 3 Beaver Bother GBs", types: ["bonus","castle"] },
      { name: "100 bananas for Any Kong in Creepy Castle", types: ["castle","banana","banana2"] },
      { name: "3 Banana Medals in Angry Aztec", types: ["aztec","banana","banana2"] },
      { name: "10 Banana Fairies", types: ["fairy"] },
      { name: "200 Bananas in Crystal Caves", types: ["cave","banana","banana2"] }
  ];
  bingoList[17] = [
      { name: "1 GB per level", types: ["manygb","manylevel"] },
      { name: "All 5 GBs in 5 Door Igloo", types: ["manygb","cave"] },
      { name: "Donkey's Banana Medal in Hideout Helm", types: ["donkey","helm","medal"] },
      { name: "50 Bananas in every level", types: ["banana","banana2","manylevel"] },
      { name: "All 5 GBs in 5 Door Cabin", types: ["manygb","diddy","cave"] },
      { name: "3 Banana Medals in Gloomy Galleon", types: ["gloomy","medal","banana","banana2"] },
      { name: "All 7 DK Isles Rainbow Coins", types: ["coin","isles","restrict_coin"] },
      { name: "All Blueprints in Fungi Forest", types: ["fungi","bp","manybp"] },
      { name: "7 Tiny Blueprints", types: ["bp","manygb","tiny"] },
      { name: "1 GB for each Kong in Creepy Castle", types: ["manygb","castle"] }
  ];
  bingoList[18] = [
      { name: "10 Diddy GBs", types: ["diddy","manygb","bp"] },
      { name: "12 Rainbow Coins", types: ["coin ","restrict_coin"] },
      { name: "3 Banana Medals in Crystal Caves", types: ["medal","banana","banana2","cave"] },
      { name: "16 Blueprints", types: ["bp","manybp"] },
      { name: "250 Total Bananas With Chunky", types: ["chunky","banana","banana2"] },
      { name: "3 Diddy Banana Medals", types: ["diddy","medal","banana2","banana2"] },
      { name: "250 Total Bananas With Tiny", types: ["tiny","banana","banana2"] },
      { name: "250 Total Bananas With Lanky", types: ["lanky","banana","banana2"] },
      { name: "5 Boss Keys", types: ["key"] },
      { name: "2 GBs for each Kong in Jungle Japes", types: ["manygb","manybp","japes"] }
  ];
  bingoList[19] = [
      { name: "Open Crown Door in Helm", types: ["crown","helm"] },
      { name: "3 Chunky Banana Medals", types: ["banana","banana2","chunky","medal"] },
      { name: "3 Tiny Banana Medals", types: ["banana","banana2","tiny","medal"] },
      { name: "3 Lanky Banana Medals", types: ["banana","banana2","lanky","medal"] },
      { name: "200 Bananas in Fungi Forest", types: ["banana","banana2","fungi"] },
      { name: "75 Coins with any Kong", types: ["coin","restrict_coin"] },
      { name: "7 Chunky Blueprints", types: ["bp","manygb","chunky"] },
      { name: "7 Lanky Blueprints", types: ["bp","manygb","lanky"] },
      { name: "2 GBs for each Kong in Frantic Factory", types: ["manygb","factory","manybp"] },
      { name: "3 Blueprints on each Kong", types: ["manybp","manygb"] }
  ];
  bingoList[20] = [
      { name: "10 Chunky GBs", types: ["manygb","chunky"] },
      { name: "10 GBs in Frantic Factory", types: ["manygb","factory"] },
      { name: "10 GBs in DK Isles", types: ["manygb","isles"] },
      { name: "7 Diddy Blueprints", types: ["bp","diddy","manygb"] },
      { name: "Spawn K. Rool Ship", types: ["key3","key8","key"] },
      { name: "10 Lanky GBs", types: ["manygb","lanky"] },
      { name: "200 Bananas in Creepy Castle", types: ["banana","banana2","castle"] },
      { name: "50 Coins with any 3 Kongs", types: ["coin","restrict_coin"] },
      { name: "10 GBs in Gloomy Galleon", types: ["manygb","gloomy"] },
      { name: "10 Tiny GBs", types: ["manygb","tiny"] }
  ];
  bingoList[21] = [
      { name: "10 GBs in Crystal Caves", types: ["manygb","cave"] },
      { name: "7 Donkey Blueprints", types: ["bp","donkey","manygb"] },
      { name: "Nintendo Coin", types: ["factory"] },
      { name: "3 Banana Medals in Fungi Forest", types: ["banana","banana2","medal","fungi"] },
      { name: "Open K. Rool's Mouth", types: ["key7","key6","key"] },
      { name: "10 GBs in Angry Aztec", types: ["manygb","aztec"] },
      { name: "20 GBs", types: ["bp","manybp","manygb"] },
      { name: "Banana Medal with Every Kong", types: ["banana","banana2","medal"] },
      { name: "3 GBs on each kong", types: ["manygb","manybp"] },
      { name: "2 GBs for each Kong in Gloomy Galleon", types: ["manygb","gloomy","manybp"] }
  ];
  bingoList[22] = [
      { name: "Chunky's Banana Medal in Hideout Helm", types: ["helm","medal","chunky"] },
      { name: "All 4 R&D GBs in Frantic Factory", types: ["manygb","factory"] },
      { name: "All 5 GBs from 5 Door Temple", types: ["manygb","aztec"] },
      { name: "500 Total Bananas", types: ["banana","banana2"] },
      { name: "20 Blueprints", types: ["bp","manybp"] },
      { name: "3 Banana Medals in Creepy Castle", types: ["banana","banana2","castle","medal"] },
      { name: "15 Donkey GBs", types: ["manygb","donkey"] },
      { name: "Activate All Purple Warps", types: ["manylevel","warp"] },
      { name: "2 GBs for each Kong in DK Isles", types: ["manygb","isles","manybp"] },
      { name: "2 GBs for each Kong in Angry Aztec", types: ["manygb","aztec","manybp"] }
  ];
  bingoList[23] = [
      { name: "10 GBs in Fungi Forest", types: ["manygb","fungi"] },
      { name: "6 Boss Keys", types: ["key"] },
      { name: "Complete All 7 Baboon Blasts", types: ["manygb","donkey","manylevel"] },
      { name: "Complete DK phase of K. Rool Fight", types: ["key3","key8","key"] },
      { name: "10 GBs in Creepy Castle", types: ["manygb","castle"] },
      { name: "2 GBs per level", types: ["manygb","manylevel"] },
      { name: "Activate All Green Warps", types: ["manylevel","warp"] },
      { name: "6 Battle Crowns", types: ["crown"] },
      { name: "2 GBs for each Kong in Crystal Caves", types: ["manygb","cave","manybp"] },
      { name: "All banana medals for any level", types: ["banana","banana2","medal"] }
  ];
  bingoList[24] = [
      { name: "All 5 Crypt GB's in Castle", types: ["castle","manygb"] },
      { name: "13 Banana Fairies", types: ["fairy","key8"] },
      { name: "4 GBs on each kong", types: ["manygb","manybp"] },
      { name: "2 GBs for each Kong in Fungi Forest", types: ["manygb","fungi"] },
      { name: "4 Blueprints on each Kong", types: ["bp","manybp"] },
      { name: "300 Total Banana Coins", types: ["coin","restrict_coin"] },
      { name: "All 3 Minecart rides", types: ["race","manygb"] },
      { name: "Activate All Red Warps", types: ["manylevel","warp"] },
      { name: "Activate All Yellow Warps", types: ["manylevel","warp"] },
      { name: "10 Bonus Barrel GBs", types: ["manygb","bonus"] }
  ];
  bingoList[25] = [
      { name: "90 coins with one Kong", types: ["coin","restrict_coin"] },
      { name: "Complete Diddy's phase of K. Rool Fight", types: ["key3","key8","key"] },
      { name: "Complete 4 Coin-Collecting Courses", types: ["manygb","race"] },
      { name: "600 Total Bananas", types: ["banana","banana2"] },
      { name: "25 Blueprints", types: ["bp","manybp"] },
      { name: "2 GBs for Each Kong in Creepy Castle", types: ["castle","manygb"] },
      { name: "15 Diddy GBs", types: ["manygb","diddy"] },
      { name: "Lanky's Medal in Helm", types: ["helm","medal","lanky"] },
      { name: "25 GBs", types: ["manygb","bp","manybp"] },
      { name: "Activate All Blue Warps", types: ["manylevel","warp"] }
  ];
  $(function() { srl.bingo(bingoList, 5); });
