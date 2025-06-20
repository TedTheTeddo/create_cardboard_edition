// priority: 1

//==========================================================================================================

//FUNCTIONS
function createItemApplication(event, base, addition, result) {
  event.custom({
    type: "create:item_application",
    ingredients: [
      { item: base },
      { item: addition }
    ],
    results: [
      { id: result }
    ]});}
//==========================================================================================================

function createDeployer(event, heldItem, deployedItem, result, tf) {
  event.custom({
    type: "create:deploying",
    ingredients: [
      { item: heldItem },
      { item: deployedItem }
    ],
    keep_held_item: tf,
    results: [
      { id: result }
    ]});}

//==========================================================================================================

ServerEvents.recipes(event => {

    createItemApplication(event, "create:andesite_casing", "create:cardboard_block",            "oritech:machine_core_1");
    createItemApplication(event, "oritech:machine_core_1", "justdirethings:ferricore_ingot",    "oritech:machine_core_2");
    createItemApplication(event, "oritech:machine_core_2", "minecraft:obsidian",                "create:railway_casing");
    createItemApplication(event, "oritech:machine_core_2", "create:brass_ingot",                "create:brass_casing");
    createItemApplication(event, "oritech:machine_core_2", "oritech:reinforced_carbon_sheet",   "oritech:machine_core_3");
    createItemApplication(event, "oritech:machine_core_3", "oritech:advanced_computing_engine", "oritech:machine_core_4");
    createItemApplication(event, "oritech:machine_core_4", "oritech:unholy_intelligence",       "oritech:machine_core_5");
    createItemApplication(event, "oritech:machine_core_5", "oritech:super_ai_chip",             "oritech:machine_core_6");
    createItemApplication(event, "oritech:silicon_wafer", "oritech:processing_unit",            "oritech:advanced_computing_engine")

  
    event.shaped('minecraft:blast_furnace',         ['AAA', 'ABA', 'CCC'], {A: 'minecraft:copper_ingot', B: "minecraft:furnace", C: "minecraft:stone"});
    event.shaped('create:copper_casing',            ['BCB', 'CAC','BCB'], {A: 'oritech:machine_core_1', B: "minecraft:copper_ingot", C: "minecraft:dried_kelp"});
    
    event.shaped('justdirethings:blockplacert1',    ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:diamond", E: "minecraft:dispenser"});
    event.shaped('justdirethings:blockbreakert1',   ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:diamond", E: "minecraft:observer"});
    event.shaped('justdirethings:clickert1',        ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:quartz", E: "minecraft:dispenser"});
    event.shaped('justdirethings:sensort1',         ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:quartz", E: "minecraft:observer"});
    event.shaped('justdirethings:fluidcollectort1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:bucket", E: "minecraft:dispenser"});
    event.shaped('justdirethings:fluidplacert1',    ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:bucket", E: "minecraft:dropper"});
    event.shaped('justdirethings:droppert1',        ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:redstone", E: "minecraft:dropper"});

    event.shaped('justdirethings:blockplacert2',    ['BCB', 'CAC', 'BDB'], {A: "justdirethings:blockplacert1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});
    event.shaped('justdirethings:blockbreakert2',   ['BCB', 'CAC', 'BDB'], {A: "justdirethings:blockbreakert1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});
    event.shaped('justdirethings:clickert2',        ['BCB', 'CAC', 'BDB'], {A: "justdirethings:clickert1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});
    event.shaped('justdirethings:sensort2',         ['BCB', 'CAC', 'BDB'], {A: "justdirethings:sensort1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});
    event.shaped('justdirethings:fluidcollectort2', ['BCB', 'CAC', 'BDB'], {A: "justdirethings:fluidcollectort1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});
    event.shaped('justdirethings:fluidplacert2',    ['BCB', 'CAC', 'BDB'], {A: "justdirethings:fluidplacert1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});
    event.shaped('justdirethings:droppert2',        ['BCB', 'CAC', 'BDB'], {A: "justdirethings:droppert1", B: "justdirethings:celestigem", C: "minecraft:ender_eye", D: "oritech:machine_core_5"});

    event.shaped('create:brass_hand',               [' A ', 'BBB',' B '], {A: 'create:andesite_alloy', B: "create:golden_sheet"});
    event.shaped('oritech:foundry_block',           ['AAA', 'ABA','CDC'], {A: 'minecraft:copper_ingot', B: "minecraft:blast_furnace", C: "justdirethings:ferricore_ingot", D: "oritech:machine_core_3"});
    event.shaped('oritech:assembler_block',         ['AAA', 'BCB','DED'], {A: 'minecraft:copper_ingot', B: "minecraft:crafter", C: "oritech:adamant_ingot", D: "oritech:motor", E: "oritech:machine_core_4"});
    event.shaped('oritech:accelerator_controller',  ['AAA', 'ABA','DCD'], {A: 'oritech:duratium_ingot', B: "minecraft:dropper", C: "oritech:machine_core_6", D: "oritech:heisenberg_compensator"});

    event.blasting('createaddition:electrum_ingot', 'oritech:electrum_dust')
    event.blasting('kubejs:cce_unrefined_steel_nugget', 'kubejs:cce_unrefined_steel_dust')
    event.shapeless(Item.of('oritech:steel_ingot', 1), ['9x kubejs:cce_unrefined_steel_nugget']
)

//==========================================================================================================
//====================================      Create        ==================================================
//==========================================================================================================

    event.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [{"item": "oritech:fluxite"},{ "type": "fluid_stack", "fluid": "oritech:still_strange_matter", "amount": 250 }],
        "results": [{ "id": "kubejs:cce_unstable_compound"}]});

    event.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [{"item": "minecraft:sculk"},{"item": "minecraft:stone"}],
        "results": [{ "id": "deeperdarker:sculk_stone"}]});

    event.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [{"item": "deeperdarker:soul_dust"},{"item": "deeperdarker:resonarium"}],
        "results": [{ "id": "minecraft:echo_shard"}]});

    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "createaddition:copper_wire"}, {"item": "oritech:coal_dust"}],
        "results": [{"id": "oritech:carbon_fibre_strands"}]})
//==========================================================================================================
    event.custom({
        "type": "create:milling", 
        "ingredients": [{"item": "justdirethings:coal_t1"}],
        "results": [
            {"chance": 1.0,"count": 3, "id": "minecraft:gunpowder"}]})

    event.custom({
        "type": "create:milling", 
        "ingredients": [{"item": "justdirethings:coal_t2"}],
        "results": [
            {"chance": 1.0,"count": 6, "id": "minecraft:gunpowder"}]})

    event.custom({
        "type": "create:milling", 
        "ingredients": [{"item": "justdirethings:coal_t3"}],
        "results": [
            {"chance": 1.0,"count": 12, "id": "minecraft:gunpowder"}]})

    event.custom({
        "type": "create:milling", 
        "ingredients": [{"item": "justdirethings:coal_t4"}],
        "results": [
            {"chance": 1.0,"count": 24, "id": "minecraft:gunpowder"}]})

    event.custom({
        "type": "create:milling", 
        "ingredients": [{"item": "minecraft:iron_ingot"}],
        "results": [
            {"chance": 1.0, "id": "oritech:iron_dust"}]})

    event.custom({
        "type": "create:milling", 
        "ingredients": [{"item": "minecraft:coal"}],
        "results": [
            {"chance": 1.0, "id": "oritech:coal_dust"}]})
//==========================================================================================================
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "deeperdarker:sculk_stone"}],
        "processingTime": 800,
        "results": [
            {"id": "deeperdarker:soul_dust"}]
    });
//==========================================================================================================
    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [{"item": "oritech:silicon"},{ "type": "fluid_stack", "fluid": "oritech:still_silicon_wash", "amount": 250 }],
        "results": [{ "id": "oritech:silicon_wafer"}]});

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [{"tag": "c:sands"},{ "type": "fluid_stack", "fluid": "oritech:still_naphtha", "amount": 25 }],
        "results": [{ "id": "oritech:polymer_resin"}]});

    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "oritech:iron_dust"}, {"item": "oritech:coal_dust"}],
        "results": [{"id": "kubejs:cce_unrefined_steel_dust", "count": 1}]});
        
