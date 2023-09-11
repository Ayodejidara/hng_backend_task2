const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const personRouter = require('./routes/personRouter');

const app = express();

// Set security HTTP headers
app.use(helmet());

app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use('/api', personRouter);

module.exports = app;
