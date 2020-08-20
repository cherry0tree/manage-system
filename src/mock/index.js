const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')
const Mock = require('mockjs')

//读取json文件
function getJsonFile(filePath) {
    var json = fs.readFileSync(path.join(__dirname, 'userInfo.json5'), 'utf-8')
    return JSON5.parse(json)
}


//下面的content就是相当于模拟了server (作用拦截 ajax请求)
module.exports =  function(app) {
  //监听http请求
  app.get('/user/userInfo', function(rep, res){
    //读取json文件解析成数据对象
    var json = getJsonFile('./userInfo.json5');
    console.log(res.json(Mock.mock(json)))
    //将json传入Mock.mock方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  })
}