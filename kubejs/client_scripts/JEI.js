JEIEvents.addItems(e => { e.add(Ingredient.of('@create').getItemIds().toArray()); });
JEIEvents.addItems(e => { e.add(Ingredient.of('@createaddition').getItemIds().toArray()); });
//JEIEvents.addItems(e => { e.add(Ingredient.of('@irons_spellbooks').getItemIds().toArray()); });
//JEIEvents.addItems(e => { e.add(Ingredient.of('@conquest').getItemIds().toArray()); });

JEIEvents.hideItems(event => {
  event.hide('/spawn_egg/')
  event.hide('/chipped/')
  //event.hide('/^ars_nouveau:.*_se$/') - left in for examples
  //event.hide('/^alexscaves:.*_egg$/') - left in for examples
  //event.hide('@everycomp') - left in for examples (for all mod of that name)
  event.hide('minecraft:tipped_arrow')
  event.hide('minecraft:lingering_potion')
  event.hide('minecraft:splash_potion')
  event.hide('minecraft:painting')
  event.hide('minecraft:suspicious_stew')
  event.hide('minecraft:goat_horn')

  //Tinker
  event.hide('/^tconstruct:.*_red_sand_cast$/')
  event.hide('tconstruct:pickaxe')
  event.hide('tconstruct:pickadze')
  event.hide('tconstruct:mattock')
  event.hide('tconstruct:hand_axe')
  event.hide('tconstruct:kama')
  event.hide('tconstruct:dagger')
  event.hide('tconstruct:sword')
  event.hide('tconstruct:sledge_hammer')
  event.hide('tconstruct:vein_hammer')
  event.hide('tconstruct:excavator')
  event.hide('tconstruct:broad_axe')
  event.hide('tconstruct:scythe')
  event.hide('tconstruct:cleaver')
  event.hide('tconstruct:crossbow')
  event.hide('tconstruct:longbow')
  event.hide('tconstruct:melting_pan')
  event.hide('tconstruct:war_pick')
  event.hide('tconstruct:battlesign')
  event.hide('tconstruct:potion')

  //TM
   event.hide('@simpletms')

   //KubeJS
   event.hide('/^kubejs:.*_ball$/')
   event.hide('/^kubejs:.*_t4$/')
   event.hide('/^kubejs:.*_t3$/')
   event.hide('/^kubejs:.*_t2$/')
   event.hide('/^kubejs:.*_offering$/')

});

JEIEvents.addItems(e => { 
  e.add('simpletms:tr_blank')
  e.add('simpletms:tm_blank')
  e.add('chipped:botanist_workbench')
	e.add('chipped:glassblower')
	e.add('chipped:carpenters_table')
	e.add('chipped:loom_table')
	e.add('chipped:mason_table')
	e.add('chipped:alchemy_bench')
	e.add('chipped:tinkering_table')


});