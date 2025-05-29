// priority: 0

// Listen to player login event
PlayerEvents.loggedIn( event => {
 
  const player_name = event.player.getName().getString() 
  console.log("Curios check for " + player_name)                 
  if (!event.player.stages.has('curios_slots_added')) {
    event.player.stages.add('curios_slots_added')
    console.log("Adding curios for " + player_name)
    event.server.runCommandSilent("curios add head " + player_name) 
  }
})