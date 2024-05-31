import { convertToCelsius } from "./main"


export function weatherSequenceDom_1(specificTime, iconLink , temp){

    let time = document.querySelector(".weather-sequence_1 .specific-time")
    let icon = document.querySelector(".weather-sequence_1 img")
    let temperature = document.querySelector(".weather-sequence_1 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`

}


export function weatherSequenceDom_2(specificTime, iconLink , temp){
    
    let time = document.querySelector(".weather-sequence_2 .specific-time")
    let icon = document.querySelector(".weather-sequence_2 img")
    let temperature = document.querySelector(".weather-sequence_2 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`

}


export function weatherSequenceDom_3(specificTime, iconLink , temp){
    
    let time = document.querySelector(".weather-sequence_3 .specific-time")
    let icon = document.querySelector(".weather-sequence_3 img")
    let temperature = document.querySelector(".weather-sequence_3 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`

}


export function weatherSequenceDom_4(specificTime, iconLink , temp){
    
    let time = document.querySelector(".weather-sequence_4 .specific-time")
    let icon = document.querySelector(".weather-sequence_4 img")
    let temperature = document.querySelector(".weather-sequence_4 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`

}


export function weatherSequenceDom_5(specificTime, iconLink , temp){
    
    let time = document.querySelector(".weather-sequence_5 .specific-time")
    let icon = document.querySelector(".weather-sequence_5 img")
    let temperature = document.querySelector(".weather-sequence_5 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`

}


export function weatherSequenceDom_6(specificTime, iconLink , temp){
    
    let time = document.querySelector(".weather-sequence_6 .specific-time")
    let icon = document.querySelector(".weather-sequence_6 img")
    let temperature = document.querySelector(".weather-sequence_6 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`

}

export function weatherSequenceDom_7(specificTime, iconLink , temp){
    
    let time = document.querySelector(".weather-sequence_7 .specific-time")
    let icon = document.querySelector(".weather-sequence_7 img")
    let temperature = document.querySelector(".weather-sequence_7 .specific-temperature")

    time.textContent = specificTime
    icon.src = iconLink
    temperature.innerHTML = `${temp}&deg;C`
}


function nearbyCity_1(city_name , imageLink, temp__, humidity__, pressure__ , weather__, wind__){

    console.log(city_name)
    console.log(imageLink)
    console.log(temp__)
    console.log(humidity__)
    console.log(wind__)
    console.log(temp__)
    console.log(pressure__)



    const cityName = document.querySelector(".city-name__1")
    const image = document.querySelector(".nearby-city-icon_1")
    const temp = document.querySelector(".nearby-city-temp_1")
    const humidity = document.querySelector(".nearby-city-humidity_1")
    const pressure = document.querySelector(".nearby-city-pressure_1")
    const weather = document.querySelector(".nearby-city-weather_1")
    const windSpeed = document.querySelector(".nearby-city-wind_1")

    cityName.textContent = city_name
    image.src= imageLink
    temp.innerHTML = `${convertToCelsius(temp__)}&deg;C` 
    humidity.textContent = humidity__
    pressure.textContent = pressure__
    weather.textContent = weather__
    windSpeed.textContent = wind__


}


function nearbyCity_2(city_name , imageLink, temp__, humidity__, pressure__ , weather__, wind__){

    console.log(city_name)
    console.log(imageLink)
    console.log(temp__)
    console.log(humidity__)
    console.log(wind__)
    console.log(temp__)
    console.log(pressure__)



    const cityName = document.querySelector(".city-name__2")
    const image = document.querySelector(".nearby-city-icon_2")
    const temp = document.querySelector(".nearby-city-temp_2")
    const humidity = document.querySelector(".nearby-city-humidity_2")
    const pressure = document.querySelector(".nearby-city-pressure_2")
    const weather = document.querySelector(".nearby-city-weather_2")
    const windSpeed = document.querySelector(".nearby-city-wind_2")

    cityName.textContent = city_name
    image.src= imageLink
    temp.innerHTML = `${convertToCelsius(temp__)}&deg;C` 
    humidity.textContent = humidity__
    pressure.textContent = pressure__
    weather.textContent = weather__
    windSpeed.textContent = wind__


}


function nearbyCity_3(city_name , imageLink, temp__, humidity__, pressure__ , weather__, wind__){

    console.log(city_name)
    console.log(imageLink)
    console.log(temp__)
    console.log(humidity__)
    console.log(wind__)
    console.log(temp__)
    console.log(pressure__)



    const cityName = document.querySelector(".city-name__3")
    const image = document.querySelector(".nearby-city-icon_3")
    const temp = document.querySelector(".nearby-city-temp_3")
    const humidity = document.querySelector(".nearby-city-humidity_3")
    const pressure = document.querySelector(".nearby-city-pressure_3")
    const weather = document.querySelector(".nearby-city-weather_3")
    const windSpeed = document.querySelector(".nearby-city-wind_3")

    cityName.textContent = city_name
    image.src= imageLink
    temp.innerHTML = `${convertToCelsius(temp__)}&deg;C` 
    humidity.textContent = humidity__
    pressure.textContent = pressure__
    weather.textContent = weather__
    windSpeed.textContent = wind__


}

function nearbyCity_4(city_name , imageLink, temp__, humidity__, pressure__ , weather__, wind__){

    console.log(city_name)
    console.log(imageLink)
    console.log(temp__)
    console.log(humidity__)
    console.log(wind__)
    console.log(temp__)
    console.log(pressure__)



    const cityName = document.querySelector(".city-name__4")
    const image = document.querySelector(".nearby-city-icon_4")
    const temp = document.querySelector(".nearby-city-temp_4")
    const humidity = document.querySelector(".nearby-city-humidity_4")
    const pressure = document.querySelector(".nearby-city-pressure_4")
    const weather = document.querySelector(".nearby-city-weather_4")
    const windSpeed = document.querySelector(".nearby-city-wind_4")

    cityName.textContent = city_name
    image.src= imageLink
    temp.innerHTML = `${convertToCelsius(temp__)}&deg;C` 
    humidity.textContent = humidity__
    pressure.textContent = pressure__
    weather.textContent = weather__
    windSpeed.textContent = wind__


}


export async function getNearbyCities(apiKey,lat, lon, cityName){


        const response = await fetch(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`)
        const data = await response.json()
        let newArray = []

    

        for(let i = 0; i<=15; i++){
            // if(data['list'][i]['name'] !== cityName){
                newArray.push(data['list'][i])
            // }
        }

        // console.log(newArray)

        for(let i=0;i<=4;i++){
            let city___ = newArray[i]['name']
            let weather = newArray[i]['weather'][0]['main']
            let pressure = newArray[i]['main']['pressure']
            let humidity = newArray[i]['main']['humidity']
            let windSpeed = newArray[i]['wind']['speed']

            let temp = newArray[0]['main']['temp']
            let imageIcon = newArray[0]['weather'][0]['icon']
            let iconLink = `https://openweathermap.org/img/wn/${imageIcon}.png`

            if(i === 1){

                nearbyCity_1(city___, iconLink , temp , humidity, pressure , weather ,windSpeed )
            }else if(i === 2){
                nearbyCity_2(city___, iconLink , temp , humidity, pressure , weather ,windSpeed )

            }else if(i === 3){
                nearbyCity_3(city___, iconLink , temp , humidity, pressure , weather ,windSpeed )
            }else if(i === 4){
                nearbyCity_4(city___, iconLink , temp , humidity, pressure , weather ,windSpeed )
            }
        }
        return newArray
}



// .then((message)=>message.json())
// .then((message)=>console.log(message['list'][0]['name']))


