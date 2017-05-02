var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  // var todo = new Todo({
  //   text: req.body.text
  // });
  // todo.save().then((doc)=>{
  //   res.send(doc);
  // },(e)=>{
  //   res.status(400).send(e);
  //   console.log("unable to process", e);
  // });
  // console.log(req.body);

  var moreTodos = new Todo({
    text: req.body.text
  });
  moreTodos.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    console.log("Unable to save todo", e);
  });
});

//Get

app.listen(3000, ()=>{
  console.log("Started on port 3000");
});
