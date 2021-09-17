const fs = require('fs');




console.log("代码开始")

fs.readFile('1.txt', 'utf-8', function(err,data) {
    console.log("异步读取文件的内容为",data) 
    setImmediate( () =>{
        console.log('0秒setImmediate1')
        process.nextTick( () =>{
            console.log("nextTick0秒setImmediate1")
        })
    })
    setTimeout(() => {
        console.log('0秒settimeout')
    })
    setImmediate( () =>{
        console.log('0秒setImmediate2')
    })
})

let res = fs.readFileSync('1.txt', 'utf-8')
console.log("同步读取文件的内容为",res)

setImmediate( () =>{
    console.log('0秒setImmediate1')
    process.nextTick( () =>{
        console.log("nextTick0秒setImmediate1")
    })
})
setTimeout(() => {
    console.log('0秒settimeout')
})
setImmediate( () =>{
    console.log('0秒setImmediate2')
})

process.nextTick( () =>{
    console.log("nextTick")
})

console.log("代码结束")
setInterval


/*
  同步代码
  微任务

  times                                      setTimeout/setInterval  执行满足条件的
  pedding callbacks
  idle,prepare
  poll                                        满足条件的i/o回调 具体看文件的大小
  check                                      setImmediate             不能设置时间,
  close callbacks

*/


for(let i = 0 ; i < 20000 ; i++){

}

setTimeout(() => {                                 // 在node中setTimeout被强制改为1ms 如果>=1ms 会立马执行 如果小于1ms 则跳过
    console.log('0秒settimeout')                   // 所以两者的执行时间是不确定的,受同步代码执行时间的影响
})
setImmediate( () =>{
    console.log('0秒setImmediate2')
})


// 看如下代码
// 执行流程 同步->nextTick-> timer空 ->poll空 ->  check (无setImmediate)
// 在poll等待 符合条件的timer或者i/o 一定时机 i/o回调执行 -> 执行check (setImmediate) 所以setImmediate肯定会比setTimeout优先执行

fs.readFile('1.txt', 'utf-8', function(err,data) {
    console.log("异步读取文件的内容为",data) 
    setImmediate( () =>{
        console.log('0秒setImmediate1')
    })
    setTimeout(() => {
        console.log('0秒settimeout')
    })
    setImmediate( () =>{
        console.log('0秒setImmediate2')
    })
})


// 看如下代码
Promise.resolve().then( data =>{
    console.log("Promise.resolve1")
})
process.nextTick( () =>{
    console.log("process.nextTick1")
})
process.nextTick( () =>{
    console.log("process.nextTick2")
})
Promise.resolve().then( data =>{
    console.log("Promise.resolve2")
})
/*
process.nextTick1
process.nextTick2
Promise.resolve1
Promise.resolve2
先清空 nextTick 队列在清空微任务队列
 */



/*
   将代码分成以下部分

          1.主执行栈队列(同步代码)  。
            nextTick 队列
            微任务promise 队列
          2.timer队列： setTimeout/setInterval
          3. poll队列   i/o操作
          4.check队列： setImmediate
    注意点 :
          node10及之前和node11之后的“微任务队列清空条件”不同：
            1）node10及之前的版本,队列切换时才会清空微任务队列
            2）node11及之后的版本，每执行一个宏任务就清空微任务队列（同浏览器）


    总体执行流程

    先执行同步代码 清空nextTick队列 清空微任务队列

    执行满足条件的time队列的回调 注意有个1ms的问题
    执行poll队列  满足条件的i/o回调 具体看文件的大小,如果后续check对列中没有setImmediate 会在此等待符合条件的i/o和timer
    执行checkout队列  setImmediate

    关于setTimeout和i/o操作谁先执行 看具体文件的大小
    setImmediate不能设置时间  
    setImmediate 和 setTimeout 不确定 受同步代码执行时间的影响
 */