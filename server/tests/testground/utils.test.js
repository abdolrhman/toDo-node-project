// const expect = require('expect')
// const utils = require('./utiles')
//
// it('should add two number', () => {
//   var res = utils.add(33, 11)
//
//   expect(res).toBe(44).toBeA('number')
// })
//
// it('should async add two numbers', (done) => {
//   utils.asyncAdd(4, 3, (sum) => {
//     expect(sum).toBe(7).toBeA('number')
//     done()
//   })
// });
//
// it('should async square two numbers', (done) => {
//   utils.asyncSquare(3, (value) => {
//     expect(value).toBe(9).toBeA('number')
//     done()
//   })
// });
//
// it('should square two numbers', () => {
//   var res = utils.square(5)
//
//   expect(res).toBe(25).toBeA('number')
// })
//
// it('should firstname and lastname are set', () => {
//   var user = {location: 'egy', age: 23}
//   var res = utils.setName(user, 'And And')
//
//   expect(res).toInclude({
//     firstName: 'And',
//     lastName: 'And'
//   })
// })
//
// // it('should expect some value', () => {
// //   // expect(12).toNotBe(11)
// //   // expect({name: 'and'}).toEqual({name: 'and'})
// //   // expect([2, 3, 4]).toExclude(1)
// //   expect({
// //     name: 'ali',
// //     age: 12,
// //     location: 'Egy'
// //   }).toExclude({
// //     age: 123
// //   })
// // })
