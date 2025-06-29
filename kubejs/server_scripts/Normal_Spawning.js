PlayerEvents.advancement(event => {
    const id = event.advancement.id; // ✅ Proper ID access
    const player = event.player;
    const playerName = player.name.string;
    const x = Math.floor(player.x);
    const y = Math.floor(player.y);
    const z = Math.floor(player.z);

    const pokemonSpawns = {
        'tommonspawning:pokemon/pikachu': 'pikachu',
        'tommonspawning:pokemon/munchlax': 'munchlax',
        'tommonspawning:pokemon/relicanth': 'relicanth',
        'tommonspawning:pokemon/wailord': 'wailord',
        'tommonspawning:pokemon/miltank': 'miltank'
    };

    const pokemon = pokemonSpawns[id];
    if (pokemon) {
        event.server.runCommandSilent(`pokespawnat ${x} ${y} ${z} ${pokemon} lvl=12`);
    	event.server.runCommandSilent(`advancement revoke ${playerName} only tommonspawning:pokemon/${pokemon}`);
    }
});