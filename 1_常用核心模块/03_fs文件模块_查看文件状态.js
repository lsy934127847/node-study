let fs = require("fs")
/*
console.log("1")
// __filename  拿到当前文件路径
// __dirname  拿到当前文件 所属 的文件夹路径
//  stat 异步获取文件的相关信息
fs.stat(__filename,function(err,stats){
    console.log("3")
    // console.log(err)
    console.log(stats)
//     Stats {
//         dev: 541817861,
//         mode: 33206,
//         nlink: 1,
//         uid: 0,
//         gid: 0,
//         rdev: 0,
//         blksize: 4096,
//         ino: 281474976978043,
//         size: 176,
//         blocks: 0,
//         atimeMs: 1603610786428.7332,
//         mtimeMs: 1603610786428.7332,
//         ctimeMs: 1603610786428.7332,
//         birthtimeMs: 1603610324717.843,
//         atime: 2020-10-25T07:26:26.429Z,
//         mtime: 2020-10-25T07:26:26.429Z,     文件中内容发生变化，文件的修改时间
//         ctime: 2020-10-25T07:26:26.429Z,
//         birthtime: 2020-10-25T07:18:44.718Z  当前文件的创建日期
// }
// 判断当前路径是否是文件
if(stats.isFile()){
    console.log("当前路径对应的是一个文件")
}else if(stats.isDirectory()){
    console.log("当前路径对应的是一个文件夹")
}
})
// console.log("2")
*/

// 同步获取文件的相关信息
let stats = fs.statSync(__filename)
console.log(stats)