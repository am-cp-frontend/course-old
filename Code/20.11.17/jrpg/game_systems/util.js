function Offset () {
    this.x = 0
    this.y = 0
}

const ROWS = {
    BOSS: 1,
    WOL: -1
}

const whm = new Image()
const blm = new Image()
const rdm = new Image()
const mnk = new Image()

const bahamut = new Image()

const party = [
    {
        name: 'WHM',
        gameObject: new WhiteMage(),
        sprite: whm,
        offset: new Offset(),
        row: ROWS.WOL
    },

    {
        name: 'BLM',
        gameObject: new BlackMage(),
        sprite: blm,
        offset: new Offset(),
        row: ROWS.WOL
    },

    {
        name: 'RDM',
        gameObject: new RedMage(),
        sprite: rdm,
        offset: new Offset(),
        row: ROWS.WOL
    },

    {
        name: 'MNK',
        gameObject: new Monk(),
        sprite: mnk,
        offset: new Offset(),
        row: ROWS.WOL
    }
]

const boss = {
    name: 'Bahamut',
    gameObject: new Bahamut(),
    sprite: bahamut,
    offset: new Offset(),
    row: ROWS.BOSS
}
