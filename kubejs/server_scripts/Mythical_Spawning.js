PlayerEvents.advancement(event => {
    const id = event.advancement.id; // Corrected extraction
    const player = event.player;
    const x = Math.floor(player.x);
    const y = Math.floor(player.y);
    const z = Math.floor(player.z);

    const spawns = {
        'tommonspawning:pokemon/mew': 'mew',
        'tommonspawning:pokemon/celebi': 'celebi',
        'tommonspawning:pokemon/deoxys': 'deoxys',
        'tommonspawning:pokemon/arceus': 'arceus',
        'tommonspawning:pokemon/darkrai': 'darkrai',
        'tommonspawning:pokemon/manaphy': 'manaphy',
        'tommonspawning:pokemon/phione': 'phione',
        'tommonspawning:pokemon/shaymin': 'shaymin',
        'tommonspawning:pokemon/genesect': 'genesect',
        'tommonspawning:pokemon/keldeo': 'keldeo',
        'tommonspawning:pokemon/meloetta': 'meloetta',
        'tommonspawning:pokemon/diancie': 'diancie',
        'tommonspawning:pokemon/hoopa': 'hoopa',
        'tommonspawning:pokemon/volcanion': 'volcanion',
        'tommonspawning:pokemon/magearna': 'magearna',
        'tommonspawning:pokemon/marshadow': 'marshadow',
        'tommonspawning:pokemon/meltan': 'meltan',
        'tommonspawning:pokemon/melmetal': 'melmetal',
        'tommonspawning:pokemon/zeraora': 'zeraora',
        'tommonspawning:pokemon/zarude': 'zarude',
        'tommonspawning:pokemon/pecharunt': 'pecharunt'
    };

    const pokemon = spawns[id];
    if (pokemon) {
        event.server.runCommandSilent(`pokespawnat ${x} ${y} ${z} ${pokemon} lvl=30`);
    }
});