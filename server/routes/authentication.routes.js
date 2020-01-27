const express = require('express');
const app = express();
const authController = require('../controllers/authentication.controller');

const { verifyToken } = require('../middlewares/authentication');

app.post('/login', verifyToken, authController.login);

module.exports = app;