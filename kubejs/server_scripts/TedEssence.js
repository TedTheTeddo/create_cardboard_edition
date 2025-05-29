// priority: 0

ServerEvents.recipes(event => {

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 128,  "results": [{ "item": "kubejs:essence_of_the_axolotl_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "mglow_berries"}, [{"item": "glow_berries"}]],
                "results": [{"item": "glow_berries"}]}],
            "transitionalItem": {"item": "minecraft:glow_berries"}})

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 512,  "results": [{ "item": "kubejs:essence_of_the_bat_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "cobblemon:oran_berry"}, [{"item": "cobblemon:oran_berry"}]],
                "results": [{"item": "cobblemon:oran_berry"}]}],
            "transitionalItem": {"item": "cobblemon:oran_berry"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_blaze_t1"}],
            "sequence": 
            [{"type": "create:filling",            
                "ingredients": [{"item": "create:empty_blaze_burner"}, {"fluid": "lava", "amount": 1000}],
                "results": [{"item": "create:empty_blaze_burner"}]}],
            "transitionalItem": {"item": "create:empty_blaze_burner"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 512,  "results": [{ "item": "kubejs:essence_of_the_camel_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:cactus"}, [{"item": "minecraft:cactus"}]],
                "results": [{"item": "minecraft:cactus"}]}],
            "transitionalItem": {"item": "minecraft:cactus"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 32,  "results": [{ "item": "kubejs:essence_of_the_cat_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:music_disc_cat"}, [{"item": "minecraft:music_disc_cat"}]],
                "results": [{"item": "minecraft:music_disc_cat"}]}],
            "transitionalItem": {"item": "minecraft:music_disc_cat"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 512,  "results": [{ "item": "kubejs:essence_of_the_cod_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:cod"}, [{"item": "minecraft:cod"}]],
                "results": [{"item": "minecraft:cod"}]}],
            "transitionalItem": {"item": "minecraft:cod"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 256,  "results": [{ "item": "kubejs:essence_of_the_creeper_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:gunpowder"}, [{"item": "minecraft:gunpowder"}]],
                "results": [{"item": "minecraft:gunpowder"}]}],
            "transitionalItem": {"item": "minecraft:gunpowder"}});

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_dolphin_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:kelp"}, [{"item": "minecraft:kelp"}]],
                "results": [{"item": "minecraft:kelp"}]}],
            "transitionalItem": {"item": "minecraft:kelp"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 512,  "results": [{ "item": "kubejs:essence_of_the_donkey_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:apple"}, [{"item": "minecraft:apple"}]],
                "results": [{"item": "minecraft:apple"}]}],
            "transitionalItem": {"item": "minecraft:apple"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_drowned_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:copper_ingot"}, [{"item": "minecraft:copper_ingot"}]],
                "results": [{"item": "minecraft:copper_ingot"}]}],
            "transitionalItem": {"item": "minecraft:copper_ingot"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_elder_guardian_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:prismarine_shard"}, [{"item": "minecraft:prismarine_shard"}]],
                "results": [{"item": "minecraft:prismarine_shard"}]}],
            "transitionalItem": {"item": "minecraft:prismarine_shard"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 32,  "results": [{ "item": "kubejs:essence_of_the_ender_dragon_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:dragon_egg"}, [{"item": "minecraft:dragon_egg"}]],
                "results": [{"item": "minecraft:dragon_egg"}]}],
            "transitionalItem": {"item": "minecraft:dragon_egg"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_enderman_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:ender_pearl"}, [{"item": "minecraft:ender_pearl"}]],
                "results": [{"item": "minecraft:ender_pearl"}]}],
            "transitionalItem": {"item": "minecraft:ender_pearl"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 16,  "results": [{ "item": "kubejs:essence_of_the_fox_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:rabbit_foot"}, [{"item": "minecraft:rabbit_foot"}]],
                "results": [{"item": "minecraft:rabbit_foot"}]}],
            "transitionalItem": {"item": "minecraft:rabbit_foot"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 64,  "results": [{ "item": "kubejs:essence_of_the_frog_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:ochre_froglight"}, [{"item": "minecraft:ochre_froglight"}]],
                "results": [{"item": "minecraft:ochre_froglight"}]}],
            "transitionalItem": {"item": "minecraft:ochre_froglight"}});

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 256,  "results": [{ "item": "kubejs:essence_of_the_ghast_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:ghast_tear"}, [{"item": "minecraft:ghast_tear"}]],
                "results": [{"item": "minecraft:ghast_tear"}]}],
            "transitionalItem": {"item": "minecraft:ghast_tear"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_glow_squid_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:glow_ink_sac"}, [{"item": "minecraft:glow_ink_sac"}]],
                "results": [{"item": "minecraft:glow_ink_sac"}]}],
            "transitionalItem": {"item": "minecraft:glow_ink_sac"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 8,  "results": [{ "item": "kubejs:essence_of_the_goat_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:goat_horn"}, [{"item": "minecraft:goat_horn"}]],
                "results": [{"item": "minecraft:goat_horn"}]}],
            "transitionalItem": {"item": "minecraft:goat_horn"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_guardian_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:prismarine_crystals"}, [{"item": "minecraft:prismarine_crystals"}]],
                "results": [{"item": "minecraft:prismarine_crystals"}]}],
            "transitionalItem": {"item": "minecraft:prismarine_crystals"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 512,  "results": [{ "item": "kubejs:essence_of_the_hoglin_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:crimson_fungus"}, [{"item": "minecraft:crimson_fungus"}]],
                "results": [{"item": "minecraft:crimson_fungus"}]}],
            "transitionalItem": {"item": "minecraft:crimson_fungus"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 64,  "results": [{ "item": "kubejs:essence_of_the_horse_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:saddle"}, [{"item": "minecraft:saddle"}]],
                "results": [{"item": "minecraft:saddle"}]}],
            "transitionalItem": {"item": "minecraft:saddle"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_husk_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:paper"}, [{"item": "minecraft:paper"}]],
                "results": [{"item": "minecraft:paper"}]}],
            "transitionalItem": {"item": "minecraft:paper"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_iron_golem_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:iron_block"}, [{"item": "minecraft:iron_block"}]],
                "results": [{"item": "minecraft:iron_block"}]}],
            "transitionalItem": {"item": "minecraft:iron_block"}});
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"}, "loops": 1024,  "results": [{ "item": "kubejs:essence_of_the_magma_cube_t1"}],
            "sequence": 
            [{"type": "create:deploying",            
                "ingredients": [{"item": "minecraft:magma_cream"}, [{"item": "minecraft:magma_cream"}]],
                "results": [{"item": "minecraft:magma_cream"}]}],
            "transitionalItem": {"item": "minecraft:magma_cream"}});

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 256,
            "results": [{"item": "kubejs:essence_of_the_mooshroom_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:mushroom_stew"}, {"item": "minecraft:mushroom_stew"}],
                "results": [{"item": "minecraft:mushroom_stew"}]}],
            "transitionalItem": {"item": "minecraft:mushroom_stew"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_mule_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:wheat"}, {"item": "minecraft:wheat"}],
                "results": [{"item": "minecraft:wheat"}]
            }],
            "transitionalItem": {"item": "minecraft:wheat"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_panda_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:bamboo"}, {"item": "minecraft:bamboo"}],
                "results": [{"item": "minecraft:bamboo"}]
            }],
            "transitionalItem": {"item": "minecraft:bamboo"}
        });
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 32,
            "results": [{"item": "kubejs:essence_of_the_parrot_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:music_disc_chirp"}, {"item": "minecraft:music_disc_chirp"}],
                "results": [{"item": "minecraft:music_disc_chirp"}]
            }],
            "transitionalItem": {"item": "minecraft:music_disc_chirp"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_phantom_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:firework_rocket"}, {"item": "minecraft:firework_rocket"}],
                "results": [{"item": "minecraft:firework_rocket"}]
            }],
            "transitionalItem": {"item": "minecraft:firework_rocket"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_piglin_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:obsidian"}, {"item": "minecraft:obsidian"}],
                "results": [{"item": "minecraft:obsidian"}]
            }],
            "transitionalItem": {"item": "minecraft:obsidian"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 64,
            "results": [{"item": "kubejs:essence_of_the_piglin_brute_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:shroomlight"}, {"item": "minecraft:shroomlight"}],
                "results": [{"item": "minecraft:shroomlight"}]
            }],
            "transitionalItem": {"item": "minecraft:shroomlight"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 256,
            "results": [{"item": "kubejs:essence_of_the_polar_bear_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:blue_ice"}, {"item": "minecraft:blue_ice"}],
                "results": [{"item": "minecraft:blue_ice"}]
            }],
            "transitionalItem": {"item": "minecraft:bamboo"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_pufferfish_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:pufferfish"}, {"item": "minecraft:pufferfish"}],
                "results": [{"item": "minecraft:pufferfish"}]
            }],
            "transitionalItem": {"item": "minecraft:pufferfish"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_salmon_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:salmon"}, {"item": "minecraft:salmon"}],
                "results": [{"item": "minecraft:salmon"}]
            }],
            "transitionalItem": {"item": "minecraft:salmon"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 64,
            "results": [{"item": "kubejs:essence_of_the_shulker_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:shulker_shell"}, {"item": "minecraft:shulker_shell"}],
                "results": [{"item": "minecraft:shulker_shell"}]
            }],
            "transitionalItem": {"item": "minecraft:shulker_shell"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_silverfish_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:infested_stone"}, {"item": "minecraft:infested_stone"}],
                "results": [{"item": "minecraft:infested_stone"}]
            }],
            "transitionalItem": {"item": "minecraft:infested_stone"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_skeleton_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:bone"}, {"item": "minecraft:bone"}],
                "results": [{"item": "minecraft:bone"}]
            }],
            "transitionalItem": {"item": "minecraft:bone"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_slime_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:slime_ball"}, {"item": "minecraft:slime_ball"}],
                "results": [{"item": "minecraft:slime_ball"}]
            }],
            "transitionalItem": {"item": "minecraft:slime_ball"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_sniffer_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:moss_block"}, {"item": "minecraft:moss_block"}],
                "results": [{"item": "minecraft:moss_block"}]
            }],
            "transitionalItem": {"item": "minecraft:moss_block"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_snow_golem_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:snowball"}, {"item": "minecraft:snowball"}],
                "results": [{"item": "minecraft:snowball"}]
            }],
            "transitionalItem": {"item": "minecraft:snowball"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_spider_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:spider_eye"}, {"item": "minecraft:spider_eye"}],
                "results": [{"item": "minecraft:spider_eye"}]
            }],
            "transitionalItem": {"item": "minecraft:spider_eye"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_spider_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:spider_eye"}, {"item": "minecraft:spider_eye"}],
                "results": [{"item": "minecraft:spider_eye"}]
            }],
            "transitionalItem": {"item": "minecraft:spider_eye"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 64,
            "results": [{"item": "kubejs:essence_of_the_squid_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:ink_sac"}, {"item": "minecraft:ink_sac"}],
                "results": [{"item": "minecraft:ink_sac"}]
            }],
            "transitionalItem": {"item": "minecraft:ink_sac"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_strider_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:warped_fungus"}, {"item": "minecraft:warped_fungus"}],
                "results": [{"item": "minecraft:warped_fungus"}]
            }],
            "transitionalItem": {"item": "minecraft:warped_fungus"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_trader_llama_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:lead"}, {"item": "minecraft:lead"}],
                "results": [{"item": "minecraft:lead"}]
            }],
            "transitionalItem": {"item": "minecraft:lead"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_tropical_fish_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:tropical_fish"}, {"item": "minecraft:tropical_fish"}],
                "results": [{"item": "minecraft:tropical_fish"}]
            }],
            "transitionalItem": {"item": "minecraft:tropical_fish"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 64,
            "results": [{"item": "kubejs:essence_of_the_turtle_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "fightorflight:oran_lucky_egg"}, {"item": "fightorflight:oran_lucky_egg"}],
                "results": [{"item": "fightorflight:oran_lucky_egg"}]
            }],
            "transitionalItem": {"item": "fightorflight:oran_lucky_egg"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_villager_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:emerald"}, {"item": "minecraft:emerald"}],
                "results": [{"item": "minecraft:emerald"}]
            }],
            "transitionalItem": {"item": "minecraft:emerald"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 32,
            "results": [{"item": "kubejs:essence_of_the_warden_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "deeperdarker:heart_of_the_deep"}, {"item": "deeperdarker:heart_of_the_deep"}],
                "results": [{"item": "deeperdarker:heart_of_the_deep"}]
            }],
            "transitionalItem": {"item": "deeperdarker:heart_of_the_deep"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 32,
            "results": [{"item": "kubejs:essence_of_the_wither_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:nether_star"}, {"item": "minecraft:nether_star"}],
                "results": [{"item": "minecraft:nether_star"}]
            }],
            "transitionalItem": {"item": "minecraft:nether_star"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_wither_skeleton_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "tconstruct:necrotic_bone"}, {"item": "tconstruct:necrotic_bone"}],
                "results": [{"item": "tconstruct:necrotic_bone"}]
            }],
            "transitionalItem": {"item": "tconstruct:necrotic_bone"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_zombie_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:rotten_flesh"}, {"item": "minecraft:rotten_flesh"}],
                "results": [{"item": "minecraft:rotten_flesh"}]
            }],
            "transitionalItem": {"item": "minecraft:rotten_flesh"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_zombified_piglin_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:gold_nugget"}, {"item": "minecraft:gold_nugget"}],
                "results": [{"item": "minecraft:gold_nugget"}]
            }],
            "transitionalItem": {"item": "minecraft:gold_nugget"}
        });
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 1024,
            "results": [{"item": "kubejs:essence_of_the_rabbit_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:carrot"}, {"item": "minecraft:carrot"}],
                "results": [{"item": "minecraft:carrot"}]
            }],
            "transitionalItem": {"item": "minecraft:carrot"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_sheep_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:white_wool"}, {"item": "minecraft:white_wool"}],
                "results": [{"item": "minecraft:white_wool"}]
            }],
            "transitionalItem": {"item": "minecraft:white_wool"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_chicken_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:cooked_chicken"}, {"item": "minecraft:cooked_chicken"}],
                "results": [{"item": "minecraft:cooked_chicken"}]
            }],
            "transitionalItem": {"item": "minecraft:cooked_chicken"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_pig_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:cooked_porkchop"}, {"item": "minecraft:cooked_porkchop"}],
                "results": [{"item": "minecraft:cooked_porkchop"}]
            }],
            "transitionalItem": {"item": "minecraft:cooked_porkchop"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_cow_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:cooked_beef"}, {"item": "minecraft:cooked_beef"}],
                "results": [{"item": "minecraft:cooked_beef"}]
            }],
            "transitionalItem": {"item": "minecraft:cooked_beef"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_allay_t1"}],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [{"item": "minecraft:white_dye"}, {"item": "minecraft:white_dye"}],
                    "results": [{"item": "minecraft:white_dye"}]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{"item": "minecraft:white_dye"}, {"item": "minecraft:red_dye"}],
                    "results": [{"item": "minecraft:white_dye"}]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{"item": "minecraft:white_dye"}, {"item": "minecraft:blue_dye"}],
                    "results": [{"item": "minecraft:white_dye"}]
                }
            ],
            "transitionalItem": {"item": "minecraft:white_dye"}
        });
        
        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 128,
            "results": [{"item": "kubejs:essence_of_the_bee_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:honeycomb"}, {"item": "minecraft:honeycomb"}],
                "results": [{"item": "minecraft:honeycomb"}]
            }],
            "transitionalItem": {"item": "minecraft:honeycomb"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 256,
            "results": [{"item": "kubejs:essence_of_the_witch_t1"}],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [{"item": "minecraft:redstone"}, {"item": "minecraft:redstone"}],
                    "results": [{"item": "minecraft:redstone"}]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{"item": "minecraft:redstone"}, {"item": "minecraft:glowstone_dust"}],
                    "results": [{"item": "minecraft:redstone"}]
                }
            ],
            "transitionalItem": {"item": "minecraft:redstone"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 512,
            "results": [{"item": "kubejs:essence_of_the_stray_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:arrow"}, {"item": "minecraft:arrow"}],
                "results": [{"item": "minecraft:arrow"}]
            }],
            "transitionalItem": {"item": "minecraft:arrow"}
        });

        event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {"item": "create:empty_blaze_burner"},
            "loops": 64,
            "results": [{"item": "kubejs:essence_of_the_cave_spider_t1"}],
            "sequence": [{
                "type": "create:deploying",
                "ingredients": [{"item": "minecraft:cobweb"}, {"item": "minecraft:cobweb"}],
                "results": [{"item": "minecraft:cobweb"}]
            }],
            "transitionalItem": {"item": "minecraft:cobweb"}
        });

        //1.21.1 NEOFORGE UPDATE - USE ID:
        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_blaze_t1"}],
            "results": [{"item": "kubejs:essence_of_the_blaze_t1"}, {"amount": 1000, "fluid": "minecraft:lava"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_cow_t1"}],
            "results": [{"item": "kubejs:essence_of_the_cow_t1"}, {"amount": 1000, "fluid": "minecraft:milk"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_mooshroom_t1"}],
            "results": [{"item": "kubejs:essence_of_the_mooshroom_t1"}, {"amount": 1000, "fluid": "tconstruct:mushroom_stew"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_bee_t1"}],
            "results": [{"item": "kubejs:essence_of_the_bee_t1"}, {"amount": 1000, "fluid": "create:honey"}]
        });
        //T2
        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_blaze_t2"}],
            "results": [{"item": "kubejs:essence_of_the_blaze_t2"}, {"amount": 1000, "fluid": "minecraft:lava"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_cow_t2"}],
            "results": [{"item": "kubejs:essence_of_the_cow_t2"}, {"amount": 1000, "fluid": "minecraft:milk"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_mooshroom_t2"}],
            "results": [{"item": "kubejs:essence_of_the_mooshroom_t2"}, {"amount": 1000, "fluid": "tconstruct:mushroom_stew"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_bee_t2"}],
            "results": [{"item": "kubejs:essence_of_the_bee_t2"}, {"amount": 1000, "fluid": "create:honey"}]
        });

        //T3
        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_blaze_t3"}],
            "results": [{"item": "kubejs:essence_of_the_blaze_t3"}, {"amount": 1000, "fluid": "minecraft:lava"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_cow_t3"}],
            "results": [{"item": "kubejs:essence_of_the_cow_t1"}, {"amount": 1000, "fluid": "minecraft:milk"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_mooshroom_t3"}],
            "results": [{"item": "kubejs:essence_of_the_mooshroom_t3"}, {"amount": 1000, "fluid": "tconstruct:mushroom_stew"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_bee_t3"}],
            "results": [{"item": "kubejs:essence_of_the_bee_t3"}, {"amount": 1000, "fluid": "create:honey"}]
        });
        //T4
        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_blaze_t4"}],
            "results": [{"item": "kubejs:essence_of_the_blaze_t4"}, {"amount": 1000, "fluid": "minecraft:lava"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_cow_t4"}],
            "results": [{"item": "kubejs:essence_of_the_cow_t4"}, {"amount": 1000, "fluid": "minecraft:milk"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_mooshroom_t4"}],
            "results": [{"item": "kubejs:essence_of_the_mooshroom_t4"}, {"amount": 1000, "fluid": "tconstruct:mushroom_stew"}]
        });

        event.custom({
            "type": "create:emptying",
            "ingredients": [{"item": "kubejs:essence_of_the_bee_t4"}],
            "results": [{"item": "kubejs:essence_of_the_bee_t4"}, {"amount": 1000, "fluid": "create:honey"}]
        });

});
ServerEvents.recipes(event => {
    let mechanicalRecipes = [
        { input: "kubejs:essence_of_the_allay_t1",          output: "kubejs:essence_of_the_allay_t2" },
        { input: "kubejs:essence_of_the_axolotl_t1",        output: "kubejs:essence_of_the_axolotl_t2" },
        { input: "kubejs:essence_of_the_bat_t1",            output: "kubejs:essence_of_the_bat_t2" },
        { input: "kubejs:essence_of_the_bee_t1",            output: "kubejs:essence_of_the_bee_t2" },
        { input: "kubejs:essence_of_the_blaze_t1",          output: "kubejs:essence_of_the_blaze_t2" },
        { input: "kubejs:essence_of_the_camel_t1",          output: "kubejs:essence_of_the_camel_t2" },
        { input: "kubejs:essence_of_the_cat_t1",            output: "kubejs:essence_of_the_cat_t2" },
        { input: "kubejs:essence_of_the_cave_spider_t1",    output: "kubejs:essence_of_the_cave_spider_t2" },
        { input: "kubejs:essence_of_the_chicken_t1",        output: "kubejs:essence_of_the_chicken_t2" },
        { input: "kubejs:essence_of_the_cod_t1",            output: "kubejs:essence_of_the_cod_t2" },
        { input: "kubejs:essence_of_the_cow_t1",            output: "kubejs:essence_of_the_cow_t2" },
        { input: "kubejs:essence_of_the_creeper_t1",        output: "kubejs:essence_of_the_creeper_t2" },
        { input: "kubejs:essence_of_the_dolphin_t1",        output: "kubejs:essence_of_the_dolphin_t2" },
        { input: "kubejs:essence_of_the_donkey_t1", output: "kubejs:essence_of_the_donkey_t2" },
        { input: "kubejs:essence_of_the_drowned_t1", output: "kubejs:essence_of_the_drowned_t2" },
        { input: "kubejs:essence_of_the_elder_guardian_t1", output: "kubejs:essence_of_the_elder_guardian_t2" },
        { input: "kubejs:essence_of_the_enderman_t1", output: "kubejs:essence_of_the_enderman_t2" },
        { input: "kubejs:essence_of_the_endermite_t1", output: "kubejs:essence_of_the_endermite_t2" },
        { input: "kubejs:essence_of_the_evoker_t1", output: "kubejs:essence_of_the_evoker_t2" },
        { input: "kubejs:essence_of_the_fox_t1", output: "kubejs:essence_of_the_fox_t2" },
        { input: "kubejs:essence_of_the_frog_t1", output: "kubejs:essence_of_the_frog_t2" },
        { input: "kubejs:essence_of_the_ghast_t1", output: "kubejs:essence_of_the_ghast_t2" },
        { input: "kubejs:essence_of_the_glow_squid_t1", output: "kubejs:essence_of_the_glow_squid_t2" },
        { input: "kubejs:essence_of_the_goat_t1", output: "kubejs:essence_of_the_goat_t2" },
        { input: "kubejs:essence_of_the_guardian_t1", output: "kubejs:essence_of_the_guardian_t2" },
        { input: "kubejs:essence_of_the_hoglin_t1", output: "kubejs:essence_of_the_hoglin_t2" },
        { input: "kubejs:essence_of_the_horse_t1", output: "kubejs:essence_of_the_horse_t2" },
        { input: "kubejs:essence_of_the_husk_t1", output: "kubejs:essence_of_the_husk_t2" },
        { input: "kubejs:essence_of_the_iron_golem_t1", output: "kubejs:essence_of_the_iron_golem_t2" },
        { input: "kubejs:essence_of_the_llama_t1", output: "kubejs:essence_of_the_llama_t2" },
        { input: "kubejs:essence_of_the_magma_cube_t1", output: "kubejs:essence_of_the_magma_cube_t2" },
        { input: "kubejs:essence_of_the_mooshroom_t1", output: "kubejs:essence_of_the_mooshroom_t2" },
        { input: "kubejs:essence_of_the_mule_t1", output: "kubejs:essence_of_the_mule_t2" },
        { input: "kubejs:essence_of_the_ocelot_t1", output: "kubejs:essence_of_the_ocelot_t2" },
        { input: "kubejs:essence_of_the_panda_t1", output: "kubejs:essence_of_the_panda_t2" },
        { input: "kubejs:essence_of_the_parrot_t1", output: "kubejs:essence_of_the_parrot_t2" },
        { input: "kubejs:essence_of_the_phantom_t1", output: "kubejs:essence_of_the_phantom_t2" },
        { input: "kubejs:essence_of_the_pig_t1", output: "kubejs:essence_of_the_pig_t2" },
        { input: "kubejs:essence_of_the_piglin_t1", output: "kubejs:essence_of_the_piglin_t2" },
        { input: "kubejs:essence_of_the_piglin_brute_t1", output: "kubejs:essence_of_the_piglin_brute_t2" },
        { input: "kubejs:essence_of_the_pillager_t1", output: "kubejs:essence_of_the_pillager_t2" },
        { input: "kubejs:essence_of_the_polar_bear_t1", output: "kubejs:essence_of_the_polar_bear_t2" },
        { input: "kubejs:essence_of_the_pufferfish_t1", output: "kubejs:essence_of_the_pufferfish_t2" },
        { input: "kubejs:essence_of_the_rabbit_t1", output: "kubejs:essence_of_the_rabbit_t2" },
        { input: "kubejs:essence_of_the_ravager_t1", output: "kubejs:essence_of_the_ravager_t2" },
        { input: "kubejs:essence_of_the_salmon_t1", output: "kubejs:essence_of_the_salmon_t2" },
        { input: "kubejs:essence_of_the_sheep_t1", output: "kubejs:essence_of_the_sheep_t2" },
        { input: "kubejs:essence_of_the_shulker_t1", output: "kubejs:essence_of_the_shulker_t2" },
        { input: "kubejs:essence_of_the_silverfish_t1", output: "kubejs:essence_of_the_silverfish_t2" },
        { input: "kubejs:essence_of_the_skeleton_t1", output: "kubejs:essence_of_the_skeleton_t2" },
        { input: "kubejs:essence_of_the_skeleton_horse_t1", output: "kubejs:essence_of_the_skeleton_horse_t2" },
        { input: "kubejs:essence_of_the_slime_t1", output: "kubejs:essence_of_the_slime_t2" },
        { input: "kubejs:essence_of_the_sniffer_t1", output: "kubejs:essence_of_the_sniffer_t2" },
        { input: "kubejs:essence_of_the_snow_golem_t1", output: "kubejs:essence_of_the_snow_golem_t2" },
        { input: "kubejs:essence_of_the_spider_t1", output: "kubejs:essence_of_the_spider_t2" },
        { input: "kubejs:essence_of_the_squid_t1", output: "kubejs:essence_of_the_squid_t2" },
        { input: "kubejs:essence_of_the_stray_t1", output: "kubejs:essence_of_the_stray_t2" },
        { input: "kubejs:essence_of_the_strider_t1", output: "kubejs:essence_of_the_strider_t2" },
        { input: "kubejs:essence_of_the_tadpole_t1", output: "kubejs:essence_of_the_tadpole_t2" },
        { input: "kubejs:essence_of_the_trader_llama_t1", output: "kubejs:essence_of_the_trader_llama_t2" },
        { input: "kubejs:essence_of_the_tropical_fish_t1", output: "kubejs:essence_of_the_tropical_fish_t2" },
        { input: "kubejs:essence_of_the_turtle_t1", output: "kubejs:essence_of_the_turtle_t2" },
        { input: "kubejs:essence_of_the_vex_t1", output: "kubejs:essence_of_the_vex_t2" },
        { input: "kubejs:essence_of_the_villager_t1", output: "kubejs:essence_of_the_villager_t2" },
        { input: "kubejs:essence_of_the_vindicator_t1", output: "kubejs:essence_of_the_vindicator_t2" },
        { input: "kubejs:essence_of_the_wandering_trader_t1", output: "kubejs:essence_of_the_wandering_trader_t2" },
        { input: "kubejs:essence_of_the_warden_t1", output: "kubejs:essence_of_the_warden_t2" },
        { input: "kubejs:essence_of_the_witch_t1", output: "kubejs:essence_of_the_witch_t2" },
        { input: "kubejs:essence_of_the_wither_skeleton_t1", output: "kubejs:essence_of_the_wither_skeleton_t2" },
        { input: "kubejs:essence_of_the_wither_t1", output: "kubejs:essence_of_the_wither_t2" },
        { input: "kubejs:essence_of_the_wolf_t1", output: "kubejs:essence_of_the_wolf_t2" },
        { input: "kubejs:essence_of_the_zoglin_t1", output: "kubejs:essence_of_the_zoglin_t2" },
        { input: "kubejs:essence_of_the_zombie_t1", output: "kubejs:essence_of_the_zombie_t2" },
        { input: "kubejs:essence_of_the_zombie_horse_t1", output: "kubejs:essence_of_the_zombie_horse_t2" },
        { input: "kubejs:essence_of_the_zombie_villager_t1", output: "kubejs:essence_of_the_zombie_villager_t2" },
        { input: "kubejs:essence_of_the_zombified_piglin_t1", output: "kubejs:essence_of_the_zombified_piglin_t2" },

        { input: "kubejs:essence_of_the_allay_t2",   output: "kubejs:essence_of_the_allay_t3" },
        { input: "kubejs:essence_of_the_axolotl_t2", output: "kubejs:essence_of_the_axolotl_t3" },
        { input: "kubejs:essence_of_the_bat_t2",     output: "kubejs:essence_of_the_bat_t3" },
        { input: "kubejs:essence_of_the_bee_t2", output: "kubejs:essence_of_the_bee_t3" },
        { input: "kubejs:essence_of_the_blaze_t2", output: "kubejs:essence_of_the_blaze_t3" },
        { input: "kubejs:essence_of_the_camel_t2", output: "kubejs:essence_of_the_camel_t3" },
        { input: "kubejs:essence_of_the_cat_t2", output: "kubejs:essence_of_the_cat_t3" },
        { input: "kubejs:essence_of_the_cave_spider_t2", output: "kubejs:essence_of_the_cave_spider_t3" },
        { input: "kubejs:essence_of_the_chicken_t2", output: "kubejs:essence_of_the_chicken_t3" },
        { input: "kubejs:essence_of_the_cod_t2", output: "kubejs:essence_of_the_cod_t3" },
        { input: "kubejs:essence_of_the_cow_t2", output: "kubejs:essence_of_the_cow_t3" },
        { input: "kubejs:essence_of_the_creeper_t2", output: "kubejs:essence_of_the_creeper_t3" },
        { input: "kubejs:essence_of_the_dolphin_t2", output: "kubejs:essence_of_the_dolphin_t3" },
        { input: "kubejs:essence_of_the_donkey_t2", output: "kubejs:essence_of_the_donkey_t3" },
        { input: "kubejs:essence_of_the_drowned_t2", output: "kubejs:essence_of_the_drowned_t3" },
        { input: "kubejs:essence_of_the_elder_guardian_t2", output: "kubejs:essence_of_the_elder_guardian_t3" },
        { input: "kubejs:essence_of_the_enderman_t2", output: "kubejs:essence_of_the_enderman_t3" },
        { input: "kubejs:essence_of_the_endermite_t2", output: "kubejs:essence_of_the_endermite_t3" },
        { input: "kubejs:essence_of_the_evoker_t2", output: "kubejs:essence_of_the_evoker_t3" },
        { input: "kubejs:essence_of_the_fox_t2", output: "kubejs:essence_of_the_fox_t3" },
        { input: "kubejs:essence_of_the_frog_t2", output: "kubejs:essence_of_the_frog_t3" },
        { input: "kubejs:essence_of_the_ghast_t2", output: "kubejs:essence_of_the_ghast_t3" },
        { input: "kubejs:essence_of_the_glow_squid_t2", output: "kubejs:essence_of_the_glow_squid_t3" },
        { input: "kubejs:essence_of_the_goat_t2", output: "kubejs:essence_of_the_goat_t3" },
        { input: "kubejs:essence_of_the_guardian_t2", output: "kubejs:essence_of_the_guardian_t3" },
        { input: "kubejs:essence_of_the_hoglin_t2", output: "kubejs:essence_of_the_hoglin_t3" },
        { input: "kubejs:essence_of_the_horse_t2", output: "kubejs:essence_of_the_horse_t3" },
        { input: "kubejs:essence_of_the_husk_t2", output: "kubejs:essence_of_the_husk_t3" },
        { input: "kubejs:essence_of_the_iron_golem_t2", output: "kubejs:essence_of_the_iron_golem_t3" },
        { input: "kubejs:essence_of_the_llama_t2", output: "kubejs:essence_of_the_llama_t3" },
        { input: "kubejs:essence_of_the_magma_cube_t2", output: "kubejs:essence_of_the_magma_cube_t3" },
        { input: "kubejs:essence_of_the_mooshroom_t2", output: "kubejs:essence_of_the_mooshroom_t3" },
        { input: "kubejs:essence_of_the_mule_t2", output: "kubejs:essence_of_the_mule_t3" },
        { input: "kubejs:essence_of_the_ocelot_t2", output: "kubejs:essence_of_the_ocelot_t3" },
        { input: "kubejs:essence_of_the_panda_t2", output: "kubejs:essence_of_the_panda_t3" },
        { input: "kubejs:essence_of_the_parrot_t2", output: "kubejs:essence_of_the_parrot_t3" },
        { input: "kubejs:essence_of_the_phantom_t2", output: "kubejs:essence_of_the_phantom_t3" },
        { input: "kubejs:essence_of_the_pig_t2", output: "kubejs:essence_of_the_pig_t3" },
        { input: "kubejs:essence_of_the_piglin_t2", output: "kubejs:essence_of_the_piglin_t3" },
        { input: "kubejs:essence_of_the_piglin_brute_t2", output: "kubejs:essence_of_the_piglin_brute_t3" },
        { input: "kubejs:essence_of_the_pillager_t2", output: "kubejs:essence_of_the_pillager_t3" },
        { input: "kubejs:essence_of_the_polar_bear_t2", output: "kubejs:essence_of_the_polar_bear_t3" },
        { input: "kubejs:essence_of_the_pufferfish_t2", output: "kubejs:essence_of_the_pufferfish_t3" },
        { input: "kubejs:essence_of_the_rabbit_t2", output: "kubejs:essence_of_the_rabbit_t3" },
        { input: "kubejs:essence_of_the_ravager_t2", output: "kubejs:essence_of_the_ravager_t3" },
        { input: "kubejs:essence_of_the_salmon_t2", output: "kubejs:essence_of_the_salmon_t3" },
        { input: "kubejs:essence_of_the_sheep_t2", output: "kubejs:essence_of_the_sheep_t3" },
        { input: "kubejs:essence_of_the_shulker_t2", output: "kubejs:essence_of_the_shulker_t3" },
        { input: "kubejs:essence_of_the_silverfish_t2", output: "kubejs:essence_of_the_silverfish_t3" },
        { input: "kubejs:essence_of_the_skeleton_t2", output: "kubejs:essence_of_the_skeleton_t3" },
        { input: "kubejs:essence_of_the_skeleton_horse_t2", output: "kubejs:essence_of_the_skeleton_horse_t3" },
        { input: "kubejs:essence_of_the_slime_t2", output: "kubejs:essence_of_the_slime_t3" },
        { input: "kubejs:essence_of_the_sniffer_t2", output: "kubejs:essence_of_the_sniffer_t3" },
        { input: "kubejs:essence_of_the_snow_golem_t2", output: "kubejs:essence_of_the_snow_golem_t3" },
        { input: "kubejs:essence_of_the_spider_t2", output: "kubejs:essence_of_the_spider_t3" },
        { input: "kubejs:essence_of_the_squid_t2", output: "kubejs:essence_of_the_squid_t3" },
        { input: "kubejs:essence_of_the_stray_t2", output: "kubejs:essence_of_the_stray_t3" },
        { input: "kubejs:essence_of_the_strider_t2", output: "kubejs:essence_of_the_strider_t3" },
        { input: "kubejs:essence_of_the_tadpole_t2", output: "kubejs:essence_of_the_tadpole_t3" },
        { input: "kubejs:essence_of_the_trader_llama_t2", output: "kubejs:essence_of_the_trader_llama_t3" },
        { input: "kubejs:essence_of_the_tropical_fish_t2", output: "kubejs:essence_of_the_tropical_fish_t3" },
        { input: "kubejs:essence_of_the_turtle_t2", output: "kubejs:essence_of_the_turtle_t3" },
        { input: "kubejs:essence_of_the_vex_t2", output: "kubejs:essence_of_the_vex_t3" },
        { input: "kubejs:essence_of_the_villager_t2", output: "kubejs:essence_of_the_villager_t3" },
        { input: "kubejs:essence_of_the_vindicator_t2", output: "kubejs:essence_of_the_vindicator_t3" },
        { input: "kubejs:essence_of_the_wandering_trader_t2", output: "kubejs:essence_of_the_wandering_trader_t3" },
        { input: "kubejs:essence_of_the_warden_t2", output: "kubejs:essence_of_the_warden_t3" },
        { input: "kubejs:essence_of_the_witch_t2", output: "kubejs:essence_of_the_witch_t3" },
        { input: "kubejs:essence_of_the_wither_skeleton_t2", output: "kubejs:essence_of_the_wither_skeleton_t3" },
        { input: "kubejs:essence_of_the_wither_t2", output: "kubejs:essence_of_the_wither_t3" },
        { input: "kubejs:essence_of_the_wolf_t2", output: "kubejs:essence_of_the_wolf_t3" },
        { input: "kubejs:essence_of_the_zoglin_t2", output: "kubejs:essence_of_the_zoglin_t3" },
        { input: "kubejs:essence_of_the_zombie_t2", output: "kubejs:essence_of_the_zombie_t3" },
        { input: "kubejs:essence_of_the_zombie_horse_t2", output: "kubejs:essence_of_the_zombie_horse_t3" },
        { input: "kubejs:essence_of_the_zombie_villager_t2", output: "kubejs:essence_of_the_zombie_villager_t3" },
        { input: "kubejs:essence_of_the_zombified_piglin_t2", output: "kubejs:essence_of_the_zombified_piglin_t3" },
      
        { input: "kubejs:essence_of_the_allay_t3",   output: "kubejs:essence_of_the_allay_t4" },
        { input: "kubejs:essence_of_the_axolotl_t3", output: "kubejs:essence_of_the_axolotl_t4" },
        { input: "kubejs:essence_of_the_bat_t3",     output: "kubejs:essence_of_the_bat_t4" },
        { input: "kubejs:essence_of_the_bee_t3", output: "kubejs:essence_of_the_bee_t4" },
        { input: "kubejs:essence_of_the_blaze_t3", output: "kubejs:essence_of_the_blaze_t4" },
        { input: "kubejs:essence_of_the_camel_t3", output: "kubejs:essence_of_the_camel_t4" },
        { input: "kubejs:essence_of_the_cat_t3", output: "kubejs:essence_of_the_cat_t4" },
        { input: "kubejs:essence_of_the_cave_spider_t3", output: "kubejs:essence_of_the_cave_spider_t4" },
        { input: "kubejs:essence_of_the_chicken_t3", output: "kubejs:essence_of_the_chicken_t4" },
        { input: "kubejs:essence_of_the_cod_t3", output: "kubejs:essence_of_the_cod_t4" },
        { input: "kubejs:essence_of_the_cow_t3", output: "kubejs:essence_of_the_cow_t4" },
        { input: "kubejs:essence_of_the_creeper_t3", output: "kubejs:essence_of_the_creeper_t4" },
        { input: "kubejs:essence_of_the_dolphin_t3", output: "kubejs:essence_of_the_dolphin_t4" },
        { input: "kubejs:essence_of_the_donkey_t3", output: "kubejs:essence_of_the_donkey_t4" },
        { input: "kubejs:essence_of_the_drowned_t3", output: "kubejs:essence_of_the_drowned_t4" },
        { input: "kubejs:essence_of_the_elder_guardian_t3", output: "kubejs:essence_of_the_elder_guardian_t4" },
        { input: "kubejs:essence_of_the_enderman_t3", output: "kubejs:essence_of_the_enderman_t4" },
        { input: "kubejs:essence_of_the_endermite_t3", output: "kubejs:essence_of_the_endermite_t4" },
        { input: "kubejs:essence_of_the_evoker_t3", output: "kubejs:essence_of_the_evoker_t4" },
        { input: "kubejs:essence_of_the_fox_t3", output: "kubejs:essence_of_the_fox_t4" },
        { input: "kubejs:essence_of_the_frog_t3", output: "kubejs:essence_of_the_frog_t4" },
        { input: "kubejs:essence_of_the_ghast_t3", output: "kubejs:essence_of_the_ghast_t4" },
        { input: "kubejs:essence_of_the_glow_squid_t3", output: "kubejs:essence_of_the_glow_squid_t4" },
        { input: "kubejs:essence_of_the_goat_t3", output: "kubejs:essence_of_the_goat_t4" },
        { input: "kubejs:essence_of_the_guardian_t3", output: "kubejs:essence_of_the_guardian_t4" },
        { input: "kubejs:essence_of_the_hoglin_t3", output: "kubejs:essence_of_the_hoglin_t4" },
        { input: "kubejs:essence_of_the_horse_t3", output: "kubejs:essence_of_the_horse_t4" },
        { input: "kubejs:essence_of_the_husk_t3", output: "kubejs:essence_of_the_husk_t4" },
        { input: "kubejs:essence_of_the_iron_golem_t3", output: "kubejs:essence_of_the_iron_golem_t4" },
        { input: "kubejs:essence_of_the_llama_t3", output: "kubejs:essence_of_the_llama_t4" },
        { input: "kubejs:essence_of_the_magma_cube_t3", output: "kubejs:essence_of_the_magma_cube_t4" },
        { input: "kubejs:essence_of_the_mooshroom_t3", output: "kubejs:essence_of_the_mooshroom_t4" },
        { input: "kubejs:essence_of_the_mule_t3", output: "kubejs:essence_of_the_mule_t4" },
        { input: "kubejs:essence_of_the_ocelot_t3", output: "kubejs:essence_of_the_ocelot_t4" },
        { input: "kubejs:essence_of_the_panda_t3", output: "kubejs:essence_of_the_panda_t4" },
        { input: "kubejs:essence_of_the_parrot_t3", output: "kubejs:essence_of_the_parrot_t4" },
        { input: "kubejs:essence_of_the_phantom_t3", output: "kubejs:essence_of_the_phantom_t4" },
        { input: "kubejs:essence_of_the_pig_t3", output: "kubejs:essence_of_the_pig_t4" },
        { input: "kubejs:essence_of_the_piglin_t3", output: "kubejs:essence_of_the_piglin_t4" },
        { input: "kubejs:essence_of_the_piglin_brute_t3", output: "kubejs:essence_of_the_piglin_brute_t4" },
        { input: "kubejs:essence_of_the_pillager_t3", output: "kubejs:essence_of_the_pillager_t4" },
        { input: "kubejs:essence_of_the_polar_bear_t3", output: "kubejs:essence_of_the_polar_bear_t4" },
        { input: "kubejs:essence_of_the_pufferfish_t3", output: "kubejs:essence_of_the_pufferfish_t4" },
        { input: "kubejs:essence_of_the_rabbit_t3", output: "kubejs:essence_of_the_rabbit_t4" },
        { input: "kubejs:essence_of_the_ravager_t3", output: "kubejs:essence_of_the_ravager_t4" },
        { input: "kubejs:essence_of_the_salmon_t3", output: "kubejs:essence_of_the_salmon_t4" },
        { input: "kubejs:essence_of_the_sheep_t3", output: "kubejs:essence_of_the_sheep_t4" },
        { input: "kubejs:essence_of_the_shulker_t3", output: "kubejs:essence_of_the_shulker_t4" },
        { input: "kubejs:essence_of_the_silverfish_t3", output: "kubejs:essence_of_the_silverfish_t4" },
        { input: "kubejs:essence_of_the_skeleton_t3", output: "kubejs:essence_of_the_skeleton_t4" },
        { input: "kubejs:essence_of_the_skeleton_horse_t3", output: "kubejs:essence_of_the_skeleton_horse_t4" },
        { input: "kubejs:essence_of_the_slime_t3", output: "kubejs:essence_of_the_slime_t4" },
        { input: "kubejs:essence_of_the_sniffer_t3", output: "kubejs:essence_of_the_sniffer_t4" },
        { input: "kubejs:essence_of_the_snow_golem_t3", output: "kubejs:essence_of_the_snow_golem_t4" },
        { input: "kubejs:essence_of_the_spider_t3", output: "kubejs:essence_of_the_spider_t4" },
        { input: "kubejs:essence_of_the_squid_t3", output: "kubejs:essence_of_the_squid_t4" },
        { input: "kubejs:essence_of_the_stray_t3", output: "kubejs:essence_of_the_stray_t4" },
        { input: "kubejs:essence_of_the_strider_t3", output: "kubejs:essence_of_the_strider_t4" },
        { input: "kubejs:essence_of_the_tadpole_t3", output: "kubejs:essence_of_the_tadpole_t4" },
        { input: "kubejs:essence_of_the_trader_llama_t3", output: "kubejs:essence_of_the_trader_llama_t4" },
        { input: "kubejs:essence_of_the_tropical_fish_t3", output: "kubejs:essence_of_the_tropical_fish_t4" },
        { input: "kubejs:essence_of_the_turtle_t3", output: "kubejs:essence_of_the_turtle_t4" },
        { input: "kubejs:essence_of_the_vex_t3", output: "kubejs:essence_of_the_vex_t4" },
        { input: "kubejs:essence_of_the_villager_t3", output: "kubejs:essence_of_the_villager_t4" },
        { input: "kubejs:essence_of_the_vindicator_t3", output: "kubejs:essence_of_the_vindicator_t4" },
        { input: "kubejs:essence_of_the_wandering_trader_t3", output: "kubejs:essence_of_the_wandering_trader_t4" },
        { input: "kubejs:essence_of_the_warden_t3", output: "kubejs:essence_of_the_warden_t4" },
        { input: "kubejs:essence_of_the_witch_t3", output: "kubejs:essence_of_the_witch_t4" },
        { input: "kubejs:essence_of_the_wither_skeleton_t3", output: "kubejs:essence_of_the_wither_skeleton_t4" },
        { input: "kubejs:essence_of_the_wither_t3", output: "kubejs:essence_of_the_wither_t4" },
        { input: "kubejs:essence_of_the_wolf_t3", output: "kubejs:essence_of_the_wolf_t4" },
        { input: "kubejs:essence_of_the_zoglin_t3", output: "kubejs:essence_of_the_zoglin_t4" },
        { input: "kubejs:essence_of_the_zombie_t3", output: "kubejs:essence_of_the_zombie_t4" },
        { input: "kubejs:essence_of_the_zombie_horse_t3", output: "kubejs:essence_of_the_zombie_horse_t4" },
        { input: "kubejs:essence_of_the_zombie_villager_t3", output: "kubejs:essence_of_the_zombie_villager_t4" },
        { input: "kubejs:essence_of_the_zombified_piglin_t3", output: "kubejs:essence_of_the_zombified_piglin_t4" },
    ];

    mechanicalRecipes.forEach(recipe => {
        event.custom({
            "type": "create:mechanical_crafting",
            "acceptMirrored": false,
            "key": {
              "A": {
                "item": recipe.input
              }
            },
            "pattern": [
              "AA"
            ],
            "result": {
              "count": 1,
              "item": recipe.output
            }
        })
    });
});