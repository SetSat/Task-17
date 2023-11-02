document.getElementById("weather1").addEventListener("click", ()=>{
    const county1 = "Albania"
    const api1 = "19a8470a463433487b03f8f82158f8e9"
    
    fetch(`https://restcountries.com/v3.1/name/${county1}`)
    .then((response)=> response.json())
    .then((data) =>{
        const capital1 = data[0].capital[0]

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital1}&appid=${api1}`)

    })
    .then((response) => response.json())
    .then((data)=>{
        document.getElementById("result").innerText =` Weather in ${data.name} : ${data.weather[0].main}, Temp: ${data.main.temp}`

    })

})

document.getElementById("weather2").addEventListener("click", ()=>{
    const county2 = "Afghanistan"
    const api2 = "19a8470a463433487b03f8f82158f8e9"
    
    fetch(`https://restcountries.com/v3.1/name/${county2}`)
    .then((response)=> response.json())
    .then((data) =>{
        const capital2 = data[0].capital[0]

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital2}&appid=${api2}`)

    })
    .then((response) => response.json())
    .then((data)=>{
        document.getElementById("result").innerText =` Weather in ${data.name} : ${data.weather[0].main}, Temp: ${data.main.temp}`

    })

})

document.getElementById("weather3").addEventListener("click", ()=>{
    const county3 = "Åland Islands"
    const api3 = "19a8470a463433487b03f8f82158f8e9"
    
    fetch(`https://restcountries.com/v3.1/name/${county3}`)
    .then((response)=> response.json())
    .then((data) =>{
        const capital3 = data[0].capital[0]

        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital3}&appid=${api3}`)

    })
    .then((response) => response.json())
    .then((data)=>{
        document.getElementById("result").innerText =` Weather in ${data.name} : ${data.weather[0].main}, Temp: ${data.main.temp}`

    })

})