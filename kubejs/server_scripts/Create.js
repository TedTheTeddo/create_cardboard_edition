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

    event.stonecutting('minecraft:dirt',  'minecraft:coarse_dirt')

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
    event.shaped('justdirethings:blockswappert2',   ['BCB', 'CAC', 'BDB'], {A: "justdirethings:blockswappert1", B: "justdirethings:eclipsealloy_ingot", C: "minecraft:ender_eye", D: "oritech:machine_core_7"});
    event.shaped('justdirethings:time_wand',        [' AB', ' CA', 'C  '], {A: "justdirethings:time_crystal", B: "justdirethings:eclipsealloy_ingot", C: "oritech:prometheum_ingot"});

    event.shaped('justdirethings:upgrade_orescanner', ['BCB', 'CAC', 'BDB'], {A: "justdirethings:upgrade_blank", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "oritech:processing_unit"});
    event.shaped('justdirethings:upgrade_orexray',  ['BCB', 'CAC', 'BDB'], {A: "justdirethings:upgrade_blank", B: "minecraft:sculk_catalyst", C: "minecraft:redstone", D: "oritech:machine_core_7"});
    event.shaped('justdirethings:upgrade_flight',   ['BCB', 'CAC', 'BDB'], {A: "justdirethings:upgrade_blank", B: "minecraft:phantom_membrane", C: "minecraft:redstone", D: "oritech:machine_core_7"});


    event.shaped('create:brass_hand',               [' A ', 'BBB',' B '], {A: 'create:andesite_alloy', B: "create:golden_sheet"});
    event.shaped('oritech:foundry_block',           ['AAA', 'ABA','CDC'], {A: 'minecraft:copper_ingot', B: "minecraft:blast_furnace", C: "justdirethings:ferricore_ingot", D: "oritech:machine_core_3"});
    event.shaped('oritech:assembler_block',         ['AAA', 'BCB','DED'], {A: 'minecraft:copper_ingot', B: "minecraft:crafter", C: "oritech:adamant_ingot", D: "oritech:motor", E: "oritech:machine_core_4"});
    event.shaped('oritech:accelerator_controller',  ['AAA', 'ABA','DCD'], {A: 'oritech:duratium_ingot', B: "minecraft:dropper", C: "oritech:machine_core_6", D: "oritech:heisenberg_compensator"});
    event.shaped('oritech:atomic_forge_block',      ['ABA', 'BCB','DDD'], {A: 'oritech:flux_gate', B: "oritech:duratium_ingot", C: "oritech:machine_core_4", D: "#oritech:plating"});

    event.shaped('dailyshop:daily_shop',            ['ABA', 'BCB','ABA'], {A: 'minecraft:red_wool', B: "minecraft:white_wool", C: "minecraft:diamond"});

    event.blasting('createaddition:electrum_ingot', 'oritech:electrum_dust')
    event.blasting('kubejs:cce_unrefined_steel_nugget', 'kubejs:cce_unrefined_steel_dust')
    event.shapeless(Item.of('oritech:steel_ingot', 1), ['9x kubejs:cce_unrefined_steel_nugget'])
    event.shapeless(Item.of('justdirethings:portalgun_v2', 1), ['justdirethings:portalgun', 'oritech:machine_core_7'])

    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:amulet_of_protection"]'), ['kubejs:irons_amulet_of_protection']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:bane_ring"]'), ['kubejs:irons_bane_ring']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:barbed_band"]'), ['kubejs:irons_barbed_band']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:haggler_ring"]'), ['kubejs:irons_ring_of_haggling']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:improved_gemset_ring"]'), ['kubejs:irons_improved_gemset_ring']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:piglin_signet_ring"]'), ['kubejs:irons_pigling_signet_ring']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:sharpshooter_loop"]'), ['kubejs:irons_sharpshooter_loop']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:stalwart_ring"]'), ['kubejs:irons_stalwart_ring']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:superior_gemset_ring"]'), ['kubejs:irons_superior_gemset_ring']);
    event.shapeless(Item.of('irons_jewelry:recipe[irons_jewelry:stored_pattern="irons_jewelry:tearstone_ring"]'), ['kubejs:irons_tearstone_ring']);

    event.shapeless("minecraft:ink_sac", ["minecraft:glass_bottle", 'minecraft:black_dye']) //Ink Sac
    event.shapeless('minecraft:experience_bottle', ['minecraft:glass_bottle', 'create:experience_nugget']) //Bottle of Enchanting
