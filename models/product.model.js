const sql = require("./db.js");
// constructor
const Product = function(product) {
  this.id = product.id        
  this.name = product.name      
  this.url_image = product.url_image 
  this.price = product.price     
  this.discount = product.discount  
  this.category = product.category  
};


Product.getAll = (title, result) => {
  let query = "SELECT * FROM product";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("tutorials: ", res);
    result(null, res);
  });
};

module.exports = Product;