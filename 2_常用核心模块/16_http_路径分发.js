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
    // console.log(req.url)
    if(req.url.startsWith("/index")){

//   如果通过end方法返回数据,那么只会返回一次
        // res.end("首页1")
        // res.end("首页2")

        // write方法不具备结束本次请求的功能,需要手动调用end方法来结束本次请求
        // write方法可以返回多条数据
        res.write("首页2")
        res.write("首页2")
        res.end()
    }else if(req.url.startsWith("/login")){
        res.end("登录页")
    }
    res.end("111222333")
})

// 指定监听的端口
server.listen(8080)