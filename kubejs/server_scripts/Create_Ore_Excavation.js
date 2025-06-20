ServerEvents.recipes(drill => {
	
    //Crimsite
    drill.recipes.createoreexcavation.vein('{"text": "Crimsite Vein"}', 'create:crimsite')
    .placement(40, 16, 40825039).biomeWhitelist('cardboard:all_nether')
    .id("kubejs:crimsite_vein");
    drill.recipes.createoreexcavation.drilling([Item.of('create:crimsite'), coeutil.processingOutput('justdirethings:gooblock_tier2', 0.05)], 'kubejs:crimsite_vein', 250)
    .id("kubejs:custom_crimsite")

    //Veridium
    drill.recipes.createoreexcavation.vein('{"text": "Veridium Vein"}', 'create:veridium')
    .placement(40, 16, 90156452).biomeWhitelist('minecraft:is_end')
    .id("kubejs:veridium_vein");
    drill.recipes.createoreexcavation.drilling([Item.of('create:veridium'), coeutil.processingOutput('justdirethings:gooblock_tier3', 0.05)], 'kubejs:veridium_vein', 250)
    .id("kubejs:custom_veridium").drill('createoreexcavation:diamond_drill');

    //Asurine
    drill.recipes.createoreexcavation.vein('{"text": "Asurine Vein"}', 'create:asurine')
    .placement(40, 16, 27361576).biomeWhitelist('cardboard:all_deeper_darker')
    .id("kubejs:asurine_vein");
    drill.recipes.createoreexcavation.drilling([Item.of('create:asurine'), coeutil.processingOutput('justdirethings:gooblock_tier4', 0.05)], 'kubejs:asurine_vein', 250)
    .id("kubejs:custom_asurine").drill('createoreexcavation:netherite_drill');

        //Asurine
    drill.recipes.createoreexcavation.vein('{"text": "Oil Vein"}', 'oritech:still_oil_bucket')
    .placement(40, 16, 27363376).alwaysInfinite().biomeWhitelist('terralith:all_terralith_biomes')
    .id("kubejs:oil_vein");
    drill.recipes.createoreexcavation.extracting('oritech:still_oil 1000', 'kubejs:oil_vein', 250)
    .id("kubejs:custom_oil");
});

//Add any new drill items to #createoreexcavation:drills item tag
//Place a drill texture under assets/<item mod id>/textures/entity/drill/<item name>.png
//See assets/createoreexcavation/textures/entity/drill/drill.png