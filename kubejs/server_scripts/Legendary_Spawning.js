PlayerEvents.advancement(event => {
    const id = event.advancement;
    const player = event.player;
    const x = Number(player.x);
    const y = Number(player.y);
    const z = Number(player.z);

    if (id === 'tommonspawning:legendaries/gen3/kyogre') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} kyogre lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen3/rayquaza') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} rayquaza lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen3/groudon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} groudon lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen1/zapdos') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zapdos lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen1/moltres') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} moltres lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen1/articuno') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} articuno lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen2/suicune') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} suicune lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen2/raikou') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} raikou lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen2/entei') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} entei lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen4/giratina') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} giratina lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen4/dialga') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} dialga lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen4/palkia') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} palkia lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen5/kyurem') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} kyurem lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen5/reshiram') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} reshiram lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen5/zekrom') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zekrom lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen6/xerneas') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} xerneas lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen6/yveltal') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} yveltal lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen6/zygarde') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zygarde lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen7/necrozma') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} necrozma lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen7/lunala') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} lunala lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen7/solgaleo') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} solgaleo lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen8/eternatus') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} eternatus lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen8/zacian') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zacian lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen8/zamazenta') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} zamazenta lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen9/miraidon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} miraidon lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen9/koraidon') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} koraidon lvl=60`);
    } else if (id === 'tommonspawning:legendaries/gen9/terapagos') {
        Utils.server.runCommand(`pokespawnat ${x} ${y} ${z} terapagos lvl=60`);
    }
});