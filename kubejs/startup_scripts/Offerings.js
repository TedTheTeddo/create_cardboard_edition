// priority: 0

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('pathetic_metallic_offering').maxStackSize(1)
    event.create('pathetic_frigid_offering').maxStackSize(1)
    event.create('pathetic_granite_offering').maxStackSize(1)
    event.create('pathetic_thunderous_offering').maxStackSize(1)
    event.create('pathetic_draconic_offering').maxStackSize(1)
    event.create('meager_metallic_offering').maxStackSize(1)
    event.create('meager_frigid_offering').maxStackSize(1)
    event.create('meager_granite_offering').maxStackSize(1)
    event.create('meager_thunderous_offering').maxStackSize(1)
    event.create('meager_draconic_offering').maxStackSize(1)
    event.create('excellent_metallic_offering').maxStackSize(1)
    event.create('excellent_frigid_offering').maxStackSize(1)
    event.create('excellent_granite_offering').maxStackSize(1)
    event.create('excellent_thunderous_offering').maxStackSize(1)
    event.create('excellent_draconic_offering').maxStackSize(1)
  });