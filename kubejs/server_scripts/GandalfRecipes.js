ServerEvents.recipes(event => {
//==========================================================================================================
//======================================== Cobblemon Related Recipes =======================================
//==========================================================================================================
    event.custom({ //Blank TR Recipe
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:dubious_disc"}, //Starting Item
        "loops": 4,  
        "results": [                
                {"item": "simpletms:tr_blank"}], //Final Product
            "sequence": 
        [{"type": "create:deploying",       //This is how you determine the process - Deploying    
            "ingredients": [{"item": "cobblemon:dubious_disc"}, [{"item": "minecraft:diamond"}]],
            "results": [{"item": "cobblemon:dubious_disc"}]},
        {"type": "create:deploying",       //This is how you determine the process - Deploying    
            "ingredients": [{"item": "cobblemon:dubious_disc"}, [{"item": "minecraft:echo_shard"}]],
            "results": [{"item": "cobblemon:dubious_disc"}]},
        {"type": "create:deploying",       //This is how you determine the process - Deploying    
            "ingredients": [{"item": "cobblemon:dubious_disc"}, [{"item": "cobblemon:pp_max"}]],
            "results": [{"item": "cobblemon:dubious_disc"}]},
        {"type": "create:filling",            
            "ingredients": [{"item": "cobblemon:dubious_disc"}, {"amount": 250, "fluid": "minecraft:lava", "nbt": {}}],
            "results": [{"item": "cobblemon:dubious_disc"}]}, 
        {"type": "create:pressing",         //This is how you determine the process - Pressing
            "ingredients": [{"item": "cobblemon:dubious_disc"}], 
            "results": [{"item": "cobblemon:dubious_disc"}]}],
        "transitionalItem": {"item": "cobblemon:dubious_disc"}}) //Anything BUT the final item as the transitional item

    event.recipes.create.mechanical_crafting('simpletms:tm_blank', [ //TM Recipe
    '  AAA  ',
    ' AABAA ',
    ' ABCBA ',
    ' AABAA ',
    '  AAA  '],
    {A: 'create:sturdy_sheet', B: 'deeperdarker:reinforced_echo_shard', C: 'simpletms:tr_blank',})

    event.recipes.create.mechanical_crafting('megamons:key_stone', [ //Keystone Recipe
        ' ABA ',
        ' BCB ',
        ' ABA '],
    {A: 'minecraft:glass', B: 'minecraft:diamond', C: 'create:rose_quartz',})

    event.custom({ //Rough Anistarite Recipe
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:apristone"},
        "loops": 1,  
        "results": [{"item": "megamons:anistarite_rough_geode_block"}],
        "sequence":
        [{"type": "create:deploying",  
            "ingredients": [{"item": "minecraft:amethyst_shard"}, [{"item": "cobblemon:fairy_gem"}]],
            "keepHeldItem": true,
            "results": [{"item": "minecraft:amethyst_shard"}]},

        {"type": "create:deploying", 
            "ingredients": [{"item": "minecraft:amethyst_shard"}, [{"item": "cobblemon:dragon_gem"}]],
            "keepHeldItem": true,
            "results": [{"item": "minecraft:amethyst_shard"}]},

        {"type": "create:deploying",    
            "ingredients": [{"item": "minecraft:amethyst_shard"}, [{"item": "cobblemon:psychic_gem"}]],
            "keepHeldItem": true,
            "results": [{"item": "minecraft:amethyst_shard"}]},

        {"type": "create:deploying",   
            "ingredients": [{"item": "minecraft:amethyst_shard"}, [{"item": "cobblemon:rock_gem"}]],
            "keepHeldItem": true,
            "results": [{"item": "minecraft:amethyst_shard"}]},
    
        {"type": "create:deploying",   
            "ingredients": [{"item": "minecraft:amethyst_shard"}, [{"item": "cobblemon:steel_gem"}]],
            "keepHeldItem": true,
            "results": [{"item": "minecraft:amethyst_shard"}]},
        
        {"type": "create:deploying",  
            "ingredients": [{"item": "minecraft:amethyst_shard"}, [{"item": "cobblemon:fire_gem"}]],
            "keepHeldItem": true,
            "results": [{"item": "minecraft:amethyst_shard"}]}],
        "transitionalItem": {"item": "minecraft:amethyst_shard"}})

        event.recipes.create.sandpaper_polishing('megamons:anistarite_geode_block', 'megamons:anistarite_rough_geode_block')

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:gilded_chest"},
        "loops": 999,  
        "results": [{"item": "cobblemon:gimmighoul_chest"}],
        "sequence":
        [{"type": "create:deploying",  
            "ingredients": [{"item": "cobblemon:gilded_chest"}, [{"item": "cobblemon:relic_coin"}]],
            "results": [{"item": "cobblemon:gilded_chest"}]}],
        "transitionalItem": {"item": "cobblemon:gilded_chest"}})
