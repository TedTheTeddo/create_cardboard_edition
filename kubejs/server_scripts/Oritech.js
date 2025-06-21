// priority: 10
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

    event.custom({
  "type": "oritech:assembler",
  "fluidInput": {
    "amount": 0,
    "fluid": "minecraft:empty"
  },
  "fluidOutputs": [],
  "ingredients": [
    {
      "item": "oritech:adamant_ingot"
    },
    {
      "tag": "c:carbon_fibre"
    },
    {
      "item": "minecraft:ender_pearl"
    },
    {
      "item": "minecraft:ender_pearl"
    }
  ],
  "results": [
    {
      "count": 1,
      "id": "oritech:enderic_lens"
    }
  ],
  "time": 240})
})