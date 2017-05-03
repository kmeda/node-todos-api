require ('./config/config');

var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Users} = require('./models/users');
var {Todo} = require('./models/todo');



var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
    console.log("unable to process", e);
  });
  console.log(req.body);
});

//Get
app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });

});

//Get by ID
app.get('/todos/:id', (req, res)=> {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((doc)=>{
    if (!doc) {
      return res.status(404).send();
    }
    res.send({doc});
  }).catch((e)=>{
    res.status(404).send();
  });
});

app.delete('/todos/:id', (req, res)=>{
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(400).send();
    console.log("Error found!");
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});

  }).catch((e)=>{
    res.status(400).send();
  });
});


app.patch('/todos/:id', (req, res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if (!todo) {
      res.status(400).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });

});


app.listen(port, ()=>{
  console.log(`Started on port ${port}`);
});

module.exports = {app};
