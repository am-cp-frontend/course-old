const canvasWidth = 500, canvasHeight = 350

const canvas = document.getElementById('game')
canvas.width = canvasWidth
canvas.height = canvasHeight

const ctx = canvas.getContext('2d')
ctx.font = '18px VT323'

const partyCycle = partyMember()

loadAssets().then(render)

const gameProcess = setInterval(async () => {
    bahamutATB()
    await delay(2000)
    partyATB(partyCycle)
}, 5000)

// function definitions

function loadAssets () {
    const assets = [], assetPromises = []

    assets.push(whm)
    assets.push(blm)
    assets.push(rdm)
    assets.push(mnk)
    assets.push(bahamut)

    assets.forEach(asset => {
        assetPromises.push(new Promise(resolve => {
            asset.addEventListener('load', resolve)
        }))
    })

    whm.src = 'assets/whm.png' 
    blm.src = 'assets/blm.png'    
    rdm.src = 'assets/rdm.png'
    mnk.src = 'assets/mnk.png'
    bahamut.src = 'assets/bahamut.gif'
    
    return new Promise(resolve => {
        Promise.all(assetPromises).then(resolve)
    })
}

function clear () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function render () {
    clear() 

    // draw Bahamut
    let coordX = 0 + boss.offset.x
    let coordY = 18 + boss.offset.y
    ctx.drawImage(boss.sprite, coordX, coordY, 138, 196)
    ctx.fillText(`Bahamut HP ${boss.gameObject.hp}`, 10, 270)

    // draw Warriors of Light
    let curX = canvasWidth - 36
    let curY = 0, textY = 0

    for (partyMember of party) {
        coordX = curX + partyMember.offset.x
        coordY = curY + partyMember.offset.y

        ctx.drawImage(partyMember.sprite, coordX, coordY, 36, 52)

        let hpText = `${partyMember.name} HP ${partyMember.gameObject.hp}`
        ctx.fillText(hpText, 425, textY + 270)

        curX -= 5
        curY += 60
        textY += 20
    }

}

function * partyMember () {
    let i = 0
    while (true) {
        yield party[i++ % party.length]
    }
}

function partyATB (partyMember) {
    const caster = partyCycle.next().value
    const skillSet = caster.gameObject.skillSet
    const spell = skillSet[randomIndex(skillSet.length)]

    let target
    if (spell.type === SPELL_TYPES.HEALING)
        target = party[randomIndex(party.length)]
    else
        target = boss
    
    processCombat(caster, spell, target)
}

function bahamutATB () {
    const skillSet = boss.gameObject.skillSet
    const spell = skillSet[randomIndex(skillSet.length)]
    const target = party[randomIndex(party.length)]

    processCombat(boss, spell, target)
}

function delay (milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}

function randomIndex (length) {
    return Math.floor(Math.random() * length);
}

async function processCombat (caster, spell, target) {
    console.log(`${caster.name} casts ${spell.name} on ${target.name}.`)
    
    caster.offset.x = caster.row * 30
    render()

    await delay(1000)
    
    let value, damage = true
    const potency = spell.potency / 100
    
    switch (spell.type) {
        case SPELL_TYPES.DAMAGE: {
            value = caster.gameObject.calculateSpellDamage(potency)
            break
        }
        case SPELL_TYPES.HEALING: {
            value = caster.gameObject.calculateSpellHealing(potency)
            damage = false
            break
        }
        default: {
            value = caster.gameObject.calculateAttackDamage(potency)
            break
        }
    }

    caster.offset.x = caster.row * 70
    render()

    if (damage) {
        damageTarget(target, value)
        console.log(`${caster.name} hits ${target.name} for ${value.toString()} damage.`)
    } else {
        let heal = healTarget(target, value)
        console.log(`${target.name} restores ${heal.toString()} HP.`)
    }
    
    await delay(500)
    caster.offset.x = 0
    render()
}

function damageTarget (target, damage) {
    target.gameObject.hp -= damage
    if (target.gameObject.hp <= 0) {
        target.gameObject.hp = 0
        inflictKO(target)
    }
}

function healTarget (target, heal) {
    const delta = target.gameObject.maxHP - target.gameObject.hp
    if (heal >= delta) {
        target.gameObject.hp = target.gameObject.maxHP
        return delta
    } else {
        target.gameObject.hp += heal
        return heal
    }
}

function inflictKO (target) {
    console.log(`${target.name} has died.`)
    if (target.row === ROWS.WOL) {
        party.splice(party.indexOf(target), 1)
        if (!party.length) {
            clearInterval(gameProcess)
            console.log('Warriors of Light are defeated.')
        }
    } else {
        clearInterval(gameProcess)
        console.log('Victory! Warriors of Light have defeated Bahamut.')
    }
}