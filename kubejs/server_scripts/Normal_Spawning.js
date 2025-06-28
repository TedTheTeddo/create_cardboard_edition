PlayerEvents.advancement(event => {
    const id = event.advancement.id; // ✅ Proper ID access
    const player = event.player;
    const x = Math.floor(player.x);
    const y = Math.floor(player.y);
    const z = Math.floor(player.z);

    const pokemonSpawns = {
        'tommonspawning:pokemon/pikachu': 'pikachu',
        'tommonspawning:pokemon/munchlax': 'munchlax',
        'tommonspawning:pokemon/miltank': 'miltank'
    };

    const pokemon = pokemonSpawns[id];
    if (pokemon) {
        event.server.runCommandSilent(`pokespawnat ${x} ${y} ${z} ${pokemon} lvl=12`);
    }