const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'karthik@example.com',
  password: 'okmijn',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
  }]
  },
{
  _id: userTwoId,
  email: 'xyz@example.com',
  password: 'okmijn',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
  }]
}];

var todos = [{
    _id: new ObjectID(),
    text: "Some todo beforeEach",
    _creator: userOneId
  }, {
    _id: new ObjectID(),
    text: "Some todo beforeEach",
    _creator: userTwoId
  },{
    _id: new ObjectID(),
    text: "Some todo beforeEach",
    _creator: userOneId
  }];

const populateTodos = (done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
};

const populateUsers = (done)=>{
  User.remove({}).then(()=>{
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(()=> done());
};

module.exports = {todos, users, populateTodos, populateUsers};
