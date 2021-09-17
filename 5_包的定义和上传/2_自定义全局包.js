


// 自定义指令 

/*
{
  "name": "lsy666",                                                     包名 是唯一的
  "version": "1.0.0",
  "description": "",
  "main": "index.js",                                                      入口文件 通过require 引入时 自动找的入口文件 没有指定 默认找找index.js  如果没有index.js也没有指定main
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"                  通过 npm run test 简化指令    start 和 test 可省略run
  },
  bin:{
      "lsy" : "main.js"                                                           自定义指令的入口文件 
  }
  "keywords": [],                                                     搜索关键字
  "author": "",
  "license": "ISC"
}

// 包名 
*/



// npm link 将本地包链接到全局                相当于 -g