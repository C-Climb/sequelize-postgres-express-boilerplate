require('dotenv').config();
const Express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const app = Express();

const helloWorldRoutes = require('./routes/hello');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // <== enables cors for EVERY route. see https://www.npmjs.com/package/cors for configs
app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res, next) => {
    res.send('hello');
});

app.use('/', helloWorldRoutes);

app.set('trust proxy', 1); // delete this line if you dont want reverse proxy support.

module.exports = app;