//Candies
event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "minecraft:paper"},
    "loops": 1,  
    "results": [{"item": "cobblemon:exp_candy_m"}],
    "sequence":
    [{"type": "create:deploying",  
            "ingredients": [{"item": "minecraft:paper"}, [{"item": "minecraft:diamond"}]],
            "results": [{"item": "minecraft:paper"}]},
    {"type": "create:deploying",  
            "ingredients": [{"item": "minecraft:paper"}, [{"item": "minecraft:diamond"}]],
            "results": [{"item": "minecraft:paper"}]},
    {"type": "create:deploying",  
            "ingredients": [{"item": "minecraft:paper"}, [{"item": "minecraft:sugar"}]],
            "results": [{"item": "minecraft:paper"}]}],
    "transitionalItem": {"item": "minecraft:paper"}})

event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {"item": "minecraft:paper"},
    "loops": 1,  
    "results": [{"item": "cobblemon:exp_candy_l"}],
    "sequence":
    [{"type": "create:filling",            
        "ingredients": [{"item": "minecraft:paper"}, {"amount": 90, "fluid": "tconstruct:molten_netherite", "nbt": {}}],
        "results": [{"item": "minecraft:paper"}]},
    {"type": "create:filling",            
        "ingredients": [{"item": "minecraft:paper"}, {"amount": 90, "fluid": "tconstruct:molten_netherite", "nbt": {}}],
        "results": [{"item": "minecraft:paper"}]},
    {"type": "create:deploying",  
            "ingredients": [{"item": "minecraft:paper"}, [{"item": "minecraft:sugar"}]],
            "results": [{"item": "minecraft:paper"}]}],
    "transitionalItem": {"item": "minecraft:paper"}})

