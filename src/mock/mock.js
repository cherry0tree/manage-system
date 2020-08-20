const Mock = require('mockjs')

let id = Mock.mock('@id')

let obj = Mock.mock({
  id: '@id',
  user: '@cname()',
  avatar: "@img('20×20', 'red', '#fff', 'avatar')"
})
console.log(obj)