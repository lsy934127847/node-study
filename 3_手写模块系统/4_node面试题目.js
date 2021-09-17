
// 1. node中的this为什么是空对象 
// 模块中的代码会被包裹为一个函数,通过call修改了this指向 this最终指向module.exports 即require函数返回的对象
/*
let fn =  (function (exports,require,module,__filename,__dirname) {let name = "lsy"
                   console.log(this)
                    });

  fn.call(module.exports,module.exports,module,filename,dirname)

*/
exports.name = "lsy"
console.log(this)   // { name: 'lsy' }

// 2. global上没有exports require __filename  __dirname  属性 为什么却可以使用
// 因为在执行fn的时候传递给了它
console.log(global.exports)    //undefined
console.log(global.require)     //undefined
console.log(global.__filename)    //undefined
console.log(global.__dirname)      //undefined
console.log(Object.keys(global))





// 3. 为什么不可以直接使用exports = lsy 赋值  module.exports  = lsy 可以赋值

// 因为require函数返回值是module.exports = {} 初始是空对象
// 包裹代码的函数的形参是 exports  执行时传递module.exports
//    module.exports 指向对象的内容并没有改变 所以最终返回空对象
/*
/*
let fn =  (function (exports,require,module,__filename,__dirname) {let name = "lsy"
                   exports = "lsy"
                    });

  fn.call(module.exports,module.exports,module,filename,dirname)

*/

// 而使用  module.exports 赋值 改变了module.exports指向  原来是空对象 现在是一个字符串
/*
let fn =  (function (exports,require,module,__filename,__dirname) {let name = "lsy"
                   module.exports = "lsy"
                    });

  fn.call(module.exports,module.exports,module,filename,dirname)

*/


// 所以 module.exports = "lsy" 这种写法一个模块只能用一个 用多个按照顺序获取到的是最后一个的

// module.exports.xxx = xxx   exports.xxx = xxx 相当于往对象中添加属性