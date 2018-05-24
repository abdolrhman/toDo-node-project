const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect')
  }
  console.log('connected to mongodb Server')

  // db.collection('Todos').insertOne({
  //   text: 'some thing is done',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({
    name: 'Ahmed',
    ago: 12,
    location: 'Egypt'
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert users', err)
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
  })

  db.close()
})
