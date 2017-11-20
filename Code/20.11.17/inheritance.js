class Animal {
    constructor (name) {
        this.name = name
    }

    speak () {
        console.log('Implementation not defined')
    }

    animalInfo () {
        console.log(`This animal's name is ${this.name}`)
    }
}

class Cat extends Animal {
    constructor (name, breed) {
        super(name)
        this.breed = breed
    }

    speak () {
        console.log('Meow, okay? geez...')
    }
}

const cat = new Cat('Gary', 'idk')
cat.speak()
cat.animalInfo()
new Animal().speak()