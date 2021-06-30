let fs = require("fs")
let path = require("path")

// 找到读取的文件
let str = path.join(__dirname,"zhangsan.txt")

// 创建一个读取流  highWaterMark:每次读取的数据的字节
let  readStrem = fs.createReadStream(str,{encoding:"utf-8",highWaterMark:3})

// 添加事件监听
readStrem.on("open",function(){
  console.log("表示数据流和文件建立关系成功")
})
readStrem.on("error",function(){
    console.log("表示数据流和文件建立关系失败")
})
readStrem.on("data",function(data){
    console.log("表示 通过读取流从文件读取到了数据",data)
})
readStrem.on("close",function(){
    console.log("表示数据流和文件断开连接，并且数据已经读取完毕了")
})