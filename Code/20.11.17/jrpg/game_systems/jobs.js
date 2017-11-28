class BlackMage extends Character {
    constructor () {
        super(120, 7, 20)
        this.skillSet = BlackMagic.concat(MeleeAttack)
    }
}

class RedMage extends Character {
    constructor () {
        super(150, 13, 15)
        this.skillSet = RedMagic.concat(MeleeAttack)
    }

    calculateAttackDamage (attackPotency) {
        return Math.floor(attackPotency * (0.5 * this.str + 0.5 * this.int))
    }
}

class WhiteMage extends Character {
    constructor () {
        super(110, 4, 19)
        this.skillSet = WhiteMagic.concat(Summons, MeleeAttack)
    }   
}

class Monk extends Character {
    constructor () {
        super(170, 21, 3)
        this.skillSet = MeleeAttack
    }
}