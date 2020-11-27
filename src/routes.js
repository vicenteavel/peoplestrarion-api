const express = require('express');
const PeopleController = require('./controllers/PeopleController');

const routes = express.Router();

routes.post('/people', PeopleController.create);
routes.put('/people/:id', PeopleController.update);

module.exports = routes;