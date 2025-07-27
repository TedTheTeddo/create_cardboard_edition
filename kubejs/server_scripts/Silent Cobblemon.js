Platform.mods.kubejs.name = 'Create Cardboard Edition'
ServerEvents.recipes(event => {

//Crafting Recipes

//Apristone
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:green_apricorn"
    },
    "B": {
      "item": "cobblemon:red_apricorn"
    },
    "C": {
      "item": "cobblemon:yellow_apricorn"
    },
    "D": {
      "item": "cobblemon:blue_apricorn"
    },
    "E": {
      "item": "cobblemon:pink_apricorn"
    },
    "F": {
      "item": "cobblemon:black_apricorn"
    },
    "G": {
      "item": "cobblemon:white_apricorn"
    },
    "H": {
      "item": "minecraft:stone"
    },    
          
  },
  "pattern": [
    "AHB",
    "CDE",
    "FHG"
  ],
  "result": {
    "count": 2,
    "id": "kubejs:apristone"
  }

  })

//Compressed Apristone
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "kubejs:apristone"},
    },
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "result": {
    "count": 1,
    "id": "kubejs:compressed_apristone"
  }

  })

//Cornerstone Mask
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:black_tumblestone"
    },
    "B": {
      "item": "kubejs:blank_mask"
    },
    "C": {
      "item": "mega_showdown:rock_tera_shard"
    },
        
  },
  "pattern": [
    "ACA",
    "CBC",
    "ACA"
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:cornerstone_mask"
  }

  })

//Double Compressed Apristone
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "kubejs:compressed_apristone"},
    },
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "result": {
    "count": 1,
    "id": "kubejs:double_compressed_apristone"
  }

  })


//Electric Seed
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:white_mint_seeds"
    },
    "B": {
      "item": "cobblemon:electric_gem"
    },
    "C": {
      "item": "create:tree_fertilizer"
    },
        
  },
  "pattern": [
    "CAC",
    "ABA",
    "CAC"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:electric_seed"
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

//Enchanted Golden Apple
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:apple"
    },
    "B": {
      "item": "minecraft:gold_block"
    },
        
  },
  "pattern": [
    "BBB",
    "BAB",
    "BBB"
  ],
  "result": {
    "count": 1,
    "id": "minecraft:enchanted_golden_apple"
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

//Grassy Seed
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:green_mint_seeds"
    },
    "B": {
      "item": "cobblemon:grass_gem"
    },
    "C": {
      "item": "create:tree_fertilizer"
    },
        
  },
  "pattern": [
    "CAC",
    "ABA",
    "CAC"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:grassy_seed"
  }

  })

//Hearthflame Mask
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:tumblestone"
    },
    "B": {
      "item": "kubejs:blank_mask"
    },
    "C": {
      "item": "mega_showdown:fire_tera_shard"
    },
        
  },
  "pattern": [
    "ACA",
    "CBC",
    "ACA"
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:hearthflame_mask"
  }

  })

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

//Misty Seeds
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:pink_mint_seeds"
    },
    "B": {
      "item": "cobblemon:fairy_gem"
    },
    "C": {
      "item": "create:tree_fertilizer"
    },
        
  },
  "pattern": [
    "CAC",
    "ABA",
    "CAC"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:misty_seed"
  }

  })

//Psychic Seeds
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:blue_mint_seeds"
    },
    "B": {
      "item": "cobblemon:psychic_gem"
    },
    "C": {
      "item": "create:tree_fertilizer"
    },
    "D": {
      "item": "cobblemon:red_mint_seeds"
    },    
        
  },
  "pattern": [
    "CAC",
    "DBD",
    "CAC"
  ],
  "result": {
    "count": 1,
    "id": "cobblemon:psychic_seed"
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

//Wellspring Mask
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "cobblemon:sky_tumblestone"
    },
    "B": {
      "item": "kubejs:blank_mask"
    },
    "C": {
      "item": "mega_showdown:water_tera_shard"
    },
        
  },
  "pattern": [
    "ACA",
    "CBC",
    "ACA"
  ],
  "result": {
    "count": 1,
    "id": "mega_showdown:wellspring_mask"
  }

  })


///Compacting Recipes///

///Apricorns///

//Black Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:moon_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:moon_stone"},
    {"id": "cobblemon:black_apricorn"}
  ]

})

