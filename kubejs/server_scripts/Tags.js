// priority: 0
//Tags
ServerEvents.tags('block', event => {
    event.add('create:chest_mounted_storage', '/^ironchest:.*_chest$/')
    event.add('create:simple_mounted_storage', '/^sophisticatedbackpacks:.*_backpack$/')
    event.add('create:simple_mounted_storage', 'sophisticatedbackpacks:backpack')
});

ServerEvents.tags('item', event => {
    event.add('create:simple_mounted_storage', '/^sophisticatedbackpacks:.*_backpack$/')
    event.add('create:simple_mounted_storage', 'sophisticatedbackpacks:backpack')
});