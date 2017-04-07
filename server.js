/*jshint esversion: 6 */
/**
 * Load in Packages
 */
const express = require('express');
const app = express();
const config = require('./server.config.json');

/**
 * Homepage
 */
app.use("/web", express.static('web'));

app.listen(config.port.internal, () => {
    console.log('Listening on port ' + config.port.internal + '!');
});

const mainView = __dirname + '/index.html';
app.get('/', (req, res) => {
    res.sendFile(mainView);
});