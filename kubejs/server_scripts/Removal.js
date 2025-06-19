// priority: 0
Platform.mods.kubejs.name = 'Create Cardboard Edition'
ServerEvents.recipes(event => {

//==========================================================================================================
//========================================  Removals   =====================================================
//==========================================================================================================
    
    event.remove({id: 'create_mechanical_extruder:extruding/crimsite'})
    event.remove({id: 'create_mechanical_extruder:extruding/ochrum'})
    event.remove({id: 'create_mechanical_extruder:extruding/veridium'})
    event.remove({id: 'create_mechanical_extruder:extruding/asurine'})

//Ch1
    event.remove({output: 'minecraft:blast_furnace'})
    event.remove({output: 'oritech:machine_core_1'})
    event.remove({output: 'oritech:machine_core_2'})
    event.remove({output: 'create:copper_casing'})
    event.remove({id: 'minecraft:iron_ingot_from_smelting_raw_iron'})

//Ch2
    event.remove({output: 'justdirethings:blockplacert1'})
    event.remove({output: 'justdirethings:blockbreakert1'})
    event.remove({output: 'justdirethings:clickert1'})
    event.remove({output: 'justdirethings:sensort1'})
    event.remove({output: 'justdirethings:fluidcollectort1'})
    event.remove({output: 'justdirethings:fluidplacert1'})
    event.remove({output: 'justdirethings:droppert1'})

    event.remove({output: 'create:empty_blaze_burner'})
    event.remove({output: 'create:brass_hand'})
    event.remove({output: 'create:brass_casing'})
    event.remove({output: 'oritech:machine_core_3'})
    event.remove({output: 'oritech:machine_core_4'})
    event.remove({output: 'oritech:machine_core_5'})
    event.remove({output: 'oritech:machine_core_6'})
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


    event.remove({output: 'oritech:basic_generator_block'}) //Remove from JEI
    event.remove({output: 'oritech:fluid_pipe'})            //Remove from JEI
    event.remove({output: 'oritech:framed_fluid_pipe'})     //Remove from JEI
    event.remove({output: 'oritech:fluid_pipe_duct_block'}) //Remove from JEI
    event.remove({output: 'oritech:processing_unit'}) //Doesn't seem to remove it...
    
    event.remove({output: 'oritech:electrum_ingot'})        //Remove from JEI
    event.remove({output: 'oritech:electrum_block'})        //Remove from JEI

    event.remove({output: 'createaddition:biomass'})
    event.remove({output: 'create:blaze_cake'})

    event.remove({id: 'oritech:crafting/alloy/steel'})
    
    event.replaceInput({ input: 'oritech:fluid_pipe' }, 'oritech:fluid_pipe', 'create:fluid_pipe')
    event.replaceInput({ input: 'oritech:item_pipe' }, 'oritech:item_pipe', 'create:shaft')
    event.replaceInput({ input: 'createaddition:electrum_ingot' }, 'oritech:electrum_ingot', 'createaddition:electrum_ingot')
    event.replaceInput({ input: 'oritech:basic_generator_block' }, 'oritech:basic_generator_block', 'oritech:machine_core_4')
    event.replaceOutput({ output: 'createaddition:electrum_ingot' }, 'oritech:electrum_ingot', 'createaddition:electrum_ingot')

})