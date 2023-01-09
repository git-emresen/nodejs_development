const request = require('request')
const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weeather/weather.js')

let argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Addres to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('h', 'help')
    .argv



geocode.geocodeAddress(argv.address, (errorMessage, results) => {
   if (errorMessage) {
        console.log(errorMessage)
    }  else {
        weather.getWeather(results.latitude, results.longitute, (errorMsg, weatherResults) => {
            if (errorMsg) {
                console.log(errorMsg)
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2))               
            }
        }) 
    }
    
});


