const express = require('express');
const routes = express.Router();
const controllerSearch= require('./controllers/search')


routes.get('/search/:nameSearch',controllerSearch.searchCSV);



module.exports = routes;