//==========================================================================================================
//======================================== Mineral Duplication =============================================
//==========================================================================================================

    //Dripstone Block
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:dripstone_block"},
        "loops": 1,  
        "results": [                
            {"item": "minecraft:dripstone_block",  "count": 8}],
       "sequence": 
       [{"type": "create:filling",            
        "ingredients": [{"item": "minecraft:dripstone_block"},     {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "minecraft:dripstone_block"}]}, 
        {"type": "create:filling",            
            "ingredients": [{"item": "minecraft:dripstone_block"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
            "results": [{"item": "minecraft:dripstone_block"}]}, 
        {"type": "create:filling",            
            "ingredients": [{"item": "minecraft:dripstone_block"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
            "results": [{"item": "minecraft:dripstone_block"}]}], 
        "transitionalItem": {"item": "minecraft:dripstone_block"}})

    //Ichor Crystal Recipes
    event.shapeless('tconstruct:small_ichor_slime_crystal_bud',  ['tconstruct:ichor_slime_crystal', 'minecraft:sand'])
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:small_ichor_slime_crystal_bud"}, {"amount": 50, "fluid": "tconstruct:blazing_blood", "nbt": {}}],
        "results": [{"item": "tconstruct:medium_ichor_slime_crystal_bud"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:medium_ichor_slime_crystal_bud"}, {"amount": 50, "fluid": "tconstruct:blazing_blood", "nbt": {}}],
        "results": [{"item": "tconstruct:large_ichor_slime_crystal_bud"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:large_ichor_slime_crystal_bud"}, {"amount": 50, "fluid": "tconstruct:blazing_blood", "nbt": {}}],
        "results": [{"item": "tconstruct:ichor_slime_crystal_cluster"}]});

    //Earthslime Crystal Recipes
    event.shapeless('tconstruct:small_earth_slime_crystal_bud',  ['tconstruct:earth_slime_crystal', 'minecraft:sand'])
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:small_earth_slime_crystal_bud"}, {"amount": 250, "fluid": "tconstruct:molten_clay", "nbt": {}}],
        "results": [{"item": "tconstruct:medium_earth_slime_crystal_bud"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:medium_earth_slime_crystal_bud"}, {"amount": 250, "fluid": "tconstruct:molten_clay", "nbt": {}}],
        "results": [{"item": "tconstruct:large_earth_slime_crystal_bud"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:large_earth_slime_crystal_bud"}, {"amount": 250, "fluid": "tconstruct:molten_clay", "nbt": {}}],
        "results": [{"item": "tconstruct:earth_slime_crystal_cluster"}]});

    //Skyslime Crystal Recipes 
    event.shapeless('tconstruct:small_sky_slime_crystal_bud',  ['tconstruct:sky_slime_crystal', 'minecraft:sand'])
    event.custom({ //Note:250 mb is weird and means you get 4/3 of a full cluster per glass but spouts don't like fractions
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:small_sky_slime_crystal_bud"}, {"amount": 250, "fluid": "tconstruct:molten_glass", "nbt": {}}],
        "results": [{"item": "tconstruct:medium_sky_slime_crystal_bud"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:medium_sky_slime_crystal_bud"}, {"amount": 250, "fluid": "tconstruct:molten_glass", "nbt": {}}],
        "results": [{"item": "tconstruct:large_sky_slime_crystal_bud"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "tconstruct:large_sky_slime_crystal_bud"}, {"amount": 250, "fluid": "tconstruct:molten_glass", "nbt": {}}],
        "results": [{"item": "tconstruct:sky_slime_crystal_cluster"}]});

//==========================================================================================================
//======================================== Iron's Spells Recipes ===========================================
//==========================================================================================================

    //Diluting
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "irons_spellbooks:uncommon_ink"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "irons_spellbooks:common_ink",  "count": 4}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "irons_spellbooks:rare_ink"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "irons_spellbooks:uncommon_ink",  "count": 4}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "irons_spellbooks:epic_ink"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "irons_spellbooks:rare_ink",  "count": 4}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "irons_spellbooks:legendary_ink"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "irons_spellbooks:epic_ink",  "count": 4}]});
    
    //Alchemist Cauldron Alternative
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [{ "item": "minecraft:copper_ingot" },{ "item": "irons_spellbooks:common_ink", "count": 4 }],
        "results": [{"item": "irons_spellbooks:uncommon_ink"}]});
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [{ "item": "minecraft:iron_ingot" },{ "item": "irons_spellbooks:uncommon_ink", "count": 4 }],
        "results": [{"item": "irons_spellbooks:rare_ink"}]});
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [{ "item": "minecraft:gold_ingot" },{ "item": "irons_spellbooks:rare_ink", "count": 4 }],
        "results": [{"item": "irons_spellbooks:epic_ink"}]});
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [{ "item": "minecraft:amethyst_shard" },{ "item": "irons_spellbooks:epic_ink", "count": 4 }],
        "results": [{"item": "irons_spellbooks:legendary_ink"}]});

