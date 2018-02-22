// Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much //the user agrees or disagrees with a question.
// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

//makes static assets in the public folder available (style.css)
app.use(express.static('app/public'));

// Sets up the app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.JSON({ type: 'application/vnd.api+json' }));

// Routes to other files included in the application
// ===========================================
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
//============================================

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
//app.listen(process.env.PORT || 3000);
