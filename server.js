const express = require("express");
const session = require("express-session");
const expbs = require("express-handlebars");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");
//User Authentication
// const helpers = require("./utils/helpers");

//Set up the express app
const app = express();
const PORT = process.env.PORT || 3001;

//set up the handlebars
const hbs = expbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//routes handling
app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