//==========================================================================================================
//====================================      Create        ==================================================
//==========================================================================================================

    event.custom({"type": "create:splashing", //Mob Drop: Feather & Rabbit Foot
        "ingredients": [{"item": "minecraft:dirt"}],
        "results": [{"chance": 0.50, "id": "minecraft:feather"}, {"chance": 0.01, "id": "minecraft:rabbit_foot"}]})

    event.custom({"type": "create:splashing", //Mob Drop: Rotten Flesh
        "ingredients": [{"item": "minecraft:mud"}],
        "results": [{"id": "minecraft:rotten_flesh"}]})

    event.custom({"type": "create:splashing", //Mob Drop: Spider Eye / Ender Eye
        "ingredients": [{"item": "minecraft:soul_soil"}],
        "results": [{"chance": 0.25, "id": "minecraft:spider_eye"}, {"chance": 0.25, "id": "minecraft:ender_pearl"}]})

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

    event.custom({"type": "create:compacting", //Mob Drop: Bone
        "ingredients": [{"item": "minecraft:bone_meal"}, {"item": "minecraft:bone_meal"}, {"item": "minecraft:bone_meal"}, {"item": "minecraft:bone_meal"}],
        "results": [{"id": "minecraft:bone"}]})

    event.custom({"type": "create:compacting", //Mob Drop: Sculk
        "ingredients": [{"item": "create:experience_nugget"}, {"item": "minecraft:sculk"}],
        "results": [{"id": "2x minecraft:sculk"}]})

    event.custom({"type": "create:compacting", //Mob Drop: Gunpowder
        "ingredients": [{"item": "minecraft:flint"}, {"item": "minecraft:dried_kelp"}],
        "results": [{"id": "minecraft:gunpowder"}]})

    event.custom({"type": "create:compacting", //Mob Drop: Blaze Powder
        "heat_requirement": "heated",
        "ingredients": [{"item": "minecraft:redstone"}],
        "results": [{"id": "minecraft:blaze_powder"}]})

    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:sugar"}, {"item": "create:pulp"}],
        "results": [{"id": "minecraft:honeycomb"}]})

    event.custom({
        "type": "create:compacting",
        "ingredients": [{ "type": "fluid_stack", "fluid": "minecraft:milk", "amount": 500 },{"item": "minecraft:stone"}],
        "results": [{"id": "minecraft:calcite"}]});  
    
    event.custom({
        "type": "create:compacting",
        "ingredients": [{ "type": "fluid_stack", "fluid": "minecraft:lava", "amount": 100 }, {"item": "create:cinder_flour"}],
        "results": [{"id": "minecraft:netherrack"}]});  

