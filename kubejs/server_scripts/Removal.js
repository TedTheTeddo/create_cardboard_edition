// priority: 0
ServerEvents.recipes(event => {

//==========================================================================================================
//========================================  Removals   =====================================================
//==========================================================================================================
    
    event.remove({id: 'create_mechanical_extruder:extruding/crimsite'})
    event.remove({id: 'create_mechanical_extruder:extruding/ochrum'})
    event.remove({id: 'create_mechanical_extruder:extruding/veridium'})
    event.remove({id: 'create_mechanical_extruder:extruding/asurine'})

    event.remove({id: 'createoreexcavation:drilling/emerald'})
    event.remove({id: 'createoreexcavation:drilling/iron'})
    event.remove({id: 'createoreexcavation:drilling/copper'})
    event.remove({id: 'createoreexcavation:drilling/hardened_diamond'})
    event.remove({id: 'createoreexcavation:drilling/coal'})
    event.remove({id: 'createoreexcavation:drilling/netherite'})
    event.remove({id: 'createoreexcavation:drilling/diamond'})
    event.remove({id: 'createoreexcavation:drilling/quartz'})
    event.remove({id: 'createoreexcavation:drilling/gold'})
    event.remove({id: 'createoreexcavation:drilling/lapis'})
    event.remove({id: 'createoreexcavation:drilling/zinc'})
    event.remove({id: 'createoreexcavation:drilling/glowstone'})
    event.remove({id: 'createoreexcavation:drilling/redstone'})
    event.remove({id: 'createoreexcavation:drilling/nether_gold'})
    event.remove({id: 'createoreexcavation:drilling/water'})

    event.remove({id: 'createoreexcavation:ore_vein_type/emerald'})
    event.remove({id: 'createoreexcavation:ore_vein_type/iron'})
    event.remove({id: 'createoreexcavation:ore_vein_type/copper'})
    event.remove({id: 'createoreexcavation:ore_vein_type/hardened_diamond'})
    event.remove({id: 'createoreexcavation:ore_vein_type/coal'})
    event.remove({id: 'createoreexcavation:ore_vein_type/netherite'})
    event.remove({id: 'createoreexcavation:ore_vein_type/diamond'})
    event.remove({id: 'createoreexcavation:ore_vein_type/quartz'})
    event.remove({id: 'createoreexcavation:ore_vein_type/gold'})
    event.remove({id: 'createoreexcavation:ore_vein_type/lapis'})
    event.remove({id: 'createoreexcavation:ore_vein_type/zinc'})
    event.remove({id: 'createoreexcavation:ore_vein_type/glowstone'})
    event.remove({id: 'createoreexcavation:ore_vein_type/redstone'})
    event.remove({id: 'createoreexcavation:ore_vein_type/nether_gold'})
    event.remove({id: 'createoreexcavation:ore_vein_type/water'})

//==========================================================================================================
    event.remove({output: 'minecraft:blast_furnace'})
    event.remove({id: 'minecraft:iron_ingot_from_smelting_raw_iron'})

//==========================================================================================================
    event.remove({output: 'justdirethings:blockplacert1'})
    event.remove({output: 'justdirethings:blockbreakert1'})
    event.remove({output: 'justdirethings:clickert1'})
    event.remove({output: 'justdirethings:sensort1'})
    event.remove({output: 'justdirethings:fluidcollectort1'})
    event.remove({output: 'justdirethings:fluidplacert1'})
    event.remove({output: 'justdirethings:droppert1'})

    event.remove({output: 'justdirethings:blockplacert2'})
    event.remove({output: 'justdirethings:blockbreakert2'})
    event.remove({output: 'justdirethings:clickert2'})
    event.remove({output: 'justdirethings:sensort2'})
    event.remove({output: 'justdirethings:fluidcollectort2'})
    event.remove({output: 'justdirethings:fluidplacert2'})
    event.remove({output: 'justdirethings:droppert2'})

    event.remove({output: 'justdirethings:gooblock_tier2'})
    event.remove({output: 'justdirethings:gooblock_tier3'})
    event.remove({output: 'justdirethings:gooblock_tier4'})

    event.remove({output: 'justdirethings:upgrade_orescanner'})

    event.remove({output: 'justdirethings:generatort1'})
//==========================================================================================================
    event.remove({output: 'create:empty_blaze_burner'})
    event.remove({output: 'create:brass_hand'})
    event.remove({output: 'create:brass_casing'})
    event.remove({output: 'create:blaze_cake'})
    event.remove({output: 'create:copper_casing'})

//==========================================================================================================
    event.remove({output: 'oritech:electrum_ingot'})        //Remove from JEI
    event.remove({output: 'oritech:electrum_block'})        //Remove from JEI
    event.remove({output: 'oritech:basic_generator_block'}) //Remove from JEI
    event.remove({output: 'oritech:fluid_pipe'})            //Remove from JEI
    event.remove({output: 'oritech:framed_fluid_pipe'})     //Remove from JEI
    event.remove({output: 'oritech:fluid_pipe_duct_block'}) //Remove from JEI
    event.remove({output: 'oritech:processing_unit'}) //Doesn't seem to remove it...
    event.remove({output: 'oritech:machine_core_1'})
    event.remove({output: 'oritech:machine_core_2'})
    event.remove({output: 'oritech:machine_core_3'})
    event.remove({output: 'oritech:machine_core_4'})
    event.remove({output: 'oritech:machine_core_5'})
    event.remove({output: 'oritech:machine_core_6'})
    event.remove({output: 'oritech:machine_core_7'})
    event.remove({output: 'oritech:atomic_forge_block'})
    event.remove({output: 'oritech:polymer_resin'})
    event.remove({output: 'oritech:foundry_block'})
    event.remove({output: 'oritech:assembler_block'})
    event.remove({output: 'oritech:nuke'})
    event.remove({output: 'oritech:low_yield_nuke'})
    event.remove({output: 'oritech:accelerator_controller'})
    event.remove({output: 'oritech:overcharged_crystal'})
    event.remove({output: 'oritech:item_pipe'})
    event.remove({output: 'oritech:transparent_item_pipe'})
    event.remove({id: 'oritech:crafting/charger'})
    event.remove({id: 'oritech:crafting/alloy/steel'})
    event.remove({id: 'oritech:steel_ingot_from_blasting_steel_dust'})
    event.remove({id: 'oritech:steel_ingot_from_smelting_steel_dust'})

//==========================================================================================================
    event.remove({output: 'createaddition:biomass'})

//==========================================================================================================  
    event.replaceInput({ input: 'oritech:fluid_pipe' }, 'oritech:fluid_pipe', 'create:fluid_pipe')
    event.replaceInput({ input: 'oritech:item_pipe' }, 'oritech:item_pipe', 'create:shaft')
    event.replaceInput({ input: 'createaddition:electrum_ingot' }, 'oritech:electrum_ingot', 'createaddition:electrum_ingot')
    event.replaceInput({ input: 'oritech:basic_generator_block' }, 'oritech:basic_generator_block', 'oritech:machine_core_4')
    event.replaceOutput({ output: 'createaddition:electrum_ingot' }, 'oritech:electrum_ingot', 'createaddition:electrum_ingot')

})