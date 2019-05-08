const request = require('request');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address) {
    console.log("Please provide an address");
} else {
    geoCode(address, (error, data)=>{
     
        if (error) {
            return console.log(error);
        }
    
        forecast( data.longtude, data.latitude, (error, foreCastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(data.placeName);
            console.log(foreCastData)
          })
    })
    
}

// const url = 'https://api.darksky.net/forecast/a5fcedfd759666de41e8260a43eda37b/37.8267,-122.4233';

// request({url: url, json: true}, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const data = response.body.currently;
//         console.log('It is currently ' + data.temperature + ' degrees out. There is a ' + data.humidity + ' humidity');
//     }
    
// })



//Geocoding
// Address -> Lat/Long -> weather


// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Market%20Street%20and%20Fremont%20Street.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoibW9zdGFmYWhhbWVkIiwiYSI6ImNqdjZzOTNzYjAwbWM0NXFqNGJkZ3J3eDgifQ.v2QnTwBk5CGjNtLZipxEZw';

// request({url: geocodeUrl, json: true}, (error, response) => {
//     if (error) {
//         console.log("Net work problems!");
//     } else if (response.body.features.length === 0) {
//         console.log('Cannot find location')
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longtude = response.body.features[0].center[0];
//         console.log(latitude, longtude);
//     }
    
// })





