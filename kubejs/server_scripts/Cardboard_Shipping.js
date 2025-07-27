// priority: 1

function addBallTradeSequencedRecipe(event, ball, resultItem, resultCount, loopCount) {
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "create:cardboard_block" },
        loops: loopCount,
        results: [
            { id: resultItem, count: resultCount }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:cardboard_package_12x10" },
                    { item: ball }
                ],
                results: [
                    { id: "create:cardboard_package_12x10" }
                ]
            }
        ],
        transitional_item: { id: "create:cardboard_package_12x10" }
    });
}

//==========================================================================================================

ServerEvents.recipes(event => {

    event.custom({"type": "create:compacting", 
        "ingredients": [
            {"item": "cobblemon:azure_ball"}, 
            {"item": "cobblemon:azure_ball"},
            {"item": "cobblemon:azure_ball"},
            {"item": "cobblemon:azure_ball"},
            {"item": "cobblemon:azure_ball"},
            {"item": "cobblemon:azure_ball"},
            {"item": "cobblemon:azure_ball"},
            {"item": "cobblemon:azure_ball"},
            {"item": "create:cardboard_block"}
        ],
        "results": [{"id": "minecraft:emerald", "count": 1}, {"id": "create:cardboard_block"}]})

    event.custom({
    "type": "create:compacting",
    "ingredients": [
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "cobblemon:citrine_ball"},
        {"item": "create:cardboard_block"}
    ],
    "results": [
        {"id": "minecraft:emerald", "count": 1},
        {"id": "create:cardboard_block"}
    ]
    })

    event.custom({
    "type": "create:compacting",
    "ingredients": [
        {"item": "cobblemon:dive_ball"},
        {"item": "cobblemon:dive_ball"},
        {"item": "cobblemon:dive_ball"},
        {"item": "cobblemon:dive_ball"},
        {"item": "create:cardboard_block"}
    ],
    "results": [
        {"id": "minecraft:emerald", "count": 1},
        {"id": "create:cardboard_block"}
    ]
    })

    event.custom({
    "type": "create:compacting",
    "ingredients": [
        {"item": "cobblemon:dream_ball"},
        {"item": "create:cardboard_block"}
    ],
    "results": [
        {"id": "minecraft:emerald", "count": 1},
        {"id": "create:cardboard_block"}
    ]
    })

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:dusk_ball"},
    {"item": "cobblemon:dusk_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:fast_ball"},
    {"item": "cobblemon:fast_ball"},
    {"item": "cobblemon:fast_ball"},
    {"item": "cobblemon:fast_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:friend_ball"},
    {"item": "cobblemon:friend_ball"},
    {"item": "cobblemon:friend_ball"},
    {"item": "cobblemon:friend_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:great_ball"},
    {"item": "cobblemon:great_ball"},
    {"item": "cobblemon:great_ball"},
    {"item": "cobblemon:great_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:heal_ball"},
    {"item": "cobblemon:heal_ball"},
    {"item": "cobblemon:heal_ball"},
    {"item": "cobblemon:heal_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:heavy_ball"},
    {"item": "cobblemon:heavy_ball"},
    {"item": "cobblemon:heavy_ball"},
    {"item": "cobblemon:heavy_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:level_ball"},
    {"item": "cobblemon:level_ball"},
    {"item": "cobblemon:level_ball"},
    {"item": "cobblemon:level_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:lure_ball"},
    {"item": "cobblemon:lure_ball"},
    {"item": "cobblemon:lure_ball"},
    {"item": "cobblemon:lure_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:love_ball"},
    {"item": "cobblemon:love_ball"},
    {"item": "cobblemon:love_ball"},
    {"item": "cobblemon:love_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:luxury_ball"},
    {"item": "cobblemon:luxury_ball"},
    {"item": "cobblemon:luxury_ball"},
    {"item": "cobblemon:luxury_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:moon_ball"},
    {"item": "cobblemon:moon_ball"},
    {"item": "cobblemon:moon_ball"},
    {"item": "cobblemon:moon_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:nest_ball"},
    {"item": "cobblemon:nest_ball"},
    {"item": "cobblemon:nest_ball"},
    {"item": "cobblemon:nest_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:net_ball"},
    {"item": "cobblemon:net_ball"},
    {"item": "cobblemon:net_ball"},
    {"item": "cobblemon:net_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:park_ball"},
    {"item": "cobblemon:park_ball"},
    {"item": "cobblemon:park_ball"},
    {"item": "cobblemon:park_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "cobblemon:poke_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "cobblemon:premier_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:quick_ball"},
    {"item": "cobblemon:quick_ball"},
    {"item": "cobblemon:quick_ball"},
    {"item": "cobblemon:quick_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 2},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:repeat_ball"},
    {"item": "cobblemon:repeat_ball"},
    {"item": "cobblemon:repeat_ball"},
    {"item": "cobblemon:repeat_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 2},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "cobblemon:roseate_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:safari_ball"},
    {"item": "cobblemon:safari_ball"},
    {"item": "cobblemon:safari_ball"},
    {"item": "cobblemon:safari_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "cobblemon:slate_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:sport_ball"},
    {"item": "cobblemon:sport_ball"},
    {"item": "cobblemon:sport_ball"},
    {"item": "cobblemon:sport_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:timer_ball"},
    {"item": "cobblemon:timer_ball"},
    {"item": "cobblemon:timer_ball"},
    {"item": "cobblemon:timer_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 2},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:ultra_ball"},
    {"item": "cobblemon:ultra_ball"},
    {"item": "cobblemon:ultra_ball"},
    {"item": "cobblemon:ultra_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 2},
    {"id": "create:cardboard_block"}
  ]
})

event.custom({
  "type": "create:compacting",
  "ingredients": [
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "cobblemon:verdant_ball"},
    {"item": "create:cardboard_block"}
  ],
  "results": [
    {"id": "minecraft:emerald", "count": 1},
    {"id": "create:cardboard_block"}
  ]
})
//==========================================================================================================

