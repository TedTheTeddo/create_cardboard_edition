// priority: 10

ServerEvents.recipes((event) => {
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:ignitium_ingot"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:nether_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:nether_eye")

    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:witherite_ingot"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:wither_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:wither_eye")

    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:sandstorm_in_a_bottle"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:cryptic_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:cryptic_eye")

    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInput": {
            "amount": 0,
            "fluid": "minecraft:empty"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
            "item": "cataclysm:lava_power_cell"
            },
            {
            "item": "minecraft:ender_eye"
            },
            {
            "item": "minecraft:ender_eye"
            }
        ],
        "results": [
            {
            "count": 1,
            "id": "endrem:corrupted_eye"
            }
        ],
        "time": 5
        }).id("cardboardedition:corrupted_eye")
})