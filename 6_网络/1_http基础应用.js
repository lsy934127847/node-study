
// curl -v www.baidu.com

// curl -X POST --data a=1 localhost:3001

//

const http = require("http")


const server = http.createServer(function(req,res){
    // console.log("requset ==== ")
})


server.on("request",function(req,res){
    console.log("requset ==== ")
    console.log("req.method",req.method)    // 获取请求方法     
    console.log("req.url",req.url)       // 请求路径 会包含GET参数
    console.log("req.headers",req.headers)
    console.log("req.httpVersion",req.httpVersion)  // 1.1

    req.on("data",function(data){
        console.log("data",data)
        console.log("data.toString()",data.toString())
    })

    req.on("end",function(data){
        console.log("end")
    })

    res.statusCode = 351   // 指定了状态码 
    res.statusMessage = "my 351"
    res.setHeader("token","ok")
    res.write("req write")
    res.end("req end")

})
let port = 3001
server.listen(port,function(){
    console.log("server listen " + port)
})

server.on("error",function(err){
       if(err.code === "EADDRINUSE"){
        server.listen(++port)
       }
})