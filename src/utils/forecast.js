const request = require('request');

const forecast = (latitude, logitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2369ef21563e668258d8b985661fdd15/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(logitude) + '?units=si';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unavaible to connect to weather service. Check your connection.', undefined);
        } else if (body.error) {
            callback('Unable to find forecast for this location. Try another search.', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '
                                + body.currently.temperature 
                                + ' degrees out. There is a '
                                + Math.floor(body.currently.precipProbability * 100) 
                                + '% chance of precipitation.');
        }
    });
};

module.exports = forecast;