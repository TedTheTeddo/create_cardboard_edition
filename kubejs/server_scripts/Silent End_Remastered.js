ServerEvents.recipes((event) => {
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

//Evil Eye
event.custom({
  "type": "minecraft:crafting_shaped",
  "key": {
    "A": {
      "item": "minecraft:glowstone_dust"
    },
    "B": {
      "item": "minecraft:lapis_block"
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
    "id": "endrem:evil_eye"
  }

  })

})