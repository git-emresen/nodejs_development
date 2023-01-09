const request = require('request')



let geocodeAddress = (address) => {
    let encodedAddress = encodeURIComponent(address)

 return new Promise((resolve,reject)=>{
    request({
        url:
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCfH8V4RANLHnNTgWtL8jFQpDVbZWtr808`
        , json: true
    }, (error, response, body) => {
        if (error) {
            reject(undefined,"Unable to connect google servers..")   
        } else if (body.status === 'ZERO_RESULTS') {
            reject("Unable to find that address")
        } else if (body.status === 'OK') {
            resolve({                
                latitude:(`${body.results[0].geometry.location.lat}`),
                longitute:(`${body.results[0].geometry.location.lng}`)
            })

        }

    })
})
}



module.exports.geocodeAddress=geocodeAddress