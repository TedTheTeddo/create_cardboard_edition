// Visit the wiki for more info - https://kubejs.com/
Platform.mods.kubejs.name = 'Create Cardboard Edition'

StartupEvents.registry("fluid", (event) => {
    event.create('liquified_slime')
    .displayName("Liquified Slime")        
    .stillTexture("kubejs:fluid/molten_still")          
    .flowingTexture("kubejs:fluid/molten_flow")          
    .noBucket()
    .noBlock()
    .tint(0x008710)
});
