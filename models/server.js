const express = require('express');
const cors = require('cors');
const routerProducts = require('../routes/product.routes');
const routerCategories = require('../routes/category.routes');
const colors = require('colors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// Path
		this.productsPath = '/api/products';
		this.categoryPath = '/api/categories';
		// Middleware
		this.middlewares();
		// Routes
		this.routes();
	}

    // MiddleWares
	middlewares() {
		this.app.use(cors());
		this.app.use(express.static('public'));
		this.app.use(express.json());
	}

	// Routes
	routes() {
		this.app.use(this.productsPath, routerProducts);
		this.app.use(this.categoryPath, routerCategories);
	}
    
    
    // Lister
	listen() {
		this.app.listen(this.port, () => {
			console.log(`S E R V E R  I N:  ${this.port}`.green);
		});
	}


}



module.exports = Server;
