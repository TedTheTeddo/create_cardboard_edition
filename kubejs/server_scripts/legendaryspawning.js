PlayerEvents.advancement(event => {
    const id = event.advancement;
    const player = event.player;
    const x = Number(player.x);
    const y = Number(player.y);
    const z = Number(player.z);

    if (id === 'tommonspawning:legendaries/kyogre') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} kyogre lvl=60`);
    } else if (id === 'tommonspawning:legendaries/rayquaza') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} rayquaza lvl=60`);
    } else if (id === 'tommonspawning:legendaries/groudon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} groudon lvl=60`);
    }
});