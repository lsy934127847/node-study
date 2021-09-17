let queryString = require("querystring")


let http = require("http")
let path = require("path")
let fs = require("fs")
// 创建一个服务器实例对象
let server = http.createServer()

// 注册请求监听   req:请求  res:响应
server.on("request", function (req, res) {

  let params = ""
//   注意点:在nodejs中,post 请求的参数我们不能一次性拿到,必须分批获取
  req.on("data",function(chunk){
      params += chunk
  })

//   接受完所有的数据执行  函数
req.on("end",function(){
    // console.log(params)

    // queryString.parse 将query 值转成 对象   { username: 'lsy', password: '147258369' }
   let obj = queryString.parse(params)
    console.log(obj)
   
})

res.end()

})

// 指定监听的端口
server.listen(8080)