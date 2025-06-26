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
    event.create('gold_coins').maxStackSize(64).displayName("§6Gold Coins");
    event.create('emerald_coins').maxStackSize(64).displayName("§aEmerald Coins");
    event.create('diamond_coins').maxStackSize(64).displayName("§bDiamond Coins");
    event.create('energite_coins').maxStackSize(64).displayName("§dEnergite Coins");
    event.create('netherite_coins').maxStackSize(64).displayName("§4Netherite Coins");    

    //Irons
    event.create('irons_amulet_of_protection').maxStackSize(64).displayName("Amulet of Protection Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_bane_ring').maxStackSize(64).displayName("Bane Ring Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_barbed_band').maxStackSize(64).displayName("Barbed Band Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_ring_of_haggling').maxStackSize(64).displayName("Ring of Haggling Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_improved_gemset_ring').maxStackSize(64).displayName("Improved Gemset Ring Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_pigling_signet_ring').maxStackSize(64).displayName("Pigling Signet Ring Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_sharpshooter_loop').maxStackSize(64).displayName("Sharpshooter Loop Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_stalwart_ring').maxStackSize(64).displayName("Stalwart Ring Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_superior_gemset_ring').maxStackSize(64).displayName("Superior Gemset Ring Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');
    event.create('irons_tearstone_ring').maxStackSize(64).displayName("Tearstone Ring Recipe").rarity("RARE").tooltip("Uncraft me").texture('kubejs:item/iron_recipe_scroll');

});

  