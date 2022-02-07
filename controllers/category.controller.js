const Category = require("../models/category.model");

const allTheCategories = (req = request, res = response) => {
    const title = req.query.title;
    Category.allTheCategories(title, (err, category) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories."
      });
    else res.json({category});
  });

};



module.exports = {
	allTheCategories,
};
