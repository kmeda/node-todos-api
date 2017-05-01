//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if (err) {
    return console.log("Unable to connect to MongoDB server.");
  }
  console.log("Connected to MongoDB server.");

  //delete many
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
  //   console.log(result);
  // }, (err)=> {
  //   console.log("uanble to process request", err);
  // });

  //delete one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOne and delete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'Karthik'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59074742a36f98d48e5b69b2')}).then((result)=>{
    console.log(JSON.stringify(result, undefined, 2));
  });


  //db.close();
});

//59074742a36f98d48e5b69b2
