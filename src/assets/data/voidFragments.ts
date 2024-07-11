import { Element, Zone } from "./constants"

export const voidFragments: VoidFragment[] = [
    // Kingston
    {
        zone: Zone.KINGSTON,
        area: 'Grand Square',
        type: Element.NONATTRIBUTE,
        loot: {
            monomer: 1,
            polymer: 1,
            inorganic: 1,
            organic: 1,
            solenoid: 150
        
        }
    },
    // Sterile Land
    {
        zone: Zone.STERILE_LAND,
        area: 'Rockfall',
        type: Element.ELECTRIC,
        loot: {
            monomer: 4,
            polymer: 1,
            inorganic: 0,
            organic: 0,
            solenoid: 210
        }
    },
    {
        zone: Zone.STERILE_LAND,
        area: 'Restricted Zone',
        type: Element.FIRE,
        loot: {
            monomer: 1,
            polymer: 1,
            inorganic: 1,
            organic: 1,
            solenoid: 210
        }
    },
    {
        zone: Zone.STERILE_LAND,
        area: 'Repository',
        type: Element.ELECTRIC,
        loot: {
            monomer: 4,
            polymer: 0,
            inorganic: 1,
            organic: 0,
            solenoid: 210
        }
    },
    {
        zone: Zone.STERILE_LAND,
        area: 'Ironworks',
        type: Element.CHILL,
        loot: {
            monomer: 1,
            polymer: 1,
            inorganic: 1,
            organic: 1,
            solenoid: 210
        }
    },
    // Vespers
    {
        zone: Zone.VESPERS,
        area: 'The Ruins',
        type: Element.CHILL,
        loot: {
            monomer: 1,
            polymer: 4,
            inorganic: 0,
            organic: 0,
            solenoid: 270
        }
    },
    {
        zone: Zone.VESPERS,
        area: 'Lost Supply Depot',
        type: Element.FIRE,
        loot: {
            monomer: 0,
            polymer: 4,
            inorganic: 0,
            organic: 1,
            solenoid: 270
        }
    },
    {
        zone: Zone.VESPERS,
        area: 'Moonlight Lake',
        type: Element.NONATTRIBUTE,
        loot: {
            monomer: 1,
            polymer: 1,
            inorganic: 1,
            organic: 1,
            solenoid: 270
        }
    },
    {
        zone: Zone.VESPERS,
        area: 'Timberfall',
        type: Element.NONATTRIBUTE,
        loot: {
            monomer: 1,
            polymer: 1,
            inorganic: 1,
            organic: 1,
            solenoid: 270
        }
    },
    // Echo Swamp
    {
        zone: Zone.ECHOSWAMP,
        area: 'Abandoned Zone',
        type: Element.TOXIC,
        loot: {
            monomer: 0,
            polymer: 1,
            inorganic: 4,
            organic: 0,
            solenoid: 330
        }
    },
    {
        zone: Zone.ECHOSWAMP,
        area: 'Derelict Covert',
        type: Element.TOXIC,
        loot: {
            monomer: 0,
            polymer: 0,
            inorganic: 4,
            organic: 1,
            solenoid: 330
        }
    },
    {
        zone: Zone.ECHOSWAMP,
        area: 'Muskeg Swamp',
        type: Element.FIRE,
        loot: {
            monomer: 1,
            polymer: 0,
            inorganic: 0,
            organic: 4,
            solenoid: 330
        }
    },
    // Agna Desert
    {
        zone: Zone.AGNADESERT,
        area: 'Vermilion Waste',
        type: Element.ELECTRIC,
        loot: {
            monomer: 0,
            polymer: 0,
            inorganic: 1,
            organic: 4,
            solenoid: 390
        }
    },
    {
        zone: Zone.AGNADESERT,
        area: 'The Storage',
        type: Element.FIRE,
        loot: {
            monomer: 1,
            polymer: 0,
            inorganic: 0,
            organic: 4,
            solenoid: 390
        }
    },
    {
        zone: Zone.AGNADESERT,
        area: 'Miragestone',
        type: Element.NONATTRIBUTE,
        loot: {
            monomer: 1,
            polymer: 1,
            inorganic: 1,
            organic: 1,
            solenoid: 390
        }
    },
    // White-night Gulch
     // Hagios
    // Fortress
]

type VoidFragment = {
    zone: Zone
    area: string
    type: Element
    loot: VoidFragmentLoot
}

type VoidFragmentLoot = {
    monomer: number
    polymer: number
    inorganic: number
    organic: number
    solenoid: number
}