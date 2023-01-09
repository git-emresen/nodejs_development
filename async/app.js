const request=require('request')
const { CLIENT_RENEG_WINDOW } = require('tls')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=kayseri&key=AIzaSyCfH8V4RANLHnNTgWtL8jFQpDVbZWtr808',
    json:true},
    function (error,response,body){
    /* console.log('error',error) */
    /* console.log(JSON.stringify(response,undefined,2)) */
   /*  console.log('body', body) */
   console.log(`adress: ${body.results[0].formatted_address}`)
   console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
   console.log(`Latitude: ${body.results[0].geometry.location.lng}`)

})