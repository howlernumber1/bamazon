// Imports express into our app and sets it up for use
const express = require('express');
const path = require('path');
const db = require('./models')
const app = express();
const env = process.env.NODE_ENV || 'development';

// Defines a PORT for the server to listen for requests
   const PORT = process.env.PORT || 3000;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets our server to use the public directory for static assets
app.use(express.static(path.join(__dirname, 'public')));



require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Starts our server on the predefined PORT

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});
