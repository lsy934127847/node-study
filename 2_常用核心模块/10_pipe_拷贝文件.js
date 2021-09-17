let fs = require("fs")

let path = require("path")

// 拼接读取的路径
let readPath = path.join(__dirname,"logo.jpg")

var pathObj = path.parse(readPath)
console.log(pathObj)
// 拼接写入的路径
var time = new Date().getTime()
let writePath = path.join(__dirname,"public/abc/",pathObj.name+'_'+time+'.jpg')  // 拷贝文件，需要指定文件名
console.log(writePath)
// 创建一个读取流  highWaterMark:每次读取的数据的字节
// let  readStrem = fs.createReadStream(readPath,{encoding:"utf-8",highWaterMark:3})
let  readStrem = fs.createReadStream(readPath)

// 创建一个写入流  highWaterMark:每次写入的数据的字节
// let  writeStrem = fs.createWriteStream(writePath,{encoding:"utf-8",highWaterMark:3})
let  writeStrem = fs.createWriteStream(writePath)
// 利用读取流的管道方法来快速实现文件拷贝
 readStrem.pipe(writeStrem)

