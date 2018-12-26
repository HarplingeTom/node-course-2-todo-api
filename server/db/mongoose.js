const mongoose = require('mongoose');
process.env.MONGODB_URI = 'mongodb://tomskinner:ftarrega50@ds139984.mlab.com:39984/todo-app-api'

mongoose.promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };
