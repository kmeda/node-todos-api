const {ObjectID} = require('mongodb'); //A randomised object id based on a timestamp

const {mongoose} = require('./../server/db/mongoose'); //Mongoose itself connected to the database
const {Todo} = require('./../server/models/todo'); //Collection
const {Users} = require('./../server/models/users'); //Collection

//Todo remove
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findByIdAndRemove('59097d73085e5f10702bb5e9').then((doc)=>{
  console.log(doc);
});

// Todo.findOneAndRemove({}).then((result)=>{
//   console.log(result);
// });
