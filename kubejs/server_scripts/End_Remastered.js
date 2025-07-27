// priority: 10

ServerEvents.recipes((event) => {
//##############################################################################################################
//#################|                                                                          |#################
//#################|                             TECH TREE                                    |#################
//#################|                                                                          |#################
//##############################################################################################################
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:ignitium_ingot"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:nether_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:nether_eye")

    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:witherite_ingot"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:wither_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:wither_eye")

    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:sandstorm_in_a_bottle"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:cryptic_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:cryptic_eye")

    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:lava_power_cell"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:corrupted_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:corrupted_eye")

//##############################################################################################################
//#################|                                                                          |#################
//#################|                            MINECOLONIES TREE                             |#################
//#################|                                                                          |#################
//##############################################################################################################

//Cursed Eye
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:wither_rose"
    },
    "B": {
      "item": "minecolonies:ancienttome"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },           
  },
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "result": {
    "count": 1,
    "id": "endrem:cursed_eye"
  }

  })

//Witch Eye
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:glistering_melon_slice"
    },
    "B": {
      "item": "minecolonies:magicpotion"
    },
    "C": {
      "item": "minecraft:ghast_tear"
    },
    "D": {
      "item": "minecraft:ender_eye"
    },
    "E": {
      "item": "minecraft:nether_wart"
    }, 
    "F": {
      "item": "minecraft:fermented_spider_eye"
    },                
  },
  "pattern": [
    "ABC",
    "BDB",
    "EBF"
  ],
  "result": {
    "count": 1,
    "id": "endrem:witch_eye"
  }

  })

})