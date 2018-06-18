const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const paginate = require('express-paginate');
const kappersController = require('./src/controllers/kappersController');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(paginate.middleware(10,50));
app.set('views', './src/views');
app.set('view engine', 'pug');
app.set('view engine', 'ejs');

const { getKappersInAms } = kappersController();

app.get('/', getKappersInAms);

app.listen(port, function () {
    debug(`nodemon app listening to port ${port}`);
});