//Blue Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:water_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:water_stone"},
    {"id": "cobblemon:blue_apricorn"}
  ]

})

//Green Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:leaf_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:leaf_stone"},
    {"id": "cobblemon:green_apricorn"}
  ]

})

//Red Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:fire_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:fire_stone"},
    {"id": "cobblemon:red_apricorn"}
  ]

})

//Pink Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:dusk_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:dusk_stone"},
    {"id": "cobblemon:pink_apricorn"}
  ]

})

//White Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:ice_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:ice_stone"},
    {"id": "cobblemon:white_apricorn"}
  ]

})

//Yellow Apricorn
event.custom({
  "type": "create:compacting",
  "ingredients": 
  [
    {"item":"cobblemon:thunder_stone"},
    {"item": "kubejs:apricorn_husk"}
  ],
  "results": 
  [
    {"id": "cobblemon:thunder_stone"},
    {"id": "cobblemon:yellow_apricorn"}
  ]

})

/////

//Wishing Star
event.custom({
        "type": "create:compacting",
        "ingredients": 
        [ 
    {"type": "fluid_stack", "amount": 1000, "fluid": "minecraft:lava"},          
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
/////


///Crushing Recipes///

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

//Sherds
event.custom({
  "type": "create:crushing",
  "ingredients": [{"item": "minecraft:terracotta"}],
  "processing_time": 250,
  "results": [
    {
      "chance": 0.2,
      "id": "cobblemon:suspicious_sherd"
    },
    {
      "chance": 0.2,
      "id": "cobblemon:nostalgic_sherd"
    },
    {
      "chance": 0.2,
      "id": "cobblemon:dome_sherd"
    },
    {
      "chance": 0.2,
      "id": "cobblemon:capture_sherd"
    },
    {
      "chance": 0.2,
      "id": "cobblemon:bygone_sherd"
    }        
  ]
})

//////

///Extruding Recipes////
event.custom({
  "type": "create_mechanical_extruder:extruding",
  "advanced": false,
  "blockIngredients": {
    "first": {
      "blocks": "minecraft:water"
    },
    "second": {
      "blocks": "minecraft:lava"
    }
  },
  "catalyst": {
    "blocks": "kubejs:double_compressed_apristone"
  },
  "consumeBlocks": {
    "first": false,
    "second": true
  },
  "result": {
    "id": "kubejs:apristone"
  }
})
/////


///Mechanical Crafting///

///Basic Mechanical Crafting///

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

/////

///Plates///

//Draco Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:dragon_gem"
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
    "id": "mega_showdown:dracoplate"
  },
  "show_notification": false

})

//Dread Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:dark_gem"
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
    "id": "mega_showdown:dreadplate"
  },
  "show_notification": false

})

//Earth Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:ground_gem"
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
    "id": "mega_showdown:earthplate"
  },
  "show_notification": false

})

//Fist Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:fighting_gem"
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
    "id": "mega_showdown:fistplate"
  },
  "show_notification": false

})

//Flame Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:fire_gem"
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
    "id": "mega_showdown:flameplate"
  },
  "show_notification": false

})

//Icicle Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:ice_gem"
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
    "id": "mega_showdown:icicleplate"
  },
  "show_notification": false

})

//Insect Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:bug_gem"
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
    "id": "mega_showdown:insectplate"
  },
  "show_notification": false

})

//Iron Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:steel_gem"
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
    "id": "mega_showdown:ironplate"
  },
  "show_notification": false

})

//Meadow Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:grass_gem"
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
    "id": "mega_showdown:meadowplate"
  },
  "show_notification": false

})

//Mind Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:psychic_gem"
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
    "id": "mega_showdown:mindplate"
  },
  "show_notification": false

})

//Pixie Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:fairy_gem"
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
    "id": "mega_showdown:pixieplate"
  },
  "show_notification": false

})

//Sky Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:flying_gem"
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
    "id": "mega_showdown:skyplate"
  },
  "show_notification": false

})

//Splash Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:water_gem"
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
    "id": "mega_showdown:splashplate"
  },
  "show_notification": false

})

//Spooky Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:ghost_gem"
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
    "id": "mega_showdown:spookyplate"
  },
  "show_notification": false

})

