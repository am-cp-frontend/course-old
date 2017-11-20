const Joe = {
    age: 27,
    pets: [
        new Cat(), new Doggo(), new Froggo()
    ]
}

Joe.pets.forEach(pet => pet.speak())