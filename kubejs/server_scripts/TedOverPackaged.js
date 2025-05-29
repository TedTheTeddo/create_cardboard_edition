// priority: 0

ServerEvents.recipes(event => {
    //data get entity @s SelectedItem

    const items = [
        'create:cardboard_package_12x12',
        'create:cardboard_package_12x10',
        'create:cardboard_package_10x10',
        'create:cardboard_package_10x8',
        'create:cardboard_package_8x6'
    ];

   // const range = Array.from({ length: 64 }, (_, i) => i + 1);
   // items.forEach(item => {
   //     event.shapeless(
   //         Item.of('minecraft:chest'),
   //         Item.of(items, '{Items:{Items:[{Count:64b,Slot:range,id:"create:andesite_funnel"},{Count:64b,Slot:range,id:"minecraft:chest"}],Size:9}}'),
   //     );
   // });

});