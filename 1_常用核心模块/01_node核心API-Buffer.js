let aMoudule = require("./00.js")
// console.log(aMoudule)
// console.log(aMoudule.sum(1,2))
// let buf = Buffer.alloc(10,"我是谁");

// let buf = Buffer.from([97,98,99])
// console.log(buf);
// 将数据转换为对应的ASC 码
// console.dir(buf.toString());

// let buf = Buffer.alloc(5)
// console.log(buf)
// buf.write("abcdefg",2,2)
// console.log(buf)
// console.log(buf.toString());

// let buf1 = Buffer.from("abcdefg")
// 截取数据  包含开始，不包括结束[2,4)
// let buf2 = buf1.slice(2,4)
// console.log(buf2.toString());


// 检查是否支持某种编码格式
// let res = Buffer.isEncoding("gbk")
// console.log(res)

// 检查是否是Buffer 类型对象
// let obj = {}
// let obj1 = Buffer.alloc(5)
// let res = Buffer.isBuffer(obj1)
// console.log(res)

// let buf = Buffer.from("abcdefg")
// let res = Buffer.byteLength(buf)
// console.log(res)
// console.log(buf.length)


// 数据拼接
let buf1 = Buffer.from("abcdefg")
let buf2 = Buffer.from("123456")
let buf3 = Buffer.from("123456")
let res =  Buffer.concat([buf1,buf2,buf3])
console.dir(res.toString())
