
console.log(this)    // {}

console.log(global)  // 相当于window
console.log(Object.keys(global))
/*
  [
  'global',
  'clearInterval',
  'clearTimeout',
  'setInterval',
  'setTimeout',
  'queueMicrotask',
  'clearImmediate',
  'setImmediate'
]
*/

console.log(__dirname)    // D:\node架构\node-zhufeng  当前文件所在的文件夹位置 绝对路径

console.log(__filename)   // D:\node架构\node-zhufeng\7_常用api.js    当前文件所在的位置 绝对路径

console.log(Object.keys(process))  // ["platform","nextTick","cwd","env","argv",...]

console.log(process.platform)   // win32     // darwin

console.log(process.cwd())    // 获取当前执行命令时的路径  在

console.log(process.env)     // 读取环境变量   window  使用set设置 mac 通过export设置     第三方库 cross-env


console.log(process.env.NODE_ENV) 

/*
   set NODE_ENV=dev && node ./7_常用api.js
*/

console.log(process.argv)   // 执行命令携带的参数
/*
// 默认参数
    [
    'C:\\Program Files\\nodejs\\node.exe',
    'D:\\node架构\\node-zhufeng\\7_常用api.js'
    ]
 */

 /*
 node 7_常用api.js --port 3000 --person lashiyong

 [
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\node架构\\node-zhufeng\\7_常用api.js',
  '--port',
  '3000',
  '--person',
  'lashiyong'
]
 */


 // node --help  // 命令行指令

 // 命令行管家 commander   npm install commander

