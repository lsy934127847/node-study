
const http = require("http")

const url = require("url")   // 解析地址栏url
const path = require("path")
const fs = require("fs")
const mime = require("mime")
const server = http.createServer( (req,res) =>{

   
  let { pathname } =   url.parse(req.url,true)
   const filepath = path.join(__dirname,pathname)
  // 根据路径读取文件
   fs.readFile(filepath,function(err,data){

    // 如果 html文件中的 head 标签中没有设置
    // res.setHeader("Content-Type","text/html;charset=utf8")
    res.setHeader("Content-Type",mime.getType(filepath)+";charset=utf8")
       res.end(data)
   })
})

server.listen(3001)