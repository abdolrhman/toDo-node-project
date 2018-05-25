module.exports.add = (a, b) => a + b

module.exports.asyncAdd = (a, b, callbacks) => {
  setTimeout(() => {
    callbacks(a + b)
  }, 1000)
}

module.exports.square = (x) => x * x

module.exports.asyncSquare = (a, callbacks) => {
  setTimeout(() => {
    callbacks(a * a)
  }, 1000)
}

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]
  return user
}
