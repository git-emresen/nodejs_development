const request = require('request')


let getWeather = (lat, lng, callback) => {  
  
    request({
        url:
           `http://api.weatherapi.com/v1/forecast.json?key=c741fe713c4d478081f131825230201&q=${lat},${lng}&days=1&aqi=no&alerts=no`          
        , json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect servers..")
        } else if (response.statusCode === 400) {
            callback("Unable to fetch weather")
        } else if (response.statusCode === 200) {
            callback(undefined, {  
               
                temp:body.current.temp_c,
                wind:body.current.wind_kph,
                feelsLike:body.current.feelslike_c
            })
        }
    })
}

module.exports.getWeather = getWeather