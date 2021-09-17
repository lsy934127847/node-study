
// 实现node模块化的思路
// 根据require 函数 传递的路径 找到指定文件 
// 将文件中的内容用fs模块 读取出来 是一个buffer 转成字符串
// 将读取出来的文件内容用字符串函数包裹 并定义一些形参
// 使用vm 模块runInThisContext方法将这个字符串函数转 化为真正的js代码 
// 调用这个函数,并指定this指向   fn.call





let path = require("path")
let fs = require("fs")
let vm = require("vm")
function myRequire(filePath){

    // 将路径转化为绝对路径
    console.log("filePath",filePath)
   let absPath = path.join(__dirname,filePath)
          console.log(absPath)



   let cachedModule = myModule._cache[absPath]
   if(cachedModule){
       return cachedModule.exports
   }

   let module = new myModule(absPath)
   myModule._cache[absPath] = module


   tryModuleLoad(module)


   return module.exports

}

class myModule{
    constructor(id){
        this.id = id 
        this.exports = {}
    }
}

myModule._cache = {}
myModule._extensions = {
    ".js":function(module){
               let script = fs.readFileSync(module.id)
               // 将js代码包裹到函数中

               let strScript = myModule.wrapper[0] + script + myModule.wrapper[1]
              console.log("strScript",strScript)
              /*
              (function (exports,require,module,__filename,dirname) {let name = "lsy"
                    exports.name = name
                    });
              */
               let isScript = vm.runInThisContext(strScript)

               isScript.call(module.exports,module.exports)
    },
    ".json":function(module){
         let json = fs.readFileSync(module.id)
         let obj = JSON.parse(json)
         module.exports = obj
    }
}
myModule.wrapper = [
    '(function (exports,require,module,__filename,__dirname) {',
    '\n});'
]


function tryModuleLoad(module){

    // 去除模块后缀
    let extName = path.extname(module.id)
    myModule._extensions[extName](module)
}




let a = myRequire("./3_模块a.js")
console.log("a",a)