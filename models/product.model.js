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


Product.allTheProducts = (title, result) => {
  let query = "SELECT product.id, product.name,product.url_image, product.price,product.discount, category.name AS 'Category' FROM product JOIN category  ON product.category=category.id";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null,  res);
  });
};

Product.theFirstFourProducts = (title, result) => {
  let query = "SELECT product.id, product.name,product.url_image, product.price,product.discount, category.name AS 'Category' FROM product JOIN category  ON product.category=category.id LIMIT 4";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null,  res);
  });
};



Product.searchProductsForCategory = (title,result) => {
    sql.query(`SELECT product.id, product.name, 
    product.url_image, product.price,product.discount,
    category.name AS 'Category' FROM product 
    JOIN category  ON product.category=category.id
    WHERE category.id LIKE '%${title}%'
    `, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          result(null, res);
          return;
        }
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
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
          result(null, res);
          return;
        }
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
      });
}



module.exports = Product;