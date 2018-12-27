const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove

Todo.findByIdAndRemove('5c24195966ff2d1dc14e068f').then(todo => {
  console.log(todo);
});
