export default async function searchWeather(cityname) {
    let cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c839eee5c6bd1761df4928d6d5b73371&lang=ru&units=metric`)
    let resp = await cityResponse.json()
    // alert(resp)
    // alert(data)
    // console.log(resp.name) //city
    // console.log(resp.main.temp) //temp в кельвинах общая
    // console.log(resp.main.temp_max)
    // console.log(resp.main.temp_min)
    // console.log(resp.main.feels_like) // как ощущается темпа
    // console.log(resp.weather[0].description) // погода
    return resp
}