//==========================================================================================================
//====================================  Create Additions  ==================================================
//==========================================================================================================

    event.custom({
        "type": "createaddition:liquid_burning",
        "burnTime": 24000,
        "input": {
            "type" : "fluid_tag",
            "amount": 1000,
            "fluid_tag": "c:refined_t2_fluid_source"
        },
        "superheated": true})

    event.custom({
        "type": "createaddition:charging", 
        "energy": 4000, 
        "ingredient": {"item": "kubejs:oritech_incomplete_processing_unit" },  
        "max_charge_rate": 200, 
        "result": {"count": 1, "id": "oritech:processing_unit"}})

    event.custom({
        "type": "createaddition:charging", 
        "energy": 1000, 
        "ingredient": {"item": "minecraft:gold_ingot" },  
        "max_charge_rate": 200, 
        "result": {"count": 1, "id": "createaddition:electrum_ingot"}})

//==========================================================================================================
//========================================  Sequenced  =====================================================
//==========================================================================================================

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "oritech:machine_core_1"},
    "loops": 1,
    "results": [{"id": "create:copper_casing"}],
    "sequence": [
        {"type": "create:deploying", "ingredients": [{"item": "oritech:machine_core_1"}, {"item": "minecraft:dried_kelp"}], "results": [{"id": "oritech:machine_core_1"}]},
        {"type": "create:deploying", "ingredients": [{"item": "oritech:machine_core_1"}, {"item": "minecraft:copper_ingot"}], "results": [{"id": "oritech:machine_core_1"}]},
        {"type": "create:pressing", "ingredients": [{"item": "oritech:machine_core_1"}], "results": [{"id": "oritech:machine_core_1"}]}
    ],
    "transitional_item": {"id": "oritech:machine_core_1"}});

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "oritech:machine_core_6"},
    "loops": 8,
    "results": [{"id": "oritech:machine_core_7"}],
    "sequence": [
        {"type": "create:deploying", "ingredients": [{"item": "oritech:machine_core_6"}, {"item": "oritech:superconductor"}], "results": [{"id": "oritech:machine_core_6"}]},
        {"type": "create:deploying", "ingredients": [{"item": "oritech:machine_core_6"}, {"item": "oritech:prometheum_ingot"}], "results": [{"id": "oritech:machine_core_6"}]},
        {"type": "create:pressing", "ingredients": [{"item": "oritech:machine_core_6"}], "results": [{"id": "oritech:machine_core_6"}]}
    ],
    "transitional_item": {"id": "oritech:machine_core_6"}});

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "minecraft:netherrack"},
    "loops": 4,
    "results": [{"id": "create:empty_blaze_burner"}],
    "sequence": [
        {"type": "create:deploying", "ingredients": [{"item": "minecraft:red_nether_bricks"}, {"item": "oritech:steel_ingot"}],   "results": [{"id": "minecraft:red_nether_bricks"}]},
        {"type": "create:deploying", "ingredients": [{"item": "minecraft:red_nether_bricks"}, {"item": "oritech:carbon_fibre_strands"}], "results": [{"id": "minecraft:red_nether_bricks"}]}
    ],
    "transitional_item": {"id": "minecraft:red_nether_bricks"}});

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "create:copper_sheet"},
    "loops": 3,
    "results": [{"id": "oritech:reinforced_carbon_sheet"}],
    "sequence": [
        {"type": "create:deploying", "ingredients": [{"item": "create:copper_sheet"}, {"tag": "c:ingots/steel"}],   "results": [{"id": "create:copper_sheet"}]},
        {"type": "create:deploying", "ingredients": [{"item": "create:copper_sheet"}, {"item": "oritech:carbon_fibre_strands"}], "results": [{"id": "create:copper_sheet"}]},
        {"type": "create:pressing", "ingredients": [{"item": "create:copper_sheet"}], "results": [{"id": "create:copper_sheet"}]}
    ],
    "transitional_item": {"id": "create:copper_sheet"}});

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "oritech:plastic_sheet"},
    "loops": 1,
    "results": [{"id": "kubejs:oritech_incomplete_processing_unit"}],
    "sequence": [
        {"type": "create:deploying", "ingredients": [{"item": "oritech:plastic_sheet"}, {"item": "createaddition:electrum_ingot"}],   "results": [{"id": "oritech:plastic_sheet"}]},
        {"type": "create:deploying", "ingredients": [{"item": "oritech:plastic_sheet"}, {"item": "oritech:carbon_fibre_strands"}], "results": [{"id": "oritech:plastic_sheet"}]},
        {"type": "create:deploying", "ingredients": [{"item": "oritech:plastic_sheet"}, {"item": "minecraft:redstone"}], "results": [{"id": "oritech:plastic_sheet"}]}
    ],
    "transitional_item": {"id": "oritech:plastic_sheet"}});