//==========================================================================================================

        //SandPaper Polishing
    event.custom({"type": "create:sandpaper_polishing", //Mob Drop: Ghast Tears
        "ingredients": [{"item": "minecraft:prismarine"}],
        "results": [{"id": "minecraft:ghast_tear"}]})

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

    event.custom({"type": "create:milling", //Mob Drop: String
        "ingredients": [{"item": "minecraft:leather"}],
        "results": [{"id": "2x minecraft:string", "count":2}]})

    event.custom({"type": "create:milling", //Mob Drop: Eggs
        "ingredients": [{"item": "minecraft:hay_block"}],
        "results": [{"id": "egg"}]})

    event.custom({"type": "create:milling", //Mob Drop: Phantom Membrane
        "ingredients": [{"item": "minecraft:sculk"}],
        "results": [{"chance": 0.50, "id": "minecraft:phantom_membrane"}]})

    event.custom({"type": "create:milling", //Mob Drop: Phantom Membrane
        "ingredients": [{"item": "minecraft:echo_shard"}],
        "results": [{"chance": 0.50, "id": "minecraft:amethyst_shard"}]})
        
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

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [{"item": "minecraft:honey_block"}],
        "results": [{"amount": 1000, "id": "create:honey"}]});

    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "minecraft:snowball"},{"item": "minecraft:glass_bottle"},{ "type": "fluid_stack", "fluid": "minecraft:water", "amount": 500 }],
        "results": [{"id": "minecraft:snow_block"},{"id": "minecraft:snowball"}]});

    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "minecraft:gravel"}, {"item": "minecraft:gravel"}, {"item": "minecraft:dirt"}, {"item": "minecraft:dirt"}],
        "results": [{"id": "minecraft:coarse_dirt", "count": 1}]});
        
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
//Raw Chicken
event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:wheat_flour"}, "loops": 1,  "results": [{ "id": "minecraft:chicken"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:wheat"}, [{"item": "minecraft:wheat"}]],
            "results": [{"id": "minecraft:wheat"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "minecraft:wheat"}, [{"item": "minecraft:rotten_flesh"}]],
            "results": [{"id": "minecraft:wheat"}]}, 
        {"type": "create:pressing", "ingredients": [{"item": "minecraft:wheat"}], "results": [{"id": "minecraft:wheat"}]}],
        "transitional_item": {"id": "minecraft:wheat"}})

//Raw Beef
event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:wheat_flour"}, "loops": 1,  "results": [{ "id": "minecraft:beef"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:carrot"}, [{"item": "minecraft:carrot"}]],
            "results": [{"id": "minecraft:carrot"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "minecraft:carrot"}, [{"item": "minecraft:rotten_flesh"}]],
            "results": [{"id": "minecraft:carrot"}]}, 
        {"type": "create:pressing", "ingredients": [{"item": "minecraft:carrot"}], "results": [{"id": "minecraft:carrot"}]}],
        "transitional_item": {"id": "minecraft:carrot"}})

//Raw Porkchop
event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:wheat_flour"}, "loops": 1,  "results": [{ "id": "minecraft:porkchop"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:potato"}, [{"item": "minecraft:potato"}]],
            "results": [{"id": "minecraft:potato"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "minecraft:potato"}, [{"item": "minecraft:rotten_flesh"}]],
            "results": [{"id": "minecraft:potato"}]}, 
        {"type": "create:pressing", "ingredients": [{"item": "minecraft:potato"}], "results": [{"id": "minecraft:potato"}]}],
        "transitional_item": {"id": "minecraft:potato"}})

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

//==========================================================================================================
//========================================== Coral Automations =============================================
//==========================================================================================================

//Sponge
    event.custom({"type": "create:splashing", //Sponge -> Wet Sponge
        "ingredients": [{"item": "minecraft:sponge"}],
        "results": [{"id": "minecraft:wet_sponge"}]});

    event.custom({
        "type": "create:filling", //Sponge -> Wet Sponge
        "ingredients": [{"item": "minecraft:sponge"}, { "type": "fluid_stack", "fluid": "minecraft:water", "amount": 250 }],
        "results": [{"id": "minecraft:wet_sponge"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:salmon"}], //Salmon -> Sponge gamble
        "results": [{"chance": 0.10, "id": "minecraft:sponge"}, {"id": "minecraft:bone_meal"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:cod"}], //Cod -> Sponge gamble
        "results": [{"chance": 0.10, "id": "minecraft:sponge"}, {"id": "minecraft:bone_meal"}]});

    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:wet_sponge"}],
        "results": [{"id": "minecraft:sponge"}, {"chance": 0.25, "id": "minecraft:pufferfish"}, {"chance": 0.25, "id": "minecraft:tropical_fish"}, {"chance": 0.25, "id": "minecraft:nautilus_shell"}]})

//Basic Coral
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:tropical_fish"}],
        "results": [
            {"chance": 0.50, "id": "minecraft:dead_tube_coral"},
            {"chance": 0.50, "id": "minecraft:dead_brain_coral"},
            {"chance": 0.50, "id": "minecraft:dead_bubble_coral"},
            {"chance": 0.50, "id": "minecraft:dead_fire_coral"},
            {"chance": 0.50, "id": "minecraft:dead_horn_coral"}
        ]
    });
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:pufferfish"}],
        "results": [
            {"chance": 0.50, "id": "minecraft:dead_tube_coral"},
            {"chance": 0.50, "id": "minecraft:dead_brain_coral"},
            {"chance": 0.50, "id": "minecraft:dead_bubble_coral"},
            {"chance": 0.50, "id": "minecraft:dead_fire_coral"},
            {"chance": 0.50, "id": "minecraft:dead_horn_coral"}
        ]
    });
  
