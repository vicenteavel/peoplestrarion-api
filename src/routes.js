const express = require('express');
const PeopleController = require('./controllers/PeopleController');

const routes = express.Router();

routes.get('/people', PeopleController.index);
routes.post('/people', PeopleController.create);
routes.put('/people/:id', PeopleController.update);
routes.delete('/people/:id', PeopleController.delete);

module.exports = routes;