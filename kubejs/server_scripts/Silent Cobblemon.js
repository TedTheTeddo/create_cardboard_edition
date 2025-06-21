Platform.mods.kubejs.name = 'Create Cardboard Edition'
ServerEvents.recipes(event => {

//Crafting Recipes

//Light Sparkling Stone
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:calcite"
    },
    "B": {
      "item": "cobblemon:tumblestone"
    },
    "C": {
      "item": "cobblemon:sky_tumblestone"
    },
    "D": {
      "item": "mega_showdown:blank-z"
    },
    "E": {
      "item": "minecraft:glowstone_dust"
    },            
  },
  "pattern": [
    " AC",
    "ADA",
    "BAE"
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:sparkling_stone_light"
  }

  })

//Eject Pack
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "create:iron_sheet"
    },
    "B": {
      "item": "minecraft:white_wool"
    },
    "C": {
      "item": "minecraft:redstone_block"
    },
    "D": {
      "item": "minecraft:piston"
    },
          
  },
  "pattern": [
    " A ",
    "BCB",
    "BDB"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:eject_pack"
  }

  })

//Gracidea Flower
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:torchflower"
    },
    "B": {
      "item": "cobblemon:misty_seed"
    },
    "C": {
      "item": "cobblemon:grassy_seed"
    },
    "D": {
      "item": "cobblemon:mirror_herb"
    },          
  },
  "pattern": [
    "AB ",
    "CD "
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:gracidea_flower"
  }

  })


//Shed Shell
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:gold_block"
    },
    "B": {
      "item": "minecraft:nautilus_shell"
    },
          
  },
  "pattern": [
    "ABA",
    "ABA",
    "ABA"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:shed_shell"
  }

  })

//Shell Helmet
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:diamond_helmet"
    },
    "B": {
      "item": "minecraft:nautilus_shell"
    },
          
  },
  "pattern": [
    "BBB",
    "BAB"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:shell_helmet"
  }

  })

//Mechanical Crafting

//Star Core
event.custom({
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "key": {
    "A": {
      "item": "deeperdarker:soul_crystal"
    },
    "B": {
      "item": "minecraft:netherite_ingot"
    },
    "C": {
      "item": "cobblemon:poison_gem"
    },
    "D": {
      "item": "mega_showdown:wishing_star"
    },
    "E": {
      "item": "cobblemon:dragon_gem"
    },
    "F": {
      "item": "minecraft:amethyst_shard"
    },                  
  },
  "pattern": [
    "ABC",
    "BDB",
    "EBF"
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:star_core"
  }

  })

//Keystone
event.custom({
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "key": {
    "A": {
      "item": "minecraft:glass"
    },
    "B": {
      "item": "minecraft:diamond_block"
    },
    "C": {
      "item": "minecraft:emerald"
    },
    "D": {
      "item": "mega_showdown:mega_meteorid_block"
    },
    "E": {
      "item": "minecraft:gold_block"
    },            
  },
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:keystone"
  }

  })

//Meteoroid Block
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "minecraft:obsidian"
    },
    "B": {
      "item": "minecraft:amethyst_shard"
    },
    "C": {
      "item": "deeperdarker:soul_crystal"
    }
  },
  "pattern": [
    " BAB ",
    " ACA ",
    " BAB "
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:mega_evo_block"
  },
  "show_notification": false

})

//Mega Meteoroid Block
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "mega_showdown:mega_evo_block"
    },
    "B": {
      "item": "create:experience_block"
    },
    "C": {
      "item": "minecraft:nether_star"
    } 
  },
  "pattern": [
    " AAA ",
    "AABAA",
    "ABCBA",
    "AABAA",
    " AAA "
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:mega_meteorid_block"
  },
  "show_notification": false

})

//Eternal Prison
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "minecraft:crying_obsidian"
    },
    "B": {
      "item": "minecraft:iron_bars"
    },
    "C": {
      "item": "minecraft:nether_star"
    } 
  },
  "pattern": [
    " AAA ",
    "AABAA",
    "ABCBA",
    "AABAA",
    " AAA "
  ],
  "result": {
    "count": 1,
    "id": "kubejs:eternal_prison"
  },
  "show_notification": false

})

