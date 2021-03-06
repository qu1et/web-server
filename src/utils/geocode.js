const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2wxdGNoIiwiYSI6ImNrN3M1ZnFydDBjcjEzZXBndndsYm03a2gifQ.vVMDei2pNSgg8HLa-d-0gg';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Невозможно подключиться к службам определения местоположения!', undefined);
        } else if (!body.features.length) {
            callback('Невозможно найти местоположение.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    }); 
};

module.exports = geocode;