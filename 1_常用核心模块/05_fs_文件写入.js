let fs = require("fs")
let path = require("path")

let str = path.join(__dirname,"zhangsan.txt")


/*
//writeFile 异步 写入内容
fs.writeFile(str,"25456","utf-8",function(err){
    if(err){
        throw new Error("写入数据失败")
    }else{[
        console.log("写入成功")
    ]}
})

//writeFile 异步 写入Buffer
let buf = Buffer.from("www.baidu.com")

fs.writeFile(str,buf,"utf-8",function(err){
    if(err){
        throw new Error("写入数据失败")
    }else{[
        console.log("写入成功")
    ]}
})
*/

// writeFileSync  同步 写入内容
// let res = fs.writeFileSync(str,"那你不要这样","utf-8")
// console.log(res) //undefined(成功)失败报错


// writeFileSync  同步写入Buffer
let buf = Buffer.from("www.baidu.com")
let res = fs.writeFileSync("./a/b.txt",buf,"utf-8")
console.log(res) // undefined(成功)  失败报错