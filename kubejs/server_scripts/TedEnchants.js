// priority: 0

ServerEvents.recipes(event => {
// Function to create enchanted book recipes with different inputs
function createEnchantedBookRecipe(enchantment, item1, item2, level) {
    event.recipes.minecraft.crafting_shaped(
        Item.of('minecraft:enchanted_book').enchant(enchantment, level), // Result
        [
            'BBB',
            'CAD',
            'BBB'
        ],
        {
            A: 'minecraft:book',
            B: 'create:experience_nugget',
            C: item1,
            D: item2,
        }
    );
}

// Create the recipes

//Level 1
createEnchantedBookRecipe('minecraft:protection', 'minecraft:iron_ingot', 'minecraft:shield', 1);
createEnchantedBookRecipe('minecraft:fire_protection', 'minecraft:netherrack', 'minecraft:shield', 1);
createEnchantedBookRecipe('minecraft:blast_protection', 'minecraft:gunpowder', 'minecraft:shield', 1);
createEnchantedBookRecipe('minecraft:projectile_protection', 'minecraft:arrow', 'minecraft:shield', 1);
createEnchantedBookRecipe('minecraft:aqua_affinity', 'minecraft:seagrass', 'minecraft:kelp', 1);
createEnchantedBookRecipe('minecraft:bane_of_arthropods', 'minecraft:quartz', 'minecraft:spider_eye', 1);
createEnchantedBookRecipe('minecraft:depth_strider', 'minecraft:seagrass', 'minecraft:leather_boots', 1);
createEnchantedBookRecipe('minecraft:efficiency', 'minecraft:carrot', 'minecraft:iron_pickaxe', 1);
createEnchantedBookRecipe('minecraft:feather_falling', 'minecraft:chicken', 'minecraft:feather', 1);
createEnchantedBookRecipe('minecraft:fire_aspect', 'minecraft:quartz', 'minecraft:campfire', 1);
createEnchantedBookRecipe('minecraft:fortune', 'minecraft:diamond', 'minecraft:iron_pickaxe', 1);
createEnchantedBookRecipe('minecraft:impaling', 'minecraft:quartz', 'minecraft:kelp', 1);
createEnchantedBookRecipe('minecraft:infinity', 'minecraft:quartz', 'minecraft:arrow', 1);
createEnchantedBookRecipe('minecraft:knockback', 'minecraft:quartz', '#minecraft:signs', 1);
createEnchantedBookRecipe('minecraft:looting', 'minecraft:quartz', 'minecraft:diamond', 1);
createEnchantedBookRecipe('minecraft:loyalty', 'minecraft:quartz', 'minecraft:seagrass', 1);
createEnchantedBookRecipe('minecraft:luck_of_the_sea', 'minecraft:fishing_rod', 'minecraft:diamond', 1);
createEnchantedBookRecipe('minecraft:lure', 'minecraft:fishing_rod', '#minecraft:fishes', 1);
createEnchantedBookRecipe('minecraft:mending', 'minecraft:emerald', '#minecraft:anvil', 1);
createEnchantedBookRecipe('minecraft:multishot', 'minecraft:bow', 'minecraft:string', 1);
createEnchantedBookRecipe('minecraft:piercing', 'minecraft:bow', 'minecraft:arrow', 1);
createEnchantedBookRecipe('minecraft:power', 'minecraft:bow', 'minecraft:emerald', 1);
createEnchantedBookRecipe('minecraft:punch', 'minecraft:quartz', 'minecraft:emerald', 1);
createEnchantedBookRecipe('minecraft:quick_charge', 'minecraft:crossbow', 'minecraft:emerald', 1);
createEnchantedBookRecipe('minecraft:respiration', 'minecraft:seagrass', 'minecraft:glass', 1);
createEnchantedBookRecipe('minecraft:riptide', 'minecraft:seagrass', 'minecraft:lightning_rod', 1);
createEnchantedBookRecipe('minecraft:sharpness', 'minecraft:quartz', 'minecraft:quartz_block', 1);
createEnchantedBookRecipe('minecraft:silk_touch', 'minecraft:iron_pickaxe', 'minecraft:cobweb', 1);
createEnchantedBookRecipe('minecraft:smite', 'minecraft:quartz', 'minecraft:soul_sand', 1);
createEnchantedBookRecipe('minecraft:soul_speed', 'minecraft:iron_boots', 'minecraft:soul_sand', 1);
createEnchantedBookRecipe('minecraft:sweeping', 'minecraft:quartz', 'minecraft:iron_sword', 1);
createEnchantedBookRecipe('minecraft:swift_sneak', 'minecraft:iron_boots', 'minecraft:feather', 1);
createEnchantedBookRecipe('minecraft:thorns', 'minecraft:shield', 'minecraft:quartz', 1);
createEnchantedBookRecipe('minecraft:unbreaking', 'minecraft:diamond', 'minecraft:obsidian', 1);
createEnchantedBookRecipe('combatroll:longfooted', 'minecraft:leather_boots', 'minecraft:string', 1);
createEnchantedBookRecipe('combatroll:acrobat', 'minecraft:leather_boots', 'minecraft:feather', 1);
createEnchantedBookRecipe('combatroll:multi_roll', 'minecraft:leather_boots', 'minecraft:emerald', 1);
createEnchantedBookRecipe('deeperdarker:catalysis', 'minecraft:sculk', 'minecraft:diamond_block', 1);

function createEnchantedBookRecipe2(enchantment, item1, level) {
  event.recipes.minecraft.crafting_shaped(
      Item.of('minecraft:enchanted_book').enchant(enchantment, level), // Result
      [
          'AA'
      ],
      {
          A: item1,
      }
  );
}
// Impaling
createEnchantedBookRecipe2("minecraft:impaling", Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:impaling", Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:impaling", Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 3).strongNBT(), 4);
createEnchantedBookRecipe2("minecraft:impaling", Item.of('minecraft:enchanted_book').enchant('minecraft:impaling', 4).strongNBT(), 5);

// Efficiency
createEnchantedBookRecipe2("minecraft:efficiency", Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:efficiency", Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:efficiency", Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 3).strongNBT(), 4);
createEnchantedBookRecipe2("minecraft:efficiency", Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 4).strongNBT(), 5);

