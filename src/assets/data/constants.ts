export class Element {
    static readonly NONATTRIBUTE: Element = new Element("Non-Attribute", 'grey', '--mantine-color-gray-3', '--mantine-color-gray-7');
    static readonly ELECTRIC: Element = new Element("Electric", 'violet', '--mantine-color-violet-3', '--mantine-color-violet-7');
    static readonly FIRE: Element = new Element("Fire", 'red', '--mantine-color-red-3', '--mantine-color-red-7');
    static readonly CHILL: Element = new Element("Chill", 'blue', '--mantine-color-blue-3', '--mantine-color-blue-7');
    static readonly TOXIC: Element = new Element("Toxic", 'lime', '--mantine-color-lime-3', '--mantine-color-lime-7');

    private constructor(private readonly _name: string, private readonly _color: string, private readonly _colorLight: string, private readonly _colorDark: string, private _weakAgainst?: Element) { }

    static initialize() {
        this.ELECTRIC._weakAgainst = this.TOXIC;
        this.FIRE._weakAgainst = this.CHILL;
        this.CHILL._weakAgainst = this.FIRE;
        this.TOXIC._weakAgainst = this.ELECTRIC;
    }

    get name() {
        return this._name;
    }

    isWeakAgainst(element: Element): boolean {
        return this._weakAgainst === element;
    }

    isStrongAgainst(element: Element): boolean {
        return element._weakAgainst === this;
    }

    get weakAgainst(): Element | undefined {
        return this._weakAgainst
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
}
// Initialize the relationships after all elements have been defined
Element.initialize();

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

    private constructor(readonly key: string, private readonly _name: string, private readonly _zoneNumber: number, private readonly _numberAreas: number, private readonly _minLevel: number, private readonly _maxLevel: number) { }

    get name(): string {
        return this._name;
    }
}