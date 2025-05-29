// priority: 0

//Editing cause too easy
ServerEvents.recipes(event => 
    
{
    const ballRecipes = [
        { output: "4x cobblemon:poke_ball", apricorn: "cobblemon:red_apricorn" },
        { output: "4x cobblemon:verdant_ball", apricorn: "cobblemon:green_apricorn" },
        { output: "4x cobblemon:citrine_ball", apricorn: "cobblemon:yellow_apricorn" },
        { output: "4x cobblemon:azure_ball", apricorn: "cobblemon:blue_apricorn" },
        { output: "4x cobblemon:roseate_ball", apricorn: "cobblemon:pink_apricorn" },
        { output: "4x cobblemon:slate_ball", apricorn: "cobblemon:black_apricorn" },
        { output: "4x cobblemon:premier_ball", apricorn: "cobblemon:white_apricorn" }
    ];
    
    for (const recipe of ballRecipes) {
        event.custom({"type": "create:compacting", 
            "ingredients": [{"item": "minecraft:copper_ingot"}, {"item": recipe.apricorn}, {"item": recipe.apricorn}, {"item": recipe.apricorn}, {"item": recipe.apricorn}],
            "results": [{"item": recipe.output}]})
    }

    //----------------------------------------------------------------------------------
    event.stonecutting("4x kubejs:great_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:great_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:great_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:great_ball"}, {"item": "cobblemon:blue_apricorn"}], "results": [{"item": "kubejs:great_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:great_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:great_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:great_ball"}], "results": [{"item": "kubejs:great_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:great_ball"}
    });
    //----------------------------------------------------------------------------------
    event.stonecutting("4x kubejs:ultra_ball", "minecraft:gold_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:ultra_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:ultra_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:ultra_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:ultra_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:ultra_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:ultra_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:ultra_ball"}], "results": [{"item": "kubejs:ultra_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:ultra_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:safari_ball", "minecraft:copper_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:safari_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:safari_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:safari_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:safari_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:safari_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:safari_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:safari_ball"}], "results": [{"item": "kubejs:safari_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:safari_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:fast_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:fast_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:fast_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:fast_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:fast_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:fast_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:fast_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:fast_ball"}], "results": [{"item": "kubejs:fast_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:fast_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:level_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:level_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:level_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:level_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:level_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:level_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:level_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:level_ball"}], "results": [{"item": "kubejs:level_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:level_ball"}
    });
     //----------------------------------------------------------------------------------  
     event.stonecutting("4x kubejs:lure_ball", "minecraft:iron_ingot")
     event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:lure_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:lure_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:lure_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:lure_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:lure_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:lure_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:lure_ball"}], "results": [{"item": "kubejs:lure_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:lure_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:heavy_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:heavy_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:heavy_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:heavy_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:heavy_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:heavy_ball"}, {"item": "cobblemon:blue_apricorn"}], "results": [{"item": "kubejs:heavy_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:heavy_ball"}], "results": [{"item": "kubejs:heavy_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:heavy_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:love_ball", "minecraft:gold_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:love_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:love_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:love_ball"}, {"item": "cobblemon:pink_apricorn"}], "results": [{"item": "kubejs:love_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:love_ball"}, {"item": "cobblemon:white_apricorn"}], "results": [{"item": "kubejs:love_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:love_ball"}], "results": [{"item": "kubejs:love_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:love_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:friend_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:friend_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:friend_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:friend_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:friend_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:friend_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:friend_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:friend_ball"}], "results": [{"item": "kubejs:friend_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:friend_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:moon_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:moon_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:moon_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:moon_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:moon_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:moon_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:moon_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:moon_ball"}], "results": [{"item": "kubejs:moon_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:moon_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:sport_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:sport_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:sport_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:sport_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:sport_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:sport_ball"}, {"item": "cobblemon:white_apricorn"}], "results": [{"item": "kubejs:sport_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:sport_ball"}], "results": [{"item": "kubejs:sport_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:sport_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:park_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:park_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:park_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:park_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:park_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:park_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:park_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:park_ball"}], "results": [{"item": "kubejs:park_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:park_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:net_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:net_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:net_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:net_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:net_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:net_ball"}, {"item": "cobblemon:blue_apricorn"}], "results": [{"item": "kubejs:net_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:net_ball"}], "results": [{"item": "kubejs:net_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:net_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:dive_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:dive_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:dive_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:dive_ball"}, {"item": "cobblemon:blue_apricorn"}], "results": [{"item": "kubejs:dive_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:dive_ball"}, {"item": "cobblemon:white_apricorn"}], "results": [{"item": "kubejs:dive_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:dive_ball"}], "results": [{"item": "kubejs:dive_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:dive_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:nest_ball", "minecraft:iron_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:nest_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:nest_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:nest_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:nest_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:nest_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:nest_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:nest_ball"}], "results": [{"item": "kubejs:nest_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:nest_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:repeat_ball", "minecraft:gold_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:repeat_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:repeat_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:repeat_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:repeat_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:repeat_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:repeat_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:repeat_ball"}], "results": [{"item": "kubejs:repeat_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:repeat_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:timer_ball", "minecraft:gold_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:timer_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:timer_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:timer_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:timer_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:timer_ball"}, {"item": "cobblemon:white_apricorn"}], "results": [{"item": "kubejs:timer_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:timer_ball"}], "results": [{"item": "kubejs:timer_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:timer_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:luxury_ball", "minecraft:gold_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:luxury_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:luxury_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:luxury_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:luxury_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:luxury_ball"}, {"item": "cobblemon:white_apricorn"}], "results": [{"item": "kubejs:luxury_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:luxury_ball"}], "results": [{"item": "kubejs:luxury_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:luxury_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:dusk_ball", "minecraft:gold_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:dusk_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:dusk_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:dusk_ball"}, {"item": "cobblemon:black_apricorn"}], "results": [{"item": "kubejs:dusk_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:dusk_ball"}, {"item": "cobblemon:green_apricorn"}], "results": [{"item": "kubejs:dusk_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:dusk_ball"}], "results": [{"item": "kubejs:dusk_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:dusk_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:heal_ball", "minecraft:copper_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:heal_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:heal_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:heal_ball"}, {"item": "cobblemon:pink_apricorn"}], "results": [{"item": "kubejs:heal_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:heal_ball"}, {"item": "cobblemon:white_apricorn"}], "results": [{"item": "kubejs:heal_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:heal_ball"}], "results": [{"item": "kubejs:heal_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:heal_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:quick_ball", "minecraft:copper_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:quick_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:quick_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:quick_ball"}, {"item": "cobblemon:blue_apricorn"}], "results": [{"item": "kubejs:quick_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:quick_ball"}, {"item": "cobblemon:yellow_apricorn"}], "results": [{"item": "kubejs:quick_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:quick_ball"}], "results": [{"item": "kubejs:quick_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:quick_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:dream_ball", "minecraft:diamond")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:dream_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:dream_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:dream_ball"}, {"item": "cobblemon:pink_apricorn"}], "results": [{"item": "kubejs:dream_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:dream_ball"}, {"item": "cobblemon:red_apricorn"}], "results": [{"item": "kubejs:dream_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:dream_ball"}], "results": [{"item": "kubejs:dream_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:dream_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.stonecutting("4x kubejs:beast_ball", "minecraft:copper_ingot")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:beast_ball"},
        "loops": 1,
        "results": [{"item": "cobblemon:beast_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:beast_ball"}, {"item": "minecraft:echo_shard"}], "results": [{"item": "kubejs:beast_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:beast_ball"}, {"item": "minecraft:gold_ingot"}], "results": [{"item": "kubejs:beast_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:beast_ball"}], "results": [{"item": "kubejs:beast_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:beast_ball"}
    });
    //----------------------------------------------------------------------------------  
    event.remove({id: 'cobblemon:master_ball'})
    event.stonecutting("kubejs:master_ball", "minecraft:nether_star")
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:master_ball"},
        "loops": 3,
        "results": [{"item": "cobblemon:master_ball"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:master_ball"}, {"item": "minecraft:netherite_ingot"}], "results": [{"item": "kubejs:master_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:master_ball"}, {"item": "kubejs:purple_ender_eye"}], "results": [{"item": "kubejs:master_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:master_ball"}, {"item": "minecraft:netherite_ingot"}], "results": [{"item": "kubejs:master_ball"}]},
            {"type": "create:deploying", "ingredients": [{"item": "kubejs:master_ball"}, {"item": "kubejs:purple_ender_eye"}], "results": [{"item": "kubejs:master_ball"}]},
            {"type": "create:pressing", "ingredients": [{"item": "kubejs:master_ball"}], "results": [{"item": "kubejs:master_ball"}]}
        ],
        "transitionalItem": {"item": "kubejs:master_ball"}
    });
            event.remove({id: 'cobblemon:master_ball'})

    //---------------------------------------------------------------------------------- 
    event.remove({id: 'cobblemon:ancient_poke_ball'})
    event.shapeless('cobblemon:ancient_poke_ball', ['cobblemon:tumblestone','cobblemon:poke_ball'])

    event.remove({id: 'cobblemon:ancient_citrine_ball'})
    event.shapeless('cobblemon:ancient_citrine_ball', ['cobblemon:tumblestone','cobblemon:citrine_ball'])

    event.remove({id: 'cobblemon:ancient_verdant_ball'})
    event.shapeless('cobblemon:ancient_verdant_ball', ['cobblemon:tumblestone','cobblemon:verdant_ball'])

    event.remove({id: 'cobblemon:ancient_azure_ball'})
    event.shapeless('cobblemon:ancient_azure_ball', ['cobblemon:tumblestone','cobblemon:azure_ball'])

    event.remove({id: 'cobblemon:ancient_roseate_ball'})
    event.shapeless('cobblemon:ancient_roseate_ball', ['cobblemon:tumblestone','cobblemon:roseate_ball'])

    event.remove({id: 'cobblemon:ancient_slate_ball'})
    event.shapeless('cobblemon:ancient_slate_ball', ['cobblemon:tumblestone','cobblemon:slate_ball'])

    event.remove({id: 'cobblemon:ancient_ivory_ball'})
    event.shapeless('cobblemon:ancient_ivory_ball', ['cobblemon:tumblestone','cobblemon:premier_ball'])

    event.remove({id: 'cobblemon:ancient_great_ball'})
    event.shapeless('cobblemon:ancient_great_ball', ['cobblemon:tumblestone','cobblemon:great_ball'])

    event.remove({id: 'cobblemon:ancient_ultra_ball'})
    event.shapeless('cobblemon:ancient_ultra_ball', ['cobblemon:tumblestone','cobblemon:ultra_ball'])  
    //---------------------------------------------------------------------------------- 
    //Apricorns Automations
    const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'black', 'white'];

    colors.forEach(color => {
        event.custom({
            "type": "create:crushing",
            "ingredients": [{"item": `cobblemon:${color}_apricorn`}],
            "results": [
                {"count": 1, "item": `cobblemon:${color}_apricorn_seed`},
                {"chance": 0.75, "item": `cobblemon:${color}_apricorn_seed`},
                {"chance": 1.0, "item": `minecraft:${color}_dye`}
            ]
        });
        event.shapeless(`cobblemon:${color}_apricorn`, [`cobblemon:${color}_apricorn_seed`,'minecraft:bone_meal']) 
        event.custom({"type": "create:milling", 
            "ingredients": [{"item": `cobblemon:${color}_apricorn`}],
            "results": [{"item": "3x create:copper_nugget"}, {"chance": 0.50, "item": "create:copper_nugget"}]}) 
    });
   //---------------------------------------------------------------------------------- 
    //Potions
    event.custom({"type": "create:milling", 
        "ingredients": [{"item": "cobblemon:medicinal_leek"}],
        "results": [{"item": "cobblemon:heal_powder"}]}) 
    
    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "minecraft:prismarine_shard"},{"item": "cobblemon:hard_stone"},{"amount": 500, "fluid": "minecraft:water", "nbt": {}}],
        "results": [{"item": "cobblemon:damp_rock"}]});
      
    event.custom({
        "type": "create:mixing",
        "ingredients": [{"item": "cobblemon:heal_powder"},{"item": "minecraft:glass_bottle"},{"amount": 500,"fluid": "minecraft:water","nbt": {}}],
        "results": [{"item": "cobblemon:medicinal_brew"}]});
    
        const potionRecipes = [
            { output: 'cobblemon:potion',         inputs: ['cobblemon:oran_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:super_potion',   inputs: ['cobblemon:energy_root', 'cobblemon:potion'] },
            { output: 'cobblemon:hyper_potion',   inputs: ['cobblemon:sitrus_berry', 'cobblemon:super_potion'] },
            { output: 'cobblemon:max_potion',     inputs: ['cobblemon:vivichoke', 'cobblemon:hyper_potion'] },
            { output: 'cobblemon:full_restore',   inputs: ['cobblemon:lum_berry', 'cobblemon:max_potion'] },
        
            { output: 'cobblemon:antidote',       inputs: ['cobblemon:pecha_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:awakening',      inputs: ['cobblemon:chesto_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:burn_heal',      inputs: ['cobblemon:rawst_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:ice_heal',       inputs: ['cobblemon:aspear_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:paralyze_heal',  inputs: ['cobblemon:cheri_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:full_heal',      inputs: ['cobblemon:lum_berry', 'cobblemon:medicinal_brew'] },
        
            { output: 'cobblemon:ether',          inputs: ['cobblemon:leppa_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:max_ether',      inputs: ['cobblemon:pep_up_flower', 'cobblemon:medicinal_brew'] },
        
            { output: 'cobblemon:elixir',         inputs: ['cobblemon:hopo_berry', 'cobblemon:medicinal_brew'] },
            { output: 'cobblemon:max_elixir',     inputs: ['cobblemon:pep_up_flower', 'cobblemon:medicinal_brew'] }
        ];
        
        potionRecipes.forEach(recipe => {
            event.custom({
                "type": "create:mixing",
                "ingredients": [
                    {"item": recipe.inputs[0]}, // First input
                    {"item": recipe.inputs[1]}  // Second input
                ],
                "results": [
                    {"item": recipe.output} // Output
                ]
            });
        });
    //---------------------------------------------------------------------------------- 
    //T2 Berries Mon Drops / Rare Biomes only.

    const berryRecipes = [
        { output: 'cobblemon:occa_berry',     inputs: ['cobblemon:persim_berry','cobblemon:razz_berry'] },
        { output: 'cobblemon:passho_berry',   inputs: ['cobblemon:oran_berry',  'cobblemon:pinap_berry'] },
        { output: 'cobblemon:wacan_berry',    inputs: ['cobblemon:nanab_berry', 'cobblemon:pinap_berry'] },
        { output: 'cobblemon:rindo_berry',    inputs: ['cobblemon:nanab_berry', 'cobblemon:wepear_berry'] },
        { output: 'cobblemon:yache_berry',    inputs: ['cobblemon:oran_berry', ' cobblemon:wepear_berry'] },
        { output: 'cobblemon:payapa_berry',   inputs: ['cobblemon:cheri_berry', 'cobblemon:wepear_berry'] },
        { output: 'cobblemon:tanga_berry',    inputs: ['cobblemon:cheri_berry', 'cobblemon:oran_berry'] },
        { output: 'cobblemon:babiri_berry',   inputs: ['cobblemon:pinap_berry', 'cobblemon:razz_berry'] },
        { output: 'cobblemon:chilan_berry',   inputs: ['cobblemon:rawst_berry', 'cobblemon:chesto_berry'] },
        { output: 'cobblemon:roseli_berry',   inputs: ['cobblemon:cheri_berry', 'cobblemon:razz_berry'] },
        { output: 'cobblemon:charti_berry',   inputs: ['cobblemon:persim_berry','cobblemon:wepear_berry'] },
        { output: 'cobblemon:kasib_berry',    inputs: ['cobblemon:pecha_berry', 'cobblemon:rawst_berry'] },
        { output: 'cobblemon:haban_berry',    inputs: ['cobblemon:pecha_berry', 'cobblemon:razz_berry'] },
        { output: 'cobblemon:colbur_berry',   inputs: ['cobblemon:chesto_berry','cobblemon:pinap_berry'] }
    ];
    
    berryRecipes.forEach(recipe => {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {"item": recipe.inputs[0]}, // First input
                {"item": recipe.inputs[1]}  // Second input
            ],
            "results": [
                {"item": recipe.output} // Output
            ]
        });
    });

    //---------------------------------------------------------------------------------- 
    //Apricorns Rainbow
    event.shapeless('cobblemon:red_apricorn',  ['minecraft:red_dye', '#cobblemon:apricorns'])
    event.shapeless('cobblemon:yellow_apricorn',  ['minecraft:yellow_dye', '#cobblemon:apricorns'])
    event.shapeless('cobblemon:green_apricorn',  ['minecraft:green_dye', '#cobblemon:apricorns'])
    event.shapeless('cobblemon:blue_apricorn',  ['minecraft:blue_dye', '#cobblemon:apricorns'])
    event.shapeless('cobblemon:pink_apricorn',  ['minecraft:pink_dye', '#cobblemon:apricorns'])
    event.shapeless('cobblemon:black_apricorn',  ['minecraft:black_dye', '#cobblemon:apricorns'])
    event.shapeless('cobblemon:white_apricorn',  ['minecraft:white_dye', '#cobblemon:apricorns'])

    //----------------------------------------------------------------------------------
    //Ability Patches & Capsule
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "create:sand_paper"},
        "loops": 1,
        "results": [{"item": "cobblemon:ability_patch"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "create:sand_paper"}, {"item": "minecraft:diamond"}], "results": [{"item": "create:sand_paper"}]},
            {"type": "create:deploying", "ingredients": [{"item": "create:sand_paper"}, {"item": "minecraft:nether_star"}], "results": [{"item": "create:sand_paper"}]},
            {"type": "create:pressing", "ingredients": [{"item": "create:sand_paper"}], "results": [{"item": "create:sand_paper"}]}
        ],
        "transitionalItem": {"item": "create:sand_paper"}
    });
    
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "cobblemon:medicinal_brew"},
        "loops": 1,
        "results": [{"item": "cobblemon:ability_capsule"}],
        "sequence": [
            {"type": "create:deploying", "ingredients": [{"item": "cobblemon:medicinal_brew"}, {"item": "minecraft:emerald"}], "results": [{"item": "cobblemon:medicinal_brew"}]},
            {"type": "create:deploying", "ingredients": [{"item": "cobblemon:medicinal_brew"}, {"item": "minecraft:gold_ingot"}], "results": [{"item": "cobblemon:medicinal_brew"}]},
            {"type": "create:pressing", "ingredients": [{"item": "cobblemon:medicinal_brew"}], "results": [{"item": "cobblemon:medicinal_brew"}]}
        ],
        "transitionalItem": {"item": "cobblemon:medicinal_brew"}
    });
    //----------------------------------------------------------------------------------
    event.custom({
        "type": "create:item_application",
        "ingredients": 
        [{"item": "create:andesite_casing"}, {"item": "minecraft:diamond"}],
        "results": [{"item": "cobblemon:healing_machine"}]
      });
    //----------------------------------------------------------------------------------

    event.shapeless("cobblemon:hard_stone", "minecraft:smooth_stone")
});