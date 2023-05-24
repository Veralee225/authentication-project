const  express = require('express');

const app = express();

app.use(express.json());

require("dotenv").config();
require("./config/database").connect();

// const routes = require('./routes');
module.exports = app;