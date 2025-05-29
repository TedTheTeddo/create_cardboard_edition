// priority: 0

ServerEvents.recipes(event => {

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_wither_skeleton_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_wither_skeleton_t1"},
            {"chance": 0.5, "item": "minecraft:coal"},
            {"chance": 0.025, "item": "minecraft:wither_skeleton_skull"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_wither_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_wither_t1"},
            {"chance": 0.25, "item": "minecraft:nether_star"},
            {"chance": 0.025, "item": "tconstruct:necrotic_bone"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_blaze_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_blaze_t1"},
            {"chance": 0.50, "item": "minecraft:blaze_rod"},
            {"chance": 0.025, "item": "tconstruct:blaze_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_creeper_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_creeper_t1"},
            {"chance": 0.50, "item": "minecraft:gunpowder"},
            {"chance": 0.025, "item": "minecraft:creeper_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_enderman_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_enderman_t1"},
            {"chance": 0.50, "item": "minecraft:ender_pearl"},
            {"chance": 0.025, "item": "tconstruct:enderman_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_shulker_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_shulker_t1"},
            {"chance": 0.50, "item": "minecraft:shulker_shell"},
            {"chance": 0.025, "item": "minecraft:shulker_box"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_witch_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_witch_t1"},
            {"chance": 0.5, "item": "minecraft:glowstone_dust"},
            {"chance": 0.5, "item": "minecraft:redstone"},
            {"chance": 0.5, "item": "minecraft:stick"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_husk_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_husk_t1"},
            {"chance": 0.50, "item": "minecraft:paper"},
            {"chance": 0.025, "item": "tconstruct:husk_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_spider_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_spider_t1"},
            {"chance": 0.50, "item": "minecraft:cobweb"},
            {"chance": 0.025, "item": "tconstruct:spider_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_stray_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_stray_t1"},
            {"chance": 0.50, "item": "minecraft:arrow"},
            {"chance": 0.025, "item": "tconstruct:stray_head"}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_silverfish_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_silverfish_t1"},
            {"chance": 0.50, "item": "create:experience_nugget"},
            {"chance": 0.025, "item": "create:experience_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cave_spider_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cave_spider_t1"},
            {"chance": 0.50, "item": "3x minecraft:string"},
            {"chance": 0.025, "item": "tconstruct:cave_spider_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_ghast_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_ghast_t1"},
            {"chance": 0.50, "item": "minecraft:ghast_tear"},
            {"chance": 0.025, "item": "minecraft:fire_charge"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_magma_cube_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_magma_cube_t1"},
            {"chance": 0.50, "item": "minecraft:magma_cream"},
            {"chance": 0.025, "item": "minecraft:magma_block"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_drowned_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_drowned_t1"},
            {"chance": 0.50, "item": "3x create:copper_nugget"},
            {"chance": 0.025, "item": "tconstruct:drowned_head"},
            {"chance": 0.005, "item": "minecraft:trident"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_slime_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_slime_t1"},
            {"chance": 0.50, "item": "minecraft:slime_ball"},
            {"chance": 0.025, "item": "minecraft:slime_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_phantom_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_phantom_t1"},
            {"chance": 0.50, "item": "minecraft:phantom_membrane"},
            {"chance": 0.025, "item": "minecraft:firework_rocket"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_guardian_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_guardian_t1"},
            {"chance": 0.50, "item": "minecraft:prismarine_crystals"},
            {"chance": 0.025, "item": "minecraft:sponge"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_elder_guardian_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_elder_guardian_t1"},
            {"chance": 0.50, "item": "minecraft:prismarine_shard"},
            {"chance": 0.025, "item": "minecraft:sponge"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_skeleton_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_skeleton_t1"},
            {"chance": 0.50, "item": "minecraft:bone"},
            {"chance": 0.025, "item": "minecraft:skeleton_skull"}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_zombie_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_zombie_t1"},
            {"chance": 0.50, "item": "minecraft:rotten_flesh"},
            {"chance": 0.025, "item": "minecraft:zombie_head"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_piglin_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_piglin_t1"},
            {"chance": 0.50, "item": "minecraft:crying_obsidian"},
            {"chance": 0.50, "item": "minecraft:obsidian"},
            {"chance": 0.025, "item": "minecraft:piglin_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_piglin_brute_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_piglin_brute_t1"},
            {"chance": 0.50, "item": "minecraft:shroomlight"},
            {"chance": 0.025, "item": "tconstruct:piglin_brute_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_zombified_piglin_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_zombified_piglin_t1"},
            {"chance": 0.50, "item": "2x minecraft:gold_nugget"},
            {"chance": 0.025, "item": "tconstruct:zombified_piglin_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_hoglin_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_hoglin_t1"},
            {"chance": 0.50, "item": "minecraft:crimson_fungus"},
            {"chance": 0.025, "item": "minecraft:cooked_porkchop"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_ender_dragon_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_ender_dragon_t1"},
            {"chance": 0.50, "item": "minecraft:dragon_breath"},
            {"chance": 0.025, "item": "minecraft:dragon_egg"},
            {"chance": 0.01, "item": "minecraft:dragon_head"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_warden_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_warden_t1"},
            {"chance": 0.50, "item": "minecraft:echo_shard"},
            {"chance": 0.025, "item": "deeperdarker:heart_of_the_deep"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_rabbit_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_rabbit_t1"},
            {"chance": 0.50, "item": "minecraft:rabbit"},
            {"chance": 0.025, "item": "minecraft:rabbit_hide"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_sheep_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_sheep_t1"},
            {"chance": 0.50, "item": "minecraft:white_wool"},
            {"chance": 0.025, "item": "minecraft:cooked_mutton"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_chicken_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_chicken_t1"},
            {"chance": 0.50, "item": "minecraft:feather"},
            {"chance": 0.50, "item": "minecraft:egg"},
            {"chance": 0.50, "item": "minecraft:chicken"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_pig_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_pig_t1"},
            {"chance": 0.50, "item": "minecraft:porkchop"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cow_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cow_t1"},
            {"chance": 0.50, "item": "minecraft:beef"},
            {"chance": 0.50, "item": "minecraft:leather"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_bee_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_bee_t1"},
            {"chance": 0.50, "item": "minecraft:honeycomb"},
            {"chance": 0.025, "item": "minecraft:honey_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_allay_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_allay_t1"},
            {"chance": 0.50, "item": "farmersdelight:cake_slice"},
            {"chance": 0.025, "item": "farmersdelight:sweet_berry_cheesecake"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_tropical_fish_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_tropical_fish_t1"},
            {"chance": 0.50, "item": "minecraft:tropical_fish"},
            {"chance": 0.025, "item": "minecraft:sea_pickle"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_bat_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_bat_t1"},
            {"chance": 0.50, "item": "cobblemon:oran_berry"},
            {"chance": 0.025, "item": "cobblemon:roseli_berry"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_axolotl_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_axolotl_t1"},
            {"chance": 0.50, "item": "minecraft:glow_berries"},
            {"chance": 0.025, "item": "minecraft:glow_lichen"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_goat_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_goat_t1"},
            {"chance": 0.50, "item": "minecraft:mutton"},
            {"chance": 0.025, "item": "minecraft:goat_horn"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cod_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cod_t1"},
            {"chance": 0.50, "item": "minecraft:cod"},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_salmon_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_salmon_t1"},
            {"chance": 0.50, "item": "minecraft:salmon"},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_panda_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_panda_t1"},
            {"chance": 0.50, "item": "minecraft:bamboo"},
            {"chance": 0.025, "item": "minecraft:bamboo_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_mooshroom_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_mooshroom_t1"},
            {"chance": 0.50, "item": "minecraft:mushroom_stew"},
            {"chance": 0.025, "item": "minecraft:red_mushroom_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_camel_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_camel_t1"},
            {"chance": 0.50, "item": "minecraft:cactus"}
        ]
    });
        
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_parrot_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_parrot_t1"},
            {"chance": 0.50, "item": "minecraft:vine"},
            {"chance": 0.025, "item": "minecraft:rose_bush"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_cat_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_cat_t1"},
            {"chance": 0.50, "item": "minecraft:moss_block"},
            {"chance": 0.025, "item": "minecraft:sunflower"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_turtle_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_turtle_t1"},
            {"chance": 0.50, "item": "minecraft:scute"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_trader_llama_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_trader_llama_t1"},
            {"chance": 0.50, "item": "minecraft:lead"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_glow_squid_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_glow_squid_t1"},
            {"chance": 0.50, "item": "minecraft:glow_ink_sac"},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_squid_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_squid_t1"},
            {"chance": 0.50, "item": "minecraft:ink_sac"},
            {"chance": 0.025, "item": "minecraft:seagrass"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_pufferfish_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_pufferfish_t1"},
            {"chance": 0.50, "item": "minecraft:pufferfish"},
            {"chance": 0.025, "item": "minecraft:sea_pickle"}
        ]
    });
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_horse_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_horse_t1"},
            {"chance": 0.50, "item": "minecraft:saddle"},
            {"chance": 0.025, "item": "create:super_glue"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_snow_golem_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_snow_golem_t1"},
            {"chance": 0.75, "item": "minecraft:snowball"},
            {"chance": 0.025, "item": "minecraft:snow_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_donkey_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_donkey_t1"},
            {"chance": 0.50, "item": "minecraft:apple"},
            {"chance": 0.025, "item": "create:honeyed_apple"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_mule_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_mule_t1"},
            {"chance": 0.50, "item": "minecraft:wheat"},
            {"chance": 0.025, "item": "minecraft:hay_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_dolphin_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_dolphin_t1"},
            {"chance": 0.50, "item": "minecraft:kelp"},
            {"chance": 0.025, "item": "minecraft:dried_kelp_block"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_strider_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_strider_t1"},
            {"chance": 0.50, "item": "minecraft:warped_fungus"},
            {"chance": 0.025, "item": "minecraft:leather"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_sniffer_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_sniffer_t1"},
            {"chance": 0.50, "item": "minecraft:moss_block"},
            {"chance": 0.025, "item": "minecraft:suspicious_sand"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_polar_bear_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_polar_bear_t1"},
            {"chance": 0.50, "item": "minecraft:blue_ice"},
            {"chance": 0.025, "item": "minecraft:ice"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_fox_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_fox_t1"},
            {"chance": 0.50, "item": "minecraft:rabbit_foot"},
            {"chance": 0.025, "item": "minecraft:orange_dye"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_frog_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_frog_t1"},
            {"chance": 0.50, "item": "minecraft:ochre_froglight"},
            {"chance": 0.50, "item": "minecraft:verdant_froglight"},
            {"chance": 0.50, "item": "minecraft:pearlescent_froglight"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_villager_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_villager_t1"},
            {"chance": 0.50, "item": "minecraft:emerald"},
            {"chance": 0.025, "item": "minecraft:book"}
        ]
    });

    event.custom({
        "type": "create:crushing",
        "ingredients": [{"item": "kubejs:essence_of_the_iron_golem_t1"}],
        "processingTime": 1600,
        "results": [
            {"count": 1, "item": "kubejs:essence_of_the_iron_golem_t1"},
            {"chance": 0.50, "item": "5x minecraft:iron_nugget"},
            {"chance": 0.025, "item": "minecraft:iron_ingot"}
        ]
    });
});