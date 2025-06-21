// Visit the wiki for more info - https://kubejs.com/
StartupEvents.registry('item', event => {
    event.create('oritech_incomplete_processing_unit').maxStackSize(64).displayName("Incomplete Processing Unit");
    event.create('cce_unstable_compound').maxStackSize(64).displayName("Unstable Compound");
    event.create('cce_strange_compound').maxStackSize(64).displayName("Strange Compound");
    event.create('cce_unrefined_steel_dust').maxStackSize(64).displayName("Unrefined Steel Dust");
    event.create('cce_unrefined_steel_nugget').maxStackSize(64).displayName("Unrefined Steel Nugget");

    //Silent's Tweaks
    event.create('crushed_meteoroid').maxStackSize(64).displayName("Crushed Meteoroid");
    event.create('crushed_netherite').maxStackSize(64).displayName("Crushed Netherite");
    event.create('blank_soul_crystal').maxStackSize(64).displayName("Blank Soul Crystal");
    event.create('blank_mask').maxStackSize(1).displayName("Blank Mask");
    event.create('eternal_prison').maxStackSize(1).displayName("Eternal Prison");
    event.create('copper_coins').maxStackSize(64).displayName("Copper Coins");
    event.create('silver_coins').maxStackSize(64).displayName("Silver Coins");
    event.create('gold_coins').maxStackSize(64).displayName("Gold Coins");
    event.create('iridium_coins').maxStackSize(64).displayName("Iridium Coins");    

  });
