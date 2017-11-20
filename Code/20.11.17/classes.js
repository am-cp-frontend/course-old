class Cat {
    constructor (name) {
        this.name = name
    }

    speak () {
        console.log('Meow, you little shite!')
    }
}

const badKitty = new Cat('Moronic Kitty')
badKitty.speak()
badKitty.name // => 'Moronic Kitty'