event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "oritech:unholy_intelligence"},
        "loops": 3,
        "results": [{"id": "oritech:super_ai_chip"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "oritech:unholy_intelligence"}, {"item": "oritech:advanced_computing_engine"}], "results": [{"id": "oritech:unholy_intelligence"}]},
            {"type": "create:deploying", "ingredients": [{"item": "oritech:unholy_intelligence"}, {"item": "kubejs:cce_strange_compound"}], "results": [{"id": "oritech:unholy_intelligence"}]},
            {"type": "create:deploying", "ingredients": [{"item": "oritech:unholy_intelligence"}, {"item": "justdirethings:celestigem"}], "results": [{"id": "oritech:unholy_intelligence"}]}
        ],
        "transitional_item": {"id": "oritech:unholy_intelligence"}});

//Cobblemon x Create Compat - Mega_Showdown:Wishing Star
 event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:crushed_netherite"},
       "loops": 50,
        "results": [{"id": "mega_showdown:wishing_star"}],
        "sequence": [
            {"type": "create:filling", "ingredients": [{"item": "kubejs:crushed_netherite"}, {"type": "fluid_stack", "fluid": "minecraft:lava", "amount": 500}], "results": [{"id": "kubejs:crushed_netherite"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:crushed_netherite"}, {"item": "create:experience_block"}], "results": [{"id": "kubejs:crushed_netherite"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:crushed_netherite"}], "results": [{"id": "kubejs:crushed_netherite"}]}
        ],
        "transitional_item": {"id": "kubejs:crushed_netherite"}})

