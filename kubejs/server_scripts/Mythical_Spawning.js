PlayerEvents.advancement(event => {
    const id = event.advancement;
    const player = event.player;
    const x = Number(player.x);
    const y = Number(player.y);
    const z = Number(player.z);

    if (id === 'tommonspawning:pokemon/mew') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} mew lvl=30`);
    } else if (id === 'tommonspawning:pokemon/celebi') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} celebi lvl=30`);
    } else if (id === 'tommonspawning:pokemon/deoxys') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} deoxys lvl=30`);
    } else if (id === 'tommonspawning:pokemon/arceus') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} arceus lvl=30`);
    } else if (id === 'tommonspawning:pokemon/darkrai') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} darkrai lvl=30`);
    } else if (id === 'tommonspawning:pokemon/manaphy') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} manaphy lvl=30`);
    } else if (id === 'tommonspawning:pokemon/phione') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} phione lvl=30`);
    } else if (id === 'tommonspawning:pokemon/shaymin') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} shaymin lvl=30`);
    } else if (id === 'tommonspawning:pokemon/genesect') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} genesect lvl=30`);
    } else if (id === 'tommonspawning:pokemon/keldeo') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} keldeo lvl=30`);
    } else if (id === 'tommonspawning:pokemon/meloetta') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} meloetta lvl=30`);
    } else if (id === 'tommonspawning:pokemon/diancie') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} diancie lvl=30`);
    } else if (id === 'tommonspawning:pokemon/hoopa') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} hoopa lvl=30`);
    } else if (id === 'tommonspawning:pokemon/volcanion') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} volcanion lvl=30`);
    } else if (id === 'tommonspawning:pokemon/magearna') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} magearna lvl=30`);
    } else if (id === 'tommonspawning:pokemon/marshadow') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} marshadow lvl=30`);
    } else if (id === 'tommonspawning:pokemon/meltan') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} meltan lvl=30`);
    } else if (id === 'tommonspawning:pokemon/melmetal') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} melmetal lvl=30`);
    } else if (id === 'tommonspawning:pokemon/zeraora') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zeraora lvl=30`);
    } else if (id === 'tommonspawning:pokemon/zarude') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zarude lvl=30`);
    } else if (id === 'tommonspawning:pokemon/pecharunt') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} pecharunt lvl=30`);
    }
});