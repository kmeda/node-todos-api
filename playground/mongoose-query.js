const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');
const {ObjectID} = require('mongodb');


Users.findById("5908814d98ca36d69000a7ed").then((doc)=>{
  if (!doc) {
    return console.log("Not found!");
  }
    console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
  console.log(e);
});
