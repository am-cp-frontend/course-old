class Character {
    constructor (baseHP, baseSTR, baseINT) {
        this.maxHP = baseHP
        this.hp = baseHP
        this.str = baseSTR
        this.int = baseINT
    }

    calculateAttackDamage (attackPotency = 1.0) {
        return Math.floor(attackPotency * this.str)
    }

    calculateSpellDamage (spellPotency) {
        return Math.floor(spellPotency * this.int)
    }

    calculateSpellHealing (spellPotency) {
        return Math.floor(spellPotency * this.int)
    }
}

class Bahamut extends Character {
    constructor () {
        super(5500, 30, 20)
        this.skillSet = BahamutSet.concat(MeleeAttack)
    }
}