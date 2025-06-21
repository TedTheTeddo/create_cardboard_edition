{
        name: "Shadow Mewtwonite X",
        spritenum: 600,
        megaStone: "Mewtwo-Shadow-Mega-X",
        megaEvolves: "Mewtwo",
        itemUser: ["Mewtwo-Shadow"],
        onTakeItem(item, source) {
            if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
            return true;
        },
        num: -662,
        gen: 6,
        isNonstandard: "Past"
}