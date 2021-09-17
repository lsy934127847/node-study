
let vm  =require("vm")

let name = "lsy"
let str = "console.log(name)"    // name is not defined
// vm.runInThisContext(str)




 global.name = "lsy"
let str1 = "console.log(name)"    // lsy                  runInThisContext 不能访问全局声明的变量 可以访问global上的属性
vm.runInThisContext(str1)


let str3 = "console.log(name)"   // name is not defined   runInNewContext global上和全局声明的变量都不能访问
//vm.runInNewContext(str3)



let str4 = `(function(){
    console.log("23")
})()`

vm.runInThisContext(str4)