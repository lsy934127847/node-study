let fs = require("fs")

let path = require("path")

let str = path.join(__dirname,"data.txt")


// 创建一个写入流  highWaterMark:每次读取的数据的字节
let  writeStrem = fs.createWriteStream(str,{encoding:"utf-8",highWaterMark:3})

// 监听写入流事件监听

writeStrem.on("open",function(){
    console.log("表示数据流和文件建立关系成功")
  })
  writeStrem.on("error",function(){
      console.log("表示数据流和文件建立关系失败")
  })
  
  writeStrem.on("close",function(){
      console.log("表示数据流和文件断开连接，并且数据已经读取完毕了")
  })

  let data = "你到底是为了什么要这样对我，是为了钱吗，还是为了权力，或者是为了美色"

  let index = 0

  let timer = setInterval(function(){
      let ch = data[index]
      index++
      writeStrem.write(ch)
      console.log("本次写入了",ch)
      if(index == data.length){
          clearInterval(timer)
        //   写入完成之后需要手动断开连接， 执行以下代码才会执行事件监听中的 close
          writeStrem.end()
      }
  },1000)