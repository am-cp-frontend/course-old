const xhr = new XMLHttpRequest()
xhr.open('GET', 'api.openweathermap.org/data/2.5/weather?q={city name}')

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText)
    console.log(data)
  }
}

xhr.send()