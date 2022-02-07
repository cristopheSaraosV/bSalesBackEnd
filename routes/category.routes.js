const { Router } = require('express');
const { allTheCategories } = require('../controllers/category.controller');

const routerCategories = Router();

routerCategories.get(`/all`, allTheCategories);


module.exports = routerCategories;
