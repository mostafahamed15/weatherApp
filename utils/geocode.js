const request = require('request');


const geoCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoibW9zdGFmYWhhbWVkIiwiYSI6ImNqdjZzOTNzYjAwbWM0NXFqNGJkZ3J3eDgifQ.v2QnTwBk5CGjNtLZipxEZw'
    
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search. ', undefined)

        } else {
            callback(undefined, {
                longtude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                placeName: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geoCode;