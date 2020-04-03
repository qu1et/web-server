const request = require('request');

const forecast = (latitude, logitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2369ef21563e668258d8b985661fdd15/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(logitude) + '?units=si';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Невозможно подключиться к сервису. Проверьте ваше соединение.', undefined);
        } else if (body.error) {
            callback('Невозможно найти прогноз для данного места. Попробуйте другое местоположение.', undefined);
        } else {
            callback(undefined, ' Температура сейчас составляет '
                                + body.currently.temperature 
                                + ' градусов по Цельсию.\n Вероятность осадков '
                                + Math.floor(body.currently.precipProbability * 100) 
                                + '%.\n Скорость ветра составляет ' 
                                + body.currently.windSpeed + ' м/с.\n'
                                + 'Максимальная температура сегодня достигнет ' 
                                + body.daily.data[0].temperatureHigh
                                + ' градусов по Цельсию.\n Минимальная температура ' 
                                + body.daily.data[0].temperatureLow + ' градусов.');
        }
    });
};

module.exports = forecast;