//Cobblemon x Create Compat - Mega_Showdown:Blank-Z
  event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "deeperdarker:soul_crystal"},
       "loops": 4,
        "results": [{"id": "mega_showdown:blank-z"}],
        "sequence": [
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:blank_soul_crystal"}], "results": [{"id": "kubejs:blank_soul_crystal"}]},
            {"type": "create:filling", "ingredients": [{"item": "kubejs:blank_soul_crystal"}, {"type": "fluid_stack", "fluid": "minecraft:lava", "amount": 1000}], "results": [{"id": "kubejs:blank_soul_crystal"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:blank_soul_crystal"}, {"item": "cobblemon:black_tumblestone"}], "results": [{"id": "kubejs:blank_soul_crystal"}]}
        ],
        "transitional_item": {"id": "kubejs:blank_soul_crystal"}})

//Cobblemon x Create Compat - Mega_Showdown:Mega_Stone
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
        "transitional_item": {"id": "kubejs:crushed_meteoroid"}})

//==========================================================================================================
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "category": "misc",
    "key": {
      "A": {"item": "justdirethings:eclipsealloy_ingot"},
      "B": {"item": "oritech:overcharged_crystal"},
      "C": {"item": "oritech:heisenberg_compensator"}
    },
    "pattern": [
    'AAAAA',
    'ABBBA',
    'ABCBA',
    'ABBBA',
    'AAAAA'
    ],
    "result": {
      "count": 1,
      "id": "oritech:prometheum_ingot"
    },
    "show_notification": false})




});

//==========================================================================================================
//==========================================  To DOs   =====================================================
//==========================================================================================================

//Cobblegen - Andesite at Bedrock