//==========================================================================================================
//===================================== Minecolonies Wall Bypass ===========================================
//==========================================================================================================

    event.custom({"type": "create:compacting",
        "heatRequirement": "superheated",
        "ingredients": [{"item": "minecraft:chest"}, {"item": "minecraft:gold_ingot"}, {"item": "minecraft:green_dye"}],
        "results": [{"item": "cobblemon:green_gilded_chest"}]})

    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [{ "item": "minecraft:iron_ingot", "count": 4 },{ "item": "minecraft:magma_block", "count": 4 }],
        "results": [{"item": "cobblemon:magmarizer"}]});

        //Netherite Adj Stuff
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:gold_ingot"}, {"amount": 90, "fluid": "tconstruct:molten_netherite", "nbt": {}}],
        "results": [{"item": "minecraft:netherite_ingot"}]});

    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:gold_nugget"}, {"amount": 10, "fluid": "tconstruct:molten_netherite", "nbt": {}}],
        "results": [{"item": "createdeco:netherite_nugget"}]});

    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:gold_block"}, {"amount": 810, "fluid": "tconstruct:molten_netherite", "nbt": {}}],
        "results": [{"item": "minecraft:netherite_block"}]});
        //Finishing the job for ted
        event.remove({id: "tconstruct:smeltery/casting/metal/netherite/nugget_gold_cast"})
        event.remove({id: "tconstruct:smeltery/casting/metal/netherite/nugget_sand_cast"})
        event.remove({id: "tconstruct:common/materials/netherite_nugget_from_ingot"})
        event.remove({id: "tconstruct:smeltery/casting/metal/netherite/block"})
        event.remove({id: "tconstruct:gadgets/frame/netherite"})

    event.shaped("tconstruct:netherite_item_frame",[
        " A ",
        "ABA",
        " A "],
        {A:"createdeco:netherite_nugget",
        B:"tconstruct:obsidian_pane"}),

    event.custom({         
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [{ "amount": 20, "fluid":"tconstruct:molten_debris", "nbt":{} },{ "amount": 40, "fluid":"tconstruct:molten_gold", "nbt":{} }],
        "results": [{ "amount": 10, "fluid":"tconstruct:molten_netherite", "nbt":{} }]});
//==========================================================================================================
//======================================== Gandalf's Convienience ==========================================
//==========================================================================================================

    event.custom({"type": "create:compacting",      //For Mojo!
        "ingredients": [{"item": "minecraft:sugar_cane"}, {"item": "minecraft:bone_meal"}],
        "results": [{"item": "minecraft:sugar_cane", "count": 2 }]})

    event.custom({"type": "create:deploying",       //Turtles should be pets for all!
        "ingredients": [{"item": "minecraft:egg"}, {"item": "minecraft:turtle_helmet"}],
        "results": [{"item": "minecraft:turtle_egg"}]})    

    event.custom({"type": "create:compacting",      //For End Rod Users!
        "ingredients": [{"item": "minecraft:chorus_flower"}, {"item": "minecraft:bone_meal"}],
        "results": [{"item": "minecraft:chorus_flower"}, {"item": "minecraft:chorus_fruit"}]})

    event.custom({      //For moody environments!
        "type": "create:mixing",
        "ingredients": [{ "item": "minecraft:glow_berries" },{ "item": "minecraft:vine", "count": 8 }],
        "results": [{"item": "minecraft:glow_lichen", "count": 8 }]})

    event.custom({      //not sure why create doesn't have this
        "type": "create:crushing",
        "ingredients": [{"item": "minecraft:warped_wart_block"}],
        "processingTime": 800,
        "results": [{"chance": 0.02,"item":"ender_pearl"},{"chance": 0.20, "item": "minecraft:nether_wart"}]})

    event.shaped(
        Item.of('minecraft:stick', 16),[
        'A',
        'A'
        ],{A:"#minecraft:logs"})

    event.shaped(
        Item.of('minecraft:dispenser'),[
        ' AB',
        'ACB',
        ' AB'
        ],{A:"minecraft:stick",
           B:"minecraft:string",
           C:"minecraft:dropper"
        })

    event.shapeless(
        Item.of('minecraft:dispenser'),
        [   'minecraft:bow',
            'minecraft:dropper'])

    event.shaped(
        Item.of('minecraft:hopper'),[
        'ABA',
        'ABA',
        ' A '
        ],{A:"minecraft:iron_ingot",
           B:"#minecraft:logs"})

    event.shaped(
        Item.of('minecraft:repeater'),[
        'A A',
        'BAB',
        'CCC'
        ],{A:"minecraft:redstone",
           B:"minecraft:stick",
           C:"minecraft:stone"})

    event.custom({"type": "create:crushing",
        "ingredients": [{"item": "tconstruct:earth_slime_crystal_cluster"}],
        "processingTime": 150,
        "results": [{"item": "tconstruct:earth_slime_crystal", "count":7},{"chance": 0.5,"item": "tconstruct:earth_slime_crystal"}]})
    event.custom({"type": "create:crushing",
        "ingredients": [{"item": "tconstruct:sky_slime_crystal_cluster"}],
        "processingTime": 150,
        "results": [{"item": "tconstruct:sky_slime_crystal", "count":7},{"chance": 0.5,"item": "tconstruct:sky_slime_crystal"}]})
    event.custom({"type": "create:crushing",
        "ingredients": [{"item": "tconstruct:ichor_slime_crystal_cluster"}],
        "processingTime": 300,
        "results": [{"item": "tconstruct:ichor_slime_crystal", "count":7},{"chance": 0.5,"item": "tconstruct:ichor_slime_crystal"}]})
    event.custom({"type": "create:crushing",
        "ingredients": [{"item": "tconstruct:ender_slime_crystal_cluster"}],
        "processingTime": 400,
        "results": [{"item": "tconstruct:ender_slime_crystal", "count":7},{"chance": 0.5,"item": "tconstruct:ender_slime_crystal"}]})




    
    event.custom({ //Meat soup recipes
        "type": "create:emptying",
        "ingredients":[{"item": "irons_spellbooks:blood_vial"}],
        "results":[{"item":"minecraft:glass_bottle"},
                   {"amount":250,"fluid":"tconstruct:meat_soup"}]})
    event.custom({ 
        "type": "create:emptying",
        "ingredients":[{"item": "tconstruct:meat_soup"}],
        "results":[{"item":"minecraft:bowl"},
                   {"amount":250,"fluid":"tconstruct:meat_soup"}]})
    event.custom({
        "type": "create:mixing",
        "ingredients": [{ "tag": "cobblemon:protein_ingredients","count":4 },
                        { "item":"minecraft:bowl"}],
        "results": [{"item": "tconstruct:meat_soup"}]});
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:bowl"}, {"amount": 250, "fluid": "tconstruct:meat_soup", "nbt": {}}],
        "results": [{"item": "tconstruct:meat_soup"}]});

    event.custom({ //Dragon scale recipe
    "type": "lychee:item_exploding",
    "item_in": [
      {
        "item": "minecraft:dragon_head"
      }
    ],
    "post": [
      {
          "type": "drop_item",
          "item": "tconstruct:dragon_scale",
          "count": 6
      }]})

