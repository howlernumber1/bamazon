// Import Database Models
// =============================================================
const db = require('../models');

// Syncing our sequelize models
// =============================================================
db.sequelize.sync().then(function() {
  db.Product.bulkCreate([{
    product_name: 'Minecraft',
    department_name: 'Entertainment',
    price: 26.95,
    stock_quantity: 25
  }, {
    product_name: 'Call of Duty: WWII',
    department_name: 'Entertainment',
    price: 42.99,
    stock_quantity: 10
  }, {
    product_name: 'Call of Duty: Black Ops 4',
    department_name: 'Entertainment',
    price: 59.99,
    stock_quantity: 5
  }, {
    product_name: 'Shadow of the Tomb Raider',
    department_name: 'Entertainment',
    price: 59.99,
    stock_quantity: 14
  }, {
    product_name: 'Farming Simulater 19',
    department_name: 'Entertainment',
    price: 34.99,
    stock_quantity: 40
  }, {
    product_name: 'Fallout 4',
    department_name: 'Entertainment',
    price: 10.00,
    stock_quantity: 18
  }, {
    product_name: 'Destiny 2',
    department_name: 'Entertainment',
    price: 29.99,
    stock_quantity: 60
  }, {
    product_name: 'The Quiet Man',
    department_name: 'Entertainment',
    price: 13.49,
    stock_quantity: 35
  }, {
    product_name: 'Hoyle Offical Casino Games Collection',
    department_name: 'Entertainment',
    price: 19.99,
    stock_quantity: 8
  }, {
    product_name: 'FINAL FANTASY XIV Online Complete Edition',
    department_name: 'Entertainment',
    price: 59.99,
    stock_quantity: 73
  }]).then(() => {
    return db.Product.findAll();
  }).then(product => {
    console.log(product);
  }).catch(function(error) {
    console.log('Error', error)
  });
});
