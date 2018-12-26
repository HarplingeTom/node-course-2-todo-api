const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const userId = '5c21da10959c743104f74b6a';
if (!ObjectID.isValid(userId)) {
  console.log('ID is not valid');
}

User.findById(userId).then(user => {
  if (!user) {
    return console.log('Unable to find user by id');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch(e => console.log(e));

// const id = '5c231f4329521830c40bc491';
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// });