function createCropCompacting(cropItem) {
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {"item": cropItem}, {"item": cropItem}, {"item": cropItem},
            {"item": cropItem}, {"item": cropItem}, {"item": cropItem},
            {"item": cropItem}, {"item": cropItem},
            {"item": "create:cardboard_block"}
        ],
        "results": [
            {"id": "minecraft:emerald", "count": 1},
            {"id": "create:cardboard_block"}
        ]
    });
}

const crops = [
    "minecolonies:bell_pepper",
    "minecolonies:cabbage",
    "minecolonies:chickpiea",
    "minecolonies:durum",
    "minecolonies:eggplant",
    "minecolonies:garlic",
    "minecolonies:onion",
    "minecolonies:soybean",
    "minecolonies:tomato",
    "minecolonies:rice",
    "minecolonies:corn",
    "minecolonies:nether_pepper",
    "minecolonies:peas",
    "minecolonies:mints",
    "minecolonies:butternut_squash"
];

crops.forEach(crop => createCropCompacting(crop));

// Helper function to generate compacting recipes for Minecolonies food → emerald conversion
function generateCompactingRecipes() {
  const items = [
    { name: "minecolonies:apple_pie", emeralds: 1 },
    { name: "minecolonies:cheddar_cheese", emeralds: 1 },
    { name: "minecolonies:cheese_ravioli", emeralds: 1 },
    { name: "minecolonies:cooked_rice", emeralds: 1 },
    { name: "minecolonies:feta_cheese", emeralds: 1 },
    { name: "minecolonies:flatbread", emeralds: 1 },
    { name: "minecolonies:kebab", emeralds: 1 },
    { name: "minecolonies:mint_jelly", emeralds: 1 },
    { name: "minecolonies:tofu", emeralds: 1 },
    { name: "minecolonies:tortillas", emeralds: 1 },
    { name: "minecolonies:veggie_ravioli", emeralds: 1 },
    { name: "minecolonies:yogurt_with_berries", emeralds: 1 },

    { name: "minecolonies:chicken_broth", emeralds: 2 },
    { name: "minecolonies:corn_chowder", emeralds: 2 },
    { name: "minecolonies:meat_ravioli", emeralds: 2 },
    { name: "minecolonies:mint_tea", emeralds: 2 },
    { name: "minecolonies:pea_soup", emeralds: 2 },
    { name: "minecolonies:polenta", emeralds: 2 },
    { name: "minecolonies:potato_soup", emeralds: 2 },
    { name: "minecolonies:spicy_grilled_chicken", emeralds: 2 },
    { name: "minecolonies:squash_soup", emeralds: 2 },
    { name: "minecolonies:veggie_quiche", emeralds: 2 },

    { name: "minecolonies:baked_salmon", emeralds: 3 },
    { name: "minecolonies:cabochis", emeralds: 3 },
    { name: "minecolonies:cheese_pizza", emeralds: 3 },
    { name: "minecolonies:congee", emeralds: 3 },
    { name: "minecolonies:eggdrop_soup", emeralds: 3 },
    { name: "minecolonies:fish_n_chips", emeralds: 3 },
    { name: "minecolonies:kimchi", emeralds: 3 },
    { name: "minecolonies:lembas_scone", emeralds: 3 },
    { name: "minecolonies:manchet_bread", emeralds: 3 },
    { name: "minecolonies:muffin", emeralds: 3 },
    { name: "minecolonies:mutton_dinner", emeralds: 3 },
    { name: "minecolonies:pasta_plain", emeralds: 3 },
    { name: "minecolonies:pasta_tomato", emeralds: 3 },
    { name: "minecolonies:pepper_hummus", emeralds: 3 },
    { name: "minecolonies:pierogi", emeralds: 3 },
    { name: "minecolonies:plain_cheesecake", emeralds: 3 },
    { name: "minecolonies:pottage", emeralds: 3 },
    { name: "minecolonies:rice_ball", emeralds: 3 },
    { name: "minecolonies:veggie_soup", emeralds: 3 },

    { name: "minecolonies:ancient_tome", emeralds: 4 },

    { name: "minecolonies:borscht", emeralds: 8 },
    { name: "minecolonies:eggplant_dolma", emeralds: 8 },
    { name: "minecolonies:fish_dinner", emeralds: 8 },
    { name: "minecolonies:hand_pie", emeralds: 8 },
    { name: "minecolonies:lamb_stew", emeralds: 8 },
    { name: "minecolonies:mintchoco_cheesecake", emeralds: 8 },
    { name: "minecolonies:mushroom_pizza", emeralds: 8 },
    { name: "minecolonies:pita_hummus", emeralds: 8 },
    { name: "minecolonies:ramen", emeralds: 8 },
    { name: "minecolonies:schnitzel", emeralds: 8 },
    { name: "minecolonies:spicy_eggplant", emeralds: 8 },
    { name: "minecolonies:steak_dinner", emeralds: 8 },
    { name: "minecolonies:stew_trencher", emeralds: 8 },
    { name: "minecolonies:stuffed_pepper", emeralds: 8 },
    { name: "minecolonies:stuffed_pita", emeralds: 8 },
    { name: "minecolonies:sushi_roll", emeralds: 8 },
    { name: "minecolonies:tacos", emeralds: 8 }
  ];

  items.forEach(item => {
    event.custom({
      "type": "create:compacting",
      "ingredients": [
        { "item": item.name },
        { "item": "create:cardboard_block" }
      ],
      "results": [
        { "id": "minecraft:emerald", "count": item.emeralds },
        { "id": "create:cardboard_block" }
      ]
    });
  });
}