//Mixing Recipes

//Blank Soul Crystal
event.custom({
        "type": "create:mixing",
        "ingredients": 
        [ 
    {
      "type": "fluid_stack",
      "amount": 1000,
      "fluid": "minecraft:water"
    },
    {
      "item": "deeperdarker:soul_crystal"
    },
        ], 
        "results": [{"id": "kubejs:blank_soul_crystal", "amount": 500}]
  })

//Compacting Recipes

//Wishing Star
event.custom({
        "type": "create:compacting",
        "ingredients": 
        [ 
    {"item": "kubejs:crushed_netherite"},
    {"item": "create:experience_block"},
    {"item": "create:experience_block"},
    {"item": "create:experience_block"},
    {"item": "create:experience_block"},
    {"item": "create:experience_block"},       
    {"item": "create:experience_block"},
    {"item": "create:experience_block"},
    {"item": "create:experience_block"}
        ], 
  "results": [{"id": "mega_showdown:wishing_star"}]
  })

//Blank Z Crystal  
event.custom({
        "type": "create:mixing",
        "ingredients": 
        [ 
    {"type": "fluid_stack", "amount": 1000, "fluid": "minecraft:lava"},
    {"item": "deeperdarker:soul_dust"},
    {"item": "cobblemon:black_tumblestone"},
    {"item": "cobblemon:black_tumblestone"},
    {"item": "cobblemon:black_tumblestone"},
    {"item": "cobblemon:black_tumblestone"},
    {"item": "cobblemon:black_tumblestone"},        
    {"item": "cobblemon:black_tumblestone"},
    {"item": "cobblemon:black_tumblestone"},
    {"item": "cobblemon:black_tumblestone"}
        ], 
  "results": [{"id": "mega_showdown:blank-z"}]
  })

//Basic Crushed Items
//Crushed Meteoroid
event.custom({
    "type": "create:crushing",
    "ingredients": [{"item": "mega_showdown:mega_meteorid_block"}],
    "processing time": 200,
    "results": [{"count": 1, "id": "kubejs:crushed_meteoroid"}]
  })  

 //Crushed Netherite 
  event.custom({
    "type": "create:crushing",
    "ingredients": [{"item": "minecraft:netherite_ingot"}],
    "processing time": 200,
    "results": [{"count": 1, "id": "kubejs:crushed_netherite"}]
  })  



//Sequenced Assembelies

 //Crying Obsidian
  event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:obsidian"},
       "loops": 128,
        "results": [{"id": "minecraft:crying_obsidian"}],
        "sequence": [                                   
            {"type": "create:filling", "ingredients": [{"item": "minecraft:obsidian"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "minecraft:diamond_sword"}]}

        ],
        "transitional_item": {"id": "minecraft:obsidian"}
  })


 //Rusted Sword
  event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:diamond_sword"},
       "loops": 10,
        "results": [{"id": "mega_showdown:rusted_sword"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:diamond_sword"}, {"tag": "create:sandpaper"}], "results": [{"id": "minecraft:diamond_sword"}]},                                    
            {"type": "create:filling", "ingredients": [{"item": "minecraft:diamond_sword"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 500}], "results": [{"id": "minecraft:diamond_sword"}]}

        ],
        "transitional_item": {"id": "minecraft:diamond_sword"}
  })

 //Rusted Shield
  event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:ability_shield"},
       "loops": 10,
        "results": [{"id": "mega_showdown:rusted_shield"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "cobblemon:ability_shield"}, {"tag": "create:sandpaper"}], "results": [{"id": "cobblemon:ability_shield"}]},                                    
            {"type": "create:filling", "ingredients": [{"item": "cobblemon:ability_shield"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 500}], "results": [{"id": "cobblemon:ability_shield"}]}

        ],
        "transitional_item": {"id": "cobblemon:ability_shield"}
  })

 //Blank Mask
  event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:cardboard_helmet"},
       "loops": 1,
        "results": [{"id": "kubejs:blank_mask"}],
        "sequence": [
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:paper"}], "results": [{"id": "minecraft:paper"}]},
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:paper"}], "results": [{"id": "minecraft:paper"}]},
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:paper"}], "results": [{"id": "minecraft:paper"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:paper"}, {"item": "minecraft:white_wool"}], "results": [{"id": "minecraft:paper"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:paper"}, {"item": "mega_showdown:stellar_tera_shard"}], "results": [{"id": "minecraft:paper"}]},                                                   
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:paper"}], "results": [{"id": "minecraft:paper"}]},
          
        ],
        "transitional_item": {"id": "minecraft:paper"}
  })

