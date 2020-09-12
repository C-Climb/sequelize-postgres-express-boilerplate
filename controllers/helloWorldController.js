const models = require('../models');

exports.getHelloWorld = (req, res, next) => {
    res.send('Hello, world!');
};