// List of coral types and their corresponding dyes
const coralTypes = [
    { type: 'tube', dye: 'blue' },
    { type: 'brain', dye: 'pink' },
    { type: 'bubble', dye: 'purple' },
    { type: 'fire', dye: 'red' },
    { type: 'horn', dye: 'yellow' }
];

// Process each coral type using a for loop
for (const coral of coralTypes) {
    event.custom({"type": "create:splashing", //Revive Coral
        "ingredients": [{"item": `minecraft:dead_${coral.type}_coral`}],
        "results": [{"id": `minecraft:${coral.type}_coral`}]});
        
    // Shapeless recipe to create coral blocks
    event.shapeless(`minecraft:${coral.type}_coral_block`, [`4x minecraft:${coral.type}_coral`]);

    // Stonecutting recipe to create coral fans
    event.stonecutting(`minecraft:${coral.type}_coral_fan`, `minecraft:${coral.type}_coral`);

    // Milling recipe to process coral blocks into prismarine shards and dye
    event.custom({"type": "create:milling",
        "ingredients": [{"item":  `minecraft:${coral.type}_coral_block`}], 
        "results": [{"id": "minecraft:prismarine_shard"}, {"id": `minecraft:${coral.dye}_dye`}]});
}

//Prismarine Crystals
    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:amethyst_shard"}, {"item": "minecraft:prismarine_shard"}],
        "results": [{"id": "prismarine_crystals"}]})

