const sql = require("./db.js");
// constructor
const Category = function(product) {
  this.id = product.id        
  this.name = product.name
};


Category.allTheCategories = (title, result) => {
  let query = "SELECT *  FROM  category";
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


module.exports = Category;