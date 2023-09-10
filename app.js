const express = require('express');

const personRouter = require('./routes/personRouter');

const app = express();
app.use(express.json());

app.use('/api', personRouter);

module.exports = app;
