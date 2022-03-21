const todayDate = document.querySelector("#todayDate")
const todayIcon = document.querySelector("#todayIcon")
const todayTemperature = document.querySelector("#todayTemperature")
const humidity = document.querySelector("#humidity")
const uvindex = document.querySelector("#uvindex")
const generalSituation = document.querySelector("#generalSituation")

const week1 = document.querySelector('#week1')
const week2 = document.querySelector('#week2')
const week3 = document.querySelector('#week3')
const week4 = document.querySelector('#week4')
const week1Icon = document.querySelector('#week1Icon')
const week2Icon = document.querySelector('#week2Icon')
const week3Icon = document.querySelector('#week3Icon')
const week4Icon = document.querySelector('#week4Icon')
const week1Temp = document.querySelector('#week1Temp')
const week2Temp = document.querySelector('#week2Temp')
const week3Temp = document.querySelector('#week3Temp')
const week4Temp = document.querySelector('#week4Temp')
const week1ForecastWeather = document.querySelector('#week1ForecastWeather')
const week2ForecastWeather = document.querySelector('#week2ForecastWeather')
const week3ForecastWeather = document.querySelector('#week3ForecastWeather')
const week4ForecastWeather = document.querySelector('#week4ForecastWeather')
const week1ForecastWind = document.querySelector('#week1ForecastWind')
const week2ForecastWind = document.querySelector('#week2ForecastWind')
const week3ForecastWind = document.querySelector('#week3ForecastWind')
const week4ForecastWind = document.querySelector('#week4ForecastWind')

const week1Date = document.querySelector('#week1Date')
const week2Date = document.querySelector('#week2Date')
const week3Date = document.querySelector('#week3Date')
const week4Date = document.querySelector('#week4Date')

const date = new Date()
const dayList = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

// fetch weather & date
const getResult = async () => {
    const res = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc')
    const data = await res.json()
    return data
}

const getTodayWeather = async () => {
    const res = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')
    const data = await res.json()
    return data
}

getTodayWeather().then(data => {
    todayDate.innerHTML = `${date.getMonth() + 1}月${date.getDate()}日 ${dayList[date.getDay()]}`
    todayIcon.src = `./image/pic${data.icon}.png`
    todayTemperature.innerHTML = `${data.temperature.data[1].value} °C`
    humidity.innerHTML = `相對濕度：${data.humidity.data[0].value}%`
    // uvindex.innerHTML = `紫外線指數：${data.uvindex.data[0].desc}`
}).catch(err => console.log(err))

getResult().then(data => {
    console.log(data.weatherForecast)
    generalSituation.innerHTML = data.generalSituation

    week1Date.innerHTML = `${date.getMonth() + 1}月${date.getDate() + 1}日 ${data.weatherForecast[0].week}`
    week2Date.innerHTML = `${date.getMonth() + 1}月${date.getDate() + 2}日 ${data.weatherForecast[1].week}`
    week3Date.innerHTML = `${date.getMonth() + 1}月${date.getDate() + 3}日 ${data.weatherForecast[2].week}`
    week4Date.innerHTML = `${date.getMonth() + 1}月${date.getDate() + 4}日 ${data.weatherForecast[3].week}`

    week1Icon.src = `./image/pic${data.weatherForecast[0].ForecastIcon}.png`
    week2Icon.src = `./image/pic${data.weatherForecast[1].ForecastIcon}.png`
    week3Icon.src = `./image/pic${data.weatherForecast[2].ForecastIcon}.png`
    week4Icon.src = `./image/pic${data.weatherForecast[3].ForecastIcon}.png`

    week1Temp.innerHTML = `${data.weatherForecast[0].forecastMintemp.value} ~ ${data.weatherForecast[0].forecastMaxtemp.value} °C`
    week2Temp.innerHTML = `${data.weatherForecast[1].forecastMintemp.value} ~ ${data.weatherForecast[1].forecastMaxtemp.value} °C`
    week3Temp.innerHTML = `${data.weatherForecast[2].forecastMintemp.value} ~ ${data.weatherForecast[2].forecastMaxtemp.value} °C`
    week4Temp.innerHTML = `${data.weatherForecast[3].forecastMintemp.value} ~ ${data.weatherForecast[3].forecastMaxtemp.value} °C`

    week1ForecastWeather.innerHTML = data.weatherForecast[0].forecastWeather
    week2ForecastWeather.innerHTML = data.weatherForecast[1].forecastWeather
    week3ForecastWeather.innerHTML = data.weatherForecast[2].forecastWeather
    week4ForecastWeather.innerHTML = data.weatherForecast[3].forecastWeather

    week1ForecastWind.innerHTML = data.weatherForecast[0].forecastWind
    week2ForecastWind.innerHTML = data.weatherForecast[1].forecastWind
    week3ForecastWind.innerHTML = data.weatherForecast[2].forecastWind
    week4ForecastWind.innerHTML = data.weatherForecast[3].forecastWind

}).catch(err => console.log(err))