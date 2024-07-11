export class Element {
    static readonly NONATTRIBUTE: Element = new Element("Non-Attribute", 'grey', '--mantine-color-gray-3', '--mantine-color-gray-7');
    static readonly ELECTRIC: Element = new Element("Electric", 'violet', '--mantine-color-violet-3', '--mantine-color-violet-7');
    static readonly FIRE: Element = new Element("Fire", 'red', '--mantine-color-red-3', '--mantine-color-red-7');
    static readonly CHILL: Element = new Element("Chill", 'blue', '--mantine-color-blue-3', '--mantine-color-blue-7');
    static readonly TOXIC: Element = new Element("Toxic", 'lime', '--mantine-color-lime-3', '--mantine-color-lime-7');
    static readonly UNKNOWN: Element = new Element("unknown", 'white', '--mantine-color-white-3', '--mantine-color-white-7')
    static readonly allElements: Element[] = []

    private constructor(private readonly _name: string, private readonly _color: string, private readonly _colorLight: string, private readonly _colorDark: string, private resistances?: Resistances) { }

    static initialize() {
        Element.ELECTRIC.resistances = {
            veryStrong: [Element.ELECTRIC],
            strong: [Element.FIRE],
            normal: [Element.CHILL],
            veryWeak: [Element.TOXIC]
        }
        Element.FIRE.resistances = {
            veryStrong: [Element.FIRE],
            strong: [Element.ELECTRIC],
            normal: [Element.TOXIC],
            veryWeak: [Element.CHILL]
        }
        Element.CHILL.resistances = {
            veryStrong: [Element.CHILL],
            strong: [Element.TOXIC],
            normal: [Element.ELECTRIC],
            veryWeak: [Element.FIRE]
        }
        Element.TOXIC.resistances = {
            veryStrong: [Element.TOXIC],
            strong: [Element.CHILL],
            normal: [Element.FIRE],
            veryWeak: [Element.ELECTRIC]
        }

        this.allElements.push(
            Element.NONATTRIBUTE,
            Element.CHILL,
            Element.FIRE,
            Element.ELECTRIC,
            Element.TOXIC
        )
    }

    get name() {
        return this._name;
    }

    get colorLight(): string {
        return this._colorLight;
    }

    get colorDark(): string {
        return this._colorDark;
    }

    get color(): string {
        return this._color;
    }

    hasResistanceAgainst(): Element[] {
        return this.resistances?.veryStrong.concat(this.resistances?.strong) || []
    }

    doesStrongDamageAgainst(): Element[] {
        const weakElements: Element[] = []
        Element.allElements.forEach(element => {
            const resistances = element.resistances
            if (resistances && resistances.veryWeak.includes(this)) weakElements.push(element)
        })

        return weakElements
    }


}
// Initialize the relationships after all elements have been defined
Element.initialize();

type Resistances = {
    veryStrong: Element[]
    strong: Element[]
    normal: Element[]
    veryWeak: Element[]
}

export class WeaponTypes {
    static readonly SubmachineGun: WeaponTypes = new WeaponTypes("Submachine Gun", "Basic")
    static readonly AssaultRifle: WeaponTypes = new WeaponTypes("Assault Rifle", "Basic")
    static readonly Pistol: WeaponTypes = new WeaponTypes("Pistol", "Basic")
    static readonly HandCannon: WeaponTypes = new WeaponTypes("Hand Cannon", "Special")

    private constructor(private readonly _name: string, private readonly _ammoType: string) { }

    get name(): string {
        return this._name;
    }

    get ammoType(): string {
        return this._ammoType;
    }
}

export class Zone {
    static readonly KINGSTON: Zone = new Zone("kingston", "Kingston", 1, 3, 1, 10)
    static readonly STERILE_LAND: Zone = new Zone("sterileLand", "Sterile Land", 2, 3, 10, 22)
    static readonly VESPERS: Zone = new Zone("vespers", "Vespers", 3, 3, 22, 35)
    static readonly HAGIOS: Zone = new Zone("hagios", "Hagios", 7, 5, 0, 82)
    static readonly FORTRESS: Zone = new Zone("fortress", "Fortress", 8, 5, 83, 100)

    private constructor(readonly key: string, private readonly _name: string, private readonly _zoneNumber: number, private readonly _numberAreas: number, private readonly _minLevel: number, private readonly _maxLevel: number) { }

    get name(): string {
        return this._name;
    }

    get zoneNumber(): number {
        return this._zoneNumber;
    }

    get numberAreas(): number {
        return this._numberAreas;
    }

    get minLevel(): number {
        return this._minLevel;
    }

    get maxLevel(): number {
        return this._maxLevel;
    }
}

export class Boss {

    constructor(private readonly _name: string, private readonly _zone: Zone, private readonly _area: string, private readonly _mission: string, private readonly _damageElement: Element, private readonly _weakness: Element) {}

    get name(): string {
        return this._name
    }

    get zone(): Zone {
        return this._zone
    }

    get area(): string {
        return this._area
    }

    get mission(): string {
        return this._mission
    }

    get damageElement(): Element {
        return this._damageElement
    }

    get weakness(): Element {
        return this._weakness
    }

}

export const bossList = new Map<string, Boss>([
    ['BOSSNAMEIFORGOT', new Boss('', Zone.HAGIOS, '', '', Element.ELECTRIC, Element.TOXIC)],
    ['GOROTH', new Boss('Goroth the Cold-Blooded Vanguard', Zone.FORTRESS, '', '', Element.UNKNOWN, Element.CHILL)]
])

export function getBossByMission(mission: string): Boss | null {
    bossList.forEach(boss => {
        if (boss.mission === mission) return boss
    })
    throw Error(`No boss found for mission: ${mission}`)
}