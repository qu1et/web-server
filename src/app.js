const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Gasan'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Gasan'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Save us',
        name: 'Gasan'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Moscow',
        forecast: 'It\' windy and warm'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});