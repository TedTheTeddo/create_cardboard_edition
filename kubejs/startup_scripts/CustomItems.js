// Visit the wiki for more info - https://kubejs.com/
Platform.mods.kubejs.name = 'Create Cardboard Edition'

StartupEvents.registry('item', event => {
    event.create('oritech_incomplete_processing_unit').maxStackSize(64).displayName("Incomplete Processing Unit");
    event.create('cce_unstable_compound').maxStackSize(64).displayName("Unstable Compound");
    event.create('cce_strange_compound').maxStackSize(64).displayName("Strange Compound");
  });
