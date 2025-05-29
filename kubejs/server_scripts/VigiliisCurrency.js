ServerEvents.recipes(event => {

event.custom({"type": "create:compacting", //Copper to Silver Coins
        "ingredients": [{"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}, {"item": "kubejs:copper_coins"}],
        "results": [{"item": "kubejs:silver_coins"}]})

event.custom({"type": "create:compacting", //Silver to Gold Coins
        "ingredients": [{"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}, {"item": "kubejs:silver_coins"}],
        "results": [{"item": "kubejs:gold_coins"}]})

event.custom({"type": "create:compacting", //Gold to Iridium Coins
        "ingredients": [{"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}, {"item": "kubejs:gold_coins"}],
        "results": [{"item": "kubejs:iridium_coins"}]})
//allow cutting 16 gold coins from an Iridium Coin on the stonecutter
event.stonecutting('16x kubejs:gold_coins', 'kubejs:iridium_coins')
//allow cutting 16 silver coins from a Gold Coin on the stonecutter
event.stonecutting('16x kubejs:silver_coins', 'kubejs:gold_coins')
//allow cutting 16 copper coins from a Silver Coin on the stonecutter
event.stonecutting('16x kubejs:copper_coins', 'kubejs:silver_coins')

event.shapeless("minecraft:diamond", "kubejs:gold_coins")


event.stonecutting('kubejs:shop', 'minecraft:paper')
event.stonecutting('kubejs:sell', 'minecraft:paper')
event.stonecutting('kubejs:buy', 'minecraft:paper')

//Cogs Conversions
event.shapeless("numismatics:cog", "minecraft:diamond")
event.shapeless("minecraft:diamond", "numismatics:cog")

});