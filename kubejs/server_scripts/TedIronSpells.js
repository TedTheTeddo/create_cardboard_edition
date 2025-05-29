// priority: 0

ServerEvents.recipes(event => {
//==========================================================================================================
//========================================== Balances & Fixes ==============================================
//==========================================================================================================

    event.shaped('irons_spellbooks:permafrost_shard', ['BAB','AAA','BAB'], {A: 'minecraft:blue_ice', B: 'minecraft:amethyst_shard'})
    event.shaped('irons_spellbooks:pedestal', ['AAA',' B ', ' B '], {A: 'minecraft:smooth_stone_slab', B: 'minecraft:smooth_stone'})
    event.custom({"type": "create:deploying", 
        "ingredients": [{"item": "minecraft:bone"}, {"item": "minecraft:ice"}],
        "results": [{"item": "irons_spellbooks:frozen_bone"}]})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:glass_bottle"}, "loops": 1,  "results": [{ "item": "irons_spellbooks:legendary_ink"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "irons_spellbooks:arcane_essence"}, [{"item": "irons_spellbooks:arcane_essence"}]],
            "results": [{"item": "irons_spellbooks:arcane_essence"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "irons_spellbooks:arcane_essence"}, [{"item": "irons_spellbooks:arcane_essence"}]],
            "results": [{"item": "irons_spellbooks:arcane_essence"}]},
        {"type": "create:deploying",
            "ingredients": [{"item": "irons_spellbooks:arcane_essence"}, [{"item": "minecraft:nether_star"}]],
            "results": [{"item": "irons_spellbooks:arcane_essence"}]}],
        "transitionalItem": {"item": "irons_spellbooks:arcane_essence"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:smooth_stone"}, "loops": 1,  "results": [{ "item": "irons_spellbooks:blank_rune"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "irons_spellbooks:arcane_essence"}, [{"item": "irons_spellbooks:arcane_essence"}]],
            "results": [{"item": "irons_spellbooks:arcane_essence"}]},
         {"type": "create:deploying",
            "ingredients": [{"item": "irons_spellbooks:arcane_essence"}, [{"item": "minecraft:nether_star"}]],
            "results": [{"item": "irons_spellbooks:arcane_essence"}]},
        {"type": "create:pressing", 
            "ingredients": [{"item": "irons_spellbooks:arcane_essence"}], 
            "results": [{"item": "irons_spellbooks:arcane_essence"}]}],
        "transitionalItem": {"item": "irons_spellbooks:arcane_essence"}})
});