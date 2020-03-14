const express = require('express');
const APIRouter = express.Router();

const APIController = require('../../controllers/v1/api.controller');

APIRouter.get('/', APIController.first);

APIRouter.post('/create', APIController.createProduct);

module.exports = APIRouter;