// Power
createEnchantedBookRecipe2("minecraft:power", Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:power", Item.of('minecraft:enchanted_book').enchant('minecraft:power', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:power", Item.of('minecraft:enchanted_book').enchant('minecraft:power', 3).strongNBT(), 4);
createEnchantedBookRecipe2("minecraft:power", Item.of('minecraft:enchanted_book').enchant('minecraft:power', 4).strongNBT(), 5);

// Sharpness
createEnchantedBookRecipe2("minecraft:sharpness", Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:sharpness", Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:sharpness", Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 3).strongNBT(), 4);
createEnchantedBookRecipe2("minecraft:sharpness", Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 4).strongNBT(), 5);

// Smite
createEnchantedBookRecipe2("minecraft:smite", Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:smite", Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:smite", Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 3).strongNBT(), 4);
createEnchantedBookRecipe2("minecraft:smite", Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 4).strongNBT(), 5);

// Longfooted
createEnchantedBookRecipe2("combatroll:longfooted", Item.of('minecraft:enchanted_book').enchant('combatroll:longfooted', 1).strongNBT(), 2);
createEnchantedBookRecipe2("combatroll:longfooted", Item.of('minecraft:enchanted_book').enchant('combatroll:longfooted', 2).strongNBT(), 3);
createEnchantedBookRecipe2("combatroll:longfooted", Item.of('minecraft:enchanted_book').enchant('combatroll:longfooted', 3).strongNBT(), 4);

// Protection
createEnchantedBookRecipe2("minecraft:protection", Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:protection", Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:protection", Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 3).strongNBT(), 4);

// Fire Protection
createEnchantedBookRecipe2("minecraft:fire_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:fire_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:fire_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 3).strongNBT(), 4);

// Blast Protection
createEnchantedBookRecipe2("minecraft:blast_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:blast_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:blast_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 3).strongNBT(), 4);

// Projectile Protection
createEnchantedBookRecipe2("minecraft:projectile_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:projectile_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:projectile_protection", Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 3).strongNBT(), 4);

// Feather Falling
createEnchantedBookRecipe2("minecraft:feather_falling", Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:feather_falling", Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:feather_falling", Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 3).strongNBT(), 4);

