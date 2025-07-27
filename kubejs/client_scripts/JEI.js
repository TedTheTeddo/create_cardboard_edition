RecipeViewerEvents.removeEntries('item', event => {
	event.remove('/spawn_egg/')
	event.remove('/chipped/')
	event.remove('minecraft:tipped_arrow')
	event.remove('minecraft:lingering_potion')
	event.remove('minecraft:splash_potion')
	event.remove('minecraft:painting')
	event.remove('minecraft:suspicious_stew')
	event.remove('minecraft:goat_horn')

	event.remove('oritech:electrum_ingot')        //Remove from JEI
    event.remove('oritech:electrum_block')        //Remove from JEI
    event.remove('oritech:basic_generator_block') //Remove from JEI
    event.remove('oritech:fluid_pipe')            //Remove from JEI
    event.remove('oritech:framed_fluid_pipe')     //Remove from JEI
    event.remove('oritech:fluid_pipe_duct_block') //Remove from JEI
})

RecipeViewerEvents.addEntries('item', event => {
	event.add('chipped:botanist_workbench')
	event.add('chipped:glassblower')
	event.add('chipped:carpenters_table')
	event.add('chipped:loom_table')
	event.add('chipped:mason_table')
	event.add('chipped:alchemy_bench')
	event.add('chipped:tinkering_table')
	event.add('chipped:watering_can')
	event.add('chipped:alchemy_book')
	event.add('chipped:saw')
	event.add('chipped:needles')
	event.add('chipped:chisel')
	event.add('chipped:multimeter')
	event.add('create:chromatic_compound')
	event.add('dailyshop:daily_shop')
})