const request = require('request');

const forecast = (latitude, longtude, callback) => {
    const url = 'https://api.darksky.net/forecast/a5fcedfd759666de41e8260a43eda37b/'+ latitude +','+ longtude +'/';

    request({url: url, json: true}, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = 'It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.humidity + ' humidity';
            callback(undefined, data)
        }

    }) 
}

module.exports = forecast