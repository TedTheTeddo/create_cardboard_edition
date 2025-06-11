PlayerEvents.advancement(event => {
    const id = event.advancement;
    const player = event.player;
    const x = Number(player.x);
    const y = Number(player.y);
    const z = Number(player.z);

    if (id === 'tommonspawning:normals/pikachu') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} pikachu lvl=12`);
    } else if (id === 'tommonspawning:normals/munchlax') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} munchlax lvl=12`);
    } else if (id === 'tommonspawning:normals/miltank') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} miltank lvl=12`);
    }
});