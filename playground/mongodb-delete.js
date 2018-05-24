const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect')
  }
  console.log('connected to mongodb Server')

  // delte many
  // db.collection('Todos').deleteMany({text: 'some thing is done'}).then((result) => {
  //   console.log(result)
  // })
  // delete one
  // db.collection('Todos').deleteOne({text: 'some thing is done'}).then((value) => {
  //   console.log(value)
  // })
  // findOne and delte
  // db.collection('Todos').findOneAndDelete({completed: 'false'}).then((value) => {
  //   console.log(value)
  // })

  // db.collection('Users').deleteMany({name: 'os'}).then((value) => {
  //   console.log(value)
  // })
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b060114e6be3d35ac57a215')}).then((value) => {
    console.log(value)
  })

  // db.close()
})
