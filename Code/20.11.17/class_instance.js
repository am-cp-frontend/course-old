const badKitty = new Cat('Moronic Kitty')

const repr = {
    name: 'Moronic Kitty',
    __proto__: {
        constructor: function (/* ... */) {/* ... */},
        speak: function () {
            console.log('Meow, you little shite!')
        },
        __proto__: {
            /* ... */
        }
    }
}