// Bane of Arthropods
createEnchantedBookRecipe2("minecraft:bane_of_arthropods", Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:bane_of_arthropods", Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:bane_of_arthropods", Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 3).strongNBT(), 4);

// Piercing
createEnchantedBookRecipe2("minecraft:piercing", Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:piercing", Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 2).strongNBT(), 3);
createEnchantedBookRecipe2("minecraft:piercing", Item.of('minecraft:enchanted_book').enchant('minecraft:piercing', 3).strongNBT(), 4);

// Multi Roll
createEnchantedBookRecipe2("combatroll:multi_roll", Item.of('minecraft:enchanted_book').enchant('combatroll:multi_roll', 1).strongNBT(), 2);
createEnchantedBookRecipe2("combatroll:multi_roll", Item.of('minecraft:enchanted_book').enchant('combatroll:multi_roll', 2).strongNBT(), 3);
createEnchantedBookRecipe2("combatroll:multi_roll", Item.of('minecraft:enchanted_book').enchant('combatroll:multi_roll', 3).strongNBT(), 4);

// Depth Strider
createEnchantedBookRecipe2("minecraft:depth_strider", Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:depth_strider", Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 2).strongNBT(), 3);

// Fortune
createEnchantedBookRecipe2("minecraft:fortune", Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:fortune", Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 2).strongNBT(), 3);

// Looting
createEnchantedBookRecipe2("minecraft:looting", Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:looting", Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT(), 3);

// Loyalty
createEnchantedBookRecipe2("minecraft:loyalty", Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:loyalty", Item.of('minecraft:enchanted_book').enchant('minecraft:loyalty', 2).strongNBT(), 3);

// Luck of the Sea
createEnchantedBookRecipe2("minecraft:luck_of_the_sea", Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:luck_of_the_sea", Item.of('minecraft:enchanted_book').enchant('minecraft:luck_of_the_sea', 2).strongNBT(), 3);

// Lure
createEnchantedBookRecipe2("minecraft:lure", Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:lure", Item.of('minecraft:enchanted_book').enchant('minecraft:lure', 2).strongNBT(), 3);

// Quick Charge
createEnchantedBookRecipe2("minecraft:quick_charge", Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:quick_charge", Item.of('minecraft:enchanted_book').enchant('minecraft:quick_charge', 2).strongNBT(), 3);

// Respiration
createEnchantedBookRecipe2("minecraft:respiration", Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:respiration", Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 2).strongNBT(), 3);

// Riptide
createEnchantedBookRecipe2("minecraft:riptide", Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:riptide", Item.of('minecraft:enchanted_book').enchant('minecraft:riptide', 2).strongNBT(), 3);

// Soul Speed
createEnchantedBookRecipe2("minecraft:soul_speed", Item.of('minecraft:enchanted_book').enchant('minecraft:soul_speed', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:soul_speed", Item.of('minecraft:enchanted_book').enchant('minecraft:soul_speed', 2).strongNBT(), 3);

// Sweeping Edge
createEnchantedBookRecipe2("minecraft:sweeping", Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:sweeping", Item.of('minecraft:enchanted_book').enchant('minecraft:sweeping', 2).strongNBT(), 3);

// Swift Sneak
createEnchantedBookRecipe2("minecraft:swift_sneak", Item.of('minecraft:enchanted_book').enchant('minecraft:swift_sneak', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:swift_sneak", Item.of('minecraft:enchanted_book').enchant('minecraft:swift_sneak', 2).strongNBT(), 3);

// Thorns
createEnchantedBookRecipe2("minecraft:thorns", Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:thorns", Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 2).strongNBT(), 3);

// Unbreaking
createEnchantedBookRecipe2("minecraft:unbreaking", Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1).strongNBT(), 2);
createEnchantedBookRecipe2("minecraft:unbreaking", Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 2).strongNBT(), 3);

// Fire Aspect
createEnchantedBookRecipe2("minecraft:fire_aspect", Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1).strongNBT(), 2);

// Knockback
createEnchantedBookRecipe2("minecraft:knockback", Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 1).strongNBT(), 2);

// Punch
createEnchantedBookRecipe2("minecraft:punch", Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 1).strongNBT(), 2);

});