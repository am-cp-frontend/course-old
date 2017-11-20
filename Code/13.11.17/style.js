// function definition
function callbackCaller (arg) {
    if (typeof arg === 'function')
        return arg()
}

// function call
callbackCaller(function (x) {
    return x ** 2
})

// a loop
while (true) {
    break
}

// object notation
let ticketData = {
    flight: 'KL1167',
    airline: 'KLM',
    route: {
        origin: {
            name: 'Amsterdam Schiphol Airport',
            icao: 'EHAM',
            iata: 'AMS'
        },
        destination: {
            name: 'Helsinki Vantaa Airport',
            icao: 'EFHK',
            iata: 'HEL'
        }
    },
    passengers: [
        {
            name: 'John Appleseed',
            seat: '3A'
        }
    ]
}