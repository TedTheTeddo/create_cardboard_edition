PlayerEvents.advancement(event => {
    const id = event.advancement.id; // ✅ Correct ID access
    const player = event.player;
    const x = Math.floor(player.x);
    const y = Math.floor(player.y);
    const z = Math.floor(player.z);

    const legendarySpawns = {
        'tommonspawning:pokemon/kyogre': 'kyogre',
        'tommonspawning:pokemon/rayquaza': 'rayquaza',
        'tommonspawning:pokemon/groudon': 'groudon',
        'tommonspawning:pokemon/zapdos': 'zapdos',
        'tommonspawning:pokemon/moltres': 'moltres',
        'tommonspawning:pokemon/articuno': 'articuno',
        'tommonspawning:pokemon/suicune': 'suicune',
        'tommonspawning:pokemon/raikou': 'raikou',
        'tommonspawning:pokemon/entei': 'entei',
        'tommonspawning:pokemon/giratina': 'giratina',
        'tommonspawning:pokemon/dialga': 'dialga',
        'tommonspawning:pokemon/palkia': 'palkia',
        'tommonspawning:pokemon/kyurem': 'kyurem',
        'tommonspawning:pokemon/reshiram': 'reshiram',
        'tommonspawning:pokemon/zekrom': 'zekrom',
        'tommonspawning:pokemon/xerneas': 'xerneas',
        'tommonspawning:pokemon/yveltal': 'yveltal',
        'tommonspawning:pokemon/zygarde': 'zygarde',
        'tommonspawning:pokemon/necrozma': 'necrozma',
        'tommonspawning:pokemon/lunala': 'lunala',
        'tommonspawning:pokemon/solgaleo': 'solgaleo',
        'tommonspawning:pokemon/eternatus': 'eternatus',
        'tommonspawning:pokemon/zacian': 'zacian',
        'tommonspawning:pokemon/zamazenta': 'zamazenta',
        'tommonspawning:pokemon/miraidon': 'miraidon',
        'tommonspawning:pokemon/koraidon': 'koraidon',
        'tommonspawning:pokemon/terapagos': 'terapagos'
    };

    const pokemon = legendarySpawns[id];
    if (pokemon) {
        event.server.runCommandSilent(`pokespawnat ${x} ${y} ${z} ${pokemon} lvl=60`);
    }
});