//Stone Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:rock_gem"
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
    "id": "mega_showdown:stoneplate"
  },
  "show_notification": false

})

//Toxic Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:poison_gem"
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
    "id": "mega_showdown:toxicplate"
  },
  "show_notification": false

})

//Zap Plate
event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
  "key": {
    "A": {
      "item": "create:sturdy_sheet"
    },
    "B": {
      "item": "deeperdarker:soul_crystal"
    },
    "C": {
      "item": "cobblemon:electric_gem"
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
    "id": "mega_showdown:zapplate"
  },
  "show_notification": false

})

/////

///Milling Recipes////

//Apricorn Husk
event.custom({
  "type": "create:milling",
  "processing_time": 150,
  "ingredients": [{"item": "kubejs:apristone"}],
  "results": [{"id": "kubejs:apricorn_husk"}]
})

/////


///Mixing Recipes///

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

/////


//Sequenced Assemblies

///Basic Assemblies///

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


//Legend Plate
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "oritech:reinforced_carbon_sheet"},
       "loops": 1,
        "results": [{"id": "mega_showdown:legend_plate"}],
        "sequence": [
            {"type": "create:pressing", "ingredients": [{"item": "mega_showdown:legend_plate"}], "results": [{"id": "mega_showdown:legend_plate"}]},          
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:flameplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:dracoplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},            
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:fistplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:earthplate"}], "results": [{"id": "mega_showdown:legend_plate"}]}, 
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:stoneplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:zapplate"}], "results": [{"id": "mega_showdown:legend_plate"}]}, 
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:insectplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:meadowplate"}], "results": [{"id": "mega_showdown:legend_plate"}]}, 
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:icicleplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:skyplate"}], "results": [{"id": "mega_showdown:legend_plate"}]}, 
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:splashplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:dreadplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:ironplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:spookyplate"}], "results": [{"id": "mega_showdown:legend_plate"}]}, 
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:pixieplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:mindplate"}], "results": [{"id": "mega_showdown:legend_plate"}]}, 
            {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:legend_plate"}, {"item": "mega_showdown:toxicplate"}], "results": [{"id": "mega_showdown:legend_plate"}]},
            {"type": "create:pressing", "ingredients": [{"item": "mega_showdown:legend_plate"}], "results": [{"id": "mega_showdown:legend_plate"}]},                                                                                  
        ],
        "transitional_item": {"id": "mega_showdown:legend_plate"}
  }) 

//Poke Gems
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:amethyst_shard"},
       "loops": 16,
  "results": [    {
      "chance": 0.053,
      "id": "cobblemon:ghost_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:fairy_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:psychic_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:dark_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:normal_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:ground_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:grass_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:dragon_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:steel_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:rock_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:flying_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:electric_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:poison_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:ice_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:bug_gem"
    },
     {
      "chance": 0.053,
      "id": "cobblemon:fire_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:water_gem"
    },
    {
      "chance": 0.053,
      "id": "cobblemon:fighting_gem"
    },
    {
      "chance": 0.02,
      "id": "minecraft:diamond"
    },
    {
      "chance": 0.02,
      "id": "minecraft:emerald"
    },
                                  
  ],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:amethyst_shard"}, {"item": "create:rose_quartz"}], "results": [{"id": "minecraft:amethyst_shard"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:amethyst_shard"}, {"item": "minecraft:chorus_fruit"}], "results": [{"id": "minecraft:amethyst_shard"}]},            
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:amethyst_shard"}, {"item": "minecraft:enchanted_golden_apple"}], "results": [{"id": "minecraft:amethyst_shard"}]}                               
        ],
        "transitional_item": {"id": "minecraft:amethyst_shard"}
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

//Scroll of Darkness
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:crushed_netherite"},
       "loops": 128,
        "results": [{"id": "mega_showdown:scroll_of_darkness"}],
        "sequence": [
          {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:scroll_of_darkness"}, {"item": "minecraft:tinted_glass"}], "results": [{"id": "mega_showdown:scroll_of_darkness"}]},
          {"type": "create:filling", "ingredients": [{"item": "mega_showdown:scroll_of_darkness"}, {"type": "fluid_stack", "fluid": "minecraft:lava", "amount": 1000}], "results": [{"id": "mega_showdown:scroll_of_darkness"}]},
          {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:scroll_of_darkness"}, {"item": "minecraft:paper"}], "results": [{"id": "mega_showdown:scroll_of_darkness"}]}
        ],
        "transitional_item": {"id": "mega_showdown:scroll_of_darkness"}
  })  

