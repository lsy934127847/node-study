let fs = require("fs")

let path = require("path")

// 拼接要创建的文件夹的路径
let str = path.join(__dirname,"efg")


// 创建文件夹
// fs.mkdir(str, function(err){
//     if(err){
//         throw new Error("创建目录失败")
//     }else{
//         console.log("创建目录成功")
//     }
// })


//  删除文件夹
// fs.rmdir(str,function(err){
//     if(err){
//         throw new Error("删除目录失败,可能为要删除的文件夹不存在，请核实")
//     }else{
//         console.log("删除目录成功")
//     }
// })


// 读取文件夹
fs.readdir(__dirname,function(err,files){
    if(err){
                throw new Error("读取目录失败")
            }else{
                console.log(files) // 拿到了读取目录下的所有文件夹和文件
                /*
                [
  '00.js',
  '01_node核心API-Buffer.js',
  '02_node核心API-path.js',
  '03_fs文件模块_查看文件状态.js',
  '04_fs_读取文件.js',
  '05_fs_文件写入.js',
  '06_fs_文件追加.js',
  '07_fs_分批读取.js',
  '08_fs_分批写入.js',
  '09_fs_拷贝文件.js',
  '10_pipe_拷贝文件.js',
  '11_目录操作.js',
  'abc',
  'data.txt',
  'Node_js简介.html',
  'test.txt',
  'zhangsan.txt',
  '使用npm安装本地包'
]
                */
               files.forEach(function(obj){
                //    console.log(obj)
                let filePath = path.join(__dirname,obj)
                // console.log(filePath)
                let stats = fs.statSync(filePath)

                // 判断是否是文件
                if(stats.isFile()){
                    console.log(filePath,"是文件")
                    // 判断是否是文件夹
                }else if(stats.isDirectory()){
                    console.log(filePath,"是文件夹")
                }
               })
            }
})