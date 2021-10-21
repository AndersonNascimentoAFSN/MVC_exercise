const express = require('express');
const app = express();
const route = require('../routes');
const path  = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '..', '/views'));

app.get('/', (_req, res) => res.send('Hello World!'));

app.use('/joke', route.jokeRoutes);

module.exports = app;