//==========================================================================================================
//========================================== Frog Automations ==============================================
//==========================================================================================================
    
    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "minecraft:egg"},{ "type": "fluid_stack", "fluid": "minecraft:water", "amount": 500 }],
        "results": [{ "id": "minecraft:frogspawn"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item":  "minecraft:ochre_froglight"}], 
        "results": [{"id": "minecraft:glowstone"}, {"id": "minecraft:yellow_dye"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item":  "minecraft:verdant_froglight"}], 
        "results": [{"id": "minecraft:glowstone"}, {"id": "minecraft:lime_dye"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item":  "minecraft:pearlescent_froglight"}], 
        "results": [{"id": "minecraft:glowstone"}, {"id": "minecraft:pink_dye"}]});

//==========================================================================================================
//======================================        Logs          ==============================================
//==========================================================================================================  

    //Convert Logs -> Stripped -> Planks -> Slab
	//let woodcutting = (mod, log, planks, slab, stair) => {
	//	event.recipes.createCutting([mod + ":stripped_" + log], mod + ":" + log).processingTime(50)
	//	event.recipes.createCutting([Item.of(mod + ":" + planks, 6)], mod + ":stripped_" + log).processingTime(50)
	//	event.recipes.createCutting([Item.of(mod + ":" + slab, 2)], mod + ":" + planks).processingTime(50)
	//}
    //    woodcutting('minecraft', 'dark_oak_log', 'dark_oak_planks', 'dark_oak_slab')
    //     woodcutting('minecraft', 'oak_log', 'oak_planks', 'oak_slab')
    //     woodcutting('minecraft', 'spruce_log', 'spruce_planks', 'spruce_slab')
    //     woodcutting('minecraft', 'birch_log', 'birch_planks', 'birch_slab')
    //     woodcutting('minecraft', 'jungle_log', 'jungle_planks', 'jungle_slab')
    //     woodcutting('minecraft', 'acacia_log', 'acacia_planks', 'acacia_slab')
    //     woodcutting('minecraft', 'cherry', 'cherry_planks', 'cherry_slab')
    //     woodcutting('minecraft', 'mangrove_log', 'mangrove_planks', 'mangrove_slab')

        let planks = [
            'minecraft:oak_planks',
            'minecraft:spruce_planks',
            'minecraft:birch_planks',
            'minecraft:jungle_planks',
            'minecraft:acacia_planks',
            'minecraft:dark_oak_planks',
            'minecraft:crimson_planks',
            'minecraft:warped_planks',
            'minecraft:mangrove_planks',
            'minecraft:cherry_planks',
            'minecraft:bamboo_planks'
        ];
    
        planks.forEach(plank => {
            let woodType = plank.replace('minecraft:', '').replace('_planks', '');
            let stairs = `minecraft:${woodType}_stairs`;
            let slabs = `2x minecraft:${woodType}_slab`;
            let trapdoors = `minecraft:${woodType}_trapdoor`;
            let pressure_plate = `minecraft:${woodType}_pressure_plate`;
    
            // Stonecutting recipes
            event.stonecutting(slabs, plank);
            event.stonecutting(stairs, plank);
            event.stonecutting(trapdoors, plank);
            event.stonecutting(pressure_plate, plank);
        });

//==========================================================================================================
//======================================        Music          =============================================
//==========================================================================================================  

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "minecraft:jukebox"}],
        "processingTime": 800,
        "results": [
            {"chance": 0.0625, "id": "minecraft:music_disc_13"},
            {"chance": 0.0625, "id": "minecraft:music_disc_cat"},
            {"chance": 0.0625, "id": "minecraft:music_disc_blocks"},
            {"chance": 0.0625, "id": "minecraft:music_disc_chirp"},
            {"chance": 0.0625, "id": "minecraft:music_disc_far"},
            {"chance": 0.0625, "id": "minecraft:music_disc_mall"},
            {"chance": 0.0625, "id": "minecraft:music_disc_mellohi"},
            {"chance": 0.0625, "id": "minecraft:music_disc_stal"},
            {"chance": 0.0625, "id": "minecraft:music_disc_strad"},
            {"chance": 0.0625, "id": "minecraft:music_disc_ward"},
            {"chance": 0.0625, "id": "minecraft:music_disc_11"},
            {"chance": 0.0625, "id": "minecraft:music_disc_wait"},
            {"chance": 0.0625, "id": "minecraft:music_disc_otherside"},
            {"chance": 0.0625, "id": "minecraft:music_disc_5"},
            {"chance": 0.0625, "id": "minecraft:music_disc_pigstep"},
            {"chance": 0.0625, "id": "minecraft:music_disc_relic"}
        ]
    });
//==========================================================================================================
//========================================== Flowers         ==============================================
//==========================================================================================================

    event.custom({"type": "create:milling", 
        "ingredients": [{"item": "minecraft:dirt"}],
        "results": [
            {"chance": 0.1, "id": "minecraft:dandelion"},
            {"chance": 0.1, "id": "minecraft:poppy"},
            {"chance": 0.1, "id": "minecraft:dandelion"},
            {"chance": 0.1, "id": "minecraft:blue_orchid"},
            {"chance": 0.1, "id": "minecraft:allium"},
            {"chance": 0.1, "id": "minecraft:azure_bluet"},
            {"chance": 0.1, "id": "minecraft:red_tulip"},
            {"chance": 0.1, "id": "minecraft:orange_tulip"},
            {"chance": 0.1, "id": "minecraft:white_tulip"},
            {"chance": 0.1, "id": "minecraft:pink_tulip"},
            {"chance": 0.1, "id": "minecraft:oxeye_daisy"},
            {"chance": 0.1, "id": "minecraft:cornflower"},
            {"chance": 0.1, "id": "minecraft:lily_of_the_valley"}
        ]})
});

//==========================================================================================================
//==========================================  To DOs   =====================================================
//==========================================================================================================

//Cobblegen - Andesite at Bedrock