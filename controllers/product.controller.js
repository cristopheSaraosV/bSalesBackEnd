const Product = require("../models/product.model");

const allTheProducts = (req = request, res = response) => {
    const title = req.query.title;
    Product.allTheProducts(title, (err, products) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
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
          err.message || "Some error occurred while retrieving products."
      });
    else res.json({products:products.sort(SortArray)});
  });

};
const theFirstFourProducts = (req = request, res = response) => {
    const title = req.query.product;
    Product.theFirstFourProducts(title, (err, products) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.json({products});
  });

};

const searchProductsForCategory = (req = request, res = response) => {
    const title = req.query.category;
    Product.searchProductsForCategory(title, (err, products) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.json({products});
  });

};

const  SortArray = (x, y) =>{
    if (x.Category < y.Category) {return -1;}
    if (x.Category > y.Category) {return 1;}
    return 0;
}

module.exports = {
	allTheProducts,
    searchProducts,
    theFirstFourProducts,
    searchProductsForCategory
};
