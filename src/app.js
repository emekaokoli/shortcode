const express = require('express');
const cors = require('cors');
const urlHandler = require('./routes/routes.url');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', urlHandler);

module.exports = app;
