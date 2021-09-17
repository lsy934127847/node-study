let http = require("http")
let path = require("path")
let fs = require("fs")
// 创建一个服务器实例对象
let server = http.createServer()

// 注册请求监听
server.on("request", function (req, res) {

    readFile(req,res)
/*
    if (req.url.startsWith("/index")) {
        let filePath = path.join(__dirname, "/abc", "index.html")

        fs.readFile(filePath, "utf-8", function (err, content) {
            if (err) {
                res.end("请求失败")
            }
            res.end(content)
        })
    } else if (req.url.startsWith("/login")) {
        let filePath = path.join(__dirname, "abc", "login.html")
        fs.readFile(filePath, "utf-8", function (err, content) {
            if (err) {
                res.end("请求失败")
            }
            res.end(content)
        })
        }
*/
})

// 指定监听的端口
server.listen(8080)




function readFile(req,res){
    let filePath = path.join(__dirname, "/abc", req.url)

    fs.readFile(filePath, "utf-8", function (err, content) {
        if (err) {
            res.end("请求失败")
        }
        res.end(content)
    })
}