//==========================================================================================================
//======================================= Smeltry Recipes ==================================================
//==========================================================================================================
      event.custom({
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 30,
            "rate": "metal",
            "tag": "forge:molten_gold"
          }
        ],
        "ingredient": {
          "item":"create:crushed_raw_copper"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_copper"
        },
        "temperature": 500,
        "time": 75})
    event.custom({
        "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_copper"
          }
        ],
        "ingredient": {
          "item":"create:crushed_raw_zinc"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_zinc"
        },
        "temperature": 420,
        "time": 70})
    event.custom({  "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_steel"
          }
        ],
        "ingredient": {
          "item": "create:crushed_raw_iron"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_iron"
        },
        "temperature": 800,
        "time": 90})
    event.custom({  "type": "tconstruct:ore_melting",
        "byproducts": [
          {
            "amount": 90,
            "rate": "metal",
            "tag": "forge:molten_cobalt"
          }
        ],
        "ingredient": {
          "item":"create:crushed_raw_gold"
        },
        "rate": "metal",
        "result": {
          "amount": 90,
          "tag": "forge:molten_gold"
        },
        "temperature": 700,
        "time": 85})
//==========================================================================================================
//======================================= Head/Skull Recipes ===============================================
//==========================================================================================================

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{"item":"tconstruct:piglin_brute_head"}],
        "tool": {tag:"forge:tools/knives"},
        "result": [{"item":"irons_spellbooks:hogskin","count":4}]})
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{"item":"minecraft:piglin_head"}],
        "tool": {tag:"forge:tools/knives"},
        "result": [{"item":"irons_spellbooks:hogskin","count":2}]})
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{"item":"tconstruct:zombified_piglin_head"}],
        "tool": {tag:"forge:tools/knives"},
        "result": [{"item":"minecraft:rotten_flesh","count":3}]})
    event.custom({      //For moar flowers!
        "type": "create:crushing",
        "ingredients": [{"item": "minecraft:wither_skeleton_skull"}],
        "processingTime": 800,
        "results": [{"item": "tconstruct:necrotic_bone", "count":2},{"chance": 0.25, "item": "tconstruct:necrotic_bone", "count":2},
                    {"item": "minecraft:wither_rose"}]})

