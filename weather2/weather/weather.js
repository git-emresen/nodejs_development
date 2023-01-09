const geocodeAddress = require('../geocode/geocode.js')
const request = require('request')


let getWeather = (lat,lng) => {

    return new Promise((resolve,reject) => {
        request({ uri: `http://api.weatherapi.com/v1/forecast.json?key=c741fe713c4d478081f131825230201&q=${lat},${lng}&days=1&aqi=no&alerts=no`, json: true },
            (error, response, body) => {
                if (error) {
                    reject("Unable to connect weatherapi.com")
                }
                else if (response.statusCode === 400) {
                    reject("Unable to fetch weather data")
                } else if (response.statusCode === 200) {
                    resolve({
                        temp: body.current.temp_c,
                        wind: body.current.wind_kph,
                        feelsLike: body.current.feelslike_c
                    })
                }
            })
    })
}

module.exports.getWeather=getWeather

