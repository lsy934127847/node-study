// querystring 模块 对query属性 执行更加强大的解析
const querystring = require("querystring")

// + querystring.stringify()
// ==>作用: 把对象变成查询字符串
// ==>语法:querystring.stringify(要转换的对象[,自定义分隔符,自定义键和值之间的分隔符])
//                 -->自定义分隔符默认是:&
//                 -->自定义键和值之间的分隔符默认是:=
// let res = querystring.stringify({
//     name:"qf",
//     course:["html5","java","python"]
// },",")
// console.log(res) // name=qf,course=html5,course=java,course=python


// + querystring.parse()
//             ==>querystring.stringify()的逆方法,也可以接收后面的两个参数
//             ==>语法:querystring.parse('查询字符串'[,自定义分隔符,自定义键和值之间的分隔符])
//             ==>返回值:对象
// let res = querystring.parse("name=qf,course=html5,course=java,course=python",",")
// console.log(res)


// querystring.escape()把字符串进行url编码

console.log(querystring.escape('我是谁'));// %E6%88%91%E6%98%AF%E8%B0%81

// querystring.unescape() 把url编码转化为字符串
console.log(querystring.unescape("%E6%88%91%E6%98%AF%E8%B0%81"))//我是谁