// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .find({ _id: new ObjectID('5c2030fd66ff2d1dc14d876f') })
  //   .toArray()
  //   .then(docs => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(error => {
  //     console.log('unable to fetch todos', error);
  //   });

  db.collection('Users')
    .find({ name: 'Tom' })
    .toArray()
    .then(docs => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch(error => {
      console.log('unable to fetch users', error);
    });

  // db.collection('Todos')
  //   .find()
  //   .count()
  //   .then(count => {
  //     console.log(`Todos count: ${count}`);
  //   })
  //   .catch(error => {
  //     console.log('unable to fetch todos', error);
  //   });

  // client.close();
});
