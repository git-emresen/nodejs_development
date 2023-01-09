const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')
const yargs = require('yargs')

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

geocode.geocodeAddress(argv.address)
    .then((result) => {
        weather.getWeather(result.latitude, result.longitude)
            .then((result) => console.log(result))
            .catch((error)=>console.log(error))

    }).catch((error) => console.log(error))