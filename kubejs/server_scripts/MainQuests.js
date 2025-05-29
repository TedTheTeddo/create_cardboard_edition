// priority: 0

ServerEvents.recipes(event => {
//==========================================================================================================
//======================================== Chapter 1&2 =====================================================
//==========================================================================================================

    //Chapter 1        
    //Scorched Basin
    event.smelting('tconstruct:scorched_basin', 'tconstruct:seared_basin')

    //Minty Colors
    event.smelting('minecraft:blue_dye', 'cobblemon:blue_mint_leaf')
    event.smelting('minecraft:red_dye', 'cobblemon:red_mint_leaf')
    event.smelting('minecraft:green_dye', 'cobblemon:green_mint_leaf')
    event.smelting('minecraft:white_dye', 'cobblemon:white_mint_leaf')
    event.smelting('minecraft:pink_dye', 'cobblemon:pink_mint_leaf')
    event.smelting('minecraft:cyan_dye', 'cobblemon:cyan_mint_leaf')

    //Apricorns
    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:fire_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:red_apricorn"}, {"item": "cobblemon:fire_stone"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:thunder_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:yellow_apricorn"}, {"item": "cobblemon:thunder_stone"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:leaf_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:green_apricorn"}, {"item": "cobblemon:leaf_stone"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:water_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:blue_apricorn"}, {"item": "cobblemon:water_stone"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:dusk_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:pink_apricorn"}, {"item": "cobblemon:dusk_stone"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:moon_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:black_apricorn"}, {"item": "cobblemon:moon_stone"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:ice_stone"}, {"item": "kubejs:pokeball_shell"}],
        "results": [{"item": "cobblemon:white_apricorn"}, {"item": "cobblemon:ice_stone"}]})

    //Apristone
    event.shapeless("kubejs:compressed_apristone", "9x kubejs:apristone")
    event.shapeless("kubejs:double_compressed_apristone", "9x kubejs:compressed_apristone")

    event.shapeless("9x kubejs:apristone", "kubejs:compressed_apristone")
    event.shapeless("9x kubejs:compressed_apristone", "kubejs:double_compressed_apristone")

    event.custom({"type": "create:deploying",
            "ingredients": [{"item": "minecraft:cobblestone"}, {"item": "kubejs:double_compressed_apristone"}],
            "keepHeldItem": true,
            "results": [{"item": "kubejs:apristone"}]})

    //Poke_Shell
    event.custom({"type": "create:milling",
        "ingredients": [{"item": "kubejs:apristone"}],
        "results": [{"item": "2x kubejs:pokeball_shell"}]})

    event.recipes.create.milling(Item.of('create:cardboard_package_10x12', '{Items:{Items:[{Count:18b,Slot:0,id:"kubejs:pokeball_shell"}],Size:9}}'), ("kubejs:compressed_apristone"))
    event.recipes.create.milling(Item.of('create:cardboard_package_12x12', '{Items:{Items:[{Count:64b,Slot:0,id:"kubejs:pokeball_shell"},{Count:64b,Slot:1,id:"kubejs:pokeball_shell"},{Count:34b,Slot:2,id:"kubejs:pokeball_shell"}],Size:9}}'), ("kubejs:double_compressed_apristone"))

    //Pokeball Shipment
    event.recipes.createSequencedAssembly(
    [
        Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"cobblemon:relic_coin_pouch"}],Size:9}}').withChance(50.0),
		Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_saw"}],Size:9}}').withChance(8.0), 
		Item.of('create:cardboard_package_12x12', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_drill"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_plough"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_roller"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_10x12', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_harvester"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_12x12', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_mixer"}],Size:9}}').withChance(8.0),
        Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_press"}],Size:9}}').withChance(8.0)
    ], 
        
        "create:cardboard_block",
        [
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:poke_ball",]),
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:citrine_ball",]),
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:verdant_ball",]),
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:azure_ball",]),
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:roseate_ball",]),
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:slate_ball",]),
            event.recipes.createDeploying("create:cardboard_package_10x8", ["create:cardboard_package_10x8", "cobblemon:premier_ball",]),
        ]  )
            .transitionalItem("create:cardboard_package_10x8")
            .loops(1);


