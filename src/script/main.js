import "../style/main.scss"
import { weatherSequenceDom_1,weatherSequenceDom_2,weatherSequenceDom_3,weatherSequenceDom_4,weatherSequenceDom_5,weatherSequenceDom_6,weatherSequenceDom_7 } from "./dom-builder"
import { getNearbyCities } from "./dom-builder";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';


new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  "http://api.openweathermap.org/data/2.5/find?lat={lat}&lon={lon}&cnt={cnt}&appid={API_KEY}"


let weatherIcon = document.querySelector(".today-weather img")
const input = document.querySelector(".search-bar input")
const searchIcon = document.querySelector(".search-icon")
const todayWeatherTitle = document.querySelector(".today-weather-title")
const cityDisplay = document.querySelector(".city-name")
const dateTime = document.querySelector(".date-time")
let temperature = document.querySelector(".temperature")

export function convertToCelsius(kelvin){
    let result = kelvin - 273.15
    return result.toFixed(1)

}



function todayHighlight(weatherDescription, weatherHumidity, weatherPressure, weatherSealevel, weatherSunset , weatherSunrise){
    let description = document.querySelector(".description-text")
    let humidity = document.querySelector(".humidity-text")
    let pressure = document.querySelector(".pressure-text")
    let sealevel = document.querySelector(".sealevel-text")
    let sunrise = document.querySelector(".sunrise-text")
    let sunset = document.querySelector(".sunset-text")

    description.textContent = weatherDescription
    humidity.textContent = weatherHumidity
    pressure.textContent = weatherPressure
    sealevel.textContent = weatherSealevel
    sunrise.textContent = weatherSunrise
    sunset.textContent = weatherSunset
}



async function getLocation(cityName, apiKey){
    const latLongApi= `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
    const response = await fetch(latLongApi , {mode:'cors'})
    const data = await response.json()
    return  [data[0]["lat"], data[0]["lon"]]
}


async function getWeather(cityName, apiKey){
    const location = await getLocation(cityName, apiKey)
   

    getNearbyCities(apiKey,location[0], location[1], cityName)



    const weatherApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&appid=023ddb3cfa25160b6c95e5c0c0995ea0&cnt=8`
    const response = await fetch(weatherApi, {mode: 'cors'})
    const data = await response.json()
    let kelvin = data['list'][0]['main']['temp']
    temperature.innerHTML = `${convertToCelsius(kelvin)}&deg;C`
    let icon = data['list'][0]['weather'][0]['icon']
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`

    let weatherTitle = data['list'][0]["weather"][0]["main"]
    todayWeatherTitle.textContent = weatherTitle
    let city__ = `${cityName}, ${data["city"]["country"]}`
    cityDisplay.textContent = city__
    dateTime.textContent = data["list"][0]["dt_txt"]

    let weatherDescription = data['list'][0]["weather"][0]["description"]
    let weatherPressure = data["list"][0]['main']["pressure"]
    let weatherHumidity = data["list"][0]["main"]["humidity"]
    let weatherSealevel = data["list"][0]["main"]["sea_level"]
    let weatherSunrise = data["city"]["sunrise"]
    let weatherSunset = data["city"]["sunset"]

    todayHighlight(weatherDescription, weatherHumidity,weatherPressure , weatherSealevel, weatherSunset, weatherSunrise)

    for (let i = 1 ; i <= 7 ; i++){
        let tempK = data["list"][i]["main"]["temp"]
        let tempC = convertToCelsius(tempK)

        let specificWeatherIcon = data["list"][i]["weather"][0]['icon']
        let specificWeatherIconLink = `https://openweathermap.org/img/wn/${specificWeatherIcon}.png`
    


        let specificTime = data["list"][i]["dt_txt"]
        let specificTimeSliced = specificTime.slice(11,16)
    
        if (i === 1){
            weatherSequenceDom_1(specificTimeSliced, specificWeatherIconLink, tempC)
        }else if(i === 2){
            weatherSequenceDom_2(specificTimeSliced, specificWeatherIconLink, tempC)
        }else if(i == 3){
            weatherSequenceDom_3(specificTimeSliced, specificWeatherIconLink, tempC)
        }else if(i === 4){
            weatherSequenceDom_4(specificTimeSliced, specificWeatherIconLink, tempC)
        }else if(i === 5){
            weatherSequenceDom_5(specificTimeSliced, specificWeatherIconLink, tempC)
        }else if(i === 6){
            weatherSequenceDom_6(specificTimeSliced, specificWeatherIconLink, tempC)
        }else if(i === 7){
            (tempC)
            weatherSequenceDom_7(specificTimeSliced, specificWeatherIconLink, tempC)
        }
    }
}




const apiKey = "023ddb3cfa25160b6c95e5c0c0995ea0"

searchIcon.addEventListener("click" , ()=>{

    let cityName = input.value
    if(input.value ===""){
        ""
    }
    else
    {
        getWeather(cityName, apiKey)
    }


})



window.onload = getWeather("London" , apiKey)























// (getWeather(cityName, apiKey))