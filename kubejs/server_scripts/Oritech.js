// priority: 10
Platform.mods.kubejs.name = 'Create Cardboard Edition'

ServerEvents.recipes((event) => {
    event.custom(
      {
      "type": "oritech:laser",
      "fluidInput": {
          "amount": 0,
          "fluid": "minecraft:empty"
      },
      "fluidOutputs": [],
      "ingredients": [
          {
          "item": "minecraft:sculk_catalyst"
          }
      ],
      "results": [
          {
          "count": 1,
          "id": "deeperdarker:soul_crystal"
          }
      ],
      "time": 1
      })
})