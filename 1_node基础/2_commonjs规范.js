
// 在node中使用commonjs 规范 来定义和使用模块 通过 exports 或者  module.exports 导出模块  require 导入模块


/*
 在node中可以不指定文件的类型 会依次找.js .json .node 文件 找不到报错
   
 */
let bModule = require("./2_模块b")  // 找到json文件  不用导出

console.log("bModule",bModule)    //{ name: 'lsy' }
/*
方式一
let name = "lsy"
function fn(){
    console.log("我是FN")
}
exports.name = name
exports.fn = fn

let Amodule = require("./2_模块a")
{ name: 'lsy', fn: [Function: fn] }
*/

/*
方式二
let name = "lsy"
function fn(){
    console.log("我是FN")
}
module.exports.name = name
module.exports.fn = fn

let Amodule = require("./2_模块a")
{ name: 'lsy', fn: [Function: fn] }


*/


/*
方式三 
let name = "lsy"
function fn(){
    console.log("我是FN")
}
global.name = name
global.fn = fn
*/

/*
exports 和 module.exports 的区别

exports 不能直接赋值 exports.name  = name     let Amodule = require("./2_模块a") // {}

module.exports 可以直接赋值 module.exports.name = name    let Amodule = require("./2_模块a") // "lsy"
*/



let Amodule = require("./2_模块a")

console.log(Amodule)     




