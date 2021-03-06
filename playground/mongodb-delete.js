// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .deleteMany({ text: 'eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Todos')
  //   .deleteOne({ text: 'eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Users')
  //   .deleteMany({ name: 'Tom' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users')
    .findOneAndDelete({ _id: new ObjectID("5c20362866ff2d1dc14d88be") })
    .then((result) => {
      console.log(result);
    });

  // client.close();
});
