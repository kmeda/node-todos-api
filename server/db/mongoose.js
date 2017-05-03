const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://kmeda:123456@ds129031.mlab.com:29031/todoapp');

module.exports = {mongoose};

//'mongodb://kmeda:123456@ds129031.mlab.com:29031/todoapp'
//'mongodb://localhost:27017/TodoApp'

// mongodb
//   connection to a database
//   database has collections
//   each collection is created based on a model
//   based on the model collections are populated with documents
//   many models can be created to make collections
