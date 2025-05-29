// priority: 0
Platform.mods.kubejs.name = 'Create Cardboard Edition'

ServerEvents.recipes(event => {
//==========================================================================================================
//========================================== Mob Drops =====================================================
//==========================================================================================================

//Raw Chicken
event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:wheat_flour"}, "loops": 1,  "results": [{ "item": "minecraft:chicken"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:wheat"}, [{"item": "minecraft:wheat"}]],
            "results": [{"item": "minecraft:wheat"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "minecraft:wheat"}, [{"item": "minecraft:rotten_flesh"}]],
            "results": [{"item": "minecraft:wheat"}]}, 
        {"type": "create:pressing", "ingredients": [{"item": "minecraft:wheat"}], "results": [{"item": "minecraft:wheat"}]}],
        "transitionalItem": {"item": "minecraft:wheat"}})

//Raw Beef
event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:wheat_flour"}, "loops": 1,  "results": [{ "item": "minecraft:beef"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:carrot"}, [{"item": "minecraft:carrot"}]],
            "results": [{"item": "minecraft:carrot"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "minecraft:carrot"}, [{"item": "minecraft:rotten_flesh"}]],
            "results": [{"item": "minecraft:carrot"}]}, 
        {"type": "create:pressing", 
            "ingredients": [{"item": "minecraft:carrot"}], 
            "results": [{"item": "minecraft:carrot"}]}],
        "transitionalItem": {"item": "minecraft:carrot"}})

//Raw Porkchop
event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:wheat_flour"}, "loops": 1,  "results": [{ "item": "minecraft:porkchop"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:potato"}, [{"item": "minecraft:potato"}]],
            "results": [{"item": "minecraft:potato"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "minecraft:potato"}, [{"item": "minecraft:rotten_flesh"}]],
            "results": [{"item": "minecraft:potato"}]}, 
        {"type": "create:pressing", "ingredients": [{"item": "minecraft:potato"}], "results": [{"item": "minecraft:potato"}]}],
        "transitionalItem": {"item": "minecraft:potato"}})

//Splashing
    event.custom({"type": "create:splashing", //Mob Drop: Feather & Rabbit Foot
        "ingredients": [{"item": "minecraft:dirt"}],
        "results": [{"chance": 0.50, "item": "minecraft:feather"}, {"chance": 0.01, "item": "minecraft:rabbit_foot"}]})

    event.custom({"type": "create:splashing", //Mob Drop: Rotten Flesh
        "ingredients": [{"item": "minecraft:mud"}],
        "results": [{"item": "minecraft:rotten_flesh"}]})

    event.custom({"type": "create:splashing", //Mob Drop: Spider Eye / Ender Eye
        "ingredients": [{"item": "minecraft:soul_soil"}],
        "results": [{"chance": 0.25, "item": "minecraft:spider_eye"}, {"chance": 0.25, "item": "minecraft:ender_pearl"}]})

//Milling
    event.custom({"type": "create:milling", //Mob Drop: String
        "ingredients": [{"item": "minecraft:leather"}],
        "results": [{"item": "2x minecraft:string"}]})

    event.custom({"type": "create:milling", //Mob Drop: Eggs
        "ingredients": [{"item": "minecraft:hay_block"}],
        "results": [{"item": "egg"}]})

    event.custom({"type": "create:milling", //Mob Drop: Phantom Membrane
        "ingredients": [{"item": "minecraft:sculk"}],
        "results": [{"chance": 0.50, "item": "phantom_membrane"}]})

    event.custom({"type": "create:milling", //Mob Drop: Phantom Membrane
        "ingredients": [{"item": "minecraft:echo_shard"}],
        "results": [{"chance": 0.50, "item": "amethyst_shard"}]})


//Compacting
    event.custom({"type": "create:compacting", //Mob Drop: Bone
        "ingredients": [{"item": "minecraft:bone_meal"}, {"item": "minecraft:bone_meal"}, {"item": "minecraft:bone_meal"}, {"item": "minecraft:bone_meal"}],
        "results": [{"item": "minecraft:bone"}]})

    event.custom({"type": "create:compacting", //Mob Drop: Sculk
        "ingredients": [{"item": "create:experience_nugget"}, {"item": "minecraft:sculk"}],
        "results": [{"item": "2x minecraft:sculk"}]})

    event.custom({"type": "create:compacting", //Mob Drop: Gunpowder
        "ingredients": [{"item": "minecraft:flint"}, {"item": "minecraft:dried_kelp"}],
        "results": [{"item": "minecraft:gunpowder"}]})

    event.custom({"type": "create:compacting", //Mob Drop: Blaze Powder
        "heatRequirement": "heated",
        "ingredients": [{"item": "minecraft:redstone"}],
        "results": [{"item": "minecraft:blaze_powder"}]})

    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:sugar"}, {"item": "create:pulp"}],
        "results": [{"item": "minecraft:honeycomb"}]})

