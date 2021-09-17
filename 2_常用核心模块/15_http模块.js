let http = require("http")

// 创建一个服务器实例对象
let server = http.createServer()

// 注册请求监听
server.on("request",function(req,res){

    // end方法的作用,结束本次请求并且返回数据
    // res.end("123456")
    res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
    })
    res.end("我是谁666")
})

// 指定监听的端口
server.listen(8080)