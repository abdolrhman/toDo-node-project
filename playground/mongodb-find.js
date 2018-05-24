const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect')
  }
  console.log('connected to mongodb Server')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b06df4a72577909f4a98b09')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('unable to fetch data', err)
  // })

  db.collection('Users').find({
    name: 'ali'
  }).toArray().then((docs) => {
    console.log('Users: ')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('unable to fetch data', err)
  })

  // db.close()
})
