// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const db = require('../models');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users 'visit' a page.
  // ---------------------------------------------------------------------------

  app.get('/api/products', function(req, res) {
    db.Product.findAll({}).then(function(product) {
      res.json(product)
    }).catch(function(error) {
      res.json({ error: error });
    });
    // console.log(json.stringify(productList));
  });

  app.post('/api/products', function(req, res) {
    // let reqArray = [];
    // reqArray.push(req.body);
    // console.log(reqArray);
    res.end();
  })
};
