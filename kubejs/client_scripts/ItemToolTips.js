ItemEvents.modifyTooltips(event => {
	event.add('justdirethings:generatort1', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('easy_mob_farm:enduring_capture_net', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('easy_mob_farm:ironbound_containment_cage', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('easy_mob_farm:void_binding_chain', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('easy_mob_farm:mystic_binding_crystal', {shift: false}, Text.yellow('Intentionally Disabled'));

    event.add('sophisticatedstorage:storage_link', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('sophisticatedstorage:storage_io', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('sophisticatedstorage:storage_input', {shift: false}, Text.yellow('Intentionally Disabled'));
    event.add('sophisticatedstorage:storage_output', {shift: false}, Text.yellow('Intentionally Disabled'));

    event.add('createaddition:rolling_mill', {shift: false}, Text.yellow('Sheet -> Wire, Ingot -> Rods'));
    event.add('createaddition:electrum_ingot', {shift: false}, Text.yellow('Electrified Gold Ingot'));
})