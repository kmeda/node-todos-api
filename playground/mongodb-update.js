//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('590757f19fc2609cdac6d46c')}, //filter
  //   {$set: { completed: true }}, //update operators
  //   {returnOriginal: false} //options
  // ).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59073cb8a6d6d3d414c29e10')
  }, {
    $set: {name: 'Rahul', location: 'Seattle'},
    $inc: {age: 2}
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  })

  //db.close();
});

//59074742a36f98d48e5b69b2
