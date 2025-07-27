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

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: fire_charge
    block_in: minecraft:lightning_rod
    post:
      - type: delay
        s: 0.2
      - type: execute
        command: "summon minecraft:lightning_bolt ~ ~ ~"
    `).id('cardboard_edition:summon_lightning')

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

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: kubejs:netherite_monstrosity_token
    block_in: minecraft:netherite_block
    contextual:
      type: location
      predicate:
        dimension: minecraft:the_nether
    post:
      - type: delay
        s: 1.0
      - type: execute
        command: "summon cataclysm:netherite_monstrosity ~ ~ ~"
    `).id('cardboard_edition:summon_netherite_monstrosity')

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: kubejs:scylla_token
    block_in: minecraft:netherite_block
    contextual:
      type: location
      predicate:
        dimension: minecraft:overworld
    post:
      - type: delay
        s: 1.0
      - type: execute
        command: "summon cataclysm:scylla ~ ~ ~"
    `).id('cardboard_edition:summon_scylla')

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: kubejs:ancient_remnant_token
    block_in: minecraft:decorated_pot
    contextual:
      type: location
      predicate:
        dimension: minecraft:overworld
    post:
      - type: delay
        s: 1.0
      - type: execute
        command: "summon cataclysm:ancient_remnant ~ ~ ~"
    `).id('cardboard_edition:summon_ancient_remnant')

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: kubejs:harbinger_token
    block_in: minecraft:beacon
    contextual:
      type: location
      predicate:
        dimension: minecraft:overworld
    post:
      - type: delay
        s: 1.0
      - type: execute
        command: "summon cataclysm:harbinger ~ ~ ~"
    `).id('cardboard_edition:summon_the_harbinger')

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: kubejs:ender_guardian_token
    block_in: minecraft:crying_obsidian
    contextual:
      type: location
      predicate:
        dimension: minecraft:the_end
    post:
      - type: delay
        s: 1.0
      - type: execute
        command: "summon cataclysm:ender_guardian ~ ~ ~"
    `).id('cardboard_edition:summon_ender_guardian')

})