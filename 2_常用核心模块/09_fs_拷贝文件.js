let fs = require("fs")

let path = require("path")

// 拼接读取的路径
let readPath = path.join(__dirname,"data.txt")
// 拼接写入的路径
let writePath = path.join(__dirname,"test.txt")
// 创建一个读取流  highWaterMark:每次读取的数据的字节
let  readStrem = fs.createReadStream(readPath,{encoding:"utf-8",highWaterMark:3})
// 创建一个写入流  highWaterMark:每次写入的数据的字节
let  writeStrem = fs.createWriteStream(writePath,{encoding:"utf-8",highWaterMark:3})


// 添加读取流事件监听
readStrem.on("open",function(){
    console.log("表示数据流和文件建立关系成功")
  })
  readStrem.on("error",function(){
      console.log("表示数据流和文件建立关系失败")
  })
  readStrem.on("data",function(data){
    //   console.log("表示 通过读取流从文件读取到了数据",data)
      writeStrem.write(data)
  })
  readStrem.on("close",function(){
      console.log("表示数据读取流和文件断开连接，并且数据已经读取完毕了")
      writeStrem.end()
  })

  // 监听写入流事件监听

writeStrem.on("open",function(){
    console.log("表示数据流和文件建立关系成功")
  })
  writeStrem.on("error",function(){
      console.log("表示数据流和文件建立关系失败")
  })
  
  writeStrem.on("close",function(){
      console.log("表示数据写入流和文件断开连接，并且数据已经写入完毕了")
  })