//SandPaper Polishing
    event.custom({"type": "create:sandpaper_polishing", //Mob Drop: Ghast Tears
        "ingredients": [{"item": "minecraft:prismarine"}],
        "results": [{"item": "minecraft:ghast_tear"}]})

//Shapeless
    event.shapeless("minecraft:ink_sac", ["minecraft:glass_bottle", 'minecraft:black_dye']) //Ink Sac
    event.shapeless('minecraft:experience_bottle', ['minecraft:glass_bottle', 'create:experience_nugget']) //Bottle of Enchanting

//Smoking
    event.smoking('minecraft:leather', 'minecraft:rotten_flesh').xp(0.10) //Rotten Flesh -> Leather

//Deploying
    event.custom({"type": "create:deploying",
            "ingredients": [{"item": "create:empty_blaze_burner"}, {"item": "kubejs:essence_of_the_blaze_t1"}],
            "keepHeldItem": true,
            "results": [{"item": "create:blaze_burner"}]})

    event.custom({"type": "create:deploying",
            "ingredients": [{"item": "create:empty_blaze_burner"}, {"item": "kubejs:essence_of_the_blaze_t2"}],
            "keepHeldItem": true,
            "results": [{"item": "create:blaze_burner"}]})

    event.custom({"type": "create:deploying",
            "ingredients": [{"item": "create:empty_blaze_burner"}, {"item": "kubejs:essence_of_the_blaze_t3"}],
            "keepHeldItem": true,
            "results": [{"item": "create:blaze_burner"}]})

    event.custom({"type": "create:deploying",
            "ingredients": [{"item": "create:empty_blaze_burner"}, {"item": "kubejs:essence_of_the_blaze_t4"}],
            "keepHeldItem": true,
            "results": [{"item": "create:blaze_burner"}]})
//==========================================================================================================
//========================================== Coral Automations =============================================
//==========================================================================================================

//Sponge
    event.custom({"type": "create:splashing", //Sponge -> Wet Sponge
        "ingredients": [{"item": "minecraft:sponge"}],
        "results": [{"item": "minecraft:wet_sponge"}]});

    event.custom({
        "type": "create:filling", //Sponge -> Wet Sponge
        "ingredients": [{"item": "minecraft:sponge"}, {"amount": 250, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "minecraft:wet_sponge"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:salmon"}], //Salmon -> Sponge gamble
        "results": [{"chance": 0.10, "item": "minecraft:sponge"}, {"item": "minecraft:bone_meal"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:cod"}], //Cod -> Sponge gamble
        "results": [{"chance": 0.10, "item": "minecraft:sponge"}, {"item": "minecraft:bone_meal"}]});

    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:wet_sponge"}],
        "results": [{"item": "minecraft:sponge"}, {"chance": 0.25, "item": "minecraft:pufferfish"}, {"chance": 0.25, "item": "minecraft:tropical_fish"}, {"chance": 0.25, "item": "minecraft:nautilus_shell"}]})

//Basic Coral
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:tropical_fish"}],
        "results": [
            {"chance": 0.50, "item": "minecraft:dead_tube_coral"},
            {"chance": 0.50, "item": "minecraft:dead_brain_coral"},
            {"chance": 0.50, "item": "minecraft:dead_bubble_coral"},
            {"chance": 0.50, "item": "minecraft:dead_fire_coral"},
            {"chance": 0.50, "item": "minecraft:dead_horn_coral"}
        ]
    });
    event.custom({
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:pufferfish"}],
        "results": [
            {"chance": 0.50, "item": "minecraft:dead_tube_coral"},
            {"chance": 0.50, "item": "minecraft:dead_brain_coral"},
            {"chance": 0.50, "item": "minecraft:dead_bubble_coral"},
            {"chance": 0.50, "item": "minecraft:dead_fire_coral"},
            {"chance": 0.50, "item": "minecraft:dead_horn_coral"}
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
        "results": [{"item": `minecraft:${coral.type}_coral`}]});
        
    // Shapeless recipe to create coral blocks
    event.shapeless(`minecraft:${coral.type}_coral_block`, [`4x minecraft:${coral.type}_coral`]);

    // Stonecutting recipe to create coral fans
    event.stonecutting(`minecraft:${coral.type}_coral_fan`, `minecraft:${coral.type}_coral`);

    // Milling recipe to process coral blocks into prismarine shards and dye
    event.custom({"type": "create:milling",
        "ingredients": [{"item":  `minecraft:${coral.type}_coral_block`}], 
        "results": [{"item": "minecraft:prismarine_shard"}, {"item": `minecraft:${coral.dye}_dye`}]});
}

