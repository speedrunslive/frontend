  var bingoList = []; //number represents difficulty 
        bingoList[1] = [
              { name: "Strong Kong", types: ["buy"] },
              { name: "Baboon Balloon", types: ["buy"] },
              { name: "25 Banana Coins for Donkey", types: ["coin"] },
              { name: "25 Banana Coins for Diddy", types: ["coin"] },
              { name: "25 Banana Coins for Lanky", types: ["coin"] },
              { name: "Donkey's GB in K. Rool Ship Cage", types: ["donkeygb","isles"] },
              { name: "Jungle Japes Battle Crown", types: ["crown", "japes"] },
              { name: "50 Bananas in Jungle Japes", types: ["japes","banana","banana2"] },
              { name: "50 Bananas in Angry Aztec", types: ["aztec","banana","banana2"] }
        ];
        bingoList[2] = [
              { name: "25 Banana Coins for Tiny", types: ["coin"] },
              { name: "25 Banana Coins for Chunky", types: ["coin"] },
              { name: "Baboon Blast GB in Jungle Japes", types: ["japes","donkeygb"] }, 
              { name: "Ammo Belt 2", types: ["buy"] },
              { name: "Gorilla Grab", types: ["buy"] },
              { name: "Simian Spring", types: ["buy"] },
              { name: "50 Bananas in Gloomy Galleon", types: ["gloomy","banana","banana2"] },
              { name: "3 Melons", types: ["buy","instrument"] },
              { name: "50 Bananas in Crystal Caves", types: ["cave","banana","banana2"] }
        ];
        bingoList[3] = [
              { name: "50 Bananas in Frantic Factory", types: ["factory","banana","banana2"] },
              { name: "Angry Aztec Lobby GB", types: ["isles","bonus","tinygb"] },  
              { name: "Gorilla Gone", types: ["buy"] },
              { name: "Monkeyport", types: ["buy"] },
              { name: "Orangstand Sprint", types: ["buy"] },
              { name: "100 Bananas in Jungle Japes", types: ["japes","banana","banana2"] },
              { name: "All Guns", types: ["buy","gun"] },
              { name: "5 Blueprints", types: ["bp"] },
              { name: "Gloomy Galleon Battle Crown", types: ["gloomy","crown"] },
              { name: "Open Gloomy Galleon Treasure Room", types: ["gloomy"] }
        ];
        bingoList[4] = [
              { name: "Vulture GB", types: ["diddygb","aztec"] },
              { name: "Activate Production Room in Factory", types: ["factory","donkeygb"] },
              { name: "3 Tiny Blueprints", types: ["bp","tinygb","manygb"] },
              { name: "All Instruments", types: ["buy","instrument"] },
              { name: "2 Battle Crowns", types: ["crown"] },
              { name: "Key 2", types: ["aztec","key","key2"] },
              { name: "Baboon Blast GB in Crystal Caves", types: ["cave","donkeygb"] },
              { name: "Diddy Minecart GB", types: ["japes","diddygb","race"] },
              { name: "Complete 3 Baboon Blasts", types: ["donkeygb"] }
        ];
        bingoList[5] = [
              { name: "100 Bananas in Gloomy Galleon", types: ["banana","banana2","gloomy"] },
              { name: "100 Bananas in Angry Aztec", types: ["aztec","banana","banana2"] },
              { name: "Shoot 10 Banana Balloons", types: ["banana","banana2","gun"] },
              { name: "Galleon Submarine GB", types: ["gloomy","bonus","tinygb"] },
              { name: "3 Donkey Blueprints", types: ["donkeygb","bp","manygb"] },
              { name: "3 Diddy Blueprints", types: ["diddygb","bp","manygb"] },
              { name: "5 GBs in Jungle Japes", types: ["japes","manygb"] },
              { name: "No Bananaport Warps", types: ["restrict","restrict_warp","warp"] },
              { name: "Key 4", types: ["gloomy","key","fungi"] },
              { name: "150 Bananas in any Level", types: ["banana","banana2"] }
        ];
        bingoList[6] = [
              { name: "100 Bananas in Frantic Factory", types: ["factory","banana","banana2"] },
              { name: "Cannon Game GB in Gloomy Galleon", types: ["chunkygb","gloomy"] },
              { name: "Tile Flipping GB in Crystal Caves", types: ["cave","lankygb"] },
              { name: "Crystal Caves Battle Crown", types: ["cave","crown"] },
              { name: "Key 3", types: ["factory", "key", "key3"] },
              { name: "Llama Temple Matching Game GB", types: ["lankygb","aztec"] },
              { name: "Turn on Lighthouse", types: ["gloomy","donkeygb"] },
              { name: "3 Chunky Blueprints", types: ["chunkygb","bp","manygb"] },
              { name: "Activate All Warps in Jungle Japes", types: ["japes","warp"] },
              { name: "5 GBs in Angry Aztec", types: ["aztec","manygb"] }
        ];
        bingoList[7] = [
              { name: "25 Coins with all Kongs", types: ["coin"] },
              { name: "25 Coins with all Kongs", types: ["coin"] },
              { name: "Both Banana Fairies in Gloomy Galleon", types: ["gloomy","fairy"] },
              { name: "Activate All Warps in Frantic Factory", types: ["factory","warp"] },
              { name: "Frantic Factory Battle Crown", types: ["factory","crown"] },
              { name: "100 Bananas in Crystal Caves", types: ["cave","banana","banana2"] },
              { name: "Kill Giant Kosha", types: ["cave"] },
              { name: "5 Banana Fairies", types: ["fairy","key8"] },
              { name: "3 Lanky Blueprints", types: ["lankygb","bp","manygb"] },
              { name: "5 GBs in DK Isles", types: ["manygb","isles"] }

        ];
        bingoList[8] = [
              { name: "All Caged GBs in Jungle Japes", types: ["manygb","japes"] },
              { name: "Giant Toy Monster GB", types: ["chunkygb","factory"] },
              { name: "Fungi Forest Battle Crown", types: ["fungi","crown"] },
              { name: "50 Bananas in Fungi Forest", types: ["banana","banana2","fungi"] },
              { name: "Both Banana Fairies in Frantic Factory", types: ["factory","fairy"] },
              { name: "Seal Race GB", types: ["donkeygb","gloomy","race"] },
              { name: "Pearl Rescue GB", types: ["tinygb","gloomy"] },
              { name: "All Blueprints in Jungle Japes", types: ["japes","bp"] },
              { name: "Angry Aztec Battle Crown", types: ["aztec","lankygb","crown"] },
              { name: "Chunky's Caged Bonus GB in Angry Aztec", types: ["aztec","chunkygb","bonus"] }
        ];
        bingoList[9] = [
              { name: "No Pause Exit", types: ["restrict"] },
              { name: "Mechanical Fish GB", types: ["diddygb","gloomy"] },
              { name: "All Blueprints in Frantic Factory", types: ["factory","bp"] },
              { name: "Shoot 15 Banana Balloons", types: ["banana","banana2","gun"] },
              { name: "5 GBs in Frantic Factory", types: ["factory","manygb"] },
              { name: "9 Rainbow Coins", types: ["coin","restrict_coin","fungi"] },
              { name: "3 Banana Medals", types: ["banana","banana2","medal"] },
              { name: "250 Total Bananas", types: ["banana","banana2"] },
              { name: "Both Banana Fairies in Angry Aztec", types: ["aztec","fairy"] },
              { name: "Both Banana Fairies in Jungle Japes", types: ["japes","fairy"] }
        ];
        bingoList[10] = [
              { name: "5 Tiny Blueprints", types: ["bp","tinygb","manygb"] },
              { name: "5 GBs for 1 Kong in Jungle Japes", types: ["manygb","japes"] },
              { name: "Key 8", types: ["key","fairy","helm","key8"] },
              { name: "3 Battle Crowns", types: ["crown"] },
              { name: "Activate All Warps in Gloomy Galleon", types: ["gloomy","warp"] },
              { name: "Activate All Warps in Angry Aztec", types: ["aztec","warp"] },
              { name: "DK Isles Summit GB", types: ["diddygb","bonus","isles"] },
              { name: "Chunky's Seasickness GB", types: ["gloomy","chunkygb","donkeygb"] },
              { name: "All Blueprints in Gloomy Galleon", types: ["gloomy","bp"] }
        ];
        bingoList[11] = [
              { name: "No Rainbow Coins", types: ["restrict","restrict_coin","coin","buy"] },
              { name: "200 Bananas in Jungle Japes", types: ["japes","banana","banana2"] },
              { name: "100 Bananas in Fungi Forest", types: ["fungi","banana","banana2"] },
              { name: "Key 6", types: ["cave", "key", "key6"] },
              { name: "All Caged GBs in DK Isles", types: ["manygb","gun","isles"] },
              { name: "Both Mad Maze Maul GBs", types: ["cave","bonus","diddygb","lankygb","japes"] },
              { name: "Both Splish-Splash Salvage GBs", types: ["diddygb","tinygb","gloomy","bonus","japes"] },
              { name: "Activate All Warps in Crystal Caves", types: ["cave","warp"] },
              { name: "5 GBs in Gloomy Galleon", types: ["manygb","gloomy"] },
              { name: "5 Lobby GBs", types: ["isles","manygb"] }

        ];
        bingoList[12] = [
              { name: "10 Blueprints", types: ["bp","manygb"] },
              { name: "200 Bananas in Frantic Factory", types: ["banana","banana2","factory"] },
              { name: "5 Diddy Blueprints", types: ["bp","diddygb","manygb"] },
              { name: "All 5 DK Isles Instrument Pad GBs", types: ["manygb","instrument","isles"] },
              { name: "All Blueprints in Crystal Caves", types: ["bp","cave","restrict_warp"] },
              { name: "Pound the X GB in DK Isles", types: ["chunkygb","fairy","isles"] },
              { name: "3 Banana Medals in Jungle Japes", types: ["banana","banana2","japes","medal"] },
              { name: "250 Total Bananas With Donkey", types: ["banana","banana2"] },
              { name: "Both Banana Fairies in Crystal Caves", types: ["cave","fairy"] },
              { name: "5 Bonus Barrel GBs", types: ["manygb","bonus"] }

        ];
        bingoList[13] = [
              { name: "5 Donkey Blueprints", types: ["bp","donkeygb","manygb"] },
              { name: "Shoot 20 Banana Balloons", types: ["banana","banana2","gun"] },
              { name: "5 GBs for 1 Kong in Angry Aztec", types: ["manygb","aztec"] },
              { name: "Both DK Isles Battle Crowns", types: ["crown","gun","isles"] },
              { name: "Squash Tomatoes GB", types: ["fungi","chunkygb"] },
              { name: "200 Bananas in Angry Aztec", types: ["aztec","banana","banana2"] },
              { name: "8 Banana Fairies", types: ["fairy","key8"] },
              { name: "Both Speedy Swing Sortie GBs", types: ["tinygb","lankygb","japes","bonus","fungi"] },
              { name: "All Blueprints in Angry Aztec", types: ["aztec","bp","restrict_warp"] }

        ];
        bingoList[14] = [
              { name: "3 Donkey Banana Medals", types: ["banana","banana2","medal","donkeymedal"] },
              { name: "5 Lanky Blueprints", types: ["bp","lankygb","manygb"] },
              { name: "50 Bananas in Creepy Castle", types: ["castle","banana","banana2","key5"] },
              { name: "3 Banana Medals in Frantic Factory", types: ["banana","banana2","factory", "medal"] },
              { name: "Chunky Minecart GB", types: ["chunkygb","fungi","race"] },
              { name: "Key 5", types: ["fungi","key5","key"] },
              { name: "5 Chunky Blueprints", types: ["bp","chunkygb","manygb"] },
              { name: "10 GBs", types: ["manygb"] },
              { name: "250 Total Bananas With Diddy", types: ["banana","banana2"] },
              { name: "5 GBs in Crystal Caves", types: ["manygb","cave"] }
        ];
        bingoList[15] = [
              { name: "Enter Every Level", types: ["castle","key5","helm"] },
              { name: "Both Beetle Slides", types: ["lankygb","tinygb","diddygb","aztec","cave","race"] },
              { name: "13 Blueprints", types: ["bp","manygb"] },
              { name: "2 Minecart Mayhem GBs", types: ["chunkygb","donkeygb","diddygb","bonus"] },
              { name: "5 GBs for 1 Kong in Gloomy Galleon", types: ["manygb","gloomy"] },
              { name: "250 Total Bananas With Chunky", types: ["banana","banana2"] },
              { name: "Activate All Warps in Fungi Forest", types: ["fungi","warp"] },
              { name: "250 Total Bananas With Tiny", types: ["banana","banana2"] },
              { name: "250 Total Bananas With Lanky", types: ["banana","banana2"] },
              { name: "3 Banana Medals in Angry Aztec", types: ["banana","banana2","aztec", "medal"] }

        ];
        bingoList[16] = [
              { name: "3 Diddy Banana Medals", types: ["banana","banana2","medal"] },
              { name: "100 Bananas in Creepy Castle", types: ["banana","banana2","castle","key5"] },
              { name: "All Blueprints in DK Isles", types: ["bp","isles","key5"] },
              { name: "Super Duper Simian Slam", types: ["castle","buy","key5"] },
              { name: "Sniper Scope", types: ["buy","castle","key5"] },
              { name: "10 Banana Fairies", types: ["fairy","key8"] },
              { name: "200 Bananas in Crystal Caves", types: ["banana","banana2","cave"] },
              { name: "All Banana Fairies in DK Isles", types: ["fairy","isles"] },
              { name: "10 Donkey GBs", types: ["donkeygb","manygb"] },
              { name: "200 Bananas in Gloomy Galleon", types: ["gloomy","banana","banana2"] }

        ];
        bingoList[17] = [
              { name: "Banana Medal with Every Kong", types: ["banana","banana2","medal"] },
              { name: "3 Chunky Banana Medals", types: ["banana","banana2","medal","chunkymedal"] },
              { name: "3 Tiny Banana Medals", types: ["banana","banana2","medal"] },
              { name: "3 Lanky Banana Medals", types: ["banana","banana2","medal"] },
              { name: "350 Total Bananas", types: ["banana","banana2"] },
              { name: "Beanstalk GB", types: ["tinygb","fungi"] },
              { name: "3 Banana Medals in Gloomy Galleon", types: ["banana","banana2","gloomy", "medal"] },
              { name: "All 7 DK Isles Rainbow Coins", types: ["coin","isles","key5"] },
              { name: "Spider Mini-Boss GB", types: ["tinygb","fungi"] },
              { name: "All Blueprints in Fungi Forest", types: ["bp","fungi"] }

        ];
        bingoList[18] = [
              { name: "Rabbit Race GB", types: ["fungi","lankygb"] },
              { name: "All 5 Production Room GBs in Frantic Factory", types: ["manygb","donkeygb","factory"] },
              { name: "5 GBs for 1 Kong in Frantic Factory", types: ["manygb","factory"] },
              { name: "Both Banana Fairies in Fungi Forest", types: ["fungi","fairy"] },
              { name: "12 Rainbow Coins", types: ["coin","restrict_coin","fungi"] },
              { name: "7 Tiny Blueprints", types: ["bp","tinygb","manygb"] },
              { name: "3 Banana Medals in Crystal Caves", types: ["banana","banana2","cave","medal"] },
              { name: "16 Blueprints", types: ["bp","manygb"] },
              { name: "5 GBs in Fungi Forest", types: ["fungi","manygb"] },
              { name: "10 GBs in Jungle Japes", types: ["manygb","japes"] }

        ];
        bingoList[19] = [
              { name: "7 Chunky Blueprints", types: ["bp","chunkygb","manygb"] },
              { name: "7 Lanky Blueprints", types: ["bp","lankygb","manygb"] },
              { name: "All 5 GBs from 5 Door Ship", types: ["gloomy","manygb","bonus"] },
              { name: "All 5 GBs in 5 Door Igloo", types: ["cave","manygb"] },
              { name: "Hideout Helm Battle Crown", types: ["helm","crown"] },
              { name: "10 Diddy GBs", types: ["diddygb","manygb"] },
              { name: "75 Coins with any Kong", types: ["coin"] },
              { name: "10 GBs in Frantic Factory", types: ["manygb","factory","bp"] },
              { name: "10 GBs in DK Isles", types: ["manygb","isles"] }

        ];
        bingoList[20] = [
              { name: "Owl GB", types: ["diddygb","bonus","fungi"] },
              { name: "Open Crown Door in Helm", types: ["crown","helm"] },
              { name: "Ballroom GB", types: ["diddygb","castle","bonus","key5"] },
              { name: "200 Bananas in Fungi Forest", types: ["fungi","banana","banana2","medal"] },
              { name: "Creepy Castle Battle Crown", types: ["crown","castle","key5","lankygb"] },
              { name: "Spawn K. Rool Ship", types: ["key3","key8","key"] },
              { name: "15 GBs", types: ["manygb","bp"] },
              { name: "10 GBs in Angry Aztec", types: ["manygb","aztec","bp"] },
              { name: "Donkey's Banana Medal in Hideout Helm", types: ["helm","medal","donkeymedal"] }

        ];
        bingoList[21] = [
              { name: "All 4 R&D GBs in Frantic Factory", types: ["race","factory","manygb","instrument"] },
              { name: "All 5 GBs from 5 Door Temple", types: ["manygb","aztec","gun"] },
              { name: "7 Donkey Blueprints", types: ["bp","donkeygb","manygb"] },
              { name: "7 Diddy Blueprints", types: ["bp","diddygb","manygb","key5"] },
              { name: "50 Bananas in every level", types: ["banana","banana2"] },  
              { name: "13 Banana Fairies", types: ["fairy","key8"] },
              { name: "6 Battle Crowns", types: ["crown"] },
              { name: "50 Coins with any 3 Kongs", types: ["coin"] },
              { name: "10 GBs in Gloomy Galleon", types: ["manygb","gloomy","bp"] }

        ];
        bingoList[22] = [
              { name: "5 GBs for 1 Kong in Crystal Caves", types: ["manygb","cave"] },
              { name: "10 Lanky GBs", types: ["lankygb","manygb"] },
              { name: "10 Tiny GBs", types: ["tinygb","manygb"] },
              { name: "Both Tree GBs in Creepy Castle", types: ["chunkygb","donkeygb","castle","bonus","key5"] },
              { name: "2 Beaver Bother GBs", types: ["diddygb","lankygb","chunkygb","bonus","factory","castle","key5"] },
              { name: "All 5 GBs in 5 Door Cabin", types: ["diddygb","manygb","cave","instrument"] },
              { name: "Both Banana Fairies in Creepy Castle", types: ["fairy","castle","key5"] },
              { name: "3 Banana Medals in Fungi Forest", types: ["banana","banana2","fungi","medal"] },
              { name: "All Blueprints in Creepy Castle", types: ["bp","castle","key5"] }

        ];
        bingoList[23] = [
              { name: "5 GBs for 1 Kong in Fungi Forest", types: ["manygb","fungi"] },
              { name: "Activate All Warps in Creepy Castle", types: ["castle","warp","key5"] },
              { name: "500 Total Bananas", types: ["banana","banana2"] },
              { name: "Key 7", types: ["castle","key7","key5","key"] },
              { name: "10 Chunky GBs", types: ["chunkygb","manygb"] },
              { name: "20 Blueprints", types: ["bp","manygb"] },
              { name: "5 GBs in Creepy Castle", types: ["manygb","castle","key5"] },
              { name: "Donkey Minecart GB", types: ["donkeygb","castle","key5","race"] },
              { name: "200 Bananas in Creepy Castle", types: ["banana","banana2","castle","key5"] }

        ];
        bingoList[24] = [
              { name: "Both Car Races", types: ["factory","castle","tinygb","key5","race"] },
              { name: "10 GBs in Crystal Caves", types: ["manygb","cave","bp"] },
              { name: "Complete DK phase of K. Rool Fight", types: ["key3","key8","key"] },
              { name: "Nintendo Coin", types: ["donkeygb","factory"] },
              { name: "5 Boss Keys", types: ["key","fungi","key5"] },
              { name: "15 Donkey GBs", types: ["manygb","donkeygb"] },  
              { name: "10 Bonus Barrel GBs", types: ["manygb","bonus"] },
              { name: "3 Banana Medals in Creepy Castle", types: ["banana","banana2","castle","key5","medal"] },
              { name: "5 GBs for 1 Kong in Creepy Castle", types: ["manygb","castle","key5"] }
        ];
        bingoList[25] = [
              { name: "Chunky's Banana Medal in Hideout Helm", types: ["helm","medal","chunkymedal"] },  
              { name: "10 GBs in Fungi Forest", types: ["manygb","fungi"] },
              { name: "15 Diddy GBs", types: ["manygb","diddygb"] },
              { name: "20 GBs", types: ["manygb","bp"] },
              { name: "Complete 4 Coin-Collecting Courses", types: ["manygb","race"] },
              { name: "600 Total Bananas", types: ["banana","banana2"] },
              { name: "25 Blueprints", types: ["bp","manygb"] },
              { name: "10 GBs in Creepy Castle", types: ["manygb","castle","bp","key5"] },
              { name: "Open K. Rool's Mouth", types: ["cave","castle","key7","key6","key","key5"] }

        ];
         
        $(function() { srl.bingo(bingoList, 5); });