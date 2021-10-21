const express = require('express');
const getJoke = require('../controller/getJoke');

const route = express.Router();

route.get('/', getJoke);

module.exports = route