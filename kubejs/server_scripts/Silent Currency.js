ServerEvents.recipes(event => {

//Compacting Coins Recipes

//Copper --> Gold
event.custom({
  "type": "create:compacting",
  "ingredients": [
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"},
        {"item":"kubejs:copper_coins"}

  ],
  "results": [{"id": "kubejs:silver_coins"}]

}) 

//Silver --> Gold
event.custom({
  "type": "create:compacting",
  "ingredients": [
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"},
        {"item":"kubejs:silver_coins"}

  ],
  "results": [{"id": "kubejs:gold_coins"}]

}) 

//Gold --> Iridium
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
  "results": [{"id": "kubejs:iridium_coins"}]

})  

//Stonecutter Coins Recipes

//Iridum --> Gold
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:iridium_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:gold_coins"}]        
})

//Gold --> Silver
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:gold_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:silver_coins"}]        
})
//Silver --> Copper
event.custom({
  "type": "create:cutting",
  "ingredients": [{"item": "kubejs:silver_coins"}],
  "processing_time": 200,
  "results": [{"count": 8, "id": "kubejs:copper_coins"}]        
})

//event.stonecutting('kubejs:shop', 'minecraft:paper')
//event.stonecutting('kubejs:sell', 'minecraft:paper')
//event.stonecutting('kubejs:buy', 'minecraft:paper')

});