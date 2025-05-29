// priority: 0

ServerEvents.recipes(event => {

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:armor_stand"}, "loops": 16,  "results": [{ "item": "kubejs:pathetic_metallic_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:armor_stand"}, [{"item": "cobblemon:steel_gem"}]],
            "results": [{"item": "cobblemon_steel_gem"}]}],
        "transitionalItem": {"item": "minecraft:armor_stand"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:armor_stand"}, "loops": 16,  "results": [{ "item": "kubejs:pathetic_granite_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:armor_stand"}, [{"item": "cobblemon:rock_gem"}]],
            "results": [{"item": "cobblemon_rock_gem"}]}],
        "transitionalItem": {"item": "minecraft:armor_stand"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:armor_stand"}, "loops": 16,  "results": [{ "item": "kubejs:pathetic_draconic_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:armor_stand"}, [{"item": "cobblemon:dragon_gem"}]],
            "results": [{"item": "cobblemon_dragon_gem"}]}],
        "transitionalItem": {"item": "minecraft:armor_stand"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:armor_stand"}, "loops": 16,  "results": [{ "item": "kubejs:pathetic_frigid_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:armor_stand"}, [{"item": "cobblemon:ice_gem"}]],
            "results": [{"item": "cobblemon_ice_gem"}]}],
        "transitionalItem": {"item": "minecraft:armor_stand"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "minecraft:armor_stand"}, "loops": 16,  "results": [{ "item": "kubejs:pathetic_thunderous_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "minecraft:armor_stand"}, [{"item": "cobblemon:electric_gem"}]],
            "results": [{"item": "cobblemon_electric_gem"}]}],
        "transitionalItem": {"item": "minecraft:armor_stand"}})

    event.custom({"type": "create:deploying",
        "ingredients": [{"item": "kubejs:pathetic_metallic_offering"}, {"item": "kubejs:essence_of_the_iron_golem_t1"}],
        "results": [{"item": "kubejs:meager_metallic_offering"}]})  

    event.custom({"type": "create:deploying",
        "ingredients": [{"item": "kubejs:pathetic_frigid_offering"}, {"item": "kubejs:essence_of_the_snow_golem_t1"}],
        "results": [{"item": "kubejs:meager_frigid_offering"}]})  

    event.custom({"type": "create:deploying",
        "ingredients": [{"item": "kubejs:pathetic_thunderous_offering"}, {"item": "kubejs:essence_of_the_creeper_t1"}],
        "results": [{"item": "kubejs:meager_thunderous_offering"}]})  

    event.custom({"type": "create:deploying",
        "ingredients": [{"item": "kubejs:pathetic_granite_offering"}, {"item": "kubejs:essence_of_the_silverfish_t1"}],
        "results": [{"item": "kubejs:meager_granite_offering"}]})  

    event.custom({"type": "create:deploying",
        "ingredients": [{"item": "kubejs:pathetic_draconic_offering"}, {"item": "minecraft:dragon_head"}],
        "results": [{"item": "kubejs:meager_draconic_offering"}]})  

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:meager_metallic_offering"}, "loops": 64,  "results": [{ "item": "kubejs:excellent_metallic_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "kubejs:meager_metallic_offering"}, [{"item": "create:experience_block"}]],
            "results": [{"item": "kubejs:meager_metallic_offering"}]}],
        "transitionalItem": {"item": "kubejs:meager_metallic_offering"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:meager_frigid_offering"}, "loops": 64,  "results": [{ "item": "kubejs:excellent_frigid_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "kubejs:meager_frigid_offering"}, [{"item": "create:experience_block"}]],
            "results": [{"item": "kubejs:meager_frigid_offering"}]}],
        "transitionalItem": {"item": "kubejs:meager_frigid_offering"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:meager_thunderous_offering"}, "loops": 64,  "results": [{ "item": "kubejs:excellent_thunderous_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "kubejs:meager_thunderous_offering"}, [{"item": "create:experience_block"}]],
            "results": [{"item": "kubejs:meager_thunderous_offering"}]}],
        "transitionalItem": {"item": "kubejs:meager_thunderous_offering"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:meager_granite_offering"}, "loops": 64,  "results": [{ "item": "kubejs:excellent_granite_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "kubejs:meager_granite_offering"}, [{"item": "create:experience_block"}]],
            "results": [{"item": "kubejs:meager_granite_offering"}]}],
        "transitionalItem": {"item": "kubejs:meager_granite_offering"}})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {"item": "kubejs:meager_draconic_offering"}, "loops": 64,  "results": [{ "item": "kubejs:excellent_draconic_offering"}],
        "sequence": 
        [{"type": "create:deploying",            
            "ingredients": [{"item": "kubejs:meager_draconic_offering"}, [{"item": "create:experience_block"}]],
            "results": [{"item": "kubejs:meager_draconic_offering"}]}],
        "transitionalItem": {"item": "kubejs:meager_draconic_offering"}}) 
})
