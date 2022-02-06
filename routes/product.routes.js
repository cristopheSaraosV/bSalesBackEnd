const { Router } = require('express');
const { productGet } = require('../controllers/product.controller');

const routerUsers = Router();

routerUsers.get(`/`, productGet);


module.exports = routerUsers;
