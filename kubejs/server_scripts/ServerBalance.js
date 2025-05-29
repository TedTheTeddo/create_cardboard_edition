// priority: 0

ServerEvents.recipes(event => {
//==========================================================================================================
//========================================== Balances & Fixes ==============================================
//==========================================================================================================

//Duplicates
event.remove({id: 'advancedperipherals:chunk_controller'})
event.shapeless('irons_spellbooks:villager_spell_book', ['irons_spellbooks:holy_rune','minecraft:book'])
event.shapeless('minecolonies:large_milk_bottle', ['4x farmersdelight:milk_bottle'])

//Warden
event.recipes.create.crushing([
    Item.of('deeperdarker:warden_carapace'),
    Item.of('minecraft:echo_shard'),
    ], 'deeperdarker:heart_of_the_deep' )

//Dito Staff
event.recipes.createSequencedAssembly(["kubejs:eldritch_staff",], "deeperdarker:sonorous_staff",
    [
        event.recipes.createDeploying("deeperdarker:sonorous_staff", ["deeperdarker:sonorous_staff", "deeperdarker:heart_of_the_deep",]),
        event.recipes.createDeploying("deeperdarker:sonorous_staff", ["deeperdarker:sonorous_staff", "minecraft:nether_star",]),
        event.recipes.createDeploying("deeperdarker:sonorous_staff", ["deeperdarker:sonorous_staff", "minecraft:sculk_catalyst",]),
        event.recipes.createPressing("deeperdarker:sonorous_staff", "deeperdarker:sonorous_staff")
    ]  )
        .transitionalItem("deeperdarker:sonorous_staff")
        .loops(2);

//##############################################################
//#######################   Lychee   ###########################
//##############################################################

//Lychee
//Charged Bottle
event.custom(
    {
        "type": "lychee:lightning_channeling",
        "post": [
          {
            "type": "drop_item",
            "item": "irons_spellbooks:lightning_bottle"
          }
        ],
        "item_in": [
          {
            "item": "minecraft:glass_bottle"
          }
        ]
      }
      
).id('kubejs:lightning_bottle_conversion')

//Summon Lightning
event.custom(
    {
        "type": "lychee:block_interacting",
        "post": [
          {
            "type": "execute",
            "command": "summon minecraft:lightning_bolt ~ ~ ~"
          }
        ],
        "item_in": {
          "item": "minecraft:fire_charge"
        },
        "block_in": {
          "blocks": [
            "minecraft:lightning_rod"
          ]
        }
      }      
)
//Clear Weather
event.custom({
    "type": "lychee:block_interacting",
    "post": [
      {
        "type": "execute",
        "command": "weather clear"
      }
    ],
    "item_in": {
      "item": "minecraft:diamond"
    },
    "block_in": {
      "blocks": [
        "minecraft:lightning_rod"
      ]
    }
  }).id('kubejs:weather_clear')

event.custom({
    "type": "lychee:block_interacting",
    "post": [
      {
        "type": "execute",
        "command": "weather rain"
      }
    ],
    "item_in": {
      "item": "minecraft:emerald_block"
    },
    "block_in": {
      "blocks": [
        "minecraft:lightning_rod"
      ]
    }
  }).id('kubejs:weather_rain')

  event.custom({
    "type": "lychee:block_interacting",
    "post": [
      {
        "type": "execute",
        "command": "weather thunder"
      }
    ],
    "item_in": {
      "item": "cobblemon:thunder_stone"
    },
    "block_in": {
      "blocks": [
        "minecraft:lightning_rod"
      ]
    }
  }).id('kubejs:weather_thunder')


//##############################################################
//####################### Cataclysm ############################
//##############################################################
//Cataclysm - Monstrosity
event.custom(
    {
        "type": "lychee:block_interacting",
        "contextual": [
          {
            "type": "location",
            "predicate": {
              "structure": "cataclysm:soul_black_smith",
              "dimension": "minecraft:the_nether"
            }
          }
        ],
        "post": [
          {
            "type": "execute",
            "command": "summon cataclysm:netherite_monstrosity ~ ~ ~"
          }
        ],
        "item_in": {
          "item": "numismatics:cog"
        },
        "block_in": {
        "blocks": [
            "minecraft:anvil"
        ]
        }
      }
).id('kubejs:summon_monstrosity')

//Cataclysm - Harbringer
event.custom(
    {
        "type": "lychee:block_interacting",
        "post": [
          {
            "type": "execute",
            "command": "summon cataclysm:the_harbinger ~ ~ ~"
          }
        ],
        "item_in": {
          "item": "numismatics:cog"
        },
        "block_in": {
          "blocks": [
            "cataclysm:emp"
          ]
        }
      }
      
).id('kubejs:summon_harbinger')

//Ashes for Ignis
event.smoking('cataclysm:burning_ashes', 'minecraft:wither_skeleton_skull').xp(0.10)


//##############################################################
//####################### Iron's SP ############################
//##############################################################

});


