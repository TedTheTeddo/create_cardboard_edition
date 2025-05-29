// priority: 0

StartupEvents.registry('block', event => {
  event.create('apristone')
  .stoneSoundType()
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:needs_iron_tool')
  .requiresTool(true)
  .hardness(1.0)
  .resistance(1.0)

  event.create('compressed_apristone')
  .stoneSoundType()
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:needs_iron_tool')
  .requiresTool(true)
  .hardness(1.0)
  .resistance(1.0)

  event.create('double_compressed_apristone')
  .stoneSoundType()
  .tagBlock('minecraft:mineable/pickaxe')
  .tagBlock('minecraft:needs_iron_tool')
  .requiresTool(true)
  .hardness(1.0)
  .resistance(1.0)
});

StartupEvents.registry('item', event => {
  event.create('copper_coins')
  event.create('silver_coins')
  event.create('gold_coins')
  event.create('iridium_coins')
  event.create('shop')
  event.create('buy')
  event.create('sell')

  event.create('heart_of_alliance').maxStackSize(64).displayName("Heart of Alliance").glow(true).rarity('EPIC');  

});

ItemEvents.modification(event => {
  event.modify('minecraft:cake', item => {
    item.maxStackSize = 64
  })
});