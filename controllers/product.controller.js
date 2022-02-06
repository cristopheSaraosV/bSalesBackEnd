const Product = require("../models/product.model");

const allTheProducts = (req = request, res = response) => {
    const title = req.query.title;
    Product.allTheProducts(title, (err, products) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.json({products:products.sort(SortArray)});
  });

};



const searchProducts = (req = request, res = response) => {
    const title = req.query.product;
    Product.searchProducts(title, (err, products) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.json({products:products.sort(SortArray)});
  });

};

const  SortArray = (x, y) =>{
    if (x.Category < y.Category) {return -1;}
    if (x.Category > y.Category) {return 1;}
    return 0;
}

module.exports = {
	allTheProducts,
    searchProducts
};
