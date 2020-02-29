const express = require('express');

const toko = require('./toko');

const Router = express.Router();

Router.use('/toko', toko);
module.exports = Router;