//==========================================================================================================
//======================================== Chapter 3 =======================================================
//==========================================================================================================

    event.remove({id: "tconstruct:smeltery/melting/metal/gold/enchanted_apple"})
    
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:cardboard_block"}, "loops": 1,  
        "results": [                
            {"chance": 0.50, "item": "cobblemon:normal_gem"},
            {"chance": 0.50, "item": "cobblemon:fire_gem"},
            {"chance": 0.50, "item": "cobblemon:water_gem"},
            {"chance": 0.50, "item": "cobblemon:grass_gem"},
            {"chance": 0.50, "item": "cobblemon:electric_gem"},
            {"chance": 0.50, "item": "cobblemon:ice_gem"},
            {"chance": 0.50, "item": "cobblemon:fighting_gem"},
            {"chance": 0.50, "item": "cobblemon:poison_gem"},
            {"chance": 0.50, "item": "cobblemon:ground_gem"},
            {"chance": 0.50, "item": "cobblemon:flying_gem"},
            {"chance": 0.50, "item": "cobblemon:psychic_gem"},
            {"chance": 0.50, "item": "cobblemon:bug_gem"},
            {"chance": 0.50, "item": "cobblemon:rock_gem"},
            {"chance": 0.50, "item": "cobblemon:ghost_gem"},
            {"chance": 0.50, "item": "cobblemon:dragon_gem"},
            {"chance": 0.50, "item": "cobblemon:dark_gem"},
            {"chance": 0.50, "item": "cobblemon:steel_gem"},
            {"chance": 0.50, "item": "cobblemon:fairy_gem"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "create:cardboard_package_10x12"}, [{"item": "cobblemon:relic_coin"}]],
            "results": [{"item": "create:cardboard_package_10x12"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "create:cardboard_package_10x12"}, [{"item": "minecraft:enchanted_golden_apple"}]],
            "results": [{"item": "create:cardboard_package_10x12"}]}, 
        {"type": "create:pressing", 
            "ingredients": [{"item": "create:cardboard_package_10x12"}], 
            "results": [{"item": "create:cardboard_package_10x12"}]}],
        "transitionalItem": {"item": "create:cardboard_package_10x12"}})


    //Black Tumblestone -- move to CreateXCobblemon later.
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "cobblemon:black_tumblestone"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "cobblemon:small_budding_black_tumblestone"}]});

    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "cobblemon:small_budding_black_tumblestone"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "cobblemon:medium_budding_black_tumblestone"}]});
      
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "cobblemon:medium_budding_black_tumblestone"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "cobblemon:large_budding_black_tumblestone"}]});
      
    event.custom({
        "type": "create:filling",
        "ingredients": [{"item": "cobblemon:large_budding_black_tumblestone"}, {"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "cobblemon:black_tumblestone_cluster"}]});

    event.custom({"type": "create:milling", 
        "ingredients": [{"item": "cobblemon:black_tumblestone_cluster"}],
        "results": [{"item": "4x cobblemon:black_tumblestone"}]})

    //Thunder Stone Automation
    event.custom({"type": "create:crushing", 
        "ingredients": [{"item": "cobblemon:thunder_stone"}],
        "results": [{"item": "minecraft:raw_gold"}, {"chance": 0.75, "item": "minecraft:sand"}]})

    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "cobblemon:black_tumblestone"}, {"item": "irons_spellbooks:lightning_bottle"}],
        "results": [{"item": "cobblemon:thunder_stone"}]})
 
    event.shapeless("minecraft:enchanted_golden_apple", ["cobblemon:leftovers", "minecraft:raw_gold"])   

    //Alternative Cake Automation
    event.custom({"type": "create:compacting",
        "ingredients": [{"item": "minecraft:egg"}, {"item": "create:dough"},  {"item": "minecraft:sugar"}],
        "results": [{"item": "minecolonies:cake_batter"}]})

    event.remove({id: 'farmersdelight:cake_from_slices'})
 

//==========================================================================================================
//======================================== Chapter 4 =======================================================
//==========================================================================================================


//Tumblestone
event.custom({
    "type": "create:filling",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"amount": 500, "fluid": "minecraft:lava", "nbt": {}}],
    "results": [{"item": "cobblemon:small_budding_tumblestone"}]});

event.custom({
    "type": "create:filling",
    "ingredients": [{"item": "cobblemon:small_budding_tumblestone"}, {"amount": 500, "fluid": "minecraft:lava", "nbt": {}}],
    "results": [{"item": "cobblemon:medium_budding_tumblestone"}]});
  
event.custom({
    "type": "create:filling",
    "ingredients": [{"item": "cobblemon:medium_budding_tumblestone"}, {"amount": 500, "fluid": "minecraft:lava", "nbt": {}}],
    "results": [{"item": "cobblemon:large_budding_tumblestone"}]});
  
event.custom({
    "type": "create:filling",
    "ingredients": [{"item": "cobblemon:large_budding_tumblestone"}, {"amount": 500, "fluid": "minecraft:lava", "nbt": {}}],
    "results": [{"item": "cobblemon:tumblestone_cluster"}]});

event.custom({"type": "create:milling", 
    "ingredients": [{"item": "cobblemon:tumblestone_cluster"}],
    "results": [{"item": "4x cobblemon:tumblestone"}]})


