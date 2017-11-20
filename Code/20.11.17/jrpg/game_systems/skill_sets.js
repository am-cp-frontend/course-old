const SPELL_TYPES = {
    DAMAGE: 0,
    HEALING: 1,
    WEAPONSKILL: 2
}

// WHM & RDM

const WhiteMagic = [
    {
        type: SPELL_TYPES.HEALING,
        name: 'Cure',
        potency: 200
    },

    {
        type: SPELL_TYPES.HEALING,
        name: 'Cura',
        potency: 400
    }
]

// WHM

const Summons = [
    {
        type: SPELL_TYPES.DAMAGE,
        name: 'Summon Ramuh',
        potency: 500
    },

    {
        type: SPELL_TYPES.DAMAGE,
        name: 'Summon Ifrit',
        potency: 450
    }
]

// BLM

const BlackMagic = [
    {
        type: SPELL_TYPES.DAMAGE,
        name: 'Fire',
        potency: 400
    },

    {
        type: SPELL_TYPES.DAMAGE,
        name: 'Blizzard',
        potency: 400
    },

    {
        type: SPELL_TYPES.DAMAGE,
        name: 'Thunder',
        potency: 400
    }
]

// RDM

const RedMagic = WhiteMagic.concat(BlackMagic)

// WAR

const MeleeAttack = [
    {
        type: SPELL_TYPES.WEAPONSKILL,
        name: 'Attack',
        potency: 300
    }
]

const BahamutSet = [
    {
        type: SPELL_TYPES.DAMAGE,
        name: 'Akh Morn',
        potency: 300
    }
]

