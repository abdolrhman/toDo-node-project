const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect')
  }
  console.log('connected to mongodb Server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b06df4a72577909f4a98b09')
  // }, {
  //   $set: {
  //     completed: 'true'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((value) => {
  //   console.log(value)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b05cbd6e8811618a80d0af0')
  }, {
    $set: {
      name: 'Abdo'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((value) => {
    console.log(value)
  })

  // db.close()
})