//Ancient Balls

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:poke_ball"}],
    "results": [{"item": "cobblemon:ancient_poke_ball"}]})

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:citrine_ball"}],
    "results": [{"item": "cobblemon:ancient_citrine_ball"}]})

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:verdant_ball"}],
    "results": [{"item": "cobblemon:ancient_verdant_ball"}]})

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:azure_ball"}],
    "results": [{"item": "cobblemon:ancient_azure_ball"}]})

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:roseate_ball"}],
    "results": [{"item": "cobblemon:ancient_roseate_ball"}]})

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:slate_ball"}],
    "results": [{"item": "cobblemon:ancient_slate_ball"}]})

event.custom({"type": "create:compacting",
    "ingredients": [{"item": "cobblemon:tumblestone"}, {"item": "cobblemon:premier_ball"}],
    "results": [{"item": "cobblemon:ancient_ivory_ball"}]})

    //Ancient Pokeball Shipment
    event.recipes.createSequencedAssembly(
    [
        Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:8b,Slot:0,id:"minecraft:suspicious_sand"}],Size:9}}').withChance(50.0),
		Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:8b,Slot:0,id:"minecraft:suspicious_gravel"}],Size:9}}').withChance(50.0), 
		Item.of('create:cardboard_package_12x12', '{Items:{Items:[{Count:1b,Slot:0,id:"create:stockpike_switch"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"create:mechanical_arm"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:1b,Slot:0,id:"create:content_observer"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_10x12', '{Items:{Items:[{Count:4b,Slot:0,id:"create:electron_tube"}],Size:9}}').withChance(8.0),
		Item.of('create:cardboard_package_12x12', '{Items:{Items:[{Count:4b,Slot:0,id:"create:brass_casing"}],Size:9}}').withChance(8.0),
        Item.of('create:cardboard_package_10x8', '{Items:{Items:[{Count:4b,Slot:0,id:"create:stock_link"}],Size:9}}').withChance(8.0)
    ], 
        
        "create:cardboard_block",
        [
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_poke_ball",]),
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_citrine_ball",]),
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_verdant_ball",]),
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_azure_ball",]),
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_roseate_ball",]),
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_slate_ball",]),
            event.recipes.createDeploying("create:bound_cardboard_block", ["create:bound_cardboard_block", "cobblemon:ancient_ivory_ball",]),
        ]  )
            .transitionalItem("create:bound_cardboard_block")
            .loops(1);

//Sus Washing
event.custom({"type": "create:splashing", 
    "ingredients": [{"item": "minecraft:suspicious_gravel"}],
    "results": [
        {"chance": 0.75, "item": "create:asurine"}, 
        {"chance": 0.10, "item": "minecraft:prize_pottery_sherd"},
        {"chance": 0.10, "item": "minecraft:danger_pottery_sherd"},
        {"chance": 0.10, "item": "minecraft:friend_pottery_sherd"},
        {"chance": 0.10, "item": "cobblemon:suspicious_sherd"},
        {"chance": 0.10, "item": "cobblemon:nostalgic_sherd"},
        {"chance": 0.10, "item": "minecraft:mourner_pottery_sherd"},
        {"chance": 0.10, "item": "minecraft:angler_pottery_sherd"}
    ]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:prize_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:cover_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:danger_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:jaw_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:friend_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:plume_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "cobblemon:suspicious_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:fossilized_drake"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "cobblemon:nostalgic_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:fossilized_dino"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:mourner_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:fossilized_bird"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:angler_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:fossilized_fish"}]})

event.custom({"type": "create:splashing", 
    "ingredients": [{"item": "minecraft:suspicious_sand"}],
    "results": [
        {"chance": 0.75, "item": "create:asurine"}, 
        {"chance": 0.10, "item": "cobblemon:helix_sherd"},
        {"chance": 0.10, "item": "cobblemon:dome_sherd"},
        {"chance": 0.10, "item": "minecraft:heart_pottery_sherd"},
        {"chance": 0.10, "item": "minecraft:heartbreak_pottery_sherd"},
        {"chance": 0.10, "item": "cobblemon:capture_sherd"},
        {"chance": 0.10, "item": "minecraft:snort_pottery_sherd"},
        {"chance": 0.10, "item": "cobblemon:bygone_sherd"}
    ]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "cobblemon:helix_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:helix_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "cobblemon:dome_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:dome_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:heart_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.05, "item": "cobblemon:root_fossil"}, {"chance": 0.05, "item": "cobblemon:claw_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:heartbreak_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:old_amber_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "cobblemon:capture_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:armor_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "minecraft:snort_pottery_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:skull_fossil"}]})

    event.custom({"type": "create:milling",
        "ingredients": [{"item": "cobblemon:bygone_sherd"}],
        "results": [{"chance": 0.90, "item": "minecraft:terracotta"}, {"chance": 0.10, "item": "cobblemon:sail_fossil"}]})


