// priority: 0

ServerEvents.recipes(event => {

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_blaze_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_blaze_t3"},
            {"chance": 0.50, "item": "minecraft:blaze_rod", "count": 4},
            {"chance": 0.025, "item": "tconstruct:blaze_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_wither_skeleton_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_wither_skeleton_t3"},
            {"chance": 0.50, "item": "minecraft:coal", "count": 4},
            {"chance": 0.025, "item": "minecraft:wither_skeleton_skull"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_wither_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_wither_t3"},
            {"chance": 0.25, "item": "minecraft:nether_star"},
            {"chance": 0.025, "item": "tconstruct:necrotic_bone"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_creeper_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_creeper_t3"},
            {"chance": 0.50, "item": "minecraft:gunpowder", "count": 4},
            {"chance": 0.025, "item": "minecraft:creeper_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_enderman_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_enderman_t3"},
            {"chance": 0.50, "item": "minecraft:ender_pearl", "count": 4},
            {"chance": 0.025, "item": "tconstruct:enderman_head"}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_shulker_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_shulker_t3"},
            {"chance": 0.50, "item": "minecraft:shulker_shell", "count": 4},
            {"chance": 0.025, "item": "minecraft:shulker_box"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_witch_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_witch_t3"},
            {"chance": 0.5, "item": "minecraft:glowstone_dust", "count": 4},
            {"chance": 0.5, "item": "minecraft:redstone", "count": 4},
            {"chance": 0.5, "item": "minecraft:stick"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_spider_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_spider_t3"},
            {"chance": 0.50, "item": "minecraft:cobweb", "count": 4},
            {"chance": 0.025, "item": "tconstruct:spider_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_stray_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_stray_t3"},
            {"chance": 0.50, "item": "minecraft:arrow", "count": 4},
            {"chance": 0.025, "item": "tconstruct:stray_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_silverfish_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_silverfish_t3"},
            {"chance": 0.50, "item": "create:experience_nugget", "count": 4},
            {"chance": 0.025, "item": "create:experience_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cave_spider_t3"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cave_spider_t3"},
            {"chance": 0.50, "item": "minecraft:string", "count": 12},
            {"chance": 0.025, "item": "tconstruct:cave_spider_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_ghast_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_ghast_t3"},
            {"chance": 0.50, "item": "minecraft:ghast_tear", "count": 4},
            {"chance": 0.025, "item": "minecraft:fire_charge"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_magma_cube_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_magma_cube_t3"},
            {"chance": 0.50, "item": "minecraft:magma_cream", "count": 4},
            {"chance": 0.025, "item": "minecraft:magma_block"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_drowned_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_drowned_t3"},
            {"chance": 0.50, "item": "create:copper_nugget", "count": 12},
            {"chance": 0.025, "item": "tconstruct:drowned_head"},
            {"chance": 0.005, "item": "minecraft:trident"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_slime_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_slime_t3"},
            {"chance": 0.50, "item": "minecraft:slime_ball", "count": 4},
            {"chance": 0.025, "item": "minecraft:slime_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_phantom_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_phantom_t3"},
            {"chance": 0.50, "item": "minecraft:phantom_membrane", "count": 4},
            {"chance": 0.025, "item": "minecraft:firework_rocket"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_guardian_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_guardian_t3"},
            {"chance": 0.50, "item": "minecraft:prismarine_crystals", "count": 4},
            {"chance": 0.025, "item": "minecraft:sponge"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_elder_guardian_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_elder_guardian_t3"},
            {"chance": 0.50, "item": "minecraft:prismarine_shard", "count": 4},
            {"chance": 0.025, "item": "minecraft:sponge"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_skeleton_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_skeleton_t3"},
            {"chance": 0.50, "item": "minecraft:bone", "count": 4},
            {"chance": 0.025, "item": "minecraft:skeleton_skull"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_zombie_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_zombie_t3"},
            {"chance": 0.50, "item": "minecraft:rotten_flesh", "count": 4},
            {"chance": 0.025, "item": "minecraft:zombie_head"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_piglin_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_piglin_t3"},
            {"chance": 0.50, "item": "minecraft:crying_obsidian", "count": 4},
            {"chance": 0.50, "item": "minecraft:obsidian", "count": 4},
            {"chance": 0.025, "item": "minecraft:piglin_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_piglin_brute_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_piglin_brute_t3"},
            {"chance": 0.50, "item": "minecraft:shroomlight", "count": 4},
            {"chance": 0.025, "item": "tconstruct:piglin_brute_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_zombified_piglin_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_zombified_piglin_t3"},
            {"chance": 0.50, "item": "minecraft:gold_nugget", "count": 8},
            {"chance": 0.025, "item": "tconstruct:zombified_piglin_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_hoglin_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_hoglin_t3"},
            {"chance": 0.50, "item": "minecraft:crimson_fungus", "count": 4},
            {"chance": 0.025, "item": "minecraft:cooked_porkchop"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_ender_dragon_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_ender_dragon_t3"},
            {"chance": 0.50, "item": "minecraft:dragon_breath", "count": 4},
            {"chance": 0.025, "item": "minecraft:dragon_egg"},
            {"chance": 0.01, "item": "minecraft:dragon_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_warden_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_warden_t3"},
            {"chance": 0.50, "item": "minecraft:echo_shard", "count": 4},
            {"chance": 0.025, "item": "deeperdarker:heart_of_the_deep"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_rabbit_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_rabbit_t3"},
            {"chance": 0.50, "item": "minecraft:rabbit", "count": 4},
            {"chance": 0.025, "item": "minecraft:rabbit_hide"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_sheep_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_sheep_t3"},
            {"chance": 0.50, "item": "minecraft:white_wool", "count": 4},
            {"chance": 0.025, "item": "minecraft:cooked_mutton"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_chicken_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_chicken_t3"},
            {"chance": 0.50, "item": "minecraft:feather", "count": 4},
            {"chance": 0.50, "item": "minecraft:egg", "count": 4},
            {"chance": 0.50, "item": "minecraft:chicken", "count": 4}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_pig_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_pig_t3"},
            {"chance": 0.50, "item": "minecraft:porkchop", "count": 4}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cow_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cow_t3"},
            {"chance": 0.50, "item": "minecraft:beef", "count": 4},
            {"chance": 0.50, "item": "minecraft:leather", "count": 4}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_bee_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_bee_t3"},
            {"chance": 0.50, "item": "minecraft:honeycomb", "count": 4},
            {"chance": 0.025, "item": "minecraft:honey_block"}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_allay_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_allay_t3"},
            {"chance": 0.50, "item": "farmersdelight:cake_slice", "count": 4},
            {"chance": 0.025, "item": "farmersdelight:sweet_berry_cheesecake"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_tropical_fish_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_tropical_fish_t3"},
            {"chance": 0.50, "item": "minecraft:tropical_fish", "count": 4},
            {"chance": 0.025, "item": "minecraft:sea_pickle"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_bat_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_bat_t3"},
            {"chance": 0.50, "item": "cobblemon:oran_berry", "count": 4},
            {"chance": 0.025, "item": "cobblemon:roseli_berry"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_axolotl_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_axolotl_t3"},
            {"chance": 0.50, "item": "minecraft:glow_berries", "count": 4},
            {"chance": 0.025, "item": "minecraft:glow_lichen"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_goat_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_goat_t3"},
            {"chance": 0.50, "item": "minecraft:mutton", "count": 4},
            {"chance": 0.025, "item": "minecraft:goat_horn"}
        ]
    });

event.custom({
    "type": "create:crushing",
    "ingredients": [{"item": "kubejs:essence_of_the_cod_t3"}],
    "processingTime": 400,
    "results": [
        {"count": 1, "item": "kubejs:essence_of_the_cod_t3"},
        {"chance": 0.50, "item": "minecraft:cod", "count": 4},
        {"chance": 0.025, "item": "minecraft:seagrass"}
    ]
});

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_salmon_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_salmon_t3"},
            {"chance": 0.50, "item": "minecraft:salmon", "count": 4},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_panda_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_panda_t3"},
            {"chance": 0.50, "item": "minecraft:bamboo", "count": 4},
            {"chance": 0.025, "item": "minecraft:bamboo_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_mooshroom_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_mooshroom_t3"},
            {"chance": 0.50, "item": "minecraft:mushroom_stew", "count": 4},
            {"chance": 0.025, "item": "minecraft:red_mushroom_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_camel_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_camel_t3"},
            {"chance": 0.50, "item": "minecraft:cactus", "count": 4}
        ]
    });
       
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_parrot_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_parrot_t3"},
            {"chance": 0.50, "item": "minecraft:vine", "count": 4},
            {"chance": 0.025, "item": "minecraft:rose_bush"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cat_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cat_t3"},
            {"chance": 0.50, "item": "minecraft:moss_block", "count": 4},
            {"chance": 0.025, "item": "minecraft:sunflower"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_turtle_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_turtle_t3"},
            {"chance": 0.50, "item": "minecraft:scute", "count": 4}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_trader_llama_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_trader_llama_t3"},
            {"chance": 0.50, "item": "minecraft:lead", "count": 4}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_glow_squid_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_glow_squid_t3"},
            {"chance": 0.50, "item": "minecraft:glow_ink_sac", "count": 4},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_squid_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_squid_t3"},
            {"chance": 0.50, "item": "minecraft:ink_sac", "count": 4},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_pufferfish_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_pufferfish_t3"},
            {"chance": 0.50, "item": "minecraft:pufferfish", "count": 4},
            {"chance": 0.025, "item": "minecraft:sea_pickle"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_horse_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_horse_t3"},
            {"chance": 0.50, "item": "minecraft:saddle", "count": 4},
            {"chance": 0.025, "item": "create:super_glue"}
        ]
    }); 

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_snow_golem_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_snow_golem_t3"},
            {"chance": 0.75, "item": "minecraft:snowball", "count": 4},
            {"chance": 0.025, "item": "minecraft:snow_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_donkey_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_donkey_t3"},
            {"chance": 0.50, "item": "minecraft:apple", "count": 4},
            {"chance": 0.025, "item": "create:honeyed_apple"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_mule_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_mule_t3"},
            {"chance": 0.50, "item": "minecraft:wheat", "count": 4},
            {"chance": 0.025, "item": "minecraft:hay_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_dolphin_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_dolphin_t3"},
            {"chance": 0.50, "item": "minecraft:kelp", "count": 4},
            {"chance": 0.025, "item": "minecraft:dried_kelp_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_strider_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_strider_t3"},
            {"chance": 0.50, "item": "minecraft:warped_fungus", "count": 4},
            {"chance": 0.025, "item": "minecraft:leather"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_sniffer_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_sniffer_t3"},
            {"chance": 0.50, "item": "minecraft:moss_block", "count": 4},
            {"chance": 0.025, "item": "minecraft:suspicious_sand"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_polar_bear_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_polar_bear_t3"},
            {"chance": 0.50, "item": "minecraft:blue_ice", "count": 4},
            {"chance": 0.025, "item": "minecraft:ice"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_fox_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_fox_t3"},
            {"chance": 0.50, "item": "minecraft:rabbit_foot", "count": 4},
            {"chance": 0.025, "item": "minecraft:orange_dye"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_frog_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_frog_t3"},
            {"chance": 0.50, "item": "minecraft:ochre_froglight", "count": 4},
            {"chance": 0.50, "item": "minecraft:verdant_froglight", "count": 4},
            {"chance": 0.50, "item": "minecraft:pearlescent_froglight", "count": 4}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_villager_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_villager_t3"},
            {"chance": 0.50, "item": "minecraft:emerald", "count": 4},
            {"chance": 0.025, "item": "minecraft:book"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_iron_golem_t3"}],
        "processingTime": 400,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_iron_golem_t3"},
            {"chance": 0.50, "item": "minecraft:iron_ingot", "count": 4},
            {"chance": 0.025, "item": "minecraft:iron_ingot"}
        ]
    });

});