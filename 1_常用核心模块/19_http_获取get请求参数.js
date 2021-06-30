let url = require("url")

// let str = "http://www.baidu.com:80/index.html?name=lsy&age=25"

// let obj = url.parse(str,true)

// console.log(obj.query.name+"+"+obj.query.age)



let http = require("http")
let path = require("path")
let fs = require("fs")
// 创建一个服务器实例对象
let server = http.createServer()

// 注册请求监听
server.on("request", function (req, res) {

    console.log(req.url) //    /index.html?name=lsy&age=25
    let obj =   url.parse(req.url,true).query
    // 如果不调用res.end()方法,浏览器会一直请求状态
   res.end(obj.name+"-------"+obj.age)


})

// 指定监听的端口
server.listen(8080)


function readFile(req,res){
    let filePath = path.join(__dirname, "/abc", req.url)
// 注意点 
//   加载其他的资源不能写utf8
// 如果服务器在响应数据的时候没有指定响应头,那么在有的浏览器,响应的数据有可能无法显示
    fs.readFile(filePath, function (err, content) {
        if (err) {
            res.end("请求失败")
        }
        res.end(content)
    })
}