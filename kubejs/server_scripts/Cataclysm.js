// priority: 2

//==========================================================================================================

LootJS.lootTables(event => {
    event.modifyEntityTables("cataclysm:ancient_remnant").createPool(pool => {
    pool.addEntry("kubejs:ancient_remnant_token")})

    event.modifyEntityTables("cataclysm:scylla").createPool(pool => {
    pool.addEntry("kubejs:scylla_token")})

    event.modifyEntityTables("cataclysm:netherite_monstrosity").createPool(pool => {
    pool.addEntry("kubejs:netherite_monstrosity_token")})

    event.modifyEntityTables("cataclysm:the_harbinger").createPool(pool => {
    pool.addEntry("kubejs:harbinger_token")})

    event.modifyEntityTables("cataclysm:ender_guardian").createPool(pool => {
    pool.addEntry("kubejs:ender_guardian_token")})

})
ServerEvents.recipes(event => {

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [{"item": "minecraft:blaze_powder"},{ "item": "oritech:coal_dust"}],
        "results": [{ "id": "cataclysm:burning_ashes"}]});

});
//==========================================================================================================
//==========================================  To DOs   =====================================================
//==========================================================================================================