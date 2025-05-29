// priority: 0
ServerEvents.recipes(event => {

  event.shapeless('tconstruct:sky_slime_ball', ['minecraft:slime_ball', 'minecraft:cyan_dye'])
  event.shapeless('tconstruct:sky_vanilla_slime_grass', ['minecraft:dirt', 'tconstruct:sky_slime_ball'])
  event.shapeless('tconstruct:sky_earth_slime_grass', ['tconstruct:earth_slime_dirt', 'tconstruct:sky_slime_ball'])
  event.shapeless('tconstruct:sky_sky_slime_grass', ['tconstruct:sky_slime_dirt', 'tconstruct:sky_slime_ball'])
  
  event.shapeless('tconstruct:earth_vanilla_slime_grass', ['minecraft:dirt', 'minecraft:slime_ball'])
  event.shapeless('tconstruct:earth_earth_slime_grass', ['tconstruct:earth_slime_dirt', 'minecraft:slime_ball'])
  event.shapeless('tconstruct:earth_sky_slime_grass', ['tconstruct:sky_slime_dirt', 'minecraft:slime_ball'])

  event.shapeless('tconstruct:earth_slime_sapling', ['#minecraft:saplings', 'minecraft:slime_ball'])
  event.shapeless('tconstruct:sky_slime_sapling', ['#minecraft:saplings', 'tconstruct:sky_slime_ball'])
  
  });