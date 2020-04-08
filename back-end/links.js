const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const users = require("./users.js");

const User = users.model;
const validUser = users.valid;

// Create a link Schema
const linkSchema = new mongoose.Schema({
  text: String,
  link: String,
  color: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  section: String,
});

// Create a link model
const Link = mongoose.model('Link', linkSchema);

// get the list of links in a section
router.get('/', validUser, async (req, res) => {
  let links = [];
  try {
    //console.log("Getting Links!-------------------------")
    //console.log(req.session);
    //console.log("User: ", req.user);
    links = await Link.find({
      user: req.user,
      //section: req.section
    });
    res.send(links);
    //console.log("Links got!\n\n");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// create new link
router.post('/', validUser, async (req, res) => {
  const link = new Link({
    text: req.body.text,
    link: req.body.link,
    color: req.body.color,
    user: req.body.user,
    section: req.body.section,
  });
  try {
    await link.save();
    res.send(link);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// edit a link
router.put('/:id', validUser, async (req, res) => {
  try {
    let link = await Link.findOne({
      _id: req.params.id
    });
    link.text = req.body.text;
    link.link = req.body.link;
    link.color = req.body.color;
    link.section = req.body.section;
    await link.save();
    res.send(link);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// delete a link
router.delete('/:id', validUser, async (req, res) => {
  try {
    await Link.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Link,
}
