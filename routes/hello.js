const Express = require('express');
const Router = Express.Router();

const helloWorldController = require('../controllers/helloWorldController');

Router.get('/helloworld', helloWorldController.getHelloWorld);

module.exports = Router;
