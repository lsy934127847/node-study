

// 1.包 是一个文件夹 包含一个package.json 文件 和一个入口文件


/*
{
  "name": "lsy666",                                                     包名 是唯一的
  "version": "1.0.0",
  "description": "",
  "main": "index.js",                                                      入口文件 通过require 引入时 自动找的入口文件 没有指定 默认找找index.js  如果没有index.js也没有指定main
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"                  通过 npm run test 简化指令    start 和 test 可省略run
  },
  "keywords": [],                                                     搜索关键字
  "author": "",
  "license": "ISC"
}

// 包名 
*/

// 2. 上传到npm官网
//    a.注册npm账号 注意验证邮箱时可能会失败 赋值网址到pc浏览器中验证
//    b.在包根目录下执行 npm addUser   输入注册时的用户名和密码和邮箱
//    c. npm publish                上传显示 + lsy666@1.0.0  则成功


// 3. npm 搜索 lsy666 能否搜索到
//    下载npm install lsy666
//   引入  
let { say } = require("lsy666")
say()



// 4. 指令 node 1.js name=lsy age=25
//    获取参数
      console.log(   process.argv)
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\node架构\\node-study\\node-study\\5_包的定义和上传\\1_自定义本地包.js',
  'name=lsy',
  'age=25'
]
*/