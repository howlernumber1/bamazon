// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
// let productList = require('../data/productList.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users 'visit' a page.
  // ---------------------------------------------------------------------------

  app.get('/api/products', function(req, res) {
    res.json(productList)
    // console.log(json.stringify(productList));
  });

  app.post('/api/products', function(req, res) {
    res.end();
  })
};
