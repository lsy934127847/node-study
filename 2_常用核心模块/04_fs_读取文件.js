let fs = require("fs")

let path = require("path")

let str = path.join(__dirname,"data.txt")
console.log(str)


// readFile 异步读取文件内容，不指定第二个参数，会默认将数组存储到Buffer中，指定第二个参数为 “utf8”，会将读取到的内容转为实际内容
/*
fs.readFile(str,function(err,data){
    if(err){
        throw new Error("读取文件失败")
      
    }
    console.log(data) //<Buffer e6 88 91 e6 98 af e8 b0 81>
    console.log(data.toString()) // 我是谁
})

fs.readFile(str,"utf8",function(err,data){
    if(err){
        throw new Error("读取文件失败")
      
    }
    console.log(data)// 我是谁
})
*/

// readFileSync同步读取文件内容
let data = fs.readFileSync(str)
console.log(data)// <Buffer e6 88 91 e6 98 af e8 b0 81>
console.log(data.toString())//  我是谁

let data1 = fs.readFileSync(str,"utf-8")
console.log(data1)// 我是谁