const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");
const links = require("./links.js");

const User = users.model;
const validUser = users.valid;

const Link = links.model;

// section schema
const sectionSchema = new mongoose.Schema({
  name: String,
  color: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  }
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

// create a new section
router.post('/', validUser, async (req, res) => {
  const section = new Section({
    name: req.body.name,
    color: req.body.color,
    user: req.body.user,
  });
  try {
    await section.save();
    res.send(section);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// edit a section. to simplify everythin, only the color can be changed
router.put('/:id', validUser, async (req, res) => {
  try {
    let section = await Section.findOne({
      _id: req.params.id,
    });
    section.color = req.body.color;
    await section.save();
    res.send(section);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// delete a section. also deletes all links in it.
router.delete('/:id', validUser, async (req, res) => {
  try {
    let section = await Section.findOne({
      _id: req.params.id
    });
    // delete all links in the section
    await Link.deleteMany({
      user: req.user,
      section: section.name,
    });
    // delete section
    await Section.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router
}
