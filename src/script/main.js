import "../style/main.scss"
let weatherIcon = document.querySelector(".today-weather img")
const input = document.querySelector(".search-bar input")
const searchIcon = document.querySelector(".search-icon")
const todayWeatherTitle = document.querySelector(".today-weather-title")
const cityDisplay = document.querySelector(".city-name")
const dateTime = document.querySelector(".date-time")
let temperature = document.querySelector(".temperature")

function convertToCelsius(kelvin){
    return kelvin - 273.15

}


searchIcon.addEventListener("click" , ()=>{
    async function getWeather(cityName, apiKey){
        const location = await getLocation(cityName, apiKey)
    
        console.log(location['lon'])
        const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=023ddb3cfa25160b6c95e5c0c0995ea0&cnt=7`
        const response = await fetch(weatherApi, {mode: 'cors'})
        const data = await response.json()
        console.log(data)
        console.log(data)
        let kelvin = data['list'][0]['main']['temp']
        temperature.innerHTML = `${convertToCelsius(kelvin)}&deg;C`


    }
    if(input.value ===""){
        ""
    }
    else
    {
        getWeather(cityName, apiKey)
    }

})
const apiKey = "023ddb3cfa25160b6c95e5c0c0995ea0"
const cityName = "Dire Dawa"


async function getLocation(cityName, apiKey){
    const latLongApi= `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    const response = await fetch(latLongApi , {mode:'cors'})
    const data = await response.json()
    return  [data[0]["lat"], data[0]["lon"]]
}




























// console.log(getWeather(cityName, apiKey))