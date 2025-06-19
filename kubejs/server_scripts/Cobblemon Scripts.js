//priority: 0
Platform.mods.kubejs.name = 'Create Cardboard Edition'

ServerEvents.recipes(event => {
	event.recipes.create.sequenced_assembly([ 
        Item.of('mega_showdown:mega_stone')], 'minecraft:obsidian', [
		event.recipes.createFilling('minecraft:obsidian'[], [Fluid.lava(), 'minecraft:obsidian']),
		event.recipes.createPressing('minecraft:obsidian'[], ['minecraft:obsidian'])
	]).transitionalItem('minecraft:obsidian').loops(1)
})