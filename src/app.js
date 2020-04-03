const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});