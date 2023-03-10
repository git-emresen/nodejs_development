const request = require('request')



let geocodeAddress = (address,callback) => {
    let encodedAddress = encodeURIComponent(address)

    request({
        url:
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCfH8V4RANLHnNTgWtL8jFQpDVbZWtr808`
        , json: true
    }, (error, response, body) => {
        if (error) {
            callback(undefined,"Unable to connect google servers..")   
        } else if (body.status === 'ZERO_RESULTS') {
            callback("Unable to find that address")
        } else if (body.status === 'OK') {
            callback(undefined,{
                address:(`Adress: ${body.results[0].formatted_address}`),
                latitude:(`${body.results[0].geometry.location.lat}`),
                longitute:(`${body.results[0].geometry.location.lng}`)
            })

        }

    })
}



module.exports.geocodeAddress = geocodeAddress