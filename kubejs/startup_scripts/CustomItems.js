// Visit the wiki for more info - https://kubejs.com/
StartupEvents.registry('item', event => {
    event.create('oritech_incomplete_processing_unit').maxStackSize(64).displayName("Incomplete Processing Unit");
    event.create('cce_unstable_compound').maxStackSize(64).displayName("Unstable Compound");
    event.create('cce_strange_compound').maxStackSize(64).displayName("Strange Compound");
    event.create('cce_unrefined_steel_dust').maxStackSize(64).displayName("Unrefined Steel Dust");
    event.create('cce_unrefined_steel_nugget').maxStackSize(64).displayName("Unrefined Steel Nugget");

    event.create('crushed_meteoroid').maxStackSize(64).displayName("Crushed Meteoroid");
    event.create('crushed_netherite').maxStackSize(64).displayName("Crushed Netherite");
    event.create('blank_soul_crystal').maxStackSize(64).displayName("Blank Soul Crystal");
  });
