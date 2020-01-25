const express = require('express');
const app = express();
const authController = require('../controllers/authentication.controller');

app.post('/login', authController.login);

module.exports = app;