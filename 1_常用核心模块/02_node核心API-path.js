// 导入node内置模块path
let path = require("path")


//  获取到传入路径的最后一个组成部分  ,
// let res = path.basename("./a/b/c/index.html")
// console.log(res) // index.html


// 获取到传入路径的最后一个组成部分,且把 ".html" 过滤掉
// let res = path.basename("./a/b/c/index.html",".html")
// console.log(res) // index

// 获取到传入路径 除最后一部分 之外的组成部分
// let res = path.dirname("./a/b/c/index.html")
// console.log(res)// ./a/b/c


// 获取到传入路径的 最后一部分 的 扩展名
// let res = path.extname("./a/b/c/index.html")
// console.log(res)// .html


// 用于判断是否是绝对路径 
// let res = path.isAbsolute("./a/b/c/index.html") // false
let res = path.isAbsolute("a/b/c/index.html")// false
let res = path.isAbsolute("/a/b/c/index.html")// true
console.log(res)

// sep 用以获取当前操作系统路径的分隔符  linux 左斜杠 /  windows 右斜杠 \
// let res = path.sep
// console.log(res)  // \


// delimiter 用以获取当前操作系统环境变量的分隔符的  linux ：  windows ；
// let res = path.delimiter
// console.log(res)  // ;


// parse 用于将路径转换为对象
// let res = path.parse("./a/b/c/index.html")
// console.log(res) 
// {
//     root: '', 根路径
//     dir: './a/b/c', 除最后一个部分之外的组成部分
//     base: 'index.html', 最后一个部分
//     ext: '.html',  最后一个部分的扩展名
//     name: 'index' 最后一个部分，过滤掉了扩展名
//   }

// format 用于将对象转换为路径
// let obj = {
//     root: '', 
//     dir: './a/b/c', 
//     base: 'index.html', 
//     ext: '.html', 
//     name: 'index' 
//   }
// let res = path.format(obj)
// console.log(res) 

//join 用于拼接路径  参数中没有加/ 结果会自动加斜杠
// let str = path.join("/a/b","c")
// console.log(str) //  /a/b/c

// 参数中有 ../  结果 会 返回  根据拼接好 的路径  的上一级路径
// let str = path.join("/a/b","/c","d","../")
// console.log(str) //  /a/b/c/
// let str = path.join("/a/b","/c","d","../../")
// console.log(str) //  /a/b/

//normalize 用于规范化路径 
// let res =  path.normalize("./a////b/c////index.html")
// console.log(res) // a\b\c\index.html  开头不加/和加./都表示相对路径

// relative 用于计算相对路径 根据第一个参数的路径计算出第二参数的相对路径
// let res = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// console.log(res) // ..\..\impl\bbb

// resolve 用于解析路径 把index.html也看成文件夹,在解析拼接第二个参数
// let res =  path.resolve("/a/b/c/index.html","./aaa")
// console.log(res) // D:\a\b\c\index.html\aaa
// let res =  path.resolve("/a/b/c/index.html","../aaa")
// console.log(res) // D:\a\b\c\aaa
// let res =  path.resolve("/a/b/c/index.html","/aaa")
// console.log(res) // D:\aaa
