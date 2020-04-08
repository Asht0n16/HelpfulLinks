const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

const User = users.model;
const validUser = users.valid;

// section schema
const sectionSchema = new mongoose.Schema({
  name: String,
  color: String,
});

// section model
const Section = mongoose.model('Section', sectionSchema);

//get the list of sections
router.get('/', validUser, async (req, res) => {
  let sections = [];
  try {
    sections = await Section.find({
      user: req.user,
    });
    res.send(sections);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router
}
