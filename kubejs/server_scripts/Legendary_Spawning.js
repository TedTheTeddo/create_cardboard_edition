PlayerEvents.advancement(event => {
    const id = event.advancement;
    const player = event.player;
    const x = Number(player.x);
    const y = Number(player.y);
    const z = Number(player.z);

    if (id === 'tommonspawning:pokemon/kyogre') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} kyogre lvl=60`);
    } else if (id === 'tommonspawning:pokemon/rayquaza') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} rayquaza lvl=60`);
    } else if (id === 'tommonspawning:pokemon/groudon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} groudon lvl=60`);
    } else if (id === 'tommonspawning:pokemon/zapdos') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zapdos lvl=60`);
    } else if (id === 'tommonspawning:pokemon/moltres') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} moltres lvl=60`);
    } else if (id === 'tommonspawning:pokemon/articuno') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} articuno lvl=60`);
    } else if (id === 'tommonspawning:pokemon/suicune') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} suicune lvl=60`);
    } else if (id === 'tommonspawning:pokemon/raikou') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} raikou lvl=60`);
    } else if (id === 'tommonspawning:pokemon/entei') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} entei lvl=60`);
    } else if (id === 'tommonspawning:pokemon/giratina') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} giratina lvl=60`);
    } else if (id === 'tommonspawning:pokemon/dialga') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} dialga lvl=60`);
    } else if (id === 'tommonspawning:pokemon/palkia') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} palkia lvl=60`);
    } else if (id === 'tommonspawning:pokemon/kyurem') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} kyurem lvl=60`);
    } else if (id === 'tommonspawning:pokemon/reshiram') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} reshiram lvl=60`);
    } else if (id === 'tommonspawning:pokemon/zekrom') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zekrom lvl=60`);
    } else if (id === 'tommonspawning:pokemon/xerneas') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} xerneas lvl=60`);
    } else if (id === 'tommonspawning:pokemon/yveltal') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} yveltal lvl=60`);
    } else if (id === 'tommonspawning:pokemon/zygarde') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zygarde lvl=60`);
    } else if (id === 'tommonspawning:pokemon/necrozma') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} necrozma lvl=60`);
    } else if (id === 'tommonspawning:pokemon/lunala') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} lunala lvl=60`);
    } else if (id === 'tommonspawning:pokemon/solgaleo') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} solgaleo lvl=60`);
    } else if (id === 'tommonspawning:pokemon/eternatus') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} eternatus lvl=60`);
    } else if (id === 'tommonspawning:pokemon/zacian') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zacian lvl=60`);
    } else if (id === 'tommonspawning:pokemon/zamazenta') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zamazenta lvl=60`);
    } else if (id === 'tommonspawning:pokemon/miraidon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} miraidon lvl=60`);
    } else if (id === 'tommonspawning:pokemon/koraidon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} koraidon lvl=60`);
    } else if (id === 'tommonspawning:pokemon/terapagos') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} terapagos lvl=60`);
    }
});