//==========================================================================================================
//======================================== Chapter Green ===================================================
//==========================================================================================================

    //Raw Iron & Raw Zinc
    //added as datapack event.recipes.create.mixing('cobblemon:medicinal_brew', ['cobblemon:heal_powder', 'minecraft:glass_bottle', Fluid.of(('minecraft:water'), 500) ])
    
    event.recipes.create.crushing([Item.of('create:raw_zinc'), 'minecraft:glass'], 'cobblemon:zinc')
    event.recipes.create.crushing([Item.of('minecraft:raw_iron'), 'minecraft:glass'], 'cobblemon:iron')

    //Smeltery
    //event.remove({id: "tconstruct:smeltery/casting/seared/smeltery_controller"})
    
    //Chest
    event.recipes.createCompacting("minecraft:chest", "8x #minecraft:slabs")
    event.remove({id: "cobblemon:green_gilded_chest"})

    //Computer
    event.recipes.createCompacting('computercraft:computer_normal', ['minecraft:crafting_table', '8x #forge:stone' ])

    //Smooth Rock
    event.recipes.create.sandpaper_polishing('cobblemon:smooth_rock', 'cobblemon:hard_stone')

    //Damp Rock
    //added as datapack event.recipes.create.mixing('cobblemon:damp_rock', ['cobblemon:hard_stone', 'minecraft:prismarine_shard', Fluid.of(('minecraft:water'), 500) ])

    //Heat Rock
    event.recipes.createCompacting('cobblemon:heat_rock', ['cobblemon:hard_stone', 'minecraft:quartz']).heated()

    //Icy Rock
    event.recipes.createCompacting('cobblemon:icy_rock', ['cobblemon:hard_stone', 'minecraft:blue_ice' ])

    //Snow Automation
    //added as datapack event.recipes.createCompacting(['minecraft:snow_block', 'minecraft:snowball'], ['minecraft:snowball', Fluid.of(('minecraft:water'), 500) ])

//==========================================================================================================
//======================================== Balances  =======================================================
//==========================================================================================================

    //Netherite Removal
    event.remove({id: "minecraft:netherite_ingot"})
    event.remove({id: "tconstruct:common/materials/netherite_ingot_from_nuggets"})
    event.remove({id: "tconstruct:smeltery/casting/metal/netherite/ingot_gold_cast"})
    event.remove({id: "tconstruct:smeltery/casting/metal/netherite/ingot_sand_cast"})

    //Magmazier
    event.remove({id: "cobblemon:magmarizer"})


//==========================================================================================================
//======================================== Ender Eyes     ==================================================
//==========================================================================================================

    event.remove({id: "minecraft:ender_eye"})
    event.recipes.createSequencedAssembly(["minecraft:ender_eye",], "minecraft:ender_pearl",
        [
            event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "computercraft:computer_normal",]),
            event.recipes.createPressing("minecraft:ender_pearl", ["minecraft:ender_pearl"]),
        ]  )
            .transitionalItem("minecraft:ender_pearl")
            .loops(1);

    event.recipes.createSequencedAssembly(["kubejs:green_ender_eye",], "minecraft:ender_pearl",
    [
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:green_dye",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:verdant_ball",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:smooth_rock",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:green_gilded_chest",])
    ]  )
        .transitionalItem("minecraft:ender_pearl")
        .loops(1);

    event.recipes.createSequencedAssembly(["kubejs:red_ender_eye",], "minecraft:ender_pearl",
    [
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:red_dye",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:roseate_ball",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:heat_rock",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:magmarizer",])
    ]  )
        .transitionalItem("minecraft:ender_pearl")
        .loops(1);

    event.recipes.createSequencedAssembly(["kubejs:blue_ender_eye",], "minecraft:ender_pearl",
    [
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:blue_dye",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:azure_ball",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:damp_rock",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:cod",])
    ]  )
        .transitionalItem("minecraft:ender_pearl")
        .loops(1);

    event.recipes.createSequencedAssembly(["kubejs:purple_ender_eye",], "minecraft:ender_pearl",
    [
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:purple_dye",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:premier_ball",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "cobblemon:icy_rock",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:amethyst_shard",]),
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:ender_pearl", "minecraft:cod",])
    ]  )
        .transitionalItem("minecraft:ender_pearl")
        .loops(1);
});

//Tags
ServerEvents.tags('item', event => {
    event.add('forge:dough', 'create:dough')
});

