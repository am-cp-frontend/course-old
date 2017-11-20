fetch('api.openweathermap.org/data/2.5/weather?q={city name}')
    .then(responce => responce.json())
    .then(data => {
        /* do stuff */
    })
