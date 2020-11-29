const express = require('express');
const AuthController = require('./controllers/AuthController');
const PeopleController = require('./controllers/PeopleController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.post('/authenticate', AuthController.authenticate);

routes.use(authMiddleware);

routes.get('/people', PeopleController.index);
routes.post('/people', PeopleController.create);
routes.put('/people/:id', PeopleController.update);
routes.delete('/people/:id', PeopleController.delete);

module.exports = routes;