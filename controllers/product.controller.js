const Product = require("../models/product.model");

const allTheProducts = (req = request, res = response) => {
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

const searchProducts = (req = request, res = response) => {
    const title = req.query.product;
    Product.searchProducts(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });

};


module.exports = {
	allTheProducts,
    searchProducts
};
