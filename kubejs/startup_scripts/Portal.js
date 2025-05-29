// priority: 0

//Portals
const CustomPortalBuilder = Java.loadClass(
  "net.kyrptonaught.customportalapi.api.CustomPortalBuilder"
);

StartupEvents.postInit((event) => {
  // =========================================
  // Portal to Desert
  // ========================================= 
  
  CustomPortalBuilder.beginPortal()
    ["frameBlock(net.minecraft.resources.ResourceLocation)"](
      new ResourceLocation("create", "cut_ochrum_bricks")
    )
    .destDimID(new ResourceLocation("tedtheteddo", "ted_desert"))
    .lightWithItem(new ResourceLocation("cobblemon", "thunder_stone"))
    .tintColor(221, 173, 26)
    .registerPortal();

  // =========================================
  // Portal to Frozen Ocean
  // =========================================

  CustomPortalBuilder.beginPortal()
  ["frameBlock(net.minecraft.resources.ResourceLocation)"](
    new ResourceLocation("create", "cut_asurine_bricks")
  )
  .destDimID(new ResourceLocation("tedtheteddo", "frozen_ocean"))
  .lightWithItem(new ResourceLocation("cobblemon", "water_stone"))
  .tintColor(0, 150, 255)
  .registerPortal();

  // =========================================
  // Portal to Cave World
  // =========================================

  CustomPortalBuilder.beginPortal()
  ["frameBlock(net.minecraft.resources.ResourceLocation)"](
    new ResourceLocation("create", "cut_crimsite_bricks")
  )
  .destDimID(new ResourceLocation("tedtheteddo", "cave_world"))
  .lightWithItem(new ResourceLocation("cobblemon", "dusk_stone"))
  .tintColor(142, 124, 195)
  .registerPortal();  

});
