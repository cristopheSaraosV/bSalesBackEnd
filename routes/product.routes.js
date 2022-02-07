const { Router } = require('express');
const { allTheProducts,searchProducts,theFirstFourProducts,searchProductsForCategory } = require('../controllers/product.controller');

const routerUsers = Router();

routerUsers.get(`/all`, allTheProducts);
routerUsers.get(`/firstFour`, theFirstFourProducts);
routerUsers.get(`/search`, searchProducts);
routerUsers.get(`/searchCategories`, searchProductsForCategory);


module.exports = routerUsers;
