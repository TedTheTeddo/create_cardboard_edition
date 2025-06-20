// priority: 10


ServerEvents.recipes((event) => {
  let yamlRecipe = (yaml) => event.custom(Lychee.toJSON(yaml))

    yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: minecraft:diamond
    block_in: minecraft:lightning_rod
    post:
      - type: delay
        s: 0.2
      - type: execute
        command: "weather clear"
      - type: execute
        command: "say Weather cleared"
    `).id('cardboard_edition:clear_weather')

  //Sheet Crafting - Brass
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: create:brass_ingot
      count: 1
    post:
      - type: drop_item
        id: create:brass_sheet
    `).id('cardboard_edition:sheet_crafting_brass')

  //Sheet Crafting - Iron
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:iron_ingot
      count: 1
    post:
      - type: drop_item
        id: create:iron_sheet
    `).id('cardboard_edition:sheet_crafting_iron')

  //Sheet Crafting - Gold
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:gold_ingot
      count: 1
    post:
      - type: drop_item
        id: create:golden_sheet
    `).id('cardboard_edition:sheet_crafting_gold')

  //Sheet Crafting - Copper
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:copper_ingot
      count: 1
    post:
      - type: drop_item
        id: create:copper_sheet
    `).id('cardboard_edition:sheet_crafting_copper')

  //Unstable Explosion
  yamlRecipe(`
    type: 'lychee:item_exploding'
    item_in:
      - item: kubejs:cce_unstable_compound
      - item: create:andesite_alloy
    post:
      - type: drop_item
        id: kubejs:cce_strange_compound
    `).id('cardboard_edition:unstable_explosion')


  yamlRecipe(`
    type: 'lychee:lightning_channeling'
    item_in:
      - item: minecraft:echo_shard
    post:
      - type: drop_item
        id: minecraft:sculk_catalyst
    `).id('cardboard_edition:sculk_catalyst')
})