// Run the generator
generateCompactingRecipes();


//==========================================================================================================

// Helper function to generate compacting recipes for Farmers Delight items → emerald conversion
function generateFarmersDelightCompactingRecipes() {
  const items = [
    { name: "farmersdelight:beef_patty", emeralds: 1 },
    { name: "farmersdelight:cooked_chicken_cuts", emeralds: 1 },
    { name: "farmersdelight:cooked_bacon", emeralds: 1 },
    { name: "farmersdelight:cooked_cod_slice", emeralds: 1 },
    { name: "farmersdelight:cooked_salmon_slice", emeralds: 1 },
    { name: "farmersdelight:smoked_ham", emeralds: 1 },
    { name: "farmersdelight:cooked_mutton_chops", emeralds: 1 }, 
    { name: "farmersdelight:apple_pie", emeralds: 2 },
    { name: "farmersdelight:sweet_berry_cheesecake", emeralds: 2 },
    { name: "farmersdelight:chocolate_pie", emeralds: 2 },
    { name: "farmersdelight:melon_popsicle", emeralds: 2 },
    { name: "farmersdelight:glow_berry_custard", emeralds: 2 },
    { name: "farmersdelight:fruit_salad", emeralds: 2 },
    { name: "farmersdelight:mixed_salad", emeralds: 2 },
    { name: "farmersdelight:nether_salad", emeralds: 2 },
    { name: "farmersdelight:barbecue_stick", emeralds: 1 },
    { name: "farmersdelight:egg_sandwich", emeralds: 2 },
    { name: "farmersdelight:chicken_sandwich", emeralds: 2 },
    { name: "farmersdelight:hamburger", emeralds: 3 },
    { name: "farmersdelight:bacon_sandwich", emeralds: 2 },
    { name: "farmersdelight:mutton_wrap", emeralds: 2 },
    { name: "farmersdelight:dumplings", emeralds: 1 },
    { name: "farmersdelight:stuffed_potato", emeralds: 2 },
    { name: "farmersdelight:cabbage_rolls", emeralds: 1 },
    { name: "farmersdelight:kelp_roll", emeralds: 2 },
    { name: "farmersdelight:beef_stew", emeralds: 2 },
    { name: "farmersdelight:chicken_soup", emeralds: 3 },
    { name: "farmersdelight:vegetable_soup", emeralds: 3 },
    { name: "farmersdelight:fish_stew", emeralds: 3 },
    { name: "farmersdelight:fried_rice", emeralds: 3 },
    { name: "farmersdelight:pumpkin_soup", emeralds: 3 },
    { name: "farmersdelight:baked_cod_stew", emeralds: 3 },
    { name: "farmersdelight:bacon_and_eggs", emeralds: 2 },
    { name: "farmersdelight:pasta_with_meatballs", emeralds: 4 },
    { name: "farmersdelight:pasta_with_mutton_chop", emeralds: 4 },
    { name: "farmersdelight:mushroom_rice", emeralds: 3 },
    { name: "farmersdelight:roasted_mutton_chops", emeralds: 4 },
    { name: "farmersdelight:vegetable_noodles", emeralds: 3 },
    { name: "farmersdelight:steak_and_potatoes", emeralds: 3 },
    { name: "farmersdelight:ratatouille", emeralds: 3 },
    { name: "farmersdelight:squid_ink_pasta", emeralds: 3 },
    { name: "farmersdelight:grilled_salmon", emeralds: 3 },
    { name: "farmersdelight:roast_chicken_block", emeralds: 5 },
    { name: "farmersdelight:stuffed_pumpkin_block", emeralds: 4 },
    { name: "farmersdelight:honey_glazed_ham_block", emeralds: 4 },
    { name: "farmersdelight:shepherds_pie_block", emeralds: 5 },
    { name: "farmersdelight:rice_roll_medley_block", emeralds: 5 }
  ];

  items.forEach(item => {
    event.custom({
      "type": "create:compacting",
      "ingredients": [
        { "item": item.name },
        { "item": "create:cardboard_block" }
      ],
      "results": [
        { "id": "minecraft:emerald", "count": item.emeralds },
        { "id": "create:cardboard_block" }
      ]
    });
  });
}

// Run the generator
generateFarmersDelightCompactingRecipes();
});