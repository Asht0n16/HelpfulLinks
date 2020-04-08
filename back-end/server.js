const express = require('express');
const bodyParser = require('body-parser');
const argon2 = require('argon2');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/helpfullinks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// set up cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require("cookie-session");
app.use(cookieSession({
  name: 'session',
  keys: ['secretValue'],
  cookie: {
    maxAge: 60*60*1000 // 1 hour
  }
}));

// import the users module
const users = require("./users.js");
app.use("/api/users", users.routes);

// import the links module
const links = require("./links.js");
app.use("/api/links", links.routes);

// import the sections module
const sections = require("./section.js");
app.use("/api/sections", sections.routes);

// listen on port 3001
app.listen(3001, () => console.log('Server listening on port 3001!'));