//==========================================================================================================
//======================================== Mega Stones =====================================================
//==========================================================================================================
    event.custom({ //Normal Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_kangaskhanite"}, {"chance": 0.50, "item": "megamons:raw_pidgeotite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:normal_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Fighting Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_mewtwonitex"}, {"chance": 0.50, "item": "megamons:raw_galladite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:fighting_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Grass Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"item": "megamons:raw_venusaurite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:grass_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Electric Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"item": "megamons:raw_ampharosite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:electric_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Ice Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"item": "megamons:raw_glalitite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:ice_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Flying Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_aerodactylite"}, {"chance": 0.50, "item": "megamons:raw_charizarditey"},
        {"chance": 0.50, "item": "megamons:raw_pidgeotite"}, {"chance": 0.50, "item": "megamons:raw_pinsirite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:flying_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Rock Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_aerodactylite"}, {"chance": 0.50, "item": "megamons:raw_tyranitarite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:rock_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Psychic Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_alakazite"}, {"chance": 0.50, "item": "megamons:raw_mewtwonitex"},
                    {"chance": 0.50, "item": "megamons:raw_mewtwonitey"}, {"chance": 0.50, "item": "megamons:raw_slowbronite"},
                    {"chance": 0.50, "item": "megamons:raw_gardevoirite"}, {"chance": 0.50, "item": "megamons:raw_galladite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:psychic_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Bug Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_scizorite"}, {"chance": 0.50, "item": "megamons:raw_pinsirite"},
                    {"chance": 0.50, "item": "megamons:raw_beedrillite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:bug_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Poison Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_venusaurite"}, {"chance": 0.50, "item": "megamons:raw_gengarite"},
                    {"chance": 0.50, "item": "megamons:raw_beedrillite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:poison_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Water Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_blastoisinite"}, {"chance": 0.50, "item": "megamons:raw_gyaradosite"},
                    {"chance": 0.50, "item": "megamons:raw_slowbronite"}, {"chance": 0.50, "item": "megamons:raw_sharpedonite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:water_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Fire Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_charizarditex"}, {"chance": 0.50, "item": "megamons:raw_charizarditey"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:fire_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Dragon Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_charizarditex"}, {"chance": 0.50, "item": "megamons:raw_ampharosite"},
                    {"chance": 0.50, "item": "megamons:raw_garchompite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:dragon_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Ghost Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_gengarite"}, {"chance": 0.50, "item": "megamons:raw_banettite"},
                    {"chance": 0.50, "item": "megamons:raw_sablenite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:ghost_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Dark Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_sharpedonite"}, {"chance": 0.50, "item": "megamons:raw_tyranitarite"},
                    {"chance": 0.50, "item": "megamons:raw_sablenite"}, {"chance": 0.50, "item": "megamons:raw_gyaradosite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:dark_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Steel Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_steelixite"}, {"chance": 0.50, "item": "megamons:raw_mawilite"},
                    {"chance": 0.50, "item": "megamons:raw_scizorite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:steel_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Ground Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_steelixite"}, {"chance": 0.50, "item": "megamons:raw_garchompite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:ground_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
    event.custom({ //Fairy Gem
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "megamons:anistarite_geode_block"},
        "loops": 1,  
        "results": [{"chance": 0.50, "item": "megamons:raw_gardevoirite"}, {"chance": 0.50, "item": "megamons:raw_mawilite"}],
        "sequence":
        [{"type": "create:deploying", 
            "ingredients": [{"item": "megamons:anistarite_geode_block"}, [{"item": "cobblemon:fairy_gem"}]],
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:cutting",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]},

        {"type": "create:pressing",
            "ingredients": [{"item": "megamons:anistarite_geode_block"}], 
            "results": [{"item": "megamons:anistarite_geode_block"}]}],
            "transitionalItem": {"item": "minecraft:amethyst_shard"}})
});
