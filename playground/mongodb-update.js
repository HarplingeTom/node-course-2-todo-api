// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5c2028baef3c5520141ba5e0"),
  }, {
      $set: {
        name: 'Ann',
        location: 'Halmstad Sweden'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then(result => {
      console.log(result);
    });

  // client.close();
});