//Blank Mega Stone 
  event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:crushed_meteoroid"},
       "loops": 3,
        "results": [{"id": "mega_showdown:mega_stone"}],
        "sequence": [
            {"type": "create:cutting", "ingredients": [{"item": "kubejs:crushed_meteoroid"}], "results": [{"id": "kubejs:crushed_meteoroid"}]},
            {"type": "create:filling", "ingredients": [{"item": "kubejs:crushed_meteoroid"}, {"type": "fluid_stack", "fluid": "sophisticatedcore:xp_still", "amount": 1000}], "results": [{"id": "kubejs:crushed_meteoroid"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:crushed_meteoroid"}], "results": [{"id": "kubejs:crushed_meteoroid"}]}
        ],
        "transitional_item": {"id": "kubejs:crushed_meteoroid"}
  })

//Wishing Star
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:crushed_netherite"},
       "loops": 50,
        "results": [{"id": "mega_showdown:wishing_star"}],
        "sequence": [
            {"type": "create:filling", "ingredients": [{"item": "kubejs:crushed_netherite"}, {"type": "fluid_stack", "fluid": "minecraft:lava", "amount": 500}], "results": [{"id": "kubejs:crushed_netherite"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:crushed_netherite"}, {"item": "create:experience_block"}], "results": [{"id": "kubejs:crushed_netherite"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:crushed_netherite"}], "results": [{"id": "kubejs:crushed_netherite"}]}
        ],
        "transitional_item": {"id": "kubejs:crushed_netherite"}
  }) 

//Prison Bottle
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:eternal_prison"},
       "loops": 2,
        "results": [{"id": "mega_showdown:prison_bottle"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:eternal_prison"}, {"item": "minecraft:netherite_ingot"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:eternal_prison"}, {"item": "minecraft:gold_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:eternal_prison"}], "results": [{"id": "kubejs:eternal_prison"}]},
                               
        ],
        "transitional_item": {"id": "kubejs:eternal_prison"}
  }) 
//Blue Orb
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "mega_showdown:keystone"},
       "loops": 128,
        "results": [{"id": "mega_showdown:blueorb"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:blueorb"}, {"item": "minecraft:prismarine_crystals"}], "results": [{"id": "mega_showdown:blueorb"}]},
            {"type": "create:filling", "ingredients": [{"item": "mega_showdown:blueorb"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 500}], "results": [{"id": "mega_showdown:blueorb"}]},
            {"type": "create:pressing", "ingredients": [{"item": "mega_showdown:blueorb"}], "results": [{"id": "mega_showdown:blueorb"}]}
        ],
        "transitional_item": {"id": "mega_showdown:blueorb"}
  }) 

//Red Orb
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "mega_showdown:keystone"},
       "loops": 512,
        "results": [{"id": "mega_showdown:redorb"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:redorb"}, {"item": "minecraft:netherrack"}], "results": [{"id": "mega_showdown:redorb"}]},
            {"type": "create:filling", "ingredients": [{"item": "mega_showdown:redorb"}, {"type": "fluid_stack", "fluid": "minecraft:lava", "amount": 100}], "results": [{"id": "mega_showdown:redorb"}]},
            {"type": "create:pressing", "ingredients": [{"item": "mega_showdown:redorb"}], "results": [{"id": "mega_showdown:redorb"}]}
        ],
        "transitional_item": {"id": "mega_showdown:redorb"}
  }) 
})
