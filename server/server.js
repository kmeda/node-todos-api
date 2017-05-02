var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');
var {ObjectID} = require('mongodb');


var app = express();

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
      res.status(404).send();
    }
    res.send({doc});
    
}).catch((e)=>{
  res.status(404).send();
})

});

app.listen(3000, ()=>{
  console.log("Started on port 3000");
});

module.exports = {app};
