const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

//'mongodb://kmeda:Qwerty123$@ds129031.mlab.com:29031/todoapp'
