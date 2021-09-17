// url 模块
const url = require('url')

// url.parse 把url地址解析为对象

str = "http://www.baidu.com:8080/api?user=lsy&pwd=123456"


//let res = url.parse(str,true)
// 结果为一个对象,对象中query属性存储了?后面的参数 query: 'user=lsy&pwd=123456',
//pathname属性存储了请求路径  pathname: '/api',
/*
{
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:8080',
  port: '8080',
  hostname: 'www.baidu.com',
  hash: null,
  search: '?user=lsy&pwd=123456',
  query: 'user=lsy&pwd=123456',    添加第二个参数true后query变为一个对象  query: { user: 'lsy', pwd: '123456' },
  pathname: '/api',
  path: '/api?user=lsy&pwd=123456',
  href: 'http://www.baidu.com:8080/api?user=lsy&pwd=123456'
}


*/
//console.log(res)

// 添加第二个参数为true,将query中的字符串转换为对象{ user: 'lsy', pwd: '123456' },
// let res = url.parse(str,true)
// console.log(res)

//添加第三个参数 如果为true,表示//后面,/前面是主机名(完整地址设不设置关系不大)
// let res = url.parse(str,true,true)
// console.log(res)


// url.format  将url对象解析成url地址字符串,传入的对象为url.parse(str)解析的对象
// let res = url.format(obj)

// url.resolve 把两段url片段,组合成一个完整的url
// let res = url.resolve("http://www.baidu.com:8080",'/api')
// console.log(res)//  http://www.baidu.com:8080/api


let str1 = "/api?user=lsy&pwd=123456"
let res = url.parse(str1,true)
console.log(res)
/*
{
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?user=lsy&pwd=123456',
  query: [Object: null prototype] { user: 'lsy', pwd: '123456' },
  pathname: '/api',
  path: '/api?user=lsy&pwd=123456',
  href: '/api?user=lsy&pwd=123456'
}
*/
   