// priority: 0
Platform.mods.kubejs.name = 'Create Cardboard Edition'


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
    event.remove({id: 'oritech:crafting/charger'})
    event.remove({id: 'oritech:crafting/addon/processing'})

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
    event.replaceInput({ input: 'createaddition:electrum_ingot' }, 'oritech:electrum_ingot', 'createaddition:electrum_ingot')
    event.replaceInput({ input: 'oritech:basic_generator_block' }, 'oritech:basic_generator_block', 'oritech:machine_core_4')

    event.replaceOutput({ output: 'createaddition:electrum_ingot' }, 'oritech:electrum_ingot', 'createaddition:electrum_ingot')
//==========================================================================================================
//========================================== Chapter 1 =====================================================
//==========================================================================================================
    event.shaped('minecraft:blast_furnace', ['AAA', 'ABA', 'CCC'], 
        {A: 'minecraft:copper_ingot', B: "minecraft:furnace", C: "minecraft:stone"});

    event.shaped('create:copper_casing', ['BCB', 'CAC','BCB'], 
        {A: 'oritech:machine_core_1', B: "minecraft:copper_ingot", C: "minecraft:dried_kelp"});

    createItemApplication(event, "create:andesite_casing", "create:cardboard_block", "oritech:machine_core_1");
    createItemApplication(event, "oritech:machine_core_1", "justdirethings:ferricore_ingot", "oritech:machine_core_2");
    createItemApplication(event, "oritech:machine_core_2", "minecraft:obsidian", "create:railway_casing");

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
        "transitional_item": {"id": "oritech:machine_core_1"}
    });
    

//==========================================================================================================
//========================================== Chapter 2 =====================================================
//==========================================================================================================

    event.shaped('justdirethings:blockplacert1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:diamond", E: "minecraft:dispenser"});
    event.shaped('justdirethings:blockbreakert1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:diamond", E: "minecraft:observer"});
    event.shaped('justdirethings:clickert1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:quartz", E: "minecraft:dispenser"});
    event.shaped('justdirethings:sensort1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:quartz", E: "minecraft:observer"});
    event.shaped('justdirethings:fluidcollectort1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:bucket", E: "minecraft:dispenser"});
    event.shaped('justdirethings:fluidplacert1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:bucket", E: "minecraft:dropper"});
    event.shaped('justdirethings:droppert1', ['BDB', 'CAC', 'BEB'], {A: "oritech:machine_core_2", B: "justdirethings:ferricore_ingot", C: "minecraft:redstone", D: "minecraft:redstone", E: "minecraft:dropper"});

    
    createItemApplication(event, "oritech:machine_core_2", "create:brass_ingot", "create:brass_casing");

    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "createaddition:copper_wire"}, {"item": "oritech:coal_dust"}],
        "results": [{"id": "oritech:carbon_fibre_strands"}]})

    event.shaped('create:brass_hand', [' A ', 'BBB',' B '], 
        {A: 'create:andesite_alloy', B: "create:golden_sheet"});

    event.shaped('oritech:foundry_block', ['AAA', 'ABA','CDC'], 
        {A: 'minecraft:copper_ingot', B: "minecraft:blast_furnace", C: "justdirethings:ferricore_ingot", D: "oritech:machine_core_3"});

    event.shaped('oritech:assembler_block', ['AAA', 'BCB','DED'], 
        {A: 'minecraft:copper_ingot', B: "minecraft:crafter", C: "oritech:adamant_ingot", D: "oritech:motor", E: "oritech:machine_core_4"});

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

    event.blasting('createaddition:electrum_ingot', 'oritech:electrum_dust')

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
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [{"item": "oritech:silicon"},{ "type": "fluid_stack", "fluid": "oritech:still_silicon_wash", "amount": 250 }],
        "results": [{ "id": "oritech:silicon_wafer"}]});

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [{"tag": "c:sands"},{ "type": "fluid_stack", "fluid": "oritech:still_naphtha", "amount": 25 }],
        "results": [{ "id": "oritech:polymer_resin"}]});
        
    createItemApplication(event, "oritech:silicon_wafer", "oritech:processing_unit", "oritech:advanced_computing_engine")
    createItemApplication(event, "oritech:machine_core_2", "oritech:reinforced_carbon_sheet", "oritech:machine_core_3");
    createItemApplication(event, "oritech:machine_core_3", "oritech:advanced_computing_engine", "oritech:machine_core_4");
    createItemApplication(event, "oritech:machine_core_4", "oritech:unholy_intelligence", "oritech:machine_core_5");
    createItemApplication(event, "oritech:machine_core_5", "oritech:super_ai_chip", "oritech:machine_core_6");

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

    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "oritech:iron_dust"}, {"item": "oritech:coal_dust"}],
        "results": [{"id": "oritech:steel_dust", "count": 1}]});

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
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [{"item": "oritech:fluxite"},{ "type": "fluid_stack", "fluid": "oritech:still_strange_matter", "amount": 250 }],
        "results": [{ "id": "kubejs:cce_unstable_compound"}]});


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
        "transitional_item": {"id": "oritech:unholy_intelligence"}
    });
//==========================================================================================================
//==========================================  To DOs   =====================================================
//==========================================================================================================

//Cobblegen - Andesite at Bedrock

})

ServerEvents.recipes((event) => {
  let yamlRecipe = (yaml) => event.custom(Lychee.toJSON(yaml))

    yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: minecraft:diamond
    block_in: minecraft:lightning_rod
    post:
      - type: delay
        s: 0.2
      - type: execute
        command: "weather clear"
      - type: execute
        command: "say Weather cleared"
    `).id('cardboard_edition:clear_weather')

  //Sheet Crafting - Brass
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: create:brass_ingot
      count: 1
    post:
      - type: drop_item
        id: create:brass_sheet
    `).id('cardboard_edition:sheet_crafting_brass')

  //Sheet Crafting - Iron
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:iron_ingot
      count: 1
    post:
      - type: drop_item
        id: create:iron_sheet
    `).id('cardboard_edition:sheet_crafting_iron')

  //Sheet Crafting - Gold
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:gold_ingot
      count: 1
    post:
      - type: drop_item
        id: create:golden_sheet
    `).id('cardboard_edition:sheet_crafting_gold')

  //Sheet Crafting - Copper
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:copper_ingot
      count: 1
    post:
      - type: drop_item
        id: create:copper_sheet
    `).id('cardboard_edition:sheet_crafting_copper')

  //Unstable Explosion
  yamlRecipe(`
    type: 'lychee:item_exploding'
    item_in:
      - item: kubejs:cce_unstable_compound
      - item: create:andesite_alloy
    post:
      - type: drop_item
        id: kubejs:cce_strange_compound
    `).id('cardboard_edition:unstable_explosion')

})