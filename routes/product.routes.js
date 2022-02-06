const { Router } = require('express');
const { allTheProducts,searchProducts } = require('../controllers/product.controller');

const routerUsers = Router();

routerUsers.get(`/all`, allTheProducts);
routerUsers.get(`/search`, searchProducts);


module.exports = routerUsers;
