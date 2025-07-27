StartupEvents.registry('block', event => {    
    
    event.create('apristone')
    .displayName('Apristone')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);

    event.create('compressed_apristone')
    .displayName('Compressed Apristone')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);
    
    event.create('double_compressed_apristone')
    .displayName('Double Comprssed Apristone')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);    
    
})