//Scroll of Waters
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:crushed_netherite"},
       "loops": 128,
        "results": [{"id": "mega_showdown:scroll_of_waters"}],
        "sequence": [
          {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:scroll_of_waters"}, {"item": "minecraft:sea_lantern"}], "results": [{"id": "mega_showdown:scroll_of_waters"}]},
          {"type": "create:filling", "ingredients": [{"item": "mega_showdown:scroll_of_waters"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "mega_showdown:scroll_of_waters"}]},
          {"type": "create:deploying", "ingredients": [{"item": "mega_showdown:scroll_of_waters"}, {"item": "minecraft:paper"}], "results": [{"id": "mega_showdown:scroll_of_waters"}]}
        ],
        "transitional_item": {"id": "mega_showdown:scroll_of_waters"}
  }) 

/////
  
///Fossils///  

 //Fossils 1-3
 event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "cobblemon:capture_sherd"
  },
  "loops": 16,
  "results": [    {
      "chance": 0.33,
      "id": "cobblemon:old_amber_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:sail_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:fossilized_bird"
    }],
  "sequence": [
    {"type": "create:filling", "ingredients": [{"item": "cobblemon:capture_sherd"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "cobblemon:capture_sherd"}]},
    {"type": "create:deploying", "ingredients": [{"item": "cobblemon:capture_sherd"}, {"tag": "create:sandpaper"}], "results": [{"id": "cobblemon:capture_sherd"}]}

  ],
  "transitional_item": {
    "id": "cobblemon:capture_sherd"
}
 })

 //Fossils 4-6
 event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "cobblemon:dome_sherd"
  },
  "loops": 16,
  "results": [    {
      "chance": 0.33,"id": "cobblemon:dome_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:fossilized_drake"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:armor_fossil"
    }],
  "sequence": [
    {"type": "create:filling", "ingredients": [{"item": "cobblemon:dome_sherd"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "cobblemon:dome_sherd"}]},
    {"type": "create:deploying", "ingredients": [{"item": "cobblemon:dome_sherd"}, {"tag": "create:sandpaper"}], "results": [{"id": "cobblemon:dome_sherd"}]}

  ],
  "transitional_item": {
    "id": "cobblemon:dome_sherd"
}
 })

 //Fossils 7-10
 event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "cobblemon:nostalgic_sherd"
  },
  "loops": 16,
  "results": [    {
      "chance": 0.33, "id": "cobblemon:fossilized_fish"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:helix_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:cover_fossil"
    }],
  "sequence": [
    {"type": "create:filling", "ingredients": [{"item": "cobblemon:nostalgic_sherd"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "cobblemon:nostalgic_sherd"}]},
    {"type": "create:deploying", "ingredients": [{"item": "cobblemon:nostalgic_sherd"}, {"tag": "create:sandpaper"}], "results": [{"id": "cobblemon:nostalgic_sherd"}]}

  ],
  "transitional_item": {
    "id": "cobblemon:nostalgic_sherd"
}
 })

 //Fossils 11-14
 event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "cobblemon:suspicious_sherd"
  },
  "loops": 16,
  "results": [    {
      "chance": 0.33, "id": "cobblemon:fossilized_dino"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:jaw_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:skull_fossil"
    }],
  "sequence": [
    {"type": "create:filling", "ingredients": [{"item": "cobblemon:suspicious_sherd"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "cobblemon:suspicious_sherd"}]},
    {"type": "create:deploying", "ingredients": [{"item": "cobblemon:suspicious_sherd"}, {"tag": "create:sandpaper"}], "results": [{"id": "cobblemon:suspicious_sherd"}]}

  ],
  "transitional_item": {
    "id": "cobblemon:suspicious_sherd"
}
 })

 //Fossils 15-18
 event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "cobblemon:bygone_sherd"
  },
  "loops": 16,
  "results": [    {
      "chance": 0.33, "id": "cobblemon:root_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:claw_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:plume_fossil"
    }],
  "sequence": [
    {"type": "create:filling", "ingredients": [{"item": "cobblemon:bygone_sherd"}, {"type": "fluid_stack", "fluid": "minecraft:water", "amount": 1000}], "results": [{"id": "cobblemon:bygone_sherd"}]},
    {"type": "create:deploying", "ingredients": [{"item": "cobblemon:bygone_sherd"}, {"tag": "create:sandpaper"}], "results": [{"id": "cobblemon:bygone_sherd"}]}

  ],
  "transitional_item": {
    "id": "cobblemon:bygone_sherd"
}
 })
