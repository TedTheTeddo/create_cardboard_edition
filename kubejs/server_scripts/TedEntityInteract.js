ItemEvents.entityInteracted('minecraft:glass_bottle', event => {
    if (event.hand !== 'MAIN_HAND') return; // Ensure only main hand is processed
    if (event.target.type !== 'cobblemon:pokemon') return;
    if (event.target.pokemon.species.resourceIdentifier !== 'cobblemon:pikachu') return;

    event.item.count--;
    event.player.giveInHand('irons_spellbooks:lightning_bottle');
    event.target.playSound('irons_spellbooks:lightning_woosh_01')
});

ItemEvents.entityInteracted('minecraft:cake', event => {
    if (event.hand !== 'MAIN_HAND') return; // Ensure only main hand is processed
    if (event.target.type !== 'cobblemon:pokemon') return;
    if (event.target.pokemon.species.resourceIdentifier !== 'cobblemon:snorlax') return;

    event.item.count--;
    event.player.giveInHand('cobblemon:leftovers');
});


const lightningpoke = 
['cobblemon:pikachu',
'cobblemon:raichu',
'cobblemon:geodude',
'cobblemon:graveler',
'cobblemon:golem',
'cobblemon:magnemite',
'cobblemon:magneton',
'cobblemon:voltorb',
'cobblemon:electrode',
'cobblemon:electabuzz',
'cobblemon:jolteon',
'cobblemon:zapdos',
'cobblemon:chinchou',
'cobblemon:lanturn',
'cobblemon:pichu',
'cobblemon:mareep',
'cobblemon:flaaffy',
'cobblemon:ampharos',
'cobblemon:ampharos',
'cobblemon:elekid',
'cobblemon:raikou',
'cobblemon:electrike',
'cobblemon:manectric',
'cobblemon:plusle',
'cobblemon:minun',
'cobblemon:shinx',
'cobblemon:luxio',
'cobblemon:luxray',
'cobblemon:pachirisu',
'cobblemon:magnezone',
'cobblemon:electivire',
'cobblemon:rotom',
'cobblemon:arceus',
'cobblemon:blitzle',
'cobblemon:zebstrika',
'cobblemon:emolga',
'cobblemon:joltik',
'cobblemon:galvantula',
'cobblemon:tynamo',
'cobblemon:eelektrik',
'cobblemon:eelektross',
'cobblemon:stunfisk',
'cobblemon:thundurus',
'cobblemon:zekrom',
'cobblemon:helioptile',
'cobblemon:heliolisk',
'cobblemon:dedenne',
'cobblemon:charjabug',
'cobblemon:vikavolt',
'cobblemon:oricorio',
'cobblemon:silvally',
'cobblemon:togedemaru',
'cobblemon:tapu koko',
'cobblemon:xurkitree',
'cobblemon:zeraora',
'cobblemon:yamper',
'cobblemon:boltund',
'cobblemon:toxel',
'cobblemon:toxtricity',
'cobblemon:pincurchin',
'cobblemon:morpeko',
'cobblemon:dracozolt',
'cobblemon:arctozolt',
'cobblemon:regieleki',
'cobblemon:pawmi',
'cobblemon:pawmo',
'cobblemon:pawmot',
'cobblemon:tadbulb',
'cobblemon:bellibolt',
'cobblemon:wattrel',
'cobblemon:kilowattrel',
'cobblemon:sandy_shocks',
'cobblemon:iron_hands',
'cobblemon:iron_thorns',
'cobblemon:miraidon',
'cobblemon:raging_bolt'
];