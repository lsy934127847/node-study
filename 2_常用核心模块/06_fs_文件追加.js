let fs = require("fs")
let path = require("path")

let str = path.join(__dirname,"zhangsan.txt")

// 异步追加
fs.appendFile(str,"这是追加的内容(一)","utf-8",function(err){
   if(err){
       throw new Error("追加数据失败")
   }else{
       console.log("追加数据成功")
   }
})


// 同步追加
let res = fs.appendFileSync(str,"这是追加的内容(二)","utf-8")
console.log(res)