/////

///Memories///

//Bug Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:bugmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:bug_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Dark Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:darkmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:dark_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Dragon Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:dragonmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:dragon_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Electric Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:electricmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:electric_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Fairy Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:fairymemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:fairy_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Fighting Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:fightingmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:fighting_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Fire Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:firememory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:fire_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Flying Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:flyingmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:flying_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Ghost Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:ghostmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:ghost_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Grass Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:grassmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:grass_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Ground Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:groundmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:ground_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Ice Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:icememory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:ice_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Poison Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:poisonmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:poison_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Psychic Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:psychicmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:psychic_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Rock Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:rockmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:rock_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Steel Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:steelmemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:steel_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

//Water Memory
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"},
       "loops": 3,
        "results": [{"id": "mega_showdown:watermemory"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "cobblemon:water_gem"}], "results": [{"id": "minecraft:glass_bottle"}]},
            {"type": "create:deploying", "ingredients": [{"item": "minecraft:tinted_glass"}, {"item": "minecraft:iron_block"}], "results": [{"id": "minecraft:glass_bottle"}]},            
            {"type": "create:pressing", "ingredients": [{"item": "minecraft:tinted_glass"}], "results": [{"id": "minecraft:tinted_glass"}]},
                               
        ],
        "transitional_item": {"id": "minecraft:tinted_glass"}
  }) 

/////

///Tumblestone Farming///

///Black Tumblestone

//Stage 1 -- Small Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:black_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:small_budding_black_tumblestone"}]
})

//Stage 2 -- Medium Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:small_budding_black_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:medium_budding_black_tumblestone"}]
})

//Stage 3 -- Large Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:medium_budding_black_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:large_budding_black_tumblestone"}]
})

//Stage 4 -- Tumblestone Cluster
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:large_budding_black_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:black_tumblestone_cluster"}]
})

//Stage 5 -- Tumblestone
event.custom({
  "type": "create:milling",
  "processing_time": 150,
  "ingredients": [{"item": "cobblemon:black_tumblestone_cluster"}],
  "results": [{"count": 4, "id": "cobblemon:black_tumblestone"}]
})


///Tumblestone

//Stage 1 -- Small Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:small_budding_tumblestone"}]
})

//Stage 2 -- Medium Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:small_budding_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:medium_budding_tumblestone"}]
})

//Stage 3 -- Large Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:medium_budding_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:large_budding_tumblestone"}]
})

//Stage 4 -- Tumblestone Cluster
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:large_budding_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:tumblestone_cluster"}]
})

//Stage 5 -- Tumblestone
event.custom({
  "type": "create:milling",
  "processing_time": 150,
  "ingredients": [{"item": "cobblemon:tumblestone_cluster"}],
  "results": [{"count": 4, "id": "cobblemon:tumblestone"}]
})


///Sky Tumblestone

//Stage 1 -- Small Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:sky_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:small_budding_sky_tumblestone"}]
})

//Stage 2 -- Medium Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:small_budding_sky_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:medium_budding_sky_tumblestone"}]
})

//Stage 3 -- Large Budding
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:medium_budding_sky_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:large_budding_sky_tumblestone"}]
})

//Stage 4 -- Tumblestone Cluster
event.custom({
  "type": "create:filling",
  "ingredients": [
    {"item": "cobblemon:large_budding_sky_tumblestone"},
    {"type": "fluid_stack", "amount": 500, "fluid": "minecraft:lava"}],
  "results": [{"id": "cobblemon:sky_tumblestone_cluster"}]
})

//Stage 5 -- Tumblestone
event.custom({
  "type": "create:milling",
  "processing_time": 150,
  "ingredients": [{"item": "cobblemon:sky_tumblestone_cluster"}],
  "results": [{"count": 4, "id": "cobblemon:sky_tumblestone"}]
})

/////

})
