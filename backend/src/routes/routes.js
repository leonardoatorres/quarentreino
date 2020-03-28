const express = require('express');

const TreinoController = require('../controllers/TreinoController')

const routers = express.Router();

routers.get('/treinos', TreinoController.index);
routers.post('/treinos', TreinoController.create);

module.exports = routers