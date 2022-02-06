const Product = require("../models/product.model");

const productGet = (req = request, res = response) => {
    const title = req.query.title;
    Product.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });

};
// const productGet = (req = request, res = response) => {
//     const sql = "SELECT product.id, product.name, product.url_image, product.price,product.discount, category.name AS 'Category' FROM product JOIN category  ON product.category=category.id";
	
//     res.json({
// 	    "status": true
// 	});

// };

module.exports = {
	productGet
};