//Prismarine Crystals
    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:amethyst_shard"}, {"item": "minecraft:prismarine_shard"}],
        "results": [{"item": "prismarine_crystals"}]})

//Emeralds
    event.custom({"type": "create:compacting", 
        "ingredients": [{"item": "minecraft:prismarine_shard"}, {"item": "minecraft:prismarine_shard"}, {"item": "minecraft:prismarine_shard"}, {"item": "minecraft:prismarine_shard"}],
        "results": [{"item": "minecraft:emerald"}]})

//Heart of the Sea
event.recipes.create.mechanical_crafting('minecraft:heart_of_the_sea', [
    '  A A  ',
    ' AAAAA ',
    ' AAAAA ',
    '  AAA  ',
    '   A   '
  ], {
    A: 'minecraft:prismarine_crystals',
  })

//==========================================================================================================
//========================================== Frog Automations ==============================================
//==========================================================================================================
    
    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "minecraft:egg"},{"amount": 500,"fluid": "minecraft:water", "nbt": {}}],
        "results": [{ "item": "minecraft:frogspawn"}]});
      
    event.custom({"type": "create:milling",
        "ingredients": [{"item":  "minecraft:ochre_froglight"}], 
        "results": [{"item": "minecraft:glowstone"}, {"item": "minecraft:yellow_dye"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item":  "minecraft:verdant_froglight"}], 
        "results": [{"item": "minecraft:glowstone"}, {"item": "minecraft:lime_dye"}]});

    event.custom({"type": "create:milling",
        "ingredients": [{"item":  "minecraft:pearlescent_froglight"}], 
        "results": [{"item": "minecraft:glowstone"}, {"item": "minecraft:pink_dye"}]});

//==========================================================================================================
//====================================== Amethyst Automations ==============================================
//==========================================================================================================  

    event.shapeless('minecraft:small_amethyst_bud',  ['minecraft:amethyst_shard', 'minecraft:sand'])
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:small_amethyst_bud"}, {"amount": 1000, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "minecraft:medium_amethyst_bud"}]});
      
       event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:medium_amethyst_bud"}, {"amount": 1000, "fluid": "minecraft:water", "nbt": {}}], 
        "results": [{"item": "minecraft:large_amethyst_bud"}]});
      
       event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "minecraft:large_amethyst_bud"}, {"amount": 1000, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "minecraft:amethyst_cluster"}]});
      

//==========================================================================================================
//====================================== Oxidization          ==============================================
//==========================================================================================================  

    //Oxizidation
    event.stonecutting('minecraft:exposed_copper',         'minecraft:copper_block')
    event.stonecutting('minecraft:weathered_copper',       'minecraft:copper_block')
    event.stonecutting('minecraft:oxidized_copper',        'minecraft:copper_block')
    event.stonecutting('minecraft:waxed_exposed_copper',   'minecraft:copper_block')
    event.stonecutting('minecraft:waxed_weathered_copper', 'minecraft:copper_block')
    event.stonecutting('minecraft:waxed_oxidized_copper',  'minecraft:copper_block')

    event.stonecutting('create:exposed_copper_shingles',    'create:copper_shingles')
    event.stonecutting('create:exposed_copper_tiles',       'create:copper_tiles')
    event.stonecutting('create:weathered_copper_shingles',  'create:copper_shingles')
    event.stonecutting('create:weathered_copper_tiles',      'create:copper_tiles')
    event.stonecutting('create:oxidized_copper_shingles',  'create:copper_shingles')
    event.stonecutting('create:oxidized_copper_tiles',      'create:copper_tiles')

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
        {"chance": 0.0625, "item": "minecraft:music_disc_13"},
        {"chance": 0.0625, "item": "minecraft:music_disc_cat"},
        {"chance": 0.0625, "item": "minecraft:music_disc_blocks"},
        {"chance": 0.0625, "item": "minecraft:music_disc_chirp"},
        {"chance": 0.0625, "item": "minecraft:music_disc_far"},
        {"chance": 0.0625, "item": "minecraft:music_disc_mall"},
        {"chance": 0.0625, "item": "minecraft:music_disc_mellohi"},
        {"chance": 0.0625, "item": "minecraft:music_disc_stal"},
        {"chance": 0.0625, "item": "minecraft:music_disc_strad"},
        {"chance": 0.0625, "item": "minecraft:music_disc_ward"},
        {"chance": 0.0625, "item": "minecraft:music_disc_11"},
        {"chance": 0.0625, "item": "minecraft:music_disc_wait"},
        {"chance": 0.0625, "item": "minecraft:music_disc_otherside"},
        {"chance": 0.0625, "item": "minecraft:music_disc_5"},
        {"chance": 0.0625, "item": "minecraft:music_disc_pigstep"},
        {"chance": 0.0625, "item": "minecraft:music_disc_relic"}
    ]
});

