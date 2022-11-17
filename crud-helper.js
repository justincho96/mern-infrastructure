// Connect to the database
require("dotenv").config();
require("./config/database");

// Require Mongoose Models
// const User = require("./models/user");
// const Item = require("./models/item");
// const Category = require("./models/category")
// const Order = require("./models/order")

// local variables will come in handy for holding retrieved documents;
let user, item, category, order;
let users, items, categories, orders;
