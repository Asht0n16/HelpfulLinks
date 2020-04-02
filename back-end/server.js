const express = require('express');
const bodyParser = require('body-parser');

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

// Create a link Schema
const linkSchema = new mongoose.Schema({
  text: String,
  link: String,
  color: String,
});

// Create models for each type of link
const FunLinks = mongoose.model('FunLink', linkSchema);
const WorkLinks = mongoose.model('WorkLink', linkSchema);
const SchoolLinks = mongoose.model('SchoolLink', linkSchema);
const OtherLinks = mongoose.model('OtherLink', linkSchema);

app.get('/api/funlinks', async (req, res) => {
  try {
    let list = await FunLinks.find();
    res.send(list);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/funlinks', async (req, res) => {
  const link = new FunLinks({
    text: req.body.text,
    link: req.body.link,
    color: req.body.color,
  });
  try {
    await link.save();
    res.send(link);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/funlinks/:id', async (req, res) => {
  try {
    let link = await FunLinks.findOne({
      _id: req.params.id
    });
    link.text = req.body.text;
    link.link = req.body.link;
    link.color = req.body.color;
    link.save();
    res.send(link);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/funlinks/:id', async (req, res) => {
  try {
    await FunLinks.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

app.listen(3001, () => console.log('Server listening on port 3001!'));
