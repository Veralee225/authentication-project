const  express = require('express');

const app = express();

app.use(express.json());

require("dotenv").config();
require("./config/database").connect();

//Importing user context
const User = require("./model/user");

//Register
app.post("/register", (req, res) => {
    //our register logic goes here
});

// Login
app.post("/login", (req, res) => {
    //our login logic goes here
})

// const routes = require('./routes');
module.exports = app;