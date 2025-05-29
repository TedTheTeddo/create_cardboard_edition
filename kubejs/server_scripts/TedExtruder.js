// priority: 0
ServerEvents.recipes(event => {

    //Cobblegen
    event.recipes.createMechanicalExtruderExtruding(Item.of('minecraft:cobbled_deepslate'),[Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).withCatalyst('minecraft:cobbled_deepslate').requiredBonks(2)
    //*todo event.recipes.createMechanicalExtruderExtruding(('create:limestone'),[Fluid.of('minecraft:lava'),Fluid.of('create:honey')]).withCatalyst('create:limestone').requiredBonks(2)
    //*todo event.recipes.createMechanicalExtruderExtruding(('create:scoria'),[Fluid.of('minecraft:lava'),Fluid.of('create:chocolate')]).withCatalyst('create:scoria').requiredBonks(2)
    event.recipes.createMechanicalExtruderExtruding(('kubejs:apristone'),[Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).withCatalyst('kubejs:double_compressed_apristone').requiredBonks(2)
  });