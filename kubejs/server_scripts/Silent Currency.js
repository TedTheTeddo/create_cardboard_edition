ServerEvents.recipes(event => {

//Compacting Coins Recipes

//Energite Coins --> Netherite Coins
event.custom({
  "type": "create:compacting",
  "ingredients": [
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"},
        {"item":"kubejs:energite_coins"}

  ],
  "results": [{"id": "kubejs:netherite_coins"}]

}) 

//Diamond Coins --> Energite Coins
event.custom({
  "type": "create:compacting",
  "ingredients": [
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"},
        {"item":"kubejs:diamond_coins"}

  ],
  "results": [{"id": "kubejs:energite_coins"}]

}) 

//Emerald Coins --> Diamond Coins
event.custom({
  "type": "create:compacting",
  "ingredients": [
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"},
        {"item":"kubejs:emerald_coins"}

  ],
  "results": [{"id": "kubejs:diamond_coins"}]

}) 

//Gold Coins --> Emerald Coins
event.custom({
  "type": "create:compacting",
  "ingredients": [
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"},
        {"item":"kubejs:gold_coins"}

  ],
  "results": [{"id": "kubejs:emerald_coins"}]

})  

//Stonecutter Coins Recipes

//Emeralds --> Emerald Coins
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "minecraft:emerald"}],
  "processing_time": 200,
  "results": [{"count": 1, "id": "kubejs:emerald_coins"}]        
})

//Netherite Coin--> Energite Coin
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:netherite_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:energite_coins"}]        
})

//Energite Coin --> Diamond Coin
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:energite_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:diamond_coins"}]        
})
//Diamond Coin --> Emerald Coin
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:diamond_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:emerald_coins"}]        
})

//Emerald Coin --> Gold Coin
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:emerald_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:gold_coins"}]        
})

//Shapeless Crafting Recipes///

//Emerald Coins --> Emeralds
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [{"item": "kubejs:emerald_coins"}],
  "result": {"count": 1, "id": "minecraft:emerald"}
})

//Emeralds --> Emerald Coins
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [{"item": "minecraft:emerald"}],
  "result": {"count": 1, "id": "kubejs:emerald_coins"}
})

///Coins Downward///

//Netherite Coin --> Energite Coins
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [{"item": "kubejs:netherite_coins"}],
  "result": {"count": 8, "id": "kubejs:energite_coins"}
})

//Energite Coin --> Diamond Coins
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [{"item": "kubejs:energite_coins"}],
  "result": {"count": 8, "id": "kubejs:diamond_coins"}
})

//Diamond Coin --> Emerald Coins
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [{"item": "kubejs:diamond_coins"}],
  "result": {"count": 8, "id": "kubejs:emerald_coins"}
})

//Emerald Coin --> Gold Coins
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [{"item": "kubejs:emerald_coins"}],
  "result": {"count": 8, "id": "kubejs:gold_coins"}
})

///Coins Upward///

//Gold Coins --> Emerald Coin
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"},
    {"item": "kubejs:gold_coins"}
  ],
  "result": {"count": 1, "id": "kubejs:emerald_coins"}
})

//Emerald Coins --> Diamond Coin
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"},
    {"item": "kubejs:emerald_coins"}
  ],
  "result": {"count": 1, "id": "kubejs:diamond_coins"}
})

//Diamond Coins --> Energite Coin
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"},
    {"item": "kubejs:diamond_coins"}
  ],
  "result": {"count": 1, "id": "kubejs:energite_coins"}
})

//Energite Coins --> Netherite Coin
event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"},
    {"item": "kubejs:energite_coins"}
  ],
  "result": {"count": 1, "id": "kubejs:netherite_coins"}
})

//event.stonecutting('kubejs:shop', 'minecraft:paper')
//event.stonecutting('kubejs:sell', 'minecraft:paper')
//event.stonecutting('kubejs:buy', 'minecraft:paper')

});