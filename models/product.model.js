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

Product.searchProducts = (title,result) => {
    sql.query(`SELECT product.id, product.name, 
    product.url_image, product.price,product.discount,
    category.name AS 'Category' FROM product 
    JOIN category  ON product.category=category.id
    WHERE product.name LIKE '%${title}%'
    `, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("found tutorial: ", res);
          result(null, res);
          return;
        }
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
      });
}

module.exports = Product;