//==========================================================================================================
//========================================== Flowers         ==============================================
//==========================================================================================================

event.custom({"type": "create:milling", 
    "ingredients": [{"item": "minecraft:dirt"}],
    "results": [
        {"chance": 0.1, "item": "minecraft:dandelion"},
        {"chance": 0.1, "item": "minecraft:poppy"},
        {"chance": 0.1, "item": "minecraft:dandelion"},
        {"chance": 0.1, "item": "minecraft:blue_orchid"},
        {"chance": 0.1, "item": "minecraft:allium"},
        {"chance": 0.1, "item": "minecraft:azure_bluet"},
        {"chance": 0.1, "item": "minecraft:red_tulip"},
        {"chance": 0.1, "item": "minecraft:orange_tulip"},
        {"chance": 0.1, "item": "minecraft:white_tulip"},
        {"chance": 0.1, "item": "minecraft:pink_tulip"},
        {"chance": 0.1, "item": "minecraft:oxeye_daisy"},
        {"chance": 0.1, "item": "minecraft:cornflower"},
        {"chance": 0.1, "item": "minecraft:lily_of_the_valley"}
    ]})

//==========================================================================================================
//==========================================      MOSSY       ==============================================
//==========================================================================================================

event.custom({"type": "create:splashing", 
    "ingredients": [{"item": "minecraft:cobblestone"}],
    "results": [{"item": "minecraft:mossy_cobblestone"}]})

event.custom({"type": "create:splashing", 
    "ingredients": [{"item": "minecraft:stone_bricks"}],
    "results": [{"item": "minecraft:mossy_stone_bricks"}]})

event.custom({
    "type": "create:compacting",
    "ingredients": [{"tag": "minecraft:leaves"}, {"tag": "minecraft:leaves"}, {"tag": "minecraft:leaves"}, {"tag": "minecraft:leaves"}],
    "results": [{"item": "minecraft:moss_block"}]});  


//==========================================================================================================
//========================================== Balances & Fixes ==============================================
//==========================================================================================================

//Duplicates
event.remove({id: 'create:crushing/asurine_recycling'})
event.remove({id: 'create:crushing/crimsite_recycling'})
event.remove({id: 'create:crushing/veridium_recycling'})
event.remove({id: 'create:crushing/ochrum_recycling'})
event.remove({id: 'create:crushing/diorite_recycling'})
event.remove({id: 'create:milling/gravel'})

event.custom({"type": "create:milling", 
    "ingredients": [{"item": "minecraft:gravel"}],
    "results": [
        {"chance": 0.25, "item": "minecraft:flint"},
        {"chance": 0.25, "item": "minecraft:sand"},
    ]})

event.custom({"type": "create:milling", 
    "ingredients": [{"item": "minecraft:diorite"}],
    "results": [
        {"chance": 0.25, "item": "minecraft:quartz"}
    ]})

event.custom({
    "type": "create:compacting",
    "ingredients": [{"amount": 500, "fluid": "minecraft:milk", "nbt": {}},{"item": "minecraft:stone"}],
    "results": [{"item": "minecraft:calcite"}]});  
  
event.custom({
    "type": "create:compacting",
    "ingredients": [{ "amount": 100, "fluid": "minecraft:lava", "nbt": {}}, {"item": "create:cinder_flour"}],
    "results": [{"item": "minecraft:netherrack"}]});  

event.custom({
  "type": "create:mixing",
  "ingredients": [{"item": "minecraft:snowball"},{"item": "minecraft:glass_bottle"},{"amount": 500,"fluid": "minecraft:water","nbt": {}}],
  "results": [{"item": "minecraft:snow_block"},{"item": "minecraft:snowball"}]});

event.stonecutting('minecraft:dirt',  'minecraft:coarse_dirt')
event.recipes.create.mixing('4x minecraft:coarse_dirt', ['2x minecraft:dirt','2x minecraft:gravel'])

});


